/**
 * SOP-02 — Flow patterns (0.75 h).
 *
 * Fuente: Airbus Tutorial PDP Jan 2024, capítulo Flow Patterns (págs. 23–41, ref. EFTDB0FLOWPAT01 – A320 – JUN 2023).
 * Los pasos y su numeración se han transcrito de cada lámina (las etiquetas numeradas del flujo), respetando
 * el reparto PF / PM (CAPT / F/O en Rejected Takeoff) y los asteriscos del original.
 * "Cockpit Panels" (pág. 137) es un esquema de paneles de breakers y no se incluye.
 * Arquitectura: docs/mcc/08_ARQUITECTURA_PDP.md.
 */
import { joinSlides, type MccCard, type MccLesson, type MccSlideSpec } from "./slide-builder.ts";

const MCC_COURSE_ID = "a3200000-0000-0000-0000-000000000320";
const PDP_IMG = "https://www.blueteam.es/elearning/media/mcc/pdp";
const EYEBROW = "APS MCC · A320 · SOP-02";
const SRC = "Source: Airbus Tutorial PDP Jan 2024 — Flow Patterns";

const img = (page: number) => `${PDP_IMG}/p${String(page).padStart(3, "0")}_flow_patterns.webp`;

/** Tarjeta con los pasos numerados de un miembro de la tripulación, en el orden de la lámina. */
function steps(heading: string, items: string[]): MccCard {
  return { heading, bullets: items.map((item, i) => `<strong>${i + 1}</strong> · ${item}`) };
}

function flowSlide(opts: {
  n: number;
  page: number;
  title: string;
  subtitle: string;
  cards: MccCard[];
  note?: string;
  leftPct?: number;
}): MccSlideSpec {
  return {
    comment: `SLIDE SOP-02.${opts.n}: ${opts.subtitle}`,
    eyebrow: EYEBROW,
    title: `2.${opts.n} ${opts.title}`,
    subtitle: opts.subtitle,
    leftPct: opts.leftPct,
    leftTitle: opts.subtitle.toUpperCase(),
    rightTitle: `${opts.subtitle.toUpperCase()} FLOW`,
    image: img(opts.page),
    imageAlt: `${opts.subtitle} flow pattern`,
    sourceRef: `${SRC} (p.${opts.page})`,
    cards: opts.cards,
    alert: opts.note ? { level: "NOTE", text: opts.note } : undefined,
  };
}

