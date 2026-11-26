/**
 * INT-01 — Filosofía de diseño Airbus (módulo de introducción).
 *
 * Alcance: Curso APS MCC — Airbus A320ceo CFM56-5B (simulador Entrol A32).
 * Fuente del texto: FCTM 23MAR26, capítulo «Airbus Operational Philosophy — Design Philosophy»
 * (AOP-10-10 a AOP-10-40), bloques «Applicable to: ALL».
 * Imágenes: figuras del FCOM 23MAR26 (DSC-27 Flight Controls y figuras ya publicadas de SIS-01/02 y SOP-04)
 * y la figura de tipos de procedimientos del propio FCTM (AOP-10-40).
 * Petición del HT (26-nov-2026): módulo de introducción a la filosofía Airbus antes de las SOP.
 * Sin repetir: las Golden Rules y el reparto PF/PM están en SOP-01; la gestión ECAM/QRH/OEB en SOP-11.
 */
import { MCC_MODULES, joinSlides, mccMinSeconds, mccVideoSeconds, type MccLesson, type MccSlideSpec } from "./slide-builder.ts";

const MCC_COURSE_ID = "a3200000-0000-0000-0000-000000000320";
const IMG_BASE = "https://www.blueteam.es/elearning/media/mcc/pdp";
const EYEBROW = "APS MCC · A320 · INT-01";

/** Versión común de caché de las figuras nuevas de esta lección. */
const IMG_VERSION = 1795633000;
const fig = (name: string) => `${IMG_BASE}/fcom_a320_${name}.webp?v=${IMG_VERSION}`;
/** Figuras ya publicadas en otras lecciones (se reutilizan tal cual). */
const sisFig = (name: string) => `${IMG_BASE}/fcom_a320_sis_${name}.webp?v=1795630000`;
const sis2Fig = (name: string) => `${IMG_BASE}/fcom_a320_sis_${name}.webp?v=1795631000`;
const pubFig = (name: string) => `${IMG_BASE}/fcom_a320_${name}.webp`;
const src = (sections: string) => `Source: FCTM A320 ${sections}`;

