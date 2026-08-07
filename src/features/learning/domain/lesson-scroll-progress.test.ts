import { describe, expect, it } from "vitest";

import { getLessonScrollProgress } from "./lesson-scroll-progress";

describe("getLessonScrollProgress", () => {
  it("does not mark the requirement as complete before the learner scrolls", () => {
    expect(
      getLessonScrollProgress({
        articleHeight: 400,
        articleTop: 220,
        hasUserScrolled: false,
        viewportHeight: 900,
      }),
    ).toBe(0);
  });

  it("measures visible traversal after a learner scrolls", () => {
    expect(
      getLessonScrollProgress({
        articleHeight: 1_000,
        articleTop: -100,
        hasUserScrolled: true,
        viewportHeight: 900,
      }),
    ).toBe(100);
  });
});
