/**
 * SOP-14 — Avisos de trayectoria: EGPWS, pérdida, TCAS y windshear (0,75 h).
 *
 * Alcance: Curso APS MCC — Airbus A320ceo CFM56-5B (simulador Entrol A32).
 * Fuentes: Airbus Tutorial PDP Jan 2024 — Abnormal and Emergency Procedures: EGPWS (págs. 461–482),
 * Stall Recovery (541–544), TCAS (545–556) y Windshear (672–685); FCOM A320 DSC-34-SURV-30 (Predictive
 * Windshear System), DSC-34-SURV-40 (GPWS), DSC-34-SURV-60 (TCAS), DSC-22_40-40 (Windshear Detection
 * Function) y DSC-31-40 (VSW).
 *
 * Criterio de redacción: la columna izquierda NO repite el texto de la lámina de la derecha; aporta la
 * información complementaria del FCOM en inglés y literal, solo de bloques aplicables a la variante
 * A320ceo CFM56-5B (grupo EC-ILQ).
 * La variante de referencia no tiene modo AP/FD TCAS ni presentación de tráfico ADS-B IN: se usa el
 * procedimiento manual de RA (p552, p555), no se usan las págs. 548–550 y 556, y en p546 se ha tapado
 * la fila "TCAS + ADS-B" y la columna "Surrounding traffic".
 * Láminas no usadas: portadas 461, 541, 545 y 672; 480 y 481 (texto de otros tipos en el cuerpo);
 * resto, texto redundante.
 * Arquitectura: docs/mcc/08_ARQUITECTURA_PDP.md.
 */
import { MCC_MODULES, joinSlides, mccMinSeconds, mccVideoSeconds, type MccLesson, type MccSlideSpec } from "./slide-builder.ts";

const MCC_COURSE_ID = "a3200000-0000-0000-0000-000000000320";
const PDP_IMG = "https://www.blueteam.es/elearning/media/mcc/pdp";
const EYEBROW = "APS MCC · A320 · SOP-14";

/** Versión común de caché para las láminas de esta lección (pie recortado). */
const IMG_VERSION = 1795629000;
const chapter = (page: number) =>
  page <= 482 ? "egpws" : page <= 544 ? "stall_recovery" : page <= 556 ? "tcas" : "windshear";
const CHAPTER_NAME: Record<string, string> = {
  egpws: "EGPWS",
  stall_recovery: "Stall Recovery",
  tcas: "TCAS",
  windshear: "Windshear",
};
const img = (page: number) => `${PDP_IMG}/p${String(page).padStart(3, "0")}_${chapter(page)}.webp?v=${IMG_VERSION}`;
const src = (sections: string, page: number) =>
  `Source: FCOM A320 ${sections} & Airbus Tutorial PDP Jan 2024 — ${CHAPTER_NAME[chapter(page)]} (p.${page})`;

