"use client";

import React, { useState, useRef, useCallback } from "react";

// Official AFM curve points for reference & snap
const AFM_CURVE = [
  { load: 30, usg: 1.85 },
  { load: 40, usg: 2.50 },
  { load: 50, usg: 3.20 },
  { load: 60, usg: 4.00 },
  { load: 70, usg: 4.90 },
  { load: 80, usg: 5.80 },
  { load: 90, usg: 6.70 },
  { load: 100, usg: 7.70 },
];

function getTheoreticalUsg(load: number): number {
  const cLoad = Math.max(30, Math.min(100, load));
  for (let i = 0; i < AFM_CURVE.length - 1; i++) {
    const p1 = AFM_CURVE[i];
    const p2 = AFM_CURVE[i + 1];
    if (cLoad >= p1.load && cLoad <= p2.load) {
      const t = (cLoad - p1.load) / (p2.load - p1.load);
      return p1.usg + t * (p2.usg - p1.usg);
    }
  }
  return 4.0;
}

// Bounding box of the grid inside the original 1070 x 917 screenshot
const BOX = {
  left: 34,
  right: 841,
  top: 96,
  bottom: 839,
  width: 841 - 34, // 807 px
  height: 839 - 96, // 743 px
  minLoad: 30,
  maxLoad: 100,
  minUsg: 1.0,
  maxUsg: 8.0,
};

function coordsToData(x: number, y: number) {
  const clampedX = Math.max(BOX.left, Math.min(BOX.right, x));
  const clampedY = Math.max(BOX.top, Math.min(BOX.bottom, y));

  const load =
    BOX.minLoad +
    ((clampedX - BOX.left) / BOX.width) * (BOX.maxLoad - BOX.minLoad);
  const usg =
    BOX.maxUsg -
    ((clampedY - BOX.top) / BOX.height) * (BOX.maxUsg - BOX.minUsg);
  const lph = usg * 3.78541;

  return {
    x: clampedX,
    y: clampedY,
    load: Math.round(load * 10) / 10,
    usg: Math.round(usg * 100) / 100,
    lph: Math.round(lph * 10) / 10,
  };
}

function dataToCoords(load: number, usg: number) {
  const x =
    BOX.left +
    ((load - BOX.minLoad) / (BOX.maxLoad - BOX.minLoad)) * BOX.width;
  const y =
    BOX.top + ((BOX.maxUsg - usg) / (BOX.maxUsg - BOX.minUsg)) * BOX.height;
  return { x, y };
}

