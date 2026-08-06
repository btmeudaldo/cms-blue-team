import Link from "next/link";

import { Header } from "@/shared/components/header";
import { SeedDemoButton } from "@/shared/components/seed-demo-button";
import {
  getResilientCourses,
  getResilientUser,
  getResilientUserProgress,
} from "@/shared/lib/supabase/resilient";

export default async function CoursesPage() {
  const { user, profile } = await getResilientUser();
  const role = profile?.role ?? "student";
  const isAdmin = role === "admin" || role === "instructor";

  // Fetch courses with resilient fallback
  const coursesData = await getResilientCourses(user.id, isAdmin);

  // Fetch user progress with resilient fallback
  const userProgress = await getResilientUserProgress(user.id);
  const completedLessonIds = new Set(
    userProgress
      ?.filter((p: any) => p.is_completed)
      .map((p: any) => p.lesson_id) || [],
  );

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0b1120] text-slate-900 dark:text-slate-100 flex flex-col transition-colors">
      <Header
        userEmail={user.email}
        userName={profile?.full_name}
        role={role}
      />

      <main className="flex-1 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        {/* Welcome Hero Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0a224a] via-[#1a80ff] to-[#0066e6] p-8 md:p-10 text-white shadow-xl">
          <div className="relative z-10 max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-3 py-1 text-xs font-semibold tracking-wide text-blue-100">
              <span className="h-2 w-2 rounded-full bg-[#1a80ff] animate-pulse"></span>
              Blue Team CMS &middot; Anticheating Temporal
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Bienvenido, {profile?.full_name || user.email?.split("@")[0]}
            </h1>
            <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed">
              Explora tus cursos asignados, completa lecciones verificadas por
              el servidor y haz seguimiento a tu avance en tiempo real.
            </p>
          </div>

          <div className="absolute right-0 bottom-0 top-0 hidden lg:flex items-center justify-center pr-12 opacity-20 pointer-events-none">
            <svg
              className="w-80 h-80 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>
        </div>

        {/* Action Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
              Mis Cursos
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              {coursesData.length}{" "}
              {coursesData.length === 1
                ? "curso disponible"
                : "cursos disponibles"}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <SeedDemoButton label="Generar Cursos Demo" variant="secondary" />

            {isAdmin && (
              <Link
                href="/admin/courses"
                className="inline-flex items-center gap-2 rounded-xl bg-[#1a80ff] px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-[#0066e6] transition-colors"
              >
                Panel de Administración &rarr;
              </Link>
            )}
          </div>
        </div>

        {/* Courses Grid */}
        {coursesData.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 p-12 text-center shadow-xs">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-[#1a80ff] text-2xl mb-4">
              📚
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              No tienes cursos asignados aún
            </h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
              Puedes hacer clic en el botón de abajo &quot;Cargar Curso Demo
              Ahora&quot; para generar e inscribirte instantáneamente en módulos
              con lecciones teóricas y temporizadores anticheat.
            </p>
            <div className="mt-6">
              <SeedDemoButton
                label="Cargar Curso Demo Ahora"
                variant="primary"
              />
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coursesData.map((course: any) => {
              const lessons = course.lessons || [];
              const totalLessons = lessons.length;
              const completedCount = lessons.filter((l: any) =>
                completedLessonIds.has(l.id),
              ).length;
              const progressPercentage =
                totalLessons > 0
                  ? Math.round((completedCount / totalLessons) * 100)
                  : 0;

              return (
                <div
                  key={course.id}
                  className="group flex flex-col justify-between rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm card-hover transition-all"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-950/60 px-2.5 py-0.5 text-xs font-bold text-[#1a80ff]">
                        {totalLessons}{" "}
                        {totalLessons === 1 ? "Lección" : "Lecciones"}
                      </span>
                      {progressPercentage === 100 ? (
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-full">
                          ✓ Completado
                        </span>
                      ) : progressPercentage > 0 ? (
                        <span className="text-xs font-bold text-[#1a80ff]">
                          {progressPercentage}% Completado
                        </span>
                      ) : (
                        <span className="text-xs font-semibold text-slate-400 dark:text-slate-500">
                          Sin iniciar
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-[#1a80ff] transition-colors leading-snug">
                      {course.title}
                    </h3>

                    <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                      {course.description || "Sin descripción disponible."}
                    </p>

                    {/* Progress Bar */}
                    <div className="pt-2 space-y-1">
                      <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                        <div
                          className="h-full bg-[#1a80ff] transition-all duration-500 rounded-full"
                          style={{ width: `${progressPercentage}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-[11px] font-medium text-slate-400 dark:text-slate-500">
                        <span>
                          {completedCount} de {totalLessons} completadas
                        </span>
                        <span>{progressPercentage}%</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                    <Link
                      href={`/courses/${course.id}`}
                      className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 dark:bg-slate-800 text-white py-2.5 text-xs font-bold shadow-xs group-hover:bg-[#1a80ff] transition-colors"
                    >
                      <span>Entrar al Curso</span>
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
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
