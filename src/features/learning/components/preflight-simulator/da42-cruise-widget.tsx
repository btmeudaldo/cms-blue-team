"use client";

import React, { useState, useEffect } from "react";
import { DA42_PREFLIGHT_MISSIONS, checkValueTolerance } from "./da42-constants";
import { ExerciseInstructionsModal } from "./exercise-instructions-modal";

type Props = {
  leftPct?: number;
  onExerciseCompleted?: () => void;
  isAlreadyCompleted?: boolean;
};

// Official data points from DA42 AFM Section 5.3.11 (Doc # 7.01.05-E)
// Fuel Flow is TOTAL for both engines
export type PowerSetting = 50 | 60 | 70 | 80 | 90 | 100;

const CRUISE_TABLE_DATA: Array<{
  alt: number;
  load: PowerSetting;
  ktas: number;
  fuelFlowLh: number;
  fuelFlowGal: number;
  rangeNm: number;
  enduranceHrs: number;
}> = [
  // 50% Load (Económico / Máxima Autonomía): 27.6 L/h total (7.3 US Gal/h)
  { alt: 2000, load: 50, ktas: 118, fuelFlowLh: 27.6, fuelFlowGal: 7.3, rangeNm: 808, enduranceHrs: 6.8 },
  { alt: 4000, load: 50, ktas: 121, fuelFlowLh: 27.6, fuelFlowGal: 7.3, rangeNm: 828, enduranceHrs: 6.8 },
  { alt: 6000, load: 50, ktas: 124, fuelFlowLh: 27.6, fuelFlowGal: 7.3, rangeNm: 849, enduranceHrs: 6.8 },
  { alt: 8000, load: 50, ktas: 127, fuelFlowLh: 27.6, fuelFlowGal: 7.3, rangeNm: 869, enduranceHrs: 6.8 },

  // 60% Load (Estándar Escuela DA42): 33.0 L/h total (8.8 US Gal/h)
  { alt: 2000, load: 60, ktas: 128, fuelFlowLh: 33.0, fuelFlowGal: 8.8, rangeNm: 733, enduranceHrs: 5.7 },
  { alt: 4000, load: 60, ktas: 132, fuelFlowLh: 33.0, fuelFlowGal: 8.8, rangeNm: 755, enduranceHrs: 5.7 },
  { alt: 6000, load: 60, ktas: 136, fuelFlowLh: 33.0, fuelFlowGal: 8.8, rangeNm: 778, enduranceHrs: 5.7 },
  { alt: 8000, load: 60, ktas: 139, fuelFlowLh: 33.0, fuelFlowGal: 8.8, rangeNm: 795, enduranceHrs: 5.7 },

  // 70% Load (Crucero Normal): 40.0 L/h total (10.5 US Gal/h)
  { alt: 2000, load: 70, ktas: 137, fuelFlowLh: 40.0, fuelFlowGal: 10.5, rangeNm: 647, enduranceHrs: 4.7 },
  { alt: 4000, load: 70, ktas: 142, fuelFlowLh: 40.0, fuelFlowGal: 10.5, rangeNm: 671, enduranceHrs: 4.7 },
  { alt: 6000, load: 70, ktas: 146, fuelFlowLh: 40.0, fuelFlowGal: 10.5, rangeNm: 690, enduranceHrs: 4.7 },
  { alt: 8000, load: 70, ktas: 150, fuelFlowLh: 40.0, fuelFlowGal: 10.5, rangeNm: 708, enduranceHrs: 4.7 },

  // 80% Load (Crucero Rápido): 47.0 L/h total (12.4 US Gal/h)
  { alt: 2000, load: 80, ktas: 145, fuelFlowLh: 47.0, fuelFlowGal: 12.4, rangeNm: 583, enduranceHrs: 4.0 },
  { alt: 4000, load: 80, ktas: 150, fuelFlowLh: 47.0, fuelFlowGal: 12.4, rangeNm: 603, enduranceHrs: 4.0 },
  { alt: 6000, load: 80, ktas: 155, fuelFlowLh: 47.0, fuelFlowGal: 12.4, rangeNm: 623, enduranceHrs: 4.0 },
  { alt: 8000, load: 80, ktas: 160, fuelFlowLh: 47.0, fuelFlowGal: 12.4, rangeNm: 643, enduranceHrs: 4.0 },

  // 90% Load (Alta Potencia): 54.6 L/h total (14.4 US Gal/h)
  { alt: 2000, load: 90, ktas: 152, fuelFlowLh: 54.6, fuelFlowGal: 14.4, rangeNm: 526, enduranceHrs: 3.5 },
  { alt: 4000, load: 90, ktas: 157, fuelFlowLh: 54.6, fuelFlowGal: 14.4, rangeNm: 543, enduranceHrs: 3.5 },
  { alt: 6000, load: 90, ktas: 162, fuelFlowLh: 54.6, fuelFlowGal: 14.4, rangeNm: 561, enduranceHrs: 3.5 },
  { alt: 8000, load: 90, ktas: 167, fuelFlowLh: 54.6, fuelFlowGal: 14.4, rangeNm: 578, enduranceHrs: 3.5 },

  // 100% Load (Máxima Potencia Continua / Despegue): 63.6 L/h total (16.8 US Gal/h)
  { alt: 2000, load: 100, ktas: 158, fuelFlowLh: 63.6, fuelFlowGal: 16.8, rangeNm: 469, enduranceHrs: 3.0 },
  { alt: 4000, load: 100, ktas: 163, fuelFlowLh: 63.6, fuelFlowGal: 16.8, rangeNm: 484, enduranceHrs: 3.0 },
  { alt: 6000, load: 100, ktas: 168, fuelFlowLh: 63.6, fuelFlowGal: 16.8, rangeNm: 499, enduranceHrs: 3.0 },
  { alt: 8000, load: 100, ktas: 171, fuelFlowLh: 63.6, fuelFlowGal: 16.8, rangeNm: 508, enduranceHrs: 3.0 },
];