const INT_01_SLIDES: MccSlideSpec[] = [
  // ── A. Cabina ────────────────────────────────────────────────────────────
  {
    comment: "SLIDE INT-01.1: Introduction and cockpit objective",
    eyebrow: EYEBROW,
    title: "1.1 Filosofía Airbus: introducción y objetivo de la cabina",
    subtitle: "Airbus Operational Philosophy · Design Philosophy",
    leftPct: 50,
    leftTitle: "INTRODUCTION / OBJECTIVE (AOP-10-10 · AOP-10-20-10)",
    rightTitle: "COCKPIT ARRANGEMENT",
    image: sisFig("cockpit_arrangement"),
    imageAlt: "General arrangement of the cockpit display units and panels",
    sourceRef: src("AOP-10-10 Introduction / AOP-10-20-10 Cockpit Philosophy - Objective"),
    cards: [
      {
        heading: "Introduction",
        paragraph: "A safe and efficient flight results from an effective interaction between:",
        bullets: ["The Airbus cockpit philosophy", "The procedures", "The pilots (human mechanisms and behaviors)."],
      },
      {
        heading: "Objective",
        paragraph:
          "The Airbus cockpit is designed to achieve the operational needs of the flight crew throughout the aircraft operating environment, while ensuring the maximum of commonality within the Fly-By-Wire family.",
      },
    ],
  },
  {
    comment: "SLIDE INT-01.2: The 10 high level design requirements",
    eyebrow: EYEBROW,
    title: "1.2 Los 10 requisitos de diseño de la cabina",
    subtitle: "Cockpit Philosophy · Objective",
    leftPct: 58,
    leftTitle: "10 HIGH LEVEL DESIGN REQUIREMENTS (AOP-10-20-10)",
    rightTitle: "PFD — HUMAN MACHINE INTERFACE",
    image: sisFig("pfd_attitude"),
    imageAlt: "Primary flight display attitude data",
    sourceRef: src("AOP-10-20-10 Cockpit Philosophy - Objective"),
    cards: [
      {
        heading: "The design of the cockpit is built according to 10 high level design requirements",
        bullets: [
          "1. The flight crew is ultimately responsible for the safe operation of the aircraft",
          "2. If required, the flight crew can exercise their full authority by performing intuitive actions, while aiming at eliminating the risks of overstress or overcontrol",
          "3. Accommodate for a wide range of pilot skill levels and experience acquired on previous aircraft",
          "4. Ensure safety, passenger comfort, and efficiency, in that order of priority",
          "5. Simplify the tasks of the flight crew, by enhancing situation and aircraft status awareness",
          "6. The automation is considered as an additional feature available to the flight crew, who can decide when to delegate and what level of assistance they need in accordance with the situation",
          "7. The design of the Human Machine Interfaces (HMI) takes into account system features together with the strengths and weaknesses of the flight crew",
          "8. The state of the art of the human factors considerations are applied in the system design process, in order to manage the potential errors of the flight crew",
          "9. The overall cockpit design contributes to facilitate and to enhance the flight crew communication (e.g. tasksharing, teamworking)",
          "10. The use of new technologies and implementation of new functionalities are imposed by: significant safety benefits, obvious operational advantages, a clear response to the needs of the flight crew.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE INT-01.3: Arrangement of panels — general, overhead panel, glareshield",
    eyebrow: EYEBROW,
    title: "1.3 Disposición de los paneles: techo y glareshield",
    subtitle: "Cockpit Philosophy · Design Principles",
    leftPct: 50,
    leftTitle: "ARRANGEMENT OF PANELS (AOP-10-20-20)",
    rightTitle: "GLARESHIELD — FCU & EFIS CONTROL PANELS",
    image: pubFig("fcu_panels"),
    imageAlt: "Glareshield with the FCU and EFIS control panels within easy access for both pilots",
    sourceRef: "Source: FCTM A320 AOP-10-20-20 Arrangement of Panels & FCOM A320 DSC-22_10-40-20 FCU",
    cards: [
      {
        heading: "General",
        paragraph:
          "The purpose of the layout of the forward facing cockpit is to take into account the operational requirements for a two pilot-cockpit. This layout enables to significantly reduce the flight crew workload, to optimize the tasksharing and to minimize “Head down” time.",
      },
      {
        heading: "The location of the main controls takes into account",
        bullets: [
          "The relative importance of each system · The frequency of operation by the pilots",
          "The ease with which controls can be reached · The shape of the control (designed to prevent confusion) · The duplication of control, if required.",
        ],
      },
      {
        heading: "Overhead panel · Glareshield",
        bullets: [
          "The system control panels linked to an engine are vertically organized, in order to permit the accomplishment of Normal/Abnormal procedures in a straight forward and intuitive manner. In addition, this arrangement aims at minimizing the errors of the flight crew.",
          "The glareshield supports the short term tactical controls for the Auto Flight System (AFS). The operation of the controls can be achieved “Head Up” and within easy access for both pilots.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE INT-01.4: Main instrument panel and pedestal",
    eyebrow: EYEBROW,
    title: "1.4 Panel principal de instrumentos y pedestal",
    subtitle: "Cockpit Philosophy · Design Principles",
    leftPct: 50,
    leftTitle: "ARRANGEMENT OF PANELS (AOP-10-20-20)",
    rightTitle: "PEDESTAL",
    image: fig("int_pedestal"),
    imageAlt: "Pedestal: speed brake lever, rudder trim and flaps lever",
    sourceRef: "Source: FCTM A320 AOP-10-20-20 Arrangement of Panels & FCOM A320 DSC-27-20-30 Pedestal",
    cards: [
      {
        heading: "Main instrument panel",
        paragraph: "The main instrument panel mainly supports the display units which are necessary to:",
        bullets: [
          "FLY (PFD)",
          "NAVIGATE (ND)",
          "MONITOR the various aircraft systems (ECAM).",
        ],
      },
      {
        heading: "Pedestal",
        paragraph: "The pedestal mainly supports the controls for:",
        bullets: [
          "Engine and thrust (engine master levers, thrust levers)",
          "Aircraft configuration (speed brake lever, flaps lever, rudder trim)",
          "Navigation (MCDU, FMS) · Communication (RMP).",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "The display units are located in the full and non-obstructed view of both pilots.",
    },
  },
  {
    comment: "SLIDE INT-01.5: Alerts — triggering and indication",
    eyebrow: EYEBROW,
    title: "1.5 Alertas: cuándo se activan y cómo se presentan",
    subtitle: "Cockpit Philosophy · Alerts",
    leftPct: 60,
    leftTitle: "ALERTS (AOP-10-20-20)",
    rightTitle: "ECAM DISPLAY UNITS",
    image: sisFig("ecam_du_arrangement"),
    imageAlt: "ECAM display units: Engine/Warning Display and System Display",
    sourceRef: src("AOP-10-20-20 Alerts"),
    cards: [
      {
        heading: "Alert triggering — as a general rule, an alert is required when",
        bullets: [
          "A system failure occurs · The aircraft violates the normal flight envelope",
          "An unexpected event related to safety occurs (e.g. TCAS, TAWS) · An outside message is coming up (e.g. cabin, ATC)",
          "A system automatically changes its mode of operation (e.g. AP auto-disconnection, mode reversion).",
          "The alerts trigger visual and/or aural indications, are ranked by severity and priority, and are inhibited when not relevant in some specific flight phases.",
        ],
      },
      {
        heading: "Alert indication",
        bullets: [
          "Initial indication (visual or aural) via the MASTER CAUTION or MASTER WARNING",
          "The Engine Warning Display (EWD) displays the title of the alert related to the failure",
          "The System Display (SD) automatically displays the affected system",
          "On the overhead panel, the pushbutton/pushbutton-switch light of the affected system comes on in amber or red.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "The flight crew is responsible to take any appropriate or required action to ensure a safe operation of the aircraft, even in the absence of alert(s) and shall take into account the entire operational environment.",
    },
  },
  {
    comment: "SLIDE INT-01.6: Dark cockpit concept for overhead panel",
    eyebrow: EYEBROW,
    title: "1.6 Dark cockpit en el panel del techo",
    subtitle: "Cockpit Philosophy · Utilization Principles",
    leftPct: 50,
    leftTitle: "DARK COCKPIT CONCEPT (AOP-10-20-30)",
    rightTitle: "FUEL PANEL — LIGHTS",
    image: sis2Fig("fuel_overhead"),
    imageAlt: "FUEL overhead panel pushbuttons with FAULT and OFF lights",
    sourceRef: src("AOP-10-20-30 Dark Cockpit Concept for Overhead Panel"),
    cards: [
      {
        heading: "Controls",
        paragraph: "Most of the systems are controlled from the overhead panel via: pushbutton, pushbutton switch, switch, knob, knob-selector.",
      },
      {
        heading: "Each pushbutton/pushbutton switch has one or two lights",
        bullets: [
          "The upper one is dedicated to alert or system status (e.g. FAULT light, OPEN light). If no alert or system status is required, two gray dots replace the light.",
          "The lower one corresponds, on pushbutton switch, to the control selection of the system (e.g. ON, OFF, OVRD), or, on pushbutton, to the system status. If no control system selection is required, two gray dots replace the light.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "The general operational rule is: Light out philosophy. The systems are ready and fit to fly.",
    },
  },
  {
    comment: "SLIDE INT-01.7: Color coding",
    eyebrow: EYEBROW,
    title: "1.7 Código de colores",
    subtitle: "Cockpit Philosophy · Color Coding",
    leftPct: 50,
    leftTitle: "COLOR CODING (AOP-10-20-30)",
    rightTitle: "SYSTEM DISPLAY — COLORS",
    image: sisFig("sd_page"),
    imageAlt: "System display page with color-coded indications",
    sourceRef: src("AOP-10-20-30 Color Coding"),
    cards: [
      {
        heading: "Display units",
        paragraph:
          "The information provided on the display units is color coded to indicate: the status of the system (ECAM or FMA), the status of the mode (FMA), the nature of the information (e.g. title of an alert, action to be performed, information).",
      },
    ],
    table: {
      headers: ["Pushbutton light", "Indicates"],
      rows: [
        ["Amber", "That a system is failed"],
        ["Red", "A failure that may require an immediate corrective action"],
        ["Green", "That a system operates normally"],
        ["Blue", "The normal operation of a temporarily selected system"],
        ["White", "The abnormal position of a pushbutton switch or maintenance/test result indication"],
        ["Blank", "The system is fit to fly"],
      ],
    },
  },
  {
    comment: "SLIDE INT-01.8: Need to see concept and less paper cockpit",
    eyebrow: EYEBROW,
    title: "1.8 «Need to see» y cabina con menos papel",
    subtitle: "Cockpit Philosophy · Utilization Principles",
    leftPct: 50,
    leftTitle: "NEED TO SEE / LESS PAPER COCKPIT (AOP-10-20-30)",
    rightTitle: "ND — ARC MODE",
    image: sisFig("nd_arc"),
    imageAlt: "Navigation display in ARC mode",
    sourceRef: src("AOP-10-20-30 Need to See Concept / Less Paper Cockpit"),
    cards: [
      {
        heading: "Need to see concept",
        paragraph:
          "The DUs may display information that can potentially overload the flight crew. In order to prevent this situation, some principles have been established to provide the flight crew with the right information, at the right time:",
        bullets: [
          "The right information in a given flight phase",
          "Uncluttered, and non-overloaded “need to show” data",
          "Redundant, or consolidated data for safety related parameters",
          "Predictive information on essential parameters.",
        ],
      },
      {
        heading: "Less paper cockpit",
        bullets: [
          "Improves the access to pilots' operational information and simplifies some of their tasks",
          "Reduces the number of paper documents in the cockpit and replaces them by electronic ones: improving information access and search, enabling quicker and easier updates.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE INT-01.9: Cockpit controls best practices",
    eyebrow: EYEBROW,
    title: "1.9 Buenas prácticas con los mandos de cabina",
    subtitle: "Cockpit Philosophy · Cockpit Controls",
    leftPct: 58,
    leftTitle: "COCKPIT CONTROLS - BEST PRACTICES (AOP-10-20-30)",
    rightTitle: "ENG MASTER PANEL",
    image: pubFig("eng_master_panel"),
    imageAlt: "ENG MASTER levers and ENG MODE selector on the pedestal",
    sourceRef: src("AOP-10-20-30 Cockpit Controls - Best Practices"),
    cards: [
      {
        heading: "In order to properly use the cockpit controls, the pilot should",
        bullets: [
          "Not use the cockpit controls as supports for the arms or for the hands. The use of armrests may prevent such positions",
          "As PM, not have their hand on a control before they need to use it, to avoid inadvertent activation",
          "Visually identify the control before selection or action on the control. Then, to close the loop, the pilot must check the result of the action",
          "Not request an action on a cockpit control if they suspect that the other crew member does not share the same plan of action as theirs (e.g. \"POSITIVE CLIMB\" announced by PM and \"GEAR UP\" ordered by PF ensures a common plan of action)",
          "Ensure that when a cockpit control is activated, no inadvertent activation of an other cockpit control occurs (e.g. loose clothing, loose jewelry, pen held in the hand or uncontrolled movement).",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "At all times, the flight crew should be ready to rapidly take the appropriate actions on the cockpit controls, if required.",
    },
  },
  // ── B. Fly-by-wire ───────────────────────────────────────────────────────
  {
    comment: "SLIDE INT-01.10: Fly-by-wire — control law",
    eyebrow: EYEBROW,
    title: "1.10 Fly-by-wire: la ley de control",
    subtitle: "Fly-By-Wire · Design Principles",
    leftPct: 45,
    leftTitle: "FLY-BY-WIRE (AOP-10-30-10)",
    rightTitle: "NORMAL LAW — LOAD FACTOR DEMAND",
    image: fig("int_fctl_normal_law"),
    imageAlt: "Normal law pitch: sidestick pulled, released and pushed, with the resulting load factor",
    sourceRef: "Source: FCTM A320 AOP-10-30-10 Fly-By-Wire & FCOM A320 DSC-27-20-10 Normal Law",
    cards: [
      {
        heading: "General",
        paragraph:
          "The relationship between the pilot input on the sidestick, and the aircraft response, is called the control law. The control law determines the handling characteristics of the aircraft.",
      },
      {
        heading: "One of the PF's primary tasks",
        paragraph:
          "One of the PF's primary tasks is to maintain the aircraft within the limits of the normal flight envelope. However, some circumstances, due to extreme situations or aircraft mishandling, may provoke the violation of these limits.",
      },
    ],
  },
  {
    comment: "SLIDE INT-01.11: Flight control protections",
    eyebrow: EYEBROW,
    title: "1.11 Protecciones de los mandos de vuelo",
    subtitle: "Fly-By-Wire · Flight Control Protections",
    leftPct: 45,
    leftTitle: "FLIGHT CONTROL PROTECTIONS (AOP-10-30-10)",
    rightTitle: "PITCH CONTROL — PROTECTIONS",
    image: fig("int_fctl_protections"),
    imageAlt: "Pitch control law with load factor, pitch attitude, high speed and AOA protections",
    sourceRef: "Source: FCTM A320 AOP-10-30-10 Flight Control Protections & FCOM A320 DSC-27-20-10 Protections",
    cards: [
      {
        heading: "The purpose of the flight control protections is to",
        bullets: [
          "Give full authority to the flight crew, in order to enable them to obtain the best aircraft performance with an instinctive, immediate action on the related control",
          "Minimize the possibility of over-controlling, overstressing, or damaging the aircraft.",
        ],
      },
    ],
    alert: {
      level: "CAUTION",
      text: "Despite system protections, the PF must not deliberately exceed the normal flight envelope. In addition, these protections are not designed to be structural limit protections (e.g. opposite rudder pedal inputs). Rather, they are designed to assist the PF in emergency and stressful situations, where only instinctive and rapid reactions will be effective.",
    },
  },
  {
    comment: "SLIDE INT-01.12: Sidestick operational benefits",
    eyebrow: EYEBROW,
    title: "1.12 Sidestick: ventajas operativas",
    subtitle: "Fly-By-Wire · Sidestick",
    leftPct: 50,
    leftTitle: "SIDESTICK (AOP-10-30-10)",
    rightTitle: "SIDESTICK",
    image: fig("int_sidestick"),
    imageAlt: "Sidestick with the sidestick pushbutton and the push to talk trigger",
    sourceRef: "Source: FCTM A320 AOP-10-30-10 Sidestick & FCOM A320 DSC-27-20-30 Sidesticks",
    cards: [
      {
        heading: "The main operational benefits of the side-mounted stick",
        bullets: [
          "It enables a non-obstructed view of the main instrument panel",
          "It is adapted for emergency situations (e.g. incapacitation, stick jamming, control failures)",
          "It fits comfortably into the hand with a correct adjustment of the armrest",
          "It makes the sliding table installation possible (e.g. for maps, documents, meals).",
        ],
      },
      {
        heading: "When the autopilot is engaged",
        bullets: [
          "The sidesticks are locked in neutral position (immediate tactile feedback)",
          "There is no possibility of simultaneous input from the flight crew and the autopilot",
          "The autopilot can be disconnected instinctively, at any time, by a firm pressure on the sidestick.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE INT-01.13: Use of sidestick",
    eyebrow: EYEBROW,
    title: "1.13 Uso del sidestick: solo vuela un piloto",
    subtitle: "Fly-By-Wire · Utilization Principles",
    leftPct: 50,
    leftTitle: "USE OF SIDESTICK (AOP-10-30-20)",
    rightTitle: "SIDE STICK PRIORITY LIGHTS",
    image: fig("int_glareshield_priority"),
    imageAlt: "SIDE STICK PRIORITY lights on the glareshield, CAPT and F/O",
    sourceRef: "Source: FCTM A320 AOP-10-30-20 Use of Sidestick & FCOM A320 DSC-27-20-30 Glareshield",
    cards: [
      {
        heading: "Only one flight crew flies at a time",
        paragraph: "If the PM wants to act on the sidestick, the PM must:",
        bullets: [
          "Clearly announce “I have control”",
          "Press and maintain the sidestick pushbutton, in order to get full control of the Fly-By-Wire system.",
        ],
      },
      {
        heading: "Dual inputs",
        bullets: [
          "The flight crew should keep in mind that sidestick inputs are algebraically added. Therefore dual inputs must be avoided, and will trigger aural and visual alerts.",
          "Either flight crew can make an input on their sidestick at any time.",
          "Either flight crew can deactivate the other flight crew's sidestick by pressing on their sidestick pb.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE INT-01.14: Non back-driven thrust lever concept",
    eyebrow: EYEBROW,
    title: "1.14 Palancas de empuje que no se mueven con el autothrust",
    subtitle: "Fly-By-Wire · Thrust/Autothrust",
    leftPct: 52,
    leftTitle: "NON BACK-DRIVEN THRUST LEVER CONCEPT (AOP-10-30-10)",
    rightTitle: "ENERGY CUES — ENGINE PARAMETERS",
    image: pubFig("ewd_cfm"),
    imageAlt: "Engine/Warning Display with engine parameters used as energy cues",
    sourceRef: src("AOP-10-30-10 Thrust/Autothrust"),
    cards: [
      {
        heading: "Airbus has selected the non-back-driven thrust lever concept",
        bullets: [
          "The flight crew can easily and intuitively monitor the energy of the aircraft via current energy cues (speed, speed trend, engine parameters), and not via ambiguous thrust levers movement",
          "When the autothrust is engaged, the Thrust Lever Position determines the maximum authorized thrust that may be commanded by the autothrust",
          "When the flight crew uses manual thrust, the Thrust Lever Position determines the current thrust (as on any aircraft not equipped with autothrust).",
        ],
      },
    ],
  },
  {
    comment: "SLIDE INT-01.15: Flying in reconfiguration laws and mechanical backup",
    eyebrow: EYEBROW,
    title: "1.15 Volar en leyes degradadas y con mechanical backup",
    subtitle: "Fly-By-Wire · Reconfiguration Laws",
    leftPct: 55,
    leftTitle: "RECONFIGURATION LAWS (AOP-10-30-20)",
    rightTitle: "NORMAL / ALTERNATE / DIRECT LAW",
    image: fig("int_fctl_reconfig"),
    imageAlt: "PFD and speed scale indications in normal, alternate and direct law",
    sourceRef: "Source: FCTM A320 AOP-10-30-20 Flying in Reconfiguration Laws & FCOM A320 DSC-27-20-20 Flight Controls Law Reconfiguration",
    cards: [
      {
        heading: "When the aircraft is in re-configuration law",
        bullets: [
          "At high altitude, descend to a lower altitude to increase the margin to buffet. Descending by approximately 4 000 ft below REC MAX ALT reduces significantly the occurrence of stall warning in turbulence.",
          "At high speed, maneuver with care and use small control inputs.",
        ],
      },
      {
        heading: "Alternate law · Direct law",
        bullets: [
          "Alternate law: outside the normal flight envelope, the PF must take appropriate preventive actions to avoid losing control, and/or avoid high speed excursions.",
          "Direct law: the PF must be careful when performing large thrust changes, or sudden speedbrake movements, particularly if the center of gravity is aft (e.g. TOGA thrust in go-around induces a large pitch up moment; apply nose-down trim accordingly).",
        ],
      },
      {
        heading: "Mechanical backup",
        paragraph:
          "The objective is not to fly the aircraft accurately, but to maintain the aircraft attitude safe and stabilized, in order to allow the restoration of lost systems. The pitch trim wheel is used to control pitch; the rudder provides lateral control, and induces a significant roll with a slight delay.",
      },
    ],
  },
  // ── C. Procedimientos ────────────────────────────────────────────────────
  {
    comment: "SLIDE INT-01.16: Procedures design — SOP and supplementary procedures",
    eyebrow: EYEBROW,
    title: "1.16 Diseño de procedimientos: SOP y suplementarios",
    subtitle: "Procedures Design · Normal Procedures",
    leftPct: 52,
    leftTitle: "PROCEDURES DESIGN (AOP-10-40)",
    rightTitle: "ROUTINE / NOT-ROUTINE PROCEDURES",
    image: fig("int_procedure_types"),
    imageAlt: "Routine procedures (SOP and normal checklist) and not-routine procedures (supplementary, abnormal and emergency)",
    sourceRef: src("AOP-10-40 Procedures Design"),
    cards: [
      {
        heading: "What for?",
        bullets: [
          "Share a common practice, in order to ensure a safe and efficient flight",
          "Organize tasksharing and teamworking",
          "Guide pilots actions (interface between the flight crew and the aircraft).",
        ],
      },
      {
        heading: "Standard Operating Procedures (routine tasks)",
        bullets: [
          "One SOP per flight phase · Actions are described in a chronological order · Actions are easy to memorize and to apply (cockpit scan, actions flow).",
          "The flight crew should perform SOP actions by memory. Some SOP actions are checked against checklists.",
        ],
      },
      {
        heading: "Supplementary Procedures (not-routine tasks)",
        paragraph:
          "Not-routine situations (e.g. airframe deicing/anti-icing procedures on ground, manual engine start). The flight crew must perform not-routine actions, using the READ & DO principle (generally done by the PM).",
      },
    ],
  },
  {
    comment: "SLIDE INT-01.17: Abnormal and emergency procedures design",
    eyebrow: EYEBROW,
    title: "1.17 Diseño de los procedimientos anormales y de emergencia",
    subtitle: "Procedures Design · Abnormal and Emergency Procedures",
    leftPct: 52,
    leftTitle: "ABNORMAL AND EMERGENCY PROCEDURES (AOP-10-40)",
    rightTitle: "ECAM CONTROL PANEL",
    image: pubFig("ecam_control_panel"),
    imageAlt: "ECAM control panel",
    sourceRef: src("AOP-10-40 Abnormal and Emergency Procedures"),
    cards: [
      {
        heading: "Design principles",
        paragraph:
          "These procedures are not-routine, classified in abnormal or emergency, and prioritized in accordance with the criticality of the situation. An abnormal or emergency procedure is initiated following a system failure, or an operational context. It is defined as:",
        bullets: [
          "A MEMORY ITEM, when the flight crew has no time to refer to the ECAM/QRH/FCOM to ensure a safe flight path, or",
          "AN OEB IMMEDIATE ACTION, when the flight crew has no time to refer to specific OEB actions to ensure a safe flight path, or",
          "A READ & DO procedure that is handled via the ECAM, QRH, FCOM, or OEB.",
        ],
      },
    ],
    table: {
      headers: ["Utilization", "When?", "How?"],
      rows: [
        ["Memory Items", "Immediately", "Memory"],
        ["OEB Immediate Actions", "Immediately", "Memory"],
        ["Abnormal/Emergency Procedures (ECAM/QRH/FCOM/OEB)", "When appropriate", "READ & DO"],
      ],
    },
  },
];

export const MCC_INT_01: MccLesson = {
  id: "a3200000-0000-0000-0000-000000000301",
  course_id: MCC_COURSE_ID,
  title: "INT-01. Filosofía de diseño Airbus: cabina, fly-by-wire y procedimientos",
  slug: "int-01-filosofia-diseno-airbus",
  sequence_order: 1,
  lesson_order: 1,
  min_seconds: mccMinSeconds(INT_01_SLIDES.length, mccVideoSeconds(INT_01_SLIDES)),
  module_title: MCC_MODULES.INTRO,
  content_html: joinSlides(INT_01_SLIDES),
};

export const INT_01_SLIDE_COUNT = INT_01_SLIDES.length;
