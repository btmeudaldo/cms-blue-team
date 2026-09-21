import { beforeEach, describe, expect, it, vi } from "vitest";
const mocks = vi.hoisted(() => ({ session: vi.fn(), editor: vi.fn(), rpc: vi.fn(), from: vi.fn() }));
vi.mock("./session", () => ({ requireVerifiedSession: mocks.session, AuthenticationRequiredError: class extends Error {} }));
vi.mock("@/features/learning/application/course-authorization", () => ({ requireCourseEditor: mocks.editor }));
import * as readers from "./resilient";
const safe = { id: "quiz", course_id: "course", lesson_id: "lesson", title: "Quiz", description: "", minPassScorePercentage: 70, questions: [{ id: "q", question: "Q?", options: ["A", "B"] }] };
beforeEach(() => {
  vi.resetAllMocks();
  mocks.session.mockResolvedValue({ client: { rpc: mocks.rpc, from: mocks.from }, profile: { role: "admin" } });
  mocks.rpc.mockResolvedValue({ data: [safe], error: null });
});
describe("quiz reads", () => {
  it("uses safe RPC even for admin accounts on learner routes", async () => {
    expect(await readers.getResilientQuizzes()).toEqual([safe]);
    expect(mocks.rpc).toHaveBeenCalledWith("list_available_quizzes", {});
    expect(mocks.from).not.toHaveBeenCalled();
  });
  it("filters safe reads by the requested quiz or lesson", async () => {
    expect(await readers.getResilientQuiz("quiz")).toEqual(safe);
    expect(mocks.rpc).toHaveBeenCalledWith("list_available_quizzes", { p_quiz_id: "quiz" });
    expect(await readers.getResilientQuizForLesson("lesson")).toEqual(safe);
    expect(mocks.rpc).toHaveBeenCalledWith("list_available_quizzes", { p_lesson_id: "lesson" });
  });
  it("fails closed if the safe RPC is unavailable", async () => {
    mocks.rpc.mockResolvedValue({ data: null, error: { message: "missing RPC" } });
    await expect(readers.getResilientQuizzes()).rejects.toThrow();
    expect(mocks.from).not.toHaveBeenCalled();
  });
  it("does not read the answer bank before course editor authorization", async () => {
    mocks.editor.mockRejectedValue(new Error("Forbidden"));
    await expect(readers.getEditableQuizForLesson("course", "lesson")).rejects.toThrow("Forbidden");
    expect(mocks.from).not.toHaveBeenCalled();
  });
});
