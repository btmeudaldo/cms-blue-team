import type { QuizAttemptResult } from "./quiz-types";

type SubmissionState = {
  attemptId: string | null;
  answers: Record<string, number>;
  locked: boolean;
  submitting: boolean;
  error: string | null;
  result: QuizAttemptResult | null;
};
type SubmissionEvent =
  | { type: "started"; attemptId: string }
  | { type: "answer"; questionId: string; option: number }
  | { type: "submit" }
  | { type: "failed"; error: string }
  | { type: "confirmed"; result: QuizAttemptResult };

export const initialQuizSubmission: SubmissionState = {
  attemptId: null,
  answers: {},
  locked: false,
  submitting: false,
  error: null,
  result: null,
};

export function quizSubmissionReducer(
  state: SubmissionState,
  event: SubmissionEvent,
): SubmissionState {
  switch (event.type) {
    case "started":
      return { ...initialQuizSubmission, attemptId: event.attemptId };
    case "answer":
      return !state.attemptId || state.locked
        ? state
        : {
            ...state,
            answers: { ...state.answers, [event.questionId]: event.option },
          };
    case "submit":
      return !state.attemptId || state.submitting || state.result
        ? state
        : { ...state, locked: true, submitting: true, error: null };
    case "failed":
      return { ...state, submitting: false, error: event.error };
    case "confirmed":
      return event.result.id !== state.attemptId
        ? state
        : {
            ...state,
            submitting: false,
            locked: true,
            error: null,
            result: event.result,
          };
  }
}
