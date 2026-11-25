/**
 * SOP-01 — Filosofía Airbus y fundamentos MCC (1 h · 20 diapositivas).
 *
 * Fuentes (texto literal):
 * - Airbus Tutorial PDP Jan 2024 (PDP) págs. 3–22: Use of Tutorials, First FFS, Golden Rules.
 * - FCOM PRO-NOR-SOP-01 (Foreword) y PRO-NOR-SCO (Standard Callouts), FCOM IBS A320/A321 25 MAY 23.
 * - Callouts FCU.pdf (Iberia, Manual de Operaciones D, Curso de Refresco OPS 2.2/2015, pág. 38).
 * Arquitectura: docs/mcc/08_ARQUITECTURA_PDP.md.
 */
import { joinSlides, type MccLesson, type MccSlideSpec } from "./slide-builder.ts";

const MCC_COURSE_ID = "a3200000-0000-0000-0000-000000000320";
const PDP_IMG = "https://www.blueteam.es/elearning/media/mcc/pdp";
const EYEBROW = "APS MCC · A320 · SOP-01";

const SOP_01_SLIDES: MccSlideSpec[] = [
  {
    comment: "SLIDE SOP-01.1: Use of tutorials",
    eyebrow: EYEBROW,
    title: "1.1 Uso de los tutoriales",
    subtitle: "Use of Tutorials",
    leftTitle: "WHEN AND HOW TO USE THE TUTORIALS",
    rightTitle: "ORGANIZATION OF THE TUTORIALS",
    sourceRef: "Source: Airbus Tutorial PDP Jan 2024 — Use of Tutorials (p.3–10)",
    cards: [
      {
        heading: "Objective",
        paragraph: "The objective is to provide a good mental picturing before a training exercise.",
      },
      {
        heading: "APT sessions",
        bullets: [
          "The trainee studies the tutorials before the APT session.",
          "During briefing of the APT session, the instructor discusses with the trainees any question regarding the exercises.",
          "The instructor conducts the exercises in the APT assisted if needed by the tutorials.",
        ],
      },
      {
        heading: "FFS sessions",
        bullets: [
          "The trainee studies the tutorials before the FFS session.",
          "During briefing of the FFS session, the instructor briefs the trainees with the support of the tutorials, if needed.",
          "Tutorials are used to assist debriefing after the session as required.",
        ],
      },
    ],
    rightCards: [
      {
        heading: "Main slide",
        paragraph:
          "Slides must be read from top to bottom and from left to right. Title of the Tutorial · Procedure steps · Complementary information · Illustration of the situation · Indication that the Tutorial contains memory items.",
      },
      {
        heading: "Procedure slide",
        paragraph:
          "Title of slide · Condition or information · Action · Callout · Link to more information · Memory item.",
      },
      {
        heading: "Information slides",
        paragraph: "Title · BACK button · Information / Information box.",
      },
    ],
  },
  {
    comment: "SLIDE SOP-01.2: Navigation and Preventing Identified Risks",
    eyebrow: EYEBROW,
    title: "1.2 Navegación de los tutoriales y riesgos identificados (PIR)",
    subtitle: "Navigation · Preventing Identified Risks",
    leftTitle: "NAVIGATION",
    rightTitle: "PREVENTING IDENTIFIED RISKS (PIR)",
    sourceRef: "Source: Airbus Tutorial PDP Jan 2024 — Use of Tutorials (p.7, p.11)",
    cards: [
      {
        heading: "Navigation buttons",
        paragraph: "Several buttons are used to navigate through the different pages of the tutorial. The buttons are:",
        bullets: [
          "<strong>BACK:</strong> The BACK button is used to go back one step.",
          "<strong>i:</strong> The i button is used to open an information page.",
          "<strong>SOP:</strong> The SOP button is used to open a Standard Operating Procedure (SOP) page.",
          "<strong>PROC:</strong> The PROC button is used to open a procedure (normal or abnormal) page.",
          "<strong>NEXT / PREV:</strong> The NEXT and PREV buttons are used to navigate within a procedure that is on more than one page.",
          "<strong>FLOW:</strong> The FLOW button is used to open an action flow page.",
          "<strong>CALLOUTS:</strong> The CALLOUT button is used to open a callout page.",
          "<strong>GOLD:</strong> The GOLD button is used to page with a reminder of the Golden Rules.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "En este curso el contenido de los tutoriales se presenta en las diapositivas; los botones se refieren al documento PDP original.",
    },
    rightTable: {
      headers: ["Icon", "Risk"],
      rows: [
        ["GROUND CREW", "Possibility of injury to the ground personnel."],
        ["AIRCRAFT", "Possibility of damage to the aircraft."],
        ["PAX", "Possibility of injury to passengers."],
        ["NAVIGATION", "The navigation may be affected."],
        ["FLIGHT", "It may not be possible to complete the initial flight."],
        ["HANDLING", "The handling or control of the aircraft may be affected."],
      ],
    },
    rightAlert: {
      level: "NOTE",
      text: "Refer to FCTM for definition and PIR list.",
    },
  },
  {
    comment: "SLIDE SOP-01.3: First FFS — safety equipment and cockpit facility",
    eyebrow: EYEBROW,
    title: "1.3 Primer FFS: equipos de seguridad y cabina",
    subtitle: "First FFS",
    leftTitle: "FFS SAFETY EQUIPMENT & COCKPIT FACILITY",
    rightTitle: "FFS COCKPIT FACILITY",
    image: `${PDP_IMG}/p014_first_ffs.webp`,
    imageAlt: "FFS cockpit facility",
    sourceRef: "Source: Airbus Tutorial PDP Jan 2024 — First FFS (p.12–14)",
    cards: [
      {
        heading: "FFS safety equipment",
        bullets: ["Emergency Stop", "Fire extinguishers", "Escape ropes", "Torch"],
      },
      {
        heading: "FFS cockpit facility",
        bullets: [
          "Seat, pedal and armrest adjustments: Seat · Pedal · Armrest",
          "Sliding table",
          "Cockpit lights",
          "Oxygen masks",
          "Hand mike, headset, RMP, ACP",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SOP-01.4: First FFS — seat adjustments",
    eyebrow: EYEBROW,
    title: "1.4 Primer FFS: ajuste del asiento",
    subtitle: "First FFS · Seat adjustments",
    leftTitle: "SEAT ADJUSTMENTS",
    rightTitle: "EYE REFERENCE PANEL",
    image: `${PDP_IMG}/p015_first_ffs.webp`,
    imageAlt: "Seat adjustment and eye reference panel",
    sourceRef: "Source: Airbus Tutorial PDP Jan 2024 — First FFS (p.15)",
    cards: [
      {
        heading: "Seat adjustments",
        bullets: [
          "Move the pedals full forward.",
          "Move the seat full forward (Use either mechanical or electrical controls. Get familiar with both.).",
          "Adjust the seat vertically and horizontally according to sidestick position.",
          "Both surfaces must be visible by just looking up and down.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SOP-01.5: First FFS — pedal adjustments",
    eyebrow: EYEBROW,
    title: "1.5 Primer FFS: ajuste de los pedales",
    subtitle: "First FFS · Pedal adjustments",
    leftTitle: "PEDAL ADJUSTMENTS",
    rightTitle: "PEDAL ADJUSTMENTS",
    image: `${PDP_IMG}/p016_first_ffs.webp`,
    imageAlt: "Pedal adjustment",
    sourceRef: "Source: Airbus Tutorial PDP Jan 2024 — First FFS (p.16)",
    cards: [
      {
        heading: "Pedal adjustments",
        bullets: [
          "Put your feet “inside” the pedals.",
          "Apply full deflection of the pedal, then apply full braking action.",
          "The leg should be almost fully extended at this point, but there should not be any body movement or sliding on the seat to achieve that position.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SOP-01.6: First FFS — armrest adjustments",
    eyebrow: EYEBROW,
    title: "1.6 Primer FFS: ajuste del reposabrazos",
    subtitle: "First FFS · Armrest adjustments",
    leftTitle: "ARMREST ADJUSTMENTS",
    rightTitle: "ARMREST ADJUSTMENTS",
    image: `${PDP_IMG}/p017_first_ffs.webp`,
    imageAlt: "Armrest adjustment",
    sourceRef: "Source: Airbus Tutorial PDP Jan 2024 — First FFS (p.17)",
    cards: [
      {
        heading: "Armrest controls",
        bullets: ["HEIGHT ADJUST: Button A", "PITCH ADJUST: Button B", "INDICATION HEIGHT · INDICATION PITCH"],
      },
      {
        heading: "When your seat is adjusted",
        bullets: [
          "Position your arm like shown on the picture 1, slide it forward without moving your wrist.",
          "If the armrest is correctly positioned, your hand should come naturally around the side stick as shown on picture 2.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SOP-01.7: The Golden Rules",
    eyebrow: EYEBROW,
    title: "1.7 Las Golden Rules de Airbus",
    subtitle: "Golden Rules",
    leftTitle: "GOLDEN RULES",
    rightTitle: "GOLDEN RULES",
    image: `${PDP_IMG}/p018_golden_rules.webp`,
    imageAlt: "The four Airbus Golden Rules",
    sourceRef: "Source: Airbus Tutorial PDP Jan 2024 — Golden Rules (p.18)",
    cards: [
      {
        heading: "The four Golden Rules",
        bullets: [
          "<strong>GOLDEN RULE #1:</strong> Fly, Navigate, Communicate. In that order, with the appropriate tasksharing.",
          "<strong>GOLDEN RULE #2:</strong> Use the appropriate level of automation at all times.",
          "<strong>GOLDEN RULE #3:</strong> Understand the FMA at all times.",
          "<strong>GOLDEN RULE #4:</strong> Take actions if things do not go as expected.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SOP-01.8: Golden Rule #1",
    eyebrow: EYEBROW,
    title: "1.8 Golden Rule #1: Fly, Navigate, Communicate",
    subtitle: "Golden Rules · #1",
    leftPct: 58,
    leftTitle: "#1 FLY, NAVIGATE, COMMUNICATE",
    rightTitle: "FLY · NAVIGATE · COMMUNICATE",
    image: `${PDP_IMG}/p019_golden_rules.webp`,
    imageAlt: "Golden Rule 1 Fly Navigate Communicate",
    sourceRef: "Source: Airbus Tutorial PDP Jan 2024 — Golden Rules (p.19)",
    cards: [
      {
        heading: "Fly! Navigate! Communicate!",
        paragraph:
          "The flight crew must perform these three actions in sequence and must use appropriate tasksharing in normal and abnormal operations, in manual flight or in flight with the AP engaged.",
      },
      {
        heading: "Fly",
        bullets: [
          "<strong>PF:</strong> Fly the aircraft (Pitch, bank, airspeed, thrust, sideslip, heading, etc...) → Achieve and maintain desired targets and flight path.",
          "<strong>PM:</strong> Actively monitor the flight parameters → Call out any excessive deviation.",
        ],
      },
      {
        heading: "Navigate — Situational awareness",
        paragraph:
          "Know where you are... · Know where you should be... · Know where you should go... · Know where the weather, terrain and obstacles are...",
      },
      {
        heading: "Communicate",
        paragraph:
          "Flight Crew (PF ↔ PM) ↔ Cabin Crew, ATC, Ground crew. To ensure good communication, the flight crew should use standard phraseology and the applicable callouts.",
      },
    ],
    alert: {
      level: "WARNING",
      text: "Always keep in mind the key message: Fly the aircraft! Fly the aircraft! Fly the aircraft!",
    },
  },
  {
    comment: "SLIDE SOP-01.9: Golden Rules #2 and #3",
    eyebrow: EYEBROW,
    title: "1.9 Golden Rules #2 y #3: automatización y FMA",
    subtitle: "Golden Rules · #2 · #3",
    leftTitle: "#2 USE THE APPROPRIATE LEVEL OF AUTOMATION AT ALL TIMES",
    rightTitle: "#3 UNDERSTAND THE FMA AT ALL TIMES",
    sourceRef: "Source: Airbus Tutorial PDP Jan 2024 — Golden Rules (p.20–21)",
    cards: [
      {
        heading: "To use the appropriate level of automation at all times, the flight crew must:",
        bullets: [
          "Determine and select the appropriate level of automation, that can include manual flight.",
          "Understand the operational effect of the selected level of automation.",
          "Confirm that the aircraft reacts as expected.",
        ],
      },
    ],
    rightCards: [
      {
        heading: "To ensure correct situational awareness at all times, the flight crew must:",
        bullets: ["Monitor the FMA.", "Announce the FMA.", "Confirm the FMA.", "Understand the FMA."],
      },
    ],
  },
  {
    comment: "SLIDE SOP-01.10: Golden Rule #4",
    eyebrow: EYEBROW,
    title: "1.10 Golden Rule #4: actuar si algo no va según lo previsto",
    subtitle: "Golden Rules · #4",
    leftTitle: "#4 TAKE ACTIONS IF THINGS DO NOT GO AS EXPECTED",
    rightTitle: "TAKE ACTION !",
    image: `${PDP_IMG}/p022_golden_rules.webp`,
    imageAlt: "Golden Rule 4 take action PF and PM",
    sourceRef: "Source: Airbus Tutorial PDP Jan 2024 — Golden Rules (p.22)",
    cards: [
      {
        heading: "If the aircraft does not follow the desired flight path, or the selected targets",
        paragraph: "<strong>Take action !</strong>",
      },
      {
        heading: "PF",
        paragraph: "Change the level of automation:",
        bullets: ["Managed guidance → Selected guidance, or", "Selected guidance → Manual flying."],
      },
      {
        heading: "PM",
        bullets: [
          "Communicate with the PF",
          "Challenge the actions of the PF, if necessary",
          "Take over, if necessary.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SOP-01.11: Standard Operating Procedures — foreword",
    eyebrow: EYEBROW,
    title: "1.11 Qué son los Standard Operating Procedures (SOP)",
    subtitle: "FCOM PRO-NOR-SOP-01 · Foreword",
    leftTitle: "STANDARD OPERATING PROCEDURES",
    rightTitle: "STRUCTURE OF THE SOP",
    sourceRef: "Source: FCOM IBS A320/A321 — PRO-NOR-SOP-01 Foreword (Ident. PRO-NOR-SOP-01-00010142)",
    cards: [
      {
        heading: "Foreword",
        paragraph:
          "The procedures contained in this Chapter are recommended by Airbus, and are consistent with the other Chapters of this manual. The Authorities do not certificate Standard Operating Procedures. The manufacturer presents them herein as the best way to proceed, from a technical and operational standpoint. They are continually updated and the revisions take into account Operator input, as well as manufacturer experience.",
      },
      {
        heading: "Operator amendments",
        paragraph:
          "Operators may amend them, as needed. However, the manufacturer recommends that Operators using the FCOM as onboard operational manual submit suggested changes to expedite publication, and maintain consistency of the manual.",
      },
    ],
    rightCards: [
      {
        heading: "Content of the SOP",
        bullets: [
          "Standard Operating Procedures consist of inspections, preparations, and normal procedures.",
          "All items of a given procedure are listed in a sequence that follows a standardized scan of the cockpit panels, unless that sequence goes against the action priority logic, to ensure that all actions are performed in the most efficient way.",
          "These procedures assume that all systems are operating normally, and that all automatic functions are used normally.",
        ],
      },
      {
        heading: "EFB and other normal procedures",
        bullets: [
          "Standard Operating Procedures consider that both pilots use Electronic Flight Bag (EFB). Airbus recommends operating with two EFBs in order to reduce the risk of erroneous inputs.",
          "The FCOM also contains normal procedures that are non-routine procedures in the Supplementary Procedures chapter and in the Special Operations chapter.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SOP-01.12: Communications, standard terms and checklist callouts",
    eyebrow: EYEBROW,
    title: "1.12 Comunicación estándar y callouts de checklist",
    subtitle: "FCOM PRO-NOR-SCO · Standard Callouts",
    leftTitle: "COMMUNICATIONS AND STANDARD TERMS",
    rightTitle: "CHECKLIST CALLOUTS",
    sourceRef: "Source: FCOM PRO-NOR-SCO — Communications and Standard Terms, Checklist Callouts (Standard Callouts p.1)",
    cards: [
      {
        heading: "Standard phraseology",
        paragraph:
          "Standard phraseology is essential to ensure effective crew communication. The phraseology should be concise and exact. The following Chapter lists the callouts that should be used as standard. They supplement the callouts identified in the SOP.",
      },
      {
        heading: "Purpose of the standard callouts",
        paragraph:
          "These standard Airbus callouts are also designed to promote situational awareness, and to ensure crew understanding of systems and their use in line operation.",
      },
    ],
    rightTable: {
      headers: ["Callout", "Meaning"],
      rows: [
        ["“CHECK”", "A command for the other pilot to check an item."],
        ["“CHECKED”", "A response that an item has been checked."],
        ["“CROSSCHECKED”", "A callout verifying information from both pilot stations."],
        ["“HOLD CHECKLIST AT ___”", "If a checklist needs to be interrupted."],
        ["“RESUME CHECKLIST AT ___”", "For the continuation."],
        ["“__ CHECKLIST COMPLETE”", "Upon completion of a checklist."],
      ],
    },
  },
  {
    comment: "SLIDE SOP-01.13: Actions commanded by PF — SET, MANAGE, PULL",
    eyebrow: EYEBROW,
    title: "1.13 Acciones ordenadas por el PF: SET, MANAGE y PULL",
    subtitle: "FCOM PRO-NOR-SCO · Actions commanded by PF",
    leftTitle: "GENERAL & SET",
    rightTitle: "MANAGE / PULL",
    sourceRef: "Source: FCOM PRO-NOR-SCO-A — Actions Commanded by PF (Standard Callouts p.1–2)",
    cards: [
      {
        heading: "General",
        paragraph:
          "The following commands do not necessarily initiate a guidance mode change, eg.: selected to managed/managed to selected. The intent is to ensure clear, consistent, standard communication between crewmembers.",
      },
      {
        heading: "Check on PFD / ND",
        paragraph:
          "All actions performed on the FCU and MCDU must be checked on the PFD and ND (eg.: “FL 350 blue”, “FL 200 magenta”). Ensure that the correct FCU knob is used, then verify indications on the PFD/ND.",
      },
      {
        heading: "SET",
        paragraph:
          "The “SET” command means using an FCU knob to set a value, but not to change a mode. SET is accomplished by only rotating the appropriate selection knob.",
        bullets: ["“SET GO AROUND ALTITUDE __ FT”", "“SET FL __”", "“SET HDG __”"],
      },
    ],
    rightCards: [
      {
        heading: "MANAGE / PULL",
        paragraph:
          "The “MANAGE” command means pushing an FCU knob to engage, or arm, a managed mode or target. The “PULL” command means pulling an FCU knob to engage a selected mode or target.",
      },
    ],
    rightTable: {
      headers: ["Callout", "FCU action"],
      rows: [
        ["“PULL HDG 090”", "HDG/TRK knob is pulled and turned."],
        ["“MANAGE NAV”", "HDG/TRK knob is pushed."],
        ["“FL 190 PULL”", "ALT knob is turned and pulled."],
        ["“FL 190 MANAGE”", "ALT knob is turned and pushed."],
        ["“PULL SPEED 250 KNOTS”", "SPD/MACH knob is pulled and turned."],
        ["“MANAGE SPEED”", "SPD/MACH knob is pushed."],
      ],
    },
    rightAlert: {
      level: "NOTE",
      text: "If the value was previously set, there is no requirement to repeat the figure. Simply call e.g. PULL HDG: PULL SPEED: FL PULL.",
    },
  },
  {
    comment: "SLIDE SOP-01.14: V/S-FPA knob, ARM and ON/OFF commands",
    eyebrow: EYEBROW,
    title: "1.14 Mando V/S-FPA, ARM y ON/OFF",
    subtitle: "FCOM PRO-NOR-SCO · Actions commanded by PF",
    leftTitle: "V/S-FPA KNOB",
    rightTitle: "ARM · ON/OFF",
    sourceRef: "Source: FCOM PRO-NOR-SCO-A — Actions Commanded by PF (Standard Callouts p.2)",
    cards: [
      {
        heading: "V/S/FPA knob",
        paragraph:
          "The VS/FPA knob has no managed function. The standard callouts for the use of this knob are as follows:",
      },
    ],
    table: {
      headers: ["Callout", "FCU action"],
      rows: [
        ["“V/S Plus (or Minus) 700 PULL”", "V/S/FPA knob is turned and pulled."],
        ["“FPA Minus 3° PULL”", "V/S/FPA knob is turned and pulled."],
        ["“PUSH TO LEVEL OFF”", "V/S/FPA knob is pushed."],
      ],
    },
    rightCards: [
      {
        heading: "ARM",
        paragraph: "The “ARM __” command means arming a system by pushing the specified FCU button.",
        bullets: ["e.g.: “ARM APPROACH”", "e.g.: “ARM LOC.”"],
      },
      {
        heading: "ON / OFF",
        paragraph:
          "The simple ON or OFF command is used for the autopilot, flight directors, autothrust and the bird (flight path vector).",
        bullets: ["e.g.: BIRD ON (The HDG-V/S / TRK-FPA pb is pushed.)"],
      },
    ],
  },
  {
    comment: "SLIDE SOP-01.15: FCU callouts guide — SET",
    eyebrow: EYEBROW,
    title: "1.15 Guía de callouts del FCU: SET",
    subtitle: "Callouts FCU · 01 SET",
    leftTitle: "01 | SET",
    rightTitle: "PF COMMAND · PF CALLOUT · PM CALLOUT",
    sourceRef:
      "Fuente: Callouts FCU.pdf — Iberia, Manual de Operaciones D, Curso de Refresco OPS 2.2/2015 (Guía del Briefing, Cap. 3, pág. 38)",
    cards: [
      {
        heading: "SET",
        paragraph: "Girar un selector para cambiar un <strong>valor</strong> sin cambiar el <strong>modo</strong>.",
        bullets: ["SET SPD XXX KNOTS", "SET HDG XXX", "SET FL/ALT XXX", "SET V/S MINUS/PLUS XXX"],
      },
    ],
    alert: {
      level: "NOTE",
      text: "Guía gráfica de Iberia (curso de refresco A330/A340) incluida por la escuela en el material del curso. Las definiciones de SET, MANAGE y PULL coinciden con las del FCOM A320 PRO-NOR-SCO (diapositiva 1.13).",
    },
    rightTable: {
      headers: ["PF command", "PF callout", "PM callout"],
      rows: [
        ["SET SPEED XXX KT", "SPEED XXX BLUE", "CHECKED"],
        ["SET HEADING XX", "HEADING XX BLUE", "CHECKED"],
        ["SET ALT/FL XX", "ALT/FL XX BLUE", "CHECKED"],
        ["SET V/S MINUS/PLUS XXX", "V/S MINUS/PLUS XXX", "CHECKED"],
        ["SET GA ALT XXX FT", "—", "GA ALT XXX FT SET <em>(excepción)</em>"],
      ],
    },
  },
  {
    comment: "SLIDE SOP-01.16: FCU callouts guide — PULL and MANAGE",
    eyebrow: EYEBROW,
    title: "1.16 Guía de callouts del FCU: PULL y MANAGE",
    subtitle: "Callouts FCU · 02 PULL · 03 MANAGE",
    leftTitle: "02 | PULL",
    rightTitle: "03 | MANAGE",
    sourceRef:
      "Fuente: Callouts FCU.pdf — Iberia, Manual de Operaciones D, Curso de Refresco OPS 2.2/2015 (Guía del Briefing, Cap. 3, pág. 38)",
    cards: [
      {
        heading: "PULL",
        paragraph: "Tirar de un selector para cambiar de un modo <em>managed</em> a uno <em>selected</em>.",
        bullets: [
          "PULL SPEED XXX KNOTS / PULL SPD (FLAP LCKD)",
          "PULL HEADING XXX / PULL HDG (EO PROC.)",
          "ALTITUDE XXX FT PULL / FL XX PULL",
          "V/S MINUS/PLUS XXX PULL / FPA MINUS/PLUS X° PULL",
        ],
      },
    ],
    table: {
      headers: ["PF command", "PF callout", "PM"],
      rows: [
        ["PULL SPD XXX KTS", "SPEED XXX BLUE", "CHECKED"],
        ["PULL HDG XXX", "HEADING XXX BLUE", "CHECKED"],
        ["ALT/FL XXX PULL", "OPEN CLB XXX BLUE <em>(OPEN CLB / OPEN DES)</em>", "CHECKED"],
        ["V/S MINUS/PLUS XXX PULL", "V/S MINUS/PLUS XXX PULL", "CHECKED"],
      ],
    },
    rightCards: [
      {
        heading: "MANAGE",
        paragraph: "Empujar un selector para cambiar de un modo <em>selected</em> a uno <em>managed</em>.",
        bullets: ["MANAGE SPEED", "MANAGE NAV", "ALT XXX MANAGE / FL XX MANAGE", "PUSH TO LEVEL OFF"],
      },
    ],
    rightTable: {
      headers: ["PF command", "PF callout", "PM"],
      rows: [
        ["MANAGE SPEED", "SPEED 250 MAGENTA / SPEED G/D, S, F", "CHECKED"],
        ["MANAGE NAV", "NAV", "CHECKED"],
        ["ALT/FL XXX MANAGE", "CLB/DES XXX BLUE", "CHECKED"],
        ["PUSH TO LEVEL OFF", "V/S ZERO <em>(no existe V/S MNG)</em>", "CHECKED"],
      ],
    },
  },
  {
    comment: "SLIDE SOP-01.17: FMA, altitude, flaps and gear callouts",
    eyebrow: EYEBROW,
    title: "1.17 Callouts de FMA, altitud, flaps y tren",
    subtitle: "FCOM PRO-NOR-SCO · FMA · Altitude · Flaps/Gear",
    leftTitle: "FMA & ALTITUDE",
    rightTitle: "FLAPS & GEAR CALLOUTS",
    sourceRef: "Source: FCOM PRO-NOR-SCO — FMA, Altitude, Flaps or Gear Callouts (Standard Callouts p.3–4)",
    cards: [
      {
        heading: "FMA",
        paragraph:
          "The PF should call out any FMA change, unless specified differently (e.g. CAT II & III task sharing). Therefore, the PF should announce:",
        bullets: [
          "All armed modes with the associated color (e.g. blue, magenta): “G/S blue”, “LOC blue”.",
          "All active modes without the associated color (e.g. green, white): “NAV”, “ALT”.",
          "The PM should check and respond, “CHECKED” to all FMA changes called out by the PF.",
        ],
      },
      {
        heading: "Altitude",
        paragraph:
          "The PM calls out “one thousand to go” when passing 1 000 ft before the cleared altitude or FL, and the PF calls out “checked”.",
      },
    ],
    rightTable: {
      headers: ["", "Callout", "Remark"],
      rows: [
        ["PF", "“FLAPS ONE”", "—"],
        [
          "PM",
          "“SPEED CHECKED”",
          "PM checks the speed: above the S or F speed and accelerating (Takeoff); below VFE next and decelerating (Approach).",
        ],
        [
          "PM",
          "“FLAPS ONE”",
          "PM selects the FLAPS lever position and replies after checking the blue number on the ECAM flaps indicator to confirm the correct selection has been made.",
        ],
        ["PF", "“GEAR UP (DOWN)”", "—"],
        [
          "PM",
          "“GEAR UP (DOWN)”",
          "The PM selects the L/G lever position and replies after checking the red lights on the LDG GEAR indicator to confirm gear operation.",
        ],
      ],
    },
    rightAlert: {
      level: "NOTE",
      text: "Flaps configuration 1 and 1 + F: callout “FLAPS ONE”; 0: “FLAPS ZERO”. The reply will be given when selecting the new flap position.",
    },
  },
  {
    comment: "SLIDE SOP-01.18: Flight parameters deviation callouts",
    eyebrow: EYEBROW,
    title: "1.18 Callouts de desviación de parámetros",
    subtitle: "FCOM PRO-NOR-SCO · Flight Parameters",
    leftTitle: "APPROACH",
    rightTitle: "LANDING · GO-AROUND",
    sourceRef: "Source: FCOM PRO-NOR-SCO-C — Flight Parameters (Standard Callouts p.4, p.6)",
    cards: [
      {
        heading: "During approach, the PM announces:",
        bullets: [
          "“SPEED” if the speed decreases below the speed target -5 kt or increases above the speed target +10 kt.",
          "“SINK RATE” when the descent rate exceeds 1 000 ft/min",
          "“BANK” when bank angle becomes greater than 7°",
          "“PITCH” when pitch attitude becomes lower than -2.5° or higher than +10°",
          "“LOC” or “GLIDE” when either localizer or glide slope deviation is: ½ dot LOC · ½ dot GS.",
          "“CROSS TRACK” when the XTK is greater than 0.1 NM",
          "“V/DEV” when the vertical deviation is greater than ½ dot",
          "“COURSE” when greater than ½ dot or 2.5° (VOR) or 5° (ADF).",
          "“__ FT HIGH (LOW)” at altitude checks points.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "The PM announces the attitude deviations until landing.",
    },
    rightCards: [
      {
        heading: "During landing, the PM announces:",
        bullets: [
          "“PITCH PITCH”, if the pitch attitude approaches the tail strike pitch limit indicator, or reaches 10°",
          "“BANK BANK”, if the bank angle reaches 7°.",
        ],
      },
      {
        heading: "During a go-around, the PM announces:",
        bullets: [
          "“BANK”, if the bank angle becomes greater than 7°",
          "“PITCH”, if the pitch attitude becomes greater than 20° up or less than 10° up",
          "“SINK RATE”, if there is no climb rate.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SOP-01.19: PF/PM duties transfer and ground callouts",
    eyebrow: EYEBROW,
    title: "1.19 Transferencia de mandos y callouts con tierra",
    subtitle: "FCOM PRO-NOR-SCO · Duties Transfer · Ground",
    leftTitle: "PF/PM DUTIES TRANSFER",
    rightTitle: "GROUND SUPPLY · PUSHBACK/ENGINE START",
    sourceRef: "Source: FCOM PRO-NOR-SCO — PF/PM Duties Transfer, Summary for each phase (Standard Callouts p.6–7)",
    cards: [
      {
        heading: "To transfer control, flight crewmembers must use the following callouts:",
        bullets: [
          "<strong>To give control:</strong> The pilot calls out “YOU HAVE CONTROL”. The other pilot accepts this transfer by calling out “I HAVE CONTROL”, before assuming PF duties.",
          "<strong>To take control:</strong> The pilot calls out “I HAVE CONTROL”. The other pilot accepts this transfer by calling out “YOU HAVE CONTROL”, before assuming PM duties.",
        ],
      },
    ],
    table: {
      headers: ["To remove ground supply", "PF or PM", "GND Mech"],
      rows: [
        ["Initial ground contact", "GROUND (from) COCKPIT", "COCKPIT (from) GROUND"],
        ["External __ disconnection", "REMOVE EXTERNAL __", "EXTERNAL __ REMOVED"],
      ],
    },
    rightTable: {
      headers: ["Event", "PF", "GND Mech."],
      rows: [
        [
          "When ready for pushback, and pushback clearance received from ATC",
          "GROUND (from) COCKPIT, CLEARED FOR PUSH",
          "COCKPIT (from) GROUND, RELEASE BRAKES",
        ],
        ["Start of push", "BRAKES RELEASED READY TO PUSH", "—"],
        ["When ready to start engines", "CLEAR TO START ?", "CLEAR TO START"],
        ["", "STARTING ENG(S) __", "—"],
        ["When pushback completed", "—", "SET BRAKES"],
        ["", "BRAKES SET", "—"],
        [
          "When ready to disconnect (after engine started, and parameters are stabilized)",
          "CLEAR TO DISCONNECT (hand signals on left/right)",
          "DISCONNECTING (hand signals on left/right)",
        ],
      ],
    },
  },
  {
    comment: "SLIDE SOP-01.20: Taxi, takeoff and altimeter setting callouts",
    eyebrow: EYEBROW,
    title: "1.20 Callouts de rodaje, despegue y cambio de altímetro",
    subtitle: "FCOM PRO-NOR-SCO · Taxi · Takeoff · Altimeter",
    leftTitle: "TAXI",
    rightTitle: "TAKEOFF · ALTIMETER SETTING",
    sourceRef: "Source: FCOM PRO-NOR-SCO-D — Taxi, Takeoff, Altimeter Setting Changes (Standard Callouts p.7–8)",
    cards: [],
    table: {
      headers: ["Event", "PF", "PM"],
      rows: [
        ["When taxi clearance obtained", "CLEAR LEFT (RIGHT) SIDE", "CLEAR RIGHT (LEFT) SIDE"],
        ["Brake check", "BRAKE CHECK", "—"],
        [
          "Flight control check (the check is possible before the start of taxi)",
          "FLIGHT CONTROL CHECK",
          "1. Elevators: FULL UP, FULL DOWN, NEUTRAL · 2. Ailerons/Spoilers: FULL LEFT, FULL RIGHT, NEUTRAL",
        ],
        ["", "3. Rudder: RUDDER", "FULL LEFT, FULL RIGHT, NEUTRAL"],
      ],
    },
    alert: {
      level: "NOTE",
      text: "The PM should follow pedal movement with his/her feet.",
    },
    rightTable: {
      headers: ["Event", "PF", "PM"],
      rows: [
        ["Setting thrust levers to initial stabilization value", "TAKEOFF", "—"],
        ["Before passing 80 kt", "—", "THRUST SET"],
        ["At 100 kt", "CHECKED", "ONE HUNDRED KNOTS"],
        ["At V1", "—", "V1"],
        ["At VR", "—", "ROTATE"],
        ["Gear retraction", "GEAR UP", "POSITIVE CLIMB · GEAR UP"],
        ["If AP is engaged by PM", "—", "AP 1(2) ON"],
        ["Barometric setting change", "SET STANDARD (SET QNH/QFE)", "STANDARD (QNH/QFE) CROSS-CHECKED"],
        ["Subsequent altimeter cross-check", "PASSING FL__ (__FT) NOW", "CHECKED"],
      ],
    },
  },
  {
    comment: "SLIDE SOP-01.21: Approach callouts",
    eyebrow: EYEBROW,
    title: "1.21 Callouts de aproximación",
    subtitle: "FCOM PRO-NOR-SCO-D · Approach and Landing",
    leftTitle: "APPROACH PHASE · GO-AROUND ALTITUDE",
    rightTitle: "FDP · 1 000 FT · MINIMA",
    sourceRef: "Source: FCOM PRO-NOR-SCO-D — Approach and Landing (Standard Callouts p.9–10)",
    cards: [],
    table: {
      headers: ["Event", "PF", "PM"],
      rows: [
        ["Activation of approach phase", "ACTIVATE APPROACH PHASE", "APPROACH PHASE ACTIVATED"],
        ["RA alive", "CHECKED", "RADIO ALTIMETER ALIVE (1)(2)"],
        [
          "At F-G/S*, G/S*, FINAL APP or below the go-around altitude for approach with FPA guidance",
          "If the PF requests the PM to set the go-around altitude: SET GA ALTITUDE __ FT",
          "GA ALTITUDE __ SET",
        ],
        ["(same)", "If the PF sets the go-around altitude: GA ALTITUDE __ SET", "CHECKED"],
      ],
    },
    rightTable: {
      headers: ["Event", "PF", "PM"],
      rows: [
        ["FDP", "CHECKED", "PASSING __ (Fix Name), __ FT"],
        ["1 000 ft RA", "CHECKED", "ONE THOUSAND (2)"],
        ["100 ft above MDA/DH", "CHECKED", "ONE HUNDRED ABOVE (2)"],
        ["MDA/DH visual reference (6)", "CONTINUE", "MINIMUM (2)"],
        ["MDA/DH no visual reference (6)", "GO AROUND-FLAPS", "MINIMUM (2)"],
        ["—", "—", "ONE HUNDRED (2) · FIFTY (2)"],
      ],
    },
  },
  {
    comment: "SLIDE SOP-01.22: Landing, discontinued approach and go-around callouts",
    eyebrow: EYEBROW,
    title: "1.22 Callouts de aterrizaje, aproximación interrumpida y motor y al aire",
    subtitle: "FCOM PRO-NOR-SCO-D · Landing · Go Around",
    leftTitle: "AFTER TOUCHDOWN",
    rightTitle: "DISCONTINUED APPROACH · GO AROUND",
    sourceRef: "Source: FCOM PRO-NOR-SCO-D — Approach and Landing, Discontinued Approach, Go Around (Standard Callouts p.10–11)",
    cards: [],
    table: {
      headers: ["Event", "PF", "PM"],
      rows: [
        ["After touchdown: ground spoilers extended", "—", "SPOILERS (3)"],
        ["REV green on EWD", "—", "REVERSE GREEN (4)"],
        ["Deceleration", "—", "DECEL (5)"],
        ["Autobrake disengagement", "MANUAL BRAKING (7)", "AUTOBRAKE OFF (8)"],
        ["At 70 kt", "CHECKED", "SEVENTY KNOTS"],
      ],
    },
    rightTable: {
      headers: ["Event", "PF", "PM"],
      rows: [
        ["DISCONTINUED APPROACH decision", "CANCEL APPROACH", "—"],
        ["GO AROUND decision", "GO AROUND - FLAPS", "—"],
        ["Flaps retraction", "—", "FLAPS __"],
        ["Gear retraction", "GEAR UP", "POSITIVE CLIMB · GEAR UP"],
      ],
    },
  },
  {
    comment: "SLIDE SOP-01.23: Approach and landing callouts — notes",
    eyebrow: EYEBROW,
    title: "1.23 Notas a los callouts de aproximación y aterrizaje",
    subtitle: "FCOM PRO-NOR-SCO-D · Approach and Landing · Notes",
    leftTitle: "NOTES (1) – (5)",
    rightTitle: "NOTES (6) – (8)",
    sourceRef: "Source: FCOM PRO-NOR-SCO-D — Approach and Landing (Standard Callouts p.11)",
    cards: [
      {
        heading: "Notes",
        bullets: [
          "(1) Flight crew awareness, flight crew should now keep RA in scan to landing.",
          "(2) PM monitors pin-programmed auto callout, or announces if inoperative.",
          "(3) If the spoilers are not extended, call NO SPOILERS.",
          "(4) If the reverse deployment is not as expected, call NO REVERSE ENGINE__ or NO REVERSE, as appropriate.",
          "(5) DECEL callout means that the deceleration is felt by the flight crew, and confirmed by the speed trend on the PFD. If no positive deceleration, NO DECEL.",
        ],
      },
    ],
    rightCards: [
      {
        heading: "Notes",
        bullets: [
          "(6) In the case of circling approach, this callout should be performed at the latest, at the MAP.",
          "(7) PF announces MANUAL BRAKING when using the brake pedals if: Autobrake was selected for the landing, and No AUTOBRAKE OFF callout from the PM.",
          "(8) PM announces AUTOBRAKE OFF if: autobrake does not engage as expected or autobrake disengages, and No MANUAL BRAKING callout from the PF.",
        ],
      },
    ],
  },
];

export const MCC_SOP_01: MccLesson = {
  id: "a3200000-0000-0000-0000-000000000101",
  course_id: MCC_COURSE_ID,
  title: "SOP-01. Filosofía Airbus y fundamentos MCC: tutoriales, primer FFS, Golden Rules y callouts estándar",
  slug: "sop-01-filosofia-airbus-fundamentos-mcc",
  sequence_order: 1,
  lesson_order: 1,
  min_seconds: 3600,
  content_html: joinSlides(SOP_01_SLIDES),
};

export const SOP_01_SLIDE_COUNT = SOP_01_SLIDES.length;
