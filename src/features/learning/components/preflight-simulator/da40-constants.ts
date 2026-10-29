import { PreflightMission } from "./types";
import { checkValueTolerance } from "./constants";

export { checkValueTolerance };

export const DA40_DATA = {
  registration: "EC-XXX",
  model: "Diamond DA40 TDI",
  engine: "Thielert TAE 125-01 / CD-135 (99 kW / 135 HP)",
  mtomKg: 1150,
  mtomLbs: 2535,
  mlmKg: 1150,
  minFlightMassKg: 780,
  emptyWeightKg: 735.0,
  emptyWeightArm: 2.476,
  emptyWeightMoment: 1820.0,
  arms: {
    pilotsFront: 2.30,
    passengersRear: 3.25,
    baggageArea1: 3.65, // Standard tray max 30 kg
    fuel: 2.63, // Wing tanks
  },
  fuelDensityKgL: 0.84, // Jet A-1 / Diésel EN 590
  maxFuelLiters: 106,
};

export const DA40_PREFLIGHT_MISSIONS: PreflightMission[] = [
  {
    id: "da40-mision-1",
    name: "Misión 1: Vuelo Local de Instrucción (GCXO - Tenerife Norte)",
    badge: "Básico · Normal",
    description: "Vuelo de maniobras en zona local de Tenerife Norte (GCXO) con Instructor y Alumno. 80 Litros de JET A-1 en depósitos estándar. Régimen de crucero al 60% de carga (15,1 L/h).",
    scenario: {
      origin: "GCXO (Tenerife Norte)",
      destination: "GCXO (Tenerife Norte)",
      distanceNm: 60,
      altPressFt: 2000,
      oatC: 20,
      windKt: 9, // 9 kt en cara
      runwayType: "asphalt",
      runwayToraM: 3171,
      runwayLdaM: 3171,
      pilotsFrontKg: 157, // Alumno 75 kg + Instructor 82 kg
      passengersRearKg: 0,
      baggageKg: 10,
      takeoffFuelLiters: 80,
      cruiseLoadPct: 60, // 60% Load = 15.1 L/h
      flightTimeHrs: 1.0,
    },
  },
  {
    id: "da40-mision-2",
    name: "Misión 2: Navegación Interinsular (GCXO - GCGM)",
    badge: "Intermedio · Travesía",
    description: "Vuelo de travesía interinsular desde Tenerife Norte (GCXO) a La Gomera (GCGM) con 3 ocupantes y equipaje. Crucero a 6.000 ft al 60% de potencia (15,1 L/h).",
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
      pilotsFrontKg: 155, // 2 ocupantes delante (78 kg + 77 kg)
      passengersRearKg: 75, // 1 pasajero detrás
      baggageKg: 20,
      takeoffFuelLiters: 65,
      cruiseLoadPct: 60,
      flightTimeHrs: 0.6,
    },
  },
  {
    id: "da40-mision-3",
    name: "Misión 3: Desafío de Carga y Centrado (GCTS - GCXO)",
    badge: "Desafío · Alerta de Límites",
    description: "Travesía interinsular desde Tenerife Sur (GCTS) hacia Tenerife Norte (GCXO) con 4 ocupantes y equipaje máximo en bandeja (30 kg). Crucero al 70% de potencia (18,5 L/h).",
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
      pilotsFrontKg: 140, // 2 ocupantes delante ligeros (70 kg c/u)
      passengersRearKg: 150, // 2 ocupantes detrás (75 kg c/u)
      baggageKg: 30, // Máximo en bandeja estándar
      takeoffFuelLiters: 90,
      cruiseLoadPct: 70, // 70% Load = 18.5 L/h
      flightTimeHrs: 0.5,
    },
  },
];

/**
 * Checks whether a given (massKg, cgM) coordinate is within the DA40 Normal Category Envelope
 */
export function isCgInsideNormalDA40(massKg: number, cgM: number): boolean {
  if (massKg < 780 || massKg > 1150) return false;
  let fwdLimit = 2.40;
  if (massKg > 980) {
    fwdLimit = 2.40 + ((massKg - 980) / (1150 - 980)) * (2.46 - 2.40);
  }
  const aftLimit = 2.59;
  return cgM >= fwdLimit && cgM <= aftLimit;
}

