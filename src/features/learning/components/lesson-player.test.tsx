import { beforeEach, expect, it, vi } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
const harness = vi.hoisted(() => ({
  values: [] as unknown[],
  cursor: 0,
  effects: [] as (() => void | (() => void))[],
  start: vi.fn(),
  pause: vi.fn(),
  resume: vi.fn(),
  heartbeat: vi.fn(),
  complete: vi.fn(),
}));
vi.mock("react", async (original) => ({
  ...(await original<typeof import("react")>()),
  useState: (initial: unknown) => {
    const i = harness.cursor++;
    if (!(i in harness.values)) harness.values[i] = initial;
    return [
      harness.values[i],
      (v: unknown) => {
        harness.values[i] = typeof v === "function" ? v(harness.values[i]) : v;
      },
    ];
  },
  useRef: (initial: unknown) => {
    const i = harness.cursor++;
    if (!(i in harness.values)) harness.values[i] = { current: initial };
    return harness.values[i];
  },
  useEffect: (effect: () => void) => {
    harness.effects.push(effect);
  },
}));
vi.mock("next/navigation", () => ({ useRouter: () => ({ push: vi.fn() }) }));
vi.mock("next/link", () => ({ default: "a" }));
vi.mock("@/shared/components/header", () => ({ Header: () => null }));
vi.mock("@/app/actions/progress.actions", () => ({
  startLessonAction: harness.start,
  pauseLessonAction: harness.pause,
  resumeLessonAction: harness.resume,
  heartbeatLessonAction: harness.heartbeat,
  completeLessonAction: harness.complete,
}));
import { LessonPlayer } from "./lesson-player";
const progress = {
  user_id: "u",
  lesson_id: "l",
  active_seconds: 0,
  is_completed: false,
  is_active: true,
};
function render(extra: Partial<Parameters<typeof LessonPlayer>[0]> = {}) {
  harness.cursor = 0;
  harness.effects = [];
  return LessonPlayer({
    contentHtml: "<p>Lesson</p>",
    lessonId: "l",
    courseId: "c",
    lessonTitle: "Lesson",
    minSeconds: 10,
    pathToRevalidate: "/courses/c",
    ...extra,
  });
}
async function flush() {
  for (let i = 0; i < 15; i++) await Promise.resolve();
}
beforeEach(() => {
  vi.clearAllMocks();
  harness.values = [];
  harness.effects = [];
  harness.cursor = 0;
  vi.stubGlobal("window", {
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    requestAnimationFrame: vi.fn(),
    cancelAnimationFrame: vi.fn(),
    setInterval: vi.fn(),
    clearInterval: vi.fn(),
  });
  vi.stubGlobal("document", {
    visibilityState: "visible",
    hasFocus: vi.fn(() => true),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  });
  vi.stubGlobal("localStorage", { getItem: () => null });
  harness.resume.mockResolvedValue({ success: true, progress });
  harness.pause.mockResolvedValue({ success: true, progress });
});
it("waits for persisted start before sending focus mutations", async () => {
  let resolve!: (v: unknown) => void;
  harness.start.mockReturnValue(
    new Promise((r) => {
      resolve = r;
    }),
  );
  render();
  for (const effect of harness.effects) effect();
  await flush();
  expect(harness.start).toHaveBeenCalledOnce();
  expect(harness.resume).not.toHaveBeenCalled();
  expect(harness.pause).not.toHaveBeenCalled();
  resolve({ success: true, progress });
  await flush();
  expect(harness.resume).toHaveBeenCalledOnce();
});
it("shows start rejection without unlocking or reporting completion", async () => {
  harness.start.mockResolvedValue({ error: "No se pudo iniciar" });
  render();
  for (const effect of harness.effects) effect();
  await flush();
  const html = renderToStaticMarkup(render());
  expect(html).toContain('role="alert"');
  expect(html).toContain("No se pudo iniciar");
  expect(html).toContain("Reintentar conexión");
  expect(harness.resume).not.toHaveBeenCalled();
  expect(html).not.toContain("¡Felicidades!");
});
it("serializes effect restart behind the previous session cleanup", async () => {
  let resolve!: (v: unknown) => void;
  harness.start
    .mockReturnValueOnce(
      new Promise((r) => {
        resolve = r;
      }),
    )
    .mockResolvedValue({ success: true, progress });
  render();
  const cleanups = harness.effects.map((effect) => effect());
  await flush();
  for (const cleanup of cleanups) if (typeof cleanup === "function") cleanup();
  render();
  for (const effect of harness.effects) effect();
  await flush();
  expect(harness.start).toHaveBeenCalledTimes(1);
  resolve({ success: true, progress });
  await flush();
  expect(harness.start).toHaveBeenCalledTimes(2);
  expect(harness.pause.mock.invocationCallOrder.at(-1)).toBeLessThan(
    harness.resume.mock.invocationCallOrder.at(-1)!,
  );
});
it("keeps a failed resume visible instead of clearing it with a paused heartbeat", async () => {
  harness.start.mockResolvedValue({ success: true, progress });
  harness.resume.mockResolvedValue({ error: "Reanudación rechazada" });
  harness.heartbeat.mockResolvedValue({ success: true, progress });
  render();
  for (const effect of harness.effects) effect();
  await flush();
  for (const [callback] of vi.mocked(window.setInterval).mock.calls) {
    if (typeof callback === "function") callback();
  }
  await flush();
  expect(harness.heartbeat).not.toHaveBeenCalled();
  expect(renderToStaticMarkup(render())).toContain("Reanudación rechazada");
});
it("discards a queued heartbeat when a delayed resume fails", async () => {
  let resolve!: (value: unknown) => void;
  harness.start.mockResolvedValue({ success: true, progress });
  harness.resume.mockReturnValue(
    new Promise((done) => {
      resolve = done;
    }),
  );
  harness.heartbeat.mockResolvedValue({ success: true, progress });
  render();
  for (const effect of harness.effects) effect();
  await flush();
  for (const [callback] of vi.mocked(window.setInterval).mock.calls) {
    if (typeof callback === "function") callback();
  }
  resolve({ error: "Reanudación rechazada" });
  await flush();
  expect(harness.heartbeat).not.toHaveBeenCalled();
  expect(renderToStaticMarkup(render())).toContain("Reanudación rechazada");
});