export function DA40FuelChartWidget() {
  const svgRef = useRef<SVGSVGElement | null>(null);

  // Default initial point: Official AFM Example at 60% LOAD & 4.0 USG/h
  const defaultCoords = dataToCoords(60, 4.0);
  const [point, setPoint] = useState({
    x: defaultCoords.x,
    y: defaultCoords.y,
    load: 60.0,
    usg: 4.0,
    lph: 15.1,
  });
  const [isHovering, setIsHovering] = useState(false);

  // Pointer event conversion using native SVG screen matrix
  const handlePointer = useCallback((clientX: number, clientY: number) => {
    if (!svgRef.current) return;
    try {
      const svg = svgRef.current;
      const pt = svg.createSVGPoint();
      pt.x = clientX;
      pt.y = clientY;
      const ctm = svg.getScreenCTM();
      if (!ctm) return;
      const svgPt = pt.matrixTransform(ctm.inverse());

      // Only update if inside or close to the chart area
      if (
        svgPt.x >= BOX.left - 10 &&
        svgPt.x <= BOX.right + 10 &&
        svgPt.y >= BOX.top - 10 &&
        svgPt.y <= BOX.bottom + 10
      ) {
        const data = coordsToData(svgPt.x, svgPt.y);
        setPoint(data);
        setIsHovering(true);
      }
    } catch {
      // Ignore
    }
  }, []);

  const setPreset = (load: number) => {
    const usg = getTheoreticalUsg(load);
    const coords = dataToCoords(load, usg);
    setPoint({
      x: coords.x,
      y: coords.y,
      load,
      usg: Math.round(usg * 100) / 100,
      lph: Math.round(usg * 3.78541 * 10) / 10,
    });
    setIsHovering(true);
  };

  // Check if current point is close to the theoretical AFM curve
  const theoUsg = getTheoreticalUsg(point.load);
  const isOnAfmCurve = Math.abs(point.usg - theoUsg) < 0.25;

  return (
    <div className="w-full h-full flex flex-col justify-between bg-white dark:bg-slate-900 rounded-xl p-2 select-none overflow-hidden">
      {/* Top Value Readout Bar */}
      <div className="flex flex-wrap items-center justify-between gap-1.5 px-2 py-1 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 shrink-0">
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
            POTENCIA:
          </span>
          <span className="font-mono font-extrabold text-base text-[#0B2E59] dark:text-sky-300">
            {point.load.toFixed(1)}% LOAD
          </span>
          {isOnAfmCurve && (
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-400">
              En curva AFM
            </span>
          )}
        </div>

        <div className="flex items-center gap-3 font-mono text-xs font-bold">
          <div className="flex items-center gap-1 text-blue-700 dark:text-sky-300">
            <span className="text-[10px] text-slate-500 font-sans font-semibold">
              USG/h:
            </span>
            <span className="text-sm font-extrabold">{point.usg.toFixed(2)}</span>
          </div>
          <div className="flex items-center gap-1 text-emerald-700 dark:text-emerald-400">
            <span className="text-[10px] text-slate-500 font-sans font-semibold">
              L/h:
            </span>
            <span className="text-sm font-extrabold">{point.lph.toFixed(1)}</span>
          </div>
        </div>
      </div>

      {/* Image Container with SVG Overlay */}
      <div
        className="relative w-full flex-1 min-h-0 flex items-center justify-center p-0.5 my-auto touch-none cursor-crosshair overflow-hidden"
        onPointerMove={(e) => handlePointer(e.clientX, e.clientY)}
        onPointerDown={(e) => {
          (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
          handlePointer(e.clientX, e.clientY);
        }}
        onPointerEnter={() => setIsHovering(true)}
      >
        <div className="relative aspect-[1070/917] h-full max-h-full max-w-full m-auto select-none">
          {/* 1. ORIGINAL AFM SCREENSHOT IMAGE AS BACKGROUND */}
          <img
            src="/images/da40/da40-fuel-flow-load.png"
            alt="Ábaco oficial AFM de consumo horario Fuel Flow vs % Load"
            className="w-full h-full object-contain pointer-events-none select-none block"
          />

          {/* 2. INTERACTIVE SVG OVERLAY ON TOP OF THE EXACT IMAGE */}
          <svg
            ref={svgRef}
            viewBox="0 0 1070 917"
            className="absolute inset-0 w-full h-full select-none pointer-events-none"
          >
            {/* Horizontal Dashed Projection to the Right Y-Axis (Fuel Flow) */}
            <line
              x1={point.x}
              y1={point.y}
              x2={BOX.right}
              y2={point.y}
              stroke="#2563eb"
              strokeWidth="4"
              strokeDasharray="8 6"
            />
            {/* Arrow on Right Axis */}
            <polygon
              points={`${BOX.right - 12},${point.y - 7} ${BOX.right - 12},${point.y + 7} ${BOX.right - 2},${point.y}`}
              fill="#2563eb"
            />
            {/* Badge on Right Axis */}
            <g transform={`translate(${BOX.right + 6}, ${Math.max(105, Math.min(815, point.y))})`}>
              <rect
                x="0"
                y="-18"
                width="145"
                height="36"
                rx="6"
                fill="#1d4ed8"
                stroke="#ffffff"
                strokeWidth="2"
                filter="drop-shadow(0px 2px 4px rgba(0,0,0,0.3))"
              />
              <text
                x="72"
                y="5"
                textAnchor="middle"
                fill="#ffffff"
                fontSize="15"
                fontFamily="monospace"
                fontWeight="900"
              >
                {point.usg.toFixed(2)} USG | {point.lph.toFixed(1)}L
              </text>
            </g>

            {/* Vertical Dashed Projection to the Bottom X-Axis (% LOAD) */}
            <line
              x1={point.x}
              y1={point.y}
              x2={point.x}
              y2={BOX.bottom}
              stroke="#2563eb"
              strokeWidth="4"
              strokeDasharray="8 6"
            />
            {/* Arrow on Bottom Axis */}
            <polygon
              points={`${point.x - 7},${BOX.bottom - 12} ${point.x + 7},${BOX.bottom - 12} ${point.x},${BOX.bottom - 2}`}
              fill="#2563eb"
            />
            {/* Badge on Bottom Axis */}
            <g transform={`translate(${Math.max(50, Math.min(820, point.x))}, ${BOX.bottom + 6})`}>
              <rect
                x="-40"
                y="0"
                width="80"
                height="32"
                rx="6"
                fill="#1d4ed8"
                stroke="#ffffff"
                strokeWidth="2"
                filter="drop-shadow(0px 2px 4px rgba(0,0,0,0.3))"
              />
              <text
                x="0"
                y="21"
                textAnchor="middle"
                fill="#ffffff"
                fontSize="16"
                fontFamily="monospace"
                fontWeight="900"
              >
                {point.load.toFixed(1)}%
              </text>
            </g>

            {/* Point Marker (Crosshair center dot with glow) */}
            <circle
              cx={point.x}
              y={point.y}
              r="14"
              fill="#3b82f6"
              fillOpacity="0.25"
              stroke="#2563eb"
              strokeWidth="2.5"
            />
            <circle
              cx={point.x}
              y={point.y}
              r="7"
              fill="#1d4ed8"
              stroke="#ffffff"
              strokeWidth="2.5"
            />

            {/* Floating Info Tooltip */}
            <g
              transform={`translate(${Math.min(
                BOX.right - 180,
                Math.max(BOX.left + 10, point.x - 90)
              )}, ${Math.max(BOX.top + 10, point.y - 65)})`}
            >
              <rect
                width="180"
                height="50"
                rx="8"
                fill="#0f172a"
                fillOpacity="0.95"
                stroke="#38bdf8"
                strokeWidth="2"
                filter="drop-shadow(0px 4px 6px rgba(0,0,0,0.4))"
              />
              <text
                x="90"
                y="19"
                textAnchor="middle"
                fill="#38bdf8"
                fontSize="13"
                fontWeight="800"
              >
                {point.load.toFixed(1)}% LOAD
              </text>
              <text
                x="90"
                y="39"
                textAnchor="middle"
                fill="#ffffff"
                fontSize="14"
                fontFamily="monospace"
                fontWeight="900"
              >
                {point.usg.toFixed(2)} USG &bull; {point.lph.toFixed(1)} L/h
              </text>
            </g>
          </svg>
        </div>
      </div>

      {/* Preset Buttons & Instruction Hint */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-1.5 pt-1.5 border-t border-slate-200 dark:border-slate-800 shrink-0">
        <span className="text-[11px] text-slate-600 dark:text-slate-400 font-medium flex items-center gap-1">
          <span className="text-base">👆</span> Haz clic o mueve el cursor por la gráfica:
        </span>
        <div className="flex items-center gap-1">
          {[
            { label: "60% Eco", load: 60 },
            { label: "70% Normal", load: 70 },
            { label: "80% Rápido", load: 80 },
            { label: "100% Despegue", load: 100 },
          ].map((preset) => (
            <button
              key={preset.load}
              type="button"
              onClick={() => setPreset(preset.load)}
              className={`px-2.5 py-1 rounded-md text-[11px] font-bold transition-all cursor-pointer ${
                Math.abs(point.load - preset.load) < 0.5
                  ? "bg-[#0B2E59] text-white dark:bg-sky-500 dark:text-slate-950 shadow-sm ring-2 ring-sky-300 dark:ring-sky-600"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-300"
              }`}
            >
              {preset.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
