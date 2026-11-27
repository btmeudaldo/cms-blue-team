/**
 * VAAF-T3 — UPRT I: monitorización activa, leyes de mandos y aerodinámica (40 min · 0,67 h).
 *
 * Alcance: Curso APS MCC — Airbus A320ceo CFM56-5B (simulador Entrol A32).
 * Fuente: Airbus Tutorial PDP Jan 2024, Airplane Upset Prevention and Recovery Training: Elements of Active Monitoring
 * (p. 564–572), A320 Flight Control Laws - Summary (p. 573–577) y Elements of Aerodynamics (p. 578–605). Solo la figura
 * de VA del A320 (p. 600); las de otros tipos no se usan. Las láminas de monitorización y de leyes de mandos son solo
 * texto, así que esas diapositivas reutilizan figuras FCOM ya publicadas en SIS-01, SIS-04, SIS-06 e INT-01.
 * Sin repetir: las leyes y protecciones en detalle están en INT-01 y SIS-04; la recuperación, en VAAF-T4.
 */
import { MCC_MODULES, joinSlides, mccMinSeconds, mccVideoSeconds, type MccLesson, type MccSlideSpec } from "./slide-builder.ts";

const MCC_COURSE_ID = "a3200000-0000-0000-0000-000000000320";
const IMG_BASE = "https://www.blueteam.es/elearning/media/mcc/pdp";
const EYEBROW = "APS MCC · A320 · VAAF-T3";

/** Láminas del PDP (capítulo Elements of Aerodynamics). */
const aero = (page: number) => `${IMG_BASE}/p${page}_elements_of_aerodynamics.webp`;
/** Figuras FCOM ya publicadas (misma URL y versión que en su lección). */
const sisFig = (name: string, version: number) => `${IMG_BASE}/fcom_a320_${name}.webp?v=${version}`;
const SIS1 = 1795630001;
const SIS4 = 1795636001;
const SIS6 = 1795638001;
const INT1 = 1795633000;
const src = (sections: string) => `Source: PDP Jan 2024 UPRT ${sections}`;

