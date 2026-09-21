import { describe, expect, it } from "vitest";
import { evaluateLessonCompletion } from "./quiz-evaluation";
import type { QuizAttemptResult } from "./quiz-types";

describe("evaluateLessonCompletion", () => {
  it.each([true, false])("preserves the recorded pass decision when thresholds change: %s", (passed) => {
    const attempt: QuizAttemptResult = { id: "a", user_id: "u", quiz_id: "q", score_percentage: passed ? 70 : 80, correct_count: 7, total_questions: 10, passed, completed_at: "now", elapsed_seconds: 40 };
    expect(evaluateLessonCompletion(45, 30, true, { minPassScorePercentage: passed ? 90 : 60 }, attempt).quizPassed).toBe(passed);
  });
  it("approves lesson without quiz if reading time is compliant", () => {
    const result = evaluateLessonCompletion(45, 30, true, null, null);
    expect(result.isFullyApproved).toBe(true);
    expect(result.statusBadgeVariant).toBe("success");
  });

  it("requires quiz pass if lesson has a quiz associated", () => {
    const resultNoQuizAttempt = evaluateLessonCompletion(
      45,
      30,
      true,
      { minPassScorePercentage: 70 },
      null,
    );
    expect(resultNoQuizAttempt.isFullyApproved).toBe(false);
    expect(resultNoQuizAttempt.statusLabel).toContain("Falta Presentar Quiz");

    const failedAttempt: QuizAttemptResult = {
      id: "a1",
      user_id: "u1",
      quiz_id: "q1",
      score_percentage: 60,
      correct_count: 3,
      total_questions: 5,
      passed: false,
      completed_at: new Date().toISOString(),
      elapsed_seconds: 40,
    };

    const resultFailedQuiz = evaluateLessonCompletion(
      45,
      30,
      true,
      { minPassScorePercentage: 70 },
      failedAttempt,
    );
    expect(resultFailedQuiz.isFullyApproved).toBe(false);
    expect(resultFailedQuiz.statusBadgeVariant).toBe("error");

    const passedAttempt: QuizAttemptResult = {
      ...failedAttempt,
      score_percentage: 80,
      passed: true,
    };

    const resultPassedBoth = evaluateLessonCompletion(
      45,
      30,
      true,
      { minPassScorePercentage: 70 },
      passedAttempt,
    );
    expect(resultPassedBoth.isFullyApproved).toBe(true);
    expect(resultPassedBoth.statusBadgeVariant).toBe("success");
  });
});
