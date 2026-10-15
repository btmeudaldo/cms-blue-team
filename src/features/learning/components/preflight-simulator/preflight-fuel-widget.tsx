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
  const [isPassed, setIsPassed] = useState(isAlreadyCompleted);

  // Flight school cruise power: 55% Load = 17.0 L/h (or 50% = 15.3 L/h)
  const loadPct = mission.scenario.cruiseLoadPct; // 55% or 50%
  const hourlyRate = loadPct === 50 ? 15.3 : 17.0;

  // Taxi: 3.0 L (puesta en marcha, calentamiento y rodaje)
  const taxiFuelL = 3.0;
  const expectedTripL = Math.round(mission.scenario.flightTimeHrs * hourlyRate * 10) / 10;
  const expectedReserveL = Math.round(0.75 * hourlyRate * 10) / 10; // 12.8 L @ 55% or 11.5 L @ 50%
  const expectedLandingL = expectedReserveL;
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
          ? `Solución: Trip fuel = ${mission.scenario.flightTimeHrs} h × ${hourlyRate} L/h = ${expectedTripL} L.`
          : `Calcula el combustible de ruta para ${mission.scenario.flightTimeHrs} h al ${loadPct}% (${hourlyRate} L/h).`;
    }

    // Check Reserve Fuel (45 min VFR)
    const userReserve = num(reserveFuelLiters);
    if (isNaN(userReserve) || !checkValueTolerance(userReserve, expectedReserveL, 0.06, 0.6).isOk) {
      newErrors.reserve =
        attempts >= 2
          ? `Solución: Reserva final 45 min = 0.75 h × ${hourlyRate} L/h = ${expectedReserveL} L.`
          : `La reserva obligatoria EASA (45 min) a ${hourlyRate} L/h es: 0.75 h × ${hourlyRate} L/h.`;
    } else if (Math.abs(userReserve - expectedReserveL) > 0.1) {
      newWarnings.push(`Reserva legal: Tu valor (${userReserve} L) es aceptado por redondeo (${expectedReserveL} L).`);
    }

    // Check Landing Fuel (at least Reserve)
    const userLanding = num(landingFuelLiters);
    if (isNaN(userLanding) || userLanding < expectedReserveL * 0.95) {
      newErrors.landing =
        attempts >= 2
          ? `Solución: Landing Fuel debe ser igual o superior a la Reserva (${expectedReserveL} L).`
          : `El combustible remanente en destino no puede ser inferior a la Reserva final legal (${expectedReserveL} L).`;
    }

    // Check Ramp Fuel (Trip + Landing + Taxi)
    const userRamp = num(rampFuelLiters);
    if (isNaN(userRamp) || !checkValueTolerance(userRamp, expectedRampL, 0.06, 1.2).isOk) {
      newErrors.ramp =
        attempts >= 2
          ? `Solución: Ramp Fuel = Trip (${expectedTripL}) + Landing (${expectedLandingL}) + Taxi (${taxiFuelL} L) = ${expectedRampL} L.`
          : `Ramp Fuel = Trip (${expectedTripL} L) + Landing (${expectedLandingL} L) + Taxi (${taxiFuelL} L).`;
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
                {mission.name} · {mission.scenario.flightTimeHrs} h vuelo · Régimen Escuela {loadPct}% ({hourlyRate} L/h)
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

          {/* Form Content */}
          <div className="flex-1 min-h-0 overflow-y-auto my-1 space-y-2">
            <div className="grid grid-cols-2 gap-2">
              {/* Taxi Fuel */}
              <div className="p-2 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-2xs">
                <span className="text-[10.5px] font-bold text-slate-600 dark:text-slate-300 block mb-0.5">
                  1. Taxi Fuel (Rodaje y Puesta en Marcha)
                </span>
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono font-bold text-[#0B2E59] dark:text-sky-300 text-sm">
                    {taxiFuelL.toFixed(1)} L
                  </span>
                  <span className="text-[10px] text-slate-500 font-medium">Fijo estándar F.OPS.02</span>
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
                  3. Reserva Final Obligatoria (45 min VFR)
                </label>
                <div className="flex items-center gap-1.5">
                  <input
                    type="text"
                    placeholder={`Litros (Ej: ${expectedReserveL})`}
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
                  4. Landing Fuel Remanente (≥ Reserva)
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
                  Ramp: {expectedRampL} L · Trip: {expectedTripL} L · Reserva 45 min: {expectedReserveL} L · Landing: {expectedLandingL} L.
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

          <div className="flex-1 min-h-0 overflow-y-auto my-1 space-y-2 text-xs">
            {/* Visual Fuel Bars */}
            <div className="p-3 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-2 shadow-2xs">
              <span className="font-bold text-[#0B2E59] dark:text-sky-300 text-[11px] block uppercase">
                Proporción de Depósitos ({mission.scenario.takeoffFuelLiters} L Cargados)
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
                  style={{ width: `${(expectedReserveL / mission.scenario.takeoffFuelLiters) * 100}%` }}
                  className="bg-emerald-500 flex items-center justify-center text-[9px] font-bold text-white"
                  title="45 min Reserve"
                >
                  45 min
                </div>
                <div className="flex-1 bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-[9px] font-bold text-slate-600 dark:text-slate-300">
                  Extra
                </div>
              </div>

              <div className="grid grid-cols-2 gap-1.5 text-[10px] text-slate-600 dark:text-slate-400 font-medium">
                <div className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded bg-amber-400 shrink-0"></span>
                  <span>Taxi: {taxiFuelL} L</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded bg-blue-500 shrink-0"></span>
                  <span>Trip: {expectedTripL} L</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded bg-emerald-500 shrink-0"></span>
                  <span>Reserva 45m: {expectedReserveL} L</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded bg-slate-400 shrink-0"></span>
                  <span>Remanente seguro</span>
                </div>
              </div>
            </div>

            {/* Regulatory rules */}
            <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1 text-[11px] text-slate-700 dark:text-slate-300">
              <strong className="text-[#0B2E59] dark:text-sky-300 block uppercase font-bold text-[10px]">
                Norma Operacional EASA Part-NCO.OP.125:
              </strong>
              <p className="leading-tight">
                El piloto al mando no iniciará ningún vuelo a menos que el avión transporte suficiente combustible utilizable para:
              </p>
              <ul className="list-disc pl-4 space-y-0.5 text-[10px] text-slate-600 dark:text-slate-400">
                <li>Volar hasta el aeródromo de destino previsto (Trip Fuel).</li>
                <li>Permanecer volando a velocidad de crucero normal durante al menos <strong>45 minutos</strong> adicionales.</li>
                <li>Compensar puesta en marcha, rodaje y contingencias imprevistas de tráfico.</li>
              </ul>
            </div>
          </div>

          <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium pt-1 px-1 border-t border-slate-200/60 dark:border-slate-800/60 shrink-0">
            Ref. Documental: Formulario F.OPS.02 · Fuel Quantity Section
          </div>
        </div>
      </div>
    </div>
  );
}
