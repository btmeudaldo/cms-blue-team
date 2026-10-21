"use client";

import React, { useState } from "react";
import { PREFLIGHT_MISSIONS, checkValueTolerance } from "./constants";

type Props = {
  onExerciseCompleted?: () => void;
  isAlreadyCompleted?: boolean;
};

// Official data points from TAE 125-02-114 Figure 5-4a (CD-155 at 1043 kg, Standard Tanks)
// Calibrated for flight school operations: 50% standard cruise power (and 55% reference)
const CRUISE_TABLE_DATA = [
  // 50% Load (Long Range / Estándar Escuela): 15.3 l/h (4.0 US Gal/h)
  { alt: 2000, load: 50, ktas: 99, fuelFlowLh: 15.3, fuelFlowGal: 4.0, rangeNm: 718, enduranceHrs: 7.2 },
  { alt: 4000, load: 50, ktas: 100, fuelFlowLh: 15.3, fuelFlowGal: 4.0, rangeNm: 720, enduranceHrs: 7.1 },
  { alt: 6000, load: 50, ktas: 102, fuelFlowLh: 15.3, fuelFlowGal: 4.0, rangeNm: 728, enduranceHrs: 6.9 },
  { alt: 8000, load: 50, ktas: 103, fuelFlowLh: 15.3, fuelFlowGal: 4.0, rangeNm: 729, enduranceHrs: 6.8 },

  // 55% Load (Crucero Rápido): 17.0 l/h (4.5 US Gal/h)
  { alt: 2000, load: 55, ktas: 103, fuelFlowLh: 17.0, fuelFlowGal: 4.5, rangeNm: 675, enduranceHrs: 6.5 },
  { alt: 4000, load: 55, ktas: 105, fuelFlowLh: 17.0, fuelFlowGal: 4.5, rangeNm: 678, enduranceHrs: 6.4 },
  { alt: 6000, load: 55, ktas: 106, fuelFlowLh: 17.0, fuelFlowGal: 4.5, rangeNm: 683, enduranceHrs: 6.2 },
  { alt: 8000, load: 55, ktas: 108, fuelFlowLh: 17.0, fuelFlowGal: 4.5, rangeNm: 686, enduranceHrs: 6.1 },
];

