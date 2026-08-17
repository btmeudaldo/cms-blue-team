"use client";

import { useMemo, useState } from "react";
import { AuditFilterTable } from "./audit-filter-table";

import { evaluateLessonCompletion } from "../domain/quiz-evaluation";

type StudentDossierViewProps = {
  profiles: any[];
  progressRecords: any[];
  courses: any[];
  quizzes?: any[];
  quizAttempts?: any[];
};

export function StudentDossierView({
  profiles,
  progressRecords,
  courses,
  quizzes = [],
  quizAttempts = [],
}: StudentDossierViewProps) {
  const [activeTab, setActiveTab] = useState<"dossiers" | "table">("dossiers");
  const [selectedStudentId, setSelectedStudentId] = useState<string | null>(
    null,
  );
  const [dossierSearchQuery, setDossierSearchQuery] = useState("");
  const [courseFilter, setCourseFilter] = useState("all");

  // Create Lookup Maps
  const profileMap = useMemo(
    () => new Map(profiles.map((p: any) => [p.id, p])),
    [profiles],
  );

  const lessonMap = useMemo(() => {
    const map = new Map();
    for (const c of courses) {
      for (const l of c.lessons || []) {
        map.set(l.id, { ...l, courseId: c.id, courseTitle: c.title });
      }
    }
    return map;
  }, [courses]);

  // List of Students (profiles with role === 'student' or matching email/role criteria)
  const studentList = useMemo(() => {
    return profiles.filter((p: any) => {
      if (!p) return false;
      const roles = Array.isArray(p.roles)
        ? p.roles
        : Array.isArray(p.role)
          ? p.role
          : [p.role];

      return (
        roles.some((r: any) => {
          const str = String(r || "").toLowerCase();
          return (
            str === "student" || str === "alumno" || str.includes("student")
          );
        }) ||
        p.email?.includes("student") ||
        p.email?.includes("alumno")
      );
    });
  }, [profiles]);

  // Filtered Student Roster based on Search
  const filteredStudents = useMemo(() => {
    if (!dossierSearchQuery.trim()) return studentList;
    const q = dossierSearchQuery.toLowerCase().trim();
    return studentList.filter((s: any) => {
      const name = (s.full_name || "").toLowerCase();
      const email = (s.email || "").toLowerCase();
      return name.includes(q) || email.includes(q);
    });
  }, [studentList, dossierSearchQuery]);

  // Selected Student Object
  const selectedStudent = useMemo(() => {
    if (!selectedStudentId) return null;
    return (
      studentList.find(
        (s: any) => s.id === selectedStudentId || s.email === selectedStudentId,
      ) ||
      profileMap.get(selectedStudentId) ||
      null
    );
  }, [selectedStudentId, studentList, profileMap]);

  // Progress records for the selected student
  const studentProgressRecords = useMemo(() => {
    if (!selectedStudent) return [];
    const targetId = selectedStudent.id;
    const targetEmail = selectedStudent.email;

    return (progressRecords || []).filter(
      (pr: any) =>
        pr.user_id === targetId ||
        pr.user_id === targetEmail ||
        profileMap.get(pr.user_id)?.email === targetEmail,
    );
  }, [selectedStudent, progressRecords, profileMap]);

  // Metrics for Selected Student
  const studentMetrics = useMemo(() => {
    if (!selectedStudent)
      return {
        totalSeconds: 0,
        completedCount: 0,
        compliantCount: 0,
        complianceRate: 0,
      };

    let totalSecs = 0;
    let completedCount = 0;
    let compliantCount = 0;

    for (const pr of studentProgressRecords) {
      const secs = pr.elapsed_seconds || 0;
      totalSecs += secs;

      if (pr.is_completed) {
        completedCount++;
        const les = lessonMap.get(pr.lesson_id);
        const minSecs = les?.min_seconds || 30;
        if (secs >= minSecs) {
          compliantCount++;
        }
      }
    }

    const complianceRate =
      completedCount > 0
        ? Math.round((compliantCount / completedCount) * 100)
        : 100;

    return {
      totalSeconds: totalSecs,
      completedCount,
      compliantCount,
      complianceRate,
    };
  }, [selectedStudent, studentProgressRecords, lessonMap]);

  return (
    <div className="space-y-6">
      {/* Top Header Navigation Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-3">
        <div className="flex items-center gap-2 rounded-2xl bg-slate-200/60 dark:bg-slate-800/60 p-1 text-xs font-bold w-fit">
          <button
            type="button"
            onClick={() => {
              setActiveTab("dossiers");
              setSelectedStudentId(null);
            }}
            className={`flex items-center gap-2 rounded-xl px-4 py-2 transition-all cursor-pointer ${
              activeTab === "dossiers" && !selectedStudentId
                ? "bg-white dark:bg-slate-900 text-[#1a80ff] shadow-xs font-extrabold"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <span>🗂️</span>
            <span>Directorio de Expedientes ({studentList.length})</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveTab("table");
              setSelectedStudentId(null);
            }}
            className={`flex items-center gap-2 rounded-xl px-4 py-2 transition-all cursor-pointer ${
              activeTab === "table"
                ? "bg-white dark:bg-slate-900 text-[#1a80ff] shadow-xs font-extrabold"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <span>📊</span>
            <span>Vista de Registros Globales</span>
          </button>
        </div>

        {selectedStudentId && (
          <button
            type="button"
            onClick={() => setSelectedStudentId(null)}
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-3.5 py-1.5 text-xs font-bold text-slate-700 dark:text-slate-300 shadow-xs hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            &larr; Volver al Directorio de Alumnos
          </button>
        )}
      </div>

      {/* RENDER TAB 1: INDIVIDUAL STUDENT DOSSIER DETAIL */}
      {selectedStudent ? (
        <div className="space-y-6 animate-in fade-in duration-200">
          {/* Student Dossier Header Card */}
          <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 md:p-8 shadow-sm space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-100 dark:border-slate-800 pb-6">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1a80ff] to-[#004fc2] text-white font-extrabold text-2xl shadow-md">
                  {(selectedStudent.full_name || selectedStudent.email)[0].toUpperCase()}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 dark:bg-blue-950/60 px-2.5 py-0.5 text-[10px] font-extrabold text-[#1a80ff] uppercase tracking-wider">
                      Expediente Académico
                    </span>
                    {studentMetrics.complianceRate === 100 ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-0.5 text-[10px] font-extrabold text-emerald-600 dark:text-emerald-400">
                        ✓ 100% Anticheating Verificado
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 dark:bg-amber-950/60 px-2.5 py-0.5 text-[10px] font-extrabold text-amber-600 dark:text-amber-400">
                        ⚠️ Cumplimiento: {studentMetrics.complianceRate}%
                      </span>
                    )}
                  </div>
                  <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-1">
                    {selectedStudent.full_name || "Piloto Alumno"}
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                    {selectedStudent.email}
                  </p>
                </div>
              </div>

              {/* Dossier Quick Select Dropdown */}
              <div className="flex items-center gap-3">
                <label className="text-xs font-bold text-slate-500 dark:text-slate-400 whitespace-nowrap">
                  Cambiar Expediente:
                </label>
                <select
                  value={selectedStudent.id || selectedStudent.email}
                  onChange={(e) => setSelectedStudentId(e.target.value)}
                  className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-3.5 py-2 text-xs font-bold text-slate-900 dark:text-white focus:border-[#1a80ff] focus:outline-hidden cursor-pointer"
                >
                  {studentList.map((s: any) => (
                    <option key={s.id || s.email} value={s.id || s.email}>
                      👤 {s.full_name || s.email}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Dossier Executive Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 p-4 space-y-1">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Tiempo Total de Estudio Registrado
                </span>
                <div className="text-2xl font-extrabold text-[#1a80ff]">
                  {Math.floor(studentMetrics.totalSeconds / 60)} min{" "}
                  {studentMetrics.totalSeconds % 60}s
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Acumulado en servidor
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 p-4 space-y-1">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Lecciones Completadas
                </span>
                <div className="text-2xl font-extrabold text-slate-900 dark:text-white">
                  {studentMetrics.completedCount}
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Finalizadas por el alumno
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 p-4 space-y-1">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Índice de Validación Anticheating
                </span>
                <div className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400">
                  {studentMetrics.complianceRate}%
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  {studentMetrics.compliantCount} de{" "}
                  {studentMetrics.completedCount} lecciones cumplen tiempo mín.
                </p>
              </div>
            </div>
          </div>

          {/* Dossier Detail: Breakdown by Course */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                <span>Historial de Lecciones y Tiempos Servidor</span>
                <span className="text-xs font-semibold text-slate-400 dark:text-slate-500">
                  ({studentProgressRecords.length} registros)
                </span>
              </h3>
            </div>

            {studentProgressRecords.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 p-12 text-center text-slate-500 dark:text-slate-400 space-y-2">
                <div className="text-3xl">📖</div>
                <p className="font-bold text-slate-700 dark:text-slate-300">
                  El expediente de este alumno no tiene actividad registrada
                  aún.
                </p>
                <p className="text-xs text-slate-400 max-w-md mx-auto">
                  Cuando el alumno ingrese a sus lecciones y cumpla el tiempo de
                  lectura, sus marcas atómicas de servidor aparecerán aquí
                  automáticamente.
                </p>
              </div>
            ) : (
              <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs text-slate-700 dark:text-slate-300">
                    <thead className="bg-slate-50 dark:bg-slate-800/60 text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 border-b border-slate-200 dark:border-slate-800">
                      <tr>
                        <th className="px-6 py-4">Curso / Lección</th>
                        <th className="px-6 py-4">Marca de Inicio Servidor</th>
                        <th className="px-6 py-4">Marca de Fin Servidor</th>
                        <th className="px-6 py-4">Tiempo Registrado vs Mín.</th>
                        <th className="px-6 py-4">Dictamen de Verificación</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                      {studentProgressRecords.map((item: any, idx: number) => {
                        const les = lessonMap.get(item.lesson_id) || {
                          title: item.lesson_id,
                          min_seconds: 30,
                          courseTitle: "Curso",
                        };
                        const minSecs = les?.min_seconds || 30;
                        const elapsed = item.elapsed_seconds || 0;
                        const isCompleted = item.is_completed;

                        const quiz = (quizzes || []).find(
                          (q: any) =>
                            q.lesson_id === item.lesson_id ||
                            q.id === item.lesson_id,
                        );

                        const userAttempts = (quizAttempts || []).filter(
                          (qa: any) =>
                            qa.user_id === item.user_id &&
                            (quiz ? qa.quiz_id === quiz.id : false),
                        );
                        const latestAttempt =
                          userAttempts.length > 0
                            ? userAttempts[userAttempts.length - 1]
                            : null;

                        const evaluation = evaluateLessonCompletion(
                          elapsed,
                          minSecs,
                          isCompleted,
                          quiz || null,
                          latestAttempt || null,
                        );

                        return (
                          <tr
                            key={idx}
                            className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors"
                          >
                            <td className="px-6 py-4">
                              <div className="font-bold text-slate-900 dark:text-white">
                                {les?.title || item.lesson_id}
                              </div>
                              <div className="text-[11px] text-[#1a80ff] font-semibold">
                                {les?.courseTitle || "Modulo Formativo"}
                              </div>
                            </td>

                            <td className="px-6 py-4 font-mono text-[11px] text-slate-600 dark:text-slate-400">
                              {item.started_at
                                ? new Date(item.started_at).toLocaleString(
                                    "es-ES",
                                  )
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
                                {isCompleted ? `${elapsed}s` : "En estudio..."}
                              </div>
                              <div className="text-[10px] text-slate-400 dark:text-slate-500 font-semibold">
                                Mín. exigido: {minSecs}s
                              </div>
                            </td>

                            <td className="px-6 py-4">
                              {evaluation.statusBadgeVariant === "success" ? (
                                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 text-xs font-bold text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                                  {evaluation.statusLabel}
                                </span>
                              ) : evaluation.statusBadgeVariant === "error" ? (
                                <span className="inline-flex items-center gap-1 rounded-full bg-rose-50 dark:bg-rose-950/60 px-2.5 py-1 text-xs font-bold text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800">
                                  {evaluation.statusLabel}
                                </span>
                              ) : evaluation.statusBadgeVariant === "warning" ? (
                                <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 dark:bg-amber-950/60 px-2.5 py-1 text-xs font-bold text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                                  {evaluation.statusLabel}
                                </span>
                              ) : (
                                <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 dark:bg-blue-950/60 px-2.5 py-1 text-xs font-bold text-[#1a80ff]">
                                  {evaluation.statusLabel}
                                </span>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : activeTab === "table" ? (
        /* RENDER TAB 2: GLOBAL AUDIT TABLE VIEW */
        <AuditFilterTable
          profiles={profiles}
          progressRecords={progressRecords}
          courses={courses}
        />
      ) : (
        /* RENDER TAB 3: STUDENT DOSSIER ROSTER / DIRECTORY GRID */
        <div className="space-y-6 animate-in fade-in duration-200">
          {/* Directory Control Bar */}
          <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="🔍 Buscar por nombre o correo de alumno..."
                value={dossierSearchQuery}
                onChange={(e) => setDossierSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-4 py-2.5 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:border-[#1a80ff] focus:outline-hidden"
              />
              {dossierSearchQuery && (
                <button
                  type="button"
                  onClick={() => setDossierSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600"
                >
                  ✕
                </button>
              )}
            </div>

            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              Mostrando {filteredStudents.length} expedientes de alumnos
            </div>
          </div>

          {/* Student Dossiers Grid */}
          {filteredStudents.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 p-12 text-center text-slate-500 dark:text-slate-400 space-y-2">
              <div className="text-3xl">👥</div>
              <p className="font-bold text-slate-700 dark:text-slate-300">
                No se encontraron alumnos con el criterio de búsqueda.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredStudents.map((st: any) => {
                const targetId = st.id;
                const targetEmail = st.email;

                const stRecords = (progressRecords || []).filter(
                  (pr: any) =>
                    pr.user_id === targetId ||
                    pr.user_id === targetEmail ||
                    profileMap.get(pr.user_id)?.email === targetEmail,
                );

                const totalSecs = stRecords.reduce(
                  (acc: number, r: any) => acc + (r.elapsed_seconds || 0),
                  0,
                );
                const completedCount = stRecords.filter(
                  (r: any) => r.is_completed,
                ).length;

                return (
                  <div
                    key={st.id || st.email}
                    className="group rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-xs card-hover transition-all flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-4">
                      {/* Header Avatar & Role */}
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-[#1a80ff] font-extrabold text-lg border border-blue-100 dark:border-blue-900 group-hover:bg-[#1a80ff] group-hover:text-white transition-colors">
                            {(st.full_name || st.email)[0].toUpperCase()}
                          </div>
                          <div className="leading-snug">
                            <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-[#1a80ff] transition-colors">
                              {st.full_name || "Piloto Alumno"}
                            </h4>
                            <p className="text-[11px] text-slate-400 dark:text-slate-500 font-mono truncate max-w-[180px]">
                              {st.email}
                            </p>
                          </div>
                        </div>

                        <span className="shrink-0 rounded-full bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 text-[10px] font-extrabold text-[#1a80ff]">
                          Alumno
                        </span>
                      </div>

                      {/* Mini Metrics */}
                      <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
                        <div className="rounded-xl bg-slate-50 dark:bg-slate-800/50 p-2.5 space-y-0.5">
                          <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 block">
                            Tiempo Estudio
                          </span>
                          <span className="font-extrabold text-slate-900 dark:text-white">
                            {Math.floor(totalSecs / 60)} min {totalSecs % 60}s
                          </span>
                        </div>

                        <div className="rounded-xl bg-slate-50 dark:bg-slate-800/50 p-2.5 space-y-0.5">
                          <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 block">
                            Lecciones
                          </span>
                          <span className="font-extrabold text-emerald-600 dark:text-emerald-400">
                            {completedCount} completadas
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Action Button */}
                    <button
                      type="button"
                      onClick={() =>
                        setSelectedStudentId(st.id || st.email || null)
                      }
                      className="w-full flex items-center justify-center gap-2 rounded-xl bg-slate-900 dark:bg-slate-800 text-white py-2.5 text-xs font-bold group-hover:bg-[#1a80ff] transition-colors cursor-pointer shadow-xs"
                    >
                      <span>Abrir Expediente Académico</span>
                      <span>&rarr;</span>
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
