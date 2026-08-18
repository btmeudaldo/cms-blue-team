export type PendingQuizAttempt = {
  id: string;
  quizId: string;
  answers: Record<string, number>;
  elapsedSeconds: number;
  completedAt: string;
};

export function addPendingQuizAttempt(
  attempts: PendingQuizAttempt[],
  attempt: PendingQuizAttempt,
): PendingQuizAttempt[] {
  if (attempts.some((pendingAttempt) => pendingAttempt.id === attempt.id)) {
    return attempts;
  }

  return [...attempts, attempt];
}

export function removePendingQuizAttempt(
  attempts: PendingQuizAttempt[],
  attemptId: string,
): PendingQuizAttempt[] {
  return attempts.filter((attempt) => attempt.id !== attemptId);
}
