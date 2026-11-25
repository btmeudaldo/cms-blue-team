/**
 * SOP-01 — Filosofía Airbus y fundamentos MCC (1 h).
 *
 * Fuentes (texto literal):
 * - Airbus Tutorial PDP Jan 2024 (PDP) págs. 3–10 y 18–22: Use of Tutorials, Golden Rules.
 *   (First FFS, navegación y PIR retirados a petición de la escuela: el simulador del curso es otro.)
 * - FCOM PRO-NOR-SOP-01 (Foreword) y PRO-NOR-SCO (Standard Callouts), FCOM IBS A320/A321 25 MAY 23.
 * - Callouts FCU.pdf (Iberia, Manual de Operaciones D, Curso de Refresco OPS 2.2/2015, pág. 38).
 * Imágenes: láminas del PDP en Hostalia (IMAGENES_URLS.json). Las diapositivas de tablas de callouts
 * sin lámina equivalente en el PDP llevan el contenido en las dos columnas.
 * Arquitectura: docs/mcc/08_ARQUITECTURA_PDP.md.
 */
import { joinSlides, type MccLesson, type MccSlideSpec } from "./slide-builder.ts";

const MCC_COURSE_ID = "a3200000-0000-0000-0000-000000000320";
const PDP_IMG = "https://www.blueteam.es/elearning/media/mcc/pdp";
const EYEBROW = "APS MCC · A320 · SOP-01";
const SCO = "FCOM PRO-NOR-SCO";

const img = (file: string) => `${PDP_IMG}/${file}.webp`;

