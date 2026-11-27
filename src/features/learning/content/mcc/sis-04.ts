/**
 * SIS-04 — Mandos de vuelo, tren, puertas y oxígeno (0,67 h · 40 min).
 *
 * Alcance: Curso APS MCC — Airbus A320ceo CFM56-5B (simulador Entrol A32).
 * Sustituye a CTA-4. Fuentes: FCOM 23MAR26 DSC-27 (Flight Controls), DSC-32 (Landing Gear), DSC-52 (Doors) y
 * DSC-35 (Oxygen), solo bloques aplicables a la variante de referencia (grupo EC-ILQ) o ALL. La variante de cada
 * figura se ha comprobado con `scratch/fcom_fig_applic.py`.
 * Sin repetir: la filosofía fly-by-wire, las protecciones y el sidestick están en INT-01; las leyes degradadas en
 * situación anormal, en SOP-13; las máscaras de oxígeno de cabina, en SOP-13. Aquí, la arquitectura y los
 * paneles/páginas ECAM. Sin equipos opcionales (puerta de carga trasera tapada en la figura, cuarta máscara).
 */
import { MCC_MODULES, joinSlides, mccMinSeconds, mccVideoSeconds, type MccLesson, type MccSlideSpec } from "./slide-builder.ts";

const MCC_COURSE_ID = "a3200000-0000-0000-0000-000000000320";
const IMG_BASE = "https://www.blueteam.es/elearning/media/mcc/pdp";
const EYEBROW = "APS MCC · A320 · SIS-04";

/** Versión común de caché de las figuras FCOM de esta lección. */
const IMG_VERSION = 1795636001;
const fig = (name: string) => `${IMG_BASE}/fcom_a320_sis4_${name}.webp?v=${IMG_VERSION}`;
const src = (sections: string) => `Source: FCOM A320 ${sections}`;

