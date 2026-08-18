"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  completeLessonAction,
  heartbeatLessonAction,
  pauseLessonAction,
  resumeLessonAction,
  startLessonAction,
} from "@/app/actions/progress.actions";
import { Header } from "@/shared/components/header";
import { sanitizeLessonHtml } from "@/features/learning/domain/sanitize-html";
import { getNextAdvanceButtonPosition } from "@/features/learning/domain/advance-button-position";
import { getLessonScrollProgress } from "@/features/learning/domain/lesson-scroll-progress";
import { getLessonLayoutClasses } from "@/features/learning/domain/lesson-layout";

export type LessonSummary = {
  id: string;
  title: string;
  sequence_order: number;
  slug?: string;
};

type LessonPlayerProps = {
  contentHtml: string;
  lessonId: string;
  courseId: string;
  courseTitle?: string;
  lessonTitle: string;
  minSeconds: number;
  pathToRevalidate: string;
  nextLessonId?: string | null;
  prevLessonId?: string | null;
  isAlreadyCompleted?: boolean;
  userEmail?: string;
  userName?: string;
  role?: string;
  lessonsSummary?: LessonSummary[];
  completedLessonIds?: string[];
  quiz?: any;
  quizAttempt?: any;
};

export function LessonPlayer({
  contentHtml,
  lessonId,
  courseId,
  courseTitle = "Curso",
  lessonTitle,
  minSeconds,
  pathToRevalidate,
  nextLessonId,
  prevLessonId,
  isAlreadyCompleted = false,
  userEmail = "",
  userName = "",
  role = "student",
  lessonsSummary = [],
  completedLessonIds = [],
  quiz,
  quizAttempt,
}: LessonPlayerProps) {
  const router = useRouter();
  const safeContentHtml = sanitizeLessonHtml(contentHtml);
  const contentRef = useRef<HTMLDivElement>(null);
  const hasStartedRef = useRef(isAlreadyCompleted);
  const hasUserScrolledRef = useRef(isAlreadyCompleted);

  const [remainingSeconds, setRemainingSeconds] = useState(
    isAlreadyCompleted ? 0 : minSeconds,
  );
  const [scrollProgress, setScrollProgress] = useState(0);
  const [reachedScrollThreshold, setReachedScrollThreshold] =
    useState(isAlreadyCompleted);
  const [isCompleting, setIsCompleting] = useState(false);
  const [isCompletedSuccess, setIsCompletedSuccess] =
    useState(isAlreadyCompleted);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [hasServerStarted, setHasServerStarted] = useState(isAlreadyCompleted);
  const [isAdvanceArmed, setIsAdvanceArmed] = useState(isAlreadyCompleted);

  // Focus & Visibility state
  const [isWindowFocused, setIsWindowFocused] = useState(true);

  // Layout & Index State
  // layoutMode: "top-header" (Standard header on top) vs "vertical-left" (Navbar & panel integrated into left vertical column)
  const [layoutMode, setLayoutMode] = useState<"top-header" | "vertical-left">(
    "top-header",
  );
  // isIndexOpen: toggleable index visibility
  const [isIndexOpen, setIsIndexOpen] = useState(true);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isSiteHeaderHidden, setIsSiteHeaderHidden] = useState(false);

  // Hydration-safe random horizontal & vertical position for anti-cheating button
  const [horizontalPosition, setHorizontalPosition] = useState(50);
  const [verticalPosition, setVerticalPosition] = useState(50);
  const [verticalOffset, setVerticalOffset] = useState(0);

  const completedLessonSet = new Set(completedLessonIds);
  const lessonLayoutClasses = getLessonLayoutClasses(isIndexOpen);

  useEffect(() => {
    function handleHeaderVisibility(event: Event) {
      const customEvent = event as CustomEvent<{ hidden?: boolean }>;
      setIsSiteHeaderHidden(customEvent.detail?.hidden === true);
    }

    window.addEventListener("lesson-header-visibility", handleHeaderVisibility);
    return () =>
      window.removeEventListener(
        "lesson-header-visibility",
        handleHeaderVisibility,
      );
  }, []);

  // Load preferences from localStorage on mount
  useEffect(() => {
    try {
      const savedLayout = localStorage.getItem("cms_lesson_layout_mode");
      if (savedLayout === "top-header" || savedLayout === "vertical-left") {
        setLayoutMode(savedLayout);
      }
      const savedIndexState = localStorage.getItem("cms_lesson_index_open");
      if (savedIndexState !== null) {
        setIsIndexOpen(savedIndexState === "true");
      }
    } catch (e) {}
  }, []);

  const toggleLayoutMode = (mode: "top-header" | "vertical-left") => {
    setLayoutMode(mode);
    try {
      localStorage.setItem("cms_lesson_layout_mode", mode);
    } catch (e) {}
  };

  const toggleIndexOpen = () => {
    setIsIndexOpen((prev) => {
      const next = !prev;
      try {
        localStorage.setItem("cms_lesson_index_open", String(next));
      } catch (e) {}
      return next;
    });
  };

  useEffect(() => {
    const array = new Uint32Array(2);
    crypto.getRandomValues(array);
    const randomPos = 10 + (array[0] % 80);
    const randomVertPct = 25 + (array[1] % 51);
    const randomVert = (array[1] % 21) - 10;
    const frame = window.requestAnimationFrame(() => {
      setHorizontalPosition(randomPos);
      setVerticalPosition(randomVertPct);
      setVerticalOffset(randomVert);
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (isAlreadyCompleted) return;

    let isMounted = true;
    hasStartedRef.current = true;
    startLessonAction(lessonId)
      .then(() => {
        hasStartedRef.current = true;
        if (isMounted) setHasServerStarted(true);
      })
      .catch((err) => {
        hasStartedRef.current = false;
        if (isMounted) setErrorMessage((err as Error).message);
      });

    return () => {
      isMounted = false;
    };
  }, [isAlreadyCompleted, lessonId]);

  // Track window focus and document visibility
  useEffect(() => {
    function updateFocusState() {
      const isVisible = document.visibilityState === "visible";
      const hasFocus = document.hasFocus();
      setIsWindowFocused(isVisible && hasFocus);
      if (!hasStartedRef.current || isAlreadyCompleted) return;
      void (isVisible && hasFocus
        ? resumeLessonAction(lessonId)
        : pauseLessonAction(lessonId));
    }

    updateFocusState();

    window.addEventListener("focus", updateFocusState);
    window.addEventListener("blur", updateFocusState);
    document.addEventListener("visibilitychange", updateFocusState);

    return () => {
      window.removeEventListener("focus", updateFocusState);
      window.removeEventListener("blur", updateFocusState);
      document.removeEventListener("visibilitychange", updateFocusState);
      if (hasStartedRef.current && !isAlreadyCompleted)
        void pauseLessonAction(lessonId);
    };
  }, [hasServerStarted, isAlreadyCompleted, lessonId]);

  const requirementsMet = remainingSeconds === 0 && reachedScrollThreshold;
  const canAdvance =
    (requirementsMet && isAdvanceArmed && !isCompleting) || isAlreadyCompleted;

  // Initialize progress on server
  useEffect(() => {
    if (hasStartedRef.current) return;
    let isMounted = true;
    startLessonAction(lessonId).catch((err) => {
      if (isMounted) console.error("Error al iniciar lección:", err);
    });
    return () => {
      isMounted = false;
    };
  }, [lessonId]);

  // Countdown timer (ticks ONLY when window is active & focused)
  useEffect(() => {
    if (remainingSeconds <= 0 || !isWindowFocused) return;

    const timer = window.setInterval(() => {
      setRemainingSeconds((prev) => Math.max(0, prev - 1));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [remainingSeconds, isWindowFocused]);

  useEffect(() => {
    if (!hasServerStarted || !isWindowFocused || isCompletedSuccess) return;

    const heartbeat = window.setInterval(() => {
      void heartbeatLessonAction(lessonId).catch((err) => {
        setErrorMessage((err as Error).message);
      });
    }, 10_000);

    return () => window.clearInterval(heartbeat);
  }, [hasServerStarted, isCompletedSuccess, isWindowFocused, lessonId]);

  useEffect(() => {
    if (!requirementsMet || isAlreadyCompleted) return;

    const array = new Uint32Array(2);
    crypto.getRandomValues(array);
    let armTimer: number | undefined;
    const movementFrame = window.requestAnimationFrame(() => {
      setHorizontalPosition((currentPosition) =>
        getNextAdvanceButtonPosition(currentPosition, array[0]),
      );
      const randomVertPct = 15 + (array[1] % 71);
      setVerticalPosition(randomVertPct);
      setVerticalOffset((array[1] % 21) - 10);
      setIsAdvanceArmed(false);
      armTimer = window.setTimeout(() => setIsAdvanceArmed(true), 850);
    });

    return () => {
      window.cancelAnimationFrame(movementFrame);
      if (armTimer) window.clearTimeout(armTimer);
    };
  }, [isAlreadyCompleted, requirementsMet]);

  // Scroll listener
  useEffect(() => {
    function handleWindowScroll() {
      const article = contentRef.current;
      if (!article) return;
      hasUserScrolledRef.current = true;
      const bounds = article.getBoundingClientRect();
      const pct = getLessonScrollProgress({
        articleHeight: bounds.height,
        articleTop: bounds.top,
        hasUserScrolled: hasUserScrolledRef.current,
        viewportHeight: window.innerHeight,
      });
      setScrollProgress(pct);
      if (pct >= 90) {
        setReachedScrollThreshold(true);
      }
    }

    window.addEventListener("scroll", handleWindowScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleWindowScroll);
  }, []);

  async function handleComplete(event: React.MouseEvent<HTMLButtonElement>) {
    if (!event.isTrusted && process.env.NODE_ENV === "production") {
      alert("Operación denegada: Clic automatizado detectado.");
      return;
    }
    if (!canAdvance) return;

    setIsCompleting(true);
    setErrorMessage(null);

    try {
      await completeLessonAction(lessonId, pathToRevalidate);
      setIsCompletedSuccess(true);

      // If lesson does NOT have a quiz, auto-navigate to next lesson.
      // If lesson HAS a quiz, stay on page to allow taking the quiz!
      if (!quiz) {
        if (nextLessonId) {
          setTimeout(() => {
            router.push(`/courses/${courseId}/lessons/${nextLessonId}`);
          }, 1200);
        } else {
          setTimeout(() => {
            router.push(`/courses/${courseId}`);
          }, 1500);
        }
      }
    } catch (err) {
      setErrorMessage((err as Error).message);
    } finally {
      setIsCompleting(false);
    }
  }

  const timerPct =
    minSeconds > 0
      ? Math.round(((minSeconds - remainingSeconds) / minSeconds) * 100)
      : 100;

  // Render Lesson Navigation list component
  const renderLessonsNav = () => (
    <nav className="space-y-1.5">
      {lessonsSummary.map((les, index) => {
        const isCurrent = les.id === lessonId;
        const isDone = completedLessonSet.has(les.id);
        return (
          <Link
            key={les.id}
            href={`/courses/${courseId}/lessons/${les.id}`}
            onClick={() => setIsMobileSidebarOpen(false)}
            className={`flex items-center gap-3 p-2.5 rounded-2xl text-xs font-semibold transition-colors ${
              isCurrent
                ? "bg-blue-50 dark:bg-blue-950/60 text-[#1a80ff] border border-blue-200 dark:border-blue-900/40"
                : isDone
                  ? "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60"
                  : "text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/60"
            }`}
          >
            <span
              className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-extrabold ${
                isCurrent
                  ? "bg-[#1a80ff] text-white"
                  : isDone
                    ? "bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-400"
              }`}
            >
              {isDone ? "✓" : index + 1}
            </span>
            <span className="line-clamp-2 flex-1">{les.title}</span>
          </Link>
        );
      })}
    </nav>
  );

  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-[#0b1120] text-slate-900 dark:text-slate-100 transition-colors">
      {/* ------------------------------------------------------------- */}
      {/* MODE 1: LEFT VERTICAL NAVBAR (Navbar & Header on Left)       */}
      {/* ------------------------------------------------------------- */}
      {layoutMode === "vertical-left" && (
        <aside
          className={`hidden lg:flex flex-col shrink-0 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-all duration-300 z-30 sticky top-0 h-screen overflow-y-auto ${
            isIndexOpen ? "w-80 p-5 space-y-4" : "w-16 p-3 items-center"
          }`}
        >
          {/* Top Bar inside Left Sidebar */}
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3 w-full">
            <Link
              href={`/courses/${courseId}`}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shrink-0"
              title="Volver al curso"
            >
              &larr;
            </Link>

            {isIndexOpen && (
              <span className="text-[11px] font-extrabold uppercase text-[#1a80ff] tracking-wider truncate px-2">
                BLUE TEAM
              </span>
            )}

            {/* Collapse/Expand Sidebar Toggle */}
            <button
              onClick={toggleIndexOpen}
              className="h-8 w-8 rounded-lg flex items-center justify-center text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 font-bold transition-colors cursor-pointer shrink-0"
              title={isIndexOpen ? "Ocultar Índice" : "Mostrar Índice"}
            >
              {isIndexOpen ? "◀" : "▶"}
            </button>
          </div>

          {/* Expanded Sidebar Content */}
          {isIndexOpen ? (
            <div className="space-y-4 flex-1">
              {/* Course Title & Overall Progress */}
              <div className="space-y-2 border-b border-slate-100 dark:border-slate-800 pb-4">
                <span className="text-[10px] font-extrabold uppercase text-slate-400 dark:text-slate-500 tracking-wider">
                  Curso Actual
                </span>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white line-clamp-2">
                  {courseTitle}
                </h3>
                <div className="mt-2 space-y-1">
                  <div className="flex justify-between text-[11px] font-bold text-slate-500 dark:text-slate-400">
                    <span>Avance</span>
                    <span>
                      {lessonsSummary.length > 0
                        ? Math.round(
                            (completedLessonSet.size / lessonsSummary.length) *
                              100,
                          )
                        : 0}
                      %
                    </span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                    <div
                      className="h-full bg-[#1a80ff] transition-all duration-300"
                      style={{
                        width: `${
                          lessonsSummary.length > 0
                            ? Math.round(
                                (completedLessonSet.size /
                                  lessonsSummary.length) *
                                  100,
                              )
                            : 0
                        }%`,
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Lessons Index */}
              <div className="space-y-2">
                <span className="text-[10px] font-extrabold uppercase text-[#1a80ff] tracking-wider">
                  Índice de Lecciones
                </span>
                {renderLessonsNav()}
              </div>
            </div>
          ) : (
            /* Collapsed Icon Bar */
            <div className="flex flex-col items-center gap-4 pt-4 flex-1">
              <button
                onClick={toggleIndexOpen}
                className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950 text-[#1a80ff] hover:scale-110 transition-transform cursor-pointer"
                title="Abrir Índice de Lecciones"
              >
                📑
              </button>
            </div>
          )}

          {/* User profile footer at bottom of left bar */}
          {isIndexOpen && (
            <div className="border-t border-slate-100 dark:border-slate-800 pt-3 text-[11px] text-slate-400 dark:text-slate-500 font-medium">
              <p className="truncate font-semibold text-slate-700 dark:text-slate-300">
                {userName || userEmail || "Estudiante"}
              </p>
              <p className="text-[10px] uppercase tracking-wider text-[#1a80ff]">
                Modo Navbar Izquierda
              </p>
            </div>
          )}
        </aside>
      )}

      {/* Main Content & Top Bar Area */}
      <div className="flex-1 flex flex-col min-w-0 min-h-screen">
        {/* MODE 2: TOP HEADER (if in top-header mode) */}
        {layoutMode === "top-header" && (
          <Header
            userEmail={userEmail}
            userName={userName}
            role={role}
            autoHideOnScroll
          />
        )}

        {/* Sticky Control Bar */}
        <div
          className={`sticky z-50 border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-xs py-3 px-4 sm:px-6 lg:px-8 transition-transform duration-300 ease-out ${
            layoutMode === "top-header" ? "top-[112px]" : "top-0"
          }`}
          style={
            layoutMode === "top-header" && isSiteHeaderHidden
              ? {
                  transform: "translateY(-112px)",
                }
              : undefined
          }
        >
          <div className="mx-auto max-w-[1400px] flex flex-wrap items-center justify-between gap-4">
            {/* Title & Index Toggle */}
            <div className="flex items-center gap-3">
              {layoutMode === "top-header" && (
                <Link
                  href={`/courses/${courseId}`}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  title="Volver al curso"
                >
                  &larr;
                </Link>
              )}

              {/* Toggle Index Button (Works in both Modes) */}
              <button
                onClick={() => {
                  if (window.innerWidth < 1280) {
                    setIsMobileSidebarOpen(!isMobileSidebarOpen);
                  } else {
                    toggleIndexOpen();
                  }
                }}
                className={`flex h-9 px-3 items-center gap-1.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                  isIndexOpen
                    ? "bg-[#1a80ff] text-white border-blue-600 shadow-xs"
                    : "border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
                title="Mostrar u Ocultar el Índice de lecciones"
              >
                <span>📑</span>
                <span>{isIndexOpen ? "Ocultar Índice" : "Ver Índice"}</span>
              </button>

              <div>
                <h2 className="text-sm font-extrabold text-slate-900 dark:text-white line-clamp-1">
                  {lessonTitle}
                </h2>
                <p className="text-[11px] text-slate-400 dark:text-slate-500 font-medium">
                  {courseTitle}
                </p>
              </div>
            </div>

            {/* Monitor Badges */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Timer Countdown Badge */}
              <div className="flex items-center gap-2 rounded-xl bg-slate-100 dark:bg-slate-800 px-3 py-1.5 border border-slate-200 dark:border-slate-700">
                <div className="relative flex h-5 w-5 items-center justify-center">
                  <svg
                    className="w-5 h-5 -rotate-90 transform"
                    viewBox="0 0 36 36"
                  >
                    <path
                      className="text-slate-200 dark:text-slate-700"
                      strokeWidth="4"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className={
                        remainingSeconds === 0
                          ? "text-emerald-500"
                          : !isWindowFocused
                            ? "text-rose-500 animate-pulse"
                            : "text-[#1a80ff]"
                      }
                      strokeDasharray={`${timerPct}, 100`}
                      strokeWidth="4"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-[10px] font-bold uppercase text-slate-400 dark:text-slate-500">
                    Tiempo Exigido
                  </span>
                  <span className="text-xs font-extrabold text-slate-800 dark:text-slate-200">
                    {remainingSeconds === 0
                      ? "✓ Cumplido"
                      : !isWindowFocused
                        ? "⏸ Pausado"
                        : "En proceso..."}
                  </span>
                </div>
              </div>

              {/* Scroll Badge */}
              <div className="flex items-center gap-2 rounded-xl bg-slate-100 dark:bg-slate-800 px-3 py-1.5 border border-slate-200 dark:border-slate-700">
                <div className="flex flex-col leading-tight text-right">
                  <span className="text-[10px] font-bold uppercase text-slate-400 dark:text-slate-500">
                    Desplazamiento 90%
                  </span>
                  <span className="text-xs font-extrabold text-slate-800 dark:text-slate-200">
                    {reachedScrollThreshold
                      ? "✓ Alcanzado"
                      : `${scrollProgress}%`}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Drawer Overlay */}
        {isMobileSidebarOpen && (
          <div
            className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm min-[1280px]:hidden"
            onClick={() => setIsMobileSidebarOpen(false)}
          >
            <aside
              className="absolute left-0 top-0 bottom-0 w-80 bg-white dark:bg-slate-900 p-6 shadow-2xl space-y-4 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                <div>
                  <span className="text-[10px] font-extrabold uppercase text-[#1a80ff] tracking-wider">
                    Navegación del Curso
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white line-clamp-2">
                    {courseTitle}
                  </h3>
                </div>
                <button
                  onClick={() => setIsMobileSidebarOpen(false)}
                  className="text-slate-400 hover:text-slate-700 dark:hover:text-white text-lg font-bold p-1"
                >
                  ✕
                </button>
              </div>

              {renderLessonsNav()}
            </aside>
          </div>
        )}

        {/* Panoramic layout: the index reserves space and aligns with the lesson card. */}
        <div className={lessonLayoutClasses.outer}>
          {layoutMode === "top-header" && isIndexOpen && (
            <aside className="hidden min-[1280px]:block w-full max-h-[calc(100vh-18rem)] overflow-y-auto rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl p-5 shadow-2xl space-y-4 animate-in fade-in slide-in-from-left-4 duration-200">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                <div>
                  <span className="text-[10px] font-extrabold uppercase text-[#1a80ff] tracking-wider">
                    Navegación del Curso
                  </span>
                  <h3 className="text-xs font-bold text-slate-900 dark:text-white line-clamp-1">
                    {courseTitle}
                  </h3>
                </div>
                <button
                  onClick={toggleIndexOpen}
                  className="h-7 w-7 rounded-lg flex items-center justify-center text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 font-bold transition-colors cursor-pointer"
                  title="Cerrar índice flotante"
                >
                  ✕
                </button>
              </div>

              {/* Progress Bar */}
              <div className="space-y-1 border-b border-slate-100 dark:border-slate-800 pb-3">
                <div className="flex justify-between text-[11px] font-bold text-slate-500 dark:text-slate-400">
                  <span>Avance General</span>
                  <span>
                    {lessonsSummary.length > 0
                      ? Math.round(
                          (completedLessonSet.size / lessonsSummary.length) *
                            100,
                        )
                      : 0}
                    %
                  </span>
                </div>
                <div className="h-2 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <div
                    className="h-full bg-[#1a80ff] transition-all duration-300"
                    style={{
                      width: `${
                        lessonsSummary.length > 0
                          ? Math.round(
                              (completedLessonSet.size /
                                lessonsSummary.length) *
                                100,
                            )
                          : 0
                      }%`,
                    }}
                  />
                </div>
              </div>

              {/* Lessons List */}
              {renderLessonsNav()}
            </aside>
          )}

          {/* Main Article Container Area: adapts to the available viewport width. */}
          <main className={lessonLayoutClasses.main}>
            {errorMessage && (
              <div className="rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 p-4 text-xs font-semibold text-rose-700 dark:text-rose-300">
                ⚠ Error al completar la lección: {errorMessage}
              </div>
            )}

            {isCompletedSuccess && (
              <div className="rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 p-4 text-xs font-bold text-emerald-800 dark:text-emerald-300 flex items-center justify-between">
                <span>
                  {nextLessonId
                    ? "🎉 ¡Lección completada con éxito! Redirigiendo a la siguiente lección..."
                    : "🎉 ¡Felicidades! Has completado la última lección del curso. Redirigiendo..."}
                </span>
              </div>
            )}

            {/* Content Article Container: Full reading width preserved */}
            <article
              ref={contentRef}
              className="prose prose-slate lg:prose-lg xl:prose-xl dark:prose-invert min-h-screen max-w-none rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-10 lg:p-12 shadow-sm leading-relaxed text-slate-800 dark:text-slate-200 space-y-6 [&_img]:mx-auto [&_img]:rounded-2xl [&_img]:shadow-md [&_iframe]:w-full [&_iframe]:aspect-video [&_iframe]:rounded-2xl"
              dangerouslySetInnerHTML={{ __html: safeContentHtml }}
            />

            {/* End of Lesson Quiz Action Banner (Unlocked ONLY after clicking anticheat button) */}
            {quiz && (
              <div className="mt-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-md space-y-4">
                {quizAttempt?.passed ? (
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="space-y-1 text-center sm:text-left">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950 px-3 py-1 text-xs font-extrabold text-emerald-700 dark:text-emerald-300">
                        🏆 Examen Aprobado ({quizAttempt.score_percentage}%)
                      </span>
                      <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">
                        {quiz.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Lección 100% verificada e integrada en tu expediente
                        académico.
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full sm:w-auto">
                      <Link
                        href={`/quizzes/${quiz.id}`}
                        className="w-full sm:w-auto rounded-2xl border border-emerald-300 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/60 px-5 py-2.5 text-xs font-bold text-emerald-800 dark:text-emerald-200 hover:bg-emerald-100 transition-all text-center"
                      >
                        Revisar Examen
                      </Link>
                      {nextLessonId && (
                        <Link
                          href={`/courses/${courseId}/lessons/${nextLessonId}`}
                          className="w-full sm:w-auto rounded-2xl bg-[#1a80ff] px-5 py-2.5 text-xs font-bold text-white hover:bg-[#0066e6] transition-all text-center shadow-xs"
                        >
                          Siguiente Lección &rarr;
                        </Link>
                      )}
                    </div>
                  </div>
                ) : isAlreadyCompleted || isCompletedSuccess ? (
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
                      <div className="space-y-1 text-center sm:text-left">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 dark:bg-blue-950 px-3 py-1 text-xs font-extrabold text-[#1a80ff]">
                          ✨ Lectura Verificada — Examen Activado
                        </span>
                        <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">
                          {quiz.title}
                        </h3>
                        <p className="text-xs text-slate-600 dark:text-slate-400">
                          Has pulsado el botón de avance y la lectura fue
                          verificada en el servidor. Selecciona una opción:
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-end gap-3">
                      {nextLessonId && (
                        <Link
                          href={`/courses/${courseId}/lessons/${nextLessonId}`}
                          className="w-full sm:w-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-5 py-2.5 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all text-center"
                        >
                          Ir a la Siguiente Lección
                        </Link>
                      )}

                      <Link
                        href={`/quizzes/${quiz.id}`}
                        className="w-full sm:w-auto rounded-2xl bg-[#1a80ff] px-6 py-3 text-xs font-extrabold text-white shadow-md shadow-blue-500/20 hover:bg-[#0066e6] transition-all text-center animate-pulse"
                      >
                        📝 Realizar Examen Teórico Ahora &rarr;
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 opacity-75">
                    <div className="space-y-1 text-center sm:text-left">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 dark:bg-amber-950 px-3 py-1 text-xs font-extrabold text-amber-800 dark:text-amber-300">
                        🔒 Examen Bloqueado
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        {quiz.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Completa la lectura y pulsa el botón dinámico de avance
                        (Anticheating) en la barra inferior para habilitar este
                        examen.
                      </p>
                    </div>
                    <div className="rounded-2xl bg-slate-100 dark:bg-slate-800 px-5 py-2.5 text-xs font-bold text-slate-400 cursor-not-allowed">
                      🔒 Bloqueado en Lectura
                    </div>
                  </div>
                )}
              </div>
            )}
          </main>
        </div>

        {/* Requirements Checklist Floating Capsule for Mobile Screens */}
        {!canAdvance && (
          <div className="lg:hidden fixed bottom-20 left-1/2 -translate-x-1/2 z-40 bg-slate-900/95 dark:bg-slate-900/95 text-white backdrop-blur-xl px-5 py-2 rounded-full shadow-2xl border border-slate-700/80 text-xs font-semibold flex items-center gap-2.5 whitespace-nowrap pointer-events-none max-w-[95vw] overflow-x-auto">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold transition-all whitespace-nowrap shrink-0 ${
                remainingSeconds === 0
                  ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                  : !isWindowFocused
                    ? "bg-rose-500/20 text-rose-300 border border-rose-500/30 animate-pulse"
                    : "bg-amber-500/20 text-amber-300 border border-amber-500/30 animate-pulse"
              }`}
            >
              {remainingSeconds === 0
                ? "✓ Tiempo cumplido"
                : !isWindowFocused
                  ? "⏸ Pausado (Selecciona esta ventana)"
                  : "⏳ Tiempo en proceso"}
            </span>

            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold transition-all whitespace-nowrap shrink-0 ${
                reachedScrollThreshold
                  ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                  : "bg-amber-500/20 text-amber-300 border border-amber-500/30 animate-pulse"
              }`}
            >
              {reachedScrollThreshold
                ? "✓ Desplazamiento cumplido"
                : "📜 Desplazamiento al final"}
            </span>
          </div>
        )}

        {/* Permanent Bottom Horizontal Action Dock Bar */}
        <section
          aria-label="Avance de lección"
          className="fixed bottom-0 left-0 right-0 z-40 h-16 border-t border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg shadow-2xl flex items-center px-4 sm:px-8"
        >
          <div className="relative w-full mx-auto max-w-[1400px] h-full flex items-center">
            <div
              style={{
                left: `${horizontalPosition}%`,
                transform: "translate(-50%, -50%)",
              }}
              className="absolute top-1/2 transition-all duration-300"
            >
              <button
                disabled={!canAdvance}
                onClick={handleComplete}
                className={`inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-2.5 text-xs font-extrabold text-white shadow-lg transition-all whitespace-nowrap ${
                  canAdvance
                    ? "bg-[#1a80ff] hover:bg-[#0066e6] shadow-blue-500/30 hover:scale-105 active:scale-95 cursor-pointer"
                    : "bg-slate-300 dark:bg-slate-800 text-slate-500 dark:text-slate-500 cursor-not-allowed shadow-none"
                }`}
              >
                {isCompleting
                  ? "Verificando en servidor..."
                  : isCompletedSuccess
                    ? nextLessonId
                      ? "✓ Completada"
                      : "✓ Finalizado"
                    : nextLessonId
                      ? "Completar y Avanzar"
                      : "Finalizar"}
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
