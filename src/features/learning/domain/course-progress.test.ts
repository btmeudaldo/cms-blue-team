import { describe, expect, it } from "vitest";
import { summarizeCourseProgress } from "./course-progress";

const course = { id: "course", lessons: [{ id: "lesson", slug: "shared" }] };
const quiz = { id: "quiz", course_id: "course", lesson_id: "lesson" };
const passed = { quiz_id: "quiz", passed: true, score_percentage: 70 };

describe("course progress separates visual advancement from reading evidence", () => {
  it("counts a quiz-only pass as visual advancement, never reading", () => {
    const result = summarizeCourseProgress(course, [], [quiz], [passed]);
    expect(result.advancedLessonsCount).toBe(1);
    expect(result.readLessonsCount).toBe(0);
    expect(result.passedQuizzesCount).toBe(1);
    expect(result.progressPercent).toBe(100);
    expect(result.lessons[0]).toMatchObject({
      readingCompleted: false,
      quizPassed: true,
      advanced: true,
    });
  });
  it("keeps recorded reading separate from an unpassed quiz", () => {
    const result = summarizeCourseProgress(
      course,
      [{ lesson_id: "lesson", is_completed: true }],
      [quiz],
      [],
    );
    expect(result.readLessonsCount).toBe(1);
    expect(result.passedQuizzesCount).toBe(0);
    expect(result.progressPercent).toBe(50);
  });
  it("preserves a historical pass over a later higher score marked failed", () => {
    const result = summarizeCourseProgress(
      course,
      [],
      [quiz],
      [passed, { quiz_id: "quiz", passed: false, score_percentage: 80 }],
    );
    expect(result.lessons[0].attempt).toEqual(passed);
    expect(result.passedQuizzesCount).toBe(1);
  });
  it("does not associate another course quiz by a matching lesson slug", () => {
    const result = summarizeCourseProgress(
      course,
      [],
      [{ ...quiz, course_id: "other", lesson_slug: "shared" }],
      [passed],
    );
    expect(result.quizzes).toHaveLength(0);
    expect(result.advancedLessonsCount).toBe(0);
  });
  it("does not infer reading from a matching slug or incomplete progress", () => {
    const result = summarizeCourseProgress(
      course,
      [
        { lesson_id: "shared", is_completed: true },
        { lesson_id: "lesson", is_completed: false },
      ],
      [],
      [],
    );
    expect(result.readLessonsCount).toBe(0);
  });
  it("counts reading-only courses and empty courses without inventing completion", () => {
    expect(
      summarizeCourseProgress(
        course,
        [{ lesson_id: "lesson", is_completed: true }],
        [],
        [],
      ).progressPercent,
    ).toBe(100);
    expect(
      summarizeCourseProgress({ id: "empty", lessons: [] }, [], [], [])
        .progressPercent,
    ).toBe(0);
  });
});
