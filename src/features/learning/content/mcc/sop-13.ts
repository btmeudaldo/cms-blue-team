/**
 * SOP-13 — Emergencias II: descenso de emergencia, humo, incapacitación, fallo de FMGC, leyes de mandos y
 * velocidad poco fiable (0,75 h).
 *
 * Alcance: Curso APS MCC — Airbus A320ceo CFM56-5B (simulador Entrol A32).
 * Fuentes: Airbus Tutorial PDP Jan 2024 — Abnormal and Emergency Procedures: Dual FMGC Failure (págs.
 * 451–460), Emergency Descent (483–491), Flight Control Laws (512–515), Flight Crew Incapacitation
 * (516–521), Smoke (534–540) y Unreliable Speed Indication (557–563); FCOM A320 DSC-22_10-30,
 * DSC-22_20-90-10, DSC-24-10-30-30, DSC-26-30-10, DSC-27-20-20, DSC-27-20-30, DSC-34-NAV-10-20,
 * DSC-35 y LIM-AG-SPD.
 *
 * Criterio de redacción: la columna izquierda NO repite el texto de la lámina de la derecha; aporta la
 * información complementaria del FCOM en inglés y literal, solo de bloques aplicables a la variante
 * A320ceo CFM56-5B (grupo EC-ILQ).
 * La variante de referencia no lleva BUSS ni NAV B/UP en el MCDU: no se usan las págs. 454, 458, 460 y
 * 563, y en p559 se ha tapado la línea "use reversible BUSS (if installed)". En p540 se ha aplanado la
 * franja de ruido del efecto de animación del PDF.
 * Láminas no usadas: portadas 451, 483, 512, 516 y 534; 491 y 513 (ya en SOP-02 y SOP-09); 535 y 539
 * (texto de otros tipos); resto, texto redundante.
 * Arquitectura: docs/mcc/08_ARQUITECTURA_PDP.md.
 */
import { joinSlides, type MccLesson, type MccSlideSpec } from "./slide-builder.ts";

const MCC_COURSE_ID = "a3200000-0000-0000-0000-000000000320";
const PDP_IMG = "https://www.blueteam.es/elearning/media/mcc/pdp";
const EYEBROW = "APS MCC · A320 · SOP-13";

/** Versión común de caché para las láminas de esta lección (pie recortado). */
const IMG_VERSION = 1795628000;
const chapter = (page: number) =>
  page <= 460
    ? "dual_fmgc_failure"
    : page <= 491
      ? "emergency_descent"
      : page <= 515
        ? "flight_control_laws"
        : page <= 521
          ? "flight_crew_incapacitation"
          : page <= 540
            ? "smoke"
            : "unreliable_speed_indication";
const CHAPTER_NAME: Record<string, string> = {
  dual_fmgc_failure: "Dual FMGC Failure",
  emergency_descent: "Emergency Descent",
  flight_control_laws: "Flight Control Laws",
  flight_crew_incapacitation: "Flight Crew Incapacitation",
  smoke: "Smoke",
  unreliable_speed_indication: "Unreliable Speed Indication",
};
const img = (page: number) => `${PDP_IMG}/p${String(page).padStart(3, "0")}_${chapter(page)}.webp?v=${IMG_VERSION}`;
const src = (sections: string, page: number) =>
  `Source: FCOM A320 ${sections} & Airbus Tutorial PDP Jan 2024 — ${CHAPTER_NAME[chapter(page)]} (p.${page})`;

