"use client";

import { useState } from "react";
import Link from "next/link";
import { CourseImageUploader } from "./course-image-uploader";

type AdminCourseDetailClientViewProps = {
  course: any;
  lessons: any[];
  updateThisCourse: (formData: FormData) => Promise<void>;
  deleteLessonAction: (lessonId: string, courseId: string) => Promise<void>;
};

export function AdminCourseDetailClientView({
  course,
  lessons = [],
  updateThisCourse,
  deleteLessonAction,
}: AdminCourseDetailClientViewProps) {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <main className="flex-1 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-8">
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
              {course.title}
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
            <span>{showSettings ? "Ocultar Ajustes" : "Ajustes del Curso"}</span>
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

          <form action={updateThisCourse} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Título del Curso
                </label>
                <input
                  name="title"
                  defaultValue={course.title}
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
                  defaultValue={course.slug}
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
                defaultValue={course.description || ""}
                className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-3.5 py-2.5 text-sm text-slate-900 dark:text-white focus:border-[#1a80ff] focus:outline-hidden focus:ring-2 focus:ring-blue-100 transition-all"
              />
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                type="submit"
                className="rounded-xl bg-[#1a80ff] px-6 py-3 text-xs font-bold text-white shadow-md shadow-blue-500/20 hover:bg-[#0066e6] transition-all cursor-pointer"
              >
                Guardar Cambios del Curso
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
                        {lesson.word_count || 0} palabras &middot; Tiempo
                        mín. exigido:{" "}
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

                    <form action={deleteThisLesson}>
                      <button
                        type="submit"
                        title="Eliminar lección"
                        className="rounded-xl border border-slate-200 dark:border-slate-800 p-2 text-slate-400 hover:border-rose-200 hover:bg-rose-50 dark:hover:bg-rose-950/40 hover:text-rose-600 transition-colors cursor-pointer"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    </form>
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
