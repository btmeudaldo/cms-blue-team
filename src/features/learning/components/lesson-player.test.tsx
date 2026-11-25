import { beforeEach, expect, it, vi } from "vitest";
import { isValidElement, type ReactNode } from "react";
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
  useMemo: (fn: () => unknown) => fn(),
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
    scrollTo: vi.fn(),
  });
  vi.stubGlobal("document", {
    visibilityState: "visible",
    hasFocus: vi.fn(() => true),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  });
  vi.stubGlobal("localStorage", { getItem: () => null, setItem: vi.fn() });
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
  for (const [callback] of vi.mocked(window.setInterval).mock.calls)
    if (typeof callback === "function") callback();
}
it("stops heartbeats and offers explicit resume when another lesson paused this record", async () => {
  harness.start.mockResolvedValue({ success: true, progress });
  harness.heartbeat.mockResolvedValue({
    success: true,
    progress: { ...progress, is_active: false },
  });
  render();
  for (const effect of harness.effects) effect();
  await flush();
  pulse();
  await flush();
  const html = renderToStaticMarkup(render());
  expect(html).toContain('role="alert"');
  expect(html).toContain("Registro pausado");
  expect(html).toContain("Reanudar lectura");
  expect(html).toContain("⏸ Pausado (Reanuda esta lectura)");
  expect(html).not.toContain("En proceso...");
  expect(html).not.toContain("Tiempo en proceso");
  pulse();
  await flush();
  expect(harness.heartbeat).toHaveBeenCalledTimes(1);
  expect(harness.resume).toHaveBeenCalledTimes(1);
});
it("does not treat a normal blur pause as a competing lesson error", async () => {
  harness.start.mockResolvedValue({ success: true, progress });
  harness.pause.mockResolvedValue({
    success: true,
    progress: { ...progress, is_active: false },
  });
  render();
  for (const effect of harness.effects) effect();
  await flush();
  vi.mocked(document.hasFocus).mockReturnValue(false);
  const blur = vi
    .mocked(window.addEventListener)
    .mock.calls.find(([event]) => event === "blur")![1] as () => void;
  blur();
  await flush();
  expect(renderToStaticMarkup(render())).not.toContain("Registro pausado");
});
it("reports inactive resume acknowledgements without sending automatic heartbeats", async () => {
  harness.start.mockResolvedValue({ success: true, progress });
  harness.resume.mockResolvedValue({
    success: true,
    progress: { ...progress, is_active: false },
  });
  render();
  for (const effect of harness.effects) effect();
  await flush();
  expect(renderToStaticMarkup(render())).toContain("Reanudar lectura");
  pulse();
  await flush();
  expect(harness.heartbeat).not.toHaveBeenCalled();
});
it("does not describe a passed quiz as verified reading without its own record", () => {
  const html = renderToStaticMarkup(
    render({
      quiz: { id: "q", title: "Quiz" },
      quizAttempt: { passed: true, score_percentage: 100 },
    }),
  );
  expect(html).toContain(
    "Examen aprobado. La lectura verificada sigue pendiente.",
  );
  expect(html).not.toContain("Lección 100% verificada");
});
it("describes both records only when reading and quiz are confirmed", () => {
  const html = renderToStaticMarkup(
    render({
      isAlreadyCompleted: true,
      quiz: { id: "q", title: "Quiz" },
      quizAttempt: { passed: true, score_percentage: 100 },
    }),
  );
  expect(html).toContain("Lectura verificada y examen aprobado registrados.");
});

function findResume(node: ReactNode): (() => void) | undefined {
  if (!isValidElement<{ children?: ReactNode; onClick?: () => void }>(node))
    return;
  if (node.type === "button" && node.props.children === "Reanudar lectura")
    return node.props.onClick;
  for (const child of [node.props.children].flat()) {
    const result = findResume(child);
    if (result) return result;
  }
}
it("resumes a paused record only after explicit retry and restores confirmed heartbeats", async () => {
  harness.start.mockResolvedValue({ success: true, progress });
  harness.heartbeat
    .mockResolvedValueOnce({
      success: true,
      progress: { ...progress, is_active: false },
    })
    .mockResolvedValue({ success: true, progress });
  render();
  const cleanups = harness.effects.map((effect) => effect());
  await flush();
  pulse();
  await flush();
  findResume(render())!();
  for (const cleanup of cleanups) if (typeof cleanup === "function") cleanup();
  render();
  for (const effect of harness.effects) effect();
  await flush();
  expect(harness.resume).toHaveBeenCalledTimes(2);
  expect(renderToStaticMarkup(render())).not.toContain("Registro pausado");
  const callback = vi.mocked(window.setInterval).mock.calls.at(-1)![0];
  if (typeof callback === "function") callback();
  await flush();
  expect(harness.heartbeat).toHaveBeenCalledTimes(2);
});

