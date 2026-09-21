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
};
function render() {
  harness.cursor = 0;
  harness.effects = [];
  return LessonPlayer({
    contentHtml: "<p>Lesson</p>",
    lessonId: "l",
    courseId: "c",
    lessonTitle: "Lesson",
    minSeconds: 10,
    pathToRevalidate: "/courses/c",
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
    hasFocus: () => true,
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
