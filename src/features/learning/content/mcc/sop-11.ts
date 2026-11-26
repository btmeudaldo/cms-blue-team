/**
 * SOP-11 — Gestión de situaciones anormales: ECAM, OEB, QRH y uso del Summary (0,75 h).
 *
 * Alcance: Curso APS MCC — Airbus A320ceo CFM56-5B (simulador Entrol A32).
 * Fuentes: Airbus Tutorial PDP Jan 2024 — Abnormal and Emergency Procedures: Management of Abnormal
 * Operations (págs. 420–435) y Use of Summary (436–442); FCOM A320 DSC-31-10 (ECAM description),
 * DSC-31-15 (E/WD), DSC-31-20 (STATUS page), DSC-31-25 (ECAM sequence), DSC-31-27 (OEB reminder),
 * DSC-31-30 (ECAM controls), EFB-LDG-20 y EFB-LDG-50 (in-flight performance assessment).
 *
 * Criterio de redacción: la columna izquierda NO repite el texto de la lámina de la derecha; aporta la
 * información complementaria del FCOM en inglés y literal, solo de bloques aplicables a la variante
 * A320ceo CFM56-5B (grupo EC-ILQ). El FCOM seleccionado no incluye el QRH: en 11.14 y 11.15 las
 * tarjetas resumen el texto PDP de las láminas no usadas del Summary (436, 439–441).
 * Láminas no usadas: 420 y 436 (portadas con otros tipos); 434 y 435 (LAND ASAP y fuel penalty, ya en
 * p428); 437 y 439–441 (Summary, texto en tarjetas). p424 y p425 usan versiones *_a320.webp (sin caja
 * cortada al pie y con páginas SD F/CTL y ELEC de A320); p432 lleva tapada la línea "Reset buttons
 * (A330 / A340)" y su botón.
 * Arquitectura: docs/mcc/08_ARQUITECTURA_PDP.md.
 */
import { MCC_MODULES, joinSlides, mccMinSeconds, mccVideoSeconds, type MccLesson, type MccSlideSpec } from "./slide-builder.ts";

const MCC_COURSE_ID = "a3200000-0000-0000-0000-000000000320";
const PDP_IMG = "https://www.blueteam.es/elearning/media/mcc/pdp";
const EYEBROW = "APS MCC · A320 · SOP-11";

/** Versión común de caché para las láminas de esta lección (pie recortado). */
const IMG_VERSION = 1795626000;
const chapter = (page: number) => (page <= 435 ? "management_of_abnormal_operations" : "use_of_summary");
const CHAPTER_NAME: Record<string, string> = {
  management_of_abnormal_operations: "Management of Abnormal Operations",
  use_of_summary: "Use of Summary",
};
const img = (page: number) => `${PDP_IMG}/p${String(page).padStart(3, "0")}_${chapter(page)}.webp?v=${IMG_VERSION}`;
const imgA320 = (page: number) => `${PDP_IMG}/p${String(page).padStart(3, "0")}_${chapter(page)}_a320.webp?v=${IMG_VERSION}`;
const src = (sections: string, page: number) =>
  `Source: FCOM A320 ${sections} & Airbus Tutorial PDP Jan 2024 — ${CHAPTER_NAME[chapter(page)]} (p.${page})`;

