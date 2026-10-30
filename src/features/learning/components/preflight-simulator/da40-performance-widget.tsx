"use client";

import React, { useState } from "react";
import { DA40_PERFORMANCE_SCENARIOS, checkValueTolerance } from "./da40-constants";


type Props = {
  mode?: "all" | "takeoff" | "landing";
  onExerciseCompleted?: () => void;
  isAlreadyCompleted?: boolean;
};

type PerfInputs = {
  takeoffRun: string;
  takeoff50ft: string;
  landing50ft: string;
};

// Initial state: GCXO (index 0) is fully prefilled as the official solved model example
const INITIAL_PERF_INPUTS: Record<number, PerfInputs> = {
  0: {
    takeoffRun: "211",
    takeoff50ft: "329",
    landing50ft: "366",
  },
  1: { takeoffRun: "", takeoff50ft: "", landing50ft: "" },
  2: { takeoffRun: "", takeoff50ft: "", landing50ft: "" },
};

export function DA40PerformanceWidget({
  mode = "all",
  onExerciseCompleted,
  isAlreadyCompleted = false,
}: Props) {
  const [selectedScenarioIndex, setSelectedScenarioIndex] = useState(0); // Starts on GCXO (Solved Example)
  const scenario = DA40_PERFORMANCE_SCENARIOS[selectedScenarioIndex];

  // If in "all" mode, activeTab controls which sub-step is visible
  const [activeTab, setActiveTab] = useState<"takeoff" | "landing">(
    mode === "landing" ? "landing" : "takeoff"
  );
  const currentStep = mode === "all" ? activeTab : mode;

  // Per-scenario input persistence
  const [scenarioInputs, setScenarioInputs] = useState<Record<number, PerfInputs>>(INITIAL_PERF_INPUTS);

  // Per-scenario solved states
  const [solvedTakeoff, setSolvedTakeoff] = useState<Record<number, boolean>>({});
  const [solvedLanding, setSolvedLanding] = useState<Record<number, boolean>>({});

  const currentInputs = scenarioInputs[selectedScenarioIndex] || {
    takeoffRun: "",
    takeoff50ft: "",
    landing50ft: "",
  };

  const updateCurrentInput = (field: keyof PerfInputs, value: string) => {
    setScenarioInputs((prev) => ({
      ...prev,
      [selectedScenarioIndex]: {
        ...(prev[selectedScenarioIndex] || {
          takeoffRun: "",
          takeoff50ft: "",
          landing50ft: "",
        }),
        [field]: value,
      },
    }));
  };

  const isCurrentStepPassed =
    selectedScenarioIndex === 0 ||
    (currentStep === "takeoff"
      ? Boolean(solvedTakeoff[selectedScenarioIndex])
      : Boolean(solvedLanding[selectedScenarioIndex]));

  // Feedback states
  const [attempts, setAttempts] = useState(0);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [warnings, setWarnings] = useState<string[]>([]);
  const [isChartModalOpen, setIsChartModalOpen] = useState(false);

  const chartSrc =
    currentStep === "takeoff"
      ? "/images/da40/da40-takeoff-50ft.png"
      : "/images/da40/da40-landing-distance.png";
  const chartTitle =
    currentStep === "takeoff"
      ? "Takeoff Distance 50ft (AFM Fig. 5.3.5) - Diamond DA40 TDI"
      : "Landing Distance (AFM Fig. 5.3.11) - Diamond DA40 TDI";

  const solvedTakeoffCount = (solvedTakeoff[1] ? 1 : 0) + (solvedTakeoff[2] ? 1 : 0);
  const solvedLandingCount = (solvedLanding[1] ? 1 : 0) + (solvedLanding[2] ? 1 : 0);

  const switchScenario = (idx: number) => {
    setSelectedScenarioIndex(idx);
    setAttempts(0);
    setErrors({});
    setWarnings([]);
  };

  const handleValidate = () => {
    // If student is on GCXO (Example), validate is not needed; guide to GCTS
    if (selectedScenarioIndex === 0) {
      switchScenario(1);
      return;
    }

    const newErrors: Record<string, string> = {};
    const newWarnings: string[] = [];
    const num = (v: string) => parseFloat(v.replace(",", "."));

    if (currentStep === "takeoff") {
      // Check Takeoff Run
      const userToRun = num(currentInputs.takeoffRun);
      if (isNaN(userToRun) || !checkValueTolerance(userToRun, scenario.toRun, 0.06, 8).isOk) {
        newErrors.takeoffRun =
          attempts >= 1
            ? `Solución ${scenario.icao}: Carrera despegue = ${scenario.toRun} m (Base ${scenario.baseToRun} m - 10% por 9 kt viento).`
            : `Aplica -6% de viento sobre la carrera base (${scenario.baseToRun} m) de la tabla Fig. 5-1a.`;
      } else if (Math.abs(userToRun - scenario.toRun) > 2) {
        newWarnings.push(`Carrera de despegue: Tu valor (${userToRun} m) tiene un leve desvío por redondeo, pero es válido.`);
      }

      // Check Takeoff 50 ft
      const userTo50 = num(currentInputs.takeoff50ft);
      if (isNaN(userTo50) || !checkValueTolerance(userTo50, scenario.to50ft, 0.06, 10).isOk) {
        newErrors.takeoff50ft =
          attempts >= 1
            ? `Solución ${scenario.icao}: Distancia despegue a 50 ft = ${scenario.to50ft} m (Base ${scenario.baseTo50} m - 10% viento).`
            : `Aplica -6% sobre la distancia de obstáculo 50 ft (${scenario.baseTo50} m) de la Fig. 5-1a.`;
      }

      setErrors(newErrors);
      setWarnings(newWarnings);

      if (Object.keys(newErrors).length === 0) {
        const nextSolved = { ...solvedTakeoff, [selectedScenarioIndex]: true };
        setSolvedTakeoff(nextSolved);

        const isTakeoffDone = nextSolved[1] && nextSolved[2];
        const isLandingDone = solvedLanding[1] && solvedLanding[2];

        if (mode === "takeoff" && isTakeoffDone) {
          if (onExerciseCompleted) onExerciseCompleted();
        } else if (mode === "all" && isTakeoffDone && isLandingDone) {
          if (onExerciseCompleted) onExerciseCompleted();
        }
      } else {
        setAttempts((prev) => prev + 1);
      }
    } else {
      // LANDING STEP
      const userLd50 = num(currentInputs.landing50ft);
      if (isNaN(userLd50) || !checkValueTolerance(userLd50, scenario.ld50ft, 0.06, 10).isOk) {
        if (!isNaN(userLd50) && (Math.abs(userLd50 - 513) <= 15 || Math.abs(userLd50 - 570) <= 15)) {
          newErrors.landing50ft = `Has tomado 570 ft (o 513 ft), que es carrera en suelo y en PIES. La casilla pide distancia sobre obstáculo de 50 ft ('TOTAL 50 FT OBS' = 1335 ft) en METROS: divide entre 3.28084 y resta 10% por viento.`;
        } else if (!isNaN(userLd50) && (Math.abs(userLd50 - 1201) <= 25 || Math.abs(userLd50 - 1335) <= 25)) {
          newErrors.landing50ft = `¡Casi! Has usado distancia a 50 ft en pies. La tabla Fig. 5-10 viene en PIES. Conviértela a METROS (divide entre 3.28084 y resta 10% de viento).`;
        } else if (!isNaN(userLd50) && userLd50 > 900) {
          newErrors.landing50ft = `¡Cuidado con las unidades! Has introducido un valor en pies (> 900 ft). F.OPS.02 requiere la distancia en METROS [m] (divide entre 3.28084).`;
        } else {
          newErrors.landing50ft =
            attempts >= 1
              ? `Solución ${scenario.icao}: Distancia sobre 50 ft = ${scenario.ld50ft} m. En Fig. 5-10: columna 'TOTAL 50 FT OBS' = ${Math.round(scenario.baseLd50 * 3.28084)} ft ÷ 3.28 = ${scenario.baseLd50} m; con -6% viento = ${scenario.ld50ft} m.`
              : `Columna 'TOTAL 50 FT OBS' (no 'GRND ROLL') y convierte pies a metros (÷ 3.28084): ${scenario.baseLd50} m con ${scenario.windDesc}.`;
        }
      }

      setErrors(newErrors);
      setWarnings(newWarnings);

      if (Object.keys(newErrors).length === 0) {
        const nextSolved = { ...solvedLanding, [selectedScenarioIndex]: true };
        setSolvedLanding(nextSolved);

        const isTakeoffDone = solvedTakeoff[1] && solvedTakeoff[2];
        const isLandingDone = nextSolved[1] && nextSolved[2];

        if (mode === "landing" && isLandingDone) {
          if (onExerciseCompleted) onExerciseCompleted();
        } else if (mode === "all" && isTakeoffDone && isLandingDone) {
          if (onExerciseCompleted) onExerciseCompleted();
        }
      } else {
        setAttempts((prev) => prev + 1);
      }
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-stretch py-0.5">
      {/* Columna Izquierda (lg:col-span-6): Formulario de Cálculo F.OPS.02 */}
      <div className="lg:col-span-6 flex flex-col">
        <div
          className="h-[590px] flex flex-col justify-between p-3.5 rounded-2xl bg-slate-50/90 dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs"
          style={{ height: "590px" }}
        >
          {/* Header & Step / Airport Selector */}
          <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800 shrink-0">
            <div>
              <span className="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-[14px] block">
                {currentStep === "takeoff"
                  ? "🏁 F.OPS.02 · DESPEGUE (TORA & TODA)"
                  : "🛬 F.OPS.02 · ATERRIZAJE (LDA)"}
              </span>
              <div className="text-xs sm:text-[13px] text-slate-500 dark:text-slate-400 font-medium">
                {scenario.name} · {scenario.elevationDesc} · OAT {scenario.oatC}°C
              </div>
            </div>

            <div className="flex items-center gap-1.5 shrink-0">
              {mode === "all" && (
                <div className="flex items-center bg-slate-200 dark:bg-slate-800 rounded-lg p-0.5 mr-1 border border-slate-300 dark:border-slate-700">
                  <button
                    type="button"
                    onClick={() => {
                      setActiveTab("takeoff");
                      setErrors({});
                      setWarnings([]);
                    }}
                    style={{
                      backgroundColor: activeTab === "takeoff" ? "#0B2E59" : "transparent",
                      color: activeTab === "takeoff" ? "#ffffff" : "#000000",
                      fontSize: "1.125rem",
                      fontWeight: 700,
                    }}
                    className="px-3 py-1.5 rounded-md transition-all cursor-pointer"
                  >
                    <span style={{ color: activeTab === "takeoff" ? "#ffffff" : "#000000", fontSize: "1.125rem", fontWeight: 700 }}>
                      1. Despegue
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveTab("landing");
                      setErrors({});
                      setWarnings([]);
                    }}
                    style={{
                      backgroundColor: activeTab === "landing" ? "#0B2E59" : "transparent",
                      color: activeTab === "landing" ? "#ffffff" : "#000000",
                      fontSize: "1.125rem",
                      fontWeight: 700,
                    }}
                    className="px-3 py-1.5 rounded-md transition-all cursor-pointer"
                  >
                    <span style={{ color: activeTab === "landing" ? "#ffffff" : "#000000", fontSize: "1.125rem", fontWeight: 700 }}>
                      2. Aterrizaje
                    </span>
                  </button>
                </div>
              )}

              {/* Airport Selector Tabs: GCXO is solved model example */}
              <button
                type="button"
                onClick={() => switchScenario(0)}
                style={{
                  backgroundColor: selectedScenarioIndex === 0 ? "#059669" : "#ecfdf5",
                  color: selectedScenarioIndex === 0 ? "#ffffff" : "#065f46",
                  fontSize: "1.125rem",
                  fontWeight: 700,
                }}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer flex items-center gap-1.5 border ${
                  selectedScenarioIndex === 0
                    ? "border-emerald-600 shadow-2xs"
                    : "border-emerald-300 dark:border-emerald-700 hover:bg-emerald-100"
                }`}
                title="GCXO: Ejemplo guiado resuelto"
              >
                <span
                  style={{
                    color: selectedScenarioIndex === 0 ? "#ffffff" : "#065f46",
                    fontSize: "1.125rem",
                    fontWeight: 700,
                  }}
                >
                  GCXO
                </span>
              </button>

              {[1, 2].map((idx) => {
                const sc = DA40_PERFORMANCE_SCENARIOS[idx];
                const isSolved =
                  currentStep === "takeoff"
                    ? Boolean(solvedTakeoff[idx])
                    : Boolean(solvedLanding[idx]);
                const isSelected = selectedScenarioIndex === idx;

                return (
                  <button
                    key={sc.id}
                    type="button"
                    onClick={() => switchScenario(idx)}
                    style={{
                      backgroundColor: isSelected ? "#0B2E59" : isSolved ? "#ecfdf5" : "#f1f5f9",
                      color: isSelected ? "#ffffff" : isSolved ? "#047857" : "#000000",
                      fontSize: "1.125rem",
                      fontWeight: 700,
                    }}
                    className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer flex items-center gap-1.5 border ${
                      isSelected
                        ? "border-[#0B2E59] shadow-2xs"
                        : isSolved
                          ? "border-emerald-300 dark:border-emerald-700"
                          : "border-slate-300 hover:bg-slate-200"
                    }`}
                    title={sc.name}
                  >
                    <span
                      style={{
                        color: isSelected ? "#ffffff" : isSolved ? "#047857" : "#000000",
                        fontSize: "1.125rem",
                        fontWeight: 700,
                      }}
                    >
                      {sc.icao}
                    </span>
                    <span
                      style={{
                        color: isSelected ? "#ffffff" : isSolved ? "#047857" : "#000000",
                        fontSize: "1.125rem",
                        fontWeight: 700,
                      }}
                    >
                      {isSolved ? "✓" : "⏳"}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Form Content - Aligned to top */}
          <div className="flex-1 min-h-0 flex flex-col justify-start space-y-2 pt-1 overflow-y-auto">
            {/* Solved Example Alert (for GCXO) */}
            {selectedScenarioIndex === 0 && (
              <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 text-xs flex items-center justify-between gap-2 shadow-2xs">
                <div className="flex items-center gap-1.5">
                  <span className="text-sm">🟢</span>
                  <span>
                    <strong>EJEMPLO RESUELTO · GCXO (Referencia):</strong> Este primer cálculo se muestra completado como modelo oficial. Para avanzar, calcula los otros dos aeródromos (<strong>GCTS</strong> y <strong>GCGM</strong>).
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => switchScenario(1)}
                  style={{
                    backgroundColor: "#059669",
                    color: "#ffffff",
                    fontSize: "1.125rem",
                    fontWeight: 700,
                  }}
                  className="px-3 py-1.5 rounded-lg font-bold shrink-0 transition-all cursor-pointer hover:bg-emerald-700 shadow-2xs"
                >
                  <span style={{ color: "#ffffff", fontSize: "1.125rem", fontWeight: 700 }}>
                    Ir a GCTS ➔
                  </span>
                </button>
              </div>
            )}


            {/* Landing Unit Conversion Reminder */}
            {currentStep === "landing" && (
              <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-700 text-xs sm:text-[13px] text-amber-950 dark:text-amber-100 flex items-center justify-between gap-2 shadow-xs">
                <div className="flex items-center gap-2">
                  <span className="text-base">⚠️</span>
                  <span>
                    <strong>CONVERSIÓN:</strong> Fig. 5-10 viene en <strong>PIES [ft]</strong>. Divide entre <strong>3.28084</strong> para obtener <strong>METROS [m]</strong>.
                  </span>
                </div>
                <span className="font-mono font-bold bg-white dark:bg-slate-800 px-2 py-0.5 rounded-md border border-amber-300 dark:border-amber-700 shrink-0 text-xs sm:text-[12px]">
                  ft ÷ 3.28084 = m
                </span>
              </div>
            )}

            {/* Calculation Cards */}
            {currentStep === "takeoff" ? (
              <>
                {/* Item 1: Take-off run */}
                <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <span className="font-bold text-xs sm:text-[14px] text-[#0B2E59] dark:text-sky-300 block">
                        1. Take-off run (Carrera en suelo)
                      </span>
                      <div className="text-xs text-slate-500 dark:text-slate-400 font-normal">
                        POH Fig. 5-1a · Columna &apos;GRND ROLL&apos; (con -6% por viento)
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 font-mono text-xs sm:text-[13px] font-bold px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 shrink-0">
                      <span>TORA:</span>
                      <strong className="text-[#0B2E59] dark:text-sky-300">{scenario.runwayToraM} m</strong>
                    </span>
                  </div>

                  <div className="flex items-center gap-2 pt-0.5">
                    <div className="flex-1 relative">
                      <input
                        type="text"
                        placeholder="Introduce metros calculados (Ej: 211)"
                        value={currentInputs.takeoffRun}
                        onChange={(e) => updateCurrentInput("takeoffRun", e.target.value)}
                        className={`w-full px-3 py-1.5 rounded-lg border font-mono text-xs sm:text-[14px] ${
                          errors.takeoffRun
                            ? "border-rose-500 bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-200"
                            : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900"
                        }`}
                      />
                    </div>
                    <span className="text-xs sm:text-[13px] font-bold text-slate-500 shrink-0">m</span>
                  </div>
                </div>

                {/* Item 2: Take-off distance (50 ft) */}
                <div className="p-2.5 rounded-xl bg-sky-50/50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800 shadow-2xs space-y-1.5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <span className="font-bold text-xs sm:text-[14px] text-[#0B2E59] dark:text-sky-300 block">
                        2. Take-off distance (Obstáculo 50 ft / 15 m)
                      </span>
                      <div className="text-xs text-slate-500 dark:text-slate-400 font-normal">
                        POH Fig. 5-1a · &apos;TOTAL TO CLEAR 50 FT OBS&apos; (con -6% viento)
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 font-mono text-xs sm:text-[13px] font-bold px-2 py-0.5 rounded-lg bg-white dark:bg-slate-900 border border-sky-300 dark:border-sky-700 text-blue-700 dark:text-sky-300 shrink-0">
                      <span>TODA:</span>
                      <strong>{scenario.runwayTodaM} m</strong>
                    </span>
                  </div>

                  <div className="flex items-center gap-2 pt-0.5">
                    <div className="flex-1 relative">
                      <input
                        type="text"
                        placeholder="Introduce metros calculados (Ej: 329)"
                        value={currentInputs.takeoff50ft}
                        onChange={(e) => updateCurrentInput("takeoff50ft", e.target.value)}
                        className={`w-full px-3 py-1.5 rounded-lg border font-mono text-xs sm:text-[14px] font-bold ${
                          errors.takeoff50ft
                            ? "border-rose-500 bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-200"
                            : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sky-700 dark:text-sky-300"
                        }`}
                      />
                    </div>
                    <span className="text-xs sm:text-[13px] font-bold text-slate-500 shrink-0">m</span>
                  </div>
                </div>
              </>
            ) : (
              /* Item Landing distance (50 ft) */
              <div className="p-3 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 shadow-2xs space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <span className="font-bold text-xs sm:text-[14px] text-emerald-950 dark:text-emerald-300 block">
                      Landing distance (Obstáculo 50 ft / 15 m)
                    </span>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-normal">
                      POH Fig. 5-10 · &apos;TOTAL 50 FT OBS&apos; en pies &divide; 3.28084 (con -6% viento)
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 font-mono text-xs sm:text-[13px] font-bold px-2 py-0.5 rounded-lg bg-white dark:bg-slate-900 border border-emerald-300 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300 shrink-0">
                    <span>LDA:</span>
                    <strong>{scenario.runwayLdaM} m</strong>
                  </span>
                </div>

                <div className="flex items-center gap-2 pt-0.5">
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      placeholder="Introduce metros calculados (Ej: 366)"
                      value={currentInputs.landing50ft}
                      onChange={(e) => updateCurrentInput("landing50ft", e.target.value)}
                      className={`w-full px-3 py-1.5 rounded-lg border font-mono text-xs sm:text-[14px] font-bold ${
                        errors.landing50ft
                          ? "border-rose-500 bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-200"
                          : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-emerald-700 dark:text-emerald-300"
                      }`}
                    />
                  </div>
                  <span className="text-xs sm:text-[13px] font-bold text-slate-500 shrink-0">m</span>
                </div>
              </div>
            )}

            {/* Error notifications */}
            {(errors.takeoffRun || errors.takeoff50ft || errors.landing50ft) && (
              <div className="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-xs sm:text-[13px] text-rose-900 dark:text-rose-200 space-y-1">
                {errors.takeoffRun && <div>⚠️ {errors.takeoffRun}</div>}
                {errors.takeoff50ft && <div>⚠️ {errors.takeoff50ft}</div>}
                {errors.landing50ft && <div>⚠️ {errors.landing50ft}</div>}
              </div>
            )}
          </div>

          {/* Validation & Status Button */}
          <div className="pt-2 border-t border-slate-200 dark:border-slate-800 shrink-0 space-y-1.5">
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                {selectedScenarioIndex === 0 ? (
                  <span className="text-emerald-700 dark:text-emerald-400 font-bold">
                    ✓ Modelo de referencia resuelto
                  </span>
                ) : (
                  <span>
                    Ejercicios resueltos: <strong>{currentStep === "takeoff" ? solvedTakeoffCount : solvedLandingCount} de 2</strong> (GCTS y GCGM)
                  </span>
                )}
              </span>
              <button
                type="button"
                onClick={handleValidate}
                style={{
                  backgroundColor: selectedScenarioIndex === 0 ? "#059669" : "#0B2E59",
                  color: "#ffffff",
                  fontSize: "1.125rem",
                  fontWeight: 800,
                }}
                className="px-4 py-2 rounded-xl shadow-xs cursor-pointer flex items-center gap-1.5 transition-all hover:scale-105 active:scale-95"
              >
                <span style={{ color: "#ffffff", fontSize: "1.125rem", fontWeight: 800 }}>
                  {selectedScenarioIndex === 0
                    ? "Pasar a GCTS (Ejercicio) ➔"
                    : currentStep === "takeoff"
                      ? `Validar Despegue ${scenario.icao} ➔`
                      : `Validar Aterrizaje ${scenario.icao} ➔`}
                </span>
              </button>
            </div>

            {warnings.length > 0 && (
              <div className="p-1.5 rounded-lg border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30 text-amber-900 dark:text-amber-200 text-xs">
                {warnings.map((w, idx) => (
                  <div key={idx}>ℹ️ {w}</div>
                ))}
              </div>
            )}

            {isCurrentStepPassed && (
              <div className="p-2 rounded-lg border border-emerald-300 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 text-xs">
                <strong className="font-bold">
                  {selectedScenarioIndex === 0
                    ? `✓ MODELO OFICIAL RESUELTO (${scenario.icao}):`
                    : currentStep === "takeoff"
                      ? `✓ ¡DESPEGUE VALIDADO EN ${scenario.icao}!`
                      : `✓ ¡ATERRIZAJE VALIDADO EN ${scenario.icao}!`}
                </strong>
                <p className="text-xs mt-0.5">
                  {currentStep === "takeoff"
                    ? `Despegue 50 ft: ${scenario.to50ft} m < TODA (${scenario.runwayTodaM} m). Margen de seguridad: +${scenario.runwayTodaM - scenario.to50ft} m.`
                    : `Aterrizaje 50 ft: ${scenario.ld50ft} m < LDA (${scenario.runwayLdaM} m). Margen remanente: +${scenario.runwayLdaM - scenario.ld50ft} m.`}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Columna Derecha (lg:col-span-6): Condiciones Operacionales y Verificación de Pista */}
      <div className="lg:col-span-6 flex flex-col">
        <div
          className="h-[590px] flex flex-col justify-between p-3.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs"
          style={{ height: "590px" }}
        >
          {/* Header Derecha */}
          <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800 shrink-0">
            <div>
              <span className="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-[14px] block">
                {currentStep === "takeoff"
                  ? `CONDICIONES Y MÁRGENES DESPEGUE · ${scenario.icao}`
                  : `CONDICIONES Y MARGEN DE TOMA · ${scenario.icao}`}
              </span>
              <span className="text-xs sm:text-[13px] text-slate-500 dark:text-slate-400 font-medium">
                {scenario.name} · {scenario.runway}
              </span>
            </div>
            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-sky-300 shrink-0">
              AFM DA40 TDI
            </span>
          </div>

          {/* Reference and Conditions Content - Aligned to top */}
          <div className="flex-1 min-h-0 flex flex-col justify-start py-1 space-y-2 text-xs sm:text-[13px] overflow-y-auto">
            {/* Operational Conditions Card (Moved from Left) */}
            <div className="p-3 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-2">
              <div className="flex items-center justify-between text-xs sm:text-[13px]">
                <span className="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wide">
                  Condiciones en {scenario.icao} ({scenario.runway})
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  OAT {scenario.oatC}°C · Alt. Presión {scenario.pressAltFt} ft
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs sm:text-[13px] text-slate-700 dark:text-slate-300">
                <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <div className="text-slate-500 text-xs">Viento en Pista:</div>
                  <strong className="text-slate-800 dark:text-slate-200">{scenario.windDesc}</strong>
                </div>
                <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <div className="text-slate-500 text-xs">Pista y Superficie:</div>
                  <strong className="text-slate-800 dark:text-slate-200">{scenario.runway} ({scenario.surfaceDesc})</strong>
                </div>
              </div>
              <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs sm:text-[13px]">
                <div className="flex flex-wrap items-center justify-between gap-1">
                  <span className="font-bold text-[#0B2E59] dark:text-sky-300">
                    {currentStep === "takeoff" ? "Distancias Despegue AIP:" : "Distancia Aterrizaje AIP:"}
                  </span>
                  <span className="font-mono text-slate-800 dark:text-slate-100">
                    {currentStep === "takeoff" ? (
                      <>TORA: <strong>{scenario.runwayToraM} m</strong> · TODA: <strong className="text-blue-600 dark:text-sky-400">{scenario.runwayTodaM} m</strong></>
                    ) : (
                      <>LDA (Pista Disponible): <strong className="text-emerald-600 dark:text-emerald-400">{scenario.runwayLdaM} m</strong></>
                    )}
                  </span>
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-tight">
                  ℹ️ {scenario.declaredDistancesNote}
                </div>
              </div>
            </div>

            {/* Direct Link to Relevant AFM Table */}
            <div className="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-sky-50/70 dark:bg-slate-800/90 border border-sky-200 dark:border-slate-700 shadow-2xs">
              <span className="text-xs sm:text-[13px] font-bold text-[#0B2E59] dark:text-sky-300 flex items-center gap-1.5">
                <span>📖</span>
                <span>{currentStep === "takeoff" ? "TABLA AFM DESPEGUE:" : "TABLA AFM ATERRIZAJE:"}</span>
              </span>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setIsChartModalOpen(true)}
                  style={{
                    backgroundColor: "#0B2E59",
                    color: "#ffffff",
                    fontSize: "1.125rem",
                    fontWeight: 700,
                  }}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-[#0B2E59] hover:bg-[#082242] transition-all cursor-pointer shadow-2xs"
                  title="Ver Gráfica en Pantalla"
                >
                  <span style={{ color: "#ffffff", fontSize: "1.125rem", fontWeight: 700 }}>
                    {currentStep === "takeoff" ? "🛫 Ver Tabla Takeoff Distance 50ft" : "🛬 Ver Tabla Landing Distance"}
                  </span>
                  <span>🔍</span>
                </button>
                <a
                  href={chartSrc}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: "#f1f5f9",
                    color: "#000000",
                    fontSize: "1.125rem",
                    fontWeight: 700,
                  }}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-300 hover:bg-slate-200 transition-all shadow-2xs"
                  title="Abrir imagen en nueva pestaña"
                >
                  <span style={{ color: "#000000", fontSize: "1.125rem", fontWeight: 700 }}>↗</span>
                </a>
              </div>
            </div>

            {/* Dynamic Bottom Area: Step instructions or Graphical Runway Scale */}
            {!isCurrentStepPassed ? (
              <div className="p-3 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-1.5 shadow-2xs text-xs sm:text-[13px]">
                <strong className="text-[#0B2E59] dark:text-sky-300 block uppercase font-bold text-xs sm:text-[13px]">
                  Guía Metodológica para {scenario.icao} ({scenario.runway}):
                </strong>
                <ul className="list-disc pl-4 space-y-1 text-slate-700 dark:text-slate-300">
                  <li>
                    <strong>Elevación:</strong> {scenario.elevationDesc}.
                  </li>
                  {currentStep === "takeoff" ? (
                    <>
                      <li>
                        <strong>Gráfico Fig. 5.3.5:</strong> Consulta la fila de {scenario.pressAltFt} ft y OAT {scenario.oatC}°C.
                      </li>
                      <li>
                        <strong>Corrección Viento:</strong> Aplica -6% por viento en cara de {scenario.windDesc}.
                      </li>
                      <li>
                        <strong>Validación:</strong> Introduce los valores y pulsa <em>Validar Despegue</em>.
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        <strong>Gráfico Fig. 5.3.11:</strong> Columna <em>TOTAL 50 FT OBS</em> en pies.
                      </li>
                      <li>
                        <strong>Conversión a Metros:</strong> Consulta la distancia en metros sobre 50 ft y aplica -6% por viento en cara.
                      </li>
                      <li>
                        <strong>Validación:</strong> Introduce los metros y pulsa <em>Validar Aterrizaje</em>.
                      </li>
                    </>
                  )}
                </ul>
              </div>
            ) : (
              /* Validated: Visual Scale Bar */
              currentStep === "takeoff" ? (
                /* Takeoff Comparison Bar */
                <div className="p-3 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-2 shadow-2xs">
                  <div className="flex justify-between items-center text-xs sm:text-[13px] font-bold">
                    <span className="text-[#0B2E59] dark:text-sky-300">Despegue 50 ft vs TODA ({scenario.icao})</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-mono text-xs sm:text-[13px]">
                      Margen Libre: +{scenario.runwayTodaM - scenario.to50ft} m
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs sm:text-[13px] py-0.5">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-sky-300 font-bold">
                      <span>Requerido (50 ft):</span>
                      <span className="font-mono">{scenario.to50ft} m</span>
                      <span className="text-xs font-normal text-blue-500">({Math.round((scenario.to50ft / scenario.runwayTodaM) * 100)}% TODA)</span>
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 font-bold">
                      <span>Libre:</span>
                      <span className="font-mono">+{scenario.runwayTodaM - scenario.to50ft} m</span>
                    </span>
                  </div>

                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden h-3.5 flex">
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

                  <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400 pt-0.5">
                    <span>0 m</span>
                    <span className="font-medium text-slate-600 dark:text-slate-300">
                      TORA: {scenario.runwayToraM} m · TODA: {scenario.runwayTodaM} m
                    </span>
                  </div>
                </div>
              ) : (
                /* Landing Comparison Bar */
                <div className="p-3 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-2 shadow-2xs">
                  <div className="flex justify-between items-center text-xs sm:text-[13px] font-bold">
                    <span className="text-[#0B2E59] dark:text-sky-300">Aterrizaje 50 ft vs LDA ({scenario.icao})</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-mono text-xs sm:text-[13px]">
                      Margen Libre: +{scenario.runwayLdaM - scenario.ld50ft} m
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs sm:text-[13px] py-0.5">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 font-bold">
                      <span>Requerido:</span>
                      <span className="font-mono">{scenario.ld50ft} m</span>
                      <span className="text-xs font-normal text-emerald-600">({Math.round((scenario.ld50ft / scenario.runwayLdaM) * 100)}% LDA)</span>
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 font-bold">
                      <span>Libre:</span>
                      <span className="font-mono">+{scenario.runwayLdaM - scenario.ld50ft} m</span>
                    </span>
                  </div>

                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden h-3.5 flex">
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

                  <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400 pt-0.5">
                    <span>0 m</span>
                    <span className="font-medium text-slate-600 dark:text-slate-300">Pista Disponible (LDA): {scenario.runwayLdaM} m</span>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Full Resolution Chart Inspection */}
      {isChartModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-sm flex flex-col items-center justify-center p-3 animate-in fade-in duration-150"
          onClick={() => setIsChartModalOpen(false)}
        >
          <div
            className="relative max-w-6xl w-full max-h-[94vh] flex flex-col bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-200 dark:border-slate-800 shrink-0 bg-slate-50 dark:bg-slate-900">
              <span className="font-bold text-[#0B2E59] dark:text-sky-300 text-sm sm:text-base">
                {chartTitle}
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={chartSrc}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: "1.125rem", fontWeight: 700 }}
                  className="px-3.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 transition-all"
                >
                  Abrir en pestaña nueva ↗
                </a>
                <button
                  type="button"
                  onClick={() => setIsChartModalOpen(false)}
                  style={{ fontSize: "1.125rem", fontWeight: 700 }}
                  className="px-3.5 py-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-700 transition-all cursor-pointer"
                >
                  ✕ Cerrar
                </button>
              </div>
            </div>

            {/* Modal Image Viewport */}
            <div className="flex-1 min-h-0 p-2 flex items-center justify-center bg-slate-950 overflow-auto">
              <img
                src={chartSrc}
                alt={chartTitle}
                className="max-w-full max-h-[82vh] object-contain rounded"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
