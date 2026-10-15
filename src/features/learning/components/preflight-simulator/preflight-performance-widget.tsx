"use client";

import React, { useState } from "react";
import { PREFLIGHT_MISSIONS, checkValueTolerance } from "./constants";

type Props = {
  onExerciseCompleted?: () => void;
  isAlreadyCompleted?: boolean;
};

// Official CD-155 TAE 125-02-114 Take-off Distance at 1043 kg, Flaps 10°
// SL: 204m / 319m (20°C)
// 2000 ft: 234m / 366m (20°C)
// 4000 ft: 269m / 421m (20°C)

// Official C172N Landing Distance Short field (Flaps 40°, 60 KIAS, 2300 lbs)
// SL, 20°C: Grnd Roll 530 ft (162m), 50 ft: 1265 ft (386m)
// 2000 ft, 20°C: Grnd Roll 570 ft (174m), 50 ft: 1335 ft (407m)
// 4000 ft, 20°C: Grnd Roll 615 ft (187m), 50 ft: 1410 ft (430m)

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

  // Expected calculations
  // Mission 1: 2000 ft, 20°C, 9 kt headwind, asphalt
  // Takeoff Table: Ground Roll = 234 m, 50 ft = 366 m
  // Wind correction: -10% per 9 kt -> Factor = 0.90
  // Takeoff Run = 234 * 0.90 = 210.6 m (~211 m)
  // Takeoff 50 ft = 366 * 0.90 = 329.4 m (~329 m)
  // Landing Table: 2000 ft, 20°C -> 50 ft = 1335 ft = 407 m
  // Wind correction: -10% per 9 kt -> 407 * 0.90 = 366.3 m (~366 m)

  // Mission 2: 2500 ft (interp ~245m / 380m), 25°C, 5 kt headwind, asphalt
  // Mission 3: 2000 ft, 30°C, -4 kt tailwind, grass dry (+15% takeoff roll, +45% landing roll)

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
      // Base: TO Run ~255 m, 50 ft ~395 m, LD 50ft ~420 m
      // 5 kt headwind: approx -5.5%
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
      // Mission 3: 2000 ft, 30°C, 4 kt tailwind (+20% por cola: 10% cada 2 kt), grass dry (+15% roll)
      // Base TO Run: 250 m, 50 ft: 391 m
      // Wind +20%: 250 * 1.20 = 300 m. Grass +15% of roll (+37.5 m) -> ~338 m
      // 50 ft: 391 * 1.20 + 37.5 = ~507 m
      // Landing 50 ft: 420 m * 1.20 + 45% of 180m (81m) = ~585 m
      return {
        toRun: 338,
        to50ft: 507,
        ld50ft: 585,
        baseToRun: 250,
        baseTo50: 391,
        baseLd50: 420,
        windDesc: "4 kt en cola (+20%: +10% cada 2 kt)",
        surfaceDesc: "Hierba seca (+15% a la carrera de despegue y +45% a la de aterrizaje)",
      };
    }
  }, [selectedMissionIndex]);

  const handleValidate = () => {
    const newErrors: Record<string, string> = {};
    const newWarnings: string[] = [];
    const num = (v: string) => parseFloat(v.replace(",", "."));

    // Check Take-off Run
    const userToRun = num(takeoffRunInput);
    if (isNaN(userToRun) || !checkValueTolerance(userToRun, expectedValues.toRun, 0.06, 5).isOk) {
      newErrors.takeoffRun =
        attempts >= 2
          ? `Solución: Carrera de despegue = ${expectedValues.toRun} m (Base ${expectedValues.baseToRun} m con ${expectedValues.windDesc})`
          : `Revisa la carrera en suelo: parte del valor base de la tabla Fig. 5-1a y aplica la corrección de viento (${expectedValues.windDesc}).`;
    } else if (Math.abs(userToRun - expectedValues.toRun) > 2) {
      newWarnings.push(`Carrera de despegue: Tu valor (${userToRun} m) tiene leve desvío por redondeo, pero es aceptado.`);
    }

    // Check Take-off 50 ft Distance
    const userTo50 = num(takeoff50ftInput);
    if (isNaN(userTo50) || !checkValueTolerance(userTo50, expectedValues.to50ft, 0.06, 6).isOk) {
      newErrors.takeoff50ft =
        attempts >= 2
          ? `Solución: Distancia de despegue sobre 50 ft = ${expectedValues.to50ft} m`
          : `Revisa la distancia sobre obstáculo de 50 ft en la tabla 5-1a con las correcciones aplicadas.`;
    } else if (Math.abs(userTo50 - expectedValues.to50ft) > 3) {
      newWarnings.push(`Despegue 50 ft: Tu valor (${userTo50} m) es aceptado dentro del margen de cálculo.`);
    }

    // Check Landing 50 ft Distance
    const userLd50 = num(landing50ftInput);
    if (isNaN(userLd50) || !checkValueTolerance(userLd50, expectedValues.ld50ft, 0.06, 6).isOk) {
      newErrors.landing50ft =
        attempts >= 2
          ? `Solución: Distancia de aterrizaje sobre 50 ft = ${expectedValues.ld50ft} m`
          : `Revisa la tabla Short Field Fig. 5-10: convierte los pies a metros y aplica las correcciones.`;
    } else if (Math.abs(userLd50 - expectedValues.ld50ft) > 3) {
      newWarnings.push(`Aterrizaje 50 ft: Tu valor (${userLd50} m) es válido con margen de tolerancia.`);
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
              Documento Oficial F.OPS.02 · Sección DISTANCES
            </span>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-sky-200/80 dark:bg-sky-900 text-sky-800 dark:text-sky-200">
              CD-155 (114 kW / 155 HP)
            </span>
          </div>
          <h3 className="text-sm font-extrabold text-[#0B2E59] dark:text-sky-200 mt-0.5">
            Performance en {mission.scenario.origin}: {mission.name}
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
            $H_p$: <strong>{mission.scenario.altPressFt} ft</strong> · OAT: <strong>{mission.scenario.oatC}°C</strong> · Viento: <strong>{expectedValues.windDesc}</strong> · Pista: <strong>{expectedValues.surfaceDesc}</strong>.
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
                setTakeoffRunInput("");
                setTakeoff50ftInput("");
                setLanding50ftInput("");
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

      {/* Main Grid: Left = F.OPS.02 Distances Table, Right = POH Table Reference */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-start">
        {/* Left Column (lg:col-span-6): Interactive Form */}
        <div className="lg:col-span-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
            <span className="text-xs font-black uppercase tracking-wider text-[#0B2E59] dark:text-sky-300">
              🏁 RELLENO OFICIAL F.OPS.02 · DISTANCES
            </span>
            <span className="text-[10px] text-slate-400 font-bold">Unidades: Metros [m]</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-200 dark:border-slate-700 text-[11px] font-extrabold uppercase text-[#0B2E59] dark:text-sky-300 bg-slate-50 dark:bg-slate-800/60">
                  <th className="py-2 px-3">DISTANCES</th>
                  <th className="py-2 px-3 text-center text-slate-500">AVAILABLE:</th>
                  <th className="py-2 px-3 text-right">CALCULATED:</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {/* Take-off run */}
                <tr>
                  <td className="py-2.5 px-3 font-medium">
                    Take-off run
                    <div className="text-[10px] text-slate-500">Carrera en suelo (Ground Roll)</div>
                  </td>
                  <td className="py-2.5 px-3 text-center font-mono font-bold text-slate-600 dark:text-slate-300">
                    TORA: {mission.scenario.runwayToraM} m
                  </td>
                  <td className="py-2.5 px-3 text-right">
                    <input
                      type="text"
                      placeholder={`Ej: ${expectedValues.toRun}`}
                      value={takeoffRunInput}
                      onChange={(e) => setTakeoffRunInput(e.target.value)}
                      className={`w-28 text-right px-2.5 py-1 rounded-lg border font-mono text-xs ${
                        errors.takeoffRun
                          ? "border-rose-500 bg-rose-50 text-rose-700"
                          : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                      }`}
                    />
                  </td>
                </tr>

                {/* Take-off distance (50 ft) */}
                <tr className="bg-sky-50/50 dark:bg-sky-950/30">
                  <td className="py-2.5 px-3 font-bold text-[#0B2E59] dark:text-sky-300">
                    Take-off distance (50 ft)
                    <div className="text-[10px] font-normal text-slate-500">Distancia sobre obstáculo de 15 m</div>
                  </td>
                  <td className="py-2.5 px-3 text-center font-mono font-bold text-slate-600 dark:text-slate-300">
                    TODA: {mission.scenario.runwayToraM} m
                  </td>
                  <td className="py-2.5 px-3 text-right">
                    <input
                      type="text"
                      placeholder={`Ej: ${expectedValues.to50ft}`}
                      value={takeoff50ftInput}
                      onChange={(e) => setTakeoff50ftInput(e.target.value)}
                      className={`w-28 text-right px-2.5 py-1 rounded-lg border font-mono text-xs ${
                        errors.takeoff50ft
                          ? "border-rose-500 bg-rose-50 text-rose-700"
                          : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sky-700 font-bold"
                      }`}
                    />
                  </td>
                </tr>

                {/* Landing distance (50 ft) */}
                <tr className="bg-emerald-50/50 dark:bg-emerald-950/30">
                  <td className="py-2.5 px-3 font-bold text-emerald-950 dark:text-emerald-300">
                    Landing distance (50 ft)
                    <div className="text-[10px] font-normal text-slate-500">Distancia de toma sobre obstáculo 50 ft</div>
                  </td>
                  <td className="py-2.5 px-3 text-center font-mono font-bold text-slate-600 dark:text-slate-300">
                    LDA: {mission.scenario.runwayLdaM} m
                  </td>
                  <td className="py-2.5 px-3 text-right">
                    <input
                      type="text"
                      placeholder={`Ej: ${expectedValues.ld50ft}`}
                      value={landing50ftInput}
                      onChange={(e) => setLanding50ftInput(e.target.value)}
                      className={`w-28 text-right px-2.5 py-1 rounded-lg border font-mono text-xs ${
                        errors.landing50ft
                          ? "border-rose-500 bg-rose-50 text-rose-700"
                          : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-emerald-700 font-bold"
                      }`}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between pt-2">
            <span className="text-[10px] text-slate-500 italic">
              Regla POH: -10% por cada 9 kt en cara · +10% por cada 2 kt en cola · +15% hierba despegue.
            </span>

            <button
              type="button"
              onClick={handleValidate}
              className="px-4 py-2 rounded-xl bg-[#1a80ff] hover:bg-[#0066e6] text-white font-extrabold text-xs shadow-md transition-all cursor-pointer hover:scale-105 active:scale-95"
            >
              Comprobar Performance F.OPS.02 ➔
            </button>
          </div>

          {/* Feedback */}
          {Object.keys(errors).length > 0 && (
            <div className="p-3 rounded-xl border border-rose-200 dark:border-rose-800 bg-rose-50/90 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200 text-xs space-y-1">
              <strong className="flex items-center gap-1.5 font-bold">
                <span>⚠️</span>
                <span>Errores en el cálculo de distancias (Intento {attempts}):</span>
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
                <span>¡CÁLCULO DE PERFORMANCE VERIFICADO!</span>
              </strong>
              <p className="text-[11px]">
                Tanto la distancia de despegue ({expectedValues.to50ft} m) como la de aterrizaje ({expectedValues.ld50ft} m) son inferiores a las distancias disponibles de pista (TORA {mission.scenario.runwayToraM} m / LDA {mission.scenario.runwayLdaM} m), garantizando un margen de seguridad superior al 50%.
              </p>
            </div>
          )}
        </div>

        {/* Right Column (lg:col-span-6): Performance Reference Excerpt */}
        <div className="lg:col-span-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 shadow-xs space-y-2.5">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-[#0B2E59] dark:text-sky-300 block">
                Figure 5-1a · Take-Off Distance [m] TAE 125-02-114
              </span>
              <span className="text-[10px] text-slate-500 font-medium">
                C172 · Continental CD-155 · 1043 kg (2300 lbs) · Flaps 10°
              </span>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600">
              POH 5b-3
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-[11px] border-collapse font-mono">
              <thead>
                <tr className="border-b-2 border-slate-200 dark:border-slate-700 font-extrabold text-[#0B2E59] dark:text-sky-300 bg-slate-50 dark:bg-slate-800/60 font-sans">
                  <th className="py-1 px-1.5">Press. Alt</th>
                  <th className="py-1 px-1.5">Distancia [m]</th>
                  <th className="py-1 px-1.5 text-center">0°C</th>
                  <th className="py-1 px-1.5 text-center bg-amber-50 dark:bg-amber-950/30">20°C</th>
                  <th className="py-1 px-1.5 text-center">30°C</th>
                  <th className="py-1 px-1.5 text-center">40°C</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                <tr>
                  <td rowSpan={2} className="py-1 px-1.5 font-bold font-sans">SL</td>
                  <td className="py-0.5 px-1.5 text-[10px]">Gnd Roll</td>
                  <td className="py-0.5 px-1.5 text-center">177</td>
                  <td className="py-0.5 px-1.5 text-center font-bold text-amber-900 dark:text-amber-300 bg-amber-50/50">204</td>
                  <td className="py-0.5 px-1.5 text-center">217</td>
                  <td className="py-0.5 px-1.5 text-center">239</td>
                </tr>
                <tr>
                  <td className="py-0.5 px-1.5 text-[10px]">50 ft obs</td>
                  <td className="py-0.5 px-1.5 text-center">277</td>
                  <td className="py-0.5 px-1.5 text-center font-bold text-amber-900 dark:text-amber-300 bg-amber-50/50">319</td>
                  <td className="py-0.5 px-1.5 text-center">340</td>
                  <td className="py-0.5 px-1.5 text-center">375</td>
                </tr>

                <tr className="bg-sky-50/40 dark:bg-sky-950/20">
                  <td rowSpan={2} className="py-1 px-1.5 font-bold font-sans text-sky-800 dark:text-sky-300">2000 ft</td>
                  <td className="py-0.5 px-1.5 text-[10px]">Gnd Roll</td>
                  <td className="py-0.5 px-1.5 text-center">204</td>
                  <td className="py-0.5 px-1.5 text-center font-bold text-sky-700 dark:text-sky-300 bg-amber-100/50">234</td>
                  <td className="py-0.5 px-1.5 text-center">250</td>
                  <td className="py-0.5 px-1.5 text-center">275</td>
                </tr>
                <tr className="bg-sky-50/40 dark:bg-sky-950/20">
                  <td className="py-0.5 px-1.5 text-[10px]">50 ft obs</td>
                  <td className="py-0.5 px-1.5 text-center">318</td>
                  <td className="py-0.5 px-1.5 text-center font-bold text-sky-700 dark:text-sky-300 bg-amber-100/50">366</td>
                  <td className="py-0.5 px-1.5 text-center">391</td>
                  <td className="py-0.5 px-1.5 text-center">431</td>
                </tr>

                <tr>
                  <td rowSpan={2} className="py-1 px-1.5 font-bold font-sans">4000 ft</td>
                  <td className="py-0.5 px-1.5 text-[10px]">Gnd Roll</td>
                  <td className="py-0.5 px-1.5 text-center">234</td>
                  <td className="py-0.5 px-1.5 text-center font-bold text-amber-900 dark:text-amber-300 bg-amber-50/50">269</td>
                  <td className="py-0.5 px-1.5 text-center">287</td>
                  <td className="py-0.5 px-1.5 text-center">316</td>
                </tr>
                <tr>
                  <td className="py-0.5 px-1.5 text-[10px]">50 ft obs</td>
                  <td className="py-0.5 px-1.5 text-center">366</td>
                  <td className="py-0.5 px-1.5 text-center font-bold text-amber-900 dark:text-amber-300 bg-amber-50/50">421</td>
                  <td className="py-0.5 px-1.5 text-center">450</td>
                  <td className="py-0.5 px-1.5 text-center">496</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-2.5 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 text-[11px] space-y-1 text-slate-700 dark:text-slate-300">
            <strong className="text-amber-800 dark:text-amber-300 block uppercase font-bold text-[10px]">
              Reglas Oficiales de Corrección de Viento y Pista:
            </strong>
            <ul className="list-disc pl-4 space-y-0.5 text-[10px]">
              <li><strong>Viento en cara:</strong> Restar un 10% a todas las distancias por cada 9 nudos de viento de cara.</li>
              <li><strong>Viento en cola:</strong> Sumar un 10% por cada 2 nudos de viento en cola (máximo autorizado 10 kt).</li>
              <li><strong>Hierba seca:</strong> Sumar un 15% a la carrera en suelo (*ground roll*) en despegue y un 45% en aterrizaje.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
