"use client";

import { exportOfficialCertificatePDF } from "../domain/certificate-export";
import type { CourseCertificateEligibility } from "../domain/course-completion";

type CourseCertificateCardProps = {
  course: {
    id: string;
    title: string;
    slug?: string;
    theory_hours?: number;
  };
  student: {
    id: string;
    full_name?: string;
    email: string;
    dni_nie?: string;
  };
  eligibility: CourseCertificateEligibility;
};

export function CourseCertificateCard({
  course,
  student,
  eligibility,
}: CourseCertificateCardProps) {
  const { isEligible, stats, qualifyingExam } = eligibility;

  function handleDownloadCertificate() {
    if (!isEligible || !qualifyingExam) return;

    exportOfficialCertificatePDF({
      studentName: student.full_name || student.email,
      studentDni: student.dni_nie || "",
      studentEmail: student.email,
      courseTitle: course.title,
      courseCode: course.slug || course.id,
      accreditedHours: course.theory_hours || 25,
      examType: (qualifyingExam?.type as any) || "none",
      examTitle:
        qualifyingExam?.type === "in_person"
          ? "Examen Presencial en Papel"
          : qualifyingExam?.type === "online"
            ? "Evaluación Teórica"
            : "Formación Teórica Acreditada por Lectura",
      examDate: qualifyingExam?.examDate || new Date().toISOString(),
      examScore: qualifyingExam?.score ?? 100,
      examinerName: qualifyingExam?.examinerName || "Instructor Examinador",
      classroom: qualifyingExam?.classroom || "Aula Teórica Principal",
      issueDate: new Date().toISOString(),
    });
  }

  if (isEligible) {
    return (
      <div className="relative overflow-hidden rounded-3xl border-2 border-[#d4af37] bg-gradient-to-br from-[#0a224a] via-[#0d2d60] to-[#0a224a] p-6 sm:p-8 text-white shadow-xl">
        {/* Background watermark badge */}
        <div className="absolute -right-8 -bottom-8 select-none opacity-10 text-9xl pointer-events-none">
          ✈️
        </div>

        <div className="relative z-10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#d4af37]/20 border border-[#d4af37] text-2xl">
                🎓
              </div>
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#d4af37]/30 px-3 py-0.5 text-[11px] font-extrabold text-[#d4af37] tracking-wider uppercase">
                  Aprobación Oficial ATO / AESA
                </span>
                <h3 className="text-xl sm:text-2xl font-black mt-1">
                  ¡Enhorabuena! Has Superado este Programa
                </h3>
              </div>
            </div>

            <button
              type="button"
              onClick={handleDownloadCertificate}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#f3e5ab] text-[#0a224a] px-6 py-3.5 text-sm font-black shadow-lg hover:brightness-105 transition-all cursor-pointer shrink-0"
            >
              <span>📄</span>
              <span>Descargar Diploma Oficial (PDF)</span>
            </button>
          </div>

          <p className="text-xs sm:text-sm text-slate-200/90 leading-relaxed max-w-3xl">
            {eligibility.examStatus === "not_applicable"
              ? "Has completado satisfactoriamente el 100% de las lecciones con sus tiempos mínimos de lectura reglamentarios acreditados. Este curso no requiere examen oficial para la obtención del diploma."
              : "Has completado satisfactoriamente el 100% de las lecciones con sus tiempos mínimos de lectura acreditados y has aprobado la prueba oficial con corte reglamentario (≥ 75%)."}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 border-t border-white/10 text-xs">
            <div className="rounded-xl bg-white/5 p-3">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">
                Horas Teóricas Acreditadas
              </span>
              <strong className="text-sm font-extrabold text-white">
                {course.theory_hours || 25} horas lectivas
              </strong>
            </div>

            <div className="rounded-xl bg-white/5 p-3">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">
                {eligibility.examStatus === "not_applicable"
                  ? "Examen Teórico"
                  : "Examen Acreditado"}
              </span>
              <strong className="text-sm font-extrabold text-emerald-300">
                {eligibility.examStatus === "not_applicable"
                  ? "No aplica"
                  : `${qualifyingExam?.score}% · ${qualifyingExam?.type === "in_person" ? "Presencial en Papel" : "Cuestionario"}`}
              </strong>
            </div>

            <div className="rounded-xl bg-white/5 p-3">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">
                Certificación Documental
              </span>
              <strong className="text-sm font-extrabold text-[#d4af37]">
                Válido para AESA / EASA
              </strong>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Not yet eligible: Show requirements progression card
  return (
    <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="text-xl">🎓</span>
          <div>
            <h4 className="text-sm font-extrabold text-slate-900 dark:text-white">
              Requisitos para Obtención del Diploma Oficial ATO
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Criterios de acreditación de Blue Team Flight School conforme a normativa AESA.
            </p>
          </div>
        </div>

        <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 dark:bg-slate-800 px-2.5 py-1 text-[11px] font-bold text-slate-600 dark:text-slate-400">
          En Progreso
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
        <div className={`rounded-2xl border p-4 space-y-1.5 ${
          stats.isAllLessonsRead
            ? "border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/40 dark:bg-emerald-950/20"
            : "border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40"
        }`}>
          <div className="flex items-center justify-between">
            <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <span>{stats.isAllLessonsRead ? "✅" : "⏳"}</span>
              <span>100% Lecciones Leídas</span>
            </span>
            <span className="font-mono font-bold text-slate-700 dark:text-slate-300">
              {stats.readLessonsCount} / {stats.totalLessons}
            </span>
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">
            Debes cumplir el tiempo mínimo de lectura obligatorio en todas las lecciones.
          </p>
        </div>

        {eligibility.examStatus === "not_applicable" ? (
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/20 p-4 space-y-1.5 opacity-80">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                <span>⚪</span>
                <span>Examen Teórico</span>
              </span>
              <span className="rounded-full bg-slate-200 dark:bg-slate-700 px-2.5 py-0.5 text-[11px] font-bold text-slate-600 dark:text-slate-300">
                No aplica
              </span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Esta formación no requiere examen teórico; la acreditación se obtiene al completar el 100% de la lectura reglamentaria.
            </p>
          </div>
        ) : (
          <div className={`rounded-2xl border p-4 space-y-1.5 ${
            qualifyingExam?.passed
              ? "border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/40 dark:bg-emerald-950/20"
              : "border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40"
          }`}>
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <span>{qualifyingExam?.passed ? "✅" : "⏳"}</span>
                <span>Examen Aprobado (&ge; 75%)</span>
              </span>
              <span className="font-bold">
                {qualifyingExam ? (
                  <span className={qualifyingExam.passed ? "text-emerald-600 dark:text-emerald-400" : "text-rose-500"}>
                    {qualifyingExam.score}%
                  </span>
                ) : (
                  <span className="text-slate-400">Pendiente</span>
                )}
              </span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              {qualifyingExam?.type === "in_person"
                ? "Examen físico en papel custodiado por instructor."
                : "Examen presencial en papel o cuestionario oficial del programa."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
