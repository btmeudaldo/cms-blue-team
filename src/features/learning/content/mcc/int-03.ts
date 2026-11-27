/**
 * INT-03 — Gestión de situaciones anormales y Golden Rules (módulo de introducción).
 *
 * Alcance: Curso APS MCC — Airbus A320ceo CFM56-5B (simulador Entrol A32).
 * Fuente del texto: FCTM 23MAR26, «Airbus Operational Philosophy» — Management of Abnormal Operations
 * (AOP-30) y Golden Rules for Pilots (AOP-40), bloques «Applicable to: ALL».
 * Imágenes: figuras FCOM ya publicadas (SIS-01/02, SOP-04, INT-02) y las láminas de Golden Rules del PDP
 * Jan 2024 que antes estaban en SOP-01.
 * Decisión del usuario (26-nov-2026): las Golden Rules pasan de SOP-01 (1.3–1.6) a esta lección.
 * Sin repetir: el «cómo» paso a paso del ECAM, la STATUS, el QRH y el Summary está en SOP-11 (PDP);
 * aquí va el «por qué» del FCTM (secuencia, manejo de mandos, reparto de tareas, parar el ECAM).
 */
import { MCC_MODULES, joinSlides, mccMinSeconds, mccVideoSeconds, type MccLesson, type MccSlideSpec } from "./slide-builder.ts";

const MCC_COURSE_ID = "a3200000-0000-0000-0000-000000000320";
const IMG_BASE = "https://www.blueteam.es/elearning/media/mcc/pdp";
const EYEBROW = "APS MCC · A320 · INT-03";

/** Figuras y láminas ya publicadas (se reutilizan tal cual). */
const sisFig = (name: string) => `${IMG_BASE}/fcom_a320_sis_${name}.webp?v=1795630000`;
const sis2Fig = (name: string) => `${IMG_BASE}/fcom_a320_sis_${name}.webp?v=1795631000`;
const pubFig = (name: string) => `${IMG_BASE}/fcom_a320_${name}.webp`;
const pdp = (file: string, v?: number) => `${IMG_BASE}/${file}.webp${v ? `?v=${v}` : ""}`;
const GR_V = 1795607846;
const src = (sections: string) => `Source: FCTM A320 ${sections}`;

