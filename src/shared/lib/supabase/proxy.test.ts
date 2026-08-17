import { describe, expect, it } from "vitest";

import { updateSession } from "./proxy";

describe("updateSession", () => {
  it("exposes the Supabase session refresh function", () => {
    expect(updateSession).toBeTypeOf("function");
  });
});
