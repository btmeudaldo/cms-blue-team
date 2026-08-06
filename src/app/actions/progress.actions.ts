"use server";

import { revalidatePath } from "next/cache";

import { createSupabaseServerClient } from "@/shared/lib/supabase/server";

async function requireAuthenticatedUser() {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data.user) {
    throw new Error("Unauthenticated");
  }

  return supabase;
}

export async function startLessonAction(lessonId: string) {
  const supabase = await requireAuthenticatedUser();
  const { data, error } = await supabase.rpc("start_lesson", { p_lesson_id: lessonId });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function completeLessonAction(lessonId: string, pathToRevalidate: string) {
  const supabase = await requireAuthenticatedUser();
  const { data, error } = await supabase.rpc("complete_lesson", { p_lesson_id: lessonId });

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath(pathToRevalidate);
  return data;
}
