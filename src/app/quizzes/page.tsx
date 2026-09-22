import Link from "next/link";
import { Header } from "@/shared/components/header";
import {
  getResilientCourses,
  getResilientQuizzes,
  getResilientQuizAttempts,
  getResilientUser,
} from "@/shared/lib/supabase/resilient";

export default async function QuizzesListPage() {
  const { user, profile, isDemo } = await getResilientUser();
  const role = profile?.role ?? "student";
  const isAdmin = role === "admin" || role === "instructor";

  const [allQuizzes, attempts, courses] = await Promise.all([
    getResilientQuizzes(),
    getResilientQuizAttempts(user.id),
    getResilientCourses(user.id, isAdmin, isDemo),
  ]);

  const attemptsMap = new Map();
  for (const att of attempts || []) {
    const existing = attemptsMap.get(att.quiz_id);
    if (
      !existing ||
      att.passed ||
      (att.score_percentage || 0) > (existing.score_percentage || 0)
    ) {
      attemptsMap.set(att.quiz_id, att);
    }
  }

  // Group quizzes by course
  const coursesWithQuizzes = (courses || [])
    .map((course: any) => {
      const lessons = course.lessons || [];
      const courseQuizzes = (allQuizzes || []).filter((q: any) =>
        lessons.some((l: any) => l.id === q.lesson_id),
      );

      const passedCount = courseQuizzes.filter((q: any) => {
        const att = attemptsMap.get(q.id);
        return att?.passed;
      }).length;

      return {
        ...course,
        quizzes: courseQuizzes,
        passedCount,
        totalQuizzes: courseQuizzes.length,
      };
    })
    .filter((c: any) => (isAdmin ? true : c.quizzes.length > 0));

  const totalVisibleQuizzes = coursesWithQuizzes.reduce(
    (acc: number, c: any) => acc + c.quizzes.length,
    0,
  );

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0b1120] text-slate-900 dark:text-slate-100 flex flex-col transition-colors">
      <Header
        userEmail={user.email}
        userName={profile?.full_name}
        role={profile?.role}
      />

      <main className="flex-1 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        {/* Title Hero */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0a224a] via-[#1a80ff] to-[#0066e6] p-8 md:p-10 text-white shadow-xl">
          <div className="relative z-10 max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-3 py-1 text-xs font-semibold tracking-wide text-blue-100">
              <span className="h-2 w-2 rounded-full bg-[#1a80ff] animate-pulse"></span>
              Módulo de Evaluación Teórica Aeronáutica
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Evaluaciones por Curso
            </h1>
            <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed">
              {isAdmin
                ? "Directorio general de evaluaciones estructuradas y agrupadas por programa académico."
                : "Exámenes organizados por cada uno de tus cursos asignados (nota mínima aprobatoria 80%)."}
            </p>
          </div>
        </div>

        {/* Global Overview Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">
              {isAdmin
                ? `Cursos en el Sistema (${coursesWithQuizzes.length})`
                : `Mis Cursos con Evaluación (${coursesWithQuizzes.length})`}
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Total de {totalVisibleQuizzes} exámenes teóricos distribuidos por módulo
            </p>
          </div>
          <Link
            href="/courses"
            className="text-xs font-bold text-[#1a80ff] hover:underline inline-flex items-center gap-1"
          >
            &larr; Volver a Mis Cursos
          </Link>
        </div>

        {/* Courses and Quizzes Sections */}
        {coursesWithQuizzes.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 p-12 text-center text-slate-500 dark:text-slate-400 space-y-2">
            <div className="text-3xl">📝</div>
            <p className="font-bold text-slate-700 dark:text-slate-300">
              No tienes cursos con evaluaciones asignadas actualmente.
            </p>
            <p className="text-xs text-slate-400 max-w-md mx-auto">
              Cuando te matricules en cursos con módulos evaluables, aparecerán organizados aquí.
            </p>
          </div>
        ) : (
          <div className="space-y-12">
            {coursesWithQuizzes.map((course: any) => {
              const isCourseFinished =
                course.totalQuizzes > 0 &&
                course.passedCount === course.totalQuizzes;

              return (
                <section
                  key={course.id}
                  className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-6 md:p-8 shadow-xs space-y-6"
                >
                  {/* Course Header Banner */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-5">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-[#1a80ff] text-xl font-bold">
                        ✈️
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#1a80ff]">
                            Curso Oficial
                          </span>
                          {isCourseFinished ? (
                            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 text-[10px] font-extrabold text-emerald-600 dark:text-emerald-400">
                              ✓ 100% Exámenes Aprobados
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 text-[10px] font-extrabold text-[#1a80ff]">
                              {course.passedCount} de {course.totalQuizzes} aprobados
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mt-0.5">
                          {course.title}
                        </h3>
                        {course.description && (
                          <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                            {course.description}
                          </p>
                        )}
                      </div>
                    </div>

                    <Link
                      href={`/courses/${course.slug || course.id}`}
                      className="text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-[#1a80ff] transition-colors shrink-0"
                    >
                      Ir al Curso &rarr;
                    </Link>
                  </div>

                  {/* Quizzes in Course Grid */}
                  {course.quizzes.length === 0 ? (
                    <div className="py-6 text-center text-xs text-slate-400">
                      Este curso aún no tiene exámenes configurados.
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                      {course.quizzes.map((quiz: any) => {
                        const attempt = attemptsMap.get(quiz.id);
                        const passed = attempt?.passed;
                        const score = attempt?.score_percentage;

                        return (
                          <div
                            key={quiz.id}
                            className="group rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900 p-5 shadow-2xs card-hover transition-all flex flex-col justify-between space-y-4"
                          >
                            <div className="space-y-2.5">
                              <div className="flex items-center justify-between">
                                <span className="inline-flex items-center gap-1 rounded-full bg-white dark:bg-slate-800 px-2.5 py-0.5 text-[11px] font-bold text-[#1a80ff] border border-slate-200/60 dark:border-slate-700">
                                  {quiz.questions?.length || 0} Preguntas
                                </span>

                                {attempt ? (
                                  passed ? (
                                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                                      ✓ Aprobado ({score}%)
                                    </span>
                                  ) : (
                                    <span className="inline-flex items-center gap-1 rounded-full bg-rose-50 dark:bg-rose-950/60 px-2 py-0.5 text-[11px] font-bold text-rose-600 dark:text-rose-400">
                                      ⚠️ Reprobado ({score}%)
                                    </span>
                                  )
                                ) : (
                                  <span className="text-[11px] font-semibold text-slate-400">
                                    Sin Rendir
                                  </span>
                                )}
                              </div>

                              <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-[#1a80ff] transition-colors leading-snug">
                                {quiz.title}
                              </h4>

                              <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                                {quiz.description}
                              </p>
                            </div>

                            <div className="pt-3 border-t border-slate-200/60 dark:border-slate-800">
                              <Link
                                href={`/quizzes/${quiz.id}`}
                                className={`flex items-center justify-center gap-2 rounded-xl py-2 text-xs font-bold shadow-xs transition-colors ${
                                  attempt?.passed
                                    ? "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100 dark:hover:bg-emerald-900/50"
                                    : "bg-slate-900 dark:bg-slate-800 text-white group-hover:bg-[#1a80ff]"
                                }`}
                              >
                                <span>
                                  {attempt?.passed
                                    ? "Ver Resultado / Repasar"
                                    : attempt
                                      ? "Reintentar Examen"
                                      : "Iniciar Examen"}
                                </span>
                                <span>&rarr;</span>
                              </Link>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </section>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
