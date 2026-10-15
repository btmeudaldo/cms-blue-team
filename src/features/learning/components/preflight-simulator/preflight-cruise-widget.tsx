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
  { alt: 2000, load: 50, ktas: 99, fuelFlowLh: 15.3, rangeNm: 718, enduranceHrs: 7.2 },
  { alt: 4000, load: 50, ktas: 100, fuelFlowLh: 15.3, rangeNm: 720, enduranceHrs: 7.1 },
  { alt: 6000, load: 50, ktas: 102, fuelFlowLh: 15.3, rangeNm: 728, enduranceHrs: 6.9 },
  { alt: 8000, load: 50, ktas: 103, fuelFlowLh: 15.3, rangeNm: 729, enduranceHrs: 6.8 },

  // 55% Load (Crucero Rápido): 17.0 l/h (4.5 US Gal/h)
  { alt: 2000, load: 55, ktas: 103, fuelFlowLh: 17.0, rangeNm: 675, enduranceHrs: 6.5 },
  { alt: 4000, load: 55, ktas: 105, fuelFlowLh: 17.0, rangeNm: 678, enduranceHrs: 6.4 },
  { alt: 6000, load: 55, ktas: 106, fuelFlowLh: 17.0, rangeNm: 683, enduranceHrs: 6.2 },
  { alt: 8000, load: 55, ktas: 108, fuelFlowLh: 17.0, rangeNm: 686, enduranceHrs: 6.1 },
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
  const [isPassed, setIsPassed] = useState(isAlreadyCompleted);

  const alt = selectedMissionIndex === 0 ? 2000 : selectedMissionIndex === 1 ? 6000 : 4000;
  const loadPct = 50; // Standard flight school cruise load is 50%

  const targetRow =
    CRUISE_TABLE_DATA.find((r) => r.alt === alt && r.load === loadPct) ||
    CRUISE_TABLE_DATA[0];

  const expectedKtas = targetRow.ktas;
  const expectedFuelFlow = targetRow.fuelFlowLh;
  const expectedTimeHrs = Math.round((mission.scenario.distanceNm / expectedKtas) * 100) / 100;
  const expectedTripLiters = Math.round(expectedTimeHrs * expectedFuelFlow * 10) / 10;
  const expectedTripKg = Math.round(expectedTripLiters * 0.84 * 10) / 10;
  const expectedMaxRange = targetRow.rangeNm;

  const handleValidate = () => {
    const newErrors: Record<string, string> = {};
    const newWarnings: string[] = [];
    const num = (v: string) => parseFloat(v.replace(",", "."));

    // Check KTAS
    const userKtas = num(ktasInput);
    if (isNaN(userKtas) || !checkValueTolerance(userKtas, expectedKtas, 0.02, 1.5).isOk) {
      newErrors.ktas =
        attempts >= 2
          ? `Solución: En la tabla Fig. 5-4a a ${alt} ft y ${loadPct}% Load, la velocidad es ${expectedKtas} KTAS.`
          : `Revisa la tabla oficial: busca la fila de ${alt} ft y columna KTAS al ${loadPct}% de carga.`;
    }

    // Check Fuel Flow
    const userFf = num(fuelFlowInput);
    if (isNaN(userFf) || !checkValueTolerance(userFf, expectedFuelFlow, 0.02, 0.3).isOk) {
      newErrors.fuelFlow =
        attempts >= 2
          ? `Solución: En la tabla CD-155, el consumo horario al ${loadPct}% de Load es de ${expectedFuelFlow} L/h.`
          : `Consulta la columna Fuel Flow [L/h] en la tabla para ${loadPct}% de potencia.`;
    }

    // Check Time in Hours
    const userTime = num(timeHrsInput);
    if (isNaN(userTime) || !checkValueTolerance(userTime, expectedTimeHrs, 0.06, 0.05).isOk) {
      newErrors.timeHrs =
        attempts >= 2
          ? `Solución: Tiempo = ${mission.scenario.distanceNm} NM / ${expectedKtas} KTAS = ${expectedTimeHrs} h.`
          : `Divide la distancia de ${mission.scenario.distanceNm} NM entre la velocidad verdadera (${expectedKtas} kt).`;
    }

    // Check Trip Fuel Liters
    const userTripL = num(tripFuelLitersInput);
    if (isNaN(userTripL) || !checkValueTolerance(userTripL, expectedTripLiters, 0.06, 0.6).isOk) {
      newErrors.tripLiters =
        attempts >= 2
          ? `Solución: Combustible ruta = ${expectedTimeHrs} h × ${expectedFuelFlow} L/h = ${expectedTripLiters} L.`
          : `Combustible de ruta (Litros) = Tiempo en horas (${expectedTimeHrs} h) × Gasto horario (${expectedFuelFlow} L/h).`;
    } else if (Math.abs(userTripL - expectedTripLiters) > 0.2) {
      newWarnings.push(`Gasto en litros: Tu valor (${userTripL} L) tiene leve desvío por redondeo, pero se da por bueno.`);
    }

    // Check Trip Fuel Kg
    const userTripKg = num(tripFuelKgInput);
    if (isNaN(userTripKg) || !checkValueTolerance(userTripKg, expectedTripKg, 0.06, 0.6).isOk) {
      newErrors.tripKg =
        attempts >= 2
          ? `Solución: ${expectedTripLiters} L × 0.84 kg/L = ${expectedTripKg} kg.`
          : "Convierte los litros a kilogramos usando la densidad diésel de 0.84 kg/L.";
    }

    // Check Max Range
    const userRange = num(maxRangeInput);
    if (isNaN(userRange) || !checkValueTolerance(userRange, expectedMaxRange, 0.03, 8).isOk) {
      newErrors.maxRange =
        attempts >= 2
          ? `Solución: En la columna Distance Range [NM] figura ${expectedMaxRange} NM.`
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
                ⏱️ CRUCERO Y AUTONOMÍA (50% LOAD DE ESCUELA)
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

          {/* Form Content - General Standard Typography (text-xs sm:text-[13px]) */}
          <div className="flex-1 min-h-0 my-1 space-y-2 flex flex-col justify-center">
            {/* Step 1: Reading from Table */}
            <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-1.5 shadow-2xs">
              <span className="text-xs sm:text-[13px] font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wide block border-b pb-0.5">
                1. Lectura en Tabla Fig. 5-4a ({alt} ft / {loadPct}% Load de Escuela)
              </span>
              <div className="grid grid-cols-2 gap-2.5 text-xs sm:text-[13px]">
                <div>
                  <label className="text-xs sm:text-[13px] font-semibold text-slate-600 dark:text-slate-300 block mb-0.5">
                    Velocidad Verdadera (KTAS):
                  </label>
                  <input
                    type="text"
                    placeholder={`Ej: ${expectedKtas}`}
                    value={ktasInput}
                    onChange={(e) => setKtasInput(e.target.value)}
                    className={`w-full px-2.5 py-1 rounded-lg border font-mono text-xs sm:text-[13px] ${
                      errors.ktas
                        ? "border-rose-500 bg-rose-50 text-rose-700"
                        : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900"
                    }`}
                  />
                  {errors.ktas && <span className="text-[11px] text-rose-600 font-medium block mt-0.5">{errors.ktas}</span>}
                </div>

                <div>
                  <label className="text-xs sm:text-[13px] font-semibold text-slate-600 dark:text-slate-300 block mb-0.5">
                    Gasto Horario (Fuel Flow L/h):
                  </label>
                  <input
                    type="text"
                    placeholder={`Ej: ${expectedFuelFlow}`}
                    value={fuelFlowInput}
                    onChange={(e) => setFuelFlowInput(e.target.value)}
                    className={`w-full px-2.5 py-1 rounded-lg border font-mono text-xs sm:text-[13px] ${
                      errors.fuelFlow
                        ? "border-rose-500 bg-rose-50 text-rose-700"
                        : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900"
                    }`}
                  />
                  {errors.fuelFlow && <span className="text-[11px] text-rose-600 font-medium block mt-0.5">{errors.fuelFlow}</span>}
                </div>
              </div>
            </div>

            {/* Step 2: Time & Fuel Consumption */}
            <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-1.5 shadow-2xs">
              <span className="text-xs sm:text-[13px] font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wide block border-b pb-0.5">
                2. Cálculos Operacionales de Ruta ({mission.scenario.distanceNm} NM)
              </span>
              <div className="grid grid-cols-3 gap-2.5 text-xs sm:text-[13px]">
                <div>
                  <label className="text-xs sm:text-[13px] font-semibold text-slate-600 dark:text-slate-300 block mb-0.5">
                    Tiempo Vuelo (h):
                  </label>
                  <input
                    type="text"
                    placeholder={`Ej: ${expectedTimeHrs}`}
                    value={timeHrsInput}
                    onChange={(e) => setTimeHrsInput(e.target.value)}
                    className={`w-full px-2.5 py-1 rounded-lg border font-mono text-xs sm:text-[13px] ${
                      errors.timeHrs
                        ? "border-rose-500 bg-rose-50 text-rose-700"
                        : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900"
                    }`}
                  />
                  {errors.timeHrs && <span className="text-[11px] text-rose-600 font-medium block mt-0.5">{errors.timeHrs}</span>}
                </div>

                <div>
                  <label className="text-xs sm:text-[13px] font-semibold text-slate-600 dark:text-slate-300 block mb-0.5">
                    Trip Fuel (Litros):
                  </label>
                  <input
                    type="text"
                    placeholder={`Ej: ${expectedTripLiters}`}
                    value={tripFuelLitersInput}
                    onChange={(e) => setTripFuelLitersInput(e.target.value)}
                    className={`w-full px-2.5 py-1 rounded-lg border font-mono text-xs sm:text-[13px] ${
                      errors.tripLiters
                        ? "border-rose-500 bg-rose-50 text-rose-700"
                        : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900"
                    }`}
                  />
                  {errors.tripLiters && <span className="text-[11px] text-rose-600 font-medium block mt-0.5">{errors.tripLiters}</span>}
                </div>

                <div>
                  <label className="text-xs sm:text-[13px] font-semibold text-slate-600 dark:text-slate-300 block mb-0.5">
                    Trip Fuel (Kg · 0.84):
                  </label>
                  <input
                    type="text"
                    placeholder={`Ej: ${expectedTripKg}`}
                    value={tripFuelKgInput}
                    onChange={(e) => setTripFuelKgInput(e.target.value)}
                    className={`w-full px-2.5 py-1 rounded-lg border font-mono text-xs sm:text-[13px] ${
                      errors.tripKg
                        ? "border-rose-500 bg-rose-50 text-rose-700"
                        : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900"
                    }`}
                  />
                  {errors.tripKg && <span className="text-[11px] text-rose-600 font-medium block mt-0.5">{errors.tripKg}</span>}
                </div>
              </div>
            </div>

            {/* Step 3: Range Check */}
            <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-1 shadow-2xs">
              <span className="text-xs sm:text-[13px] font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wide block">
                3. Autonomía Máxima Teórica (Tanques Estándar 127.4 L Usable)
              </span>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder={`Alcance máximo NM (Ej: ${expectedMaxRange})`}
                  value={maxRangeInput}
                  onChange={(e) => setMaxRangeInput(e.target.value)}
                  className={`flex-1 px-3 py-1 rounded-lg border font-mono text-xs sm:text-[13px] ${
                    errors.maxRange
                      ? "border-rose-500 bg-rose-50 text-rose-700"
                      : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900"
                  }`}
                />
                <span className="text-xs sm:text-[13px] text-slate-500 font-medium shrink-0">NM disponibles</span>
              </div>
              {errors.maxRange && <span className="text-[11px] text-rose-600 font-medium block">{errors.maxRange}</span>}
            </div>
          </div>

          {/* Bottom Actions & Feedback */}
          <div className="space-y-1.5 pt-1.5 border-t border-slate-200 dark:border-slate-800 shrink-0">
            <div className="flex items-center justify-between">
              <span className="text-xs sm:text-[13px] text-slate-500">
                Intentos: <strong>{attempts}</strong> {attempts >= 2 ? "· Pistas completas activas" : ""}
              </span>
              <button
                type="button"
                onClick={handleValidate}
                className="px-4 py-2 rounded-xl font-bold text-xs sm:text-[13px] text-white bg-[#1a80ff] hover:bg-[#0066e6] shadow-xs cursor-pointer transition-all hover:scale-105 active:scale-95"
              >
                Validar Cálculos de Crucero ➔
              </button>
            </div>

            {warnings.length > 0 && (
              <div className="p-2 rounded-lg border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30 text-amber-900 dark:text-amber-200 text-xs sm:text-[13px]">
                {warnings.map((w, idx) => (
                  <div key={idx}>ℹ️ {w}</div>
                ))}
              </div>
            )}

            {isPassed && (
              <div className="p-2 rounded-lg border border-emerald-300 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 text-xs sm:text-[13px]">
                <strong className="font-bold">✓ ¡CÁLCULO DE CRUCERO Y COMBUSTIBLE CORRECTO!</strong>
                <p className="text-xs mt-0.5">
                  Tiempo: {expectedTimeHrs} h · Gasto ruta: {expectedTripLiters} L ({expectedTripKg} kg) · Alcance máximo: {expectedMaxRange} NM.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Columna Derecha (lg:col-span-5): Tabla Fig. 5-4a con tipografía estándar completa (Altura Fija 590px) */}
      <div className="lg:col-span-5 flex flex-col">
        <div
          className="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs"
          style={{ height: "590px" }}
        >
          {/* Header con selector de potencia */}
          <div className="flex items-center justify-between pb-1.5 border-b border-slate-200 dark:border-slate-800 shrink-0">
            <div>
              <span className="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-[14px] block">
                📖 TABLA FIG. 5-4a CRUCERO
              </span>
              <span className="text-xs sm:text-[13px] text-slate-500 font-medium">
                C172 CD-155 (TAE 125-02-114) · Standard Tanks (127.4 L usable)
              </span>
            </div>
            <div className="flex items-center gap-1 shrink-0">
              <button
                type="button"
                onClick={() => setSelectedTablePower(50)}
                className={`px-2.5 py-1 rounded-md text-xs sm:text-[13px] font-bold transition-all cursor-pointer ${
                  selectedTablePower === 50
                    ? "bg-[#1a80ff] text-white shadow-2xs"
                    : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100"
                }`}
              >
                50% Escuela
              </button>
              <button
                type="button"
                onClick={() => setSelectedTablePower(55)}
                className={`px-2.5 py-1 rounded-md text-xs sm:text-[13px] font-bold transition-all cursor-pointer ${
                  selectedTablePower === 55
                    ? "bg-[#1a80ff] text-white shadow-2xs"
                    : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100"
                }`}
              >
                55%
              </button>
            </div>
          </div>

          {/* Tabla Fig. 5-4a con Tipografía Estándar General (text-xs sm:text-[13px]) */}
          <div className="flex-1 min-h-0 my-auto flex flex-col justify-center">
            <table className="w-full text-left text-xs sm:text-[13px] border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-700 font-extrabold uppercase text-[#0B2E59] dark:text-sky-300 bg-slate-100/70 dark:bg-slate-800/60">
                  <th className="py-2 px-2">ALTITUD</th>
                  <th className="py-2 px-2 text-center">LOAD</th>
                  <th className="py-2 px-2 text-center">KTAS</th>
                  <th className="py-2 px-2 text-center">FUEL [L/H]</th>
                  <th className="py-2 px-2 text-center">RANGE</th>
                  <th className="py-2 px-2 text-center">ENDUR</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-mono">
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
                      <td className="py-2 px-2 font-semibold">{row.alt} ft</td>
                      <td className="py-2 px-2 text-center text-blue-600 dark:text-sky-400 font-bold">{row.load}%</td>
                      <td className="py-2 px-2 text-center text-sky-700 dark:text-sky-300 font-bold">{row.ktas} kt</td>
                      <td className="py-2 px-2 text-center text-emerald-700 dark:text-emerald-300 font-bold">{row.fuelFlowLh}</td>
                      <td className="py-2 px-2 text-center">{row.rangeNm} NM</td>
                      <td className="py-2 px-2 text-center">{row.enduranceHrs} h</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Explicación de régimen estándar con tipografía general */}
          <div className="p-2.5 rounded-xl bg-sky-50/70 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800 text-xs sm:text-[13px] space-y-1 text-slate-700 dark:text-slate-300 shrink-0">
            <strong className="text-sky-800 dark:text-sky-300 block uppercase font-bold text-xs sm:text-[13px]">
              💡 Régimen de Escuela Blue Team (50% Load):
            </strong>
            <p className="leading-snug">
              En vuelo de instrucción el crucero se fija al <strong>50% de potencia</strong>. Garantiza un consumo de <strong>15.3 L/h</strong>, mayor vida útil de la reductora y turbo, y una autonomía superior a 7 horas de vuelo.
            </p>
          </div>

          <div className="text-xs sm:text-[13px] text-slate-500 dark:text-slate-400 font-medium pt-1 px-1 border-t border-slate-200/60 dark:border-slate-800/60 shrink-0">
            Ref. POH: Figure 5-4a Cruise Performance TAE 125-02-114
          </div>
        </div>
      </div>
    </div>
  );
}