const INT_03_SLIDES: MccSlideSpec[] = [
  // ── A. Gestión de situaciones anormales ─────────────────────────────────
  {
    comment: "SLIDE INT-03.1: Management of abnormal operations — introduction and sequence",
    eyebrow: EYEBROW,
    title: "3.1 Gestión de anormales: READ & DO y orden de los procedimientos",
    subtitle: "Management of Abnormal Operations · General",
    leftPct: 52,
    leftTitle: "INTRODUCTION / SEQUENCE OF PROCEDURE (AOP-30-10)",
    rightTitle: "SYSTEM DISPLAY",
    image: sisFig("sd_page"),
    imageAlt: "System display page shown automatically for the affected system",
    sourceRef: src("AOP-30-10 Introduction / Sequence of Procedure"),
    cards: [
      {
        heading: "Introduction",
        paragraph: "Below-listed procedures are performed using the \"READ & DO\" principle (except MEMORY items or OEB immediate actions):",
        bullets: [
          "ECAM procedures, are triggered automatically in response to an abnormal behavior of the systems monitored by the Flight Warning System (FWS)",
          "QRH procedures, are applied by the flight crew in response to an abnormal event detected by any flight crewmember",
          "OEB procedures, are triggered in some situations.",
        ],
      },
      {
        heading: "Sequence of procedure",
        paragraph:
          "In the case of abnormal or emergency situations, the flight crew should apply the procedures in the following sequence, as appropriate: MEMORY ITEMS or OEB immediate actions → OEB → ECAM → QRH.",
      },
    ],
    alert: {
      level: "NOTE",
      text: "This sequence may not cover all operational situations. Therefore, in all cases, the flight crew should exercise their judgment and adapt the sequence of actions to the real conditions.",
    },
  },
  {
    comment: "SLIDE INT-03.2: One procedure at a time, use of autopilot, LAND ASAP",
    eyebrow: EYEBROW,
    title: "3.2 Un procedimiento cada vez, uso del AP y LAND ASAP",
    subtitle: "Management of Abnormal Operations · General",
    leftPct: 52,
    leftTitle: "GENERAL (AOP-30-10)",
    rightTitle: "FCU & EFIS CONTROL PANELS",
    image: pubFig("fcu_panels"),
    imageAlt: "FCU with AP 1, AP 2 and A/THR pushbuttons",
    sourceRef: src("AOP-30-10 One Procedure at a Time / Use of Autopilot / LAND ASAP Definition"),
    cards: [
      {
        heading: "One procedure at a time",
        paragraph: "When the flight crew applies a procedure, they must complete the procedure, unless:",
        bullets: [
          "An action requests to apply/consider another procedure,",
          "The flight crew needs to update their situation assessment due to an unexpected abnormal or emergency situation (e.g. Smoke detected by the cabin crew or volcanic ash encounter).",
        ],
      },
      {
        heading: "Use of autopilot",
        paragraph:
          "The AP has not been certified in all configurations, and its performance cannot be guaranteed. If the pilot chooses to use the AP in such circumstances, extra vigilance is required, and the AP must be disconnected, if the aircraft deviates from desired or safe flight path.",
      },
      {
        heading: "LAND ASAP",
        bullets: [
          "Red LAND ASAP: land as soon as possible at the nearest airport at which a safe landing can be made (time-critical situation).",
          "Amber LAND ASAP: consider landing at the nearest suitable airport (suitability criteria in accordance with the Operator's policy).",
        ],
      },
    ],
  },
  {
    comment: "SLIDE INT-03.3: Handling of cockpit controls",
    eyebrow: EYEBROW,
    title: "3.3 Mandos que se confirman entre los dos pilotos",
    subtitle: "Management of Abnormal Operations · Handling of Cockpit Controls",
    leftPct: 52,
    leftTitle: "HANDLING OF COCKPIT CONTROLS (AOP-30-20)",
    rightTitle: "ENG MASTER LEVERS",
    image: pubFig("eng_master_panel"),
    imageAlt: "ENG MASTER levers, one of the controls crosschecked before any action",
    sourceRef: src("AOP-30-20 General / Tasksharing Rules for Cockpit Controls Operation"),
    cards: [
      {
        heading: "In flight, the PF and PM must crosscheck before any action on",
        bullets: ["ENG MASTER lever", "IR MODE selector", "All guarded controls", "Cockpit C/Bs."],
      },
      {
        heading: "Why",
        paragraph:
          "In order to prevent any inadvertent action by the flight crew with irreversible effects (e.g. when the flight crew operates red guarded controls). If the flight crew inadvertently operates a black guarded control, the subsequent effect is reversible. The flight crew must restrict the reset of systems to those listed in the QRH.",
      },
      {
        heading: "Tasksharing",
        bullets: [
          "The PM indicates the related control and requests confirmation from the PF",
          "The PF verifies the control designated by the PM and gives confirmation to the PM",
          "The PM operates the related control, as required.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE INT-03.4: Thrust levers and overhead panel controls",
    eyebrow: EYEBROW,
    title: "3.4 Palancas de empuje y mandos del panel del techo",
    subtitle: "Management of Abnormal Operations · Handling of Cockpit Controls",
    leftPct: 55,
    leftTitle: "THRUST LEVERS / OVERHEAD PANEL (AOP-30-20)",
    rightTitle: "AIR BLEED PANEL — X BLEED",
    image: pubFig("air_bleed_panel"),
    imageAlt: "AIR bleed panel with the crossbleed selector",
    sourceRef: src("AOP-30-20 Tasksharing Rules for Thrust Levers Operation / Handling Overhead Panel Control"),
    cards: [
      {
        heading: "Thrust levers",
        paragraph:
          "The thrust levers are part of the controls that the PF operates, in order to ensure their “FLY” task. Therefore, the PM should not operate the thrust levers. If requested by any ECAM/QRH/OEB procedure, the PM should ask to the PF to operate the corresponding lever: the PF indicates the related thrust lever and requests confirmation from the PM, the PM verifies and gives confirmation, the PF operates it.",
      },
      {
        heading: "Overhead panel",
        paragraph:
          "To perform any action requested by a procedure, the PM should indicate the related panel and control and announce in sequence: the name of the system, the name of the control (or system reset), the action. E.g. “AIR, XBLEED, CLOSE”.",
        bullets: [
          "Most of the time, in the case of a system failure, the FAULT light of the applicable control comes on in amber.",
          "After the selection of a control, the PM should check the SD page, in order to verify that the selected action was performed.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE INT-03.5: Handling of ECAM/QRH/OEB — general",
    eyebrow: EYEBROW,
    title: "3.5 Primero la trayectoria, después el READ & DO",
    subtitle: "Management of Abnormal Operations · Handling of ECAM/QRH/OEB",
    leftPct: 52,
    leftTitle: "HANDLING OF ECAM/QRH/OEB — GENERAL (AOP-30-30)",
    rightTitle: "ECAM DISPLAY UNITS",
    image: sisFig("ecam_du_arrangement"),
    imageAlt: "ECAM Engine/Warning Display and System Display",
    sourceRef: src("AOP-30-30 General"),
    cards: [
      {
        heading: "First priority",
        paragraph:
          "When an abnormal situation is detected by the flight crew, the first priority of the flight crew is to maintain a safe flight path before the flight crew performs any READ & DO actions. For takeoff or go around, the flight crew should delay READ & DO actions until the aircraft reaches a minimum of 400 ft AGL. However, the flight crew may initiate READ & DO actions below 400 ft AGL, provided that the flight path is safe.",
      },
      {
        heading: "When the flight crew performs a “READ & DO” ECAM/QRH/OEB procedure, they must",
        bullets: [
          "Correctly read and apply the ECAM/QRH/OEB actions",
          "Appropriately share tasks",
          "Carefully monitor and crosscheck.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "In some time critical situations, the flight crew has no time to refer to the ECAM/QRH/OEB procedure. Therefore, the flight crew must know, and strictly apply by memory, items referred to as MEMORY ITEMS or OEB immediate actions.",
    },
  },
  {
    comment: "SLIDE INT-03.6: Tasksharing rules in abnormal operations",
    eyebrow: EYEBROW,
    title: "3.6 Quién hace qué durante el ECAM",
    subtitle: "Management of Abnormal Operations · Tasksharing Rules",
    leftPct: 55,
    leftTitle: "TASKSHARING RULES (AOP-30-30)",
    rightTitle: "ECAM ELEC PAGE",
    image: sis2Fig("ecam_elec"),
    imageAlt: "ECAM ELEC system page used to analyze a failure",
    sourceRef: src("AOP-30-30 Tasksharing Rules"),
    cards: [
      {
        heading: "General",
        paragraph:
          "The PF usually remains the PF for the entire flight, unless the captain decides to re-allocate tasks differently, or in the case of failure that impacts the \"FLY\" task of the PF.",
      },
      {
        heading: "PF — in addition to FLY and NAVIGATE",
        bullets: [
          "Initiate ECAM/QRH/OEB actions that the PM must perform",
          "Communicate after ECAM/QRH/OEB actions are initiated and until the PM announces \"ECAM actions complete\", or “XXX procedure complete” in the case of QRH or OEB procedure.",
        ],
      },
      {
        heading: "PM — in addition to MONITOR",
        bullets: [
          "Read & Do the ECAM/QRH/OEB actions in a spoken voice",
          "Obtain PF confirmation before clearing any ECAM.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE INT-03.7: Why stop ECAM before the STATUS page",
    eyebrow: EYEBROW,
    title: "3.7 Por qué se para el ECAM antes de la STATUS",
    subtitle: "Management of Abnormal Operations · Stop ECAM",
    leftPct: 58,
    leftTitle: "STOP ECAM (AOP-30-30)",
    rightTitle: "ELEC PANEL — SYSTEM RESET",
    image: sis2Fig("elec_overhead"),
    imageAlt: "ELEC overhead panel used for a system reset",
    sourceRef: src("AOP-30-30 Stop ECAM / If the ECAM Warning Disappears / Handling of QRH"),
    cards: [
      {
        heading: "In all cases, the flight crew must stop the ECAM actions before reading the STATUS page, in order to",
        bullets: [
          "Ensure that the Acceleration Flow Pattern is performed (i.e. in the case of failure after takeoff, to ensure that the flaps and the landing gear are retracted).",
          "Perform any normal C/L, if applicable.",
          "Consider any system reset — only if permitted in the system reset table. The flight crew must not apply the system reset procedure from memory. They must refer to the QRH.",
          "Consider application of the ENG RELIGHT procedure after an engine failure with no damage.",
        ],
      },
      {
        heading: "When the conditions disappear",
        bullets: [
          "If an ECAM warning disappears while a procedure is being applied, the warning can be considered no longer applicable. Application of the procedure can be stopped.",
          "The flight crew can stop any abnormal QRH procedure if the conditions for its application disappear.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE INT-03.8: Advisory and spurious caution",
    eyebrow: EYEBROW,
    title: "3.8 Advisory y avisos espurios",
    subtitle: "Management of Abnormal Operations · Advisory / Spurious Caution",
    leftPct: 52,
    leftTitle: "ADVISORY / SPURIOUS CAUTION (AOP-30-40 · AOP-30-50)",
    rightTitle: "ECAM CONTROL PANEL — EMER CANC",
    image: pubFig("ecam_control_panel"),
    imageAlt: "ECAM control panel with the EMER CANC pushbutton",
    sourceRef: src("AOP-30-40 Handling of Advisory / AOP-30-50 Spurious Caution"),
    cards: [
      {
        heading: "Advisory",
        paragraph:
          "The ADVISORY enables the flight crew to monitor the drifting parameter. The sensors used to trigger an advisory may be different from those used by the FWS to trigger an ECAM alert.",
        bullets: [
          "The flight crewmember that first notices an advisory announces “ADVISORY on XYZ system”",
          "Then, the PF requests the PM to monitor the drifting parameter. If time permits, the PM may refer to the QRH (advisory triggering conditions and recommended actions).",
        ],
      },
      {
        heading: "Spurious caution",
        paragraph:
          "Any spurious caution can be deleted with the EMER CANC pb. When pressed, the EMER CANC pb deletes both the aural alert, and the caution for the remainder of the flight. This is indicated on the STATUS page, by the \"CANCELLED CAUTION\" title.",
      },
    ],
    alert: {
      level: "NOTE",
      text: "The EMER CANCEL inhibits any aural warning that is associated with a red warning, but does not affect the warning itself.",
    },
  },
  // ── B. Golden Rules ──────────────────────────────────────────────────────
  {
    comment: "SLIDE INT-03.9: Golden Rules for pilots — introduction",
    eyebrow: EYEBROW,
    title: "3.9 Golden Rules for Pilots",
    subtitle: "Airbus Operational Philosophy · Golden Rules",
    leftPct: 50,
    leftTitle: "GOLDEN RULES FOR PILOTS (AOP-40)",
    rightTitle: "THE FOUR GOLDEN RULES",
    image: pdp("p018_golden_rules", GR_V),
    imageAlt: "The four Airbus Golden Rules",
    sourceRef: "Source: FCTM A320 AOP-40 Golden Rules for Pilots & Airbus Tutorial PDP Jan 2024 — Golden Rules (p.18)",
    cards: [
      {
        heading: "Introduction",
        paragraph:
          "The Airbus \"Golden Rules for Pilots\" are operational guidelines, based on: basic flying principles · the adaptation of these basic flying principles to modern-technology aircraft · the provision of information about required crew coordination for the operation of Airbus aircraft. The objective is to also take into account the principles of flight crew interaction with automated systems, and the principles of Crew Resource Management (CRM), in order to help prevent the causes of many accidents or incidents and to ensure flight efficiency.",
      },
      {
        heading: "The four Golden Rules (normal operations and all unexpected or abnormal/emergency situations)",
        bullets: [
          "1. Fly. Navigate. Communicate: In this order and with appropriate tasksharing.",
          "2. Use the appropriate level of automation at all times.",
          "3. Understand the FMA at all times.",
          "4. Take action if things do not go as expected.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE INT-03.10: Golden Rule 1 — Fly",
    eyebrow: EYEBROW,
    title: "3.10 Golden Rule 1: Fly",
    subtitle: "Golden Rules · Fly, Navigate, Communicate",
    leftPct: 55,
    leftTitle: "1. FLY. NAVIGATE. COMMUNICATE (AOP-40)",
    rightTitle: "FLY, NAVIGATE, COMMUNICATE",
    image: pdp("p019_golden_rules", GR_V),
    imageAlt: "Golden Rule 1 Fly Navigate Communicate",
    sourceRef: "Source: FCTM A320 AOP-40 Golden Rules for Pilots & Airbus Tutorial PDP Jan 2024 — Golden Rules (p.19)",
    cards: [
      {
        heading: "Fly! Navigate! Communicate!",
        paragraph:
          "The flight crew must perform these three actions in sequence and must use appropriate tasksharing in normal and abnormal operations, in manual flight or in flight with the AP engaged.",
      },
      {
        heading: "\"Fly\" indicates that",
        bullets: [
          "The Pilot Flying (PF) must concentrate on \"flying the aircraft\" to monitor and control the pitch attitude, bank angle, airspeed, thrust, sideslip, heading, etc., in order to achieve and maintain the desired targets, vertical flight path, and lateral flight path.",
          "The Pilot Monitoring (PM) must assist the PF and must actively monitor flight parameters, and call out any excessive deviation. The PM's role of \"actively monitoring\" is very important.",
          "Both flight crewmembers must focus and concentrate on their tasks to ensure appropriate tasksharing, maintain situational awareness and immediately resolve any uncertainty as a crew.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE INT-03.11: Golden Rule 1 — Navigate and Communicate",
    eyebrow: EYEBROW,
    title: "3.11 Golden Rule 1: Navigate y Communicate",
    subtitle: "Golden Rules · Fly, Navigate, Communicate",
    leftPct: 55,
    leftTitle: "1. FLY. NAVIGATE. COMMUNICATE (AOP-40)",
    rightTitle: "ND — KNOW WHERE YOU ARE",
    image: sisFig("nd_arc"),
    imageAlt: "Navigation display in ARC mode",
    sourceRef: src("AOP-40 Golden Rules for Pilots"),
    cards: [
      {
        heading: "Navigate — the four \"Know where ...\" statements",
        bullets: [
          "Know where you are…",
          "Know where you should be…",
          "Know where you should go…",
          "Know where the weather, terrain, and obstacles are.",
        ],
      },
      {
        heading: "Communicate",
        paragraph:
          "Effective and appropriate crew communication between the PF and the PM, flight crew and ATC, flight crew and the cabin crew, flight crew and the ground crew. To ensure good communication, the flight crew should use standard phraseology and the applicable callouts.",
      },
    ],
    alert: {
      level: "NOTE",
      text: "In abnormal and emergency situations, the PF must recover a steady flight path, and the flight crew must identify the flight situation. The PF must then inform ATC and the cabin crew of the flight situation and the flight crew's intentions. Fly the Aircraft, Fly the Aircraft, Fly the Aircraft...",
    },
  },
  {
    comment: "SLIDE INT-03.12: Golden Rule 2 — Automation",
    eyebrow: EYEBROW,
    title: "3.12 Golden Rule 2: nivel de automatización adecuado",
    subtitle: "Golden Rules · Use the Appropriate Level of Automation",
    leftPct: 52,
    leftTitle: "2. APPROPRIATE LEVEL OF AUTOMATION (AOP-40)",
    rightTitle: "AP/FD AND A/THR ENGAGEMENT",
    image: pdp("p300_ap_fd_and_a_thr_engagement_disengagement"),
    imageAlt: "AP/FD engagement and FMA check",
    sourceRef: "Source: FCTM A320 AOP-40 Golden Rules for Pilots & Airbus Tutorial PDP Jan 2024 — AP/FD and A/THR (p.300)",
    cards: [
      {
        heading: "Use the appropriate level of automation at all times",
        paragraph:
          "Aircraft are equipped with several levels of automation, used to perform specific tasks. The appropriate use of automated systems significantly helps the flight crew with workload management and situation awareness (traffic, ATC communication, etc.).",
      },
      {
        heading: "The flight crew must, at all times",
        bullets: [
          "Determine and select the appropriate level of automation that can include manual flight",
          "Understand the operational effect of the selected level of automation.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "The decision to use manual flight must be agreed between both pilots and must be based on an individual assessment of the pilot: aircraft status (malfunctions), pilot fatigue, weather conditions, traffic situation, and if the PF is familiar with the area.",
    },
  },
  {
    comment: "SLIDE INT-03.13: Golden Rule 3 — Understand the FMA",
    eyebrow: EYEBROW,
    title: "3.13 Golden Rule 3: entender el FMA en todo momento",
    subtitle: "Golden Rules · Understand the FMA at All Times",
    leftPct: 52,
    leftTitle: "3. UNDERSTAND THE FMA AT ALL TIMES (AOP-40)",
    rightTitle: "PFD — FMA",
    image: sisFig("pfd_attitude"),
    imageAlt: "Primary flight display with the flight mode annunciator",
    sourceRef: src("AOP-40 Golden Rules for Pilots"),
    cards: [
      {
        heading: "Confirm the effect of every action",
        paragraph:
          "The flight crew must confirm the operational effect of all actions on the FCU, or on the MCDU, via a crosscheck of the corresponding annunciation or data on the PFD and on the ND.",
      },
      {
        heading: "At all times, the flight crew should be aware of",
        bullets: [
          "Guidance modes (armed or engaged)",
          "Guidance targets",
          "Aircraft response in terms of attitude, speed, and trajectory",
          "Transition or reversion modes.",
        ],
      },
      {
        heading: "To ensure correct situational awareness, at all times, the flight crew must",
        bullets: ["Monitor the FMA", "Announce the FMA", "Confirm the FMA", "Understand the FMA."],
      },
    ],
  },
  {
    comment: "SLIDE INT-03.14: Golden Rule 4 — Take action",
    eyebrow: EYEBROW,
    title: "3.14 Golden Rule 4: actuar si algo no va según lo previsto",
    subtitle: "Golden Rules · Take Action if Things Do Not Go as Expected",
    leftPct: 52,
    leftTitle: "4. TAKE ACTION (AOP-40)",
    rightTitle: "PF AND PM ACTIONS",
    image: pdp("p022_golden_rules", GR_V),
    imageAlt: "Golden Rule 4 take action PF and PM",
    sourceRef: "Source: FCTM A320 AOP-40 Golden Rules for Pilots & Airbus Tutorial PDP Jan 2024 — Golden Rules (p.22)",
    cards: [
      {
        heading: "Take action if things do not go as expected",
        paragraph:
          "If the aircraft does not follow the desired vertical or lateral flight path, or the selected targets, and if the flight crew does not have sufficient time to analyze and solve the situation, the flight crew must immediately take appropriate or required actions, as follows:",
      },
      {
        heading: "The PF should change the level of automation",
        bullets: ["From managed guidance to selected guidance, or", "From selected guidance to manual flying."],
      },
      {
        heading: "The PM should perform the following actions in sequence",
        bullets: ["Communicate with the PF", "Challenge the actions of the PF, when necessary", "Take over, when necessary."],
      },
    ],
  },
];

export const MCC_INT_03: MccLesson = {
  id: "a3200000-0000-0000-0000-000000000303",
  course_id: MCC_COURSE_ID,
  title: "INT-03. Gestión de situaciones anormales y Golden Rules",
  slug: "int-03-anormales-golden-rules",
  sequence_order: 3,
  lesson_order: 3,
  min_seconds: mccMinSeconds(INT_03_SLIDES.length, mccVideoSeconds(INT_03_SLIDES)),
  module_title: MCC_MODULES.INTRO,
  content_html: joinSlides(INT_03_SLIDES),
};

export const INT_03_SLIDE_COUNT = INT_03_SLIDES.length;
