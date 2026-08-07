"use client";

import { useMemo, useState } from "react";

type AuditFilterTableProps = {
  profiles: any[];
  progressRecords: any[];
  courses: any[];
};

export function AuditFilterTable({
  profiles,
  progressRecords,
  courses,
}: AuditFilterTableProps) {
  const [selectedStudentId, setSelectedStudentId] = useState<string>("all");
  const [selectedCourseId, setSelectedCourseId] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Create lookup maps
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

  // List of unique students (profiles with role === 'student' or containing student in role)
  const studentList = useMemo(() => {
    return profiles.filter((p: any) => {
      if (!p) return false;
      const roles = Array.isArray(p.roles)
        ? p.roles
        : Array.isArray(p.role)
          ? p.role
          : [p.role];

      return roles.some((r: any) => {
        const str = String(r || "").toLowerCase();
        return str === "student" || str === "alumno" || str.includes("student");
      });
    });
  }, [profiles]);

  // Filtered records
  const filteredRecords = useMemo(() => {
    return (progressRecords || []).filter((item: any) => {
      const prof =
        profileMap.get(item.user_id) ||
        profiles.find((p: any) => p.id === item.user_id || p.email === item.user_id) ||
        profiles[0];
      const les = lessonMap.get(item.lesson_id) || {
        title: item.lesson_id,
        courseId: "c1",
        courseTitle: "Curso",
      };

      // 1. Student filter
      if (selectedStudentId !== "all") {
        if (
          item.user_id !== selectedStudentId &&
          prof?.id !== selectedStudentId &&
          prof?.email !== selectedStudentId
        ) {
          return false;
        }
      }

      // 2. Course filter
      if (selectedCourseId !== "all") {
        if (
          les.courseId !== selectedCourseId &&
          les.courseTitle !== selectedCourseId
        ) {
          return false;
        }
      }

      // 3. Search query
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase().trim();
        const studentName = (prof?.full_name || "").toLowerCase();
        const studentEmail = (prof?.email || "").toLowerCase();
        const lessonTitle = (les?.title || item.lesson_id || "").toLowerCase();
        const courseTitle = (les?.courseTitle || "").toLowerCase();

        const matches =
          studentName.includes(q) ||
          studentEmail.includes(q) ||
          lessonTitle.includes(q) ||
          courseTitle.includes(q);

        if (!matches) return false;
      }

      return true;
    });
  }, [
    progressRecords,
    selectedStudentId,
    selectedCourseId,
    searchQuery,
    profileMap,
    lessonMap,
    profiles,
  ]);

  // Calculated Metrics
  const totalVerifiedCount = useMemo(() => {
    return filteredRecords.filter((item: any) => {
      const les = lessonMap.get(item.lesson_id);
      const minSecs = les?.min_seconds || 30;
      return item.is_completed && (item.elapsed_seconds || 0) >= minSecs;
    }).length;
  }, [filteredRecords, lessonMap]);

  const totalSecondsStudied = useMemo(() => {
    return filteredRecords.reduce(
      (acc: number, item: any) => acc + (item.elapsed_seconds || 0),
      0,
    );
  }, [filteredRecords]);

  return (
    <div className="space-y-6">
      {/* Metric Cards Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-xs flex items-center justify-between">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Registros Encontrados
            </span>
            <div className="text-2xl font-extrabold text-slate-900 dark:text-white mt-1">
              {filteredRecords.length}
            </div>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-950/60 text-[#1a80ff] text-xl font-bold">
            📊
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-xs flex items-center justify-between">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Verificados por Servidor
            </span>
            <div className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400 mt-1">
              {totalVerifiedCount}
            </div>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 text-xl font-bold">
            ✅
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-xs flex items-center justify-between">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Tiempo Total Registrado
            </span>
            <div className="text-2xl font-extrabold text-[#1a80ff] mt-1">
              {Math.floor(totalSecondsStudied / 60)} min {totalSecondsStudied % 60}s
            </div>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-950/60 text-[#1a80ff] text-xl font-bold">
            ⏱️
          </div>
        </div>
      </div>

      {/* Interactive Filter Bar */}
      <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Dropdown 1: Select Student */}
          <div className="flex-1 min-w-[200px]">
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              👥 Filtrar por Alumno
            </label>
            <select
              value={selectedStudentId}
              onChange={(e) => setSelectedStudentId(e.target.value)}
              className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-3.5 py-2.5 text-xs font-semibold text-slate-900 dark:text-white focus:border-[#1a80ff] focus:outline-hidden cursor-pointer"
            >
              <option value="all">👥 Todos los Alumnos ({studentList.length})</option>
              {studentList.map((st: any) => (
                <option key={st.id || st.email} value={st.id || st.email}>
                  👤 {st.full_name || st.email} ({st.email})
                </option>
              ))}
            </select>
          </div>

          {/* Dropdown 2: Select Course */}
          <div className="flex-1 min-w-[200px]">
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              📚 Filtrar por Curso
            </label>
            <select
              value={selectedCourseId}
              onChange={(e) => setSelectedCourseId(e.target.value)}
              className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-3.5 py-2.5 text-xs font-semibold text-slate-900 dark:text-white focus:border-[#1a80ff] focus:outline-hidden cursor-pointer"
            >
              <option value="all">📚 Todos los Cursos ({courses.length})</option>
              {courses.map((c: any) => (
                <option key={c.id} value={c.id}>
                  📘 {c.title}
                </option>
              ))}
            </select>
          </div>

          {/* Input 3: Quick Search */}
          <div className="flex-1 min-w-[220px]">
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              🔍 Búsqueda Rápida
            </label>
            <input
              type="text"
              placeholder="Nombre, correo o lección..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-3.5 py-2.5 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:border-[#1a80ff] focus:outline-hidden"
            />
          </div>
        </div>

        {/* Clear Filters Indicator */}
        {(selectedStudentId !== "all" ||
          selectedCourseId !== "all" ||
          searchQuery !== "") && (
          <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-3 text-xs">
            <span className="font-semibold text-slate-500 dark:text-slate-400">
              Mostrando {filteredRecords.length} registros filtrados
            </span>
            <button
              type="button"
              onClick={() => {
                setSelectedStudentId("all");
                setSelectedCourseId("all");
                setSearchQuery("");
              }}
              className="text-xs font-bold text-rose-600 dark:text-rose-400 hover:underline cursor-pointer"
            >
              ✕ Limpiar Filtros
            </button>
          </div>
        )}
      </div>

      {/* Main Audit Table */}
      <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm overflow-hidden">
        <div className="border-b border-slate-100 dark:border-slate-800 p-6 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              Historial de Auditoría de Tiempos ({filteredRecords.length})
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Marcas de tiempo atómicas derivadas directamente en PostgreSQL / Servidor.
            </p>
          </div>
        </div>

        {filteredRecords.length === 0 ? (
          <div className="p-12 text-center text-sm text-slate-500 dark:text-slate-400 space-y-2">
            <div className="text-3xl">🔍</div>
            <p className="font-bold text-slate-700 dark:text-slate-300">
              No se encontraron registros para los filtros seleccionados
            </p>
            <p className="text-xs text-slate-400">
              Intenta seleccionar otro alumno o limpiar el buscador.
            </p>
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
                {filteredRecords.map((item: any, idx: number) => {
                  const prof =
                    profileMap.get(item.user_id) ||
                    profiles.find(
                      (p: any) => p.id === item.user_id || p.email === item.user_id,
                    ) ||
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
                          {les?.courseTitle || "Curso de Formación"}
                        </div>
                      </td>

                      <td className="px-6 py-4 font-mono text-[11px] text-slate-600 dark:text-slate-400">
                        {item.started_at
                          ? new Date(item.started_at).toLocaleString("es-ES")
                          : "—"}
                      </td>

                      <td className="px-6 py-4 font-mono text-[11px] text-slate-600 dark:text-slate-400">
                        {item.completed_at
                          ? new Date(item.completed_at).toLocaleString("es-ES")
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
    </div>
  );
}
