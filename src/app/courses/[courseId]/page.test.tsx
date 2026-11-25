import { renderToStaticMarkup } from "react-dom/server";
import { afterEach, describe, expect, it, vi } from "vitest";

const baseCourse = {
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

const { mockState } = vi.hoisted(() => ({
  mockState: {
    user: { id: "student-regular", email: "student@blueteam.com" },
    profile: { role: "student" },
    course: null as any,
  },
}));
mockState.course = baseCourse;

vi.mock("@/shared/components/header", () => ({ Header: () => null }));
vi.mock("@/shared/lib/supabase/resilient", () => ({
  getResilientUser: async () => ({
    user: mockState.user,
    profile: mockState.profile,
    isDemo: false,
  }),
  getResilientCourseDetail: async () => mockState.course,
  getResilientUserProgress: async () => [],
  getResilientQuizzes: async () => [],
  getResilientQuizAttempts: async () => [],
  getResilientInPersonExams: async () => [],
}));

import StudentCourseDetailPage from "./page";

afterEach(() => {
  mockState.user = { id: "student-regular", email: "student@blueteam.com" };
  mockState.profile = { role: "student" };
  mockState.course = baseCourse;
});

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

  it("hides 100%-private lessons for students and badges them for superadmin", async () => {
    mockState.course = {
      ...baseCourse,
      lessons: [
        ...baseCourse.lessons,
        {
          id: "lesson-hidden",
          slug: "legacy-hidden",
          title: "4. Lección Antigua Oculta",
          sequence_order: 4,
          min_seconds: 1,
          word_count: 100,
          content_html:
            '<div class="lesson-slide-container" data-slide-visibility="private">Slide 1</div><!-- pagebreak --><div class="lesson-slide-container" data-slide-visibility="private">Slide 2</div>',
        },
      ],
    };

    const studentHtml = renderToStaticMarkup(
      await StudentCourseDetailPage({
        params: Promise.resolve({ courseId: "cessna-172-continental-diesel" }),
      }),
    );
    expect(studentHtml).not.toContain("4. Lección Antigua Oculta");
    expect(studentHtml).not.toContain("legacy-hidden");
    expect(studentHtml).toContain("(3 temas)");

    mockState.profile = { role: "superadmin" };
    const superAdminHtml = renderToStaticMarkup(
      await StudentCourseDetailPage({
        params: Promise.resolve({ courseId: "cessna-172-continental-diesel" }),
      }),
    );
    expect(superAdminHtml).toContain("4. Lección Antigua Oculta");
    expect(superAdminHtml).toContain("Oculta (Solo superadmin)");
    expect(superAdminHtml).toContain("(4 temas)");
  });
});
