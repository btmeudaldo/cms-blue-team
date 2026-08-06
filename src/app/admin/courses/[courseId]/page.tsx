import Link from "next/link";
import { notFound, redirect } from "next/navigation";

import { Header } from "@/shared/components/header";
import { updateCourseAction } from "@/app/actions/course.actions";
import { deleteLessonAction } from "@/app/actions/lesson.actions";
import {
  getResilientCourseDetail,
  getResilientUser,
} from "@/shared/lib/supabase/resilient";
import { CourseImageUploader } from "@/features/learning/components/course-image-uploader";

export default async function AdminCourseDetailPage({
  params,
}: {
  params: Promise<{ courseId: string }>;
}) {
  const { courseId } = await params;
  const { user, profile } = await getResilientUser();

  if (profile?.role !== "admin" && profile?.role !== "instructor")
    redirect("/courses");

  // Fetch course detail and lessons with resilient fallback
  const course = await getResilientCourseDetail(courseId);

  if (!course) notFound();

  const updateThisCourse = updateCourseAction.bind(null, course.id);

  const lessons = (course.lessons || []).sort(
    (a: any, b: any) => a.sequence_order - b.sequence_order,
  );

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0b1120] text-slate-900 dark:text-slate-100 flex flex-col transition-colors">
      <Header
        userEmail={user.email}
        userName={profile?.full_name}
        role={profile?.role}
      />

      <main className="flex-1 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Navigation Breadcrumb */}
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

          <Link
            href="/admin/courses"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-2 text-xs font-bold text-slate-700 dark:text-slate-300 shadow-xs hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          >
            &larr; Volver a Lista de Cursos
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Edit Course Settings Form */}
          <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm space-y-6">
            <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Ajustes del Curso
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Modifica los metadatos generales.
              </p>
            </div>

            <form action={updateThisCourse} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Título
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

              {/* Dual Choice Image Uploader (URL or File Upload from PC) */}
              <CourseImageUploader defaultImageUrl={course.image_url} />

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Descripción
                </label>
                <textarea
                  name="description"
                  rows={4}
                  defaultValue={course.description || ""}
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-3.5 py-2.5 text-sm text-slate-900 dark:text-white focus:border-[#1a80ff] focus:outline-hidden focus:ring-2 focus:ring-blue-100 transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-slate-900 dark:bg-slate-800 py-3 text-xs font-bold text-white shadow-sm hover:bg-[#1a80ff] transition-all cursor-pointer"
              >
                Guardar Cambios del Curso
              </button>
            </form>
          </div>

          {/* Lessons Management Section */}
          <div className="lg:col-span-2 space-y-6">
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
                className="inline-flex items-center gap-2 rounded-xl bg-[#1a80ff] px-4 py-2 text-xs font-bold text-white shadow-md shadow-blue-500/20 hover:bg-[#0066e6] transition-all"
              >
                + Nueva Lección
              </Link>
            </div>

            {lessons.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 p-12 text-center shadow-xs">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-[#1a80ff] text-xl mb-3">
                  📝
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Este curso no tiene lecciones creadas
                </h3>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                  Agrega la primera lección para incluir contenido enriquecido
                  con imágenes y texto anticheat.
                </p>
                <Link
                  href={`/admin/courses/${course.id}/lessons/new`}
                  className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#1a80ff] px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-[#0066e6] transition-colors"
                >
                  + Agregar primera lección
                </Link>
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
                          className="rounded-xl border border-slate-200 dark:border-slate-800 px-3 py-1.5 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
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
        </div>
      </main>
    </div>
  );
}
