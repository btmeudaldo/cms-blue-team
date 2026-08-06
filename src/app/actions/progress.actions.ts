"use server";

import { revalidatePath } from "next/cache";

import { createSupabaseServerClient } from "@/shared/lib/supabase/server";

export async function startLessonAction(lessonId: string) {
  const supabase = await createSupabaseServerClient();
  const { data: auth, error: authError } = await supabase.auth.getUser();
  if (authError || !auth.user) throw new Error("Unauthenticated");
  const { data, error } = await supabase.rpc("start_lesson", {
    p_lesson_id: lessonId,
  });
  if (error) throw new Error(error.message);
  return data;
}

export async function completeLessonAction(
  lessonId: string,
  pathToRevalidate: string,
) {
  const supabase = await createSupabaseServerClient();
  const { data: auth, error: authError } = await supabase.auth.getUser();
  if (authError || !auth.user) throw new Error("Unauthenticated");
  const { data: result, error } = await supabase.rpc("complete_lesson", {
    p_lesson_id: lessonId,
  });
  if (error) throw new Error(error.message);

  revalidatePath(pathToRevalidate);
  revalidatePath("/courses");
  revalidatePath("/admin/progress");

  return result;
}

async function callProgressRpc(
  functionName: "pause_lesson" | "resume_lesson" | "heartbeat_lesson",
  lessonId: string,
) {
  const supabase = await createSupabaseServerClient();
  const { data: auth, error: authError } = await supabase.auth.getUser();
  if (authError || !auth.user) throw new Error("Unauthenticated");

  const { error } = await supabase.rpc(functionName, { p_lesson_id: lessonId });
  if (error) throw new Error(error.message);
}

export async function pauseLessonAction(lessonId: string) {
  return callProgressRpc("pause_lesson", lessonId);
}

export async function resumeLessonAction(lessonId: string) {
  return callProgressRpc("resume_lesson", lessonId);
}

export async function heartbeatLessonAction(lessonId: string) {
  return callProgressRpc("heartbeat_lesson", lessonId);
}
