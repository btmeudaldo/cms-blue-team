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
  onExerciseCompleted?: () => void;
  isAlreadyCompleted?: boolean;
};

export function PreflightLoadsheetWidget({
  onExerciseCompleted,
  isAlreadyCompleted = false,
}: Props) {
  const [selectedMissionIndex, setSelectedMissionIndex] = useState(0);
  const mission = PREFLIGHT_MISSIONS[selectedMissionIndex];

  // User input states (strings for natural typing)
  const [pilotsMass, setPilotsMass] = useState("");
  const [pilotsMoment, setPilotsMoment] = useState("");
  const [paxMass, setPaxMass] = useState("");
  const [paxMoment, setPaxMoment] = useState("");
  const [baggageMass, setBaggageMass] = useState("");
  const [baggageMoment, setBaggageMoment] = useState("");

  const [zfmMass, setZfmMass] = useState("");
  const [zfmMoment, setZfmMoment] = useState("");

  const [fuelLiters, setFuelLiters] = useState("");
  const [fuelMass, setFuelMass] = useState("");
  const [fuelMoment, setFuelMoment] = useState("");

  const [tomMass, setTomMass] = useState("");
  const [tomMoment, setTomMoment] = useState("");
  const [tomCg, setTomCg] = useState("");

  const [tripFuelMass, setTripFuelMass] = useState("");
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
    setPilotsMass(String(m.scenario.pilotsFrontKg));
    setPilotsMoment("");
    setPaxMass(String(m.scenario.passengersRearKg));
    setPaxMoment("");
    setBaggageMass(String(m.scenario.baggageKg));
    setBaggageMoment("");
    setZfmMass("");
    setZfmMoment("");
    setFuelLiters(String(m.scenario.takeoffFuelLiters));
    setFuelMass("");
    setFuelMoment("");
    setTomMass("");
    setTomMoment("");
    setTomCg("");
    // Estimated trip fuel for the mission
    const estimatedTripL = Math.round(m.scenario.flightTimeHrs * 22.1);
    const estTripKg = Math.round(estimatedTripL * 0.84 * 10) / 10;
    setTripFuelMass(String(estTripKg));
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

  // Expected values calculation based on mission
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

    const estTripL = Math.round(sc.flightTimeHrs * 22.1);
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

    // Check pilots moment
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
      } else if (!chk.isExact) {
        newWarnings.push("Momento de pilotos: Leve desvío por redondeo, pero aceptado.");
      }
    }

    // Check pax moment
    const userPaxMom = num(paxMoment);
    if (expected.paxMass > 0) {
      if (isNaN(userPaxMom)) {
        newErrors.paxMoment = "Campo obligatorio";
      } else {
        const chk = checkValueTolerance(userPaxMom, expected.paxMoment, 0.02, 0.5);
        if (!chk.isOk) {
          newErrors.paxMoment =
            attempts >= 2
              ? `Solución: ${expected.paxMass} kg × 1.854 m = ${expected.paxMoment} kg·m`
              : "Multiplica la masa por el brazo de pasajeros traseros (1.854 m)";
        }
      }
    }

    // Check baggage moment
    const userBagMom = num(baggageMoment);
    if (expected.baggageMass > 0) {
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

    // Check ZFM Mass & Moment
    const userZfmMass = num(zfmMass);
    const userZfmMom = num(zfmMoment);
    if (isNaN(userZfmMass) || !checkValueTolerance(userZfmMass, expected.zfmMass, 0.01, 1).isOk) {
      newErrors.zfmMass =
        attempts >= 2
          ? `Solución: 755.44 + ${expected.pilotsMass} + ${expected.paxMass} + ${expected.baggageMass} = ${expected.zfmMass} kg`
          : "Suma el Empty Weight (755.44 kg) más pilotos, pax y equipaje";
    }
    if (isNaN(userZfmMom) || !checkValueTolerance(userZfmMom, expected.zfmMoment, 0.01, 1.5).isOk) {
      newErrors.zfmMoment =
        attempts >= 2
          ? `Solución: Suma de momentos hasta ZFM = ${expected.zfmMoment} kg·m`
          : "Suma los momentos de Empty Weight y todos los ocupantes";
    }

    // Check Fuel Mass & Moment (density 0.84)
    const userFuelMass = num(fuelMass);
    const userFuelMom = num(fuelMoment);
    if (isNaN(userFuelMass) || !checkValueTolerance(userFuelMass, expected.fuelMass, 0.02, 0.5).isOk) {
      newErrors.fuelMass =
        attempts >= 2
          ? `Solución: ${expected.fuelLiters} L × 0.84 kg/L = ${expected.fuelMass} kg`
          : "¿Has usado la densidad correcta del Jet-A1/Diésel (0.84 kg/L)?";
    }
    if (isNaN(userFuelMom) || !checkValueTolerance(userFuelMom, expected.fuelMoment, 0.02, 1).isOk) {
      newErrors.fuelMoment =
        attempts >= 2
          ? `Solución: ${expected.fuelMass} kg × 1.168 m = ${expected.fuelMoment} kg·m`
          : "Multiplica la masa de combustible por su brazo (1.168 m)";
    }

    // Check TOM Mass, Moment & CG
    const userTomMass = num(tomMass);
    const userTomMom = num(tomMoment);
    const userTomCg = num(tomCg);
    if (isNaN(userTomMass) || !checkValueTolerance(userTomMass, expected.tomMass, 0.01, 1).isOk) {
      newErrors.tomMass =
        attempts >= 2
          ? `Solución: ZFM (${expected.zfmMass}) + Combustible (${expected.fuelMass}) = ${expected.tomMass} kg`
          : "Takeoff Mass = ZFM + Combustible de despegue";
    }
    if (isNaN(userTomMom) || !checkValueTolerance(userTomMom, expected.tomMoment, 0.01, 1.5).isOk) {
      newErrors.tomMoment =
        attempts >= 2
          ? `Solución: Momento TOM = ${expected.tomMoment} kg·m`
          : "Suma el momento de ZFM más el momento del combustible";
    }
    if (isNaN(userTomCg) || !checkValueTolerance(userTomCg, expected.tomCg, 0.008, 0.005).isOk) {
      newErrors.tomCg =
        attempts >= 2
          ? `Solución: CG = Momento (${expected.tomMoment}) / Masa (${expected.tomMass}) = ${expected.tomCg} m`
          : "CG = Momento Total / Masa Total (debe dar en metros, ej: 1.04 m)";
    } else if (Math.abs(userTomCg - expected.tomCg) > 0.001) {
      newWarnings.push(`CG de Despegue: Tu valor (${userTomCg} m) tiene leve desvío por redondeo, pero es válido.`);
    }

    // Check Trip Fuel Moment
    const userTripMom = num(tripFuelMoment);
    if (isNaN(userTripMom) || !checkValueTolerance(userTripMom, expected.tripFuelMoment, 0.02, 1).isOk) {
      newErrors.tripFuelMoment =
        attempts >= 2
          ? `Solución: ${expected.tripFuelMass} kg × 1.168 m = ${expected.tripFuelMoment} kg·m`
          : "Multiplica el combustible consumido por el brazo (1.168 m)";
    }

    // Check Landing Mass, Moment & CG
    const userLmMass = num(lmMass);
    const userLmMom = num(lmMoment);
    const userLmCg = num(lmCg);
    if (isNaN(userLmMass) || !checkValueTolerance(userLmMass, expected.lmMass, 0.01, 1).isOk) {
      newErrors.lmMass =
        attempts >= 2
          ? `Solución: TOM (${expected.tomMass}) - Trip Fuel (${expected.tripFuelMass}) = ${expected.lmMass} kg`
          : "Landing Mass = Masa al despegue menos Trip Fuel";
    }
    if (isNaN(userLmMom) || !checkValueTolerance(userLmMom, expected.lmMoment, 0.01, 1.5).isOk) {
      newErrors.lmMoment =
        attempts >= 2
          ? `Solución: Momento LM = ${expected.lmMoment} kg·m`
          : "Resta el momento del Trip Fuel al momento de despegue";
    }
    if (isNaN(userLmCg) || !checkValueTolerance(userLmCg, expected.lmCg, 0.008, 0.005).isOk) {
      newErrors.lmCg =
        attempts >= 2
          ? `Solución: CG = Momento (${expected.lmMoment}) / Masa (${expected.lmMass}) = ${expected.lmCg} m`
          : "CG Aterrizaje = Momento Aterrizaje / Masa Aterrizaje";
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

  // Coordinates for the SVG points
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
    <div className="w-full flex flex-col space-y-4 text-slate-800 dark:text-slate-100">
      {/* Mission selector banner */}
      <div className="p-3 rounded-2xl bg-sky-50/80 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xs">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-sky-700 dark:text-sky-300 uppercase tracking-wider">
              Avión de Referencia: EC-NNA (C172 · CD-155)
            </span>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-sky-200/80 dark:bg-sky-900 text-sky-800 dark:text-sky-200">
              {mission.badge}
            </span>
          </div>
          <h3 className="text-sm font-extrabold text-[#0B2E59] dark:text-sky-200 mt-0.5">
            {mission.name}
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
            {mission.description}
          </p>
        </div>

        {/* Mission selector buttons */}
        <div className="flex items-center gap-1.5 shrink-0">
          {PREFLIGHT_MISSIONS.map((m, idx) => (
            <button
              key={m.id}
              type="button"
              onClick={() => loadMissionScenario(m, idx)}
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

      {/* Main Grid: Left = Official F.OPS.04 Table, Right = SVG Envelope with live plot */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-3 items-start">
        {/* Left Column (xl:col-span-7): Table F.OPS.04 */}
        <div className="xl:col-span-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3.5 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
            <div className="flex items-center gap-2">
              <span className="text-base">📋</span>
              <span className="text-xs font-black uppercase tracking-wider text-[#0B2E59] dark:text-sky-300">
                F.OPS.04.NNA · MASS AND BALANCE LOADSHEET
              </span>
            </div>
            <span className="text-[10px] text-slate-400 font-bold">Rev. 4 · 13/12/23</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-200 dark:border-slate-700 text-[11px] font-extrabold uppercase text-[#0B2E59] dark:text-sky-300 bg-slate-50 dark:bg-slate-800/60">
                  <th className="py-1.5 px-2">ITEM</th>
                  <th className="py-1.5 px-2 text-right">MASS (KG)</th>
                  <th className="py-1.5 px-2 text-right">ARM (M)</th>
                  <th className="py-1.5 px-2 text-right">MOMENT (KGM)</th>
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

                {/* PILOTS (FRONT) */}
                <tr>
                  <td className="py-1.5 px-2 font-medium">PILOTS (FRONT)</td>
                  <td className="py-1.5 px-2 text-right">
                    <span className="font-mono font-bold text-slate-700 dark:text-slate-200">
                      {expected.pilotsMass} kg
                    </span>
                  </td>
                  <td className="py-1.5 px-2 text-right font-mono text-slate-500">0,940</td>
                  <td className="py-1.5 px-2 text-right">
                    <input
                      type="text"
                      placeholder="Ej: 147.58"
                      value={pilotsMoment}
                      onChange={(e) => setPilotsMoment(e.target.value)}
                      className={`w-24 text-right px-2 py-0.5 rounded-lg border font-mono text-xs ${
                        errors.pilotsMoment
                          ? "border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-700"
                          : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                      }`}
                    />
                  </td>
                </tr>

                {/* PASSENGERS (REAR) */}
                <tr>
                  <td className="py-1.5 px-2 font-medium">PASSENGERS (REAR)</td>
                  <td className="py-1.5 px-2 text-right">
                    <span className="font-mono text-slate-700 dark:text-slate-200">
                      {expected.paxMass > 0 ? `${expected.paxMass} kg` : "0"}
                    </span>
                  </td>
                  <td className="py-1.5 px-2 text-right font-mono text-slate-500">1,854</td>
                  <td className="py-1.5 px-2 text-right">
                    <input
                      type="text"
                      disabled={expected.paxMass === 0}
                      placeholder={expected.paxMass === 0 ? "0" : "Ej: 129.78"}
                      value={expected.paxMass === 0 ? "0" : paxMoment}
                      onChange={(e) => setPaxMoment(e.target.value)}
                      className={`w-24 text-right px-2 py-0.5 rounded-lg border font-mono text-xs ${
                        errors.paxMoment
                          ? "border-rose-500 bg-rose-50 text-rose-700"
                          : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                      }`}
                    />
                  </td>
                </tr>

                {/* BAGGAGE AREA 1 */}
                <tr>
                  <td className="py-1.5 px-2 font-medium">BAGGAGE AREA 1</td>
                  <td className="py-1.5 px-2 text-right font-mono text-slate-700 dark:text-slate-200">
                    {expected.baggageMass} kg
                  </td>
                  <td className="py-1.5 px-2 text-right font-mono text-slate-500">2,413</td>
                  <td className="py-1.5 px-2 text-right">
                    <input
                      type="text"
                      placeholder="Ej: 12.07"
                      value={baggageMoment}
                      onChange={(e) => setBaggageMoment(e.target.value)}
                      className={`w-24 text-right px-2 py-0.5 rounded-lg border font-mono text-xs ${
                        errors.baggageMoment
                          ? "border-rose-500 bg-rose-50 text-rose-700"
                          : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                      }`}
                    />
                  </td>
                </tr>

                {/* ZERO FUEL MASS */}
                <tr className="bg-sky-50/60 dark:bg-sky-950/30 font-bold text-[#0B2E59] dark:text-sky-300">
                  <td className="py-1.5 px-2 uppercase text-[11px]">ZERO FUEL MASS</td>
                  <td className="py-1.5 px-2 text-right">
                    <input
                      type="text"
                      placeholder="Suma Masa"
                      value={zfmMass}
                      onChange={(e) => setZfmMass(e.target.value)}
                      className={`w-24 text-right px-2 py-0.5 rounded-lg border font-mono text-xs ${
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
                      className={`w-24 text-right px-2 py-0.5 rounded-lg border font-mono text-xs ${
                        errors.zfmMoment
                          ? "border-rose-500 bg-rose-50 text-rose-700"
                          : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                      }`}
                    />
                  </td>
                </tr>

                {/* TAKE OFF FUEL */}
                <tr>
                  <td className="py-1.5 px-2 font-medium">
                    TAKE OFF FUEL ({expected.fuelLiters} L)
                  </td>
                  <td className="py-1.5 px-2 text-right">
                    <input
                      type="text"
                      placeholder="Kg (L × 0.84)"
                      value={fuelMass}
                      onChange={(e) => setFuelMass(e.target.value)}
                      className={`w-24 text-right px-2 py-0.5 rounded-lg border font-mono text-xs ${
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
                      placeholder="Momento Fuel"
                      value={fuelMoment}
                      onChange={(e) => setFuelMoment(e.target.value)}
                      className={`w-24 text-right px-2 py-0.5 rounded-lg border font-mono text-xs ${
                        errors.fuelMoment
                          ? "border-rose-500 bg-rose-50 text-rose-700"
                          : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                      }`}
                    />
                  </td>
                </tr>

                {/* TAKEOFF MASS */}
                <tr className="bg-emerald-50/70 dark:bg-emerald-950/30 font-bold text-emerald-900 dark:text-emerald-300">
                  <td className="py-1.5 px-2 uppercase text-[11px]">
                    TAKEOFF MASS (TOM)
                    <div className="text-[10px] font-normal text-emerald-700 dark:text-emerald-400">
                      CG Despegue = Momento / Masa
                    </div>
                  </td>
                  <td className="py-1.5 px-2 text-right">
                    <input
                      type="text"
                      placeholder="TOM (kg)"
                      value={tomMass}
                      onChange={(e) => setTomMass(e.target.value)}
                      className={`w-24 text-right px-2 py-0.5 rounded-lg border font-mono text-xs ${
                        errors.tomMass
                          ? "border-rose-500 bg-rose-50 text-rose-700"
                          : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                      }`}
                    />
                  </td>
                  <td className="py-1.5 px-2 text-right">
                    <input
                      type="text"
                      placeholder="CG (m)"
                      value={tomCg}
                      onChange={(e) => setTomCg(e.target.value)}
                      className={`w-20 text-right px-1.5 py-0.5 rounded-lg border font-mono text-xs ${
                        errors.tomCg
                          ? "border-rose-500 bg-rose-50 text-rose-700"
                          : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-emerald-700 font-bold"
                      }`}
                    />
                  </td>
                  <td className="py-1.5 px-2 text-right">
                    <input
                      type="text"
                      placeholder="Momento TOM"
                      value={tomMoment}
                      onChange={(e) => setTomMoment(e.target.value)}
                      className={`w-24 text-right px-2 py-0.5 rounded-lg border font-mono text-xs ${
                        errors.tomMoment
                          ? "border-rose-500 bg-rose-50 text-rose-700"
                          : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                      }`}
                    />
                  </td>
                </tr>

                {/* – TRIP FUEL */}
                <tr>
                  <td className="py-1.5 px-2 font-medium">– TRIP FUEL (Ruta)</td>
                  <td className="py-1.5 px-2 text-right font-mono text-slate-700 dark:text-slate-200">
                    – {expected.tripFuelMass} kg
                  </td>
                  <td className="py-1.5 px-2 text-right font-mono text-slate-500">1,168</td>
                  <td className="py-1.5 px-2 text-right">
                    <input
                      type="text"
                      placeholder="Momento Trip"
                      value={tripFuelMoment}
                      onChange={(e) => setTripFuelMoment(e.target.value)}
                      className={`w-24 text-right px-2 py-0.5 rounded-lg border font-mono text-xs ${
                        errors.tripFuelMoment
                          ? "border-rose-500 bg-rose-50 text-rose-700"
                          : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                      }`}
                    />
                  </td>
                </tr>

                {/* LANDING MASS */}
                <tr className="bg-sky-50/70 dark:bg-sky-950/30 font-bold text-[#0B2E59] dark:text-sky-300">
                  <td className="py-1.5 px-2 uppercase text-[11px]">
                    LANDING MASS (LM)
                    <div className="text-[10px] font-normal text-sky-700 dark:text-sky-400">
                      CG Aterrizaje = Momento / Masa
                    </div>
                  </td>
                  <td className="py-1.5 px-2 text-right">
                    <input
                      type="text"
                      placeholder="LM (kg)"
                      value={lmMass}
                      onChange={(e) => setLmMass(e.target.value)}
                      className={`w-24 text-right px-2 py-0.5 rounded-lg border font-mono text-xs ${
                        errors.lmMass
                          ? "border-rose-500 bg-rose-50 text-rose-700"
                          : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                      }`}
                    />
                  </td>
                  <td className="py-1.5 px-2 text-right">
                    <input
                      type="text"
                      placeholder="CG (m)"
                      value={lmCg}
                      onChange={(e) => setLmCg(e.target.value)}
                      className={`w-20 text-right px-1.5 py-0.5 rounded-lg border font-mono text-xs ${
                        errors.lmCg
                          ? "border-rose-500 bg-rose-50 text-rose-700"
                          : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sky-700 font-bold"
                      }`}
                    />
                  </td>
                  <td className="py-1.5 px-2 text-right">
                    <input
                      type="text"
                      placeholder="Momento LM"
                      value={lmMoment}
                      onChange={(e) => setLmMoment(e.target.value)}
                      className={`w-24 text-right px-2 py-0.5 rounded-lg border font-mono text-xs ${
                        errors.lmMoment
                          ? "border-rose-500 bg-rose-50 text-rose-700"
                          : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                      }`}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between pt-1">
            <span className="text-[11px] text-slate-500 italic">
              * Nota POH: Densidad del combustible Diésel/Jet A-1 = 0,84 kg/l. MTOM = 1.043 kg.
            </span>

            <button
              type="button"
              onClick={handleValidate}
              className="px-4 py-2 rounded-xl bg-[#1a80ff] hover:bg-[#0066e6] text-white font-extrabold text-xs shadow-md transition-all cursor-pointer hover:scale-105 active:scale-95"
            >
              Comprobar Hoja y Graficar ➔
            </button>
          </div>

          {/* Feedback messages */}
          {Object.keys(errors).length > 0 && (
            <div className="p-3 rounded-xl border border-rose-200 dark:border-rose-800 bg-rose-50/90 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200 text-xs space-y-1 animate-in fade-in">
              <strong className="flex items-center gap-1.5 font-bold">
                <span>⚠️</span>
                <span>Se han detectado {Object.keys(errors).length} casillas a corregir (Intento {attempts}):</span>
              </strong>
              <ul className="list-disc pl-4 space-y-0.5 text-[11px]">
                {Object.entries(errors).map(([key, msg]) => (
                  <li key={key}>
                    <strong>{key}:</strong> {msg}
                  </li>
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
                <span>¡HOJA DE CARGA VALIDADA CON ÉXITO!</span>
              </strong>
              <p className="text-[11px]">
                Has completado correctamente todos los brazos, momentos y centro de gravedad.
                {isTomNormal
                  ? ` El avión está dentro de la Categoría Normal (CG TOM = ${expected.tomCg} m, MTOM = ${expected.tomMass} kg).`
                  : ` ⚠️ Atención: El avión supera límites o tiene CG crítico.`}
              </p>
            </div>
          )}
        </div>

        {/* Right Column (xl:col-span-5): Interactive SVG Envelope */}
        <div className="xl:col-span-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3.5 shadow-xs space-y-2 flex flex-col">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
            <span className="text-xs font-black uppercase tracking-wider text-[#0B2E59] dark:text-sky-300">
              🛩️ ENVOLVENTE DE CENTRO DE GRAVEDAD
            </span>
            <span className="text-[10px] text-slate-500 font-semibold">Figure 6-8 (SVG Vectorial)</span>
          </div>

          {/* SVG Container with overlay points */}
          <div className="relative w-full aspect-[1140/880] rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950">
            <img
              src="/images/c172/figure_6_8_center_of_gravity_limits_modificado.svg"
              alt="Center of Gravity Limits SVG"
              className="w-full h-full object-contain pointer-events-none"
            />

            {/* Live SVG overlay */}
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
              {/* Consumption line TOW -> LW */}
              <line
                x1={tomCoords.x}
                y1={tomCoords.y}
                x2={lmCoords.x}
                y2={lmCoords.y}
                stroke="#1a80ff"
                strokeWidth="3"
                strokeDasharray="6 4"
              />

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
              <g transform={`translate(${lmCoords.x}, ${lmCoords.y})`}>
                <circle r="7" fill="#059669" stroke="#ffffff" strokeWidth="2.5" />
                <rect x="12" y="-10" width="50" height="18" rx="6" fill="#065f46" opacity="0.9" />
                <text x="37" y="3" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">
                  LW
                </text>
              </g>

              {/* Student interactive click point */}
              {interactiveClickPoint && (
                <g transform={`translate(${interactiveClickPoint.x}, ${interactiveClickPoint.y})`}>
                  <circle r="6" fill="#f59e0b" stroke="#ffffff" strokeWidth="2" />
                  <text x="0" y="-10" fill="#d97706" fontSize="11" fontWeight="bold" textAnchor="middle">
                    Tu Clic
                  </text>
                </g>
              )}
            </svg>
          </div>

          {/* Envelope Status badges */}
          <div className="grid grid-cols-2 gap-2 pt-1 text-xs">
            <div
              className={`p-2 rounded-xl border flex flex-col justify-between ${
                isTomNormal
                  ? "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200"
                  : "bg-rose-50 dark:bg-rose-950/40 border-rose-300 dark:border-rose-800 text-rose-900 dark:text-rose-200"
              }`}
            >
              <div className="flex items-center justify-between font-bold">
                <span>Despegue (TOW)</span>
                <span>{isTomNormal ? "✅ DENTRO" : "⚠️ FUERA"}</span>
              </div>
              <div className="text-[11px] font-mono mt-0.5">
                {expected.tomMass} kg · CG {expected.tomCg} m
              </div>
              <span className="text-[10px] opacity-75">
                {isTomUtility ? "Cat. Utility & Normal" : isTomNormal ? "Cat. Normal" : "Excede envolvente"}
              </span>
            </div>

            <div
              className={`p-2 rounded-xl border flex flex-col justify-between ${
                isLmNormal
                  ? "bg-sky-50 dark:bg-sky-950/40 border-sky-300 dark:border-sky-800 text-sky-900 dark:text-sky-200"
                  : "bg-rose-50 dark:bg-rose-950/40 border-rose-300 dark:border-rose-800 text-rose-900 dark:text-rose-200"
              }`}
            >
              <div className="flex items-center justify-between font-bold">
                <span>Aterrizaje (LW)</span>
                <span>{isLmNormal ? "✅ DENTRO" : "⚠️ FUERA"}</span>
              </div>
              <div className="text-[11px] font-mono mt-0.5">
                {expected.lmMass} kg · CG {expected.lmCg} m
              </div>
              <span className="text-[10px] opacity-75">
                {isLmNormal ? "Cat. Normal asegurada" : "Excede envolvente"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
