import { beforeEach, describe, expect, it, vi } from "vitest";
const mocks = vi.hoisted(() => ({
  session: vi.fn(),
  server: vi.fn(),
  admin: vi.fn(),
  revalidate: vi.fn(),
  redirect: vi.fn(),
  store: { addCourse: vi.fn(), updateCourse: vi.fn(), deleteCourse: vi.fn() },
}));
vi.mock("@/shared/lib/supabase/session", () => ({
  requireVerifiedSession: mocks.session,
}));
vi.mock("@/shared/lib/supabase/server", () => ({
  createSupabaseServerClient: mocks.server,
  createSupabaseAdminClient: mocks.admin,
}));
vi.mock("@/shared/lib/mock-store", () => ({ mockStore: mocks.store }));
vi.mock("next/cache", () => ({ revalidatePath: mocks.revalidate }));
vi.mock("next/navigation", () => ({ redirect: mocks.redirect }));
import {
  createCourseAction,
  updateCourseAction,
  deleteCourseAction,
  uploadCourseCoverAction,
  seedDemoCoursesAction,
} from "./course.actions";
function form() {
  const value = new FormData();
  value.set("title", "Course");
  value.set("slug", "course");
  return value;
}
function setup(
  role = "admin",
  error: { message: string } | null = null,
  data: unknown = { id: "course" },
) {
  const query = {
    insert: vi.fn(),
    update: vi.fn(),
    delete: vi.fn(),
    upsert: vi.fn(),
    eq: vi.fn(),
    select: vi.fn(),
    single: vi.fn(),
    maybeSingle: vi.fn(),
    then: (resolve: (result: unknown) => unknown) =>
      Promise.resolve({ error, data }).then(resolve),
  };
  for (const name of [
    "insert",
    "update",
    "delete",
    "upsert",
    "eq",
    "select",
    "single",
    "maybeSingle",
  ] as const)
    query[name].mockReturnValue(query);
  const storage = {
    upload: vi.fn().mockResolvedValue({ error }),
    getPublicUrl: vi.fn().mockReturnValue({
      data: { publicUrl: "https://example.com/cover.png" },
    }),
  };
  const client = {
    from: vi.fn().mockReturnValue(query),
    storage: { from: vi.fn().mockReturnValue(storage) },
    auth: {
      getUser: vi.fn().mockResolvedValue({ data: { user: { id: "actor" } } }),
    },
  };
  mocks.server.mockResolvedValue(client);
  mocks.admin.mockReturnValue(client);
  mocks.session.mockResolvedValue({
    client,
    user: { id: "actor" },
    profile: { role },
  });
  return { query, client, storage };
}
const actions = [
  () => createCourseAction(form()),
  () => updateCourseAction("course", form()),
  () => deleteCourseAction("course"),
  () => uploadCourseCoverAction(form()),
];
beforeEach(() => vi.resetAllMocks());
describe("course mutation authorization", () => {
  it.each(actions)(
    "requires verified authentication before accessing data",
    async (action) => {
      const { client } = setup();
      mocks.session.mockRejectedValue(new Error("Unauthenticated"));
      await expect(action()).rejects.toThrow("Unauthenticated");
      expect(client.from).not.toHaveBeenCalled();
      expect(client.storage.from).not.toHaveBeenCalled();
    },
  );
  it.each(actions)("rejects students before accessing data", async (action) => {
    const { client } = setup("student");
    await expect(action()).rejects.toThrow("Forbidden");
    expect(client.from).not.toHaveBeenCalled();
    expect(client.storage.from).not.toHaveBeenCalled();
  });
  it.each(actions.slice(0, 3))(
    "propagates RLS failure without privileged or mock writes",
    async (action) => {
      setup("instructor", { message: "RLS denied" });
      await expect(action()).rejects.toThrow("RLS denied");
      expect(mocks.admin).not.toHaveBeenCalled();
      expect(mocks.store.addCourse).not.toHaveBeenCalled();
      expect(mocks.store.updateCourse).not.toHaveBeenCalled();
      expect(mocks.store.deleteCourse).not.toHaveBeenCalled();
      expect(mocks.revalidate).not.toHaveBeenCalled();
    },
  );
  it.each(actions.slice(1, 3))(
    "rejects zero affected courses",
    async (action) => {
      setup("instructor", null, null);
      await expect(action()).rejects.toThrow();
      expect(mocks.revalidate).not.toHaveBeenCalled();
    },
  );
  it("preserves successful redirect without swallowing it", async () => {
    const { query } = setup();
    mocks.redirect.mockImplementation(() => {
      throw new Error("NEXT_REDIRECT");
    });
    await expect(createCourseAction(form())).rejects.toThrow("NEXT_REDIRECT");
    expect(query.insert).toHaveBeenCalledWith(
      expect.objectContaining({ created_by: "actor" }),
    );
    expect(mocks.store.addCourse).not.toHaveBeenCalled();
  });
  it("disables seed without accessing real data", async () => {
    const { client } = setup();
    await expect(seedDemoCoursesAction()).rejects.toThrow("deshabilitada");
    expect(client.from).not.toHaveBeenCalled();
  });
  it("does not elevate a denied cover upload", async () => {
    const { storage } = setup("instructor", { message: "RLS denied" });
    const data = form();
    data.set("file", new File(["image"], "cover.png", { type: "image/png" }));
    await expect(uploadCourseCoverAction(data)).rejects.toThrow("RLS denied");
    expect(storage.upload).toHaveBeenCalledTimes(1);
    expect(mocks.admin).not.toHaveBeenCalled();
  });
  it("validates cover type before uploading", async () => {
    const { storage } = setup();
    const data = form();
    data.set("file", new File(["html"], "cover.html", { type: "text/html" }));
    await expect(uploadCourseCoverAction(data)).rejects.toThrow("PNG");
    expect(storage.upload).not.toHaveBeenCalled();
  });
  it("allows staff update with normal client", async () => {
    const { query } = setup("instructor");
    await updateCourseAction("course", form());
    expect(query.eq).toHaveBeenCalledWith("id", "course");
    expect(mocks.admin).not.toHaveBeenCalled();
    expect(mocks.store.updateCourse).not.toHaveBeenCalled();
  });
});
