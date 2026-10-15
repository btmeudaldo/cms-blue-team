"use client";

import React, { useState } from "react";
import { PREFLIGHT_MISSIONS, checkValueTolerance } from "./constants";

type Props = {
  onExerciseCompleted?: () => void;
  isAlreadyCompleted?: boolean;
};

export function PreflightPerformanceWidget({
  onExerciseCompleted,
  isAlreadyCompleted = false,
}: Props) {
  const [selectedMissionIndex, setSelectedMissionIndex] = useState(0); // Mission 1 (LECU, 2000 ft, 20°C, 9 kt headwind)
  const mission = PREFLIGHT_MISSIONS[selectedMissionIndex];

  // User input states (in meters)
  const [takeoffRunInput, setTakeoffRunInput] = useState("");
  const [takeoff50ftInput, setTakeoff50ftInput] = useState("");
  const [landing50ftInput, setLanding50ftInput] = useState("");

  // Feedback states
  const [attempts, setAttempts] = useState(0);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [warnings, setWarnings] = useState<string[]>([]);
  const [isPassed, setIsPassed] = useState(isAlreadyCompleted);

  const expectedValues = React.useMemo(() => {
    if (selectedMissionIndex === 0) {
      // Mission 1: LECU 2000 ft, 20°C, 9 kt headwind, asphalt
      return {
        toRun: 211,
        to50ft: 329,
        ld50ft: 366,
        baseToRun: 234,
        baseTo50: 366,
        baseLd50: 407,
        windDesc: "9 kt de cara (-10% a todas las distancias)",
        surfaceDesc: "Asfalto seco (sin penalización)",
      };
    } else if (selectedMissionIndex === 1) {
      // Mission 2: 2500 ft / 25°C, 5 kt headwind, asphalt
      return {
        toRun: 241,
        to50ft: 373,
        ld50ft: 397,
        baseToRun: 255,
        baseTo50: 395,
        baseLd50: 420,
        windDesc: "5 kt de cara (-5.5% por viento)",
        surfaceDesc: "Asfalto seco",
      };
    } else {
      // Mission 3: 2000 ft, 30°C, 4 kt tailwind (+20%), grass dry (+15% roll)
      return {
        toRun: 338,
        to50ft: 507,
        ld50ft: 585,
        baseToRun: 250,
        baseTo50: 391,
        baseLd50: 420,
        windDesc: "4 kt en cola (+20%: +10% cada 2 kt)",
        surfaceDesc: "Hierba seca (+15% carrera despegue y +45% aterrizaje)",
      };
    }
  }, [selectedMissionIndex]);

  const handleValidate = () => {
    const newErrors: Record<string, string> = {};
    const newWarnings: string[] = [];
    const num = (v: string) => parseFloat(v.replace(",", "."));

    // Check Takeoff Run
    const userToRun = num(takeoffRunInput);
    if (isNaN(userToRun) || !checkValueTolerance(userToRun, expectedValues.toRun, 0.06, 8).isOk) {
      newErrors.takeoffRun =
        attempts >= 2
          ? `Solución: Carrera de despegue corregida = ${expectedValues.toRun} m (Base ${expectedValues.baseToRun} m con corrección de viento y pista).`
          : `Aplica las correcciones sobre la carrera base (${expectedValues.baseToRun} m): ${expectedValues.windDesc}.`;
    } else if (Math.abs(userToRun - expectedValues.toRun) > 2) {
      newWarnings.push(`Carrera de despegue: Tu valor (${userToRun} m) tiene un leve desvío por redondeo, pero es válido.`);
    }

    // Check Takeoff 50 ft
    const userTo50 = num(takeoff50ftInput);
    if (isNaN(userTo50) || !checkValueTolerance(userTo50, expectedValues.to50ft, 0.06, 10).isOk) {
      newErrors.takeoff50ft =
        attempts >= 2
          ? `Solución: Distancia despegue a 50 ft = ${expectedValues.to50ft} m (Base ${expectedValues.baseTo50} m con factor de viento).`
          : `Aplica la corrección a la distancia sobre 50 ft (${expectedValues.baseTo50} m): ${expectedValues.windDesc}.`;
    }

    // Check Landing 50 ft
    const userLd50 = num(landing50ftInput);
    if (isNaN(userLd50) || !checkValueTolerance(userLd50, expectedValues.ld50ft, 0.06, 10).isOk) {
      newErrors.landing50ft =
        attempts >= 2
          ? `Solución: Distancia de toma sobre 50 ft = ${expectedValues.ld50ft} m (Base ${expectedValues.baseLd50} m con factor de viento y pista).`
          : `Convierte la distancia a 50 ft de la tabla (${expectedValues.baseLd50} m) y aplica ${expectedValues.windDesc}.`;
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
      {/* Columna Izquierda (lg:col-span-7): Formulario F.OPS.02 Distances (Altura Fija 590px) */}
      <div className="lg:col-span-7 flex flex-col">
        <div
          className="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs"
          style={{ height: "590px" }}
        >
          {/* Header & Mission Selector */}
          <div className="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
            <div>
              <span className="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">
                🏁 RELLENO OFICIAL F.OPS.02 · DISTANCES
              </span>
              <div className="text-[10px] text-slate-500 font-medium">
                {mission.name} · {mission.scenario.altPressFt} ft · OAT {mission.scenario.oatC}°C · {expectedValues.windDesc}
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
            <div className="p-2 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-2xs">
              <span className="text-[10.5px] font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wide block mb-1">
                Condiciones de Pista y Factores de Corrección
              </span>
              <div className="grid grid-cols-2 gap-2 text-[10.5px] text-slate-600 dark:text-slate-300">
                <div className="p-1.5 rounded-lg bg-slate-50 dark:bg-slate-900 border">
                  <strong>Viento:</strong> {expectedValues.windDesc}
                </div>
                <div className="p-1.5 rounded-lg bg-slate-50 dark:bg-slate-900 border">
                  <strong>Superficie:</strong> {expectedValues.surfaceDesc}
                </div>
              </div>
            </div>

            <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/80 shadow-2xs">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-700 text-[10.5px] font-extrabold uppercase text-[#0B2E59] dark:text-sky-300 bg-slate-100/70 dark:bg-slate-800/60">
                    <th className="py-1.5 px-2">DISTANCES F.OPS.02</th>
                    <th className="py-1.5 px-2 text-center text-slate-500">AVAILABLE</th>
                    <th className="py-1.5 px-2 text-right">CALCULATED [m]</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {/* Take-off run */}
                  <tr>
                    <td className="py-2 px-2 font-medium">
                      Take-off run
                      <div className="text-[9.5px] text-slate-500">Carrera en suelo (Ground Roll)</div>
                    </td>
                    <td className="py-2 px-2 text-center font-mono font-bold text-slate-600 dark:text-slate-300 text-xs">
                      TORA: {mission.scenario.runwayToraM} m
                    </td>
                    <td className="py-2 px-2 text-right">
                      <input
                        type="text"
                        placeholder={`Ej: ${expectedValues.toRun}`}
                        value={takeoffRunInput}
                        onChange={(e) => setTakeoffRunInput(e.target.value)}
                        className={`w-24 text-right px-2 py-1 rounded-lg border font-mono text-xs ${
                          errors.takeoffRun
                            ? "border-rose-500 bg-rose-50 text-rose-700"
                            : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900"
                        }`}
                      />
                    </td>
                  </tr>

                  {/* Take-off distance (50 ft) */}
                  <tr className="bg-sky-50/50 dark:bg-sky-950/30">
                    <td className="py-2 px-2 font-bold text-[#0B2E59] dark:text-sky-300">
                      Take-off distance (50 ft)
                      <div className="text-[9.5px] font-normal text-slate-500">Superación de obstáculo 15 m</div>
                    </td>
                    <td className="py-2 px-2 text-center font-mono font-bold text-slate-600 dark:text-slate-300 text-xs">
                      TODA: {mission.scenario.runwayToraM} m
                    </td>
                    <td className="py-2 px-2 text-right">
                      <input
                        type="text"
                        placeholder={`Ej: ${expectedValues.to50ft}`}
                        value={takeoff50ftInput}
                        onChange={(e) => setTakeoff50ftInput(e.target.value)}
                        className={`w-24 text-right px-2 py-1 rounded-lg border font-mono text-xs font-bold ${
                          errors.takeoff50ft
                            ? "border-rose-500 bg-rose-50 text-rose-700"
                            : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sky-700 dark:text-sky-300"
                        }`}
                      />
                    </td>
                  </tr>

                  {/* Landing distance (50 ft) */}
                  <tr className="bg-emerald-50/50 dark:bg-emerald-950/30">
                    <td className="py-2 px-2 font-bold text-emerald-950 dark:text-emerald-300">
                      Landing distance (50 ft)
                      <div className="text-[9.5px] font-normal text-slate-500">Toma sobre obstáculo 50 ft</div>
                    </td>
                    <td className="py-2 px-2 text-center font-mono font-bold text-slate-600 dark:text-slate-300 text-xs">
                      LDA: {mission.scenario.runwayLdaM} m
                    </td>
                    <td className="py-2 px-2 text-right">
                      <input
                        type="text"
                        placeholder={`Ej: ${expectedValues.ld50ft}`}
                        value={landing50ftInput}
                        onChange={(e) => setLanding50ftInput(e.target.value)}
                        className={`w-24 text-right px-2 py-1 rounded-lg border font-mono text-xs font-bold ${
                          errors.landing50ft
                            ? "border-rose-500 bg-rose-50 text-rose-700"
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
                {errors.takeoffRun && <div>⚠️ <strong>Carrera despegue:</strong> {errors.takeoffRun}</div>}
                {errors.takeoff50ft && <div>⚠️ <strong>Despegue 50 ft:</strong> {errors.takeoff50ft}</div>}
                {errors.landing50ft && <div>⚠️ <strong>Aterrizaje 50 ft:</strong> {errors.landing50ft}</div>}
              </div>
            )}
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
                Validar Distancias F.OPS.02 ➔
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
                <strong className="font-bold">✓ ¡DISTANCIAS OPERATIVAS VALIDADAS CON ÉXITO!</strong>
                <p className="text-[10px] mt-0.5">
                  Despegue a 50 ft: {expectedValues.to50ft} m &lt; TORA ({mission.scenario.runwayToraM} m) · Aterrizaje a 50 ft: {expectedValues.ld50ft} m &lt; LDA ({mission.scenario.runwayLdaM} m).
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
                📏 VERIFICACIÓN TORA / LDA
              </span>
              <span className="text-[10px] text-slate-500 font-medium">
                Márgenes de Seguridad Operacionales
              </span>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-sky-300 shrink-0">
              POH Supl. 5-1a
            </span>
          </div>

          <div className="flex-1 min-h-0 overflow-y-auto my-1 space-y-2.5 text-xs">
            {/* Takeoff Comparison Bar */}
            <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-1.5 shadow-2xs">
              <div className="flex justify-between items-center text-[11px] font-bold">
                <span className="text-[#0B2E59] dark:text-sky-300">Despegue 50 ft vs TORA</span>
                <span className="text-emerald-600 font-mono">
                  Margen: +{mission.scenario.runwayToraM - expectedValues.to50ft} m
                </span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-900 rounded-lg overflow-hidden h-5 flex border border-slate-200 dark:border-slate-700">
                <div
                  style={{ width: `${(expectedValues.to50ft / mission.scenario.runwayToraM) * 100}%` }}
                  className="bg-blue-500 flex items-center justify-center text-[10px] font-bold text-white shrink-0"
                >
                  {expectedValues.to50ft} m Req.
                </div>
                <div className="flex-1 bg-emerald-100 dark:bg-emerald-950/40 flex items-center justify-center text-[10px] font-bold text-emerald-800 dark:text-emerald-300">
                  Libre
                </div>
              </div>
              <div className="flex justify-between text-[10px] text-slate-500">
                <span>0 m</span>
                <span>Pista Disponible: {mission.scenario.runwayToraM} m</span>
              </div>
            </div>

            {/* Landing Comparison Bar */}
            <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-1.5 shadow-2xs">
              <div className="flex justify-between items-center text-[11px] font-bold">
                <span className="text-[#0B2E59] dark:text-sky-300">Aterrizaje 50 ft vs LDA</span>
                <span className="text-emerald-600 font-mono">
                  Margen: +{mission.scenario.runwayLdaM - expectedValues.ld50ft} m
                </span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-900 rounded-lg overflow-hidden h-5 flex border border-slate-200 dark:border-slate-700">
                <div
                  style={{ width: `${(expectedValues.ld50ft / mission.scenario.runwayLdaM) * 100}%` }}
                  className="bg-emerald-600 flex items-center justify-center text-[10px] font-bold text-white shrink-0"
                >
                  {expectedValues.ld50ft} m Req.
                </div>
                <div className="flex-1 bg-emerald-100 dark:bg-emerald-950/40 flex items-center justify-center text-[10px] font-bold text-emerald-800 dark:text-emerald-300">
                  Libre
                </div>
              </div>
              <div className="flex justify-between text-[10px] text-slate-500">
                <span>0 m</span>
                <span>Pista Disponible (LDA): {mission.scenario.runwayLdaM} m</span>
              </div>
            </div>

            {/* POH Rules box */}
            <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1 text-[11px] text-slate-700 dark:text-slate-300">
              <strong className="text-[#0B2E59] dark:text-sky-300 block uppercase font-bold text-[10px]">
                Reglas de Corrección POH Continental CD-155:
              </strong>
              <ul className="list-disc pl-4 space-y-0.5 text-[10px] text-slate-600 dark:text-slate-400">
                <li><strong>Viento en cara:</strong> Restar 10% por cada 9 kt.</li>
                <li><strong>Viento en cola:</strong> Sumar 10% por cada 2 kt (máx 10 kt).</li>
                <li><strong>Hierba seca despegue:</strong> +15% a la carrera en suelo.</li>
                <li><strong>Hierba seca aterrizaje:</strong> +45% a la carrera en suelo.</li>
              </ul>
            </div>
          </div>

          <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium pt-1 px-1 border-t border-slate-200/60 dark:border-slate-800/60 shrink-0">
            Ref. POH: Fig. 5-1a Takeoff (m) & Fig. 5-10 Landing (ft &rarr; m)
          </div>
        </div>
      </div>
    </div>
  );
}
