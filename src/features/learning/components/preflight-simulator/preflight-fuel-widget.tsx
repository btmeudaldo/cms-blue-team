"use client";

import React, { useState } from "react";
import { PREFLIGHT_MISSIONS, checkValueTolerance } from "./constants";

type Props = {
  onExerciseCompleted?: () => void;
  isAlreadyCompleted?: boolean;
};

export function PreflightFuelWidget({
  onExerciseCompleted,
  isAlreadyCompleted = false,
}: Props) {
  const [selectedMissionIndex, setSelectedMissionIndex] = useState(1);
  const mission = PREFLIGHT_MISSIONS[selectedMissionIndex];

  // Inputs in Liters
  const [tripFuelLiters, setTripFuelLiters] = useState("");
  const [reserveFuelLiters, setReserveFuelLiters] = useState("");
  const [landingFuelLiters, setLandingFuelLiters] = useState("");
  const [rampFuelLiters, setRampFuelLiters] = useState("");

  // Feedback states
  const [attempts, setAttempts] = useState(0);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [warnings, setWarnings] = useState<string[]>([]);
  const [isPassed, setIsPassed] = useState(false);

  // Flight school cruise power: 50% Load = 15.3 L/h (TAE 125-02-114 Continental CD-155)
  const hourlyRate = 15.3;

  // Taxi: 3.0 L (puesta en marcha, calentamiento y rodaje)
  const taxiFuelL = 3.0;
  const expectedTripL = Math.round(mission.scenario.flightTimeHrs * hourlyRate * 10) / 10;
  
  // Reservas: EASA 45 min vs. Blue Team OM 1h 30min (+ alternativo)
  const expectedEasaReserveL = 11.5; // 45 min = 0.75 h × 15.3 L/h
  const expectedBlueTeamReserveL = 23.0; // 1h 30min = 1.5 h × 15.3 L/h
  const expectedAlternateL = 5.1; // Desvío a alternativo ~20 min
  const expectedBlueTeamTotalReserveL = 28.1; // 23.0 + 5.1 L

  // Default expected landing fuel is at least EASA reserve (11.5 L) or Blue Team reserve (23.0 L)
  const expectedLandingL = expectedEasaReserveL;
  const expectedRampL = Math.round((expectedTripL + expectedLandingL + taxiFuelL) * 10) / 10;

  const handleValidate = () => {
    const newErrors: Record<string, string> = {};
    const newWarnings: string[] = [];
    const num = (v: string) => parseFloat(v.replace(",", "."));

    // Check Trip Fuel
    const userTrip = num(tripFuelLiters);
    if (isNaN(userTrip) || !checkValueTolerance(userTrip, expectedTripL, 0.06, 0.6).isOk) {
      newErrors.trip =
        attempts >= 2
          ? `Solución: Trip fuel = ${mission.scenario.flightTimeHrs} h × 15.3 L/h = ${expectedTripL} L.`
          : `Calcula el combustible de ruta para ${mission.scenario.flightTimeHrs} h al 50% de potencia CD-155 (15.3 L/h).`;
    }

    // Check Reserve Fuel (Accepts 45 min EASA 11.5 L, Blue Team OM 1:30 23.0 L, or with Alternate 28.1 L)
    const userReserve = num(reserveFuelLiters);
    const isEasaMatch = !isNaN(userReserve) && checkValueTolerance(userReserve, expectedEasaReserveL, 0.08, 0.8).isOk;
    const isBlueTeamMatch = !isNaN(userReserve) && checkValueTolerance(userReserve, expectedBlueTeamReserveL, 0.08, 1.2).isOk;
    const isBlueTeamAltMatch = !isNaN(userReserve) && checkValueTolerance(userReserve, expectedBlueTeamTotalReserveL, 0.08, 1.5).isOk;

    if (isNaN(userReserve) || (!isEasaMatch && !isBlueTeamMatch && !isBlueTeamAltMatch)) {
      newErrors.reserve =
        attempts >= 2
          ? `Solución: EASA exige 45 min (${expectedEasaReserveL} L). En Blue Team por manual exigimos al menos 1:30 (${expectedBlueTeamReserveL} L) más combustible al alternativo (total ~${expectedBlueTeamTotalReserveL} L).`
          : `Calcula la reserva: EASA 45 min = 11.5 L, o política Blue Team OM 1h 30min = 23.0 L (a 15.3 L/h).`;
    } else if (isBlueTeamAltMatch) {
      newWarnings.push(`✓ ¡Excelente! Has incluido 1h 30min de reserva final (${expectedBlueTeamReserveL} L) + combustible para alternativo (${expectedAlternateL} L).`);
    } else if (isBlueTeamMatch) {
      newWarnings.push(`✓ Cumples la política Blue Team OM (1:30 de reserva final = ${expectedBlueTeamReserveL} L). Recuerda añadir combustible al alternativo.`);
    } else if (isEasaMatch) {
      newWarnings.push(`✓ Mínimo legal EASA Part-NCO.OP.125 (45 min = ${expectedEasaReserveL} L). En Blue Team por manual se requiere al menos 1:30.`);
    }

    // Check Landing Fuel (must be at least userReserve or minimum 11.5 L)
    const userLanding = num(landingFuelLiters);
    const minAcceptableLanding = !isNaN(userReserve) && userReserve > 0 ? userReserve * 0.95 : expectedEasaReserveL * 0.95;
    if (isNaN(userLanding) || userLanding < minAcceptableLanding) {
      newErrors.landing =
        attempts >= 2
          ? `Solución: Landing Fuel remanente en destino debe ser al menos igual a la reserva (${userReserve > 0 ? userReserve : expectedEasaReserveL} L).`
          : `El combustible remanente en los tanques al tocar pista debe cubrir la reserva final legal.`;
    }

    // Check Ramp Fuel (Trip + userLanding + Taxi 3.0 L)
    const expectedUserRamp = !isNaN(userTrip) && !isNaN(userLanding)
      ? Math.round((userTrip + userLanding + taxiFuelL) * 10) / 10
      : expectedRampL;

    const userRamp = num(rampFuelLiters);
    if (isNaN(userRamp) || !checkValueTolerance(userRamp, expectedUserRamp, 0.06, 1.5).isOk) {
      newErrors.ramp =
        attempts >= 2
          ? `Solución: Ramp Fuel = Trip (${userTrip || expectedTripL} L) + Landing (${userLanding || expectedLandingL} L) + Taxi (${taxiFuelL} L) = ${expectedUserRamp} L.`
          : `Ramp Fuel = Trip + Landing Fuel + Taxi (${taxiFuelL} L).`;
    }

    setErrors(newErrors);
    setWarnings(newWarnings);

    if (Object.keys(newErrors).length === 0) {
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
                {mission.name} · {mission.scenario.flightTimeHrs} h vuelo · Régimen Escuela 50% ({hourlyRate} L/h · {(hourlyRate / 3.78541).toFixed(1)} US Gal/h)
              </div>
            </div>
            <div className="flex items-center gap-1 shrink-0">
              {PREFLIGHT_MISSIONS.map((m, idx) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => {
                    setSelectedMissionIndex(idx);
                    setAttempts(0);
                    setErrors({});
                    setWarnings([]);
                  }}
                  className={`px-2 py-0.5 rounded-lg text-[10px] font-extrabold transition-all cursor-pointer ${
                    selectedMissionIndex === idx
                      ? "bg-[#1a80ff] text-white shadow-2xs"
                      : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100"
                  }`}
                >
                  M{idx + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Form Content - Aligned to top */}
          <div className="flex-1 min-h-0 overflow-y-auto my-1 space-y-2 flex flex-col justify-start pt-1">
            <div className="grid grid-cols-2 gap-2">
              {/* Taxi Fuel */}
              <div className="p-2 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-2xs">
                <span className="text-[10.5px] font-bold text-slate-600 dark:text-slate-300 block mb-0.5">
                  1. Taxi Fuel (Rodaje y Puesta en Marcha)
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
                  2. Trip Fuel ({mission.scenario.flightTimeHrs} h × {hourlyRate} L/h · {(hourlyRate / 3.78541).toFixed(1)} Gal/h)
                </label>
                <div className="flex items-center gap-1.5">
                  <input
                    type="text"
                    placeholder={`Litros (Ej: ${expectedTripL})`}
                    value={tripFuelLiters}
                    onChange={(e) => setTripFuelLiters(e.target.value)}
                    className={`w-full px-2 py-1 rounded-lg border font-mono text-xs ${
                      errors.trip
                        ? "border-rose-500 bg-rose-50 text-rose-700"
                        : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900"
                    }`}
                  />
                  <span className="text-xs font-bold text-slate-500 shrink-0">L</span>
                </div>
                {errors.trip && <span className="text-[9.5px] text-rose-600 font-medium block mt-0.5">{errors.trip}</span>}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {/* Reserve Fuel */}
              <div className="p-2 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-2xs">
                <label className="text-[10.5px] font-bold text-slate-600 dark:text-slate-300 block mb-0.5">
                  3. Reserva Final (45m = {expectedEasaReserveL} L / {(expectedEasaReserveL / 3.78541).toFixed(1)} Gal)
                </label>
                <div className="flex items-center gap-1.5">
                  <input
                    type="text"
                    placeholder={`Litros (Ej: ${expectedEasaReserveL})`}
                    value={reserveFuelLiters}
                    onChange={(e) => setReserveFuelLiters(e.target.value)}
                    className={`w-full px-2 py-1 rounded-lg border font-mono text-xs ${
                      errors.reserve
                        ? "border-rose-500 bg-rose-50 text-rose-700"
                        : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900"
                    }`}
                  />
                  <span className="text-xs font-bold text-slate-500 shrink-0">L</span>
                </div>
                {errors.reserve && <span className="text-[9.5px] text-rose-600 font-medium block mt-0.5">{errors.reserve}</span>}
              </div>

              {/* Landing Fuel */}
              <div className="p-2 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-2xs">
                <label className="text-[10.5px] font-bold text-slate-600 dark:text-slate-300 block mb-0.5">
                  4. Landing Fuel (≥ OM {expectedBlueTeamTotalReserveL} L / {(expectedBlueTeamTotalReserveL / 3.78541).toFixed(1)} Gal)
                </label>
                <div className="flex items-center gap-1.5">
                  <input
                    type="text"
                    placeholder={`Litros (Ej: ${expectedLandingL})`}
                    value={landingFuelLiters}
                    onChange={(e) => setLandingFuelLiters(e.target.value)}
                    className={`w-full px-2 py-1 rounded-lg border font-mono text-xs ${
                      errors.landing
                        ? "border-rose-500 bg-rose-50 text-rose-700"
                        : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900"
                    }`}
                  />
                  <span className="text-xs font-bold text-slate-500 shrink-0">L</span>
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
                  placeholder={`Combustible total rampa en Litros (Ej: ${expectedRampL})`}
                  value={rampFuelLiters}
                  onChange={(e) => setRampFuelLiters(e.target.value)}
                  className={`flex-1 px-2.5 py-1.5 rounded-lg border font-mono text-xs font-bold ${
                    errors.ramp
                      ? "border-rose-500 bg-rose-50 text-rose-700"
                      : "border-blue-300 dark:border-blue-700 bg-white dark:bg-slate-900 text-blue-900 dark:text-blue-100"
                  }`}
                />
                <span className="text-xs font-bold text-blue-700 dark:text-blue-300 shrink-0">L Totales</span>
              </div>
              {errors.ramp && <span className="text-[9.5px] text-rose-600 font-medium block">{errors.ramp}</span>}
            </div>
          </div>

          {/* Bottom Actions & Feedback */}
          <div className="space-y-1.5 pt-1 border-t border-slate-200 dark:border-slate-800 shrink-0">
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-slate-500">
                Intentos: <strong>{attempts}</strong> {attempts >= 2 ? "· Pistas completas activas" : ""}
              </span>
              <button
                type="button"
                onClick={handleValidate}
                className="px-4 py-1.5 rounded-xl font-bold text-xs text-white bg-[#1a80ff] hover:bg-[#0066e6] shadow-xs cursor-pointer transition-all"
              >
                Validar Combustible F.OPS.02 ➔
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
                <strong className="font-bold">✓ ¡PLANIFICACIÓN DE COMBUSTIBLE VÁLIDA SEGÚN EASA!</strong>
                <p className="text-[10px] mt-0.5">
                  Ramp: {expectedRampL} L ({(expectedRampL / 3.78541).toFixed(1)} Gal) · Trip: {expectedTripL} L ({(expectedTripL / 3.78541).toFixed(1)} Gal) · Reserva EASA: {expectedEasaReserveL} L ({(expectedEasaReserveL / 3.78541).toFixed(1)} Gal) · OM: {expectedBlueTeamReserveL} L ({(expectedBlueTeamReserveL / 3.78541).toFixed(1)} Gal) · Landing: {expectedLandingL} L ({(expectedLandingL / 3.78541).toFixed(1)} Gal).
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

              <div className="w-full bg-slate-100 dark:bg-slate-900 rounded-xl overflow-hidden h-6 flex border border-slate-300 dark:border-slate-700">
                <div
                  style={{ width: `${(taxiFuelL / mission.scenario.takeoffFuelLiters) * 100}%` }}
                  className="bg-amber-400 flex items-center justify-center text-[9px] font-bold text-amber-950"
                  title="Taxi"
                >
                  Taxi
                </div>
                <div
                  style={{ width: `${(expectedTripL / mission.scenario.takeoffFuelLiters) * 100}%` }}
                  className="bg-blue-500 flex items-center justify-center text-[9px] font-bold text-white"
                  title="Trip"
                >
                  Trip
                </div>
                <div
                  style={{ width: `${(expectedEasaReserveL / mission.scenario.takeoffFuelLiters) * 100}%` }}
                  className="bg-emerald-500 flex items-center justify-center text-[9px] font-bold text-white"
                  title="45 min EASA"
                >
                  45m EASA
                </div>
                <div
                  style={{ width: `${((expectedBlueTeamTotalReserveL - expectedEasaReserveL) / mission.scenario.takeoffFuelLiters) * 100}%` }}
                  className="bg-indigo-500 flex items-center justify-center text-[9px] font-bold text-white"
                  title="OM Reserva Extra + Alt"
                >
                  +OM 1:30
                </div>
                <div className="flex-1 bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-[9px] font-bold text-slate-600 dark:text-slate-300">
                  Extra
                </div>
              </div>

              <div className="grid grid-cols-2 gap-1.5 text-[10px] text-slate-600 dark:text-slate-400 font-medium">
                <div className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded bg-amber-400 shrink-0"></span>
                  <span>Taxi: {taxiFuelL} L ({(taxiFuelL / 3.78541).toFixed(1)} Gal)</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded bg-blue-500 shrink-0"></span>
                  <span>Trip ({mission.scenario.flightTimeHrs}h): {expectedTripL} L ({(expectedTripL / 3.78541).toFixed(1)} Gal)</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded bg-emerald-500 shrink-0"></span>
                  <span>EASA 45m: {expectedEasaReserveL} L ({(expectedEasaReserveL / 3.78541).toFixed(1)} Gal)</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded bg-indigo-500 shrink-0"></span>
                  <span>OM 1:30 + Alt: {expectedBlueTeamTotalReserveL} L ({(expectedBlueTeamTotalReserveL / 3.78541).toFixed(1)} Gal)</span>
                </div>
              </div>
            </div>

            {/* Regulatory rules comparison */}
            <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1.5 text-[11px] text-slate-700 dark:text-slate-300">
              <div className="p-2 rounded-lg bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800">
                <strong className="text-emerald-900 dark:text-emerald-300 block uppercase font-bold text-[10px] mb-0.5">
                  1. Mínimo Legal EASA Part-NCO.OP.125:
                </strong>
                <p className="leading-tight text-[10.5px]">
                  Obligatorio llevar combustible de ruta más reserva final de <strong>45 minutos</strong> a régimen de crucero (<strong>11.5 L / 3.04 US Gal</strong> al 50% de potencia).
                </p>
              </div>

              <div className="p-2 rounded-lg bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800">
                <strong className="text-blue-900 dark:text-sky-300 block uppercase font-bold text-[10px] mb-0.5">
                  2. Política Operativa Blue Team (Manual OM):
                </strong>
                <p className="leading-tight text-[10.5px]">
                  Por Manual de Operaciones, en Blue Team debemos disponer de <strong>al menos 1h 30min (23.0 L / 6.08 US Gal) de reserva final</strong> (que ya incluye los 45 min reglamentarios), más el combustible necesario para alcanzar el aeródromo alternativo en caso de haber aterrizado en destino (~5.1 L / 1.35 US Gal adicionales).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
