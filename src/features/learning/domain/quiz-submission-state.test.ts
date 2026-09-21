import { describe, expect, it } from "vitest";
import {
  quizSubmissionReducer,
  initialQuizSubmission,
} from "./quiz-submission-state";

describe("quiz submission confirmation", () => {
  it("does not submit before the server starts an attempt", () => {
    expect(
      quizSubmissionReducer(initialQuizSubmission, { type: "submit" }),
    ).toEqual(initialQuizSubmission);
  });
  it("freezes answers and preserves the server attempt after an uncertain response", () => {
    let state = quizSubmissionReducer(initialQuizSubmission, {
      type: "started",
      attemptId: "server-id",
    });
    state = quizSubmissionReducer(state, {
      type: "answer",
      questionId: "q1",
      option: 1,
    });
    state = quizSubmissionReducer(state, { type: "submit" });
    state = quizSubmissionReducer(state, {
      type: "failed",
      error: "Sin conexión",
    });
    expect(state.result).toBeNull();
    expect(state.attemptId).toBe("server-id");
    expect(
      quizSubmissionReducer(state, {
        type: "answer",
        questionId: "q1",
        option: 0,
      }).answers,
    ).toEqual({ q1: 1 });
    expect(quizSubmissionReducer(state, { type: "submit" }).answers).toEqual({
      q1: 1,
    });
  });
  it("accepts only a confirmed result belonging to the current attempt", () => {
    const state = quizSubmissionReducer(initialQuizSubmission, {
      type: "started",
      attemptId: "server-id",
    });
    const result = {
      id: "other-id",
      user_id: "u",
      quiz_id: "q",
      score_percentage: 80,
      correct_count: 4,
      total_questions: 5,
      passed: true,
      completed_at: "2026-09-21",
      elapsed_seconds: 93,
    };
    expect(
      quizSubmissionReducer(state, { type: "confirmed", result }).result,
    ).toBeNull();
    expect(
      quizSubmissionReducer(state, {
        type: "confirmed",
        result: { ...result, id: "server-id" },
      }).result?.elapsed_seconds,
    ).toBe(93);
  });
});