const SIS_04_SLIDES: MccSlideSpec[] = [
  // ── A. Mandos de vuelo (ATA 27) ──────────────────────────────────────────
  {
    comment: "SLIDE SIS-04.1: Flight controls — basic principle and control surfaces",
    eyebrow: EYEBROW,
    title: "4.1 Mandos de vuelo: principio y superficies",
    subtitle: "ATA 27 · Flight Controls",
    leftPct: 50,
    leftTitle: "GENERAL (DSC-27-10-10)",
    rightTitle: "CONTROL SURFACES",
    image: fig("fctl_general"),
    imageAlt: "Flight control surfaces: slats, flaps, ailerons, spoilers, horizontal stabilizer, elevators and rudder",
    sourceRef: src("DSC-27-10-10 Basic Principle / Control Surfaces"),
    cards: [
      {
        heading: "Basic principle",
        bullets: [
          "Flight control surfaces are all electrically-controlled, and hydraulically-actuated. The stabilizer and rudder can also be mechanically-controlled.",
          "Pilots use sidesticks to fly the aircraft in pitch and roll (and in yaw, indirectly, through turn coordination). Computers interpret pilot input and move the flight control surfaces, as necessary.",
          "In normal law the computers prevent excessive maneuvers and exceedance of the safe envelope in pitch and roll axis. However, as on conventional aircraft, the rudder has no such protection.",
        ],
      },
    ],
    table: {
      headers: ["Surface", "Control"],
      rows: [
        ["Elevator · Ailerons · Spoilers · Speed brakes", "Electrical"],
        ["Stabilizer", "Electrical for normal or alternate control. Mechanical for manual trim control"],
        ["Rudder", "Mechanical, however control for yaw damping, turn coordination and trim is electrical"],
      ],
    },
  },
  {
    comment: "SLIDE SIS-04.2: Flight control computers and cockpit controls",
    eyebrow: EYEBROW,
    title: "4.2 Ordenadores de mandos de vuelo y mandos en cabina",
    subtitle: "ATA 27 · Computers",
    leftPct: 50,
    leftTitle: "COMPUTERS · COCKPIT CONTROLS (DSC-27-10-10)",
    rightTitle: "GENERAL ARCHITECTURE",
    image: fig("fctl_computers"),
    imageAlt: "Flight control architecture: ELAC, SEC and FAC per surface with green, blue and yellow hydraulic power",
    sourceRef: src("DSC-27-10-10 Computers / Cockpit Controls / DSC-27-10-20 General Architecture"),
    cards: [],
    table: {
      headers: ["Computer", "Function"],
      rows: [
        ["2 ELACs (Elevator Aileron Computer)", "Normal elevator and stabilizer control. Aileron control."],
        ["3 SECs (Spoilers Elevator Computer)", "Spoilers control. Standby elevator and stabilizer control."],
        ["2 FACs (Flight Augmentation Computer)", "Electrical rudder control."],
        ["2 FCDC (Flight Control Data Concentrators)", "Acquire data from the ELACs and SECs and send it to the EIS and the CFDS."],
      ],
    },
    alert: {
      level: "NOTE",
      text: "The two sidesticks are not coupled mechanically. Two pairs of rigidly interconnected pedals give mechanical control of the rudder. Mechanically interconnected handwheels control the THS; a single switch sets the rudder trim. There is no manual switch for trimming the ailerons.",
    },
  },
  {
    comment: "SLIDE SIS-04.3: Pitch control architecture",
    eyebrow: EYEBROW,
    title: "4.3 Control en cabeceo: elevadores y THS",
    subtitle: "ATA 27 · Pitch Control",
    leftPct: 55,
    leftTitle: "PITCH CONTROL (DSC-27-10-20)",
    rightTitle: "PITCH CONTROL SCHEMATIC",
    image: fig("fctl_hydraulics"),
    imageAlt: "Pitch control schematic: ELAC and SEC, servoloop priorities, THS actuator and elevators",
    sourceRef: src("DSC-27-10-20 Pitch Control"),
    cards: [
      {
        heading: "Deflections",
        paragraph:
          "Two elevators and the THS control the aircraft in pitch. The maximum elevator deflection is 30 ° nose up, and 17 ° nose down. The maximum THS deflection is 13.5 ° nose up, and 4 ° nose down.",
      },
      {
        heading: "Electrical control",
        bullets: [
          "In normal operations, ELAC2 controls the elevators and the horizontal stabilizer; the green and yellow hydraulic jacks drive the left and right elevator surfaces. The THS is driven by N° 1 of three electric motors.",
          "If ELAC2 (or its hydraulic systems or jacks) fails, pitch control shifts to ELAC1 (blue hydraulic jacks, THS motor N° 2).",
          "If neither ELAC is available, pitch control shifts to SEC1 or SEC2, and to THS motor N° 2 or N° 3.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "Mechanical control of the THS is available from the pitch trim wheel at any time, if either the green or yellow hydraulic system is functioning. Mechanical control from the pitch trim wheel has priority over electrical control.",
    },
  },
  {
    comment: "SLIDE SIS-04.4: ECAM F/CTL page",
    eyebrow: EYEBROW,
    title: "4.4 Página ECAM F/CTL",
    subtitle: "ATA 27 · Controls and Indicators",
    leftPct: 58,
    leftTitle: "ECAM F/CTL PAGE (DSC-27-20)",
    rightTitle: "ECAM F/CTL PAGE",
    image: fig("ecam_fctl"),
    imageAlt: "ECAM F/CTL page: spoilers and speed brakes, ailerons, ELAC and SEC, pitch trim, elevators and rudder",
    sourceRef: src("DSC-27-20 ECAM F/CTL Page"),
    cards: [],
    table: {
      headers: ["Indication", "Meaning"],
      rows: [
        ["(1) Spoilers / Speed brakes", "Green: deflected > 2.5 ° or retracted. Amber: fault. Amber ×: not valid."],
        ["(2) Hydraulic pressure", "Normally green. Becomes amber if hydraulic system pressure decreases."],
        ["(3) ELAC / SEC", "Normally green. Amber if computer fails, pb-sw is OFF, or both FCDCs fail."],
        ["(4) Aileron position", "White scale and green index. Amber when neither (G nor B) servojack is available."],
        ["(5) AIL / ELEV actuators", "“G” and “B” green; amber on low hydraulic press. Partial box amber if computer/actuator fails."],
        ["(6) Elevator position", "White scale and green index. Index amber when both actuators are unavailable."],
        ["(7) Pitch trim position", "Green numbers; amber if G and Y hydraulic pressure decreases. “PITCH TRIM” white; amber if jammed."],
        ["(8) Rudder & travel limiter", "Normally green. Rudder symbol amber if G, B, and Y hydraulic pressures are low."],
      ],
    },
    alert: {
      level: "NOTE",
      text: "The white boxes at each end of the primary flight control surfaces indicate acceptable range for the flight control check.",
    },
  },
  {
    comment: "SLIDE SIS-04.5: Slats and flaps description",
    eyebrow: EYEBROW,
    title: "4.5 Slats y flaps: componentes",
    subtitle: "ATA 27 · Flaps and Slats",
    leftPct: 55,
    leftTitle: "FLAPS AND SLATS (DSC-27-30-10)",
    rightTitle: "SLAT/FLAP SYSTEM",
    image: fig("flaps_slats"),
    imageAlt: "Slat and flap system: flaps lever, SFCC 1 and 2, PCUs, wing tip brakes and position pick-off units",
    sourceRef: src("DSC-27-30-10 General - Slat Flap Surfaces"),
    cards: [
      {
        heading: "Surfaces",
        paragraph:
          "Five slat surfaces and two flap surfaces per wing. These surfaces are electrically controlled and hydraulically operated. The flight crew extends the slats and flaps by moving the flaps lever on the center pedestal. It has five positions.",
      },
      {
        heading: "Main components",
        bullets: [
          "Two SFCCs, each containing one slat channel and one flap channel.",
          "A PCU made of two independent hydraulic motors coupled by a differential gearbox: green and blue hydraulic power for the slats, yellow and green power for the flaps. The POB locks the transmission when the surfaces have reached the selected position or if hydraulic power fails.",
          "The WTBs activate in the case of an uncommanded movement of the surfaces, such as runaway, asymmetry or over speed. They cannot be released in flight.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SIS-04.6: Flaps lever and alpha/speed lock",
    eyebrow: EYEBROW,
    title: "4.6 Palanca de flaps, CONF 1+F y alpha/speed lock",
    subtitle: "ATA 27 · Flaps and Slats",
    leftPct: 55,
    leftTitle: "FLAPS LEVER · ALPHA/SPEED LOCK (DSC-27-30-10)",
    rightTitle: "FLAPS LEVER",
    image: fig("flaps_lever"),
    imageAlt: "FLAPS lever with positions 0, 1, 2, 3 and FULL",
    sourceRef: src("DSC-27-30-10 Flaps Lever / Alpha/Speed Lock Function"),
    cards: [
      {
        heading: "FLAPS lever",
        bullets: [
          "The FLAPS lever has five positions: 0, 1, 2, 3 and FULL. Two configurations correspond to position 1: Configuration 1 and Configuration 1 + F.",
          "When in Configuration 1 + F, the flaps retract to 0 ° automatically at 210 kt (before the airspeed reaches VFE).",
          "When in configuration 1, the flaps extend to 10 ° automatically at 100 kt.",
        ],
      },
      {
        heading: "Alpha/speed lock function (slats)",
        bullets: [
          "This function inhibits slat retraction at high angles-of-attack and low speeds. When the FLAPS lever is set to 0, it inhibits slats retraction if the AOA is above 8.5 °, or the speed is less than 148 kt.",
          "Once active, the slats retract to 0 when the AOA is less than 7.6 ° and the speed is above 154 kt.",
        ],
      },
    ],
  },
  // ── B. Tren de aterrizaje (ATA 32) ───────────────────────────────────────
  {
    comment: "SLIDE SIS-04.7: Landing gear general and operation",
    eyebrow: EYEBROW,
    title: "4.7 Tren de aterrizaje: descripción y funcionamiento",
    subtitle: "ATA 32 · Landing Gear",
    leftPct: 55,
    leftTitle: "GEARS AND DOORS (DSC-32-10-10)",
    rightTitle: "GEAR EXTENSION AND RETRACTION",
    image: fig("lg_general"),
    imageAlt: "Landing gear control: LGCIU, safety valve, cut off valve, door and gear selector valves",
    sourceRef: src("DSC-32-10-10 Description / Landing Gears and Doors Operation"),
    cards: [
      {
        heading: "Description",
        paragraph:
          "Two main landing gears that retract inboard and one nose landing gear that retracts forward. Gear and doors are electrically controlled and hydraulically operated. Each main gear has twin wheels, an oleopneumatic shock absorber and an antiskid brake on each wheel.",
      },
      {
        heading: "Normal operation",
        bullets: [
          "The LGCIUs control the sequencing of gear and doors electrically. One LGCIU controls one complete gear cycle, then switches over automatically to the other at the completion of the retraction cycle. It also switches over in case of failure.",
          "The green hydraulic system actuates all gear and doors. When the aircraft speed is above 264 kt, a safety valve automatically cuts off hydraulic supply to the landing gear system. Below 260 kt, the supply remains cut off as long as the landing gear lever is up.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "Gravity extension: turning the crank isolates the landing gear hydraulics from the green system, unlocks the doors and the gears, and allows gravity to drop the gear into the extended position. The gear doors remain open.",
    },
  },
  {
    comment: "SLIDE SIS-04.8: LGCIU",
    eyebrow: EYEBROW,
    title: "4.8 LGCIU: posición del tren y señal aire/tierra",
    subtitle: "ATA 32 · Landing Gear System/Interface",
    leftPct: 50,
    leftTitle: "LGCIU (DSC-32-10-20)",
    rightTitle: "LGCIU PROXIMITY DETECTORS",
    image: fig("lg_interface"),
    imageAlt: "LGCIU inputs: shock absorbers, downlock, uplock, doors and flap attachments",
    sourceRef: src("DSC-32-10-10 General / DSC-32-10-20 Landing Gear Control Interface Unit"),
    cards: [
      {
        heading: "Landing Gear Control and Interface Units",
        paragraph:
          "Two LGCIUs control the extension and retraction of the gear and the operation of the doors. They also supply information about the landing gear to ECAM for display, and send signals indicating whether the aircraft is in flight or on the ground to other aircraft systems.",
      },
      {
        heading: "Landing gear information",
        bullets: [
          "The LGCIUs receive landing gear position information from proximity detectors when the landing gears are locked down or up, the shock absorbers are compressed or extended, or the landing gear doors are open or closed.",
          "They also receive position information from the cargo door and landing flap systems.",
          "In case of a LGCIU failure, the landing gear is controlled by the remaining healthy LGCIU.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SIS-04.9: Landing gear lever and indicator panel",
    eyebrow: EYEBROW,
    title: "4.9 Palanca del tren y panel indicador",
    subtitle: "ATA 32 · Controls and Indicators",
    leftPct: 55,
    leftTitle: "L/G LEVER · INDICATOR PANEL (DSC-32-10-40)",
    rightTitle: "LANDING GEAR LEVER",
    image: fig("lg_panel"),
    imageAlt: "Landing gear selector lever with UP and DOWN positions",
    sourceRef: src("DSC-32-10-40 Landing Gear Indicator Panel / Landing Gear Selector Lever"),
    cards: [
      {
        heading: "(1) Landing gear selector lever · (2) Red arrow",
        bullets: [
          "(1) Two-position selector lever sends electrical signals to the two LGCIUs, which control the green hydraulic supply to the landing gear system by means of selector valves.",
          "The flight crew must always move the L/G lever in one continuous movement (i.e. with no stop between both positions).",
          "When UP or DOWN is selected (< 260 kt): all doors open, each gear moves to the selected position, all doors close. (2) Red arrow lights up if gear is not locked down in landing configuration.",
        ],
      },
      {
        heading: "Landing gear indicator panel (LGCIU1)",
        bullets: [
          "Green triangle: the gear is locked down. Red UNLK: the gear is not locked in the selected position.",
          "If one UNLK indication remains on, the landing gear position can be confirmed using the WHEEL SD page (information from LGCIU 1 & 2). Only one green triangle on each landing gear is sufficient to confirm that the landing gear is downlocked.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SIS-04.10: ECAM WHEEL page",
    eyebrow: EYEBROW,
    title: "4.10 Página ECAM WHEEL",
    subtitle: "ATA 32 · WHEEL SD Page",
    leftPct: 50,
    leftTitle: "WHEEL SD PAGE (DSC-32)",
    rightTitle: "ECAM WHEEL PAGE",
    image: fig("ecam_wheel"),
    imageAlt: "ECAM WHEEL page: gear and door position, brake temperatures, released brakes, steering, anti-skid and autobrake",
    sourceRef: src("DSC-32-10-40 WHEEL SD Page / DSC-32-30 Brakes and Antiskid"),
    cards: [
      {
        heading: "(1) Landing gear position indication — 2 triangles for each gear",
        bullets: [
          "Green triangle indicates that one LGCIU detects a landing gear downlocked",
          "Red triangle indicates that one LGCIU detects a landing gear in transit",
          "No triangle indicates that one LGCIU detects a landing gear uplocked",
          "Amber crosses indicate that one LGCIU is failed.",
        ],
      },
      {
        heading: "(2) Doors · (3) UP LOCK · (4) L/G CTL",
        bullets: [
          "(2) Landing gear door position: green line when doors fully closed; amber when not fully closed; amber crosses if position not valid.",
          "(3) UP LOCK appears amber along with an ECAM caution if the landing gear uplock is engaged when the landing gear is down locked.",
          "(4) L/G CTL appears amber along with an ECAM caution if the landing gear lever and the landing gear position do not agree.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "Only one green triangle on each landing gear strut is sufficient to confirm that the landing gear is downlocked.",
    },
  },
  {
    comment: "SLIDE SIS-04.11: Nose wheel steering",
    eyebrow: EYEBROW,
    title: "4.11 Dirección de la rueda de morro",
    subtitle: "ATA 32 · Nose Wheel Steering",
    leftPct: 55,
    leftTitle: "NOSE WHEEL STEERING (DSC-32-20-10)",
    rightTitle: "NOSE WHEEL STEERING",
    image: fig("nws"),
    imageAlt: "Nose wheel steering: hand wheels, rudder pedals, autopilot, BSCU and steering servo valve",
    sourceRef: src("DSC-32-20-10 Nose Wheel Steering - Description"),
    cards: [
      {
        heading: "Description",
        paragraph:
          "A hydraulic actuating cylinder steers the nose wheel. The green hydraulic system supplies pressure to the cylinder, and electric signals from the Brake and Steering Control Unit (BSCU) control it.",
      },
      {
        heading: "The BSCU receives orders from",
        bullets: [
          "Captain's, and the First Officer's steering hand wheels (orders added algebraically), or",
          "Rudder pedals, or",
          "Autopilot.",
        ],
      },
      {
        heading: "The steering system receives actuating hydraulic pressure when",
        paragraph: "A/SKID & N/W STRG switch is ON · Towing control lever is in normal position · At least one engine is running · Aircraft is on ground.",
      },
    ],
  },
  {
    comment: "SLIDE SIS-04.12: Brakes and antiskid",
    eyebrow: EYEBROW,
    title: "4.12 Frenos y antiskid",
    subtitle: "ATA 32 · Brakes and Antiskid",
    leftPct: 55,
    leftTitle: "BRAKES AND ANTISKID (DSC-32-30-10)",
    rightTitle: "BRAKING SYSTEM",
    image: fig("brakes"),
    imageAlt: "Braking system: BSCU, normal and alternate servo valves, accumulator and parking brake",
    sourceRef: src("DSC-32-30-10 Brakes and Antiskid - Description"),
    cards: [
      {
        heading: "Brakes",
        bullets: [
          "The main wheels are equipped with carbon multidisc brakes, which can be actuated by either of two independent brake systems.",
          "The normal system uses green hydraulic pressure, whereas the alternate system uses the yellow hydraulic system backed up by the hydraulic accumulator.",
          "All braking functions are controlled by a two-channel Brake and Steering Control Unit (BSCU). The main gear wheels are fitted with fusible plugs which protect against tire burst, in the event of overheat.",
        ],
      },
      {
        heading: "Antiskid",
        bullets: [
          "The antiskid system provides maximum braking efficiency by maintaining the wheels at the limit of an impending skid. It is deactivated below 20 kt (ground speed).",
          "Without using autobrake, full braking performance is achieved only with brake pedals at full deflection.",
          "Four modes of operation: normal braking · alternate braking with antiskid · alternate braking without antiskid · parking brake.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SIS-04.13: Autobrake",
    eyebrow: EYEBROW,
    title: "4.13 Autobrake: armado, activación y desarme",
    subtitle: "ATA 32 · Auto Brake",
    leftPct: 58,
    leftTitle: "AUTO BRAKE (DSC-32-30-10)",
    rightTitle: "AUTO/BRK PANEL",
    image: fig("autobrake"),
    imageAlt: "AUTO/BRK panel (3) with LO, MED and MAX pushbuttons (DECEL and ON)",
    sourceRef: src("DSC-32-30-10 Auto Brake - System Arming / Activation / Disarming / DSC-32-30-20 Panel"),
    cards: [
      {
        heading: "Purpose",
        paragraph:
          "Reduce the braking distance in case of an aborted takeoff, and establish and maintain a selected deceleration rate during landing, thereby improving passenger comfort and reducing crew workload.",
      },
      {
        heading: "Arming · Activation · Disarming",
        bullets: [
          "Arming ((3) LO, MED or MAX): green pressure available · anti-skid electrically-powered · no failure in the braking system · at least one ADIRU available. MAX autobrake mode cannot be armed in flight.",
          "Activation: when ground spoilers extension is detected (LO and MED), and with wheel speed > 40 kt (MAX); at least two SECs must be operative. In an acceleration stop below 72 kt, automatic braking will not activate because ground spoilers will not extend.",
          "Disarming: pushbutton pressed · arming condition lost · after take-off/touch and go · enough deflection of at least one brake pedal.",
        ],
      },
    ],
  },
  // ── C. Puertas y oxígeno (ATA 52 · 35) ───────────────────────────────────
  {
    comment: "SLIDE SIS-04.14: Doors and emergency exits",
    eyebrow: EYEBROW,
    title: "4.14 Puertas y salidas de emergencia",
    subtitle: "ATA 52 · Doors",
    leftPct: 45,
    leftTitle: "DOORS (DSC-52-10-10)",
    rightTitle: "DOORS AND EXITS",
    image: fig("doors"),
    imageAlt: "Doors and exits: passenger doors, cabin emergency exits, cockpit emergency exits, cargo and avionics doors",
    sourceRef: src("DSC-52-10-10 Description / DSC-52-10-20 Passenger Doors"),
    cards: [
      {
        heading: "The A320's fuselage has",
        bullets: [
          "Four passenger doors",
          "Four emergency exits in the cabin",
          "Cockpit emergency exits (two sliding windows)",
          "Cargo compartment doors",
          "Four avionic compartment access doors.",
        ],
      },
      {
        heading: "Passenger doors (DSC-52-10-20)",
        bullets: [
          "Four plug-type doors that open outward and forward (two on each side: FWD and AFT).",
          "Operated from inside or outside; normal operation is manual, with hydraulic damping.",
          "Each door has a slide stowed in a container attached to the inboard lower side of the door, and a cabin pressure warning light.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SIS-04.15: Oxygen — system and cockpit fixed oxygen",
    eyebrow: EYEBROW,
    title: "4.15 Oxígeno: sistema y máscaras de la tripulación",
    subtitle: "ATA 35 · Oxygen",
    leftPct: 55,
    leftTitle: "OXYGEN (DSC-35-10 · 35-20-10)",
    rightTitle: "CREW OXYGEN MASK",
    image: fig("oxygen"),
    imageAlt: "Donning the full-face quick-donning mask: squeeze the red grips, harness inflates, release to deflate",
    sourceRef: src("DSC-35-10 General / DSC-35-20-10 Fixed Oxygen System for Cockpit"),
    cards: [
      {
        heading: "The oxygen system consists of",
        bullets: [
          "A cockpit-fixed oxygen system, which supplies adequate breathing oxygen to the cockpit occupants in case of depressurization, or emission of smoke and noxious gases.",
          "A cabin-fixed oxygen system, which supplies oxygen for cabin occupants in case of depressurization.",
          "A portable oxygen system, in both the cockpit and cabin.",
        ],
      },
      {
        heading: "Cockpit fixed oxygen",
        bullets: [
          "A high-pressure cylinder in the left-hand lower fuselage, a pressure regulator, overpressure safety systems, and a supply solenoid valve that allows the crew to shut off the distribution system.",
          "The crewmember squeezes the red grips to pull the mask out of its box, and this action causes the mask harness to inflate.",
          "With the regulator set to NORMAL, the user breathes a mixture of cabin air and oxygen. 100 % supplies pure oxygen at all cabin altitudes. The emergency overpressure knob gives pure oxygen at positive pressure.",
        ],
      },
    ],
  },
];

export const MCC_SIS_04: MccLesson = {
  id: "a3200000-0000-0000-0000-000000000204",
  course_id: MCC_COURSE_ID,
  title: "SIS-04. Mandos de vuelo, tren de aterrizaje, puertas y oxígeno",
  slug: "sis-04-mandos-tren-puertas-oxigeno",
  sequence_order: 21,
  lesson_order: 21,
  min_seconds: mccMinSeconds(SIS_04_SLIDES.length, mccVideoSeconds(SIS_04_SLIDES)),
  module_title: MCC_MODULES.SYSTEMS,
  content_html: joinSlides(SIS_04_SLIDES),
};

export const SIS_04_SLIDE_COUNT = SIS_04_SLIDES.length;