const SOP_13_SLIDES: MccSlideSpec[] = [
  // ── A. Descenso de emergencia ────────────────────────────────────────────
  {
    comment: "SLIDE SOP-13.1: Emergency descent protect and passenger oxygen",
    eyebrow: EYEBROW,
    title: "13.1 Descenso de emergencia: protegerse",
    subtitle: "Emergency Descent · Protect",
    leftPct: 40,
    leftTitle: "PASSENGER OXYGEN (DSC-35-30-20)",
    rightTitle: "PROTECT",
    image: img(484),
    imageAlt: "Memory item: crew oxygen masks on, communication established, all signs on",
    sourceRef: src("DSC-35-30-20 Passenger Oxygen - Overhead Panel", 484),
    cards: [
      {
        heading: "MASK MAN ON pb",
        bullets: [
          "The guard keeps this button in the AUTO position.",
          "AUTO: The mask doors open automatically, when the cabin altitude exceeds 14 000 ft.",
          "Pressed: The mask doors open.",
        ],
      },
      {
        heading: "PASSENGER SYS ON light",
        paragraph:
          "This light comes on in white, when the control for the oxygen mask doors is activated, and it remains on until the TMR RESET pb is pressed.",
      },
    ],
  },
  {
    comment: "SLIDE SOP-13.2: Emergency descent speed and structural damage",
    eyebrow: EYEBROW,
    title: "13.2 Velocidad y daño estructural",
    subtitle: "Emergency Descent · Speed",
    leftPct: 40,
    leftTitle: "VMO / MMO (LIM-AG-SPD · DSC-27)",
    rightTitle: "SPEED ……… MAX OR APPROPRIATE",
    image: img(488),
    imageAlt: "No structural damage: MMO/VMO; damage suspected: press SPD/MACH and reduce speed",
    sourceRef: src("LIM-AG-SPD Maximum Operating Speed / DSC-27-20-10-20 High Speed Protection", 488),
    cards: [],
    table: {
      headers: ["Maximum operating speed", "Value"],
      rows: [
        ["VMO", "350 kt"],
        ["MMO", "M 0.82"],
        ["ECAM overspeed warning", "VMO + 4 kt / MMO + 0.006"],
      ],
    },
    alert: {
      level: "NOTE",
      text: "As the speed increases above VMO/MMO, the sidestick nose-down authority is progressively reduced, and a permanent nose-up order is applied to aid recovery to normal flight conditions.",
    },
  },
  {
    comment: "SLIDE SOP-13.3: Reaching FL100/MEA and mask stowage box",
    eyebrow: EYEBROW,
    title: "13.3 Alcanzando FL100 / MEA o MORA",
    subtitle: "Emergency Descent · Reaching FL100 / MEA or MORA",
    leftPct: 45,
    leftTitle: "MASK STOWAGE BOX (DSC-35-20-30)",
    rightTitle: "REACHING FL100 / MEA OR MORA",
    image: img(490),
    imageAlt: "When ALT* engages retract speed brakes and manage speed; close the mask stowage boxes",
    sourceRef: src("DSC-35-20-30 Fixed Oxygen System for Cockpit - How to", 490),
    cards: [
      {
        heading: "On the mask stowage box",
        bullets: [
          "Press and hold the RESET/TEST button in the direction of the arrow. Check that the blinker turns yellow for a short time, and then goes black.",
          "Hold the RESET/TEST button down, and press the Emergency Pressure selector. Check that the blinker turns yellow and remains yellow, as long as the Emergency Pressure selector is pressed.",
        ],
      },
    ],
    alert: {
      level: "WARNING",
      text: "To prevent hearing damage to the ground crew connected to the intercom system, inform them that a loud noise may be heard in the headset when performing the oxygen mask test.",
    },
  },
  // ── B. Humo ──────────────────────────────────────────────────────────────
  {
    comment: "SLIDE SOP-13.4: Smoke without ECAM alert and avionics smoke detection",
    eyebrow: EYEBROW,
    title: "13.4 Humo sin aviso ECAM",
    subtitle: "Smoke · Smoke Detected by Flight or Cabin Crew",
    leftPct: 45,
    leftTitle: "AVIONICS SMOKE DETECTION (DSC-26-30-10)",
    rightTitle: "SMOKE DETECTED BY FLIGHT OR CABIN CREW",
    image: img(536),
    imageAlt: "Without ECAM alert refer directly to the QRH SMOKE / FUMES / AVNCS SMOKE procedure",
    sourceRef: src("DSC-26-30-10 Avionics Bay - Smoke Detection", 536),
    cards: [
      {
        heading: "The air extraction duct of the avionics ventilation system has one smoke detector. When smoke is detected for more than 5 s:",
        bullets: [
          "The Single Chime (SC) sounds",
          "The MASTER CAUTION lights flash",
          "The ECAM AVIONICS SMOKE alert triggers",
          "On the EMER ELEC PWR panel, the SMOKE light of the GEN 1 LINE pb-sw comes on",
          "On the VENTILATION panel, the FAULT lights of the BLOWER pb-sw and the EXTRACT pb-sw come on.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SOP-13.5: Smoke fumes avionics smoke procedure and crew oxygen mask",
    eyebrow: EYEBROW,
    title: "13.5 SMOKE / FUMES / AVNCS SMOKE",
    subtitle: "Smoke · QRH Procedure",
    leftPct: 40,
    leftTitle: "CREW OXYGEN MASK (DSC-35-20-20)",
    rightTitle: "SMOKE / FUMES / AVNCS SMOKE",
    image: img(538),
    imageAlt: "Consider diversion and descent, boxed items, and the three smoke origin paragraphs",
    sourceRef: src("DSC-35-20-20 Crew Oxygen Mask - Pressure Regulator", 538),
    cards: [
      {
        heading: "EMERGENCY pressure selector",
        bullets: [
          "Use of this selector creates an overpressure which eliminates condensation or fogging of the mask, and prevents smoke, smell or ashes from entering the mask.",
          "Pressing this knob generates an overpressure for a few seconds. Turning the knob, in the direction of the arrow, generates a permanent overpressure.",
          "Overpressure supply is available only when the N/100% selector is set on the 100 % position.",
        ],
      },
      {
        heading: "N/100 % selector",
        paragraph:
          "100 %: the mask delivers 100 % oxygen. N: the mask provides the flight crew with a mixture of air and oxygen. This mixture changes with cabin altitude.",
      },
    ],
  },
  {
    comment: "SLIDE SOP-13.6: ELEC EMER CONFIG and smoke configuration",
    eyebrow: EYEBROW,
    title: "13.6 ELEC EMER CONFIG por humo",
    subtitle: "Smoke · To Set ELEC EMER CONFIG",
    leftPct: 40,
    leftTitle: "SMOKE CONFIGURATION (DSC-24-10-30-30)",
    rightTitle: "TO SET ELEC EMER CONFIG",
    image: img(540),
    imageAlt: "Shed as much electrical equipment as possible and restore generation a few minutes before landing",
    sourceRef: src("DSC-24-10-30-30 Smoke Configuration", 540),
    cards: [
      {
        heading: "Smoke configuration",
        bullets: [
          "In this configuration the main busbars are shed. The electrical distribution is the same as it is in the emergency electrical configuration (loss of main generators), except the fact that in smoke configuration the fuel pumps are connected upstream of the GEN 1 line connector.",
          "The procedure sheds approximately 75 % of electrical equipment.",
          "All equipment that remains powered is supplied via the circuit breakers on the overhead panel (except for equipment supplied by hot buses).",
        ],
      },
    ],
  },
  // ── C. Incapacitación ────────────────────────────────────────────────────
  {
    comment: "SLIDE SOP-13.7: Incapacitation reaction and sidestick priority logic",
    eyebrow: EYEBROW,
    title: "13.7 Incapacitación: reacción",
    subtitle: "Flight Crew Incapacitation · Reaction",
    leftPct: 40,
    leftTitle: "SIDESTICK PRIORITY LOGIC (DSC-27-20-30)",
    rightTitle: "REACTION",
    image: img(519),
    imageAlt: "Take over, declare an emergency and contain the incapacitated flight crewmember",
    sourceRef: src("DSC-27-20-30 Sidesticks - Sidestick Priority Logic", 519),
    cards: [
      {
        heading: "Sidestick priority logic",
        bullets: [
          "At all times, only one flight crewmember should fly the aircraft. However, if both flight crewmembers use their sidesticks simultaneously, their orders are algebraically added.",
          "The flight control laws limit the combined order to the equivalent of the full deflection of one sidestick.",
          "In this case the two green SIDE STICK PRIORITY lights on the glareshield come on and \"DUAL INPUT\" voice message is activated.",
          "To deactivate the other sidestick, the flight crewmember must press their sidestick pb for 40 s. The other sidestick is permanently deactivated, until any flight crewmember presses their sidestick pb.",
          "If both flight crew members press their sidestick pb, the last pilot to press gets the priority.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SOP-13.8: Sidestick takeover indications",
    eyebrow: EYEBROW,
    title: "13.8 Toma de prioridad del sidestick",
    subtitle: "Flight Crew Incapacitation · Sidestick Takeover",
    leftPct: 40,
    leftTitle: "GLARESHIELD (DSC-27-20-30)",
    rightTitle: "SIDESTICK TAKEOVER",
    image: img(520),
    imageAlt: "PRIORITY LEFT after 40 s; the other sidestick is deactivated",
    sourceRef: src("DSC-27-20-30 Glareshield - Side Stick Priority", 520),
    cards: [
      {
        heading: "Red arrow light",
        bullets: [
          "Comes on in front of the flight crew losing authority.",
          "Goes out if the flight crew has recovered their authority.",
        ],
      },
      {
        heading: "Sidestick priority audio",
        paragraph: "A \"PRIORITY LEFT\" or \"PRIORITY RIGHT\" audio voice message is given each time priority is taken.",
      },
      {
        heading: "Green CAPT and F/O lights",
        bullets: [
          "Both lights flash when the flight crew move both sidesticks simultaneously and neither takes priority.",
          "When the flight crew has taken priority and the other flight crew's sidestick is not at neutral, the light in front of the flight crew with priority lights up.",
        ],
      },
    ],
  },
  // ── D. Fallo de FMGC ─────────────────────────────────────────────────────
  {
    comment: "SLIDE SOP-13.9: FMGC 1 failure and single mode",
    eyebrow: EYEBROW,
    title: "13.9 Fallo de un FMGC: modo SINGLE",
    subtitle: "Dual FMGC Failure · FMGC 1 Failure",
    leftPct: 45,
    leftTitle: "SINGLE MODE (DSC-22_10-30)",
    rightTitle: "FLY THE AIRCRAFT",
    image: img(453),
    imageAlt: "Loss of AP1 and FD1; engage AP2",
    sourceRef: src("DSC-22_10-30 FMGS Modes of Operation - Single Mode", 453),
    cards: [
      {
        heading: "Single mode",
        bullets: [
          "The system automatically selects this degraded mode when one FMGC fails.",
          "The failed FMGC displays \"OPP FMGC IN PROCESS\" in white on the MCDU scratchpad. The corresponding ND displays the \"SELECT OFFSIDE RNG/MODE\" amber message.",
          "Both POS MONITOR pages display the same position (operative FMGC position). Both FDs are driven by the same FMGC. Any entry on either MCDU is sent to the operative FMGC.",
        ],
      },
      {
        heading: "Procedures",
        bullets: [
          "DO NOT USE the MCDU(s) until the PLEASE WAIT message is suppressed.",
          "SET both NDs on the same range and mode to display the same information from the operative FMGC.",
          "When convenient, RESET the failed FMGC.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SOP-13.10: Dual FMGC failure and FMGC status during reset",
    eyebrow: EYEBROW,
    title: "13.10 Fallo doble de FMGC: volar el avión",
    subtitle: "Dual FMGC Failure · Fly the Aircraft",
    leftPct: 40,
    leftTitle: "FMGC STATUS DURING A RESET (DSC-22_20-90-10)",
    rightTitle: "DUAL FMGC FAILURE · FLY",
    image: img(457),
    imageAlt: "Loss of AP/FD and A/THR: FDs off, bird on, thrust lock",
    sourceRef: src("DSC-22_20-90-10 FMGC Status during a Reset/Resynchronization", 457),
    cards: [
      {
        heading: "While a RESET/RESYNCH occurs:",
        bullets: [
          "The ND shows \"MAP NOT AVAIL\"",
          "The MCDU reverts to the A/C STATUS page, with \"PLEASE WAIT\" displayed in the scratchpad",
          "Autotuning of Navaids (VOR, DME, ADF) are lost on the failed side",
          "AP and managed modes may be transiently lost (reversion to HDG/V/S or TRK/FPA)",
          "If the pilot presses a key while the scratchpad is showing \"PLEASE WAIT\", there is no change at MCDU level. This is normal, and the crew should not respond by pulling the MCDU circuit breaker.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SOP-13.11: Computer reset and FM resynchronization",
    eyebrow: EYEBROW,
    title: "13.11 Reset del FMGC",
    subtitle: "Dual FMGC Failure · Computer Reset",
    leftPct: 45,
    leftTitle: "AUTOMATIC FMGC RESET (DSC-22_20-90-10)",
    rightTitle: "COMPUTER RESET",
    image: img(459),
    imageAlt: "A recovery may result in the loss of all pilot-entered data and the steps to restore them",
    sourceRef: src("DSC-22_20-90-10 Automatic FMGC Reset and Resynchronization", 459),
    cards: [
      {
        heading: "FM reset",
        bullets: [
          "When the reset is a minor one, the system will recover by itself. One single reset lasts 2 to 3 s maximum followed by 25 s of resynchronization.",
          "When the reset is a major one: resets recur at short intervals (several in 2 or 3 min); the memories are cleared, leading to the loss of F-PLN, GW, CI, CRZ FL, MCDU-entered speeds and NAVAIDs and to database switching.",
        ],
      },
      {
        heading: "FM resynchronization",
        paragraph:
          "One single resynchronization lasts approximately 25 s. If 5 several resynchronizations occur within 5 min, independent mode commences.",
      },
    ],
    alert: {
      level: "CAUTION",
      text: "If three dual FM resets occur in 2 min, pilot-entered data is lost. If a dual reset is identified, it is recommended that the flight crew does not perform again the last MCDU actions for 1 min.",
    },
  },
  // ── E. Leyes de mandos ───────────────────────────────────────────────────
  {
    comment: "SLIDE SOP-13.12: Alternate law",
    eyebrow: EYEBROW,
    title: "13.12 Ley alternate",
    subtitle: "Flight Control Laws · Alternate Law",
    leftPct: 45,
    leftTitle: "ALTERNATE LAW (DSC-27-20-20)",
    rightTitle: "ALTERNATE LAW",
    image: img(514),
    imageAlt: "Alternate law with reduced protection and without protection; handling characteristics",
    sourceRef: src("DSC-27-20-20 Reconfiguration Control Laws - Alternate Law", 514),
    cards: [
      {
        heading: "Pitch",
        bullets: [
          "Under alternate law the ground mode becomes active on the ground 5 s after touchdown.",
          "In pitch alternate law the flight mode changes to the flare mode when the pilot selects landing gear down. The flare mode is a direct stick-to-elevator relationship.",
        ],
      },
      {
        heading: "Reduced protections",
        bullets: [
          "Pitch attitude: amber Xs replace the green double bars \"=\" on the PFD.",
          "Low speed stability: a gentle progressive nose down signal; the PFD speed scale shows a black/red barber pole below the stall warning. The α floor protection is inoperative.",
          "High speed stability: above VMO or MMO, a nose up demand is introduced. The pilot can override this demand.",
          "Yaw alternate law: damper authority is limited to ±5 ° of rudder deflection.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "The AP will disconnect, if speed exceeds VMO/MMO, or if the bank angle exceeds 45 °.",
    },
  },
  {
    comment: "SLIDE SOP-13.13: Direct law and abnormal attitude law",
    eyebrow: EYEBROW,
    title: "13.13 Ley directa y ley de actitud anormal",
    subtitle: "Flight Control Laws · Direct Law",
    leftPct: 45,
    leftTitle: "DIRECT LAW · ABNORMAL ATTITUDE (DSC-27-20-20)",
    rightTitle: "DIRECT LAW",
    image: img(515),
    imageAlt: "Direct law with USE MAN PITCH TRIM on the PFD",
    sourceRef: src("DSC-27-20-20 Direct Law / Abnormal Attitude Laws", 515),
    cards: [
      {
        heading: "Direct law",
        bullets: [
          "In all configurations the maximum elevator deflection varies as a function of CG.",
          "There is no automatic trim: the pilot must trim manually. The α floor function is inoperative.",
          "Roll direct law: with the aircraft in the clean configuration, the maximum roll rate is about 30 °/s. With slats extended, it is about 25 °/s.",
          "Yaw mechanical control: the yaw damping and turn coordination functions are lost.",
        ],
      },
      {
        heading: "Abnormal attitude law",
        paragraph:
          "Engages when, for example, bank angle is above 125 °, pitch attitude above 50 ° nose up or below 30 ° nose down, or angle of attack above 40 °. When the aircraft returns within the normal flight envelope: pitch alternate law without reduced protection, roll direct law, yaw alternate law for the remainder of the flight (F/CTL ALTN LAW).",
      },
    ],
  },
  // ── F. Velocidad poco fiable ─────────────────────────────────────────────
  {
    comment: "SLIDE SOP-13.14: Unreliable speed memory items and ADR pb",
    eyebrow: EYEBROW,
    title: "13.14 Velocidad poco fiable: memory items",
    subtitle: "Unreliable Speed Indication · Memory Item",
    leftPct: 40,
    leftTitle: "ADIRS PANEL · ADR PB SW (DSC-34-NAV-10-20)",
    rightTitle: "UNRELIABLE SPEED INDICATION",
    image: img(557),
    imageAlt: "Memory items: AP, A/THR, FD off; pitch and thrust; flaps, speedbrakes and landing gear",
    sourceRef: src("DSC-34-NAV-10-20 ADIRS - Controls and Indicators", 557),
    cards: [
      {
        heading: "ADR 1(2)(3) pb-sw",
        bullets: [
          "ADR 1(2)(3) is on. When pressed, turns off the ADR 1(2)(3).",
          "OFF: ADR 1(2)(3) is off. When pressed, turns on the ADR 1(2)(3).",
          "FAULT: ADR 1(2)(3) is failed. Associated with the ECAM alert NAV ADR 1(2)(3) FAULT. When pressed, turns off the ADR 1(2)(3). The FAULT light goes off.",
        ],
      },
      {
        heading: "Note",
        paragraph: "ADR 1(2)(3) provides full air data to the aircraft systems.",
      },
    ],
  },
  {
    comment: "SLIDE SOP-13.15: Unreliable speed level off and stall warning",
    eyebrow: EYEBROW,
    title: "13.15 Velocidad poco fiable: nivelar",
    subtitle: "Unreliable Speed Indication · To Level Off",
    leftPct: 40,
    leftTitle: "STALL WARNING (DSC-27-20-20)",
    rightTitle: "TO LEVEL OFF",
    image: img(559),
    imageAlt: "AP, FDs and A/THR off, pitch and thrust from the QRH table, level off, bird on if reliable",
    sourceRef: src("DSC-27-20-20 Alternate Law - Low Speed Stability", 559),
    cards: [
      {
        heading: "Low speed stability (alternate law)",
        bullets: [
          "An artificial low speed stability replaces the normal angle-of-attack protection. It is active from about 5 kt up to about 10 kt above stall warning speed, depending on the aircraft's gross weight and slats/flaps configuration.",
          "The system also injects bank-angle compensation, so that operation effectively maintains a constant angle of attack.",
          "In addition, audio stall warnings (crickets + \"STALL\" synthetic voice message) is activated at an appropriate margin from the stall condition.",
        ],
      },
    ],
  },
];

export const MCC_SOP_13: MccLesson = {
  id: "a3200000-0000-0000-0000-000000000113",
  course_id: MCC_COURSE_ID,
  title: "SOP-13. Emergencias II: descenso de emergencia, humo, incapacitación, FMGC, leyes de mandos y velocidad poco fiable",
  slug: "sop-13-emergencias-ii",
  sequence_order: 19,
  lesson_order: 19,
  min_seconds: 2700,
  content_html: joinSlides(SOP_13_SLIDES),
};

export const SOP_13_SLIDE_COUNT = SOP_13_SLIDES.length;
