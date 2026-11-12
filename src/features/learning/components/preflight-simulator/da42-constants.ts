import { PreflightMission } from "./types";
import { checkValueTolerance } from "./constants";

export { checkValueTolerance };

export const DA42_DATA = {
  registration: "DA42",
  model: "Diamond DA42 Twin Star",
  engines: "Continental CD-135 / CD-155",
  mtomKg: 1700,
  mtomMAMKg: 1785, // con MÄM 42-088
  mlmKg: 1700,
  mzfwKg: 1650,
  minFlightMassKg: 1250,
  emptyWeightKg: 1250.0,
  emptyWeightArm: 2.420,
  emptyWeightMoment: 3025.0,
  arms: {
    pilotsFront: 2.30,
    passengersRear: 3.25,
    baggageNose: 0.60, // Morro (máx 30 kg)
    baggageCabin: 3.89, // Cabina (máx 45 kg)
    baggageExt: 4.54, // Extensión (máx 20 kg)
    fuelMain: 2.63, // Tanques principales (189 L utilizables)
    fuelAux: 3.20, // Tanques auxiliares (52 L utilizables)
    deiceTks: 1.00, // Fluido TKS (máx 30 L / 33 kg)
  },
  fuelDensityKgL: 0.84, // Jet A-1 / Diésel EN 590
  tksDensityKgL: 1.10, // Fluido TKS DTD 406B
  maxFuelMainL: 189,
  maxFuelAuxL: 52,
};

export type DA42PreflightMission = PreflightMission & {
  baggageNoseKg: number;
  baggageCabinKg: number;
};

export const DA42_PREFLIGHT_MISSIONS: DA42PreflightMission[] = [
  {
    id: "da42-mision-1",
    name: "Misión 1: Vuelo Local Multimotor (GCXO - Tenerife Norte)",
    badge: "Básico · Normal",
    description: "Vuelo local de Tenerife Norte (GCXO) con Instructor y Alumno (160 kg total), 10 kg equipaje en morro y 15 kg en cabina. 140 kg (166,7 L) Jet A-1 en tanques principales. Crucero bimotor al 60% de carga (21 kg/h).",
    baggageNoseKg: 10,
    baggageCabinKg: 15,
    scenario: {
      origin: "GCXO (Tenerife Norte)",
      destination: "GCXO (Tenerife Norte)",
      distanceNm: 60,
      altPressFt: 2000,
      oatC: 20,
      windKt: 9,
      runwayType: "asphalt",
      runwayToraM: 3171,
      runwayLdaM: 3171,
      pilotsFrontKg: 160, // 2 ocupantes delante (80 kg + 80 kg)
      passengersRearKg: 0,
      baggageKg: 25, // 10 kg morro + 15 kg cabina
      takeoffFuelLiters: 166.7, // 140.0 kg
      cruiseLoadPct: 60,
      flightTimeHrs: 1.0,
    },
  },
  {
    id: "da42-mision-2",
    name: "Misión 2: Navegación Interinsular (GCXO - GCGM)",
    badge: "Intermedio · Travesía",
    description: "Travesía interinsular desde Tenerife Norte (GCXO) a La Gomera (GCGM) con 3 ocupantes (155 kg delante, 75 kg detrás) y 40 kg de equipaje repartido (15 kg morro, 25 kg cabina). 150 L de combustible al despegue.",
    baggageNoseKg: 15,
    baggageCabinKg: 25,
    scenario: {
      origin: "GCXO (Tenerife Norte)",
      destination: "GCGM (La Gomera)",
      distanceNm: 60,
      altPressFt: 1000,
      oatC: 22,
      windKt: 5,
      runwayType: "asphalt",
      runwayToraM: 1500,
      runwayLdaM: 1500,
      pilotsFrontKg: 155, // 78 kg + 77 kg
      passengersRearKg: 75,
      baggageKg: 40, // 15 kg morro + 25 kg cabina
      takeoffFuelLiters: 150, // 126.0 kg
      cruiseLoadPct: 60,
      flightTimeHrs: 0.6,
    },
  },
  {
    id: "da42-mision-3",
    name: "Misión 3: Desafío de Carga y Centrado (GCTS - GCXO)",
    badge: "Desafío · Alerta de Límites",
    description: "Travesía interinsular desde Tenerife Sur (GCTS) hacia Tenerife Norte (GCXO) con 4 ocupantes (160 kg delante, 150 kg detrás) y equipaje pesado (20 kg morro, 30 kg cabina). Crucero bimotor al 70% de potencia.",
    baggageNoseKg: 20,
    baggageCabinKg: 30,
    scenario: {
      origin: "GCTS (Tenerife Sur)",
      destination: "GCXO (Tenerife Norte)",
      distanceNm: 45,
      altPressFt: 0,
      oatC: 24,
      windKt: -4,
      runwayType: "asphalt",
      runwayToraM: 3200,
      runwayLdaM: 3171,
      pilotsFrontKg: 160,
      passengersRearKg: 150,
      baggageKg: 50, // 20 kg morro + 30 kg cabina
      takeoffFuelLiters: 100, // 84.0 kg
      cruiseLoadPct: 70,
      flightTimeHrs: 0.5,
    },
  },
];

