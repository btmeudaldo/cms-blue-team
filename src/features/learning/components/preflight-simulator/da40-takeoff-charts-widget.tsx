"use client";

import React, { useState } from "react";

type ChartTab = "ground_roll" | "obstacle_50ft";

interface ChartMeta {
  id: ChartTab;
  tabLabel: string;
  tabShortLabel: string;
  icon: string;
  title: string;
  afmSection: string;
  src: string;
  alt: string;
  highlights: string[];
  keyFactors: {
    label: string;
    value: string;
    desc: string;
  }[];
}

const CHARTS: Record<ChartTab, ChartMeta> = {
  ground_roll: {
    id: "ground_roll",
    tabLabel: "Carrera en Tierra (Ground Roll)",
    tabShortLabel: "Ground Roll",
    icon: "🏃‍♂️",
    title: "ÁBACO AFM: TAKE-OFF DISTANCE - GROUND ROLL",
    afmSection: "AFM Sección 5.3.5 · Flaps T/O · Pista Asfaltada",
    src: "/images/da40/da40-takeoff-ground-roll.png",
    alt: "Ábaco oficial AFM Diamond DA40 TDI: Carrera de despegue en tierra (Ground Roll)",
    highlights: [
      "Distancia física desde suelta de frenos hasta la rotación y despegue de ruedas (59 KIAS a 1150 kg).",
      "Los factores de fricción de superficie (hierba) se aplican directa y obligatoriamente sobre este valor.",
    ],
    keyFactors: [
      { label: "Hierba corta (≤ 5 cm)", value: "+10%", desc: "Incremento sobre la carrera en tierra" },
      { label: "Hierba media (5-10 cm)", value: "+15%", desc: "Incremento sobre la carrera en tierra" },
      { label: "Hierba alta (> 10 cm)", value: "+25%+", desc: "Incremento mínimo sobre ground roll" },
      { label: "Viento en cara / cola", value: "Curvas ábaco", desc: "Corrección directa en la 3ª cuadrícula" },
    ],
  },
  obstacle_50ft: {
    id: "obstacle_50ft",
    tabLabel: "Distancia sobre 50 ft (Obstáculo)",
    tabShortLabel: "Over 50 ft",
    icon: "🛫",
    title: "ÁBACO AFM: TAKE-OFF DISTANCE - 50 FT OBSTACLE",
    afmSection: "AFM Sección 5.3.6 · Flaps T/O · Pista Asfaltada",
    src: "/images/da40/da40-takeoff-50ft.png",
    alt: "Ábaco oficial AFM Diamond DA40 TDI: Distancia total de despegue sobre obstáculo de 50 ft (15 m)",
    highlights: [
      "Distancia total desde suelta de frenos hasta cruzar el obstáculo de pantalla de 15 m (50 ft) a 66 KIAS (1150 kg).",
      "Determina el cumplimiento reglamentario frente a la distancia de despegue disponible (TODA).",
    ],
    keyFactors: [
      { label: "Pendiente subida (+2%)", value: "+10%", desc: "Sobre la distancia total de despegue" },
      { label: "Velocidad sobre 50 ft", value: "66 KIAS", desc: "A masa máxima de 1150 kg" },
      { label: "Pista requerida", value: "TODA ≥ D_50ft", desc: "Criterio legal de despacho operacional" },
      { label: "Viento en cara / cola", value: "Curvas ábaco", desc: "Corrección directa en la 3ª cuadrícula" },
    ],
  },
};

