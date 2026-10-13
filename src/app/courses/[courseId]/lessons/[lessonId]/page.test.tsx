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
    lessons: [
      { id: "l1", min_seconds: 2, word_count: 100, sequence_order: 1, title: "Tema 1", content_html: "<p>1</p>" },
      { id: "l2", min_seconds: 5, word_count: 200, sequence_order: 2, title: "Tema 2", content_html: "<p>2</p>" },
    ],
  }),
  getResilientUserProgress: async () => [
    { lesson_id: "l1", is_completed: true },
    { lesson_id: "other-course", is_completed: true },
  ],
  getResilientQuizForLesson: async () => null,
  getResilientQuizAttempts: async () => [],
}));
import Page from "./page";
it("uses the persisted minimum without imposing a different client duration", async () => {
  const page = await Page({
    params: Promise.resolve({ courseId: "c", lessonId: "l1" }),
  });
  expect(page.props.minSeconds).toBe(2);
  expect(page.key).toBe("l1");
  expect(page.props.completedLessonIds).toEqual(["l1"]);
});

it("allows any student to access lesson 2 without coming soon or draft locks", async () => {
  const page = await Page({
    params: Promise.resolve({ courseId: "c", lessonId: "l2" }),
  });
  // Must render LessonPlayer directly (not the draft lock screen)
  expect(page.key).toBe("l2");
  expect(page.props.minSeconds).toBe(5);
  expect(page.props.lessonTitle).toBe("Tema 2");
  // Lessons summary must have clean titles without "(🔒 Próximamente)"
  expect(page.props.lessonsSummary).toEqual([
    { id: "l1", title: "Tema 1", sequence_order: 1, slug: undefined },
    { id: "l2", title: "Tema 2", sequence_order: 2, slug: undefined },
  ]);
  // Previous lesson is l1
  expect(page.props.prevLessonId).toBe("l1");
});

