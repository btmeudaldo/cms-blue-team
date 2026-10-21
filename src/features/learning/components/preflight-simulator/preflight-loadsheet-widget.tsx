"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import {
  EC_NNA_DATA,
  PREFLIGHT_MISSIONS,
  isCgInsideNormal,
  isCgInsideUtility,
  mapCgToSvgCoords,
  mapSvgCoordsToCg,
  checkValueTolerance,
} from "./constants";
import { PreflightMission } from "./types";

type Props = {
  mode?: "all" | "takeoff" | "landing";
  onExerciseCompleted?: () => void;
  isAlreadyCompleted?: boolean;
};

type LoadsheetMissionInputs = {
  pilotsMoment: string;
  paxMoment: string;
  baggageMoment: string;
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

const M1_ZFM_POINT = mapCgToSvgCoords(917.44, 1.032);
const M1_TOM_POINT = mapCgToSvgCoords(984.64, 1.041);
const M1_LM_POINT = mapCgToSvgCoords(971.79, 1.040);

const INITIAL_LOADSHEET_STORE: Record<number, LoadsheetMissionInputs> = {
  0: {
    pilotsMoment: "147.58",
    paxMoment: "0",
    baggageMoment: "12.07",
    zfmMass: "917.44",
    zfmCg: "1.032",
    zfmMoment: "946.88",
    fuelMass: "67.20",
    fuelMoment: "78.49",
    tomMass: "984.64",
    tomMoment: "1025.37",
    tomCg: "1.041",
    tripFuelMassInput: "12.85",
    tripFuelMoment: "15.01",
    lmMass: "971.79",
    lmMoment: "1010.36",
    lmCg: "1.040",
    interactiveZfmPoint: M1_ZFM_POINT,
    interactiveTomPoint: M1_TOM_POINT,
    interactiveClickPoint: M1_LM_POINT,
  },
  1: {
    pilotsMoment: "", paxMoment: "", baggageMoment: "", zfmMass: "", zfmCg: "", zfmMoment: "",
    fuelMass: "", fuelMoment: "", tomMass: "", tomMoment: "", tomCg: "",
    tripFuelMassInput: "", tripFuelMoment: "", lmMass: "", lmMoment: "", lmCg: "",
    interactiveZfmPoint: null, interactiveTomPoint: null, interactiveClickPoint: null,
  },
  2: {
    pilotsMoment: "", paxMoment: "", baggageMoment: "", zfmMass: "", zfmCg: "", zfmMoment: "",
    fuelMass: "", fuelMoment: "", tomMass: "", tomMoment: "", tomCg: "",
    tripFuelMassInput: "", tripFuelMoment: "", lmMass: "", lmMoment: "", lmCg: "",
    interactiveZfmPoint: null, interactiveTomPoint: null, interactiveClickPoint: null,
  },
};

export function PreflightLoadsheetWidget({
  mode = "all",
  onExerciseCompleted,
  isAlreadyCompleted = false,
}: Props) {
  const [selectedMissionIndex, setSelectedMissionIndex] = useState(0); // Starts on Mission 1 (Solved Example)
  const mission = PREFLIGHT_MISSIONS[selectedMissionIndex];

  // If in "all" mode, activeTab controls which sub-step is visible
  const [activeTab, setActiveTab] = useState<"takeoff" | "landing">(
    mode === "landing" ? "landing" : "takeoff"
  );
  const currentStep = mode === "all" ? activeTab : mode;

  // Mission store preserving user work across tab switches
  const [missionStore, setMissionStore] = useState<Record<number, LoadsheetMissionInputs>>(INITIAL_LOADSHEET_STORE);
  const [solvedMissions, setSolvedMissions] = useState<Record<number, boolean>>({});

  // Active inputs: M1 starts prefilled as the solved example
  const [pilotsMoment, setPilotsMoment] = useState("147.58");
  const [paxMoment, setPaxMoment] = useState("0");
  const [baggageMoment, setBaggageMoment] = useState("12.07");

  const [zfmMass, setZfmMass] = useState("917.44");
  const [zfmCg, setZfmCg] = useState("1.032");
  const [zfmMoment, setZfmMoment] = useState("946.88");

  const [fuelMass, setFuelMass] = useState("67.20");
  const [fuelMoment, setFuelMoment] = useState("78.49");

  const [tomMass, setTomMass] = useState("984.64");
  const [tomMoment, setTomMoment] = useState("1025.37");
  const [tomCg, setTomCg] = useState("1.041");

  const [tripFuelMassInput, setTripFuelMassInput] = useState("12.85");
  const [tripFuelMoment, setTripFuelMoment] = useState("15.01");

  const [lmMass, setLmMass] = useState("971.79");
  const [lmMoment, setLmMoment] = useState("1010.36");
  const [lmCg, setLmCg] = useState("1.040");

  // Validation feedback state
  const [attempts, setAttempts] = useState(0);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [warnings, setWarnings] = useState<string[]>([]);
  const [passedTakeoff, setPassedTakeoff] = useState(false);
  const [passedLanding, setPassedLanding] = useState(false);
  const isStepPassed = currentStep === "takeoff" ? passedTakeoff : passedLanding;

  // Interactive points: In 6.5 both ZFM and TOW are placed; in 6.6 LW is placed
  const [interactiveZfmPoint, setInteractiveZfmPoint] = useState<{ x: number; y: number } | null>(M1_ZFM_POINT);
  const [interactiveTomPoint, setInteractiveTomPoint] = useState<{ x: number; y: number } | null>(M1_TOM_POINT);
  const [interactiveClickPoint, setInteractiveClickPoint] = useState<{ x: number; y: number } | null>(M1_LM_POINT);
  const [activePlotPoint, setActivePlotPoint] = useState<"zfm" | "tom">("zfm");

  const [hoverPoint, setHoverPoint] = useState<{ x: number; y: number } | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const [pointAttempts, setPointAttempts] = useState(0);
  const [showTargetHint, setShowTargetHint] = useState(false);

  const isDraggingRef = useRef(false);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const panStartRef = useRef({ x: 0, y: 0 });
  const hasMovedRef = useRef(false);
  const viewportRef = useRef<HTMLDivElement | null>(null);

  const zoomIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const zoomTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isRepeatingRef = useRef(false);

  const clampPan = (newX: number, newY: number, zoom: number) => {
    if (zoom <= 1) return { x: 0, y: 0 };
    const vp = viewportRef.current;
    const w = vp ? vp.clientWidth : 610;
    const h = vp ? vp.clientHeight : 477;
    const maxPanX = Math.max(0, ((zoom - 1) * w) / 2 + 100);
    const maxPanY = Math.max(0, ((zoom - 1) * h) / 2 + 100);
    return {
      x: Math.max(-maxPanX, Math.min(maxPanX, newX)),
      y: Math.max(-maxPanY, Math.min(maxPanY, newY)),
    };
  };

  const startZoomHold = (delta: number) => {
    isRepeatingRef.current = false;
    if (zoomTimeoutRef.current) clearTimeout(zoomTimeoutRef.current);
    if (zoomIntervalRef.current) clearInterval(zoomIntervalRef.current);
    zoomTimeoutRef.current = setTimeout(() => {
      isRepeatingRef.current = true;
      zoomIntervalRef.current = setInterval(() => {
        setZoomLevel((z) => {
          const next = Math.min(2.5, Math.max(1, Math.round((z + delta) * 100) / 100));
          if (next <= 1) setPanOffset({ x: 0, y: 0 });
          return next;
        });
      }, 40);
    }, 240);
  };

  const stopZoomHold = () => {
    if (zoomTimeoutRef.current) clearTimeout(zoomTimeoutRef.current);
    if (zoomIntervalRef.current) clearInterval(zoomIntervalRef.current);
    setTimeout(() => {
      isRepeatingRef.current = false;
    }, 50);
  };

  const handleZoomStep = (delta: number) => {
    if (isRepeatingRef.current) return;
    setZoomLevel((z) => {
      const next = Math.min(2.5, Math.max(1, Math.round((z + delta) * 100) / 100));
      if (next <= 1) setPanOffset({ x: 0, y: 0 });
      return next;
    });
  };

  useEffect(() => {
    return () => {
      if (zoomTimeoutRef.current) clearTimeout(zoomTimeoutRef.current);
      if (zoomIntervalRef.current) clearInterval(zoomIntervalRef.current);
    };
  }, []);

  // Load mission initial scenario values
  const loadMissionScenario = (m: PreflightMission, idx: number) => {
    // 1. Guardar estado de la misión que dejamos
    setMissionStore((prev) => ({
      ...prev,
      [selectedMissionIndex]: {
        pilotsMoment,
        paxMoment,
        baggageMoment,
        zfmMass,
        zfmCg,
        zfmMoment,
        fuelMass,
        fuelMoment,
        tomMass,
        tomMoment,
        tomCg,
        tripFuelMassInput,
        tripFuelMoment,
        lmMass,
        lmMoment,
        lmCg,
        interactiveZfmPoint,
        interactiveTomPoint,
        interactiveClickPoint,
      },
    }));

    // 2. Cargar estado de la misión seleccionada
    const nextData = idx === 0 ? INITIAL_LOADSHEET_STORE[0] : (missionStore[idx] || INITIAL_LOADSHEET_STORE[idx]);
    setSelectedMissionIndex(idx);
    setPilotsMoment(nextData.pilotsMoment);
    setPaxMoment(nextData.paxMoment);
    setBaggageMoment(nextData.baggageMoment);
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
    const zCg = Math.round((zMom / zMass) * 1000) / 1000;

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
      zfmCg: zCg,
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
    // If student is on M1 (Example), validate is not needed; guide to M2
    if (selectedMissionIndex === 0) {
      loadMissionScenario(PREFLIGHT_MISSIONS[1], 1);
      return;
    }

    const newErrors: Record<string, string> = {};
    const newWarnings: string[] = [];
    const num = (val: string) => parseFloat(val.replace(",", "."));

    if (currentStep === "takeoff") {
      // 0. Comprobación obligatoria: debe haber situado ZFM y TOW
      if (!interactiveZfmPoint) {
        newErrors.envelopePoint = "Es obligatorio situar tu punto ZFM estimado en la envolvente antes de comprobar.";
      } else if (!interactiveTomPoint) {
        newErrors.envelopePoint = "Es obligatorio situar tu punto TOW estimado en la envolvente antes de comprobar.";
      }

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

      // 4. ZFM Mass, Moment & CG
      const userZfmMass = num(zfmMass);
      const userZfmMom = num(zfmMoment);
      const userZfmCg = num(zfmCg);
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
      if (isNaN(userZfmCg) || !checkValueTolerance(userZfmCg, expected.zfmCg, 0.008, 0.005).isOk) {
        newErrors.zfmCg =
          attempts >= 2
            ? `Solución: CG ZFM = ${expected.zfmMoment} / ${expected.zfmMass} = ${expected.zfmCg} m`
            : "CG ZFM = Momento ZFM / Masa ZFM";
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

      // 7. Comprobar que los puntos ZFM y TOW situados en la envolvente coinciden razonablemente
      if (interactiveZfmPoint && interactiveTomPoint) {
        const zEst = mapSvgCoordsToCg(interactiveZfmPoint.x, interactiveZfmPoint.y);
        const zMassDiff = Math.abs(zEst.massKg - expected.zfmMass);
        const zCgDiff = Math.abs(zEst.cgM - expected.zfmCg);

        const tEst = mapSvgCoordsToCg(interactiveTomPoint.x, interactiveTomPoint.y);
        const tMassDiff = Math.abs(tEst.massKg - expected.tomMass);
        const tCgDiff = Math.abs(tEst.cgM - expected.tomCg);

        const isZfmOff = zMassDiff > 25 || zCgDiff > 0.02;
        const isTomOff = tMassDiff > 25 || tCgDiff > 0.02;

        if (isZfmOff || isTomOff) {
          const nextPointAttempts = pointAttempts + 1;
          setPointAttempts(nextPointAttempts);
          if (nextPointAttempts < 3) {
            if (isZfmOff && isTomOff) {
              newErrors.envelopePoint = `Tus puntos ZFM y TOW están lejos de los valores calculados. Revisa la cuadrícula y colócalos correctamente (Intento ${nextPointAttempts}/3).`;
            } else if (isZfmOff) {
              newErrors.envelopePoint = `El punto ZFM situado está lejos del valor calculado (~${Math.round(zMassDiff)} kg / ${(zCgDiff * 1000).toFixed(0)} mm CG). Revisa y recolócalo (Intento ${nextPointAttempts}/3).`;
            } else {
              newErrors.envelopePoint = `El punto TOW situado está lejos del valor calculado (~${Math.round(tMassDiff)} kg / ${(tCgDiff * 1000).toFixed(0)} mm CG). Revisa y recolócalo (Intento ${nextPointAttempts}/3).`;
            }
          } else {
            setShowTargetHint(true);
            newErrors.envelopePoint = "Se han revelado las posiciones exactas de ZFM y TOW en la gráfica. Haz clic sobre los puntos calculados para colocarlos correctamente y verificar.";
          }
        }
      }
    } else {
      // LANDING STEP
      // 0. Comprobación obligatoria LW
      if (!interactiveClickPoint) {
        newErrors.envelopePoint = "Es obligatorio situar tu punto LW estimado en la envolvente gráfica antes de comprobar.";
      }

      // 1. Trip Fuel Mass & Moment
      const userTripMass = Math.abs(num(tripFuelMassInput));
      if (isNaN(userTripMass) || !checkValueTolerance(userTripMass, expected.tripFuelMass, 0.02, 0.5).isOk) {
        newErrors.tripFuelMass =
          attempts >= 2
            ? `Solución: ${expected.tripFuelLiters} L × 0.84 = ${expected.tripFuelMass} kg`
            : "Multiplica los litros de consumo por la densidad Jet-A1 (0.84 kg/L)";
      }

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

      // Comprobar que el punto situado en la envolvente coincide razonablemente con el LW
      if (interactiveClickPoint) {
        const est = mapSvgCoordsToCg(interactiveClickPoint.x, interactiveClickPoint.y);
        const massDiff = Math.abs(est.massKg - expected.lmMass);
        const cgDiff = Math.abs(est.cgM - expected.lmCg);
        if (massDiff > 25 || cgDiff > 0.02) {
          const nextPointAttempts = pointAttempts + 1;
          setPointAttempts(nextPointAttempts);
          if (nextPointAttempts < 3) {
            newErrors.envelopePoint = `El punto LW situado está lejos del valor calculado (~${Math.round(massDiff)} kg / ${(cgDiff * 1000).toFixed(0)} mm CG). Revisa la cuadrícula y colócalo correctamente (Intento ${nextPointAttempts}/3).`;
          } else {
            setShowTargetHint(true);
            newErrors.envelopePoint = "Se ha revelado la posición exacta calculada en la gráfica. Haz clic sobre el punto verde (LW CALCULADO) para colocarlo correctamente y verificar.";
          }
        }
      }
    }

    setErrors(newErrors);
    setWarnings(newWarnings);

    if (Object.keys(newErrors).length === 0) {
      if (currentStep === "takeoff") {
        setPassedTakeoff(true);
      } else {
        setPassedLanding(true);
      }
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

  const solvedPracticeCount = (solvedMissions[1] ? 1 : 0) + (solvedMissions[2] ? 1 : 0);
  const isAllPracticeCompleted = solvedPracticeCount === 2 || isAlreadyCompleted;

  // SVG coordinates for ZFM, TOW and LW
  const zfmCoords = useMemo(() => {
    return mapCgToSvgCoords(expected.zfmMass, expected.zfmCg);
  }, [expected]);

  const tomCoords = useMemo(() => {
    return mapCgToSvgCoords(expected.tomMass, expected.tomCg);
  }, [expected]);

  const lmCoords = useMemo(() => {
    return mapCgToSvgCoords(expected.lmMass, expected.lmCg);
  }, [expected]);

  const isTomNormal = isCgInsideNormal(expected.tomMass, expected.tomCg);
  const isTomUtility = isCgInsideUtility(expected.tomMass, expected.tomCg);
  const isLmNormal = isCgInsideNormal(expected.lmMass, expected.lmCg);

  // Mapped estimated values from student interactive clicks and hover cursor
  const studentZfmEstimated = useMemo(() => {
    if (!interactiveZfmPoint) return null;
    return mapSvgCoordsToCg(interactiveZfmPoint.x, interactiveZfmPoint.y);
  }, [interactiveZfmPoint]);

  const studentTomEstimated = useMemo(() => {
    if (!interactiveTomPoint) return null;
    return mapSvgCoordsToCg(interactiveTomPoint.x, interactiveTomPoint.y);
  }, [interactiveTomPoint]);

  const studentEstimated = useMemo(() => {
    if (!interactiveClickPoint) return null;
    return mapSvgCoordsToCg(interactiveClickPoint.x, interactiveClickPoint.y);
  }, [interactiveClickPoint]);

  const hoverData = useMemo(() => {
    if (!hoverPoint) return null;
    return mapSvgCoordsToCg(hoverPoint.x, hoverPoint.y);
  }, [hoverPoint]);

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
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-xs sm:text-[13px] text-slate-500 font-medium">
                  {mission.name} · Crucero al 50% Potencia ({mission.scenario.flightTimeHrs} h)
                </span>
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
                      setActivePlotPoint("zfm");
                      setHoverPoint(null);
                      setPointAttempts(0);
                      setShowTargetHint(false);
                      setPanOffset({ x: 0, y: 0 });
                      setZoomLevel(1);
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
                      setActivePlotPoint("zfm");
                      setHoverPoint(null);
                      setPointAttempts(0);
                      setShowTargetHint(false);
                      setPanOffset({ x: 0, y: 0 });
                      setZoomLevel(1);
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

              <button
                type="button"
                onClick={() => loadMissionScenario(PREFLIGHT_MISSIONS[0], 0)}
                className={`px-2.5 py-1 rounded-lg text-xs sm:text-[12px] font-extrabold transition-all cursor-pointer flex items-center gap-1 ${
                  selectedMissionIndex === 0
                    ? "bg-emerald-600 text-white shadow-2xs"
                    : "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700 hover:bg-emerald-100"
                }`}
                title="Misión 1: Ejemplo guiado resuelto"
              >
                <span>M1</span>
              </button>
              {[1, 2].map((idx) => {
                const isSolved = Boolean(solvedMissions[idx]);
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => loadMissionScenario(PREFLIGHT_MISSIONS[idx], idx)}
                    className={`px-2.5 py-1 rounded-lg text-xs sm:text-[12px] font-extrabold transition-all cursor-pointer flex items-center gap-1 ${
                      selectedMissionIndex === idx
                        ? "bg-[#1a80ff] text-white shadow-2xs"
                        : isSolved
                          ? "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700"
                          : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    <span>M{idx + 1}</span>
                    <span>{isSolved ? "✓" : "⏳"}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Table Container - Aligned to top, standard typography (text-xs sm:text-[13px]), zero outer scroll */}
          <div className="flex-1 min-h-0 my-1 overflow-hidden flex flex-col justify-start pt-1">

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
                        disabled={selectedMissionIndex === 0}
                        onChange={(e) => setPilotsMoment(e.target.value)}
                        className={`w-28 text-right px-2 py-0.5 rounded border font-mono text-xs sm:text-[13px] ${
                          selectedMissionIndex === 0
                            ? "bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 font-bold"
                            : errors.pilotsMoment
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
                        disabled={selectedMissionIndex === 0 || expected.paxMass === 0}
                        placeholder={expected.paxMass === 0 ? "0" : "Momento"}
                        value={expected.paxMass === 0 ? "0" : paxMoment}
                        onChange={(e) => setPaxMoment(e.target.value)}
                        className={`w-28 text-right px-2 py-0.5 rounded border font-mono text-xs sm:text-[13px] ${
                          selectedMissionIndex === 0
                            ? "bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 font-bold"
                            : errors.paxMoment
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
                        disabled={selectedMissionIndex === 0}
                        onChange={(e) => setBaggageMoment(e.target.value)}
                        className={`w-28 text-right px-2 py-0.5 rounded border font-mono text-xs sm:text-[13px] ${
                          selectedMissionIndex === 0
                            ? "bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 font-bold"
                            : errors.baggageMoment
                              ? "border-rose-500 bg-rose-50 text-rose-700"
                              : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                        }`}
                      />
                    </td>
                  </tr>

                  {/* ZERO FUEL MASS (ZFM & CG) */}
                  <tr className="bg-sky-50/60 dark:bg-sky-950/30 font-bold text-[#0B2E59] dark:text-sky-300">
                    <td className="py-1.5 px-2 uppercase text-xs sm:text-[13px]">ZERO FUEL MASS (ZFM & CG)</td>
                    <td className="py-1.5 px-2 text-right">
                      <input
                        type="text"
                        placeholder="Suma Masa"
                        value={zfmMass}
                        disabled={selectedMissionIndex === 0}
                        onChange={(e) => setZfmMass(e.target.value)}
                        className={`w-28 text-right px-2 py-0.5 rounded border font-mono text-xs sm:text-[13px] ${
                          selectedMissionIndex === 0
                            ? "bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 font-bold"
                            : errors.zfmMass
                              ? "border-rose-500 bg-rose-50 text-rose-700"
                              : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                        }`}
                      />
                    </td>
                    <td className="py-1.5 px-2 text-right">
                      <input
                        type="text"
                        placeholder="CG (m)"
                        value={zfmCg}
                        disabled={selectedMissionIndex === 0}
                        onChange={(e) => setZfmCg(e.target.value)}
                        className={`w-20 text-right px-1.5 py-0.5 rounded border font-mono text-xs sm:text-[13px] font-bold ${
                          selectedMissionIndex === 0
                            ? "bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 font-bold"
                            : errors.zfmCg
                              ? "border-rose-500 bg-rose-50 text-rose-700"
                              : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                        }`}
                      />
                    </td>
                    <td className="py-1.5 px-2 text-right">
                      <input
                        type="text"
                        placeholder="Suma Momento"
                        value={zfmMoment}
                        disabled={selectedMissionIndex === 0}
                        onChange={(e) => setZfmMoment(e.target.value)}
                        className={`w-28 text-right px-2 py-0.5 rounded border font-mono text-xs sm:text-[13px] ${
                          selectedMissionIndex === 0
                            ? "bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 font-bold"
                            : errors.zfmMoment
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
                        disabled={selectedMissionIndex === 0}
                        onChange={(e) => setFuelMass(e.target.value)}
                        className={`w-28 text-right px-2 py-0.5 rounded border font-mono text-xs sm:text-[13px] ${
                          selectedMissionIndex === 0
                            ? "bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 font-bold"
                            : errors.fuelMass
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
                        disabled={selectedMissionIndex === 0}
                        onChange={(e) => setFuelMoment(e.target.value)}
                        className={`w-28 text-right px-2 py-0.5 rounded border font-mono text-xs sm:text-[13px] ${
                          selectedMissionIndex === 0
                            ? "bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 font-bold"
                            : errors.fuelMoment
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
                        disabled={selectedMissionIndex === 0}
                        onChange={(e) => setTomMass(e.target.value)}
                        className={`w-28 text-right px-2 py-0.5 rounded border font-mono text-xs sm:text-[13px] font-bold ${
                          selectedMissionIndex === 0
                            ? "bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 font-bold"
                            : errors.tomMass
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
                        disabled={selectedMissionIndex === 0}
                        onChange={(e) => setTomCg(e.target.value)}
                        className={`w-20 text-right px-1.5 py-0.5 rounded border font-mono text-xs sm:text-[13px] font-bold ${
                          selectedMissionIndex === 0
                            ? "bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 font-bold"
                            : errors.tomCg
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
                        disabled={selectedMissionIndex === 0}
                        onChange={(e) => setTomMoment(e.target.value)}
                        className={`w-28 text-right px-2 py-0.5 rounded border font-mono text-xs sm:text-[13px] font-bold ${
                          selectedMissionIndex === 0
                            ? "bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 font-bold"
                            : errors.tomMoment
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
                <div className="p-2.5 rounded-xl bg-sky-50/70 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800 text-xs sm:text-[13px] flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2.5">
                    <span className="text-purple-900 dark:text-purple-300 font-semibold">
                      ZFW (de 6.5): <strong>{expected.zfmMass} kg</strong> · CG: <strong>{expected.zfmCg} m</strong>
                    </span>
                    <span className="text-slate-300 dark:text-slate-600 font-bold">|</span>
                    <span className="font-semibold text-sky-900 dark:text-sky-200">
                      Condición TOW: <strong>{expected.tomMass} kg</strong> · CG: <strong>{expected.tomCg} m</strong>
                    </span>
                  </div>
                  <span className="text-xs sm:text-[13px] text-sky-700 dark:text-sky-300 font-mono">
                    Momento TOM: {expected.tomMoment} kg·m
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
                      <td className="py-2 px-2 text-right">
                        <input
                          type="text"
                          placeholder="-Kg (L × 0.84)"
                          value={tripFuelMassInput}
                          disabled={selectedMissionIndex === 0}
                          onChange={(e) => setTripFuelMassInput(e.target.value)}
                          className={`w-28 text-right px-2 py-0.5 rounded border font-mono text-xs sm:text-[13px] font-bold ${
                            selectedMissionIndex === 0
                              ? "bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200"
                              : errors.tripFuelMass
                                ? "border-rose-500 bg-rose-50 text-rose-700"
                                : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-amber-700 dark:text-amber-400"
                          }`}
                        />
                      </td>
                      <td className="py-2 px-2 text-right font-mono text-slate-500">1,168</td>
                      <td className="py-2 px-2 text-right">
                        <input
                          type="text"
                          placeholder="Ej: 15.01"
                          value={tripFuelMoment}
                          disabled={selectedMissionIndex === 0}
                          onChange={(e) => setTripFuelMoment(e.target.value)}
                          className={`w-28 text-right px-2 py-0.5 rounded border font-mono text-xs sm:text-[13px] ${
                            selectedMissionIndex === 0
                              ? "bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 font-bold"
                              : errors.tripFuelMoment
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
                          disabled={selectedMissionIndex === 0}
                          onChange={(e) => setLmMass(e.target.value)}
                          className={`w-28 text-right px-2 py-0.5 rounded border font-mono text-xs sm:text-[13px] font-bold ${
                            selectedMissionIndex === 0
                              ? "bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200"
                              : errors.lmMass
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
                          disabled={selectedMissionIndex === 0}
                          onChange={(e) => setLmCg(e.target.value)}
                          className={`w-20 text-right px-1.5 py-0.5 rounded border font-mono text-xs sm:text-[13px] font-bold ${
                            selectedMissionIndex === 0
                              ? "bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200"
                              : errors.lmCg
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
                          disabled={selectedMissionIndex === 0}
                          onChange={(e) => setLmMoment(e.target.value)}
                          className={`w-28 text-right px-2 py-0.5 rounded border font-mono text-xs sm:text-[13px] font-bold ${
                            selectedMissionIndex === 0
                              ? "bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200"
                              : errors.lmMoment
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
          <div className="pt-1.5 border-t border-slate-200 dark:border-slate-800 shrink-0 space-y-1.5">
            {/* Aviso de punto obligatorio en la envolvente (pasado a la izquierda para dar máximo espacio a la gráfica) */}
            {!isStepPassed && selectedMissionIndex !== 0 && (
              <div
                className={`flex items-center justify-between px-3 py-1.5 rounded-xl border text-xs sm:text-[13px] ${
                  errors.envelopePoint
                    ? "bg-rose-50/90 dark:bg-rose-950/40 border-rose-300 dark:border-rose-800 text-rose-900 dark:text-rose-200"
                    : (currentStep === "takeoff" ? (interactiveZfmPoint && interactiveTomPoint) : studentEstimated)
                    ? "bg-sky-50/80 dark:bg-sky-950/30 border-sky-200 dark:border-sky-800 text-sky-950 dark:text-sky-200"
                    : "bg-amber-50/80 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800 text-amber-950 dark:text-amber-200"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-base">{errors.envelopePoint ? "⚠️" : "📍"}</span>
                  <span>
                    {errors.envelopePoint ? (
                      <strong>{errors.envelopePoint}</strong>
                    ) : currentStep === "takeoff" ? (
                      interactiveZfmPoint && interactiveTomPoint ? (
                        <>
                          Has situado <strong>ZFM (~{studentZfmEstimated?.massKg} kg · {studentZfmEstimated?.cgM.toFixed(3)} m)</strong> y <strong>TOW (~{studentTomEstimated?.massKg} kg · {studentTomEstimated?.cgM.toFixed(3)} m)</strong>.
                        </>
                      ) : !interactiveZfmPoint ? (
                        <>
                          <strong className="text-amber-800 dark:text-amber-300">Paso 1:</strong> Haz clic en la gráfica para situar tu punto <strong>ZFM estimado</strong>.
                        </>
                      ) : (
                        <>
                          <strong className="text-amber-800 dark:text-amber-300">Paso 2:</strong> Haz clic en la gráfica para situar tu punto <strong>TOW estimado</strong>.
                        </>
                      )
                    ) : studentEstimated ? (
                      <>
                        Has situado tu marca en <strong>~{studentEstimated.massKg} kg</strong> · CG <strong>{studentEstimated.cgM.toFixed(3)} m</strong>.
                      </>
                    ) : (
                      <>
                        <strong className="text-amber-800 dark:text-amber-300">Obligatorio:</strong> Haz clic en la gráfica para situar tu punto <strong>LW estimado</strong> antes de comprobar.
                      </>
                    )}
                  </span>
                </div>
                <span
                  className={`text-xs font-bold shrink-0 ${
                    errors.envelopePoint
                      ? "text-rose-600 dark:text-rose-400"
                      : (currentStep === "takeoff" ? (interactiveZfmPoint && interactiveTomPoint) : studentEstimated)
                      ? "text-sky-700 dark:text-sky-400"
                      : "text-amber-700 dark:text-amber-400"
                  }`}
                >
                  {errors.envelopePoint
                    ? "Revisar marca"
                    : (currentStep === "takeoff" ? (interactiveZfmPoint && interactiveTomPoint) : studentEstimated)
                    ? "Puntos fijados"
                    : "Obligatorio"}
                </span>
              </div>
            )}

            <div className="flex items-center justify-between">
              <span className="text-xs sm:text-[13px] text-slate-500 italic">
                * Densidad Jet A-1 = 0,84 kg/L · Brazo Fuel = 1,168 m · MTOM = 1.043 kg
              </span>

              {selectedMissionIndex === 0 ? (
                <button
                  type="button"
                  onClick={() => loadMissionScenario(PREFLIGHT_MISSIONS[1], 1)}
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs sm:text-[13px] shadow-xs transition-all cursor-pointer hover:scale-105 active:scale-95 flex items-center gap-1.5"
                >
                  <span>Ejemplo Resuelto · Pulsa aquí para ir a M2</span>
                  <span>➔</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleValidate}
                  className="px-4 py-2 rounded-xl bg-[#1a80ff] hover:bg-[#0066e6] text-white font-extrabold text-xs sm:text-[13px] shadow-xs transition-all cursor-pointer hover:scale-105 active:scale-95"
                >
                  {currentStep === "takeoff"
                    ? "Comprobar Despegue y Graficar TOW ➔"
                    : "Comprobar Aterrizaje ➔"}
                </button>
              )}
            </div>

            {/* Error alerts (except envelopePoint which is displayed above) */}
            {Object.keys(errors).length > 0 && !errors.envelopePoint && (
              <div className="p-2 rounded-lg border border-rose-200 dark:border-rose-800 bg-rose-50/90 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200 text-xs sm:text-[13px] flex items-center justify-between">
                <span>⚠️ {Object.values(errors)[0]}</span>
                <span className="font-bold text-xs text-rose-600">Intento {attempts}</span>
              </div>
            )}
            {Object.keys(errors).length > 1 && errors.envelopePoint && (
              <div className="p-2 rounded-lg border border-rose-200 dark:border-rose-800 bg-rose-50/90 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200 text-xs sm:text-[13px] flex items-center justify-between">
                <span>⚠️ {Object.values(errors).find(e => e !== errors.envelopePoint)}</span>
                <span className="font-bold text-xs text-rose-600">Intento {attempts}</span>
              </div>
            )}

            {isAllPracticeCompleted && (
              <div className="p-2 rounded-lg border border-emerald-300 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 text-xs sm:text-[13px]">
                <strong className="font-bold">🎉 ¡ENHORABUENA! HAS COMPLETADO LOS EJERCICIOS M2 Y M3</strong>
                <p className="text-xs mt-0.5">
                  Has validado correctamente los cálculos y la envolvente. Ya puedes pulsar en <strong>Siguiente Diapositiva</strong> para continuar.
                </p>
              </div>
            )}

            {!isAllPracticeCompleted && solvedMissions[selectedMissionIndex] && selectedMissionIndex === 1 && (
              <div className="p-2 rounded-lg border border-sky-300 dark:border-sky-800 bg-sky-50 dark:bg-sky-950/40 text-sky-900 dark:text-sky-200 text-xs flex items-center justify-between gap-2">
                <div>
                  <strong className="font-bold">✓ ¡Misión M2 completada!</strong>
                  <p className="text-[11px] text-sky-800 dark:text-sky-300">Te queda la Misión M3 para desbloquear el avance.</p>
                </div>
                <button
                  type="button"
                  onClick={() => loadMissionScenario(PREFLIGHT_MISSIONS[2], 2)}
                  className="px-3 py-1.5 rounded-lg bg-[#1a80ff] hover:bg-[#0066e6] text-white font-bold text-xs shrink-0 cursor-pointer transition hover:scale-105"
                >
                  Ir a M3 ➔
                </button>
              </div>
            )}

            {isStepPassed && !isAllPracticeCompleted && !solvedMissions[selectedMissionIndex] && (
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
          {/* Header limpio original sin desbordamientos */}
          <div className="flex items-center justify-between pb-1.5 border-b border-slate-200 dark:border-slate-800 shrink-0">
            <span className="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs whitespace-nowrap">
              📈 ENVOLVENTE (FIG. 6-8)
            </span>
            {currentStep === "takeoff" ? (
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => setActivePlotPoint("zfm")}
                  className={`px-2 py-0.5 rounded-lg text-[11px] sm:text-xs font-bold transition-all cursor-pointer ${
                    activePlotPoint === "zfm"
                      ? "bg-purple-600 text-white shadow-xs"
                      : "bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300"
                  }`}
                >
                  📍 1. Situar ZFM {interactiveZfmPoint ? "✓" : ""}
                </button>
                <button
                  type="button"
                  onClick={() => setActivePlotPoint("tom")}
                  className={`px-2 py-0.5 rounded-lg text-[11px] sm:text-xs font-bold transition-all cursor-pointer ${
                    activePlotPoint === "tom"
                      ? "bg-amber-500 text-white shadow-xs"
                      : "bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300"
                  }`}
                >
                  📍 2. Situar TOW {interactiveTomPoint ? "✓" : ""}
                </button>
              </div>
            ) : (
              <span className="text-xs sm:text-[13px] font-semibold text-slate-500">
                Trayectoria TOW → LW
              </span>
            )}
          </div>

          {/* SVG Envelope Display con Proporción Inicial Original Completa y Zoom Expandible */}
          <div className="flex-1 min-h-0 w-full flex items-center justify-center my-auto py-0.5 relative">
            {/* Controles de Zoom Flotantes (+ / - en saltos de 1% sin desbordamiento) */}
            <div className="absolute top-2 right-2 z-20 flex items-center gap-1.5 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xs px-2 py-1 rounded-xl border border-slate-300 dark:border-slate-700 shadow-md">
              <button
                type="button"
                onMouseDown={() => startZoomHold(-0.01)}
                onMouseUp={stopZoomHold}
                onMouseLeave={stopZoomHold}
                onTouchStart={() => startZoomHold(-0.01)}
                onTouchEnd={stopZoomHold}
                onClick={() => handleZoomStep(-0.01)}
                disabled={zoomLevel <= 1}
                className="w-6 h-6 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 font-extrabold text-sm hover:bg-slate-200 dark:hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer leading-none select-none"
                title="Reducir 1% (-)"
              >
                −
              </button>
              <button
                type="button"
                onClick={() => {
                  setZoomLevel(1);
                  setPanOffset({ x: 0, y: 0 });
                }}
                disabled={zoomLevel <= 1}
                className="text-[11px] font-mono font-bold text-slate-800 dark:text-slate-100 px-1 min-w-[38px] text-center select-none hover:text-[#1a80ff] transition-colors disabled:cursor-default"
                title={zoomLevel > 1 ? "Clic para restablecer al 100%" : undefined}
              >
                {Math.round(zoomLevel * 100)}%
              </button>
              <button
                type="button"
                onMouseDown={() => startZoomHold(0.01)}
                onMouseUp={stopZoomHold}
                onMouseLeave={stopZoomHold}
                onTouchStart={() => startZoomHold(0.01)}
                onTouchEnd={stopZoomHold}
                onClick={() => handleZoomStep(0.01)}
                disabled={zoomLevel >= 2.5}
                className="w-6 h-6 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 font-extrabold text-sm hover:bg-slate-200 dark:hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer leading-none select-none"
                title="Ampliar 1% (+)"
              >
                +
              </button>
            </div>

            {/* Viewport de la Envolvente: desplazamiento 2D (pan/drag) y zoom suave sin límites */}
            <div
              ref={viewportRef}
              onWheel={(e) => {
                if (zoomLevel > 1) {
                  setPanOffset((prev) => clampPan(prev.x - e.deltaX * 0.7, prev.y - e.deltaY * 0.7, zoomLevel));
                }
              }}
              className="w-full h-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 shadow-2xs overflow-hidden flex p-1 relative select-none"
            >
              <div
                className="relative aspect-[1140/880] h-full max-h-full max-w-full m-auto shrink-0 select-none"
                style={{
                  height: "100%",
                  width: "auto",
                  transform: `translate(${panOffset.x}px, ${panOffset.y}px) scale(${zoomLevel})`,
                  transformOrigin: "center center",
                  transition: isPanning ? "none" : "transform 100ms ease-out",
                }}
              >
                <img
                  src="/images/c172/figure_6_8_center_of_gravity_limits_modificado.svg"
                  alt="Center of Gravity Limits SVG"
                  className="w-full h-full object-contain pointer-events-none select-none"
                />

              <svg
                viewBox="0 0 1140 880"
                className={`absolute inset-0 w-full h-full select-none ${
                  isPanning ? "cursor-grabbing" : zoomLevel > 1 ? "cursor-grab" : "cursor-crosshair"
                }`}
                onMouseDown={(e) => {
                  if (e.button !== 0) return;
                  isDraggingRef.current = true;
                  hasMovedRef.current = false;
                  dragStartRef.current = { x: e.clientX, y: e.clientY };
                  panStartRef.current = { ...panOffset };
                }}
                onMouseMove={(e) => {
                  if (isDraggingRef.current && zoomLevel > 1) {
                    const dx = e.clientX - dragStartRef.current.x;
                    const dy = e.clientY - dragStartRef.current.y;
                    if (Math.hypot(dx, dy) > 4) {
                      hasMovedRef.current = true;
                      setIsPanning(true);
                      setPanOffset(clampPan(panStartRef.current.x + dx, panStartRef.current.y + dy, zoomLevel));
                    }
                  }

                  const rect = e.currentTarget.getBoundingClientRect();
                  const clickX = ((e.clientX - rect.left) / rect.width) * 1140;
                  const clickY = ((e.clientY - rect.top) / rect.height) * 880;
                  if (clickX >= 130 && clickX <= 1015 && clickY >= 120 && clickY <= 695) {
                    setHoverPoint({ x: clickX, y: clickY });
                  } else {
                    setHoverPoint(null);
                  }
                }}
                onMouseUp={(e) => {
                  const wasDragging = hasMovedRef.current;
                  isDraggingRef.current = false;
                  hasMovedRef.current = false;
                  setIsPanning(false);

                  if (wasDragging || selectedMissionIndex === 0) return;

                  const rect = e.currentTarget.getBoundingClientRect();
                  const clickX = ((e.clientX - rect.left) / rect.width) * 1140;
                  const clickY = ((e.clientY - rect.top) / rect.height) * 880;
                  if (clickX >= 130 && clickX <= 1015 && clickY >= 120 && clickY <= 695) {
                    if (currentStep === "takeoff") {
                      if (activePlotPoint === "zfm") {
                        setInteractiveZfmPoint({ x: clickX, y: clickY });
                        if (!interactiveTomPoint) {
                          setActivePlotPoint("tom");
                        }
                      } else {
                        setInteractiveTomPoint({ x: clickX, y: clickY });
                      }
                    } else {
                      setInteractiveClickPoint({ x: clickX, y: clickY });
                    }
                    setErrors((prev) => {
                      if (!prev.envelopePoint) return prev;
                      const next = { ...prev };
                      delete next.envelopePoint;
                      return next;
                    });
                  }
                }}
                onMouseLeave={() => {
                  isDraggingRef.current = false;
                  hasMovedRef.current = false;
                  setIsPanning(false);
                  setHoverPoint(null);
                }}
                onTouchStart={(e) => {
                  if (e.touches.length === 1) {
                    isDraggingRef.current = true;
                    hasMovedRef.current = false;
                    dragStartRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
                    panStartRef.current = { ...panOffset };
                  }
                }}
                onTouchMove={(e) => {
                  if (isDraggingRef.current && zoomLevel > 1 && e.touches.length === 1) {
                    const dx = e.touches[0].clientX - dragStartRef.current.x;
                    const dy = e.touches[0].clientY - dragStartRef.current.y;
                    if (Math.hypot(dx, dy) > 4) {
                      hasMovedRef.current = true;
                      setIsPanning(true);
                      setPanOffset(clampPan(panStartRef.current.x + dx, panStartRef.current.y + dy, zoomLevel));
                    }
                  }
                }}
                onTouchEnd={(e) => {
                  const wasDragging = hasMovedRef.current;
                  isDraggingRef.current = false;
                  hasMovedRef.current = false;
                  setIsPanning(false);

                  if (wasDragging || e.changedTouches.length === 0 || selectedMissionIndex === 0) return;

                  const touch = e.changedTouches[0];
                  const rect = e.currentTarget.getBoundingClientRect();
                  const clickX = ((touch.clientX - rect.left) / rect.width) * 1140;
                  const clickY = ((touch.clientY - rect.top) / rect.height) * 880;
                  if (clickX >= 130 && clickX <= 1015 && clickY >= 120 && clickY <= 695) {
                    if (currentStep === "takeoff") {
                      if (activePlotPoint === "zfm") {
                        setInteractiveZfmPoint({ x: clickX, y: clickY });
                        if (!interactiveTomPoint) {
                          setActivePlotPoint("tom");
                        }
                      } else {
                        setInteractiveTomPoint({ x: clickX, y: clickY });
                      }
                    } else {
                      setInteractiveClickPoint({ x: clickX, y: clickY });
                    }
                    setErrors((prev) => {
                      if (!prev.envelopePoint) return prev;
                      const next = { ...prev };
                      delete next.envelopePoint;
                      return next;
                    });
                  }
                }}
              >
                {/* 1. LÍNEAS GUÍA DE MOUSE HOVER A LOS EJES (Arriba: CG, Derecha: Masa en kg) - TAMAÑO GRANDE */}
                {hoverPoint && hoverData && (
                  <g pointerEvents="none">
                    {/* Línea horizontal hacia el eje vertical DERECHO (Masa en kg) */}
                    <line
                      x1={hoverPoint.x}
                      y1={hoverPoint.y}
                      x2={1013.3}
                      y2={hoverPoint.y}
                      stroke="#1d4ed8"
                      strokeWidth="5"
                      strokeDasharray="10 6"
                    />
                    {/* Badge indicador en el eje derecho (Masa en kg) */}
                    <rect
                      x={1014}
                      y={hoverPoint.y - 26}
                      width="145"
                      height="52"
                      rx="10"
                      fill="#1d4ed8"
                      stroke="#ffffff"
                      strokeWidth="3"
                    />
                    <text
                      x={1086}
                      y={hoverPoint.y + 11}
                      fill="#ffffff"
                      fontSize="26"
                      fontWeight="900"
                      textAnchor="middle"
                    >
                      {hoverData.massKg} kg
                    </text>

                    {/* Línea vertical hacia el eje horizontal SUPERIOR (CG) */}
                    <line
                      x1={hoverPoint.x}
                      y1={hoverPoint.y}
                      x2={hoverPoint.x}
                      y2={120.3}
                      stroke="#1d4ed8"
                      strokeWidth="5"
                      strokeDasharray="10 6"
                    />
                    {/* Badge indicador en el eje superior (Brazo CG en m) */}
                    <rect
                      x={Math.max(135, Math.min(845, hoverPoint.x - 85))}
                      y={56}
                      width="170"
                      height="54"
                      rx="10"
                      fill="#1d4ed8"
                      stroke="#ffffff"
                      strokeWidth="3"
                    />
                    <text
                      x={Math.max(220, Math.min(930, hoverPoint.x))}
                      y={94}
                      fill="#ffffff"
                      fontSize="26"
                      fontWeight="900"
                      textAnchor="middle"
                    >
                      {hoverData.cgM.toFixed(3)} m
                    </text>

                    {/* Cursor Crosshair Center Dot */}
                    <circle
                      cx={hoverPoint.x}
                      cy={hoverPoint.y}
                      r="9"
                      fill="#2563eb"
                      stroke="#ffffff"
                      strokeWidth="3.5"
                    />
                  </g>
                )}

                {/* 2. PASO 1: DESPEGUE (6.5) - ZFM y TOW */}
                {currentStep === "takeoff" && (
                  <>
                    {/* Proyecciones sobre los ejes para ZFM (Arriba: CG, Derecha: Masa en kg) */}
                    {interactiveZfmPoint && studentZfmEstimated && (
                      <g pointerEvents="none">
                        <line
                          x1={interactiveZfmPoint.x}
                          y1={interactiveZfmPoint.y}
                          x2={1013.3}
                          y2={interactiveZfmPoint.y}
                          stroke="#9333ea"
                          strokeWidth="4"
                          strokeDasharray="9 5"
                        />
                        <rect
                          x={1014}
                          y={interactiveZfmPoint.y - 25}
                          width="145"
                          height="50"
                          rx="10"
                          fill="#7e22ce"
                          stroke="#ffffff"
                          strokeWidth="2.5"
                        />
                        <text
                          x={1086}
                          y={interactiveZfmPoint.y + 11}
                          fill="#ffffff"
                          fontSize="24"
                          fontWeight="900"
                          textAnchor="middle"
                        >
                          {studentZfmEstimated.massKg} kg
                        </text>

                        <line
                          x1={interactiveZfmPoint.x}
                          y1={interactiveZfmPoint.y}
                          x2={interactiveZfmPoint.x}
                          y2={120.3}
                          stroke="#9333ea"
                          strokeWidth="4"
                          strokeDasharray="9 5"
                        />
                        <rect
                          x={Math.max(135, Math.min(845, interactiveZfmPoint.x - 85))}
                          y={56}
                          width="170"
                          height="52"
                          rx="10"
                          fill="#7e22ce"
                          stroke="#ffffff"
                          strokeWidth="2.5"
                        />
                        <text
                          x={Math.max(220, Math.min(930, interactiveZfmPoint.x))}
                          y={93}
                          fill="#ffffff"
                          fontSize="24"
                          fontWeight="900"
                          textAnchor="middle"
                        >
                          {studentZfmEstimated.cgM.toFixed(3)} m
                        </text>
                      </g>
                    )}

                    {/* Proyecciones sobre los ejes para TOW (Arriba: CG, Derecha: Masa en kg) */}
                    {interactiveTomPoint && studentTomEstimated && (
                      <g pointerEvents="none">
                        <line
                          x1={interactiveTomPoint.x}
                          y1={interactiveTomPoint.y}
                          x2={1013.3}
                          y2={interactiveTomPoint.y}
                          stroke="#d97706"
                          strokeWidth="4"
                          strokeDasharray="9 5"
                        />
                        <rect
                          x={1014}
                          y={interactiveTomPoint.y - 25}
                          width="145"
                          height="50"
                          rx="10"
                          fill="#b45309"
                          stroke="#ffffff"
                          strokeWidth="2.5"
                        />
                        <text
                          x={1086}
                          y={interactiveTomPoint.y + 11}
                          fill="#ffffff"
                          fontSize="24"
                          fontWeight="900"
                          textAnchor="middle"
                        >
                          {studentTomEstimated.massKg} kg
                        </text>

                        <line
                          x1={interactiveTomPoint.x}
                          y1={interactiveTomPoint.y}
                          x2={interactiveTomPoint.x}
                          y2={120.3}
                          stroke="#d97706"
                          strokeWidth="4"
                          strokeDasharray="9 5"
                        />
                        <rect
                          x={Math.max(135, Math.min(845, interactiveTomPoint.x - 85))}
                          y={interactiveZfmPoint ? 2 : 56}
                          width="170"
                          height="52"
                          rx="10"
                          fill="#b45309"
                          stroke="#ffffff"
                          strokeWidth="2.5"
                        />
                        <text
                          x={Math.max(220, Math.min(930, interactiveTomPoint.x))}
                          y={interactiveZfmPoint ? 39 : 93}
                          fill="#ffffff"
                          fontSize="24"
                          fontWeight="900"
                          textAnchor="middle"
                        >
                          {studentTomEstimated.cgM.toFixed(3)} m
                        </text>
                      </g>
                    )}

                    {/* Punto estimado fijado por el alumno para ZFM */}
                    {interactiveZfmPoint && studentZfmEstimated && (
                      <g transform={`translate(${interactiveZfmPoint.x}, ${interactiveZfmPoint.y})`}>
                        <circle r="22" fill="none" stroke="#9333ea" strokeWidth="3" opacity="0.6" className="animate-pulse" />
                        <circle r="13" fill="#a855f7" stroke="#ffffff" strokeWidth="3" />
                        {/* Cuadro de info centrado arriba del punto del alumno */}
                        <g transform="translate(0, -66)">
                          <rect x="-115" y="-30" width="230" height="60" rx="10" fill="#7e22ce" stroke="#ffffff" strokeWidth="2.5" />
                          <text x="0" y="-6" fill="#ffffff" fontSize="18" fontWeight="900" textAnchor="middle">
                            TU PUNTO ZFM
                          </text>
                          <text x="0" y="18" fill="#f3e8ff" fontSize="16" fontWeight="800" textAnchor="middle">
                            ~{studentZfmEstimated.massKg} kg · {studentZfmEstimated.cgM.toFixed(3)} m
                          </text>
                        </g>
                      </g>
                    )}

                    {/* Punto estimado fijado por el alumno para TOW */}
                    {interactiveTomPoint && studentTomEstimated && (
                      <g transform={`translate(${interactiveTomPoint.x}, ${interactiveTomPoint.y})`}>
                        <circle r="22" fill="none" stroke="#d97706" strokeWidth="3" opacity="0.6" className="animate-pulse" />
                        <circle r="13" fill="#f59e0b" stroke="#ffffff" strokeWidth="3" />
                        {/* Cuadro de info centrado arriba del punto del alumno */}
                        <g transform="translate(0, -66)">
                          <rect x="-115" y="-30" width="230" height="60" rx="10" fill="#b45309" stroke="#ffffff" strokeWidth="2.5" />
                          <text x="0" y="-6" fill="#ffffff" fontSize="18" fontWeight="900" textAnchor="middle">
                            TU PUNTO TOW
                          </text>
                          <text x="0" y="18" fill="#fef3c7" fontSize="16" fontWeight="800" textAnchor="middle">
                            ~{studentTomEstimated.massKg} kg · {studentTomEstimated.cgM.toFixed(3)} m
                          </text>
                        </g>
                      </g>
                    )}

                    {/* Línea conectando puntos del alumno ZFM -> TOW */}
                    {interactiveZfmPoint && interactiveTomPoint && (
                      <line
                        x1={interactiveZfmPoint.x}
                        y1={interactiveZfmPoint.y}
                        x2={interactiveTomPoint.x}
                        y2={interactiveTomPoint.y}
                        stroke="#d97706"
                        strokeWidth="3"
                        strokeDasharray="6 4"
                      />
                    )}

                    {/* Línea de combustible calculada ZFM -> TOW (revelada tras validar o tras 3 intentos) */}
                    {(isStepPassed || showTargetHint) && (
                      <line
                        x1={zfmCoords.x}
                        y1={zfmCoords.y}
                        x2={tomCoords.x}
                        y2={tomCoords.y}
                        stroke="#2563eb"
                        strokeWidth="3.5"
                        strokeDasharray="7 5"
                      />
                    )}

                    {/* Líneas de comparación alumno vs cálculo exacto */}
                    {(isStepPassed || showTargetHint) && interactiveZfmPoint && (
                      <line
                        x1={interactiveZfmPoint.x}
                        y1={interactiveZfmPoint.y}
                        x2={zfmCoords.x}
                        y2={zfmCoords.y}
                        stroke={showTargetHint && !isStepPassed ? "#ef4444" : "#9333ea"}
                        strokeWidth="3"
                        strokeDasharray="5 3"
                      />
                    )}
                    {(isStepPassed || showTargetHint) && interactiveTomPoint && (
                      <line
                        x1={interactiveTomPoint.x}
                        y1={interactiveTomPoint.y}
                        x2={tomCoords.x}
                        y2={tomCoords.y}
                        stroke={showTargetHint && !isStepPassed ? "#ef4444" : "#f59e0b"}
                        strokeWidth="3"
                        strokeDasharray="5 3"
                      />
                    )}

                    {/* Punto exacto calculado ZFM (revelado al validar o tras 3 intentos) */}
                    {(isStepPassed || showTargetHint) && (
                      <g transform={`translate(${zfmCoords.x}, ${zfmCoords.y})`}>
                        <circle r="24" fill="none" stroke={showTargetHint && !isStepPassed ? "#ef4444" : "#7c3aed"} strokeWidth="3" opacity="0.8" className="animate-ping" />
                        <circle r="13" fill={showTargetHint && !isStepPassed ? "#dc2626" : "#6d28d9"} stroke="#ffffff" strokeWidth="3" />
                        {/* Cuadro de info hacia la derecha del punto calculado */}
                        <g transform="translate(24, 0)">
                          <rect x="0" y="-28" width="220" height="56" rx="10" fill={showTargetHint && !isStepPassed ? "#991b1b" : "#581c87"} stroke="#ffffff" strokeWidth="2.5" />
                          <text x="110" y="-5" fill="#ffffff" fontSize="16" fontWeight="900" textAnchor="middle">
                            {showTargetHint && !isStepPassed ? "ZFM CALCULADO (AQUÍ)" : "ZFM CALCULADO"}
                          </text>
                          <text x="110" y="17" fill="#e9d5ff" fontSize="14" fontWeight="800" textAnchor="middle">
                            {expected.zfmMass} kg · {expected.zfmCg} m
                          </text>
                        </g>
                      </g>
                    )}

                    {/* Punto exacto calculado TOW (revelado al validar o tras 3 intentos) */}
                    {(isStepPassed || showTargetHint) && (
                      <g transform={`translate(${tomCoords.x}, ${tomCoords.y})`}>
                        <circle r="24" fill="none" stroke={showTargetHint && !isStepPassed ? "#ef4444" : "#2563eb"} strokeWidth="3" opacity="0.8" className="animate-ping" />
                        <circle r="13" fill={showTargetHint && !isStepPassed ? "#dc2626" : "#1d4ed8"} stroke="#ffffff" strokeWidth="3" />
                        {/* Cuadro de info hacia la derecha del punto calculado */}
                        <g transform="translate(24, 0)">
                          <rect x="0" y="-28" width="220" height="56" rx="10" fill={showTargetHint && !isStepPassed ? "#991b1b" : "#1e40af"} stroke="#ffffff" strokeWidth="2.5" />
                          <text x="110" y="-5" fill="#ffffff" fontSize="16" fontWeight="900" textAnchor="middle">
                            {showTargetHint && !isStepPassed ? "TOW CALCULADO (AQUÍ)" : "TOW CALCULADO"}
                          </text>
                          <text x="110" y="17" fill="#bfdbfe" fontSize="14" fontWeight="800" textAnchor="middle">
                            {expected.tomMass} kg · {expected.tomCg} m
                          </text>
                        </g>
                      </g>
                    )}
                  </>
                )}

                {/* 3. PASO 2: ATERRIZAJE (6.6) - ZFW, TOW y LW */}
                {currentStep === "landing" && (
                  <>
                    {/* Punto ZFW (de 6.5) - Revelado al validar aterrizaje o tras 3 intentos */}
                    {(isStepPassed || showTargetHint) && (
                      <g transform={`translate(${zfmCoords.x}, ${zfmCoords.y})`}>
                        <circle r="12" fill="#7c3aed" stroke="#ffffff" strokeWidth="3" />
                        <g transform="translate(20, 8)">
                          <rect x="0" y="-25" width="190" height="50" rx="9" fill="#6d28d9" stroke="#ffffff" strokeWidth="2.5" />
                          <text x="95" y="-5" fill="#ffffff" fontSize="14" fontWeight="bold" textAnchor="middle">
                            ZFW (de 6.5)
                          </text>
                          <text x="95" y="15" fill="#e9d5ff" fontSize="13" fontWeight="bold" textAnchor="middle">
                            {expected.zfmMass} kg · {expected.zfmCg} m
                          </text>
                        </g>
                      </g>
                    )}

                    {/* Línea ZFW -> TOW (Carga de combustible) */}
                    {(isStepPassed || showTargetHint) && (
                      <line
                        x1={zfmCoords.x}
                        y1={zfmCoords.y}
                        x2={tomCoords.x}
                        y2={tomCoords.y}
                        stroke="#7c3aed"
                        strokeWidth="2.5"
                        strokeDasharray="5 4"
                      />
                    )}

                    {/* Punto de Despegue (TOW) - Cuadro a la IZQUIERDA para evitar solaparse con LW */}
                    {(isStepPassed || showTargetHint) && (
                      <g transform={`translate(${tomCoords.x}, ${tomCoords.y})`}>
                        <circle r="13" fill="#1d4ed8" stroke="#ffffff" strokeWidth="3" />
                        {/* Cuadro hacia la IZQUIERDA del punto TOW */}
                        <g transform="translate(-24, 0)">
                          <rect x="-200" y="-26" width="200" height="52" rx="9" fill="#1e40af" stroke="#ffffff" strokeWidth="2.5" />
                          <text x="-100" y="-5" fill="#ffffff" fontSize="15" fontWeight="bold" textAnchor="middle">
                            TOW (Despegue)
                          </text>
                          <text x="-100" y="15" fill="#bfdbfe" fontSize="13" fontWeight="bold" textAnchor="middle">
                            {expected.tomMass} kg · {expected.tomCg} m
                          </text>
                        </g>
                      </g>
                    )}

                    {/* Línea de consumo TOW -> LW (Consumo en ruta) */}
                    {(isStepPassed || showTargetHint) && (
                      <line
                        x1={tomCoords.x}
                        y1={tomCoords.y}
                        x2={lmCoords.x}
                        y2={lmCoords.y}
                        stroke="#1a80ff"
                        strokeWidth="3.5"
                        strokeDasharray="7 5"
                      />
                    )}

                    {/* Proyecciones sobre los ejes para LW (Arriba: CG, Derecha: Masa en kg) */}
                    {interactiveClickPoint && studentEstimated && (
                      <g pointerEvents="none">
                        <line
                          x1={interactiveClickPoint.x}
                          y1={interactiveClickPoint.y}
                          x2={1013.3}
                          y2={interactiveClickPoint.y}
                          stroke="#059669"
                          strokeWidth="4"
                          strokeDasharray="9 5"
                        />
                        <rect
                          x={1014}
                          y={interactiveClickPoint.y - 25}
                          width="145"
                          height="50"
                          rx="10"
                          fill="#065f46"
                          stroke="#ffffff"
                          strokeWidth="2.5"
                        />
                        <text
                          x={1086}
                          y={interactiveClickPoint.y + 11}
                          fill="#ffffff"
                          fontSize="24"
                          fontWeight="900"
                          textAnchor="middle"
                        >
                          {studentEstimated.massKg} kg
                        </text>

                        <line
                          x1={interactiveClickPoint.x}
                          y1={interactiveClickPoint.y}
                          x2={interactiveClickPoint.x}
                          y2={120.3}
                          stroke="#059669"
                          strokeWidth="4"
                          strokeDasharray="9 5"
                        />
                        <rect
                          x={Math.max(135, Math.min(845, interactiveClickPoint.x - 85))}
                          y={56}
                          width="170"
                          height="52"
                          rx="10"
                          fill="#065f46"
                          stroke="#ffffff"
                          strokeWidth="2.5"
                        />
                        <text
                          x={Math.max(220, Math.min(930, interactiveClickPoint.x))}
                          y={93}
                          fill="#ffffff"
                          fontSize="24"
                          fontWeight="900"
                          textAnchor="middle"
                        >
                          {studentEstimated.cgM.toFixed(3)} m
                        </text>
                      </g>
                    )}

                    {/* Punto estimado fijado por el alumno para LW - ARRIBA del punto - CUADRO MÁS GRANDE */}
                    {interactiveClickPoint && studentEstimated && (
                      <g transform={`translate(${interactiveClickPoint.x}, ${interactiveClickPoint.y})`}>
                        <circle r="22" fill="none" stroke="#d97706" strokeWidth="3" opacity="0.6" className="animate-pulse" />
                        <circle r="13" fill="#f59e0b" stroke="#ffffff" strokeWidth="3" />
                        {/* Cuadro de info centrado arriba del punto del alumno */}
                        <g transform="translate(0, -72)">
                          <rect x="-115" y="-30" width="230" height="60" rx="10" fill="#b45309" stroke="#ffffff" strokeWidth="2.5" />
                          <text x="0" y="-6" fill="#ffffff" fontSize="18" fontWeight="900" textAnchor="middle">
                            TU PUNTO LW
                          </text>
                          <text x="0" y="18" fill="#fef3c7" fontSize="16" fontWeight="800" textAnchor="middle">
                            ~{studentEstimated.massKg} kg · {studentEstimated.cgM.toFixed(3)} m
                          </text>
                        </g>
                      </g>
                    )}

                    {/* Línea de comparación alumno vs LW exacto */}
                    {(isStepPassed || showTargetHint) && interactiveClickPoint && (
                      <line
                        x1={interactiveClickPoint.x}
                        y1={interactiveClickPoint.y}
                        x2={lmCoords.x}
                        y2={lmCoords.y}
                        stroke={showTargetHint && !isStepPassed ? "#ef4444" : "#f59e0b"}
                        strokeWidth="3.5"
                        strokeDasharray="6 4"
                      />
                    )}

                    {/* Punto exacto de aterrizaje (LW) - Cuadro hacia la DERECHA */}
                    {(isStepPassed || showTargetHint) && (
                      <g transform={`translate(${lmCoords.x}, ${lmCoords.y})`}>
                        <circle r="24" fill="none" stroke={showTargetHint && !isStepPassed ? "#ef4444" : "#059669"} strokeWidth="3" opacity="0.8" className="animate-ping" />
                        <circle r="13" fill={showTargetHint && !isStepPassed ? "#dc2626" : "#059669"} stroke="#ffffff" strokeWidth="3" />
                        {/* Cuadro de LW hacia la DERECHA */}
                        <g transform="translate(24, 0)">
                          <rect x="0" y="-28" width="220" height="56" rx="10" fill={showTargetHint && !isStepPassed ? "#991b1b" : "#065f46"} stroke="#ffffff" strokeWidth="2.5" />
                          <text x="110" y="-5" fill="#ffffff" fontSize="16" fontWeight="900" textAnchor="middle">
                            {showTargetHint && !isStepPassed ? "LW CALCULADO (AQUÍ)" : "LW CALCULADO"}
                          </text>
                          <text x="110" y="17" fill="#a7f3d0" fontSize="14" fontWeight="800" textAnchor="middle">
                            {expected.lmMass} kg · {expected.lmCg} m
                          </text>
                        </g>
                      </g>
                    )}
                  </>
                )}
              </svg>
            </div>
          </div>
        </div>

          {/* Footer de Estado de la Envolvente (solo al completar, dando máximo espacio a la gráfica) */}
          {isStepPassed && (
            <div className="space-y-1.5 pt-1.5 border-t border-slate-200 dark:border-slate-800 shrink-0 text-xs sm:text-[13px]">
              {currentStep === "takeoff" ? (
                <>
                  <div className="flex items-center justify-between px-3 py-1.5 rounded-xl bg-purple-50/70 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800">
                    <div className="flex items-center gap-2">
                      <strong className="text-purple-900 dark:text-purple-300">ZFM REAL:</strong>
                      <span className="font-mono font-semibold text-slate-800 dark:text-slate-100">
                        {expected.zfmMass} kg · CG {expected.zfmCg} m
                      </span>
                      {studentZfmEstimated && (
                        <span className="text-xs text-purple-700 dark:text-purple-300 font-medium ml-1">
                          (Tu marca: {studentZfmEstimated.massKg} kg · {studentZfmEstimated.cgM.toFixed(3)} m)
                        </span>
                      )}
                    </div>
                    <span className="font-bold text-purple-700 dark:text-purple-300">
                      ✓ Zero Fuel Mass
                    </span>
                  </div>

                  <div className="flex items-center justify-between px-3 py-1.5 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800">
                    <div className="flex items-center gap-2">
                      <strong className="text-blue-900 dark:text-sky-300">TOW REAL:</strong>
                      <span className="font-mono font-semibold text-slate-800 dark:text-slate-100">
                        {expected.tomMass} kg · CG {expected.tomCg} m
                      </span>
                      {studentTomEstimated && (
                        <span className="text-xs text-amber-800 dark:text-amber-300 font-medium ml-1">
                          (Tu marca: {studentTomEstimated.massKg} kg · {studentTomEstimated.cgM.toFixed(3)} m)
                        </span>
                      )}
                    </div>
                    <span className={`font-bold ${isTomNormal ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"}`}>
                      {isTomNormal ? "✓ Categoría Normal" : "⚠️ Fuera de Límites"}
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center justify-between px-3 py-1.5 rounded-xl bg-purple-50/70 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800">
                    <div className="flex items-center gap-2">
                      <strong className="text-purple-900 dark:text-purple-300">ZFW (de 6.5):</strong>
                      <span className="font-mono font-semibold text-slate-800 dark:text-slate-100">{expected.zfmMass} kg · CG {expected.zfmCg} m</span>
                    </div>
                    <span className="font-bold text-purple-700 dark:text-purple-300">
                      ✓ Zero Fuel Mass
                    </span>
                  </div>

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
                      {studentEstimated && (
                        <span className="text-xs text-amber-800 dark:text-amber-300 font-medium ml-1">
                          (Tu marca: {studentEstimated.massKg} kg · {studentEstimated.cgM.toFixed(3)} m)
                        </span>
                      )}
                    </div>
                    <span className={`font-bold ${isLmNormal ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"}`}>
                      {isLmNormal ? (isTomUtility ? "✓ Categoría Utilidad" : "✓ Categoría Normal") : "⚠️ Fuera de Límites"}
                    </span>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
