"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import {
  DA42_DATA,
  DA42_PREFLIGHT_MISSIONS,
  isCgInsideEnvelopeDA42,
  mapCgToSvgCoordsDA42,
  mapSvgCoordsToCgDA42,
  checkValueTolerance,
  DA42_INITIAL_LOADSHEET_STORE,
  DA42LoadsheetInputs,
  M1_DA42_ZFM_POINT,
  M1_DA42_TOM_POINT,
  M1_DA42_LM_POINT,
} from "./da42-constants";
import { ExerciseInstructionsModal } from "./exercise-instructions-modal";

type Props = {
  mode?: "all" | "takeoff" | "landing";
  leftPct?: number;
  onExerciseCompleted?: () => void;
  isAlreadyCompleted?: boolean;
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

  const [missionStore, setMissionStore] = useState<Record<number, DA42LoadsheetInputs>>(
    DA42_INITIAL_LOADSHEET_STORE
  );
  const [solvedMissions, setSolvedMissions] = useState<Record<number, boolean>>({});

  // Active inputs: M1 starts prefilled as the solved example
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

  // Interactive points: In 6.5 both ZFM and TOW are placed; in 6.6 LW is placed
  const [interactiveZfmPoint, setInteractiveZfmPoint] = useState<{ x: number; y: number } | null>(M1_DA42_ZFM_POINT);
  const [interactiveTomPoint, setInteractiveTomPoint] = useState<{ x: number; y: number } | null>(M1_DA42_TOM_POINT);
  const [interactiveClickPoint, setInteractiveClickPoint] = useState<{ x: number; y: number } | null>(M1_DA42_LM_POINT);
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
  const [passedTakeoff, setPassedTakeoff] = useState(false);
  const [passedLanding, setPassedLanding] = useState(false);
  const isStepPassed = currentStep === "takeoff" ? passedTakeoff : passedLanding;

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

  const loadMissionScenario = (_m: (typeof DA42_PREFLIGHT_MISSIONS)[number], idx: number) => {
    // 1. Guardar estado de la misión que dejamos
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

    // 2. Cargar estado de la misión seleccionada
    const nextData = idx === 0 ? DA42_INITIAL_LOADSHEET_STORE[0] : (missionStore[idx] || DA42_INITIAL_LOADSHEET_STORE[idx]);
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

  // Expected values calculation based on DA42 certified arms and scenario data
  const expected = useMemo(() => {
    const sc = mission.scenario;
    const pMass = sc.pilotsFrontKg;
    const pMom = Math.round(pMass * DA42_DATA.arms.pilotsFront * 100) / 100;

    const paxM = sc.passengersRearKg;
    const paxMom = Math.round(paxM * DA42_DATA.arms.passengersRear * 100) / 100;

    const bNoseMass = mission.baggageNoseKg;
    const bCabinMass = mission.baggageCabinKg;
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

    // Bimotor cruise consumption: ~25 L/h at 60%, ~28 L/h at 70%
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
      loadMissionScenario(DA42_PREFLIGHT_MISSIONS[1], 1);
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

      // 1. Pilots Moment (arm 2.30 m)
      const userPilotsMom = num(pilotsMoment);
      if (isNaN(userPilotsMom)) {
        newErrors.pilotsMoment = "Campo obligatorio";
      } else {
        const chk = checkValueTolerance(userPilotsMom, expected.pilotsMoment, 0.02, 0.5);
        if (!chk.isOk) {
          newErrors.pilotsMoment =
            attempts >= 2
              ? `Solución: ${expected.pilotsMass} kg × 2.30 m = ${expected.pilotsMoment} kg·m`
              : "Multiplica la masa por el brazo de pilotos (2.30 m)";
        }
      }

      // 2. Pax Moment (arm 3.25 m)
      if (expected.paxMass > 0) {
        const userPaxMom = num(paxMoment);
        if (isNaN(userPaxMom)) {
          newErrors.paxMoment = "Campo obligatorio";
        } else {
          const chk = checkValueTolerance(userPaxMom, expected.paxMoment, 0.02, 0.5);
          if (!chk.isOk) {
            newErrors.paxMoment =
              attempts >= 2
                ? `Solución: ${expected.paxMass} kg × 3.25 m = ${expected.paxMoment} kg·m`
                : "Multiplica la masa por el brazo de pasajeros (3.25 m)";
          }
        }
      }

      // 3. Baggage Nose Moment (arm 0.60 m)
      if (expected.baggageNoseMass > 0) {
        const userBagNMom = num(baggageNoseMoment);
        if (isNaN(userBagNMom)) {
          newErrors.baggageNoseMoment = "Campo obligatorio";
        } else {
          const chk = checkValueTolerance(userBagNMom, expected.baggageNoseMoment, 0.02, 0.5);
          if (!chk.isOk) {
            newErrors.baggageNoseMoment =
              attempts >= 2
                ? `Solución: ${expected.baggageNoseMass} kg × 0.60 m = ${expected.baggageNoseMoment} kg·m`
                : "Multiplica por el brazo de morro (0.60 m)";
          }
        }
      }

      // 4. Baggage Cabin Moment (arm 3.89 m)
      if (expected.baggageCabinMass > 0) {
        const userBagCMom = num(baggageCabinMoment);
        if (isNaN(userBagCMom)) {
          newErrors.baggageCabinMoment = "Campo obligatorio";
        } else {
          const chk = checkValueTolerance(userBagCMom, expected.baggageCabinMoment, 0.02, 0.5);
          if (!chk.isOk) {
            newErrors.baggageCabinMoment =
              attempts >= 2
                ? `Solución: ${expected.baggageCabinMass} kg × 3.89 m = ${expected.baggageCabinMoment} kg·m`
                : "Multiplica por el brazo de cabina (3.89 m)";
          }
        }
      }

      // 5. ZFM Mass, Moment & CG
      const userZfmMass = num(zfmMass);
      const userZfmMom = num(zfmMoment);
      const userZfmCg = num(zfmCg);
      if (isNaN(userZfmMass) || !checkValueTolerance(userZfmMass, expected.zfmMass, 0.01, 1).isOk) {
        newErrors.zfmMass =
          attempts >= 2
            ? `Solución: 1250.00 + ${expected.pilotsMass} + ${expected.paxMass} + ${expected.baggageNoseMass} + ${expected.baggageCabinMass} = ${expected.zfmMass} kg`
            : "Suma BEW (1.250 kg) + pilotos + pax + equipajes";
      }
      if (isNaN(userZfmMom) || !checkValueTolerance(userZfmMom, expected.zfmMoment, 0.01, 2).isOk) {
        newErrors.zfmMoment =
          attempts >= 2
            ? `Solución: Suma momentos = ${expected.zfmMoment} kg·m`
            : "Suma los momentos de BEW y todos los ocupantes y bultos";
      }
      if (isNaN(userZfmCg) || !checkValueTolerance(userZfmCg, expected.zfmCg, 0.008, 0.005).isOk) {
        newErrors.zfmCg =
          attempts >= 2
            ? `Solución: CG ZFM = ${expected.zfmMoment} / ${expected.zfmMass} = ${expected.zfmCg} m`
            : "CG ZFM = Momento ZFM / Masa ZFM";
      }

      // 6. Fuel Mass & Moment (arm 2.63 m)
      const userFuelMass = num(fuelMass);
      const userFuelMom = num(fuelMoment);
      if (isNaN(userFuelMass) || !checkValueTolerance(userFuelMass, expected.fuelMass, 0.02, 0.5).isOk) {
        newErrors.fuelMass =
          attempts >= 2
            ? `Solución: ${expected.fuelLiters} L × 0.84 = ${expected.fuelMass} kg`
            : "Usa la densidad Jet-A1 (0.84 kg/L)";
      }
      if (isNaN(userFuelMom) || !checkValueTolerance(userFuelMom, expected.fuelMoment, 0.02, 1.5).isOk) {
        newErrors.fuelMoment =
          attempts >= 2
            ? `Solución: ${expected.fuelMass} kg × 2.63 m = ${expected.fuelMoment} kg·m`
            : "Masa de combustible × brazo (2.63 m)";
      }

      // 7. TOM Mass, Moment & CG
      const userTomMass = num(tomMass);
      const userTomMom = num(tomMoment);
      const userTomCg = num(tomCg);
      if (isNaN(userTomMass) || !checkValueTolerance(userTomMass, expected.tomMass, 0.01, 1).isOk) {
        newErrors.tomMass =
          attempts >= 2
            ? `Solución: ZFM (${expected.zfmMass}) + Fuel (${expected.fuelMass}) = ${expected.tomMass} kg`
            : "TOM = ZFM + Combustible";
      }
      if (isNaN(userTomMom) || !checkValueTolerance(userTomMom, expected.tomMoment, 0.01, 2).isOk) {
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

      // 8. Comprobar que los puntos ZFM y TOW situados en la envolvente coinciden razonablemente
      if (interactiveZfmPoint && interactiveTomPoint) {
        const zEst = mapSvgCoordsToCgDA42(interactiveZfmPoint.x, interactiveZfmPoint.y);
        const zMassDiff = Math.abs(zEst.massKg - expected.zfmMass);
        const zCgDiff = Math.abs(zEst.cgM - expected.zfmCg);

        const tEst = mapSvgCoordsToCgDA42(interactiveTomPoint.x, interactiveTomPoint.y);
        const tMassDiff = Math.abs(tEst.massKg - expected.tomMass);
        const tCgDiff = Math.abs(tEst.cgM - expected.tomCg);

        const isZfmOff = zMassDiff > 35 || zCgDiff > 0.025;
        const isTomOff = tMassDiff > 35 || tCgDiff > 0.025;

        if (isZfmOff || isTomOff) {
          const nextPointAttempts = pointAttempts + 1;
          setPointAttempts(nextPointAttempts);
          if (nextPointAttempts < 3) {
            if (isZfmOff && isTomOff) {
              newErrors.envelopePoint = `Tus puntos ZFM y TOW están lejos de los valores calculados. Revisa la cuadrícula oficial y colócalos correctamente (Intento ${nextPointAttempts}/3).`;
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
            : "Multiplica el consumo por la densidad Jet-A1 (0.84 kg/L)";
      }

      const userTripMom = num(tripFuelMoment);
      if (isNaN(userTripMom) || !checkValueTolerance(userTripMom, expected.tripFuelMoment, 0.02, 1).isOk) {
        newErrors.tripFuelMoment =
          attempts >= 2
            ? `Solución: ${expected.tripFuelMass} kg × 2.63 m = ${expected.tripFuelMoment} kg·m`
            : "Trip fuel consumido × brazo (2.63 m)";
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
      if (isNaN(userLmMom) || !checkValueTolerance(userLmMom, expected.lmMoment, 0.01, 2).isOk) {
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
        const est = mapSvgCoordsToCgDA42(interactiveClickPoint.x, interactiveClickPoint.y);
        const massDiff = Math.abs(est.massKg - expected.lmMass);
        const cgDiff = Math.abs(est.cgM - expected.lmCg);
        if (massDiff > 35 || cgDiff > 0.025) {
          const nextPointAttempts = pointAttempts + 1;
          setPointAttempts(nextPointAttempts);
          if (nextPointAttempts < 3) {
            newErrors.envelopePoint = `El punto LW situado está lejos del valor calculado (~${Math.round(massDiff)} kg / ${(cgDiff * 1000).toFixed(0)} mm CG). Revisa la cuadrícula y colócalo correctamente (Intento ${nextPointAttempts}/3).`;
          } else {
            setShowTargetHint(true);
            newErrors.envelopePoint = "Se ha revelado la posición exacta calculada en la gráfica. Haz clic sobre el punto verde para colocarlo correctamente y verificar.";
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

      // Auto-zoom enfocado en los puntos de la solución
      setZoomLevel(1.5);
      setPanOffset(clampPan(0, 0, 1.5));
    } else {
      setAttempts((prev) => prev + 1);
    }
  };

  const solvedPracticeCount = (solvedMissions[1] ? 1 : 0) + (solvedMissions[2] ? 1 : 0);
  const isAllPracticeCompleted = solvedPracticeCount === 2 || isAlreadyCompleted;

  // SVG coordinates for ZFM, TOW and LW
  const zfmCoords = useMemo(() => {
    return mapCgToSvgCoordsDA42(expected.zfmMass, expected.zfmCg);
  }, [expected]);

  const tomCoords = useMemo(() => {
    return mapCgToSvgCoordsDA42(expected.tomMass, expected.tomCg);
  }, [expected]);

  const lmCoords = useMemo(() => {
    return mapCgToSvgCoordsDA42(expected.lmMass, expected.lmCg);
  }, [expected]);

  const isTomInside = isCgInsideEnvelopeDA42(expected.tomMass, expected.tomCg);
  const isLmInside = isCgInsideEnvelopeDA42(expected.lmMass, expected.lmCg);

  // Mapped estimated values from student interactive clicks and hover cursor
  const studentZfmEstimated = useMemo(() => {
    if (!interactiveZfmPoint) return null;
    return mapSvgCoordsToCgDA42(interactiveZfmPoint.x, interactiveZfmPoint.y);
  }, [interactiveZfmPoint]);

  const studentTomEstimated = useMemo(() => {
    if (!interactiveTomPoint) return null;
    return mapSvgCoordsToCgDA42(interactiveTomPoint.x, interactiveTomPoint.y);
  }, [interactiveTomPoint]);

  const studentEstimated = useMemo(() => {
    if (!interactiveClickPoint) return null;
    return mapSvgCoordsToCgDA42(interactiveClickPoint.x, interactiveClickPoint.y);
  }, [interactiveClickPoint]);

  const liveHoverCg = useMemo(() => {
    if (!hoverPoint) return null;
    return mapSvgCoordsToCgDA42(hoverPoint.x, hoverPoint.y);
  }, [hoverPoint]);

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
          {/* Header con selectores de misión y pestañas */}
          <div className="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
            <div>
              <span className="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-[14px]">
                {currentStep === "takeoff"
                  ? "📋 PARTE 1: DESPEGUE (TOM & CG)"
                  : "🛬 PARTE 2: ATERRIZAJE (LM & CG)"}
              </span>
              <div className="text-[11px] text-slate-500 font-medium">
                DA42 Twin Star · {DA42_DATA.engines}
              </div>
            </div>

            <div className="flex items-center gap-1 shrink-0">
              {mode === "all" && (
                <div className="flex items-center bg-slate-200/80 dark:bg-slate-800 rounded-lg p-0.5 mr-1">
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

              <button
                type="button"
                onClick={() => setShowGuideModal(true)}
                className="px-2 py-0.5 rounded-lg text-xs font-bold bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-700/60 hover:bg-amber-100 dark:hover:bg-amber-900/40 transition-all cursor-pointer flex items-center gap-1 shadow-2xs mr-1"
                title="Ver guía de procedimiento e instrucciones"
              >
                <span>💡</span>
                <span className="hidden sm:inline">Guía</span>
              </button>

              <button
                type="button"
                onClick={() => loadMissionScenario(DA42_PREFLIGHT_MISSIONS[0], 0)}
                className={`px-2 py-0.5 rounded text-[11px] font-extrabold transition-all cursor-pointer flex items-center gap-0.5 ${
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
                    onClick={() => loadMissionScenario(DA42_PREFLIGHT_MISSIONS[idx], idx)}
                    className={`px-2 py-0.5 rounded text-[11px] font-extrabold transition-all cursor-pointer flex items-center gap-0.5 ${
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
              /* TABLA PARTE 1: DESPEGUE (8 FILAS) */
              <table className="w-full text-left text-xs border-collapse table-fixed">
                <colgroup>
                  <col className="w-[38%]" />
                  <col className="w-[20%]" />
                  <col className="w-[18%]" />
                  <col className="w-[24%]" />
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
                    <td className="py-0.5 px-1.5 font-sans font-medium whitespace-nowrap">EMPTY WEIGHT (DA42)</td>
                    <td className="py-0.5 px-1.5 text-right text-slate-600 dark:text-slate-300 whitespace-nowrap">1.250,00</td>
                    <td className="py-0.5 px-1.5 text-right text-slate-600 dark:text-slate-300 whitespace-nowrap">2,420</td>
                    <td className="py-0.5 px-1.5 text-right text-slate-600 dark:text-slate-300 whitespace-nowrap">3.025,00</td>
                  </tr>

                  {/* PILOTS */}
                  <tr>
                    <td className="py-0.5 px-1.5 font-sans font-medium whitespace-nowrap">PILOTOS (FRONT)</td>
                    <td className="py-0.5 px-1.5 text-right font-bold text-slate-700 dark:text-slate-200 whitespace-nowrap">
                      {expected.pilotsMass} kg
                    </td>
                    <td className="py-0.5 px-1.5 text-right text-slate-500 whitespace-nowrap">2,300</td>
                    <td className="py-0.5 px-1.5 text-right whitespace-nowrap">
                      <input
                        type="text"
                        placeholder="Momento"
                        value={pilotsMoment}
                        disabled={selectedMissionIndex === 0}
                        onChange={(e) => setPilotsMoment(e.target.value)}
                        className={`w-full text-right px-1.5 py-0.5 rounded border font-mono text-xs ${
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
                    <td className="py-0.5 px-1.5 font-sans font-medium whitespace-nowrap">PASAJEROS (REAR)</td>
                    <td className="py-0.5 px-1.5 text-right text-slate-700 dark:text-slate-200 whitespace-nowrap">
                      {expected.paxMass > 0 ? `${expected.paxMass} kg` : "0 kg"}
                    </td>
                    <td className="py-0.5 px-1.5 text-right text-slate-500 whitespace-nowrap">3,250</td>
                    <td className="py-0.5 px-1.5 text-right whitespace-nowrap">
                      <input
                        type="text"
                        disabled={selectedMissionIndex === 0 || expected.paxMass === 0}
                        placeholder={expected.paxMass === 0 ? "0" : "Momento"}
                        value={expected.paxMass === 0 ? "0" : paxMoment}
                        onChange={(e) => setPaxMoment(e.target.value)}
                        className={`w-full text-right px-1.5 py-0.5 rounded border font-mono text-xs ${
                          selectedMissionIndex === 0
                            ? "bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 font-bold"
                            : errors.paxMoment
                              ? "border-rose-500 bg-rose-50 text-rose-700"
                              : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                        }`}
                      />
                    </td>
                  </tr>

                  {/* BAGGAGE NOSE */}
                  <tr>
                    <td className="py-0.5 px-1.5 font-sans font-medium whitespace-nowrap">EQUIPAJE MORRO</td>
                    <td className="py-0.5 px-1.5 text-right text-slate-700 dark:text-slate-200 whitespace-nowrap">
                      {expected.baggageNoseMass} kg
                    </td>
                    <td className="py-0.5 px-1.5 text-right text-slate-500 whitespace-nowrap">0,600</td>
                    <td className="py-0.5 px-1.5 text-right whitespace-nowrap">
                      <input
                        type="text"
                        disabled={selectedMissionIndex === 0 || expected.baggageNoseMass === 0}
                        placeholder={expected.baggageNoseMass === 0 ? "0" : "Momento"}
                        value={expected.baggageNoseMass === 0 ? "0" : baggageNoseMoment}
                        onChange={(e) => setBaggageNoseMoment(e.target.value)}
                        className={`w-full text-right px-1.5 py-0.5 rounded border font-mono text-xs ${
                          selectedMissionIndex === 0
                            ? "bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 font-bold"
                            : errors.baggageNoseMoment
                              ? "border-rose-500 bg-rose-50 text-rose-700"
                              : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                        }`}
                      />
                    </td>
                  </tr>

                  {/* BAGGAGE CABIN */}
                  <tr>
                    <td className="py-0.5 px-1.5 font-sans font-medium whitespace-nowrap">EQUIPAJE CABINA</td>
                    <td className="py-0.5 px-1.5 text-right text-slate-700 dark:text-slate-200 whitespace-nowrap">
                      {expected.baggageCabinMass} kg
                    </td>
                    <td className="py-0.5 px-1.5 text-right text-slate-500 whitespace-nowrap">3,890</td>
                    <td className="py-0.5 px-1.5 text-right whitespace-nowrap">
                      <input
                        type="text"
                        disabled={selectedMissionIndex === 0 || expected.baggageCabinMass === 0}
                        placeholder={expected.baggageCabinMass === 0 ? "0" : "Momento"}
                        value={expected.baggageCabinMass === 0 ? "0" : baggageCabinMoment}
                        onChange={(e) => setBaggageCabinMoment(e.target.value)}
                        className={`w-full text-right px-1.5 py-0.5 rounded border font-mono text-xs ${
                          selectedMissionIndex === 0
                            ? "bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 font-bold"
                            : errors.baggageCabinMoment
                              ? "border-rose-500 bg-rose-50 text-rose-700"
                              : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                        }`}
                      />
                    </td>
                  </tr>

                  {/* ZERO FUEL MASS */}
                  <tr className="bg-sky-50/70 dark:bg-sky-950/40 font-bold border-y border-sky-200 dark:border-sky-800">
                    <td className="py-0.5 px-1.5 font-sans text-[#0B2E59] dark:text-sky-300 whitespace-nowrap">
                      ZERO FUEL MASS (ZFM)
                    </td>
                    <td className="py-0.5 px-1.5 text-right whitespace-nowrap">
                      <input
                        type="text"
                        placeholder="Masa"
                        value={zfmMass}
                        disabled={selectedMissionIndex === 0}
                        onChange={(e) => setZfmMass(e.target.value)}
                        className={`w-full text-right px-1.5 py-0.5 rounded border font-mono text-xs ${
                          selectedMissionIndex === 0
                            ? "bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 font-bold"
                            : errors.zfmMass
                              ? "border-rose-500 bg-rose-50 text-rose-700"
                              : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                        }`}
                      />
                    </td>
                    <td className="py-0.5 px-1.5 text-right whitespace-nowrap">
                      <input
                        type="text"
                        placeholder="CG"
                        value={zfmCg}
                        disabled={selectedMissionIndex === 0}
                        onChange={(e) => setZfmCg(e.target.value)}
                        className={`w-full text-right px-1 py-0.5 rounded border font-mono text-xs font-bold ${
                          selectedMissionIndex === 0
                            ? "bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 font-bold"
                            : errors.zfmCg
                              ? "border-rose-500 bg-rose-50 text-rose-700"
                              : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                        }`}
                      />
                    </td>
                    <td className="py-0.5 px-1.5 text-right whitespace-nowrap">
                      <input
                        type="text"
                        placeholder="Momento"
                        value={zfmMoment}
                        disabled={selectedMissionIndex === 0}
                        onChange={(e) => setZfmMoment(e.target.value)}
                        className={`w-full text-right px-1.5 py-0.5 rounded border font-mono text-xs ${
                          selectedMissionIndex === 0
                            ? "bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 font-bold"
                            : errors.zfmMoment
                              ? "border-rose-500 bg-rose-50 text-rose-700"
                              : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                        }`}
                      />
                    </td>
                  </tr>

                  {/* FUEL TAKEOFF */}
                  <tr>
                    <td className="py-0.5 px-1.5 font-sans font-medium whitespace-nowrap">
                      FUEL DESPEGUE ({expected.fuelLiters} L)
                    </td>
                    <td className="py-0.5 px-1.5 text-right whitespace-nowrap">
                      <input
                        type="text"
                        placeholder="Fuel (kg)"
                        value={fuelMass}
                        disabled={selectedMissionIndex === 0}
                        onChange={(e) => setFuelMass(e.target.value)}
                        className={`w-full text-right px-1.5 py-0.5 rounded border font-mono text-xs ${
                          selectedMissionIndex === 0
                            ? "bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 font-bold"
                            : errors.fuelMass
                              ? "border-rose-500 bg-rose-50 text-rose-700"
                              : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                        }`}
                      />
                    </td>
                    <td className="py-0.5 px-1.5 text-right text-slate-500 whitespace-nowrap">2,630</td>
                    <td className="py-0.5 px-1.5 text-right whitespace-nowrap">
                      <input
                        type="text"
                        placeholder="Momento"
                        value={fuelMoment}
                        disabled={selectedMissionIndex === 0}
                        onChange={(e) => setFuelMoment(e.target.value)}
                        className={`w-full text-right px-1.5 py-0.5 rounded border font-mono text-xs ${
                          selectedMissionIndex === 0
                            ? "bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 font-bold"
                            : errors.fuelMoment
                              ? "border-rose-500 bg-rose-50 text-rose-700"
                              : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                        }`}
                      />
                    </td>
                  </tr>

                  {/* TAKEOFF MASS */}
                  <tr className="bg-emerald-50/80 dark:bg-emerald-950/50 font-bold border-t-2 border-emerald-500 text-emerald-900 dark:text-emerald-200">
                    <td className="py-0.5 px-1.5 font-sans whitespace-nowrap">
                      TAKEOFF MASS (TOM)
                    </td>
                    <td className="py-0.5 px-1.5 text-right whitespace-nowrap">
                      <input
                        type="text"
                        placeholder="TOM (kg)"
                        value={tomMass}
                        disabled={selectedMissionIndex === 0}
                        onChange={(e) => setTomMass(e.target.value)}
                        className={`w-full text-right px-1.5 py-0.5 rounded border font-mono text-xs font-bold ${
                          selectedMissionIndex === 0
                            ? "bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 font-bold"
                            : errors.tomMass
                              ? "border-rose-500 bg-rose-50 text-rose-700"
                              : "border-emerald-400 bg-white dark:bg-slate-800 text-emerald-800 dark:text-emerald-300"
                        }`}
                      />
                    </td>
                    <td className="py-0.5 px-1.5 text-right whitespace-nowrap">
                      <input
                        type="text"
                        placeholder="CG (m)"
                        value={tomCg}
                        disabled={selectedMissionIndex === 0}
                        onChange={(e) => setTomCg(e.target.value)}
                        className={`w-full text-right px-1 py-0.5 rounded border font-mono text-xs font-bold ${
                          selectedMissionIndex === 0
                            ? "bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 font-bold"
                            : errors.tomCg
                              ? "border-rose-500 bg-rose-50 text-rose-700"
                              : "border-emerald-400 bg-white dark:bg-slate-800 text-emerald-800 dark:text-emerald-300"
                        }`}
                      />
                    </td>
                    <td className="py-0.5 px-1.5 text-right whitespace-nowrap">
                      <input
                        type="text"
                        placeholder="Momento"
                        value={tomMoment}
                        disabled={selectedMissionIndex === 0}
                        onChange={(e) => setTomMoment(e.target.value)}
                        className={`w-full text-right px-1.5 py-0.5 rounded border font-mono text-xs font-bold ${
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
              /* TABLA PARTE 2: ATERRIZAJE (LM & CG) */
              <table className="w-full text-left text-xs border-collapse table-fixed">
                <colgroup>
                  <col className="w-[38%]" />
                  <col className="w-[20%]" />
                  <col className="w-[18%]" />
                  <col className="w-[24%]" />
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
                    <td className="py-1 px-1.5 font-sans font-medium text-[#0B2E59] dark:text-sky-300 whitespace-nowrap">
                      TAKEOFF MASS (TOM)
                    </td>
                    <td className="py-1 px-1.5 text-right whitespace-nowrap">{expected.tomMass.toFixed(2).replace(".", ",")}</td>
                    <td className="py-1 px-1.5 text-right text-slate-500 whitespace-nowrap">{expected.tomCg.toFixed(3).replace(".", ",")}</td>
                    <td className="py-1 px-1.5 text-right whitespace-nowrap">{expected.tomMoment.toFixed(2).replace(".", ",")}</td>
                  </tr>
                  <tr>
                    <td className="py-1 px-1.5 font-sans font-medium text-rose-600 dark:text-rose-400 whitespace-nowrap">
                      (-) TRIP FUEL ({expected.tripFuelLiters} L)
                    </td>
                    <td className="py-1 px-1.5 text-right whitespace-nowrap">
                      <input
                        type="text"
                        placeholder="Fuel (kg)"
                        value={tripFuelMassInput}
                        disabled={selectedMissionIndex === 0}
                        onChange={(e) => setTripFuelMassInput(e.target.value)}
                        className={`w-full text-right px-1.5 py-0.5 rounded border font-mono text-xs font-bold ${
                          selectedMissionIndex === 0
                            ? "bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200"
                            : errors.tripFuelMass
                              ? "border-rose-500 bg-rose-50 text-rose-700"
                              : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-amber-700 dark:text-amber-400"
                        }`}
                      />
                    </td>
                    <td className="py-1 px-1.5 text-right text-slate-500 whitespace-nowrap">2,630</td>
                    <td className="py-1 px-1.5 text-right whitespace-nowrap">
                      <input
                        type="text"
                        placeholder="Momento"
                        value={tripFuelMoment}
                        disabled={selectedMissionIndex === 0}
                        onChange={(e) => setTripFuelMoment(e.target.value)}
                        className={`w-full text-right px-1.5 py-0.5 rounded border font-mono text-xs ${
                          selectedMissionIndex === 0
                            ? "bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 font-bold"
                            : errors.tripFuelMoment
                              ? "border-rose-500 bg-rose-50 text-rose-700"
                              : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                        }`}
                      />
                    </td>
                  </tr>
                  <tr className="bg-emerald-50/80 dark:bg-emerald-950/50 font-bold border-t-2 border-emerald-500 text-emerald-900 dark:text-emerald-200">
                    <td className="py-1 px-1.5 font-sans whitespace-nowrap">
                      LANDING MASS (LM)
                    </td>
                    <td className="py-1 px-1.5 text-right whitespace-nowrap">
                      <input
                        type="text"
                        placeholder="LM (kg)"
                        value={lmMass}
                        disabled={selectedMissionIndex === 0}
                        onChange={(e) => setLmMass(e.target.value)}
                        className={`w-full text-right px-1.5 py-0.5 rounded border font-mono text-xs font-bold ${
                          selectedMissionIndex === 0
                            ? "bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200"
                            : errors.lmMass
                              ? "border-rose-500 bg-rose-50 text-rose-700"
                              : "border-emerald-400 bg-white dark:bg-slate-800 text-emerald-800 dark:text-emerald-300"
                        }`}
                      />
                    </td>
                    <td className="py-1 px-1.5 text-right whitespace-nowrap">
                      <input
                        type="text"
                        placeholder="CG (m)"
                        value={lmCg}
                        disabled={selectedMissionIndex === 0}
                        onChange={(e) => setLmCg(e.target.value)}
                        className={`w-full text-right px-1 py-0.5 rounded border font-mono text-xs font-bold ${
                          selectedMissionIndex === 0
                            ? "bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200"
                            : errors.lmCg
                              ? "border-rose-500 bg-rose-50 text-rose-700"
                              : "border-emerald-400 bg-white dark:bg-slate-800 text-emerald-800 dark:text-emerald-300"
                        }`}
                      />
                    </td>
                    <td className="py-1 px-1.5 text-right whitespace-nowrap">
                      <input
                        type="text"
                        placeholder="Momento"
                        value={lmMoment}
                        disabled={selectedMissionIndex === 0}
                        onChange={(e) => setLmMoment(e.target.value)}
                        className={`w-full text-right px-1.5 py-0.5 rounded border font-mono text-xs font-bold ${
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
            )}
          </div>

          {/* Footer Informativo y Botones de Acción */}
          <div className="pt-1 border-t border-slate-200 dark:border-slate-800 shrink-0 space-y-1">
            {/* Aviso de punto obligatorio en la envolvente */}
            {!isStepPassed && selectedMissionIndex !== 0 && (
              <div
                className={`flex items-center justify-between px-2 py-1 rounded-lg border text-[11px] ${
                  errors.envelopePoint
                    ? "bg-rose-50/90 dark:bg-rose-950/40 border-rose-300 dark:border-rose-800 text-rose-900 dark:text-rose-200"
                    : (currentStep === "takeoff" ? (interactiveZfmPoint && interactiveTomPoint) : studentEstimated)
                    ? "bg-sky-50/80 dark:bg-sky-950/30 border-sky-200 dark:border-sky-800 text-sky-950 dark:text-sky-200"
                    : "bg-amber-50/80 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800 text-amber-950 dark:text-amber-200"
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <span>{errors.envelopePoint ? "⚠️" : "📍"}</span>
                  <span>
                    {errors.envelopePoint ? (
                      <strong>{errors.envelopePoint}</strong>
                    ) : currentStep === "takeoff" ? (
                      interactiveZfmPoint && interactiveTomPoint ? (
                        <>
                          Has situado <strong>ZFM (~{studentZfmEstimated?.massKg} kg)</strong> y <strong>TOW (~{studentTomEstimated?.massKg} kg)</strong>.
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
                  className={`text-[10px] font-bold shrink-0 ${
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
              <span className="text-[11px] text-slate-500 italic">
                * Jet A-1 = 0,84 kg/L · Brazo Fuel = 2,630 m · MTOM = 1.700 kg (1.785 kg MÄM)
              </span>

              {selectedMissionIndex === 0 ? (
                <div className="flex items-center gap-1.5">
                  <div className="text-[11px] text-emerald-800 dark:text-emerald-300 font-semibold hidden md:block">
                    ✓ M1 es tu ejemplo guiado resuelto:
                  </div>
                  <button
                    type="button"
                    onClick={() => loadMissionScenario(DA42_PREFLIGHT_MISSIONS[1], 1)}
                    className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs shadow-xs transition-all cursor-pointer hover:scale-105 active:scale-95 flex items-center gap-1"
                  >
                    <span>Ir a M2 ➔</span>
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={handleValidate}
                  className="px-3.5 py-1.5 rounded-xl bg-[#1a80ff] hover:bg-[#0066e6] text-white font-extrabold text-xs shadow-xs transition-all cursor-pointer hover:scale-105 active:scale-95"
                >
                  {currentStep === "takeoff"
                    ? "Comprobar Despegue y Graficar TOW ➔"
                    : "Comprobar Aterrizaje ➔"}
                </button>
              )}
            </div>

            {/* Error alerts */}
            {Object.keys(errors).length > 0 && !errors.envelopePoint && (
              <div className="p-1.5 rounded-lg border border-rose-200 dark:border-rose-800 bg-rose-50/90 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200 text-xs flex items-center justify-between">
                <span>⚠️ {Object.values(errors)[0]}</span>
                <span className="font-bold text-[11px] text-rose-600">Intento {attempts}</span>
              </div>
            )}
            {Object.keys(errors).length > 1 && errors.envelopePoint && (
              <div className="p-1.5 rounded-lg border border-rose-200 dark:border-rose-800 bg-rose-50/90 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200 text-xs flex items-center justify-between">
                <span>⚠️ {Object.values(errors).find((e) => e !== errors.envelopePoint)}</span>
                <span className="font-bold text-[11px] text-rose-600">Intento {attempts}</span>
              </div>
            )}

            {isAllPracticeCompleted && (
              <div className="p-1.5 rounded-lg border border-emerald-300 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 text-xs">
                <strong className="font-bold">🎉 ¡ENHORABUENA! HAS COMPLETADO LOS EJERCICIOS M2 Y M3</strong>
                <p className="text-[11px] m-0 mt-0.5">
                  Has validado correctamente los cálculos y la envolvente oficial DA42.
                </p>
              </div>
            )}

            {!isAllPracticeCompleted && solvedMissions[selectedMissionIndex] && selectedMissionIndex === 1 && (
              <div className="p-1.5 rounded-lg border border-sky-300 dark:border-sky-800 bg-sky-50 dark:bg-sky-950/40 text-sky-900 dark:text-sky-200 text-xs flex items-center justify-between gap-1">
                <div>
                  <strong className="font-bold">✓ ¡Misión M2 completada!</strong>
                  <span className="text-[11px] text-sky-800 dark:text-sky-300 ml-1">Pasa a la Misión M3 para finalizar.</span>
                </div>
                <button
                  type="button"
                  onClick={() => loadMissionScenario(DA42_PREFLIGHT_MISSIONS[2], 2)}
                  className="px-2.5 py-1 rounded-lg bg-[#1a80ff] hover:bg-[#0066e6] text-white font-bold text-xs shrink-0 cursor-pointer transition hover:scale-105"
                >
                  Ir a M3 ➔
                </button>
              </div>
            )}

            {isStepPassed && !isAllPracticeCompleted && !solvedMissions[selectedMissionIndex] && (
              <div className="p-1.5 rounded-lg border border-emerald-300 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 text-xs flex items-center justify-between">
                <span>
                  ✓ {currentStep === "takeoff"
                    ? `¡Despegue válido! TOW: ${expected.tomMass} kg, CG: ${expected.tomCg} m (${isTomInside ? "Envolvente Normal" : "Fuera de límites"}).`
                    : `¡Aterrizaje válido! LM: ${expected.lmMass} kg, CG: ${expected.lmCg} m (${isLmInside ? "Envolvente Normal" : "Fuera de límites"}).`}
                </span>
                <span className="font-bold text-xs text-emerald-600">COMPLETADO</span>
              </div>
            )}
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
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs whitespace-nowrap">
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
                <div className="flex items-center gap-1 bg-slate-200/80 dark:bg-slate-800 p-0.5 rounded-md text-[10px] font-bold">
                  <button
                    type="button"
                    onClick={() => setActivePlotPoint("zfm")}
                    className={`px-1.5 py-0.5 rounded transition ${
                      activePlotPoint === "zfm"
                        ? "bg-sky-600 text-white shadow-2xs"
                        : "text-slate-600 dark:text-slate-300"
                    }`}
                  >
                    1. ZFM {interactiveZfmPoint ? "✓" : "📍"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setActivePlotPoint("tom")}
                    className={`px-1.5 py-0.5 rounded transition ${
                      activePlotPoint === "tom"
                        ? "bg-emerald-600 text-white shadow-2xs"
                        : "text-slate-600 dark:text-slate-300"
                    }`}
                  >
                    2. TOW {interactiveTomPoint ? "✓" : "📍"}
                  </button>
                </div>
              ) : (
                <span className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-300 text-[10px] font-bold">
                  LW {interactiveClickPoint ? "✓" : "📍"}
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
              onMouseDown={(e) => {
                if (e.button !== 0) return;
                isDraggingRef.current = true;
                hasMovedRef.current = false;
                dragStartRef.current = { x: e.clientX, y: e.clientY };
                panStartRef.current = { ...panOffset };
              }}
              onMouseMove={(e) => {
                if (!isDraggingRef.current) return;
                const dx = e.clientX - dragStartRef.current.x;
                const dy = e.clientY - dragStartRef.current.y;
                if (Math.abs(dx) > 3 || Math.abs(dy) > 3) {
                  hasMovedRef.current = true;
                  setIsPanning(true);
                  setPanOffset(clampPan(panStartRef.current.x + dx, panStartRef.current.y + dy, zoomLevel));
                }
              }}
              onMouseUp={() => {
                isDraggingRef.current = false;
                setIsPanning(false);
              }}
              onMouseLeave={() => {
                isDraggingRef.current = false;
                setIsPanning(false);
                setHoverPoint(null);
              }}
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
                            r="9"
                            fill="#0284c7"
                            stroke="#ffffff"
                            strokeWidth="3"
                          />
                          <text
                            x={interactiveZfmPoint.x + 12}
                            y={interactiveZfmPoint.y - 10}
                            fill="#0284c7"
                            fontSize="18"
                            fontWeight="bold"
                            filter="drop-shadow(0 1px 2px rgba(255,255,255,0.9))"
                          >
                            ZFM ({studentZfmEstimated?.massKg} kg)
                          </text>
                        </g>
                      )}

                      {/* TOM Point */}
                      {interactiveTomPoint && (
                        <g>
                          <circle
                            cx={interactiveTomPoint.x}
                            cy={interactiveTomPoint.y}
                            r="10"
                            fill="#059669"
                            stroke="#ffffff"
                            strokeWidth="3.5"
                          />
                          <text
                            x={interactiveTomPoint.x + 12}
                            y={interactiveTomPoint.y + 18}
                            fill="#059669"
                            fontSize="19"
                            fontWeight="bold"
                            filter="drop-shadow(0 1px 2px rgba(255,255,255,0.9))"
                          >
                            TOW ({studentTomEstimated?.massKg} kg)
                          </text>
                        </g>
                      )}

                      {/* Target Hints si falla 3 veces */}
                      {showTargetHint && (
                        <>
                          <circle
                            cx={zfmCoords.x}
                            cy={zfmCoords.y}
                            r="12"
                            fill="none"
                            stroke="#0284c7"
                            strokeWidth="2.5"
                            strokeDasharray="4 4"
                          />
                          <circle
                            cx={tomCoords.x}
                            cy={tomCoords.y}
                            r="12"
                            fill="none"
                            stroke="#059669"
                            strokeWidth="2.5"
                            strokeDasharray="4 4"
                          />
                        </>
                      )}
                    </>
                  )}

                  {/* Puntos de Aterrizaje */}
                  {currentStep === "landing" && (
                    <>
                      {interactiveClickPoint && (
                        <g>
                          <circle
                            cx={interactiveClickPoint.x}
                            cy={interactiveClickPoint.y}
                            r="10"
                            fill="#059669"
                            stroke="#ffffff"
                            strokeWidth="3.5"
                          />
                          <text
                            x={interactiveClickPoint.x + 12}
                            y={interactiveClickPoint.y - 10}
                            fill="#059669"
                            fontSize="19"
                            fontWeight="bold"
                            filter="drop-shadow(0 1px 2px rgba(255,255,255,0.9))"
                          >
                            LW ({studentEstimated?.massKg} kg)
                          </text>
                        </g>
                      )}

                      {showTargetHint && (
                        <circle
                          cx={lmCoords.x}
                          cy={lmCoords.y}
                          r="12"
                          fill="none"
                          stroke="#059669"
                          strokeWidth="2.5"
                          strokeDasharray="4 4"
                        />
                      )}
                    </>
                  )}

                  {/* Hover Crosshair con live CG & Mass */}
                  {hoverPoint && (
                    <g pointerEvents="none">
                      <line
                        x1={hoverPoint.x}
                        y1="0"
                        x2={hoverPoint.x}
                        y2="947"
                        stroke="#64748b"
                        strokeWidth="1"
                        strokeDasharray="4 4"
                        opacity="0.7"
                      />
                      <line
                        x1="0"
                        y1={hoverPoint.y}
                        x2="1081"
                        y2={hoverPoint.y}
                        stroke="#64748b"
                        strokeWidth="1"
                        strokeDasharray="4 4"
                        opacity="0.7"
                      />
                      <circle cx={hoverPoint.x} cy={hoverPoint.y} r="4" fill="#3b82f6" />
                      {liveHoverCg && (
                        <rect
                          x={Math.min(920, hoverPoint.x + 8)}
                          y={Math.max(25, hoverPoint.y - 32)}
                          width="145"
                          height="28"
                          rx="6"
                          fill="#0f172a"
                          opacity="0.9"
                        />
                      )}
                      {liveHoverCg && (
                        <text
                          x={Math.min(920, hoverPoint.x + 8) + 8}
                          y={Math.max(25, hoverPoint.y - 32) + 18}
                          fill="#ffffff"
                          fontSize="12"
                          fontFamily="monospace"
                          fontWeight="bold"
                        >
                          {liveHoverCg.cgM.toFixed(3)} m · {Math.round(liveHoverCg.massKg)} kg
                        </text>
                      )}
                    </g>
                  )}
                </svg>
              </div>
            </div>
          </div>

          {/* Footer Informativo */}
          <div className="pt-1 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 flex items-center justify-between shrink-0">
            <span>
              * Límites CG DA42: <strong>2,35 m</strong> (hasta 1.468 kg) → <strong>2,40 m</strong> (1.700 kg) · Trasero: <strong>2,48 m</strong>
            </span>
            <span className="font-semibold text-emerald-700 dark:text-emerald-400">
              MTOM: 1.700 kg (1.785 kg MÄM)
            </span>
          </div>
        </div>
      </div>

      <ExerciseInstructionsModal
        isOpen={showGuideModal}
        onClose={() => setShowGuideModal(false)}
      />
    </div>
  );
}
