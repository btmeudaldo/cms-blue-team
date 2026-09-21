import type { LessonCombinedStatus, QuizAttemptResult } from "./quiz-types";

export function evaluateLessonCompletion(
  readingElapsedSeconds: number,
  minRequiredSeconds: number,
  isReadingCompleted: boolean,
  quiz: { minPassScorePercentage?: number } | null,
  latestQuizAttempt: QuizAttemptResult | null,
): LessonCombinedStatus {
  const minSecs = minRequiredSeconds || 30;
  const readingCompliant =
    isReadingCompleted && readingElapsedSeconds >= minSecs;

  const hasQuiz = Boolean(quiz);
  const minScore = latestQuizAttempt?.min_pass_score_percentage;

  const quizScorePercentage = latestQuizAttempt
    ? latestQuizAttempt.score_percentage
    : null;
  const quizPassed = latestQuizAttempt?.passed ?? false;

  let isFullyApproved = false;
  let statusLabel = "";
  let statusBadgeVariant: "success" | "warning" | "info" | "error" = "info";

  if (!hasQuiz) {
    isFullyApproved = readingCompliant;
    if (isFullyApproved) {
      statusLabel = "✓ Verificado (Tiempo Lectura OK)";
      statusBadgeVariant = "success";
    } else if (isReadingCompleted) {
      statusLabel = "⚠️ Tiempo Lectura Insuficiente";
      statusBadgeVariant = "warning";
    } else {
      statusLabel = "⏳ En Estudio";
      statusBadgeVariant = "info";
    }
  } else {
    isFullyApproved = readingCompliant && quizPassed;

    if (isFullyApproved) {
      statusLabel = `✓ Aprobado Total (Lectura OK + Quiz ${quizScorePercentage}%)`;
      statusBadgeVariant = "success";
    } else if (readingCompliant && !latestQuizAttempt) {
      statusLabel = "⚠️ Lectura OK - Falta Presentar Quiz";
      statusBadgeVariant = "warning";
    } else if (readingCompliant && !quizPassed) {
      statusLabel =
        minScore == null
          ? `⚠️ Quiz Reprobado (${quizScorePercentage}%)`
          : `⚠️ Quiz Reprobado (${quizScorePercentage}% < ${minScore}%)`;
      statusBadgeVariant = "error";
    } else if (!readingCompliant && quizPassed) {
      statusLabel = "⚠️ Quiz Aprobado - Falta Tiempo Lectura";
      statusBadgeVariant = "warning";
    } else {
      statusLabel = "⏳ Pendiente (Lectura y Quiz)";
      statusBadgeVariant = "info";
    }
  }

  return {
    isFullyApproved,
    readingCompliant,
    quizPassed,
    hasQuiz,
    quizScorePercentage,
    statusLabel,
    statusBadgeVariant,
  };
}
