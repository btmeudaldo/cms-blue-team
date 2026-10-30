"use client";

import React, { useState, useRef, useCallback } from "react";

const DATA_POINTS = [
  { load: 30, usg: 1.85 },
  { load: 40, usg: 2.50 },
  { load: 50, usg: 3.20 },
  { load: 60, usg: 4.00 },
  { load: 70, usg: 4.90 },
  { load: 80, usg: 5.80 },
  { load: 90, usg: 6.70 },
  { load: 100, usg: 7.70 },
];

function interpolateFuelFlow(load: number): number {
  const clampedLoad = Math.max(30, Math.min(100, load));
  for (let i = 0; i < DATA_POINTS.length - 1; i++) {
    const p1 = DATA_POINTS[i];
    const p2 = DATA_POINTS[i + 1];
    if (clampedLoad >= p1.load && clampedLoad <= p2.load) {
      const t = (clampedLoad - p1.load) / (p2.load - p1.load);
      return p1.usg + t * (p2.usg - p1.usg);
    }
  }
  return 4.0;
}

function getRegimeBadge(load: number) {
  if (load < 58) {
    return {
      name: "Baja Potencia / Espera",
      color: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-300",
    };
  }
  if (load >= 58 && load <= 62) {
    return {
      name: "Crucero Económico AFM (Máx. Alcance)",
      color: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border-emerald-400",
    };
  }
  if (load > 62 && load < 68) {
    return {
      name: "Crucero Intermedio",
      color: "bg-sky-100 text-sky-800 dark:bg-sky-950/60 dark:text-sky-300 border-sky-400",
    };
  }
  if (load >= 68 && load <= 72) {
    return {
      name: "Crucero Normal AFM (Estándar)",
      color: "bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300 border-blue-400",
    };
  }
  if (load > 72 && load < 78) {
    return {
      name: "Crucero Rápido Intermedio",
      color: "bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border-amber-400",
    };
  }
  if (load >= 78 && load <= 82) {
    return {
      name: "Máx. Crucero Continuo AFM",
      color: "bg-orange-100 text-orange-800 dark:bg-orange-950/60 dark:text-orange-300 border-orange-400",
    };
  }
  return {
    name: "Régimen de Ascenso / Despegue",
    color: "bg-red-100 text-red-800 dark:bg-red-950/60 dark:text-red-300 border-red-400",
  };
}

