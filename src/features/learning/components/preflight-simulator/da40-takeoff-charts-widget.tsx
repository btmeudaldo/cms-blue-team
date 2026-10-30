"use client";

import React, { useState } from "react";

type ChartTab = "ground_roll" | "obstacle_50ft";

const CHARTS = {
  ground_roll: {
    src: "/images/da40/da40-takeoff-ground-roll.png",
    alt: "Ground Roll - Diamond DA40 TDI",
    label: "Ground Roll",
  },
  obstacle_50ft: {
    src: "/images/da40/da40-takeoff-50ft.png",
    alt: "Takeoff Distance 50ft - Diamond DA40 TDI",
    label: "Takeoff Distance 50ft",
  },
} as const;

export function DA40TakeoffChartsWidget() {
  const [activeTab, setActiveTab] = useState<ChartTab>("ground_roll");
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  const currentChart = CHARTS[activeTab];

  return (
    <div className="w-full h-full flex flex-col bg-white dark:bg-slate-900 rounded-2xl p-2 select-none overflow-hidden">
      {/* Top Controls: Selector Buttons & Zoom Action */}
      <div className="flex items-center justify-between pb-1.5 border-b border-slate-200 dark:border-slate-800 shrink-0">
        {/* Selector Tabs: Ground Roll & Takeoff Distance 50ft */}
        <div className="flex items-center gap-1 p-0.5 bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
          <button
            type="button"
            onClick={() => setActiveTab("ground_roll")}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeTab === "ground_roll"
                ? "bg-[#0B2E59] text-white shadow-xs dark:bg-sky-600"
                : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            Ground Roll
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("obstacle_50ft")}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeTab === "obstacle_50ft"
                ? "bg-[#0B2E59] text-white shadow-xs dark:bg-sky-600"
                : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            Takeoff Distance 50ft
          </button>
        </div>

        {/* Zoom Button */}
        <button
          type="button"
          onClick={() => setIsZoomOpen(true)}
          className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer border border-slate-200 dark:border-slate-700"
          title="Ampliar gráfica a pantalla completa"
        >
          <span>🔍</span>
          <span className="hidden sm:inline">Ampliar</span>
        </button>
      </div>

      {/* Main Image Viewport: Full Card Space */}
      <div className="relative w-full flex-1 min-h-0 bg-slate-50/50 dark:bg-slate-950/40 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-center p-1.5 mt-1.5 overflow-hidden group">
        <img
          src={currentChart.src}
          alt={currentChart.alt}
          className="max-w-full max-h-full object-contain rounded-lg transition-transform duration-200 cursor-zoom-in"
          onClick={() => setIsZoomOpen(true)}
        />
      </div>

      {/* Lightbox Modal for Full Resolution Inspection */}
      {isZoomOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-sm flex flex-col items-center justify-center p-3 animate-in fade-in duration-150"
          onClick={() => setIsZoomOpen(false)}
        >
          <div
            className="relative max-w-6xl w-full max-h-[94vh] flex flex-col bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-slate-200 dark:border-slate-800 shrink-0 bg-slate-50 dark:bg-slate-900">
              {/* Modal Tabs */}
              <div className="flex items-center gap-1 p-0.5 bg-slate-200 dark:bg-slate-800 rounded-lg">
                <button
                  type="button"
                  onClick={() => setActiveTab("ground_roll")}
                  className={`px-3 py-1 rounded-md text-xs font-bold transition-all cursor-pointer ${
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
                  className={`px-3 py-1 rounded-md text-xs font-bold transition-all cursor-pointer ${
                    activeTab === "obstacle_50ft"
                      ? "bg-[#0B2E59] text-white"
                      : "text-slate-600 dark:text-slate-300"
                  }`}
                >
                  Takeoff Distance 50ft
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

            {/* Modal Image Viewport */}
            <div className="flex-1 min-h-0 p-2 flex items-center justify-center bg-slate-950 overflow-auto">
              <img
                src={currentChart.src}
                alt={currentChart.alt}
                className="max-w-full max-h-[82vh] object-contain rounded"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
