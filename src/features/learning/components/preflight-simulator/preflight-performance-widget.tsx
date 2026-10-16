"use client";

import React, { useState } from "react";
import { checkValueTolerance } from "./constants";

export interface PerformanceScenario {
  id: string;
  icao: string;
  name: string;
  shortName: string;
  runway: string;
  elevationDesc: string;
  pressAltFt: number;
  oatC: number;
  windKt: number;
  windDesc: string;
  surfaceDesc: string;
  runwayToraM: number;
  runwayTodaM: number;
  runwayAsdaM: number;
  runwayLdaM: number;
  declaredDistancesNote: string;
  baseToRun: number;
  baseTo50: number;
  baseLd50: number;
  toRun: number;
  to50ft: number;
  ld50ft: number;
  tip: string;
}

export const CANARY_PERFORMANCE_SCENARIOS: PerformanceScenario[] = [
  {
    id: "gcxo",
    icao: "GCXO",
    name: "GCXO · Tenerife Norte (Los Rodeos)",
    shortName: "GCXO · Los Rodeos",
    runway: "RWY 12",
    elevationDesc: "Elevación 2.077 ft · Alt. Presión: 2.000 ft",
    pressAltFt: 2000,
    oatC: 20,
    windKt: 9,
    windDesc: "9 kt en cara (-10% a todas las distancias)",
    surfaceDesc: "Asfalto seco nivelado (sin penalización)",
    runwayToraM: 3171,
    runwayTodaM: 3364, // AIP AD 2-GCXO.13: CWY 193 m
    runwayAsdaM: 3171,
    runwayLdaM: 3171,
    declaredDistancesNote: "AIP AD 2-GCXO: RWY 12 dispone de CWY de 193 m (TODA = 3.364 m ≠ TORA 3.171 m). En RWY 30 TODA = 3.171 m.",
    baseToRun: 234,
    baseTo50: 366,
    baseLd50: 407, // 1335 ft / 3.28084
    toRun: 211,    // 234 * 0.90
    to50ft: 329,   // 366 * 0.90
    ld50ft: 366,   // 407 * 0.90
    tip: "Los Rodeos (2.000 ft): La altitud reduce la densidad del aire; requiere 329 m sobre 50 ft (+42 m frente a nivel del mar).",
  },
  {
    id: "gcts",
    icao: "GCTS",
    name: "GCTS · Tenerife Sur (Reina Sofía)",
    shortName: "GCTS · Tenerife Sur",
    runway: "RWY 07",
    elevationDesc: "Elevación 209 ft · Alt. Presión: 0 ft (S.L.)",
    pressAltFt: 0,
    oatC: 20,
    windKt: 9,
    windDesc: "9 kt en cara (-10% a todas las distancias)",
    surfaceDesc: "Asfalto seco nivelado (sin penalización)",
    runwayToraM: 3200,
    runwayTodaM: 3260, // AIP AD 2-GCTS.13: CWY 60 m
    runwayAsdaM: 3200,
    runwayLdaM: 3200,
    declaredDistancesNote: "AIP AD 2-GCTS: RWY 07/25 cuenta con CWY de 60 m (TODA = 3.260 m ≠ TORA 3.200 m).",
    baseToRun: 204,
    baseTo50: 319,
    baseLd50: 386, // 1265 ft / 3.28084
    toRun: 184,    // 204 * 0.90
    to50ft: 287,   // 319 * 0.90
    ld50ft: 347,   // 386 * 0.90
    tip: "Reina Sofía (Nivel del mar / 0 ft): Aire denso con óptima performance; solo 287 m sobre 50 ft.",
  },
  {
    id: "gcgm",
    icao: "GCGM",
    name: "GCGM · La Gomera",
    shortName: "GCGM · La Gomera",
    runway: "RWY 09",
    elevationDesc: "Elevación 715 ft · Alt. Presión: 1.000 ft",
    pressAltFt: 1000,
    oatC: 20,
    windKt: 9,
    windDesc: "9 kt en cara (-10% a todas las distancias)",
    surfaceDesc: "Asfalto seco nivelado",
    runwayToraM: 1500,
    runwayTodaM: 1560, // AIP AD 2-GCGM.13: CWY 60 m
    runwayAsdaM: 1500,
    runwayLdaM: 1500,
    declaredDistancesNote: "AIP AD 2-GCGM: RWY 09/27 cuenta con CWY de 60 m (TODA = 1.560 m ≠ TORA 1.500 m). Despegue por INT A: TORA 400 m (RWY 09) / 1.100 m (RWY 27).",
    baseToRun: 218,
    baseTo50: 342,
    baseLd50: 396, // 1300 ft / 3.28084
    toRun: 196,    // 218 * 0.90
    to50ft: 308,   // 342 * 0.90
    ld50ft: 356,   // 396 * 0.90
    tip: "La Gomera (1.000 ft): Pista de 1.500 m. Verificación clave de márgenes sobre terreno insular.",
  },
];

