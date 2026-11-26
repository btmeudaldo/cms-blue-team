/**
 * SOP-01 — Filosofía Airbus y fundamentos MCC (1 h).
 *
 * Alcance: Curso APS MCC — Airbus A320 (simulador Entrol A32).
 * Referencias técnicas estándar: Golden Rules, Use of Tutorials,
 * FCOM A320 PRO-NOR-SOP-01 (Foreword), PRO-NOR-SCO (Standard Callouts)
 * y DSC-22_10-40-20 (FCU Philosophy).
 *
 * Imágenes: láminas A320 e ilustraciones FCU alojadas en Hostalia (lesson_media, tag MCC).
 */
import { MCC_MODULES, joinSlides, mccMinSeconds, mccVideoSeconds, type MccLesson, type MccSlideSpec } from "./slide-builder.ts";

const MCC_COURSE_ID = "a3200000-0000-0000-0000-000000000320";
const PDP_IMG = "https://www.blueteam.es/elearning/media/mcc/pdp";
const EYEBROW = "APS MCC · A320 · SOP-01";
const SCO = "FCOM PRO-NOR-SCO";

const IMAGE_VERSIONS: Record<string, number> = {
  p006_use_of_tutorials: 1795607846,
  p009_use_of_tutorials: 1795615600,
  p018_golden_rules: 1795607846,
  p019_golden_rules: 1795607846,
  p022_golden_rules: 1795607846,
  p139_cockpit_preparation: 1795607846,
  p146_cockpit_preparation: 1795607846,
  p172_taxi_before_takeoff: 1795607846,
  p184_takeoff: 1795607846,
  p188_takeoff: 1795607846,
  p233_2d_approach: 1795607846,
  p237_2d_approach: 1795607846,
  p278_go_around: 1795607846,
  p286_after_landing_parking_securing_the_a_c: 1795607846,
  p407_use_of_bird: 1795607846,
};

const img = (file: string) => {
  const v = IMAGE_VERSIONS[file];
  return v ? `${PDP_IMG}/${file}.webp?v=${v}` : `${PDP_IMG}/${file}.webp`;
};

