import { PreflightMission } from "./types";

export const EC_NNA_DATA = {
  registration: "EC-NNA",
  model: "Reims/Cessna F172N",
  engine: "Continental CD-155 (TAE 125-02-114, 114 kW / 155 HP)",
  mtomKg: 1043,
  mtomLbs: 2300,
  emptyWeightKg: 755.44,
  emptyWeightArm: 1.042,
  emptyWeightMoment: 787.23,
  arms: {
    pilotsFront: 0.940,
    passengersRear: 1.854,
    baggageArea1: 2.413,
    fuel: 1.168,
  },
  fuelDensityKgL: 0.84, // Jet A-1 / Diésel
};

export const PREFLIGHT_MISSIONS: PreflightMission[] = [
  {
    id: "mision-1",
    name: "Misión 1: Vuelo Local de Instrucción (LECU)",
    badge: "Básico · Normal",
    description: "Vuelo de maniobras en zona LECU con Instructor y Alumno. 80 Litros de combustible en tanques estándar. Crucero de escuela al 50% de potencia CD-155 (15.3 L/h).",
    scenario: {
      origin: "LECU (Cuatro Vientos)",
      destination: "LECU (Cuatro Vientos)",
      distanceNm: 60,
      altPressFt: 2000,
      oatC: 20,
      windKt: 9, // 9 kt en cara
      runwayType: "asphalt",
      runwayToraM: 1150,
      runwayLdaM: 1050,
      pilotsFrontKg: 157, // Alumno 75 kg + Instructor 82 kg
      passengersRearKg: 0,
      baggageKg: 5,
      takeoffFuelLiters: 80,
      cruiseLoadPct: 50, // Régimen de crucero de escuela (50% Load = 15.3 L/h)
      flightTimeHrs: 1.0,
    },
  },
  {
    id: "mision-2",
    name: "Misión 2: Navegación de Travesía a Valladolid (LECU - LEVD)",
    badge: "Intermedio · Cerca de MTOM",
    description: "Vuelo de travesía con 3 ocupantes y equipaje. Crucero económico de escuela a 6.000 ft al 50% de potencia CD-155 (15.3 L/h).",
    scenario: {
      origin: "LECU (Cuatro Vientos)",
      destination: "LEVD (Valladolid)",
      distanceNm: 105,
      altPressFt: 2500, // Elevación media de meseta
      oatC: 25,
      windKt: 5, // 5 kt viento de cara
      runwayType: "asphalt",
      runwayToraM: 1150,
      runwayLdaM: 1050,
      pilotsFrontKg: 155, // 2 pilotos 78 kg y 77 kg
      passengersRearKg: 70, // 1 pasajero atrás
      baggageKg: 18,
      takeoffFuelLiters: 50,
      cruiseLoadPct: 50, // 50% Load = 15.3 L/h
      flightTimeHrs: 1.0,
    },
  },
  {
    id: "mision-3",
    name: "Misión 3: Desafío de Carga y Centrado Crítico (Alerta)",
    badge: "Desafío · Alerta de Límites",
    description: "Configuración con ocupantes pesados atrás y equipaje al límite. Crucero económico al 50% de potencia CD-155 (15.3 L/h).",
    scenario: {
      origin: "LECU (Cuatro Vientos)",
      destination: "LECU (Cuatro Vientos)",
      distanceNm: 50,
      altPressFt: 2000,
      oatC: 30,
      windKt: -4, // 4 kt viento en cola
      runwayType: "grass_dry",
      runwayToraM: 650,
      runwayLdaM: 600,
      pilotsFrontKg: 120, // 2 pilotos muy ligeros (60 kg c/u)
      passengersRearKg: 165, // 2 ocupantes pesados atrás (85 kg + 80 kg)
      baggageKg: 45, // Equipaje abundante atrás
      takeoffFuelLiters: 65,
      cruiseLoadPct: 50, // 50% Load = 15.3 L/h
      flightTimeHrs: 0.8,
    },
  },
];

