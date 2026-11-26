/**
 * SOP-10 — Procedimientos normales II: ILS raw data y operaciones de baja visibilidad (0,5 h).
 *
 * Alcance: Curso APS MCC — Airbus A320ceo CFM56-5B (simulador Entrol A32).
 * Fuentes: Airbus Tutorial PDP Jan 2024 — Normal Procedures: ILS Raw Data (págs. 341–369) y Low
 * Visibility Operations (370–399); FCOM A320 PRO-NOR-SRP-01-70 (ILS approach, landing categories,
 * ILS warnings), PRO-NOR-SOP-18-C (CAT II/III abnormal strategy), LIM-AFS-20 (automatic approach,
 * landing and rollout), DSC-22_30-70 (approach and landing capability), DSC-22_30-80-10 (AUTOLAND
 * light), DSC-22_30-40-90 (SRS GA, GA TRK) y DSC-20-50 (minimum visual ground segment).
 *
 * Criterio de redacción: la columna izquierda NO repite el texto de la lámina de la derecha; aporta la
 * información complementaria del FCOM (textos L1/L2, WARNING/CAUTION/NOTE) en inglés y literal, solo de
 * bloques aplicables a la variante A320ceo CFM56-5B (grupo EC-ILQ).
 * El HUD (págs. 319–340) no se incluye: es equipo opcional.
 * Láminas no usadas: 341 y 370 (portadas); 371, 372, 374, 380 y 392 (otros tipos); 398 y 399 (rollout,
 * ya en SOP-08); 376–378 (alineación, ya en SOP-05); resto, secuencias animadas o texto redundante.
 * p353, p368 y p397 usan versiones *_a320.webp (limpias de botones UI recortados arriba y de rotulación A340).
 * Arquitectura: docs/mcc/08_ARQUITECTURA_PDP.md.
 */
import { MCC_MODULES, joinSlides, mccMinSeconds, mccVideoSeconds, type MccLesson, type MccSlideSpec } from "./slide-builder.ts";

const MCC_COURSE_ID = "a3200000-0000-0000-0000-000000000320";
const PDP_IMG = "https://www.blueteam.es/elearning/media/mcc/pdp";
const EYEBROW = "APS MCC · A320 · SOP-10";

/** Versión común de caché para las láminas de esta lección. */
const IMG_VERSION = 1795625000;
const chapter = (page: number) => (page <= 369 ? "ils_raw_data" : "low_visibility_operations");
const CHAPTER_NAME: Record<string, string> = {
  ils_raw_data: "ILS Raw Data",
  low_visibility_operations: "Low Visibility Operations",
};
const img = (page: number) => `${PDP_IMG}/p${String(page).padStart(3, "0")}_${chapter(page)}.webp?v=${IMG_VERSION}`;
const imgA320 = (page: number) => `${PDP_IMG}/p${String(page).padStart(3, "0")}_${chapter(page)}_a320.webp?v=${IMG_VERSION}`;
const src = (sections: string, page: number) =>
  `Source: FCOM A320 ${sections} & Airbus Tutorial PDP Jan 2024 — ${CHAPTER_NAME[chapter(page)]} (p.${page})`;

