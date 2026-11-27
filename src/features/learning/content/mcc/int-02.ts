/**
 * INT-02 — Reparto de tareas, comunicación y briefings (módulo de introducción).
 *
 * Alcance: Curso APS MCC — Airbus A320ceo CFM56-5B (simulador Entrol A32).
 * Fuente del texto: FCTM 23MAR26, «Airbus Operational Philosophy — Tasksharing Rules and Communication»
 * (AOP-20), bloques «Applicable to: ALL».
 * Imágenes: figuras del FCOM 23MAR26 (DSC-22_10: interfaces FCU/EFIS/FMGC, FCU AP/A/THR, MCDU), con el
 * pulsador RNP y la MCDU3 (opcionales) tapados, y láminas del PDP Jan 2024 sobre briefings ya publicadas.
 * Sin repetir: el punto «DEPARTURE/ARRIVAL BRIEFING … PERFORM» de las SOP (SOP-03, SOP-07) remite aquí para
 * la técnica y la estructura del briefing.
 */
import { MCC_MODULES, joinSlides, mccMinSeconds, mccVideoSeconds, type MccLesson, type MccSlideSpec } from "./slide-builder.ts";

const MCC_COURSE_ID = "a3200000-0000-0000-0000-000000000320";
const IMG_BASE = "https://www.blueteam.es/elearning/media/mcc/pdp";
const EYEBROW = "APS MCC · A320 · INT-02";

/** Versión común de caché de las figuras nuevas de esta lección. */
const IMG_VERSION = 1795634000;
const fig = (name: string) => `${IMG_BASE}/fcom_a320_${name}.webp?v=${IMG_VERSION}`;
/** Figuras y láminas ya publicadas en otras lecciones. */
const sisFig = (name: string) => `${IMG_BASE}/fcom_a320_sis_${name}.webp?v=1795630000`;
const pubFig = (name: string) => `${IMG_BASE}/fcom_a320_${name}.webp`;
const pdp = (file: string, v?: number) => `${IMG_BASE}/${file}.webp${v ? `?v=${v}` : ""}`;
const src = (sections: string) => `Source: FCTM A320 ${sections}`;

