"use client";

import React, { useState, useMemo } from "react";
import {
  EC_NNA_DATA,
  PREFLIGHT_MISSIONS,
  isCgInsideNormal,
  isCgInsideUtility,
  mapCgToSvgCoords,
  checkValueTolerance,
} from "./constants";
import { PreflightMission } from "./types";

type Props = {
  mode?: "all" | "takeoff" | "landing";
  onExerciseCompleted?: () => void;
  isAlreadyCompleted?: boolean;
};

export function PreflightLoadsheetWidget({
  mode = "all",
  onExerciseCompleted,
  isAlreadyCompleted = false,
}: Props) {
  const [selectedMissionIndex, setSelectedMissionIndex] = useState(0);
  const mission = PREFLIGHT_MISSIONS[selectedMissionIndex];

  // If in "all" mode, activeTab controls which sub-step is visible
  const [activeTab, setActiveTab] = useState<"takeoff" | "landing">(
    mode === "landing" ? "landing" : "takeoff"
  );
  const currentStep = mode === "all" ? activeTab : mode;

  // User input states
  const [pilotsMoment, setPilotsMoment] = useState("");
  const [paxMoment, setPaxMoment] = useState("");
  const [baggageMoment, setBaggageMoment] = useState("");

  const [zfmMass, setZfmMass] = useState("");
  const [zfmMoment, setZfmMoment] = useState("");

  const [fuelMass, setFuelMass] = useState("");
  const [fuelMoment, setFuelMoment] = useState("");

  const [tomMass, setTomMass] = useState("");
  const [tomMoment, setTomMoment] = useState("");
  const [tomCg, setTomCg] = useState("");

  const [tripFuelMoment, setTripFuelMoment] = useState("");

  const [lmMass, setLmMass] = useState("");
  const [lmMoment, setLmMoment] = useState("");
  const [lmCg, setLmCg] = useState("");

  // Validation feedback state
  const [attempts, setAttempts] = useState(0);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [warnings, setWarnings] = useState<string[]>([]);
  const [isPassed, setIsPassed] = useState(isAlreadyCompleted);
  const [interactiveClickPoint, setInteractiveClickPoint] = useState<{ x: number; y: number } | null>(null);

  // Load mission initial scenario values
  const loadMissionScenario = (m: PreflightMission, idx: number) => {
    setSelectedMissionIndex(idx);
    setPilotsMoment("");
    setPaxMoment("");
    setBaggageMoment("");
    setZfmMass("");
    setZfmMoment("");
    setFuelMass("");
    setFuelMoment("");
    setTomMass("");
    setTomMoment("");
    setTomCg("");
    setTripFuelMoment("");
    setLmMass("");
    setLmMoment("");
    setLmCg("");

    setErrors({});
    setWarnings([]);
    setAttempts(0);
    setIsPassed(false);
    setInteractiveClickPoint(null);
  };

  // Expected values calculation based on mission at 50% standard flight school cruise power
  const expected = useMemo(() => {
    const sc = mission.scenario;
    const pMass = sc.pilotsFrontKg;
    const pMom = Math.round(pMass * EC_NNA_DATA.arms.pilotsFront * 100) / 100;

    const paxM = sc.passengersRearKg;
    const paxMom = Math.round(paxM * EC_NNA_DATA.arms.passengersRear * 100) / 100;

    const bagM = sc.baggageKg;
    const bagMom = Math.round(bagM * EC_NNA_DATA.arms.baggageArea1 * 100) / 100;

    const zMass = Math.round((EC_NNA_DATA.emptyWeightKg + pMass + paxM + bagM) * 100) / 100;
    const zMom = Math.round((EC_NNA_DATA.emptyWeightMoment + pMom + paxMom + bagMom) * 100) / 100;

    const fLiters = sc.takeoffFuelLiters;
    const fMass = Math.round(fLiters * EC_NNA_DATA.fuelDensityKgL * 100) / 100;
    const fMom = Math.round(fMass * EC_NNA_DATA.arms.fuel * 100) / 100;

    const tMass = Math.round((zMass + fMass) * 100) / 100;
    const tMom = Math.round((zMom + fMom) * 100) / 100;
    const tCg = Math.round((tMom / tMass) * 1000) / 1000;

    // Flight school cruise power: 50% Load = 15.3 L/h
    const hourlyFuelL = 15.3;
    const estTripL = Math.round(sc.flightTimeHrs * hourlyFuelL * 10) / 10;
    const trMass = Math.round(estTripL * EC_NNA_DATA.fuelDensityKgL * 100) / 100;
    const trMom = Math.round(trMass * EC_NNA_DATA.arms.fuel * 100) / 100;

    const lMass = Math.round((tMass - trMass) * 100) / 100;
    const lMom = Math.round((tMom - trMom) * 100) / 100;
    const lCg = Math.round((lMom / lMass) * 1000) / 1000;

    return {
      pilotsMass: pMass,
      pilotsMoment: pMom,
      paxMass: paxM,
      paxMoment: paxMom,
      baggageMass: bagM,
      baggageMoment: bagMom,
      zfmMass: zMass,
      zfmMoment: zMom,
      fuelLiters: fLiters,
      fuelMass: fMass,
      fuelMoment: fMom,
      tomMass: tMass,
      tomMoment: tMom,
      tomCg: tCg,
      tripFuelLiters: estTripL,
      tripFuelMass: trMass,
      tripFuelMoment: trMom,
      lmMass: lMass,
      lmMoment: lMom,
      lmCg: lCg,
    };
  }, [mission]);

  // Validation handler
  const handleValidate = () => {
    const newErrors: Record<string, string> = {};
    const newWarnings: string[] = [];
    const num = (val: string) => parseFloat(val.replace(",", "."));

    if (currentStep === "takeoff") {
      // 1. Pilots Moment
      const userPilotsMom = num(pilotsMoment);
      if (isNaN(userPilotsMom)) {
        newErrors.pilotsMoment = "Campo obligatorio";
      } else {
        const chk = checkValueTolerance(userPilotsMom, expected.pilotsMoment, 0.02, 0.5);
        if (!chk.isOk) {
          newErrors.pilotsMoment =
            attempts >= 2
              ? `Solución: ${expected.pilotsMass} kg × 0.940 m = ${expected.pilotsMoment} kg·m`
              : "Multiplica la masa por el brazo de pilotos (0.940 m)";
        }
      }

      // 2. Pax Moment
      if (expected.paxMass > 0) {
        const userPaxMom = num(paxMoment);
        if (isNaN(userPaxMom)) {
          newErrors.paxMoment = "Campo obligatorio";
        } else {
          const chk = checkValueTolerance(userPaxMom, expected.paxMoment, 0.02, 0.5);
          if (!chk.isOk) {
            newErrors.paxMoment =
              attempts >= 2
                ? `Solución: ${expected.paxMass} kg × 1.854 m = ${expected.paxMoment} kg·m`
                : "Multiplica la masa por el brazo de pasajeros (1.854 m)";
          }
        }
      }

      // 3. Baggage Moment
      if (expected.baggageMass > 0) {
        const userBagMom = num(baggageMoment);
        if (isNaN(userBagMom)) {
          newErrors.baggageMoment = "Campo obligatorio";
        } else {
          const chk = checkValueTolerance(userBagMom, expected.baggageMoment, 0.02, 0.5);
          if (!chk.isOk) {
            newErrors.baggageMoment =
              attempts >= 2
                ? `Solución: ${expected.baggageMass} kg × 2.413 m = ${expected.baggageMoment} kg·m`
                : "Multiplica el equipaje por el brazo del Área 1 (2.413 m)";
          }
        }
      }

      // 4. ZFM Mass & Moment
      const userZfmMass = num(zfmMass);
      const userZfmMom = num(zfmMoment);
      if (isNaN(userZfmMass) || !checkValueTolerance(userZfmMass, expected.zfmMass, 0.01, 1).isOk) {
        newErrors.zfmMass =
          attempts >= 2
            ? `Solución: 755.44 + ${expected.pilotsMass} + ${expected.paxMass} + ${expected.baggageMass} = ${expected.zfmMass} kg`
            : "Suma Empty Weight (755.44 kg) + pilotos + pax + equipaje";
      }
      if (isNaN(userZfmMom) || !checkValueTolerance(userZfmMom, expected.zfmMoment, 0.01, 1.5).isOk) {
        newErrors.zfmMoment =
          attempts >= 2
            ? `Solución: Suma momentos = ${expected.zfmMoment} kg·m`
            : "Suma los momentos de Empty Weight y todos los ocupantes";
      }

      // 5. Fuel Mass & Moment
      const userFuelMass = num(fuelMass);
      const userFuelMom = num(fuelMoment);
      if (isNaN(userFuelMass) || !checkValueTolerance(userFuelMass, expected.fuelMass, 0.02, 0.5).isOk) {
        newErrors.fuelMass =
          attempts >= 2
            ? `Solución: ${expected.fuelLiters} L × 0.84 = ${expected.fuelMass} kg`
            : "Usa la densidad Jet-A1 (0.84 kg/L)";
      }
      if (isNaN(userFuelMom) || !checkValueTolerance(userFuelMom, expected.fuelMoment, 0.02, 1).isOk) {
        newErrors.fuelMoment =
          attempts >= 2
            ? `Solución: ${expected.fuelMass} kg × 1.168 m = ${expected.fuelMoment} kg·m`
            : "Masa de combustible × brazo (1.168 m)";
      }

      // 6. TOM Mass & CG
      const userTomMass = num(tomMass);
      const userTomMom = num(tomMoment);
      const userTomCg = num(tomCg);
      if (isNaN(userTomMass) || !checkValueTolerance(userTomMass, expected.tomMass, 0.01, 1).isOk) {
        newErrors.tomMass =
          attempts >= 2
            ? `Solución: ZFM (${expected.zfmMass}) + Fuel (${expected.fuelMass}) = ${expected.tomMass} kg`
            : "TOM = ZFM + Combustible";
      }
      if (isNaN(userTomMom) || !checkValueTolerance(userTomMom, expected.tomMoment, 0.01, 1.5).isOk) {
        newErrors.tomMoment =
          attempts >= 2
            ? `Solución: Momento TOM = ${expected.tomMoment} kg·m`
            : "Momento ZFM + Momento Combustible";
      }
      if (isNaN(userTomCg) || !checkValueTolerance(userTomCg, expected.tomCg, 0.008, 0.005).isOk) {
        newErrors.tomCg =
          attempts >= 2
            ? `Solución: CG = ${expected.tomMoment} / ${expected.tomMass} = ${expected.tomCg} m`
            : "CG = Momento Total / Masa Total";
      }
    } else {
      // LANDING STEP
      const userTripMom = num(tripFuelMoment);
      if (isNaN(userTripMom) || !checkValueTolerance(userTripMom, expected.tripFuelMoment, 0.02, 1).isOk) {
        newErrors.tripFuelMoment =
          attempts >= 2
            ? `Solución: ${expected.tripFuelMass} kg × 1.168 m = ${expected.tripFuelMoment} kg·m`
            : "Trip fuel consumido × brazo (1.168 m)";
      }

      const userLmMass = num(lmMass);
      const userLmMom = num(lmMoment);
      const userLmCg = num(lmCg);
      if (isNaN(userLmMass) || !checkValueTolerance(userLmMass, expected.lmMass, 0.01, 1).isOk) {
        newErrors.lmMass =
          attempts >= 2
            ? `Solución: TOM (${expected.tomMass}) - Trip Fuel (${expected.tripFuelMass}) = ${expected.lmMass} kg`
            : "Landing Mass = TOM menos Trip Fuel";
      }
      if (isNaN(userLmMom) || !checkValueTolerance(userLmMom, expected.lmMoment, 0.01, 1.5).isOk) {
        newErrors.lmMoment =
          attempts >= 2
            ? `Solución: Momento LM = ${expected.lmMoment} kg·m`
            : "Resta momento de Trip Fuel al momento de TOM";
      }
      if (isNaN(userLmCg) || !checkValueTolerance(userLmCg, expected.lmCg, 0.008, 0.005).isOk) {
        newErrors.lmCg =
          attempts >= 2
            ? `Solución: CG = ${expected.lmMoment} / ${expected.lmMass} = ${expected.lmCg} m`
            : "CG Aterrizaje = Momento LM / Masa LM";
      }
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

  // SVG coordinates for TOW and LW
  const tomCoords = useMemo(() => {
    return mapCgToSvgCoords(expected.tomMass, expected.tomCg);
  }, [expected]);

  const lmCoords = useMemo(() => {
    return mapCgToSvgCoords(expected.lmMass, expected.lmCg);
  }, [expected]);

  const isTomNormal = isCgInsideNormal(expected.tomMass, expected.tomCg);
  const isTomUtility = isCgInsideUtility(expected.tomMass, expected.tomCg);
  const isLmNormal = isCgInsideNormal(expected.lmMass, expected.lmCg);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
      {/* Columna Izquierda (lg:col-span-7): Altura Estricta 590px */}
      <div className="lg:col-span-7 flex flex-col">
        <div
          className="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs"
          style={{ height: "590px" }}
        >
          {/* Header & Sub-step Selector */}
          <div className="flex items-center justify-between pb-1.5 border-b border-slate-200 dark:border-slate-800 shrink-0">
            <div>
              <span className="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-[14px]">
                {currentStep === "takeoff"
                  ? "📋 F.OPS.04.NNA · PARTE 1: DESPEGUE (TOM & CG)"
                  : "🛬 F.OPS.04.NNA · PARTE 2: ATERRIZAJE (LM & CG)"}
              </span>
              <div className="text-xs sm:text-[13px] text-slate-500 font-medium">
                {mission.name} · Crucero al 50% Potencia ({mission.scenario.flightTimeHrs} h)
              </div>
            </div>

            <div className="flex items-center gap-1 shrink-0">
              {mode === "all" && (
                <div className="flex items-center bg-slate-200/80 dark:bg-slate-800 rounded-lg p-0.5 mr-1.5">
                  <button
                    type="button"
                    onClick={() => {
                      setActiveTab("takeoff");
                      setErrors({});
                    }}
                    className={`px-2.5 py-1 rounded-md text-xs sm:text-[13px] font-bold transition-all cursor-pointer ${
                      activeTab === "takeoff"
                        ? "bg-white dark:bg-slate-700 text-[#0B2E59] dark:text-sky-300 shadow-2xs"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
                    }`}
                  >
                    1. Despegue
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveTab("landing");
                      setErrors({});
                    }}
                    className={`px-2.5 py-1 rounded-md text-xs sm:text-[13px] font-bold transition-all cursor-pointer ${
                      activeTab === "landing"
                        ? "bg-white dark:bg-slate-700 text-[#0B2E59] dark:text-sky-300 shadow-2xs"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
                    }`}
                  >
                    2. Aterrizaje
                  </button>
                </div>
              )}

              {PREFLIGHT_MISSIONS.map((m, idx) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => loadMissionScenario(m, idx)}
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

          {/* Table Container - Standard typography (text-xs sm:text-[13px]), zero outer scroll */}
          <div className="flex-1 min-h-0 my-1 overflow-hidden flex flex-col justify-center">
            {currentStep === "takeoff" ? (
              /* PARTE 1: TABLA DE DESPEGUE (7 FILAS) */
              <table className="w-full text-left text-xs sm:text-[13px] border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-700 font-extrabold uppercase text-[#0B2E59] dark:text-sky-300 bg-slate-100/70 dark:bg-slate-800/60">
                    <th className="py-1.5 px-2">ITEM</th>
                    <th className="py-1.5 px-2 text-right">MASA (KG)</th>
                    <th className="py-1.5 px-2 text-right">BRAZO (M)</th>
                    <th className="py-1.5 px-2 text-right">MOMENTO (KGM)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {/* EMPTY WEIGHT */}
                  <tr className="bg-slate-50/50 dark:bg-slate-800/30 font-semibold">
                    <td className="py-1.5 px-2">EMPTY WEIGHT (EC-NNA)</td>
                    <td className="py-1.5 px-2 text-right font-mono text-slate-600 dark:text-slate-300">755,44</td>
                    <td className="py-1.5 px-2 text-right font-mono text-slate-600 dark:text-slate-300">1,042</td>
                    <td className="py-1.5 px-2 text-right font-mono text-slate-600 dark:text-slate-300">787,23</td>
                  </tr>

                  {/* PILOTS */}
                  <tr>
                    <td className="py-1.5 px-2 font-medium">PILOTS (FRONT)</td>
                    <td className="py-1.5 px-2 text-right font-mono font-bold text-slate-700 dark:text-slate-200">
                      {expected.pilotsMass} kg
                    </td>
                    <td className="py-1.5 px-2 text-right font-mono text-slate-500">0,940</td>
                    <td className="py-1.5 px-2 text-right">
                      <input
                        type="text"
                        placeholder="Momento"
                        value={pilotsMoment}
                        onChange={(e) => setPilotsMoment(e.target.value)}
                        className={`w-28 text-right px-2 py-0.5 rounded border font-mono text-xs sm:text-[13px] ${
                          errors.pilotsMoment
                            ? "border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-700"
                            : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                        }`}
                      />
                    </td>
                  </tr>

                  {/* PASSENGERS */}
                  <tr>
                    <td className="py-1.5 px-2 font-medium">PASSENGERS (REAR)</td>
                    <td className="py-1.5 px-2 text-right font-mono text-slate-700 dark:text-slate-200">
                      {expected.paxMass > 0 ? `${expected.paxMass} kg` : "0 kg"}
                    </td>
                    <td className="py-1.5 px-2 text-right font-mono text-slate-500">1,854</td>
                    <td className="py-1.5 px-2 text-right">
                      <input
                        type="text"
                        disabled={expected.paxMass === 0}
                        placeholder={expected.paxMass === 0 ? "0" : "Momento"}
                        value={expected.paxMass === 0 ? "0" : paxMoment}
                        onChange={(e) => setPaxMoment(e.target.value)}
                        className={`w-28 text-right px-2 py-0.5 rounded border font-mono text-xs sm:text-[13px] ${
                          errors.paxMoment
                            ? "border-rose-500 bg-rose-50 text-rose-700"
                            : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                        }`}
                      />
                    </td>
                  </tr>

                  {/* BAGGAGE */}
                  <tr>
                    <td className="py-1.5 px-2 font-medium">BAGGAGE AREA 1</td>
                    <td className="py-1.5 px-2 text-right font-mono text-slate-700 dark:text-slate-200">
                      {expected.baggageMass} kg
                    </td>
                    <td className="py-1.5 px-2 text-right font-mono text-slate-500">2,413</td>
                    <td className="py-1.5 px-2 text-right">
                      <input
                        type="text"
                        placeholder="Momento"
                        value={baggageMoment}
                        onChange={(e) => setBaggageMoment(e.target.value)}
                        className={`w-28 text-right px-2 py-0.5 rounded border font-mono text-xs sm:text-[13px] ${
                          errors.baggageMoment
                            ? "border-rose-500 bg-rose-50 text-rose-700"
                            : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                        }`}
                      />
                    </td>
                  </tr>

                  {/* ZERO FUEL MASS */}
                  <tr className="bg-sky-50/60 dark:bg-sky-950/30 font-bold text-[#0B2E59] dark:text-sky-300">
                    <td className="py-1.5 px-2 uppercase text-xs sm:text-[13px]">ZERO FUEL MASS (ZFM)</td>
                    <td className="py-1.5 px-2 text-right">
                      <input
                        type="text"
                        placeholder="Suma Masa"
                        value={zfmMass}
                        onChange={(e) => setZfmMass(e.target.value)}
                        className={`w-28 text-right px-2 py-0.5 rounded border font-mono text-xs sm:text-[13px] ${
                          errors.zfmMass
                            ? "border-rose-500 bg-rose-50 text-rose-700"
                            : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                        }`}
                      />
                    </td>
                    <td className="py-1.5 px-2 text-right font-mono text-slate-400">—</td>
                    <td className="py-1.5 px-2 text-right">
                      <input
                        type="text"
                        placeholder="Suma Momento"
                        value={zfmMoment}
                        onChange={(e) => setZfmMoment(e.target.value)}
                        className={`w-28 text-right px-2 py-0.5 rounded border font-mono text-xs sm:text-[13px] ${
                          errors.zfmMoment
                            ? "border-rose-500 bg-rose-50 text-rose-700"
                            : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                        }`}
                      />
                    </td>
                  </tr>

                  {/* TAKEOFF FUEL */}
                  <tr>
                    <td className="py-1.5 px-2 font-medium">
                      TAKEOFF FUEL ({expected.fuelLiters} L / {(expected.fuelLiters / 3.78541).toFixed(1)} US Gal Jet-A1)
                    </td>
                    <td className="py-1.5 px-2 text-right">
                      <input
                        type="text"
                        placeholder="Kg (L × 0.84)"
                        value={fuelMass}
                        onChange={(e) => setFuelMass(e.target.value)}
                        className={`w-28 text-right px-2 py-0.5 rounded border font-mono text-xs sm:text-[13px] ${
                          errors.fuelMass
                            ? "border-rose-500 bg-rose-50 text-rose-700"
                            : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                        }`}
                      />
                    </td>
                    <td className="py-1.5 px-2 text-right font-mono text-slate-500">1,168</td>
                    <td className="py-1.5 px-2 text-right">
                      <input
                        type="text"
                        placeholder="Momento"
                        value={fuelMoment}
                        onChange={(e) => setFuelMoment(e.target.value)}
                        className={`w-28 text-right px-2 py-0.5 rounded border font-mono text-xs sm:text-[13px] ${
                          errors.fuelMoment
                            ? "border-rose-500 bg-rose-50 text-rose-700"
                            : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                        }`}
                      />
                    </td>
                  </tr>

                  {/* TAKEOFF MASS (TOM) */}
                  <tr className="bg-emerald-50/70 dark:bg-emerald-950/30 font-bold text-emerald-900 dark:text-emerald-300">
                    <td className="py-1.5 px-2 uppercase text-xs sm:text-[13px]">
                      TAKEOFF MASS (TOM & CG)
                    </td>
                    <td className="py-1.5 px-2 text-right">
                      <input
                        type="text"
                        placeholder="TOM (kg)"
                        value={tomMass}
                        onChange={(e) => setTomMass(e.target.value)}
                        className={`w-28 text-right px-2 py-0.5 rounded border font-mono text-xs sm:text-[13px] font-bold ${
                          errors.tomMass
                            ? "border-rose-500 bg-rose-50 text-rose-700"
                            : "border-emerald-400 bg-white dark:bg-slate-800 text-emerald-800 dark:text-emerald-300"
                        }`}
                      />
                    </td>
                    <td className="py-1.5 px-2 text-right">
                      <input
                        type="text"
                        placeholder="CG (m)"
                        value={tomCg}
                        onChange={(e) => setTomCg(e.target.value)}
                        className={`w-20 text-right px-1.5 py-0.5 rounded border font-mono text-xs sm:text-[13px] font-bold ${
                          errors.tomCg
                            ? "border-rose-500 bg-rose-50 text-rose-700"
                            : "border-emerald-400 bg-white dark:bg-slate-800 text-emerald-800 dark:text-emerald-300"
                        }`}
                      />
                    </td>
                    <td className="py-1.5 px-2 text-right">
                      <input
                        type="text"
                        placeholder="Momento TOM"
                        value={tomMoment}
                        onChange={(e) => setTomMoment(e.target.value)}
                        className={`w-28 text-right px-2 py-0.5 rounded border font-mono text-xs sm:text-[13px] font-bold ${
                          errors.tomMoment
                            ? "border-rose-500 bg-rose-50 text-rose-700"
                            : "border-emerald-400 bg-white dark:bg-slate-800 text-emerald-800 dark:text-emerald-300"
                        }`}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            ) : (
              /* PARTE 2: TABLA DE ATERRIZAJE (5 FILAS) */
              <div className="space-y-2">
                <div className="p-2.5 rounded-xl bg-sky-50/70 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800 text-xs sm:text-[13px] flex items-center justify-between">
                  <span className="font-semibold text-sky-900 dark:text-sky-200">
                    Condición de Despegue (TOM): <strong>{expected.tomMass} kg</strong> · CG: <strong>{expected.tomCg} m</strong>
                  </span>
                  <span className="text-xs sm:text-[13px] text-sky-700 dark:text-sky-300 font-mono">
                    Momento: {expected.tomMoment} kg·m
                  </span>
                </div>

                <table className="w-full text-left text-xs sm:text-[13px] border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-slate-700 font-extrabold uppercase text-[#0B2E59] dark:text-sky-300 bg-slate-100/70 dark:bg-slate-800/60">
                      <th className="py-1.5 px-2">ITEM</th>
                      <th className="py-1.5 px-2 text-right">MASA (KG)</th>
                      <th className="py-1.5 px-2 text-right">BRAZO (M)</th>
                      <th className="py-1.5 px-2 text-right">MOMENTO (KGM)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {/* TAKEOFF MASS */}
                    <tr className="bg-slate-50/50 dark:bg-slate-800/30 font-semibold">
                      <td className="py-2 px-2">TAKEOFF MASS (TOM)</td>
                      <td className="py-2 px-2 text-right font-mono text-slate-700 dark:text-slate-300">
                        {expected.tomMass}
                      </td>
                      <td className="py-2 px-2 text-right font-mono text-slate-700 dark:text-slate-300">
                        {expected.tomCg}
                      </td>
                      <td className="py-2 px-2 text-right font-mono text-slate-700 dark:text-slate-300">
                        {expected.tomMoment}
                      </td>
                    </tr>

                    {/* TRIP FUEL */}
                    <tr className="text-amber-900 dark:text-amber-300 font-medium">
                      <td className="py-2 px-2">
                        (-) TRIP FUEL ({expected.tripFuelLiters} L / {(expected.tripFuelLiters / 3.78541).toFixed(1)} US Gal a 50% Potencia)
                      </td>
                      <td className="py-2 px-2 text-right font-mono font-bold text-amber-700 dark:text-amber-400">
                        -{expected.tripFuelMass} kg
                      </td>
                      <td className="py-2 px-2 text-right font-mono text-slate-500">1,168</td>
                      <td className="py-2 px-2 text-right">
                        <input
                          type="text"
                          placeholder="Ej: 15.01"
                          value={tripFuelMoment}
                          onChange={(e) => setTripFuelMoment(e.target.value)}
                          className={`w-28 text-right px-2 py-0.5 rounded border font-mono text-xs sm:text-[13px] ${
                            errors.tripFuelMoment
                              ? "border-rose-500 bg-rose-50 text-rose-700"
                              : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                          }`}
                        />
                      </td>
                    </tr>

                    {/* LANDING MASS (LM) */}
                    <tr className="bg-emerald-50/70 dark:bg-emerald-950/30 font-bold text-emerald-900 dark:text-emerald-300">
                      <td className="py-2 px-2 uppercase text-xs sm:text-[13px]">
                        LANDING MASS (LM & CG)
                      </td>
                      <td className="py-2 px-2 text-right">
                        <input
                          type="text"
                          placeholder="LM (kg)"
                          value={lmMass}
                          onChange={(e) => setLmMass(e.target.value)}
                          className={`w-28 text-right px-2 py-0.5 rounded border font-mono text-xs sm:text-[13px] font-bold ${
                            errors.lmMass
                              ? "border-rose-500 bg-rose-50 text-rose-700"
                              : "border-emerald-400 bg-white dark:bg-slate-800 text-emerald-800 dark:text-emerald-300"
                          }`}
                        />
                      </td>
                      <td className="py-2 px-2 text-right">
                        <input
                          type="text"
                          placeholder="CG (m)"
                          value={lmCg}
                          onChange={(e) => setLmCg(e.target.value)}
                          className={`w-20 text-right px-1.5 py-0.5 rounded border font-mono text-xs sm:text-[13px] font-bold ${
                            errors.lmCg
                              ? "border-rose-500 bg-rose-50 text-rose-700"
                              : "border-emerald-400 bg-white dark:bg-slate-800 text-emerald-800 dark:text-emerald-300"
                          }`}
                        />
                      </td>
                      <td className="py-2 px-2 text-right">
                        <input
                          type="text"
                          placeholder="Momento LM"
                          value={lmMoment}
                          onChange={(e) => setLmMoment(e.target.value)}
                          className={`w-28 text-right px-2 py-0.5 rounded border font-mono text-xs sm:text-[13px] font-bold ${
                            errors.lmMoment
                              ? "border-rose-500 bg-rose-50 text-rose-700"
                              : "border-emerald-400 bg-white dark:bg-slate-800 text-emerald-800 dark:text-emerald-300"
                          }`}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Action Button & Messages */}
          <div className="pt-1.5 border-t border-slate-200 dark:border-slate-800 shrink-0 space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-xs sm:text-[13px] text-slate-500 italic">
                * Densidad Jet A-1 = 0,84 kg/L · Brazo Fuel = 1,168 m · MTOM = 1.043 kg
              </span>

              <button
                type="button"
                onClick={handleValidate}
                className="px-4 py-2 rounded-xl bg-[#1a80ff] hover:bg-[#0066e6] text-white font-extrabold text-xs sm:text-[13px] shadow-xs transition-all cursor-pointer hover:scale-105 active:scale-95"
              >
                {currentStep === "takeoff"
                  ? "Comprobar Despegue y Graficar TOW ➔"
                  : "Comprobar Aterrizaje y Graficar Trayectoria ➔"}
              </button>
            </div>

            {/* Error alerts */}
            {Object.keys(errors).length > 0 && (
              <div className="p-2 rounded-lg border border-rose-200 dark:border-rose-800 bg-rose-50/90 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200 text-xs sm:text-[13px] flex items-center justify-between">
                <span>⚠️ {Object.values(errors)[0]}</span>
                <span className="font-bold text-xs text-rose-600">Intento {attempts}</span>
              </div>
            )}

            {isPassed && (
              <div className="p-2 rounded-lg border border-emerald-300 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 text-xs sm:text-[13px] flex items-center justify-between">
                <span>
                  ✓ {currentStep === "takeoff"
                    ? `¡Despegue válido! TOW: ${expected.tomMass} kg, CG: ${expected.tomCg} m (${isTomNormal ? "Categoría Normal" : "Fuera de límites"}).`
                    : `¡Aterrizaje válido! LM: ${expected.lmMass} kg, CG: ${expected.lmCg} m (${isLmNormal ? "Categoría Normal" : "Fuera de límites"}).`}
                </span>
                <span className="font-bold text-xs text-emerald-600">COMPLETADO</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Columna Derecha (lg:col-span-5): Live SVG Envelope (Altura Estricta 590px) */}
      <div className="lg:col-span-5 flex flex-col">
        <div
          className="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs"
          style={{ height: "590px" }}
        >
          <div className="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
            <span className="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">
              📈 ENVOLVENTE EN VIVO (FIG. 6-8)
            </span>
            <span className="text-xs sm:text-[13px] font-semibold text-slate-500">
              {currentStep === "takeoff" ? "Punto de Despegue (TOW)" : "Trayectoria TOW → LW"}
            </span>
          </div>

          {/* SVG Envelope Display */}
          <div className="relative w-full aspect-[1140/880] rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 my-auto">
            <img
              src="/images/c172/figure_6_8_center_of_gravity_limits_modificado.svg"
              alt="Center of Gravity Limits SVG"
              className="w-full h-full object-contain pointer-events-none"
            />

            <svg
              viewBox="0 0 1140 880"
              className="absolute inset-0 w-full h-full cursor-crosshair"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const clickX = ((e.clientX - rect.left) / rect.width) * 1140;
                const clickY = ((e.clientY - rect.top) / rect.height) * 880;
                setInteractiveClickPoint({ x: clickX, y: clickY });
              }}
            >
              {/* Show consumption line if in landing mode or all */}
              {(currentStep === "landing" || isPassed) && (
                <line
                  x1={tomCoords.x}
                  y1={tomCoords.y}
                  x2={lmCoords.x}
                  y2={lmCoords.y}
                  stroke="#1a80ff"
                  strokeWidth="3.5"
                  strokeDasharray="6 4"
                />
              )}

              {/* Takeoff Point (TOW) */}
              <g transform={`translate(${tomCoords.x}, ${tomCoords.y})`}>
                <circle r="8" fill="#2563eb" stroke="#ffffff" strokeWidth="2.5" />
                <circle r="14" fill="none" stroke="#2563eb" strokeWidth="1.5" opacity="0.6" className="animate-ping" />
                <rect x="12" y="-12" width="60" height="20" rx="6" fill="#1e40af" opacity="0.9" />
                <text x="42" y="2" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">
                  TOW
                </text>
              </g>

              {/* Landing Point (LW) */}
              {(currentStep === "landing" || isPassed) && (
                <g transform={`translate(${lmCoords.x}, ${lmCoords.y})`}>
                  <circle r="7" fill="#059669" stroke="#ffffff" strokeWidth="2.5" />
                  <rect x="12" y="-10" width="50" height="18" rx="6" fill="#065f46" opacity="0.9" />
                  <text x="37" y="3" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">
                    LW
                  </text>
                </g>
              )}

              {/* Manual click probe */}
              {interactiveClickPoint && (
                <g transform={`translate(${interactiveClickPoint.x}, ${interactiveClickPoint.y})`}>
                  <circle r="5" fill="#f59e0b" stroke="#ffffff" strokeWidth="2" />
                  <text x="8" y="4" fill="#d97706" fontSize="10" fontWeight="bold">
                    Sonda
                  </text>
                </g>
              )}
            </svg>
          </div>

          {/* Envelope Status Footer - Each state in a single clean line with general font size */}
          <div className="space-y-1.5 pt-1.5 border-t border-slate-200 dark:border-slate-800 shrink-0 text-xs sm:text-[13px]">
            <div className="flex items-center justify-between px-3 py-1.5 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-2">
                <strong className="text-blue-900 dark:text-sky-300">DESPEGUE (TOW):</strong>
                <span className="font-mono font-semibold text-slate-800 dark:text-slate-100">{expected.tomMass} kg · CG {expected.tomCg} m</span>
              </div>
              <span className={`font-bold ${isTomNormal ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"}`}>
                {isTomNormal ? "✓ Categoría Normal" : "⚠️ Fuera de Límites"}
              </span>
            </div>

            <div className="flex items-center justify-between px-3 py-1.5 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800">
              <div className="flex items-center gap-2">
                <strong className="text-emerald-900 dark:text-emerald-300">ATERRIZAJE (LW):</strong>
                <span className="font-mono font-semibold text-slate-800 dark:text-slate-100">{expected.lmMass} kg · CG {expected.lmCg} m</span>
              </div>
              <span className={`font-bold ${isLmNormal ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"}`}>
                {isLmNormal ? (isTomUtility ? "✓ Categoría Utilidad" : "✓ Categoría Normal") : "⚠️ Fuera de Límites"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
