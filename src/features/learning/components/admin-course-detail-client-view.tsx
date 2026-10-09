"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CourseImageUploader } from "./course-image-uploader";
import { AcademicDeleteForm } from "./academic-delete-form";

type AdminCourseDetailClientViewProps = {
  course: any;
  lessons: any[];
  updateThisCourse: (formData: FormData) => Promise<any>;
  deleteLessonAction: (
    lessonId: string,
    courseId: string,
  ) => Promise<void | { error: string }>;
};

export function AdminCourseDetailClientView({
  course,
  lessons = [],
  updateThisCourse,
  deleteLessonAction,
}: AdminCourseDetailClientViewProps) {
  const router = useRouter();
  const [showSettings, setShowSettings] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const [title, setTitle] = useState(course.title || "");
  const [slug, setSlug] = useState(course.slug || "");
  const [description, setDescription] = useState(course.description || "");

  useEffect(() => {
    setTitle(course.title || "");
    setSlug(course.slug || "");
    setDescription(course.description || "");
  }, [course.title, course.slug, course.description]);

  async function handleCourseSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSaving(true);
    setStatusMessage(null);
    try {
      const formData = new FormData(e.currentTarget);
      const result = await updateThisCourse(formData);
      if (result && typeof result === "object" && "error" in result && (result as any).error) {
        setStatusMessage({ type: "error", text: (result as any).error });
      } else {
        setStatusMessage({
          type: "success",
          text: "¡Cambios del curso guardados con éxito!",
        });
        router.refresh();
      }
    } catch (err: any) {
      setStatusMessage({
        type: "error",
        text: err.message || "Error al guardar los cambios del curso.",
      });
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <main className="flex-1 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Floating Success Toast */}
      {statusMessage?.type === "success" && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 rounded-2xl bg-emerald-600/95 text-white shadow-2xl backdrop-blur-md px-6 py-3 text-xs sm:text-sm font-bold flex items-center gap-2.5 animate-in fade-in slide-in-from-top-4 duration-300 pointer-events-none">
          <span>✅</span>
          <span>¡Cambios del curso guardados con éxito!</span>
        </div>
      )}

      {/* Navigation Breadcrumb & Primary Action Buttons */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">
            <Link
              href="/admin"
              className="hover:text-[#1a80ff] transition-colors"
            >
              Administración
            </Link>
            <span>&rsaquo;</span>
            <Link
              href="/admin/courses"
              className="hover:text-[#1a80ff] transition-colors"
            >
              Cursos
            </Link>
            <span>&rsaquo;</span>
            <span className="text-slate-900 dark:text-white truncate">
              {title || course.title}
            </span>
          </div>
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">
            Editar Curso &amp; Lecciones
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setShowSettings(!showSettings)}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-2 text-xs font-bold text-slate-700 dark:text-slate-300 shadow-xs hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <span>⚙️</span>
            <span>
              {showSettings ? "Ocultar Ajustes" : "Ajustes del Curso"}
            </span>
          </button>

          <Link
            href={`/admin/courses/${course.id}/lessons/new`}
            className="inline-flex items-center gap-2 rounded-xl bg-[#1a80ff] px-4 py-2 text-xs font-bold text-white shadow-md shadow-blue-500/20 hover:bg-[#0066e6] transition-all cursor-pointer"
          >
            + Nueva Lección
          </Link>

          <Link
            href="/admin/courses"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-2 text-xs font-bold text-slate-700 dark:text-slate-300 shadow-xs hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          >
            &larr; Volver a Cursos
          </Link>
        </div>
      </div>

      {/* Top Collapsible Edit Course Settings Form */}
      {showSettings && (
        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Ajustes del Curso
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Modifica los metadatos generales del módulo.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setShowSettings(false)}
              className="text-xs font-bold text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 px-2 py-1 cursor-pointer"
            >
              ✕ Ocultar
            </button>
          </div>

          <form onSubmit={handleCourseSubmit} className="space-y-4">
            {/* Status Message Alert */}
            {statusMessage && (
              <div
                role="alert"
                className={`rounded-2xl border p-4 text-xs font-bold flex items-center gap-3 animate-in fade-in ${
                  statusMessage.type === "success"
                    ? "border-emerald-300 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-200"
                    : "border-rose-300 dark:border-rose-800 bg-rose-50 dark:bg-rose-950/60 text-rose-800 dark:text-rose-200"
                }`}
              >
                <span className="text-base">
                  {statusMessage.type === "success" ? "✅" : "⚠️"}
                </span>
                <span>{statusMessage.text}</span>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Título del Curso
                </label>
                <input
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-3.5 py-2.5 text-sm text-slate-900 dark:text-white focus:border-[#1a80ff] focus:outline-hidden focus:ring-2 focus:ring-blue-100 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Slug URL
                </label>
                <input
                  name="slug"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  required
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-3.5 py-2.5 text-sm text-slate-900 dark:text-white focus:border-[#1a80ff] focus:outline-hidden focus:ring-2 focus:ring-blue-100 transition-all"
                />
              </div>
            </div>

            {/* Dual Choice Image Uploader (URL or File Upload from PC) */}
            <CourseImageUploader defaultImageUrl={course.image_url} />

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Descripción
              </label>
              <textarea
                name="description"
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-3.5 py-2.5 text-sm text-slate-900 dark:text-white focus:border-[#1a80ff] focus:outline-hidden focus:ring-2 focus:ring-blue-100 transition-all"
              />
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                type="submit"
                disabled={isSaving}
                className="rounded-xl bg-[#1a80ff] px-6 py-3 text-xs font-bold text-white shadow-md shadow-blue-500/20 hover:bg-[#0066e6] transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed inline-flex items-center gap-2"
              >
                {isSaving ? (
                  <>
                    <span className="text-sm animate-spin">⏳</span>
                    <span>Guardando cambios...</span>
                  </>
                ) : (
                  <span>Guardar Cambios del Curso</span>
                )}
              </button>
              <button
                type="button"
                onClick={() => setShowSettings(false)}
                className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-3 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer"
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Lessons Management Section (Takes 100% Full Width) */}
      <div className="w-full space-y-6">
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              Lecciones del Curso ({lessons.length})
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Gestiona los temas enriquecidos con texto e imágenes.
            </p>
          </div>

          <Link
            href={`/admin/courses/${course.id}/lessons/new`}
            className="inline-flex items-center gap-2 rounded-xl bg-[#1a80ff] px-4 py-2 text-xs font-bold text-white shadow-md shadow-blue-500/20 hover:bg-[#0066e6] transition-all cursor-pointer"
          >
            + Nueva Lección
          </Link>
        </div>

        {lessons.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 p-10 text-center shadow-xs space-y-4">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-[#1a80ff] text-2xl shadow-xs">
              📝
            </div>
            <div>
              <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
                Este curso no tiene lecciones creadas todavía
              </h3>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
                Haz clic en el botón a continuación para crear la primera
                lección e incluir contenido enriquecido con texto, formato e
                imágenes.
              </p>
            </div>
            <div>
              <Link
                href={`/admin/courses/${course.id}/lessons/new`}
                className="inline-flex items-center gap-2 rounded-xl bg-[#1a80ff] px-5 py-3 text-xs font-bold text-white shadow-md shadow-blue-500/20 hover:bg-[#0066e6] transition-all cursor-pointer"
              >
                + Agregar primera lección
              </Link>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            {lessons.map((lesson: any) => {
              const deleteThisLesson = deleteLessonAction.bind(
                null,
                lesson.id,
                course.id,
              );

              return (
                <div
                  key={lesson.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-xs card-hover transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-950/60 font-extrabold text-[#1a80ff] text-sm">
                      #{lesson.sequence_order}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white">
                        {lesson.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        {lesson.word_count || 0} palabras &middot; Tiempo mín.
                        exigido:{" "}
                        <span className="font-bold text-[#1a80ff]">
                          {lesson.min_seconds}s
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-100 dark:border-slate-800">
                    <Link
                      href={`/admin/courses/${course.id}/lessons/${lesson.id}`}
                      className="rounded-xl border border-slate-200 dark:border-slate-800 px-4 py-2 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                    >
                      Editar Contenido
                    </Link>

                    <AcademicDeleteForm
                      action={deleteThisLesson}
                      label="Eliminar lección"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}
