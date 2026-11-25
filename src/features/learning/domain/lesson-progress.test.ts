import { describe, expect, it } from "vitest";
import {
  canCompleteLesson,
  formatLessonSeconds,
  getSlideRealMinSeconds,
  remainingLessonSeconds,
} from "./lesson-progress";
describe("server acknowledged lesson time", () => {
  it("computes real per-slide durations and formats seconds cleanly", () => {
    expect(getSlideRealMinSeconds(2700, 20)).toBe(135);
    expect(getSlideRealMinSeconds(10, 2)).toBe(5);
    expect(getSlideRealMinSeconds(0, 10)).toBe(0);
    expect(formatLessonSeconds(45)).toBe("45s");
    expect(formatLessonSeconds(135)).toBe("2:15");
    expect(formatLessonSeconds(3600)).toBe("60:00");
  });
  it("restores remaining time from the persisted active seconds", () => {
    expect(
      remainingLessonSeconds(60, { active_seconds: 45, is_completed: false }),
    ).toBe(15);
    expect(remainingLessonSeconds(60, null)).toBe(60);
  });
  it("never enables completion before acknowledgement or after an error", () => {
    expect(canCompleteLesson(null, 0, true, true, false)).toBe(false);
    expect(
      canCompleteLesson(
        { active_seconds: 60, is_completed: false },
        60,
        true,
        true,
        true,
      ),
    ).toBe(false);
  });
  it("requires persisted minimum time and reading interaction", () => {
    expect(
      canCompleteLesson(
        { active_seconds: 59, is_completed: false },
        60,
        true,
        true,
        false,
      ),
    ).toBe(false);
    expect(
      canCompleteLesson(
        { active_seconds: 60, is_completed: false },
        60,
        false,
        true,
        false,
      ),
    ).toBe(false);
    expect(
      canCompleteLesson(
        { active_seconds: 60, is_completed: false },
        60,
        true,
        true,
        false,
      ),
    ).toBe(true);
  });
});
