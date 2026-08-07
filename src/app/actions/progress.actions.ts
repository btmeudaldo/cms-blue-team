"use server";

import { revalidatePath } from "next/cache";

import { createSupabaseServerClient } from "@/shared/lib/supabase/server";
import { getResilientUser } from "@/shared/lib/supabase/resilient";
import { mockStore } from "@/shared/lib/mock-store";

export async function startLessonAction(lessonId: string) {
  let userId = "student-123";
  let isDemo = true;
  try {
    const session = await getResilientUser();
    const { user } = session;
    isDemo = session.isDemo;
    if (user?.id) {
      userId = user.id;
      if (isDemo) return mockStore.startLesson(userId, lessonId);
      const supabase = await createSupabaseServerClient();
      const { data, error } = await supabase.rpc("start_lesson", {
        p_lesson_id: lessonId,
      });
      if (error) throw new Error(error.message);
      if (data) return data;
      throw new Error("No se pudo iniciar la lección.");
    }
  } catch (err) {
    if (!isDemo) throw err;
    console.warn("[startLessonAction error]", err);
  }

  return mockStore.startLesson(userId, lessonId);
}

export async function completeLessonAction(
  lessonId: string,
  pathToRevalidate: string,
) {
  let userId = "student-123";
  let isDemo = true;
  try {
    const session = await getResilientUser();
    const { user } = session;
    isDemo = session.isDemo;
    if (user?.id) {
      userId = user.id;
      if (isDemo) {
        const result = mockStore.completeLesson(userId, lessonId);
        revalidatePath(pathToRevalidate);
        revalidatePath("/courses");
        revalidatePath("/admin/progress");
        return result;
      }
      const supabase = await createSupabaseServerClient();
      const { data: result, error } = await supabase.rpc("complete_lesson", {
        p_lesson_id: lessonId,
      });

      if (error) {
        // Propagate the server error so the UI can display it to the student
        throw new Error(error.message);
      }

      revalidatePath(pathToRevalidate);
      revalidatePath("/courses");
      revalidatePath("/admin/progress");
      return result || { is_completed: true };
    }
  } catch (err) {
    if (!isDemo) throw err;
    console.warn("[completeLessonAction] No auth session, using mock store");
  }

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
  let isDemo = true;
  try {
    const session = await getResilientUser();
    const { user } = session;
    isDemo = session.isDemo;
    if (user?.id) {
      userId = user.id;
      if (isDemo) {
        if (functionName === "heartbeat_lesson") {
          mockStore.heartbeatLesson(userId, lessonId);
        }
        return;
      }
      const supabase = await createSupabaseServerClient();
      const { error } = await supabase.rpc(functionName, {
        p_lesson_id: lessonId,
      });
      if (error) throw new Error(error.message);
      return;
    }
  } catch (err) {
    if (!isDemo) throw err;
  }

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