const SOP_14_SLIDES: MccSlideSpec[] = [
  // ── A. EGPWS ─────────────────────────────────────────────────────────────
  {
    comment: "SLIDE SOP-14.1: GPWS overview and mode 1",
    eyebrow: EYEBROW,
    title: "14.1 GPWS: modos básicos",
    subtitle: "EGPWS · GPWS Basic Functions",
    leftPct: 45,
    leftTitle: "GPWS OVERVIEW (DSC-34-SURV-40-10)",
    rightTitle: "MODE 1: EXCESSIVE RATE OF DESCENT",
    image: img(463),
    imageAlt: "Mode 1 excessive rate of descent: SINK RATE then PULL UP",
    sourceRef: src("DSC-34-SURV-40-10 GPWS - Description", 463),
    cards: [
      {
        heading: "Overview",
        bullets: [
          "The purpose of the Ground Proximity Warning System (GPWS), also named Terrain Awareness Warning System (TAWS), is to warn the flight crew of potentially hazardous situations, such as a collision with terrain.",
          "Five basic modes active up to radio height of 2 500 ft: excessive rate of descent (Mode 1), excessive terrain closure rate (Mode 2), altitude loss after takeoff or go-around (Mode 3), terrain clearance not sufficient, if not in landing configuration (Mode 4), excessive descent below the glide slope (Mode 5).",
          "A predictive GPWS function, based on a GPWS database, to display terrain information, provided by Honeywell through Enhanced GPWS (EGPWS).",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "The terrain data are displayed on the ND and the brightness is controlled via the ND brightness control knob. If the weather radar brightness was set to low (due to bad weather) and a terrain alert occurs, then the brightness of the terrain display will also be low.",
    },
  },
  {
    comment: "SLIDE SOP-14.2: GPWS and EGPWS comparison",
    eyebrow: EYEBROW,
    title: "14.2 GPWS frente a EGPWS",
    subtitle: "EGPWS · Enhanced Functions",
    leftPct: 40,
    leftTitle: "PRINCIPLE · TAD NOTES (DSC-34-SURV-40)",
    rightTitle: "GPWS AND EGPWS COMPARISON",
    image: img(469),
    imageAlt: "GPWS radio altitude alerts versus EGPWS geometric altitude alerts with terrain and airport databases",
    sourceRef: src("DSC-34-SURV-40-10 Principle / DSC-34-SURV-40-35 Terrain Awareness and Display", 469),
    cards: [
      {
        heading: "Principle",
        paragraph:
          "The GPWS computes the geometric altitude of the aircraft by using: pressure altitude, radio altitude, temperature, barometric references and GPS altitude for predictive GPWS.",
      },
      {
        heading: "Notes",
        bullets: [
          "The Geometric Altitude function can protect against some BARO setting errors, provided the components used to compute the Geometric Altitude are valid and sufficiently accurate.",
          "The TAD and TCF functions operate with the use of the pure lateral GPS position. The FMS1 position provides the backup.",
          "If the FMGC detects low-navigation accuracy, then the enhanced modes of the EGPWS are automatically deactivated. The 5 GPWS modes remain active.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SOP-14.3: Terrain awareness and display alerts",
    eyebrow: EYEBROW,
    title: "14.3 Avisos de terreno y obstáculos",
    subtitle: "EGPWS · Warning Display",
    leftPct: 45,
    leftTitle: "TERRAIN AWARENESS AND DISPLAY (DSC-34-SURV-40-35)",
    rightTitle: "WARNING DISPLAY",
    image: img(476),
    imageAlt: "TERRAIN AHEAD PULL UP and OBSTACLE AHEAD PULL UP on the ND, about 30 s before impact",
    sourceRef: src("DSC-34-SURV-40-35 Terrain Awareness and Display", 476),
    cards: [
      {
        heading: "TAD",
        paragraph:
          "The TAD function computes a caution and a warning envelope in front of the aircraft, depending on the aircraft altitude, the nearest runway altitude, the distance to the nearest runway threshold, the ground speed and the turn rate.",
      },
    ],
    table: {
      headers: ["Alert", "Aural", "ND"],
      rows: [
        ["Warning", "TERRAIN AHEAD, PULL UP · OBSTACLE AHEAD, PULL UP", "Automatic terrain display · solid red areas · TERR/OBST AHEAD"],
        ["Caution", "TERRAIN AHEAD · OBSTACLE AHEAD", "Automatic terrain display · solid yellow areas · TERR/OBST AHEAD"],
      ],
    },
    alert: {
      level: "NOTE",
      text: "If an alert is generated and TERR ON ND pb is not selected by the flight crew, the terrain and the obstacles automatically appear, and the ON light of the TERR ON ND pb comes on.",
    },
  },
  {
    comment: "SLIDE SOP-14.4: Terrain clearance floor and runway field clearance floor",
    eyebrow: EYEBROW,
    title: "14.4 TCF y RFCF",
    subtitle: "EGPWS · Terrain Clearance Floor",
    leftPct: 45,
    leftTitle: "TCF · RFCF (DSC-34-SURV-40-35)",
    rightTitle: "TERRAIN CLEARANCE FLOOR (TCF)",
    image: img(477),
    imageAlt: "TOO LOW TERRAIN when descending below the terrain clearance floor on a 3 degree path",
    sourceRef: src("DSC-34-SURV-40-35 Terrain Clearance Floor / Runway Field Clearance Floor", 477),
    cards: [
      {
        heading: "Terrain clearance floor",
        bullets: [
          "The TCF function computes a terrain clearance envelope around the airport runway. This function triggers an alert if the terrain clearance is not sufficient (even when the aircraft is in landing configuration).",
          "The TCF function also protects against an attempt to land where there is no airfield.",
          "The TAWS database includes the applicable TCF envelope for each airport runway that has terrain data, and that is longer than 3 500 ft.",
        ],
      },
      {
        heading: "Runway field clearance floor",
        paragraph:
          "The RFCF provides an additional protection envelope for runways that are at an elevation that is significantly more than the surrounding terrain. The envelope is based on both the geometric altitude and the runway elevation. If the aircraft descends below this protection envelope, the \"TOO LOW TERRAIN\" aural and visual alerts are triggered.",
      },
    ],
  },
  {
    comment: "SLIDE SOP-14.5: Pull up warning alerts and terrain display",
    eyebrow: EYEBROW,
    title: "14.5 Maniobra PULL UP",
    subtitle: "EGPWS · Warning Alerts",
    leftPct: 40,
    leftTitle: "TERRAIN ON ND (DSC-34-SURV-40-35)",
    rightTitle: "WARNING ALERTS",
    image: img(482),
    imageAlt: "PULL UP TOGA: AP off, pitch pull up, thrust TOGA, speedbrakes retracted, wings level",
    sourceRef: src("DSC-34-SURV-40-35 Terrain Awareness and Display", 482),
    cards: [
      {
        heading: "Terrain display",
        bullets: [
          "When the TERR ON ND pb is set to ON, and the ARC or ROSE mode is selected, the ND displays the terrain and the obstacles memorized in the database.",
          "The terrain appears in various densities of green, yellow, red, or magenta, depending on the threat.",
          "When TERR ON ND pb is selected by the flight crew, the weather radar image does not appear.",
        ],
      },
      {
        heading: "Local warning",
        paragraph: "On each pilot's instrument panel, the pushbutton light comes on.",
      },
    ],
  },
  // ── B. Pérdida ───────────────────────────────────────────────────────────
  {
    comment: "SLIDE SOP-14.6: Stall recovery and stall warning speed",
    eyebrow: EYEBROW,
    title: "14.6 Recuperación de la pérdida",
    subtitle: "Stall Recovery · Memory Item",
    leftPct: 40,
    leftTitle: "STALL WARNING SPEED (DSC-31-40)",
    rightTitle: "STALL RECOVERY",
    image: img(543),
    imageAlt: "Stall, I have control: reduce AOA, wings level, then increase energy and flaps 1 if clean below 20 000 ft",
    sourceRef: src("DSC-31-40 Indications on PFD - Stall Warning Speed (VSW)", 543),
    cards: [
      {
        heading: "Stall warning speed (VSW)",
        bullets: [
          "The top of a red and black strip along the speed scale defines this speed.",
          "It is the speed corresponding to the stall warning.",
          "VSW information is inhibited from touchdown until 5 s after lift-off.",
          "It is displayed when operating in pitch alternate or pitch direct law.",
        ],
      },
    ],
  },
  // ── C. TCAS ──────────────────────────────────────────────────────────────
  {
    comment: "SLIDE SOP-14.7: TCAS intruder classification",
    eyebrow: EYEBROW,
    title: "14.7 TCAS: clasificación de intrusos",
    subtitle: "TCAS · Intruder Classification",
    leftPct: 45,
    leftTitle: "TCAS - DESCRIPTION (DSC-34-SURV-60-10)",
    rightTitle: "INTRUDER CLASSIFICATION",
    image: img(546),
    imageAlt: "Other, proximate, TA and RA intruder symbols on the ND",
    sourceRef: src("DSC-34-SURV-60-10 TCAS - Description", 546),
    cards: [
      {
        heading: "Principle",
        paragraph:
          "The TCAS detection capability is limited to intruders flying within a maximum range of 30 NM on either sides and approximately 30 NM to 80 NM longitudinally, and within a maximum altitude range of 9 900 ft above and below the aircraft. The TAU is the ratio between the distance that separates both aircraft, and the sum of their speed.",
      },
    ],
    table: {
      headers: ["Level", "Intruder position"],
      rows: [
        ["Other intruders", "No collision threat; within the surveillance envelope"],
        ["Proximate", "No collision threat; closer than 6 NM laterally and ±1 200 ft vertically"],
        ["Traffic Advisory (TA)", "Potential collision threat; TAU is about 40 s"],
        ["Resolution Advisory (RA)", "Real collision threat; TAU is about 25 s; PFD vertical orders: maintain V/S (preventive) or modify V/S (corrective)"],
      ],
    },
  },
  {
    comment: "SLIDE SOP-14.8: TCAS panel",
    eyebrow: EYEBROW,
    title: "14.8 Panel ATC/TCAS",
    subtitle: "TCAS · TCAS Panel",
    leftPct: 45,
    leftTitle: "ATC/TCAS PANEL (DSC-34-SURV-60-20)",
    rightTitle: "TCAS PANEL",
    image: img(547),
    imageAlt: "Recommended traffic selector positions: ABV in climb, ALL in cruise, BLW in descent, THRT in terminal area",
    sourceRef: src("DSC-34-SURV-60-20 TCAS - Controls and Indicators", 547),
    cards: [
      {
        heading: "Mode sel",
        bullets: [
          "TA/RA: normal position.",
          "TA: the TCAS does not generate any vertical orders. All RAs are converted into TAs. The \"TA ONLY\" white memo is displayed on the NDs.",
          "STBY: the TCAS is on standby.",
        ],
      },
      {
        heading: "TRAFFIC sel",
        bullets: [
          "THRT: proximate and other intruders are displayed only if a TA or RA is present, within 2 700 ft above and below.",
          "ALL: displayed even if no TA or RA is present (full time function), –2 700 ft to +2 700 ft.",
          "ABV: other intruders displayed if within 9 900 ft above and 2 700 ft below. BLW: within 9 900 ft below and 2 700 ft above.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SOP-14.9: Resolution advisory flown manually and advisory inhibition",
    eyebrow: EYEBROW,
    title: "14.9 Resolution advisory (RA)",
    subtitle: "TCAS · Resolution Advisory",
    leftPct: 40,
    leftTitle: "ADVISORY INHIBITION (DSC-34-SURV-60-10)",
    rightTitle: "RESOLUTION ADVISORY (RA)",
    image: img(552),
    imageAlt: "CLIMB CLIMB: AP off, FDs off, fly the green area of the V/S scale; go around if during final approach",
    sourceRef: src("DSC-34-SURV-60-10 Advisory Inhibition / TCAS Intruder with no Reported Altitude", 552),
    cards: [
      {
        heading: "Some advisories are inhibited depending on the aircraft altitude:",
        bullets: [
          "All TA aural messages below 600 ft AGL in climb or below 400 ft AGL in descent.",
          "All RA aural messages below 1 100 ft AGL in climb or 900 ft AGL in descent. In this case, the RA are converted into TA.",
          "\"Descend\" RA below 1 200 ft AGL in climb or 1 000 ft AGL in descent.",
          "\"Increase Descent\" RA below 1 650 ft AGL in climb or 1 450 ft AGL in descent.",
        ],
      },
      {
        heading: "Intruders that do not report their altitude",
        paragraph:
          "The relative altitude does not appear on ND. The TCAS never triggers any RA.",
      },
    ],
  },
  {
    comment: "SLIDE SOP-14.10: Why FDs off and TA only mode",
    eyebrow: EYEBROW,
    title: "14.10 ¿Por qué FDs OFF?",
    subtitle: "TCAS · Why FDs Off",
    leftPct: 40,
    leftTitle: "TA ONLY MODE (DSC-34-SURV-60-10)",
    rightTitle: "WHY « FDs.…OFF »?",
    image: img(555),
    imageAlt: "Following the RA with FDs on in OP CLB leads the speed to the limit and high speed protection activates",
    sourceRef: src("DSC-34-SURV-60-10 TCAS Modes - Traffic Advisory Only Mode", 555),
    cards: [
      {
        heading: "TA ONLY mode is selected automatically, if TA/RA mode is previously selected and:",
        bullets: [
          "The windshear alert is triggered",
          "The stall warning is triggered",
          "GPWS alerts are triggered",
          "Aircraft is below 1 000 ft AGL.",
        ],
      },
      {
        heading: "When the TCAS is operating in TA ONLY mode:",
        bullets: [
          "All RAs are inhibited and converted into TAs",
          "No vertical speed advisories are indicated on the PFDs",
          "\"TA ONLY\" is displayed on the NDs.",
        ],
      },
    ],
  },
  // ── D. Windshear ─────────────────────────────────────────────────────────
  {
    comment: "SLIDE SOP-14.11: Windshear symptoms and reactive detection",
    eyebrow: EYEBROW,
    title: "14.11 Windshear: síntomas y detección reactiva",
    subtitle: "Windshear · Symptoms",
    leftPct: 40,
    leftTitle: "WINDSHEAR DETECTION FUNCTION (DSC-22_40-40)",
    rightTitle: "SYMPTOMS",
    image: img(673),
    imageAlt: "PFD and ND windshear cues: speed trend, VLS margin, FPV, V/S, ground speed and wind",
    sourceRef: src("DSC-22_40-40 Windshear Detection Function", 673),
    cards: [
      {
        heading: "Availability",
        paragraph: "The windshear detection function is provided by the Flight Augmentation Computer (FAC) in takeoff and approach phase in the following conditions:",
        bullets: [
          "At takeoff, 3 s after liftoff, up to 1 300 ft RA",
          "At landing, from 1 300 ft RA to 50 ft RA",
          "With at least CONF 1 selected.",
        ],
      },
      {
        heading: "The warning consists of:",
        bullets: [
          "A visual \"WINDSHEAR\" message displayed on one or both PFDs for a minimum of 15 s.",
          "An aural synthetic voice announcing \"WINDSHEAR\" three times.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SOP-14.12: Predictive windshear alert zones",
    eyebrow: EYEBROW,
    title: "14.12 Windshear predictiva: zonas de aviso",
    subtitle: "Windshear · Predictive Windshear at Takeoff",
    leftPct: 45,
    leftTitle: "PREDICTIVE WINDSHEAR SYSTEM (DSC-34-SURV-30-20)",
    rightTitle: "WINDSHEAR ALERT ZONES",
    image: img(676),
    imageAlt: "Advisory, caution and warning alert areas, available from ground up to 1 200 ft",
    sourceRef: src("DSC-34-SURV-30-20 Predictive Windshear System", 676),
    cards: [
      {
        heading: "The weather radars have a Predictive Windshear System (PWS) that operates when:",
        bullets: [
          "The PWS switch is in the AUTO position (even if the weather radar is OFF), and",
          "The aircraft is below 2 300 ft AGL, and",
          "The ATC is switched to the ON, or AUTO, or XPDR, or XPNDR, position, and",
          "Either engine is running.",
        ],
      },
      {
        heading: "Detection",
        paragraph:
          "The system scans the airspace, within a range of 5 NM ahead of the aircraft, for windshears. During the takeoff roll, up to 100 kt, both warnings and cautions are available within a range of 3 NM.",
      },
    ],
  },
  {
    comment: "SLIDE SOP-14.13: Predictive windshear warning in approach",
    eyebrow: EYEBROW,
    title: "14.13 Windshear predictiva: avisos",
    subtitle: "Windshear · Predictive Windshear in Approach",
    leftPct: 45,
    leftTitle: "PWS ALERTS (DSC-34-SURV-30-20)",
    rightTitle: "WARNING ALERTS",
    image: img(680),
    imageAlt: "GO AROUND, WINDSHEAR AHEAD with the windshear icon on the ND",
    sourceRef: src("DSC-34-SURV-30-20 Predictive Windshear System", 680),
    cards: [],
    table: {
      headers: ["Alert level", "Aural warning", "PFD", "ND"],
      rows: [
        ["Warning (approach)", "GO AROUND WINDSHEAR AHEAD", "W/S AHEAD (red)", "Windshear icon"],
        ["Warning (takeoff)", "WINDSHEAR AHEAD (twice)", "W/S AHEAD (red)", "Windshear icon"],
        ["Caution", "MONITOR RADAR DISPLAY", "W/S AHEAD (amber)", "Windshear icon"],
        ["Advisory", "Nil", "Nil", "Windshear icon"],
      ],
    },
  },
  {
    comment: "SLIDE SOP-14.14: Predictive windshear in approach procedure and inhibition",
    eyebrow: EYEBROW,
    title: "14.14 Windshear predictiva en aproximación",
    subtitle: "Windshear · Predictive Windshear in Approach",
    leftPct: 40,
    leftTitle: "PWS ALERTS ABOVE 50 FT · INHIBITION",
    rightTitle: "PREDICTIVE WINDSHEAR IN APPROACH",
    image: img(684),
    imageAlt: "Monitor radar display: delay approach, consider diversion, CONF 3 and VAPP up to VLS + 15 kt; go around if warning",
    sourceRef: src("DSC-34-SURV-30-20 Windshear Alerts above 50 Feet / Windshear Alerts Inhibition", 684),
    cards: [
      {
        heading: "Windshear alerts above 50 feet",
        paragraph:
          "During final approach, the visual and aural warning alerts are downgraded to caution alerts between 370 ft AGL and 50 ft AGL, and range between 1.5 NM and 0.5 NM.",
      },
      {
        heading: "Windshear alerts inhibition",
        bullets: [
          "At takeoff, alerts are inhibited above 100 kt and up to 50 ft. During landing, alerts are inhibited below 50 ft.",
          "The aural alerts of the PWS have priority over TCAS, GPWS, and other FWC aural warnings.",
          "They are inhibited by reactive windshear detection and aural messages of stall warnings.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SOP-14.15: Reactive windshear alert and detection principles",
    eyebrow: EYEBROW,
    title: "14.15 Windshear reactiva",
    subtitle: "Windshear · Reactive Windshear",
    leftPct: 45,
    leftTitle: "WINDSHEAR DETECTION PRINCIPLES (DSC-22_40-40)",
    rightTitle: "REACTIVE WINDSHEAR · ALERTS",
    image: img(683),
    imageAlt: "WINDSHEAR WINDSHEAR WINDSHEAR with the red WINDSHEAR message on the PFD",
    sourceRef: src("DSC-22_40-40 Windshear Detection Principles", 683),
    cards: [
      {
        heading: "Windshear detection principles",
        bullets: [
          "The FACs generate the windshear warning whenever the predicted energy level for the aircraft falls below a predetermined threshold.",
          "In computing this energy level prediction, the FACs use data from different sources. From ADIRS comes data such as vertical speed, air and ground speeds and slope; from other sources come such derived parameters as total slope, longitudinal wind gradient, and vertical wind.",
          "The FACs express this energy level as an angle of attack and compare it with an angle-of-attack threshold above which windshear conditions are most likely and pilot action is required.",
        ],
      },
    ],
  },
];

export const MCC_SOP_14: MccLesson = {
  id: "a3200000-0000-0000-0000-000000000114",
  course_id: MCC_COURSE_ID,
  title: "SOP-14. Avisos de trayectoria: EGPWS, pérdida, TCAS y windshear",
  slug: "sop-14-avisos-trayectoria",
  sequence_order: 14,
  lesson_order: 14,
  min_seconds: mccMinSeconds(SOP_14_SLIDES.length, mccVideoSeconds(SOP_14_SLIDES)),
  module_title: MCC_MODULES.ABNORMAL_SOP,
  content_html: joinSlides(SOP_14_SLIDES),
};

export const SOP_14_SLIDE_COUNT = SOP_14_SLIDES.length;