it("starts with the course temario hidden by default with a toggle button", () => {
  const html = renderToStaticMarkup(render());
  // The Temario button is present to toggle navigation
  expect(html).toContain("Temario");
  // Default desktop aside is NOT rendered when isIndexOpen is false
  expect(html).not.toContain("Cerrar índice flotante");
});

it("hides the bottom action footer dock while required anticheat timer is counting down", () => {
  const html = renderToStaticMarkup(render({ minSeconds: 60, isAlreadyCompleted: false }));
  // Footer dock is not rendered while reading
  expect(html).not.toContain('aria-label="Avance de lección"');
  expect(html).not.toContain("Completar y Avanzar");
});

it("reveals the bottom action footer dock when the lesson is completed", () => {
  const html = renderToStaticMarkup(render({ minSeconds: 60, isAlreadyCompleted: true }));
  // Footer dock is rendered once requirements or completion are met
  expect(html).toContain('aria-label="Avance de lección"');
  expect(html).toContain("✓ Finalizado");
});

it("shows the lateral documentation toggle button for C172 courses and keeps drawer hidden by default", () => {
  const html = renderToStaticMarkup(
    render({
      courseId: "cessna-172-continental-diesel",
    }),
  );
  // Button is present in header
  expect(html).toContain("Documentación POH");
  // Lateral drawer is hidden by default
  expect(html).not.toContain("Biblioteca Oficial de Flota");
});

it("renders slide pagination when content contains pagebreaks", () => {
  const html = renderToStaticMarkup(
    render({
      contentHtml: "<p>Slide Uno</p><!-- pagebreak --><p>Slide Dos</p>",
    }),
  );
  expect(html).toContain("Diapositiva 1 de 2");
  expect(html).toContain("Slide Uno");
  expect(html).not.toContain("Slide Dos");
});

it("controls real time per slide for students and never renders the staff speed selector", () => {
  // Initial render: slide 1 of 2 with 10s total (5s per slide)
  const initialHtml = renderToStaticMarkup(
    render({
      contentHtml: "<p>Slide Uno</p><!-- pagebreak --><p>Slide Dos</p>",
      minSeconds: 10,
      role: "student",
      isAlreadyCompleted: false,
    }),
  );
  // Bottom dock bar must be hidden while real per-slide timer is active
  expect(initialHtml).not.toContain('aria-label="Avance de lección"');
  expect(initialHtml).toContain("Tiempo Diapositiva (5s)");
  expect(initialHtml).not.toContain('aria-label="Modo de tiempo por diapositiva"');

  // Run effects to register intervals
  for (const effect of harness.effects) effect();

  // Find the slide timer interval callback (first setInterval call when totalLessonPages > 1)
  const slideTimerCallback = vi.mocked(window.setInterval).mock.calls[0][0];

  // After 4 ticks, slide 1 still needs 1s before advancing
  for (let i = 0; i < 4; i++) {
    if (typeof slideTimerCallback === "function") slideTimerCallback();
  }
  const notReadyHtml = renderToStaticMarkup(
    render({
      contentHtml: "<p>Slide Uno</p><!-- pagebreak --><p>Slide Dos</p>",
      minSeconds: 10,
      role: "student",
      isAlreadyCompleted: false,
    }),
  );
  expect(notReadyHtml).toContain("Tiempo Diapositiva (1s)");
  expect(notReadyHtml).not.toContain("Siguiente Diapositiva");

  // 5th tick fulfills the 5s real duration of slide 1
  if (typeof slideTimerCallback === "function") slideTimerCallback();

  // Re-render: bottom dock bar must now appear with "Siguiente Diapositiva (2/2)"
  const fulfilledHtml = renderToStaticMarkup(
    render({
      contentHtml: "<p>Slide Uno</p><!-- pagebreak --><p>Slide Dos</p>",
      minSeconds: 10,
      role: "student",
      isAlreadyCompleted: false,
    }),
  );
  expect(fulfilledHtml).toContain('aria-label="Avance de lección"');
  expect(fulfilledHtml).toContain("Siguiente Diapositiva (2/2)");
});