/**
 * Checks whether a given (massKg, cgM) coordinate is within the DA40 Utility Category Envelope
 */
export function isCgInsideUtilityDA40(massKg: number, cgM: number): boolean {
  if (massKg < 780 || massKg > 980) return false;
  const fwdLimit = 2.40;
  const aftLimit = 2.59;
  return cgM >= fwdLimit && cgM <= aftLimit;
}

/**
 * Maps Mass (kg) and CG (m) into DA40 SVG viewBox (1050 x 870) coordinates
 */
export function mapCgToSvgCoordsDA40(massKg: number, cgM: number): { x: number; y: number } {
  const clampedCg = Math.max(2.38, Math.min(2.62, cgM));
  const x = 184 + (clampedCg - 2.40) * 3557.89;

  const clampedMass = Math.max(740, Math.min(1200, massKg));
  const y = 680 - (clampedMass - 780) * 1.5027;

  return { x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 };
}

/**
 * Inverse mapping for DA40: maps (x, y) on SVG to Mass (kg) and CG (m)
 */
export function mapSvgCoordsToCgDA40(x: number, y: number): { massKg: number; cgM: number } {
  const cgM = 2.40 + (x - 184) / 3557.89;
  const massKg = 780 + (680 - y) / 1.5027;

  return {
    massKg: Math.round(massKg),
    cgM: Math.round(cgM * 1000) / 1000,
  };
}

export interface DA40PerformanceScenario {
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
}

export const DA40_PERFORMANCE_SCENARIOS: DA40PerformanceScenario[] = [
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
    windDesc: "9 kt en cara (-6% a distancias según AFM 5.3.5)",
    surfaceDesc: "Asfalto seco nivelado (sin penalización)",
    runwayToraM: 3171,
    runwayTodaM: 3171,
    runwayAsdaM: 3171,
    runwayLdaM: 3171,
    declaredDistancesNote: "AIP AD 2-GCXO: RWY 30 (pista preferente / habitual). TORA = TODA = ASDA = LDA = 3.171 m.",
    baseToRun: 415,
    baseTo50: 545,
    baseLd50: 660,
    toRun: 390,
    to50ft: 512,
    ld50ft: 620,
    tip: "Los Rodeos (2.000 ft): Requiere 512 m sobre 50 ft (+70 m frente a nivel del mar).",
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
    windDesc: "9 kt en cara (-6% a distancias según AFM 5.3.5)",
    surfaceDesc: "Asfalto seco nivelado (sin penalización)",
    runwayToraM: 3200,
    runwayTodaM: 3260,
    runwayAsdaM: 3200,
    runwayLdaM: 3200,
    declaredDistancesNote: "AIP AD 2-GCTS: RWY 07/25 cuenta con CWY de 60 m (TODA = 3.260 m ≠ TORA 3.200 m).",
    baseToRun: 360,
    baseTo50: 470,
    baseLd50: 615,
    toRun: 338,
    to50ft: 442,
    ld50ft: 578,
    tip: "Reina Sofía (Nivel del mar / 0 ft): Aire denso con óptima performance; solo 442 m sobre 50 ft.",
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
    windDesc: "9 kt en cara (-6% a distancias según AFM 5.3.5)",
    surfaceDesc: "Asfalto seco nivelado",
    runwayToraM: 1500,
    runwayTodaM: 1560,
    runwayAsdaM: 1500,
    runwayLdaM: 1500,
    declaredDistancesNote: "AIP AD 2-GCGM: RWY 09/27 cuenta con CWY de 60 m (TODA = 1.560 m ≠ TORA 1.500 m).",
    baseToRun: 385,
    baseTo50: 505,
    baseLd50: 635,
    toRun: 362,
    to50ft: 475,
    ld50ft: 597,
    tip: "La Gomera (1.000 ft): Pista de 1.500 m. Verificación clave de márgenes sobre terreno insular.",
  },
];

