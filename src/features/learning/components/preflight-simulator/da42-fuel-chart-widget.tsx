"use client";

import React, { useState, useRef, useCallback } from "react";

// Official AFM curve points for DA42 (Continental CD-135 / Thielert TAE 125-01)
// Fuel Flow is per engine
const AFM_CURVE = [
  { load: 30, usg: 2.20 },
  { load: 35, usg: 2.57 },
  { load: 40, usg: 2.94 },
  { load: 45, usg: 3.30 },
  { load: 50, usg: 3.65 },
  { load: 55, usg: 4.01 },
  { load: 60, usg: 4.40 }, // Official AFM example point: 60% -> 4.4 USG/h (16.5 L/h)
  { load: 65, usg: 4.81 },
  { load: 70, usg: 5.25 },
  { load: 75, usg: 5.72 },
  { load: 80, usg: 6.20 },
  { load: 85, usg: 6.71 },
  { load: 90, usg: 7.22 },
  { load: 95, usg: 7.80 },
  { load: 100, usg: 8.40 },
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
  return 4.4;
}

// Bounding box of the grid inside the original 660 x 535 screenshot
const BOX = {
  left: 16,
  right: 527,
  top: 43,
  bottom: 464,
  width: 527 - 16, // 511 px
  height: 464 - 43, // 421 px
  minLoad: 30,
  maxLoad: 100,
  minUsg: 1.0,
  maxUsg: 8.5,
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

export function DA42FuelChartWidget() {
  const svgRef = useRef<SVGSVGElement | null>(null);

  // Default initial point: Official AFM Example at 60% LOAD & 4.4 USG/h
  const defaultCoords = dataToCoords(60, 4.4);
  const [point, setPoint] = useState({
    x: defaultCoords.x,
    y: defaultCoords.y,
    load: 60.0,
    usg: 4.4,
    lph: 16.5,
  });

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
  };

  const totalUsg = point.usg * 2;
  const totalLph = point.lph * 2;

  return (
    <div className="w-full h-full flex flex-col justify-between bg-white dark:bg-slate-900 rounded-xl p-2 select-none overflow-hidden">
      {/* Top Value Readout Bar */}
      <div className="h-12 shrink-0 flex items-center justify-between px-3 py-1 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80">
        <div className="flex items-center gap-2">
          <span className="font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide text-[18px]">
            POTENCIA:
          </span>
          <span className="font-mono font-black text-[20px] text-[#0B2E59] dark:text-sky-300">
            {point.load.toFixed(1)}% LOAD
          </span>
        </div>

        <div className="flex items-center gap-4 font-mono font-bold">
          <div className="flex items-center gap-1.5 text-blue-700 dark:text-sky-300">
            <span className="text-slate-500 dark:text-slate-400 font-sans font-bold text-[18px]">
              USG/h:
            </span>
            <span className="font-black text-[20px]">{point.usg.toFixed(2)}</span>
          </div>
          <div className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400">
            <span className="text-slate-500 dark:text-slate-400 font-sans font-bold text-[18px]">
              L/h:
            </span>
            <span className="font-black text-[20px]">{point.lph.toFixed(1)}</span>
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
      >
        <div className="relative aspect-[660/535] h-full max-h-full max-w-full m-auto select-none">
          {/* 1. ORIGINAL AFM SCREENSHOT IMAGE AS BACKGROUND */}
          <img
            src="/images/DA42/fuel-flow-chart.png"
            alt="Ábaco oficial AFM de consumo horario Fuel Flow vs % Load DA42"
            className="w-full h-full object-contain pointer-events-none select-none block"
          />

          {/* 2. INTERACTIVE SVG OVERLAY ON TOP OF THE EXACT IMAGE */}
          <svg
            ref={svgRef}
            viewBox="0 0 660 535"
            className="absolute inset-0 w-full h-full select-none pointer-events-none"
          >
            {/* Horizontal Dashed Projection to the Right Y-Axis (Fuel Flow) */}
            <line
              x1={point.x}
              y1={point.y}
              x2={BOX.right}
              y2={point.y}
              stroke="#1d4ed8"
              strokeWidth="3.5"
              strokeDasharray="7 4"
            />
            {/* Arrow on Right Axis */}
            <polygon
              points={`${BOX.right - 10},${point.y - 6} ${BOX.right - 10},${point.y + 6} ${BOX.right - 1},${point.y}`}
              fill="#1d4ed8"
            />
            {/* Badge on Right Axis */}
            <g transform={`translate(${BOX.right + 4}, ${Math.max(55, Math.min(450, point.y))})`}>
              <rect
                x="0"
                y="-18"
                width="125"
                height="36"
                rx="6"
                fill="#1d4ed8"
                stroke="#ffffff"
                strokeWidth="2"
                filter="drop-shadow(0px 2px 4px rgba(0,0,0,0.35))"
              />
              <text
                x="62"
                y="-2"
                textAnchor="middle"
                fill="#ffffff"
                fontSize="13"
                fontFamily="monospace"
                fontWeight="900"
              >
                {point.usg.toFixed(2)} USG/h
              </text>
              <text
                x="62"
                y="12"
                textAnchor="middle"
                fill="#bfdbfe"
                fontSize="11"
                fontFamily="monospace"
                fontWeight="800"
              >
                {point.lph.toFixed(1)} L/h
              </text>
            </g>

            {/* Vertical Dashed Projection to the Bottom X-Axis (% LOAD) */}
            <line
              x1={point.x}
              y1={point.y}
              x2={point.x}
              y2={BOX.bottom}
              stroke="#1d4ed8"
              strokeWidth="3.5"
              strokeDasharray="7 4"
            />
            {/* Arrow on Bottom Axis */}
            <polygon
              points={`${point.x - 6},${BOX.bottom - 10} ${point.x + 6},${BOX.bottom - 10} ${point.x},${BOX.bottom - 1}`}
              fill="#1d4ed8"
            />
            {/* Badge on Bottom Axis */}
            <g transform={`translate(${Math.max(65, Math.min(475, point.x))}, ${BOX.bottom + 6})`}>
              <rect
                x="-45"
                y="0"
                width="90"
                height="32"
                rx="6"
                fill="#1d4ed8"
                stroke="#ffffff"
                strokeWidth="2"
                filter="drop-shadow(0px 2px 4px rgba(0,0,0,0.35))"
              />
              <text
                x="0"
                y="22"
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
              cy={point.y}
              r="10"
              fill="#3b82f6"
              fillOpacity="0.25"
              stroke="#2563eb"
              strokeWidth="2"
            />
            <circle
              cx={point.x}
              cy={point.y}
              r="5"
              fill="#1d4ed8"
              stroke="#ffffff"
              strokeWidth="2"
            />

            {/* Floating Info Tooltip */}
            <g
              transform={`translate(${Math.min(
                BOX.right - 95,
                Math.max(BOX.left + 95, point.x)
              )}, ${point.y < 120 ? point.y + 40 : point.y - 40})`}
            >
              <rect
                x="-90"
                y="-25"
                width="180"
                height="50"
                rx="8"
                fill="#1d4ed8"
                stroke="#ffffff"
                strokeWidth="2"
                filter="drop-shadow(0px 3px 6px rgba(0,0,0,0.35))"
              />
              <text
                x="0"
                y="-6"
                textAnchor="middle"
                fill="#ffffff"
                fontSize="14"
                fontFamily="sans-serif"
                fontWeight="900"
              >
                {point.load.toFixed(1)}% LOAD
              </text>
              <text
                x="0"
                y="14"
                textAnchor="middle"
                fill="#bfdbfe"
                fontSize="12"
                fontFamily="monospace"
                fontWeight="800"
              >
                {point.usg.toFixed(2)} USG &bull; {point.lph.toFixed(1)} L/h
              </text>
            </g>
          </svg>
        </div>
      </div>

      {/* Preset Buttons & Instruction Hint */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-1.5 pt-1.5 border-t border-slate-200 dark:border-slate-800 shrink-0">
        <span className="text-xs text-slate-600 dark:text-slate-400 font-medium flex items-center gap-1">
          <span className="text-base">👆</span> Mueve el cursor sobre la gráfica o selecciona:
        </span>
        <div className="flex items-center gap-1.5 flex-wrap">
          {[
            { label: "60% Eco", load: 60 },
            { label: "70% Normal", load: 70 },
            { label: "80% Rápido", load: 80 },
            { label: "100% Despegue", load: 100 },
          ].map((preset) => {
            const isActive = Math.abs(point.load - preset.load) < 0.5;
            return (
              <button
                key={preset.load}
                type="button"
                onClick={() => setPreset(preset.load)}
                style={{
                  backgroundColor: isActive ? "#0B2E59" : "#f1f5f9",
                  color: isActive ? "#ffffff" : "#000000",
                  fontSize: "18px",
                  fontWeight: 800,
                }}
                className={`px-3 py-1 rounded-lg transition-all cursor-pointer border ${
                  isActive
                    ? "border-[#0B2E59] shadow-sm ring-2 ring-sky-300 dark:bg-sky-600"
                    : "border-slate-300 hover:bg-slate-200 dark:bg-slate-800 dark:border-slate-700"
                }`}
              >
                <span style={{ color: isActive ? "#ffffff" : "#000000" }}>
                  {preset.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

