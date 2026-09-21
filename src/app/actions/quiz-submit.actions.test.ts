import { beforeEach, describe, expect, it, vi } from "vitest";
const mocks = vi.hoisted(() => ({
  session: vi.fn(),
  rpc: vi.fn(),
  from: vi.fn(),
  revalidate: vi.fn(),
}));
vi.mock("@/shared/lib/supabase/session", () => ({
  requireVerifiedSession: mocks.session,
}));
vi.mock("next/cache", () => ({ revalidatePath: mocks.revalidate }));
import * as actions from "./quiz.actions";
const result = {
  id: "attempt",
  user_id: "actor",
  quiz_id: "quiz",
  score_percentage: 50,
  correct_count: 1,
  total_questions: 2,
  passed: false,
  elapsed_seconds: 80,
  completed_at: "2026-09-21T12:00:00Z",
  min_pass_score_percentage: 70,
};
beforeEach(() => {
  vi.resetAllMocks();
  mocks.session.mockResolvedValue({
    client: { rpc: mocks.rpc, from: mocks.from },
    user: { id: "actor" },
    profile: { role: "student" },
  });
});
describe("server controlled quiz attempts", () => {
  it("starts a persisted attempt with the authenticated RPC client", async () => {
    const attempt = {
      attempt_id: "attempt",
      started_at: "now",
      quiz: { id: "quiz", questions: [] },
    };
    mocks.rpc.mockResolvedValue({ data: attempt, error: null });
    expect(await actions.startQuizAttemptAction("quiz")).toEqual({
      success: true,
      attempt,
    });
    expect(mocks.rpc).toHaveBeenCalledWith("start_quiz_attempt", {
      p_quiz_id: "quiz",
    });
  });
  it("returns the persisted server result and only sends attempt ID and answers", async () => {
    mocks.rpc.mockResolvedValue({ data: result, error: null });
    expect(
      await actions.submitQuizAttemptAction("attempt", { q1: 0, q2: 1 }),
    ).toEqual({ success: true, attempt: result });
    expect(mocks.rpc).toHaveBeenCalledWith("submit_quiz_attempt", {
      p_attempt_id: "attempt",
      p_answers: { q1: 0, q2: 1 },
    });
    expect(mocks.from).not.toHaveBeenCalled();
  });
  it.each([
    { data: null, error: { message: "denied" } },
    { data: null, error: null },
  ])("never reports success without a persisted result", async (response) => {
    mocks.rpc.mockResolvedValue(response);
    expect(await actions.submitQuizAttemptAction("attempt", {})).toHaveProperty(
      "error",
    );
    expect(mocks.revalidate).not.toHaveBeenCalled();
  });
  it("requires authentication before calling the database", async () => {
    mocks.session.mockRejectedValue(new Error("unauthenticated"));
    expect(await actions.startQuizAttemptAction("quiz")).toHaveProperty(
      "error",
    );
    expect(await actions.submitQuizAttemptAction("attempt", {})).toHaveProperty(
      "error",
    );
    expect(mocks.rpc).not.toHaveBeenCalled();
  });
});
