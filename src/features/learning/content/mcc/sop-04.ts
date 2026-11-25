/**
 * SOP-04 — Antes del pushback, arranque de motores y después del arranque (1 h).
 *
 * Alcance: Curso APS MCC — Airbus A320ceo CFM56-5B (simulador Entrol A32).
 * Fuentes: Airbus Tutorial PDP Jan 2024 — Before Pushback/Start – Engine Start – After Start (págs. 156–171,
 * ref. XFTDB1ENGSTAR01) y FCOM A320 PRO-NOR-SOP-07 (Before Pushback or Start), SOP-08 (Engine Start),
 * SOP-09 (After Start), PRO-NOR-SUP-ENG (Manual Engine Start, Engine Start with an Air Start Unit) y
 * DSC-70-80 (Ignition and Starting).
 *
 * Criterio de redacción: la columna izquierda NO repite el texto de la lámina de la derecha; aporta la
 * información complementaria del FCOM (textos L1/L2, WARNING/CAUTION/NOTE) en inglés y literal. Solo se
 * repite algo de la lámina cuando es crítico. De las variantes por avión del FCOM se toma la del A320ceo
 * CFM56-5B. Las láminas exclusivas de A330 (págs. 164, 166 y 169) no se usan; de la pág. 168 solo se usa la
 * mitad A320, y en lugar de la pág. 171 (con "(A330) ENG START SEL") se usa el flujo After Start de Flow
 * Patterns (pág. 30). Las láminas 156, 157, 160, 163, 165 y 167 llevan recortado el pie (© y banda A320/A330).
 * Arquitectura: docs/mcc/08_ARQUITECTURA_PDP.md.
 */
import { joinSlides, type MccLesson, type MccSlideSpec } from "./slide-builder.ts";

const MCC_COURSE_ID = "a3200000-0000-0000-0000-000000000320";
const PDP_IMG = "https://www.blueteam.es/elearning/media/mcc/pdp";
const EYEBROW = "APS MCC · A320 · SOP-04";
const PDP = "Airbus Tutorial PDP Jan 2024 — Before Pushback/Start – Engine Start – After Start";

/** Versión (caché) de las láminas re-subidas con el pie recortado. */
const CROPPED_PAGES = new Set([156, 157, 160, 163, 165, 167]);
const IMG_VERSION = 1795617213;
const img = (page: number) =>
  `${PDP_IMG}/p${String(page).padStart(3, "0")}_before_pushback_start_engine_start_after.webp${CROPPED_PAGES.has(page) ? `?v=${IMG_VERSION}` : ""}`;
const IMG_PITCH_TRIM_A320 = `${PDP_IMG}/p168_after_start_pitch_trim_a320.webp`;
const IMG_AFTER_START_FLOW_A320 = `${PDP_IMG}/p030_flow_patterns.webp`;
const fcomImg = (name: string) => `${PDP_IMG}/${name}.webp`;
const fcom = (sections: string) => `Source: FCOM A320 ${sections}`;
const both = (sections: string, page: number) => `Source: FCOM A320 ${sections} & ${PDP} (p.${page})`;

