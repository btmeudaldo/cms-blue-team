import { describe, expect, it } from "vitest";

import HomePage from "./page";

describe("HomePage", () => {
  it("introduces the course CMS", () => {
    const page = HomePage();

    expect(page.props.children.props.children).toContain("CMS de formación");
  });
});