const SOP_10_SLIDES: MccSlideSpec[] = [
  // ── A. ILS raw data ──────────────────────────────────────────────────────
  {
    comment: "SLIDE SOP-10.1: ILS raw data technique",
    eyebrow: EYEBROW,
    title: "10.1 Volar un ILS en raw data",
    subtitle: "ILS Raw Data · Lateral and Vertical",
    leftPct: 45,
    leftTitle: "ILS NOT IN THE F-PLN (PRO-NOR-SRP-01-70)",
    rightTitle: "TO FLY AN ILS RAW DATA",
    image: img(342),
    imageAlt: "RWY track and Bird on the blue track line laterally, Bird on the ILS FPA vertically",
    sourceRef: src("PRO-NOR-SRP-01-70 Approach Mode Activation / Switching from Non ILS to ILS Approach", 342),
    cards: [
      {
        heading: "Fly the ILS without revising the arrival",
        paragraph:
          "If the flight crew decides to fly the ILS approach without revising the arrival of the primary flight plan (a non ILS approach is in the F-PLN), LOC and G/S modes will not be available when the flight crew presses the APPR pushbutton. Consequently, the flight crew should:",
        bullets: [
          "Manually TUNE in the ILS on the RAD NAV page: CHECK that the \"CHECK APPR SELECTION\" message comes up.",
          "Press the ILS pushbutton and select ROSE ILS on the EIS CONTROL panel.",
          "Use HDG, V/S or TRK, FPA modes to fly the ILS.",
        ],
      },
      {
        heading: "Note",
        paragraph:
          "If a NON PRECISION approach is selected in the active flight plan and if the flight crew manually tunes an ILS on the RAD NAV page, the MCDU displays \"CHECK APPR SELECTION\" and the PFD displays \"CHECK APP GUIDANCE\" or \"CHECK APP SEL\". The available approach guidance modes are APP NAV-FINAL when the APPR pushbutton is pressed in on the FCU.",
      },
    ],
  },
  {
    comment: "SLIDE SOP-10.2: G/S interception in raw data and ILS warnings",
    eyebrow: EYEBROW,
    title: "10.2 Captura del G/S y avisos de desviación",
    subtitle: "ILS Raw Data · Reaching Final Descent Point",
    leftPct: 45,
    leftTitle: "ILS WARNINGS (PRO-NOR-SRP-01-70)",
    rightTitle: "REACHING FINAL DESCENT POINT",
    image: imgA320(353),
    imageAlt: "PFD half a dot below the glide slope before flying the Bird down to the glide path angle",
    sourceRef: src("PRO-NOR-SRP-01-70 ILS Warnings", 353),
    cards: [
      {
        heading: "Warning of excessive beam deviation",
        paragraph: "The LOC and G/S scales flash on the PFD and ND (ROSE ILS mode). It occurs whenever:",
        bullets: ["G/S deviation is more than 1 dot (above 100 ft RA)", "LOC deviation is more than 1/4 dot (above 15 ft RA)."],
      },
      {
        heading: "Failure of both localizer and glideslope receivers",
        bullets: [
          "The PFD and ND (ROSE ILS mode) display LOC and G/S flags (if the ILS pb has been pressed green). LOC and G/S scales disappear from the PFD.",
          "If LOC or G/S modes are engaged and at least one AP/FD is engaged: the AP disengages, the FD reverts to its HDG-V/S or TRK-FPA modes.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SOP-10.3: LOC deviation and transmitter failure",
    eyebrow: EYEBROW,
    title: "10.3 Desviación del LOC y fallo del transmisor",
    subtitle: "ILS Raw Data · LOC Deviation",
    leftPct: 45,
    leftTitle: "TRANSMITTER FAILURE (PRO-NOR-SRP-01-70)",
    rightTitle: "LOC DEVIATION",
    image: imgA320(368),
    imageAlt: "Check unwanted residual bank angle; close to the ground avoid too large lateral corrections",
    sourceRef: src("PRO-NOR-SRP-01-70 ILS Warnings", 368),
    cards: [
      {
        heading: "Failure of localizer or glideslope transmitter (when captured)",
        bullets: ["The corresponding index is lost", "The LOC and G/S scales flash", "The corresponding FD bar flashes."],
      },
      {
        heading: "Duration of the failure",
        bullets: [
          "Above 200 ft RA, if the transmitter failure lasts less than 7 s, the FMA retains the LOC and G/S modes (or the LAND mode) and the APs are able to regain these modes.",
          "If the failure lasts longer than 7 s, the AP disengages and the FD reverts to its basic modes.",
          "Below 200 ft RA, if the transmitter failure occurs, the AUTOLAND warning appears, indicating that the crew must perform a go-around (if insufficient visual references) with one or two APs engaged.",
        ],
      },
    ],
  },
  // ── B. Operaciones de baja visibilidad ───────────────────────────────────
  {
    comment: "SLIDE SOP-10.4: Low visibility takeoff RVR",
    eyebrow: EYEBROW,
    title: "10.4 Despegue con baja visibilidad: RVR",
    subtitle: "Low Visibility Operations · Takeoff RVR",
    leftPct: 40,
    leftTitle: "LOW VISIBILITY TAKEOFF · RVR (DSC-20-50)",
    rightTitle: "TAKEOFF: RVR",
    image: img(375),
    imageAlt: "Requirements for takeoffs with a minimum RVR of 125 m",
    sourceRef: "Source: FCOM A320 DSC-20-50 Minimum Visual Ground Segments & Airbus Tutorial PDP Jan 2024 — Low Visibility Operations (p.373, p.375)",
    cards: [
      {
        heading: "Low visibility takeoff (LVTO)",
        bullets: [
          "A Low Visibility takeoff (LVTO) is a takeoff where the runway visual range is less than 550 meters.",
          "Below 400 meters, training and authorization are required.",
        ],
      },
      {
        heading: "Minimum visual ground segments",
        paragraph:
          "For a CAT III landing (60 m minimum visual segment), the minimum Runway Visual Range (RVR) is 103 m at 15 ft.",
      },
    ],
  },
  {
    comment: "SLIDE SOP-10.5: CAT II and CAT III limitations",
    eyebrow: EYEBROW,
    title: "10.5 Preparación: limitaciones CAT II y CAT III",
    subtitle: "Low Visibility Operations · Approach Preparation",
    leftPct: 50,
    leftTitle: "AUTOMATIC APPROACH, LANDING AND ROLLOUT (LIM-AFS-20)",
    rightTitle: "CRUISE: APPROACH PREPARATION",
    image: img(383),
    imageAlt: "LVO capability: airport facilities, crew capability and aircraft capability; preparation and briefing",
    sourceRef: src("LIM-AFS-20 Automatic Approach, Landing and Rollout", 383),
    cards: [],
    table: {
      headers: ["Approach", "Minimum", "FMA / AP"],
      rows: [
        ["ILS CAT II", "DH 100 ft", "At least one AP in APPR; CAT 2, CAT 3 SINGLE or CAT 3 DUAL. Manual landing: AP off no later than 80 ft AGL"],
        ["ILS CAT III fail passive (single)", "DH 50 ft", "At least one AP in APPR; CAT 3 SINGLE or CAT 3 DUAL"],
        ["ILS CAT III fail operational (dual)", "DH 20 ft · without DH: RVR 75 m · AH 100 ft", "Both APs in APPR; CAT 3 DUAL"],
      ],
    },
    alert: {
      level: "NOTE",
      text: "A/THR must be used in selected or managed speed for CAT III. Maximum wind (CAT II/III): headwind 30 kt, tailwind 10 kt, crosswind 20 kt. Wind limitation is based on the surface wind reported by ATC; if beyond limitations, only CAT I automatic approach without autoland can be performed. CAT II and CAT III fail passive autoland are only approved in configuration FULL, and if engine-out procedures are completed before reaching 1 000 ft in approach.",
    },
  },
  {
    comment: "SLIDE SOP-10.6: CAT II/III failures in final approach",
    eyebrow: EYEBROW,
    title: "10.6 Fallos durante la aproximación final",
    subtitle: "Low Visibility Operations · Abnormals during Final Approach",
    leftPct: 45,
    leftTitle: "CAT II, CAT III APPROACHES (PRO-NOR-SOP-18-C)",
    rightTitle: "APPROACH · ABNORMALS",
    image: img(385),
    imageAlt: "Failure above and below 1000 ft AAL: conditions to continue, otherwise go-around",
    sourceRef: src("PRO-NOR-SOP-18-C Approach using LOC G/S Guidance - Management of Degraded Guidance", 385),
    cards: [
      {
        heading: "Apply the following strategy in the case of:",
        bullets: ["Amber caution (single chime), or", "Landing capability degradation below the approach category defined during the briefing."],
      },
      {
        heading: "Above 1 000 ft AGL",
        paragraph:
          "ECAM/QRH PROCEDURE: COMPLETE · APPROACH AND LANDING CAPABILITY: CHECK · REQUIRED EQUIPMENT: CHECK · If required: RVR CHECK, DH ADJUST, ARRIVAL BRIEFING UPDATE. If the flight crew does not complete all the above actions at 1 000 ft: GO-AROUND.",
      },
      {
        heading: "Below 100 ft (Alert Height) for CAT3 DUAL",
        paragraph:
          "The automatic approach may be continued unless the AUTOLAND warning is triggered. In the case of AUTOLAND warning: if visual references are not sufficient, GO-AROUND; if visual references are sufficient, the approach may be continued manually.",
      },
    ],
  },
  {
    comment: "SLIDE SOP-10.7: Approach and landing capability",
    eyebrow: EYEBROW,
    title: "10.7 Capacidad de aproximación y aterrizaje",
    subtitle: "Low Visibility Operations · LAND Mode Check",
    leftPct: 45,
    leftTitle: "LANDING CATEGORIES (DSC-22_30-70 · SRP-01-70)",
    rightTitle: "LAND MODE ……… CHECK",
    image: img(386),
    imageAlt: "FMA with CAT3 DUAL and AP1+2 at 350 ft: if LAND mode not available, go around",
    sourceRef: src("DSC-22_30-70 Approach and Landing Capability / PRO-NOR-SRP-01-70 Landing Categories", 386),
    cards: [
      {
        heading: "Landing categories",
        bullets: [
          "Each FMGC computes its own landing category: CAT1, CAT2, CAT3 single, and CAT3 dual and displays the corresponding landing category on the FMAs. Each category depends upon the availability of aircraft systems and functions.",
          "When the landing capability downgrades, a triple click aural warning is activated.",
        ],
      },
      {
        heading: "Computation",
        bullets: [
          "The computation depends on the AP engagement: when the flight crew presses the APPR pb and one or both AP(s) is engaged, CAT 1, CAT 2, CAT 3 SINGLE or CAT 3 DUAL can be displayed (both APs are necessary for CAT 3 DUAL).",
          "The capability is computed only if the aircraft is above 400 ft RA when the flight crew arms the approach modes.",
          "Below 100 ft (radio altimeter), the FMGS freezes the landing capability until LAND mode is disengaged or both APs are off.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SOP-10.8: AUTOLAND warning light",
    eyebrow: EYEBROW,
    title: "10.8 Luz AUTOLAND",
    subtitle: "Low Visibility Operations · AUTOLAND Warning",
    leftPct: 45,
    leftTitle: "AUTOLAND WARNING LIGHT (DSC-22_30-80-10)",
    rightTitle: "APPROACH · 200 FT",
    image: img(390),
    imageAlt: "If the AUTOLAND warning light activates below 200 ft a go-around has to be performed",
    sourceRef: src("DSC-22_30-80-10 Autoland Warning Light", 390),
    cards: [
      {
        heading: "The AUTOLAND warning flashes when:",
        paragraph:
          "At least one RA indicates a height below 200 ft, and at least one AP is engaged with LAND or FLARE mode on the FMA, and at least one of the following conditions occurs:",
        bullets: [
          "The LOC deviation exceeds 1/4 dot and the aircraft is above 15 ft RA, or the GLIDE deviation exceeds 1 dot and the aircraft is above 100 ft RA",
          "Loss of LOC signal above 15 ft RA, or loss of GLIDE signal above 100 ft RA",
          "The difference between both RA indications is greater than 15 ft RA",
          "The last autopilot disengages",
          "The FMGS detects a long flare, or an untimely Flare condition.",
        ],
      },
      {
        heading: "Untimely flare",
        paragraph:
          "The FMGS detects an untimely Flare condition when the time between LAND engagement (below 400 ft RA) and FLARE condition (below 50 ft RA) is less than 2 s.",
      },
    ],
  },
  {
    comment: "SLIDE SOP-10.9: Alert height",
    eyebrow: EYEBROW,
    title: "10.9 Alert height",
    subtitle: "Low Visibility Operations · Alert Height",
    leftPct: 45,
    leftTitle: "FAIL-OPERATIONAL · FAIL-PASSIVE (SRP-01-70)",
    rightTitle: "ALERT HEIGHT (AH)",
    image: img(391),
    imageAlt: "For CAT 3 without DH approach: CONTINUE callout at alert height if no failure is detected",
    sourceRef: src("PRO-NOR-SRP-01-70 Landing Categories", 391),
    cards: [
      {
        heading: "Fail-operational automatic landing system",
        paragraph:
          "An automatic landing system is fail-operational if, in the event of a failure below alert height, the remaining part of the automatic system allows the aircraft to complete the approach, flare, and landing. A CAT 3 DUAL system is a fail-operational automatic landing system.",
      },
      {
        heading: "Fail-passive automatic landing system",
        paragraph:
          "An automatic landing system is fail-passive if, in the event of a failure, there is no significant out-of-trim condition or deviation of flight path or attitude, but the landing is not completed automatically. A CAT3 single system is a fail-passive automatic landing system. With a fail-passive automatic landing system the pilot assumes control of the aircraft after a failure.",
      },
      {
        heading: "Alert height",
        paragraph:
          "The alert height is the height above touch down, above which a CAT3 autoland would be discontinued and a missed approach executed, if a failure occurred in either the airplane systems or the relevant ground equipments. Below the alert height, if such a failure occurs, the flare, touchdown and roll out may be accomplished using the remaining automatic system.",
      },
    ],
  },
  {
    comment: "SLIDE SOP-10.10: Low go-around",
    eyebrow: EYEBROW,
    title: "10.10 Motor y al aire a baja altura",
    subtitle: "Low Visibility Operations · Low Go-Around",
    leftPct: 40,
    leftTitle: "SRS GA · GA TRK (DSC-22_30-40-90)",
    rightTitle: "LOW GO-AROUND",
    image: imgA320(397),
    imageAlt: "TOGA applied before touchdown versus after touchdown",
    sourceRef: src("DSC-22_30-40-90 SRS GA / GA TRK", 397),
    cards: [
      {
        heading: "SRS GA engages when all of the following conditions are applicable:",
        bullets: [
          "The flight crew sets at least one thrust lever to the TOGA detent",
          "The flaps lever is at least in position 1",
          "The aircraft is airborne, or on ground for less than 30 s.",
        ],
      },
      {
        heading: "GA TRK",
        bullets: [
          "The GA TRK mode maintains the track of the aircraft, when the mode engages. GA TRK simultaneously engages with SRS GA if NAV, HDG, or TRACK is not engaged.",
          "GA TRK cannot be disengaged below 100 ft RA.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "In dual AP configuration, disengagement of the go-around mode, on either axis, causes AP 2 to disconnect.",
    },
  },
];

export const MCC_SOP_10: MccLesson = {
  id: "a3200000-0000-0000-0000-000000000110",
  course_id: MCC_COURSE_ID,
  title: "SOP-10. Procedimientos normales II: ILS raw data y operaciones de baja visibilidad",
  slug: "sop-10-ils-raw-data-lvo",
  sequence_order: 13,
  lesson_order: 13,
  min_seconds: mccMinSeconds(SOP_10_SLIDES.length, mccVideoSeconds(SOP_10_SLIDES)),
  module_title: MCC_MODULES.NORMAL_SOP,
  content_html: joinSlides(SOP_10_SLIDES),
};

export const SOP_10_SLIDE_COUNT = SOP_10_SLIDES.length;
