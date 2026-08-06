"use server";

import { revalidatePath } from "next/cache";

import { createSupabaseServerClient } from "@/shared/lib/supabase/server";
import { calculateReadingTime } from "@/features/learning/domain/reading-time";
import { mockStore } from "@/shared/lib/mock-store";

export async function createLessonAction(courseId: string, formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  const slug = String(formData.get("slug") ?? "").trim().toLowerCase();
  const contentHtml = String(formData.get("contentHtml") ?? "").trim();
  const sequenceOrder = Number(formData.get("sequenceOrder") ?? 1);
  const customMinSeconds = formData.get("minSeconds");

  if (!title || !slug || !contentHtml) {
    throw new Error("Título, slug y contenido son requeridos.");
  }

  const wordCount = contentHtml.split(/\s+/).filter(Boolean).length;
  const calculatedSeconds = calculateReadingTime(contentHtml);
  const minSeconds = customMinSeconds && String(customMinSeconds).trim() !== ""
    ? Math.max(0, Number(customMinSeconds))
    : calculatedSeconds;

  try {
    const supabase = await createSupabaseServerClient();
    await supabase.from("lessons").insert({
      course_id: courseId,
      title,
      slug,
      content_html: contentHtml,
      sequence_order: sequenceOrder,
      word_count: wordCount,
      min_seconds: minSeconds,
    });
  } catch (err) {
    // Offline fallback
  }

  mockStore.addLesson(courseId, {
    title,
    slug,
    content_html: contentHtml,
    sequence_order: sequenceOrder,
    word_count: wordCount,
    min_seconds: minSeconds,
  });

  revalidatePath(`/admin/courses/${courseId}`);
  revalidatePath(`/courses/${courseId}`);
}

export async function updateLessonAction(lessonId: string, courseId: string, formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  const slug = String(formData.get("slug") ?? "").trim().toLowerCase();
  const contentHtml = String(formData.get("contentHtml") ?? "").trim();
  const sequenceOrder = Number(formData.get("sequenceOrder") ?? 1);
  const customMinSeconds = formData.get("minSeconds");

  if (!title || !slug || !contentHtml) {
    throw new Error("Título, slug y contenido son requeridos.");
  }

  const wordCount = contentHtml.split(/\s+/).filter(Boolean).length;
  const calculatedSeconds = calculateReadingTime(contentHtml);
  const minSeconds = customMinSeconds && String(customMinSeconds).trim() !== ""
    ? Math.max(0, Number(customMinSeconds))
    : calculatedSeconds;

  try {
    const supabase = await createSupabaseServerClient();
    await supabase
      .from("lessons")
      .update({
        title,
        slug,
        content_html: contentHtml,
        sequence_order: sequenceOrder,
        word_count: wordCount,
        min_seconds: minSeconds,
      })
      .eq("id", lessonId);
  } catch (err) {
    // Offline fallback
  }

  const course = mockStore.getCourseById(courseId);
  if (course) {
    const lesson = course.lessons.find((l) => l.id === lessonId);
    if (lesson) {
      lesson.title = title;
      lesson.slug = slug;
      lesson.content_html = contentHtml;
      lesson.sequence_order = sequenceOrder;
      lesson.word_count = wordCount;
      lesson.min_seconds = minSeconds;
    }
  }

  revalidatePath(`/admin/courses/${courseId}`);
  revalidatePath(`/courses/${courseId}`);
}

export async function deleteLessonAction(lessonId: string, courseId: string) {
  try {
    const supabase = await createSupabaseServerClient();
    await supabase.from("lessons").delete().eq("id", lessonId);
  } catch (err) {
    // Offline fallback
  }

  const course = mockStore.getCourseById(courseId);
  if (course) {
    const index = course.lessons.findIndex((l) => l.id === lessonId);
    if (index !== -1) course.lessons.splice(index, 1);
  }

  revalidatePath(`/admin/courses/${courseId}`);
  revalidatePath(`/courses/${courseId}`);
}
