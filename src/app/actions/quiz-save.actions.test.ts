import { beforeEach, describe, expect, it, vi } from "vitest";
const mocks = vi.hoisted(() => ({
  session: vi.fn(),
  resilient: vi.fn(),
  server: vi.fn(),
  saveMock: vi.fn(),
  revalidate: vi.fn(),
}));
vi.mock("@/shared/lib/supabase/session", () => ({
  requireVerifiedSession: mocks.session,
}));
vi.mock("@/shared/lib/supabase/resilient", () => ({
  getResilientUser: mocks.resilient,
}));
vi.mock("@/shared/lib/supabase/server", () => ({
  createSupabaseServerClient: mocks.server,
}));
vi.mock("@/shared/lib/mock-store", () => ({
  mockStore: { saveQuiz: mocks.saveMock },
}));
vi.mock("next/cache", () => ({ revalidatePath: mocks.revalidate }));
import { saveQuizAction } from "./quiz.actions";
const payload = {
  title: "Quiz",
  description: "",
  minPassScorePercentage: 70,
  questions: [],
};
function setup(role = "instructor") {
  function query(data: unknown) {
    const chain = {
      select: vi.fn(),
      eq: vi.fn(),
      maybeSingle: vi.fn(),
      single: vi.fn(),
      update: vi.fn(),
      insert: vi.fn(),
    };
    for (const method of ["select", "eq", "update", "insert"] as const)
      chain[method].mockReturnValue(chain);
    chain.maybeSingle.mockResolvedValue({ data, error: null });
    chain.single.mockResolvedValue({
      data: { id: "quiz", min_pass_score_percentage: 70 },
      error: null,
    });
    return chain;
  }
  const lessons = query({ id: "lesson" });
  const quizzes = query({ id: "quiz" });
  const courses = query({ created_by: "actor" });
  const editors = query(null);
  const client = {
    rpc: vi.fn().mockResolvedValue({ data: true, error: null }),
    from: vi.fn((table: string) =>
      table === "lessons"
        ? lessons
        : table === "courses"
          ? courses
          : table === "course_editors"
            ? editors
            : quizzes,
    ),
  };
  const session = {
    client,
    user: { id: "actor" },
    profile: { role },
    isDemo: false,
  };
  mocks.session.mockResolvedValue(session);
  mocks.resilient.mockResolvedValue(session);
  mocks.server.mockResolvedValue(client);
  return { client, lessons, quizzes, courses, editors };
}
beforeEach(() => vi.resetAllMocks());
describe("quiz editor authorization", () => {
  it("supplies the real lesson slug and a new ID when inserting a quiz", async () => {
    const { lessons, quizzes } = setup();
    lessons.maybeSingle.mockResolvedValue({ data: { id: "lesson", slug: "real-lesson" }, error: null });
    quizzes.maybeSingle.mockResolvedValue({ data: null, error: null });
    await saveQuizAction("course", "lesson", payload);
    expect(lessons.select).toHaveBeenCalledWith("id, slug");
    expect(quizzes.insert).toHaveBeenCalledWith(expect.objectContaining({ id: expect.any(String), lesson_slug: "real-lesson" }));
  });
  it("requires a verified session", async () => {
    const { client } = setup();
    mocks.session.mockRejectedValue(new Error("Unauthenticated"));
    await expect(saveQuizAction("course", "lesson", payload)).rejects.toThrow(
      "Unauthenticated",
    );
    expect(client.from).not.toHaveBeenCalled();
  });
  it("rejects students before querying courses", async () => {
    const { client } = setup("student");
    await expect(saveQuizAction("course", "lesson", payload)).rejects.toThrow(
      "Forbidden",
    );
    expect(client.rpc).not.toHaveBeenCalled();
    expect(client.from).not.toHaveBeenCalled();
  });
  it.each([
    { data: null, error: null },
    { data: { created_by: "actor" }, error: { message: "lookup failed" } },
  ])("fails closed on course authorization %j", async (result) => {
    const { client, courses } = setup();
    courses.maybeSingle.mockResolvedValue(result);
    await expect(saveQuizAction("course", "lesson", payload)).rejects.toThrow();
    expect(client.from).not.toHaveBeenCalledWith("quizzes");
    expect(mocks.saveMock).not.toHaveBeenCalled();
  });
  it.each([
    { data: null, error: null },
    { data: null, error: { message: "lookup failed" } },
  ])(
    "rejects lesson outside the authorized course or lookup error",
    async (result) => {
      const { client, lessons, quizzes } = setup();
      lessons.maybeSingle.mockResolvedValue(result);
      await expect(
        saveQuizAction("course", "lesson", payload),
      ).rejects.toThrow();
      expect(lessons.eq).toHaveBeenCalledWith("id", "lesson");
      expect(lessons.eq).toHaveBeenCalledWith("course_id", "course");
      expect(client.from).not.toHaveBeenCalledWith("quizzes");
      expect(quizzes.update).not.toHaveBeenCalled();
    },
  );
  it("allows authorized staff and scopes existing quiz lookup and write", async () => {
    const { client, quizzes } = setup();
    await expect(
      saveQuizAction("course", "lesson", payload),
    ).resolves.toMatchObject({ id: "quiz" });
    expect(client.from).toHaveBeenCalledWith("courses");
    expect(quizzes.eq).toHaveBeenCalledWith("course_id", "course");
    expect(quizzes.eq).toHaveBeenCalledWith("lesson_id", "lesson");
    expect(mocks.saveMock).not.toHaveBeenCalled();
  });
  it.each([
    { data: null, error: null },
    { data: { user_id: "actor" }, error: { message: "lookup failed" } },
  ])(
    "rejects unassigned instructors or assignment lookup error",
    async (result) => {
      const { client, courses, editors } = setup();
      courses.maybeSingle.mockResolvedValue({
        data: { created_by: "other" },
        error: null,
      });
      editors.maybeSingle.mockResolvedValue(result);
      await expect(
        saveQuizAction("course", "lesson", payload),
      ).rejects.toThrow();
      expect(editors.eq).toHaveBeenCalledWith("course_id", "course");
      expect(editors.eq).toHaveBeenCalledWith("user_id", "actor");
      expect(client.from).not.toHaveBeenCalledWith("quizzes");
    },
  );
  it("permits assigned instructors", async () => {
    const { courses, editors } = setup();
    courses.maybeSingle.mockResolvedValue({
      data: { created_by: "other" },
      error: null,
    });
    editors.maybeSingle.mockResolvedValue({
      data: { user_id: "actor" },
      error: null,
    });
    await expect(
      saveQuizAction("course", "lesson", payload),
    ).resolves.toMatchObject({ id: "quiz" });
    expect(editors.eq).toHaveBeenCalledWith("course_id", "course");
  });
  it("permits verified admins", async () => {
    const { client } = setup("admin");
    await expect(
      saveQuizAction("course", "lesson", payload),
    ).resolves.toMatchObject({ id: "quiz" });
    expect(client.from).toHaveBeenCalledWith("lessons");
  });
});
