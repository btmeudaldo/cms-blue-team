/**
 * SIS-05 — Motores CFM56-5B, auto flight y navegación (0,75 h aprox.).
 *
 * Alcance: Curso APS MCC — Airbus A320ceo CFM56-5B (simulador Entrol A32).
 * Sustituye a CTA-5. Fuentes: FCOM 23MAR26 DSC-70 (Engines, solo bloques CFM56-5B / grupo EC-ILQ o ALL),
 * DSC-22_10 (Auto Flight - General) y DSC-34-NAV (ADIRS, GPS, Radio Nav). La variante de cada figura se ha
 * comprobado con `scratch/fcom_fig_applic.py`; en la figura del sistema de combustible del motor se ha tapado la
 * nota de tipo de avión.
 * Sin repetir: arranque, ignición y FADEC en el arranque están en SOP-04; EGPWS y TCAS, en SOP-14; las palancas
 * de empuje desde la filosofía, en INT-01. Sin equipos opcionales (tercera MCDU, ADF, GLS/MLS, RMP3).
 */
import { MCC_MODULES, joinSlides, mccMinSeconds, mccVideoSeconds, type MccLesson, type MccSlideSpec } from "./slide-builder.ts";

const MCC_COURSE_ID = "a3200000-0000-0000-0000-000000000320";
const IMG_BASE = "https://www.blueteam.es/elearning/media/mcc/pdp";
const EYEBROW = "APS MCC · A320 · SIS-05";

/** Versión común de caché de las figuras FCOM de esta lección. */
const IMG_VERSION = 1795637000;
const fig = (name: string) => `${IMG_BASE}/fcom_a320_sis5_${name}.webp?v=${IMG_VERSION}`;
const pubFig = (name: string) => `${IMG_BASE}/fcom_a320_${name}.webp`;
const src = (sections: string) => `Source: FCOM A320 ${sections}`;

