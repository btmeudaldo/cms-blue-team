import { beforeEach, describe, expect, it, vi } from "vitest";
const mocks = vi.hoisted(() => ({ session: vi.fn(), from: vi.fn() }));
vi.mock("@/shared/lib/supabase/session", () => ({
  requireVerifiedSession: mocks.session,
}));
import { getManageableEnrollmentCourses } from "./manageable-enrollment-courses";

const courses = [
  { id: "owned", created_by: "teacher", title: "Owned" },
  { id: "assigned", created_by: "other", title: "Assigned" },
  { id: "outside", created_by: "other", title: "Outside" },
];
let role: string;
let failedTable: string;
const eq = vi.fn();
beforeEach(() => {
  vi.clearAllMocks();
  role = "instructor";
  failedTable = "";
  mocks.session.mockImplementation(async () => ({
    client: { from: mocks.from },
    user: { id: "teacher" },
    profile: { role },
  }));
  mocks.from.mockImplementation((table: string) => {
    const result = {
      data: table === "courses" ? courses : [{ course_id: "assigned" }],
      error: table === failedTable ? { message: "failure" } : null,
    };
    const query = {
      select: vi.fn().mockReturnThis(),
      order: vi.fn().mockReturnThis(),
      eq: eq.mockReturnThis(),
      then: (resolve: (value: unknown) => unknown) =>
        Promise.resolve(result).then(resolve),
    };
    return query;
  });
});
describe("manageable enrollment courses", () => {
  it("returns owned and assigned courses only for an instructor", async () => {
    expect(await getManageableEnrollmentCourses()).toEqual(courses.slice(0, 2));
    expect(eq).toHaveBeenCalledWith("user_id", "teacher");
  });
  it("returns all courses for an administrator", async () => {
    role = "admin";
    expect(await getManageableEnrollmentCourses()).toEqual(courses);
    expect(mocks.from).not.toHaveBeenCalledWith("course_editors");
  });
  it("rejects a student before querying academic data", async () => {
    role = "student";
    await expect(getManageableEnrollmentCourses()).rejects.toThrow("Forbidden");
    expect(mocks.from).not.toHaveBeenCalled();
  });
  it.each(["courses", "course_editors"])(
    "fails closed if %s cannot be read",
    async (table) => {
      failedTable = table;
      await expect(getManageableEnrollmentCourses()).rejects.toThrow(
        "No se pudieron cargar",
      );
    },
  );
});
