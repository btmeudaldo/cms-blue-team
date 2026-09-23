"use server";
import { revalidatePath } from "next/cache";
import { requireVerifiedSession } from "@/shared/lib/supabase/session";
import type { ProgressResult } from "@/features/learning/domain/lesson-progress";

async function callProgressRpc(
  functionName:
    | "start_lesson"
    | "complete_lesson"
    | "pause_lesson"
    | "resume_lesson"
    | "heartbeat_lesson",
  lessonId: string,
): Promise<ProgressResult> {
  try {
    const { client, user, profile } = await requireVerifiedSession();
    let { data, error } = await client.rpc(functionName, {
      p_lesson_id: lessonId,
    });

    // Auto-enroll staff/admin previewing a lesson if enrollment is missing
    if (
      error &&
      (profile?.role === "admin" || profile?.role === "instructor")
    ) {
      try {
        const { data: lesson } = await client
          .from("lessons")
          .select("course_id")
          .eq("id", lessonId)
          .maybeSingle();
        if (lesson?.course_id) {
          await client.from("course_enrollments").upsert(
            { user_id: user.id, course_id: lesson.course_id },
            { onConflict: "user_id,course_id", ignoreDuplicates: true },
          );
          const retry = await client.rpc(functionName, {
            p_lesson_id: lessonId,
          });
          data = retry.data;
          error = retry.error;
        }
      } catch {}
    }
    if (
      error ||
      !data ||
      data.user_id !== user.id ||
      data.lesson_id !== lessonId ||
      !Number.isInteger(data.active_seconds) ||
      data.active_seconds < 0 ||
      typeof data.is_completed !== "boolean" ||
      typeof data.is_active !== "boolean" ||
      (functionName === "complete_lesson" && !data.is_completed)
    ) {
      return {
        error:
          "No se pudo confirmar el progreso. Comprueba tu conexión y reintenta; el tiempo mínimo debe estar registrado en el servidor.",
      };
    }
    return { success: true, progress: data };
  } catch {
    return {
      error:
        "No se pudo confirmar el progreso. Comprueba tu sesión y conexión.",
    };
  }
}
export async function startLessonAction(lessonId: string) {
  return callProgressRpc("start_lesson", lessonId);
}
export async function completeLessonAction(
  lessonId: string,
  _pathToRevalidate: string,
): Promise<ProgressResult> {
  const result = await callProgressRpc("complete_lesson", lessonId);
  if ("success" in result) {
    revalidatePath("/courses", "layout");
    revalidatePath("/admin/progress");
  }
  return result;
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