const VAAF_T3_SLIDES: MccSlideSpec[] = [
  // ── A. Monitorización activa ────────────────────────────────────────────
  {
    comment: "SLIDE VAAF-T3.1: Active monitoring",
    eyebrow: EYEBROW,
    title: "3.1 Monitorización activa",
    subtitle: "UPRT · Elements of Active Monitoring",
    leftPct: 55,
    leftTitle: "ACTIVE MONITORING",
    rightTitle: "PFD",
    image: sisFig("sis_pfd_attitude", SIS1),
    imageAlt: "PFD attitude indication",
    sourceRef: src("Elements of Active Monitoring p. 565"),
    cards: [
      {
        heading: "Why active monitoring",
        bullets: [
          "Pilots must preventively be always situationally aware. An engaged pilot will be ready to intercept, and so recognize, timely and effectively an unintentional airplane divergence.",
          "Active monitoring is the critical element to ensure awareness and avoidance of undesired airplane states.",
          "Active monitoring provides the strongest countermeasure against startle effect.",
          "Active monitoring has some human barriers: complacency, fatigue, time pressure, mental workload, lack of vigilance, looking without seeing, poor workload management… but its performance can significantly be improved.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE VAAF-T3.2: What active monitoring means",
    eyebrow: EYEBROW,
    title: "3.2 Qué vigilar: entorno, energía y trayectoria",
    subtitle: "UPRT · Elements of Active Monitoring",
    leftPct: 55,
    leftTitle: "ACTIVE MONITORING",
    rightTitle: "PFD AIRSPEED SCALE",
    image: sisFig("sis_pfd_airspeed", SIS1),
    imageAlt: "PFD airspeed scale with speed trend and limits",
    sourceRef: src("Elements of Active Monitoring p. 566"),
    cards: [
      {
        heading: "Responsibility of all crew members",
        bullets: [
          "Active monitoring is the responsibility of all crew members. The purpose is to ensure that the airplane state is understood and correct for the situation.",
          "Active monitoring mitigates complacency and, therefore, helps preventing undesired aircraft states (UAS).",
        ],
      },
      {
        heading: "Active monitoring means keeping track of",
        bullets: ["The environment.", "The airplane's energy state.", "The flight path."],
      },
    ],
    alert: {
      level: "NOTE",
      text: "Active monitoring creates expectations about future airplane state. This will help in detecting deviations and to take timely corrective actions.",
    },
  },
  {
    comment: "SLIDE VAAF-T3.3: Observable behaviors - procedures and flight path management",
    eyebrow: EYEBROW,
    title: "3.3 Conductas observables: procedimientos y gestión de la trayectoria",
    subtitle: "UPRT · Review of observable behaviors for monitoring",
    leftPct: 60,
    leftTitle: "COMPETENCY · OBSERVABLE BEHAVIORS",
    rightTitle: "SIDESTICK",
    image: sisFig("int_sidestick", INT1),
    imageAlt: "Sidestick and its priority pushbutton",
    sourceRef: src("Elements of Active Monitoring p. 567–569"),
    cards: [],
    table: {
      headers: ["Competency", "Observable behaviors (monitoring)"],
      rows: [
        ["Application of Procedures & Compliance with Regulations (PRO)", "Follows SOPs unless a higher degree of safety dictates an appropriate deviation. Monitors aircraft systems status."],
        ["Airplane flight path management, automation (FPA)", "Monitors and detects deviations from the desired aircraft trajectory and takes appropriate action. Effectively monitors automation, including engagement and automatic mode transitions."],
        ["Airplane flight path management, manual control (FPM)", "Controls the aircraft manually with accuracy and smoothness. Manually controls the aeroplane using the relationship between aeroplane attitude, speed and thrust."],
      ],
    },
  },
  {
    comment: "SLIDE VAAF-T3.4: Observable behaviors - decision making, situation awareness and workload",
    eyebrow: EYEBROW,
    title: "3.4 Conductas observables: decisión, conciencia situacional y carga de trabajo",
    subtitle: "UPRT · Review of observable behaviors for monitoring",
    leftPct: 60,
    leftTitle: "COMPETENCY · OBSERVABLE BEHAVIORS",
    rightTitle: "ECAM DISPLAYS",
    image: sisFig("sis_ecam_du_arrangement", SIS1),
    imageAlt: "Arrangement of the cockpit display units",
    sourceRef: src("Elements of Active Monitoring p. 570–572"),
    cards: [],
    table: {
      headers: ["Competency", "Observable behaviors (monitoring)"],
      rows: [
        ["Problem Solving - Decision Making (PSD)", "Identifies, assesses and manages threats and errors in a timely manner. Monitors, reviews and adapts decisions as required. Demonstrates resilience when encountering an unexpected event."],
        ["Situation awareness & management of information (SAW)", "Monitors and assesses the state of the aircraft and its systems, the aeroplane’s energy state and its anticipated flight path, and the general environment. Validates the accuracy of information and checks for gross errors."],
        ["Workload management (WLM)", "Plans, prioritises and schedules appropriate tasks effectively. Monitors, reviews and cross-checks actions conscientiously. Manages and recovers from interruptions, distractions, variations and failures effectively."],
      ],
    },
  },

  // ── B. Leyes de mandos ──────────────────────────────────────────────────
  {
    comment: "SLIDE VAAF-T3.5: Practical advices",
    eyebrow: EYEBROW,
    title: "3.5 Pilotaje con sidestick: consejos prácticos",
    subtitle: "UPRT · A320 Flight Control Laws - Summary",
    leftPct: 55,
    leftTitle: "PRACTICAL ADVICES",
    rightTitle: "NORMAL LAW",
    image: sisFig("int_fctl_normal_law", INT1),
    imageAlt: "Normal law: pitch and roll control principles",
    sourceRef: src("A320 Flight Control Laws - Summary p. 574"),
    cards: [
      {
        heading: "Practical advices",
        bullets: [
          "Pay attention to the setting of your seat position and adjust your armrest carefully.",
          "Longitudinal control: G-load demand and automatic pitch trim provide longitudinal stability.",
          "Lateral control: rate of roll demand, automatic turn coordination and Dutch roll damping provide lateral stability.",
          "You only need to perform minor corrections on the sidestick when the aircraft deviates from its intended flight path.",
          "When you sense an over control, you should set the sidestick to the neutral position.",
        ],
      },
    ],
    alert: {
      level: "CAUTION",
      text: "Aggressive and opposite flight control inputs must not be applied. Such inputs can lead to loads higher than the limit, and can result in structural damage or failure.",
    },
  },
  {
    comment: "SLIDE VAAF-T3.6: Use of rudder",
    eyebrow: EYEBROW,
    title: "3.6 Uso del timón de dirección",
    subtitle: "UPRT · A320 Flight Control Laws - Summary",
    leftPct: 50,
    leftTitle: "USE OF RUDDER",
    rightTitle: "FLIGHT CONTROLS",
    image: sisFig("sis4_fctl_general", SIS4),
    imageAlt: "Flight control surfaces",
    sourceRef: src("A320 Flight Control Laws - Summary p. 575"),
    cards: [
      {
        heading: "The rudder should not be used",
        bullets: [
          "To induce roll.",
          "To counter roll induced by any type of turbulence.",
          "To complement the flight control laws for turn coordination and Dutch roll damping.",
        ],
      },
      {
        heading: "Rudder is used only during",
        bullets: [
          "Crosswind operations (takeoff roll, flare, landing roll).",
          "Asymmetric thrust (yaw moment compensations).",
          "Loss of both yaw damper systems; rudder trim runaway.",
          "Landing with abnormal landing gear position.",
          "Lack of roll efficiency in the case of severe damage.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE VAAF-T3.7: Flight control laws summary",
    eyebrow: EYEBROW,
    title: "3.7 Resumen de leyes de mandos",
    subtitle: "UPRT · A320 Flight Control Laws - Summary",
    leftPct: 60,
    leftTitle: "FLIGHT CONTROL LAWS - SUMMARY",
    rightTitle: "RECONFIGURATION",
    image: sisFig("int_fctl_reconfig", INT1),
    imageAlt: "Flight control law reconfiguration from normal to alternate and direct law",
    sourceRef: src("A320 Flight Control Laws - Summary p. 576"),
    cards: [],
    table: {
      headers: ["Axis", "Normal Law", "Alternate Law", "Direct Law"],
      rows: [
        ["Pitch", "G-load demand with auto-trim and full envelope protections", "G-load demand with auto-trim and with (or without) reduced protections", "Direct law (no auto-trim)"],
        ["Roll", "Roll rate demand with protection", "Direct law without protection", "Direct law"],
        ["Yaw", "Mechanical control with automatic turn coordination and yaw oscillations damping", "Mechanical control with yaw oscillations damping only", "Mechanical control (turn coordination and yaw damping lost)"],
      ],
    },
  },
  {
    comment: "SLIDE VAAF-T3.8: Abnormal attitude law",
    eyebrow: EYEBROW,
    title: "3.8 Ley de actitud anormal",
    subtitle: "UPRT · A320 Flight Control Laws - Summary",
    leftPct: 58,
    leftTitle: "ABNORMAL ATTITUDE LAW · DUE TO EXTREME VALUES IN PITCH, BANK, ANGLE OF ATTACK OR SPEED",
    rightTitle: "PROTECTIONS",
    image: sisFig("int_fctl_protections", INT1),
    imageAlt: "Normal law flight envelope protections",
    sourceRef: src("A320 Flight Control Laws - Summary p. 577"),
    cards: [],
    table: {
      headers: ["Axis", "Abnormal attitude law", "After recovery"],
      rows: [
        ["Pitch", "G-load demand without auto-trim and without protections (except g-load)", "G-load demand with auto-trim and without protections (except g-load)"],
        ["Roll", "Direct law", "Direct law"],
        ["Yaw", "Mechanical control (turn coordination and yaw damping lost)", "Mechanical control (turn coordination and yaw damping lost)"],
      ],
    },
  },

  // ── C. Aerodinámica ─────────────────────────────────────────────────────
  {
    comment: "SLIDE VAAF-T3.9: Angle of attack - stall awareness",
    eyebrow: EYEBROW,
    title: "3.9 Ángulo de ataque: pitch, FPA y AoA",
    subtitle: "UPRT · Elements of Aerodynamics · The Angle of Attack",
    leftPct: 42,
    leftTitle: "THE ANGLE OF ATTACK",
    rightTitle: "STALL AWARENESS",
    image: aero(580),
    imageAlt: "Stall awareness: pitch, flight path angle and angle of attack relative to the relative wind and chord line",
    sourceRef: src("Elements of Aerodynamics p. 580"),
    cards: [
      {
        heading: "Stall awareness",
        bullets: [
          "Angle of Attack (AoA) is the angle between the wing chord line and the relative wind (Vw).",
          "Pitch is the angle between the chord line and the horizon; Flight Path Angle (FPA) is the angle between the flight path and the horizon (Pitch = FPA + AoA).",
          "Example on the PFD: PITCH +13°, FPA +08°, AOA +05°.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE VAAF-T3.10: Stall is only an AOA problem",
    eyebrow: EYEBROW,
    title: "3.10 La pérdida es un problema de ángulo de ataque",
    subtitle: "UPRT · Elements of Aerodynamics · The Angle of Attack",
    leftPct: 42,
    leftTitle: "STALL > THE ANGLE OF ATTACK",
    rightTitle: "STALL",
    image: aero(581),
    imageAlt: "Airflow separation at high angle of attack: stall is only an AOA problem",
    sourceRef: src("Elements of Aerodynamics p. 581"),
    cards: [
      {
        heading: "Stall",
        paragraph: "Stall is only an AOA problem, and not directly a speed problem.",
        bullets: [
          "A wing stalls whenever airflow separates from the upper surface upon exceeding the critical angle of attack, regardless of airspeed or pitch attitude.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE VAAF-T3.11: Critical angle of attack",
    eyebrow: EYEBROW,
    title: "3.11 Ángulo de ataque crítico y recuperación",
    subtitle: "UPRT · Elements of Aerodynamics · The Angle of Attack",
    leftPct: 38,
    leftTitle: "STALL RECOVERY > REDUCING THE ANGLE OF ATTACK",
    rightTitle: "CL VERSUS AOA",
    image: aero(582),
    imageAlt: "Lift coefficient versus angle of attack with the critical AoA, at any airspeed and attitude",
    sourceRef: src("Elements of Aerodynamics p. 582–583"),
    cards: [
      {
        heading: "Stall recovery",
        bullets: [
          "When you exceed the critical angle of attack, the wing will stall regardless of airspeed, attitude or wing shape.",
          "Stall recovery: reducing the angle of attack.",
        ],
      },
    ],
    alert: { level: "CAUTION", text: "Altitude loss must be accepted." },
  },
  {
    comment: "SLIDE VAAF-T3.12: Recommended maximum altitude",
    eyebrow: EYEBROW,
    title: "3.12 Altitud máxima recomendada",
    subtitle: "UPRT · Elements of Aerodynamics · The Recommended Maximum Altitude",
    leftPct: 55,
    leftTitle: "THE RECOMMENDED MAXIMUM ALTITUDE",
    rightTitle: "PROG PAGE · REC MAX",
    image: sisFig("sis6_prog", SIS6),
    imageAlt: "MCDU PROG page with CRZ, OPT and REC MAX flight levels",
    sourceRef: src("Elements of Aerodynamics p. 585–586"),
    cards: [
      {
        heading: "PROG page",
        bullets: [
          "The recommended maximum altitude is continuously updated in flight and based on the current gross weight and outside air temperature.",
          "It provides the aircraft with a 0.3 g buffet margin, a minimum rate of climb at MAX CL thrust, and level flight at MAX CRZ thrust.",
          "It is limited to the maximum operating altitude (flight envelope).",
        ],
      },
      {
        heading: "At the maximum altitude",
        bullets: [
          "Some margins are reaching their required minimum in terms of thrust, airspeed, buffet threshold, angle of attack, and bank angle, or any other maneuvers.",
          "Any environmental factors such as icing conditions or turbulence could rapidly lead to a slowdown, a buffet onset, a stall condition and, subsequently, a high altitude upset.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "Any increase of outside air temperature during a flight at the maximum altitude shall be monitored as the performances will be impacted.",
    },
  },
  {
    comment: "SLIDE VAAF-T3.13: Power-drag curve - front side",
    eyebrow: EYEBROW,
    title: "3.13 Curva potencia-resistencia: primer régimen",
    subtitle: "UPRT · Elements of Aerodynamics · Power-Drag Curve and Airspeed Stability",
    leftPct: 38,
    leftTitle: "NORMAL FLIGHT · FIRST REGIME",
    rightTitle: "SPEED STABILITY",
    image: aero(592),
    imageAlt: "Drag/thrust versus airspeed on the front side of the power-drag curve: speed stability",
    sourceRef: src("Elements of Aerodynamics p. 588–592"),
    cards: [
      {
        heading: "Front side of the Power-Drag curve",
        bullets: [
          "L/D MAX (minimum drag speed) corresponds to green dot.",
          "Normal flight, “Front side of the Power-Drag curve”, or “First regime”.",
          "A sudden airspeed increase (or decrease) leads to a drag increase (or decrease), helping to return to the initial airspeed.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE VAAF-T3.14: Power-drag curve - back side",
    eyebrow: EYEBROW,
    title: "3.14 Curva potencia-resistencia: segundo régimen",
    subtitle: "UPRT · Elements of Aerodynamics · Power-Drag Curve and Airspeed Stability",
    leftPct: 38,
    leftTitle: "SLOW FLIGHT · SECOND REGIME",
    rightTitle: "SPEED INSTABILITY · SPEED STABILITY",
    image: aero(595),
    imageAlt: "Power-drag curve: speed instability below green dot (second regime) and speed stability above (first regime)",
    sourceRef: src("Elements of Aerodynamics p. 593–595"),
    cards: [
      {
        heading: "Backside of the Power-Drag curve",
        bullets: [
          "Slow flight, “Backside of the Power-Drag curve”, or “second regime”.",
          "A sudden airspeed decrease (or increase) leads to a drag increase (or decrease), pushing the aircraft to decelerate (accelerate) further.",
          "Speed instability below L/D MAX (minimum drag speed, green dot); speed stability above it.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE VAAF-T3.15: Maximum design maneuvering speed VA",
    eyebrow: EYEBROW,
    title: "3.15 Velocidad máxima de maniobra de diseño (VA)",
    subtitle: "UPRT · Elements of Aerodynamics · Maximum Design Maneuvering Speed",
    leftPct: 45,
    leftTitle: "MAXIMUM DESIGN MANEUVERING SPEED - VA",
    rightTitle: "A320 - VA",
    image: aero(600),
    imageAlt: "A320 VA as a function of pressure altitude and IAS, limited by M 0.78",
    sourceRef: src("Elements of Aerodynamics p. 596–600"),
    cards: [
      {
        heading: "VA",
        bullets: [
          "Speed above which a single full deflection of any flight control surface should not be attempted due to a risk of damage to the airplane structure.",
          "This limitation only applies in alternate or direct flight control laws.",
        ],
      },
    ],
    alert: {
      level: "CAUTION",
      text: "Rapid and large reversal control inputs, with large changes in pitch, roll or yaw, may result in loads higher than the limit and structural failures at any speed, even below VA. In the event of such rudder inputs, the rudder travel limiter does not prevent structural damage or failure.",
    },
  },
];

export const MCC_VAAF_T3: MccLesson = {
  id: "a3200000-0000-0000-0000-000000000403",
  course_id: MCC_COURSE_ID,
  title: "VAAF-T3. UPRT I: monitorización activa, leyes de mandos y aerodinámica",
  slug: "vaaf-t3-uprt-monitorizacion-aerodinamica",
  sequence_order: 26,
  lesson_order: 26,
  min_seconds: mccMinSeconds(VAAF_T3_SLIDES.length, mccVideoSeconds(VAAF_T3_SLIDES)),
  module_title: MCC_MODULES.VAAF,
  content_html: joinSlides(VAAF_T3_SLIDES),
};

export const VAAF_T3_SLIDE_COUNT = VAAF_T3_SLIDES.length;