type Props = {
  onExerciseCompleted?: () => void;
  isAlreadyCompleted?: boolean;
};

export function PreflightPerformanceWidget({
  onExerciseCompleted,
  isAlreadyCompleted = false,
}: Props) {
  const [selectedScenarioIndex, setSelectedScenarioIndex] = useState(0); // 0 = GCXO, 1 = GCTS, 2 = GCGM
  const scenario = CANARY_PERFORMANCE_SCENARIOS[selectedScenarioIndex];

  const [passedScenarios, setPassedScenarios] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = isAlreadyCompleted
      ? { gcxo: true, gcts: true, gcgm: true }
      : {};
    return initial;
  });

  const isCurrentScenarioPassed = Boolean(passedScenarios[scenario.id]);

  // User input states (in meters)
  const [takeoffRunInput, setTakeoffRunInput] = useState("");
  const [takeoff50ftInput, setTakeoff50ftInput] = useState("");
  const [landing50ftInput, setLanding50ftInput] = useState("");

  // Feedback states
  const [attempts, setAttempts] = useState(0);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [warnings, setWarnings] = useState<string[]>([]);
  const [isPassed, setIsPassed] = useState(isAlreadyCompleted);

  const handleValidate = () => {
    const newErrors: Record<string, string> = {};
    const newWarnings: string[] = [];
    const num = (v: string) => parseFloat(v.replace(",", "."));

    // Check Takeoff Run
    const userToRun = num(takeoffRunInput);
    if (isNaN(userToRun) || !checkValueTolerance(userToRun, scenario.toRun, 0.06, 8).isOk) {
      newErrors.takeoffRun =
        attempts >= 2
          ? `Solución ${scenario.icao}: Carrera de despegue corregida = ${scenario.toRun} m (Base ${scenario.baseToRun} m - 10% por 9 kt de cara).`
          : `Aplica la corrección sobre la carrera base de la tabla Fig. 5-1a (${scenario.baseToRun} m): ${scenario.windDesc}.`;
    } else if (Math.abs(userToRun - scenario.toRun) > 2) {
      newWarnings.push(`Carrera de despegue: Tu valor (${userToRun} m) tiene un leve desvío por redondeo, pero es válido.`);
    }

    // Check Takeoff 50 ft
    const userTo50 = num(takeoff50ftInput);
    if (isNaN(userTo50) || !checkValueTolerance(userTo50, scenario.to50ft, 0.06, 10).isOk) {
      newErrors.takeoff50ft =
        attempts >= 2
          ? `Solución ${scenario.icao}: Distancia despegue a 50 ft = ${scenario.to50ft} m (Base ${scenario.baseTo50} m - 10% por viento).`
          : `Aplica la corrección a la distancia sobre obstáculo de 50 ft (${scenario.baseTo50} m): ${scenario.windDesc}.`;
    }

    // Check Landing 50 ft
    const userLd50 = num(landing50ftInput);
    if (isNaN(userLd50) || !checkValueTolerance(userLd50, scenario.ld50ft, 0.06, 10).isOk) {
      if (!isNaN(userLd50) && (Math.abs(userLd50 - 513) <= 15 || Math.abs(userLd50 - 570) <= 15)) {
        newErrors.landing50ft = `Has tomado 570 ft (o 513 ft), que es la carrera en suelo (GRND ROLL) y además está en PIES. La casilla pide la distancia total sobre obstáculo de 50 ft (columna 'TOTAL 50 FT OBS' = 1335 ft) y convertida a METROS: 1335 ft ÷ 3.28084 = 407 m. Aplicando -10% de viento = 366 m.`;
      } else if (!isNaN(userLd50) && (Math.abs(userLd50 - 1201) <= 25 || Math.abs(userLd50 - 1335) <= 25)) {
        newErrors.landing50ft = `¡Casi! Has usado la distancia a 50 ft (1335 ft), pero la tabla Fig. 5-10 viene en PIES. Debes convertirla a METROS [m]: 1335 ft ÷ 3.28084 = 407 m base; con -10% de viento = 366 m.`;
      } else if (!isNaN(userLd50) && userLd50 > 900) {
        newErrors.landing50ft = `¡Cuidado con las unidades! Has introducido un valor en pies (> 900 ft). El formulario F.OPS.02 requiere la distancia en METROS [m] (divide los pies de la tabla entre 3.28084).`;
      } else {
        newErrors.landing50ft =
          attempts >= 2
            ? `Solución ${scenario.icao}: Distancia de toma sobre 50 ft = ${scenario.ld50ft} m. En tabla Fig. 5-10: columna 'TOTAL 50 FT OBS' = 1335 ft ÷ 3.28 = ${scenario.baseLd50} m; con -10% viento = ${scenario.ld50ft} m.`
            : `Fíjate en la columna 'TOTAL 50 FT OBS' (no en 'GRND ROLL') y convierte los pies a metros (÷ 3.28): ${scenario.baseLd50} m con ${scenario.windDesc}.`;
      }
    }

    setErrors(newErrors);
    setWarnings(newWarnings);

    if (Object.keys(newErrors).length === 0) {
      setPassedScenarios((prev) => ({ ...prev, [scenario.id]: true }));
      setIsPassed(true);
      if (onExerciseCompleted) {
        onExerciseCompleted();
      }
    } else {
      setAttempts((prev) => prev + 1);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
      {/* Columna Izquierda (lg:col-span-7): Formulario F.OPS.02 Distances (Altura Fija 590px) */}
      <div className="lg:col-span-7 flex flex-col">
        <div
          className="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs"
          style={{ height: "590px" }}
        >
          {/* Header & Airport Selector */}
          <div className="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
            <div>
              <span className="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">
                🏁 RELLENO OFICIAL F.OPS.02 · DISTANCES
              </span>
              <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
                {scenario.name} · {scenario.elevationDesc} · OAT {scenario.oatC}°C
              </div>
            </div>
            <div className="flex items-center gap-1 shrink-0">
              {CANARY_PERFORMANCE_SCENARIOS.map((sc, idx) => (
                <button
                  key={sc.id}
                  type="button"
                  onClick={() => {
                    setSelectedScenarioIndex(idx);
                    setTakeoffRunInput("");
                    setTakeoff50ftInput("");
                    setLanding50ftInput("");
                    setAttempts(0);
                    setErrors({});
                    setWarnings([]);
                  }}
                  className={`px-2 py-0.5 rounded-lg text-[10px] font-extrabold transition-all cursor-pointer ${
                    selectedScenarioIndex === idx
                      ? "bg-[#1a80ff] text-white shadow-2xs"
                      : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700"
                  }`}
                  title={sc.name}
                >
                  {sc.icao}
                </button>
              ))}
            </div>
          </div>

          {/* Form Content */}
          <div className="flex-1 min-h-0 overflow-y-auto my-1 space-y-2">
            <div className="p-2 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5">
              <span className="text-[10.5px] font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wide block">
                Condiciones Operacionales en {scenario.icao} ({scenario.runway})
              </span>
              <div className="grid grid-cols-2 gap-2 text-[10.5px] text-slate-600 dark:text-slate-300">
                <div className="p-1.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <strong>Viento en Pista:</strong> {scenario.windDesc}
                </div>
                <div className="p-1.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <strong>Superficie Pista:</strong> {scenario.surfaceDesc}
                </div>
              </div>
              <div className="p-1.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[10.5px]">
                <div className="flex flex-wrap items-center justify-between gap-1 text-[10.5px]">
                  <span className="font-bold text-[#0B2E59] dark:text-sky-300">Distancias Declaradas AIP ({scenario.runway}):</span>
                  <span className="font-mono text-slate-700 dark:text-slate-200">
                    TORA: <strong>{scenario.runwayToraM} m</strong> · TODA: <strong className="text-blue-600 dark:text-sky-400">{scenario.runwayTodaM} m</strong> · ASDA: <strong>{scenario.runwayAsdaM} m</strong> · LDA: <strong className="text-emerald-600 dark:text-emerald-400">{scenario.runwayLdaM} m</strong>
                  </span>
                </div>
                <div className="text-[9.5px] text-slate-500 dark:text-slate-400 mt-0.5 leading-tight">
                  ℹ️ {scenario.declaredDistancesNote}
                </div>
              </div>
            </div>

            {/* Direct Links to POH Tables */}
            <div className="flex flex-wrap items-center justify-between gap-1.5 p-2 rounded-xl bg-sky-50/70 dark:bg-slate-800/90 border border-sky-200 dark:border-slate-700 shadow-2xs">
              <span className="text-xs font-bold text-[#0B2E59] dark:text-sky-300 flex items-center gap-1">
                <span>📖</span>
                <span>TABLAS POH NECESARIAS:</span>
              </span>
              <div className="flex items-center gap-1.5">
                <a
                  href="/images/c172/takeoff-performance-tables.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 font-bold text-xs text-blue-600 dark:text-sky-300 hover:bg-blue-50 dark:hover:bg-slate-600 transition-all shadow-2xs"
                  title="Abrir Tabla 5-1a Despegue en PDF"
                >
                  <span>🛫 Tabla Despegue (Fig. 5-1a)</span>
                  <span>↗</span>
                </a>
                <a
                  href="/images/c172/landing_distance_table.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 font-bold text-xs text-emerald-700 dark:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-slate-600 transition-all shadow-2xs"
                  title="Abrir Tabla 5-10 Aterrizaje Short Field en PDF"
                >
                  <span>🛬 Tabla Aterrizaje (Fig. 5-10)</span>
                  <span>↗</span>
                </a>
              </div>
            </div>

            <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/80 shadow-2xs">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-700 text-[10.5px] font-extrabold uppercase text-[#0B2E59] dark:text-sky-300 bg-slate-100/70 dark:bg-slate-800/60">
                    <th className="py-1.5 px-2">DISTANCES F.OPS.02</th>
                    <th className="py-1.5 px-2 text-center text-slate-500 dark:text-slate-400">AVAILABLE ({scenario.icao})</th>
                    <th className="py-1.5 px-2 text-right">CALCULATED [m]</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {/* Take-off run */}
                  <tr>
                    <td className="py-2 px-2 font-medium">
                      Take-off run
                      <div className="text-[10px] text-slate-500 dark:text-slate-400 flex items-center gap-1">
                        <span>Carrera en suelo (Fig. 5-1a)</span>
                        <span>·</span>
                        <a href="/images/c172/takeoff-performance-tables.pdf" target="_blank" rel="noopener noreferrer" className="text-sky-600 dark:text-sky-400 font-semibold hover:underline">Ver Tabla 5-1a ↗</a>
                      </div>
                    </td>
                    <td className="py-2 px-2 text-center font-mono font-bold text-slate-600 dark:text-slate-300 text-xs">
                      TORA: {scenario.runwayToraM} m
                    </td>
                    <td className="py-2 px-2 text-right">
                      <input
                        type="text"
                        placeholder="Metros [m]"
                        value={takeoffRunInput}
                        onChange={(e) => setTakeoffRunInput(e.target.value)}
                        className={`w-24 text-right px-2 py-1 rounded-lg border font-mono text-xs ${
                          errors.takeoffRun
                            ? "border-rose-500 bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-200"
                            : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900"
                        }`}
                      />
                    </td>
                  </tr>

                  {/* Take-off distance (50 ft) */}
                  <tr className="bg-sky-50/50 dark:bg-sky-950/30">
                    <td className="py-2 px-2 font-bold text-[#0B2E59] dark:text-sky-300">
                      Take-off distance (50 ft)
                      <div className="text-[10px] font-normal text-slate-500 dark:text-slate-400 flex items-center gap-1">
                        <span>Obstáculo 15 m (Fig. 5-1a)</span>
                        <span>·</span>
                        <a href="/images/c172/takeoff-performance-tables.pdf" target="_blank" rel="noopener noreferrer" className="text-sky-600 dark:text-sky-400 font-semibold hover:underline">Ver Tabla 5-1a ↗</a>
                      </div>
                    </td>
                    <td className="py-2 px-2 text-center font-mono font-bold text-slate-600 dark:text-slate-300 text-xs">
                      TODA: {scenario.runwayTodaM} m
                    </td>
                    <td className="py-2 px-2 text-right">
                      <input
                        type="text"
                        placeholder="Metros [m]"
                        value={takeoff50ftInput}
                        onChange={(e) => setTakeoff50ftInput(e.target.value)}
                        className={`w-24 text-right px-2 py-1 rounded-lg border font-mono text-xs font-bold ${
                          errors.takeoff50ft
                            ? "border-rose-500 bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-200"
                            : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sky-700 dark:text-sky-300"
                        }`}
                      />
                    </td>
                  </tr>

                  {/* Landing distance (50 ft) */}
                  <tr className="bg-emerald-50/50 dark:bg-emerald-950/30">
                    <td className="py-2 px-2 font-bold text-emerald-950 dark:text-emerald-300">
                      Landing distance (50 ft)
                      <div className="text-[10px] font-normal text-slate-500 dark:text-slate-400 flex flex-wrap items-center gap-1">
                        <span>Columna &apos;TOTAL 50 FT OBS&apos; (Fig. 5-10 · ft &divide; 3.28)</span>
                        <span>·</span>
                        <a href="/images/c172/landing_distance_table.pdf" target="_blank" rel="noopener noreferrer" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">Ver Tabla 5-10 ↗</a>
                      </div>
                    </td>
                    <td className="py-2 px-2 text-center font-mono font-bold text-slate-600 dark:text-slate-300 text-xs">
                      LDA: {scenario.runwayLdaM} m
                    </td>
                    <td className="py-2 px-2 text-right">
                      <input
                        type="text"
                        placeholder="Metros [m]"
                        value={landing50ftInput}
                        onChange={(e) => setLanding50ftInput(e.target.value)}
                        className={`w-24 text-right px-2 py-1 rounded-lg border font-mono text-xs font-bold ${
                          errors.landing50ft
                            ? "border-rose-500 bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-200"
                            : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-emerald-700 dark:text-emerald-300"
                        }`}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Error notifications */}
            {(errors.takeoffRun || errors.takeoff50ft || errors.landing50ft) && (
              <div className="p-2 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-[10.5px] text-rose-900 dark:text-rose-200 space-y-0.5">
                {errors.takeoffRun && <div>⚠️ {errors.takeoffRun}</div>}
                {errors.takeoff50ft && <div>⚠️ {errors.takeoff50ft}</div>}
                {errors.landing50ft && <div>⚠️ {errors.landing50ft}</div>}
              </div>
            )}
          </div>

          {/* Validation & Status Button */}
          <div className="pt-1.5 border-t border-slate-200 dark:border-slate-800 shrink-0 space-y-1.5">
            <div className="flex items-center justify-between gap-2">
              <span className="text-[10px] text-slate-500 dark:text-slate-400">
                Pistas: GCXO (3.171 m) · GCTS (3.200 m) · GCGM (1.500 m)
              </span>
              <button
                type="button"
                onClick={handleValidate}
                className="px-4 py-1.5 rounded-xl bg-[#0B2E59] hover:bg-[#1a4a80] text-white text-xs font-bold transition-all shadow-xs cursor-pointer flex items-center gap-1.5"
              >
                <span>Validar Performance {scenario.icao}</span>
                <span>→</span>
              </button>
            </div>

            {warnings.length > 0 && (
              <div className="p-1.5 rounded-lg border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30 text-amber-900 dark:text-amber-200 text-[10px]">
                {warnings.map((w, idx) => (
                  <div key={idx}>ℹ️ {w}</div>
                ))}
              </div>
            )}

            {isPassed && (
              <div className="p-2 rounded-lg border border-emerald-300 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 text-xs">
                <strong className="font-bold">✓ ¡DISTANCIAS OPERATIVAS VALIDADAS EN {scenario.icao}!</strong>
                <p className="text-[10px] mt-0.5">
                  Despegue 50 ft: {scenario.to50ft} m &lt; TORA ({scenario.runwayToraM} m) · Aterrizaje 50 ft: {scenario.ld50ft} m &lt; LDA ({scenario.runwayLdaM} m).
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Columna Derecha (lg:col-span-5): Verificación contra Pista Disponible (Altura Fija 590px) */}
      <div className="lg:col-span-5 flex flex-col">
        <div
          className="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs"
          style={{ height: "590px" }}
        >
          <div className="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
            <div>
              <span className="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm block">
                📏 MÁRGENES TORA / TODA / LDA EN {scenario.icao}
              </span>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
                {scenario.name} · {scenario.runway}
              </span>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-sky-300 shrink-0">
              POH C172
            </span>
          </div>

          <div className="flex-1 min-h-0 overflow-y-auto my-1 space-y-2.5 text-xs">
            {!isCurrentScenarioPassed ? (
              /* Estado Pendiente: Guía Metodológica sin revelar resultados */
              <div className="h-full flex flex-col justify-center items-center p-3 text-center space-y-3">
                <div className="w-14 h-14 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 flex items-center justify-center text-2xl shadow-xs">
                  📐
                </div>
                <div className="space-y-1 max-w-sm">
                  <h4 className="text-sm font-bold text-[#0B2E59] dark:text-sky-300">
                    Comprobación Gráfica de Distancias Declaradas (TORA / TODA / LDA)
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-snug">
                    Calcula e introduce las distancias de despegue y toma en el formulario F.OPS.02 de la izquierda. Al pulsar <strong>&quot;Validar Performance {scenario.icao}&quot;</strong> se desbloqueará la representación gráfica a escala de pista y los márgenes de seguridad.
                  </p>
                </div>

                <div className="w-full text-left p-3 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-2 shadow-2xs text-xs">
                  <strong className="text-[#0B2E59] dark:text-sky-300 block uppercase font-bold text-xs">
                    Instrucciones para {scenario.icao} ({scenario.runway}):
                  </strong>
                  <ul className="list-disc pl-4 space-y-1.5 text-slate-700 dark:text-slate-300 text-xs sm:text-[13px]">
                    <li>
                      <strong>Elevación:</strong> {scenario.elevationDesc}.
                    </li>
                    <li>
                      <strong>Despegue (POH Fig. 5-1a):</strong> Anota la carrera en suelo y la distancia sobre 50 ft aplicando {scenario.windDesc}.
                    </li>
                    <li>
                      <strong>Aterrizaje (POH Fig. 5-10):</strong> Busca la columna <em>TOTAL 50 FT OBS</em>, convierte los pies a metros (&divide; 3.28084) y aplica {scenario.windDesc}.
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              /* Estado Desbloqueado: Representación Gráfica y Comparativa */
              <>
                <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 text-xs sm:text-[13px] flex items-center gap-2">
                  <span className="text-base font-bold text-emerald-600">✓</span>
                  <span><strong>¡Comprobación superada!</strong> Márgenes verificados en {scenario.icao} ({scenario.runway}).</span>
                </div>

                {/* Takeoff Comparison Bar */}
                <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-1.5 shadow-2xs">
                  <div className="flex justify-between items-center text-xs font-bold">
                    <span className="text-[#0B2E59] dark:text-sky-300">Despegue 50 ft vs TODA ({scenario.icao} {scenario.runway})</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-mono">
                      Margen: +{scenario.runwayTodaM - scenario.to50ft} m
                    </span>
                  </div>

                  {/* Badges row */}
                  <div className="flex items-center justify-between text-xs py-0.5">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-sky-300 font-bold">
                      <span>Requerido (50 ft):</span>
                      <span className="font-mono">{scenario.to50ft} m</span>
                      <span className="text-[10px] font-normal text-blue-500">({Math.round((scenario.to50ft / scenario.runwayTodaM) * 100)}% TODA)</span>
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 font-bold">
                      <span>Libre:</span>
                      <span className="font-mono">+{scenario.runwayTodaM - scenario.to50ft} m</span>
                    </span>
                  </div>

                  {/* Visual Runway Bar (no cramped text inside) */}
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden h-3 flex">
                    <div
                      style={{ width: `${Math.max(4, Math.min(100, (scenario.to50ft / scenario.runwayTodaM) * 100))}%` }}
                      className="bg-blue-500 h-full rounded-l-full"
                      title={`Requerido: ${scenario.to50ft} m`}
                    />
                    <div
                      className="flex-1 bg-emerald-500/80 h-full rounded-r-full"
                      title={`Remanente: +${scenario.runwayTodaM - scenario.to50ft} m`}
                    />
                  </div>

                  <div className="flex justify-between text-[11px] text-slate-500 dark:text-slate-400 pt-0.5">
                    <span>0 m</span>
                    <span className="font-medium text-slate-600 dark:text-slate-300">
                      TORA: {scenario.runwayToraM} m · TODA (c/ Clearway): {scenario.runwayTodaM} m
                    </span>
                  </div>
                </div>

                {/* Landing Comparison Bar */}
                <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-1.5 shadow-2xs">
                  <div className="flex justify-between items-center text-xs font-bold">
                    <span className="text-[#0B2E59] dark:text-sky-300">Aterrizaje 50 ft vs LDA ({scenario.icao})</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-mono">
                      Margen: +{scenario.runwayLdaM - scenario.ld50ft} m
                    </span>
                  </div>

                  {/* Badges row */}
                  <div className="flex items-center justify-between text-xs py-0.5">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 font-bold">
                      <span>Requerido:</span>
                      <span className="font-mono">{scenario.ld50ft} m</span>
                      <span className="text-[10px] font-normal text-emerald-600">({Math.round((scenario.ld50ft / scenario.runwayLdaM) * 100)}% pista)</span>
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 font-bold">
                      <span>Libre:</span>
                      <span className="font-mono">+{scenario.runwayLdaM - scenario.ld50ft} m</span>
                    </span>
                  </div>

                  {/* Visual Runway Bar (no cramped text inside) */}
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden h-3 flex">
                    <div
                      style={{ width: `${Math.max(4, Math.min(100, (scenario.ld50ft / scenario.runwayLdaM) * 100))}%` }}
                      className="bg-emerald-600 h-full rounded-l-full"
                      title={`Requerido: ${scenario.ld50ft} m`}
                    />
                    <div
                      className="flex-1 bg-emerald-400/60 h-full rounded-r-full"
                      title={`Remanente: +${scenario.runwayLdaM - scenario.ld50ft} m`}
                    />
                  </div>

                  <div className="flex justify-between text-[11px] text-slate-500 dark:text-slate-400 pt-0.5">
                    <span>0 m</span>
                    <span className="font-medium text-slate-600 dark:text-slate-300">Pista Disponible (LDA): {scenario.runwayLdaM} m</span>
                  </div>
                </div>

                {/* Comparison of the 3 Canary Airports */}
                <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-2 shadow-2xs">
                  <strong className="text-[#0B2E59] dark:text-sky-300 block uppercase font-bold text-xs sm:text-[13px]">
                    Comparativa de Performance Insular (a 20°C):
                  </strong>
                  <div className="space-y-1.5 text-xs sm:text-[13px]">
                    <div className={`p-2 rounded-xl flex justify-between items-center transition-all ${scenario.icao === "GCTS" ? "bg-sky-50 dark:bg-sky-950/50 font-bold border-2 border-sky-300 dark:border-sky-700 shadow-2xs" : "bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"}`}>
                      <span className="font-semibold text-slate-800 dark:text-slate-100">🏖️ GCTS (0 ft · S.L.):</span>
                      <span className="font-mono text-slate-700 dark:text-slate-200">Despegue 50 ft: <strong className="text-blue-600 dark:text-sky-400">287 m</strong> · Toma: <strong className="text-emerald-600 dark:text-emerald-400">347 m</strong></span>
                    </div>
                    <div className={`p-2 rounded-xl flex justify-between items-center transition-all ${scenario.icao === "GCGM" ? "bg-sky-50 dark:bg-sky-950/50 font-bold border-2 border-sky-300 dark:border-sky-700 shadow-2xs" : "bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"}`}>
                      <span className="font-semibold text-slate-800 dark:text-slate-100">⛰️ GCGM (1.000 ft):</span>
                      <span className="font-mono text-slate-700 dark:text-slate-200">Despegue 50 ft: <strong className="text-blue-600 dark:text-sky-400">308 m</strong> · Toma: <strong className="text-emerald-600 dark:text-emerald-400">356 m</strong></span>
                    </div>
                    <div className={`p-2 rounded-xl flex justify-between items-center transition-all ${scenario.icao === "GCXO" ? "bg-sky-50 dark:bg-sky-950/50 font-bold border-2 border-sky-300 dark:border-sky-700 shadow-2xs" : "bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"}`}>
                      <span className="font-semibold text-slate-800 dark:text-slate-100">🌋 GCXO (2.000 ft):</span>
                      <span className="font-mono text-slate-700 dark:text-slate-200">Despegue 50 ft: <strong className="text-blue-600 dark:text-sky-400">329 m</strong> · Toma: <strong className="text-emerald-600 dark:text-emerald-400">366 m</strong></span>
                    </div>
                  </div>
                </div>

                {/* Note */}
                <div className="p-2.5 rounded-xl bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800 text-xs sm:text-[13px] text-sky-900 dark:text-sky-200 leading-snug">
                  💡 <strong>Regla Operacional:</strong> {scenario.tip}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
