import { describe, expect, it } from "vitest";

import {
  addPendingLessonCompletion,
  removePendingLessonCompletion,
} from "./lesson-completion-queue";

describe("lesson completion queue", () => {
  it("retains a valid completion until the server confirms it", () => {
    expect(addPendingLessonCompletion([], "lesson-1")).toEqual(["lesson-1"]);
  });

  it("does not enqueue the same lesson more than once", () => {
    expect(addPendingLessonCompletion(["lesson-1"], "lesson-1")).toEqual([
      "lesson-1",
    ]);
  });

  it("removes only an acknowledged completion", () => {
    expect(
      removePendingLessonCompletion(["lesson-1", "lesson-2"], "lesson-1"),
    ).toEqual(["lesson-2"]);
  });
});
