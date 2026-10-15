"use client";

import React, { useState } from "react";
import { PREFLIGHT_MISSIONS, checkValueTolerance } from "./constants";

type Props = {
  onExerciseCompleted?: () => void;
  isAlreadyCompleted?: boolean;
};

// Official data points from TAE 125-02-114 Figure 5-4a (CD-155 at 1043 kg, Standard Tanks)
const CRUISE_TABLE_DATA = [
  { alt: 0, load: 70, ktas: 114, fuelFlowLh: 22.1, rangeNm: 551, enduranceHrs: 4.8 },
  { alt: 2000, load: 70, ktas: 116, fuelFlowLh: 22.1, rangeNm: 557, enduranceHrs: 4.7 },
  { alt: 4000, load: 70, ktas: 118, fuelFlowLh: 22.1, rangeNm: 562, enduranceHrs: 4.6 },
  { alt: 6000, load: 70, ktas: 120, fuelFlowLh: 22.1, rangeNm: 567, enduranceHrs: 4.5 },
  { alt: 8000, load: 70, ktas: 122, fuelFlowLh: 22.1, rangeNm: 572, enduranceHrs: 4.4 },
  { alt: 10000, load: 70, ktas: 124, fuelFlowLh: 22.1, rangeNm: 576, enduranceHrs: 4.3 },
  // 60% Load
  { alt: 4000, load: 60, ktas: 110, fuelFlowLh: 18.6, rangeNm: 637, enduranceHrs: 5.7 },
  { alt: 6000, load: 60, ktas: 111, fuelFlowLh: 18.6, rangeNm: 638, enduranceHrs: 5.5 },
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

  // Expected values based on mission
  // Mission 1: 2000 ft, 70% -> KTAS 116, 22.1 L/h, dist 60 NM -> time 60/116 = 0.52 h -> fuel = 11.4 L
  // Mission 2: 6000 ft, 70% -> KTAS 120, 22.1 L/h, dist 105 NM -> time 105/120 = 0.875 h -> fuel = 19.3 L
  // Mission 3: 4000 ft, 70% -> KTAS 118, 22.1 L/h, dist 50 NM -> time 50/118 = 0.42 h -> fuel = 9.4 L
  const alt = selectedMissionIndex === 0 ? 2000 : selectedMissionIndex === 1 ? 6000 : 4000;
  const targetRow = CRUISE_TABLE_DATA.find((r) => r.alt === alt && r.load === 70) || CRUISE_TABLE_DATA[3];

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
    if (isNaN(userKtas) || !checkValueTolerance(userKtas, expectedKtas, 0.02, 1).isOk) {
      newErrors.ktas =
        attempts >= 2
          ? `Solución: En la tabla Fig. 5-4a a ${alt} ft y 70% Load, la velocidad es ${expectedKtas} KTAS`
          : `Revisa la tabla oficial: busca la fila de ${alt} ft y columna Speed [KTAS] al 70% de carga.`;
    }

    // Check Fuel Flow
    const userFf = num(fuelFlowInput);
    if (isNaN(userFf) || !checkValueTolerance(userFf, expectedFuelFlow, 0.02, 0.2).isOk) {
      newErrors.fuelFlow =
        attempts >= 2
          ? `Solución: En la tabla CD-155, el consumo horario al 70% de Load es de ${expectedFuelFlow} l/h`
          : "Consulta la columna Fuel Flow [l/h] en la tabla para 70% de potencia.";
    }

    // Check Time in Hours
    const userTime = num(timeHrsInput);
    if (isNaN(userTime) || !checkValueTolerance(userTime, expectedTimeHrs, 0.05, 0.04).isOk) {
      newErrors.timeHrs =
        attempts >= 2
          ? `Solución: Tiempo = Distancia (${mission.scenario.distanceNm} NM) / KTAS (${expectedKtas}) = ${expectedTimeHrs} h (~${Math.round(expectedTimeHrs * 60)} min)`
          : `Calcula el tiempo de vuelo: Distancia (${mission.scenario.distanceNm} NM) / KTAS.`;
    } else if (Math.abs(userTime - expectedTimeHrs) > 0.01) {
      newWarnings.push(`Tiempo en ruta: Tu valor (${userTime} h) tiene un leve desvío por redondeo, pero es válido.`);
    }

    // Check Trip Fuel Liters
    const userTripL = num(tripFuelLitersInput);
    if (isNaN(userTripL) || !checkValueTolerance(userTripL, expectedTripLiters, 0.05, 0.5).isOk) {
      newErrors.tripLiters =
        attempts >= 2
          ? `Solución: Combustible ruta = ${expectedTimeHrs} h × ${expectedFuelFlow} l/h = ${expectedTripLiters} L`
          : "Combustible de ruta (Litros) = Tiempo en horas × Gasto horario (l/h).";
    } else if (Math.abs(userTripL - expectedTripLiters) > 0.2) {
      newWarnings.push(`Gasto en litros: Tu valor (${userTripL} L) tiene leve desvío por redondeo, pero se da por bueno.`);
    }

    // Check Trip Fuel Kg
    const userTripKg = num(tripFuelKgInput);
    if (isNaN(userTripKg) || !checkValueTolerance(userTripKg, expectedTripKg, 0.05, 0.5).isOk) {
      newErrors.tripKg =
        attempts >= 2
          ? `Solución: ${expectedTripLiters} L × 0.84 kg/L = ${expectedTripKg} kg`
          : "Convierte los litros a kilogramos usando la densidad diésel de 0.84 kg/L.";
    }

    // Check Max Range
    const userRange = num(maxRangeInput);
    if (isNaN(userRange) || !checkValueTolerance(userRange, expectedMaxRange, 0.02, 5).isOk) {
      newErrors.maxRange =
        attempts >= 2
          ? `Solución: En la columna Distance Range [NM] figura ${expectedMaxRange} NM`
          : "Busca en la columna 'Distance Range [NM]' el alcance máximo con tanques estándar.";
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
    <div className="w-full flex flex-col space-y-4 text-slate-800 dark:text-slate-100">
      {/* Scenario header banner */}
      <div className="p-3 rounded-2xl bg-sky-50/80 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xs">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-sky-700 dark:text-sky-300 uppercase tracking-wider">
              Taller de Crucero y Autonomía · Continental CD-155
            </span>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-sky-200/80 dark:bg-sky-900 text-sky-800 dark:text-sky-200">
              Altitud: {alt} ft · Load: 70%
            </span>
          </div>
          <h3 className="text-sm font-extrabold text-[#0B2E59] dark:text-sky-200 mt-0.5">
            Ruta: {mission.scenario.origin} ➔ {mission.scenario.destination} ({mission.scenario.distanceNm} NM)
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
            Consulta la tabla oficial del motor TAE 125-02-114 y calcula la velocidad, el tiempo y el gasto horario en litros y kilogramos.
          </p>
        </div>

        {/* Mission selector */}
        <div className="flex items-center gap-1.5 shrink-0">
          {PREFLIGHT_MISSIONS.map((m, idx) => (
            <button
              key={m.id}
              type="button"
              onClick={() => {
                setSelectedMissionIndex(idx);
                setKtasInput("");
                setFuelFlowInput("");
                setTimeHrsInput("");
                setTripFuelLitersInput("");
                setTripFuelKgInput("");
                setMaxRangeInput("");
                setErrors({});
                setWarnings([]);
                setAttempts(0);
                setIsPassed(false);
              }}
              className={`px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedMissionIndex === idx
                  ? "bg-[#1a80ff] text-white shadow-xs"
                  : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100"
              }`}
            >
              Misión {idx + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Grid: Left = Student Form, Right = Official Supplement Table 5-4a */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-start">
        {/* Left Column (lg:col-span-6): Interactive Calculation Form */}
        <div className="lg:col-span-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
            <span className="text-xs font-black uppercase tracking-wider text-[#0B2E59] dark:text-sky-300">
              📊 CÁLCULO DE CRUCERO Y GASTO DE COMBUSTIBLE
            </span>
            <span className="text-[10px] text-slate-400 font-bold">Paso 1 de 3</span>
          </div>

          <div className="space-y-2.5">
            {/* Step 1: Read from Table */}
            <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
              <span className="text-[11px] font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wide block">
                1. Lectura en Tabla Fig. 5-4a ({alt} ft / 70% Load)
              </span>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[11px] font-semibold text-slate-600 dark:text-slate-300 block mb-0.5">
                    Velocidad Verdadera (KTAS):
                  </label>
                  <input
                    type="text"
                    placeholder={`Ej: ${expectedKtas}`}
                    value={ktasInput}
                    onChange={(e) => setKtasInput(e.target.value)}
                    className={`w-full px-2.5 py-1.5 rounded-lg border font-mono text-xs ${
                      errors.ktas
                        ? "border-rose-500 bg-rose-50 text-rose-700"
                        : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                    }`}
                  />
                  {errors.ktas && <span className="text-[10px] text-rose-600 font-medium">{errors.ktas}</span>}
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-slate-600 dark:text-slate-300 block mb-0.5">
                    Gasto Horario (Fuel Flow l/h):
                  </label>
                  <input
                    type="text"
                    placeholder={`Ej: ${expectedFuelFlow}`}
                    value={fuelFlowInput}
                    onChange={(e) => setFuelFlowInput(e.target.value)}
                    className={`w-full px-2.5 py-1.5 rounded-lg border font-mono text-xs ${
                      errors.fuelFlow
                        ? "border-rose-500 bg-rose-50 text-rose-700"
                        : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                    }`}
                  />
                  {errors.fuelFlow && <span className="text-[10px] text-rose-600 font-medium">{errors.fuelFlow}</span>}
                </div>
              </div>
            </div>

            {/* Step 2: Time & Fuel Consumption Calculation */}
            <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
              <span className="text-[11px] font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wide block">
                2. Cálculos Operacionales de Ruta ({mission.scenario.distanceNm} NM)
              </span>
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="text-[10px] font-semibold text-slate-600 dark:text-slate-300 block mb-0.5">
                    Tiempo en Horas:
                  </label>
                  <input
                    type="text"
                    placeholder={`Ej: ${expectedTimeHrs}`}
                    value={timeHrsInput}
                    onChange={(e) => setTimeHrsInput(e.target.value)}
                    className={`w-full px-2 py-1.5 rounded-lg border font-mono text-xs ${
                      errors.timeHrs
                        ? "border-rose-500 bg-rose-50 text-rose-700"
                        : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                    }`}
                  />
                  {errors.timeHrs && <span className="text-[9px] text-rose-600 font-medium">{errors.timeHrs}</span>}
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
                    className={`w-full px-2 py-1.5 rounded-lg border font-mono text-xs ${
                      errors.tripLiters
                        ? "border-rose-500 bg-rose-50 text-rose-700"
                        : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                    }`}
                  />
                  {errors.tripLiters && <span className="text-[9px] text-rose-600 font-medium">{errors.tripLiters}</span>}
                </div>

                <div>
                  <label className="text-[10px] font-semibold text-slate-600 dark:text-slate-300 block mb-0.5">
                    Trip Fuel (Kg @ 0.84):
                  </label>
                  <input
                    type="text"
                    placeholder={`Ej: ${expectedTripKg}`}
                    value={tripFuelKgInput}
                    onChange={(e) => setTripFuelKgInput(e.target.value)}
                    className={`w-full px-2 py-1.5 rounded-lg border font-mono text-xs ${
                      errors.tripKg
                        ? "border-rose-500 bg-rose-50 text-rose-700"
                        : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                    }`}
                  />
                  {errors.tripKg && <span className="text-[9px] text-rose-600 font-medium">{errors.tripKg}</span>}
                </div>
              </div>
            </div>

            {/* Step 3: Range Check */}
            <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1.5">
              <span className="text-[11px] font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wide block">
                3. Verificación de Alcance Máximo (Range)
              </span>
              <div>
                <label className="text-[11px] font-semibold text-slate-600 dark:text-slate-300 block mb-0.5">
                  Alcance Máximo de la Tabla (Distance Range [NM]):
                </label>
                <input
                  type="text"
                  placeholder={`Ej: ${expectedMaxRange}`}
                  value={maxRangeInput}
                  onChange={(e) => setMaxRangeInput(e.target.value)}
                  className={`w-32 px-2.5 py-1.5 rounded-lg border font-mono text-xs ${
                    errors.maxRange
                      ? "border-rose-500 bg-rose-50 text-rose-700"
                      : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                  }`}
                />
                {errors.maxRange && <span className="text-[10px] text-rose-600 font-medium block mt-0.5">{errors.maxRange}</span>}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            <span className="text-[11px] text-slate-500 italic">
              Fórmula: Tiempo = Distancia / KTAS · Consumo = Tiempo × Fuel Flow · Masa = Litros × 0,84
            </span>

            <button
              type="button"
              onClick={handleValidate}
              className="px-4 py-2 rounded-xl bg-[#1a80ff] hover:bg-[#0066e6] text-white font-extrabold text-xs shadow-md transition-all cursor-pointer hover:scale-105 active:scale-95"
            >
              Comprobar Cálculos de Crucero ➔
            </button>
          </div>

          {/* Warnings and errors */}
          {warnings.length > 0 && (
            <div className="p-2.5 rounded-xl border border-amber-200 dark:border-amber-800 bg-amber-50/90 dark:bg-amber-950/30 text-amber-900 dark:text-amber-200 text-xs space-y-0.5">
              {warnings.map((w, idx) => (
                <div key={idx} className="flex items-center gap-1">
                  <span>ℹ️</span>
                  <span>{w}</span>
                </div>
              ))}
            </div>
          )}

          {isPassed && (
            <div className="p-3 rounded-xl border border-emerald-300 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 text-xs space-y-1 animate-in zoom-in-95">
              <strong className="flex items-center gap-1.5 font-bold text-sm text-emerald-800 dark:text-emerald-300">
                <span>🎉</span>
                <span>¡CÁLCULO DE CRUCERO Y COMBUSTIBLE CORRECTO!</span>
              </strong>
              <p className="text-[11px]">
                Has calculado con precisión el tiempo de vuelo ({expectedTimeHrs} h), el consumo de ruta ({expectedTripLiters} L / {expectedTripKg} kg) y comprobado que la ruta ({mission.scenario.distanceNm} NM) está ampliamente dentro del alcance máximo ({expectedMaxRange} NM).
              </p>
            </div>
          )}
        </div>

        {/* Right Column (lg:col-span-6): Table Fig. 5-4a Excerpt */}
        <div className="lg:col-span-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 shadow-xs space-y-2.5">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-[#0B2E59] dark:text-sky-300 block">
                Figure 5-4a · Cruise Performance, Range & Endurance
              </span>
              <span className="text-[10px] text-slate-500 font-medium">
                Cessna 172 · Continental CD-155 (TAE 125-02-114) · Standard Tanks (127.4 L usable)
              </span>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600">
              POH Supl. 5a-15
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-[11px] border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-200 dark:border-slate-700 font-extrabold text-[#0B2E59] dark:text-sky-300 bg-slate-50 dark:bg-slate-800/60">
                  <th className="py-1 px-1.5">Alt [ft]</th>
                  <th className="py-1 px-1.5 text-center">Load [%]</th>
                  <th className="py-1 px-1.5 text-center">KTAS</th>
                  <th className="py-1 px-1.5 text-center">Fuel [l/h]</th>
                  <th className="py-1 px-1.5 text-center">Range [NM]</th>
                  <th className="py-1 px-1.5 text-center">Endur [h]</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-mono">
                {CRUISE_TABLE_DATA.map((row, idx) => {
                  const isHighlighted = row.alt === alt && row.load === 70;
                  return (
                    <tr
                      key={idx}
                      className={
                        isHighlighted
                          ? "bg-amber-100/70 dark:bg-amber-950/50 font-bold text-amber-900 dark:text-amber-200"
                          : "hover:bg-slate-50 dark:hover:bg-slate-800/40"
                      }
                    >
                      <td className="py-1 px-1.5">{row.alt === 0 ? "SL" : row.alt}</td>
                      <td className="py-1 px-1.5 text-center">{row.load}%</td>
                      <td className="py-1 px-1.5 text-center text-sky-700 dark:text-sky-300">{row.ktas}</td>
                      <td className="py-1 px-1.5 text-center text-rose-700 dark:text-rose-300 font-bold">{row.fuelFlowLh}</td>
                      <td className="py-1 px-1.5 text-center text-emerald-700 dark:text-emerald-300">{row.rangeNm}</td>
                      <td className="py-1 px-1.5 text-center">{row.enduranceHrs}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="p-2.5 rounded-xl bg-sky-50/70 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800 text-[11px] space-y-1 text-slate-700 dark:text-slate-300">
            <strong className="text-sky-800 dark:text-sky-300 block uppercase font-bold">
              Notas Importantes del POH:
            </strong>
            <ul className="list-disc pl-4 space-y-0.5 text-[10px]">
              <li>La tabla asume 4 L para puesta en marcha y rodaje (*startup & taxi*).</li>
              <li>El tiempo de alcance y autonomía incluye el ascenso y la **reserva legal de 45 minutos**.</li>
              <li>No se recomienda crucero continuo por encima del 75%. Para crucero económico seleccione 70% o menos.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
