import Link from "next/link";
import { redirect } from "next/navigation";

import { Header } from "@/shared/components/header";
import {
  getResilientAllProgress,
  getResilientCourses,
  getResilientProfiles,
  getResilientUser,
} from "@/shared/lib/supabase/resilient";

export default async function AdminProgressAuditPage() {
  const { user, profile: currentProfile } = await getResilientUser();

  if (
    currentProfile?.role !== "admin" &&
    currentProfile?.role !== "instructor"
  ) {
    redirect("/courses");
  }

  const [profiles, progressRecords, courses] = await Promise.all([
    getResilientProfiles(),
    getResilientAllProgress(),
    getResilientCourses(user.id, true),
  ]);

  // Create lookup maps
  const profileMap = new Map(profiles.map((p: any) => [p.id, p]));
  const lessonMap = new Map();
  for (const c of courses) {
    for (const l of c.lessons) {
      lessonMap.set(l.id, { ...l, courseTitle: c.title });
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0b1120] text-slate-900 dark:text-slate-100 flex flex-col transition-colors">
      <Header
        userEmail={user.email}
        userName={currentProfile?.full_name}
        role={currentProfile?.role}
      />

      <main className="flex-1 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Header */}
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
              <span className="text-slate-900 dark:text-white">
                Auditoría de Tiempos
              </span>
            </div>
            <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">
              Registro de Tiempos Anticheating
            </h1>
          </div>

          <Link
            href="/admin"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-2 text-xs font-bold text-slate-700 dark:text-slate-300 shadow-xs hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          >
            &larr; Volver al Panel Admin
          </Link>
        </div>

        {/* Audit Log Table */}
        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm overflow-hidden">
          <div className="border-b border-slate-100 dark:border-slate-800 p-6">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              Historial de Intentos y Avances ({progressRecords?.length || 0})
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Auditoría respaldada por sellos de tiempo del servidor.
            </p>
          </div>

          {!progressRecords || progressRecords.length === 0 ? (
            <div className="p-12 text-center text-sm text-slate-500 dark:text-slate-400">
              No hay registros de progreso grabados todavía en el servidor.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-700 dark:text-slate-300">
                <thead className="bg-slate-50 dark:bg-slate-800/60 text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 border-b border-slate-200 dark:border-slate-800">
                  <tr>
                    <th className="px-6 py-4">Estudiante</th>
                    <th className="px-6 py-4">Curso / Lección</th>
                    <th className="px-6 py-4">Inicio Servidor</th>
                    <th className="px-6 py-4">Fin Servidor</th>
                    <th className="px-6 py-4">Tiempo Real vs Exigido</th>
                    <th className="px-6 py-4">Estado Verificación</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {progressRecords.map((item: any, idx: number) => {
                    const prof =
                      profileMap.get(item.user_id) ||
                      profiles.find((p: any) => p.role === "student") ||
                      profiles[0];
                    const les = lessonMap.get(item.lesson_id) || {
                      title: item.lesson_id,
                      min_seconds: 30,
                      courseTitle: "Fundamentos de Ciberseguridad Blue Team",
                    };
                    const minSecs = les?.min_seconds || 30;
                    const elapsed = item.elapsed_seconds || 0;
                    const isCompleted = item.is_completed;
                    const isCompliant = elapsed >= minSecs && isCompleted;

                    return (
                      <tr
                        key={idx}
                        className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors"
                      >
                        <td className="px-6 py-4">
                          <div className="font-bold text-slate-900 dark:text-white">
                            {prof?.full_name || "Estudiante BlueTeam"}
                          </div>
                          <div className="text-[11px] text-slate-400 dark:text-slate-500 font-mono">
                            {prof?.email || "student@blueteam.com"}
                          </div>
                        </td>

                        <td className="px-6 py-4">
                          <div className="font-semibold text-slate-800 dark:text-slate-200">
                            {les?.title || item.lesson_id}
                          </div>
                          <div className="text-[11px] text-[#1a80ff] font-semibold">
                            {les?.courseTitle ||
                              "Fundamentos de Ciberseguridad Blue Team"}
                          </div>
                        </td>

                        <td className="px-6 py-4 font-mono text-[11px] text-slate-600 dark:text-slate-400">
                          {item.started_at
                            ? new Date(item.started_at).toLocaleString("es-ES")
                            : "—"}
                        </td>

                        <td className="px-6 py-4 font-mono text-[11px] text-slate-600 dark:text-slate-400">
                          {item.completed_at
                            ? new Date(item.completed_at).toLocaleString(
                                "es-ES",
                              )
                            : "—"}
                        </td>

                        <td className="px-6 py-4">
                          <div className="font-extrabold text-slate-900 dark:text-white">
                            {isCompleted ? `${elapsed}s` : "En curso..."}
                          </div>
                          <div className="text-[10px] text-slate-400 dark:text-slate-500 font-semibold">
                            Mín. exigido: {minSecs}s
                          </div>
                        </td>

                        <td className="px-6 py-4">
                          {isCompliant ? (
                            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 text-xs font-bold text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                              ✓ Verificado ({elapsed}s &ge; {minSecs}s)
                            </span>
                          ) : isCompleted ? (
                            <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 dark:bg-amber-950/60 px-2.5 py-1 text-xs font-bold text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                              ⚠ Finalizado ({elapsed}s)
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 dark:bg-blue-950/60 px-2.5 py-1 text-xs font-bold text-[#1a80ff]">
                              ⏳ En progreso
                            </span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
