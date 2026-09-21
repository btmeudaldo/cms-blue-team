"use server";

import { revalidatePath } from "next/cache";
import { requireVerifiedSession } from "@/shared/lib/supabase/session";
import type {
  QuizAttemptResult,
  StartedQuizAttempt,
} from "@/features/learning/domain/quiz-types";
import { toStudentQuiz } from "@/features/learning/domain/student-quiz";
import { requireCourseEditor } from "@/features/learning/application/course-authorization";

function withTimeout<T>(
  promise: PromiseLike<T> | Promise<T>,
  ms = 1500,
): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error(`Timeout of ${ms}ms exceeded`));
    }, ms);

    Promise.resolve(promise)
      .then((res) => {
        clearTimeout(timer);
        resolve(res);
      })
      .catch((err) => {
        clearTimeout(timer);
        reject(err);
      });
  });
}

export async function startQuizAttemptAction(
  quizId: string,
): Promise<{ success: true; attempt: StartedQuizAttempt } | { error: string }> {
  try {
    const { client } = await requireVerifiedSession();
    const { data, error } = await client.rpc("start_quiz_attempt", {
      p_quiz_id: quizId,
    });
    if (error || !data)
      return {
        error:
          "No se pudo iniciar el examen. Comprueba tu acceso e inténtalo de nuevo.",
      };
    return {
      success: true,
      attempt: {
        attempt_id: data.attempt_id,
        started_at: data.started_at,
        quiz: toStudentQuiz(data.quiz),
      },
    };
  } catch {
    return {
      error: "No se pudo iniciar el examen. Comprueba tu sesión y conexión.",
    };
  }
}

export async function submitQuizAttemptAction(
  attemptId: string,
  answers: Record<string, number>,
): Promise<{ success: true; attempt: QuizAttemptResult } | { error: string }> {
  try {
    const { client } = await requireVerifiedSession();
    const { data, error } = await client.rpc("submit_quiz_attempt", {
      p_attempt_id: attemptId,
      p_answers: answers,
    });
    if (error || !data)
      return {
        error:
          "No se pudo confirmar el resultado. Reintenta el envío de este intento.",
      };
    revalidatePath("/courses", "layout");
    revalidatePath("/quizzes", "layout");
    revalidatePath("/admin/progress");
    return { success: true, attempt: data as QuizAttemptResult };
  } catch {
    return {
      error:
        "No se pudo confirmar el resultado. Comprueba tu sesión y conexión y reintenta el envío.",
    };
  }
}

export async function saveQuizAction(
  courseId: string,
  lessonId: string,
  quizData: any,
) {
  const { client: supabase } = await requireCourseEditor(courseId);
  const { data: lesson, error: lessonError } = await supabase
    .from("lessons")
    .select("id, slug")
    .eq("id", lessonId)
    .eq("course_id", courseId)
    .maybeSingle();
  if (lessonError || !lesson) {
    throw new Error("No se pudo verificar la lección del curso.");
  }
  const quizRecord = {
    course_id: courseId,
    lesson_id: lessonId,
    lesson_slug: lesson.slug,
    title: quizData.title,
    description: quizData.description,
    min_pass_score_percentage: Number(quizData.minPassScorePercentage) || 70,
    questions: quizData.questions,
  };
  const { data: existingQuiz, error: lookupError } = await withTimeout(
    supabase
      .from("quizzes")
      .select("id")
      .eq("course_id", courseId)
      .eq("lesson_id", lessonId)
      .maybeSingle(),
  );
  if (lookupError)
    throw new Error("No se pudo comprobar el cuestionario existente.");

  const writeQuery = existingQuiz
    ? supabase
        .from("quizzes")
        .update(quizRecord)
        .eq("id", existingQuiz.id)
        .eq("course_id", courseId)
        .eq("lesson_id", lessonId)
    : supabase
        .from("quizzes")
        .insert({ ...quizRecord, id: crypto.randomUUID() });
  const { data: savedQuiz, error: writeError } = await withTimeout(
    writeQuery.select().single(),
  );
  if (writeError || !savedQuiz) {
    throw new Error("No se pudo guardar el cuestionario en la base de datos.");
  }

  revalidatePath(`/admin/courses/${courseId}/lessons/${lessonId}`);
  revalidatePath(`/courses/${courseId}/lessons/${lessonId}`);
  revalidatePath("/quizzes");

  return {
    ...savedQuiz,
    minPassScorePercentage: savedQuiz.min_pass_score_percentage,
  };
}