it("ensures top bar has no Siguiente button, advancing exclusively via anti-cheat dock", () => {
  const html = renderToStaticMarkup(
    render({
      contentHtml: "<p>Slide Uno</p><!-- pagebreak --><p>Slide Dos</p>",
      minSeconds: 10,
      isAlreadyCompleted: false,
    }),
  );
  // Top nav bar must NOT have a Siguiente button
  expect(html).not.toContain("Diapositiva siguiente");
  expect(html).toContain('aria-label="Navegación de diapositivas"');
});

it("links to course lesson panel instead of jumping to next lesson when completing lesson with quiz", () => {
  const html = renderToStaticMarkup(
    render({
      isAlreadyCompleted: true,
      courseId: "cessna-172",
      nextLessonId: "lesson-2",
      quiz: { id: "quiz-1", title: "Examen Lección 1" },
      quizAttempt: { passed: false, score_percentage: 0 },
    }),
  );
  // Must offer returning to lesson panel
  expect(html).toContain("Volver al Panel de Lecciones");
  expect(html).toContain('href="/courses/cessna-172"');
  // Must offer taking the quiz
  expect(html).toContain("Realizar Examen Teórico Ahora");
  expect(html).toContain('href="/quizzes/quiz-1"');
  // Must NOT offer jumping directly to next lesson
  expect(html).not.toContain('href="/courses/cessna-172/lessons/lesson-2"');
});

it("links to course lesson panel when quiz is already passed", () => {
  const html = renderToStaticMarkup(
    render({
      isAlreadyCompleted: true,
      courseId: "cessna-172",
      nextLessonId: "lesson-2",
      quiz: { id: "quiz-1", title: "Examen Lección 1" },
      quizAttempt: { passed: true, score_percentage: 100 },
    }),
  );
  expect(html).toContain("Volver al Panel de Lecciones");
  expect(html).toContain('href="/courses/cessna-172"');
  expect(html).not.toContain('href="/courses/cessna-172/lessons/lesson-2"');
});

function findButtonByText(
  node: ReactNode,
  needle: string,
): { props: { onClick?: (e?: unknown) => void; disabled?: boolean } } | undefined {
  if (!isValidElement<{ children?: ReactNode; onClick?: (e?: unknown) => void; disabled?: boolean }>(node)) return;
  if (node.type === "button" && renderToStaticMarkup(node).includes(needle)) return node;
  for (const child of [node.props.children].flat()) {
    const match = findButtonByText(child, needle);
    if (match) return match;
  }
}

it("defaults staff to 1s preview selector without recording lesson/course completion in Supabase", async () => {
  render({
    contentHtml: "<p>Slide Uno</p><!-- pagebreak --><p>Slide Dos</p>",
    minSeconds: 2700,
    nextLessonId: "sop-03",
    role: "instructor",
    isAlreadyCompleted: false,
  });
  for (const effect of harness.effects) effect();
  await flush();

  // Zero progress RPC calls in default 1s preview mode
  expect(harness.start).not.toHaveBeenCalled();

  const slide1Timer = vi.mocked(window.setInterval).mock.calls[0][0];
  if (typeof slide1Timer === "function") slide1Timer();

  const afterSlide1Tree = render({
    contentHtml: "<p>Slide Uno</p><!-- pagebreak --><p>Slide Dos</p>",
    minSeconds: 2700,
    nextLessonId: "sop-03",
    role: "instructor",
    isAlreadyCompleted: false,
  });
  const afterSlide1Html = renderToStaticMarkup(afterSlide1Tree);
  expect(afterSlide1Html).toContain('aria-label="Modo de tiempo por diapositiva"');
  expect(afterSlide1Html).toContain("Real");
  expect(afterSlide1Html).toContain("22:30");

  findButtonByText(afterSlide1Tree, "Siguiente Diapositiva")?.props.onClick?.();

  const intervalBeforeSlide2 = vi.mocked(window.setInterval).mock.calls.length;
  render({
    contentHtml: "<p>Slide Uno</p><!-- pagebreak --><p>Slide Dos</p>",
    minSeconds: 2700,
    nextLessonId: "sop-03",
    role: "instructor",
    isAlreadyCompleted: false,
  });
  for (const effect of harness.effects) effect();
  const slide2Timer = vi.mocked(window.setInterval).mock.calls[intervalBeforeSlide2]?.[0];
  if (typeof slide2Timer === "function") slide2Timer();

  const finalSlideTree = render({
    contentHtml: "<p>Slide Uno</p><!-- pagebreak --><p>Slide Dos</p>",
    minSeconds: 2700,
    nextLessonId: "sop-03",
    role: "instructor",
    isAlreadyCompleted: false,
  });
  const finalSlideHtml = renderToStaticMarkup(finalSlideTree);
  expect(finalSlideHtml).toContain("Finalizar vista previa (sin registrar)");
  expect(finalSlideHtml).toContain("Siguiente lección");

  findButtonByText(finalSlideTree, "Finalizar vista previa")?.props.onClick?.();
  const previewDoneHtml = renderToStaticMarkup(
    render({
      contentHtml: "<p>Slide Uno</p><!-- pagebreak --><p>Slide Dos</p>",
      minSeconds: 2700,
      nextLessonId: "sop-03",
      role: "instructor",
      isAlreadyCompleted: false,
    }),
  );
  await flush();
  expect(previewDoneHtml).toContain("Vista previa finalizada");
  expect(previewDoneHtml).toContain("no</strong> se han registrado como completados");
  expect(previewDoneHtml).toContain('href="/courses/c/lessons/sop-03"');
  expect(harness.complete).not.toHaveBeenCalled();
  expect(harness.start).not.toHaveBeenCalled();
});

