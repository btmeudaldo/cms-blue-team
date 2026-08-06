import { afterEach, describe, expect, it } from "vitest";

import { getSupabasePublicEnv } from "./env";

const originalUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const originalKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

afterEach(() => {
  process.env.NEXT_PUBLIC_SUPABASE_URL = originalUrl;
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY = originalKey;
});

describe("getSupabasePublicEnv", () => {
  it("rejects incomplete configuration", () => {
    delete process.env.NEXT_PUBLIC_SUPABASE_URL;
    delete process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

    expect(getSupabasePublicEnv).toThrow(
      "Missing Supabase public environment variables",
    );
  });

  it("returns the public connection values", () => {
    process.env.NEXT_PUBLIC_SUPABASE_URL = "http://127.0.0.1:54321";
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY = "public-key";

    expect(getSupabasePublicEnv()).toEqual({
      publishableKey: "public-key",
      url: "http://127.0.0.1:54321",
    });
  });
});
