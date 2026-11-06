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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-3 sm:p-5 animate-in fade-in duration-200 text-slate-800 dark:text-slate-200"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-7 max-w-4xl lg:max-w-5xl w-full shadow-2xl space-y-4 text-left relative max-h-[95vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close cross */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-2xl font-bold p-1 cursor-pointer transition-colors"
          title="Cerrar guía"
        >
          ✕
        </button>

        {/* Header con el anuncio principal en negrita y grande */}
        <div className="border-b border-slate-100 dark:border-slate-800 pb-3.5 pr-8 space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-blue-100 dark:bg-blue-950/80 text-[#0B2E59] dark:text-sky-300 border border-blue-200 dark:border-blue-800">
              <span>🚀</span>
              <span>ZONA DE EJERCICIOS PRÁCTICOS</span>
            </span>
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
              · {title}
            </span>
          </div>

          <h2 className="text-[23px] sm:text-[26px] font-black text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight m-0">
            ¡Vamos a entrar en una zona de ejercicios! Estas son las instrucciones:
          </h2>

          <p className="text-[18px] text-slate-600 dark:text-slate-300 font-medium m-0 leading-normal">
            Sigue estos pasos para resolver las misiones de despacho operativo y validar tu avance:
          </p>
        </div>

        {/* Steps Grid: 2 columns with 18px typography and colorful balloons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[18px] text-slate-700 dark:text-slate-300 leading-snug">
          {/* Step 1: Verde Esmeralda */}
          <div className="p-3 rounded-xl bg-emerald-50/90 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 flex items-start gap-3">
            <span
              className="exercise-badge-1 w-8 h-8 rounded-full font-black text-[18px] flex items-center justify-center shrink-0 mt-0.5 shadow-sm border border-emerald-900/30"
              style={{ backgroundColor: "#047857", color: "#ffffff" }}
            >
              1
            </span>
            <div className="text-[18px]">
              <strong className="text-emerald-950 dark:text-emerald-300 block font-bold text-[18px] mb-1">
                {isPerformance ? "GCXO — Ejemplo Guiado Resuelto" : "Misión 1 (M1) — Tu Ejemplo Guiado Resuelto"}
              </strong>
              <span className="text-[18px] leading-snug">
                {isPerformance
                  ? "El primer aeropuerto (GCXO) se muestra resuelto con todos los cálculos y puntos para que sirva de modelo de referencia."
                  : "El botón verde M1 muestra un caso completamente resuelto. Úsalo como modelo de referencia para ver cómo se calculan las tablas y cómo se sitúan los puntos en la gráfica."}
              </span>
            </div>
          </div>

          {/* Step 2: Azul Océano */}
          <div className="p-3 rounded-xl bg-sky-50/90 dark:bg-sky-950/40 border border-sky-300 dark:border-sky-800 flex items-start gap-3">
            <span
              className="exercise-badge-2 w-8 h-8 rounded-full font-black text-[18px] flex items-center justify-center shrink-0 mt-0.5 shadow-sm border border-sky-900/30"
              style={{ backgroundColor: "#0284c7", color: "#ffffff" }}
            >
              2
            </span>
            <div className="text-[18px]">
              <strong className="text-blue-950 dark:text-sky-300 block font-bold text-[18px] mb-1">
                {isPerformance ? "Aeropuertos de Examen — Tus Dos Ejercicios" : "Botones M2 y M3 — Tus Dos Ejercicios Prácticos"}
              </strong>
              <span className="text-[18px] leading-snug">
                {isPerformance
                  ? "Para superar la prueba debes pulsar obligatoriamente en los dos aeropuertos siguientes (GCTS y GCLA) y resolverlos."
                  : "Para completar la evaluación debes pulsar obligatoriamente en los botones M2 y M3. Cada uno carga un escenario de vuelo distinto."}
              </span>
            </div>
          </div>

          {/* Step 3: Púrpura / Índigo */}
          <div className="p-3 rounded-xl bg-purple-50/90 dark:bg-purple-950/40 border border-purple-300 dark:border-purple-800 flex items-start gap-3">
            <span
              className="exercise-badge-3 w-8 h-8 rounded-full font-black text-[18px] flex items-center justify-center shrink-0 mt-0.5 shadow-sm border border-purple-900/30"
              style={{ backgroundColor: "#7c3aed", color: "#ffffff" }}
            >
              3
            </span>
            <div className="text-[18px]">
              <strong className="text-purple-950 dark:text-purple-300 block font-bold text-[18px] mb-1">
                Rellena todos los cuadros de cálculo
              </strong>
              <span className="text-[18px] leading-snug">
                Introduce los valores numéricos correspondientes en todas las casillas de la tabla (masas, momentos, consumos o distancias requeridas).
              </span>
            </div>
          </div>

          {/* Step 4: Teal / Turquesa */}
          <div className="p-3 rounded-xl bg-teal-50/90 dark:bg-teal-950/40 border border-teal-300 dark:border-teal-800 flex items-start gap-3">
            <span
              className="exercise-badge-4 w-8 h-8 rounded-full font-black text-[18px] flex items-center justify-center shrink-0 mt-0.5 shadow-sm border border-teal-900/30"
              style={{ backgroundColor: "#0f766e", color: "#ffffff" }}
            >
              4
            </span>
            <div className="text-[18px]">
              <strong className="text-teal-950 dark:text-teal-300 block font-bold text-[18px] mb-1">
                Coloca los puntos en la gráfica interactiva
              </strong>
              <span className="text-[18px] leading-snug">
                Haz clic directamente sobre la gráfica o envolvente para situar los puntos en las coordenadas calculadas (ej. punto TOW/LW o distancias).
              </span>
            </div>
          </div>

          {/* Step 5: Ámbar / Naranja (Full Width across 2 columns) */}
          <div className="md:col-span-2 p-3 rounded-xl bg-amber-50/90 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 flex items-start gap-3">
            <span
              className="exercise-badge-5 w-8 h-8 rounded-full font-black text-[18px] flex items-center justify-center shrink-0 mt-0.5 shadow-sm border border-amber-900/30"
              style={{ backgroundColor: "#d97706", color: "#ffffff" }}
            >
              5
            </span>
            <div className="text-[18px]">
              <strong className="text-amber-950 dark:text-amber-300 block font-bold text-[18px] mb-1">
                Comprueba y valida ambas misiones
              </strong>
              <span className="text-[18px] leading-snug">
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
            className="w-full rounded-2xl bg-[#1a80ff] hover:bg-[#0066e6] text-white py-3 text-[18px] font-bold transition shadow-md shadow-blue-500/20 cursor-pointer flex items-center justify-center gap-2"
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
