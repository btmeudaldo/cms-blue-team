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

  // Expected values based on Continental CD-155 (70% load = 22.1 L/h)
  // Taxi: 4 L (fixed in Note 2 of POH)
  // Trip: flightTimeHrs * 22.1 L/h
  // Reserve: 45 min = 0.75 h * 22.1 L/h = 16.6 L (Part-NCO.OP.125)
  // Landing: Reserve (16.6 L) + Contingency (0 L for basic VFR) = 16.6 L
  // Ramp: Trip + Landing + Taxi (4 L)
  const taxiFuelL = 4.0;
  const expectedTripL = Math.round(mission.scenario.flightTimeHrs * 22.1 * 10) / 10;
  const expectedReserveL = Math.round(0.75 * 22.1 * 10) / 10; // 16.6 L
  const expectedLandingL = expectedReserveL;
  const expectedRampL = Math.round((expectedTripL + expectedLandingL + taxiFuelL) * 10) / 10;

  const handleValidate = () => {
    const newErrors: Record<string, string> = {};
    const newWarnings: string[] = [];
    const num = (v: string) => parseFloat(v.replace(",", "."));

    // Check Trip Fuel
    const userTrip = num(tripFuelLiters);
    if (isNaN(userTrip) || !checkValueTolerance(userTrip, expectedTripL, 0.05, 0.5).isOk) {
      newErrors.trip =
        attempts >= 2
          ? `Solución: Trip fuel = ${mission.scenario.flightTimeHrs} h × 22.1 l/h = ${expectedTripL} L`
          : `Calcula el combustible de ruta para ${mission.scenario.flightTimeHrs} h de vuelo al 70% (22.1 l/h).`;
    }

    // Check Reserve Fuel (45 min VFR)
    const userReserve = num(reserveFuelLiters);
    if (isNaN(userReserve) || !checkValueTolerance(userReserve, expectedReserveL, 0.05, 0.5).isOk) {
      newErrors.reserve =
        attempts >= 2
          ? `Solución: Reserva final legal (45 min) = 0.75 h × 22.1 l/h = ${expectedReserveL} L`
          : "La reserva legal según Part-NCO.OP.125 para VFR diurno es de 45 minutos (0.75 h × 22.1 l/h).";
    } else if (Math.abs(userReserve - expectedReserveL) > 0.1) {
      newWarnings.push(`Reserva legal: Tu valor (${userReserve} L) es aceptado por redondeo (16.5-17.0 L).`);
    }

    // Check Landing Fuel (at least Reserve)
    const userLanding = num(landingFuelLiters);
    if (isNaN(userLanding) || userLanding < expectedReserveL * 0.95) {
      newErrors.landing =
        attempts >= 2
          ? `Solución: Landing Fuel debe ser igual o superior a la Reserva legal (${expectedReserveL} L)`
          : `El combustible estimado al aterrizaje no puede ser inferior a la Reserva legal obligatoria (${expectedReserveL} L).`;
    }

    // Check Ramp Fuel (Trip + Landing + 4 L Taxi)
    const userRamp = num(rampFuelLiters);
    if (isNaN(userRamp) || !checkValueTolerance(userRamp, expectedRampL, 0.05, 1).isOk) {
      newErrors.ramp =
        attempts >= 2
          ? `Solución: Ramp Fuel = Trip (${expectedTripL}) + Landing (${expectedLandingL}) + 4 L (Rodaje) = ${expectedRampL} L`
          : `Ramp Fuel = Trip + Landing + 4 L (consumo de arranque y rodaje según POH).`;
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
      {/* Header banner */}
      <div className="p-3 rounded-2xl bg-sky-50/80 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xs">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-sky-700 dark:text-sky-300 uppercase tracking-wider">
              Documento Oficial F.OPS.02 · Sección Fuel Quantity
            </span>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-sky-200/80 dark:bg-sky-900 text-sky-800 dark:text-sky-200">
              Reglamento Part-NCO.OP.125
            </span>
          </div>
          <h3 className="text-sm font-extrabold text-[#0B2E59] dark:text-sky-200 mt-0.5">
            Cálculo de Combustible para la Misión: {mission.name}
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
            Tiempo de vuelo: <strong>{mission.scenario.flightTimeHrs} h</strong> · Consumo de crucero CD-155 al 70%: <strong>22.1 L/h</strong> · Rodaje: <strong>4.0 L</strong>.
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
                setTripFuelLiters("");
                setReserveFuelLiters("");
                setLandingFuelLiters("");
                setRampFuelLiters("");
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

      {/* Main Grid: Left = F.OPS.02 Fuel Quantity Table, Right = Legal Explanation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-start">
        {/* Left Column (lg:col-span-6): Interactive Form */}
        <div className="lg:col-span-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
            <span className="text-xs font-black uppercase tracking-wider text-[#0B2E59] dark:text-sky-300">
              ⛽ RELLENO OFICIAL F.OPS.02 · FUEL QUANTITY
            </span>
            <span className="text-[10px] text-slate-400 font-bold">Unidades: Litros (L)</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-200 dark:border-slate-700 text-[11px] font-extrabold uppercase text-[#0B2E59] dark:text-sky-300 bg-slate-50 dark:bg-slate-800/60">
                  <th className="py-2 px-3">FUEL ITEM</th>
                  <th className="py-2 px-3 text-right">QUANTITY (LITROS)</th>
                  <th className="py-2 px-3 text-right text-slate-500 font-normal">EQUIV. (KG @ 0.84)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {/* Ramp Fuel */}
                <tr className="bg-sky-50/50 dark:bg-sky-950/30 font-bold text-[#0B2E59] dark:text-sky-300">
                  <td className="py-2.5 px-3">
                    Ramp fuel
                    <div className="text-[10px] font-normal text-slate-500">Combustible total al arrancar</div>
                  </td>
                  <td className="py-2.5 px-3 text-right">
                    <input
                      type="text"
                      placeholder={`Ej: ${expectedRampL}`}
                      value={rampFuelLiters}
                      onChange={(e) => setRampFuelLiters(e.target.value)}
                      className={`w-28 text-right px-2.5 py-1 rounded-lg border font-mono text-xs ${
                        errors.ramp
                          ? "border-rose-500 bg-rose-50 text-rose-700"
                          : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                      }`}
                    />
                  </td>
                  <td className="py-2.5 px-3 text-right font-mono text-slate-500">
                    {rampFuelLiters ? `${Math.round(parseFloat(rampFuelLiters.replace(",", ".")) * 0.84 || 0)} kg` : "—"}
                  </td>
                </tr>

                {/* Trip Fuel */}
                <tr>
                  <td className="py-2.5 px-3">
                    Trip fuel
                    <div className="text-[10px] text-slate-500">Combustible en ruta ({mission.scenario.flightTimeHrs} h)</div>
                  </td>
                  <td className="py-2.5 px-3 text-right">
                    <input
                      type="text"
                      placeholder={`Ej: ${expectedTripL}`}
                      value={tripFuelLiters}
                      onChange={(e) => setTripFuelLiters(e.target.value)}
                      className={`w-28 text-right px-2.5 py-1 rounded-lg border font-mono text-xs ${
                        errors.trip
                          ? "border-rose-500 bg-rose-50 text-rose-700"
                          : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                      }`}
                    />
                  </td>
                  <td className="py-2.5 px-3 text-right font-mono text-slate-500">
                    {tripFuelLiters ? `${Math.round(parseFloat(tripFuelLiters.replace(",", ".")) * 0.84 || 0)} kg` : "—"}
                  </td>
                </tr>

                {/* Landing Fuel */}
                <tr>
                  <td className="py-2.5 px-3">
                    Landing fuel
                    <div className="text-[10px] text-slate-500">Combustible remanente en toma</div>
                  </td>
                  <td className="py-2.5 px-3 text-right">
                    <input
                      type="text"
                      placeholder={`Ej: ${expectedLandingL}`}
                      value={landingFuelLiters}
                      onChange={(e) => setLandingFuelLiters(e.target.value)}
                      className={`w-28 text-right px-2.5 py-1 rounded-lg border font-mono text-xs ${
                        errors.landing
                          ? "border-rose-500 bg-rose-50 text-rose-700"
                          : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                      }`}
                    />
                  </td>
                  <td className="py-2.5 px-3 text-right font-mono text-slate-500">
                    {landingFuelLiters ? `${Math.round(parseFloat(landingFuelLiters.replace(",", ".")) * 0.84 || 0)} kg` : "—"}
                  </td>
                </tr>

                {/* Reserve Fuel */}
                <tr className="bg-amber-50/50 dark:bg-amber-950/20 font-semibold text-amber-900 dark:text-amber-300">
                  <td className="py-2.5 px-3">
                    Reserve fuel*
                    <div className="text-[10px] font-normal text-amber-700 dark:text-amber-400">
                      Mínimo legal 45 min (NCO.OP.125)
                    </div>
                  </td>
                  <td className="py-2.5 px-3 text-right">
                    <input
                      type="text"
                      placeholder={`Ej: ${expectedReserveL}`}
                      value={reserveFuelLiters}
                      onChange={(e) => setReserveFuelLiters(e.target.value)}
                      className={`w-28 text-right px-2.5 py-1 rounded-lg border font-mono text-xs ${
                        errors.reserve
                          ? "border-rose-500 bg-rose-50 text-rose-700"
                          : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                      }`}
                    />
                  </td>
                  <td className="py-2.5 px-3 text-right font-mono text-amber-700 dark:text-amber-400">
                    {reserveFuelLiters ? `${Math.round(parseFloat(reserveFuelLiters.replace(",", ".")) * 0.84 || 0)} kg` : "—"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between pt-2">
            <span className="text-[10px] text-slate-500 italic">
              * Reserve fuel (Air Ops Regulations, Annex VII, Part-NCO, NCO.OP.125)
            </span>

            <button
              type="button"
              onClick={handleValidate}
              className="px-4 py-2 rounded-xl bg-[#1a80ff] hover:bg-[#0066e6] text-white font-extrabold text-xs shadow-md transition-all cursor-pointer hover:scale-105 active:scale-95"
            >
              Validar Combustible F.OPS.02 ➔
            </button>
          </div>

          {/* Errors list */}
          {Object.keys(errors).length > 0 && (
            <div className="p-3 rounded-xl border border-rose-200 dark:border-rose-800 bg-rose-50/90 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200 text-xs space-y-1">
              <strong className="flex items-center gap-1.5 font-bold">
                <span>⚠️</span>
                <span>Errores en el cálculo de combustible (Intento {attempts}):</span>
              </strong>
              <ul className="list-disc pl-4 space-y-0.5 text-[11px]">
                {Object.entries(errors).map(([key, msg]) => (
                  <li key={key}>{msg}</li>
                ))}
              </ul>
            </div>
          )}

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
                <span>¡PLANIFICACIÓN DE COMBUSTIBLE APROBADA!</span>
              </strong>
              <p className="text-[11px]">
                Cumple escrupulosamente con el Reglamento NCO.OP.125: reserva legal de 45 minutos ({expectedReserveL} L) asegurada en toma y total de rampa ({expectedRampL} L) verificado para el despacho.
              </p>
            </div>
          )}
        </div>

        {/* Right Column (lg:col-span-6): Regulatory & Operational Guide */}
        <div className="lg:col-span-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
            <span className="text-xs font-black uppercase tracking-wider text-[#0B2E59] dark:text-sky-300">
              📖 NORMATIVA EUROPEA Y POH C172 CD-155
            </span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
              EASA Part-NCO
            </span>
          </div>

          <div className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
            <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <strong className="text-[#0B2E59] dark:text-sky-300 block font-bold mb-1 uppercase text-[11px]">
                Desglose Legal de Combustible:
              </strong>
              <ul className="list-disc pl-4 space-y-1 text-[11px] leading-snug">
                <li>
                  <strong>Taxi Fuel:</strong> En el suplemento TAE 125-02-114 (Nota 2), el fabricante estipula una reserva estándar de <strong>4 Litros (1,1 US gal)</strong> para puesta en marcha y rodaje.
                </li>
                <li>
                  <strong>Trip Fuel:</strong> Combustible para despegue, ascenso, crucero y descenso hasta el aeródromo de destino. A 70% de carga el CD-155 consume <strong>22,1 L/h</strong>.
                </li>
                <li>
                  <strong>Reserva Final (NCO.OP.125):</strong> En vuelos VFR diurnos o nocturnos de instrucción, no se puede aterrizar con menos de <strong>45 minutos</strong> de combustible a régimen de crucero:
                  <div className="font-mono bg-white dark:bg-slate-900 p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 my-1 text-center font-bold text-sky-700 dark:text-sky-300">
                    0,75 h × 22,1 L/h = 16,6 Litros (13,9 kg)
                  </div>
                </li>
              </ul>
            </div>

            <div className="p-2.5 rounded-xl border-l-4 border-amber-500 bg-amber-50/80 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[11px] leading-relaxed">
              <strong className="text-amber-800 dark:text-amber-300 flex items-center gap-1 mb-0.5 uppercase font-bold">
                <span>⚠️</span>
                <span>Criterio Operativo Blue Team:</span>
              </strong>
              <div>
                Si la cantidad de combustible calculada al aterrizaje (*Landing fuel*) es inferior a la reserva final legal (16,6 L), el vuelo no está despachado y no está permitido salir sin repostar en rampa.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
