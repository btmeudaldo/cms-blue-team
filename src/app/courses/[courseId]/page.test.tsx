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
    expect(studentHtml).not.toContain('aria-label="Visibilidad de la lección"');
    expect(studentHtml).toContain("(3 temas)");

    mockState.profile = { role: "superadmin" };
    const superAdminHtml = renderToStaticMarkup(
      await StudentCourseDetailPage({
        params: Promise.resolve({ courseId: "cessna-172-continental-diesel" }),
      }),
    );
    expect(superAdminHtml).toContain("4. Lección Antigua Oculta");
    expect(superAdminHtml).toContain("🔒 Oculta");
    expect(superAdminHtml).not.toContain("Solo superadmin");
    expect(superAdminHtml).toContain('aria-label="Visibilidad de la lección"');
    expect(superAdminHtml).toContain('aria-label="Hacer visible toda la lección"');
    expect(superAdminHtml).toContain('aria-label="Ocultar toda la lección"');
    expect(superAdminHtml).toContain("(4 temas)");
  });

  it("groups lessons visually by module_title when defined while keeping continuous numbering", async () => {
    mockState.course = {
      ...baseCourse,
      id: "aps-mcc",
      slug: "aps-mcc-a320",
      title: "Curso APS MCC",
      lessons: [
        {
          id: "m1-l1",
          slug: "sop-01",
          title: "SOP-01. Fundamentos",
          sequence_order: 1,
          min_seconds: 3600,
          word_count: 500,
          module_title: "Módulo 1 · Procedimientos Estándar y Normales",
        },
        {
          id: "m1-l2",
          slug: "sop-02",
          title: "SOP-02. Flow patterns",
          sequence_order: 2,
          min_seconds: 2700,
          word_count: 450,
          module_title: "Módulo 1 · Procedimientos Estándar y Normales",
        },
        {
          id: "m2-l1",
          slug: "sop-11",
          title: "SOP-11. Anormales",
          sequence_order: 3,
          min_seconds: 2700,
          word_count: 400,
          module_title: "Módulo 2 · Situaciones Anormales y Emergencias",
        },
      ],
    };

    const html = renderToStaticMarkup(
      await StudentCourseDetailPage({
        params: Promise.resolve({ courseId: "aps-mcc-a320" }),
      }),
    );

    expect(html).toContain("Módulo 1 · Procedimientos Estándar y Normales");
    expect(html).toContain("Módulo 2 · Situaciones Anormales y Emergencias");
    expect(html).toContain("2 temas");
    expect(html).toContain("1 h 45 min");
    expect(html).toContain("1 tema");
    expect(html).toContain("45 min");
    expect(html).toContain("0/2 completados");
    expect(html).toContain("0/1 completados");
    expect(html.indexOf("SOP-01. Fundamentos")).toBeLessThan(
      html.indexOf("SOP-02. Flow patterns"),
    );
    expect(html.indexOf("SOP-02. Flow patterns")).toBeLessThan(
      html.indexOf("Módulo 2 · Situaciones Anormales y Emergencias"),
    );
  });

  it("renders archive modules collapsed by default inside <details>", async () => {
    mockState.profile = { role: "superadmin" };
    mockState.course = {
      ...baseCourse,
      id: "aps-mcc",
      slug: "aps-mcc-a320",
      title: "Curso APS MCC",
      lessons: [
        {
          id: "m1-l1",
          slug: "sop-01",
          title: "SOP-01. Fundamentos",
          sequence_order: 1,
          min_seconds: 3600,
          word_count: 500,
          module_title: "Módulo 1 · Procedimientos Estándar y Normales",
        },
        {
          id: "arch-1",
          slug: "cta-1",
          title: "1. Aircraft General (CTA-1)",
          sequence_order: 101,
          min_seconds: 1,
          word_count: 300,
          module_title: "Archivo · Versión anterior (CTA / VAAF)",
          content_html:
            '<div class="lesson-slide-container" data-slide-visibility="private">Legacy</div>',
        },
      ],
    };

    const html = renderToStaticMarkup(
      await StudentCourseDetailPage({
        params: Promise.resolve({ courseId: "aps-mcc-a320" }),
      }),
    );

    expect(html).toContain("<details class=\"group\">");
    expect(html).not.toContain("<details class=\"group\" open");
    expect(html).toContain("Archivo · Versión anterior (CTA / VAAF)");
    expect(html).toContain("Mostrar");
    expect(html).toContain("🔒 Oculta");
  });
});
