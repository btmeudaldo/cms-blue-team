"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { completeLessonAction, startLessonAction } from "@/app/actions/progress.actions";
import { Header } from "@/shared/components/header";

type LessonPlayerProps = {
  contentHtml: string;
  lessonId: string;
  courseId: string;
  lessonTitle: string;
  minSeconds: number;
  pathToRevalidate: string;
  nextLessonId?: string | null;
  prevLessonId?: string | null;
  isAlreadyCompleted?: boolean;
  userEmail?: string;
  userName?: string;
  role?: string;
};

export function LessonPlayer({
  contentHtml,
  lessonId,
  courseId,
  lessonTitle,
  minSeconds,
  pathToRevalidate,
  nextLessonId,
  isAlreadyCompleted = false,
  userEmail,
  userName,
  role = "student",
}: LessonPlayerProps) {
  const router = useRouter();
  const contentRef = useRef<HTMLDivElement>(null);

  const [remainingSeconds, setRemainingSeconds] = useState(isAlreadyCompleted ? 0 : minSeconds);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [reachedScrollThreshold, setReachedScrollThreshold] = useState(isAlreadyCompleted);
  const [isCompleting, setIsCompleting] = useState(false);
  const [isCompletedSuccess, setIsCompletedSuccess] = useState(isAlreadyCompleted);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Focus & Visibility state: timer ticks ONLY when window/tab is actively focused
  const [isWindowFocused, setIsWindowFocused] = useState(true);

  // Hydration-safe random horizontal position for anti-cheating button (between 8% and 82%)
  const [horizontalPosition, setHorizontalPosition] = useState(50);

  useEffect(() => {
    const array = new Uint32Array(1);
    crypto.getRandomValues(array);
    const randomPos = 8 + (array[0] % 75);
    setHorizontalPosition(randomPos);
  }, []);

  // Track window focus and document visibility
  useEffect(() => {
    function updateFocusState() {
      const isVisible = document.visibilityState === "visible";
      const hasFocus = document.hasFocus();
      setIsWindowFocused(isVisible && hasFocus);
    }

    updateFocusState();

    window.addEventListener("focus", updateFocusState);
    window.addEventListener("blur", updateFocusState);
    document.addEventListener("visibilitychange", updateFocusState);

    return () => {
      window.removeEventListener("focus", updateFocusState);
      window.removeEventListener("blur", updateFocusState);
      document.removeEventListener("visibilitychange", updateFocusState);
    };
  }, []);

  const canAdvance = (remainingSeconds === 0 && reachedScrollThreshold && !isCompleting) || isAlreadyCompleted;

  // Initialize progress on server
  useEffect(() => {
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

  // Scroll listener
  useEffect(() => {
    function handleWindowScroll() {
      const el = document.documentElement;
      const totalScrollable = el.scrollHeight - window.innerHeight;
      if (totalScrollable <= 0) {
        setScrollProgress(100);
        setReachedScrollThreshold(true);
        return;
      }
      const currentScroll = window.scrollY;
      const pct = Math.min(100, Math.round((currentScroll / totalScrollable) * 100));
      setScrollProgress(pct);
      if (pct >= 90) {
        setReachedScrollThreshold(true);
      }
    }

    handleWindowScroll(); // Initial check
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

      // Auto-navigate to next lesson or course summary if last lesson
      if (nextLessonId) {
        setTimeout(() => {
          router.push(`/courses/${courseId}/lessons/${nextLessonId}`);
        }, 1200);
      } else {
        setTimeout(() => {
          router.push(`/courses/${courseId}`);
        }, 1500);
      }
    } catch (err) {
      setErrorMessage((err as Error).message);
    } finally {
      setIsCompleting(false);
    }
  }

  // Timer circular percentage calculation
  const timerPct = minSeconds > 0 ? Math.round(((minSeconds - remainingSeconds) / minSeconds) * 100) : 100;

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-[#0b1120] text-slate-900 dark:text-slate-100 transition-colors">
      {/* Global Brand Header */}
      <Header userEmail={userEmail} userName={userName} role={role} />

      {/* Sticky Control Header Widget attached right below main Header */}
      <div className="sticky top-16 z-30 border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-xs py-3 px-4 sm:px-6">
        <div className="mx-auto max-w-5xl flex flex-wrap items-center justify-between gap-4">
          {/* Navigation & Title */}
          <div className="flex items-center gap-3">
            <Link
              href={`/courses/${courseId}`}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="Volver al curso"
            >
              &larr;
            </Link>
            <div>
              <h2 className="text-sm font-extrabold text-slate-900 dark:text-white line-clamp-1">{lessonTitle}</h2>
              <p className="text-[11px] text-slate-400 dark:text-slate-500 font-medium">Verificación Temporal Activa</p>
            </div>
          </div>

          {/* Verification Status Monitors */}
          <div className="flex items-center gap-4">
            {/* Countdown Badge with Pause Status when tab is inactive */}
            <div className="flex items-center gap-2 rounded-xl bg-slate-100 dark:bg-slate-800 px-3 py-1.5 border border-slate-200 dark:border-slate-700">
              <div className="relative flex h-5 w-5 items-center justify-center">
                <svg className="w-5 h-5 -rotate-90 transform" viewBox="0 0 36 36">
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
                <span className="text-[10px] font-bold uppercase text-slate-400 dark:text-slate-500">Tiempo Exigido</span>
                <span className="text-xs font-extrabold text-slate-800 dark:text-slate-200">
                  {remainingSeconds === 0
                    ? "✓ Cumplido"
                    : !isWindowFocused
                    ? "⏸ Pausado (Fuera de pestaña)"
                    : "En proceso..."}
                </span>
              </div>
            </div>

            {/* Scroll Indicator Badge */}
            <div className="flex items-center gap-2 rounded-xl bg-slate-100 dark:bg-slate-800 px-3 py-1.5 border border-slate-200 dark:border-slate-700">
              <div className="flex flex-col leading-tight text-right">
                <span className="text-[10px] font-bold uppercase text-slate-400 dark:text-slate-500">Desplazamiento 90%</span>
                <span className="text-xs font-extrabold text-slate-800 dark:text-slate-200">
                  {reachedScrollThreshold ? "✓ Alcanzado" : `${scrollProgress}%`}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Lesson Content Area */}
      <main className="flex-1 mx-auto w-full max-w-4xl px-4 sm:px-6 pt-8 pb-40 space-y-6">
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

        {/* Content Article Container with clear top spacing */}
        <article
          ref={contentRef}
          className="prose prose-slate dark:prose-invert max-w-none rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-10 shadow-sm leading-relaxed text-slate-800 dark:text-slate-200 space-y-4"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </main>

      {/* Strict Single Line Floating Requirement Checklist Capsule Pill */}
      {!canAdvance && (
        <div className="fixed bottom-28 left-1/2 -translate-x-1/2 z-40 bg-slate-900/95 dark:bg-slate-900/95 text-white backdrop-blur-xl px-5 py-2.5 rounded-full shadow-2xl border border-slate-700/80 text-xs font-semibold flex items-center gap-2.5 whitespace-nowrap pointer-events-none max-w-[95vw] overflow-x-auto">
          {/* Requirement 1: Time */}
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

          {/* Requirement 2: Scroll */}
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold transition-all whitespace-nowrap shrink-0 ${
              reachedScrollThreshold
                ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                : "bg-amber-500/20 text-amber-300 border border-amber-500/30 animate-pulse"
            }`}
          >
            {reachedScrollThreshold ? "✓ Desplazamiento cumplido" : "📜 Desplazamiento al final"}
          </span>
        </div>
      )}

      {/* Reserved Bottom Dock for Anti-Cheat Horizontal Variable Button */}
      <section
        aria-label="Avance de lección"
        className="fixed bottom-0 left-0 right-0 z-40 h-24 border-t border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg shadow-2xl flex items-center px-4 sm:px-8"
      >
        <div className="relative w-full max-w-5xl mx-auto h-full flex items-center">
          {/* Anti-cheat Button placed at randomized stable horizontal percentage */}
          <div
            style={{ left: `${horizontalPosition}%` }}
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 transition-all duration-300"
          >
            <button
              disabled={!canAdvance}
              onClick={handleComplete}
              className={`inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-extrabold text-white shadow-lg transition-all whitespace-nowrap ${
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
  );
}