const SOP_01_SLIDES: MccSlideSpec[] = [
  // ── Use of tutorials ─────────────────────────────────────────────────────
  {
    comment: "SLIDE SOP-01.1: Use of tutorials",
    eyebrow: EYEBROW,
    title: "1.1 Uso de los tutoriales",
    subtitle: "Use of Tutorials",
    leftPct: 54,
    leftTitle: "OBJECTIVE · NAVIGATION · ENTRENAMIENTO A320",
    rightTitle: "APT & FFS TUTORIAL USAGE",
    image: img("p006_use_of_tutorials"),
    imageAlt: "When and how to use the tutorials in APT and FFS sessions",
    sourceRef: "Source: FCOM A320 · Use of Tutorials & Part-FCL APS MCC",
    cards: [
      {
        heading: "Objective",
        paragraph: "The objective is to provide a good mental picturing before a training exercise.",
      },
      {
        heading: "Entrenamiento en simulador (Entrol A32)",
        bullets: [
          "<strong>Briefing y debriefing:</strong> Se realizará una hora de briefing previa a cada sesión de simulador y media hora de debriefing tras la finalización de cada sesión.",
          "<strong>Metodología LOFT:</strong> Ejercicios de vuelo LOFT (Line Oriented Flight Training), empleando el reparto de roles como Pilot Flying (PF) y Pilot Monitoring (PM).",
          "<strong>Documentación técnica:</strong> FCOM A320 (Vol. 1–4), QRH y A32 FCOM differences.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "En los diagramas estándar de Airbus, los términos APT y FFS equivalen a las sesiones preparatorias y de simulador A320 (Entrol A32) del curso.",
    },
  },
  {
    comment: "SLIDE SOP-01.2: Organization of the tutorials",
    eyebrow: EYEBROW,
    title: "1.2 Organización de los tutoriales",
    subtitle: "Use of Tutorials · Organization",
    leftPct: 45,
    leftTitle: "SLIDE READING ORDER · FCOM DEFINITIONS",
    rightTitle: "PROCEDURE SLIDE",
    image: img("p009_use_of_tutorials"),
    imageAlt: "Organization of the tutorials: procedure slide",
    sourceRef: "Source: FCOM A320 · GEN & Use of Tutorials (Organization)",
    cards: [
      {
        heading: "Main Slide & Information Slides",
        bullets: [
          "<strong>Reading order:</strong> Slides must be read from top to bottom and from left to right.",
          "<strong>Main slide:</strong> Title of the Tutorial · Procedure steps · Complementary information · Illustration of the situation · Indication that the Tutorial contains memory items.",
          "<strong>Information slides:</strong> Title · BACK button · Information / Information box.",
        ],
      },
      {
        heading: "Definitions of Warnings, Cautions and Notes (FCOM GEN)",
        bullets: [
          "<strong>WARNING:</strong> An operating procedure, technique, etc. that may result in personal injury or loss of life if not followed.",
          "<strong>CAUTION:</strong> An operating procedure, technique, etc. that may result in damage to equipment if not followed.",
          "<strong>NOTE:</strong> An operating procedure, technique, etc. considered essential to emphasize. Information contained in notes may also be safety related.",
        ],
      },
    ],
  },
  // ── Golden Rules ─────────────────────────────────────────────────────────
  {
    comment: "SLIDE SOP-01.3: The Golden Rules",
    eyebrow: EYEBROW,
    title: "1.3 Las Golden Rules de Airbus",
    subtitle: "Golden Rules · FCOM Purpose",
    leftTitle: "PURPOSE OF THE FCOM · INFORMATION LAYERS",
    rightTitle: "GOLDEN RULES",
    image: img("p018_golden_rules"),
    imageAlt: "The four Airbus Golden Rules",
    sourceRef: "Source: FCOM A320 · GEN & Golden Rules",
    cards: [
      {
        heading: "The purpose of the FCOM is to:",
        bullets: [
          "Provide all necessary operating limitations, procedures, performance and system information the flight crew needs to safely and efficiently operate A320 family aircraft during normal, abnormal, and emergency situations.",
          "Serve as a comprehensive reference guide during initial and refresher flight crew training.",
          "If the FCOM data differs from the AFM data, the AFM remains the reference. As a supplement to the FCOM, the FCTM may provide additional information that the flight crew should read in conjunction with the FCOM.",
        ],
      },
      {
        heading: "FCOM Information Type and Layers",
        bullets: [
          "<strong>Layer 1 (“Need to know”):</strong> Layer 1 presents information that is necessary in the cockpit.",
          "<strong>Layer 2 (“Nice to know”):</strong> Layer 2 presents information that is used as a reference, in order to fully understand the logic of the aircraft and pilot interfaces.",
          "<strong>Layer 3 (Detailed information):</strong> Layer 3 provides more detailed explanations, that are not necessarily needed in flight.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SOP-01.4: Golden Rule #1",
    eyebrow: EYEBROW,
    title: "1.4 Golden Rule #1: Fly, Navigate, Communicate",
    subtitle: "Golden Rules · #1 · Tasksharing",
    leftPct: 56,
    leftTitle: "MULTICREW TASKSHARING · COMMUNICATION",
    rightTitle: "FLY · NAVIGATE · COMMUNICATE",
    image: img("p019_golden_rules"),
    imageAlt: "Golden Rule 1 Fly Navigate Communicate",
    sourceRef: "Source: FCOM A320 · PRO-NOR-SCO & Anexo 10 APS MCC",
    cards: [
      {
        heading: "Entorno multipiloto (Anexo 10 · APS MCC)",
        paragraph:
          "El curso desarrolla la toma de decisiones, la comunicación, el reparto de tareas, el uso de listas de comprobación, la supervisión mutua, el trabajo en equipo y el apoyo al compañero en todas las fases del vuelo, tanto en operación normal como en condiciones anormales y de emergencia.",
      },
      {
        heading: "Communications & Control Transfer (FCOM PRO-NOR-SCO)",
        bullets: [
          "Standard phraseology is essential to ensure effective crew communication. The phraseology should be concise and exact.",
          "These standard Airbus callouts are also designed to promote situational awareness, and to ensure crew understanding of systems and their use in line operation.",
          "PF/PM duties transfer: “YOU HAVE CONTROL” → “I HAVE CONTROL” (to give control) and “I HAVE CONTROL” → “YOU HAVE CONTROL” (to take control).",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SOP-01.5: Golden Rules #2 and #3",
    eyebrow: EYEBROW,
    title: "1.5 Golden Rules #2 y #3: automatización y FMA",
    subtitle: "Golden Rules · #2 · #3",
    leftPct: 57,
    leftTitle: "AUTOMATION & FMA (DSC-22_30-80-20)",
    rightTitle: "AP/FD ENGAGEMENT AND FMA",
    image: img("p300_ap_fd_and_a_thr_engagement_disengagement"),
    imageAlt: "AP/FD engagement and FMA check",
    sourceRef: "Source: FCOM A320 · DSC-22_30-80-20 & Golden Rules #2 / #3",
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
        bullets: ["Monitor the FMA · Announce the FMA · Confirm the FMA · Understand the FMA."],
      },
      {
        heading: "FMA Display (FCOM DSC-22_30-80-20)",
        paragraph:
          "The FMA is located on the upper part of the PFD, and displays information associated to flight guidance: A/THR messages and modes · AP/FD modes (Vertical, Lateral, Common) · Approach and landing capability · AP, FD, and A/THR engagement status · Special Messages.",
        bullets: [
          "A white box appears for 10 s around the annunciation of an A/THR mode engagement, an AP/FD mode engagement, the approach and landing capability change, or an AP, FD, or A/THR engagement status change.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SOP-01.6: Golden Rule #4",
    eyebrow: EYEBROW,
    title: "1.6 Golden Rule #4: actuar si algo no va según lo previsto",
    subtitle: "Golden Rules · #4 · Guidance & FMGC Logic",
    leftTitle: "FCU GUIDANCE PHILOSOPHY · MASTER FMGC LOGIC",
    rightTitle: "TAKE ACTION !",
    image: img("p022_golden_rules"),
    imageAlt: "Golden Rule 4 take action PF and PM",
    sourceRef: "Source: FCOM A320 · DSC-22_10-30 & DSC-22_10-40-20",
    cards: [
      {
        heading: "Two Types of Guidance (FCOM DSC-22_10-40-20)",
        paragraph:
          "The flight crew can use two types of guidance to control the aircraft in auto flight. One type is managed by the Flight Management Guidance System (FMGS). The other uses target quantities which are manually entered by the flight crew.",
        bullets: [
          "When the aircraft uses target quantities from the FMGS (managed guidance), the FCU windows display dashes and the white dots next to those windows light up.",
          "When the aircraft uses target quantities, entered by the flight crew (selected guidance), the windows display the selected numbers and the white dots do not light up.",
        ],
      },
      {
        heading: "Master FMGC Logic (FCOM DSC-22_10-30)",
        bullets: [
          "If one autopilot (AP) is engaged, the related FMGC is master: it uses the onside FD for guidance, controls the A/THR, and controls the FMA 1 and 2.",
          "If two APs are engaged, FMGC1 is master.",
          "If no AP is engaged, and the FD1 pb is on, then FMGC1 is master; if the FD1 pb is off, and FD2 pb on, then FMGC2 is master.",
          "If no AP/FD is engaged, A/THR is controlled by FMGC1.",
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
    leftTitle: "STANDARD OPERATING PROCEDURES",
    rightTitle: "STANDARDIZED COCKPIT SCAN SEQUENCE",
    image: img("p139_cockpit_preparation"),
    imageAlt: "Cockpit preparation standardized scan sequence",
    sourceRef: "Source: FCOM A320 · PRO-NOR-SOP-01 Foreword",
    cards: [
      {
        heading: "Foreword",
        paragraph:
          "The procedures contained in this Chapter are recommended by Airbus, and are consistent with the other Chapters of this manual. The Authorities do not certificate Standard Operating Procedures. The manufacturer presents them herein as the best way to proceed, from a technical and operational standpoint.",
      },
      {
        heading: "Content of the SOP",
        bullets: [
          "Standard Operating Procedures consist of inspections, preparations, and normal procedures.",
          "All items of a given procedure are listed in a sequence that follows a standardized scan of the cockpit panels, unless that sequence goes against the action priority logic, to ensure that all actions are performed in the most efficient way.",
          "These procedures assume that all systems are operating normally, and that all automatic functions are used normally.",
          "Standard Operating Procedures consider that both pilots use Electronic Flight Bag (EFB). Airbus recommends operating with two EFBs in order to reduce the risk of erroneous inputs.",
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
    leftTitle: "COMMUNICATIONS & CHECKLIST CALLOUTS",
    rightTitle: "FINAL COCKPIT PREPARATION (PF / PM)",
    image: img("p146_cockpit_preparation"),
    imageAlt: "PF and PM ready for checklist completion during cockpit preparation",
    sourceRef: `Source: FCOM A320 · ${SCO} — Communications and Checklist Callouts`,
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
    table: {
      headers: ["Checklist callout", "Meaning"],
      rows: [
        ["“CHECK”", "A command for the other pilot to check an item."],
        ["“CHECKED”", "A response that an item has been checked."],
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
    sourceRef: `Source: FCOM A320 · ${SCO}-A — Actions Commanded by PF (SET)`,
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
    sourceRef: `Source: FCOM A320 · ${SCO}-A — Actions Commanded by PF (MANAGE / PULL)`,
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
    sourceRef: `Source: FCOM A320 · ${SCO}-A — V/S-FPA, ARM and ON/OFF`,
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
    comment: "SLIDE SOP-01.12: FCU callouts guide — SET (A320)",
    eyebrow: EYEBROW,
    title: "1.12 Guía de callouts del FCU: SET",
    subtitle: `${SCO} · FCU SET (A320)`,
    leftTitle: "01 | SET (ROTAR SELECTOR)",
    rightTitle: "A320 FCU & EFIS CONTROL PANELS",
    image: img("fcom_a320_fcu_panels"),
    imageAlt: "A320 FCU and EFIS control panels schematic showing windows, dots and selector knobs",
    sourceRef: `Source: FCOM A320 · ${SCO}-A · DSC-22_10-40-20 — FCU Overview & SET`,
    cards: [
      {
        heading: "SET — Cambiar un valor sin cambiar el modo",
        paragraph:
          "Girar un selector del FCU sin empujar ni tirar modifica únicamente el <strong>valor preseleccionado</strong> (en azul en PFD/ND) sin alterar el modo activo.",
      },
    ],
    table: {
      headers: ["PF command", "Verificación PFD / ND (PF)", "PM"],
      rows: [
        ["“SET SPEED ___ KT”", "SPEED ___ BLUE", "CHECKED"],
        ["“SET HDG ___” <em>(3 dígitos, ej. 090)</em>", "HDG ___ BLUE", "CHECKED"],
        ["“SET FL ___” / “SET ALT ____ FT”", "FL ___ / ALT ____ BLUE", "CHECKED"],
        ["“SET V/S PLUS (MINUS) ___”", "V/S ±___ BLUE", "CHECKED"],
        [
          "“SET GO AROUND ALTITUDE __ FT”",
          "<em>— (si ordena PF al PM)</em>",
          "“GA ALTITUDE __ SET”",
        ],
      ],
    },
    alert: {
      level: "NOTE",
      text: "En modo <em>managed</em> (guiones), al girar SPD/MACH o HDG/TRK o V/S la ventana muestra el valor temporalmente (10 s en SPD/MACH; 45 s en HDG/TRK y V/S) antes de volver a guiones. La ventana ALT siempre muestra altitud.",
    },
  },
  {
    comment: "SLIDE SOP-01.13: FCU callouts guide — PULL and MANAGE (A320)",
    eyebrow: EYEBROW,
    title: "1.13 Guía de callouts del FCU: PULL y MANAGE",
    subtitle: `${SCO} · FCU PULL & MANAGE (A320)`,
    leftPct: 56,
    leftTitle: "02 | PULL · 03 | MANAGE",
    rightTitle: "FCU PHILOSOPHY: MANAGED (PUSH) vs SELECTED (PULL)",
    image: img("fcom_a320_fcu_push_pull"),
    imageAlt: "A320 FCU philosophy showing managed dashed window with white dot versus selected value",
    sourceRef: `Source: FCOM A320 · ${SCO}-A · DSC-22_10-40-20 — FCU PULL & MANAGE`,
    cards: [
      {
        heading: "Cambio entre guiado Managed (PUSH) y Selected (PULL)",
        paragraph:
          "<strong>PULL (Selected):</strong> tira del selector para enganchar un modo o target seleccionado (punto blanco apagado). <strong>MANAGE (Managed):</strong> empuja el selector para armar o enganchar el guiado del FMGS (punto blanco encendido; <strong>V/S-FPA no tiene función managed</strong>).",
      },
    ],
    table: {
      headers: ["Acción", "PF command", "FMA / PFD (PF)", "PM"],
      rows: [
        ["PULL", "“PULL SPEED 250 KNOTS”", "SPEED 250 BLUE", "CHECKED"],
        ["PULL", "“PULL HDG 090”", "HDG <em>(activo, sin color)</em> · 090 BLUE", "CHECKED"],
        ["PULL", "“FL 190 PULL”", "OPEN CLB <em>(o OPEN DES)</em> · FL 190 BLUE", "CHECKED"],
        ["PULL", "“V/S PLUS (MINUS) 700 PULL”", "V/S +700 <em>(o FPA -3.0°)</em>", "CHECKED"],
        ["MANAGE", "“MANAGE SPEED”", "SPEED / MACH <em>(target magenta)</em>", "CHECKED"],
        ["MANAGE", "“MANAGE NAV”", "NAV <em>(sin color; o NAV BLUE si armado)</em>", "CHECKED"],
        ["MANAGE", "“FL 190 MANAGE”", "CLB / DES <em>(sin color)</em> · FL 190", "CHECKED"],
        ["LEVEL OFF", "“PUSH TO LEVEL OFF”", "V/S 0 / ALT <em>(sin color)</em>", "CHECKED"],
      ],
    },
    alert: {
      level: "NOTE",
      text: "Regla FMA A320: modos <strong>armados</strong> con color (<em>“LOC blue”</em>, <em>“G/S blue”</em>); modos <strong>activos</strong> sin color (<em>“NAV”</em>, <em>“ALT”</em>, <em>“OPEN CLB”</em>).",
    },
  },
  {
    comment: "SLIDE SOP-01.14: FMA and altitude callouts",
    eyebrow: EYEBROW,
    title: "1.14 Callouts de FMA y de altitud",
    subtitle: `${SCO} · FMA · Altitude`,
    leftTitle: "FMA & ALTITUDE",
    rightTitle: "INITIAL TAKEOFF FMA: NAV vs RWY TRK",
    image: img("p188_takeoff"),
    imageAlt: "Initial takeoff FMA with NAV armed versus RWY TRK",
    sourceRef: `Source: FCOM A320 · ${SCO} — FMA & Altitude`,
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
    sourceRef: `Source: FCOM A320 · ${SCO}-B — Flaps or Gear Callouts`,
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
    sourceRef: `Source: FCOM A320 · ${SCO}-C — Approach Flight Parameters`,
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
    rightTitle: "LANDING DEVIATION CALLOUTS (PM)",
    image: img("p285_landing"),
    imageAlt: "PM flight parameters callouts during landing: BANK BANK and PITCH PITCH",
    sourceRef: `Source: FCOM A320 · ${SCO}-C — Landing & Go-Around Flight Parameters`,
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
    leftTitle: "PF/PM TRANSFER & GROUND SUPPLY",
    rightTitle: "EXTERNAL POWER & GROUND CREW",
    image: img("p158_before_pushback_start_engine_start_after"),
    imageAlt: "External power disconnection and ground crew coordination",
    sourceRef: `Source: FCOM A320 · ${SCO} — PF/PM Duties Transfer & Ground Supply`,
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
    sourceRef: `Source: FCOM A320 · ${SCO}-D — Pushback / Engine Start`,
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
        ["When pushback completed", "2º — BRAKES SET", "1º — SET BRAKES"],
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
    sourceRef: `Source: FCOM A320 · ${SCO}-D — Taxi`,
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
        ["3. Rudder", "RUDDER", "FULL LEFT, FULL RIGHT, NEUTRAL"],
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
    sourceRef: `Source: FCOM A320 · ${SCO}-D — Takeoff & Altimeter Setting Changes`,
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
        ["If AP is engaged by PM", "AP 1(2) ON", "—"],
        ["Barometric setting change", "SET STANDARD (SET QNH/QFE)", "STANDARD (QNH/QFE) CROSS-CHECKED"],
        ["Subsequent altimeter cross-check", "CHECKED", "PASSING FL__ (__FT) NOW"],
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
    sourceRef: `Source: FCOM A320 · ${SCO}-D — Approach Phase & Go-Around Altitude`,
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
        [
          "At F-G/S*, G/S*, FINAL APP or below GA alt (if the PF sets it)",
          "GA ALTITUDE __ SET",
          "CHECKED",
        ],
      ],
    },
  },
  {
    comment: "SLIDE SOP-01.23: Approach callouts — FDP, 1 000 ft and minima",
    eyebrow: EYEBROW,
    title: "1.23 Callouts de aproximación: FDP, 1 000 ft y mínimos",
    subtitle: `${SCO}-D · Approach and Landing`,
    leftTitle: "FDP · 1 000 FT · MINIMA",
    rightTitle: "FDP & EARLY STABILIZED APPROACH",
    image: img("p237_2d_approach"),
    imageAlt: "Final Descent Point and stabilized approach profile",
    sourceRef: `Source: FCOM A320 · ${SCO}-D — FDP, 1 000 ft & Minima`,
    cards: [],
    table: {
      headers: ["Event", "PF", "PM"],
      rows: [
        ["FDP", "CHECKED", "PASSING __ (Fix Name), __ FT"],
        ["1 000 ft RA", "CHECKED", "ONE THOUSAND (2)"],
        ["100 ft above MDA/DH", "CHECKED", "ONE HUNDRED ABOVE (2)"],
        ["MDA/DH visual reference (6)", "CONTINUE", "MINIMUM (2)"],
        ["MDA/DH no visual reference (6)", "GO AROUND-FLAPS", "MINIMUM (2)"],
        ["Before touchdown (RA auto-callouts)", "—", "ONE HUNDRED (2) · FIFTY (2)"],
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
    sourceRef: `Source: FCOM A320 · ${SCO}-D — Landing, Discontinued Approach & Go-Around`,
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
    leftTitle: "NOTES (1) – (8)",
    rightTitle: "TOUCHDOWN · ROLLOUT · AFTER LANDING",
    image: img("p286_after_landing_parking_securing_the_a_c"),
    imageAlt: "Touchdown, runway rollout and after landing sequence",
    sourceRef: `Source: FCOM A320 · ${SCO}-D — Approach and Landing Notes`,
    cards: [
      {
        heading: "Notes (1) – (5)",
        bullets: [
          "(1) Flight crew awareness, flight crew should now keep RA in scan to landing.",
          "(2) PM monitors pin-programmed auto callout, or announces if inoperative.",
          "(3) If the spoilers are not extended, call NO SPOILERS.",
          "(4) If the reverse deployment is not as expected, call NO REVERSE ENGINE__ or NO REVERSE, as appropriate.",
          "(5) DECEL callout means that the deceleration is felt by the flight crew, and confirmed by the speed trend on the PFD. If no positive deceleration, NO DECEL.",
        ],
      },
      {
        heading: "Notes (6) – (8)",
        bullets: [
          "(6) In the case of circling approach, this callout should be performed at the latest, at the MAP.",
          "(7) PF announces MANUAL BRAKING when using the brake pedals if: Autobrake was selected for the landing, and No AUTOBRAKE OFF callout.",
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
  sequence_order: 2,
  lesson_order: 2,
  min_seconds: mccMinSeconds(SOP_01_SLIDES.length, mccVideoSeconds(SOP_01_SLIDES)),
  module_title: MCC_MODULES.NORMAL_SOP,
  content_html: joinSlides(SOP_01_SLIDES),
};

export const SOP_01_SLIDE_COUNT = SOP_01_SLIDES.length;
