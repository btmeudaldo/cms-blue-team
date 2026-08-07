import { describe, expect, it } from "vitest";

import { resolveLessonByIdentifier } from "./lesson-route";

const lessons = [
  { id: "11111111-1111-1111-1111-111111111111", slug: "intro" },
  { id: "22222222-2222-2222-2222-222222222222", slug: "advanced" },
];

describe("resolveLessonByIdentifier", () => {
  it("resolves a lesson by UUID or slug", () => {
    expect(resolveLessonByIdentifier(lessons, "intro")).toBe(lessons[0]);
    expect(
      resolveLessonByIdentifier(
        lessons,
        "22222222-2222-2222-2222-222222222222",
      ),
    ).toBe(lessons[1]);
  });

  it("does not substitute the first lesson for an unknown identifier", () => {
    expect(resolveLessonByIdentifier(lessons, "does-not-exist")).toBeNull();
  });
});
