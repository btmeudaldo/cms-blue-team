"use server";

import { revalidatePath } from "next/cache";

import { requireCourseEditor } from "@/features/learning/application/course-authorization";
import { requireVerifiedSession } from "@/shared/lib/supabase/session";
import { calculateReadingTime } from "@/features/learning/domain/reading-time";
import { getNextLessonOrder } from "@/features/learning/domain/lesson-order";
import { sanitizeLessonHtml } from "@/features/learning/domain/sanitize-html";

export async function uploadLessonImageAction(formData: FormData): Promise<string> {
  const session = await requireVerifiedSession();
  if (
    session.profile.role !== "admin" &&
    session.profile.role !== "instructor"
  ) {
    throw new Error("Forbidden");
  }
  const file = formData.get("file");
  if (!(file instanceof File)) {
    throw new Error("No image file was selected.");
  }
  const maxBytes = 5 * 1024 * 1024;
  if (file.size > maxBytes) {
    throw new Error("The image file exceeds the 5 MB limit.");
  }
  const allowed = [
    "image/jpeg",
    "image/png",
    "image/webp",
    "image/gif",
    "image/svg+xml",
  ];
  if (!allowed.includes(file.type)) {
    throw new Error("Unsupported image format. Allowed: PNG, JPG, WEBP, GIF, SVG.");
  }

  const { client, user } = session;
  const buffer = Buffer.from(await file.arrayBuffer());
  const ext = file.type === "image/svg+xml" ? "svg" : file.type.split("/")[1] || "jpg";
  const objectPath = `${user.id}/lessons/${crypto.randomUUID()}.${ext}`;

  const { error } = await client.storage
    .from("course-covers")
    .upload(objectPath, buffer, { contentType: file.type, upsert: false });

  if (error) {
    throw new Error(`Failed to upload image: ${error.message}`);
  }

  return client.storage.from("course-covers").getPublicUrl(objectPath).data.publicUrl;
}

export async function createLessonAction(courseId: string, formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  const slug = String(formData.get("slug") ?? "")
    .trim()
    .toLowerCase();
  const contentHtml = sanitizeLessonHtml(
    String(formData.get("contentHtml") ?? "").trim(),
  );
  const customMinSeconds = formData.get("minSeconds");

  if (!title || !slug || !contentHtml) {
    throw new Error("Título, slug y contenido son requeridos.");
  }

  const wordCount = contentHtml.split(/\s+/).filter(Boolean).length;
  const calculatedSeconds = calculateReadingTime(contentHtml);
  const minSeconds =
    customMinSeconds && String(customMinSeconds).trim() !== ""
      ? Math.max(0, Number(customMinSeconds))
      : calculatedSeconds;

  const { client: supabase } = await requireCourseEditor(courseId);
  const { data: existingLessons, error: existingLessonsError } = await supabase
    .from("lessons")
    .select("lesson_order")
    .eq("course_id", courseId);

  if (existingLessonsError) throw new Error(existingLessonsError.message);

  const sequenceOrder = getNextLessonOrder(
    (existingLessons ?? []).map((lesson) => lesson.lesson_order),
  );

  const { error } = await supabase.from("lessons").insert({
    course_id: courseId,
    title,
    slug,
    content_html: contentHtml,
    lesson_order: sequenceOrder,
    sequence_order: sequenceOrder,
    word_count: wordCount,
    min_seconds: minSeconds,
  });

  if (error) throw new Error(error.message);
  revalidatePath(`/admin/courses/${courseId}`);
  revalidatePath(`/courses/${courseId}`);
}

export async function updateLessonAction(
  lessonId: string,
  courseId: string,
  formData: FormData,
) {
  const title = String(formData.get("title") ?? "").trim();
  const slug = String(formData.get("slug") ?? "")
    .trim()
    .toLowerCase();
  const contentHtml = sanitizeLessonHtml(
    String(formData.get("contentHtml") ?? "").trim(),
  );
  const sequenceOrder = Number(formData.get("sequenceOrder") ?? 1);
  const customMinSeconds = formData.get("minSeconds");

  if (!title || !slug || !contentHtml) {
    throw new Error("Título, slug y contenido son requeridos.");
  }

  const wordCount = contentHtml.split(/\s+/).filter(Boolean).length;
  const calculatedSeconds = calculateReadingTime(contentHtml);
  const minSeconds =
    customMinSeconds && String(customMinSeconds).trim() !== ""
      ? Math.max(0, Number(customMinSeconds))
      : calculatedSeconds;

  const { client: supabase } = await requireCourseEditor(courseId);
  const { data, error } = await supabase
    .from("lessons")
    .update({
      title,
      slug,
      content_html: contentHtml,
      lesson_order: sequenceOrder,
      sequence_order: sequenceOrder,
      word_count: wordCount,
      min_seconds: minSeconds,
    })
    .eq("id", lessonId)
    .eq("course_id", courseId)
    .select("id")
    .single();

  if (error) throw new Error(error.message);
  if (!data) throw new Error("Lección no encontrada o no autorizada.");
  revalidatePath(`/admin/courses/${courseId}`);
  revalidatePath(`/courses/${courseId}`);
}

export async function deleteLessonAction(lessonId: string, courseId: string) {
  const isUuid =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(
      lessonId,
    );

  const { client: supabase } = await requireCourseEditor(courseId);
  let query = supabase.from("lessons").delete().eq("course_id", courseId);
  query = isUuid ? query.eq("id", lessonId) : query.eq("slug", lessonId);
  const { data, error } = await query.select("id").single();
  if (error?.code === "23503") {
    return {
      error:
        "No se puede eliminar porque existen registros académicos que deben conservarse.",
    };
  }
  if (error) throw new Error(error.message);
  if (!data) throw new Error("Lección no encontrada o no autorizada.");

  revalidatePath(`/admin/courses/${courseId}`);
  revalidatePath("/admin/courses");
  revalidatePath("/courses");
  revalidatePath(`/courses/${courseId}`);
}
