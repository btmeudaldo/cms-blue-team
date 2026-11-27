/**
 * VAAF-T2 — Performance y planificación del vuelo: cartas IFR y CFP (0,8 h aprox.).
 *
 * Alcance: Curso APS MCC — Airbus A320ceo CFM56-5B (simulador Entrol A32).
 * Fuentes: Performance Manual B4 REV69 (secciones 2 Take-off, 3 Engine Failure Procedure, 4 Cruise, 5 Landing,
 * 6 Contaminated Runway y 7 LVO; solo bloques "Applicable to: ALL" o A320) y Airbus Tutorial PDP Jan 2024 (IFR Charts,
 * p. 42–116; Computerized Flight Plan, p. 117–136). Se omiten nombres del operador, del proveedor de procedimientos
 * y referencias a su manual de operaciones. No se usan las capturas de la EFB del Performance Manual porque muestran
 * matrículas. Los límites del avión están en VAAF-T1; las páginas del MCDU, en SIS-06.
 */
import { MCC_MODULES, joinSlides, mccMinSeconds, mccVideoSeconds, type MccLesson, type MccSlideSpec } from "./slide-builder.ts";

const MCC_COURSE_ID = "a3200000-0000-0000-0000-000000000320";
const IMG_BASE = "https://www.blueteam.es/elearning/media/mcc/pdp";
const EYEBROW = "APS MCC · A320 · VAAF-T2";

/** Versión común de caché de las figuras nuevas del Performance Manual. */
const IMG_VERSION = 1795640000;
const pmFig = (name: string) => `${IMG_BASE}/fcom_a320_vaaf2_${name}.webp?v=${IMG_VERSION}`;
/** Figuras ya publicadas en SIS-04 y SIS-06 (misma URL y versión que en su lección). */
const sisFig = (name: string, version: number) => `${IMG_BASE}/fcom_a320_${name}.webp?v=${version}`;
const SIS4 = 1795636000;
const SIS6 = 1795638000;
const chart = (page: number) => `${IMG_BASE}/p${String(page).padStart(3, "0")}_ifr_charts.webp`;
const cfp = (page: number) => `${IMG_BASE}/p${String(page).padStart(3, "0")}_computerized_flight_plan.webp`;
const pm = (sections: string) => `Source: Performance Manual ${sections}`;
const pdp = (sections: string) => `Source: PDP Jan 2024 ${sections}`;