function pulse() {
  for (const [callback] of vi.mocked(window.setInterval).mock.calls) if (typeof callback === "function") callback();
}
it("stops heartbeats and offers explicit resume when another lesson paused this record", async () => {
  harness.start.mockResolvedValue({ success: true, progress });
  harness.heartbeat.mockResolvedValue({ success: true, progress: { ...progress, is_active: false } });
  render(); for (const effect of harness.effects) effect(); await flush();
  pulse(); await flush();
  const html = renderToStaticMarkup(render());
  expect(html).toContain('role="alert"');
  expect(html).toContain("Registro pausado");
  expect(html).toContain("Reanudar lectura");
  pulse(); await flush();
  expect(harness.heartbeat).toHaveBeenCalledTimes(1);
  expect(harness.resume).toHaveBeenCalledTimes(1);
});
it("does not treat a normal blur pause as a competing lesson error", async () => {
  harness.start.mockResolvedValue({ success: true, progress });
  harness.pause.mockResolvedValue({ success: true, progress: { ...progress, is_active: false } });
  render(); for (const effect of harness.effects) effect(); await flush();
  vi.mocked(document.hasFocus).mockReturnValue(false);
  const blur = vi.mocked(window.addEventListener).mock.calls.find(([event]) => event === "blur")![1] as () => void;
  blur(); await flush();
  expect(renderToStaticMarkup(render())).not.toContain("Registro pausado");
});
it("reports inactive resume acknowledgements without sending automatic heartbeats", async () => {
  harness.start.mockResolvedValue({ success: true, progress });
  harness.resume.mockResolvedValue({ success: true, progress: { ...progress, is_active: false } });
  render(); for (const effect of harness.effects) effect(); await flush();
  expect(renderToStaticMarkup(render())).toContain("Reanudar lectura");
  pulse(); await flush(); expect(harness.heartbeat).not.toHaveBeenCalled();
});
it("does not describe a passed quiz as verified reading without its own record", () => {
  const html = renderToStaticMarkup(render({ quiz: { id: "q", title: "Quiz" }, quizAttempt: { passed: true, score_percentage: 100 } }));
  expect(html).toContain("Examen aprobado. La lectura verificada sigue pendiente.");
  expect(html).not.toContain("Lección 100% verificada");
});
it("describes both records only when reading and quiz are confirmed", () => {
  const html = renderToStaticMarkup(render({ isAlreadyCompleted: true, quiz: { id: "q", title: "Quiz" }, quizAttempt: { passed: true, score_percentage: 100 } }));
  expect(html).toContain("Lectura verificada y examen aprobado registrados.");
});