/**
 * Checks whether a given (massKg, cgM) coordinate is within the Normal Category Envelope
 */
export function isCgInsideNormal(massKg: number, cgM: number): boolean {
  if (massKg < 680 || massKg > EC_NNA_DATA.mtomKg) return false;
  const cgMm = cgM * 1000;
  const aftLimit = 1201; // 47.3 inches = 1201 mm
  // Forward limit: 889 mm up to 885 kg, sloping to 978 mm at 1043 kg
  let fwdLimit = 889;
  if (massKg > 885) {
    fwdLimit = 889 + ((massKg - 885) / (1043 - 885)) * (978 - 889);
  }
  return cgMm >= fwdLimit && cgMm <= aftLimit;
}

/**
 * Checks whether a given (massKg, cgM) coordinate is within the Utility Category Envelope
 */
export function isCgInsideUtility(massKg: number, cgM: number): boolean {
  if (massKg < 680 || massKg > 907) return false;
  const cgMm = cgM * 1000;
  const aftLimit = 1029; // 40.5 inches = 1029 mm
  let fwdLimit = 889;
  if (massKg > 885) {
    fwdLimit = 889 + ((massKg - 885) / (1043 - 885)) * (978 - 889);
  }
  return cgMm >= fwdLimit && cgMm <= aftLimit;
}

/**
 * Maps Mass (kg) and CG (m) into SVG viewBox (1140 x 880) coordinates
 * based on the Illustrator grid coordinates of figure_6_8_center_of_gravity_limits_modificado.svg
 */
export function mapCgToSvgCoords(massKg: number, cgM: number): { x: number; y: number } {
  const cgMm = cgM * 1000;
  // X axis: 875 mm is at X ≈ 158.0 px, 1200 mm is at X ≈ 945.0 px (span of 325 mm = 787 px -> ~2.4215 px/mm)
  const x875 = 158.0;
  const x1200 = 945.0;
  const clampedCg = Math.max(860, Math.min(1220, cgMm));
  const x = x875 + ((clampedCg - 875) / (1200 - 875)) * (x1200 - x875);

  // Y axis: 700 kg is at Y ≈ 666.0 px, 1050 kg is at Y ≈ 176.0 px (span of 350 kg = 490 px -> ~1.40 px/kg)
  const y700 = 666.0;
  const y1050 = 176.0;
  const clampedMass = Math.max(650, Math.min(1100, massKg));
  const y = y700 - ((clampedMass - 700) / (1050 - 700)) * (y700 - y1050);

  return { x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 };
}

/**
 * Inverse mapping: maps a click coordinate (x, y) on the SVG to Mass (kg) and CG (m)
 */
export function mapSvgCoordsToCg(x: number, y: number): { massKg: number; cgM: number } {
  const x875 = 158.0;
  const x1200 = 945.0;
  const cgMm = 875 + ((x - x875) / (x1200 - x875)) * (1200 - 875);

  const y700 = 666.0;
  const y1050 = 176.0;
  const massKg = 700 + ((y700 - y) / (y700 - y1050)) * (1050 - 700);

  return {
    massKg: Math.round(massKg),
    cgM: Math.round((cgMm / 1000) * 1000) / 1000,
  };
}

/**
 * Checks a calculated numerical value against expected value with allowed tolerance
 */
export function checkValueTolerance(
  actual: number,
  expected: number,
  relTolerance = 0.03, // 3%
  absTolerance = 0.15
): { isOk: boolean; isExact: boolean; diff: number } {
  const diff = Math.abs(actual - expected);
  if (diff <= 0.001) {
    return { isOk: true, isExact: true, diff: 0 };
  }
  const maxAllowed = Math.max(absTolerance, Math.abs(expected) * relTolerance);
  const isOk = diff <= maxAllowed;
  return { isOk, isExact: diff < 0.01, diff };
}
