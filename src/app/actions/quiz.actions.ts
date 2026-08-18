"use server";

import { revalidatePath } from "next/cache";
import { createSupabaseServerClient } from "@/shared/lib/supabase/server";
import { getResilientUser } from "@/shared/lib/supabase/resilient";
import { mockStore } from "@/shared/lib/mock-store";

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

export async function submitQuizAttemptAction(
  quizId: string,
  answers: Record<string, number>,
  elapsedSeconds: number,
  attemptId = crypto.randomUUID(),
  completedAt = new Date().toISOString(),
) {
  const session = await getResilientUser();
  const { user } = session;
  if (!user) {
    return { error: "Debes iniciar sesión para realizar la evaluación." };
  }

  if (session.isDemo) {
    const attempt = mockStore.submitQuizAttempt(
      user.id,
      quizId,
      answers,
      elapsedSeconds,
    );
    if (!attempt) return { error: "Examen no encontrado." };

    return {
      success: true,
      scorePercentage: attempt.score_percentage,
      correctCount: attempt.correct_count,
      totalQuestions: attempt.total_questions,
      passed: attempt.passed,
      minScore: mockStore.getQuizById(quizId)?.minPassScorePercentage || 70,
      attempt,
    };
  }

  const supabase = await createSupabaseServerClient();
  const { data: quiz, error: quizError } = await withTimeout(
    supabase.from("quizzes").select("*").eq("id", quizId).maybeSingle(),
  );

  if (quizError || !quiz) {
    return { error: "El cuestionario no está disponible en la base de datos." };
  }

  const questions = Array.isArray(quiz.questions) ? quiz.questions : [];
  if (!quiz) {
    return { error: "Examen no encontrado." };
  }

  let correctCount = 0;
  for (const q of questions) {
    if (answers[q.id] === q.correctAnswerIndex) {
      correctCount++;
    }
  }

  const totalQuestions = questions.length;
  const scorePercentage =
    totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
  const minScore = quiz.min_pass_score_percentage || 70;
  const passed = scorePercentage >= minScore;

  const { data: attempt, error: attemptError } = await withTimeout(
    supabase
      .from("quiz_attempts")
      .upsert(
        {
          id: attemptId,
          user_id: user.id,
          quiz_id: quiz.id,
          score_percentage: scorePercentage,
          correct_count: correctCount,
          total_questions: totalQuestions,
          passed,
          elapsed_seconds: elapsedSeconds,
          completed_at: completedAt,
        },
        { onConflict: "id" },
      )
      .select()
      .single(),
  );

  if (attemptError || !attempt) {
    return {
      error: "No se pudo confirmar el intento. Se reintentará automáticamente.",
    };
  }

  // Revalidate caches across all student and admin routes
  revalidatePath("/admin/progress");
  revalidatePath("/quizzes");
  revalidatePath(`/quizzes/${quiz.id}`);
  if (quiz.course_id) {
    revalidatePath(`/courses/${quiz.course_id}`);
    revalidatePath(`/admin/courses/${quiz.course_id}`);
  }
  if (quiz.lesson_id) {
    revalidatePath(`/courses/${quiz.course_id}/lessons/${quiz.lesson_id}`);
  }

  return {
    success: true,
    scorePercentage,
    correctCount,
    totalQuestions,
    passed,
    minScore,
    attempt,
  };
}

export async function saveQuizAction(
  courseId: string,
  lessonId: string,
  quizData: any,
) {
  const session = await getResilientUser();
  const { user } = session;
  if (!user) {
    throw new Error(
      "Debes iniciar sesión con rol de administrador o instructor.",
    );
  }

  if (session.isDemo) {
    const updatedQuiz = mockStore.saveQuiz(courseId, lessonId, quizData);
    if (!updatedQuiz) throw new Error("No se pudo guardar el cuestionario.");
    return updatedQuiz;
  }

  const supabase = await createSupabaseServerClient();
  const quizRecord = {
    course_id: courseId,
    lesson_id: lessonId,
    title: quizData.title,
    description: quizData.description,
    min_pass_score_percentage: Number(quizData.minPassScorePercentage) || 70,
    questions: quizData.questions,
  };
  const { data: existingQuiz, error: lookupError } = await withTimeout(
    supabase
      .from("quizzes")
      .select("id")
      .eq("lesson_id", lessonId)
      .maybeSingle(),
  );
  if (lookupError)
    throw new Error("No se pudo comprobar el cuestionario existente.");

  const writeQuery = existingQuiz
    ? supabase.from("quizzes").update(quizRecord).eq("id", existingQuiz.id)
    : supabase.from("quizzes").insert(quizRecord);
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
