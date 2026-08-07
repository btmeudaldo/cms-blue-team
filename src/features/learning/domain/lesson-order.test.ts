import { describe, expect, it } from "vitest";

import { getNextLessonOrder } from "./lesson-order";

describe("getNextLessonOrder", () => {
  it("appends after the highest existing order instead of relying on row count", () => {
    expect(getNextLessonOrder([1, 3])).toBe(4);
  });

  it("starts at one when a course has no lessons", () => {
    expect(getNextLessonOrder([])).toBe(1);
  });
});