const VAAF_T2_SLIDES: MccSlideSpec[] = [
  // ── A. Performance ──────────────────────────────────────────────────────
  {
    comment: "SLIDE VAAF-T2.1: Declared distances and RTOW",
    eyebrow: EYEBROW,
    title: "2.1 Distancias declaradas y peso máximo de despegue (RTOW)",
    subtitle: "Performance Manual · Section 2 Take-off",
    leftPct: 52,
    leftTitle: "DEFINITIONS · RTOW",
    rightTitle: "TAKEOFF FLIGHT PATH",
    image: pmFig("tof_path"),
    imageAlt: "Takeoff flight path: first, second, acceleration and final segments, gross and net paths above obstacles",
    sourceRef: pm("Section 2 Take-off - Definitions, RTOW"),
    cards: [
      {
        heading: "Declared distances",
        bullets: [
          "TORA: the length of runway that is declared available by the State of the aerodrome and suitable for the ground run of an aeroplane taking off.",
          "TODA: the length of the take-off run available plus the length of the clearway available, if provided.",
          "ASDA: the length of the take-off run available plus the length of stop way, if such stop way is declared available and is capable of bearing the mass of the aeroplane.",
        ],
      },
      {
        heading: "The Regulatory Take-Off Weight (RTOW) is the most limiting of",
        bullets: [
          "Climb Limited Weight: the required minimum climb gradients in second segment and final segment.",
          "Runway Limited Weight: function of runway length, slope, airport elevation, temperature and wind.",
          "Obstacle Limited Weight: function of obstacle height and distance, temperature, airport elevation, runway slope and wind.",
          "Tyre speed and brake energy.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE VAAF-T2.2: Take-off regulation",
    eyebrow: EYEBROW,
    title: "2.2 Requisitos del cálculo de despegue",
    subtitle: "Performance Manual · Section 2 · CAT.POL.A.205",
    leftPct: 55,
    leftTitle: "REGULATION (CAT.POL.A.205)",
    rightTitle: "TAKEOFF FLIGHT PATH",
    image: pmFig("tof_path"),
    imageAlt: "Takeoff flight path with gross and net paths and required margins",
    sourceRef: pm("Section 2 Take-off - General, Regulation"),
    cards: [
      {
        heading: "Determining the maximum permitted take-off mass",
        bullets: [
          "The ASD must not exceed the ASDA; the TOD must not exceed the TODA, with a clearway distance not exceeding half of the TORA; the TOR must not exceed the TORA.",
          "A single value of V1 shall be used for the rejected and continued take-off.",
          "On a wet or contaminated runway, the take-off weight shall not exceed that permitted for a take-off on a dry runway under the same conditions.",
          "Not more than 50% of the reported head-wind component or not less than 150% of the reported tailwind component.",
        ],
      },
      {
        heading: "Climb gradients",
        bullets: [
          "Required gross climb gradient capability for two engine aircraft: second segment 2.4%; final segment 1.2%.",
          "The flight crew shall check that SID climb gradients are complied with, and that all altitude constraints in the F-PLN are met.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE VAAF-T2.3: Standard take-off flight path",
    eyebrow: EYEBROW,
    title: "2.3 Segmentos de la trayectoria de despegue",
    subtitle: "Performance Manual · Section 3 Engine Failure Procedure",
    leftPct: 50,
    leftTitle: "STANDARD TAKE-OFF FLIGHT PATH",
    rightTitle: "TAKEOFF SEGMENTS",
    image: pmFig("tof_segments"),
    imageAlt: "One engine takeoff segments: first segment, second segment at V2, third segment acceleration, final takeoff segment at MCT",
    sourceRef: pm("Section 3 Engine Failure Procedure - Standard take-off flight path"),
    cards: [
      {
        heading: "The standard takeoff flight path is divided into several segments",
        bullets: [
          "First segment starts at a height above runway of 35 ft for dry runways and 15 ft for wet or contaminated runways, and it ends with the gear fully retracted. This segment is flown at V2 and TOGA.",
          "Second segment starts as soon as gear is fully retracted and ends at the acceleration height. This segment is flown at V2 and TOGA.",
          "Third segment is an acceleration segment from V2 speed to GD. This segment is flown at TOGA.",
          "Final segment is a climb phase starting at GD and MCT.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "TOGA is certified for a maximum of 10 minutes in case of an engine failure at take-off. The end of the third segment must be achieved within a maximum of 10 minutes after take-off.",
    },
  },
  {
    comment: "SLIDE VAAF-T2.4: Engine failure during take-off and EOSID",
    eyebrow: EYEBROW,
    title: "2.4 Fallo de motor en el despegue: EOSID",
    subtitle: "Performance Manual · Section 3 Engine Failure Procedure",
    leftPct: 55,
    leftTitle: "FLIGHT PATH IN CASE OF ENGINE FAILURE DURING T.O",
    rightTitle: "DEPARTURE PAGE · EOSID",
    image: sisFig("sis6_departure", SIS6),
    imageAlt: "MCDU DEPARTURE pages: runway and SID selection with the EOSID field",
    sourceRef: pm("Section 3 Engine Failure Procedure - General, Take-off Obstacle Clearance, Flight Path in case of Engine Failure"),
    cards: [
      {
        heading: "Engine failure procedures",
        bullets: [
          "When an engine failure occurs during take-off the obstacle clearance is based on the ‘Engine Out Standard Instrument Departure (EOSID)’ unless a ‘Special EOSID’ is provided.",
          "Provided terrain clearance is not in doubt and airplane weight and climb performance are adequate, the flight crew may request ATC and accept radar vectors, follow the departure route, or remain in the vicinity of the airport. If unable, the published ‘EOSID’ or ‘Special EOSID’ must be followed.",
          "If an engine fails after reaching V1: at or below V2, maintain V2; between V2 and V2+10, maintain current speed.",
          "It is prohibited to use calculated weights without the ENG FAIL procedure and vice versa.",
        ],
      },
    ],
    alert: {
      level: "WARNING",
      text: "In the event of an engine failure report the ENG FAIL procedure to ATC. ENG FAIL procedures are not officially published by the States. ATC does not know the ENG FAIL procedures.",
    },
  },
  {
    comment: "SLIDE VAAF-T2.5: En-route one engine inoperative",
    eyebrow: EYEBROW,
    title: "2.5 Crucero con un motor inoperativo: drift down",
    subtitle: "Performance Manual · Section 4 Cruise · CAT.POL.A.215",
    leftPct: 55,
    leftTitle: "ONE ENGINE INOPERATIVE (CAT.POL.A.215)",
    rightTitle: "PERF CRZ · DRIFT DOWN",
    image: sisFig("sis6_perf_crz", SIS6),
    imageAlt: "MCDU PERF CRZ page",
    sourceRef: pm("Section 4 Cruise - One Engine Inoperative"),
    cards: [
      {
        heading: "Drift down flight path",
        bullets: [
          "Gross Drift Down Flight Path is the flight path actually flown by the aircraft after engine failure.",
          "Net Drift Down Flight Path is the gross path minus a mandatory reduction.",
        ],
      },
      {
        heading: "Requirements",
        bullets: [
          "The gradient of the net flight path is positive at least 1000 ft above all terrain and obstructions along the route within 9,3 km (5 NM) on either side of the intended track.",
          "The net flight path allows the aeroplane to continue flight from the cruising altitude to an aerodrome where a landing can be made, clearing vertically, by at least 2000 ft, all terrain and obstructions along the route.",
          "The net flight path has a positive gradient at 1500 ft above the aerodrome where the landing is assumed to be made after engine failure.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE VAAF-T2.6: Landing performance",
    eyebrow: EYEBROW,
    title: "2.6 Performance de aterrizaje: RLD y distancia en vuelo",
    subtitle: "Performance Manual · Section 5 Landing",
    leftPct: 55,
    leftTitle: "LANDING (SECTION 5)",
    rightTitle: "AUTOBRAKE",
    image: sisFig("sis4_autobrake", SIS4),
    imageAlt: "Autobrake panel and modes",
    sourceRef: pm("Section 5 Landing - Definitions, Required Landing Distance, In-Flight Landing Distance"),
    cards: [
      {
        heading: "Definitions",
        bullets: [
          "Approach climb gradient (two-engine aeroplane): not less than 2.1%, one engine inoperative, TOGA thrust, landing gear retracted, CONF 2 or 3.",
          "Landing climb gradient: not less than 3.2%, two engines operative, landing gear extended, CONF 3 or FULL.",
        ],
      },
      {
        heading: "Required and in-flight landing distance",
        bullets: [
          "The RLD is the regulatory reference to be used for dispatch landing performance computation: the factored certified landing distance.",
          "The In-Flight Landing Distances reflect the performance achievable in a typical operational landing without margin.",
          "The flight crew should apply an appropriate margin to the In-Flight Landing Distances to account for operational variability and flying technique.",
        ],
      },
    ],
    alert: {
      level: "CAUTION",
      text: "The factored in-flight landing distance may in some cases, and in particular on contaminated runway, exceed the RLD considered at dispatch.",
    },
  },
  {
    comment: "SLIDE VAAF-T2.7: Contaminated runway",
    eyebrow: EYEBROW,
    title: "2.7 Pista contaminada",
    subtitle: "Performance Manual · Section 6 Contaminated Runway",
    leftPct: 58,
    leftTitle: "CONTAMINATED RUNWAY (SECTION 6)",
    rightTitle: "WHEEL PAGE",
    image: sisFig("sis4_ecam_wheel", SIS4),
    imageAlt: "ECAM WHEEL page with brake temperatures",
    sourceRef: pm("Section 6 Contaminated Runway - Definitions, Take-off from Contaminated Runway"),
    cards: [
      {
        heading: "Definitions",
        bullets: [
          "Contaminated runway: more than 25% of the runway surface area within the required length and width being used is covered by surface water more than 3 mm deep, or by slush, or loose snow, equivalent to more than 3 mm of water; compacted snow; or ice, including wet ice.",
          "Wet runway: the surface is covered with water, or equivalent, less than specified by the contaminated runway definition, or appears reflective, without significant areas of standing water.",
        ],
      },
      {
        heading: "Flight crews shall observe the following limitations",
        bullets: [
          "On wet and contaminated runways the screen height is measured at 15 ft rather than 35 ft on dry runways.",
          "FLEX take-off is not permitted on contaminated runways.",
          "Take-off is not recommended on wet ice, water on top of compacted snow, or dry snow or wet snow over ice.",
          "If the runway is contaminated with slush or snow, do not retract the flaps and slats until after engine shutdown and after the ground crew has confirmed that they are clear of obstructing ice.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE VAAF-T2.8: Low visibility operations",
    eyebrow: EYEBROW,
    title: "2.8 Operaciones con baja visibilidad (LVO)",
    subtitle: "Performance Manual · Section 7 Low Visibility Operations",
    leftPct: 55,
    leftTitle: "LVO APPROVAL · RVR LANDING MINIMA",
    rightTitle: "PERF APPR · DH",
    image: sisFig("sis6_perf_appr", SIS6),
    imageAlt: "MCDU PERF APPR page with DH field",
    sourceRef: pm("Section 7 Low Visibility Operations - LVO Approval, RVR Landing Minima"),
    cards: [
      {
        heading: "RVR landing minima",
        bullets: [
          "Where the DH and RVR do not fall within the same category, the RVR should determine in which category the operation is to be considered.",
          "The touchdown zone RVR shall always be controlling. If reported and relevant, the midpoint and stop end RVR shall also be controlling.",
          "On runways equipped with two or more RVR assessment units, one may be inoperative.",
        ],
      },
    ],
    table: {
      headers: ["Operation", "DH", "Minimum RVR (touchdown)"],
      rows: [
        ["CAT II", "100 ft", "300 m"],
        ["CAT IIIA", "50 ft", "200 m"],
        ["CAT IIIB", "20 ft", "75 m"],
        ["LVTO", "—", "≥ 125 m"],
      ],
    },
  },

  // ── B. Cartas IFR ───────────────────────────────────────────────────────
  {
    comment: "SLIDE VAAF-T2.9: IFR charts general information",
    eyebrow: EYEBROW,
    title: "2.9 Cartas IFR: información general",
    subtitle: "PDP · IFR Charts · General Information",
    leftPct: 40,
    leftTitle: "IFR CHARTS SUMMARY",
    rightTitle: "GENERAL INFORMATION",
    image: chart(44),
    imageAlt: "Airport briefing page: ATIS frequency and other general information",
    sourceRef: pdp("IFR Charts p. 42–44"),
    cards: [
      {
        heading: "Summary of IFR chart pages",
        bullets: ["I. General", "II. Arrival", "III. Departure", "IV. STAR", "V. SID", "VI. Airport", "VII. Initial Approaches", "VIII. Final Approaches"],
      },
      {
        heading: "General information",
        bullets: ["ATIS frequency.", "Other general information (speed restrictions, noise abatement procedures, night restrictions)."],
      },
    ],
  },
  {
    comment: "SLIDE VAAF-T2.10: Radar minimum altitude chart",
    eyebrow: EYEBROW,
    title: "2.10 Carta de altitudes mínimas radar",
    subtitle: "PDP · IFR Charts · Radar Minimum Altitude",
    leftPct: 38,
    leftTitle: "RADAR MINIMUM ALTITUDE",
    rightTitle: "ALTITUDE CHART",
    image: chart(49),
    imageAlt: "Radar minimum altitude chart: minimum altitude on the red and orange areas and highest terrain on the chart",
    sourceRef: pdp("IFR Charts p. 45–49"),
    cards: [
      {
        heading: "Altitude chart",
        bullets: [
          "Header: airport elevation, transition altitude and chart title.",
          "Minimum altitude on the red area.",
          "Minimum altitude on the orange area.",
          "Highest terrain on the chart.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE VAAF-T2.11: RNAV STAR chart",
    eyebrow: EYEBROW,
    title: "2.11 Llegadas: carta STAR RNAV",
    subtitle: "PDP · IFR Charts · STAR",
    leftPct: 38,
    leftTitle: "STAR = STANDARD ARRIVAL",
    rightTitle: "RNAV STAR CHART",
    image: chart(57),
    imageAlt: "RNAV STAR chart: arrival trajectory, waypoints with constraints, fly-over and fly-by waypoints",
    sourceRef: pdp("IFR Charts p. 53–66"),
    cards: [
      {
        heading: "STAR charts",
        bullets: [
          "RNAV STAR charts and standard STAR charts.",
          "STAR information: arrival, runway concerned, additional information.",
          "Waypoints with constraints; FLY-OVER WPT and FLY-BY WPT.",
          "Holding pattern.",
          "Standard STAR charts show the Minimum Sector Altitude (MSA).",
        ],
      },
    ],
  },
  {
    comment: "SLIDE VAAF-T2.12: SID chart",
    eyebrow: EYEBROW,
    title: "2.12 Salidas: carta SID y gradiente mínimo",
    subtitle: "PDP · IFR Charts · SID",
    leftPct: 38,
    leftTitle: "SID = STANDARD INSTRUMENT DEPARTURE",
    rightTitle: "STANDARD SID CHART",
    image: chart(72),
    imageAlt: "Standard SID chart: departure description and minimum climb gradients required for these departures",
    sourceRef: pdp("IFR Charts p. 67–72"),
    cards: [
      {
        heading: "SID charts",
        bullets: [
          "RNAV SID charts and standard SID charts.",
          "Altitude/speed constraints and departure trajectory.",
          "Climb gradient constraints.",
          "Initial level clearance.",
          "Minimum performances required for these departures.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE VAAF-T2.13: Airport chart",
    eyebrow: EYEBROW,
    title: "2.13 Carta de aeropuerto",
    subtitle: "PDP · IFR Charts · Airport Charts",
    leftPct: 38,
    leftTitle: "AIRPORT CHARTS",
    rightTitle: "AIRPORT PLAN",
    image: chart(77),
    imageAlt: "Airport plan: runway elevation, runway length, taxiway names and runway QFU",
    sourceRef: pdp("IFR Charts p. 73–79"),
    cards: [
      {
        heading: "Airport plan",
        bullets: ["Gates coordinates.", "Communication frequencies.", "Runway elevation, runway length, taxiway name, runway QFU."],
      },
      {
        heading: "Additional runway information",
        bullets: [
          "PAPI information; runway length/width.",
          "Low visibility procedure information; Runway Visual Range (RVR).",
          "HIRL: High Intensity Runway Light. CL: Center Light.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE VAAF-T2.14: ILS final approach chart",
    eyebrow: EYEBROW,
    title: "2.14 Aproximación ILS: perfil vertical y mínimos",
    subtitle: "PDP · IFR Charts · ILS or LOC Final Approach",
    leftPct: 38,
    leftTitle: "ILS OR LOC – FINAL APPROACH",
    rightTitle: "VERTICAL PROFILE",
    image: chart(96),
    imageAlt: "ILS final approach vertical profile: glide slope, minima and RVR by aircraft category, circle-to-land minima",
    sourceRef: pdp("IFR Charts p. 81–96"),
    cards: [
      {
        heading: "Approach chart",
        bullets: [
          "Instrument required for this approach; highest terrain on the chart.",
          "ILS/LOC information, communication frequencies, missed approach procedure.",
          "Go-around immediate trajectory reminder.",
          "ILS glide-slope or descent angle.",
          "Minima and RVR related to aircraft category and approach type.",
          "Circle-to-land minima.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE VAAF-T2.15: RNAV (GNSS) approach chart",
    eyebrow: EYEBROW,
    title: "2.15 Aproximación RNAV (GNSS)",
    subtitle: "PDP · IFR Charts · RNAV (GNSS)",
    leftPct: 38,
    leftTitle: "RNAV (GNSS) – INITIAL AND FINAL APPROACH",
    rightTitle: "INITIAL APPROACH CHART",
    image: chart(100),
    imageAlt: "RNAV (GNSS) initial approach chart: IAF, initial approach trajectory, IF and waypoints with constraints",
    sourceRef: pdp("IFR Charts p. 97–108"),
    cards: [
      {
        heading: "RNAV (GNSS) chart",
        bullets: [
          "Approach information to compare with PFD information.",
          "IAF, initial approach trajectory, IF; waypoints with constraints.",
          "Final approach from the IF at the platform altitude.",
          "Minima depending on type of approach and aircraft category.",
          "Missed approach procedure.",
        ],
      },
    ],
  },

  // ── C. Computerized Flight Plan ────────────────────────────────────────
  {
    comment: "SLIDE VAAF-T2.16: Computerized flight plan structure",
    eyebrow: EYEBROW,
    title: "2.16 Plan de vuelo computarizado (CFP)",
    subtitle: "PDP · Computerized Flight Plan",
    leftPct: 38,
    leftTitle: "COMPUTERIZED FLIGHT PLAN",
    rightTitle: "CFP BLOCKS",
    image: cfp(117),
    imageAlt: "Computerized flight plan with its blocks: operational data, alternate airport, fuel calculation, estimated weights, route, navigation log",
    sourceRef: pdp("Computerized Flight Plan p. 117–119"),
    cards: [
      {
        heading: "CFP blocks",
        bullets: [
          "Operational data: aircraft type, Mach number, route, call sign, average wind component and temperature for route.",
          "Alternate airport.",
          "Fuel calculation: calculations, time and cruise FL to destination.",
          "A/C estimated weights.",
          "Flight plan route, time & fuel records.",
          "Navigation log.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE VAAF-T2.17: Fuel planning",
    eyebrow: EYEBROW,
    title: "2.17 Planificación del combustible",
    subtitle: "PDP · Computerized Flight Plan · Fuel Planning",
    leftPct: 45,
    leftTitle: "HOW TO CALCULATE TOTAL FUEL (Q) FOR THE FLIGHT?",
    rightTitle: "FUEL TIME & DATA",
    image: cfp(119),
    imageAlt: "CFP fuel block: DEST, RESV, ALT, HOLD, XTR, TOF, TAXI and BLOCK",
    sourceRef: pdp("Computerized Flight Plan p. 119–125"),
    cards: [
      {
        heading: "Q = Taxi Fuel + TF + CF + AF + FR + Extra Fuel + ETPX",
        bullets: [
          "DEST = Trip Fuel (TF): the amount of fuel needed from takeoff to landing.",
          "RESV = Contingency Fuel (CF). ALT = Alternate Fuel (AF). HOLD = Final Reserve Fuel (FR). XTR = Extra Fuel.",
          "TOF = Take Off Fuel = TF + CF + AF + FR + Extra Fuel + ETPX.",
          "BLOCK = Total Fuel (Q) = TOF + TAXI.",
        ],
      },
    ],
    alert: { level: "NOTE", text: "Compare the CFP fuel figures with the MCDU INIT B / FUEL PRED page." },
  },
  {
    comment: "SLIDE VAAF-T2.18: Ground miles and air miles",
    eyebrow: EYEBROW,
    title: "2.18 Millas terrestres y millas aire (NAM)",
    subtitle: "PDP · Computerized Flight Plan · Ground Miles & Air Miles",
    leftPct: 38,
    leftTitle: "GROUND MILES & AIR MILES",
    rightTitle: "AIR DISTANCE TABLE",
    image: cfp(121),
    imageAlt: "Air distance conversion table from ground distance and wind component",
    sourceRef: pdp("Computerized Flight Plan p. 121"),
    cards: [
      {
        heading: "Nautical Air Miles",
        bullets: [
          "Trip distance to be compared with the MCDU F-PLN page.",
          "Nautical Air Miles (NAM) is the ground distance (NM) corrected by the wind effect.",
          "In the example: GROUND distance = 200 NM, wind -100 KT, AIR distance = 257 NM.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE VAAF-T2.19: Estimated weights",
    eyebrow: EYEBROW,
    title: "2.19 Pesos estimados",
    subtitle: "PDP · Computerized Flight Plan · A/C Estimated Weights",
    leftPct: 40,
    leftTitle: "A/C ESTIMATED WEIGHTS",
    rightTitle: "CALCULATE WEIGHTS",
    image: cfp(130),
    imageAlt: "CFP estimated weights: BASIC WT + EPLD = EZFW, + TOF = ETOW, - EB/O = ELAW",
    sourceRef: pdp("Computerized Flight Plan p. 126–131"),
    cards: [
      {
        heading: "Calculate weights",
        bullets: [
          "BASIC WT = Basic Weight of aircraft. EPLD = Estimated payload.",
          "EZFW = Estimated Zero Fuel Weight = BASIC WT + EPLD.",
          "ETOW = Estimated Take Off Weight = EZFW + TOF.",
          "ELAW = Estimated Landing Weight = ETOW - EB/O (Estimated Burn Off).",
        ],
      },
    ],
    alert: { level: "NOTE", text: "Compare with the MCDU page (INIT B: ZFW, TOW and LW)." },
  },
  {
    comment: "SLIDE VAAF-T2.20: Navigation log",
    eyebrow: EYEBROW,
    title: "2.20 Navigation log y registro en vuelo",
    subtitle: "PDP · Computerized Flight Plan · Navigation Log",
    leftPct: 38,
    leftTitle: "NAVIGATION LOG",
    rightTitle: "NAVIGATION LOG",
    image: cfp(133),
    imageAlt: "CFP navigation log columns: waypoints, airways, flight level, MORA, wind, temperature, distances, times and fuel",
    sourceRef: pdp("Computerized Flight Plan p. 133–135"),
    cards: [
      {
        heading: "Navigation log",
        bullets: [
          "Waypoints and airways; flight level; MORA: Minimum Off Route Altitude.",
          "Wind, outside air temperature and shear.",
          "True air speed, ground speed; in/out true and magnetic track.",
          "Ground/air distance from previous waypoint and remaining to destination.",
          "Estimated time to reach the waypoint and cumulated time from departure.",
          "Records: estimated time to be filled after takeoff; actual time and fuel data to be filled when passing the waypoint.",
        ],
      },
    ],
  },
];

export const MCC_VAAF_T2: MccLesson = {
  id: "a3200000-0000-0000-0000-000000000402",
  course_id: MCC_COURSE_ID,
  title: "VAAF-T2. Performance y planificación del vuelo (cartas IFR y CFP)",
  slug: "vaaf-t2-performance-planificacion",
  sequence_order: 25,
  lesson_order: 25,
  min_seconds: mccMinSeconds(VAAF_T2_SLIDES.length, mccVideoSeconds(VAAF_T2_SLIDES)),
  module_title: MCC_MODULES.VAAF,
  content_html: joinSlides(VAAF_T2_SLIDES),
};

export const VAAF_T2_SLIDE_COUNT = VAAF_T2_SLIDES.length;
