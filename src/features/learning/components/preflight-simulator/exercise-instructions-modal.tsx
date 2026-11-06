"use client";

import React, { useEffect } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  isPerformance?: boolean;
};

export function ExerciseInstructionsModal({
  isOpen,
  onClose,
  title = "Guía de Procedimiento: Ejercicios Prácticos",
  isPerformance = false,
}: Props) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-3 sm:p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-7 max-w-lg w-full shadow-2xl space-y-4 text-left relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close cross */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-xl font-bold p-1 cursor-pointer"
          title="Cerrar guía"
        >
          ✕
        </button>

        {/* Header */}
        <div className="flex items-start gap-3 border-b border-slate-100 dark:border-slate-800 pb-3 pr-6">
          <div className="w-11 h-11 rounded-2xl bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 flex items-center justify-center text-2xl shrink-0 shadow-inner">
            🧭
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white leading-tight">
              {title}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Cómo resolver y validar las misiones de despacho operativo
            </p>
          </div>
        </div>

        {/* Steps List */}
        <div className="space-y-2.5 text-xs sm:text-[13px] text-slate-700 dark:text-slate-300 leading-snug">
          {/* Step 1 */}
          <div className="p-2.5 rounded-xl bg-emerald-50/80 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 flex items-start gap-2.5">
            <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
              1
            </span>
            <div>
              <strong className="text-emerald-900 dark:text-emerald-200 block font-bold mb-0.5">
                {isPerformance ? "GCXO — Ejemplo Guiado Resuelto" : "Misión 1 (M1) — Tu Ejemplo Guiado Resuelto"}
              </strong>
              <span>
                {isPerformance
                  ? "El primer aeropuerto (GCXO) se muestra resuelto con todos los cálculos y puntos para que sirva de modelo de referencia."
                  : "El botón verde M1 muestra un caso completamente resuelto. Úsalo como modelo de referencia para ver cómo se calculan las tablas y cómo se sitúan los puntos en la gráfica."}
              </span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="p-2.5 rounded-xl bg-sky-50/80 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800/60 flex items-start gap-2.5">
            <span className="w-6 h-6 rounded-full bg-[#1a80ff] text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
              2
            </span>
            <div>
              <strong className="text-sky-900 dark:text-sky-200 block font-bold mb-0.5">
                {isPerformance ? "Aeropuertos de Examen — Tus Dos Ejercicios" : "Botones M2 y M3 — Tus Dos Ejercicios Prácticos"}
              </strong>
              <span>
                {isPerformance
                  ? "Para superar la prueba debes pulsar obligatoriamente en los dos aeropuertos siguientes (GCTS y GCLA) y resolverlos."
                  : "Para completar la evaluación debes pulsar obligatoriamente en los botones M2 y M3. Cada uno carga un escenario de vuelo distinto."}
              </span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start gap-2.5">
            <span className="w-6 h-6 rounded-full bg-slate-700 dark:bg-slate-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
              3
            </span>
            <div>
              <strong className="text-slate-900 dark:text-white block font-bold mb-0.5">
                Rellena todos los cuadros de cálculo
              </strong>
              <span>
                Introduce los valores numéricos correspondientes en todas las casillas de la tabla (masas, momentos, consumos o distancias requeridas).
              </span>
            </div>
          </div>

          {/* Step 4 */}
          <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start gap-2.5">
            <span className="w-6 h-6 rounded-full bg-slate-700 dark:bg-slate-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
              4
            </span>
            <div>
              <strong className="text-slate-900 dark:text-white block font-bold mb-0.5">
                Coloca los puntos en la gráfica interactiva
              </strong>
              <span>
                Haz clic directamente sobre la gráfica o envolvente para situar los puntos en las coordenadas calculadas (ej. punto TOW/LW en la envolvente o distancias de despegue/aterrizaje).
              </span>
            </div>
          </div>

          {/* Step 5 */}
          <div className="p-2.5 rounded-xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 flex items-start gap-2.5">
            <span className="w-6 h-6 rounded-full bg-amber-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
              5
            </span>
            <div>
              <strong className="text-amber-900 dark:text-amber-200 block font-bold mb-0.5">
                Comprueba y valida ambas misiones
              </strong>
              <span>
                Pulsa el botón <strong>&quot;Comprobar...&quot;</strong>. Es obligatorio completar y validar correctamente ambos ejercicios para desbloquear el avance a la siguiente diapositiva.
              </span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-1">
          <button
            type="button"
            onClick={onClose}
            className="w-full rounded-2xl bg-[#1a80ff] hover:bg-[#0066e6] text-white py-3 text-xs sm:text-sm font-bold transition shadow-md shadow-blue-500/20 cursor-pointer flex items-center justify-center gap-2"
          >
            <span>¡Entendido, comenzar ejercicio!</span>
            <span>➔</span>
          </button>
        </div>
      </div>
    </div>
  );
}