const SOP_02_SLIDES: MccSlideSpec[] = [
  {
    comment: "SLIDE SOP-02.1: Flow patterns — index",
    eyebrow: EYEBROW,
    title: "2.1 Flow patterns del A320",
    subtitle: "Flow Patterns",
    leftPct: 55,
    leftTitle: "FLOW PATTERNS",
    rightTitle: "FLOW PATTERNS — INDEX",
    image: img(23),
    imageAlt: "Flow patterns index",
    sourceRef: `${SRC} (p.23)`,
    cards: [
      {
        heading: "Cockpit preparation and departure",
        bullets: [
          "Cockpit Preparation – Overhead Panel · Center Instrument Panel · Pedestal · Final Cockpit Prep.",
          "Departure Briefing",
          "At Pushback/Start Clearance · After Start · Taxi · Line-up",
        ],
      },
      {
        heading: "Flight and arrival",
        bullets: [
          "Acceleration · Climb 10 000 FT AAL",
          "Descent – FMS Preparation · Arrival Briefing · Descent 10 000 FT AAL",
          "After Landing · Parking",
        ],
      },
      {
        heading: "Abnormal",
        bullets: ["Emergency Descent", "Rejected Takeoff"],
      },
    ],
    alert: {
      level: "NOTE",
      text: "En cada flujo, los números indican el orden del recorrido de cada piloto: PF en verde y PM en amarillo en las láminas.",
    },
  },
  flowSlide({
    n: 2,
    page: 24,
    title: "Preparación de cabina: overhead panel",
    subtitle: "Cockpit Preparation – Overhead Panel",
    leftPct: 52,
    cards: [
      {
        heading: "PF — scan in three columns (1 · 2 · 3), from bottom to top",
        bullets: [
          "<strong>1</strong> · STROBE ……… AUTO · BEACON ……… OFF · REMAINING EXT LT … AS RQRD → CVR TEST pb … PRESS · *RCDR GND CTL … ON → CAPT & PURS/CAPT … AS RQRD",
          "<strong>2</strong> · LDG ELEV ……… AUTO · PROBE/WINDOW HEAT … AUTO → * PACK FLOW … AS RQRD → ELEC PANEL … CHECK · BAT … CHECK → ENG FIRE … CHECK/TEST → AUDIO SWITCHING … NORM",
          "<strong>3</strong> · * SIGNS ……… ON/AUTO · * EMER EXIT LT … ARM → VENT … CHECK → PA … RECEPT → MAINT PANEL … CHECK",
        ],
      },
      {
        heading: "During the scan sequence, extinguish all white lights",
        paragraph: "MAINTENANCE panel: ALL LIGHTS ……… CHECK OFF",
      },
    ],
    note: "If secured stop or flight crew change: Perform all actions. Otherwise (transit stop) perform only actions marked by * in QRH.",
  }),
  flowSlide({
    n: 3,
    page: 25,
    title: "Preparación de cabina: center instrument panel",
    subtitle: "Cockpit Preparation – Center Instrument Panel",
    cards: [steps("PF", ["*ISIS ……… CHECK", "*CLOCK ……… CHECK/SET", "*A/SKID & NW STRG sw ……… ON"])],
  }),
  flowSlide({
    n: 4,
    page: 26,
    title: "Preparación de cabina: pedestal",
    subtitle: "Cockpit Preparation – Pedestal",
    cards: [
      {
        heading: "PF — scan in three columns (1 · 2 · 3), from top to bottom",
        bullets: [
          "<strong>1</strong> · ACP ……… CHECK ON/SET → COCKPIT DOOR sw ……… NORM",
          "<strong>2</strong> · SWITCHING PANEL ……… NORM → *THRUST levers ……… IDLE → *ENG MASTER levers ……… OFF → *ENG MODE selector ……… NORM → * PARK BRK handle ……… AS RQRD → GRAVITY GEAR EXTN ……… CHECK STOWED",
          "<strong>3</strong> · * ATC ……… STBY",
        ],
      },
      {
        heading: "On Center Instrument Panel",
        paragraph: "* ACCU/BRAKE PRESS ……… CHECK",
      },
    ],
  }),
  flowSlide({
    n: 5,
    page: 27,
    title: "Preparación final de cabina",
    subtitle: "Cockpit Preparation – Final Cockpit Preparation",
    cards: [
      {
        heading: "FINAL COCKPIT PREPARATION — When both pilots are seated:",
        bullets: ["<strong>1</strong> · GLARESHIELD", "<strong>2</strong> · LATERAL CONSOLES · INSTRUMENT PANELS"],
      },
      {
        heading: "CM1 · CM2",
        paragraph: "Flow arrows 1 and 2 shown for CM1 (green) and CM2 (yellow) on the illustration.",
      },
    ],
  }),
  flowSlide({
    n: 6,
    page: 28,
    title: "Estructura del departure briefing",
    subtitle: "Structure of the Departure Briefing",
    cards: [
      { heading: "Set Distraction Free Environment" },
      {
        heading: "PM — PLAN",
        paragraph: "T/O RWY (Intersection) · SID Designator · First cleared ALT · MSA/MORA for climb trajectory · Extra-fuel & -time",
      },
      {
        heading: "PF — PLAN",
        paragraph:
          "Hotspots of planned taxi route · Stop-margin for RTO · EOSID · Return/Diversion Considerations · Special Operation · Non-standard operation",
      },
      {
        heading: "Then",
        paragraph: "PM Identified THREATS → PF Identified THREATS → MITIGATIONS → MISCELLANEOUS.",
      },
    ],
  }),
  flowSlide({
    n: 7,
    page: 29,
    title: "Flujo en la autorización de pushback y arranque",
    subtitle: "At Pushback/Start Clearance",
    cards: [
      steps("PF", ["BEACON sw", "WINDOWS", "DOORS/SLIDES", "THRUST LEVERS", "PARK BRK handle"]),
      steps("PM", ["ATC", "WINDOWS", "DOORS/SLIDES"]),
    ],
  }),
  flowSlide({
    n: 8,
    page: 30,
    title: "Flujo después del arranque",
    subtitle: "After Start",
    cards: [
      steps("PF", ["ENG MODE SEL", "APU BLEED", "ANTI-ICE", "APU MASTER SW", "STATUS", "NW STEER DISC MEMO"]),
      steps("PM", ["GND SPOILERS", "RUDDER TRIM", "FLAPS", "PITCH TRIM", "STATUS"]),
    ],
  }),
  flowSlide({
    n: 9,
    page: 31,
    title: "Flujo de rodaje",
    subtitle: "Taxi",
    cards: [
      steps("PM", [
        "AUTO BRK MAX pb-sw",
        "TERR ON ND",
        "ATC code/mode",
        "ENG MODE selector",
        "WEATHER RADAR",
        "T.O CONFIG",
        "T.O MEMO",
      ]),
    ],
  }),
  flowSlide({
    n: 10,
    page: 32,
    title: "Flujo de alineación en pista",
    subtitle: "Line-up",
    cards: [
      steps("PF", ["TAKEOFF RUNWAY", "APPROACH PATH", "EXTERIOR LIGHTS"]),
      steps("PM", ["TCAS mode selector", "TAKEOFF RUNWAY", "APPROACH PATH", "PACK 1 and 2", "CABIN CREW"]),
    ],
  }),
  flowSlide({
    n: 11,
    page: 33,
    title: "Flujo de aceleración",
    subtitle: "Acceleration",
    cards: [steps("PM", ["FLAP 0", "GND SPLRS", "L/G", "EXTERIOR LIGHTS"])],
  }),
  flowSlide({
    n: 12,
    page: 34,
    title: "Flujo en ascenso a 10 000 ft AAL",
    subtitle: "Climb 10 000 FT AAL",
    cards: [
      steps("Flow", [
        "L & R LAND sel",
        "SEAT BELTS",
        "EFIS OPT (marked for both PF and PM)",
        "ECAM MEMO",
        "NAVAIDS · SEC F-PLN · OPT / MAX ALT",
      ]),
    ],
  }),
  flowSlide({
    n: 13,
    page: 35,
    title: "Preparación del FMS para el descenso",
    subtitle: "Descent – FMS Preparation",
    cards: [
      {
        heading: "MCDU sequence",
        bullets: [
          "<strong>F-PLN</strong> · Insert lateral and vertical revisions for arrival, as needed.",
          "<strong>RAD NAV</strong> · Navaids selection or deselection. Check the idents on PFDs and NDs.",
          "<strong>PROG</strong> · NAV ACCURACY monitoring during descent.",
          "<strong>PERF</strong> · DES, APPR and GO AROUND pages to complete.",
          "<strong>FUEL PRED</strong> · Check extra fuel to evaluate holding possibilities at destination.",
          "<strong>SEC F-PLN</strong> · Copy active F-PLN and revise the SEC F-PLN according circumstances: alternative approach, circling, etc…",
        ],
      },
    ],
    note: "PAX — PERF APPR page: An erroneous entry of OAT or QNH may lead to undue emergency descent (wrong Cabin Pressure Control (CPC) segment computation).",
  }),
  flowSlide({
    n: 14,
    page: 36,
    title: "Estructura del arrival briefing",
    subtitle: "Structure of the Arrival Briefing",
    cards: [
      { heading: "Set Distraction Free Environment" },
      {
        heading: "PM — PLAN",
        paragraph:
          "MORA/MOCA/MSA for planned trajectory · STAR · Type of APP · MINIMUM · G/A TRAJECTORY · Extra-fuel & -time",
      },
      {
        heading: "PF — PLAN",
        paragraph:
          "Guidance for APP · Landing FLAP setting · Stop-margin · Use of Reverse · Use of Autobrake · Planned RWY Exit · Hotspots for taxi-in · Special operation · Non-standard operation",
      },
      {
        heading: "Then",
        paragraph: "PM Identified THREATS → PF Identified THREATS → MITIGATIONS → MISCELLANEOUS.",
      },
    ],
  }),
  flowSlide({
    n: 15,
    page: 37,
    title: "Flujo en descenso a 10 000 ft AAL",
    subtitle: "Descent 10 000 FT AAL",
    cards: [
      steps("PF", ["EFIS", "LS", "WHEN GPS PRIMARY LOST: NAV ACCY"]),
      steps("PM", ["L & R LAND sel", "SEAT BELTS", "EFIS", "LS", "RADIO NAV", "ENG MODE sel"]),
    ],
  }),
  flowSlide({
    n: 16,
    page: 38,
    title: "Flujo después del aterrizaje",
    subtitle: "After Landing",
    cards: [
      steps("PF", ["GROUND SPOILERS", "EXTERIOR LIGHTS"]),
      steps("PM", ["RADAR", "PREDICTIVE WINDSHEAR", "ENG MODE sel", "FLAPS", "TCAS / ATC", "APU", "ANTI-ICE"]),
    ],
  }),
  flowSlide({
    n: 17,
    page: 39,
    title: "Flujo de aparcamiento",
    subtitle: "Parking",
    cards: [
      steps("PF", [
        "ACCU PRESS",
        "PARK BRAKE handle",
        "ALL ENG MASTER LEVERS",
        "EXTERIOR LIGHTS",
        "SLIDES",
        "SEAT BELTS sw",
      ]),
      steps("PM", ["ANTI-ICE", "APU BLEED pb-sw", "FUEL PUMPS"]),
    ],
  }),
  flowSlide({
    n: 18,
    page: 40,
    title: "Flujo de descenso de emergencia",
    subtitle: "Emergency Descent",
    cards: [
      {
        heading: "PF",
        bullets: [
          "<strong>1</strong> · CREW OXY MASKS ……… USE",
          "<strong>2</strong> · EMER DESCENT ……… INITIATE — ALT ……… TURN PULL · HDG ……… TURN PULL · SPD ……… PULL",
          "<strong>3</strong> · FMA ……… ANNOUNCE",
          "<strong>4</strong> · If A/THR is not active: THR LEVERS ……… IDLE",
          "<strong>5</strong> · SPD BRK ……… FULL",
        ],
      },
      {
        heading: "PM",
        bullets: [
          "<strong>1</strong> · CREW OXY MASKS ……… USE",
          "<strong>2</strong> · SIGNS ……… ON",
          "<strong>3</strong> · FMA ……… CHECK",
        ],
      },
    ],
    note: "Step 1 (PF and PM): Masks · Interphone communication · Communication Established.",
  }),
  flowSlide({
    n: 19,
    page: 41,
    title: "Flujo de despegue abortado",
    subtitle: "Rejected Takeoff",
    cards: [
      {
        heading: "CAPT — “STOP !”",
        bullets: [
          "<strong>1</strong> · ALL THRUST LEVERS IDLE · REVERSERS MAX AVAIL",
          "<strong>2</strong> · WHEN AIRCRAFT IS STOPPED: REVERSERS STOWED · PARKING BRAKE ON",
          "<strong>3</strong> · PA: « ATTENTION! CREW AT STATION »",
          "<strong>4</strong> · « ECAM ACTIONS »",
        ],
      },
      {
        heading: "F/O",
        bullets: [
          "<strong>1</strong> · « REVERSE GREEN »",
          "<strong>2</strong> · « DECEL »",
          "<strong>3</strong> · WHEN AIRCRAFT STOPPED: « AIRBUS____, STOPPING »",
          "<strong>4</strong> · EMERGENCY EVACUATION PROC: LOCATE",
        ],
      },
    ],
  }),
];

export const MCC_SOP_02: MccLesson = {
  id: "a3200000-0000-0000-0000-000000000102",
  course_id: MCC_COURSE_ID,
  title: "SOP-02. Flow patterns: preparación de cabina, rodaje, despegue, llegada, aparcamiento y flujos anormales",
  slug: "sop-02-flow-patterns",
  sequence_order: 8,
  lesson_order: 8,
  min_seconds: 2700,
  content_html: joinSlides(SOP_02_SLIDES),
};

export const SOP_02_SLIDE_COUNT = SOP_02_SLIDES.length;
