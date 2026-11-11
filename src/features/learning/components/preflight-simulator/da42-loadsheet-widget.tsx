"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import {
  DA42_DATA,
  DA42_PREFLIGHT_MISSIONS,
  isCgInsideEnvelopeDA42,
  mapCgToSvgCoordsDA42,
  mapSvgCoordsToCgDA42,
  checkValueTolerance,
} from "./da42-constants";
import { PreflightMission } from "./types";
import { ExerciseInstructionsModal } from "./exercise-instructions-modal";

type Props = {
  mode?: "all" | "takeoff" | "landing";
  leftPct?: number;
  onExerciseCompleted?: () => void;
  isAlreadyCompleted?: boolean;
};

type LoadsheetMissionInputs = {
  pilotsMoment: string;
  paxMoment: string;
  baggageNoseMoment: string;
  baggageCabinMoment: string;
  zfmMass: string;
  zfmCg: string;
  zfmMoment: string;
  fuelMass: string;
  fuelMoment: string;
  tomMass: string;
  tomMoment: string;
  tomCg: string;
  tripFuelMassInput: string;
  tripFuelMoment: string;
  lmMass: string;
  lmMoment: string;
  lmCg: string;
  interactiveZfmPoint: { x: number; y: number } | null;
  interactiveTomPoint: { x: number; y: number } | null;
  interactiveClickPoint: { x: number; y: number } | null;
};

const M1_ZFM_POINT = mapCgToSvgCoordsDA42(1435.0, 2.409);
const M1_TOM_POINT = mapCgToSvgCoordsDA42(1575.0, 2.429);
const M1_LM_POINT = mapCgToSvgCoordsDA42(1554.0, 2.426);

const INITIAL_LOADSHEET_STORE: Record<number, LoadsheetMissionInputs> = {
  0: {
    pilotsMoment: "368.00",
    paxMoment: "0",
    baggageNoseMoment: "6.00",
    baggageCabinMoment: "58.35",
    zfmMass: "1435.00",
    zfmCg: "2.409",
    zfmMoment: "3457.35",
    fuelMass: "140.00",
    fuelMoment: "368.20",
    tomMass: "1575.00",
    tomMoment: "3825.55",
    tomCg: "2.429",
    tripFuelMassInput: "21.00",
    tripFuelMoment: "55.23",
    lmMass: "1554.00",
    lmMoment: "3770.32",
    lmCg: "2.426",
    interactiveZfmPoint: M1_ZFM_POINT,
    interactiveTomPoint: M1_TOM_POINT,
    interactiveClickPoint: M1_LM_POINT,
  },
  1: {
    pilotsMoment: "", paxMoment: "", baggageNoseMoment: "", baggageCabinMoment: "",
    zfmMass: "", zfmCg: "", zfmMoment: "",
    fuelMass: "", fuelMoment: "", tomMass: "", tomMoment: "", tomCg: "",
    tripFuelMassInput: "", tripFuelMoment: "", lmMass: "", lmMoment: "", lmCg: "",
    interactiveZfmPoint: null, interactiveTomPoint: null, interactiveClickPoint: null,
  },
  2: {
    pilotsMoment: "", paxMoment: "", baggageNoseMoment: "", baggageCabinMoment: "",
    zfmMass: "", zfmCg: "", zfmMoment: "",
    fuelMass: "", fuelMoment: "", tomMass: "", tomMoment: "", tomCg: "",
    tripFuelMassInput: "", tripFuelMoment: "", lmMass: "", lmMoment: "", lmCg: "",
    interactiveZfmPoint: null, interactiveTomPoint: null, interactiveClickPoint: null,
  },
};

