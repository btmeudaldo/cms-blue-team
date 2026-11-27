/**
 * SOP-12 — Emergencias I: despegue abortado, evacuación, fallo de motor tras V1 y en crucero, todos los
 * motores parados y aviso de baja energía (50 min · 0,83 h).
 *
 * Alcance: Curso APS MCC — Airbus A320ceo CFM56-5B (simulador Entrol A32).
 * Fuentes: Airbus Tutorial PDP Jan 2024 — Abnormal and Emergency Procedures: All Engine Flameout (págs.
 * 443–450), Emergency Evacuation (492–493), Engine Failure after V1 (494–504), Engine Failure in Cruise
 * (505–511), Low Energy Aural Alert (522–523) y Rejected Takeoff (524–529); FCOM A320 PRO-NOR-SOP-12,
 * DSC-22_20 (FMS), DSC-22_30 (A/THR), DSC-22_40-30, DSC-23-40-10, DSC-24, DSC-27, DSC-32, DSC-49,
 * DSC-52, DSC-70, LIM-ENG y LIM-APU.
 *
 * Criterio de redacción: la columna izquierda NO repite el texto de la lámina de la derecha; aporta la
 * información complementaria del FCOM en inglés y literal, solo de bloques aplicables a la variante
 * A320ceo CFM56-5B (grupo EC-ILQ).
 * ROPS (págs. 530–533) no se incluye: ROW/ROP no está instalado en la variante de referencia.
 * Láminas no usadas: portadas 492, 494, 505, 522, 524 y 530; 446, 447 y 500 (texto de otros tipos);
 * 445, 449, 450, 496, 503, 504 y 511 (redundantes); 529 (flujo ya en SOP-02). p443 lleva tapados los
 * rótulos de tipo de la barra y la caja de alerta del otro tipo.
 * Arquitectura: docs/mcc/08_ARQUITECTURA_PDP.md.
 */
import { MCC_MODULES, joinSlides, mccMinSeconds, mccVideoSeconds, type MccLesson, type MccSlideSpec } from "./slide-builder.ts";

const MCC_COURSE_ID = "a3200000-0000-0000-0000-000000000320";
const PDP_IMG = "https://www.blueteam.es/elearning/media/mcc/pdp";
const EYEBROW = "APS MCC · A320 · SOP-12";

/** Versión común de caché para las láminas de esta lección (pie recortado). */
const IMG_VERSION = 1795627000;
const chapter = (page: number) =>
  page <= 450
    ? "all_engine_flameout"
    : page <= 493
      ? "emergency_evacuation"
      : page <= 504
        ? "engine_failure_after_v1"
        : page <= 511
          ? "engine_failure_in_cruise"
          : page <= 523
            ? "low_energy_aural_alert"
            : "rejected_takeoff";
const CHAPTER_NAME: Record<string, string> = {
  all_engine_flameout: "All Engine Flameout",
  emergency_evacuation: "Emergency Evacuation",
  engine_failure_after_v1: "Engine Failure after V1",
  engine_failure_in_cruise: "Engine Failure in Cruise",
  low_energy_aural_alert: "Low Energy Aural Alert",
  rejected_takeoff: "Rejected Takeoff",
};
const img = (page: number) => `${PDP_IMG}/p${String(page).padStart(3, "0")}_${chapter(page)}.webp?v=${IMG_VERSION}`;
const src = (sections: string, page: number) =>
  `Source: FCOM A320 ${sections} & Airbus Tutorial PDP Jan 2024 — ${CHAPTER_NAME[chapter(page)]} (p.${page})`;

