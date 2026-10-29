"use client";

import React, { useState } from "react";
import { DA40_PREFLIGHT_MISSIONS, checkValueTolerance } from "./da40-constants";

type Props = {
  onExerciseCompleted?: () => void;
  isAlreadyCompleted?: boolean;
};

type FuelInputs = {
  tripFuel: string;
  reserveFuel: string;
  landingFuel: string;
  rampFuel: string;
};

// Initial state: M1 is fully prefilled as the official solved model example
const INITIAL_FUEL_INPUTS: Record<number, FuelInputs> = {
  0: {
    tripFuel: "15.1",
    reserveFuel: "22.7",
    landingFuel: "22.7",
    rampFuel: "40.8",
  },
  1: { tripFuel: "", reserveFuel: "", landingFuel: "", rampFuel: "" },
  2: { tripFuel: "", reserveFuel: "", landingFuel: "", rampFuel: "" },
};

export function DA40FuelWidget({
  onExerciseCompleted,
  isAlreadyCompleted = false,
}: Props) {
  const [selectedMissionIndex, setSelectedMissionIndex] = useState(0); // Starts on M1 (Solved Example)
  const mission = DA40_PREFLIGHT_MISSIONS[selectedMissionIndex];

  // Per-mission input states so student work is kept across tab switches
  const [missionInputs, setMissionInputs] = useState<Record<number, FuelInputs>>(INITIAL_FUEL_INPUTS);
  const [solvedMissions, setSolvedMissions] = useState<Record<number, boolean>>({});

  const currentInputs = missionInputs[selectedMissionIndex] || {
    tripFuel: "",
    reserveFuel: "",
    landingFuel: "",
    rampFuel: "",
  };

  const updateCurrentInput = (field: keyof FuelInputs, value: string) => {
    setMissionInputs((prev) => ({
      ...prev,
      [selectedMissionIndex]: {
        ...(prev[selectedMissionIndex] || {
          tripFuel: "",
          reserveFuel: "",
          landingFuel: "",
          rampFuel: "",
        }),
        [field]: value,
      },
    }));
  };

  // Feedback states
  const [attempts, setAttempts] = useState(0);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [warnings, setWarnings] = useState<string[]>([]);

  // Flight school cruise power: 60% Load = 15.1 L/h (Diamond DA40 TDI Thielert TAE 125-01)
  const hourlyRate = 15.1;
  const hourlyRateGal = 4.0;

  // Taxi: 3.0 L (puesta en marcha, calentamiento y rodaje)
  const taxiFuelL = 3.0;
  const expectedTripL = Math.round(mission.scenario.flightTimeHrs * hourlyRate * 10) / 10;
  const expectedTripGal = Math.round(mission.scenario.flightTimeHrs * hourlyRateGal * 10) / 10;
  
  // Reservas: EASA 45 min (11.3 L) vs. Blue Team OM 1h 30min (22.7 L total, que ya incluye los 45 min)
  const expectedEasaReserveL = 11.3; // 45 min = 0.75 h × 15.1 L/h
  const expectedBlueTeamReserveL = 22.7; // 1h 30min = 1.5 h × 15.1 L/h (Reserva Final OM completa)
  const expectedBlueTeamReserveGal = 6.00;
  const expectedAlternateL = 5.1; // Desvío a alternativo ~20 min
  const expectedBlueTeamTotalReserveL = 27.8; // 22.7 + 5.1 L con alternativo

  // En Blue Team la reserva final es 1h 30min (22.7 L), por lo que el Landing Fuel remanente mínimo son 22.7 L
  const expectedLandingL = expectedBlueTeamReserveL;
  const expectedRampL = Math.round((expectedTripL + expectedLandingL + taxiFuelL) * 10) / 10;
  const expectedRampGal = Math.round((expectedRampL / 3.78541) * 10) / 10;

  const solvedPracticeCount = (solvedMissions[1] ? 1 : 0) + (solvedMissions[2] ? 1 : 0);
  const isCurrentMissionSolved = selectedMissionIndex === 0 || Boolean(solvedMissions[selectedMissionIndex]);

  const switchMission = (idx: number) => {
    setSelectedMissionIndex(idx);
    setAttempts(0);
    setErrors({});
    setWarnings([]);
  };

  const handleValidate = () => {
    // If student is on M1 (Example), validate is not needed; guide to M2
    if (selectedMissionIndex === 0) {
      switchMission(1);
      return;
    }

    const newErrors: Record<string, string> = {};
    const newWarnings: string[] = [];
    const num = (v: string) => parseFloat(v.replace(",", "."));

    // Check Trip Fuel (supports Liters and US Gallons)
    const userTrip = num(currentInputs.tripFuel);
    const isTripLiters = checkValueTolerance(userTrip, expectedTripL, 0.06, 0.6).isOk;
    const isTripGallons = checkValueTolerance(userTrip, expectedTripGal, 0.08, 0.3).isOk;

    if (isNaN(userTrip) || (!isTripLiters && !isTripGallons)) {
      newErrors.trip =
        attempts >= 1
          ? `Solución: Trip fuel = ${mission.scenario.flightTimeHrs} h × 15.1 L/h = ${expectedTripL} L (o ${expectedTripGal} Gal).`
          : `Calcula el combustible de ruta para ${mission.scenario.flightTimeHrs} h al 50% de potencia CD-155 (15.1 L/h / 4.0 Gal/h).`;
    } else if (isTripGallons) {
      newWarnings.push(`Trip Fuel introducido en US Galones: ${userTrip} Gal (equivale a ${expectedTripL} L).`);
    }

    // Check Reserve Fuel (En Blue Team la reserva final es 1h 30min = 22.7 L / 6.08 Gal, que incluye los 45 min legales)
    const userReserve = num(currentInputs.reserveFuel);
    const isBlueTeamLiters = !isNaN(userReserve) && checkValueTolerance(userReserve, expectedBlueTeamReserveL, 0.08, 1.2).isOk;
    const isBlueTeamGallons = !isNaN(userReserve) && checkValueTolerance(userReserve, expectedBlueTeamReserveGal, 0.08, 0.4).isOk;
    const isBlueTeamAltMatch = !isNaN(userReserve) && checkValueTolerance(userReserve, expectedBlueTeamTotalReserveL, 0.08, 1.5).isOk;
    const isEasaMatch = !isNaN(userReserve) && checkValueTolerance(userReserve, expectedEasaReserveL, 0.08, 0.8).isOk;

    if (isNaN(userReserve) || (!isBlueTeamLiters && !isBlueTeamGallons && !isBlueTeamAltMatch && !isEasaMatch)) {
      newErrors.reserve =
        attempts >= 1
          ? `Solución: En Blue Team por Manual OM la reserva final es 1h 30min (${expectedBlueTeamReserveL} L / 6.08 Gal a 15.1 L/h, que ya incluye los 45 min legales).`
          : `Calcula la reserva final Blue Team (1h 30min = 22.7 L / 6.08 Gal).`;
    } else if (isBlueTeamAltMatch) {
      newWarnings.push(`✓ ¡Excelente! Has incluido 1h 30min de reserva final (${expectedBlueTeamReserveL} L) + alternativo (${expectedAlternateL} L).`);
    } else if (isBlueTeamGallons) {
      newWarnings.push(`Reserva final introducida en US Galones: ${userReserve} Gal (equivale a ${expectedBlueTeamReserveL} L).`);
    } else if (isEasaMatch) {
      newWarnings.push(`ℹ️ Has introducido el mínimo EASA de 45 min (${expectedEasaReserveL} L). Recuerda que por Manual OM Blue Team nuestra reserva final es de 1h 30min (${expectedBlueTeamReserveL} L).`);
    }

    // Check Landing Fuel (must be at least userReserve or minimum 22.7 L)
    const userLanding = num(currentInputs.landingFuel);
    const minAcceptableLandingL = !isNaN(userReserve) && userReserve > 0 && userReserve > 10 ? userReserve * 0.95 : expectedBlueTeamReserveL * 0.95;
    const minAcceptableLandingGal = expectedBlueTeamReserveGal * 0.95;
    const isLandingLitersOk = !isNaN(userLanding) && userLanding >= minAcceptableLandingL;
    const isLandingGalOk = !isNaN(userLanding) && checkValueTolerance(userLanding, expectedBlueTeamReserveGal, 0.1, 0.5).isOk;

    if (isNaN(userLanding) || (!isLandingLitersOk && !isLandingGalOk)) {
      newErrors.landing =
        attempts >= 1
          ? `Solución: Landing Fuel remanente en destino debe cubrir la reserva final (al menos ${expectedBlueTeamReserveL} L / 6.08 Gal).`
          : `El combustible remanente en destino al tocar pista debe cubrir la reserva final (1h 30m = 22.7 L / 6.08 Gal).`;
    } else if (isLandingGalOk) {
      newWarnings.push(`Landing Fuel en US Galones: ${userLanding} Gal (equivale a ${expectedBlueTeamReserveL} L).`);
    }

    // Check Ramp Fuel (Trip + userLanding + Taxi)
    const isUsingGal = isTripGallons || isBlueTeamGallons || isLandingGalOk;
    const targetExpectedRamp = isUsingGal ? expectedRampGal : expectedRampL;
    const userRamp = num(currentInputs.rampFuel);
    const isRampLitersOk = checkValueTolerance(userRamp, expectedRampL, 0.06, 1.5).isOk;
    const isRampGalOk = checkValueTolerance(userRamp, expectedRampGal, 0.08, 0.6).isOk;

    if (isNaN(userRamp) || (!isRampLitersOk && !isRampGalOk)) {
      newErrors.ramp =
        attempts >= 1
          ? `Solución: Ramp Fuel = Trip (${expectedTripL} L) + Landing (${expectedLandingL} L) + Taxi (${taxiFuelL} L) = ${expectedRampL} L (o ${expectedRampGal} Gal).`
          : `Ramp Fuel = Trip + Landing Fuel + Taxi (${taxiFuelL} L / 0.8 Gal).`;
    } else if (isRampGalOk) {
      newWarnings.push(`Ramp Fuel en US Galones: ${userRamp} Gal (equivale a ${expectedRampL} L).`);
    }

    setErrors(newErrors);
    setWarnings(newWarnings);

    if (Object.keys(newErrors).length === 0) {
      const nextSolved = { ...solvedMissions, [selectedMissionIndex]: true };
      setSolvedMissions(nextSolved);
      if (nextSolved[1] && nextSolved[2]) {
        if (onExerciseCompleted) {
          onExerciseCompleted();
        }
      }
    } else {
      setAttempts((prev) => prev + 1);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
      {/* Columna Izquierda (lg:col-span-7): Formulario F.OPS.02 (Altura Fija 590px) */}
      <div className="lg:col-span-7 flex flex-col">
        <div
          className="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs"
          style={{ height: "590px" }}
        >
          {/* Header & Mission Selector */}
          <div className="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
            <div>
              <span className="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">
                ⛽ PLANIFICACIÓN DE COMBUSTIBLE F.OPS.02
              </span>
              <div className="text-[10px] text-slate-500 font-medium">
                {mission.name} · {mission.scenario.flightTimeHrs} h vuelo · 50% Potencia ({hourlyRate} L/h · {hourlyRateGal} US Gal/h)
              </div>
            </div>
            <div className="flex items-center gap-1 shrink-0">
              <button
                type="button"
                onClick={() => switchMission(0)}
                className={`px-2.5 py-1 rounded-lg text-xs sm:text-[12px] font-extrabold transition-all cursor-pointer flex items-center gap-1 ${
                  selectedMissionIndex === 0
                    ? "bg-emerald-600 text-white shadow-2xs"
                    : "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700 hover:bg-emerald-100"
                }`}
                title="Misión 1: Ejemplo guiado resuelto"
              >
                <span>M1</span>
              </button>
              {[1, 2].map((idx) => {
                const isSolved = Boolean(solvedMissions[idx]);
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => switchMission(idx)}
                    className={`px-2.5 py-1 rounded-lg text-xs sm:text-[12px] font-extrabold transition-all cursor-pointer flex items-center gap-1 ${
                      selectedMissionIndex === idx
                        ? "bg-[#1a80ff] text-white shadow-2xs"
                        : isSolved
                          ? "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700"
                          : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    <span>M{idx + 1}</span>
                    <span>{isSolved ? "✓" : "⏳"}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Form Content - Aligned to top */}
          <div className="flex-1 min-h-0 overflow-y-auto my-1 space-y-2 flex flex-col justify-start pt-1">
            {/* Solved Example Alert (for M1) */}
            {selectedMissionIndex === 0 && (
              <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 text-xs flex items-center justify-between gap-2 shadow-2xs">
                <div className="flex items-center gap-1.5">
                  <span className="text-sm">🟢</span>
                  <span>
                    <strong>EJEMPLO RESUELTO · Misión 1 (Referencia):</strong> Este primer ejercicio se muestra completado como modelo. Para avanzar, resuelve los ejercicios <strong>M2</strong> y <strong>M3</strong>.
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => switchMission(1)}
                  className="px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[11px] shrink-0 transition-all cursor-pointer"
                >
                  Ir a M2 ➔
                </button>
              </div>
            )}

            <div className="grid grid-cols-2 gap-2">
              {/* Taxi Fuel */}
              <div className="p-2 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-2xs">
                <span className="text-[10.5px] font-bold text-slate-600 dark:text-slate-300 block mb-0.5">
                  1. Taxi Fuel (Rodaje y Arranque)
                </span>
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono font-bold text-[#0B2E59] dark:text-sky-300 text-sm">
                    {taxiFuelL.toFixed(1)} L / {(taxiFuelL / 3.78541).toFixed(1)} Gal
                  </span>
                  <span className="text-[10px] text-slate-500 font-medium">Fijo estándar</span>
                </div>
              </div>

              {/* Trip Fuel */}
              <div className="p-2 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-2xs">
                <label className="text-[10.5px] font-bold text-slate-600 dark:text-slate-300 block mb-0.5">
                  2. Trip Fuel ({mission.scenario.flightTimeHrs} h × {hourlyRate} L/h)
                </label>
                <div className="flex items-center gap-1.5">
                  <input
                    type="text"
                    placeholder={`Litros o Galones (Ej: ${expectedTripL})`}
                    value={currentInputs.tripFuel}
                    onChange={(e) => updateCurrentInput("tripFuel", e.target.value)}
                    className={`w-full px-2 py-1 rounded-lg border font-mono text-xs ${
                      errors.trip
                        ? "border-rose-500 bg-rose-50 text-rose-700"
                        : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900"
                    }`}
                  />
                  <span className="text-xs font-bold text-slate-500 shrink-0">L / Gal</span>
                </div>
                {errors.trip && <span className="text-[9.5px] text-rose-600 font-medium block mt-0.5">{errors.trip}</span>}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {/* Reserve Fuel */}
              <div className="p-2 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-2xs">
                <label className="text-[10.5px] font-bold text-slate-600 dark:text-slate-300 block mb-0.5">
                  3. Reserva Final OM (1h 30m = {expectedBlueTeamReserveL} L)
                </label>
                <div className="flex items-center gap-1.5">
                  <input
                    type="text"
                    placeholder={`Litros o Galones (Ej: ${expectedBlueTeamReserveL})`}
                    value={currentInputs.reserveFuel}
                    onChange={(e) => updateCurrentInput("reserveFuel", e.target.value)}
                    className={`w-full px-2 py-1 rounded-lg border font-mono text-xs ${
                      errors.reserve
                        ? "border-rose-500 bg-rose-50 text-rose-700"
                        : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900"
                    }`}
                  />
                  <span className="text-xs font-bold text-slate-500 shrink-0">L / Gal</span>
                </div>
                {errors.reserve && <span className="text-[9.5px] text-rose-600 font-medium block mt-0.5">{errors.reserve}</span>}
              </div>

              {/* Landing Fuel */}
              <div className="p-2 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-2xs">
                <label className="text-[10.5px] font-bold text-slate-600 dark:text-slate-300 block mb-0.5">
                  4. Landing Fuel (≥ Reserva Final {expectedBlueTeamReserveL} L)
                </label>
                <div className="flex items-center gap-1.5">
                  <input
                    type="text"
                    placeholder={`Litros o Galones (Ej: ${expectedLandingL})`}
                    value={currentInputs.landingFuel}
                    onChange={(e) => updateCurrentInput("landingFuel", e.target.value)}
                    className={`w-full px-2 py-1 rounded-lg border font-mono text-xs ${
                      errors.landing
                        ? "border-rose-500 bg-rose-50 text-rose-700"
                        : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900"
                    }`}
                  />
                  <span className="text-xs font-bold text-slate-500 shrink-0">L / Gal</span>
                </div>
                {errors.landing && <span className="text-[9.5px] text-rose-600 font-medium block mt-0.5">{errors.landing}</span>}
              </div>
            </div>

            {/* Ramp Fuel */}
            <div className="p-2.5 rounded-xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 space-y-1 shadow-2xs">
              <label className="text-[11px] font-extrabold text-[#0B2E59] dark:text-sky-300 block">
                5. Ramp Fuel Mínimo Requerido (Taxi + Trip + Landing)
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder={`Combustible total rampa (Ej: ${expectedRampL})`}
                  value={currentInputs.rampFuel}
                  onChange={(e) => updateCurrentInput("rampFuel", e.target.value)}
                  className={`flex-1 px-2.5 py-1.5 rounded-lg border font-mono text-xs font-bold ${
                    errors.ramp
                      ? "border-rose-500 bg-rose-50 text-rose-700"
                      : "border-blue-300 dark:border-blue-700 bg-white dark:bg-slate-900 text-blue-900 dark:text-blue-100"
                  }`}
                />
                <span className="text-xs font-bold text-blue-700 dark:text-blue-300 shrink-0">Totales</span>
              </div>
              {errors.ramp && <span className="text-[9.5px] text-rose-600 font-medium block">{errors.ramp}</span>}
            </div>
          </div>

          {/* Bottom Actions & Feedback */}
          <div className="space-y-1.5 pt-1 border-t border-slate-200 dark:border-slate-800 shrink-0">
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-slate-500">
                {selectedMissionIndex === 0 ? (
                  <span className="text-emerald-700 dark:text-emerald-400 font-bold">
                    ✓ Modelo de referencia resuelto
                  </span>
                ) : (
                  <span>
                    Ejercicios resueltos: <strong>{solvedPracticeCount} de 2</strong> (M2 y M3)
                  </span>
                )}
              </span>
              <button
                type="button"
                onClick={handleValidate}
                className={`px-4 py-1.5 rounded-xl font-bold text-xs text-white shadow-xs cursor-pointer transition-all ${
                  selectedMissionIndex === 0
                    ? "bg-emerald-600 hover:bg-emerald-700"
                    : "bg-[#1a80ff] hover:bg-[#0066e6]"
                }`}
              >
                {selectedMissionIndex === 0 ? "Pasar a Misión 2 (Ejercicio) ➔" : "Validar Combustible F.OPS.02 ➔"}
              </button>
            </div>

            {warnings.length > 0 && (
              <div className="p-1.5 rounded-lg border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30 text-amber-900 dark:text-amber-200 text-[10px]">
                {warnings.map((w, idx) => (
                  <div key={idx}>ℹ️ {w}</div>
                ))}
              </div>
            )}

            {isCurrentMissionSolved && (
              <div className="p-2 rounded-lg border border-emerald-300 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 text-xs">
                <strong className="font-bold">
                  {selectedMissionIndex === 0
                    ? "✓ MODELO OFICIAL RESUELTO (M1):"
                    : `✓ ¡PLANIFICACIÓN DE COMBUSTIBLE VÁLIDA (M${selectedMissionIndex + 1})!`}
                </strong>
                <p className="text-[10px] mt-0.5">
                  Ramp: {expectedRampL} L ({(expectedRampL / 3.78541).toFixed(1)} Gal) · Trip: {expectedTripL} L ({(expectedTripL / 3.78541).toFixed(1)} Gal) · Reserva Final OM: {expectedBlueTeamReserveL} L ({(expectedBlueTeamReserveL / 3.78541).toFixed(1)} Gal) · Landing: {expectedLandingL} L ({(expectedLandingL / 3.78541).toFixed(1)} Gal).
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Columna Derecha (lg:col-span-5): Resumen Visual y Cumplimiento EASA (Altura Fija 590px) */}
      <div className="lg:col-span-5 flex flex-col">
        <div
          className="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs"
          style={{ height: "590px" }}
        >
          <div className="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
            <div>
              <span className="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm block">
                📊 DESGLOSE F.OPS.02 & PART-NCO
              </span>
              <span className="text-[10px] text-slate-500 font-medium">
                Verificación de Bloques de Combustible
              </span>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300 shrink-0">
              EASA OP.125
            </span>
          </div>

          {/* Visual Breakdown - Aligned to top */}
          <div className="flex-1 min-h-0 overflow-y-auto my-1 space-y-2 text-xs flex flex-col justify-start pt-1">
            {/* Visual Fuel Bars */}
            <div className="p-3 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-2 shadow-2xs">
              <span className="font-bold text-[#0B2E59] dark:text-sky-300 text-[11px] block uppercase">
                Proporción de Depósitos ({mission.scenario.takeoffFuelLiters} L / {(mission.scenario.takeoffFuelLiters / 3.78541).toFixed(1)} US Gal Cargados)
              </span>

              <div className="w-full bg-slate-100 dark:bg-slate-900 rounded-xl overflow-hidden h-7 flex border border-slate-300 dark:border-slate-700">
                <div
                  style={{ width: `${(taxiFuelL / mission.scenario.takeoffFuelLiters) * 100}%` }}
                  className="bg-amber-400 flex items-center justify-center text-[10px] font-bold text-amber-950"
                  title={`Taxi: ${taxiFuelL} L`}
                >
                  Taxi
                </div>
                <div
                  style={{ width: `${(expectedTripL / mission.scenario.takeoffFuelLiters) * 100}%` }}
                  className="bg-blue-500 flex items-center justify-center text-[10px] font-bold text-white"
                  title={`Trip: ${expectedTripL} L`}
                >
                  Trip ({expectedTripL} L)
                </div>
                <div
                  style={{ width: `${(expectedBlueTeamReserveL / mission.scenario.takeoffFuelLiters) * 100}%` }}
                  className="bg-purple-600 flex items-center justify-center text-[10px] font-bold text-white"
                  title={`Reserva Final OM 1h 30m: ${expectedBlueTeamReserveL} L (incluye los 45 min legales)`}
                >
                  Reserva 1:30 ({expectedBlueTeamReserveL} L)
                </div>
                <div
                  style={{ width: `${(expectedAlternateL / mission.scenario.takeoffFuelLiters) * 100}%` }}
                  className="bg-teal-600 flex items-center justify-center text-[9.5px] font-bold text-white"
                  title={`Alternativo: ${expectedAlternateL} L (~20 min)`}
                >
                  Alt ({expectedAlternateL} L)
                </div>
                <div className="flex-1 bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-[10px] font-bold text-slate-600 dark:text-slate-300">
                  Extra
                </div>
              </div>

              <div className="grid grid-cols-2 gap-1.5 text-[10px] text-slate-600 dark:text-slate-400 font-medium">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded bg-amber-400 shrink-0"></span>
                  <span>Taxi: {taxiFuelL} L ({(taxiFuelL / 3.78541).toFixed(1)} Gal)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded bg-blue-500 shrink-0"></span>
                  <span>Trip ({mission.scenario.flightTimeHrs}h): {expectedTripL} L ({(expectedTripL / 3.78541).toFixed(1)} Gal)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded bg-purple-600 shrink-0"></span>
                  <span>Reserva Final (1h 30m): {expectedBlueTeamReserveL} L (incluye 45m legales)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded bg-teal-600 shrink-0"></span>
                  <span>Alternativo (20m): {expectedAlternateL} L ({(expectedAlternateL / 3.78541).toFixed(1)} Gal)</span>
                </div>
              </div>
            </div>

            {/* Regulatory rules comparison */}
            <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1.5 text-[11px] text-slate-700 dark:text-slate-300">
              <div className="p-2 rounded-lg bg-purple-50/70 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800">
                <strong className="text-purple-900 dark:text-purple-300 block uppercase font-bold text-[10px] mb-0.5">
                  1. Política Blue Team (Manual OM): Reserva Final 1h 30min Total
                </strong>
                <p className="leading-tight text-[10.5px]">
                  La reserva final obligatoria en Blue Team es de <strong>1 hora y 30 minutos ({expectedBlueTeamReserveL} L / 6.08 US Gal)</strong>. Esta reserva <strong>ya incluye los 45 minutos mínimos</strong> legales exigidos por EASA Part-NCO.OP.125 (no se suman aparte; la reserva final es de 1h 30m en total).
                </p>
              </div>

              <div className="p-2 rounded-lg bg-teal-50/70 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800">
                <strong className="text-teal-900 dark:text-teal-300 block uppercase font-bold text-[10px] mb-0.5">
                  2. Combustible para Aeródromo Alternativo:
                </strong>
                <p className="leading-tight text-[10.5px]">
                  En caso de planificar aeródromo alternativo se añaden <strong>{expectedAlternateL} L (1.35 US Gal)</strong> correspondientes a ~20 min de vuelo adicional de desvío.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
