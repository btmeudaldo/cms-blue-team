/**
 * SOP-09 — Procedimientos normales I: AP/FD y A/THR, circling, G/S desde arriba, ground speed mini,
 * protecciones de ley normal, Bird y circuito visual (1 h).
 *
 * Alcance: Curso APS MCC — Airbus A320ceo CFM56-5B (simulador Entrol A32).
 * Fuentes: Airbus Tutorial PDP Jan 2024 — Normal Procedures (págs. 299–318 y 400–419); FCOM A320
 * DSC-22_30 (AP, A/THR, approach modes, ALT*, GS mini, ALPHA FLOOR), DSC-27-20-10 (protections),
 * DSC-31-40 (FPV), DSC-22_20-40-30 (energy circle), PRO-NOR-SOP-18-C (circling, visual approach) y
 * LIM-AFS-10 (Autopilot Function).
 *
 * Criterio de redacción: la columna izquierda NO repite el texto de la lámina de la derecha; aporta la
 * información complementaria del FCOM (textos L1/L2, WARNING/CAUTION/NOTE) en inglés y literal. Solo se
 * repite algo de la lámina cuando es crítico. Variante FCOM: A320ceo CFM56-5B.
 * Láminas no usadas: 300 y 407 (ya en SOP-01); 307 y 308 (texto con A330; su parte A320 va en tarjetas de
 * 9.6 y 9.7); 315 (nota A320neo); 299, 400 y 411 (portadas); 310, 313, 318, 408, 413–416, 418 y 419
 * (texto redundante). p404 lleva tapadas la caja A330 y la línea "VMO + 4kt (A330)".
 * Arquitectura: docs/mcc/08_ARQUITECTURA_PDP.md.
 */
import { joinSlides, type MccLesson, type MccSlideSpec } from "./slide-builder.ts";

const MCC_COURSE_ID = "a3200000-0000-0000-0000-000000000320";
const PDP_IMG = "https://www.blueteam.es/elearning/media/mcc/pdp";
const EYEBROW = "APS MCC · A320 · SOP-09";

/** Todas las láminas llevan el pie recortado y se re-subieron: versión común para la caché. */
const IMG_VERSION = 1795624000;
const chapter = (page: number) =>
  page <= 305
    ? "ap_fd_and_a_thr_engagement_disengagement"
    : page <= 309
      ? "circling"
      : page <= 313
        ? "glide_slope_interception_from_above"
        : page <= 318
          ? "ground_speed_mini_function"
          : page <= 406
            ? "normal_law_protections"
            : page <= 410
              ? "use_of_bird"
              : "visual_pattern";
const CHAPTER_NAME: Record<string, string> = {
  ap_fd_and_a_thr_engagement_disengagement: "AP/FD and A/THR Engagement/Disengagement",
  circling: "Circling",
  glide_slope_interception_from_above: "Glide Slope Interception from Above",
  ground_speed_mini_function: "Ground Speed Mini Function",
  normal_law_protections: "Normal Law Protections",
  use_of_bird: "Use of Bird",
  visual_pattern: "Visual Pattern",
};
const img = (page: number) => `${PDP_IMG}/p${String(page).padStart(3, "0")}_${chapter(page)}.webp?v=${IMG_VERSION}`;
const src = (sections: string, page: number) =>
  `Source: FCOM A320 ${sections} & Airbus Tutorial PDP Jan 2024 — ${CHAPTER_NAME[chapter(page)]} (p.${page})`;