const SOP_01_SLIDES: MccSlideSpec[] = [
  // ── Use of tutorials ─────────────────────────────────────────────────────
  {
    comment: "SLIDE SOP-01.1: Use of tutorials",
    eyebrow: EYEBROW,
    title: "1.1 Uso de los tutoriales",
    subtitle: "Use of Tutorials",
    leftTitle: "WHEN AND HOW TO USE THE TUTORIALS",
    rightTitle: "EXAMPLE OF A TUTORIAL — PROCEDURE SLIDE",
    image: img("p009_use_of_tutorials"),
    imageAlt: "Example of a tutorial procedure slide",
    sourceRef: "Source: Airbus Tutorial PDP Jan 2024 — Use of Tutorials (p.3–6, p.9)",
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
  },
  {
    comment: "SLIDE SOP-01.2: Organization of the tutorials",
    eyebrow: EYEBROW,
    title: "1.2 Organización de los tutoriales",
    subtitle: "Use of Tutorials · Organization",
    leftTitle: "ORGANIZATION OF THE TUTORIALS",
    rightTitle: "PROCEDURE SLIDE",
    image: img("p009_use_of_tutorials"),
    imageAlt: "Organization of the tutorials: procedure slide",
    sourceRef: "Source: Airbus Tutorial PDP Jan 2024 — Use of Tutorials (p.8–10)",
    cards: [
      {
        heading: "Organization of the tutorials",
        bullets: [
          "<strong>Main slide:</strong> Slides must be read from top to bottom and from left to right. Title of the Tutorial · Procedure steps · Complementary information · Illustration of the situation · Indication that the Tutorial contains memory items.",
          "<strong>Procedure slide:</strong> Title of slide · Condition or information · Action · Callout · Link to more information · Memory item.",
          "<strong>Information slides:</strong> Title · BACK button · Information / Information box.",
        ],
      },
    ],
  },
  // ── Golden Rules ─────────────────────────────────────────────────────────
  {
    comment: "SLIDE SOP-01.3: The Golden Rules",
    eyebrow: EYEBROW,
    title: "1.3 Las Golden Rules de Airbus",
    subtitle: "Golden Rules",
    leftTitle: "GOLDEN RULES",
    rightTitle: "GOLDEN RULES",
    image: img("p018_golden_rules"),
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
    comment: "SLIDE SOP-01.4: Golden Rule #1",
    eyebrow: EYEBROW,
    title: "1.4 Golden Rule #1: Fly, Navigate, Communicate",
    subtitle: "Golden Rules · #1",
    leftPct: 58,
    leftTitle: "#1 FLY, NAVIGATE, COMMUNICATE",
    rightTitle: "FLY · NAVIGATE · COMMUNICATE",
    image: img("p019_golden_rules"),
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
    comment: "SLIDE SOP-01.5: Golden Rules #2 and #3",
    eyebrow: EYEBROW,
    title: "1.5 Golden Rules #2 y #3: automatización y FMA",
    subtitle: "Golden Rules · #2 · #3",
    leftTitle: "AUTOMATION & FMA",
    rightTitle: "AP/FD ENGAGEMENT AND FMA",
    image: img("p300_ap_fd_and_a_thr_engagement_disengagement"),
    imageAlt: "AP/FD engagement and FMA check",
    sourceRef: "Source: Airbus Tutorial PDP Jan 2024 — Golden Rules (p.20–21) · Image: AP/FD and A/THR Engagement (p.300)",
    cards: [
      {
        heading: "#2 Use the appropriate level of automation at all times",
        paragraph: "To use the appropriate level of automation at all times, the flight crew must:",
        bullets: [
          "Determine and select the appropriate level of automation, that can include manual flight.",
          "Understand the operational effect of the selected level of automation.",
          "Confirm that the aircraft reacts as expected.",
        ],
      },
      {
        heading: "#3 Understand the FMA at all times",
        paragraph: "To ensure correct situational awareness at all times, the flight crew must:",
        bullets: ["Monitor the FMA.", "Announce the FMA.", "Confirm the FMA.", "Understand the FMA."],
      },
    ],
  },
  {
    comment: "SLIDE SOP-01.6: Golden Rule #4",
    eyebrow: EYEBROW,
    title: "1.6 Golden Rule #4: actuar si algo no va según lo previsto",
    subtitle: "Golden Rules · #4",
    leftTitle: "#4 TAKE ACTIONS IF THINGS DO NOT GO AS EXPECTED",
    rightTitle: "TAKE ACTION !",
    image: img("p022_golden_rules"),
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
  // ── SOP ──────────────────────────────────────────────────────────────────
  {
    comment: "SLIDE SOP-01.7: Standard Operating Procedures — foreword",
    eyebrow: EYEBROW,
    title: "1.7 Qué son los Standard Operating Procedures (SOP)",
    subtitle: "FCOM PRO-NOR-SOP-01 · Foreword",
    leftPct: 58,
    leftTitle: "STANDARD OPERATING PROCEDURES",
    rightTitle: "CM1 / CM2 SOP SEQUENCE",
    image: img("p138_cockpit_preparation"),
    imageAlt: "CM1 and CM2 SOP and flow sequence before departure",
    sourceRef:
      "Source: FCOM IBS A320/A321 — PRO-NOR-SOP-01 Foreword (Ident. PRO-NOR-SOP-01-00010142) · Image: PDP Cockpit Preparation (p.138)",
    cards: [
      {
        heading: "Foreword",
        paragraph:
          "The procedures contained in this Chapter are recommended by Airbus, and are consistent with the other Chapters of this manual. The Authorities do not certificate Standard Operating Procedures. The manufacturer presents them herein as the best way to proceed, from a technical and operational standpoint. They are continually updated and the revisions take into account Operator input, as well as manufacturer experience. Operators may amend them, as needed.",
      },
      {
        heading: "Content of the SOP",
        bullets: [
          "Standard Operating Procedures consist of inspections, preparations, and normal procedures.",
          "All items of a given procedure are listed in a sequence that follows a standardized scan of the cockpit panels, unless that sequence goes against the action priority logic, to ensure that all actions are performed in the most efficient way.",
          "These procedures assume that all systems are operating normally, and that all automatic functions are used normally.",
          "Standard Operating Procedures consider that both pilots use Electronic Flight Bag (EFB). Airbus recommends operating with two EFBs in order to reduce the risk of erroneous inputs.",
          "The FCOM also contains normal procedures that are non-routine procedures in the Supplementary Procedures chapter and in the Special Operations chapter.",
        ],
      },
    ],
  },
  // ── Standard callouts ────────────────────────────────────────────────────
  {
    comment: "SLIDE SOP-01.8: Communications, standard terms and checklist callouts",
    eyebrow: EYEBROW,
    title: "1.8 Comunicación estándar y callouts de checklist",
    subtitle: `${SCO} · Standard Callouts`,
    leftTitle: "COMMUNICATIONS AND STANDARD TERMS",
    rightTitle: "CHECKLIST CALLOUTS",
    sourceRef: `Source: ${SCO} — Communications and Standard Terms, Checklist Callouts (Standard Callouts p.1)`,
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
    comment: "SLIDE SOP-01.9: Actions commanded by PF — general and SET",
    eyebrow: EYEBROW,
    title: "1.9 Acciones ordenadas por el PF: generalidades y SET",
    subtitle: `${SCO} · Actions commanded by PF`,
    leftTitle: "GENERAL & SET",
    rightTitle: "FCU ACTION CHECKED ON PFD / FMA",
    image: img("p300_ap_fd_and_a_thr_engagement_disengagement"),
    imageAlt: "FCU action and FMA verification",
    sourceRef: `Source: ${SCO}-A — Actions Commanded by PF (Standard Callouts p.1–2) · Image: PDP p.300`,
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
  },
  {
    comment: "SLIDE SOP-01.10: Actions commanded by PF — MANAGE / PULL",
    eyebrow: EYEBROW,
    title: "1.10 Acciones ordenadas por el PF: MANAGE y PULL",
    subtitle: `${SCO} · Actions commanded by PF`,
    leftTitle: "MANAGE / PULL",
    rightTitle: "FCU ACTION CHECKED ON PFD / FMA",
    image: img("p300_ap_fd_and_a_thr_engagement_disengagement"),
    imageAlt: "FCU action and FMA verification",
    sourceRef: `Source: ${SCO}-A — Actions Commanded by PF (Standard Callouts p.2) · Image: PDP p.300`,
    cards: [
      {
        heading: "MANAGE / PULL",
        paragraph:
          "The “MANAGE” command means pushing an FCU knob to engage, or arm, a managed mode or target. The “PULL” command means pulling an FCU knob to engage a selected mode or target.",
      },
    ],
    table: {
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
    alert: {
      level: "NOTE",
      text: "If the value was previously set, there is no requirement to repeat the figure. Simply call e.g. PULL HDG: PULL SPEED: FL PULL.",
    },
  },
  {
    comment: "SLIDE SOP-01.11: V/S-FPA knob, ARM and ON/OFF commands",
    eyebrow: EYEBROW,
    title: "1.11 Mando V/S-FPA, ARM y ON/OFF",
    subtitle: `${SCO} · Actions commanded by PF`,
    leftTitle: "V/S-FPA · ARM · ON/OFF",
    rightTitle: "BIRD ON (TRK-FPA)",
    image: img("p407_use_of_bird"),
    imageAlt: "HDG-V/S / TRK-FPA selection on FCU and PFD",
    sourceRef: `Source: ${SCO}-A — Actions Commanded by PF (Standard Callouts p.2) · Image: PDP Use of Bird (p.407)`,
    cards: [
      {
        heading: "V/S/FPA knob",
        paragraph:
          "The VS/FPA knob has no managed function. The standard callouts for the use of this knob are as follows:",
        bullets: [
          "“V/S Plus (or Minus) 700 PULL” — V/S/FPA knob is turned and pulled.",
          "“FPA Minus 3° PULL” — V/S/FPA knob is turned and pulled.",
          "“PUSH TO LEVEL OFF” — V/S/FPA knob is pushed.",
        ],
      },
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
    comment: "SLIDE SOP-01.12: FCU callouts guide — SET",
    eyebrow: EYEBROW,
    title: "1.12 Guía de callouts del FCU: SET",
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
      text: "Guía gráfica de Iberia (curso de refresco A330/A340) incluida por la escuela en el material del curso. Las definiciones de SET, MANAGE y PULL coinciden con las del FCOM A320 PRO-NOR-SCO (diapositivas 1.9–1.11).",
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
    comment: "SLIDE SOP-01.13: FCU callouts guide — PULL and MANAGE",
    eyebrow: EYEBROW,
    title: "1.13 Guía de callouts del FCU: PULL y MANAGE",
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
    comment: "SLIDE SOP-01.14: FMA and altitude callouts",
    eyebrow: EYEBROW,
    title: "1.14 Callouts de FMA y de altitud",
    subtitle: `${SCO} · FMA · Altitude`,
    leftTitle: "FMA & ALTITUDE",
    rightTitle: "TAKEOFF FMA CALLOUTS",
    image: img("p184_takeoff"),
    imageAlt: "Takeoff sequence with FMA callouts",
    sourceRef: `Source: ${SCO} — FMA, Altitude (Standard Callouts p.3) · Image: PDP Takeoff (p.184)`,
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
  },
  {
    comment: "SLIDE SOP-01.15: Flaps and gear callouts",
    eyebrow: EYEBROW,
    title: "1.15 Callouts de flaps y tren",
    subtitle: `${SCO} · Flaps or Gear Callouts`,
    leftTitle: "FLAPS & GEAR CALLOUTS",
    rightTitle: "ACCELERATION FLOW (FLAPS · L/G)",
    image: img("p191_takeoff"),
    imageAlt: "Acceleration flow pattern with flaps and landing gear",
    sourceRef: `Source: ${SCO}-B — Flaps or Gear Callouts (Standard Callouts p.3–4) · Image: PDP Takeoff (p.191)`,
    cards: [],
    table: {
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
    alert: {
      level: "NOTE",
      text: "Flaps configuration 1 and 1 + F: callout “FLAPS ONE”; 0: “FLAPS ZERO”. The reply will be given when selecting the new flap position.",
    },
  },
  {
    comment: "SLIDE SOP-01.16: Flight parameters deviation callouts — approach",
    eyebrow: EYEBROW,
    title: "1.16 Callouts de desviación en aproximación",
    subtitle: `${SCO} · Flight Parameters`,
    leftTitle: "APPROACH",
    rightTitle: "PM CALLOUTS ON FINAL APPROACH",
    image: img("p258_3d_approach"),
    imageAlt: "PM deviation callouts on final approach",
    sourceRef: `Source: ${SCO}-C — Flight Parameters (Standard Callouts p.4) · Image: PDP 3D Approach (p.258)`,
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
  },
  {
    comment: "SLIDE SOP-01.17: Flight parameters deviation callouts — landing and go-around",
    eyebrow: EYEBROW,
    title: "1.17 Callouts de desviación en aterrizaje y motor y al aire",
    subtitle: `${SCO} · Flight Parameters`,
    leftTitle: "LANDING · GO-AROUND",
    rightTitle: "GO-AROUND PF/PM CALLOUTS",
    image: img("p268_go_around"),
    imageAlt: "Go-around PF and PM callouts",
    sourceRef: `Source: ${SCO}-C — Flight Parameters (Standard Callouts p.6) · Image: PDP Go Around (p.268)`,
    cards: [
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
    comment: "SLIDE SOP-01.18: PF/PM duties transfer and ground supply",
    eyebrow: EYEBROW,
    title: "1.18 Transferencia de mandos y alimentación de tierra",
    subtitle: `${SCO} · Duties Transfer · Ground`,
    leftTitle: "PF/PM DUTIES TRANSFER",
    rightTitle: "TO REMOVE GROUND SUPPLY",
    sourceRef: `Source: ${SCO} — PF/PM Duties Transfer, Summary for each phase (Standard Callouts p.6)`,
    cards: [
      {
        heading: "To transfer control, flight crewmembers must use the following callouts:",
        bullets: [
          "<strong>To give control:</strong> The pilot calls out “YOU HAVE CONTROL”. The other pilot accepts this transfer by calling out “I HAVE CONTROL”, before assuming PF duties.",
          "<strong>To take control:</strong> The pilot calls out “I HAVE CONTROL”. The other pilot accepts this transfer by calling out “YOU HAVE CONTROL”, before assuming PM duties.",
        ],
      },
    ],
    rightTable: {
      headers: ["Event", "PF or PM", "GND Mech"],
      rows: [
        ["Initial ground contact", "GROUND (from) COCKPIT", "COCKPIT (from) GROUND"],
        ["External __ disconnection", "REMOVE EXTERNAL __", "EXTERNAL __ REMOVED"],
      ],
    },
  },
  {
    comment: "SLIDE SOP-01.19: Pushback and engine start callouts",
    eyebrow: EYEBROW,
    title: "1.19 Callouts de pushback y arranque",
    subtitle: `${SCO} · Pushback/Engine Start`,
    leftTitle: "PUSHBACK / ENGINE START",
    rightTitle: "BEFORE PUSHBACK / START FLOW",
    image: img("p029_flow_patterns"),
    imageAlt: "Before pushback and start flow pattern",
    sourceRef: `Source: ${SCO}-D — Pushback/Engine Start (Standard Callouts p.7) · Image: PDP Flow Patterns (p.29)`,
    cards: [],
    table: {
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
        ["When pushback completed", "BRAKES SET", "SET BRAKES"],
        [
          "When ready to disconnect (after engine started, and parameters are stabilized)",
          "CLEAR TO DISCONNECT (hand signals on left/right)",
          "DISCONNECTING (hand signals on left/right)",
        ],
      ],
    },
  },
  {
    comment: "SLIDE SOP-01.20: Taxi callouts",
    eyebrow: EYEBROW,
    title: "1.20 Callouts de rodaje",
    subtitle: `${SCO} · Taxi`,
    leftTitle: "TAXI",
    rightTitle: "PUSHBACK → TAXI → LINE-UP",
    image: img("p172_taxi_before_takeoff"),
    imageAlt: "Pushback, taxi and line-up sequence",
    sourceRef: `Source: ${SCO}-D — Taxi (Standard Callouts p.7–8) · Image: PDP Taxi - Before Takeoff (p.172)`,
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
  },
  {
    comment: "SLIDE SOP-01.21: Takeoff and altimeter setting callouts",
    eyebrow: EYEBROW,
    title: "1.21 Callouts de despegue y cambio de altímetro",
    subtitle: `${SCO} · Takeoff · Altimeter`,
    leftTitle: "TAKEOFF · ALTIMETER SETTING",
    rightTitle: "TAKEOFF SEQUENCE",
    image: img("p184_takeoff"),
    imageAlt: "Takeoff sequence with callouts",
    sourceRef: `Source: ${SCO}-D — Takeoff, Altimeter Setting Changes (Standard Callouts p.8) · Image: PDP Takeoff (p.184)`,
    cards: [],
    table: {
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
    comment: "SLIDE SOP-01.22: Approach callouts — approach phase and go-around altitude",
    eyebrow: EYEBROW,
    title: "1.22 Callouts de aproximación: fase de aproximación y altitud de motor y al aire",
    subtitle: `${SCO}-D · Approach and Landing`,
    leftTitle: "APPROACH PHASE · GO-AROUND ALTITUDE",
    rightTitle: "ARM APPROACH vs ACTIVATE APPROACH PHASE",
    image: img("p233_2d_approach"),
    imageAlt: "Arm approach versus activate approach phase",
    sourceRef: `Source: ${SCO}-D — Approach and Landing (Standard Callouts p.9–10) · Image: PDP 2D Approach (p.233)`,
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
  },
  {
    comment: "SLIDE SOP-01.23: Approach callouts — FDP, 1 000 ft and minima",
    eyebrow: EYEBROW,
    title: "1.23 Callouts de aproximación: FDP, 1 000 ft y mínimos",
    subtitle: `${SCO}-D · Approach and Landing`,
    leftTitle: "FDP · 1 000 FT · MINIMA",
    rightTitle: "PM CALLOUTS ON FINAL APPROACH",
    image: img("p258_3d_approach"),
    imageAlt: "PM callouts on final approach",
    sourceRef: `Source: ${SCO}-D — Approach and Landing (Standard Callouts p.10) · Image: PDP 3D Approach (p.258)`,
    cards: [],
    table: {
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
    comment: "SLIDE SOP-01.24: Landing, discontinued approach and go-around callouts",
    eyebrow: EYEBROW,
    title: "1.24 Callouts de aterrizaje, aproximación interrumpida y motor y al aire",
    subtitle: `${SCO}-D · Landing · Discontinued Approach · Go Around`,
    leftTitle: "AFTER TOUCHDOWN · GO AROUND",
    rightTitle: "DISCONTINUED APPROACH vs GO-AROUND",
    image: img("p278_go_around"),
    imageAlt: "Discontinued approach versus go-around",
    sourceRef: `Source: ${SCO}-D — Approach and Landing, Discontinued Approach, Go Around (Standard Callouts p.10–11) · Image: PDP Go Around (p.278)`,
    cards: [],
    table: {
      headers: ["Event", "PF", "PM"],
      rows: [
        ["After touchdown: ground spoilers extended", "—", "SPOILERS (3)"],
        ["REV green on EWD", "—", "REVERSE GREEN (4)"],
        ["Deceleration", "—", "DECEL (5)"],
        ["Autobrake disengagement", "MANUAL BRAKING (7)", "AUTOBRAKE OFF (8)"],
        ["At 70 kt", "CHECKED", "SEVENTY KNOTS"],
        ["DISCONTINUED APPROACH decision", "CANCEL APPROACH", "—"],
        ["GO AROUND decision", "GO AROUND - FLAPS", "—"],
        ["Flaps retraction", "—", "FLAPS __"],
        ["Gear retraction", "GEAR UP", "POSITIVE CLIMB · GEAR UP"],
      ],
    },
  },
  {
    comment: "SLIDE SOP-01.25: Approach and landing callouts — notes",
    eyebrow: EYEBROW,
    title: "1.25 Notas a los callouts de aproximación y aterrizaje",
    subtitle: `${SCO}-D · Approach and Landing · Notes`,
    leftTitle: "NOTES (1) – (5)",
    rightTitle: "NOTES (6) – (8)",
    sourceRef: `Source: ${SCO}-D — Approach and Landing (Standard Callouts p.11)`,
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
  title: "SOP-01. Filosofía Airbus y fundamentos MCC: tutoriales, Golden Rules y callouts estándar",
  slug: "sop-01-filosofia-airbus-fundamentos-mcc",
  sequence_order: 1,
  lesson_order: 1,
  min_seconds: 3600,
  content_html: joinSlides(SOP_01_SLIDES),
};

export const SOP_01_SLIDE_COUNT = SOP_01_SLIDES.length;