const SOP_11_SLIDES: MccSlideSpec[] = [
  {
    comment: "SLIDE SOP-11.1: Advisory and warning classification",
    eyebrow: EYEBROW,
    title: "11.1 Advisory y clasificación de avisos",
    subtitle: "Management of Abnormal Operations · Advisory",
    leftPct: 50,
    leftTitle: "WARNING/CAUTION CLASSIFICATION (DSC-31-10)",
    rightTitle: "ADVISORY",
    image: img(421),
    imageAlt: "Advisory: announce, analyze the SD page, monitor the drifting parameter and refer to the QRH",
    sourceRef: src("DSC-31-10 Warning/Caution Classification / Priority Rules", 421),
    cards: [],
    table: {
      headers: ["Level", "Signification", "Aural / visual"],
      rows: [
        ["Level 3", "Red warning: the configuration, or failure requires immediate action (e.g. stall, o/speed, eng fire, excess cab alt)", "CRC or specific sound or synthetic voice · MASTER WARN red flashing · red message on E/WD · SD page"],
        ["Level 2", "Amber caution: the flight crew should be aware of the configuration or failure, but does not need to take any immediate action (e.g. HYD G SYS LO PR)", "Single chime · MASTER CAUT amber steady · amber message on E/WD · SD page"],
        ["Level 1", "Amber caution: requires crew monitoring (loss of redundancy or system degradation, e.g. FCDC fault)", "None · amber message on E/WD generally without procedure"],
        ["Advisory", "System parameters monitoring", "None · SD page; the affected parameter pulses green"],
      ],
    },
    alert: {
      level: "NOTE",
      text: "A level 3 warning has priority over a level 2 caution which has priority over a level 1 caution. Most warnings and cautions are inhibited during critical phases of flight (T/O INHIBIT – LDG INHIBIT).",
    },
  },
  {
    comment: "SLIDE SOP-11.2: Memory items and audio indicators",
    eyebrow: EYEBROW,
    title: "11.2 Memory items y avisos sonoros",
    subtitle: "Management of Abnormal Operations · Memory Items",
    leftPct: 45,
    leftTitle: "AUDIO INDICATORS (DSC-31-10)",
    rightTitle: "MEMORY ITEMS",
    image: img(422),
    imageAlt: "Memory items menu, boxed memory items in the procedure and appropriate callout",
    sourceRef: src("DSC-31-10 Audio Indicators", 422),
    cards: [],
    table: {
      headers: ["Audio indicator", "Meaning", "Cancellation"],
      rows: [
        ["Continuous repetitive chime", "Red warnings (permanent)", "Press MASTER WARN lt"],
        ["Single chime", "Amber caution (0.5 s)", "—"],
        ["Cavalry charge", "A/P disconnection by take over pb (1.5 s) or due to failure (permanent)", "Second push on TAKE OVER pb, or MASTER WARN lt"],
        ["Triple click", "Landing capability downgrade or some cases of mode reversion (0.5 s, 3 pulses)", "—"],
        ["Cricket + \"STALL\"", "Stall (permanent)", "NIL"],
      ],
    },
  },
  {
    comment: "SLIDE SOP-11.3: Detection and ECAM sequence",
    eyebrow: EYEBROW,
    title: "11.3 Detección del fallo",
    subtitle: "Management of Abnormal Operations · Detection",
    leftPct: 45,
    leftTitle: "ECAM SEQUENCE (DSC-31-25-10 · DSC-31-10)",
    rightTitle: "DETECTION",
    image: img(423),
    imageAlt: "First pilot who notices MASTER WARNING or MASTER CAUTION resets it; flight path first, 400 ft AGL",
    sourceRef: src("DSC-31-25-10 ECAM Sequence General / DSC-31-10 Types of Failures", 423),
    cards: [
      {
        heading: "If ECAM detects a failure:",
        bullets: [
          "The E/WD displays warning or caution messages.",
          "The master warning or master caution lights light up and the system sounds an aural signal (except in the case of a level 1 caution).",
          "The system display (SD) shows the system page for the affected system.",
          "The CLR pushbutton on the ECAM control panel lights up.",
          "In addition, a local warning light controlled directly by the affected system can light up.",
        ],
      },
      {
        heading: "Types of failures",
        bullets: [
          "Independent: a failure that affects an isolated system or item of equipment without degrading the performance of others in the aircraft.",
          "Primary: a failure of a system or an item of equipment that costs the aircraft the use of other systems or items of equipment.",
          "Secondary: the loss of a system or an item of equipment resulting from a primary failure.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SOP-11.4: ECAM actions and E/WD",
    eyebrow: EYEBROW,
    title: "11.4 ECAM actions",
    subtitle: "Management of Abnormal Operations · ECAM Actions",
    leftPct: 45,
    leftTitle: "INDICATIONS ON E/WD (DSC-31-15)",
    rightTitle: "ECAM ACTIONS",
    image: imgA320(424),
    imageAlt: "ECAM actions sequence with tasksharing for abnormal operations",
    sourceRef: src("DSC-31-15 Indications on E/WD", 424),
    cards: [
      {
        heading: "Lower part of the E/WD",
        bullets: [
          "Bottom left: primary or independent warnings and cautions, or memo information.",
          "Bottom right: title of the system affected (in case of overflow on the bottom left part), or secondary failure, or memo, or special lines (such as \"AP OFF\", \"LAND ASAP\").",
          "The action line automatically clears, when the flight crew has performed the required action. Certain actions lines will not disappear after being done.",
        ],
      },
      {
        heading: "Primary and secondary failure",
        paragraph:
          "The ECAM DU displays a primary failure as a boxed title. It identifies a secondary failure by putting a star in front of the title of the affected system. If there are too many ECAM messages, a green arrow appears at the bottom of the display; the pilot can scroll down by pushing the CLR pushbutton.",
      },
    ],
  },
  {
    comment: "SLIDE SOP-11.5: When to stop ECAM and flight phase inhibition",
    eyebrow: EYEBROW,
    title: "11.5 Parar el ECAM e inhibición por fases",
    subtitle: "Management of Abnormal Operations · Stop ECAM",
    leftPct: 45,
    leftTitle: "FLIGHT PHASE INHIBITION (DSC-31-15)",
    rightTitle: "WHEN TO STOP ECAM ACTIONS",
    image: img(430),
    imageAlt: "PF calls ECAM ACTIONS for the first ECAM only; STOP ECAM and CONTINUE ECAM",
    sourceRef: src("DSC-31-15 Flight Phases", 430),
    cards: [
      {
        heading: "Flight phases",
        paragraph:
          "To improve its operational efficacy, the computer inhibits some warnings and cautions for certain flight phases, to avoid alerting the pilots unnecessarily at times when they have high workloads, such as during takeoff or landing. In these two phases, the DU displays magenta memos: \"T.O. INHIBIT\" (flight phases 3, 4, and 5), and \"LDG INHIBIT\" (flight phases 7 and 8).",
      },
      {
        heading: "Flight phase inhibition",
        bullets: [
          "The failure occurs during a phase where it is not inhibited: the E/WD displays the warning immediately and continues to display it as long as the failure is present.",
          "The failure occurs during an inhibited phase: the E/WD displays the warning only when the aircraft has entered a phase where it is not inhibited.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "These flight phases are different from and independent of the ones that the FMGC uses.",
    },
  },
  {
    comment: "SLIDE SOP-11.6: System display and ECAM controls",
    eyebrow: EYEBROW,
    title: "11.6 Páginas de sistema (SD)",
    subtitle: "Management of Abnormal Operations · System Display",
    leftPct: 45,
    leftTitle: "ECAM CONTROLS (DSC-31-30 · DSC-31-25-10)",
    rightTitle: "SYSTEM DISPLAY",
    image: imgA320(425),
    imageAlt: "Analyze each SD page and clear each secondary failure",
    sourceRef: src("DSC-31-30 ECAM Controls / DSC-31-25-10 ECAM Sequence", 425),
    cards: [
      {
        heading: "CLR pb",
        paragraph:
          "This pushbutton remains lit as long as the E/WD is displaying a warning or caution message, or a status message on the SD. If it is lit, pressing it changes the ECAM display.",
      },
      {
        heading: "After completing remedial procedures",
        paragraph:
          "The flight crew must push the CLR pushbutton repeatedly until the displays return to their normal configurations: MEMO messages on the E/WD, the system page related to the present flight phase on the SD, and the CLR light on the ECAM control panel turned off.",
      },
      {
        heading: "ALL pb",
        paragraph:
          "When this pushbutton is pressed and held down, the SD successively displays all the system pages at one-second intervals. If the ECAM control panel fails, the flight crew can use this pushbutton to page through the system pages until it reaches the desired page.",
      },
    ],
  },
  {
    comment: "SLIDE SOP-11.7: Actions confirmed by both pilots, RCL and EMER CANC",
    eyebrow: EYEBROW,
    title: "11.7 Acciones confirmadas por los dos pilotos",
    subtitle: "Management of Abnormal Operations · Crosscheck",
    leftPct: 45,
    leftTitle: "RCL · EMER CANC (DSC-31-30)",
    rightTitle: "ACTIONS TO BE CONFIRMED BY BOTH PILOTS",
    image: img(432),
    imageAlt: "Thrust levers, guarded controls, ENG MASTER levers, IR MODE selectors and cockpit CBs confirmed by both pilots",
    sourceRef: src("DSC-31-30 ECAM Controls", 432),
    cards: [
      {
        heading: "RCL pb",
        bullets: [
          "When pressed, the E/WD displays all alerts previously cleared via the CLR pb that are still active.",
          "When pressed for more than 3 s, the E/WD also displays all alerts previously cancelled via the EMER CANC pb.",
          "This action on the RCL pb also suppresses the flight phase inhibition function until the next flight phase.",
        ],
      },
      {
        heading: "EMER CANC pb",
        bullets: [
          "Warnings: cancels (stops) an aural warning for as long as the failure condition continues, extinguishes the MASTER WARNING lights, does not affect the ECAM message display.",
          "Cautions: cancels any present caution (single chime, MASTER CAUTION lights, ECAM message) for the rest of the flight.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "The EMER CANC pushbutton should only be used to suppress spurious MASTER CAUTIONS.",
    },
  },
  {
    comment: "SLIDE SOP-11.8: PROC APPLY and OEB reminder",
    eyebrow: EYEBROW,
    title: "11.8 PROC … APPLY y OEB en el ECAM",
    subtitle: "Management of Abnormal Operations · ECAM / OEB Actions",
    leftPct: 45,
    leftTitle: "OEB REMINDER (DSC-31-27)",
    rightTitle: "ECAM / OEB ACTIONS ……… PERFORM",
    image: img(431),
    imageAlt: "When the ECAM requests a PROC APPLY: stop ECAM actions, refer to the QRH and perform the procedure",
    sourceRef: src("DSC-31-27 OEB Reminder", 431),
    cards: [
      {
        heading: "General",
        paragraph:
          "The OEB reminder function provides operational help to the flight crew. This function enables the flight crew to clearly identify on the ECAM any procedure and STATUS message superseded by an OEB procedure. When a situation causes an ECAM alert to trigger, a message informs the flight crew in real time if there is an OEB for the displayed ECAM alert and/or STATUS messages. In this case, a specific ECAM message informs the flight crew to refer to the QRH.",
      },
      {
        heading: "The OEB reminder flag may apply to:",
        bullets: [
          "ECAM procedure only: the ECAM warning title remains the same; all corresponding actions are deleted. Instead, the \"REFER TO QRH/OEB PROC\" message appears.",
          "ECAM procedure and corresponding status messages.",
          "Status message only.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "When an OEB with an associated OEB reminder code is applicable to the aircraft, the OEB reminder code needs to be activated by a maintenance action. When the OEB is no longer applicable to the aircraft, the OEB reminder code must be deactivated by the maintenance team.",
    },
  },
  {
    comment: "SLIDE SOP-11.9: STATUS page",
    eyebrow: EYEBROW,
    title: "11.9 Página STATUS",
    subtitle: "Management of Abnormal Operations · Status Page",
    leftPct: 45,
    leftTitle: "STATUS PAGE (DSC-31-20)",
    rightTitle: "STATUS PAGE",
    image: img(426),
    imageAlt: "Status: stop ECAM, consider flows and resets, continue ECAM, read and remove status",
    sourceRef: src("DSC-31-20 Status Page / DSC-31-30 STS pb", 426),
    cards: [
      {
        heading: "Purpose and colour code",
        bullets: [
          "The STATUS page provides an operational summary of the state of the aircraft.",
          "Limitations (speed, flight level): blue · Approach procedures: white (red) (amber) · Procedures (corrections to apply for landing): blue · Information: green · Cancelled caution: white · Inoperative system: amber · Maintenance status: white.",
        ],
      },
      {
        heading: "Display",
        bullets: [
          "The STATUS page automatically appears if it is not empty, and the flight crew clears the last alert on the E/WD, or selects the CONF1 for approach.",
          "STS pb: if the system has no status messages, the status page displays \"NORMAL\" for 3 s. The flight crew can clear the STATUS page by pushing the CLR pb, or by pushing the STS pb a second time.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SOP-11.10: Reading the STATUS page",
    eyebrow: EYEBROW,
    title: "11.10 Leer la STATUS completa",
    subtitle: "Management of Abnormal Operations · Status … Read",
    leftPct: 45,
    leftTitle: "STATUS PAGE (DSC-31-20 · EFB-LDG-50)",
    rightTitle: "STATUS … READ",
    image: img(433),
    imageAlt: "STATUS page with limitations, deferred procedures, information and inoperative systems",
    sourceRef: src("DSC-31-20 Status Page / EFB-LDG-50 Landing Performance following In-Flight Failure", 433),
    cards: [
      {
        heading: "Blank lines",
        paragraph:
          "Each block (limitation, approach procedure, etc.) is separated by a blank line. Therefore, a condition that is included in a limitation block and the associated action line that is included in the procedure block are separated by a blank line.",
      },
      {
        heading: "LDG DIST PROC APPLY",
        paragraph:
          "If an ECAM alert/QRH procedure affects landing performance, the ECAM/QRH procedure requests LDG DIST PROC... APPLY. In this case the flight crew must verify the landing performance.",
      },
      {
        heading: "STS reminder",
        paragraph:
          "The STS reminder appears on the E/WD when the STATUS page is not empty (displaying a message other than \"CANCELLED CAUTION\" or MAINTENANCE status), or when there is a MAINTENANCE status at engines shutdown.",
      },
    ],
  },
  {
    comment: "SLIDE SOP-11.11: QRH procedures",
    eyebrow: EYEBROW,
    title: "11.11 Procedimientos QRH",
    subtitle: "Management of Abnormal Operations · QRH Procedures",
    leftPct: 45,
    leftTitle: "ECAM OPERATING MODES (DSC-31-10)",
    rightTitle: "QRH PROCEDURES",
    image: img(427),
    imageAlt: "Abnormal situation without ECAM alert: consider OEB, order the procedure, read and do",
    sourceRef: src("DSC-31-10 Information Provided when Needed", 427),
    cards: [
      {
        heading: "Information provided when needed",
        paragraph:
          "One of the main advantages of the ECAM is that it displays applicable information to the flight crew, on an \"as needed\" basis. The following outlines the ECAM's operating modes:",
        bullets: [
          "Normal Mode: automatically displays systems and memos, in accordance with the flight phase.",
          "Failure Mode: automatically displays the appropriate emergency/abnormal procedures, in addition to their associated system synoptic.",
          "Advisory Mode: automatically displays the appropriate system synoptic, associated with a drifting parameter.",
          "Manual Mode: enables the flight crew to manually select any system synoptic via the ECAM Control Panel (ECP).",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SOP-11.12: ECAM, QRH and OEB actions completed",
    eyebrow: EYEBROW,
    title: "11.12 Acciones completadas: evaluar y decidir",
    subtitle: "Management of Abnormal Operations · Actions Completed",
    leftPct: 40,
    leftTitle: "IN-FLIGHT PERFORMANCE ASSESSMENT (EFB-LDG-50)",
    rightTitle: "ECAM / QRH / OEB ACTIONS COMPLETED",
    image: img(428),
    imageAlt: "Assess the situation, make the decision and inform",
    sourceRef: src("EFB-LDG-50 In-Flight Performance Assessment", 428),
    cards: [
      {
        heading: "General",
        bullets: [
          "During flight, the flight crew performs a landing performance computation if the landing conditions changed compared with the landing performance computation at dispatch, or with a previous computation (e.g. runway, weather conditions, in-flight failure affecting performance, diversion).",
          "The landing distance used for this computation is the FLD. The flight crew uses the RCAM to determine the landing performance level.",
          "If the aircraft has been dispatched with deferred MEL or CDL items, the In-Flight Landing Distance and FLD must be calculated with the applicable MEL or CDL items selected.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "In an emergency situation, the flight crew may decide to disregard the FLD. In this case the flight crew must check that the In-Flight Landing Distance is shorter than the LDA at the destination or diversion airport.",
    },
  },
  {
    comment: "SLIDE SOP-11.13: Descent preparation after a failure",
    eyebrow: EYEBROW,
    title: "11.13 Preparación del descenso tras una avería",
    subtitle: "Management of Abnormal Operations · Descent Preparation",
    leftPct: 45,
    leftTitle: "LANDING PERFORMANCE FOLLOWING IN-FLIGHT FAILURE (EFB-LDG)",
    rightTitle: "DESCENT PREPARATION",
    image: img(429),
    imageAlt: "Descent preparation: weather, charts, ECAM status, landing conditions and FMS preparation",
    sourceRef: src("EFB-LDG-50 Landing Performance following In-Flight Failure / EFB-LDG-20 Landing Speeds", 429),
    cards: [
      {
        heading: "Landing performance calculation",
        paragraph:
          "The flight crew enters the expected landing conditions and the ECAM alert/QRH procedure items that affect performance in the landing performance application.",
      },
      {
        heading: "Flaps lever position and VAPP",
        bullets: [
          "The flight crew selects the FLAPS lever position requested by the ECAM/QRH procedure. If there are no instructions in the ECAM/QRH procedure, the FLAPS lever position for landing is at flight crew's discretion.",
          "VAPP = VREF + ΔVREF + APPR COR + ΔV Pilot. In the case of ΔVREF + APPR COR above 20 kt, an additional ΔV Pilot is not recommended.",
          "The flight crew enters into the FMS-PERF-APPR page the VAPP value computed by the landing performance application.",
        ],
      },
      {
        heading: "Reference speed (VREF)",
        paragraph:
          "VREF is equal to the VLS of CONF FULL. VREF is used to determine the Final Approach Speed (VAPP) when a system failure affects the landing performance.",
      },
    ],
  },
  {
    comment: "SLIDE SOP-11.14: Summary situation assessment",
    eyebrow: EYEBROW,
    title: "11.14 Summary: evaluación de la situación",
    subtitle: "Use of Summary · Situation Assessment",
    leftPct: 40,
    leftTitle: "QRH SUMMARIES (DSC-31-15)",
    rightTitle: "SITUATION ASSESSMENT",
    image: img(438),
    imageAlt: "After ECAM actions, the PM refers to the CRUISE section, fuel consumption and landing performance",
    sourceRef: "Source: FCOM A320 DSC-31-15 Primary and Secondary Failure & Airbus Tutorial PDP Jan 2024 — Use of Summary (p.436–438)",
    cards: [
      {
        heading: "Use of summary",
        bullets: [
          "The QRH summaries have been created to help the flight crew to perform actions in the case of ELEC EMER CONFIG or DUAL HYDRAULIC FAILURE.",
          "They are summaries of different QRH procedures.",
          "Apply first the ECAM actions, then use the summary.",
        ],
      },
      {
        heading: "ELEC EMER CONFIG",
        paragraph:
          "The DU displays the overflow symbol, if primary or secondary failures overflow. In case of ELEC EMER CONFIG, the secondary failures are inhibited.",
      },
    ],
  },
  {
    comment: "SLIDE SOP-11.15: Summary approach",
    eyebrow: EYEBROW,
    title: "11.15 Summary: preparación y aproximación",
    subtitle: "Use of Summary · Approach",
    leftPct: 40,
    leftTitle: "APPROACH PREPARATION · ARRIVAL BRIEFING",
    rightTitle: "APPROACH",
    image: img(442),
    imageAlt: "To perform the approach refer to the APPROACH section; review LANDING and GO AROUND in final configuration",
    sourceRef: "Source: Airbus Tutorial PDP Jan 2024 — Use of Summary (p.439–442)",
    cards: [
      {
        heading: "Approach preparation",
        bullets: [
          "As always, the approach preparation begins by the review of the STATUS page.",
          "Then, the sections APPROACH, LANDING and GO AROUND should be used to support the approach preparation.",
          "When appropriate, these sections include the LANDING WITH SLATS or FLAPS JAMMED procedure and the L/G GRAVITY EXTENSION procedure.",
        ],
      },
      {
        heading: "Arrival briefing",
        paragraph:
          "The sections APPROACH, LANDING and GO AROUND should be used to perform the threats mitigation part of the arrival briefing, cross-checking, as always, the STATUS page.",
      },
    ],
  },
];

export const MCC_SOP_11: MccLesson = {
  id: "a3200000-0000-0000-0000-000000000111",
  course_id: MCC_COURSE_ID,
  title: "SOP-11. Gestión de situaciones anormales: ECAM, OEB, QRH y uso del Summary",
  slug: "sop-11-gestion-anormales-ecam-qrh",
  sequence_order: 14,
  lesson_order: 14,
  min_seconds: mccMinSeconds(SOP_11_SLIDES.length, mccVideoSeconds(SOP_11_SLIDES)),
  module_title: MCC_MODULES.ABNORMAL_SOP,
  content_html: joinSlides(SOP_11_SLIDES),
};

export const SOP_11_SLIDE_COUNT = SOP_11_SLIDES.length;
