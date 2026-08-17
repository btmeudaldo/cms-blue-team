import Link from "next/link";
import { notFound } from "next/navigation";

import { Header } from "@/shared/components/header";
import {
  getResilientCourseDetail,
  getResilientUser,
  getResilientUserProgress,
} from "@/shared/lib/supabase/resilient";

export default async function StudentCourseDetailPage({
  params,
}: {
  params: Promise<{ courseId: string }>;
}) {
  const { courseId } = await params;
  const { user, profile, isDemo } = await getResilientUser();
  const role = profile?.role ?? "student";

  // Fetch course and progress concurrently with resilient fallback
  const [course, userProgress] = await Promise.all([
    getResilientCourseDetail(courseId, isDemo),
    getResilientUserProgress(user.id, isDemo),
  ]);
  if (!course) notFound();

  // Sort lessons
  const lessons = (course.lessons || []).sort(
    (a: any, b: any) => a.sequence_order - b.sequence_order,
  );

  const progressMap = new Map(
    userProgress?.map((p: any) => [p.lesson_id, p]) || [],
  );

  const completedCount = lessons.filter(
    (l: any) => (progressMap.get(l.id) as any)?.is_completed,
  ).length;
  const progressPercent =
    lessons.length > 0
      ? Math.round((completedCount / lessons.length) * 100)
      : 0;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0b1120] text-slate-900 dark:text-slate-100 flex flex-col transition-colors">
      <Header
        userEmail={user.email}
        userName={profile?.full_name}
        role={role}
      />

      <main className="flex-1 mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Breadcrumb & Navigation */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
          <Link
            href="/courses"
            className="hover:text-[#1a80ff] transition-colors"
          >
            Mis Cursos
          </Link>
          <span>&rsaquo;</span>
          <span className="text-slate-900 dark:text-white truncate">
            {course.title}
          </span>
        </div>

        {/* Course Header Banner */}
        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 px-3 py-1 text-xs font-bold text-[#1a80ff]">
                <span className="h-2 w-2 rounded-full bg-[#1a80ff]"></span>
                Curso de Formación
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                {course.title}
              </h1>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {course.description || "Sin descripción proporcionada."}
              </p>
            </div>

            {lessons.length > 0 && (
              <Link
                href={`/courses/${course.id}/lessons/${lessons[0].id}`}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#1a80ff] px-6 py-3 text-sm font-bold text-white shadow-md shadow-blue-500/20 hover:bg-[#0066e6] transition-all"
              >
                <span>
                  {completedCount > 0
                    ? "Continuar Aprendizaje"
                    : "Comenzar Curso"}
                </span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            )}
          </div>

          {/* Overall Progress Widget */}
          <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-950 text-[#1a80ff] font-extrabold text-sm">
                {progressPercent}%
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Progreso del Estudiante
                </h4>
                <p className="text-sm font-bold text-slate-800 dark:text-slate-200">
                  {completedCount} de {lessons.length} lecciones completadas
                </p>
              </div>
            </div>

            <div className="w-full sm:w-48 space-y-1">
              <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                <div
                  className="h-full bg-[#1a80ff] transition-all duration-500 rounded-full"
                  style={{ width: `${progressPercent}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Syllabus / Lessons List */}
        <div className="space-y-4">
          <h2 className="text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
            <span>Contenido del Curso</span>
            <span className="text-xs font-semibold text-slate-400 dark:text-slate-500">
              ({lessons.length} temas)
            </span>
          </h2>

          {lessons.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 text-center text-slate-500 dark:text-slate-400 text-sm">
              Este curso no tiene lecciones creadas todavía.
            </div>
          ) : (
            <div className="space-y-3">
              {lessons.map((lesson: any, index: number) => {
                const prog = progressMap.get(lesson.id) as any;
                const isCompleted = prog?.is_completed;

                return (
                  <Link
                    key={lesson.id}
                    href={`/courses/${course.id}/lessons/${lesson.id}`}
                    className="flex items-center justify-between rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-xs card-hover transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-bold text-sm transition-colors ${
                          isCompleted
                            ? "bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800"
                            : "bg-blue-50 dark:bg-blue-950/60 text-[#1a80ff] border border-blue-100 dark:border-blue-900 group-hover:bg-[#1a80ff] group-hover:text-white"
                        }`}
                      >
                        {isCompleted ? "✓" : index + 1}
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-[#1a80ff] transition-colors">
                            {lesson.title}
                          </h3>
                          {isCompleted && (
                            <span className="rounded-full bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                              Completada
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                          {lesson.word_count || 0} palabras &middot; Tiempo mín.
                          exigido: {lesson.min_seconds}s
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="hidden sm:inline-block text-xs font-bold text-[#1a80ff] opacity-0 group-hover:opacity-100 transition-opacity">
                        Estudiar lección &rarr;
                      </span>
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-400 group-hover:bg-blue-50 dark:group-hover:bg-slate-700 group-hover:text-[#1a80ff] transition-colors">
                        &rarr;
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
