import { describe, expect, it } from "vitest";

import {
  addPendingQuizAttempt,
  removePendingQuizAttempt,
} from "./quiz-attempt-queue";

const attempt = {
  id: "attempt-1",
  quizId: "quiz-1",
  answers: { question_1: 2 },
  elapsedSeconds: 42,
  completedAt: "2026-08-18T09:00:00.000Z",
};

describe("quiz attempt queue", () => {
  it("keeps a completed attempt pending until Supabase confirms it", () => {
    expect(addPendingQuizAttempt([], attempt)).toEqual([attempt]);
  });

  it("deduplicates retries by the client-generated attempt id", () => {
    expect(addPendingQuizAttempt([attempt], attempt)).toEqual([attempt]);
  });

  it("removes only the attempt acknowledged by Supabase", () => {
    const secondAttempt = { ...attempt, id: "attempt-2" };
    expect(
      removePendingQuizAttempt([attempt, secondAttempt], attempt.id),
    ).toEqual([secondAttempt]);
  });
});
