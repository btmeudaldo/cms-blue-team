"use client";

import { useEffect, useState, type MouseEvent } from "react";

import { updateLessonVisibilityAction } from "@/app/actions/lesson.actions";
import type {
  LessonVisibilityState,
  SlideVisibility,
} from "@/features/learning/domain/slide-visibility";

type LessonVisibilityToggleProps = {
  lessonId: string;
  courseId: string;
  initialVisibility: LessonVisibilityState;
};

export function LessonVisibilityToggle({
  lessonId,
  courseId,
  initialVisibility,
}: LessonVisibilityToggleProps) {
  const [visibility, setVisibility] =
    useState<LessonVisibilityState>(initialVisibility);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    setVisibility(initialVisibility);
  }, [initialVisibility]);

  const handleChange = async (
    event: MouseEvent<HTMLButtonElement>,
    target: SlideVisibility,
  ) => {
    event.preventDefault();
    event.stopPropagation();
    if (isUpdating || visibility === target) return;

    const previous = visibility;
    setIsUpdating(true);
    setVisibility(target);
    try {
      await updateLessonVisibilityAction({
        lessonId,
        courseId,
        visibility: target,
      });
    } catch (error) {
      console.error("Error al actualizar visibilidad de lección:", error);
      setVisibility(previous);
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div
      className="flex items-center bg-slate-100 dark:bg-slate-800 p-0.5 rounded-xl border border-slate-200 dark:border-slate-700 shrink-0 gap-0.5"
      role="group"
      aria-label="Visibilidad de la lección"
    >
      {visibility === "mixed" && (
        <span
          className="px-1.5 text-[10px] font-bold text-amber-700 dark:text-amber-300"
          title="Esta lección tiene diapositivas públicas y ocultas"
        >
          Parcial
        </span>
      )}
      <button
        type="button"
        disabled={isUpdating}
        onClick={(e) => handleChange(e, "public")}
        aria-pressed={visibility === "public"}
        aria-label="Hacer visible toda la lección"
        title="Visible para todos"
        className={`flex items-center justify-center px-2 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer disabled:opacity-60 ${
          visibility === "public"
            ? "bg-white dark:bg-slate-900 text-emerald-600 dark:text-emerald-400 shadow-2xs border border-emerald-200 dark:border-emerald-800"
            : "text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
        }`}
      >
        <span>🌐</span>
      </button>
      <button
        type="button"
        disabled={isUpdating}
        onClick={(e) => handleChange(e, "private")}
        aria-pressed={visibility === "private"}
        aria-label="Ocultar toda la lección"
        title="Ocultar lección completa"
        className={`flex items-center justify-center px-2 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer disabled:opacity-60 ${
          visibility === "private"
            ? "bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 shadow-2xs border border-amber-300 dark:border-amber-700"
            : "text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
        }`}
      >
        <span>🔒</span>
      </button>
    </div>
  );
}
