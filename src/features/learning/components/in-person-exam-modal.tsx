"use client";

import { useState, useTransition } from "react";
import { recordInPersonExamAction } from "@/app/actions/in-person-exam.actions";

type InPersonExamModalProps = {
  isOpen: boolean;
  onClose: () => void;
  student: {
    id: string;
    full_name?: string;
    email: string;
    dni_nie?: string;
  };
  courses: { id: string; title: string; slug?: string }[];
  defaultCourseId?: string;
  existingExam?: any;
  currentExaminerName?: string;
  onSuccess?: (savedRecord: any) => void;
};

export function InPersonExamModal({
  isOpen,
  onClose,
  student,
  courses,
  defaultCourseId,
  existingExam,
  currentExaminerName = "",
  onSuccess,
}: InPersonExamModalProps) {
  const [courseId, setCourseId] = useState(
    existingExam?.course_id || defaultCourseId || courses[0]?.id || "",
  );
  const [examDate, setExamDate] = useState(
    existingExam?.exam_date || new Date().toISOString().slice(0, 10),
  );
  const [classroom, setClassroom] = useState(
    existingExam?.classroom || "Aula Teórica Principal",
  );
  const [examinerName, setExaminerName] = useState(
    existingExam?.examiner_name || currentExaminerName || "Instructor Examinador",
  );
  const [scoreInput, setScoreInput] = useState<string>(
    existingExam?.score_percentage !== undefined
      ? String(existingExam.score_percentage)
      : "",
  );
  const [notes, setNotes] = useState(existingExam?.notes || "");
  const [documentUrl, setDocumentUrl] = useState(existingExam?.document_url || "");

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  if (!isOpen) return null;

  const numericScore = Number(scoreInput);
  const isValidScore =
    scoreInput.trim() !== "" &&
    !isNaN(numericScore) &&
    numericScore >= 0 &&
    numericScore <= 100;
  const isPassed = isValidScore && numericScore >= 75;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMessage(null);

    if (!isValidScore) {
      setErrorMessage("Introduce una calificación válida entre 0 y 100.");
      return;
    }

    if (!examinerName.trim()) {
      setErrorMessage("El nombre del examinador es obligatorio.");
      return;
    }

    startTransition(async () => {
      const response = await recordInPersonExamAction({
        id: existingExam?.id,
        userId: student.id,
        courseId,
        examDate,
        classroom,
        scorePercentage: numericScore,
        examinerName,
        notes,
        documentUrl,
      });

      if ("error" in response && response.error) {
        setErrorMessage(response.error);
        return;
      }

      if (response.success && response.record) {
        onSuccess?.(response.record);
        onClose();
      }
    });
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="relative w-full max-w-lg rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150 my-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0a224a] to-[#1a80ff] p-6 text-white flex items-center justify-between">
          <div className="space-y-1">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-blue-100">
              Prueba Oficial AESA
            </span>
            <h3 className="text-lg font-extrabold">
              {existingExam ? "Editar Examen Presencial" : "Registrar Examen Presencial en Papel"}
            </h3>
            <p className="text-xs text-blue-100/90">
              Alumno: <strong>{student.full_name || student.email}</strong>
              {student.dni_nie && ` (${student.dni_nie})`}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-full bg-white/10 hover:bg-white/20 p-2 text-white transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {errorMessage && (
            <div className="rounded-xl bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800 p-3 text-xs font-semibold text-rose-700 dark:text-rose-300">
              {errorMessage}
            </div>
          )}

          {/* Course selection */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              Programa / Curso *
            </label>
            <select
              value={courseId}
              onChange={(e) => setCourseId(e.target.value)}
              className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 px-3 py-2 text-xs font-semibold text-slate-900 dark:text-white focus:border-[#1a80ff] focus:outline-hidden"
              required
            >
              {courses.map((c) => (
                <option key={c.id} value={c.id}>
                  ✈️ {c.title}
                </option>
              ))}
            </select>
          </div>

          {/* Date & Classroom */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Fecha de Convocatoria *
              </label>
              <input
                type="date"
                value={examDate}
                onChange={(e) => setExamDate(e.target.value)}
                className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 px-3 py-2 text-xs font-semibold text-slate-900 dark:text-white focus:border-[#1a80ff] focus:outline-hidden"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Aula / Ubicación Física *
              </label>
              <input
                type="text"
                value={classroom}
                onChange={(e) => setClassroom(e.target.value)}
                placeholder="Ej. Aula 2 / Base Cuatro Vientos"
                className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 px-3 py-2 text-xs font-semibold text-slate-900 dark:text-white focus:border-[#1a80ff] focus:outline-hidden"
                required
              />
            </div>
          </div>

          {/* Examiner Name */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              Instructor / Examinador que Custodió la Prueba *
            </label>
            <input
              type="text"
              value={examinerName}
              onChange={(e) => setExaminerName(e.target.value)}
              placeholder="Nombre y apellidos del examinador"
              className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 px-3 py-2 text-xs font-semibold text-slate-900 dark:text-white focus:border-[#1a80ff] focus:outline-hidden"
              required
            />
          </div>

          {/* Score & Live Pass Badge */}
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 p-4 space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-900 dark:text-white">
                Calificación Numérica Obtenida (0 a 100%) *
              </label>
              <span className="text-[10px] font-extrabold text-slate-400">
                Mínimo AESA: 75%
              </span>
            </div>

            <div className="flex items-center gap-3">
              <input
                type="number"
                min="0"
                max="100"
                step="1"
                value={scoreInput}
                onChange={(e) => setScoreInput(e.target.value)}
                placeholder="Ej. 85"
                className="w-28 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2 text-lg font-extrabold text-slate-900 dark:text-white text-center focus:border-[#1a80ff] focus:outline-hidden"
                required
              />

              <div className="flex-1">
                {isValidScore ? (
                  isPassed ? (
                    <div className="flex items-center gap-2 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 px-3 py-2 text-xs font-extrabold text-emerald-800 dark:text-emerald-300">
                      <span>✓</span>
                      <span>APTO (Supera el corte del 75%)</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 rounded-xl bg-rose-100 dark:bg-rose-950/60 border border-rose-300 dark:border-rose-800 px-3 py-2 text-xs font-extrabold text-rose-800 dark:text-rose-300">
                      <span>⚠️</span>
                      <span>NO APTO (Inferior al 75% reglamentario)</span>
                    </div>
                  )
                ) : (
                  <span className="text-xs text-slate-400">
                    Introduce la nota para dictamen automático
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Scanned document / Sheet attachment */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              Enlace a Hoja de Respuestas Escaneada / Acta Firmada (Opcional)
            </label>
            <input
              type="url"
              value={documentUrl}
              onChange={(e) => setDocumentUrl(e.target.value)}
              placeholder="https://... (enlace a PDF o imagen en la nube para auditoría AESA)"
              className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 px-3 py-2 text-xs font-mono text-slate-900 dark:text-white focus:border-[#1a80ff] focus:outline-hidden"
            />
            <p className="text-[10px] text-slate-400 mt-1">
              Permite a los inspectores de AESA consultar la hoja física firmada directamente desde el expediente.
            </p>
          </div>

          {/* Observations / Notes */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              Observaciones del Examinador (Opcional)
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Convocatoria ordinaria, tiempo empleado, incidencias durante la prueba..."
              className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 px-3 py-2 text-xs text-slate-900 dark:text-white focus:border-[#1a80ff] focus:outline-hidden"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
            <button
              type="button"
              onClick={onClose}
              disabled={isPending}
              className="rounded-xl border border-slate-200 dark:border-slate-700 px-4 py-2 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              Cancelar
            </button>

            <button
              type="submit"
              disabled={isPending || !isValidScore}
              className="rounded-xl bg-[#1a80ff] hover:bg-[#0066e6] px-5 py-2 text-xs font-bold text-white shadow-xs transition-all disabled:opacity-50 cursor-pointer"
            >
              {isPending ? "Guardando en Expediente..." : existingExam ? "Actualizar Examen" : "Guardar Examen Presencial"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
