"use server";

import { revalidatePath } from "next/cache";

import { createSupabaseServerClient } from "@/shared/lib/supabase/server";
import { mockStore } from "@/shared/lib/mock-store";

export async function startLessonAction(lessonId: string) {
  let userId = "student-123";
  try {
    const supabase = await createSupabaseServerClient();
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Supabase timeout")), 1500)
    );
    const authPromise = supabase.auth.getUser();
    const authRes: any = await Promise.race([authPromise, timeoutPromise]);

    if (authRes?.data?.user) {
      userId = authRes.data.user.id;
      const rpcPromise = supabase.rpc("start_lesson", { p_lesson_id: lessonId });
      await Promise.race([rpcPromise, timeoutPromise]);
    }
  } catch (err) {
    // Offline fallback
  }

  return mockStore.startLesson(userId, lessonId);
}

export async function completeLessonAction(lessonId: string, pathToRevalidate: string) {
  let userId = "student-123";
  try {
    const supabase = await createSupabaseServerClient();
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Supabase timeout")), 1500)
    );
    const authPromise = supabase.auth.getUser();
    const authRes: any = await Promise.race([authPromise, timeoutPromise]);

    if (authRes?.data?.user) {
      userId = authRes.data.user.id;
      const rpcPromise = supabase.rpc("complete_lesson", { p_lesson_id: lessonId });
      await Promise.race([rpcPromise, timeoutPromise]);
    }
  } catch (err) {
    // Offline fallback
  }

  // Always register in mock store to guarantee instant client updates!
  const result = mockStore.completeLesson(userId, lessonId);

  revalidatePath(pathToRevalidate);
  revalidatePath("/courses");
  revalidatePath("/admin/progress");

  return result;
}
