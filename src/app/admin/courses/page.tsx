import Link from "next/link";
import { redirect } from "next/navigation";

import { Header } from "@/shared/components/header";
import { createCourseAction, deleteCourseAction } from "@/app/actions/course.actions";
import { getResilientCourses, getResilientUser } from "@/shared/lib/supabase/resilient";
import { CourseImageUploader } from "@/features/learning/components/course-image-uploader";

export default async function AdminCoursesPage() {
  const { user, profile } = await getResilientUser();

  if (profile?.role !== "admin" && profile?.role !== "instructor") redirect("/courses");

  // Fetch courses with resilient fallback
  const courses = await getResilientCourses(user.id, true);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0b1120] text-slate-900 dark:text-slate-100 flex flex-col transition-colors">
      <Header userEmail={user.email} userName={profile?.full_name} role={profile?.role} />

      <main className="flex-1 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Navigation & Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">
              <Link href="/admin" className="hover:text-[#1a80ff] transition-colors">
                Administración
              </Link>
              <span>&rsaquo;</span>
              <span className="text-slate-900 dark:text-white">Cursos</span>
            </div>
            <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">Gestión de Cursos</h1>
          </div>

          <Link
            href="/admin"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-2 text-xs font-bold text-slate-700 dark:text-slate-300 shadow-xs hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          >
            &larr; Volver al Panel Admin
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Create Course Card Form */}
          <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm space-y-6">
            <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">Crear Nuevo Curso</h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Ingresa los datos para registrar un módulo.</p>
            </div>

            <form action={createCourseAction} className="space-y-4">
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
                  Slug URL (Identificador)
                </label>
                <input
                  name="slug"
                  type="text"
                  placeholder="analisis-forense-digital"
                  required
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-3.5 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-[#1a80ff] focus:outline-hidden focus:ring-2 focus:ring-blue-100 transition-all"
                />
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

              <button
                type="submit"
                className="w-full rounded-xl bg-[#1a80ff] py-3 text-xs font-bold text-white shadow-md shadow-blue-500/20 hover:bg-[#0066e6] transition-all cursor-pointer"
              >
                + Guardar y Publicar Curso
              </button>
            </form>
          </div>

          {/* List of Existing Courses */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              Cursos Existentes ({courses?.length || 0})
            </h2>

            {!courses || courses.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 text-center text-slate-500 dark:text-slate-400 text-sm">
                No hay cursos creados todavía. Utiliza el formulario de la izquierda para agregar uno.
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
                        <div className="space-y-1.5 max-w-md">
                          <div className="flex items-center gap-2">
                            <span className="inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-950/60 px-2.5 py-0.5 text-xs font-bold text-[#1a80ff]">
                              {lessonCount} {lessonCount === 1 ? "lección" : "lecciones"}
                            </span>
                            <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500">/{course.slug}</span>
                          </div>
                          <h3 className="text-base font-bold text-slate-900 dark:text-white">{course.title}</h3>
                          <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">{course.description || "Sin descripción."}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0 border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-100 dark:border-slate-800">
                        <Link
                          href={`/admin/courses/${course.id}`}
                          className="rounded-xl border border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-950/60 px-3.5 py-2 text-xs font-bold text-[#1a80ff] hover:bg-[#1a80ff] hover:text-white transition-colors"
                        >
                          Editar &amp; Lecciones &rsaquo;
                        </Link>

                        <form action={deleteThisCourse}>
                          <button
                            type="submit"
                            title="Eliminar curso"
                            className="rounded-xl border border-slate-200 dark:border-slate-800 p-2 text-slate-400 hover:border-rose-200 hover:bg-rose-50 dark:hover:bg-rose-950/40 hover:text-rose-600 transition-colors cursor-pointer"
                          >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
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
        </div>
      </main>
    </div>
  );
}