export function PreflightCruiseWidget({
  onExerciseCompleted,
  isAlreadyCompleted = false,
}: Props) {
  const [selectedMissionIndex, setSelectedMissionIndex] = useState(1); // default Mission 2 (Travesía)
  const [selectedTablePower, setSelectedTablePower] = useState<50 | 55>(50); // Filter for right table
  const mission = PREFLIGHT_MISSIONS[selectedMissionIndex];

  // Inputs
  const [ktasInput, setKtasInput] = useState("");
  const [fuelFlowInput, setFuelFlowInput] = useState("");
  const [timeHrsInput, setTimeHrsInput] = useState("");
  const [tripFuelLitersInput, setTripFuelLitersInput] = useState("");
  const [tripFuelKgInput, setTripFuelKgInput] = useState("");
  const [maxRangeInput, setMaxRangeInput] = useState("");

  // Feedback states
  const [attempts, setAttempts] = useState(0);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [warnings, setWarnings] = useState<string[]>([]);
  const [isPassed, setIsPassed] = useState(false);

  const alt = selectedMissionIndex === 0 ? 2000 : selectedMissionIndex === 1 ? 6000 : 4000;
  const loadPct = 50; // Standard flight school cruise load is 50%

  const targetRow =
    CRUISE_TABLE_DATA.find((r) => r.alt === alt && r.load === loadPct) ||
    CRUISE_TABLE_DATA[0];

  const expectedKtas = targetRow.ktas;
  const expectedFuelFlow = targetRow.fuelFlowLh;
  const expectedFuelFlowGal = targetRow.fuelFlowGal;

  const expectedTimeHrs = Math.round((mission.scenario.distanceNm / expectedKtas) * 100) / 100;
  
  // Trip Fuel in Liters and US Gallons
  const expectedTripLiters = Math.round(expectedTimeHrs * expectedFuelFlow * 10) / 10;
  const expectedTripGallons = Math.round(expectedTimeHrs * expectedFuelFlowGal * 10) / 10;

  // Trip Fuel Mass in Kg and Pounds (lbs)
  const expectedTripKg = Math.round(expectedTripLiters * 0.84 * 10) / 10;
  const expectedTripLbs = Math.round(expectedTripKg * 2.20462 * 10) / 10;

  const expectedMaxRange = targetRow.rangeNm;

  const handleValidate = () => {
    const newErrors: Record<string, string> = {};
    const newWarnings: string[] = [];
    const num = (v: string) => parseFloat(v.replace(",", "."));

    // 1. Check KTAS
    const userKtas = num(ktasInput);
    if (isNaN(userKtas) || !checkValueTolerance(userKtas, expectedKtas, 0.02, 1.5).isOk) {
      newErrors.ktas =
        attempts >= 1
          ? `En la tabla Fig. 5-4a a ${alt} ft y ${loadPct}% Load, la velocidad es de ${expectedKtas} KTAS.`
          : `Revisa la tabla oficial: busca la fila de ${alt} ft y columna KTAS al ${loadPct}% de carga.`;
    }

    // 2. Check Fuel Flow (supports L/h or US Gal/h)
    const userFf = num(fuelFlowInput);
    const isFfLiters = checkValueTolerance(userFf, expectedFuelFlow, 0.02, 0.3).isOk;
    const isFfGallons = checkValueTolerance(userFf, expectedFuelFlowGal, 0.05, 0.2).isOk;
    if (isNaN(userFf) || (!isFfLiters && !isFfGallons)) {
      newErrors.fuelFlow =
        attempts >= 1
          ? `En la tabla figura ${expectedFuelFlow} L/h (o ${expectedFuelFlowGal} US Gal/h). Ambas unidades son válidas.`
          : `Consulta la columna de consumo en la tabla: ${expectedFuelFlow} L/h o ${expectedFuelFlowGal} Gal/h.`;
    } else if (isFfGallons) {
      newWarnings.push(`Gasto horario introducido en US Galones: ${userFf} Gal/h (equivale a ${expectedFuelFlow} L/h).`);
    }

    // 3. Check Time in Hours
    const userTime = num(timeHrsInput);
    if (isNaN(userTime) || !checkValueTolerance(userTime, expectedTimeHrs, 0.06, 0.05).isOk) {
      newErrors.timeHrs =
        attempts >= 1
          ? `Tiempo = ${mission.scenario.distanceNm} NM / ${expectedKtas} KTAS = ${expectedTimeHrs} h (~${Math.round(expectedTimeHrs * 60)} min).`
          : `Divide la distancia de ${mission.scenario.distanceNm} NM entre la velocidad verdadera (${expectedKtas} kt).`;
    }

    // 4. Check Trip Fuel (supports Liters OR Gallons)
    const userTrip = num(tripFuelLitersInput);
    const isTripLiters = checkValueTolerance(userTrip, expectedTripLiters, 0.06, 0.6).isOk;
    const isTripGallons =
      checkValueTolerance(userTrip, expectedTripGallons, 0.06, 0.25).isOk ||
      checkValueTolerance(userTrip, expectedTripLiters / 3.78541, 0.06, 0.25).isOk;
    if (isNaN(userTrip) || (!isTripLiters && !isTripGallons)) {
      newErrors.tripLiters =
        attempts >= 1
          ? `Trip Fuel = ${expectedTimeHrs} h × ${expectedFuelFlow} L/h = ${expectedTripLiters} L (o en galones: ${expectedTimeHrs} h × ${expectedFuelFlowGal} Gal/h = ${expectedTripGallons} Gal).`
          : `Combustible de ruta = Tiempo en horas (${expectedTimeHrs} h) × Gasto horario (${expectedFuelFlow} L/h o ${expectedFuelFlowGal} Gal/h).`;
    } else if (isTripGallons) {
      newWarnings.push(`Trip Fuel introducido en US Galones: ${userTrip} Gal (equivale a ${expectedTripLiters} L).`);
    }

    // 5. Check Trip Fuel Mass (supports Kg OR Lbs)
    const userTripMass = num(tripFuelKgInput);
    const isMassKg = checkValueTolerance(userTripMass, expectedTripKg, 0.06, 0.6).isOk;
    const isMassLbs = checkValueTolerance(userTripMass, expectedTripLbs, 0.06, 1.2).isOk;
    if (isNaN(userTripMass) || (!isMassKg && !isMassLbs)) {
      newErrors.tripKg =
        attempts >= 1
          ? `Masa = ${expectedTripLiters} L × 0.84 = ${expectedTripKg} kg (o en libras: ${expectedTripLbs} lbs).`
          : "Multiplica los litros por la densidad de 0.84 kg/L (o galones por 7.01 lbs/Gal).";
    } else if (isMassLbs) {
      newWarnings.push(`Masa de combustible introducida en Libras: ${userTripMass} lbs (equivale a ${expectedTripKg} kg).`);
    }

    // 6. Check Max Range
    const userRange = num(maxRangeInput);
    if (isNaN(userRange) || !checkValueTolerance(userRange, expectedMaxRange, 0.03, 8).isOk) {
      newErrors.maxRange =
        attempts >= 1
          ? `En la columna 'Distance Range [NM]' a ${alt} ft y 50% de Load figura ${expectedMaxRange} NM.`
          : "Busca en la columna 'Distance Range [NM]' el alcance máximo con depósitos estándar.";
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

  const displayedRows = CRUISE_TABLE_DATA.filter((r) => r.load === selectedTablePower);
  const errorCount = Object.keys(errors).length;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
      {/* Columna Izquierda (lg:col-span-7): Formulario de Crucero (Altura Fija 590px) */}
      <div className="lg:col-span-7 flex flex-col">
        <div
          className="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs"
          style={{ height: "590px" }}
        >
          {/* Header & Mission Selector */}
          <div className="flex items-center justify-between pb-1.5 border-b border-slate-200 dark:border-slate-800 shrink-0">
            <div>
              <span className="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-[14px]">
                ⏱️ CRUCERO Y AUTONOMÍA (50% LOAD)
              </span>
              <div className="text-xs sm:text-[13px] text-slate-500 font-medium">
                {mission.name} · {alt} ft · {loadPct}% Potencia · {mission.scenario.distanceNm} NM
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
                  className={`px-2.5 py-1 rounded-lg text-xs sm:text-[13px] font-extrabold transition-all cursor-pointer ${
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

          {/* Form Content - Ajustado para no requerir scroll */}
          <div className="flex-1 my-1 space-y-2 flex flex-col justify-start pt-0.5">
            {/* Step 1: Reading from Table */}
            <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-1.5 shadow-2xs">
              <span className="text-xs sm:text-[13px] font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wide block border-b pb-0.5">
                1. Lectura en Tabla Fig. 5-4a ({alt} ft / {loadPct}% Load)
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs sm:text-[13px]">
                <div>
                  <div className="flex items-center justify-between mb-0.5">
                    <label className="font-semibold text-slate-600 dark:text-slate-300">
                      Velocidad (KTAS):
                    </label>
                    {errors.ktas && (
                      <span className="text-[11px] text-rose-600 dark:text-rose-400 font-bold">⚠️ Revisa</span>
                    )}
                  </div>
                  <input
                    type="text"
                    placeholder={`Ej: ${expectedKtas}`}
                    value={ktasInput}
                    onChange={(e) => setKtasInput(e.target.value)}
                    className={`w-full px-2.5 py-1 rounded-lg border font-mono text-xs sm:text-[13px] transition-colors ${
                      errors.ktas
                        ? "border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300"
                        : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900"
                    }`}
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-0.5">
                    <label className="font-semibold text-slate-600 dark:text-slate-300">
                      Gasto (L/h o Gal/h):
                    </label>
                    {errors.fuelFlow && (
                      <span className="text-[11px] text-rose-600 dark:text-rose-400 font-bold">⚠️ Revisa</span>
                    )}
                  </div>
                  <input
                    type="text"
                    placeholder={`Ej: ${expectedFuelFlow} L/h o ${expectedFuelFlowGal} Gal/h`}
                    value={fuelFlowInput}
                    onChange={(e) => setFuelFlowInput(e.target.value)}
                    className={`w-full px-2.5 py-1 rounded-lg border font-mono text-xs sm:text-[13px] transition-colors ${
                      errors.fuelFlow
                        ? "border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300"
                        : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900"
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* Step 2: Time & Fuel Consumption */}
            <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-1.5 shadow-2xs">
              <span className="text-xs sm:text-[13px] font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wide block border-b pb-0.5">
                2. Cálculos de Ruta ({mission.scenario.distanceNm} NM · Admite L o Galones)
              </span>
              <div className="grid grid-cols-3 gap-2 text-xs sm:text-[13px]">
                <div>
                  <div className="flex items-center justify-between mb-0.5">
                    <label className="font-semibold text-slate-600 dark:text-slate-300">
                      Tiempo (h):
                    </label>
                    {errors.timeHrs && (
                      <span className="text-[11px] text-rose-600 dark:text-rose-400 font-bold">⚠️ Revisa</span>
                    )}
                  </div>
                  <input
                    type="text"
                    placeholder={`Ej: ${expectedTimeHrs}`}
                    value={timeHrsInput}
                    onChange={(e) => setTimeHrsInput(e.target.value)}
                    className={`w-full px-2 py-1 rounded-lg border font-mono text-xs sm:text-[13px] transition-colors ${
                      errors.timeHrs
                        ? "border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300"
                        : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900"
                    }`}
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-0.5">
                    <label className="font-semibold text-slate-600 dark:text-slate-300">
                      Trip (L o Gal):
                    </label>
                    {errors.tripLiters && (
                      <span className="text-[11px] text-rose-600 dark:text-rose-400 font-bold">⚠️ Revisa</span>
                    )}
                  </div>
                  <input
                    type="text"
                    placeholder={`Ej: ${expectedTripLiters} o ${expectedTripGallons}`}
                    value={tripFuelLitersInput}
                    onChange={(e) => setTripFuelLitersInput(e.target.value)}
                    className={`w-full px-2 py-1 rounded-lg border font-mono text-xs sm:text-[13px] transition-colors ${
                      errors.tripLiters
                        ? "border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300"
                        : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900"
                    }`}
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-0.5">
                    <label className="font-semibold text-slate-600 dark:text-slate-300">
                      Masa (Kg o Lbs):
                    </label>
                    {errors.tripKg && (
                      <span className="text-[11px] text-rose-600 dark:text-rose-400 font-bold">⚠️ Revisa</span>
                    )}
                  </div>
                  <input
                    type="text"
                    placeholder={`Ej: ${expectedTripKg} o ${expectedTripLbs}`}
                    value={tripFuelKgInput}
                    onChange={(e) => setTripFuelKgInput(e.target.value)}
                    className={`w-full px-2 py-1 rounded-lg border font-mono text-xs sm:text-[13px] transition-colors ${
                      errors.tripKg
                        ? "border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300"
                        : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900"
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* Step 3: Range Check */}
            <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-1 shadow-2xs">
              <span className="text-xs sm:text-[13px] font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wide block">
                3. Autonomía Máxima Teórica (Tanques Estándar 127.4 L / 33.65 US Gal Usable)
              </span>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder={`Alcance máximo NM (Ej: ${expectedMaxRange})`}
                  value={maxRangeInput}
                  onChange={(e) => setMaxRangeInput(e.target.value)}
                  className={`flex-1 px-3 py-1 rounded-lg border font-mono text-xs sm:text-[13px] transition-colors ${
                    errors.maxRange
                      ? "border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300"
                      : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900"
                  }`}
                />
                <span className="text-xs sm:text-[13px] text-slate-500 font-medium shrink-0">NM disponibles</span>
                {errors.maxRange && (
                  <span className="text-[11px] text-rose-600 dark:text-rose-400 font-bold shrink-0">⚠️ Revisa</span>
                )}
              </div>
            </div>
          </div>

          {/* Bottom Actions & Feedback */}
          <div className="space-y-1.5 pt-1.5 border-t border-slate-200 dark:border-slate-800 shrink-0">
            <div className="flex items-center justify-between">
              <span className="text-xs sm:text-[13px] text-slate-500 font-medium">
                Intentos: <strong>{attempts}</strong>
              </span>
              <button
                type="button"
                onClick={handleValidate}
                className="px-4 py-2 rounded-xl font-bold text-xs sm:text-[13px] text-white bg-[#1a80ff] hover:bg-[#0066e6] shadow-xs cursor-pointer transition-all hover:scale-105 active:scale-95"
              >
                Validar Cálculos de Crucero ➔
              </button>
            </div>

            {errorCount > 0 && (
              <div className="p-1.5 rounded-lg border border-rose-300 dark:border-rose-800 bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200 text-xs flex items-center justify-between">
                <span>⚠️ <strong>{errorCount} {errorCount === 1 ? "valor a revisar" : "valores a revisar"}.</strong> Ver correcciones a la derecha 👉</span>
              </div>
            )}

            {isPassed && (
              <div className="p-2 rounded-lg border border-emerald-300 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 text-xs sm:text-[13px]">
                <strong className="font-bold">✓ ¡CÁLCULO DE CRUCERO Y COMBUSTIBLE CORRECTO!</strong>
                <p className="text-xs mt-0.5">
                  Tiempo: {expectedTimeHrs} h · Gasto ruta: {expectedTripLiters} L ({expectedTripGallons} US Gal) · Masa: {expectedTripKg} kg ({expectedTripLbs} lbs) · Alcance: {expectedMaxRange} NM.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Columna Derecha (lg:col-span-5): Tabla Fig. 5-4a + Panel de Correcciones Didácticas (Altura Fija 590px) */}
      <div className="lg:col-span-5 flex flex-col">
        <div
          className="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs"
          style={{ height: "590px" }}
        >
          {/* Header con selector de potencia */}
          <div className="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
            <div>
              <span className="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-[14px] block">
                📖 TABLA FIG. 5-4a CRUCERO
              </span>
              <span className="text-[11px] sm:text-xs text-slate-500 font-medium">
                C172 (CD-155) · Standard Tanks (127.4 L / 33.65 Gal)
              </span>
            </div>
            <div className="flex items-center gap-1 shrink-0">
              <button
                type="button"
                onClick={() => setSelectedTablePower(50)}
                className={`px-2.5 py-0.5 rounded-md text-xs font-bold transition-all cursor-pointer ${
                  selectedTablePower === 50
                    ? "bg-[#1a80ff] text-white shadow-2xs"
                    : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100"
                }`}
              >
                50%
              </button>
              <button
                type="button"
                onClick={() => setSelectedTablePower(55)}
                className={`px-2.5 py-0.5 rounded-md text-xs font-bold transition-all cursor-pointer ${
                  selectedTablePower === 55
                    ? "bg-[#1a80ff] text-white shadow-2xs"
                    : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100"
                }`}
              >
                55%
              </button>
            </div>
          </div>

          {/* Tabla Fig. 5-4a compacta y clara */}
          <div className="shrink-0 my-1">
            <table className="w-full text-left text-xs sm:text-[12px] border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-700 font-extrabold uppercase text-[#0B2E59] dark:text-sky-300 bg-slate-100/70 dark:bg-slate-800/60 text-[11px]">
                  <th className="py-1 px-1.5">ALT</th>
                  <th className="py-1 px-1 text-center">LOAD</th>
                  <th className="py-1 px-1 text-center">KTAS</th>
                  <th className="py-1 px-1 text-center text-emerald-700 dark:text-emerald-400">FUEL [L/H]</th>
                  <th className="py-1 px-1 text-center text-teal-700 dark:text-teal-400">FUEL [GAL]</th>
                  <th className="py-1 px-1 text-center">RANGE</th>
                  <th className="py-1 px-1 text-center">ENDUR</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-mono text-xs">
                {displayedRows.map((row, idx) => {
                  const isHighlighted = row.alt === alt && row.load === 50;
                  return (
                    <tr
                      key={idx}
                      className={
                        isHighlighted
                          ? "bg-amber-100/90 dark:bg-amber-950/70 font-bold text-amber-950 dark:text-amber-100"
                          : "hover:bg-slate-50 dark:hover:bg-slate-800/40 text-slate-700 dark:text-slate-200"
                      }
                    >
                      <td className="py-1 px-1.5 font-semibold">{row.alt} ft</td>
                      <td className="py-1 px-1 text-center text-blue-600 dark:text-sky-400 font-bold">{row.load}%</td>
                      <td className="py-1 px-1 text-center text-sky-700 dark:text-sky-300 font-bold">{row.ktas} kt</td>
                      <td className="py-1 px-1 text-center text-emerald-700 dark:text-emerald-300 font-bold">{row.fuelFlowLh}</td>
                      <td className="py-1 px-1 text-center text-teal-700 dark:text-teal-300 font-bold">{row.fuelFlowGal}</td>
                      <td className="py-1 px-1 text-center">{row.rangeNm} NM</td>
                      <td className="py-1 px-1 text-center">{row.enduranceHrs} h</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Unidades detectadas y equivalencias (si el alumno usó Galones o Libras) en columna derecha */}
          {warnings.length > 0 && (
            <div className="shrink-0 my-1 p-2 rounded-xl border border-sky-300 dark:border-sky-800 bg-sky-50 dark:bg-sky-950/40 text-sky-950 dark:text-sky-200 text-xs space-y-0.5 shadow-2xs">
              <span className="font-bold block text-[11px] uppercase tracking-wider text-sky-700 dark:text-sky-400">
                ℹ️ Equivalencias Detectadas:
              </span>
              {warnings.map((w, idx) => (
                <div key={idx} className="leading-snug">{w}</div>
              ))}
            </div>
          )}

          {/* Zona inferior dinámica: Panel de Correcciones cuando hay errores O Explicación didáctica si está correcto */}
          {errorCount > 0 ? (
            <div className="flex-1 min-h-0 overflow-y-auto mt-1 p-2 rounded-xl border border-rose-200 dark:border-rose-900/60 bg-rose-50/80 dark:bg-rose-950/30 space-y-1.5 shadow-2xs">
              <div className="flex items-center justify-between border-b border-rose-200/80 dark:border-rose-800/60 pb-1">
                <span className="text-xs font-bold text-rose-900 dark:text-rose-200 flex items-center gap-1.5">
                  <span>💡</span>
                  <span>CORRECCIONES DEL DESPACHO (INTENTO {attempts})</span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-rose-700 dark:text-rose-300 bg-rose-100 dark:bg-rose-900/60 px-2 py-0.5 rounded-full">
                  {errorCount} pendientes
                </span>
              </div>

              <div className="space-y-1.5 text-xs text-slate-800 dark:text-slate-200">
                {errors.ktas && (
                  <div className="p-1.5 rounded-lg bg-white/90 dark:bg-slate-900/90 border border-rose-100 dark:border-rose-900/40">
                    <strong className="text-rose-700 dark:text-rose-400 block font-bold">1. Velocidad Verdadera (KTAS):</strong>
                    <span>{errors.ktas}</span>
                  </div>
                )}
                {errors.fuelFlow && (
                  <div className="p-1.5 rounded-lg bg-white/90 dark:bg-slate-900/90 border border-rose-100 dark:border-rose-900/40">
                    <strong className="text-rose-700 dark:text-rose-400 block font-bold">2. Gasto Horario (Fuel Flow):</strong>
                    <span>{errors.fuelFlow}</span>
                  </div>
                )}
                {errors.timeHrs && (
                  <div className="p-1.5 rounded-lg bg-white/90 dark:bg-slate-900/90 border border-rose-100 dark:border-rose-900/40">
                    <strong className="text-rose-700 dark:text-rose-400 block font-bold">3. Tiempo en Ruta:</strong>
                    <span>{errors.timeHrs}</span>
                  </div>
                )}
                {errors.tripLiters && (
                  <div className="p-1.5 rounded-lg bg-white/90 dark:bg-slate-900/90 border border-rose-100 dark:border-rose-900/40">
                    <strong className="text-rose-700 dark:text-rose-400 block font-bold">4. Trip Fuel (Litros o Galones):</strong>
                    <span>{errors.tripLiters}</span>
                  </div>
                )}
                {errors.tripKg && (
                  <div className="p-1.5 rounded-lg bg-white/90 dark:bg-slate-900/90 border border-rose-100 dark:border-rose-900/40">
                    <strong className="text-rose-700 dark:text-rose-400 block font-bold">5. Masa Trip Fuel (Kg o Lbs):</strong>
                    <span>{errors.tripKg}</span>
                  </div>
                )}
                {errors.maxRange && (
                  <div className="p-1.5 rounded-lg bg-white/90 dark:bg-slate-900/90 border border-rose-100 dark:border-rose-900/40">
                    <strong className="text-rose-700 dark:text-rose-400 block font-bold">6. Alcance Máximo (Range):</strong>
                    <span>{errors.maxRange}</span>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="p-2.5 rounded-xl bg-sky-50/70 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800 text-xs sm:text-[13px] space-y-1 text-slate-700 dark:text-slate-300 shrink-0">
              <strong className="text-sky-800 dark:text-sky-300 block uppercase font-bold text-xs sm:text-[13px]">
                💡 Régimen de Escuela Blue Team (50% Load):
              </strong>
              <p className="leading-snug">
                En vuelo de instrucción el crucero se fija al <strong>50% de potencia</strong>. Garantiza un consumo contenido de <strong>15.3 L/h (4.0 US Gal/h)</strong>, mayor vida útil de la reductora y turbo, y una autonomía superior a 7 horas de vuelo.
              </p>
              <div className="pt-1 border-t border-sky-200/60 dark:border-sky-800/60 text-[11px] text-sky-900 dark:text-sky-300 font-medium">
                ⛽ Puedes introducir el combustible tanto en <strong>Litros</strong> como en <strong>US Galones</strong>, y la masa en <strong>Kg</strong> o <strong>Libras</strong>.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
