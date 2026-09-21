import { beforeEach, describe, expect, it, vi } from "vitest";
const mocks = vi.hoisted(() => ({
  session: vi.fn(),
  server: vi.fn(),
  admin: vi.fn(),
  revalidate: vi.fn(),
  mock: {
    setStudentEnrollments: vi.fn(),
    addLesson: vi.fn(),
    updateLesson: vi.fn(),
    deleteLesson: vi.fn(),
  },
}));
vi.mock("@/shared/lib/supabase/session", () => ({
  requireVerifiedSession: mocks.session,
}));
vi.mock("@/shared/lib/supabase/server", () => ({
  createSupabaseServerClient: mocks.server,
  createSupabaseAdminClient: mocks.admin,
}));
vi.mock("@/shared/lib/supabase/admin", () => ({
  createSupabaseAdminClient: mocks.admin,
}));
vi.mock("@/shared/lib/mock-store", () => ({ mockStore: mocks.mock }));
vi.mock("next/cache", () => ({ revalidatePath: mocks.revalidate }));
import {
  enrollStudentAction,
  unenrollStudentAction,
  updateStudentEnrollmentsAction,
  updateUserRoleAction,
} from "./enrollment.actions";
import {
  createLessonAction,
  updateLessonAction,
  deleteLessonAction,
} from "./lesson.actions";
function form() {
  const data = new FormData();
  data.set("title", "Lesson");
  data.set("slug", "lesson");
  data.set("contentHtml", "<p>Learning</p>");
  return data;
}
function setup(
  role = "admin",
  error: { message: string } | null = null,
  data: unknown = { id: "lesson" },
) {
  const query = {
    select: vi.fn(),
    eq: vi.fn(),
    in: vi.fn(),
    single: vi.fn(),
    insert: vi.fn(),
    update: vi.fn(),
    upsert: vi.fn(),
    delete: vi.fn(),
    then: (resolve: (result: unknown) => unknown) =>
      Promise.resolve({ error, data }).then(resolve),
  };
  for (const key of [
    "select",
    "eq",
    "in",
    "single",
    "insert",
    "update",
    "upsert",
    "delete",
  ] as const)
    query[key].mockReturnValue(query);
  const client = { from: vi.fn().mockReturnValue(query) };
  mocks.server.mockResolvedValue(client);
  mocks.session.mockResolvedValue({
    client,
    user: { id: "actor" },
    profile: { role },
  });
  mocks.admin.mockReturnValue(client);
  return { query, client };
}
beforeEach(() => vi.clearAllMocks());
describe("verified administrative mutations", () => {
  it.each([
    () => enrollStudentAction("course", "student"),
    () => unenrollStudentAction("course", "student"),
    () => updateStudentEnrollmentsAction("student", ["course"], ["course"]),
    () => updateUserRoleAction("student", "admin"),
    () => createLessonAction("course", form()),
    () => updateLessonAction("lesson", "course", form()),
    () => deleteLessonAction("lesson", "course"),
  ])("rejects unauthenticated mutations", async (action) => {
    const { client } = setup();
    mocks.session.mockRejectedValue(new Error("Unauthenticated"));
    await expect(action()).rejects.toThrow("Unauthenticated");
    expect(client.from).not.toHaveBeenCalled();
    expect(mocks.admin).not.toHaveBeenCalled();
  });
  it.each(["student", "instructor"])(
    "rejects enrollment management by %s",
    async (role) => {
      const { client } = setup(role);
      await expect(
        updateStudentEnrollmentsAction("student", ["course"], []),
      ).rejects.toThrow();
      expect(client.from).not.toHaveBeenCalled();
    },
  );
  it("propagates enrollment denial without privileged retries", async () => {
    setup("admin", { message: "RLS denied" });
    await expect(
      updateStudentEnrollmentsAction("student", ["course"], []),
    ).rejects.toThrow("RLS denied");
    expect(mocks.admin).not.toHaveBeenCalled();
    expect(mocks.mock.setStudentEnrollments).not.toHaveBeenCalled();
  });
  it("stops enrollment changes when removal fails", async () => {
    const { query } = setup("admin", { message: "delete denied" });
    await expect(
      updateStudentEnrollmentsAction("student", ["new"], ["old"]),
    ).rejects.toThrow("delete denied");
    expect(query.upsert).not.toHaveBeenCalled();
  });
  it.each([
    () => updateLessonAction("lesson", "course", form()),
    () => deleteLessonAction("lesson", "course"),
  ])("rejects RLS denied lesson writes without fallback", async (action) => {
    setup("instructor", { message: "RLS denied" });
    await expect(action()).rejects.toThrow("RLS denied");
    expect(mocks.admin).not.toHaveBeenCalled();
    expect(mocks.mock.updateLesson).not.toHaveBeenCalled();
    expect(mocks.mock.deleteLesson).not.toHaveBeenCalled();
  });
  it.each([
    () => updateLessonAction("lesson", "course", form()),
    () => deleteLessonAction("lesson", "course"),
  ])("rejects zero affected lessons and scopes to course", async (action) => {
    const { query } = setup("instructor", null, null);
    await expect(action()).rejects.toThrow();
    expect(query.eq).toHaveBeenCalledWith("course_id", "course");
  });
  it("allows verified admin enrollment through normal client", async () => {
    const { query } = setup();
    await updateStudentEnrollmentsAction("student", ["course"], []);
    expect(query.upsert).toHaveBeenCalledWith([
      { course_id: "course", user_id: "student" },
    ]);
    expect(mocks.admin).not.toHaveBeenCalled();
  });
});
