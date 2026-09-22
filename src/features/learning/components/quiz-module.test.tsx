import { describe, expect, it, vi } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import { createElement } from "react";
vi.mock("@/app/actions/quiz.actions", () => ({
  startQuizAttemptAction: vi.fn(),
  submitQuizAttemptAction: vi.fn(),
}));
import { QuizModule } from "./quiz-module";

const quiz = {
  id: "q",
  course_id: "c",
  title: "Examen",
  description: "Prueba",
  minPassScorePercentage: 70,
  questions: [
    {
      id: "one",
      question: "Pregunta reservada al intento",
      options: ["A", "B"],
      correctAnswerIndex: 0,
      explanation: "Solución",
    },
  ],
};
describe("quiz confirmed results UI", () => {
  it("requires an explicit server start before displaying questions", () => {
    const html = renderToStaticMarkup(createElement(QuizModule, { quiz }));
    expect(html).toContain("Iniciar examen");
    expect(html).not.toContain("Pregunta reservada al intento");
    expect(html).not.toContain("Intento guardado");
  });
  it("displays the persisted duration without publishing explanations", () => {
    const html = renderToStaticMarkup(
      createElement(QuizModule, {
        quiz,
        previousAttempt: {
          id: "a",
          user_id: "u",
          quiz_id: "q",
          score_percentage: 80,
          correct_count: 4,
          total_questions: 5,
          passed: true,
          elapsed_seconds: 93,
          completed_at: "2026-09-21",
        },
      }),
    );
    expect(html).toContain("1m 33s");
    expect(html).not.toContain("Revisar Explicaciones");
  });

  it("shows congratulations and review action instead of Reintentar Examen when passed with 100%", () => {
    const html = renderToStaticMarkup(
      createElement(QuizModule, {
        quiz,
        previousAttempt: {
          id: "a-100",
          user_id: "u",
          quiz_id: "q",
          score_percentage: 100,
          correct_count: 5,
          total_questions: 5,
          passed: true,
          elapsed_seconds: 60,
          completed_at: "2026-09-22",
        },
      }),
    );
    expect(html).toContain("¡Puntuación Perfecta (100%)!");
    expect(html).toContain("Evaluación Superada");
    expect(html).toContain("Volver a Evaluaciones");
    expect(html).not.toContain("Reintentar Examen");
    expect(html).not.toContain("Repetir");
  });

  it("shows Reintentar Examen and not passing state when exam was failed", () => {
    const html = renderToStaticMarkup(
      createElement(QuizModule, {
        quiz,
        previousAttempt: {
          id: "a-fail",
          user_id: "u",
          quiz_id: "q",
          score_percentage: 60,
          correct_count: 3,
          total_questions: 5,
          passed: false,
          elapsed_seconds: 45,
          completed_at: "2026-09-22",
        },
      }),
    );
    expect(html).toContain("No has alcanzado la nota mínima");
    expect(html).toContain("Evaluación No Superada");
    expect(html).toContain("Reintentar Examen");
    expect(html).not.toContain("Repetir cuestionario (Repaso)");
  });
});
