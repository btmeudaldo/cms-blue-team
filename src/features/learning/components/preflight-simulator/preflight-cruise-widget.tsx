"use client";

import React, { useState } from "react";
import { PREFLIGHT_MISSIONS, checkValueTolerance } from "./constants";

type Props = {
  onExerciseCompleted?: () => void;
  isAlreadyCompleted?: boolean;
};

// Official data points from TAE 125-02-114 Figure 5-4a (CD-155 at 1043 kg, Standard Tanks)
// Calibrated for flight school operations: 50% and 55% standard cruise power
const CRUISE_TABLE_DATA = [
  // 50% Load (Long Range / Economic Training): 15.3 l/h (4.0 US Gal/h)
  { alt: 2000, load: 50, ktas: 99, fuelFlowLh: 15.3, rangeNm: 718, enduranceHrs: 7.2 },
  { alt: 4000, load: 50, ktas: 100, fuelFlowLh: 15.3, rangeNm: 720, enduranceHrs: 7.1 },
  { alt: 6000, load: 50, ktas: 102, fuelFlowLh: 15.3, rangeNm: 728, enduranceHrs: 6.9 },
  { alt: 8000, load: 50, ktas: 103, fuelFlowLh: 15.3, rangeNm: 729, enduranceHrs: 6.8 },

  // 55% Load (Standard Flight School Cruise): 17.0 l/h (4.5 US Gal/h)
  { alt: 2000, load: 55, ktas: 103, fuelFlowLh: 17.0, rangeNm: 675, enduranceHrs: 6.5 },
  { alt: 4000, load: 55, ktas: 105, fuelFlowLh: 17.0, rangeNm: 678, enduranceHrs: 6.4 },
  { alt: 6000, load: 55, ktas: 106, fuelFlowLh: 17.0, rangeNm: 683, enduranceHrs: 6.2 },
  { alt: 8000, load: 55, ktas: 108, fuelFlowLh: 17.0, rangeNm: 686, enduranceHrs: 6.1 },

  // 60% Load: 18.6 l/h (4.9 US Gal/h)
  { alt: 2000, load: 60, ktas: 108, fuelFlowLh: 18.6, rangeNm: 631, enduranceHrs: 5.8 },
  { alt: 4000, load: 60, ktas: 110, fuelFlowLh: 18.6, rangeNm: 637, enduranceHrs: 5.7 },
  { alt: 6000, load: 60, ktas: 111, fuelFlowLh: 18.6, rangeNm: 638, enduranceHrs: 5.5 },

  // 70% Load: 22.1 l/h (5.8 US Gal/h)
  { alt: 2000, load: 70, ktas: 116, fuelFlowLh: 22.1, rangeNm: 557, enduranceHrs: 4.7 },
  { alt: 4000, load: 70, ktas: 118, fuelFlowLh: 22.1, rangeNm: 562, enduranceHrs: 4.6 },
  { alt: 6000, load: 70, ktas: 120, fuelFlowLh: 22.1, rangeNm: 567, enduranceHrs: 4.5 },
];

