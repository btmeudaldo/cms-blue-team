"use client";

import { useState } from "react";
import Link from "next/link";
import { CourseImageUploader } from "./course-image-uploader";
import { AcademicDeleteForm } from "./academic-delete-form";

type AdminCoursesClientViewProps = {
  courses: any[];
  createCourseAction: (formData: FormData) => Promise<void>;
  deleteCourseAction: (courseId: string) => Promise<void | { error: string }>;
};

export function AdminCoursesClientView({
  courses = [],
  createCourseAction,
  deleteCourseAction,
}: AdminCoursesClientViewProps) {
  const [showCreateForm, setShowCreateForm] = useState(false);

  return (
    <main className="flex-1 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Navigation & Header */}
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
            <span className="text-slate-900 dark:text-white">Cursos</span>
          </div>
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">
            Gestión de Cursos
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setShowCreateForm(!showCreateForm)}
            className="inline-flex items-center gap-2 rounded-xl bg-[#1a80ff] px-4 py-2 text-xs font-bold text-white shadow-md shadow-blue-500/20 hover:bg-[#0066e6] transition-all cursor-pointer"
          >
            {showCreateForm ? (
              <>
                <span>✕</span>
                <span>Cerrar Formulario</span>
              </>
            ) : (
              <>
                <span>+</span>
                <span>Crear Nuevo Curso</span>
              </>
            )}
          </button>

          <Link
            href="/admin"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-2 text-xs font-bold text-slate-700 dark:text-slate-300 shadow-xs hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          >
            &larr; Volver al Panel Admin
          </Link>
        </div>
      </div>

      {/* Top Expandable Create Course Form Card */}
      {showCreateForm && (
        <div className="rounded-3xl border border-blue-200 dark:border-blue-900/60 bg-blue-50/40 dark:bg-slate-900 p-6 shadow-md transition-all space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-slate-800 pb-4">
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>✨ Crear Nuevo Curso</span>
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Ingresa los datos para registrar un módulo formativo.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setShowCreateForm(false)}
              className="text-xs font-bold text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 px-2 py-1 cursor-pointer"
            >
              ✕ Ocultar
            </button>
          </div>

          <form action={createCourseAction} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Título del Curso
                </label>
                <input
                  name="title"
                  type="text"
                  placeholder="Ej. Análisis Forense Digital"
                  required
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-3.5 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-[#1a80ff] focus:outline-hidden focus:ring-2 focus:ring-blue-100 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Slug URL (Identificador único)
                </label>
                <input
                  name="slug"
                  type="text"
                  placeholder="analisis-forense-digital"
                  required
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-3.5 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-[#1a80ff] focus:outline-hidden focus:ring-2 focus:ring-blue-100 transition-all"
                />
              </div>
            </div>

            {/* Dual Choice Image Uploader (URL or File Upload from PC) */}
            <CourseImageUploader />

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Descripción Breve
              </label>
              <textarea
                name="description"
                rows={3}
                placeholder="Resumen del contenido y objetivos de aprendizaje..."
                className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-3.5 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-[#1a80ff] focus:outline-hidden focus:ring-2 focus:ring-blue-100 transition-all"
              />
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                type="submit"
                className="rounded-xl bg-[#1a80ff] px-6 py-3 text-xs font-bold text-white shadow-md shadow-blue-500/20 hover:bg-[#0066e6] transition-all cursor-pointer"
              >
                + Guardar y Publicar Curso
              </button>
              <button
                type="button"
                onClick={() => setShowCreateForm(false)}
                className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-3 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer"
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      )}

      {/* List of Existing Courses (Full Width) */}
      <div className="w-full space-y-4">
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            Cursos Existentes ({courses?.length || 0})
          </h2>
          {!showCreateForm && (
            <button
              type="button"
              onClick={() => setShowCreateForm(true)}
              className="text-xs font-bold text-[#1a80ff] hover:underline cursor-pointer"
            >
              + Agregar otro curso
            </button>
          )}
        </div>

        {!courses || courses.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 p-12 text-center text-slate-500 dark:text-slate-400 text-sm space-y-3">
            <div className="text-3xl">📚</div>
            <p className="font-bold text-slate-700 dark:text-slate-300">
              No hay cursos creados todavía.
            </p>
            <p className="text-xs text-slate-400">
              Haz clic en el botón superior "+ Crear Nuevo Curso" para registrar
              tu primer módulo.
            </p>
            <button
              type="button"
              onClick={() => setShowCreateForm(true)}
              className="inline-flex items-center gap-2 rounded-xl bg-[#1a80ff] px-4 py-2 text-xs font-bold text-white shadow-md shadow-blue-500/20 hover:bg-[#0066e6] transition-all cursor-pointer"
            >
              + Crear Primer Curso
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {courses.map((course: any) => {
              const lessonCount = course.lessons?.length || 0;
              const deleteThisCourse = deleteCourseAction.bind(null, course.id);

              return (
                <div
                  key={course.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-xs card-hover transition-all"
                >
                  <div className="flex gap-4 items-start sm:items-center">
                    {course.image_url && (
                      <img
                        src={course.image_url}
                        alt={course.title}
                        className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover shrink-0 border border-slate-200 dark:border-slate-800"
                      />
                    )}
                    <div className="space-y-1.5 max-w-2xl">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-950/60 px-2.5 py-0.5 text-xs font-bold text-[#1a80ff]">
                          {lessonCount}{" "}
                          {lessonCount === 1 ? "lección" : "lecciones"}
                        </span>
                        <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500">
                          /{course.slug}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white">
                        {course.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                        {course.description || "Sin descripción."}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-100 dark:border-slate-800">
                    <Link
                      href={`/admin/courses/${course.id}`}
                      className="rounded-xl border border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-950/60 px-4 py-2 text-xs font-bold text-[#1a80ff] hover:bg-[#1a80ff] hover:text-white transition-colors flex items-center gap-1.5"
                    >
                      <span>Editar &amp; Lecciones</span>
                      <span>&rsaquo;</span>
                    </Link>

                    <AcademicDeleteForm
                      action={deleteThisCourse}
                      label="Eliminar curso"
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