export function DA40FuelChartWidget() {
  const [selectedLoad, setSelectedLoad] = useState<number>(60);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const svgRef = useRef<SVGSVGElement | null>(null);

  // SVG coordinate system boundaries
  // Plot area inside SVG:
  const plotLeft = 60;
  const plotRight = 440;
  const plotTop = 40;
  const plotBottom = 400;
  const plotWidth = plotRight - plotLeft;
  const plotHeight = plotBottom - plotTop;

  // X range: 30 to 100
  const minLoad = 30;
  const maxLoad = 100;
  const loadToX = useCallback(
    (load: number) => {
      return plotLeft + ((load - minLoad) / (maxLoad - minLoad)) * plotWidth;
    },
    [plotLeft, plotWidth]
  );
  const xToLoad = useCallback(
    (x: number) => {
      const ratio = (x - plotLeft) / plotWidth;
      const load = minLoad + ratio * (maxLoad - minLoad);
      return Math.max(30, Math.min(100, Math.round(load)));
    },
    [plotLeft, plotWidth]
  );

  // Y range: 1.0 to 8.0 USG/h
  const minUsg = 1.0;
  const maxUsg = 8.0;
  const usgToY = useCallback(
    (usg: number) => {
      return plotBottom - ((usg - minUsg) / (maxUsg - minUsg)) * plotHeight;
    },
    [plotBottom, plotHeight]
  );

  const currentUsg = interpolateFuelFlow(selectedLoad);
  const currentLph = currentUsg * 3.78541;
  const currentX = loadToX(selectedLoad);
  const currentY = usgToY(currentUsg);
  const badge = getRegimeBadge(selectedLoad);

  // Path data for the curve
  const pathD = DATA_POINTS.map((pt, i) => {
    const x = loadToX(pt.load);
    const y = usgToY(pt.usg);
    return `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
  }).join(" ");

  // Mouse / Touch interaction handlers
  const handlePointer = (clientX: number) => {
    if (!svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    const scale = 540 / rect.width;
    const svgX = (clientX - rect.left) * scale;
    const newLoad = xToLoad(svgX);
    setSelectedLoad(newLoad);
  };

  const onMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    handlePointer(e.clientX);
    setIsHovering(true);
  };

  const onTouchMove = (e: React.TouchEvent<SVGSVGElement>) => {
    if (e.touches[0]) {
      handlePointer(e.touches[0].clientX);
      setIsHovering(true);
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-between bg-white dark:bg-slate-900 rounded-xl p-2 select-none overflow-hidden">
      {/* HUD Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-1.5 px-1 py-1 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 shrink-0">
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
            % LOAD:
          </span>
          <span className="font-mono font-extrabold text-base text-[#0B2E59] dark:text-sky-300">
            {selectedLoad}%
          </span>
          <span
            className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${badge.color}`}
          >
            {badge.name}
          </span>
        </div>

        <div className="flex items-center gap-3 font-mono text-xs font-bold">
          <div className="flex items-center gap-1 text-blue-700 dark:text-sky-300">
            <span className="text-[10px] text-slate-500 font-sans font-semibold">
              USG/h:
            </span>
            <span className="text-sm">{currentUsg.toFixed(2)}</span>
          </div>
          <div className="flex items-center gap-1 text-emerald-700 dark:text-emerald-400">
            <span className="text-[10px] text-slate-500 font-sans font-semibold">
              L/h:
            </span>
            <span className="text-sm">{currentLph.toFixed(1)}</span>
          </div>
        </div>
      </div>

      {/* SVG Interactive Chart Canvas */}
      <div className="relative w-full flex-1 min-h-0 flex items-center justify-center py-0.5">
        <svg
          ref={svgRef}
          viewBox="0 0 540 450"
          className="w-full h-full max-h-[440px] cursor-crosshair touch-none"
          onMouseMove={onMouseMove}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onTouchMove={onTouchMove}
          onTouchStart={() => setIsHovering(true)}
        >
          {/* Chart Title */}
          <text
            x="250"
            y="24"
            textAnchor="middle"
            className="fill-[#0B2E59] dark:fill-sky-300 text-[16px] font-extrabold tracking-wider"
          >
            FUEL FLOW
          </text>

          {/* Background grid container */}
          <rect
            x={plotLeft}
            y={plotTop}
            width={plotWidth}
            height={plotHeight}
            className="fill-white dark:fill-slate-950 stroke-slate-800 dark:stroke-slate-200 stroke-[2]"
          />

          {/* Vertical Grid Lines (% LOAD: 30, 40, ..., 100) */}
          {[30, 40, 50, 60, 70, 80, 90, 100].map((load) => {
            const x = loadToX(load);
            return (
              <g key={`x_grid_${load}`}>
                {load > 30 && load < 100 && (
                  <line
                    x1={x}
                    y1={plotTop}
                    x2={x}
                    y2={plotBottom}
                    stroke="#94a3b8"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    opacity="0.6"
                  />
                )}
                {/* Tick on X axis */}
                <line
                  x1={x}
                  y1={plotBottom}
                  x2={x}
                  y2={plotBottom + 6}
                  stroke="currentColor"
                  className="stroke-slate-800 dark:stroke-slate-200 stroke-[1.5]"
                />
                {/* Tick label */}
                <text
                  x={x}
                  y={plotBottom + 20}
                  textAnchor="middle"
                  className="fill-slate-700 dark:fill-slate-300 text-[11px] font-bold"
                >
                  {load}
                </text>
              </g>
            );
          })}

          {/* Horizontal Grid Lines (USG/h: 1 to 8) */}
          {[1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8].map(
            (usg) => {
              const y = usgToY(usg);
              const isMajor = Number.isInteger(usg);
              return (
                <g key={`y_grid_${usg}`}>
                  {isMajor && usg > 1 && usg < 8 && (
                    <line
                      x1={plotLeft}
                      y1={y}
                      x2={plotRight}
                      y2={y}
                      stroke="#94a3b8"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                      opacity="0.6"
                    />
                  )}
                  {/* Right Y-Axis USG Ticks */}
                  <line
                    x1={plotRight}
                    y1={y}
                    x2={plotRight + (isMajor ? 8 : 4)}
                    stroke="currentColor"
                    className="stroke-slate-800 dark:stroke-slate-200 stroke-[1.5]"
                  />
                  {isMajor && (
                    <text
                      x={plotRight + 12}
                      y={y + 4}
                      className="fill-slate-800 dark:fill-slate-200 text-[11px] font-bold"
                    >
                      {usg}
                    </text>
                  )}
                </g>
              );
            }
          )}

          {/* Liter/hour scale ticks on far right */}
          {[4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30].map(
            (lph) => {
              const usg = lph / 3.78541;
              if (usg < minUsg || usg > maxUsg) return null;
              const y = usgToY(usg);
              const isMajor = lph % 2 === 0;
              return (
                <g key={`lph_${lph}`}>
                  <line
                    x1={plotRight + 42}
                    y1={y}
                    x2={plotRight + 48}
                    stroke="currentColor"
                    className="stroke-slate-800 dark:stroke-slate-200 stroke-[1]"
                  />
                  {isMajor && (
                    <text
                      x={plotRight + 52}
                      y={y + 3.5}
                      className="fill-slate-700 dark:fill-slate-300 text-[10px] font-semibold"
                    >
                      {lph}
                    </text>
                  )}
                </g>
              );
            }
          )}

          {/* Right vertical axis line for Liters scale */}
          <line
            x1={plotRight + 42}
            y1={plotTop}
            x2={plotRight + 42}
            y2={plotBottom}
            stroke="currentColor"
            className="stroke-slate-800 dark:stroke-slate-200 stroke-[1.5]"
          />

          {/* Axis Titles */}
          <text
            x={plotLeft + plotWidth / 2}
            y={plotBottom + 38}
            textAnchor="middle"
            className="fill-slate-800 dark:fill-slate-200 text-[11px] font-extrabold uppercase tracking-wider"
          >
            LOAD [%] &rarr;
          </text>

          <text
            x={plotRight + 26}
            y={plotTop + plotHeight / 2}
            textAnchor="middle"
            transform={`rotate(-90 ${plotRight + 26} ${plotTop + plotHeight / 2})`}
            className="fill-slate-800 dark:fill-slate-200 text-[9.5px] font-bold tracking-tight"
          >
            FUEL FLOW [US Gal./hour] &rarr;
          </text>

          <text
            x={plotRight + 84}
            y={plotTop + plotHeight / 2}
            textAnchor="middle"
            transform={`rotate(-90 ${plotRight + 84} ${plotTop + plotHeight / 2})`}
            className="fill-slate-800 dark:fill-slate-200 text-[9.5px] font-bold tracking-tight"
          >
            FUEL FLOW [Liter/hour] &rarr;
          </text>

          {/* Example Box Text (as in official AFM) */}
          <g className="text-[10px]">
            <text
              x={plotLeft + 12}
              y={plotTop + 24}
              className="fill-slate-700 dark:fill-slate-300 text-[10px] font-bold"
            >
              AFM EXAMPLE:
            </text>
            <text
              x={plotLeft + 12}
              y={plotTop + 38}
              className="fill-slate-600 dark:fill-slate-400 text-[9.5px]"
            >
              POWERSETTING 60 % LOAD
            </text>
            <text
              x={plotLeft + 12}
              y={plotTop + 54}
              className="fill-slate-700 dark:fill-slate-300 text-[10px] font-bold"
            >
              RESULT:
            </text>
            <text
              x={plotLeft + 12}
              y={plotTop + 68}
              className="fill-slate-600 dark:fill-slate-400 text-[9.5px]"
            >
              FUEL FLOW 4 US Gal. / 15.1 L/h
            </text>
          </g>

          {/* MAIN FUEL FLOW CURVE */}
          <path
            d={pathD}
            fill="none"
            className="stroke-[#0B2E59] dark:stroke-sky-400 stroke-[3.5] stroke-linecap-round"
          />

          {/* INTERACTIVE PROJECTIONS */}
          {/* Vertical projection down to X axis */}
          <line
            x1={currentX}
            y1={plotBottom}
            x2={currentX}
            y2={currentY}
            stroke="#ef4444"
            strokeWidth="2"
            strokeDasharray="4 3"
          />
          {/* Arrow pointing to curve from bottom */}
          <polygon
            points={`${currentX - 4},${plotBottom - 2} ${currentX + 4},${plotBottom - 2} ${currentX},${plotBottom - 8}`}
            fill="#ef4444"
          />

          {/* Horizontal projection across to Y axis */}
          <line
            x1={currentX}
            y1={currentY}
            x2={plotRight}
            y2={currentY}
            stroke="#ef4444"
            strokeWidth="2"
            strokeDasharray="4 3"
          />
          {/* Arrow pointing right to Y axis */}
          <polygon
            points={`${plotRight - 8},${currentY - 4} ${plotRight - 8},${currentY + 4} ${plotRight - 2},${currentY}`}
            fill="#ef4444"
          />

          {/* Target marker on curve */}
          <circle
            cx={currentX}
            y={currentY}
            r="8"
            className="fill-red-500/20 stroke-red-500 stroke-[2] animate-pulse"
          />
          <circle
            cx={currentX}
            y={currentY}
            r="4.5"
            className="fill-red-600 dark:fill-red-400 stroke-white stroke-[1.5]"
          />

          {/* Interactive Tooltip Callout */}
          <g
            transform={`translate(${Math.min(
              plotRight - 150,
              Math.max(plotLeft + 10, currentX - 70)
            )}, ${Math.max(plotTop + 10, currentY - 55)})`}
          >
            <rect
              width="140"
              height="45"
              rx="6"
              className="fill-slate-900/95 dark:fill-slate-950/95 stroke-sky-400 stroke-[1] shadow-lg"
            />
            <text
              x="70"
              y="16"
              textAnchor="middle"
              className="fill-sky-300 text-[10px] font-bold"
            >
              {selectedLoad}% LOAD
            </text>
            <text
              x="70"
              y="34"
              textAnchor="middle"
              className="fill-white text-[11px] font-mono font-bold"
            >
              {currentUsg.toFixed(2)} USG &bull; {currentLph.toFixed(1)} L/h
            </text>
          </g>
        </svg>
      </div>

      {/* Quick Select Preset Buttons & Interactive Hint */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-1.5 pt-1 border-t border-slate-200 dark:border-slate-800 shrink-0">
        <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium flex items-center gap-1">
          <span>👆</span> Mueve el cursor o selecciona un régimen estándar:
        </span>
        <div className="flex items-center gap-1">
          {[
            { label: "60% Eco", load: 60 },
            { label: "70% Norm", load: 70 },
            { label: "80% Ráp", load: 80 },
            { label: "100% Desp", load: 100 },
          ].map((preset) => (
            <button
              key={preset.load}
              type="button"
              onClick={() => setSelectedLoad(preset.load)}
              className={`px-2 py-0.5 rounded text-[11px] font-bold transition-colors ${
                selectedLoad === preset.load
                  ? "bg-[#0B2E59] text-white dark:bg-sky-500 dark:text-slate-950 shadow-xs"
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
