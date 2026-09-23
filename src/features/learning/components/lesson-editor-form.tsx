"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LessonEditorToolbar } from "./lesson-editor-toolbar";
import { calculateReadingTime } from "../domain/reading-time";
import {
  clearLessonDraft,
  hasUnsavedDraftDifference,
  loadLessonDraft,
  saveLessonDraft,
} from "../domain/lesson-draft-storage";

type LessonEditorFormProps = {
  action: (formData: FormData) => Promise<void>;
  courseId: string;
  defaultTitle?: string;
  defaultSlug?: string;
  defaultOrder?: number;
  defaultMinSeconds?: number;
  defaultContentHtml?: string;
  isEditing?: boolean;
};

export function LessonEditorForm({
  action,
  courseId,
  defaultTitle = "",
  defaultSlug = "",
  defaultOrder = 1,
  defaultMinSeconds,
  defaultContentHtml = "",
  isEditing = false,
}: LessonEditorFormProps) {
  const router = useRouter();
  const [contentHtml, setContentHtml] = useState(defaultContentHtml);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const draftIdentifier = defaultSlug || "new";
  const [draftSavedAt, setDraftSavedAt] = useState<string | null>(null);
  const [recoveredDraft, setRecoveredDraft] = useState<string | null>(null);

  // Check for unsaved local draft on mount
  useEffect(() => {
    const existing = loadLessonDraft(courseId, draftIdentifier);
    if (
      existing &&
      hasUnsavedDraftDifference(defaultContentHtml, existing.contentHtml)
    ) {
      setRecoveredDraft(existing.contentHtml);
    }
  }, [courseId, draftIdentifier, defaultContentHtml]);

  // Debounced auto-save to localStorage
  useEffect(() => {
    if (!contentHtml || contentHtml === defaultContentHtml) return;
    const timer = setTimeout(() => {
      saveLessonDraft(courseId, draftIdentifier, contentHtml);
      const now = new Date();
      setDraftSavedAt(
        now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      );
    }, 1500);
    return () => clearTimeout(timer);
  }, [contentHtml, courseId, draftIdentifier, defaultContentHtml]);

  const wordCount = contentHtml
    .replace(/<[^>]*>/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
  const calculatedReadingSeconds = calculateReadingTime(contentHtml);
  const formattedReadingTime =
    calculatedReadingSeconds >= 60
      ? `${Math.floor(calculatedReadingSeconds / 60)}m ${calculatedReadingSeconds % 60}s`
      : `${calculatedReadingSeconds}s`;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    const formData = new FormData(event.currentTarget);
    formData.set("contentHtml", contentHtml);

    try {
      await action(formData);
      clearLessonDraft(courseId, draftIdentifier);
      router.push(`/admin/courses/${courseId}`);
      router.refresh();
    } catch (err) {
      console.error("Error al guardar lección:", err);
      setErrorMessage((err as Error).message);
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {errorMessage && (
        <div className="rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 p-4 text-xs font-semibold text-rose-700 dark:text-rose-300">
          ⚠ Error: {errorMessage}
        </div>
      )}

      {recoveredDraft && (
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-amber-300 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/40 p-4 text-xs font-semibold text-amber-900 dark:text-amber-200 shadow-xs">
          <div className="flex items-center gap-2">
            <span className="text-base">⚠️</span>
            <span>
              Se ha detectado un borrador local no guardado para esta lección.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                setContentHtml(recoveredDraft);
                setRecoveredDraft(null);
              }}
              className="rounded-xl bg-amber-600 hover:bg-amber-700 text-white px-3 py-1.5 text-xs font-bold transition-colors cursor-pointer"
            >
              Restaurar Borrador
            </button>
            <button
              type="button"
              onClick={() => {
                clearLessonDraft(courseId, draftIdentifier);
                setRecoveredDraft(null);
              }}
              className="rounded-xl border border-amber-300 dark:border-amber-700 px-3 py-1.5 text-xs font-bold hover:bg-amber-100 dark:hover:bg-amber-900/50 transition-colors cursor-pointer"
            >
              Descartar
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
            Título de la Lección
          </label>
          <input
            name="title"
            type="text"
            defaultValue={defaultTitle}
            placeholder="Ej. 1. Introducción a la respuesta ante incidentes"
            required
            className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 py-2.5 text-sm text-slate-900 dark:text-white focus:border-[#1a80ff] focus:outline-hidden focus:ring-2 focus:ring-blue-100 transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
            Orden de Secuencia
          </label>
          <input
            name="sequenceOrder"
            type="number"
            defaultValue={defaultOrder}
            required
            className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 py-2.5 text-sm text-slate-900 dark:text-white focus:border-[#1a80ff] focus:outline-hidden focus:ring-2 focus:ring-blue-100 transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
            Slug URL (Identificador)
          </label>
          <input
            name="slug"
            type="text"
            defaultValue={defaultSlug}
            placeholder="introduccion-respuesta-incidentes"
            required
            className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 py-2.5 text-sm text-slate-900 dark:text-white focus:border-[#1a80ff] focus:outline-hidden focus:ring-2 focus:ring-blue-100 transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
            Tiempo Mínimo Exigido (Segundos)
          </label>
          <input
            name="minSeconds"
            type="number"
            defaultValue={defaultMinSeconds}
            placeholder="Ej. 30 (Opcional - Calculado si se deja vacío)"
            className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 py-2.5 text-sm text-slate-900 dark:text-white focus:border-[#1a80ff] focus:outline-hidden focus:ring-2 focus:ring-blue-100 transition-all"
          />
          <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-1">
            Si se deja vacío, el sistema calculará automáticamente según el
            número de palabras.
          </p>
        </div>
      </div>

      <div>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
            Contenido Enriquecido con Texto e Imágenes
          </label>
          <div className="flex items-center gap-2.5 text-[11px] font-semibold text-slate-500 dark:text-slate-400">
            {draftSavedAt && (
              <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-bold">
                <span>💾</span>
                <span>Borrador: {draftSavedAt}</span>
              </span>
            )}
            <span className="inline-flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700 font-mono text-[10px]">
              <span>📊 {wordCount} palabras</span>
              <span>·</span>
              <span>⏱ ~{calculatedReadingSeconds}s lectura ({formattedReadingTime})</span>
            </span>
          </div>
        </div>
        <LessonEditorToolbar
          contentHtml={contentHtml}
          onChangeContentHtml={setContentHtml}
        />
      </div>

      <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
        <Link
          href={`/admin/courses/${courseId}`}
          className="rounded-xl border border-slate-200 dark:border-slate-800 px-5 py-2.5 text-xs font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
        >
          Cancelar
        </Link>
        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-xl bg-[#1a80ff] px-6 py-2.5 text-xs font-bold text-white shadow-md shadow-blue-500/20 hover:bg-[#0066e6] transition-all disabled:opacity-50 cursor-pointer"
        >
          {isSubmitting
            ? "Guardando..."
            : isEditing
              ? "Guardar Cambios"
              : "Guardar Lección"}
        </button>
      </div>
    </form>
  );
}
