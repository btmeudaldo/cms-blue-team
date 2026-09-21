import { beforeEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => ({
  getUser: vi.fn(),
  from: vi.fn(),
  admin: vi.fn(),
  cookieGet: vi.fn(),
  result: { data: null as any, error: null as any },
  profile: { data: null as any, error: null as any },
}));
vi.mock("react", () => ({ cache: (fn: unknown) => fn }));
vi.mock("next/headers", () => ({ cookies: async () => ({ get: mocks.cookieGet }) }));
vi.mock("next/navigation", () => ({ redirect: (path: string) => { throw new Error(`REDIRECT:${path}`); } }));
vi.mock("./server", () => ({
  createSupabaseServerClient: async () => ({ auth: { getUser: mocks.getUser }, from: mocks.from }),
  createSupabaseAdminClient: mocks.admin,
}));

import {
  getResilientUser, getResilientProfiles, getResilientAllProgress,
  getResilientEnrollments, getResilientQuizAttempts, getResilientCourses,
  getResilientCourseDetail, getResilientUserProgress,
} from "./resilient";

beforeEach(() => {
  vi.clearAllMocks();
  mocks.getUser.mockResolvedValue({ data: { user: { id: "real-user", email: "admin@example.com", user_metadata: { role: "admin" } } }, error: null });
  mocks.cookieGet.mockImplementation((name: string) => ({ value: name === "demo_role" ? "admin" : "admin@blueteam.com" }));
  mocks.profile = { data: { role: "admin", full_name: "Real admin", email: "admin@example.com" }, error: null };
  mocks.result = { data: [], error: null };
  mocks.admin.mockReturnValue(null);
  mocks.from.mockImplementation((table: string) => {
    let profileLookup = false;
    const query: any = {};
    for (const method of ["select", "eq", "order", "in"]) query[method] = vi.fn(() => query);
    query.maybeSingle = vi.fn(() => { profileLookup = table === "profiles"; return query; });
    query.then = (resolve: (result: unknown) => unknown) => Promise.resolve(profileLookup ? mocks.profile : mocks.result).then(resolve);
    return query;
  });
});

describe("verified access", () => {
  it("rejects forged demo cookies without a verified Auth user", async () => {
    mocks.getUser.mockResolvedValue({ data: { user: null }, error: null });
    await expect(getResilientUser()).rejects.toThrow();
  });
  it("rejects Auth failures instead of opening a demo session", async () => {
    mocks.getUser.mockRejectedValue(new Error("Auth unavailable"));
    await expect(getResilientUser()).rejects.toThrow();
  });
  it.each([null, { role: "owner" }])("rejects missing or invalid persisted profile %j", async (profile) => {
    mocks.profile = { data: profile, error: null };
    await expect(getResilientUser()).rejects.toThrow();
  });
  it("never derives admin from email, metadata or cookies when profile lookup fails", async () => {
    mocks.profile = { data: null, error: { message: "offline" } };
    await expect(getResilientUser()).rejects.toThrow();
  });
  it("retains the persisted student role despite forged admin hints", async () => {
    mocks.profile.data.role = "student";
    expect(await getResilientUser()).toMatchObject({ isDemo: false, profile: { role: "student" } });
  });
});

describe("academic data provenance", () => {
  const readers = [
    ["profiles", () => getResilientProfiles()],
    ["progress", () => getResilientAllProgress()],
    ["enrollments", () => getResilientEnrollments()],
    ["attempts", () => getResilientQuizAttempts("all")],
    ["courses", () => getResilientCourses("real-user", true)],
  ] as const;
  it.each(readers)("returns empty real %s without adding simulated data", async (_, read) => {
    expect(await read()).toEqual([]);
    expect(mocks.admin).not.toHaveBeenCalled();
  });
  it.each(readers)("propagates %s database errors rather than inventing a result", async (_, read) => {
    mocks.result = { data: null, error: { message: "database unavailable" } };
    await expect(read()).rejects.toThrow();
  });
  it("does not substitute a mock course when the database has no match", async () => {
    mocks.result.data = null;
    expect(await getResilientCourseDetail("course-1")).toBeNull();
  });
  it("does not use service role for student progress", async () => {
    expect(await getResilientUserProgress("real-user")).toEqual([]);
    expect(mocks.admin).not.toHaveBeenCalled();
  });
});
