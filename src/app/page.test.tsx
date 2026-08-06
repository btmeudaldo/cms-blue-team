import { describe, expect, it } from "vitest";

import HomePage from "./page";

describe("HomePage", () => {
  it("renders the landing page component without errors", () => {
    const page = HomePage();
    expect(page).toBeDefined();
    expect(page.type).toBe("div");
  });
});
