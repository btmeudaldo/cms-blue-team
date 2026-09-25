"use client";

import { useMemo, useState } from "react";
import { AuditFilterTable } from "./audit-filter-table";
import { evaluateLessonCompletion } from "../domain/quiz-evaluation";
import { exportDossierCSV, exportDossierPDF } from "../domain/dossier-export";
import { updateUserDniAction } from "@/app/actions/enrollment.actions";
import { InPersonExamModal } from "./in-person-exam-modal";
import { checkCourseCertificateEligibility } from "../domain/course-completion";
import { exportOfficialCertificatePDF } from "../domain/certificate-export";
import { deleteInPersonExamAction } from "@/app/actions/in-person-exam.actions";

type StudentDossierViewProps = {
  profiles: any[];
  progressRecords: any[];
  courses: any[];
  quizzes?: any[];
  quizAttempts?: any[];
  inPersonExams?: any[];
};

export function StudentDossierView({
  profiles,
  progressRecords,
  courses,
  quizzes = [],
  quizAttempts = [],
  inPersonExams = [],
}: StudentDossierViewProps) {
  const [profilesList, setProfilesList] = useState<any[]>(profiles);
  const [inPersonExamsList, setInPersonExamsList] = useState<any[]>(inPersonExams);
  const [isExamModalOpen, setIsExamModalOpen] = useState(false);
  const [selectedExamToEdit, setSelectedExamToEdit] = useState<any>(null);
  const [deletingExamId, setDeletingExamId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"dossiers" | "table">("dossiers");
  const [selectedStudentId, setSelectedStudentId] = useState<string | null>(
    null,
  );
  const [dossierSearchQuery, setDossierSearchQuery] = useState("");
  const [courseFilter, setCourseFilter] = useState("all");

  const [isEditingDni, setIsEditingDni] = useState(false);
  const [dniInput, setDniInput] = useState("");
  const [isSavingDni, setIsSavingDni] = useState(false);

  // Create Lookup Maps
  const profileMap = useMemo(
    () => new Map(profilesList.map((p: any) => [p.id, p])),
    [profilesList],
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
  }, [profilesList]);

  // Filtered Student Roster based on Search
  const filteredStudents = useMemo(() => {
    if (!dossierSearchQuery.trim()) return studentList;
    const q = dossierSearchQuery.toLowerCase().trim();
    return studentList.filter((s: any) => {
      const name = (s.full_name || "").toLowerCase();
      const email = (s.email || "").toLowerCase();
      const dni = (s.dni_nie || "").toLowerCase();
      return name.includes(q) || email.includes(q) || dni.includes(q);
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
        profileMap.get(pr.user_id)?.email === targetEmail ||
        (targetEmail === "student@blueteam.com" &&
          (pr.user_id === "student-123" || pr.user_id === "student")),
    );
  }, [selectedStudent, progressRecords, profileMap]);

  // In-Person exams for the selected student
  const studentInPersonExams = useMemo(() => {
    if (!selectedStudent) return [];
    const targetId = selectedStudent.id;
    const targetEmail = selectedStudent.email;

    return (inPersonExamsList || []).filter(
      (e: any) =>
        e.user_id === targetId ||
        e.user_id === targetEmail ||
        profileMap.get(e.user_id)?.email === targetEmail ||
        (targetEmail === "student@blueteam.com" &&
          (e.user_id === "student-123" || e.user_id === "student")),
    );
  }, [selectedStudent, inPersonExamsList, profileMap]);

  // Course certificate eligibility for all courses for this student
  const studentCourseCertificates = useMemo(() => {
    if (!selectedStudent) return [];
    return courses.map((course: any) => {
      const eligibility = checkCourseCertificateEligibility(
        course,
        studentProgressRecords,
        studentInPersonExams,
        quizAttempts,
        selectedStudent.id,
        quizzes,
      );
      return {
        course,
        eligibility,
      };
    });
  }, [selectedStudent, courses, studentProgressRecords, studentInPersonExams, quizAttempts]);

  async function handleDeleteExam(examId: string) {
    if (!confirm("¿Estás seguro de eliminar este registro de examen presencial?")) return;
    setDeletingExamId(examId);
    try {
      const res = await deleteInPersonExamAction(examId);
      if (res.success) {
        setInPersonExamsList((prev) => prev.filter((e) => e.id !== examId));
      } else if (res.error) {
        alert(res.error);
      }
    } catch (err: any) {
      alert(err.message || "Error al eliminar el examen presencial.");
    } finally {
      setDeletingExamId(null);
    }
  }

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
                  {(selectedStudent.full_name ||
                    selectedStudent.email)[0].toUpperCase()}
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

                  <div className="mt-2.5 flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      DNI / NIE / Pasaporte:
                    </span>
                    {isEditingDni ? (
                      <div className="flex items-center gap-1.5">
                        <input
                          type="text"
                          value={dniInput}
                          onChange={(e) => setDniInput(e.target.value)}
                          placeholder="Ej. 12345678Z"
                          className="rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-2 py-0.5 text-xs font-mono font-bold text-slate-900 dark:text-white focus:outline-hidden focus:border-[#1a80ff]"
                          autoFocus
                        />
                        <button
                          type="button"
                          onClick={async () => {
                            if (!selectedStudent) return;
                            setIsSavingDni(true);
                            try {
                              await updateUserDniAction(selectedStudent.id, dniInput);
                              setProfilesList((prev) =>
                                prev.map((p) =>
                                  p.id === selectedStudent.id
                                    ? { ...p, dni_nie: dniInput.trim() }
                                    : p,
                                ),
                              );
                              setIsEditingDni(false);
                            } catch (err: any) {
                              alert(err.message || "Error al actualizar DNI");
                            } finally {
                              setIsSavingDni(false);
                            }
                          }}
                          disabled={isSavingDni}
                          className="rounded-lg bg-[#1a80ff] px-2.5 py-1 text-[11px] font-bold text-white hover:bg-[#0066e6] transition-colors cursor-pointer"
                        >
                          {isSavingDni ? "..." : "Guardar"}
                        </button>
                        <button
                          type="button"
                          onClick={() => setIsEditingDni(false)}
                          className="rounded-lg bg-slate-200 dark:bg-slate-700 px-2 py-1 text-[11px] font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-300 cursor-pointer"
                        >
                          ✕
                        </button>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 rounded-md border border-slate-200 dark:border-slate-700">
                          {selectedStudent.dni_nie || "Sin registrar"}
                        </span>
                        <button
                          type="button"
                          onClick={() => {
                            setDniInput(selectedStudent.dni_nie || "");
                            setIsEditingDni(true);
                          }}
                          className="text-[11px] text-[#1a80ff] hover:underline font-bold cursor-pointer"
                        >
                          {selectedStudent.dni_nie ? "Editar" : "+ Asignar DNI (AESA)"}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Dossier Quick Select Dropdown & Export Action Buttons */}
              <div className="flex flex-wrap items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedExamToEdit(null);
                    setIsExamModalOpen(true);
                  }}
                  className="rounded-xl bg-amber-600 hover:bg-amber-700 px-3.5 py-2 text-xs font-bold text-white shadow-xs transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <span>📝</span>
                  <span>+ Examen Presencial</span>
                </button>

                <button
                  type="button"
                  onClick={() =>
                    exportDossierPDF(
                      selectedStudent,
                      studentProgressRecords,
                      lessonMap,
                      quizzes,
                      quizAttempts,
                    )
                  }
                  className="rounded-xl bg-[#1a80ff] px-3.5 py-2 text-xs font-bold text-white shadow-xs hover:bg-[#0066e6] transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <span>📄</span>
                  <span>Exportar PDF Oficial</span>
                </button>

                <button
                  type="button"
                  onClick={() =>
                    exportDossierCSV(
                      selectedStudent,
                      studentProgressRecords,
                      lessonMap,
                      quizzes,
                      quizAttempts,
                    )
                  }
                  className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800 px-3.5 py-2 text-xs font-bold text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <span>📊</span>
                  <span>CSV</span>
                </button>

                <div className="flex items-center gap-2 border-l border-slate-200 dark:border-slate-800 pl-3 ml-1">
                  <label className="text-xs font-bold text-slate-500 dark:text-slate-400 whitespace-nowrap hidden lg:inline">
                    Expediente:
                  </label>
                  <select
                    value={selectedStudent.id || selectedStudent.email}
                    onChange={(e) => setSelectedStudentId(e.target.value)}
                    className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-3 py-2 text-xs font-bold text-slate-900 dark:text-white focus:border-[#1a80ff] focus:outline-hidden cursor-pointer"
                  >
                    {studentList.map((s: any) => (
                      <option key={s.id || s.email} value={s.id || s.email}>
                        👤 {s.full_name || s.email}
                      </option>
                    ))}
                  </select>
                </div>
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
                            q.lesson_slug === item.lesson_id ||
                            q.id === item.lesson_id ||
                            q.id === `quiz-${item.lesson_id}` ||
                            (les?.id && q.lesson_id === les.id) ||
                            (les?.slug && q.lesson_slug === les.slug),
                        );

                        const userAttempts = (quizAttempts || []).filter(
                          (qa: any) => {
                            const userMatch =
                              qa.user_id === item.user_id ||
                              qa.user_id === selectedStudent?.email ||
                              qa.user_id === selectedStudent?.id ||
                              profileMap.get(qa.user_id)?.email ===
                                selectedStudent?.email ||
                              (selectedStudent?.email === "student@blueteam.com" &&
                                (qa.user_id === "student-123" || qa.user_id === "student"));

                            if (!userMatch) return false;

                            if (quiz) {
                              return (
                                qa.quiz_id === quiz.id ||
                                qa.quiz_id === quiz.lesson_id ||
                                qa.quiz_id === quiz.lesson_slug ||
                                qa.lesson_id === item.lesson_id ||
                                qa.lesson_slug === item.lesson_id ||
                                (les?.id && qa.lesson_id === les.id) ||
                                (les?.slug && qa.lesson_slug === les.slug)
                              );
                            }
                            return (
                              qa.quiz_id === item.lesson_id ||
                              qa.lesson_id === item.lesson_id ||
                              qa.lesson_slug === item.lesson_id ||
                              (les?.id && qa.lesson_id === les.id) ||
                              (les?.slug && qa.lesson_slug === les.slug)
                            );
                          },
                        );

                        const passedAttempt = userAttempts.find(
                          (qa: any) => qa.passed,
                        );
                        const latestAttempt =
                          passedAttempt ||
                          (userAttempts.length > 0
                            ? userAttempts[userAttempts.length - 1]
                            : null);

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
                              ) : evaluation.statusBadgeVariant ===
                                "warning" ? (
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

          {/* Section: In-Person Physical Paper Exams (AESA Custody) */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-3">
              <div>
                <h3 className="text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                  <span>📝 Registro de Exámenes Presenciales en Papel</span>
                  <span className="text-xs font-semibold text-slate-400 dark:text-slate-500">
                    ({studentInPersonExams.length} convocatorias)
                  </span>
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Pruebas físicas oficiales custodiadas para garantizar que no copian. Corte mínimo reglamentario: 75%.
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  setSelectedExamToEdit(null);
                  setIsExamModalOpen(true);
                }}
                className="inline-flex items-center gap-2 rounded-xl bg-amber-600 hover:bg-amber-700 px-4 py-2 text-xs font-bold text-white shadow-xs transition-colors cursor-pointer self-start sm:self-auto"
              >
                <span>➕</span>
                <span>Registrar Examen Presencial</span>
              </button>
            </div>

            {studentInPersonExams.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 text-center text-slate-500 dark:text-slate-400 space-y-2">
                <div className="text-2xl">📋</div>
                <p className="font-bold text-slate-700 dark:text-slate-300 text-sm">
                  Sin exámenes presenciales registrados en papel.
                </p>
                <p className="text-xs text-slate-400 max-w-lg mx-auto">
                  Utiliza el botón superior para registrar la fecha, aula, examinador, nota (&ge; 75%) y adjuntar la hoja de respuestas firmada por el alumno para custodia documental ante AESA.
                </p>
              </div>
            ) : (
              <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs text-slate-700 dark:text-slate-300">
                    <thead className="bg-slate-50 dark:bg-slate-800/60 text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 border-b border-slate-200 dark:border-slate-800">
                      <tr>
                        <th className="px-6 py-4">Fecha & Aula</th>
                        <th className="px-6 py-4">Programa / Curso</th>
                        <th className="px-6 py-4">Examinador / Custodio</th>
                        <th className="px-6 py-4">Nota Obtenida</th>
                        <th className="px-6 py-4">Dictamen AESA</th>
                        <th className="px-6 py-4">Hoja Firmada (Custodia)</th>
                        <th className="px-6 py-4 text-right">Acciones</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                      {studentInPersonExams.map((exam: any) => {
                        const course = courses.find((c: any) => c.id === exam.course_id);
                        const isPassed = exam.score_percentage >= 75;

                        return (
                          <tr
                            key={exam.id}
                            className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors"
                          >
                            <td className="px-6 py-4">
                              <div className="font-bold text-slate-900 dark:text-white">
                                {new Date(exam.exam_date).toLocaleDateString("es-ES", {
                                  day: "2-digit",
                                  month: "short",
                                  year: "numeric",
                                })}
                              </div>
                              <div className="text-[11px] text-slate-500 dark:text-slate-400">
                                📍 {exam.classroom || "Aula Principal"}
                              </div>
                            </td>

                            <td className="px-6 py-4">
                              <div className="font-bold text-slate-900 dark:text-white">
                                {course?.title || exam.course_id}
                              </div>
                            </td>

                            <td className="px-6 py-4">
                              <div className="font-semibold text-slate-800 dark:text-slate-200">
                                👨‍✈️ {exam.examiner_name}
                              </div>
                              {exam.notes && (
                                <div className="text-[10px] text-slate-400 italic max-w-xs truncate" title={exam.notes}>
                                  &ldquo;{exam.notes}&rdquo;
                                </div>
                              )}
                            </td>

                            <td className="px-6 py-4">
                              <span className="text-sm font-extrabold text-slate-900 dark:text-white">
                                {exam.score_percentage}%
                              </span>
                            </td>

                            <td className="px-6 py-4">
                              {isPassed ? (
                                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 text-xs font-bold text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                                  ✓ APTO (&ge; 75%)
                                </span>
                              ) : (
                                <span className="inline-flex items-center gap-1 rounded-full bg-rose-50 dark:bg-rose-950/60 px-2.5 py-1 text-xs font-bold text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800">
                                  ⚠️ NO APTO (&lt; 75%)
                                </span>
                              )}
                            </td>

                            <td className="px-6 py-4">
                              {exam.document_url ? (
                                <a
                                  href={exam.document_url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-[#1a80ff] px-2.5 py-1 text-xs font-bold hover:underline"
                                >
                                  <span>📎</span>
                                  <span>Ver Documento</span>
                                </a>
                              ) : (
                                <span className="text-slate-400 text-xs italic">
                                  Sin adjunto
                                </span>
                              )}
                            </td>

                            <td className="px-6 py-4 text-right">
                              <div className="flex items-center justify-end gap-2">
                                <button
                                  type="button"
                                  onClick={() => {
                                    setSelectedExamToEdit(exam);
                                    setIsExamModalOpen(true);
                                  }}
                                  className="rounded-lg border border-slate-200 dark:border-slate-700 px-2.5 py-1 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                                >
                                  Editar
                                </button>
                                <button
                                  type="button"
                                  onClick={() => handleDeleteExam(exam.id)}
                                  disabled={deletingExamId === exam.id}
                                  className="rounded-lg border border-rose-200 dark:border-rose-800 px-2.5 py-1 text-xs font-semibold text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors disabled:opacity-50"
                                >
                                  {deletingExamId === exam.id ? "..." : "Eliminar"}
                                </button>
                              </div>
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

          {/* Section: Official Certificate and Diplomas (AESA / ATO) */}
          <div className="space-y-4">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
              <h3 className="text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                <span>🎓 Diplomas y Certificados Oficiales de Aprovechamiento</span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Emisión oficial Blue Team Flight School (ATO EASA). Requiere 100% de lecciones con tiempo mínimo cumplido y examen oficial aprobado (&ge; 75%).
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {studentCourseCertificates.map(({ course, eligibility }: any) => {
                const isEligible = eligibility.isEligible;
                const stats = eligibility.stats;
                const exam = eligibility.qualifyingExam;

                return (
                  <div
                    key={course.id}
                    className={`rounded-3xl border p-6 space-y-4 transition-all ${
                      isEligible
                        ? "border-emerald-300 dark:border-emerald-800/80 bg-emerald-50/20 dark:bg-emerald-950/20 shadow-sm"
                        : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 dark:bg-blue-950/60 px-2.5 py-0.5 text-[10px] font-bold text-[#1a80ff]">
                          {course.slug || "ATO-COURSE"}
                        </span>
                        <h4 className="text-base font-extrabold text-slate-900 dark:text-white mt-1">
                          {course.title}
                        </h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          Horas Lectivas Oficiales: <strong>{course.theory_hours || 25} h</strong>
                        </p>
                      </div>

                      {isEligible ? (
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 dark:bg-emerald-900/60 px-3 py-1 text-xs font-extrabold text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700">
                          ✓ APTO DIPLOMA
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 text-xs font-bold text-slate-600 dark:text-slate-400">
                          En Progreso
                        </span>
                      )}
                    </div>

                    {/* Requirements checklist */}
                    <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/60 p-3 space-y-2 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                          {stats.isAllLessonsRead ? "✅" : "⏳"} 100% Lecciones leídas y tiempo mínimo:
                        </span>
                        <span className="font-bold font-mono text-slate-900 dark:text-white">
                          {stats.readLessonsCount}/{stats.totalLessons}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                          {eligibility.examStatus === "not_applicable"
                            ? "⚪ Examen Oficial:"
                            : `${exam?.passed ? "✅" : "⏳"} Examen Oficial Aprobado (≥ 75%):`}
                        </span>
                        <span className="font-bold text-slate-900 dark:text-white">
                          {eligibility.examStatus === "not_applicable" ? (
                            <span className="text-slate-500 dark:text-slate-400 font-semibold">No aplica</span>
                          ) : exam ? (
                            <span className={exam.passed ? "text-emerald-600 dark:text-emerald-400" : "text-rose-500"}>
                              {exam.score}% ({exam.type === "in_person" ? "Presencial" : "Online"})
                            </span>
                          ) : (
                            <span className="text-slate-400 font-normal italic">Pendiente</span>
                          )}
                        </span>
                      </div>
                    </div>

                    {/* Certificate Action */}
                    <div className="pt-1">
                      {isEligible ? (
                        <button
                          type="button"
                          onClick={() => {
                            exportOfficialCertificatePDF({
                              studentName: selectedStudent.full_name || selectedStudent.email,
                              studentDni: selectedStudent.dni_nie || "",
                              studentEmail: selectedStudent.email,
                              courseTitle: course.title,
                              courseCode: course.slug || course.id,
                              accreditedHours: course.theory_hours || 25,
                              examType: (exam?.type as any) || "none",
                              examTitle: exam
                                ? (exam.type === "in_person" ? "Examen Presencial en Papel" : "Evaluación Teórica")
                                : "Formación Teórica Acreditada por Lectura",
                              examDate: exam?.examDate || new Date().toISOString(),
                              examScore: exam?.score ?? 100,
                              examinerName: exam?.examinerName || "Instructor Examinador",
                              classroom: exam?.classroom || "Aula Principal",
                              issueDate: new Date().toISOString(),
                            });
                          }}
                          className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0a224a] to-[#1a80ff] hover:opacity-95 text-white py-2.5 text-xs font-extrabold shadow-md transition-all cursor-pointer"
                        >
                          <span>🎓</span>
                          <span>Emitir / Descargar Diploma Oficial (PDF)</span>
                        </button>
                      ) : (
                        <div className="text-[11px] text-slate-400 text-center italic py-1">
                          {eligibility.reasons.join(" • ")}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
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
                    profileMap.get(pr.user_id)?.email === targetEmail ||
                    (targetEmail === "student@blueteam.com" &&
                      (pr.user_id === "student-123" || pr.user_id === "student")),
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
                            <p className="text-[10px] text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                              DNI: <span className="font-bold text-slate-700 dark:text-slate-300">{st.dni_nie || "—"}</span>
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

                    {/* Action Buttons: Direct PDF, CSV & Detail View */}
                    <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() =>
                            exportDossierPDF(
                              st,
                              stRecords,
                              lessonMap,
                              quizzes,
                              quizAttempts,
                            )
                          }
                          className="flex items-center justify-center gap-1 rounded-xl bg-[#1a80ff] text-white py-2 text-xs font-bold hover:bg-[#0066e6] transition-colors cursor-pointer shadow-xs"
                          title="Descargar Expediente Oficial en PDF"
                        >
                          <span>📄</span>
                          <span>Exportar PDF</span>
                        </button>

                        <button
                          type="button"
                          onClick={() =>
                            exportDossierCSV(
                              st,
                              stRecords,
                              lessonMap,
                              quizzes,
                              quizAttempts,
                            )
                          }
                          className="flex items-center justify-center gap-1 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 py-2 text-xs font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
                          title="Descargar Excel / CSV"
                        >
                          <span>📊</span>
                          <span>CSV</span>
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          setSelectedStudentId(st.id || st.email || null)
                        }
                        className="w-full flex items-center justify-center gap-1.5 rounded-xl bg-slate-900 dark:bg-slate-800 text-white py-2 text-xs font-bold group-hover:bg-[#1a80ff] transition-colors cursor-pointer"
                      >
                        <span>Ver Expediente Completo</span>
                        <span>&rarr;</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* In-Person Paper Exam Modal */}
      {selectedStudent && (
        <InPersonExamModal
          isOpen={isExamModalOpen}
          onClose={() => {
            setIsExamModalOpen(false);
            setSelectedExamToEdit(null);
          }}
          student={{
            id: selectedStudent.id,
            full_name: selectedStudent.full_name,
            email: selectedStudent.email,
            dni_nie: selectedStudent.dni_nie,
          }}
          courses={courses}
          existingExam={selectedExamToEdit}
          onSuccess={(savedRecord) => {
            setInPersonExamsList((prev) => {
              const existingIdx = prev.findIndex((e) => e.id === savedRecord.id);
              if (existingIdx >= 0) {
                const next = [...prev];
                next[existingIdx] = savedRecord;
                return next;
              }
              return [savedRecord, ...prev];
            });
          }}
        />
      )}
    </div>
  );
}
