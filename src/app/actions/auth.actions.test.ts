import { beforeEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => ({
  signIn: vi.fn(),
  signUp: vi.fn(),
  setCookie: vi.fn(),
  getUser: vi.fn(),
}));
vi.mock("next/headers", () => ({
  cookies: async () => ({ set: mocks.setCookie }),
}));
vi.mock("next/navigation", () => ({
  redirect: (path: string) => {
    throw Object.assign(new Error(`REDIRECT:${path}`), {
      digest: "NEXT_REDIRECT",
    });
  },
}));
vi.mock("@/shared/lib/supabase/server", () => ({
  createSupabaseServerClient: async () => ({
    auth: {
      signInWithPassword: mocks.signIn,
      signUp: mocks.signUp,
      getUser: mocks.getUser,
    },
  }),
}));

import {
  signInAction,
  signUpAction,
  demoLoginAction,
  demoUserSelectLoginAction,
} from "./auth.actions";

function credentials(password = "blueteam") {
  const form = new FormData();
  form.set("email", "admin@example.com");
  form.set("password", password);
  return form;
}

beforeEach(() => {
  vi.clearAllMocks();
  mocks.signIn.mockResolvedValue({
    data: { user: null },
    error: { message: "invalid credentials" },
  });
  mocks.signUp.mockResolvedValue({
    data: { user: null, session: null },
    error: { message: "unavailable" },
  });
});

describe("authentication without demonstration bypasses", () => {
  it("rejects the former shared demo password when Auth rejects it", async () => {
    expect(await signInAction(credentials())).toHaveProperty("error");
    expect(mocks.setCookie).not.toHaveBeenCalled();
  });
  it("does not manufacture a session when registration fails", async () => {
    expect(await signUpAction(credentials())).toHaveProperty("error");
    expect(mocks.setCookie).not.toHaveBeenCalled();
  });
  it("requires confirmation when signup returns a user without a session", async () => {
    mocks.signUp.mockResolvedValue({
      data: { user: { id: "new-user" }, session: null },
      error: null,
    });
    expect(await signUpAction(credentials())).toHaveProperty("message");
    expect(mocks.setCookie).not.toHaveBeenCalled();
  });
  it.each(["admin", "instructor", "student"] as const)(
    "blocks direct %s demo login before contacting Auth",
    async (role) => {
      expect(await demoLoginAction(role)).toHaveProperty("error");
      expect(mocks.signIn).not.toHaveBeenCalled();
      expect(mocks.setCookie).not.toHaveBeenCalled();
    },
  );
  it("blocks caller-selected demo identity", async () => {
    expect(
      await demoUserSelectLoginAction("admin@blueteam.com", "admin"),
    ).toHaveProperty("error");
    expect(mocks.signIn).not.toHaveBeenCalled();
    expect(mocks.setCookie).not.toHaveBeenCalled();
  });
  it("preserves password whitespace for real credentials", async () => {
    await signInAction(credentials(" real password "));
    expect(mocks.signIn).toHaveBeenCalledWith({
      email: "admin@example.com",
      password: " real password ",
    });
  });
  it("redirects a successful real login without setting demo identity", async () => {
    mocks.signIn.mockResolvedValue({
      data: {
        user: { id: "real-user" },
        session: { access_token: "test-token" },
      },
      error: null,
    });
    await expect(signInAction(credentials("valid"))).rejects.toThrow(
      "REDIRECT:/courses",
    );
    expect(mocks.setCookie.mock.calls.every(([, value]) => value === "")).toBe(
      true,
    );
  });
});
