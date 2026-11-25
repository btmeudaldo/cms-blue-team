import { safeRevalidatePath } from "@/shared/lib/client-navigation";
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

    // Auto-enroll staff/admin/superadmin previewing a lesson only when access/enrollment was missing
    const isStaffRole =
      profile?.role === "superadmin" ||
      profile?.role === "admin" ||
      profile?.role === "instructor";
    const isMissingEnrollment =
      error?.code === "42501" ||
      /not available/i.test(error?.message ?? "");

    if (error && isStaffRole && isMissingEnrollment) {
      try {
        const { createSupabaseAdminClient } = await import(
          "@/shared/lib/supabase/admin"
        );
        const adminClient = createSupabaseAdminClient();
        const { data: lesson } = await adminClient
          .from("lessons")
          .select("course_id")
          .eq("id", lessonId)
          .maybeSingle();
        if (lesson?.course_id) {
          await adminClient.from("course_enrollments").upsert(
            { user_id: user.id, course_id: lesson.course_id },
            { onConflict: "user_id,course_id", ignoreDuplicates: true },
          );
          const retry = await client.rpc(functionName, {
            p_lesson_id: lessonId,
          });
          data = retry.data;
          error = retry.error;
        }
      } catch { }
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
      const isMinimumTimeError =
        error?.code === "22023" ||
        /minimum active reading time/i.test(error?.message ?? "");
      return {
        error: isMinimumTimeError
          ? "Aún no ha transcurrido el tiempo mínimo de lectura requerido en el servidor para completar la lección."
          : "No se pudo confirmar el progreso. Comprueba tu conexión y reintenta; el tiempo mínimo debe estar registrado en el servidor.",
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
    safeRevalidatePath("/courses", "layout");
    safeRevalidatePath("/admin/progress");
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
