import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";

const testCourse = {
  id: "cessna-172",
  slug: "cessna-172-continental-diesel",
  title: "Curso Cessna 172",
  description: "Curso oficial",
  lessons: [
    {
      id: "lesson-1",
      slug: "generalidades",
      title: "1. Generalidades y Especificaciones",
      sequence_order: 1,
      min_seconds: 1,
      word_count: 500,
    },
    {
      id: "lesson-2",
      slug: "limitaciones",
      title: "2. Limitaciones Operacionales",
      sequence_order: 2,
      min_seconds: 1,
      word_count: 600,
    },
    {
      id: "lesson-3",
      slug: "sistemas",
      title: "3. Ingeniería y Sistemas",
      sequence_order: 3,
      min_seconds: 1,
      word_count: 700,
    },
  ],
};

vi.mock("@/shared/components/header", () => ({ Header: () => null }));
vi.mock("@/shared/lib/supabase/resilient", () => ({
  getResilientUser: async () => ({
    user: { id: "student-regular", email: "student@blueteam.com" },
    profile: { role: "student" },
    isDemo: false,
  }),
  getResilientCourseDetail: async () => testCourse,
  getResilientUserProgress: async () => [],
  getResilientQuizzes: async () => [],
  getResilientQuizAttempts: async () => [],
  getResilientInPersonExams: async () => [],
}));

import StudentCourseDetailPage from "./page";

describe("StudentCourseDetailPage lesson accessibility", () => {
  it("renders all lessons as accessible clickable links for regular students", async () => {
    const html = renderToStaticMarkup(
      await StudentCourseDetailPage({
        params: Promise.resolve({ courseId: "cessna-172-continental-diesel" }),
      }),
    );

    // No coming soon badges or locked states
    expect(html).not.toContain("Próximamente");
    expect(html).not.toContain("Módulo en fase de revisión pedagógica");
    expect(html).not.toContain("Borrador (Solo tú)");

    // All lessons must have clickable links
    expect(html).toContain('href="/courses/cessna-172-continental-diesel/lessons/generalidades"');
    expect(html).toContain('href="/courses/cessna-172-continental-diesel/lessons/limitaciones"');
    expect(html).toContain('href="/courses/cessna-172-continental-diesel/lessons/sistemas"');

    // All lesson titles must be present
    expect(html).toContain("1. Generalidades y Especificaciones");
    expect(html).toContain("2. Limitaciones Operacionales");
    expect(html).toContain("3. Ingeniería y Sistemas");
  });
});