const SOP_04_SLIDES: MccSlideSpec[] = [
  // ── A. Before pushback/start clearance ───────────────────────────────────
  {
    comment: "SLIDE SOP-04.1: Before pushback, engine start and after start overview",
    eyebrow: EYEBROW,
    title: "4.1 Del pushback al after start: visión general",
    subtitle: "Before Pushback/Start · Engine Start · After Start",
    leftPct: 45,
    leftTitle: "WHAT TRIGGERS EACH PHASE",
    rightTitle: "BEFORE PUSHBACK/START – ENGINE START – AFTER START",
    image: img(156),
    imageAlt: "Sequence before pushback/start clearance, at pushback/start clearance and after start",
    sourceRef: both("PRO-NOR-SOP-07 / SOP-09", 156),
    cards: [
      {
        heading: "PUSHBACK/START CLEARANCE ……… OBTAIN (PM)",
        paragraph: "Obtain ATC pushback/start clearance and ground crew clearance.",
      },
      {
        heading: "BEACON sw ……… ON (PF)",
        paragraph: "When cleared for start or pushback, set to ON the BEACON sw.",
      },
      {
        heading: "After start flow pattern",
        paragraph:
          "When the engines have started, the PF sets the ENG MODE selector to NORM to permit normal pack operation. At this time, the After Start Flow Pattern begins.",
      },
    ],
  },
  {
    comment: "SLIDE SOP-04.2: Loadsheet, fuel and takeoff data",
    eyebrow: EYEBROW,
    title: "4.2 Hoja de carga, combustible y datos de despegue",
    subtitle: "Before Pushback/Start Clearance · Loadsheet",
    leftPct: 50,
    leftTitle: "LOADSHEET · FUEL · TAKEOFF DATA",
    rightTitle: "BEFORE PUSHBACK/START CLEARANCE — PF / PM",
    image: img(157),
    imageAlt: "Before pushback/start clearance items for PF and PM",
    sourceRef: both("PRO-NOR-SOP-07 Loadsheet / Fuel / Takeoff Data", 157),
    cards: [
      {
        heading: "Loadsheet (PF-PM)",
        bullets: [
          "Both crew members carefully check the Load and Trim Sheet, particularly for gross errors. Make sure that the load sheet data is correct (e.g. correct flight, correct aircraft, dry operating index, configuration, Fuel on Board, etc.).",
          "ZFW/ZFWCG ……… CHECK/REVISE — The PF compares the ZFW and the ZFWCG with the previously-entered data, and adjust if necessary.",
          "ZFW/ZFWCG ……… CROSSCHECK — The PM crosschecks the ZFW and the ZFWCG entered in the FMS. Check that the takeoff CG is within Load and Trim Sheet operational limits.",
        ],
      },
      {
        heading: "Takeoff data",
        bullets: [
          "If takeoff conditions changed: the PF and the PM independently compute again the takeoff performance data. The PF revises the takeoff data in the FMS; the PM crosschecks the performance data displayed on the PM's EFB with the FMS PERF T.O page.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "If the flight crew uses the optimum configuration option for the computation, they should pay specific attention to changes to the configuration of the slats/flaps at takeoff.",
    },
  },
  {
    comment: "SLIDE SOP-04.3: Seating, MCDU and external power",
    eyebrow: EYEBROW,
    title: "4.3 Asiento, MCDU y desconexión de la alimentación exterior",
    subtitle: "Before Pushback/Start Clearance · EXT PWR",
    leftPct: 45,
    leftTitle: "SEATING · MCDU · AIR COND · ELEC",
    rightTitle: "EXT POWER ……… CHECK AVAIL",
    image: img(158),
    imageAlt: "External power AVAIL light before requesting disconnection",
    sourceRef: both("PRO-NOR-SOP-07 Seating Position / MCDU / Air Conditioning Units / Elec", 158),
    cards: [
      {
        heading: "SEATS, SEAT BELTS, HARNESSES, RUDDER PEDALS, ARMRESTS ……… ADJUST (PF-PM)",
        paragraph: "The seat is correctly adjusted when the pilot’s eyes are in line with the red ball and white light.",
      },
      {
        heading: "MCDU",
        bullets: [
          "FMS PERF TO page ……… SELECT (PF) — It is recommended to display the PERF TO page on the PF side.",
          "FMS F-PLN page ……… SELECT (PM) — It is recommended to display the F-PLN page on the PM side.",
        ],
      },
      {
        heading: "PM",
        bullets: [
          "AIR CONDITIONING UNITS ……… CHECK DISCONNECTED",
          "EXT PWR pb ……… CHECK AVAIL → EXT PWR DISCONNECTION ……… REQUEST",
        ],
      },
    ],
    alert: {
      level: "WARNING",
      text: "Disconnection of the external power with the EXT PWR pb ON may cause injury to the ground engineer. Request disconnection of the external power only with the EXT PWR pb AVAIL.",
    },
  },
  // ── B. At pushback/start clearance ───────────────────────────────────────
  {
    comment: "SLIDE SOP-04.4: At pushback/start clearance",
    eyebrow: EYEBROW,
    title: "4.4 Con la autorización de pushback y arranque",
    subtitle: "At Pushback/Start Clearance",
    leftPct: 50,
    leftTitle: "ATC · WINDOWS AND DOORS · SLIDES",
    rightTitle: "AT PUSHBACK/START CLEARANCE — PF / PM",
    image: img(160),
    imageAlt: "At pushback/start clearance items and callouts for PF and PM",
    sourceRef: both("PRO-NOR-SOP-07 ATC / Windows and Doors / Thrust Levers", 160),
    cards: [
      {
        heading: "ATC ……… SET FOR OPERATION (PM)",
        paragraph: "ATC is set in accordance with airport requirements.",
      },
      {
        heading: "WINDOWS and DOORS ……… CHECK CLOSED (PF-PM)",
        bullets: [
          "To ensure that the sliding window is correctly closed and locked, push the handle of the sliding window fully forward to the closed position, and check that the red indicator is visible.",
          "Check, on the ECAM lower display, that all the aircraft doors are closed.",
          "Except for crew entry/exit, the cockpit door should remain closed until engine shutdown.",
        ],
      },
      {
        heading: "SLIDES ……… CHECK ARMED (PF-PM)",
        paragraph: "Check, on the ECAM lower display, that all slides are armed.",
      },
    ],
    alert: {
      level: "CAUTION",
      text: "The engines start regardless of the thrust lever position. If the thrust levers are not set to IDLE, then thrust rapidly increases to the corresponding thrust lever position, causing a hazardous situation.",
    },
  },
  {
    comment: "SLIDE SOP-04.5: Nosewheel steering disconnection for pushback",
    eyebrow: EYEBROW,
    title: "4.5 Pushback: desconexión de la dirección de la rueda de morro",
    subtitle: "At Pushback/Start Clearance · NW STRG DISC",
    leftPct: 50,
    leftTitle: "IF PUSHBACK IS REQUIRED",
    rightTitle: "NW STRG DISC MEMO ……… CHECK DISPLAY",
    image: img(161),
    imageAlt: "NW STRG DISC memo on the ECAM before pushback",
    sourceRef: both("PRO-NOR-SOP-07 Parking Brake and Nosewheel Steering", 161),
    cards: [
      {
        heading: "NW STRG DISC MEMO ……… CHECK DISPLAYED (PF)",
        paragraph:
          "In the case of pushback (towbarless or conventional), the nosewheel steering selector bypass pin must be in the tow position. The NW STRG DISC memo on the ECAM indicates this position.",
      },
      {
        heading: "Powerpush",
        paragraph:
          "In the case of a powerpush by the main landing gear, the nosewheel steering selector should remain in the normal position to steer the aircraft.",
      },
    ],
    alert: {
      level: "CAUTION",
      text: "If the ECAM does not display the NW STRG DISC memo, but the ground crew confirms that the tow pin is in the towing position, do not start the engines during pushback in order to avoid possible damage to the nose landing gear upon green hydraulic pressurization.",
    },
  },
  {
    comment: "SLIDE SOP-04.6: Parking brake, accumulator and brakes during pushback",
    eyebrow: EYEBROW,
    title: "4.6 Freno de aparcamiento y frenos durante el pushback",
    subtitle: "At Pushback/Start Clearance · Brakes",
    leftPct: 50,
    leftTitle: "ACCU PRESS · NO PUSHBACK · AFTER PUSHBACK",
    rightTitle: "BRAKE PRESS ……… CHECK",
    image: img(162),
    imageAlt: "Brake and accumulator pressure indicator",
    sourceRef: both("PRO-NOR-SOP-07 Accu Pressure / Parking Brake and Nosewheel Steering", 162),
    cards: [
      {
        heading: "ACCU PRESS indicator ……… CHECK (PF)",
        paragraph:
          "If required, use the electric pump on yellow hydraulic system to recharge the brake accumulator.",
      },
      {
        heading: "If pushback is not required",
        bullets: ["PARK BRK handle ……… ON", "BRAKES PRESS indicator ……… CHECK — Check for normal indications.", "BEFORE START C/L ……… COMPLETE (PF-PM)"],
      },
      {
        heading: "When pushback is completed",
        paragraph: "PARK BRK handle ……… ON · BRAKE PRESS indicator ……… CHECK · Ask the ground crew for towbar disconnection.",
      },
    ],
    alert: {
      level: "CAUTION",
      text: "Do not use the brakes during pushback, unless required due to an emergency.",
    },
  },
  // ── C. Engine start ──────────────────────────────────────────────────────
  {
    comment: "SLIDE SOP-04.7: Automatic engine start",
    eyebrow: EYEBROW,
    title: "4.7 Arranque automático de motores",
    subtitle: "Engine Start · Automatic Engine Start",
    leftPct: 50,
    leftTitle: "AUTOMATIC ENGINE START — FCOM NOTES",
    rightTitle: "ENGINE START — PF",
    image: img(163),
    imageAlt: "Engine start sequence for the PF",
    sourceRef: both("PRO-NOR-SOP-08 Automatic Engine Start", 163),
    cards: [
      {
        heading: "ENG MODE selector ……… IGN/START",
        paragraph: "The lower ECAM displays the ENG SD page.",
      },
      {
        heading: "Notes",
        bullets: [
          "Parameter callouts are not mandatory.",
          "In case the electrical power supply is interrupted during the start sequence (indicated by the loss of ECAM DUs), abort the start by setting to OFF the ENG 2 MASTER lever. Then, perform a 30 s dry crank.",
          "CFM Eng 56–5–B1/2 or CFM Eng 56–5–B4/2 engines accelerate slowly from 50 % N2 to idle. Start abort is not required as long as N2 is increasing.",
          "A PTU FAULT is triggered, if the last engine is started within 40 s following the end of the cargo doors operation.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "If, during the engine start, the ground crew reports a fuel leak from the engine drain mast, run the engine at idle for 5 min. If the leak disappears during these 5 min, the aircraft can be dispatched without maintenance action. If the leak is still present after 5 min, shut down the engine and request the maintenance personnel to investigate the leakage source.",
    },
  },
  {
    comment: "SLIDE SOP-04.8: Automatic starting sequence",
    eyebrow: EYEBROW,
    title: "4.8 Qué hace el FADEC en el arranque automático",
    subtitle: "DSC-70-80-40 · Automatic Starting Sequence",
    leftPct: 52,
    leftTitle: "SEQUENCE OF THE AUTOMATIC START",
    rightTitle: "STARTING THE ENGINES",
    image: img(165),
    imageAlt: "Notes for starting the engines: engine 2 first and amber crosses",
    sourceRef: both("DSC-70-80-40 Automatic Starting Sequence", 165),
    cards: [
      {
        heading: "Initial configuration of the controls",
        paragraph: "The ENG MASTER lever is set to OFF · The ENG MODE selector is set to NORM · The ENG MAN START pb-sw is set to OFF.",
      },
      {
        heading: "First step — ENG MODE selector to IGN/START",
        bullets: [
          "The ENG SD page appears on the SD · All engine parameters are available · Pack valves automatically close.",
          "After 30 s, if the flight crew does not set the ENG MASTER lever to ON, pack valves automatically open again.",
        ],
      },
      {
        heading: "Second step — ENG MASTER lever to ON",
        bullets: [
          "The LP fuel valve opens · The engine start valve opens",
          "The ignition starts on ground when N2 is more than 16 %",
          "The HP fuel valve opens on ground when N2 is more than 22 %",
          "When N2 is more than 50 %: the engine start valve closes · the ignition stops if on ground · the pack valves reopen if another engine is not started within 30 s.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SOP-04.9: ECAM indications during the start",
    eyebrow: EYEBROW,
    title: "4.9 Indicaciones ECAM durante el arranque",
    subtitle: "PRO-NOR-SOP-08 · Start Indications (CFM56-5B)",
    leftPct: 54,
    leftTitle: "ON ECAM UPPER / LOWER DISPLAY",
    rightTitle: "ENG SD PAGE (CFM56-5B)",
    image: fcomImg("fcom_a320_eng_sd_page"),
    imageAlt: "ECAM Engine SD page indications for CFM56-5B",
    sourceRef: fcom("PRO-NOR-SOP-08 Automatic Engine Start / DSC-70-90-40 ENG SD Page"),
    cards: [],
    table: {
      headers: ["When", "Indication"],
      rows: [
        ["ENG MASTER ON", "N2 increases · Corresponding start valve in line · Bleed pressure indication green · Oil pressure increases"],
        ["At 16 % N2", "Indication of the active igniter (A or B)"],
        ["At 22 % N2", "FF increases (1)"],
        ["15 s (maximum) after fuel is on", "EGT increases · N1 increases"],
        ["At 50 % N2", "Start valve starts closing (fully closed between 50 % and 56 % N2) · Igniter indication off"],
      ],
    },
    alert: {
      level: "NOTE",
      text: "(1) With the current ECU standard, the FF indication may be crossed up to approximately 200 kg/h (440 lb/h).",
    },
  },
  {
    comment: "SLIDE SOP-04.10: Engine idle parameters and engine 1 start",
    eyebrow: EYEBROW,
    title: "4.10 Parámetros de ralentí y arranque del motor 1",
    subtitle: "PRO-NOR-SOP-08 · Engine Idle Parameters (CFM56-5B)",
    leftPct: 50,
    leftTitle: "ENG IDLE PARAMETERS ……… CHECK",
    rightTitle: "E/WD ENGINE INDICATIONS",
    image: fcomImg("fcom_a320_ewd_cfm"),
    imageAlt: "Engine/Warning Display indications for CFM56-5B at idle",
    sourceRef: fcom("PRO-NOR-SOP-08 Automatic Engine Start / DSC-70-90-40 E/WD"),
    cards: [
      {
        heading: "When idle is reached (AVAIL indication is displayed)",
        bullets: [
          "Grey background on N2 indication disappears.",
          "ENGINE 1 START ……… ANNOUNCE · ENG 1 MASTER lever ……… ON — Apply the same procedure as indicated for engine 2.",
          "Both pack valves reopen with 30 s delay after the second engine N2 is above 50 %.",
        ],
      },
    ],
    table: {
      headers: ["At ISA sea level", "About"],
      rows: [
        ["N1", "19.5 %"],
        ["N2", "58.5 %"],
        ["EGT", "390 °C"],
        ["FF", "275 kg/h (600 lb/h)"],
      ],
    },
  },
  {
    comment: "SLIDE SOP-04.11: FADEC start protection",
    eyebrow: EYEBROW,
    title: "4.11 Protecciones del FADEC en el arranque",
    subtitle: "DSC-70-80 · Protection",
    leftPct: 50,
    leftTitle: "FADEC PROTECTION",
    rightTitle: "IGNITION AND STARTING ARCHITECTURE",
    image: fcomImg("fcom_a320_eng_start_arch"),
    imageAlt: "FADEC ignition and starting architecture schematic",
    sourceRef: fcom("DSC-70-80-40 Protection / DSC-70-80-20 Architecture"),
    cards: [
      {
        heading: "The FADEC",
        bullets: [
          "Detects a hot start, a hung start, a stall, a failed light up, a low start air pressure, a starter time exceeded and a thrust lever not at idle",
          "Announces FAULT and identifies the fault in an ECAM message",
        ],
      },
      {
        heading: "Runs an abort sequence if a start aborts on the ground, and:",
        bullets: [
          "Closes the HP valve",
          "Closes the start valve",
          "Turns off ignition",
          "Ensures an automatic dry crank cycle after the abort sequence in order to remove the fuel vapors",
          "Controls any additional start attempts.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SOP-04.12: Ignition for starting",
    eyebrow: EYEBROW,
    title: "4.12 Sistema de ignición en el arranque",
    subtitle: "DSC-70-80-30 · Ignition for Starting",
    leftPct: 50,
    leftTitle: "IGNITION FOR STARTING — ON THE GROUND",
    rightTitle: "IGNITION SYSTEM — FADEC A / B",
    image: fcomImg("fcom_a320_eng_ignition"),
    imageAlt: "FADEC dual channel ignition system schematic",
    sourceRef: fcom("DSC-70-80-30 Ignition for Starting"),
    cards: [
      {
        heading: "Automatic start",
        bullets: [
          "During a first automatic start attempt only one igniter is supplied. The FADEC automatically alternates the igniters and/or channels used in successive start sequences.",
          "The ignition comes on automatically when N2 reaches 16 % and cuts off automatically when N2 reaches 50 %.",
          "During an automatic start, if the first attempt fails, the FADEC automatically initiates a new start attempt with both igniters energized.",
        ],
      },
      {
        heading: "Manual start",
        bullets: [
          "During a manual start both igniters are supplied, when the ENG MASTER lever is ON.",
          "Both igniters are cut off when N2 reaches approximately 50 %.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SOP-04.13: Manual engine start — when and how to abort",
    eyebrow: EYEBROW,
    title: "4.13 Arranque manual: cuándo se usa y cómo se aborta",
    subtitle: "PRO-NOR-SUP-ENG · Manual Engine Start",
    leftPct: 55,
    leftTitle: "WHEN RECOMMENDED · ABORTING A MANUAL START",
    rightTitle: "ENG PANEL — PEDESTAL",
    image: fcomImg("fcom_a320_eng_master_panel"),
    imageAlt: "Pedestal ENG MASTER levers and ENG MODE selector",
    sourceRef: fcom("PRO-NOR-SUP-ENG Manual Engine Start / DSC-70-90-20 Pedestal"),
    cards: [
      {
        heading: "Pilots normally use automatic starting to start an engine. However, manual starting is recommended:",
        bullets: [
          "<strong>After aborting a start, because of:</strong> Engine stall · Engine EGT overlimit · Low start air pressure",
          "<strong>When expecting a start abort, because of:</strong> Degraded bleed performance, due to hot conditions, or at a high-altitude airfields · An engine with a reduced EGT margin, in hot conditions, or at a high-altitude airfields · Marginal performance of the external pneumatic power group · Intermittent ECAM ENG 1(2) IGN A(B) FAULT alert, during the first start of the day.",
        ],
      },
      {
        heading: "If the flight crew suspects an engine start malfunction, or if an engine-related ECAM alert is triggered, the PF must abort the start sequence as follows:",
        bullets: [
          "Before the ENG MASTER lever is set to ON, the PF must set the ENG MAN START pb-sw to OFF.",
          "After the ENG MASTER lever is set to ON, the PF must set the ENG MASTER lever to OFF, and then the ENG MAN START pb-sw to OFF.",
        ],
      },
      {
        heading: "Then",
        bullets: [
          "The flight crew should consider a dry crank cycle of the affected engine before they perform another start attempt.",
          "In the case of an ECAM alert, the PF must announce “ECAM actions”, in accordance with the ECAM management philosophy.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SOP-04.14: Manual engine start procedure — motoring",
    eyebrow: EYEBROW,
    title: "4.14 Procedimiento de arranque manual (1/2): motoring",
    subtitle: "PRO-NOR-SUP-ENG · Manual Engine Start Procedure",
    leftPct: 52,
    leftTitle: "MOTORING (ENG MAN START ON)",
    rightTitle: "ENG MAN START PANEL — OVERHEAD",
    image: fcomImg("fcom_a320_eng_man_start_panel"),
    imageAlt: "Overhead ENG MAN START 1 and 2 pushbutton-switches",
    sourceRef: fcom("PRO-NOR-SUP-ENG Manual Engine Start Procedure / DSC-70-90-10 Overhead Panel"),
    cards: [
      {
        heading: "Set up",
        bullets: [
          "THR LEVERS ……… IDLE · ENG MODE sel ……… NORM THEN IGN/START",
          "If both engines are started manually, the following procedure applies one engine at a time.",
        ],
      },
      {
        heading: "When all engines parameters are available on the upper ECAM display (no amber crosses displayed):",
        bullets: [
          "ENG MAN START pb-sw ……… ON",
          "START VALVE ……… CHECK IN-LINE · N2 INCREASE ……… CHECK · OIL PRESS INCREASE ……… CHECK",
          "If the N2 does not reach 20 %: PACK VALVES ……… CHECK CLOSED. If the APU bleed is used for engine start and the pack valves are closed, shed the APU electrical loads as follows: GALY &amp; CAB ……… OFF — Shedding APU electrical loads enables to increase bleed air pressure.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "The maximum motoring speed is defined as the speed at which N2 acceleration is less than 1 % in approximately 5 s.",
    },
  },
  {
    comment: "SLIDE SOP-04.15: Manual engine start procedure — light-up and stabilization",
    eyebrow: EYEBROW,
    title: "4.15 Procedimiento de arranque manual (2/2): encendido y estabilización",
    subtitle: "PRO-NOR-SUP-ENG · Manual Engine Start Procedure",
    leftPct: 52,
    leftTitle: "LIGHT-UP AND STABILIZATION",
    rightTitle: "STARTING SEQUENCE INDICATION",
    image: fcomImg("fcom_a320_eng_start_indications"),
    imageAlt: "ECAM starting sequence indications: start valve, ignition and inlet pressure",
    sourceRef: fcom("PRO-NOR-SUP-ENG Manual Engine Start Procedure / DSC-70-90-40 Starting Sequence Indication"),
    cards: [
      {
        heading: "When N2 reaches 22 % or the maximum motoring speed (20 % minimum)",
        bullets: [
          "ENG MASTER ……… ON · CHRONO ……… START — The PM starts the timing in order to monitor the light-up duration.",
          "IGNITERS A AND B ……… CHECK ON · FUEL FLOW INCREASE ……… CHECK",
          "15 s maximum after fuel flow increase: EGT INCREASE ……… CHECK · N1 INCREASE ……… CHECK",
        ],
      },
      {
        heading: "When N2 reaches 50 %",
        bullets: [
          "START VALVE (between 50 and 56 % N2) ……… CHECK CROSS LINE · IGNITERS A AND B ……… CHECK OFF",
          "MAIN and SECONDARY ENG PARAMETERS ……… CHECK NORMAL",
          "ENG MAN START pb-sw ……… OFF · ENG MODE sel ……… NORM · SHEDDED SYSTEMS ……… RESTORE · SOP - ENGINE START ……… RESUME",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SOP-04.16: Engine start with an air start unit — setup and engine 2",
    eyebrow: EYEBROW,
    title: "4.16 Arranque con unidad de aire de tierra (1/2): preparación y motor 2",
    subtitle: "PRO-NOR-SUP-ENG · Engine Start with an Air Start Unit",
    leftPct: 52,
    leftTitle: "BEFORE CONNECTING · ENGINE 2 START",
    rightTitle: "AIR COND / BLEED PANEL (30VU)",
    image: fcomImg("fcom_a320_air_bleed_panel"),
    imageAlt: "Overhead AIR COND and BLEED panel 30VU",
    sourceRef: fcom("PRO-NOR-SUP-ENG Engine Start with an Air Start Unit / DSC-36-20 Air Bleed Panel"),
    cards: [
      {
        heading: "Before connecting the air start unit",
        bullets: [
          "PACK 1 and PACK 2 ……… OFF — Packs are selected off to prevent any possible contamination of the packs by the air start unit.",
          "APU BLEED ……… OFF · ENG 1 BLEED ……… OFF · ENG 2 BLEED ……… OFF · X BLEED ……… OPEN",
          "AIR START UNIT CONNECTION ……… REQUEST",
        ],
      },
      {
        heading: "When cleared to start: ENG 2 ……… START",
        bullets: [
          "For any operational reason, engine 1 can be started first. In this case, check the brake ACCU pressure prior to engine start.",
          "The minimum recommended starter air supply pressure is 30 PSI when the start valve is open.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SOP-04.17: Engine start with an air start unit — engine 1 and restore",
    eyebrow: EYEBROW,
    title: "4.17 Arranque con unidad de aire de tierra (2/2): motor 1 y restauración",
    subtitle: "PRO-NOR-SUP-ENG · Engine Start with an Air Start Unit",
    leftPct: 52,
    leftTitle: "ENGINE 1 START · RESTORE",
    rightTitle: "ECAM BLEED PAGE — GND HP",
    image: fcomImg("fcom_a320_ecam_bleed_page"),
    imageAlt: "ECAM BLEED page showing GND HP ground connection and bleed valves",
    sourceRef: fcom("PRO-NOR-SUP-ENG Engine Start with an Air Start Unit / DSC-36-20 ECAM Bleed Page"),
    cards: [
      {
        heading: "After engine 2 is started",
        bullets: [
          "EXT PWR ……… CHECK AVAIL · EXT PWR DISCONNECTION ……… REQUEST",
          "The external electrical power can be removed after the second engine start.",
        ],
      },
      {
        heading: "If the air start unit is used to start engine 1",
        bullets: [
          "ENG 1 ……… START",
          "When engine 1 is started: AIR START UNIT DISCONNECTION ……… REQUEST · X BLEED ……… AUTO · ENG 1 and ENG 2 BLEED ……… ON · PACK 1 and PACK 2 ……… ON",
          "SOP - AFTER START ……… RESUME",
        ],
      },
    ],
    alert: {
      level: "WARNING",
      text: "Disconnection of the external power with the EXT PWR pb-sw set to ON may cause injury to the ground engineer. Request disconnection of the external power only with the EXT PWR pb-sw set to AVAIL.",
    },
  },
  // ── D. After start ───────────────────────────────────────────────────────
  {
    comment: "SLIDE SOP-04.18: After start PF actions",
    eyebrow: EYEBROW,
    title: "4.18 Después del arranque: acciones del PF",
    subtitle: "After Start · PF",
    leftPct: 50,
    leftTitle: "ENG MODE · APU BLEED · ANTI ICE",
    rightTitle: "AFTER START — PF / PM",
    image: img(167),
    imageAlt: "After start actions for PF and PM and after start checklist",
    sourceRef: both("PRO-NOR-SOP-09 After Start", 167),
    cards: [
      {
        heading: "ENG MODE selector ……… NORM",
        bullets: [
          "After start, to avoid thermal shock, the pilot should operate the engine at idle or near idle for at least 2 min before advancing the thrust lever to high power. Taxi time at idle may be included in the warm-up period.",
          "The last engine started must run for at least 2 min before takeoff initiation, to ensure that takeoff is not initiated before the center tank pumps test is finished, since takeoff on center tank is prohibited.",
        ],
      },
      {
        heading: "APU BLEED · ANTI ICE",
        bullets: [
          "APU BLEED pb-sw ……… OFF — This action enables to avoid ingestion of engine exhaust gases.",
          "ENG 1 and 2 ANTI ICE pb-sw ……… AS RQRD — Turn on engine anti-ice during all ground operation, when icing conditions exist or are anticipated.",
          "WING ANTI ICE pb-sw ……… AS RQRD — On ground when wing anti-ice is switched on, the anti-ice valves open for about 30 s for self-test sequence, then close as long as the aircraft is on ground.",
        ],
      },
    ],
    alert: {
      level: "CAUTION",
      text: "In icing conditions, the flight crew must turn on the engine anti-ice and should not wait until seeing ice building up.",
    },
  },
  {
    comment: "SLIDE SOP-04.19: After start PM actions and pitch trim",
    eyebrow: EYEBROW,
    title: "4.19 Después del arranque: acciones del PM y pitch trim",
    subtitle: "After Start · PM",
    leftPct: 50,
    leftTitle: "GND SPLRS · RUDDER TRIM · FLAPS",
    rightTitle: "PITCH TRIM ……… SET",
    image: IMG_PITCH_TRIM_A320,
    imageAlt: "A320 pitch trim set with the takeoff CG",
    sourceRef: both("PRO-NOR-SOP-09 Ground Spoilers / Rudder Trim / Flaps / Pitch Trim", 168),
    cards: [
      {
        heading: "Ground spoilers (PM)",
        bullets: ["GND SPLRS ……… ARM"],
      },
      {
        heading: "Rudder trim (PM)",
        bullets: [
          "RUD TRIM RESET pb ……… PRESS — Press the RESET pb on the RUDDER TRIM panel.",
          "RUD TRIM ……… CHECK NEUTRAL — After the reset, the flight crew may observe an indication of up to 0.3 ° (L or R) in the RUD TRIM position indication.",
        ],
      },
      {
        heading: "Flaps (PM)",
        bullets: [
          "FLAPS lever ……… SET FOR TAKEOFF",
          "FLAPS ……… CHECK POSITION — Check the position of the flaps on the ECAM upper display.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "If taxiing in icing conditions with rain, slush or snow: maintain the flaps retracted until the aircraft reaches the holding point of the takeoff runway. This action prevents contamination of the slats/flaps mechanism.",
    },
  },
  {
    comment: "SLIDE SOP-04.20: ECAM status, ground crew disconnection and after start checklist",
    eyebrow: EYEBROW,
    title: "4.20 Status ECAM, desconexión del personal de tierra y checklist",
    subtitle: "After Start · Flow Pattern",
    leftPct: 50,
    leftTitle: "ECAM STATUS · NWS · GROUND CREW · C/L",
    rightTitle: "AFTER START FLOW PATTERN",
    // p.171 del capítulo incluye "(A330) ENG START SEL"; se usa la lámina equivalente solo A320 de Flow Patterns (p.30).
    image: IMG_AFTER_START_FLOW_A320,
    imageAlt: "After start flow pattern for PF and PM",
    sourceRef: fcom(
      "PRO-NOR-SOP-09 ECAM Status / N/W Steer Disc Memo / Ground Crew / After Start Checklist & Airbus Tutorial PDP Jan 2024 — Flow Patterns (p.30)",
    ),
    cards: [
      {
        heading: "ECAM STATUS ……… CHECK (PF-PM)",
        paragraph:
          "The PM checks and the PF crosschecks that there is no status reminder (STS) on the WD. If STS appears on the WD, press the STATUS pb to display the STATUS page.",
      },
      {
        heading: "CLEAR TO DISCONNECT ……… ANNOUNCE (PF)",
        paragraph: "The ground crew: removes the chocks · disconnects the interphone · makes the hand signal on the left or right side.",
      },
      {
        heading: "Sequence (PF / PM)",
        bullets: [
          "NW STRG DISC MEMO ……… CHECK NOT DISPLAYED (PF)",
          "AFTER START C/L ……… COMPLETE (PF-PM)",
        ],
      },
    ],
  },
];

export const MCC_SOP_04: MccLesson = {
  id: "a3200000-0000-0000-0000-000000000104",
  course_id: MCC_COURSE_ID,
  title: "SOP-04. Antes del pushback, arranque de motores y después del arranque",
  slug: "sop-04-pushback-arranque-after-start",
  sequence_order: 10,
  lesson_order: 10,
  min_seconds: 3600,
  content_html: joinSlides(SOP_04_SLIDES),
};

export const SOP_04_SLIDE_COUNT = SOP_04_SLIDES.length;