export function DA40TakeoffChartsWidget() {
  const [activeTab, setActiveTab] = useState<ChartTab>("ground_roll");
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  const currentChart = CHARTS[activeTab];

  return (
    <div className="w-full h-full flex flex-col justify-between bg-white dark:bg-slate-900 rounded-2xl p-2.5 select-none overflow-hidden">
      {/* Top Header & Tab Switcher */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1.5 pb-2 border-b border-slate-200 dark:border-slate-800 shrink-0">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-base sm:text-lg">{currentChart.icon}</span>
            <span className="font-extrabold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wide text-xs sm:text-sm truncate">
              {currentChart.title}
            </span>
          </div>
          <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium block truncate">
            {currentChart.afmSection}
          </span>
        </div>

        {/* Segmented Selector Buttons */}
        <div className="flex items-center gap-1 p-0.5 bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shrink-0">
          {(["ground_roll", "obstacle_50ft"] as ChartTab[]).map((tabKey) => {
            const chart = CHARTS[tabKey];
            const isActive = activeTab === tabKey;
            return (
              <button
                key={tabKey}
                type="button"
                onClick={() => setActiveTab(tabKey)}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? "bg-[#0B2E59] dark:bg-sky-600 text-white shadow-xs"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <span>{chart.icon}</span>
                <span className="hidden md:inline">{chart.tabLabel}</span>
                <span className="md:hidden">{chart.tabShortLabel}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Image Viewport with Hover Zoom Prompt */}
      <div className="relative w-full flex-1 min-h-0 bg-slate-50/50 dark:bg-slate-950/40 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-center p-2 my-1 overflow-hidden group">
        <img
          src={currentChart.src}
          alt={currentChart.alt}
          className="max-w-full max-h-full object-contain rounded-lg transition-transform duration-200 cursor-zoom-in"
          onClick={() => setIsZoomOpen(true)}
        />

        {/* Floating Zoom Button */}
        <button
          type="button"
          onClick={() => setIsZoomOpen(true)}
          className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-lg bg-slate-900/80 hover:bg-slate-900 text-white text-xs font-semibold backdrop-blur-xs flex items-center gap-1.5 shadow-md transition-all cursor-pointer opacity-90 group-hover:opacity-100"
        >
          <span>🔍</span>
          <span>Ampliar ábaco</span>
        </button>

        {/* Watermark Reference */}
        <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-white/80 dark:bg-slate-900/80 text-[10px] font-mono text-slate-500 dark:text-slate-400 border border-slate-200/60 dark:border-slate-800/60 pointer-events-none">
          {activeTab === "ground_roll" ? "AFM Fig. 5.3 (Ground Roll)" : "AFM Fig. 5.4 (50 ft Obstacle)"}
        </div>
      </div>

      {/* Contextual Technical Footer */}
      <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/80 shrink-0 space-y-1">
        <div className="flex items-center justify-between text-xs">
          <span className="font-bold text-[#0B2E59] dark:text-sky-300 flex items-center gap-1.5">
            <span>ℹ️</span> FACTORES CLAVE DEL ÁBACO:
          </span>
          <span className="text-[11px] text-slate-500 dark:text-slate-400">
            {activeTab === "ground_roll" ? "Aplicables a TORA" : "Aplicables a TODA"}
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 pt-0.5">
          {currentChart.keyFactors.map((factor, i) => (
            <div
              key={i}
              className="p-1.5 rounded-lg bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 text-[11px] leading-tight"
            >
              <div className="text-slate-500 dark:text-slate-400 text-[10px] truncate">{factor.label}</div>
              <div className="font-extrabold text-[#1a80ff] dark:text-sky-400 font-mono text-xs mt-0.5">
                {factor.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal for 100% High-Res Inspection */}
      {isZoomOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-sm flex flex-col items-center justify-center p-3 animate-in fade-in duration-150"
          onClick={() => setIsZoomOpen(false)}
        >
          <div
            className="relative max-w-6xl w-full max-h-[92vh] flex flex-col bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-200 dark:border-slate-800 shrink-0 bg-slate-50 dark:bg-slate-900">
              <div className="flex items-center gap-2">
                <span className="text-xl">{currentChart.icon}</span>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-[#0B2E59] dark:text-sky-300">
                    {currentChart.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {currentChart.afmSection} · Resolución completa de lectura
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {/* Modal Tab Switcher */}
                <div className="flex items-center gap-1 p-0.5 bg-slate-200/80 dark:bg-slate-800 rounded-lg">
                  <button
                    type="button"
                    onClick={() => setActiveTab("ground_roll")}
                    className={`px-2.5 py-1 rounded-md text-xs font-bold transition-all cursor-pointer ${
                      activeTab === "ground_roll"
                        ? "bg-[#0B2E59] text-white"
                        : "text-slate-600 dark:text-slate-300"
                    }`}
                  >
                    Ground Roll
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("obstacle_50ft")}
                    className={`px-2.5 py-1 rounded-md text-xs font-bold transition-all cursor-pointer ${
                      activeTab === "obstacle_50ft"
                        ? "bg-[#0B2E59] text-white"
                        : "text-slate-600 dark:text-slate-300"
                    }`}
                  >
                    Over 50 ft
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => setIsZoomOpen(false)}
                  className="px-3 py-1 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300 text-xs font-bold transition-all cursor-pointer"
                >
                  ✕ Cerrar
                </button>
              </div>
            </div>

            {/* Modal Image Viewport */}
            <div className="flex-1 min-h-0 p-3 flex items-center justify-center bg-slate-950 overflow-auto">
              <img
                src={currentChart.src}
                alt={currentChart.alt}
                className="max-w-full max-h-[75vh] object-contain rounded"
              />
            </div>

            {/* Modal Footer Tip */}
            <div className="px-4 py-2 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 flex items-center justify-between">
              <span>💡 Pista: Puedes alternar entre ambos ábacos directamente con los botones superiores.</span>
              <span className="font-semibold text-slate-700 dark:text-slate-300">Esc / Clic fuera para cerrar</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
