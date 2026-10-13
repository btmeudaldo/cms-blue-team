import { beforeEach, describe, expect, it, vi } from "vitest";
const mocks = vi.hoisted(() => ({
  session: vi.fn(),
  rpc: vi.fn(),
  from: vi.fn(),
  revalidate: vi.fn(),
  mockStart: vi.fn(),
  mockComplete: vi.fn(),
  admin: vi.fn(),
}));
vi.mock("@/shared/lib/supabase/session", () => ({
  requireVerifiedSession: mocks.session,
}));
vi.mock("@/shared/lib/supabase/resilient", () => ({
  getResilientUser: mocks.session,
}));
vi.mock("@/shared/lib/supabase/server", () => ({
  createSupabaseServerClient: async () => ({
    rpc: mocks.rpc,
    from: mocks.from,
  }),
  createSupabaseAdminClient: mocks.admin,
}));
vi.mock("@/shared/lib/supabase/admin", () => ({
  createSupabaseAdminClient: mocks.admin,
}));
vi.mock("@/shared/lib/mock-store", () => ({
  mockStore: {
    startLesson: mocks.mockStart,
    completeLesson: mocks.mockComplete,
    heartbeatLesson: vi.fn(),
  },
}));
vi.mock("next/cache", () => ({ revalidatePath: mocks.revalidate }));
import * as actions from "./progress.actions";
const progress = {
  user_id: "actor",
  lesson_id: "lesson",
  active_seconds: 40,
  elapsed_seconds: 40,
  is_completed: false,
  is_active: true,
};
const operations = [
  ["start_lesson", () => actions.startLessonAction("lesson")],
  ["pause_lesson", () => actions.pauseLessonAction("lesson")],
  ["resume_lesson", () => actions.resumeLessonAction("lesson")],
  ["heartbeat_lesson", () => actions.heartbeatLessonAction("lesson")],
  [
    "complete_lesson",
    () => actions.completeLessonAction("lesson", "/courses/course"),
  ],
] as const;
beforeEach(() => {
  vi.resetAllMocks();
  mocks.session.mockResolvedValue({
    user: { id: "actor" },
    client: { rpc: mocks.rpc, from: mocks.from },
  });
});
describe("verified lesson progress", () => {
  it.each(operations)(
    "%s only acknowledges persisted progress",
    async (rpc, invoke) => {
      const row = { ...progress, is_completed: rpc === "complete_lesson" };
      mocks.rpc.mockResolvedValue({ data: row, error: null });
      expect(await invoke()).toEqual({ success: true, progress: row });
      expect(mocks.rpc).toHaveBeenCalledWith(rpc, { p_lesson_id: "lesson" });
      expect(mocks.from).not.toHaveBeenCalled();
      expect(mocks.mockStart).not.toHaveBeenCalled();
      expect(mocks.mockComplete).not.toHaveBeenCalled();
    },
  );
  it.each(operations)(
    "%s rejects missing authentication",
    async (_, invoke) => {
      mocks.session.mockRejectedValue(new Error("unauthenticated"));
      expect(await invoke()).toHaveProperty("error");
      expect(mocks.rpc).not.toHaveBeenCalled();
      expect(mocks.revalidate).not.toHaveBeenCalled();
    },
  );
  it.each(operations)("%s rejects returned RPC errors", async (_, invoke) => {
    mocks.rpc.mockResolvedValue({ data: null, error: { message: "denied" } });
    expect(await invoke()).toHaveProperty("error");
    expect(mocks.revalidate).not.toHaveBeenCalled();
  });
  it.each([
    null,
    {},
    { ...progress, user_id: "other" },
    { ...progress, active_seconds: -1 },
    { ...progress, is_active: undefined },
    { ...progress, is_active: "true" },
  ])("rejects invalid acknowledgement %j", async (data) => {
    mocks.rpc.mockResolvedValue({ data, error: null });
    expect(await actions.startLessonAction("lesson")).toHaveProperty("error");
  });
  it("does not claim completion without the completed flag", async () => {
    mocks.rpc.mockResolvedValue({ data: progress, error: null });
    expect(
      await actions.completeLessonAction("lesson", "/courses/course"),
    ).toHaveProperty("error");
    expect(mocks.revalidate).not.toHaveBeenCalled();
  });

  it("auto-enrolls instructor with admin client when enrollment was missing", async () => {
    mocks.session.mockResolvedValue({
      user: { id: "instructor-id" },
      profile: { role: "instructor" },
      client: { rpc: mocks.rpc, from: mocks.from },
    });

    // 1st RPC call fails
    mocks.rpc.mockResolvedValueOnce({
      data: null,
      error: { message: "Lesson not available" },
    });

    // 2nd RPC call succeeds
    const row = { ...progress, user_id: "instructor-id" };
    mocks.rpc.mockResolvedValueOnce({ data: row, error: null });

    const adminUpsert = vi.fn().mockResolvedValue({ error: null });
    const adminFrom = vi.fn().mockImplementation((table: string) => {
      if (table === "lessons") {
        return {
          select: vi.fn().mockReturnValue({
            eq: vi.fn().mockReturnValue({
              maybeSingle: vi.fn().mockResolvedValue({ data: { course_id: "course-123" } }),
            }),
          }),
        };
      }
      if (table === "course_enrollments") {
        return { upsert: adminUpsert };
      }
      return {};
    });

    mocks.admin.mockReturnValue({ from: adminFrom });

    const result = await actions.startLessonAction("lesson");
    expect(result).toEqual({ success: true, progress: row });
    expect(adminUpsert).toHaveBeenCalledWith(
      { user_id: "instructor-id", course_id: "course-123" },
      { onConflict: "user_id,course_id", ignoreDuplicates: true },
    );
  });
});