export function PreflightCruiseWidget({
  onExerciseCompleted,
  isAlreadyCompleted = false,
}: Props) {
  const [selectedMissionIndex, setSelectedMissionIndex] = useState(1); // default Mission 2 (Travesía)
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
  const loadPct = mission.scenario.cruiseLoadPct; // 55% or 50%

  const targetRow =
    CRUISE_TABLE_DATA.find((r) => r.alt === alt && r.load === loadPct) ||
    CRUISE_TABLE_DATA.find((r) => r.load === 55) ||
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
          ? `Solución: Tiempo = Distancia (${mission.scenario.distanceNm} NM) / KTAS (${expectedKtas}) = ${expectedTimeHrs} h (~${Math.round(expectedTimeHrs * 60)} min).`
          : `Calcula el tiempo de vuelo: Distancia (${mission.scenario.distanceNm} NM) / KTAS (${expectedKtas}).`;
    } else if (Math.abs(userTime - expectedTimeHrs) > 0.01) {
      newWarnings.push(`Tiempo en ruta: Tu valor (${userTime} h) tiene un leve desvío por redondeo, pero es válido.`);
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

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
      {/* Columna Izquierda (lg:col-span-7): Formulario de Crucero (Altura Fija 590px) */}
      <div className="lg:col-span-7 flex flex-col">
        <div
          className="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs"
          style={{ height: "590px" }}
        >
          {/* Header & Mission Selector */}
          <div className="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
            <div>
              <span className="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">
                ⏱️ CRUCERO Y AUTONOMÍA (50% - 55% LOAD)
              </span>
              <div className="text-[10px] text-slate-500 font-medium">
                {mission.name} · {alt} ft · {loadPct}% Potencia Escuela · {mission.scenario.distanceNm} NM
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
            {/* Step 1: Reading from Table */}
            <div className="p-2 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-1.5 shadow-2xs">
              <span className="text-[11px] font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wide block border-b pb-0.5">
                1. Lectura en Tabla Fig. 5-4a ({alt} ft / {loadPct}% Load de Escuela)
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <label className="text-[10.5px] font-semibold text-slate-600 dark:text-slate-300 block mb-0.5">
                    Velocidad Verdadera (KTAS):
                  </label>
                  <input
                    type="text"
                    placeholder={`Ej: ${expectedKtas}`}
                    value={ktasInput}
                    onChange={(e) => setKtasInput(e.target.value)}
                    className={`w-full px-2 py-1 rounded-lg border font-mono text-xs ${
                      errors.ktas
                        ? "border-rose-500 bg-rose-50 text-rose-700"
                        : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900"
                    }`}
                  />
                  {errors.ktas && <span className="text-[9.5px] text-rose-600 font-medium block mt-0.5">{errors.ktas}</span>}
                </div>

                <div>
                  <label className="text-[10.5px] font-semibold text-slate-600 dark:text-slate-300 block mb-0.5">
                    Gasto Horario (Fuel Flow L/h):
                  </label>
                  <input
                    type="text"
                    placeholder={`Ej: ${expectedFuelFlow}`}
                    value={fuelFlowInput}
                    onChange={(e) => setFuelFlowInput(e.target.value)}
                    className={`w-full px-2 py-1 rounded-lg border font-mono text-xs ${
                      errors.fuelFlow
                        ? "border-rose-500 bg-rose-50 text-rose-700"
                        : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900"
                    }`}
                  />
                  {errors.fuelFlow && <span className="text-[9.5px] text-rose-600 font-medium block mt-0.5">{errors.fuelFlow}</span>}
                </div>
              </div>
            </div>

            {/* Step 2: Time & Fuel Consumption */}
            <div className="p-2 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-1.5 shadow-2xs">
              <span className="text-[11px] font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wide block border-b pb-0.5">
                2. Cálculos Operacionales de Ruta ({mission.scenario.distanceNm} NM)
              </span>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div>
                  <label className="text-[10px] font-semibold text-slate-600 dark:text-slate-300 block mb-0.5">
                    Tiempo Vuelo (h):
                  </label>
                  <input
                    type="text"
                    placeholder={`Ej: ${expectedTimeHrs}`}
                    value={timeHrsInput}
                    onChange={(e) => setTimeHrsInput(e.target.value)}
                    className={`w-full px-2 py-1 rounded-lg border font-mono text-xs ${
                      errors.timeHrs
                        ? "border-rose-500 bg-rose-50 text-rose-700"
                        : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900"
                    }`}
                  />
                  {errors.timeHrs && <span className="text-[9px] text-rose-600 font-medium block mt-0.5">{errors.timeHrs}</span>}
                </div>

                <div>
                  <label className="text-[10px] font-semibold text-slate-600 dark:text-slate-300 block mb-0.5">
                    Trip Fuel (Litros):
                  </label>
                  <input
                    type="text"
                    placeholder={`Ej: ${expectedTripLiters}`}
                    value={tripFuelLitersInput}
                    onChange={(e) => setTripFuelLitersInput(e.target.value)}
                    className={`w-full px-2 py-1 rounded-lg border font-mono text-xs ${
                      errors.tripLiters
                        ? "border-rose-500 bg-rose-50 text-rose-700"
                        : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900"
                    }`}
                  />
                  {errors.tripLiters && <span className="text-[9px] text-rose-600 font-medium block mt-0.5">{errors.tripLiters}</span>}
                </div>

                <div>
                  <label className="text-[10px] font-semibold text-slate-600 dark:text-slate-300 block mb-0.5">
                    Trip Fuel (kg @ 0.84):
                  </label>
                  <input
                    type="text"
                    placeholder={`Ej: ${expectedTripKg}`}
                    value={tripFuelKgInput}
                    onChange={(e) => setTripFuelKgInput(e.target.value)}
                    className={`w-full px-2 py-1 rounded-lg border font-mono text-xs ${
                      errors.tripKg
                        ? "border-rose-500 bg-rose-50 text-rose-700"
                        : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900"
                    }`}
                  />
                  {errors.tripKg && <span className="text-[9px] text-rose-600 font-medium block mt-0.5">{errors.tripKg}</span>}
                </div>
              </div>
            </div>

            {/* Step 3: Range Check */}
            <div className="p-2 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-1 shadow-2xs">
              <span className="text-[11px] font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wide block">
                3. Autonomía Máxima Teórica (Tanques Estándar 127.4 L)
              </span>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder={`Alcance máximo NM (Ej: ${expectedMaxRange})`}
                  value={maxRangeInput}
                  onChange={(e) => setMaxRangeInput(e.target.value)}
                  className={`flex-1 px-2.5 py-1 rounded-lg border font-mono text-xs ${
                    errors.maxRange
                      ? "border-rose-500 bg-rose-50 text-rose-700"
                      : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900"
                  }`}
                />
                <span className="text-xs text-slate-500 font-medium shrink-0">NM disponibles</span>
              </div>
              {errors.maxRange && <span className="text-[9.5px] text-rose-600 font-medium block">{errors.maxRange}</span>}
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
                Validar Cálculos de Crucero ➔
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
                <strong className="font-bold">✓ ¡CÁLCULO DE CRUCERO Y COMBUSTIBLE CORRECTO!</strong>
                <p className="text-[10px] mt-0.5">
                  Tiempo: {expectedTimeHrs} h · Gasto ruta: {expectedTripLiters} L ({expectedTripKg} kg) · Alcance máximo: {expectedMaxRange} NM.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Columna Derecha (lg:col-span-5): Tabla Fig. 5-4a TAE 125-02-114 (Altura Fija 590px) */}
      <div className="lg:col-span-5 flex flex-col">
        <div
          className="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs"
          style={{ height: "590px" }}
        >
          <div className="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
            <div>
              <span className="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm block">
                📖 TABLA FIG. 5-4a CRUCERO
              </span>
              <span className="text-[10px] text-slate-500 font-medium">
                C172 CD-155 (TAE 125-02-114) · Standard Tanks (127.4 L usable)
              </span>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-sky-100 dark:bg-sky-900/60 text-sky-800 dark:text-sky-300 shrink-0">
              POH 5a-15
            </span>
          </div>

          <div className="flex-1 min-h-0 overflow-y-auto my-1">
            <table className="w-full text-left text-[10.5px] border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-700 font-extrabold text-[#0B2E59] dark:text-sky-300 bg-slate-100/70 dark:bg-slate-800/60">
                  <th className="py-1 px-1">Alt</th>
                  <th className="py-1 px-1 text-center">Load</th>
                  <th className="py-1 px-1 text-center">KTAS</th>
                  <th className="py-1 px-1 text-center">Fuel [L/h]</th>
                  <th className="py-1 px-1 text-center">Range</th>
                  <th className="py-1 px-1 text-center">Endur</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-mono">
                {CRUISE_TABLE_DATA.map((row, idx) => {
                  const isHighlighted = row.alt === alt && row.load === loadPct;
                  return (
                    <tr
                      key={idx}
                      className={
                        isHighlighted
                          ? "bg-amber-100/80 dark:bg-amber-950/60 font-bold text-amber-900 dark:text-amber-200"
                          : "hover:bg-slate-50 dark:hover:bg-slate-800/40"
                      }
                    >
                      <td className="py-0.5 px-1">{row.alt} ft</td>
                      <td className="py-0.5 px-1 text-center text-blue-600 font-bold">{row.load}%</td>
                      <td className="py-0.5 px-1 text-center text-sky-700 dark:text-sky-300">{row.ktas}</td>
                      <td className="py-0.5 px-1 text-center text-emerald-700 dark:text-emerald-300 font-bold">{row.fuelFlowLh}</td>
                      <td className="py-0.5 px-1 text-center">{row.rangeNm} NM</td>
                      <td className="py-0.5 px-1 text-center">{row.enduranceHrs} h</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="p-2 rounded-xl bg-sky-50/70 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800 text-[10.5px] space-y-1 text-slate-700 dark:text-slate-300 shrink-0">
            <strong className="text-sky-800 dark:text-sky-300 block uppercase font-bold text-[10px]">
              💡 Régimen de Escuela (50% - 55% Load):
            </strong>
            <p className="leading-tight">
              En vuelo de instrucción se estandariza el crucero al <strong>50% o 55% de potencia</strong>. Garantiza un consumo económico de <strong>15.3 a 17.0 L/h</strong>, mayor longevidad del motor y una autonomía superior a 6.5 horas.
            </p>
          </div>

          <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium pt-1 px-1 border-t border-slate-200/60 dark:border-slate-800/60 shrink-0">
            Ref. POH: Figure 5-4a Cruise Performance TAE 125-02-114
          </div>
        </div>
      </div>
    </div>
  );
}
