import { beforeEach, expect, it, vi } from "vitest";
import { isValidElement, type ReactNode } from "react";
import { renderToStaticMarkup } from "react-dom/server";

const harness = vi.hoisted(() => ({
  values: [] as unknown[],
  cursor: 0,
  pending: [] as Promise<void>[],
  start: vi.fn(),
  submit: vi.fn(),
}));
vi.mock("react", async (original) => ({
  ...(await original<typeof import("react")>()),
  useEffect: vi.fn(),
  useState: (initial: unknown) => {
    const index = harness.cursor++;
    if (!(index in harness.values)) harness.values[index] = initial;
    return [
      harness.values[index],
      (value: unknown) => {
        harness.values[index] =
          typeof value === "function" ? value(harness.values[index]) : value;
      },
    ];
  },
  useRef: (initial: unknown) => {
    const index = harness.cursor++;
    if (!(index in harness.values))
      harness.values[index] = { current: initial };
    return harness.values[index];
  },
  useReducer: (
    reducer: (state: unknown, event: unknown) => unknown,
    initial: unknown,
  ) => {
    const index = harness.cursor++;
    if (!(index in harness.values)) harness.values[index] = initial;
    return [
      harness.values[index],
      (event: unknown) => {
        harness.values[index] = reducer(harness.values[index], event);
      },
    ];
  },
  startTransition: (callback: () => Promise<void>) => {
    harness.pending.push(callback());
  },
}));
vi.mock("@/app/actions/quiz.actions", () => ({
  startQuizAttemptAction: harness.start,
  submitQuizAttemptAction: harness.submit,
}));
import { QuizModule } from "./quiz-module";

const quiz = {
  id: "quiz",
  course_id: "course",
  title: "Exam",
  description: "",
  minPassScorePercentage: 70,
  questions: [{ id: "one", question: "Question", options: ["A", "B"] }],
};
function render(onComplete = vi.fn()) {
  harness.cursor = 0;
  return QuizModule({ quiz, onComplete });
}
function button(node: ReactNode, text: string): (() => void) | undefined {
  if (!isValidElement<{ children?: ReactNode; onClick?: () => void }>(node))
    return;
  if (node.type === "button" && renderToStaticMarkup(node).includes(text))
    return node.props.onClick;
  for (const child of [node.props.children].flat()) {
    const found = button(child, text);
    if (found) return found;
  }
}
beforeEach(() => {
  harness.values = [];
  harness.cursor = 0;
  harness.pending = [];
  vi.clearAllMocks();
});
it("keeps an uncertain submission locked and retries the same server attempt before showing success", async () => {
  const onComplete = vi.fn();
  harness.start.mockResolvedValue({
    success: true,
    attempt: { attempt_id: "server-attempt", started_at: "2026-09-21", quiz },
  });
  harness.submit
    .mockResolvedValueOnce({ error: "Sin conexión" })
    .mockResolvedValueOnce({
      success: true,
      attempt: {
        id: "server-attempt",
        user_id: "u",
        quiz_id: "quiz",
        score_percentage: 100,
        correct_count: 1,
        total_questions: 1,
        passed: true,
        completed_at: "2026-09-21",
        elapsed_seconds: 125,
      },
    });
  button(render(onComplete), "Iniciar examen")!();
  await Promise.all(harness.pending);
  button(render(onComplete), ">A</span>")!();
  button(render(onComplete), "Finalizar Examen")!();
  await Promise.all(harness.pending);
  const failed = render(onComplete);
  expect(renderToStaticMarkup(failed)).toContain("Sin conexión");
  expect(renderToStaticMarkup(failed)).not.toContain("Intento guardado");
  expect(onComplete).not.toHaveBeenCalled();
  button(failed, ">B</span>")!();
  button(render(onComplete), "Reenviar respuestas")!();
  await Promise.all(harness.pending);
  expect(harness.submit.mock.calls).toEqual([
    ["server-attempt", { one: 0 }],
    ["server-attempt", { one: 0 }],
  ]);
  expect(renderToStaticMarkup(render(onComplete))).toContain("2m 5s");
  expect(renderToStaticMarkup(render(onComplete))).toContain(
    "Intento guardado",
  );
  expect(onComplete).toHaveBeenCalledOnce();
});
