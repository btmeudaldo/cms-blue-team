export type PreflightMission = {
  id: string;
  name: string;
  badge: string;
  description: string;
  scenario: {
    origin: string;
    destination: string;
    distanceNm: number;
    altPressFt: number;
    oatC: number;
    windKt: number; // positive = headwind, negative = tailwind
    runwayType: "asphalt" | "grass_dry";
    runwayToraM: number;
    runwayLdaM: number;
    pilotsFrontKg: number;
    passengersRearKg: number;
    baggageKg: number;
    takeoffFuelLiters: number;
    cruiseLoadPct: number; // e.g. 70
    flightTimeHrs: number; // e.g. 1.2
  };
};

export type LoadsheetCalculationResult = {
  emptyWeightKg: number;
  emptyWeightArm: number;
  emptyWeightMoment: number;
  pilotsMass: number;
  pilotsMoment: number;
  passengersMass: number;
  passengersMoment: number;
  baggageMass: number;
  baggageMoment: number;
  zfmMass: number;
  zfmMoment: number;
  fuelMass: number;
  fuelMoment: number;
  tomMass: number;
  tomMoment: number;
  tomCgM: number;
  tripFuelMass: number;
  tripFuelMoment: number;
  lmMass: number;
  lmMoment: number;
  lmCgM: number;
  isTomInsideNormal: boolean;
  isTomInsideUtility: boolean;
  isLmInsideNormal: boolean;
  isLmInsideUtility: boolean;
};
