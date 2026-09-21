import { beforeEach, describe, expect, it, vi } from "vitest";
const mocks = vi.hoisted(() => ({ session: vi.fn(), rpc: vi.fn(), from: vi.fn(), revalidate: vi.fn(), mockStart: vi.fn(), mockComplete: vi.fn() }));
vi.mock("@/shared/lib/supabase/session", () => ({ requireVerifiedSession: mocks.session }));
vi.mock("@/shared/lib/supabase/resilient", () => ({ getResilientUser: mocks.session }));
vi.mock("@/shared/lib/supabase/server", () => ({ createSupabaseServerClient: async () => ({ rpc: mocks.rpc, from: mocks.from }) }));
vi.mock("@/shared/lib/mock-store", () => ({ mockStore: { startLesson: mocks.mockStart, completeLesson: mocks.mockComplete, heartbeatLesson: vi.fn() } }));
vi.mock("next/cache", () => ({ revalidatePath: mocks.revalidate }));
import * as actions from "./progress.actions";
const progress = { user_id: "actor", lesson_id: "lesson", active_seconds: 40, elapsed_seconds: 40, is_completed: false };
const operations = [
  ["start_lesson", () => actions.startLessonAction("lesson")],
  ["pause_lesson", () => actions.pauseLessonAction("lesson")],
  ["resume_lesson", () => actions.resumeLessonAction("lesson")],
  ["heartbeat_lesson", () => actions.heartbeatLessonAction("lesson")],
  ["complete_lesson", () => actions.completeLessonAction("lesson", "/courses/course")],
] as const;
beforeEach(() => { vi.resetAllMocks(); mocks.session.mockResolvedValue({ user: { id: "actor" }, client: { rpc: mocks.rpc, from: mocks.from } }); });
describe("verified lesson progress", () => {
  it.each(operations)("%s only acknowledges persisted progress", async (rpc, invoke) => {
    const row = { ...progress, is_completed: rpc === "complete_lesson" };
    mocks.rpc.mockResolvedValue({ data: row, error: null });
    expect(await invoke()).toEqual({ success: true, progress: row });
    expect(mocks.rpc).toHaveBeenCalledWith(rpc, { p_lesson_id: "lesson" });
    expect(mocks.from).not.toHaveBeenCalled(); expect(mocks.mockStart).not.toHaveBeenCalled(); expect(mocks.mockComplete).not.toHaveBeenCalled();
  });
  it.each(operations)("%s rejects missing authentication", async (_, invoke) => {
    mocks.session.mockRejectedValue(new Error("unauthenticated"));
    expect(await invoke()).toHaveProperty("error"); expect(mocks.rpc).not.toHaveBeenCalled(); expect(mocks.revalidate).not.toHaveBeenCalled();
  });
  it.each(operations)("%s rejects returned RPC errors", async (_, invoke) => {
    mocks.rpc.mockResolvedValue({ data: null, error: { message: "denied" } });
    expect(await invoke()).toHaveProperty("error"); expect(mocks.revalidate).not.toHaveBeenCalled();
  });
  it.each([null, {}, { ...progress, user_id: "other" }, { ...progress, active_seconds: -1 }])("rejects invalid acknowledgement %j", async (data) => {
    mocks.rpc.mockResolvedValue({ data, error: null }); expect(await actions.startLessonAction("lesson")).toHaveProperty("error");
  });
  it("does not claim completion without the completed flag", async () => {
    mocks.rpc.mockResolvedValue({ data: progress, error: null }); expect(await actions.completeLessonAction("lesson", "/courses/course")).toHaveProperty("error"); expect(mocks.revalidate).not.toHaveBeenCalled();
  });
});