const SOP_09_SLIDES: MccSlideSpec[] = [
  // ── A. AP/FD y A/THR ─────────────────────────────────────────────────────
  {
    comment: "SLIDE SOP-09.1: AP engagement conditions",
    eyebrow: EYEBROW,
    title: "9.1 Conexión del AP",
    subtitle: "AP/FD · Engagement",
    leftPct: 45,
    leftTitle: "AP ENGAGEMENT (DSC-22_30-30-20)",
    rightTitle: "BEFORE SETTING AP ON",
    image: img(301),
    imageAlt: "Center the FD bars before setting AP ON if large orders are required",
    sourceRef: src("DSC-22_30-30-10 / 30-20 AP Engagement", 301),
    cards: [
      {
        heading: "Engagement of one AP",
        bullets: [
          "One AP engages when the flight crew presses the AP1 pb or the AP2 pb on the FCU, and the aircraft is in flight for more than 5 s.",
          "The AP engages only if the aircraft pitch, bank angle, and speed are within an acceptable range.",
          "The APs engage with the same guidance mode previously used by the FD. If the FDs were not previously engaged, the AP engages in HDG or TRACK, and V/S or FPA.",
          "The APs are available in normal and alternate law, only.",
        ],
      },
      {
        heading: "Engagement of both APs",
        paragraph:
          "The second AP can engage only when LOC and G/S are armed or engaged, or go-around is engaged. When both APs are engaged, AP1 is active, and AP2 is on standby, regardless of the order of AP engagement.",
      },
    ],
  },
  {
    comment: "SLIDE SOP-09.2: AP disengagement",
    eyebrow: EYEBROW,
    title: "9.2 Desconexión del AP",
    subtitle: "AP/FD · Disengagement",
    leftPct: 50,
    leftTitle: "AP DISENGAGEMENT (DSC-22_30-30-30)",
    rightTitle: "AP/FD – 2/2 · DISENGAGEMENT",
    image: img(302),
    imageAlt: "AP disconnection with the instinctive disconnect pb, cavalry charge and FD OFF",
    sourceRef: src("DSC-22_30-30-30 AP Disengagement", 302),
    cards: [
      {
        heading: "Manual disengagement",
        bullets: [
          "The APs disengage if the flight crew presses the takeover pb or the AP pb on the FCU, moves the pitch trim wheel, the sidestick or the rudder pedals above a specific threshold, or, on ground, sets all the thrust levers above the MCT detent.",
          "The other ways of disengagement are to be avoided. In particular, the disengagement of the APs with the sidestick, or the rudder pedal deflection is very uncomfortable for passengers.",
        ],
      },
      {
        heading: "Automatic disengagement",
        bullets: [
          "With FINAL APP mode engaged, the aircraft reaches the MAP, or the MDA/MDH -50 ft (if entered), or 400 ft AGL (if no MDA/MDH is entered).",
          "In normal law: high speed protection or angle-of-attack protection activates, or pitch attitude exceeds 25 ° up, or 13 ° down, or bank angle exceeds 45 °.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "If the flight crew does not quickly press the takeover pb a second time, the cavalry charge sounds and the AUTO FLT AP OFF alert is displayed on the E/WD.",
    },
  },
  {
    comment: "SLIDE SOP-09.3: A/THR arming and activation",
    eyebrow: EYEBROW,
    title: "9.3 Conexión del A/THR",
    subtitle: "A/THR · Arming and Activation",
    leftPct: 50,
    leftTitle: "A/THR ARMING AND ACTIVATION (DSC-22_30-50-30)",
    rightTitle: "A/THR – 1/2 · ENGAGEMENT",
    image: img(303),
    imageAlt: "Press the A/THR pb, LVR CLB flashes, move the thrust levers to the CL detent",
    sourceRef: src("DSC-22_30-50-30 A/THR Arming and Activation / DSC-22_30-50-40", 303),
    cards: [
      {
        heading: "A/THR pb pressed when the A/THR is disconnected",
        bullets: [
          "Arms if the thrust levers are above the CL detent (AEO) or above FLX-MCT (OEI); activates if they are in the active range.",
          "Provided that the aircraft is above 100 ft RA, or all RAs are failed, and LAND or FLARE is not engaged.",
        ],
      },
      {
        heading: "Active range",
        bullets: [
          "AEO: Both thrust levers are above idle, and at or below the CL detent.",
          "OEI: One thrust lever is above the idle detent, and at or below FLX-MCT detent. The thrust lever of the failed engine should be in the IDLE detent.",
          "The thrust lever positions determine the maximum thrust that the A/THR can command (except in A.FLOOR).",
        ],
      },
      {
        heading: "LVR CLB / LVR ASYM",
        paragraph:
          "LVR CLB flashes (AEO, above 100 ft, no windshear) when both thrust levers are below the CL detent, or one thrust lever is above CL detent. LVR ASYM flashes until the flight crew sets all thrust levers to the CL detent or the FLX-MCT detent.",
      },
    ],
  },
  {
    comment: "SLIDE SOP-09.4: A/THR disconnection",
    eyebrow: EYEBROW,
    title: "9.4 Desconexión del A/THR",
    subtitle: "A/THR · Disconnection",
    leftPct: 50,
    leftTitle: "A/THR DISCONNECTION (DSC-22_30-50-40)",
    rightTitle: "A/THR – 2/2 · DISENGAGEMENT",
    image: img(304),
    imageAlt: "Move the thrust levers to current thrust then press the A/THR instinctive disconnect pb",
    sourceRef: src("DSC-22_30-50-40 A/THR Disconnection", 304),
    cards: [
      {
        heading: "Standard disconnection",
        bullets: [
          "The flight crew presses an A/THR instinctive disconnect pb, or sets all the thrust levers to the IDLE detent.",
          "AUTO FLT A/THR OFF on the ECAM, MASTER CAUT light and single chime. If the aircraft is below 50 ft RA, and the flight crew sets all thrust levers to IDLE, no alert appears.",
        ],
      },
      {
        heading: "Non-standard disconnection",
        paragraph:
          "The flight crew presses the A/THR pb on the FCU, or the A/THR becomes inoperative. The alerts disappear if the flight crew presses the A/THR instinctive disconnect pb, or the MASTER CAUT pb, or arms or activates the A/THR.",
      },
    ],
    alert: {
      level: "CAUTION",
      text: "If the flight crew presses, and holds one A/THR instinctive disconnect pb for more than 15 s, the A/THR will disconnect for the remainder of the flight. All A/THR modes, including A.FLOOR, will be lost. The A/THR will be recovered at the next FMGC power-up on the ground.",
    },
  },
  {
    comment: "SLIDE SOP-09.5: Thrust lock function",
    eyebrow: EYEBROW,
    title: "9.5 Igualar el empuje y función THRUST LOCK",
    subtitle: "A/THR · Thrust Lock",
    leftPct: 45,
    leftTitle: "THRUST LOCK FUNCTION (DSC-22_30-50-40)",
    rightTitle: "MOVE THRUST LEVER TO CURRENT THRUST",
    image: img(305),
    imageAlt: "Risk of undue thrust increase if the A/THR is disconnected before matching the thrust levers",
    sourceRef: src("DSC-22_30-50-40 A/THR Disconnection / Thrust Lock Function", 305),
    cards: [
      {
        heading: "Standard disconnection",
        paragraph:
          "In normal operation, if the flight crew presses the A/THR instinctive disconnect pb, the engine thrust target is set to the thrust lever position.",
      },
      {
        heading: "Thrust lock",
        bullets: [
          "The thrust lock function activates if an A/THR non-standard disconnection occurs.",
          "The engines maintain the thrust at the value set before the A/THR disconnection.",
          "The FMA displays the flashing THR LK message; the ECAM alert ENG THRUST LOCKED appears every 5 s.",
          "The thrust lock deactivates as soon as the flight crew moves the thrust levers.",
        ],
      },
    ],
  },
  // ── B. Circling ──────────────────────────────────────────────────────────
  {
    comment: "SLIDE SOP-09.6: Circling approach overview",
    eyebrow: EYEBROW,
    title: "9.6 Circling: preparación y aproximación",
    subtitle: "Circling · Approach Preparation",
    leftPct: 40,
    leftTitle: "CIRCLING APPROACH (PRO-NOR-SOP-18-C)",
    rightTitle: "CIRCLING",
    image: img(306),
    imageAlt: "Circling pattern: preparation, before FAF, at MDA, downwind, abeam, base turn and threshold",
    sourceRef: src("PRO-NOR-SOP-18-C Circling Approach / LIM-AFS-10", 306),
    cards: [
      {
        heading: "General",
        paragraph:
          "The circling approach is the visual phase of an instrument approach to bring an aircraft into position for landing on a runway which is not suitably located for a straight-in approach.",
      },
      {
        heading: "Approach preparation",
        bullets: [
          "F-PLN: Introduce the instrument approach procedure, including the missed approach procedure for instrument approach.",
          "SEC F-PLN: Copy the active F-PLN and revise the landing runway.",
          "Instrument approach: stabilized at F speed, configuration 3 and landing gear down. F speed must be selected for approach when landing FLAPS 3 is inserted in the APPR PERF page.",
          "AP minimum use height in circling approach: 500 ft AGL for aircraft category C (LIM-AFS).",
        ],
      },
    ],
    alert: {
      level: "CAUTION",
      text: "The flight crew must conduct the flight within the circling area, while maintaining required visual references at all times.",
    },
  },
  {
    comment: "SLIDE SOP-09.7: Circling at MDA and downwind",
    eyebrow: EYEBROW,
    title: "9.7 Circling: MDA y tramo de viento en cola",
    subtitle: "Circling · Level Off / Downwind",
    leftPct: 50,
    leftTitle: "CIRCLING APPROACH (PRO-NOR-SOP-18-C)",
    rightTitle: "DOWNWIND LEG",
    image: img(309),
    imageAlt: "Downwind leg: missed approach of the instrument approach, flown in selected modes",
    sourceRef: src("PRO-NOR-SOP-18-C Circling Approach", 309),
    cards: [
      {
        heading: "At the Circling MDA(H) at the latest",
        bullets: [
          "Perform a level off: push the V/S / FPA knob with some anticipation (10 % of V/S in ft/min; e.g. V/S -1000 ft/min > 100 ft).",
          "At MAP, if the flight crew finds no visual reference: initiate a go around.",
        ],
      },
      {
        heading: "When required conditions for circling are satisfied",
        bullets: [
          "Select TRK FPA. Proceed to downwind leg.",
          "At any time in the downwind leg, activate the SEC F-PLN.",
          "Disconnect the AP and remove the FDs at the latest before starting the descent toward the runway.",
          "Set the landing configuration when appropriate, but ensure early stabilization in final.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "If, at any time during the circling procedure, the required visual references are lost, initiate a go around following the missed approach of the initial instrument approach (unless otherwise specified).",
    },
  },
  // ── C. G/S desde arriba ──────────────────────────────────────────────────
  {
    comment: "SLIDE SOP-09.8: G/S arming and G/S* engagement",
    eyebrow: EYEBROW,
    title: "9.8 G/S desde arriba: armado y captura",
    subtitle: "Glide Slope Interception from Above · G/S Mode",
    leftPct: 45,
    leftTitle: "G/S MODE (DSC-22_30-40-80-20)",
    rightTitle: "CLEAR FOR ILS APPROACH",
    image: img(311),
    imageAlt: "Arm APPR, set the FCU altitude above the aircraft and select V/S -1500 ft/min with G/S armed",
    sourceRef: src("DSC-22_30-40-80-20 G/S Arming / G/S* Engagement", 311),
    cards: [
      {
        heading: "G/S arming conditions",
        bullets: [
          "G/S arms, when the flight crew presses the APPR pb, and an ILS approach is set on the ARRIVAL page or manually tuned on the RADIO NAV page.",
          "At least one LS receiver must be operative.",
          "G/S can only arm when the mode is not SRS, RWY, RWY TRK, GA TRK and the aircraft is above 400 ft RA.",
        ],
      },
      {
        heading: "G/S* engagement conditions",
        bullets: [
          "G/S* engages when the aircraft reaches the capture zone of the G/S beam, G/S is armed, and LOC* or LOC is engaged.",
          "Passage far from the G/S beam: the G/S deviation is less than 2 dots, and the pitch order is such that G/S* will capture the G/S beam with a single maneuver.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SOP-09.9: ALT* trap and G/S disarming",
    eyebrow: EYEBROW,
    title: "9.9 G/S desde arriba: altitud del FCU",
    subtitle: "Glide Slope Interception from Above · Setting FCU Altitude",
    leftPct: 45,
    leftTitle: "ALT* · G/S DISARMING (DSC-22_30-40)",
    rightTitle: "SETTING FCU ALTITUDE",
    image: img(312),
    imageAlt: "If the FCU altitude is below the aircraft altitude, selecting V/S after arming APPR can lead to ALT*",
    sourceRef: src("DSC-22_30-40-50-10 ALT* / DSC-22_30-40-80-20 G/S Disarming", 312),
    cards: [
      {
        heading: "ALT*",
        bullets: [
          "ALT* engages, when ALT is armed, and the aircraft reaches the capture zone of the altitude target.",
          "ALT* engagement is inhibited during 3 s after the selected altitude is changed on the FCU.",
          "ALT* reverts to V/S / FPA when the flight crew changes the FCU selected altitude by more than 250 ft.",
        ],
      },
      {
        heading: "G/S disarming conditions",
        bullets: [
          "G/S disarms, when G/S* engages.",
          "G/S also disarms, when the flight crew presses the APPR pb, or the LOC pb, or LOC disarms, or LOC*, or LOC is lost, or the flight crew modifies the approach selection, or performs a go around.",
        ],
      },
    ],
  },
  // ── D. Ground speed mini ─────────────────────────────────────────────────
  {
    comment: "SLIDE SOP-09.10: Ground speed mini principle",
    eyebrow: EYEBROW,
    title: "9.10 Ground speed mini: principio",
    subtitle: "Ground Speed Mini Function · Principle",
    leftPct: 45,
    leftTitle: "GROUND SPEED MINI FUNCTION (DSC-22_30-60-20)",
    rightTitle: "MAIN PRINCIPLE",
    image: img(314),
    imageAlt: "Tower wind 330/20 kt with headwind increasing to 50 kt and decreasing to 25 kt",
    sourceRef: src("DSC-22_30-60-20 Ground Speed Mini Function", 314),
    cards: [
      {
        heading: "General",
        paragraph:
          "When the aircraft flies an approach in managed speed, the managed speed target, displayed by the magenta triangle on the PFDs, is variable. This managed speed target is the VAPP, displayed on the PERF APPR page, corrected by the Ground Speed Mini function.",
      },
      {
        heading: "Activation conditions",
        bullets: [
          "The speed is managed.",
          "The FMS flight phase is the approach phase.",
          "The Ground Speed Mini function does not correct Green Dot, S and F speeds.",
        ],
      },
      {
        heading: "Principle",
        paragraph:
          "The minimum energy level is the energy level the aircraft will have at touchdown with an indicated airspeed equal to VAPP, and with the wind equal to the tower reported wind as inserted in the PERF APPR page. The Ground Speed Mini is not displayed to the flight crew.",
      },
    ],
  },
  {
    comment: "SLIDE SOP-09.11: VAPP computation and headwind components",
    eyebrow: EYEBROW,
    title: "9.11 Ground speed mini: VAPP y componentes de viento",
    subtitle: "Ground Speed Mini Function · Current Headwind 20 kt",
    leftPct: 45,
    leftTitle: "VAPP · HEADWIND COMPONENTS (DSC-22_30-60-20)",
    rightTitle: "CURRENT HEADWIND 20 KT",
    image: img(316),
    imageAlt: "Example with tower wind 330/20 kt: GS mini 120 kt and IAS target 140 kt",
    sourceRef: src("DSC-22_30-60-20 Managed Speed Target Computation", 316),
    cards: [
      {
        heading: "VAPP computation",
        bullets: [
          "VAPP = VLS+5+1/3 of the TWR HEADWIND COMPONENT.",
          "1/3 of the TWR HEADWIND COMPONENT has two limits: 0 kt as the minimum value (no wind or tailwind), +15 kt as the maximum value.",
          "The flight crew can manually modify the VAPP and MAG WIND values on the PERF APPR page.",
        ],
      },
      {
        heading: "Headwind components",
        bullets: [
          "Tower: the average wind provided by the ATIS or the tower, entered in the MAG WIND field in the PERF APPR page, projected on the runway axis of the active F-PLN.",
          "Current: the projection of the current wind measured by the ADIRS on the aircraft longitudinal axis (instantaneous headwind).",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SOP-09.12: Managed speed target with headwind increase",
    eyebrow: EYEBROW,
    title: "9.12 Ground speed mini: aumento del viento",
    subtitle: "Ground Speed Mini Function · Headwind Increases to 50 kt",
    leftPct: 40,
    leftTitle: "MANAGED SPEED TARGET (DSC-22_30-60-20)",
    rightTitle: "HEADWIND INCREASES TO 50 KT",
    image: img(317),
    imageAlt: "Managed speed keeps the energy when the headwind increases; selected speed lets the ground speed decrease",
    sourceRef: src("DSC-22_30-60-20 Managed Speed Target Computation / Disengagement Conditions", 317),
    cards: [
      {
        heading: "Managed speed target computation",
        bullets: [
          "The FG continuously computes the managed speed target that is equal to VAPP plus an additional increment. This increment takes into account the headwind variation during the final approach.",
          "Managed speed target = VAPP + (CURRENT HEADWIND COMPONENT - TWR HEADWIND COMPONENT).",
          "The limit of the managed speed target is VAPP, as the minimum value.",
        ],
      },
      {
        heading: "Disengagement conditions",
        paragraph:
          "Managed speed disengages any time the flight crew selects a speed target on the FCU, or if the speed was preselected.",
      },
    ],
  },
  // ── E. Protecciones de ley normal ────────────────────────────────────────
  {
    comment: "SLIDE SOP-09.13: Load factor protection",
    eyebrow: EYEBROW,
    title: "9.13 Protección de factor de carga",
    subtitle: "Normal Law Protections · Load Factor",
    leftPct: 45,
    leftTitle: "LOAD FACTOR PROTECTION (DSC-27-20-10-20)",
    rightTitle: "LOAD FACTOR PROTECTION",
    image: img(401),
    imageAlt: "Load factor limits with slats retracted and extended, and the amber G LOAD indication",
    sourceRef: src("DSC-27-20-10-20 Protections / Load Factor Protection", 401),
    cards: [
      {
        heading: "Why",
        bullets: [
          "High load factors can be encountered during evasive maneuvers due to potential collisions, or CFIT.",
          "Pulling \"g\" is efficient, if the resulting maneuver is really flown with this \"g\" number. If the aircraft is not able to fly this trajectory, or to perform this maneuver, pulling \"g\" will be detrimental.",
        ],
      },
      {
        heading: "Load factor protection and safety",
        bullets: [
          "With load factor protection, the PF may immediately and instinctively pull the sidestick full aft: The aircraft will initially fly a 2.5 g maneuver without losing time. Then, if the danger still exists, the high AOA protection will take over.",
          "Load factor protection enables immediate PF reaction, without any risk of overstressing the aircraft.",
          "An immediate 2.5 g reaction provides larger obstacle clearance, than a hesitant and delayed high G Load maneuver (two-second delay).",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SOP-09.14: Pitch attitude protection",
    eyebrow: EYEBROW,
    title: "9.14 Protección de actitud de cabeceo",
    subtitle: "Normal Law Protections · Pitch Attitude",
    leftPct: 45,
    leftTitle: "PITCH ATTITUDE PROTECTION (DSC-27-20-10-20)",
    rightTitle: "PITCH ATTITUDE PROTECTION",
    image: img(402),
    imageAlt: "Pitch up limit 30 degrees and pitch down limit 15 degrees on the PFD",
    sourceRef: src("DSC-27-20-10-20 Protections / Pitch Attitude Protection", 402),
    cards: [
      {
        heading: "Why",
        bullets: [
          "Too high a nose-up ▸ Very rapid energy loss. Too low a nose-down ▸ Very rapid energy gain.",
          "There is no emergency situation that requires flying at excessive attitudes.",
        ],
      },
      {
        heading: "Limits",
        bullets: [
          "30 ° nose up in conf 0 to 3 (progressively reduced to 25 ° at low speed).",
          "25 ° nose up in conf FULL (progressively reduced to 20 ° at low speed).",
          "15 ° nose down (indicated by green symbols \"=\" on the PFD's pitch scale).",
        ],
      },
      {
        heading: "FD bars",
        paragraph:
          "The flight director bars disappear from the PFD when the pitch attitude exceeds 25 ° up or 13 ° down. They return to the display when the pitch angle returns to the region between 22 ° up and 10 ° down.",
      },
    ],
  },
  {
    comment: "SLIDE SOP-09.15: Bank angle protection",
    eyebrow: EYEBROW,
    title: "9.15 Protección de alabeo",
    subtitle: "Normal Law Protections · Bank Angle",
    leftPct: 45,
    leftTitle: "BANK ANGLE PROTECTION (DSC-27-20-10-30)",
    rightTitle: "BANK ANGLE PROTECTION",
    image: img(403),
    imageAlt: "Bank angle held up to 33 degrees with stick neutral and limited to 67 degrees",
    sourceRef: src("DSC-27-20-10-30 Bank Angle Protection", 403),
    cards: [
      {
        heading: "Reduced limits",
        bullets: [
          "If Angle-of-Attack protection is active, and the pilot maintains full lateral deflection on the sidestick, the bank angle will not go beyond 45 °.",
          "If High Speed Protection is active, the bank angle will not go beyond 40 °, and with the sidestick released, the aircraft always returns to a bank angle of 0 °.",
          "When bank angle protection is active, auto trim is inoperative.",
          "If the bank angle exceeds 45 °, the autopilot disconnects and the FD bars disappear. The FD bars return when the bank angle decreases to less than 40 °.",
        ],
      },
      {
        heading: "Steep turns (bank angle greater than 33 °)",
        paragraph:
          "The flight crew must apply lateral pressure on the sidestick to maintain bank, and aft pressure on the sidestick to maintain level flight.",
      },
    ],
  },
  {
    comment: "SLIDE SOP-09.16: High speed protection",
    eyebrow: EYEBROW,
    title: "9.16 Protección de alta velocidad",
    subtitle: "Normal Law Protections · High Speed Protection (HSP)",
    leftPct: 45,
    leftTitle: "HIGH SPEED PROTECTION (DSC-27-20-10-20)",
    rightTitle: "HIGH SPEED PROTECTION (HSP)",
    image: img(404),
    imageAlt: "High speed protection: stick free the aircraft flies back towards the envelope",
    sourceRef: src("DSC-27-20-10-20 Protections / High Speed Protection", 404),
    cards: [
      {
        heading: "Activation",
        bullets: [
          "The aircraft automatically recovers, following a high speed upset. Depending on the flight conditions (high acceleration, low pitch attitude), high speed protection is activated at/or above VMO/MMO.",
          "As the speed increases above VMO/MMO, the sidestick nose-down authority is progressively reduced, and a permanent nose-up order is applied to aid recovery to normal flight conditions.",
        ],
      },
      {
        heading: "In a dive situation",
        bullets: [
          "If there is no sidestick input, the aircraft will slightly overshoot VMO/MMO and fly back towards the envelope.",
          "If the sidestick is maintained full forward, at approximately VMO + 16 kt / MMO + 0.04, the pitch nose-down authority smoothly reduces to zero (which does not mean that the aircraft stabilizes at that speed).",
          "The high speed protection is deactivated, when the aircraft speed decreases below VMO/MMO.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "The ECAM displays an overspeed warning at VMO + 4 kt and MMO + 0.006.",
    },
  },
  {
    comment: "SLIDE SOP-09.17: High angle of attack protection",
    eyebrow: EYEBROW,
    title: "9.17 Protección a baja velocidad (alto ángulo de ataque)",
    subtitle: "Normal Law Protections · Low Speed Protection",
    leftPct: 45,
    leftTitle: "HIGH ANGLE-OF-ATTACK PROTECTION (DSC-27-20-10-20)",
    rightTitle: "LOW SPEED PROTECTION",
    image: img(405),
    imageAlt: "VLS, alpha prot, alpha max and alpha floor on the speed scale",
    sourceRef: src("DSC-27-20-10-20 Protections / High Angle-of-Attack Protection", 405),
    cards: [
      {
        heading: "Protection",
        bullets: [
          "Without flight crew input, the F/CTL computers maintain the AOA equal to αPROT. When the High AOA protection is activated, the sidestick input is an AOA demand, instead of a load factor demand.",
          "The flight crew can hold full back sidestick, if it is needed, and the aircraft stabilizes at an AOA close to but less than the 1 g stall.",
          "As the aircraft enters protection, the system inhibits further nose-up trim. The nose-down trim remains available.",
        ],
      },
      {
        heading: "Exit",
        paragraph:
          "If the flight crew flies into αPROT, they should leave it as soon as other considerations allow, by easing forward on the sidestick to reduce alpha below the value of αPROT, and simultaneously add thrust (if the αFloor has not yet been activated, or cancelled).",
      },
    ],
    alert: {
      level: "CAUTION",
      text: "The flight crew must not deliberately fly the aircraft with a High AOA, except for short periods of time, when maximum High Lift coefficient is required (like during windshear or GPWS maneuvers).",
    },
  },
  {
    comment: "SLIDE SOP-09.18: Alpha floor",
    eyebrow: EYEBROW,
    title: "9.18 ALPHA FLOOR",
    subtitle: "Normal Law Protections · Alpha Floor",
    leftPct: 45,
    leftTitle: "ALPHA FLOOR (DSC-22_30-50-50)",
    rightTitle: "ALPHA FLOOR",
    image: img(406),
    imageAlt: "Alpha floor commands TOGA thrust, then TOGA LK until the A/THR is disconnected",
    sourceRef: src("DSC-22_30-50-50 Alpha Floor / DSC-27-20-10-20", 406),
    cards: [
      {
        heading: "Alpha floor",
        bullets: [
          "ALPHA FLOOR is a protection that commands TOGA thrust, regardless of the position of the thrust levers. This protection is available from lift-off to 100 ft RA on approach.",
          "When ALPHA FLOOR conditions are met, the FMA displays A.FLOOR surrounded by a flashing amber box and the EWD displays A.FLOOR.",
          "When ALPHA FLOOR conditions are no longer applicable and the speed is above VLS, the FMA displays TOGA LK surrounded by a flashing amber box, and the TOGA thrust is frozen.",
          "To cancel A.FLOOR or TOGA LK, the flight crew must disconnect the autothrust.",
        ],
      },
      {
        heading: "Recovery",
        paragraph:
          "If the sidestick is held aft, the aircraft will start to climb at a relatively constant low airspeed. The αPROT should be exited by easing forward on the sidestick, and the αFloor should be cancelled by using the instinctive disconnect pushbutton on either thrust lever as soon as a safe speed is regained.",
      },
    ],
  },
  // ── F. Bird (FPV) ────────────────────────────────────────────────────────
  {
    comment: "SLIDE SOP-09.19: FPV vertical functions",
    eyebrow: EYEBROW,
    title: "9.19 Bird: funciones verticales",
    subtitle: "Use of Bird · Vertical Functions",
    leftPct: 40,
    leftTitle: "FLIGHT PATH VECTOR (DSC-31-40)",
    rightTitle: "FPV PRESENTATION · VERTICAL FUNCTIONS",
    image: img(409),
    imageAlt: "Pitch and FPA with the Bird at top of descent and on a -3 degree path",
    sourceRef: src("DSC-31-40 Flight Path Vector", 409),
    cards: [
      {
        heading: "Information presentation",
        bullets: [
          "The Flight Path Vector (FPV) is the flight reference with the TRK and FPA as basic guidance parameters. When the TRK/FPA is selected on the FCU, the FPV appears on the PFD.",
          "The flight path angle is indicated on the PFD by the vertical movement of the bird in relation to the pitch scale.",
        ],
      },
      {
        heading: "Use of FPV",
        bullets: [
          "The bird is the flying reference that should be used when flying a stabilized segment of trajectory, e.g.: non-precision approach or visual circuit.",
          "In dynamic manoeuvres, the bird is directly affected by the aircraft inertia and has a delayed reaction. As a result, the bird should not be used as a flight reference in dynamic manoeuvres.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SOP-09.20: FPV lateral functions",
    eyebrow: EYEBROW,
    title: "9.20 Bird: funciones laterales",
    subtitle: "Use of Bird · Lateral Functions",
    leftPct: 40,
    leftTitle: "FLIGHT PATH VECTOR (DSC-31-40)",
    rightTitle: "FPV PRESENTATION · LATERAL FUNCTIONS",
    image: img(410),
    imageAlt: "Heading versus track with crosswind and the turn for drift correction",
    sourceRef: src("DSC-31-40 Flight Path Vector", 410),
    cards: [
      {
        heading: "Track and drift",
        bullets: [
          "The bird indicates the track and flight path angle in relation to the ground.",
          "The track is indicated on the PFD by a green diamond on the compass, in addition to the lateral movement of the bird in relation to the fixed aircraft symbol. On the ND, the track is indicated by a green diamond on the compass scale.",
          "The difference in angle between track and heading indicates the drift.",
        ],
      },
      {
        heading: "Flight directors",
        paragraph:
          "With the flight directors (FD) ON, the Flight Path Director (FPD) replaces the HDG-VS Flight Director (FD). With both FD pb set to OFF, the blue track index appears on the PFD horizon.",
      },
    ],
  },
  // ── G. Circuito visual ───────────────────────────────────────────────────
  {
    comment: "SLIDE SOP-09.21: Visual circuit",
    eyebrow: EYEBROW,
    title: "9.21 Circuito visual",
    subtitle: "Visual Pattern · Visual Circuit",
    leftPct: 40,
    leftTitle: "VISUAL APPROACH (PRO-NOR-SOP-18-C)",
    rightTitle: "VISUAL CIRCUIT",
    image: img(412),
    imageAlt: "Visual circuit at 1500 ft AAL with callouts and stabilized at 500 ft AAL with FLAPS FULL at VAPP",
    sourceRef: src("PRO-NOR-SOP-18-C Visual Approach", 412),
    cards: [
      {
        heading: "General",
        paragraph:
          "Perform the approach on a nominal 3 ° glideslope using visual references. Approach to be stabilized by 500 ft AGL on the correct approach path, in the landing configuration, at VAPP.",
      },
      {
        heading: "Method",
        bullets: [
          "The AP is not used. Both FDs are OFF. FPV use is recommended.",
          "A/THR use is recommended with managed speed.",
          "The flight plan selected on the MCDU should include the selection of the landing runway. However, visual references must be used.",
          "Turn into base leg with a maximum of 30 ° of bank. Descent with approximate FPA, in FLAPS 2, at F speed.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "Bear in mind the possible risk of optical illusions due to hindered night vision.",
    },
  },
  {
    comment: "SLIDE SOP-09.22: Energy circle and final approach",
    eyebrow: EYEBROW,
    title: "9.22 Energy circle y aproximación final visual",
    subtitle: "Visual Pattern · Energy Circle / Final Approach",
    leftPct: 50,
    leftTitle: "ENERGY CIRCLE · FINAL APPROACH",
    rightTitle: "ENERGY CIRCLE",
    image: img(417),
    imageAlt: "Energy circle on the ND in HDG or TRK mode",
    sourceRef: src("DSC-22_20-40-30 Energy Circle / PRO-NOR-SOP-18-C Visual Approach", 417),
    cards: [
      {
        heading: "Energy circle (DSC-22_20)",
        paragraph:
          "The energy circle is a green arc, centered on the aircraft's position and oriented towards the current track line. It is displayed on the NDs during descent, when HDG or TRK mode is selected, considering all speed constraints on the vertical profile.",
      },
      {
        heading: "Final approach (PRO-NOR-SOP-18-C)",
        bullets: [
          "The speed trend arrow and FPV help the flight crew make timely and correct thrust settings (if in manual thrust), and approach path corrections.",
          "Avoid descending through the correct approach path with idle thrust. (Late recognition of this situation without a prompt thrust increase may lead to considerable speed decay and altitude loss).",
          "Ensure that the aircraft is stabilized on the final descent path at VAPP (or ground speed mini) in the landing configuration with the thrust stabilized (usually above idle) at 500 ft above airfield elevation.",
          "Avoid any tendency to \"duck under\" in the late stages of the approach. Avoid destabilizing the approach in the last 100 ft.",
        ],
      },
    ],
  },
];

export const MCC_SOP_09: MccLesson = {
  id: "a3200000-0000-0000-0000-000000000109",
  course_id: MCC_COURSE_ID,
  title: "SOP-09. Procedimientos normales I: AP/FD y A/THR, circling, GS mini, protecciones, Bird y circuito visual",
  slug: "sop-09-normales-i",
  sequence_order: 15,
  lesson_order: 15,
  min_seconds: 3600,
  content_html: joinSlides(SOP_09_SLIDES),
};

export const SOP_09_SLIDE_COUNT = SOP_09_SLIDES.length;
