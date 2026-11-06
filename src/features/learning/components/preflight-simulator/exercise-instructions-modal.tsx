"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !mounted) return null;

  const modalContent = (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-3 sm:p-4 animate-in fade-in duration-200 text-slate-800 dark:text-slate-200"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-6 max-w-3xl lg:max-w-4xl w-full shadow-2xl space-y-3.5 text-left relative max-h-[95vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close cross */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-xl font-bold p-1 cursor-pointer transition-colors"
          title="Cerrar guía"
        >
          ✕
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-2.5 pr-8">
          <div className="w-10 h-10 rounded-2xl bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 flex items-center justify-center text-xl shrink-0 shadow-inner">
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

        {/* Steps Grid: 2 columns on desktop so everything fits without scrolling */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs sm:text-[13px] text-slate-700 dark:text-slate-300 leading-snug">
          {/* Step 1 */}
          <div className="p-2.5 rounded-xl bg-emerald-50/90 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 flex items-start gap-2.5">
            <span
              className="exercise-step-badge w-7 h-7 rounded-full font-black text-xs sm:text-sm flex items-center justify-center shrink-0 mt-0.5 shadow-sm border border-slate-700"
              style={{ backgroundColor: "#0f172a", color: "#ffffff" }}
            >
              1
            </span>
            <div>
              <strong className="text-emerald-950 dark:text-emerald-300 block font-bold mb-0.5">
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
          <div className="p-2.5 rounded-xl bg-sky-50/90 dark:bg-sky-950/40 border border-sky-300 dark:border-sky-800 flex items-start gap-2.5">
            <span
              className="exercise-step-badge w-7 h-7 rounded-full font-black text-xs sm:text-sm flex items-center justify-center shrink-0 mt-0.5 shadow-sm border border-slate-700"
              style={{ backgroundColor: "#0f172a", color: "#ffffff" }}
            >
              2
            </span>
            <div>
              <strong className="text-blue-950 dark:text-sky-300 block font-bold mb-0.5">
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
          <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-300 dark:border-slate-700 flex items-start gap-2.5">
            <span
              className="exercise-step-badge w-7 h-7 rounded-full font-black text-xs sm:text-sm flex items-center justify-center shrink-0 mt-0.5 shadow-sm border border-slate-700"
              style={{ backgroundColor: "#0f172a", color: "#ffffff" }}
            >
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
          <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-300 dark:border-slate-700 flex items-start gap-2.5">
            <span
              className="exercise-step-badge w-7 h-7 rounded-full font-black text-xs sm:text-sm flex items-center justify-center shrink-0 mt-0.5 shadow-sm border border-slate-700"
              style={{ backgroundColor: "#0f172a", color: "#ffffff" }}
            >
              4
            </span>
            <div>
              <strong className="text-slate-900 dark:text-white block font-bold mb-0.5">
                Coloca los puntos en la gráfica interactiva
              </strong>
              <span>
                Haz clic directamente sobre la gráfica o envolvente para situar los puntos en las coordenadas calculadas (ej. punto TOW/LW o distancias).
              </span>
            </div>
          </div>

          {/* Step 5 (Full Width across 2 columns) */}
          <div className="md:col-span-2 p-2.5 rounded-xl bg-amber-50/90 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 flex items-start gap-2.5">
            <span
              className="exercise-step-badge w-7 h-7 rounded-full font-black text-xs sm:text-sm flex items-center justify-center shrink-0 mt-0.5 shadow-sm border border-slate-700"
              style={{ backgroundColor: "#0f172a", color: "#ffffff" }}
            >
              5
            </span>
            <div>
              <strong className="text-amber-950 dark:text-amber-300 block font-bold mb-0.5">
                Comprueba y valida ambas misiones
              </strong>
              <span>
                Pulsa el botón <strong>&quot;Comprobar...&quot;</strong>. Es obligatorio completar y validar correctamente ambos ejercicios para desbloquear el avance a la siguiente diapositiva.
              </span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-0.5">
          <button
            type="button"
            onClick={onClose}
            className="w-full rounded-2xl bg-[#1a80ff] hover:bg-[#0066e6] text-white py-2.5 text-xs sm:text-sm font-bold transition shadow-md shadow-blue-500/20 cursor-pointer flex items-center justify-center gap-2"
          >
            <span>¡Entendido, comenzar ejercicio!</span>
            <span>➔</span>
          </button>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