const SOP_12_SLIDES: MccSlideSpec[] = [
  // ── A. Despegue abortado ─────────────────────────────────────────────────
  {
    comment: "SLIDE SOP-12.1: Rejected takeoff decision management",
    eyebrow: EYEBROW,
    title: "12.1 Despegue abortado: la decisión",
    subtitle: "Rejected Takeoff · Decision Management",
    leftPct: 45,
    leftTitle: "100 KT · FMS AFTER RTO",
    rightTitle: "DECISION MANAGEMENT",
    image: img(525),
    imageAlt: "ECAM alerts inhibited during takeoff; any warning or caution below V1 is significant",
    sourceRef: src("PRO-NOR-SOP-12 Takeoff - 100 kt / DSC-22_20-85 T.O Data after Rejected Takeoff", 525),
    cards: [
      {
        heading: "100 KT ……… CROSSCHECK (PF)",
        bullets: [
          "Below 100 kt, the Captain may decide to abort the takeoff, depending on the circumstances.",
          "Above 100 kt, rejecting the takeoff is a more serious matter.",
        ],
      },
      {
        heading: "How to change T.O data or departure runway after rejected takeoff",
        paragraph:
          "In case of rejected takeoff (with an aircraft speed above 90 kt or with sufficient thrust), the FMS remains in TAKEOFF phase and the flight crew cannot modify the FMS departure T.O DATA or departure runway in the active flight plan. In that case, the flight crew should: delete the SEC F-PLN, initialize the SEC F-PLN with the new T.O DATA and/or new departure runway, activate the SEC F-PLN.",
      },
    ],
  },
  {
    comment: "SLIDE SOP-12.2: RTO below 72 kt and autobrake",
    eyebrow: EYEBROW,
    title: "12.2 RTO por debajo de 72 kt",
    subtitle: "Rejected Takeoff · RTO below 72 kt",
    leftPct: 45,
    leftTitle: "AUTO BRK · SYSTEM ACTIVATION (DSC-32-30-10)",
    rightTitle: "RTO BELOW 72 KT",
    image: img(526),
    imageAlt: "RTO below 72 kt: no ground spoilers, no autobrake, manual braking and steering",
    sourceRef: src("DSC-32-30-10 Auto Brake - System Activation", 526),
    cards: [
      {
        heading: "Automatic braking is activated when:",
        bullets: [
          "The command for ground spoilers extension is detected, for LO and MED mode, or",
          "The command for ground spoilers extension is detected, and the wheel speed is above 40 kt, for MAX mode.",
        ],
      },
      {
        heading: "Consequence",
        paragraph:
          "Therefore, if the aircraft makes an acceleration stop and begins to decelerate when the wheel speed is under 72 kt, the automatic braking will not activate because the ground spoilers will not extend. For autobrake to activate, at least two SEC's must be operative.",
      },
    ],
  },
  {
    comment: "SLIDE SOP-12.3: Captain decision STOP and ground spoilers",
    eyebrow: EYEBROW,
    title: "12.3 «STOP!»: decisión del comandante",
    subtitle: "Rejected Takeoff · Captain Decision",
    leftPct: 40,
    leftTitle: "GROUND SPOILERS IN RTO (DSC-27)",
    rightTitle: "CAPTAIN DECISION “STOP!”",
    image: img(527),
    imageAlt: "Captain becomes PF: thrust levers idle, reverse max; F/O checks reversers and deceleration",
    sourceRef: src("DSC-27-10-20 Speed Brakes and Ground Spoilers - Full Extension in Rejected Takeoff Phase", 527),
    cards: [
      {
        heading: "Full extension – rejected takeoff phase",
        bullets: [
          "If the ground spoilers are armed and the wheel speed exceeds 72 kt, the ground spoilers will automatically extend as soon as both thrust levers are reset to idle.",
          "If the ground spoilers are not armed and the wheel speed exceeds 72 kt, the ground spoilers will automatically extend as soon as reverse is selected on one engine (the other thrust lever remains at idle).",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SOP-12.4: Emergency evacuation procedure access",
    eyebrow: EYEBROW,
    title: "12.4 Localizar el procedimiento de evacuación",
    subtitle: "Rejected Takeoff · EMER EVAC PROC",
    leftPct: 45,
    leftTitle: "DOORS · EMERGENCY EXITS (DSC-52)",
    rightTitle: "EMER EVAC PROC",
    image: img(528),
    imageAlt: "Rapid access icon to the EMER EVAC procedure in the top right corner of the eQRH",
    sourceRef: src("DSC-52-10 Passenger Doors / Emergency Exits", 528),
    cards: [
      {
        heading: "Flight lock",
        paragraph:
          "All flight lock actuators disengage: during the landing roll, or in the case of a rejected takeoff, or in the case of a loss of DC BUS 1.",
      },
      {
        heading: "Emergency exits",
        paragraph:
          "Two emergency exits are located on each side of the cabin, in addition to the passenger doors. The emergency exits are also equipped with escape slides. In the case of an emergency, the exits open inwards. The slides of the overwing emergency exits are always in armed configuration.",
      },
    ],
  },
  // ── B. Evacuación ────────────────────────────────────────────────────────
  {
    comment: "SLIDE SOP-12.5: Emergency evacuation and EVAC panel",
    eyebrow: EYEBROW,
    title: "12.5 Evacuación de emergencia",
    subtitle: "Emergency Evacuation · CAPT / F/O",
    leftPct: 40,
    leftTitle: "EVAC PANEL (DSC-23-40-10)",
    rightTitle: "EMERGENCY EVACUATION",
    image: img(493),
    imageAlt: "Captain decision, EVAC COMMAND pb and EMER EVAC procedure",
    sourceRef: src("DSC-23-40-10 Emergency Evacuation - Controls and Indicators", 493),
    cards: [
      {
        heading: "COMMAND pb-sw",
        bullets: [
          "Evacuation initiated from the cabin — in the cockpit: the EVAC light flashes; a horn sounds continuously if CAPT & PURS is selected or for 3 s if CAPT is selected.",
          "Evacuation initiated from the cockpit (regardless of the position of the CAPT and PURS sw) — in the cockpit: the ON light and EVAC light flash.",
          "In the cabin (both cases): the EVAC light flashes at FWD and AFT attendant panels; an evacuation tone sounds continuously.",
        ],
      },
      {
        heading: "Other controls",
        bullets: [
          "HORN SHUT OFF pb: silences the cockpit horn (generated when evacuation is activated from the cabin).",
          "CAPT and PURS sw — CAPT: the alert may only be activated from the cockpit; if one of the cabin EVAC CMD key is pressed, only the cockpit horn sounds for 3 s. CAPT & PURS: the alert may either be activated from the cockpit or from the cabin.",
        ],
      },
    ],
  },
  // ── C. Fallo de motor tras V1 ────────────────────────────────────────────
  {
    comment: "SLIDE SOP-12.6: Engine failure after V1 detection",
    eyebrow: EYEBROW,
    title: "12.6 Fallo de motor tras V1: detección",
    subtitle: "Engine Failure after V1 · Detection",
    leftPct: 45,
    leftTitle: "ROTATION · ENGINE OUT (FMS)",
    rightTitle: "DETECTION",
    image: img(495),
    imageAlt: "Fly, navigate, communicate: gear up, consider TOGA, pitch 12.5 degrees, beta target",
    sourceRef: src("PRO-NOR-SOP-12 At VR / DSC-22_20-60-40 Engine Out", 495),
    cards: [
      {
        heading: "Rotation (PRO-NOR-SOP-12)",
        paragraph:
          "At VR, initiate the rotation to achieve a continuous rotation with a rate of about 3 °/s, towards a pitch attitude 15 ° (12.5 °, one engine is failed).",
      },
      {
        heading: "When the FMGS detects an engine-out condition (DSC-22_20-60-40)",
        bullets: [
          "The managed target speeds is immediately set to a value that depends upon the flight phase.",
          "All preselected speeds entered in the MCDU are deleted; step climb (or step descent), if entered, is deleted; the time constraint is deleted.",
          "The PROG page shows the engine-out maximum recommended (EO MAX REC) altitude.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SOP-12.7: Consider TOGA and thrust limits",
    eyebrow: EYEBROW,
    title: "12.7 Considerar TOGA",
    subtitle: "Engine Failure after V1 · Consider TOGA",
    leftPct: 45,
    leftTitle: "THRUST SETTING / EGT LIMITS (LIM-ENG)",
    rightTitle: "CONSIDER TOGA",
    image: img(497),
    imageAlt: "Consider TOGA after a FLEX takeoff; takeoff thrust limited to 10 min",
    sourceRef: src("LIM-ENG Thrust Setting/EGT Limits", 497),
    cards: [],
    table: {
      headers: ["Operating conditions", "Time limit", "EGT limit"],
      rows: [
        ["Takeoff and go-around — all engines operative", "5 min", "950 °C"],
        ["Takeoff and go-around — one engine inoperative", "10 min", "950 °C"],
        ["Maximum Continuous Thrust (MCT)", "Not limited", "915 °C"],
        ["Starting — on ground / in flight", "—", "725 °C"],
      ],
    },
    alert: {
      level: "NOTE",
      text: "Takeoff includes TOGA and FLEX thrust modes.",
    },
  },
  {
    comment: "SLIDE SOP-12.8: Beta target",
    eyebrow: EYEBROW,
    title: "12.8 Beta target y trim de dirección",
    subtitle: "Engine Failure after V1 · Beta Target",
    leftPct: 40,
    leftTitle: "SIDESLIP TARGET (DSC-27-20-10-50)",
    rightTitle: "BETA TARGET AND RUDDER TRIM",
    image: img(498),
    imageAlt: "Center the beta target with rudder, then trim at 1 degree per second",
    sourceRef: src("DSC-27-20-10-50 Sideslip Target", 498),
    cards: [
      {
        heading: "Sideslip target",
        bullets: [
          "If one engine fails, the FAC modifies the sideslip indication slightly to show the pilot how much rudder to use to get the best climb performance (ailerons to neutral and spoilers retracted).",
          "In the case of an engine failure at takeoff, or at go-around, the sideslip index on the PFD changes from yellow to blue.",
          "In flight, the lateral normal law commands some rudder surface deflection to minimize the sideslip.",
          "The pilot's response is normal and instinctive: zero the slip indication by applying the right amount of rudder to get the best climb performance.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SOP-12.9: Damage or no damage and in-flight start",
    eyebrow: EYEBROW,
    title: "12.9 ¿Daño o no daño?",
    subtitle: "Engine Failure after V1 · ECAM Actions",
    leftPct: 40,
    leftTitle: "IN-FLIGHT START (DSC-70-80)",
    rightTitle: "DAMAGE OR NO DAMAGE?",
    image: img(499),
    imageAlt: "Damage criteria: no relight; no damage: consider relight at the STATUS page",
    sourceRef: src("DSC-70-80-40 Engine Starting System - Windmilling / DSC-70-80-30 Windmilling Quick Relight", 499),
    cards: [
      {
        heading: "Windmilling",
        paragraph:
          "For an in-flight start, the FADEC decides whether the engine is windmilling fast enough or needs assistance from the starter in view of current engine parameters and flight environment parameters. Flight crew may interrupt this start sequence by moving the ENG MASTER lever to OFF.",
      },
      {
        heading: "Windmilling quick relight",
        paragraph:
          "In case of inadvertent engine shutdown by cycling the Engine Master lever to OFF then ON, in the windmilling quick relight envelope, the FADEC will attempt automatically a relight regardless of the rotary selector position.",
      },
    ],
  },
  {
    comment: "SLIDE SOP-12.10: Securing the engine and engine-out acceleration altitude",
    eyebrow: EYEBROW,
    title: "12.10 Asegurar el motor y altitud de aceleración",
    subtitle: "Engine Failure after V1 · Acceleration",
    leftPct: 45,
    leftTitle: "PERF TAKE OFF PAGE (DSC-22_20)",
    rightTitle: "BEFORE EO ACC ALT",
    image: img(501),
    imageAlt: "Delay the acceleration to secure the engine; do not exceed the maximum EO acceleration altitude",
    sourceRef: src("DSC-22_20-50-10-25 PERF TAKE OFF Page", 501),
    cards: [
      {
        heading: "ENG OUT ACC",
        paragraph:
          "This field displays the engine-out acceleration altitude, as defined in the database, or is manually entered by the flight crew. This is for display only, as a reminder. It cannot be cleared.",
      },
      {
        heading: "THR RED / ACC",
        bullets: [
          "The thrust reduction altitude defaults to 1 500 ft above the runway elevation, or to the altitude set by the airline. The minimum is 400 ft above the runway elevation.",
          "ACC is the altitude at which the climb phase is triggered: the target speed jumps to the initial climb speed. The minimum value is 400 ft above runway elevation.",
        ],
      },
      {
        heading: "EO CLR",
        paragraph: "EO CLR is displayed when an engine-out is detected and when active flight phase is takeoff.",
      },
    ],
  },
  {
    comment: "SLIDE SOP-12.11: Thrust lever to MCT",
    eyebrow: EYEBROW,
    title: "12.11 Palanca a MCT",
    subtitle: "Engine Failure after V1 · Thrust Lever MCT",
    leftPct: 40,
    leftTitle: "LVR MCT · A/THR OEI (DSC-22_30)",
    rightTitle: "THRUST LEVER ……… MCT",
    image: img(502),
    imageAlt: "From the FLX detent, move the thrust lever to CL then back to MCT",
    sourceRef: src("DSC-22_30-50-30 A/THR Activation / DSC-22_30-50-30 LVR MCT", 502),
    cards: [
      {
        heading: "LVR MCT flashes on the FMA, when:",
        bullets: [
          "One engine is inoperative (OEI)",
          "The thrust lever of the operative engine is below the FLX-MCT detent, or the aircraft is above the thrust reduction altitude, and the thrust lever is above FLX-MCT",
          "The aircraft is above 100 ft and no windshear is detected.",
        ],
      },
      {
        heading: "A/THR active range (OEI)",
        paragraph:
          "One thrust lever is above the idle detent, and at or below FLX-MCT detent. If the engine-out occurs during a FLEX takeoff, the flight crew activates the A/THR by setting the thrust lever of the operative engine below FLX-MCT, then back to FLX-MCT. The thrust lever of the failed engine should be at the idle detent.",
      },
    ],
  },
  // ── D. Fallo de motor en crucero ─────────────────────────────────────────
  {
    comment: "SLIDE SOP-12.12: Engine failure in cruise initial actions",
    eyebrow: EYEBROW,
    title: "12.12 Fallo de motor en crucero: primeras acciones",
    subtitle: "Engine Failure in Cruise · Detection and Initial Actions",
    leftPct: 40,
    leftTitle: "CRZ PAGE (DSC-22_20)",
    rightTitle: "DETECTION AND INITIAL ACTIONS",
    image: img(506),
    imageAlt: "All thrust levers MCT, A/THR off, land ASAP, strategy determine, notify ATC",
    sourceRef: src("DSC-22_20-50-10-25 PERF CRZ Page / DSC-22_20-60-40 Engine Out", 506),
    cards: [
      {
        heading: "Cost index",
        paragraph: "EO LRC replaces automatically the cost index value in case of engine out.",
      },
      {
        heading: "Performance page",
        paragraph:
          "The system automatically calls up the current performance page, which has the EO CLR (engine-out clear) prompt displayed in the 1R field (except during takeoff, before the diversion point is reached).",
      },
    ],
  },
  {
    comment: "SLIDE SOP-12.13: Strategy determination and EO CLR",
    eyebrow: EYEBROW,
    title: "12.13 Elegir la estrategia",
    subtitle: "Engine Failure in Cruise · Strategy",
    leftPct: 40,
    leftTitle: "ENGINE OUT · EO CLR (DSC-22_20-60-40)",
    rightTitle: "STRATEGY ……… DETERMINE",
    image: img(507),
    imageAlt: "Standard, obstacle and fixed speed strategies; EO CLR restores all engines operative predictions",
    sourceRef: src("DSC-22_20-60-40 Engine Out", 507),
    cards: [
      {
        heading: "EO CLR",
        paragraph:
          "If the crew presses the EO CLR, the 2 engine predictions and performance will be restored. Reverting back to one engine-out performance is not possible, unless the system detects a new EO condition.",
      },
    ],
    alert: {
      level: "CAUTION",
      text: "The pilot should not press the EO CLR key, if an actual engine-out is detected.",
    },
  },
  {
    comment: "SLIDE SOP-12.14: Standard strategy and REC MAX",
    eyebrow: EYEBROW,
    title: "12.14 Estrategia estándar",
    subtitle: "Engine Failure in Cruise · Standard Strategy",
    leftPct: 40,
    leftTitle: "PROG PAGE · REC MAX (DSC-22_20)",
    rightTitle: "STANDARD STRATEGY",
    image: img(508),
    imageAlt: "REC MAX gives the EO LRC ceiling; M.78/300 kt and EO LRC ceiling altitude",
    sourceRef: src("DSC-22_20-50-10-25 PROG Page - REC MAX", 508),
    cards: [
      {
        heading: "REC MAX",
        bullets: [
          "This field displays the recommended maximum altitude (in magenta), that is computed based on the current gross weight and temperature, and assuming that the anti-ice is off (if icing conditions are expected, use the performance application of the EFB).",
          "If one engine is out, this field displays the recommended maximum engine-out altitude, that is computed based on the long-range cruise speed and assuming that anti-ice is off.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SOP-12.15: Obstacle strategy and drift down",
    eyebrow: EYEBROW,
    title: "12.15 Estrategia por obstáculos",
    subtitle: "Engine Failure in Cruise · Obstacle Strategy",
    leftPct: 40,
    leftTitle: "PERF CRZ PAGE (DSC-22_20)",
    rightTitle: "OBSTACLE STRATEGY",
    image: img(509),
    imageAlt: "Drift down ceiling on the PERF page; green dot speed and drift down ceiling altitude",
    sourceRef: src("DSC-22_20-50-10-25 PERF CRZ Page - Drift Down", 509),
    cards: [
      {
        heading: "STEP TO FL XX, DRIFT DOWN TO FL XX, or TO T/D",
        paragraph:
          "The field, in combination with 3R, displays the predictions for the step point and the step altitude, the drift down altitude, or the Top of Descent. The TIME/UTC and DIST field displays the time and distance to go to the various points.",
      },
      {
        heading: "Managed speed",
        paragraph:
          "The managed target speeds is immediately set to a value that depends upon the flight phase when the FMGS detects an engine-out condition.",
      },
    ],
  },
  {
    comment: "SLIDE SOP-12.16: Flight continuation and A/THR",
    eyebrow: EYEBROW,
    title: "12.16 Continuación del vuelo",
    subtitle: "Engine Failure in Cruise · Flight Continuation",
    leftPct: 40,
    leftTitle: "A/THR WITH ONE ENGINE (DSC-22_30-50-30)",
    rightTitle: "FLIGHT CONTINUATION",
    image: img(510),
    imageAlt: "V/S -500 ft/min, A/THR on, manage speed at the EO LRC ceiling",
    sourceRef: src("DSC-22_30-50-30 A/THR Activation", 510),
    cards: [
      {
        heading: "A/THR activation",
        bullets: [
          "The A/THR is armed, and the flight crew sets the thrust levers in the active range.",
          "OEI: one thrust lever is above the idle detent, and at or below FLX-MCT detent.",
          "The normal position of the thrust levers with A/THR active is the FLX-MCT detent for the operative engine (OEI). The thrust lever of a failed engine should be in the IDLE detent.",
        ],
      },
    ],
  },
  // ── E. Todos los motores parados ─────────────────────────────────────────
  {
    comment: "SLIDE SOP-12.17: All engine flameout overview and emergency generation",
    eyebrow: EYEBROW,
    title: "12.17 Todos los motores parados",
    subtitle: "All Engine Flameout · Overview",
    leftPct: 45,
    leftTitle: "EMERGENCY GENERATION (DSC-24-10-30-30)",
    rightTitle: "ALL ENGINE FLAMEOUT",
    image: img(443),
    imageAlt: "RAT deployment, alternate law, APU start at FL 250 and green dot with APU bleed at FL 200",
    sourceRef: src("DSC-24-10-30-30 Emergency Generation after Loss of All Main Generators", 443),
    cards: [
      {
        heading: "Loss of all main generators",
        bullets: [
          "If both AC BUS 1 and AC BUS 2 are lost and the aircraft speed is above 100 kt, the Ram Air Turbine (RAT) extends automatically. This powers the blue hydraulic system, which drives the emergency generator by means of a hydraulic motor.",
          "This generator supplies the AC ESS BUS, and the DC ESS BUS via the ESS TR.",
          "When the landing gear is down, the emergency generator is no longer powered, and the emergency generation network is automatically transferred to the batteries and the static inverter.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "During RAT extension and emergency generator coupling (about 8 s), the batteries power the emergency generation network.",
    },
  },
  {
    comment: "SLIDE SOP-12.18: Fly navigate communicate with emergency generator",
    eyebrow: EYEBROW,
    title: "12.18 Volar con el EMER GEN",
    subtitle: "All Engine Flameout · Fly, Navigate, Communicate",
    leftPct: 40,
    leftTitle: "EMER ELEC PWR PANEL (DSC-24-20)",
    rightTitle: "FLY · NAVIGATE · COMMUNICATE",
    image: img(444),
    imageAlt: "Available instruments with the emergency generator: PFD1, ND1, upper ECAM and standby instruments",
    sourceRef: src("DSC-24-20 Controls and Indicators - EMER ELEC PWR", 444),
    cards: [
      {
        heading: "RAT & EMER GEN MAN ON pb (guarded)",
        bullets: [
          "AUTO: when AC BUS 1 and AC BUS 2 are not electrically supplied and the aircraft speed is greater than 100 kt, the RAT extends and the blue hydraulic system drives the emergency generator.",
          "As soon as the emergency generator electrical parameters are within tolerance and the landing gear is up, the emergency generator is connected to the aircraft network.",
          "Pressed: this selects manual RAT extension. Emergency generator coupling occurs 3 s after the RAT supplies the emergency generator.",
        ],
      },
      {
        heading: "FAULT light",
        paragraph:
          "This light comes on red if the emergency generator is not supplying power when AC BUS 1 and AC BUS 2 are not powered with the landing gear up.",
      },
    ],
  },
  {
    comment: "SLIDE SOP-12.19: Engine relight and APU",
    eyebrow: EYEBROW,
    title: "12.19 Reencendido y APU",
    subtitle: "All Engine Flameout · Engine Relight",
    leftPct: 40,
    leftTitle: "APU (DSC-49 · LIM-APU)",
    rightTitle: "ENG RELIGHT",
    image: img(448),
    imageAlt: "Relight cycles: all ENG masters off, 30 s later on, check parameters, repeat",
    sourceRef: src("DSC-49 APU General / LIM-APU", 448),
    cards: [
      {
        heading: "APU starting",
        paragraph:
          "The APU may obtain power for starting from the aircraft's batteries or normal electrical system. APU starting is permitted throughout the normal flight envelope.",
      },
      {
        heading: "Limitations (LIM-APU)",
        bullets: [
          "After three consecutive APU start attempts, the flight crew must wait 60 min before a new start attempt.",
          "Maximum EGT for APU start: 1 090 °C below 35 000 ft, 1 120 °C above 35 000 ft.",
        ],
      },
    ],
  },
  // ── F. Aviso de baja energía ─────────────────────────────────────────────
  {
    comment: "SLIDE SOP-12.20: Low energy aural alert",
    eyebrow: EYEBROW,
    title: "12.20 Aviso de baja energía",
    subtitle: "Low Energy Aural Alert · SPEED SPEED SPEED",
    leftPct: 40,
    leftTitle: "LOW-ENERGY AURAL ALERT (DSC-22_40-30)",
    rightTitle: "LOW ENERGY AURAL ALERT",
    image: img(523),
    imageAlt: "SPEED SPEED SPEED: thrust increase, pitch adjust; availability and triggering conditions",
    sourceRef: src("DSC-22_40-30 Flight Envelope Function - Low-Energy Aural Alert", 523),
    cards: [
      {
        heading: "Principle",
        bullets: [
          "An aural low-energy \"SPEED SPEED SPEED\" alert, repeated every 5 s, warns the flight crew that the aircraft's energy level is going below a threshold under which the flight crew has to increase thrust, in order to regain a positive flight path angle through pitch control.",
          "The FAC computes the energy level with the following inputs: aircraft configuration, horizontal deceleration rate, flight path angle.",
          "The aural alert is also inhibited in alternate or direct law.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "During deceleration, the low-energy aural alert is triggered before alpha floor (unless alpha floor is triggered by stick deflection). The amount of time between the two alerts depends on the deceleration rate.",
    },
  },
];

export const MCC_SOP_12: MccLesson = {
  id: "a3200000-0000-0000-0000-000000000112",
  course_id: MCC_COURSE_ID,
  title: "SOP-12. Emergencias I: RTO, evacuación, fallo de motor, todos los motores parados y baja energía",
  slug: "sop-12-emergencias-i",
  sequence_order: 15,
  lesson_order: 15,
  min_seconds: mccMinSeconds(SOP_12_SLIDES.length, mccVideoSeconds(SOP_12_SLIDES)),
  module_title: MCC_MODULES.ABNORMAL_SOP,
  content_html: joinSlides(SOP_12_SLIDES),
};

export const SOP_12_SLIDE_COUNT = SOP_12_SLIDES.length;
