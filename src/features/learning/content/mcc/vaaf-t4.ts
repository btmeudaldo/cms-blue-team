/**
 * VAAF-T4 — UPRT II: técnicas de recuperación y actitudes extremas (0,75 h aprox.).
 *
 * Alcance: Curso APS MCC — Airbus A320ceo CFM56-5B (simulador Entrol A32).
 * Fuente: Airbus Tutorial PDP Jan 2024, Airplane Upset Prevention and Recovery Training: Airplane Upset Recovery
 * Techniques (p. 606–636) y Extreme Attitude Training (p. 637–671). Las láminas de la parte de entrenamiento muestran el
 * PFD con la respuesta; se usan las de respuesta (no las de "2 segundos"). Las láminas de solo texto se ilustran con
 * figuras ya publicadas (INT-01, SIS-05).
 * Sin repetir: AoA, régimen de vuelo y VA están en VAAF-T3.
 */
import { MCC_MODULES, joinSlides, mccMinSeconds, mccVideoSeconds, type MccLesson, type MccSlideSpec } from "./slide-builder.ts";

const MCC_COURSE_ID = "a3200000-0000-0000-0000-000000000320";
const IMG_BASE = "https://www.blueteam.es/elearning/media/mcc/pdp";
const EYEBROW = "APS MCC · A320 · VAAF-T4";

const upset = (page: number) => `${IMG_BASE}/p${page}_airplane_upset_recovery_techniques.webp`;
const extreme = (page: number) => `${IMG_BASE}/p${page}_extreme_attitude_training.webp`;
/** Figuras FCOM ya publicadas (misma URL y versión que en su lección). */
const sisFig = (name: string, version: number) => `${IMG_BASE}/fcom_a320_${name}.webp?v=${version}`;
const SIS5 = 1795637000;
const INT1 = 1795633000;
const src = (sections: string) => `Source: PDP Jan 2024 UPRT ${sections}`;

const NOSE_HIGH_ACTIONS = [
  "Recognize and confirm the situation",
  "Takeover and disconnect AP and A/THR (if required)",
  "Apply nose down pitch order",
  "Adjust the thrust",
  "Adjust the roll not to exceed 60 degrees",
  "Recover the level flight",
];
const NOSE_LOW_ACTIONS = [
  "Recognize and confirm the situation",
  "Takeover and disconnect AP and A/THR (if required)",
  "Recover from stall (if required)",
  "Adjust the roll in the shortest direction to wings level",
  "Adjust the thrust and the drag",
  "Recover the level flight",
];
const QUESTIONS = "Any stall? Energy state and rate of change? Airplane attitude: pitch and bank? Which actions for Nose High or Nose Low?";

