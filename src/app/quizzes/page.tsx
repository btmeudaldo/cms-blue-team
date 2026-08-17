import Link from "next/link";
import { Header } from "@/shared/components/header";
import {
  getResilientQuizzes,
  getResilientQuizAttempts,
  getResilientUser,
} from "@/shared/lib/supabase/resilient";

export default async function QuizzesListPage() {
  const { user, profile } = await getResilientUser();

  const [quizzes, attempts] = await Promise.all([
    getResilientQuizzes(),
    getResilientQuizAttempts(user.id),
  ]);

  const attemptsMap = new Map();
  for (const att of attempts || []) {
    attemptsMap.set(att.quiz_id, att);
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0b1120] text-slate-900 dark:text-slate-100 flex flex-col transition-colors">
      <Header
        userEmail={user.email}
        userName={profile?.full_name}
        role={profile?.role}
      />

      <main className="flex-1 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        {/* Title Hero */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0a224a] via-[#1a80ff] to-[#0066e6] p-8 md:p-10 text-white shadow-xl">
          <div className="relative z-10 max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-3 py-1 text-xs font-semibold tracking-wide text-blue-100">
              <span className="h-2 w-2 rounded-full bg-[#1a80ff] animate-pulse"></span>
              Módulo de Evaluación Teórica Aeronáutica
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Exámenes y Quizzes de Aviación
            </h1>
            <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed">
              Pon a prueba tus conocimientos en Aerodinámica, Reglamentación VFR/IFR,
              Meteorología e Instrumentos con evaluación inmediata de nota (mín. 70%).
            </p>
          </div>
        </div>

        {/* Quizzes List Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
            <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">
              Evaluaciones Disponibles ({quizzes.length})
            </h2>
            <Link
              href="/courses"
              className="text-xs font-bold text-[#1a80ff] hover:underline"
            >
              &larr; Volver a Mis Cursos
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quizzes.map((quiz: any) => {
              const attempt = attemptsMap.get(quiz.id);
              const passed = attempt?.passed;
              const score = attempt?.score_percentage;

              return (
                <div
                  key={quiz.id}
                  className="group rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-xs card-hover transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 dark:bg-blue-950/60 px-2.5 py-0.5 text-xs font-bold text-[#1a80ff]">
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
                        <span className="text-xs font-semibold text-slate-400">
                          Sin Rendir
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-[#1a80ff] transition-colors leading-snug">
                      {quiz.title}
                    </h3>

                    <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                      {quiz.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                    <Link
                      href={`/quizzes/${quiz.id}`}
                      className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 dark:bg-slate-800 text-white py-2.5 text-xs font-bold shadow-xs group-hover:bg-[#1a80ff] transition-colors"
                    >
                      <span>{attempt ? "Reintentar Examen" : "Iniciar Examen"}</span>
                      <span>&rarr;</span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