type MissionInputs = {
  ktas: string;
  fuelFlow: string;
  timeHrs: string;
  tripLiters: string;
  tripKg: string;
  maxRange: string;
};

// Initial state: M1 is fully prefilled as the solved example
const INITIAL_MISSION_INPUTS: Record<number, MissionInputs> = {
  0: {
    ktas: "128",
    fuelFlow: "33.0",
    timeHrs: "0.47",
    tripLiters: "15.5",
    tripKg: "13.0",
    maxRange: "733",
  },
  1: { ktas: "", fuelFlow: "", timeHrs: "", tripLiters: "", tripKg: "", maxRange: "" },
  2: { ktas: "", fuelFlow: "", timeHrs: "", tripLiters: "", tripKg: "", maxRange: "" },
};

export function DA42CruiseWidget({
  leftPct = 50,
  onExerciseCompleted,
  isAlreadyCompleted = false,
}: Props) {
  const clampedLeftPct = Math.max(15, Math.min(85, Math.round(leftPct || 50)));
  const rightPct = 100 - clampedLeftPct;
  const [showGuideModal, setShowGuideModal] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hasSeen = sessionStorage.getItem("da42_cruise_modal_seen");
      if (!hasSeen) {
        setShowGuideModal(true);
        sessionStorage.setItem("da42_cruise_modal_seen", "true");
      }
    }
  }, []);

  const [selectedMissionIndex, setSelectedMissionIndex] = useState(0); // Starts on M1 (Solved Example)
  const [selectedTablePower, setSelectedTablePower] = useState<PowerSetting>(60);
  const mission = DA42_PREFLIGHT_MISSIONS[selectedMissionIndex];

  const [missionInputs, setMissionInputs] = useState<Record<number, MissionInputs>>(INITIAL_MISSION_INPUTS);
  const [solvedMissions, setSolvedMissions] = useState<Record<number, boolean>>({});

  const currentInputs = missionInputs[selectedMissionIndex] || {
    ktas: "",
    fuelFlow: "",
    timeHrs: "",
    tripLiters: "",
    tripKg: "",
    maxRange: "",
  };

  const updateCurrentInput = (field: keyof MissionInputs, value: string) => {
    setMissionInputs((prev) => ({
      ...prev,
      [selectedMissionIndex]: {
        ...(prev[selectedMissionIndex] || {
          ktas: "",
          fuelFlow: "",
          timeHrs: "",
          tripLiters: "",
          tripKg: "",
          maxRange: "",
        }),
        [field]: value,
      },
    }));
  };

  const [attempts, setAttempts] = useState(0);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [warnings, setWarnings] = useState<string[]>([]);

  // Altitudes for DA42 missions: M1=2000 ft, M2=4000 ft, M3=4000 ft
  const alt = selectedMissionIndex === 0 ? 2000 : selectedMissionIndex === 1 ? 4000 : 4000;
  const loadPct: PowerSetting = selectedMissionIndex === 2 ? 70 : 60;

  const targetRow =
    CRUISE_TABLE_DATA.find((r) => r.alt === alt && r.load === loadPct) ||
    CRUISE_TABLE_DATA[0];

  const expectedKtas = targetRow.ktas;
  const expectedFuelFlow = targetRow.fuelFlowLh;
  const expectedFuelFlowGal = targetRow.fuelFlowGal;

  const expectedTimeHrs = Math.round((mission.scenario.distanceNm / expectedKtas) * 100) / 100;
  const expectedTripLiters = Math.round(expectedTimeHrs * expectedFuelFlow * 10) / 10;
  const expectedTripGallons = Math.round(expectedTimeHrs * expectedFuelFlowGal * 10) / 10;
  const expectedTripKg = Math.round(expectedTripLiters * 0.84 * 10) / 10;
  const expectedTripLbs = Math.round(expectedTripKg * 2.20462 * 10) / 10;
  const expectedMaxRange = targetRow.rangeNm;

  const solvedPracticeCount = (solvedMissions[1] ? 1 : 0) + (solvedMissions[2] ? 1 : 0);
  const isAllPracticeCompleted = solvedPracticeCount === 2 || isAlreadyCompleted;

  const switchMission = (idx: number) => {
    setSelectedMissionIndex(idx);
    setSelectedTablePower(idx === 2 ? 70 : 60);
    setAttempts(0);
    setErrors({});
    setWarnings([]);
  };

  const handleValidate = () => {
    if (selectedMissionIndex === 0) {
      switchMission(1);
      return;
    }

    const newErrors: Record<string, string> = {};
    const newWarnings: string[] = [];
    const num = (v: string) => parseFloat(v.replace(",", "."));

    // 1. Check KTAS
    const userKtas = num(currentInputs.ktas);
    if (isNaN(userKtas) || !checkValueTolerance(userKtas, expectedKtas, 0.02, 2.0).isOk) {
      newErrors.ktas =
        attempts >= 1
          ? `En la tabla AFM a ${alt} ft y ${loadPct}% Load, la velocidad es de ${expectedKtas} KTAS.`
          : `Revisa la tabla oficial: busca la fila de ${alt} ft y columna KTAS al ${loadPct}% de potencia.`;
    }

    // 2. Check Fuel Flow
    const userFf = num(currentInputs.fuelFlow);
    const isFfLiters = checkValueTolerance(userFf, expectedFuelFlow, 0.03, 0.6).isOk;
    const isFfGallons = checkValueTolerance(userFf, expectedFuelFlowGal, 0.05, 0.3).isOk;
    if (isNaN(userFf) || (!isFfLiters && !isFfGallons)) {
      newErrors.fuelFlow =
        attempts >= 1
          ? `En la tabla figura ${expectedFuelFlow} L/h total (o ${expectedFuelFlowGal} Gal/h). Ambas unidades son válidas.`
          : `Consulta la columna de consumo total bimotor: ${expectedFuelFlow} L/h o ${expectedFuelFlowGal} Gal/h.`;
    } else if (isFfGallons) {
      newWarnings.push(`Consumo en Galones: ${userFf} Gal/h (equivale a ${expectedFuelFlow} L/h).`);
    }

    // 3. Check Time in Hours
    const userTime = num(currentInputs.timeHrs);
    if (isNaN(userTime) || !checkValueTolerance(userTime, expectedTimeHrs, 0.06, 0.05).isOk) {
      newErrors.timeHrs =
        attempts >= 1
          ? `Tiempo = ${mission.scenario.distanceNm} NM / ${expectedKtas} KTAS = ${expectedTimeHrs} h (~${Math.round(expectedTimeHrs * 60)} min).`
          : `Divide la distancia de ${mission.scenario.distanceNm} NM entre la KTAS (${expectedKtas} kt).`;
    }

    // 4. Check Trip Fuel
    const userTrip = num(currentInputs.tripLiters);
    const isTripLiters = checkValueTolerance(userTrip, expectedTripLiters, 0.06, 0.8).isOk;
    const isTripGallons =
      checkValueTolerance(userTrip, expectedTripGallons, 0.06, 0.3).isOk ||
      checkValueTolerance(userTrip, expectedTripLiters / 3.78541, 0.06, 0.3).isOk;
    if (isNaN(userTrip) || (!isTripLiters && !isTripGallons)) {
      newErrors.tripLiters =
        attempts >= 1
          ? `Trip Fuel = ${expectedTimeHrs} h × ${expectedFuelFlow} L/h = ${expectedTripLiters} L (o ${expectedTripGallons} Gal).`
          : `Combustible de ruta = Tiempo en horas (${expectedTimeHrs} h) × Consumo (${expectedFuelFlow} L/h).`;
    } else if (isTripGallons) {
      newWarnings.push(`Trip Fuel en Galones: ${userTrip} Gal (equivale a ${expectedTripLiters} L).`);
    }

    // 5. Check Trip Mass
    const userTripMass = num(currentInputs.tripKg);
    const isMassKg = checkValueTolerance(userTripMass, expectedTripKg, 0.06, 0.8).isOk;
    const isMassLbs = checkValueTolerance(userTripMass, expectedTripLbs, 0.06, 1.5).isOk;
    if (isNaN(userTripMass) || (!isMassKg && !isMassLbs)) {
      newErrors.tripKg =
        attempts >= 1
          ? `Masa = ${expectedTripLiters} L × 0.84 = ${expectedTripKg} kg (o ${expectedTripLbs} lbs).`
          : "Multiplica los litros por la densidad de 0.84 kg/L.";
    } else if (isMassLbs) {
      newWarnings.push(`Masa en Libras: ${userTripMass} lbs (equivale a ${expectedTripKg} kg).`);
    }

    // 6. Check Max Range
    const userRange = num(currentInputs.maxRange);
    if (isNaN(userRange) || !checkValueTolerance(userRange, expectedMaxRange, 0.03, 10).isOk) {
      newErrors.maxRange =
        attempts >= 1
          ? `En la tabla a ${alt} ft y ${loadPct}% Load figura ${expectedMaxRange} NM.`
          : "Consulta la columna 'Alcance [NM]' con depósitos principales (189 L).";
    }

    setErrors(newErrors);
    setWarnings(newWarnings);

    if (Object.keys(newErrors).length === 0) {
      const nextSolved = { ...solvedMissions, [selectedMissionIndex]: true };
      setSolvedMissions(nextSolved);
      if (nextSolved[1] && nextSolved[2]) {
        if (onExerciseCompleted) {
          onExerciseCompleted();
        }
      }
    } else {
      setAttempts((prev) => prev + 1);
    }
  };

  const displayedRows = CRUISE_TABLE_DATA.filter((r) => r.load === selectedTablePower);
  const isCurrentMissionSolved = selectedMissionIndex === 0 || Boolean(solvedMissions[selectedMissionIndex]);

  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5"
      data-left-pct={clampedLeftPct}
      style={{
        "--col-left": `${clampedLeftPct}fr`,
        "--col-right": `${rightPct}fr`,
      } as React.CSSProperties}
    >
      {/* Columna Izquierda (Formulario de Crucero) */}
      <div className="lg:col-span-7 flex flex-col">
        <div
          className="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2 overflow-hidden"
          style={{ height: "590px" }}
        >
          {/* Header & Mission Selector */}
          <div className="flex items-center justify-between pb-1.5 border-b border-slate-200 dark:border-slate-800 shrink-0">
            <span className="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">
              ⏱️ CRUCERO Y AUTONOMÍA DA42
            </span>
            <div className="flex items-center gap-1.5 shrink-0">
              <button
                type="button"
                onClick={() => setShowGuideModal(true)}
                className="px-2.5 py-1 rounded-lg text-[18px] font-bold bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-700/60 hover:bg-amber-100 cursor-pointer flex items-center gap-1 shadow-2xs mr-1"
              >
                <span>💡</span>
                <span className="hidden sm:inline">Guía</span>
              </button>
              <button
                type="button"
                onClick={() => switchMission(0)}
                style={{
                  backgroundColor: selectedMissionIndex === 0 ? "#059669" : "#ecfdf5",
                  color: selectedMissionIndex === 0 ? "#ffffff" : "#065f46",
                  fontSize: "18px",
                  fontWeight: 800,
                }}
                className={`px-3 py-1 rounded-lg transition-all cursor-pointer border ${
                  selectedMissionIndex === 0
                    ? "border-emerald-600 shadow-2xs"
                    : "border-emerald-300 dark:border-emerald-700 hover:bg-emerald-100"
                }`}
              >
                M1
              </button>
              {[1, 2].map((idx) => {
                const isSolved = Boolean(solvedMissions[idx]);
                const isSelected = selectedMissionIndex === idx;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => switchMission(idx)}
                    style={{
                      backgroundColor: isSelected ? "#0B2E59" : isSolved ? "#ecfdf5" : "#f1f5f9",
                      color: isSelected ? "#ffffff" : isSolved ? "#047857" : "#000000",
                      fontSize: "18px",
                      fontWeight: 800,
                    }}
                    className={`px-3 py-1 rounded-lg transition-all cursor-pointer border ${
                      isSelected
                        ? "border-[#0B2E59] shadow-2xs"
                        : isSolved
                          ? "border-emerald-300 dark:border-emerald-700"
                          : "border-slate-300 hover:bg-slate-200"
                    }`}
                  >
                    M{idx + 1}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mission Info Card */}
          <div className="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs shrink-0 space-y-0.5">
            <div className="flex items-center justify-between">
              <strong className="text-[#0B2E59] dark:text-sky-300 text-[18px]">
                {mission.name}
              </strong>
              <span className="text-[18px] font-bold text-sky-700 dark:text-sky-400">
                {mission.scenario.distanceNm} NM · {alt} ft · {loadPct}% LOAD
              </span>
            </div>
            <p className="text-[18px] text-slate-600 dark:text-slate-300 leading-snug">
              {selectedMissionIndex === 0
                ? "Ejemplo resuelto: Consulta los datos oficiales en la tabla derecha y verifica el cálculo de ruta."
                : `Calcula los parámetros en crucero a ${alt} ft con ${loadPct}% de potencia bimotor.`}
            </p>
          </div>

          {/* Form Inputs Grid (All text >= 18px) */}
          <div className="grid grid-cols-2 gap-2 shrink-0">
            {/* KTAS */}
            <div className="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5">
              <label className="block text-[18px] font-bold text-slate-700 dark:text-slate-200">
                1. KTAS:
              </label>
              <input
                type="text"
                disabled={selectedMissionIndex === 0}
                value={currentInputs.ktas}
                onChange={(e) => updateCurrentInput("ktas", e.target.value)}
                placeholder="ej: 132"
                className="w-full px-2 py-1 rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 font-mono text-[18px] font-bold text-slate-900 dark:text-white"
              />
              {errors.ktas && <p className="text-rose-600 text-[18px] leading-tight font-medium">{errors.ktas}</p>}
            </div>

            {/* Fuel Flow */}
            <div className="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5">
              <label className="block text-[18px] font-bold text-slate-700 dark:text-slate-200">
                2. Gasto Bimotor (L/h):
              </label>
              <input
                type="text"
                disabled={selectedMissionIndex === 0}
                value={currentInputs.fuelFlow}
                onChange={(e) => updateCurrentInput("fuelFlow", e.target.value)}
                placeholder="ej: 33.0"
                className="w-full px-2 py-1 rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 font-mono text-[18px] font-bold text-slate-900 dark:text-white"
              />
              {errors.fuelFlow && <p className="text-rose-600 text-[18px] leading-tight font-medium">{errors.fuelFlow}</p>}
            </div>

            {/* ETE */}
            <div className="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5">
              <label className="block text-[18px] font-bold text-slate-700 dark:text-slate-200">
                3. Tiempo en Ruta (h):
              </label>
              <input
                type="text"
                disabled={selectedMissionIndex === 0}
                value={currentInputs.timeHrs}
                onChange={(e) => updateCurrentInput("timeHrs", e.target.value)}
                placeholder="ej: 0.45"
                className="w-full px-2 py-1 rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 font-mono text-[18px] font-bold text-slate-900 dark:text-white"
              />
              {errors.timeHrs && <p className="text-rose-600 text-[18px] leading-tight font-medium">{errors.timeHrs}</p>}
            </div>

            {/* Trip Liters */}
            <div className="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5">
              <label className="block text-[18px] font-bold text-slate-700 dark:text-slate-200">
                4. Trip Fuel (Litros):
              </label>
              <input
                type="text"
                disabled={selectedMissionIndex === 0}
                value={currentInputs.tripLiters}
                onChange={(e) => updateCurrentInput("tripLiters", e.target.value)}
                placeholder="ej: 14.9"
                className="w-full px-2 py-1 rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 font-mono text-[18px] font-bold text-slate-900 dark:text-white"
              />
              {errors.tripLiters && <p className="text-rose-600 text-[18px] leading-tight font-medium">{errors.tripLiters}</p>}
            </div>

            {/* Trip Kg */}
            <div className="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5">
              <label className="block text-[18px] font-bold text-slate-700 dark:text-slate-200">
                5. Masa Trip (kg):
              </label>
              <input
                type="text"
                disabled={selectedMissionIndex === 0}
                value={currentInputs.tripKg}
                onChange={(e) => updateCurrentInput("tripKg", e.target.value)}
                placeholder="ej: 12.5"
                className="w-full px-2 py-1 rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 font-mono text-[18px] font-bold text-slate-900 dark:text-white"
              />
              {errors.tripKg && <p className="text-rose-600 text-[18px] leading-tight font-medium">{errors.tripKg}</p>}
            </div>

            {/* Max Range */}
            <div className="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5">
              <label className="block text-[18px] font-bold text-slate-700 dark:text-slate-200">
                6. Alcance Máx (NM):
              </label>
              <input
                type="text"
                disabled={selectedMissionIndex === 0}
                value={currentInputs.maxRange}
                onChange={(e) => updateCurrentInput("maxRange", e.target.value)}
                placeholder="ej: 755"
                className="w-full px-2 py-1 rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 font-mono text-[18px] font-bold text-slate-900 dark:text-white"
              />
              {errors.maxRange && <p className="text-rose-600 text-[18px] leading-tight font-medium">{errors.maxRange}</p>}
            </div>
          </div>

          {/* Validation Button & Result status */}
          <div className="pt-1 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between shrink-0">
            {isCurrentMissionSolved ? (
              <span className="text-emerald-700 dark:text-emerald-400 font-bold text-[18px] flex items-center gap-1.5">
                <span>✅</span> {selectedMissionIndex === 0 ? "Ejemplo Modelo Resuelto" : `¡Misión M${selectedMissionIndex + 1} Aprobada!`}
              </span>
            ) : (
              <span className="text-slate-500 text-[18px]">Rellena los 6 valores de crucero.</span>
            )}
            <button
              type="button"
              onClick={handleValidate}
              style={{ fontSize: "18px", fontWeight: 800 }}
              className="px-4 py-1.5 rounded-xl bg-[#0B2E59] hover:bg-[#154680] text-white shadow-sm cursor-pointer transition-all"
            >
              {selectedMissionIndex === 0 ? "Pasar a M2 →" : "Validar Misión"}
            </button>
          </div>
        </div>
      </div>

      {/* Columna Derecha (Tabla AFM de Crucero) */}
      <div className="lg:col-span-5 flex flex-col">
        <div
          className="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2 overflow-hidden"
          style={{ height: "590px" }}
        >
          {/* Header & Power Selectors */}
          <div className="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
            <span className="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">
              TABLA AFM SECCIÓN 5.3.11
            </span>
          </div>

          {/* Power Setting Buttons */}
          <div className="flex items-center gap-1 flex-wrap shrink-0">
            {([50, 60, 70, 80, 90, 100] as PowerSetting[]).map((load) => {
              const isActive = selectedTablePower === load;
              return (
                <button
                  key={load}
                  type="button"
                  onClick={() => setSelectedTablePower(load)}
                  style={{
                    backgroundColor: isActive ? "#0B2E59" : "#ffffff",
                    color: isActive ? "#ffffff" : "#000000",
                    fontSize: "18px",
                    fontWeight: 700,
                  }}
                  className={`px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${
                    isActive
                      ? "border-[#0B2E59] shadow-xs"
                      : "border-slate-300 hover:bg-slate-100"
                  }`}
                >
                  {load}%
                </button>
              );
            })}
          </div>

          {/* Data Table with all text >= 18px */}
          <div className="w-full flex-1 min-h-0 overflow-y-auto rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 p-2 shadow-2xs">
            <div className="text-[18px] font-bold text-[#0B2E59] dark:text-sky-300 mb-1 border-b pb-0.5">
              Potencia: {selectedTablePower}% LOAD · Bimotor DA42
            </div>
            <table className="w-full text-left text-[18px]">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-700 text-slate-500 font-bold">
                  <th className="py-1">Altitud</th>
                  <th className="py-1 text-center">KTAS</th>
                  <th className="py-1 text-center">Gasto</th>
                  <th className="py-1 text-right">Alcance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {displayedRows.map((r) => {
                  const isHighlighted = r.alt === alt && r.load === loadPct;
                  return (
                    <tr
                      key={r.alt}
                      className={
                        isHighlighted
                          ? "bg-sky-50 dark:bg-sky-950/60 font-bold text-[#0B2E59] dark:text-sky-300"
                          : "text-slate-700 dark:text-slate-300"
                      }
                    >
                      <td className="py-1">{r.alt} ft</td>
                      <td className="py-1 text-center font-mono">{r.ktas}</td>
                      <td className="py-1 text-center font-mono">{r.fuelFlowLh} L/h</td>
                      <td className="py-1 text-right font-mono">{r.rangeNm} NM</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Table Footer Summary */}
          <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[18px] text-slate-700 dark:text-slate-300 shrink-0">
            Tanques principales: <strong>189 L</strong> utilizables (70 L/h máx).
          </div>
        </div>
      </div>

      {/* Guide Modal */}
      <ExerciseInstructionsModal
        isOpen={showGuideModal}
        onClose={() => setShowGuideModal(false)}
        title="Instrucciones: Cálculo de Crucero y Autonomía DA42"
      />
    </div>
  );
}
