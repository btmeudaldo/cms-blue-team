import { expect, it, vi } from "vitest";
vi.mock("next/navigation", () => ({
  notFound: () => {
    throw new Error("Not found");
  },
}));
vi.mock("@/features/learning/components/lesson-player", () => ({
  LessonPlayer: () => null,
}));
vi.mock("@/shared/lib/supabase/resilient", () => ({
  getResilientUser: async () => ({
    user: { id: "u" },
    profile: {},
    isDemo: false,
  }),
  getResilientCourseDetail: async () => ({
    id: "c",
    lessons: [{ id: "l", min_seconds: 2, word_count: 100, sequence_order: 1 }],
  }),
  getResilientUserProgress: async () => [
    { lesson_id: "l", is_completed: true },
    { lesson_id: "other-course", is_completed: true },
  ],
  getResilientQuizForLesson: async () => null,
  getResilientQuizAttempts: async () => [],
}));
import Page from "./page";
it("uses the persisted minimum without imposing a different client duration", async () => {
  const page = await Page({
    params: Promise.resolve({ courseId: "c", lessonId: "l" }),
  });
  expect(page.props.minSeconds).toBe(2);
  expect(page.key).toBe("l");
  expect(page.props.completedLessonIds).toEqual(["l"]);
});