const VAAF_T4_SLIDES: MccSlideSpec[] = [
  // ── A. Técnicas de recuperación ─────────────────────────────────────────
  {
    comment: "SLIDE VAAF-T4.1: Upset recovery techniques reminder (1)",
    eyebrow: EYEBROW,
    title: "4.1 Qué es un upset: reconocer y recuperar",
    subtitle: "UPRT · Upset Recovery Techniques – Reminder",
    leftPct: 55,
    leftTitle: "UPSET RECOVERY TECHNIQUES – REMINDER",
    rightTitle: "NOSE HIGH UPSET",
    image: upset(609),
    imageAlt: "PFD in a nose high upset with high bank angle",
    sourceRef: src("Upset Recovery Techniques p. 607"),
    cards: [
      {
        heading: "Airplane upset",
        bullets: [
          "An airplane upset is an undesired airplane state characterized by unintentional divergences from parameters normally experienced during operations. An upset condition exists any time an airplane is diverging from what the pilots are intending it to do.",
          "The first upset recovery actions must be effective and timely. Only engaged - and therefore situationally aware - pilots can effectively and timely recover from an upset.",
        ],
      },
      {
        heading: "Actions to recover from an upset encompass",
        bullets: [
          "1. Become situationally aware and analyze the situation (Recognition).",
          "2. Arrest the flight path divergence and recover to a stabilized flight path (Recovery).",
          "These activities must be part of every upset recovery.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE VAAF-T4.2: Upset recovery techniques reminder (2)",
    eyebrow: EYEBROW,
    title: "4.2 Principios de las técnicas de recuperación",
    subtitle: "UPRT · Upset Recovery Techniques – Reminder",
    leftPct: 55,
    leftTitle: "UPSET RECOVERY TECHNIQUES – REMINDER",
    rightTitle: "NOSE LOW UPSET",
    image: upset(623),
    imageAlt: "PFD in a nose low upset with high bank angle",
    sourceRef: src("Upset Recovery Techniques p. 608"),
    cards: [
      {
        heading: "Principles",
        bullets: [
          "All upset recovery techniques assume the airplane is NOT STALLED. When needed, RECOVER FROM STALL FIRST.",
          "The techniques represent a logical progression for recovering the airplane. They are not necessarily procedural. Not all actions may, or should, be necessary once recovery is underway.",
          "The Primary Flight Display (PFD) is the primary reference for recovery.",
          "Control inputs to counter a developing upset must be smooth, positive, and proportional to the amount and rate of pitch, roll, or yaw experienced.",
        ],
      },
    ],
    alert: { level: "CAUTION", text: "Exaggerated control inputs through reflex responses must be avoided." },
  },
  {
    comment: "SLIDE VAAF-T4.3: Nose high - recognize and take over",
    eyebrow: EYEBROW,
    title: "4.3 Morro alto: reconocer y tomar el control",
    subtitle: "UPRT · Upset Recovery Techniques – Nose High",
    leftPct: 55,
    leftTitle: "NOSE HIGH ACTIONS",
    rightTitle: "NOSE HIGH",
    image: upset(609),
    imageAlt: "PFD in a nose high upset",
    sourceRef: src("Upset Recovery Techniques – Nose High p. 610–613"),
    cards: [
      { heading: "Nose High Actions", bullets: NOSE_HIGH_ACTIONS },
      {
        heading: "Recognize and confirm the situation",
        bullets: [
          "Troubleshooting the cause of the upset is secondary to initiating the recovery. However, the pilot still must recognize and confirm the situation before a recovery can be initiated.",
          "Assess the energy: energy state and energy rate of change. Confirm the airplane attitude: pitch and bank angles. Announce: “NOSE HIGH”.",
          "If the AP and A/THR responses enable to stop the flight path divergence, the flight crew may keep the AP and A/THR engaged.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE VAAF-T4.4: Nose high - nose down pitch order",
    eyebrow: EYEBROW,
    title: "4.4 Morro alto: orden de picado",
    subtitle: "UPRT · Upset Recovery Techniques – Nose High",
    leftPct: 52,
    leftTitle: "APPLY NOSE DOWN PITCH ORDER",
    rightTitle: "SIDESTICK",
    image: sisFig("int_sidestick", INT1),
    imageAlt: "Sidestick",
    sourceRef: src("Upset Recovery Techniques – Nose High p. 614–615"),
    cards: [
      {
        heading: "Apply nose down pitch order",
        bullets: [
          "The flight crew must apply as much nose down pitch order as required to obtain a nose down pitch rate.",
          "In the case of lack of pitch down authority, the flight crew may use incremental inputs on the trim (nose down) to improve the effectiveness of the elevator control.",
        ],
      },
    ],
    alert: { level: "NOTE", text: "Excessive use of pitch trim may make the upset situation worse or may result in high structural loads." },
  },
  {
    comment: "SLIDE VAAF-T4.5: Nose high - adjust the thrust",
    eyebrow: EYEBROW,
    title: "4.5 Morro alto: ajustar el empuje",
    subtitle: "UPRT · Upset Recovery Techniques – Nose High",
    leftPct: 52,
    leftTitle: "ADJUST THE THRUST",
    rightTitle: "THRUST LEVERS",
    image: sisFig("sis5_thrust_levers", SIS5),
    imageAlt: "Thrust lever sector",
    sourceRef: src("Upset Recovery Techniques – Nose High p. 616–617"),
    cards: [
      {
        heading: "Adjust the thrust",
        bullets: [
          "Select up to maximum thrust available while ensuring adequate pitch control.",
          "Increasing thrust may reduce the effectiveness of nose-down pitch control: pitch up moment of underwing mounted engines.",
          "It may be necessary to limit or reduce thrust to the point where control of the pitch is achieved.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE VAAF-T4.6: Nose high - roll and level flight",
    eyebrow: EYEBROW,
    title: "4.6 Morro alto: alabeo máximo 60° y vuelo nivelado",
    subtitle: "UPRT · Upset Recovery Techniques – Nose High",
    leftPct: 45,
    leftTitle: "ADJUST THE ROLL · RECOVER THE LEVEL FLIGHT",
    rightTitle: "60 DEGREES MAXIMUM",
    image: upset(619),
    imageAlt: "Bank angle limited to 60 degrees maximum during a nose high recovery",
    sourceRef: src("Upset Recovery Techniques – Nose High p. 618–622"),
    cards: [
      {
        heading: "Adjust the roll not to exceed 60 degrees",
        bullets: [
          "If all normal pitch control techniques are unsuccessful, the flight crew can keep the current bank or bank the aircraft to enable the nose to drop toward the horizon.",
          "The bank angle should be the least possible to start the nose down and never exceed approximately 60 degrees. If the bank angle is already greater than 60 degrees, the flight crew should reduce it to an amount less than 60 degrees.",
        ],
      },
      {
        heading: "Recover the level flight",
        paragraph: "Recover to level flight at a sufficient airspeed while avoiding a stall due to premature recovery at low speed, or excessive g-loading at high speed.",
      },
    ],
  },
  {
    comment: "SLIDE VAAF-T4.7: Nose low - recognize and recover from stall",
    eyebrow: EYEBROW,
    title: "4.7 Morro bajo: reconocer y salir primero de la pérdida",
    subtitle: "UPRT · Upset Recovery Techniques – Nose Low",
    leftPct: 55,
    leftTitle: "NOSE LOW ACTIONS",
    rightTitle: "NOSE LOW",
    image: upset(623),
    imageAlt: "PFD in a nose low upset",
    sourceRef: src("Upset Recovery Techniques – Nose Low p. 624–629"),
    cards: [
      { heading: "Nose Low Actions", bullets: NOSE_LOW_ACTIONS },
      {
        heading: "Recognize · take over · recover from stall",
        bullets: [
          "Assess the energy: energy state and energy rate of change. Confirm the airplane attitude: pitch and bank angles. Announce: “NOSE LOW”.",
          "Even in a nose low situation, the aircraft may be stalled and it would be necessary to recover from a stall first.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE VAAF-T4.8: Nose low - roll, thrust and drag",
    eyebrow: EYEBROW,
    title: "4.8 Morro bajo: alas a nivel, empuje y resistencia",
    subtitle: "UPRT · Upset Recovery Techniques – Nose Low",
    leftPct: 45,
    leftTitle: "ADJUST THE ROLL · THRUST AND DRAG",
    rightTitle: "L OR R?",
    image: upset(631),
    imageAlt: "Nose low high bank: the bank angle indicator shows the shortest direction to wings level",
    sourceRef: src("Upset Recovery Techniques – Nose Low p. 630–636"),
    cards: [
      {
        heading: "Adjust the roll in the shortest direction to wings level",
        bullets: [
          "In general, a nose low, high-angle-of-bank requires prompt action, because the decreasing altitude is rapidly being exchanged for an increasing airspeed.",
          "The bank angle indicator will show you the shortest direction to wings level.",
        ],
      },
      {
        heading: "Adjust the thrust and the drag · recover the level flight",
        bullets: [
          "The flight crew should reduce the thrust and/or use the speedbrakes to control the speed.",
          "Recover to level flight at a sufficient airspeed while avoiding a stall due to premature recovery at low speed, or excessive g-loading at high speed.",
        ],
      },
    ],
  },

  // ── B. Extreme Attitude Training ───────────────────────────────────────
  {
    comment: "SLIDE VAAF-T4.9: Extreme attitude training aim and objectives",
    eyebrow: EYEBROW,
    title: "4.9 Entrenamiento en actitudes extremas",
    subtitle: "UPRT · Extreme Attitude Training",
    leftPct: 52,
    leftTitle: "AIM · OBJECTIVES",
    rightTitle: "EXTREME ATTITUDE",
    image: extreme(641),
    imageAlt: "PFD showing an extreme attitude to be recognized",
    sourceRef: src("Extreme Attitude Training p. 638–642"),
    cards: [
      { heading: "Aim", paragraph: "To reinforce 3D mental picture in order to recognize and confirm developed upset situations." },
      {
        heading: "Objectives",
        bullets: [
          "To rapidly observe PFDs in upset situations.",
          "To recognize stall conditions, if any.",
          "To assess the airplane energy state and energy rate of change.",
          "To confirm the airplane attitude: pitch and bank angles.",
          "To verbalize the situation (NOSE HIGH or NOSE LOW).",
          "To determine actions to be performed for an effective recovery.",
        ],
      },
    ],
    alert: { level: "NOTE", text: QUESTIONS },
  },
  {
    comment: "SLIDE VAAF-T4.10: Extreme attitude 1",
    eyebrow: EYEBROW,
    title: "4.10 Actitud extrema 1: morro bajo",
    subtitle: "UPRT · Extreme Attitude Training",
    leftPct: 38,
    leftTitle: "NOSE LOW ACTIONS",
    rightTitle: "EXTREME ATTITUDE 1",
    image: extreme(643),
    imageAlt: "PFD nose low attitude with the recovery actions",
    sourceRef: src("Extreme Attitude Training p. 641–643"),
    cards: [
      { heading: "Answer", bullets: ["Adjust the thrust and the drag, if necessary.", "Recover the level flight."] },
    ],
    alert: { level: "NOTE", text: QUESTIONS },
  },
  {
    comment: "SLIDE VAAF-T4.11: Extreme attitude 2",
    eyebrow: EYEBROW,
    title: "4.11 Actitud extrema 2: morro alto",
    subtitle: "UPRT · Extreme Attitude Training",
    leftPct: 38,
    leftTitle: "NOSE HIGH ACTIONS",
    rightTitle: "EXTREME ATTITUDE 2",
    image: extreme(647),
    imageAlt: "PFD nose high attitude with the recovery actions",
    sourceRef: src("Extreme Attitude Training p. 645–647"),
    cards: [
      {
        heading: "Answer",
        bullets: [
          "Apply nose down pitch order.",
          "Adjust the thrust.",
          "If all normal pitch control techniques are unsuccessful, adjust the roll not to exceed 60º.",
          "Recover the level flight.",
        ],
      },
    ],
    alert: { level: "NOTE", text: QUESTIONS },
  },
  {
    comment: "SLIDE VAAF-T4.12: Extreme attitude 3",
    eyebrow: EYEBROW,
    title: "4.12 Actitud extrema 3: morro bajo con V/S negativa",
    subtitle: "UPRT · Extreme Attitude Training",
    leftPct: 38,
    leftTitle: "NOSE LOW ACTIONS (V/S IS NEGATIVE)",
    rightTitle: "EXTREME ATTITUDE 3",
    image: extreme(651),
    imageAlt: "PFD attitude with negative vertical speed and the recovery actions",
    sourceRef: src("Extreme Attitude Training p. 649–651"),
    cards: [
      {
        heading: "Answer",
        bullets: ["Adjust the roll to the right to wings level.", "Adjust the thrust, if necessary.", "Recover the level flight."],
      },
    ],
    alert: { level: "NOTE", text: QUESTIONS },
  },
  {
    comment: "SLIDE VAAF-T4.13: Extreme attitude 4",
    eyebrow: EYEBROW,
    title: "4.13 Actitud extrema 4: morro bajo, alabeo a la izquierda",
    subtitle: "UPRT · Extreme Attitude Training",
    leftPct: 38,
    leftTitle: "NOSE LOW ACTIONS",
    rightTitle: "EXTREME ATTITUDE 4",
    image: extreme(655),
    imageAlt: "PFD nose low attitude with high bank and the recovery actions",
    sourceRef: src("Extreme Attitude Training p. 653–655"),
    cards: [
      {
        heading: "Answer",
        bullets: [
          "Roll to the left to wings level.",
          "Adjust the thrust and/or the drag, if necessary.",
          "Recover the level flight avoiding excessive g-loading.",
        ],
      },
    ],
    alert: { level: "NOTE", text: QUESTIONS },
  },
  {
    comment: "SLIDE VAAF-T4.14: Extreme attitude 5",
    eyebrow: EYEBROW,
    title: "4.14 Actitud extrema 5: morro alto con alabeo",
    subtitle: "UPRT · Extreme Attitude Training",
    leftPct: 38,
    leftTitle: "NOSE HIGH ACTIONS",
    rightTitle: "EXTREME ATTITUDE 5",
    image: extreme(659),
    imageAlt: "PFD nose high attitude with bank and the recovery actions",
    sourceRef: src("Extreme Attitude Training p. 657–659"),
    cards: [
      {
        heading: "Answer",
        bullets: ["Apply nose down pitch order.", "Adjust the thrust.", "Reduce the roll not to exceed 60º.", "Recover the level flight."],
      },
    ],
    alert: { level: "NOTE", text: QUESTIONS },
  },
  {
    comment: "SLIDE VAAF-T4.15: Extreme attitude 6",
    eyebrow: EYEBROW,
    title: "4.15 Actitud extrema 6: morro bajo, alabeo a la derecha",
    subtitle: "UPRT · Extreme Attitude Training",
    leftPct: 38,
    leftTitle: "NOSE LOW ACTIONS",
    rightTitle: "EXTREME ATTITUDE 6",
    image: extreme(663),
    imageAlt: "PFD nose low attitude with high speed and the recovery actions",
    sourceRef: src("Extreme Attitude Training p. 661–663"),
    cards: [
      {
        heading: "Answer",
        bullets: ["Roll to the right to wings level.", "Adjust the thrust and the drag.", "Recover the level flight avoiding excessive g-loading."],
      },
    ],
    alert: { level: "NOTE", text: QUESTIONS },
  },
  {
    comment: "SLIDE VAAF-T4.16: Extreme attitude 7 - stall",
    eyebrow: EYEBROW,
    title: "4.16 Actitud extrema 7: pérdida con alabeo",
    subtitle: "UPRT · Extreme Attitude Training",
    leftPct: 40,
    leftTitle: "STALL RECOVERY",
    rightTitle: "EXTREME ATTITUDE 7",
    image: extreme(667),
    imageAlt: "PFD stall condition with bank and the stall recovery actions",
    sourceRef: src("Extreme Attitude Training p. 665–667"),
    cards: [
      {
        heading: "Stall recovery",
        bullets: [
          "Apply nose down pitch order (reduce the AOA and unload). In the case of lack of pitch down authority, reducing thrust may be necessary.",
          "Simultaneously, bank to left to wings level.",
          "When out of stall: apply the appropriate upset recovery technique.",
        ],
      },
    ],
    alert: { level: "NOTE", text: QUESTIONS },
  },
  {
    comment: "SLIDE VAAF-T4.17: Extreme attitude 8 - stall",
    eyebrow: EYEBROW,
    title: "4.17 Actitud extrema 8: pérdida a baja velocidad",
    subtitle: "UPRT · Extreme Attitude Training",
    leftPct: 40,
    leftTitle: "STALL RECOVERY",
    rightTitle: "EXTREME ATTITUDE 8",
    image: extreme(671),
    imageAlt: "PFD stall condition at low speed and the stall recovery actions",
    sourceRef: src("Extreme Attitude Training p. 669–671"),
    cards: [
      {
        heading: "Stall recovery",
        bullets: ["Apply nose down pitch order (reduce the AOA).", "Bank to the right to wings level."],
      },
      {
        heading: "When out of stall",
        bullets: [
          "Increase the thrust smoothly as needed.",
          "Check speed brakes retracted.",
          "Recover smoothly the level flight avoiding a stall due to premature recovery at low speed.",
          "Select FLAPS 1, if speed is still lower than VFE Next.",
        ],
      },
    ],
  },
];

export const MCC_VAAF_T4: MccLesson = {
  id: "a3200000-0000-0000-0000-000000000404",
  course_id: MCC_COURSE_ID,
  title: "VAAF-T4. UPRT II: técnicas de recuperación y actitudes extremas",
  slug: "vaaf-t4-uprt-recuperacion-actitudes-extremas",
  sequence_order: 27,
  lesson_order: 27,
  min_seconds: mccMinSeconds(VAAF_T4_SLIDES.length, mccVideoSeconds(VAAF_T4_SLIDES)),
  module_title: MCC_MODULES.VAAF,
  content_html: joinSlides(VAAF_T4_SLIDES),
};

export const VAAF_T4_SLIDE_COUNT = VAAF_T4_SLIDES.length;
