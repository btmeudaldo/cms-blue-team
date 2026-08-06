"use client";

import { useState, useTransition } from "react";
import { updateStudentEnrollmentsAction } from "@/app/actions/enrollment.actions";

type CourseItem = {
  id: string;
  title: string;
  slug: string;
  lessons?: any[];
};

type StudentEnrollmentManagerProps = {
  userId: string;
  userName: string;
  courses: CourseItem[];
  initialEnrolledCourseIds: string[];
};

export function StudentEnrollmentManager({
  userId,
  userName,
  courses,
  initialEnrolledCourseIds,
}: StudentEnrollmentManagerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterTab, setFilterTab] = useState<"all" | "enrolled" | "available">("all");
  const [selectedCourseIds, setSelectedCourseIds] = useState<string[]>(initialEnrolledCourseIds);
  const [isPending, startTransition] = useTransition();

  const allCourseIds = courses.map((c) => c.id);
  const enrolledCount = selectedCourseIds.length;

  function toggleCourse(courseId: string) {
    if (selectedCourseIds.includes(courseId)) {
      setSelectedCourseIds(selectedCourseIds.filter((id) => id !== courseId));
    } else {
      setSelectedCourseIds([...selectedCourseIds, courseId]);
    }
  }

  function handleSelectAll() {
    setSelectedCourseIds(allCourseIds);
  }

  function handleDeselectAll() {
    setSelectedCourseIds([]);
  }

  function handleSaveChanges() {
    startTransition(async () => {
      await updateStudentEnrollmentsAction(userId, selectedCourseIds, allCourseIds);
      setIsOpen(false);
    });
  }

  // Filter courses by query and tab
  const filteredCourses = courses.filter((c) => {
    const matchesSearch =
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.slug.toLowerCase().includes(searchQuery.toLowerCase());

    const isEnrolled = selectedCourseIds.includes(c.id);

    if (!matchesSearch) return false;
    if (filterTab === "enrolled") return isEnrolled;
    if (filterTab === "available") return !isEnrolled;
    return true;
  });

  return (
    <div>
      {/* Table Row Trigger Button */}
      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className={`inline-flex items-center gap-2 rounded-xl px-3.5 py-1.5 text-xs font-bold transition-all cursor-pointer border ${
            enrolledCount > 0
              ? "bg-blue-50 dark:bg-blue-950/60 text-[#1a80ff] border-blue-200 dark:border-blue-800 hover:bg-[#1a80ff] hover:text-white"
              : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-blue-300 hover:text-[#1a80ff]"
          }`}
        >
          <span>🎓 {enrolledCount === 0 ? "Sin Matrículas" : `${enrolledCount} ${enrolledCount === 1 ? "Curso Matriculado" : "Cursos Matriculados"}`}</span>
          <span className="text-[10px] opacity-60">▼ Modificar</span>
        </button>
      </div>

      {/* Scalable Multi-Select Modal with Real-time Search */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4">
          <div className="w-full max-w-2xl rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-2xl space-y-5 animate-in fade-in zoom-in duration-150">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <div>
                <h3 className="text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                  <span>🎓</span> Gestión de Matrículas Aeronáuticas
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Estudiante: <strong className="text-slate-800 dark:text-slate-200">{userName}</strong> &middot; ({selectedCourseIds.length} seleccionados)
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Search Input Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="🔍 Buscar curso por nombre, código o temática..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-4 py-2.5 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:border-[#1a80ff] focus:bg-white dark:focus:bg-slate-900 focus:outline-hidden transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-2.5 text-xs font-bold text-slate-400 hover:text-slate-600"
                >
                  Limpiar
                </button>
              )}
            </div>

            {/* Filter Tabs & Quick Action Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-bold border-b border-slate-100 dark:border-slate-800 pb-3">
              <div className="flex gap-1 bg-slate-100 dark:bg-slate-800/80 p-1 rounded-xl">
                <button
                  type="button"
                  onClick={() => setFilterTab("all")}
                  className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                    filterTab === "all"
                      ? "bg-white dark:bg-slate-900 text-[#1a80ff] shadow-xs"
                      : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  Todos ({courses.length})
                </button>
                <button
                  type="button"
                  onClick={() => setFilterTab("enrolled")}
                  className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                    filterTab === "enrolled"
                      ? "bg-white dark:bg-slate-900 text-[#1a80ff] shadow-xs"
                      : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  Matriculados ({selectedCourseIds.length})
                </button>
                <button
                  type="button"
                  onClick={() => setFilterTab("available")}
                  className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                    filterTab === "available"
                      ? "bg-white dark:bg-slate-900 text-[#1a80ff] shadow-xs"
                      : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  Sin Matricular ({courses.length - selectedCourseIds.length})
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleSelectAll}
                  className="text-[11px] text-[#1a80ff] hover:underline"
                >
                  Marcar Todos
                </button>
                <span className="text-slate-300 dark:text-slate-700">&middot;</span>
                <button
                  type="button"
                  onClick={handleDeselectAll}
                  className="text-[11px] text-slate-500 dark:text-slate-400 hover:underline"
                >
                  Desmarcar Todos
                </button>
              </div>
            </div>

            {/* Scrollable Course Selection List (Handles 100+ Courses efficiently) */}
            <div className="max-h-64 overflow-y-auto space-y-2 pr-1 custom-scrollbar">
              {filteredCourses.length === 0 ? (
                <div className="py-8 text-center text-xs text-slate-400">
                  No se encontraron cursos que coincidan con &quot;{searchQuery}&quot;.
                </div>
              ) : (
                filteredCourses.map((course) => {
                  const isChecked = selectedCourseIds.includes(course.id);
                  const lessonCount = course.lessons?.length || 0;

                  return (
                    <label
                      key={course.id}
                      onClick={() => toggleCourse(course.id)}
                      className={`flex items-center justify-between p-3 rounded-2xl border transition-all cursor-pointer ${
                        isChecked
                          ? "bg-blue-50/70 dark:bg-blue-950/40 border-blue-200 dark:border-blue-800"
                          : "bg-slate-50 dark:bg-slate-950/50 border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => {}} // Handled by outer label onClick
                          className="h-4 w-4 rounded-md border-slate-300 dark:border-slate-700 text-[#1a80ff] focus:ring-[#1a80ff]"
                        />
                        <div>
                          <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-2">
                            <span>{course.title}</span>
                          </div>
                          <div className="text-[10px] text-slate-400 dark:text-slate-500 font-mono mt-0.5">
                            /{course.slug} &middot; {lessonCount} {lessonCount === 1 ? "lección" : "lecciones"}
                          </div>
                        </div>
                      </div>

                      <span
                        className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full border ${
                          isChecked
                            ? "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800"
                            : "bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border-transparent"
                        }`}
                      >
                        {isChecked ? "✓ Matriculado" : "+ Sin Matricular"}
                      </span>
                    </label>
                  );
                })
              )}
            </div>

            {/* Footer Action Bar */}
            <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-4">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                Total a guardar: <strong className="text-[#1a80ff]">{selectedCourseIds.length} cursos</strong>
              </span>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl border border-slate-200 dark:border-slate-800 px-4 py-2 text-xs font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  onClick={handleSaveChanges}
                  disabled={isPending}
                  className="rounded-xl bg-[#1a80ff] px-5 py-2 text-xs font-bold text-white shadow-md shadow-blue-500/20 hover:bg-[#0066e6] transition-all disabled:opacity-50 cursor-pointer"
                >
                  {isPending ? "Guardando..." : "Guardar Matrículas"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