export function DA42LoadsheetWidget({
  mode = "all",
  leftPct = 50,
  onExerciseCompleted,
  isAlreadyCompleted = false,
}: Props) {
  const clampedLeftPct = Math.max(15, Math.min(85, Math.round(leftPct || 50)));
  const rightPct = 100 - clampedLeftPct;
  const [showGuideModal, setShowGuideModal] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hasSeen = sessionStorage.getItem("preflight_guide_modal_seen");
      if (!hasSeen) {
        setShowGuideModal(true);
        sessionStorage.setItem("preflight_guide_modal_seen", "true");
      }
    }
  }, []);

  const [selectedMissionIndex, setSelectedMissionIndex] = useState(0);
  const mission = DA42_PREFLIGHT_MISSIONS[selectedMissionIndex];

  const [activeTab, setActiveTab] = useState<"takeoff" | "landing">(
    mode === "landing" ? "landing" : "takeoff"
  );
  const currentStep = mode === "all" ? activeTab : mode;

  const [missionStore, setMissionStore] = useState<Record<number, LoadsheetMissionInputs>>(INITIAL_LOADSHEET_STORE);
  const [solvedMissions, setSolvedMissions] = useState<Record<number, boolean>>({});

  const [pilotsMoment, setPilotsMoment] = useState("368.00");
  const [paxMoment, setPaxMoment] = useState("0");
  const [baggageNoseMoment, setBaggageNoseMoment] = useState("6.00");
  const [baggageCabinMoment, setBaggageCabinMoment] = useState("58.35");

  const [zfmMass, setZfmMass] = useState("1435.00");
  const [zfmCg, setZfmCg] = useState("2.409");
  const [zfmMoment, setZfmMoment] = useState("3457.35");

  const [fuelMass, setFuelMass] = useState("140.00");
  const [fuelMoment, setFuelMoment] = useState("368.20");

  const [tomMass, setTomMass] = useState("1575.00");
  const [tomMoment, setTomMoment] = useState("3825.55");
  const [tomCg, setTomCg] = useState("2.429");

  const [tripFuelMassInput, setTripFuelMassInput] = useState("21.00");
  const [tripFuelMoment, setTripFuelMoment] = useState("55.23");

  const [lmMass, setLmMass] = useState("1554.00");
  const [lmMoment, setLmMoment] = useState("3770.32");
  const [lmCg, setLmCg] = useState("2.426");

  const [interactiveZfmPoint, setInteractiveZfmPoint] = useState<{ x: number; y: number } | null>(M1_ZFM_POINT);
  const [interactiveTomPoint, setInteractiveTomPoint] = useState<{ x: number; y: number } | null>(M1_TOM_POINT);
  const [interactiveClickPoint, setInteractiveClickPoint] = useState<{ x: number; y: number } | null>(M1_LM_POINT);

  const [activePlotPoint, setActivePlotPoint] = useState<"zfm" | "tom">("zfm");
  const [hoverPoint, setHoverPoint] = useState<{ x: number; y: number } | null>(null);

  const [zoomLevel, setZoomLevel] = useState(1);
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const isDraggingRef = useRef(false);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const panStartRef = useRef({ x: 0, y: 0 });
  const hasMovedRef = useRef(false);
  const zoomIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const viewportRef = useRef<HTMLDivElement>(null);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [warnings, setWarnings] = useState<string[]>([]);
  const [attempts, setAttempts] = useState(0);
  const [pointAttempts, setPointAttempts] = useState(0);
  const [showTargetHint, setShowTargetHint] = useState(false);
  const [isExerciseDone, setIsExerciseDone] = useState(isAlreadyCompleted);

  const clampPan = (x: number, y: number, currentZoom: number) => {
    if (currentZoom <= 1) return { x: 0, y: 0 };
    const maxPanX = (currentZoom - 1) * 350;
    const maxPanY = (currentZoom - 1) * 300;
    return {
      x: Math.max(-maxPanX, Math.min(maxPanX, x)),
      y: Math.max(-maxPanY, Math.min(maxPanY, y)),
    };
  };

  const handleZoomStep = (delta: number) => {
    setZoomLevel((prev) => {
      const next = Math.max(1, Math.min(2.5, Math.round((prev + delta) * 100) / 100));
      if (next <= 1) setPanOffset({ x: 0, y: 0 });
      else setPanOffset((p) => clampPan(p.x, p.y, next));
      return next;
    });
  };

  const startZoomHold = (delta: number) => {
    handleZoomStep(delta);
    if (zoomIntervalRef.current) clearInterval(zoomIntervalRef.current);
    zoomIntervalRef.current = setInterval(() => {
      handleZoomStep(delta);
    }, 50);
  };

  const stopZoomHold = () => {
    if (zoomIntervalRef.current) {
      clearInterval(zoomIntervalRef.current);
      zoomIntervalRef.current = null;
    }
  };

  const loadMissionScenario = (m: PreflightMission, idx: number) => {
    setMissionStore((prev) => ({
      ...prev,
      [selectedMissionIndex]: {
        pilotsMoment, paxMoment, baggageNoseMoment, baggageCabinMoment,
        zfmMass, zfmCg, zfmMoment,
        fuelMass, fuelMoment, tomMass, tomMoment, tomCg,
        tripFuelMassInput, tripFuelMoment, lmMass, lmMoment, lmCg,
        interactiveZfmPoint, interactiveTomPoint, interactiveClickPoint,
      },
    }));

    const nextData = idx === 0 ? INITIAL_LOADSHEET_STORE[0] : (missionStore[idx] || INITIAL_LOADSHEET_STORE[idx]);
    setSelectedMissionIndex(idx);
    setPilotsMoment(nextData.pilotsMoment);
    setPaxMoment(nextData.paxMoment);
    setBaggageNoseMoment(nextData.baggageNoseMoment);
    setBaggageCabinMoment(nextData.baggageCabinMoment);
    setZfmMass(nextData.zfmMass);
    setZfmCg(nextData.zfmCg);
    setZfmMoment(nextData.zfmMoment);
    setFuelMass(nextData.fuelMass);
    setFuelMoment(nextData.fuelMoment);
    setTomMass(nextData.tomMass);
    setTomMoment(nextData.tomMoment);
    setTomCg(nextData.tomCg);
    setTripFuelMassInput(nextData.tripFuelMassInput);
    setTripFuelMoment(nextData.tripFuelMoment);
    setLmMass(nextData.lmMass);
    setLmMoment(nextData.lmMoment);
    setLmCg(nextData.lmCg);
    setInteractiveZfmPoint(nextData.interactiveZfmPoint);
    setInteractiveTomPoint(nextData.interactiveTomPoint);
    setInteractiveClickPoint(nextData.interactiveClickPoint);

    setErrors({});
    setWarnings([]);
    setAttempts(0);
    setPointAttempts(0);
    setShowTargetHint(false);
    setActivePlotPoint("zfm");
    setHoverPoint(null);
    setZoomLevel(1);
    setPanOffset({ x: 0, y: 0 });
  };

  const expected = useMemo(() => {
    const sc = mission.scenario;
    const pMass = sc.pilotsFrontKg;
    const pMom = Math.round(pMass * DA42_DATA.arms.pilotsFront * 100) / 100;

    const paxM = sc.passengersRearKg;
    const paxMom = Math.round(paxM * DA42_DATA.arms.passengersRear * 100) / 100;

    // Distribute baggage: 40% nose, 60% cabin
    const bNoseMass = Math.min(30, Math.round(sc.baggageKg * 0.4));
    const bCabinMass = sc.baggageKg - bNoseMass;
    const bNoseMom = Math.round(bNoseMass * DA42_DATA.arms.baggageNose * 100) / 100;
    const bCabinMom = Math.round(bCabinMass * DA42_DATA.arms.baggageCabin * 100) / 100;

    const zMass = Math.round((DA42_DATA.emptyWeightKg + pMass + paxM + bNoseMass + bCabinMass) * 100) / 100;
    const zMom = Math.round((DA42_DATA.emptyWeightMoment + pMom + paxMom + bNoseMom + bCabinMom) * 100) / 100;
    const zCg = Math.round((zMom / zMass) * 1000) / 1000;

    const fLiters = sc.takeoffFuelLiters;
    const fMass = Math.round(fLiters * DA42_DATA.fuelDensityKgL * 100) / 100;
    const fMom = Math.round(fMass * DA42_DATA.arms.fuelMain * 100) / 100;

    const tMass = Math.round((zMass + fMass) * 100) / 100;
    const tMom = Math.round((zMom + fMom) * 100) / 100;
    const tCg = Math.round((tMom / tMass) * 1000) / 1000;

    // Bimotor cruise ~25 L/h total
    const hourlyFuelL = sc.cruiseLoadPct === 70 ? 28.0 : 25.0;
    const estTripL = Math.round(sc.flightTimeHrs * hourlyFuelL * 10) / 10;
    const trMass = Math.round(estTripL * DA42_DATA.fuelDensityKgL * 100) / 100;
    const trMom = Math.round(trMass * DA42_DATA.arms.fuelMain * 100) / 100;

    const lMass = Math.round((tMass - trMass) * 100) / 100;
    const lMom = Math.round((tMom - trMom) * 100) / 100;
    const lCg = Math.round((lMom / lMass) * 1000) / 1000;

    return {
      pilotsMass: pMass,
      pilotsMoment: pMom,
      paxMass: paxM,
      paxMoment: paxMom,
      baggageNoseMass: bNoseMass,
      baggageNoseMoment: bNoseMom,
      baggageCabinMass: bCabinMass,
      baggageCabinMoment: bCabinMom,
      zfmMass: zMass,
      zfmMoment: zMom,
      zfmCg: zCg,
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

  const targetCoords = useMemo(() => {
    if (currentStep === "takeoff") {
      const zfmTarget = mapCgToSvgCoordsDA42(expected.zfmMass, expected.zfmCg);
      const tomTarget = mapCgToSvgCoordsDA42(expected.tomMass, expected.tomCg);
      return { zfm: zfmTarget, tom: tomTarget };
    }
    const lmTarget = mapCgToSvgCoordsDA42(expected.lmMass, expected.lmCg);
    return { lm: lmTarget };
  }, [expected, currentStep]);

  const handleSvgClick = (e: React.MouseEvent<SVGSVGElement>) => {
    if (selectedMissionIndex === 0) return;
    if (hasMovedRef.current) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const svgX = ((e.clientX - rect.left) / rect.width) * 1081;
    const svgY = ((e.clientY - rect.top) / rect.height) * 947;
    const pt = { x: Math.round(svgX * 10) / 10, y: Math.round(svgY * 10) / 10 };

    if (currentStep === "takeoff") {
      if (activePlotPoint === "zfm") {
        setInteractiveZfmPoint(pt);
        setActivePlotPoint("tom");
      } else {
        setInteractiveTomPoint(pt);
      }
    } else {
      setInteractiveClickPoint(pt);
    }
  };

  const studentEstimated = useMemo(() => {
    const pt = currentStep === "takeoff" ? interactiveTomPoint : interactiveClickPoint;
    if (!pt) return null;
    return mapSvgCoordsToCgDA42(pt.x, pt.y);
  }, [currentStep, interactiveTomPoint, interactiveClickPoint]);

  const liveHoverCg = useMemo(() => {
    if (!hoverPoint) return null;
    return mapSvgCoordsToCgDA42(hoverPoint.x, hoverPoint.y);
  }, [hoverPoint]);

  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5"
      data-left-pct={clampedLeftPct}
      style={{
        "--col-left": `${clampedLeftPct}fr`,
        "--col-right": `${rightPct}fr`,
      } as React.CSSProperties}
    >
      {/* Columna Izquierda: Altura Estricta 590px */}
      <div className="lg:col-span-6 flex flex-col">
        <div
          className="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs"
          style={{ height: "590px" }}
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
            <div>
              <span className="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-[14px]">
                {currentStep === "takeoff"
                  ? "📋 PARTE 1: DESPEGUE (TOM & CG)"
                  : "🛬 PARTE 2: ATERRIZAJE (LM & CG)"}
              </span>
              <div className="text-xs text-slate-500 font-medium">
                DA42 Twin Star · {DA42_DATA.engines}
              </div>
            </div>

            <div className="flex items-center gap-1 shrink-0">
              {mode === "all" && (
                <div className="flex items-center bg-slate-200/80 dark:bg-slate-800 rounded-lg p-0.5 mr-1.5">
                  <button
                    type="button"
                    onClick={() => setActiveTab("takeoff")}
                    className={`px-2 py-0.5 rounded text-xs font-bold transition-all cursor-pointer ${
                      activeTab === "takeoff"
                        ? "bg-white dark:bg-slate-700 text-[#0B2E59] dark:text-sky-300 shadow-2xs"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
                    }`}
                  >
                    1. Despegue
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("landing")}
                    className={`px-2 py-0.5 rounded text-xs font-bold transition-all cursor-pointer ${
                      activeTab === "landing"
                        ? "bg-white dark:bg-slate-700 text-[#0B2E59] dark:text-sky-300 shadow-2xs"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
                    }`}
                  >
                    2. Aterrizaje
                  </button>
                </div>
              )}

              {/* Selector de Misión M1 (Ejemplo), M2, M3 */}
              <button
                type="button"
                onClick={() => loadMissionScenario(DA42_PREFLIGHT_MISSIONS[0], 0)}
                className={`px-2 py-0.5 rounded text-[11px] font-extrabold transition-all cursor-pointer flex items-center gap-0.5 ${
                  selectedMissionIndex === 0
                    ? "bg-emerald-600 text-white shadow-2xs"
                    : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                }`}
                title="Misión 1: Ejemplo resuelto oficial"
              >
                <span>M1 (Ejemplo)</span>
              </button>
              {[1, 2].map((idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => loadMissionScenario(DA42_PREFLIGHT_MISSIONS[idx], idx)}
                  className={`px-2 py-0.5 rounded text-[11px] font-extrabold transition-all cursor-pointer flex items-center gap-0.5 ${
                    selectedMissionIndex === idx
                      ? "bg-[#1a80ff] text-white shadow-2xs"
                      : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                  }`}
                >
                  <span>M{idx + 1}</span>
                  <span>{solvedMissions[idx] ? "✓" : "⏳"}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Enunciado de la Misión */}
          <div className="p-1.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs my-0.5 shrink-0">
            <div className="flex items-center justify-between gap-1">
              <strong className="text-xs font-bold text-[#0B2E59] dark:text-sky-300 flex items-center gap-1">
                <span>🎯</span>
                <span>{mission.name}</span>
              </strong>
              {mission.badge && (
                <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-sky-300 border border-blue-200 dark:border-blue-800">
                  {mission.badge}
                </span>
              )}
            </div>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-tight m-0 mt-0.5">
              {mission.description}
            </p>
          </div>

          {/* Contenedor de la Tabla */}
          <div className="flex-1 min-h-0 my-0.5 overflow-hidden flex flex-col justify-start">
            {currentStep === "takeoff" ? (
              <table className="w-full text-left text-xs border-collapse table-fixed">
                <colgroup>
                  <col className="w-[38%]" />
                  <col className="w-[20%]" />
                  <col className="w-[20%]" />
                  <col className="w-[22%]" />
                </colgroup>
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-700 font-extrabold uppercase text-[#0B2E59] dark:text-sky-300 bg-slate-100/70 dark:bg-slate-800/60">
                    <th className="py-1 px-1.5 whitespace-nowrap">ITEM</th>
                    <th className="py-1 px-1.5 text-right whitespace-nowrap">MASA (KG)</th>
                    <th className="py-1 px-1.5 text-right whitespace-nowrap">BRAZO (M)</th>
                    <th className="py-1 px-1.5 text-right whitespace-nowrap">MOMENTO (KGM)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-mono text-[11px]">
                  {/* EMPTY WEIGHT */}
                  <tr className="bg-slate-50/50 dark:bg-slate-800/30 font-semibold">
                    <td className="py-1 px-1.5 font-sans font-medium whitespace-nowrap">EMPTY WEIGHT (DA42)</td>
                    <td className="py-1 px-1.5 text-right text-slate-600 dark:text-slate-300 whitespace-nowrap">1.250,00</td>
                    <td className="py-1 px-1.5 text-right text-slate-600 dark:text-slate-300 whitespace-nowrap">2,420</td>
                    <td className="py-1 px-1.5 text-right text-slate-600 dark:text-slate-300 whitespace-nowrap">3.025,00</td>
                  </tr>

                  {/* PILOTS */}
                  <tr>
                    <td className="py-1 px-1.5 font-sans font-medium whitespace-nowrap">PILOTOS (FRONT)</td>
                    <td className="py-1 px-1.5 text-right font-bold text-slate-700 dark:text-slate-200 whitespace-nowrap">
                      {expected.pilotsMass} kg
                    </td>
                    <td className="py-1 px-1.5 text-right text-slate-500 whitespace-nowrap">2,300</td>
                    <td className="py-1 px-1.5 text-right whitespace-nowrap">
                      <span className="font-bold text-slate-700 dark:text-slate-200">
                        {selectedMissionIndex === 0 ? "368,00" : (expected.pilotsMass * 2.30).toFixed(2).replace(".", ",")}
                      </span>
                    </td>
                  </tr>

                  {/* PASSENGERS */}
                  <tr>
                    <td className="py-1 px-1.5 font-sans font-medium whitespace-nowrap">PASAJEROS (REAR)</td>
                    <td className="py-1 px-1.5 text-right text-slate-700 dark:text-slate-200 whitespace-nowrap">
                      {expected.paxMass > 0 ? `${expected.paxMass} kg` : "0 kg"}
                    </td>
                    <td className="py-1 px-1.5 text-right text-slate-500 whitespace-nowrap">3,250</td>
                    <td className="py-1 px-1.5 text-right whitespace-nowrap">
                      <span className="font-bold text-slate-700 dark:text-slate-200">
                        {selectedMissionIndex === 0 ? "0,00" : (expected.paxMass * 3.25).toFixed(2).replace(".", ",")}
                      </span>
                    </td>
                  </tr>

                  {/* BAGGAGE NOSE */}
                  <tr>
                    <td className="py-1 px-1.5 font-sans font-medium whitespace-nowrap">EQUIPAJE MORRO</td>
                    <td className="py-1 px-1.5 text-right text-slate-700 dark:text-slate-200 whitespace-nowrap">
                      {expected.baggageNoseMass} kg
                    </td>
                    <td className="py-1 px-1.5 text-right text-slate-500 whitespace-nowrap">0,600</td>
                    <td className="py-1 px-1.5 text-right whitespace-nowrap">
                      <span className="font-bold text-slate-700 dark:text-slate-200">
                        {selectedMissionIndex === 0 ? "6,00" : (expected.baggageNoseMass * 0.60).toFixed(2).replace(".", ",")}
                      </span>
                    </td>
                  </tr>

                  {/* BAGGAGE CABIN */}
                  <tr>
                    <td className="py-1 px-1.5 font-sans font-medium whitespace-nowrap">EQUIPAJE CABINA</td>
                    <td className="py-1 px-1.5 text-right text-slate-700 dark:text-slate-200 whitespace-nowrap">
                      {expected.baggageCabinMass} kg
                    </td>
                    <td className="py-1 px-1.5 text-right text-slate-500 whitespace-nowrap">3,890</td>
                    <td className="py-1 px-1.5 text-right whitespace-nowrap">
                      <span className="font-bold text-slate-700 dark:text-slate-200">
                        {selectedMissionIndex === 0 ? "58,35" : (expected.baggageCabinMass * 3.89).toFixed(2).replace(".", ",")}
                      </span>
                    </td>
                  </tr>

                  {/* ZERO FUEL MASS */}
                  <tr className="bg-sky-50/70 dark:bg-sky-950/40 font-bold border-y border-sky-200 dark:border-sky-800">
                    <td className="py-1 px-1.5 font-sans text-[#0B2E59] dark:text-sky-300 whitespace-nowrap">
                      ZERO FUEL MASS (ZFM)
                    </td>
                    <td className="py-1 px-1.5 text-right text-[#0B2E59] dark:text-white whitespace-nowrap">
                      {expected.zfmMass.toFixed(2).replace(".", ",")}
                    </td>
                    <td className="py-1 px-1.5 text-right text-sky-600 dark:text-sky-400 whitespace-nowrap">
                      {expected.zfmCg.toFixed(3).replace(".", ",")}
                    </td>
                    <td className="py-1 px-1.5 text-right text-[#0B2E59] dark:text-white whitespace-nowrap">
                      {expected.zfmMoment.toFixed(2).replace(".", ",")}
                    </td>
                  </tr>

                  {/* FUEL TAKEOFF */}
                  <tr>
                    <td className="py-1 px-1.5 font-sans font-medium whitespace-nowrap">FUEL DESPEGUE (MAIN)</td>
                    <td className="py-1 px-1.5 text-right text-slate-700 dark:text-slate-200 whitespace-nowrap">
                      {expected.fuelMass.toFixed(2).replace(".", ",")} kg
                    </td>
                    <td className="py-1 px-1.5 text-right text-slate-500 whitespace-nowrap">2,630</td>
                    <td className="py-1 px-1.5 text-right whitespace-nowrap">
                      <span className="font-bold text-slate-700 dark:text-slate-200">
                        {expected.fuelMoment.toFixed(2).replace(".", ",")}
                      </span>
                    </td>
                  </tr>

                  {/* TAKEOFF MASS */}
                  <tr className="bg-emerald-50/80 dark:bg-emerald-950/50 font-bold border-t-2 border-emerald-500 text-emerald-900 dark:text-emerald-200">
                    <td className="py-1 px-1.5 font-sans whitespace-nowrap">
                      TAKEOFF MASS (TOM)
                    </td>
                    <td className="py-1 px-1.5 text-right font-extrabold text-xs whitespace-nowrap">
                      {expected.tomMass.toFixed(2).replace(".", ",")}
                    </td>
                    <td className="py-1 px-1.5 text-right font-extrabold text-xs text-emerald-700 dark:text-emerald-300 whitespace-nowrap">
                      {expected.tomCg.toFixed(3).replace(".", ",")}
                    </td>
                    <td className="py-1 px-1.5 text-right font-extrabold text-xs whitespace-nowrap">
                      {expected.tomMoment.toFixed(2).replace(".", ",")}
                    </td>
                  </tr>
                </tbody>
              </table>
            ) : (
              /* TABLA PARTE 2: ATERRIZAJE (LM & CG) */
              <table className="w-full text-left text-xs border-collapse table-fixed">
                <colgroup>
                  <col className="w-[38%]" />
                  <col className="w-[20%]" />
                  <col className="w-[20%]" />
                  <col className="w-[22%]" />
                </colgroup>
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-700 font-extrabold uppercase text-[#0B2E59] dark:text-sky-300 bg-slate-100/70 dark:bg-slate-800/60">
                    <th className="py-1 px-1.5 whitespace-nowrap">PARÁMETRO</th>
                    <th className="py-1 px-1.5 text-right whitespace-nowrap">MASA (KG)</th>
                    <th className="py-1 px-1.5 text-right whitespace-nowrap">BRAZO (M)</th>
                    <th className="py-1 px-1.5 text-right whitespace-nowrap">MOMENTO (KGM)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-mono text-xs">
                  <tr className="bg-slate-50/50 dark:bg-slate-800/30">
                    <td className="py-1.5 px-1.5 font-sans font-medium text-[#0B2E59] dark:text-sky-300 whitespace-nowrap">
                      TAKEOFF MASS (TOM)
                    </td>
                    <td className="py-1.5 px-1.5 text-right whitespace-nowrap">{expected.tomMass.toFixed(2).replace(".", ",")}</td>
                    <td className="py-1.5 px-1.5 text-right text-slate-500 whitespace-nowrap">{expected.tomCg.toFixed(3).replace(".", ",")}</td>
                    <td className="py-1.5 px-1.5 text-right whitespace-nowrap">{expected.tomMoment.toFixed(2).replace(".", ",")}</td>
                  </tr>
                  <tr>
                    <td className="py-1.5 px-1.5 font-sans font-medium text-rose-600 dark:text-rose-400 whitespace-nowrap">
                      (-) TRIP FUEL (RUTA)
                    </td>
                    <td className="py-1.5 px-1.5 text-right text-rose-600 dark:text-rose-400 font-bold whitespace-nowrap">
                      -{expected.tripFuelMass.toFixed(2).replace(".", ",")}
                    </td>
                    <td className="py-1.5 px-1.5 text-right text-slate-500 whitespace-nowrap">2,630</td>
                    <td className="py-1.5 px-1.5 text-right text-rose-600 dark:text-rose-400 font-bold whitespace-nowrap">
                      -{expected.tripFuelMoment.toFixed(2).replace(".", ",")}
                    </td>
                  </tr>
                  <tr className="bg-emerald-50/80 dark:bg-emerald-950/50 font-bold border-t-2 border-emerald-500 text-emerald-900 dark:text-emerald-200">
                    <td className="py-1.5 px-1.5 font-sans whitespace-nowrap">
                      LANDING MASS (LM)
                    </td>
                    <td className="py-1.5 px-1.5 text-right font-extrabold whitespace-nowrap">{expected.lmMass.toFixed(2).replace(".", ",")}</td>
                    <td className="py-1.5 px-1.5 text-right font-extrabold text-emerald-700 dark:text-emerald-300 whitespace-nowrap">
                      {expected.lmCg.toFixed(3).replace(".", ",")}
                    </td>
                    <td className="py-1.5 px-1.5 text-right font-extrabold whitespace-nowrap">{expected.lmMoment.toFixed(2).replace(".", ",")}</td>
                  </tr>
                </tbody>
              </table>
            )}
          </div>

          {/* Footer Informativo */}
          <div className="pt-1 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 flex items-center justify-between shrink-0">
            <span>
              * Jet A-1 = 0,84 kg/L · Brazo Fuel = 2,630 m · MTOM = 1.700 kg (1.785 kg MÄM)
            </span>
            <span className="font-semibold text-emerald-700 dark:text-emerald-400">
              Límites CG: 2,35 m - 2,48 m
            </span>
          </div>
        </div>
      </div>

      {/* Columna Derecha: Envolvente de Centrado DA42 */}
      <div className="lg:col-span-6 flex flex-col">
        <div
          className="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs relative"
          style={{ height: "590px" }}
        >
          {/* Header de la Gráfica */}
          <div className="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-[14px]">
                📈 ENVOLVENTE OFICIAL DE CG (DA42 AFM 6.4.4)
              </span>
              <a
                href="/images/DA42/limits/da42-mass-limits-table.png"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-bold text-sky-600 dark:text-sky-400 hover:underline"
              >
                ↗
              </a>
            </div>

            <div className="flex items-center gap-1">
              {currentStep === "takeoff" ? (
                <div className="flex items-center gap-1 text-[11px] font-bold">
                  <span className="px-1.5 py-0.5 rounded bg-sky-100 text-sky-800 border border-sky-300">
                    ZFM (1.435 kg / 2,409 m)
                  </span>
                  <span className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-300">
                    TOW (1.575 kg / 2,429 m)
                  </span>
                </div>
              ) : (
                <span className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-300 text-[11px] font-bold">
                  LW (1.554 kg / 2,426 m)
                </span>
              )}
            </div>
          </div>

          {/* Viewport de la Envolvente con Zoom y Pan */}
          <div className="flex-1 min-h-0 w-full flex items-center justify-center my-0.5 relative">
            {/* Controles de Zoom */}
            <div className="absolute top-2 right-2 z-20 flex items-center gap-1 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xs px-1.5 py-0.5 rounded-lg border border-slate-300 dark:border-slate-700 shadow-md">
              <button
                type="button"
                onClick={() => handleZoomStep(-0.2)}
                disabled={zoomLevel <= 1}
                className="w-5 h-5 flex items-center justify-center rounded bg-slate-100 dark:bg-slate-800 text-xs font-bold disabled:opacity-30 cursor-pointer"
              >
                −
              </button>
              <button
                type="button"
                onClick={() => {
                  setZoomLevel(1);
                  setPanOffset({ x: 0, y: 0 });
                }}
                className="text-[10px] font-mono font-bold px-1 select-none"
              >
                {Math.round(zoomLevel * 100)}%
              </button>
              <button
                type="button"
                onClick={() => handleZoomStep(0.2)}
                disabled={zoomLevel >= 2.5}
                className="w-5 h-5 flex items-center justify-center rounded bg-slate-100 dark:bg-slate-800 text-xs font-bold disabled:opacity-30 cursor-pointer"
              >
                +
              </button>
            </div>

            {/* Contenedor Gráfico */}
            <div
              ref={viewportRef}
              className="w-full h-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 shadow-2xs overflow-hidden flex p-1 relative select-none"
            >
              <div
                className="relative aspect-[1081/947] h-full max-h-full max-w-full m-auto shrink-0 select-none"
                style={{
                  height: "100%",
                  width: "auto",
                  transform: `translate(${panOffset.x}px, ${panOffset.y}px) scale(${zoomLevel})`,
                  transformOrigin: "center center",
                  transition: isPanning ? "none" : "transform 350ms cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                <img
                  src="/images/DA42/limits/da42-mass-limits-table.png"
                  alt="Envolvente oficial de masa y centrado Diamond DA42"
                  className="w-full h-full object-contain pointer-events-none select-none"
                />

                {/* SVG Overlay interactivo */}
                <svg
                  viewBox="0 0 1081 947"
                  className="absolute inset-0 w-full h-full select-none cursor-crosshair"
                  onClick={handleSvgClick}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const svgX = ((e.clientX - rect.left) / rect.width) * 1081;
                    const svgY = ((e.clientY - rect.top) / rect.height) * 947;
                    setHoverPoint({ x: svgX, y: svgY });
                  }}
                  onMouseLeave={() => setHoverPoint(null)}
                >
                  {/* Puntos de Despegue */}
                  {currentStep === "takeoff" && (
                    <>
                      {/* Línea ZFM -> TOM */}
                      {interactiveZfmPoint && interactiveTomPoint && (
                        <line
                          x1={interactiveZfmPoint.x}
                          y1={interactiveZfmPoint.y}
                          x2={interactiveTomPoint.x}
                          y2={interactiveTomPoint.y}
                          stroke="#1a80ff"
                          strokeWidth="3.5"
                          strokeDasharray="6 5"
                        />
                      )}

                      {/* ZFM Point */}
                      {interactiveZfmPoint && (
                        <g>
                          <circle
                            cx={interactiveZfmPoint.x}
                            cy={interactiveZfmPoint.y}
                            r="8"
                            fill="#1a80ff"
                            stroke="#ffffff"
                            strokeWidth="2.5"
                          />
                          <text
                            x={interactiveZfmPoint.x + 12}
                            y={interactiveZfmPoint.y - 6}
                            fill="#0B2E59"
                            fontSize="15"
                            fontWeight="bold"
                            filter="drop-shadow(0 1px 3px rgba(255,255,255,0.9))"
                          >
                            ZFM (1.435 kg / 2,409 m)
                          </text>
                        </g>
                      )}

                      {/* TOM Point */}
                      {interactiveTomPoint && (
                        <g>
                          <circle
                            cx={interactiveTomPoint.x}
                            cy={interactiveTomPoint.y}
                            r="9"
                            fill="#10b981"
                            stroke="#ffffff"
                            strokeWidth="3"
                          />
                          <text
                            x={interactiveTomPoint.x + 12}
                            y={interactiveTomPoint.y - 6}
                            fill="#065f46"
                            fontSize="15"
                            fontWeight="bold"
                            filter="drop-shadow(0 1px 3px rgba(255,255,255,0.9))"
                          >
                            TOW (1.575 kg / 2,429 m)
                          </text>
                        </g>
                      )}
                    </>
                  )}

                  {/* Punto de Aterrizaje */}
                  {currentStep === "landing" && (
                    <>
                      {interactiveTomPoint && interactiveClickPoint && (
                        <line
                          x1={interactiveTomPoint.x}
                          y1={interactiveTomPoint.y}
                          x2={interactiveClickPoint.x}
                          y2={interactiveClickPoint.y}
                          stroke="#059669"
                          strokeWidth="3.5"
                          strokeDasharray="5 4"
                        />
                      )}

                      {interactiveTomPoint && (
                        <circle
                          cx={interactiveTomPoint.x}
                          cy={interactiveTomPoint.y}
                          r="7"
                          fill="#64748b"
                          stroke="#ffffff"
                          strokeWidth="2"
                          opacity="0.8"
                        />
                      )}

                      {interactiveClickPoint && (
                        <g>
                          <circle
                            cx={interactiveClickPoint.x}
                            cy={interactiveClickPoint.y}
                            r="9"
                            fill="#059669"
                            stroke="#ffffff"
                            strokeWidth="3"
                          />
                          <text
                            x={interactiveClickPoint.x + 12}
                            y={interactiveClickPoint.y - 6}
                            fill="#065f46"
                            fontSize="15"
                            fontWeight="bold"
                            filter="drop-shadow(0 1px 3px rgba(255,255,255,0.9))"
                          >
                            LW (1.554 kg / 2,426 m)
                          </text>
                        </g>
                      )}
                    </>
                  )}
                </svg>
              </div>
            </div>
          </div>

          {/* Footer de Estado de Envolvente */}
          <div className="pt-1 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 shrink-0">
            <div>
              {liveHoverCg && (
                <span className="font-mono text-[11px] text-sky-700 dark:text-sky-300">
                  Cursor: <strong>{liveHoverCg.massKg} kg</strong> · CG: <strong>{liveHoverCg.cgM.toFixed(3)} m</strong>
                </span>
              )}
            </div>
            <div className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-400">
              ✓ Puntos en Envolvente Certificada DA42
            </div>
          </div>
        </div>
      </div>

      {/* Modal Guía */}
      <ExerciseInstructionsModal
        isOpen={showGuideModal}
        onClose={() => setShowGuideModal(false)}
        title="Guía de Procedimiento: Hoja de Carga DA42"
      />
    </div>
  );
}
