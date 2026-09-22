import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";
const fixture = vi.hoisted(() => ({
  course: {
    id: "course",
    slug: "course",
    title: "Course",
    lessons: [
      { id: "lesson", slug: "lesson", title: "Lesson", sequence_order: 1 },
    ],
  },
  quiz: { id: "quiz", course_id: "course", lesson_id: "lesson", title: "Quiz" },
}));
vi.mock("@/shared/components/header", () => ({ Header: () => null }));
vi.mock("@/shared/lib/supabase/resilient", () => ({
  getResilientUser: async () => ({
    user: { id: "student" },
    profile: { role: "student" },
    isDemo: false,
  }),
  getResilientCourses: async () => [fixture.course],
  getResilientCourseDetail: async () => fixture.course,
  getResilientUserProgress: async () => [],
  getResilientQuizzes: async () => [fixture.quiz],
  getResilientQuizAttempts: async () => [
    { quiz_id: "quiz", passed: true, score_percentage: 100 },
  ],
  getResilientEnrollments: async () => [],
  getResilientInPersonExams: async () => [],
}));
import CoursesPage from "./page";
import CourseDetailPage from "./[courseId]/page";
describe("quiz-only pass is not represented as verified reading", () => {
  it("explains separate reading evidence in the course card", async () => {
    const html = renderToStaticMarkup(await CoursesPage());
    expect(html).toContain("100%");
    expect(html).toContain("Lecturas verificadas: 0/1");
  });
  it("counts quiz advancement in detail without claiming reading OK", async () => {
    const html = renderToStaticMarkup(
      await CourseDetailPage({
        params: Promise.resolve({ courseId: "course" }),
      }),
    );
    expect(html).toContain("100%");
    expect(html).toContain("1/1 lecciones");
    expect(html).toContain("Lectura pendiente");
    expect(html).not.toContain("Lectura OK");
  });
});