it("keeps completion locked when staff switches to Real mode until persisted minSeconds elapses, avoiding 400 RPC calls", async () => {
  const partialProgress = { ...progress, active_seconds: 120 };
  harness.start.mockResolvedValue({ success: true, progress: partialProgress });
  harness.resume.mockResolvedValue({ success: true, progress: partialProgress });

  // Switch from default 1s mode to Real mode via left selector
  const initialTree = render({
    contentHtml: "<p>Slide Uno</p><!-- pagebreak --><p>Slide Dos</p>",
    minSeconds: 2700,
    role: "superadmin",
    isAlreadyCompleted: false,
  });
  findButtonByText(initialTree, "Real")?.props.onClick?.();

  render({
    contentHtml: "<p>Slide Uno</p><!-- pagebreak --><p>Slide Dos</p>",
    minSeconds: 2700,
    role: "superadmin",
    isAlreadyCompleted: false,
  });
  for (const effect of harness.effects) effect();
  await flush();
  expect(harness.start).toHaveBeenCalledOnce();

  // Fulfill real per-slide time (1350s = 22:30 on 2 slides) to reach slide 2
  const slideTimerCallback = vi.mocked(window.setInterval).mock.calls[0][0];
  for (let i = 0; i < 1350; i++) {
    if (typeof slideTimerCallback === "function") slideTimerCallback();
  }
  const renderedAfterSlide1 = render({
    contentHtml: "<p>Slide Uno</p><!-- pagebreak --><p>Slide Dos</p>",
    minSeconds: 2700,
    role: "superadmin",
    isAlreadyCompleted: false,
  });

  findButtonByText(renderedAfterSlide1, "Siguiente Diapositiva")?.props.onClick?.();

  // Re-render on slide 2 so its fresh useEffect captures currentPageIndex = 1
  const slide2CallCountBefore = vi.mocked(window.setInterval).mock.calls.length;
  render({
    contentHtml: "<p>Slide Uno</p><!-- pagebreak --><p>Slide Dos</p>",
    minSeconds: 2700,
    role: "superadmin",
    isAlreadyCompleted: false,
  });
  for (const effect of harness.effects) effect();
  const slide2TimerCallback = vi.mocked(window.setInterval).mock.calls[slide2CallCountBefore]?.[0];
  for (let i = 0; i < 1350; i++) {
    if (typeof slide2TimerCallback === "function") slide2TimerCallback();
  }

  const finalSlideTree = render({
    contentHtml: "<p>Slide Uno</p><!-- pagebreak --><p>Slide Dos</p>",
    minSeconds: 2700,
    role: "superadmin",
    isAlreadyCompleted: false,
  });
  const finalSlideHtml = renderToStaticMarkup(finalSlideTree);
  expect(finalSlideHtml).toContain("Tiempo mínimo restante: 43:00");
  expect(finalSlideHtml).toContain("Salir (vista previa)");
  expect(finalSlideHtml).not.toContain("✓ Tiempo cumplido");
  const completeBtn = findButtonByText(finalSlideTree, "Tiempo mínimo restante");
  expect(completeBtn?.props.disabled).toBe(true);
  completeBtn?.props.onClick?.({ isTrusted: true });
  await flush();
  expect(harness.complete).not.toHaveBeenCalled();
});

