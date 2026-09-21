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
});
