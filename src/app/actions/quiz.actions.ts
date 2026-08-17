"use server";

import { revalidatePath } from "next/cache";
import { createSupabaseServerClient } from "@/shared/lib/supabase/server";
import { getResilientUser } from "@/shared/lib/supabase/resilient";
import { mockStore } from "@/shared/lib/mock-store";

function withTimeout<T>(promise: PromiseLike<T> | Promise<T>, ms = 1500): Promise<T> {
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
) {
  const { user } = await getResilientUser();
  if (!user) {
    return { error: "Debes iniciar sesión para realizar la evaluación." };
  }

  const quiz = mockStore.getQuizById(quizId);
  if (!quiz) {
    return { error: "Examen no encontrado." };
  }

  let correctCount = 0;
  for (const q of quiz.questions) {
    if (answers[q.id] === q.correctAnswerIndex) {
      correctCount++;
    }
  }

  const totalQuestions = quiz.questions.length;
  const scorePercentage =
    totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
  const minScore = quiz.minPassScorePercentage || 70;
  const passed = scorePercentage >= minScore;

  try {
    const supabase = await createSupabaseServerClient();
    await withTimeout(
      supabase.from("quiz_attempts").insert({
        user_id: user.id,
        quiz_id: quiz.id,
        score_percentage: scorePercentage,
        correct_count: correctCount,
        total_questions: totalQuestions,
        passed,
        elapsed_seconds: elapsedSeconds,
        completed_at: new Date().toISOString(),
      }),
      1500,
    ).catch(() => null);
  } catch (err) {}

  // Save to mock store for resilient mode
  const attempt = mockStore.submitQuizAttempt(
    user.id,
    quiz.id,
    answers,
    elapsedSeconds,
  );

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
  const { user } = await getResilientUser();
  if (!user) {
    throw new Error("Debes iniciar sesión con rol de administrador o instructor.");
  }

  const updatedQuiz = mockStore.saveQuiz(courseId, lessonId, quizData);
  if (!updatedQuiz) {
    throw new Error("No se pudo guardar el cuestionario.");
  }

  try {
    const supabase = await createSupabaseServerClient();
    await withTimeout(
      supabase.from("quizzes").upsert({
        id: updatedQuiz.id,
        course_id: courseId,
        lesson_id: lessonId,
        title: updatedQuiz.title,
        description: updatedQuiz.description,
        min_pass_score_percentage: updatedQuiz.minPassScorePercentage,
        questions: updatedQuiz.questions,
      }),
      1500,
    ).catch(() => null);
  } catch (err) {}

  return updatedQuiz;
}
