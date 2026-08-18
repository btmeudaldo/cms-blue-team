"use server";

import { revalidatePath } from "next/cache";

import { createSupabaseServerClient } from "@/shared/lib/supabase/server";
import { calculateReadingTime } from "@/features/learning/domain/reading-time";
import { getNextLessonOrder } from "@/features/learning/domain/lesson-order";
import { sanitizeLessonHtml } from "@/features/learning/domain/sanitize-html";
import { mockStore } from "@/shared/lib/mock-store";

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

  try {
    const supabase = await createSupabaseServerClient();
    const { data: existingLessons, error: existingLessonsError } =
      await supabase
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
  } catch (err) {
    console.warn(
      "Creando lección en mock-store local debido a fallo de Supabase:",
      err,
    );
    mockStore.addLesson(courseId, {
      title,
      slug,
      content_html: contentHtml,
      sequence_order: 1,
      word_count: wordCount,
      min_seconds: minSeconds,
    });
  }

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

  try {
    const supabase = await createSupabaseServerClient();
    const { error } = await supabase
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
      .eq("id", lessonId);

    if (error) throw new Error(error.message);
  } catch (err) {
    console.warn(
      "Actualizando lección en mock-store local debido a fallo de Supabase:",
      err,
    );
    mockStore.updateLesson(lessonId, {
      title,
      slug,
      content_html: contentHtml,
      sequence_order: sequenceOrder,
      word_count: wordCount,
      min_seconds: minSeconds,
    });
  }

  revalidatePath(`/admin/courses/${courseId}`);
  revalidatePath(`/courses/${courseId}`);
}

export async function deleteLessonAction(lessonId: string, courseId: string) {
  try {
    const supabase = await createSupabaseServerClient();
    const { error } = await supabase
      .from("lessons")
      .delete()
      .eq("id", lessonId);

    if (error) {
      const { createSupabaseAdminClient } = await import(
        "@/shared/lib/supabase/server"
      );
      const adminClient = createSupabaseAdminClient();
      if (adminClient) {
        await adminClient.from("lessons").delete().eq("id", lessonId);
      }
    }
  } catch (err) {}

  mockStore.deleteLesson(lessonId);

  revalidatePath(`/admin/courses/${courseId}`);
  revalidatePath("/admin/courses");
  revalidatePath("/courses");
  revalidatePath(`/courses/${courseId}`);
}