const INT_02_SLIDES: MccSlideSpec[] = [
  // ── A. Reparto de tareas ─────────────────────────────────────────────────
  {
    comment: "SLIDE INT-02.1: Tasksharing — general and normal operations",
    eyebrow: EYEBROW,
    title: "2.1 Reparto de tareas en operación normal",
    subtitle: "Tasksharing Rules and Communication · General",
    leftPct: 45,
    leftTitle: "TASKSHARING (AOP-20)",
    rightTitle: "FCU · EFIS CP · FMGC · MCDU",
    image: fig("int2_cockpit_interfaces"),
    imageAlt: "Interfaces between the EFIS control panels, FCU, FMGCs, MCDUs, displays and thrust levers",
    sourceRef: "Source: FCTM A320 AOP-20 General & FCOM A320 DSC-22_10 Auto Flight - General",
    cards: [
      {
        heading: "General",
        paragraph:
          "A correct application of tasksharing and communication rules ensures a safe and effective operation of the aircraft.",
      },
      {
        heading: "Normal operations",
        bullets: [
          "It is the responsibility of the PF to: FLY · NAVIGATE.",
          "It is the responsibility of the PM to: MONITOR the flight path, the navigation and the aircraft systems · COMMUNICATE.",
          "However, when necessary, the flight crew may re-allocate the tasks, as required.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE INT-02.2: Tasksharing — supplementary procedures",
    eyebrow: EYEBROW,
    title: "2.2 Reparto de tareas en los procedimientos suplementarios",
    subtitle: "Tasksharing Rules and Communication · Supplementary Procedures",
    leftPct: 50,
    leftTitle: "SUPPLEMENTARY PROCEDURES (AOP-20)",
    rightTitle: "ENG MASTER PANEL",
    image: pubFig("eng_master_panel"),
    imageAlt: "ENG MASTER levers and ENG MODE selector",
    sourceRef: src("AOP-20 Supplementary Procedures"),
    cards: [
      {
        heading: "If the procedure is related to engine start",
        paragraph: "It is recommended to read the entire procedure first, and then:",
        bullets: ["The PM reads the actions, and", "The PF acts on the controls."],
      },
      {
        heading: "For all other supplementary procedures",
        paragraph:
          "The procedures should be applied in accordance with the READ & DO principle, i.e. the PM reads the procedure and the PF or the PM acts on the controls, depending on the context.",
      },
    ],
    alert: {
      level: "NOTE",
      text: "In the case of one engine taxi at departure, the PM can act on the engine master lever.",
    },
  },
  {
    comment: "SLIDE INT-02.3: Tasksharing — abnormal operations",
    eyebrow: EYEBROW,
    title: "2.3 Reparto de tareas en situaciones anormales",
    subtitle: "Tasksharing Rules and Communication · Abnormal Operations",
    leftPct: 50,
    leftTitle: "ABNORMAL OPERATIONS (AOP-20)",
    rightTitle: "ECAM DISPLAY UNITS",
    image: sisFig("ecam_du_arrangement"),
    imageAlt: "ECAM display units used for the ECAM actions",
    sourceRef: src("AOP-20 Abnormal Operations"),
    cards: [
      {
        heading: "It is the responsibility of the PF to",
        bullets: ["FLY", "NAVIGATE", "COMMUNICATE after the initiation of the ECAM actions, or a QRH procedure."],
      },
      {
        heading: "It is the responsibility of the PM to",
        bullets: ["MONITOR the flight path and the navigation", "Perform ECAM actions or apply QRH/OEB procedure."],
      },
    ],
    alert: {
      level: "NOTE",
      text: "During the ECAM management process or the application of a QRH/OEB procedure, the “COM” task is transferred to the PF, as the cognitive skills of the PM are mostly dedicated to the understanding and the application of the ECAM/QRH/OEB actions. Therefore, their situation awareness of the environment and the navigation is less effective than the PF's one.",
    },
  },
  {
    comment: "SLIDE INT-02.4: FCU and EFIS control panels",
    eyebrow: EYEBROW,
    title: "2.4 FCU y paneles EFIS: quién hace qué",
    subtitle: "Tasksharing Rules and Communication · FCU and EFIS CP",
    leftPct: 52,
    leftTitle: "FCU AND EFIS CONTROL PANELS (AOP-20)",
    rightTitle: "FCU & EFIS CONTROL PANELS",
    image: pubFig("fcu_panels"),
    imageAlt: "FCU and EFIS control panels with AP, A/THR and FD pushbuttons",
    sourceRef: "Source: FCTM A320 AOP-20 FCU and EFIS Control Panels & FCOM A320 DSC-22_10-40-20 FCU",
    cards: [
      {
        heading: "General",
        paragraph:
          "The FCU, the EFIS CP and the MCDU must be used in accordance with specific rules, in order to ensure: safe operation (correct entries made) and effective inter-pilot communication (knowing each other's intentions).",
      },
    ],
    table: {
      headers: ["Selection", "PF", "PM"],
      rows: [
        ["AP / A/THR", "Engagement: YES · Disconnection: YES (via instinctive disconnect pb)", "Engagement: upon PF request · Disconnection: NO"],
        ["FD", "NO", "Upon PF request"],
        ["Other selections on FCU (AP OFF)", "NO", "Upon PF request"],
        ["Other selections on FCU (AP ON)", "YES", "Upon PF request"],
        ["EFIS CP", "Onside selections", "Onside selections"],
      ],
    },
    alert: {
      level: "NOTE",
      text: "The PF and the PM must perform their onside EFIS CP selections.",
    },
  },
  {
    comment: "SLIDE INT-02.5: FMS entries via MCDU",
    eyebrow: EYEBROW,
    title: "2.5 Entradas en el FMS con la MCDU",
    subtitle: "Tasksharing Rules and Communication · FMS Entries",
    leftPct: 50,
    leftTitle: "FMS ENTRIES VIA MCDU (AOP-20)",
    rightTitle: "MCDU",
    image: fig("int2_mcdu"),
    imageAlt: "MCDU screen, line select keys, page keys and keyboard",
    sourceRef: "Source: FCTM A320 AOP-20 FMS Entries via MCDU & FCOM A320 DSC-22_10 MCDU",
    cards: [
      {
        heading: "Below 10 000 ft, entries should be restricted to those that have an operational effect",
        bullets: ["PERF APPR", "DIR TO", "NAVAIDS", "Late change of runway", "Activate SEC F-PLN", "ENABLE ALTN."],
      },
      {
        heading: "Time consuming entries must be performed at all times",
        bullets: [
          "By the PM upon PF request, or",
          "By the PF after a temporary transfer of controls to the PM.",
        ],
      },
    ],
  },
  // ── B. Briefings ─────────────────────────────────────────────────────────
  {
    comment: "SLIDE INT-02.6: Objective of operational briefings",
    eyebrow: EYEBROW,
    title: "2.6 Para qué sirve un briefing operativo",
    subtitle: "How to Conduct Briefings · Objective",
    leftPct: 55,
    leftTitle: "OBJECTIVE OF OPERATIONAL BRIEFINGS (AOP-20)",
    rightTitle: "BRIEFING RECOMMENDATIONS",
    image: pdp("p155_cockpit_preparation", 1795612605),
    imageAlt: "Briefing recommendations from the tutorial",
    sourceRef: "Source: FCTM A320 AOP-20 How to Conduct Briefings & Airbus Tutorial PDP Jan 2024 — Cockpit Preparation (p.155)",
    cards: [
      {
        heading: "Objective",
        bullets: [
          "Operational briefings are an integral element of the Threat and Error Management process for each mission. Briefings should focus on the identification of threats that affect the intended operations and agreement on mitigation (avoidance, management) of those identified threats.",
          "The second purpose of the flight crew briefing should be the identification of significant differences or deviations to “routine” operations.",
          "At the end of the briefing, the flight crew should have a shared mental model of the intended operations, the identified threats, their mitigations and deviations from routine operations. The flight crew briefing should provide the PM the expected monitoring framework.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "A briefing is complementary to SOPs but is not a repetition of SOP items. A briefing is not to be confused with setting and checking of the aircraft systems for the intended flight phase.",
    },
  },
  {
    comment: "SLIDE INT-02.7: Briefing technique — general and length",
    eyebrow: EYEBROW,
    title: "2.7 Técnica de briefing: conversación, no lectura",
    subtitle: "How to Conduct Briefings · Briefing Technique",
    leftPct: 55,
    leftTitle: "BRIEFING TECHNIQUE (AOP-20)",
    rightTitle: "COCKPIT",
    image: sisFig("cockpit_arrangement"),
    imageAlt: "Cockpit arrangement",
    sourceRef: src("AOP-20 Briefing Technique"),
    cards: [
      {
        heading: "General",
        bullets: [
          "Briefing requires out-of-the-box thinking, beyond the pure reflection of routine and standard operations. It should have a threat-focused view and identify and prioritize likely threats to the intended operation. It should then detail the actions to mitigate these threats.",
          "A briefing should be conversational, interactive and use open questions that involve all flight crewmembers to share their experience and expectations.",
        ],
      },
      {
        heading: "Length",
        bullets: [
          "Longer, more detailed: flight crew not familiar with the airport or the approach · complex airport (e.g. CAT C) · procedures or techniques that are rarely flown or applied.",
          "Shorter, minimum items: well familiar airport · repetitive operations by the same crew · no or limited threats identified. A long briefing is not necessarily a good one.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "A review of Memory Items or Operating Techniques should normally only be part of the briefing when they may be potentially required for threat management (e.g. windshear reported in ATIS). A briefing of the techniques for rejected takeoff and/or for engine failure after V1 is normally not required on a routine basis for each takeoff.",
    },
  },
  {
    comment: "SLIDE INT-02.8: Threats",
    eyebrow: EYEBROW,
    title: "2.8 Amenazas: qué son y cómo identificarlas",
    subtitle: "How to Conduct Briefings · Threats",
    leftPct: 58,
    leftTitle: "THREATS (AOP-20)",
    rightTitle: "ND — TERRAIN / WEATHER",
    image: sisFig("nd_rose"),
    imageAlt: "Navigation display in ROSE mode",
    sourceRef: src("AOP-20 Briefing Technique - Threats"),
    cards: [
      {
        heading: "Threats are all of the following",
        paragraph:
          "Events or errors that occur beyond the influence of the flight crew · Increased operational complexity · Situations that must be managed to maintain the margin of safety. Using a checklist-style tool to identify threats creates an obstruction to the open-mind setting; memory aids may help, provided that they are not used in a checklist style manner.",
      },
    ],
    table: {
      headers: ["Memory aid", "Examples (not-exhaustive)"],
      rows: [
        ["Airport", "Congestion · Construction · Hotspots · Infrastructure · Runway condition"],
        ["ATC", "Challenging restrictions · Language · Phraseology · Short term changes of clearance"],
        ["Aircraft", "Barometric setting for approaches based on barometric guidance · MEL/CDL · Aircraft defects · Supplementary procedures that are not routine"],
        ["Environment", "Low visibility · Approach/runway lighting · Runway contamination"],
        ["Weather", "Windshear · Convective weather · Cold weather · Precipitation · Unreliable weather reports"],
        ["Operations", "Schedule pressure · Delays · Late crew · Load issues"],
        ["Crew", "Fatigue · Low experience · Complacency · Distraction · Training · Crew that is not standard"],
        ["Terrain", "High terrain · Unfamiliar environment · Complex visual approach"],
      ],
    },
  },
  {
    comment: "SLIDE INT-02.9: Types of operational briefing and debriefing",
    eyebrow: EYEBROW,
    title: "2.9 Tipos de briefing y debriefing",
    subtitle: "How to Conduct Briefings · Types of Operational Briefing",
    leftPct: 55,
    leftTitle: "TYPES OF OPERATIONAL BRIEFING (AOP-20)",
    rightTitle: "EFIS CONTROL PANEL",
    image: sisFig("efis_cp"),
    imageAlt: "EFIS control panel",
    sourceRef: src("AOP-20 Types of Operational Briefing"),
    cards: [
      {
        heading: "For each flight",
        bullets: ["DEPARTURE BRIEFING during cockpit preparation", "ARRIVAL BRIEFING during descent preparation."],
      },
      {
        heading: "Debriefing",
        paragraph:
          "A DEBRIEFING should be considered at the end of each flight, in order to check how the plan and the management of expected and unexpected threats and errors worked, and to see if it is possible to enhance next time in a similar scenario. In case of time constraints this debriefing should be performed no later than at the end of flight duty. Debriefing is a powerful tool for long-term safety management.",
      },
      {
        heading: "Other operational briefings",
        bullets: [
          "CRUISE BRIEFING when the flight crew expects specific operational threats (e.g. high terrain enroute, weather awareness and avoidance)",
          "RE-BRIEFING in the case of any new identified threats or changes to the planned flight strategy (e.g. when the Departure Change checklist is applied, major delay or major deviation from the original flight plan).",
        ],
      },
    ],
  },
  {
    comment: "SLIDE INT-02.10: Preparation for briefing",
    eyebrow: EYEBROW,
    title: "2.10 Preparación del briefing",
    subtitle: "How to Conduct Briefings · Preparation",
    leftPct: 52,
    leftTitle: "PREPARATION FOR BRIEFING (AOP-20)",
    rightTitle: "MCDU — FMS PREPARATION",
    image: fig("int2_mcdu_keys"),
    imageAlt: "MCDU flight plan and lateral revision pages",
    sourceRef: src("AOP-20 Preparation for Briefing"),
    cards: [
      {
        heading: "Flight preparation",
        paragraph:
          "Preparation for every briefing starts with the preparation for the flight mission, with the collection of data on: technical condition of the aircraft · route planning · weather · NOTAM · load planning · company operational requirements · fuel planning. Flight preparation is done partly independently by PF and PM, partly shared by both pilots.",
      },
      {
        heading: "At the aircraft, these SOP items are discussed and agreed by both pilots",
        bullets: [
          "Aircraft acceptance",
          "Preliminary performance calculation",
          "Last part of cockpit preparation after FMS preparation by the PF.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "These SOP items are intended to prepare a shared mental image by both pilots. They ensure that the following operational briefings are concise, effective and focus only on essential items.",
    },
  },
  // ── C. Departure y arrival briefing ──────────────────────────────────────
  {
    comment: "SLIDE INT-02.11: Departure briefing — structure",
    eyebrow: EYEBROW,
    title: "2.11 Departure briefing: estructura",
    subtitle: "How to Conduct Briefings · Departure Briefing",
    leftPct: 52,
    leftTitle: "DEPARTURE BRIEFING (AOP-20)",
    rightTitle: "STRUCTURE OF THE DEPARTURE BRIEFING",
    image: pdp("p028_flow_patterns"),
    imageAlt: "Structure of the departure briefing from the tutorial",
    sourceRef: "Source: FCTM A320 AOP-20 Departure Briefing & Airbus Tutorial PDP Jan 2024 — Flow Patterns (p.28)",
    cards: [],
    table: {
      headers: ["Step", "Who · Minimum items"],
      rows: [
        ["1", "Cockpit door closed - Set an environment with no distraction"],
        ["2a · PM", "PLAN: T.O RWY (Intersection) · SID designator · First cleared altitude · MSA/MORA for climb trajectory · Extra fuel and time"],
        ["2b · PF", "PLAN: Hotspots for taxi out · Stop margin for RTO · EOSID · Return/diversion considerations · Special operation · Non-standard operation"],
        ["3a · PM / 3b · PF", "Identified THREATS"],
        ["4 · PF-PM", "MITIGATIONS"],
        ["5", "MISCELLANEOUS"],
      ],
    },
    alert: {
      level: "NOTE",
      text: "If interrupted, the briefing should resume at the beginning of the step where the interruption occurred.",
    },
  },
  {
    comment: "SLIDE INT-02.12: Departure briefing — notes",
    eyebrow: EYEBROW,
    title: "2.12 Departure briefing: plan, amenazas y mitigaciones",
    subtitle: "How to Conduct Briefings · Departure Briefing",
    leftPct: 55,
    leftTitle: "DEPARTURE BRIEFING — NOTES (AOP-20)",
    rightTitle: "TEM — DEPARTURE BRIEFING",
    image: pdp("p154_cockpit_preparation", 1795612605),
    imageAlt: "Threat and error management structure of the departure briefing",
    sourceRef: "Source: FCTM A320 AOP-20 Departure Briefing & Airbus Tutorial PDP Jan 2024 — Cockpit Preparation (p.154)",
    cards: [
      {
        heading: "(2) Plan",
        bullets: [
          "The PM should start to brief the main items of the PLAN. This ensures that both pilots share the same mental image of the flight trajectory after the FMS preparation (by PF) and check (by PM) according to SOP.",
          "Then, the PF briefs the hotspots of potential taxi-routes if any, and considers at least: RTO (stop margin if available) · the EOSID/Engine-out trajectory · a return landing or diversion if so required (weather/weight). The PF recalls any Special Operations or Supplementary procedures to be applied.",
          "Briefing the PLAN should normally only be a high-level description, not a repetition of the detailed setting and checking of the flight trajectory in the FMS.",
        ],
      },
      {
        heading: "(3) Threats · (4) Mitigations · (5) Miscellaneous",
        bullets: [
          "The PM should brief the THREATS identified throughout the preparation for the mission. The PF highlights additional threats if required.",
          "The PF and PM discuss and agree on the MITIGATION of the identified threats.",
          "MISCELLANEOUS: e.g. intended use of automation after takeoff · Supplementary Procedures if not yet briefed · observer safety briefing and duties · dangerous goods on board.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE INT-02.13: Arrival briefing — structure",
    eyebrow: EYEBROW,
    title: "2.13 Arrival briefing: estructura",
    subtitle: "How to Conduct Briefings · Arrival Briefing",
    leftPct: 52,
    leftTitle: "ARRIVAL BRIEFING (AOP-20)",
    rightTitle: "STRUCTURE OF THE ARRIVAL BRIEFING",
    image: pdp("p036_flow_patterns"),
    imageAlt: "Structure of the arrival briefing from the tutorial",
    sourceRef: "Source: FCTM A320 AOP-20 Arrival Briefing & Airbus Tutorial PDP Jan 2024 — Flow Patterns (p.36)",
    cards: [],
    table: {
      headers: ["Step", "Who · Minimum items"],
      rows: [
        ["1", "Set an environment with no distraction"],
        ["2a · PM", "PLAN: STAR/Transition Designator · MORA/MOCA/MSA for planned trajectory · Runway and type of approach · Approach minimum · Go-around trajectory · Extra fuel and time"],
        ["2b · PF", "PLAN: Guidance for approach · Landing flaps setting · Stop margin · Use of reverse thrust · Use of autobrake · Planned runway exit · Hotspots for taxi-in · Special operation · Non-standard operation"],
        ["3a · PM / 3b · PF", "Identified THREATS"],
        ["4 · PF-PM", "MITIGATIONS"],
        ["5", "MISCELLANEOUS"],
      ],
    },
    alert: {
      level: "NOTE",
      text: "Allocating the right time before top of descent mitigates potential disturbances.",
    },
  },
  {
    comment: "SLIDE INT-02.14: Arrival briefing — notes",
    eyebrow: EYEBROW,
    title: "2.14 Arrival briefing: plan, amenazas y mitigaciones",
    subtitle: "How to Conduct Briefings · Arrival Briefing",
    leftPct: 50,
    leftTitle: "ARRIVAL BRIEFING — NOTES (AOP-20)",
    rightTitle: "TEM — ARRIVAL BRIEFING",
    image: pdp("p217_descent"),
    imageAlt: "Threat and error management structure of the arrival briefing",
    sourceRef: "Source: FCTM A320 AOP-20 Arrival Briefing & Airbus Tutorial PDP Jan 2024 — Descent (p.217)",
    cards: [
      {
        heading: "(2) Plan",
        bullets: [
          "The PM should start to brief the main items of the PLAN. This ensures that both pilots share the same mental image of the flight trajectory after the FMS preparation (by PF) and check (by PM) according to SOP. The PF briefs what the PF considers for landing.",
          "Briefing the PLAN should normally only be a high-level description. It should not be a repetition of the detailed setting and checking of the flight trajectory in the FMS performed in the respective SOP items.",
        ],
      },
      {
        heading: "(3) Threats · (4) Mitigations · (5) Miscellaneous",
        bullets: [
          "The PM should brief the THREATS they have identified. The PF highlights additional threats if required.",
          "The PF and PM discuss and agree on the MITIGATION of the identified threats.",
          "MISCELLANEOUS: e.g. Special Operations · Supplementary Procedures if not yet briefed.",
        ],
      },
    ],
  },
];

export const MCC_INT_02: MccLesson = {
  id: "a3200000-0000-0000-0000-000000000302",
  course_id: MCC_COURSE_ID,
  title: "INT-02. Reparto de tareas, comunicación y briefings",
  slug: "int-02-reparto-tareas-briefings",
  sequence_order: 2,
  lesson_order: 2,
  min_seconds: mccMinSeconds(INT_02_SLIDES.length, mccVideoSeconds(INT_02_SLIDES)),
  module_title: MCC_MODULES.INTRO,
  content_html: joinSlides(INT_02_SLIDES),
};

export const INT_02_SLIDE_COUNT = INT_02_SLIDES.length;
