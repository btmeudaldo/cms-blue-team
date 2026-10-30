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

  return (
    <div className="w-full h-full flex flex-col justify-between bg-white dark:bg-slate-900 rounded-xl p-2 select-none overflow-hidden">
      {/* Top Value Readout Bar */}
      <div className="h-10 shrink-0 flex items-center justify-between px-3 py-1 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80">
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
            POTENCIA:
          </span>
          <span className="font-mono font-extrabold text-base text-[#0B2E59] dark:text-sky-300">
            {point.load.toFixed(1)}% LOAD
          </span>
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
              stroke="#1d4ed8"
              strokeWidth="5"
              strokeDasharray="10 6"
            />
            {/* Arrow on Right Axis */}
            <polygon
              points={`${BOX.right - 14},${point.y - 8} ${BOX.right - 14},${point.y + 8} ${BOX.right - 2},${point.y}`}
              fill="#1d4ed8"
            />
            {/* Badge on Right Axis (Same size & style as Mass & Balance) */}
            <g transform={`translate(${BOX.right + 6}, ${Math.max(124, Math.min(811, point.y))})`}>
              <rect
                x="0"
                y="-28"
                width="214"
                height="56"
                rx="10"
                fill="#1d4ed8"
                stroke="#ffffff"
                strokeWidth="3"
                filter="drop-shadow(0px 3px 6px rgba(0,0,0,0.35))"
              />
              <text
                x="107"
                y="-3"
                textAnchor="middle"
                fill="#ffffff"
                fontSize="22"
                fontFamily="monospace"
                fontWeight="900"
              >
                {point.usg.toFixed(2)} USG/h
              </text>
              <text
                x="107"
                y="19"
                textAnchor="middle"
                fill="#bfdbfe"
                fontSize="18"
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
              strokeWidth="5"
              strokeDasharray="10 6"
            />
            {/* Arrow on Bottom Axis */}
            <polygon
              points={`${point.x - 8},${BOX.bottom - 14} ${point.x + 8},${BOX.bottom - 14} ${point.x},${BOX.bottom - 2}`}
              fill="#1d4ed8"
            />
            {/* Badge on Bottom Axis (Same size & style as Mass & Balance) */}
            <g transform={`translate(${Math.max(120, Math.min(755, point.x))}, ${BOX.bottom + 8})`}>
              <rect
                x="-85"
                y="0"
                width="170"
                height="54"
                rx="10"
                fill="#1d4ed8"
                stroke="#ffffff"
                strokeWidth="3"
                filter="drop-shadow(0px 3px 6px rgba(0,0,0,0.35))"
              />
              <text
                x="0"
                y="37"
                textAnchor="middle"
                fill="#ffffff"
                fontSize="26"
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
              r="14"
              fill="#3b82f6"
              fillOpacity="0.25"
              stroke="#2563eb"
              strokeWidth="2.5"
            />
            <circle
              cx={point.x}
              cy={point.y}
              r="7"
              fill="#1d4ed8"
              stroke="#ffffff"
              strokeWidth="2.5"
            />

            {/* Floating Info Tooltip (Same style & size as Axis Badges & Mass/Balance) */}
            <g
              transform={`translate(${Math.min(
                BOX.right - 125,
                Math.max(BOX.left + 125, point.x)
              )}, ${point.y < 165 ? point.y + 48 : point.y - 48})`}
            >
              <rect
                x="-118"
                y="-30"
                width="236"
                height="60"
                rx="10"
                fill="#1d4ed8"
                stroke="#ffffff"
                strokeWidth="3"
                filter="drop-shadow(0px 3px 6px rgba(0,0,0,0.35))"
              />
              <text
                x="0"
                y="-5"
                textAnchor="middle"
                fill="#ffffff"
                fontSize="20"
                fontFamily="sans-serif"
                fontWeight="900"
              >
                {point.load.toFixed(1)}% LOAD
              </text>
              <text
                x="0"
                y="19"
                textAnchor="middle"
                fill="#bfdbfe"
                fontSize="17"
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
        <span className="text-[11px] text-slate-600 dark:text-slate-400 font-medium flex items-center gap-1">
          <span className="text-base">👆</span> Haz clic o mueve el cursor por la gráfica:
        </span>
        <div className="flex items-center gap-1.5">
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
                  color: isActive ? "#ffffff" : "#0f172a",
                }}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-extrabold transition-all cursor-pointer border ${
                  isActive
                    ? "border-[#0B2E59] shadow-sm ring-2 ring-sky-300 dark:bg-sky-600 dark:text-white"
                    : "border-slate-300 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700"
                }`}
              >
                {preset.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