export type DA42LoadsheetInputs = {
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

export const M1_DA42_ZFM_POINT = { x: 466.6, y: 644.9 };
export const M1_DA42_TOM_POINT = { x: 565.8, y: 498.0 };
export const M1_DA42_LM_POINT = { x: 551.0, y: 520.1 };

export const DA42_INITIAL_LOADSHEET_STORE: Record<number, DA42LoadsheetInputs> = {
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
    interactiveZfmPoint: M1_DA42_ZFM_POINT,
    interactiveTomPoint: M1_DA42_TOM_POINT,
    interactiveClickPoint: M1_DA42_LM_POINT,
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

/**
 * Checks whether a given (massKg, cgM) coordinate is within the DA42 Certified Envelope
 */
export function isCgInsideEnvelopeDA42(massKg: number, cgM: number, hasMAM42088: boolean = false): boolean {
  const maxMass = hasMAM42088 ? DA42_DATA.mtomMAMKg : DA42_DATA.mtomKg;
  if (massKg < DA42_DATA.minFlightMassKg || massKg > maxMass) return false;

  let fwdLimit: number;
  if (massKg <= 1468) {
    fwdLimit = 2.35;
  } else if (massKg <= 1700) {
    fwdLimit = 2.35 + ((massKg - 1468) / (1700 - 1468)) * (2.40 - 2.35);
  } else {
    // MÄM 42-088 extension up to 1785 kg
    fwdLimit = 2.40 + ((massKg - 1700) / (1785 - 1700)) * (2.418 - 2.40);
  }

  const aftLimit = 2.48;
  return cgM >= fwdLimit && cgM <= aftLimit;
}

/**
 * Maps Mass (kg) and CG (m) into DA42 SVG viewBox (1081 x 947) coordinates
 * based on the official DA42 mass & balance chart (da42-mass-limits-table.png)
 */
export function mapCgToSvgCoordsDA42(massKg: number, cgM: number): { x: number; y: number } {
  const clampedCg = Math.max(2.34, Math.min(2.51, cgM));
  // 2.35 m at x = 174, 2.50 m at x = 918 (4960 px per meter, 49.6 px per 0.01 m)
  const x = 174 + (clampedCg - 2.35) * 4960;

  // 1250 kg at y = 839, 1800 kg at y = 262 (1.04909 px per kg, ~52.5 px per 50 kg)
  const clampedMass = Math.max(1200, Math.min(1820, massKg));
  const y = 839 - (clampedMass - 1250) * 1.04909;

  return { x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 };
}

/**
 * Inverse mapping for DA42: maps (x, y) on SVG to Mass (kg) and CG (m)
 */
export function mapSvgCoordsToCgDA42(x: number, y: number): { massKg: number; cgM: number } {
  const cgM = 2.35 + (x - 174) / 4960;
  const massKg = 1250 + (839 - y) / 1.04909;

  return {
    massKg: Math.round(massKg),
    cgM: Math.round(cgM * 1000) / 1000,
  };
}

export type DA42PerformanceScenario = {
  id: string;
  icao: string;
  name: string;
  shortName: string;
  runway: string;
  elevationDesc: string;
  pressAltFt: number;
  oatC: number;
  windKt: number;
  windDesc: string;
  surfaceDesc: string;
  runwayToraM: number;
  runwayTodaM: number;
  runwayAsdaM: number;
  runwayLdaM: number;
  declaredDistancesNote: string;
  baseToRun: number;
  baseTo50: number;
  baseLd50: number;
  toRun: number;
  to50ft: number;
  ld50ft: number;
  tip: string;
};

export const DA42_PERFORMANCE_SCENARIOS: DA42PerformanceScenario[] = [
  {
    id: "gcxo",
    icao: "GCXO",
    name: "GCXO · Tenerife Norte (Los Rodeos)",
    shortName: "GCXO · Los Rodeos",
    runway: "RWY 30",
    elevationDesc: "Elevación 2.077 ft · Alt. Presión: 2.000 ft",
    pressAltFt: 2000,
    oatC: 20,
    windKt: 9,
    windDesc: "9 kt en cara (-6% a distancias según AFM Fig. 5.3.6)",
    surfaceDesc: "Asfalto seco nivelado (sin penalización)",
    runwayToraM: 3171,
    runwayTodaM: 3171,
    runwayAsdaM: 3171,
    runwayLdaM: 3171,
    declaredDistancesNote: "AIP AD 2-GCXO: RWY 30 (pista preferente / habitual). TORA = TODA = ASDA = LDA = 3.171 m.",
    baseToRun: 405,
    baseTo50: 625,
    baseLd50: 630,
    toRun: 380,
    to50ft: 588,
    ld50ft: 592,
    tip: "Los Rodeos (2.000 ft): Requiere 588 m sobre 50 ft (+90 m frente a nivel del mar a 1.700 kg).",
  },
  {
    id: "gcts",
    icao: "GCTS",
    name: "GCTS · Tenerife Sur (Reina Sofía)",
    shortName: "GCTS · Tenerife Sur",
    runway: "RWY 07",
    elevationDesc: "Elevación 209 ft · Alt. Presión: 0 ft (S.L.)",
    pressAltFt: 0,
    oatC: 20,
    windKt: 9,
    windDesc: "9 kt en cara (-6% a distancias según AFM Fig. 5.3.6)",
    surfaceDesc: "Asfalto seco nivelado (sin penalización)",
    runwayToraM: 3200,
    runwayTodaM: 3260,
    runwayAsdaM: 3200,
    runwayLdaM: 3200,
    declaredDistancesNote: "AIP AD 2-GCTS: RWY 07/25 cuenta con CWY de 60 m (TODA = 3.260 m ≠ TORA 3.200 m).",
    baseToRun: 348,
    baseTo50: 530,
    baseLd50: 572,
    toRun: 327,
    to50ft: 498,
    ld50ft: 538,
    tip: "Reina Sofía (Nivel del mar / 0 ft): Óptima densidad bimotor; solo 498 m sobre 50 ft.",
  },
  {
    id: "gcgm",
    icao: "GCGM",
    name: "GCGM · La Gomera",
    shortName: "GCGM · La Gomera",
    runway: "RWY 09",
    elevationDesc: "Elevación 715 ft · Alt. Presión: 1.000 ft",
    pressAltFt: 1000,
    oatC: 20,
    windKt: 9,
    windDesc: "9 kt en cara (-6% a distancias según AFM Fig. 5.3.6)",
    surfaceDesc: "Asfalto seco nivelado",
    runwayToraM: 1500,
    runwayTodaM: 1560,
    runwayAsdaM: 1500,
    runwayLdaM: 1500,
    declaredDistancesNote: "AIP AD 2-GCGM: RWY 09/27 cuenta con CWY de 60 m (TODA = 1.560 m ≠ TORA 1.500 m).",
    baseToRun: 375,
    baseTo50: 575,
    baseLd50: 600,
    toRun: 352,
    to50ft: 540,
    ld50ft: 564,
    tip: "La Gomera (1.000 ft): Pista de 1.500 m. Verificación clave de aceleración-parada insular.",
  },
];

