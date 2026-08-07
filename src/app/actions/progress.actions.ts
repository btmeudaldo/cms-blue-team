"use server";

import { revalidatePath } from "next/cache";

import { createSupabaseServerClient } from "@/shared/lib/supabase/server";
import { getResilientUser } from "@/shared/lib/supabase/resilient";
import { mockStore } from "@/shared/lib/mock-store";

export async function startLessonAction(lessonId: string) {
  let userId = "student-123";
  try {
    const { user } = await getResilientUser();
    if (user?.id) {
      userId = user.id;
      const supabase = await createSupabaseServerClient();
      const { data, error } = await supabase.rpc("start_lesson", {
        p_lesson_id: lessonId,
      });
      if (!error && data) return data;
    }
  } catch (err) {}

  return mockStore.startLesson(userId, lessonId);
}

export async function completeLessonAction(
  lessonId: string,
  pathToRevalidate: string,
) {
  let userId = "student-123";
  try {
    const { user } = await getResilientUser();
    if (user?.id) {
      userId = user.id;
      const supabase = await createSupabaseServerClient();
      const { data: result, error } = await supabase.rpc("complete_lesson", {
        p_lesson_id: lessonId,
      });

      if (!error && result) {
        revalidatePath(pathToRevalidate);
        revalidatePath("/courses");
        revalidatePath("/admin/progress");
        return result;
      }
    }
  } catch (err) {}

  const result = mockStore.completeLesson(userId, lessonId);
  revalidatePath(pathToRevalidate);
  revalidatePath("/courses");
  revalidatePath("/admin/progress");
  return result;
}

async function callProgressRpc(
  functionName: "pause_lesson" | "resume_lesson" | "heartbeat_lesson",
  lessonId: string,
) {
  let userId = "student-123";
  try {
    const { user } = await getResilientUser();
    if (user?.id) {
      userId = user.id;
      const supabase = await createSupabaseServerClient();
      const { error } = await supabase.rpc(functionName, {
        p_lesson_id: lessonId,
      });
      if (!error) return;
    }
  } catch (err) {}

  if (functionName === "heartbeat_lesson") {
    mockStore.heartbeatLesson(userId, lessonId);
  }
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