const SIS_05_SLIDES: MccSlideSpec[] = [
  // ── A. Motores (ATA 70) ──────────────────────────────────────────────────
  {
    comment: "SLIDE SIS-05.1: Engines overview",
    eyebrow: EYEBROW,
    title: "5.1 Motores CFM56-5B: visión general",
    subtitle: "ATA 70 · Engines",
    leftPct: 50,
    leftTitle: "OVERVIEW / SYSTEM DESCRIPTION (DSC-70-05 · 70-10)",
    rightTitle: "ENGINE SYSTEMS",
    image: fig("eng_overview"),
    imageAlt: "Engine overview: engine, FADEC, fuel, oil, air, thrust reverser, ignition and start systems",
    sourceRef: src("DSC-70-05 Overview / DSC-70-10 System Description"),
    cards: [
      {
        heading: "Overview",
        paragraph:
          "The aircraft has two CFM International CFM56-5B engines. The engines are turbofan engines that have: a high bypass ratio, a Full Authority Digital Engine Control (FADEC), a fuel system, an oil system, an air system, a thrust reverser system, an ignition system and a start system.",
      },
      {
        heading: "How the engine operates",
        bullets: [
          "The LP compressor compresses the air. Most of the air flows out of the core engine, and provides most of the engine thrust; the remaining air enters the core engine.",
          "The HP compressor compresses the air that enters the core engine. Fuel is mixed with it and ignited in the combustion chamber; the gas drives the HP and the LP turbines.",
          "The rotation speed of the fan provides the N1 engine parameter; the rotation speed of the HP rotor provides N2. Both appear on the E/WD in percentage.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SIS-05.2: Thrust control and idle modes",
    eyebrow: EYEBROW,
    title: "5.2 Control de empuje y modos de ralentí",
    subtitle: "ATA 70 · Thrust Control System",
    leftPct: 55,
    leftTitle: "THRUST CONTROL · IDLE (DSC-70-20 · 70-30)",
    rightTitle: "THRUST VS THRUST LEVER POSITION",
    image: fig("thrust_control"),
    imageAlt: "Thrust as a function of thrust lever position: N1 rating limit computed by the FADEC",
    sourceRef: src("DSC-70-20 FADEC Idle Modes / DSC-70-30-10 Thrust Control System - General / DSC-70-30-40 Thrust Control"),
    cards: [
      {
        heading: "Thrust control",
        bullets: [
          "A FADEC dedicated to each engine controls the thrust. The pilot uses the thrust levers to set the thrust in manual mode, and the FMGS sets the thrust in automatic mode (A/THR function).",
          "The FADEC prevents the thrust from exceeding the limit for the thrust lever position in both manual and automatic modes.",
          "In manual mode, each FADEC computes the engine thrust based on the position of the thrust lever; the position corresponds to a specific percent of maximum thrust.",
        ],
      },
      {
        heading: "Idle modes",
        bullets: [
          "Modulated idle: according to bleed demand and ambient conditions; in flight with FLAPS lever at zero, or on ground.",
          "Approach idle: according to aircraft altitude; in flight with flaps extended. Allows the engine to accelerate rapidly from idle to go-around thrust.",
          "Reverse idle: on ground, thrust lever in REV IDLE; slightly higher than forward idle thrust.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SIS-05.3: Thrust levers and detents",
    eyebrow: EYEBROW,
    title: "5.3 Palancas de empuje y posiciones",
    subtitle: "ATA 70 · Thrust Levers",
    leftPct: 50,
    leftTitle: "THRUST LEVERS (DSC-70-30-20)",
    rightTitle: "THRUST LEVERS",
    image: fig("thrust_levers"),
    imageAlt: "Thrust lever sector: TO/GA, FLX/MCT, CL, IDLE, REV IDLE and MAX REVERSE, with A/THR operating range",
    sourceRef: src("DSC-70-30-20 Thrust Levers"),
    cards: [
      {
        heading: "Thrust levers",
        bullets: [
          "The thrust levers are only manually moved.",
          "The thrust levers move over a sector divided into four operating segments. The sector has six positions defined by detents or stops.",
          "The FADEC receives the thrust lever position, then computes and displays the thrust rating limit and the N1 for the TLA.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "To select reverse idle, the flight crew pulls up the reverse lever. The thrust lever can no longer remain in the idle position.",
    },
  },
  {
    comment: "SLIDE SIS-05.4: Thrust rating limit and flexible takeoff",
    eyebrow: EYEBROW,
    title: "5.4 Límites de empuje y despegue flexible",
    subtitle: "ATA 70 · Thrust Rating Limit",
    leftPct: 52,
    leftTitle: "THRUST RATING LIMIT · FLEX (DSC-70-30)",
    rightTitle: "RATING LIMITS",
    image: fig("thrust_ratings"),
    imageAlt: "Rating limits for each thrust lever position on ground and in flight",
    sourceRef: src("DSC-70-30-30 Thrust Rating Limit / DSC-70-30-40 Thrust Control"),
    cards: [
      {
        heading: "Thrust rating limit",
        bullets: [
          "The FADEC computes the thrust rating limit for each thrust lever position.",
          "If the thrust lever is set in a detent, the FADEC selects the rating limit corresponding to this detent.",
          "If the thrust lever is set between two detents, the FADEC selects the rating limit corresponding to the higher detent.",
        ],
      },
      {
        heading: "Flexible takeoff",
        paragraph:
          "If the flight crew enters a valid flexible takeoff temperature on the PERF TAKEOFF page and sets the thrust levers to the FLX/MCT detent, the engine will run at the FLEX takeoff thrust rating mode if the flexible takeoff temperature is more than the current OAT.",
      },
    ],
    alert: {
      level: "NOTE",
      text: "In the autothrust mode (A/THR function active), the FMGC computes the thrust which is limited to the value corresponding to the thrust lever position (unless the alpha-floor mode is activated).",
    },
  },
  {
    comment: "SLIDE SIS-05.5: Engine fuel system",
    eyebrow: EYEBROW,
    title: "5.5 Sistema de combustible del motor",
    subtitle: "ATA 70 · Fuel System (CFM56)",
    leftPct: 52,
    leftTitle: "FUEL SYSTEM (DSC-70-40)",
    rightTitle: "ENGINE FUEL SYSTEM",
    image: fig("eng_fuel"),
    imageAlt: "Engine fuel system: LP and HP pumps, fuel/oil heat exchanger, HMU, fuel nozzles and IDG oil cooling",
    sourceRef: src("DSC-70-40 Fuel System (CFM56)"),
    cards: [
      {
        heading: "Fuel flow",
        bullets: [
          "The fuel flows from the tank, via the fuel pump unit and the fuel/oil heat exchanger, to the Hydromechanical Unit (HMU) and to the fuel nozzles.",
          "The HP compressor shaft drives the HP fuel pump assembly.",
          "Moving the ENG MASTER lever to OFF directly commands the closing of the LP and HP fuel shut off valves for that engine's fuel system.",
        ],
      },
      {
        heading: "Hydromechanical unit",
        bullets: [
          "The FADEC controls the HMU, which controls fuel flow to the engine combustion chamber, controls fuel hydraulic signals to actuators, and protects against overspeeding.",
          "The FADEC computes the fuel flow that will maintain the target N1, allowing N2 to vary between N2 minimum and N2 maximum.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SIS-05.6: Engine oil system",
    eyebrow: EYEBROW,
    title: "5.6 Sistema de aceite del motor",
    subtitle: "ATA 70 · Oil System",
    leftPct: 45,
    leftTitle: "OIL SYSTEM (DSC-70-50)",
    rightTitle: "OIL SYSTEM",
    image: fig("eng_oil"),
    imageAlt: "Engine oil system: tank, supply and scavenge pumps, filters, fuel/oil heat exchanger and ECAM indications",
    sourceRef: src("DSC-70-50 Oil System"),
    cards: [
      {
        heading: "Oil system",
        paragraph: "The oil system lubricates the engine components. It contains:",
        bullets: [
          "The oil tank",
          "The lube and scavenge pump modules",
          "The fuel/oil heat exchanger",
          "The filters, chip detectors, pressure relief and bypass valves.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SIS-05.7: Engine indications on the E/WD",
    eyebrow: EYEBROW,
    title: "5.7 Indicaciones de motor en el E/WD",
    subtitle: "ATA 70 · Engine/Warning Display",
    leftPct: 45,
    leftTitle: "ENGINE/WARNING DISPLAY (DSC-70-90-40)",
    rightTitle: "E/WD — CFM56-5B",
    image: pubFig("ewd_cfm"),
    imageAlt: "Engine/Warning Display with N1, EGT, N2 and FF for the CFM56-5B",
    sourceRef: src("DSC-70-10 System Description / DSC-70-90-40 Engine/Warning Display"),
    cards: [
      {
        heading: "Primary engine parameters",
        bullets: [
          "N1 and N2 are current rotation speeds displayed in percentage.",
          "The FADEC uses the N1 engine parameter to compute the applicable engine thrust, and the N1 and N2 engine parameters for engine control.",
          "The FADEC monitors the positions of the thrust levers, and triggers appropriate indications on the FMA.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "Los parámetros de arranque (EGT, N2, ignición, válvula de arranque) y la página ECAM ENG se ven en SOP-04.",
    },
  },
  // ── B. Auto flight (ATA 22) ──────────────────────────────────────────────
  {
    comment: "SLIDE SIS-05.8: FMGS architecture",
    eyebrow: EYEBROW,
    title: "5.8 FMGS: componentes y funciones",
    subtitle: "ATA 22 · Auto Flight - General",
    leftPct: 50,
    leftTitle: "FMGS (DSC-22_10-10)",
    rightTitle: "SYSTEM INTERFACE DIAGRAM",
    image: fig("afs_architecture"),
    imageAlt: "FMGS system interface diagram: FMGC with FM and FG parts, FAC, FCU, MCDU and peripherals",
    sourceRef: src("DSC-22_10-10 Description / DSC-22_10-20 System Interface Diagram"),
    cards: [
      {
        heading: "Components",
        paragraph:
          "Two Flight Management Guidance Computers (FMGC), two Multipurpose Control and Display Units (MCDU), one Flight Control Unit (FCU) and two Flight Augmentation Computers (FAC). The aircraft is equipped with FMS2 HONEYWELL Release 1A H2C and FG C14.",
      },
      {
        heading: "Each FMGC is divided into two main parts",
        bullets: [
          "Flight Management (FM): navigation and management of navigation radios · management of flight planning · prediction and optimization of performance · display management.",
          "Flight Guidance (FG): Autopilot (AP) command · Flight Director (FD) command · Autothrust (A/THR) command.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SIS-05.9: FMGS modes of operation",
    eyebrow: EYEBROW,
    title: "5.9 Modos del FMGS: dual, independiente y single",
    subtitle: "ATA 22 · FMGS Modes of Operation",
    leftPct: 55,
    leftTitle: "FMGS MODES OF OPERATION (DSC-22_10-30)",
    rightTitle: "FMGC 1 / FMGC 2",
    image: fig("fmgc_master"),
    imageAlt: "FMGC 1 and FMGC 2 linked by a crosstalk bus, each with its MCDU",
    sourceRef: src("DSC-22_10-30 FMGS Modes of Operation"),
    cards: [
      {
        heading: "Three modes",
        bullets: [
          "Dual mode (the normal mode): the two FMGCs are synchronized; each performs its own computations and exchanges data with the other through a crosstalk bus. All data inserted into any MCDU is transferred to both FMGCs.",
          "Independent mode: degraded mode selected automatically under specific abnormal conditions (e.g. different database validity on both FMGCs). Each FMGC is controlled by its associated MCDU.",
          "Single mode: using one FMGC only.",
        ],
      },
      {
        heading: "Master FMGC logic",
        bullets: [
          "If one autopilot (AP) is engaged, the related FMGC is master: it uses the onside FD for guidance, it controls the A/THR and it controls the FMA 1 and 2.",
          "If two APs are engaged, FMGC1 is master.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SIS-05.10: FCU",
    eyebrow: EYEBROW,
    title: "5.10 FCU: guiado seleccionado y gestionado",
    subtitle: "ATA 22 · Flight Control Unit",
    leftPct: 45,
    leftTitle: "FCU (DSC-22_10)",
    rightTitle: "FCU — LATERAL CONTROL AREA",
    image: fig("fcu_lateral"),
    imageAlt: "FCU lateral control area: HDG/TRK window, managed lateral dot, HDG/TRK selector knob and LOC pushbutton",
    sourceRef: src("DSC-22_10-10 Flight Crew Interface with FMGC / DSC-22_10-40 FCU"),
    cards: [
      {
        heading: "General philosophy",
        paragraph:
          "The FMGS provides predictions of flight time, mileage, speed, economy profiles and altitude. It reduces cockpit workload, improves efficiency, and eliminates many routine operations generally performed by the flight crew.",
      },
      {
        heading: "Managed and selected guidance",
        bullets: [
          "During cockpit preparation the flight crew uses the MCDU to insert a preplanned route from origin to destination (SID, EN ROUTE, WAYPOINTS, STAR, APPROACH, MISSED APPR, and ALTN route).",
          "The system then defines a vertical profile and a speed profile, taking into account ATC requirements.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SIS-05.11: Autothrust and thrust levers",
    eyebrow: EYEBROW,
    title: "5.11 Autothrust y palancas de empuje",
    subtitle: "ATA 22 · Autothrust",
    leftPct: 45,
    leftTitle: "MANUAL / AUTOTHRUST MODE (DSC-70-30-40)",
    rightTitle: "A/THR AND THRUST LEVERS",
    image: fig("athr_levers"),
    imageAlt: "A/THR active range on the thrust lever sector, A/THR pushbutton on the FCU and FMA indication",
    sourceRef: src("DSC-70-30-40 Thrust Control / DSC-22_10-40 Thrust Levers"),
    cards: [
      {
        heading: "Manual mode",
        paragraph:
          "The engines are in the manual mode provided the A/THR function is not armed, or armed and not active (thrust lever not in the A/THR operating range and no alpha floor).",
      },
      {
        heading: "Autothrust mode",
        paragraph:
          "In the autothrust mode (A/THR function active), the FMGC computes the thrust which is limited to the value corresponding to the thrust lever position (unless the alpha-floor mode is activated).",
      },
    ],
    alert: {
      level: "NOTE",
      text: "El uso del AP/FD y del A/THR en vuelo, y los callouts del FMA, están en SOP-01 y SOP-09.",
    },
  },
  // ── C. Navegación (ATA 34) ───────────────────────────────────────────────
  {
    comment: "SLIDE SIS-05.12: ADIRS",
    eyebrow: EYEBROW,
    title: "5.12 ADIRS: datos de aire e inerciales",
    subtitle: "ATA 34 · ADIRS",
    leftPct: 52,
    leftTitle: "ADIRS (DSC-34-NAV-10-10)",
    rightTitle: "PROBES SCHEMATIC",
    image: fig("adirs"),
    imageAlt: "ADIRS probes schematic: pitot, static, AOA and TAT probes connected to ADIRU 1, 2 and 3",
    sourceRef: src("DSC-34-NAV-10-10 Description / Probes Schematic"),
    cards: [
      {
        heading: "General",
        paragraph:
          "The ADIRS supplies temperature, anemometric, barometric and inertial parameters to the EFIS (PFD and ND) and to other user systems (FMGC, FADEC, ELAC, SEC, FAC, FWC, SFCC, ATC, GPWS, CFDIU, CPC).",
      },
      {
        heading: "Three identical ADIRUs, each divided in two parts",
        bullets: [
          "The ADR part (Air Data Reference): barometric altitude, airspeed, Mach, angle of attack, temperature and overspeed warnings.",
          "The IR part (Inertial Reference): attitude, flight path vector, track, heading, accelerations, angular rates, ground speed and aircraft position.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "ADIRU (1) is supplied by CAPT probes, ADIRU (2) is supplied by F/O probes, ADIRU (3) is supplied by STBY probes and CAPT TAT.",
    },
  },
  {
    comment: "SLIDE SIS-05.13: ADIRS control panel",
    eyebrow: EYEBROW,
    title: "5.13 Panel ADIRS",
    subtitle: "ATA 34 · ADIRS Controls",
    leftPct: 45,
    leftTitle: "ADIRS CONTROL PANEL (DSC-34-NAV-10)",
    rightTitle: "ADIRS PANEL",
    image: fig("adirs_panel"),
    imageAlt: "ADIRS control panel: display, DATA and SYS selectors, IR and ADR pushbuttons, IR MODE selectors and ON BAT light",
    sourceRef: src("DSC-34-NAV-10-10 General / DSC-34-NAV-10-20 Overhead Panel"),
    cards: [
      {
        heading: "ADIRS control panel",
        paragraph:
          "One ADIRS control panel on the overhead panel for selection of modes (NAV, ATT, OFF) and for display of ADIRS data.",
        bullets: [
          "IR MODE selector (one per ADIRU): NAV, ATT or OFF.",
          "IR and ADR pushbuttons with FAULT lights.",
          "DATA and SYS selectors and display.",
        ],
      },
    ],
    alert: {
      level: "CAUTION",
      text: "In flight, the PF and PM must crosscheck before any action on the IR MODE selector (INT-03).",
    },
  },
  {
    comment: "SLIDE SIS-05.14: GPS",
    eyebrow: EYEBROW,
    title: "5.14 GPS y posición híbrida GPIRS",
    subtitle: "ATA 34 · GPS",
    leftPct: 50,
    leftTitle: "GPS (DSC-34-NAV-15-10)",
    rightTitle: "GPS ARCHITECTURE",
    image: fig("gps"),
    imageAlt: "GPS architecture: MMR or GPSSU 1 and 2 feeding ADIRU 1, 2 and 3",
    sourceRef: src("DSC-34-NAV-15-10 Description"),
    cards: [
      {
        heading: "Description",
        bullets: [
          "The Global Positioning System (GPS) is a satellite-based radio navigation aid. Worldwide, 24 satellites broadcast accurate navigation data that the aircraft use for precise determination of its position.",
          "The aircraft has two independent GPS receivers (GPS Sensor Unit, or integrated in the Multi Mode Receiver).",
          "The GPSSU or the MMR processes the received data, and transfers them to the ADIRUs. Then each ADIRU performs the GP-IRS hybrid position calculation. FMGCs use this hybrid position.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SIS-05.15: Radio navigation tuning",
    eyebrow: EYEBROW,
    title: "5.15 Sintonía de radioayudas",
    subtitle: "ATA 34 · Radio Nav",
    leftPct: 52,
    leftTitle: "RADIO NAV - TUNING (DSC-34-NAV-30-10)",
    rightTitle: "RADIO NAV TUNING",
    image: fig("radio_nav"),
    imageAlt: "Radio navigation tuning: FMGC 1 and 2, RMP 1 and 2, VOR, DME and ILS receivers, normal and alternate flow",
    sourceRef: src("DSC-34-NAV-30-10 Radio Nav - Tuning"),
    cards: [
      {
        heading: "Three modes of tuning",
        bullets: [
          "Automatic tuning: the basic means for tuning navaids. In normal operation, the FMGC tunes navaids automatically, with each FMGC controlling its own receivers. If one FMGC fails, the remaining FMGC controls both sides receivers.",
          "Manual tuning: the flight crew can use the MCDU to override the automatic tuning of navaids by FMGC in order to select a specific navaid for visual display. This does not affect the automatic function of the FMGC.",
          "Back up tuning: if both FMGCs fail, the flight crew can use the RMPs (Radio Management Panels 1 and 2) on the pedestal. The CAPT RMP controls VOR1; the F/O RMP controls VOR2. Either RMP controls the ILS, provided “STBY NAV” is selected on RMP1 and RMP2.",
        ],
      },
    ],
  },
];

export const MCC_SIS_05: MccLesson = {
  id: "a3200000-0000-0000-0000-000000000205",
  course_id: MCC_COURSE_ID,
  title: "SIS-05. Motores CFM56-5B, auto flight y navegación",
  slug: "sis-05-motores-auto-flight-navegacion",
  sequence_order: 22,
  lesson_order: 22,
  min_seconds: mccMinSeconds(SIS_05_SLIDES.length, mccVideoSeconds(SIS_05_SLIDES)),
  module_title: MCC_MODULES.SYSTEMS,
  content_html: joinSlides(SIS_05_SLIDES),
};

export const SIS_05_SLIDE_COUNT = SIS_05_SLIDES.length;
