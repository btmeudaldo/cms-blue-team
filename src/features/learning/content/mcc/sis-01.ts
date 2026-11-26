/**
 * SIS-01 — Generalidades, cabina, EIS y ECAM (0,75 h).
 *
 * Alcance: Curso APS MCC — Airbus A320ceo CFM56-5B (simulador Entrol A32).
 * Sustituye a CTA-1. Fuentes: FCOM A320 DSC-20 (Aircraft General) y DSC-31 (Indicating/Recording
 * Systems), solo bloques aplicables a la variante de referencia (grupo EC-ILQ).
 *
 * Criterio de redacción: a la derecha, la figura del propio FCOM (imagen incrustada, sin cabecera ni
 * marcas); a la izquierda, el texto FCOM literal en inglés que la explica.
 * Correcciones respecto a CTA-1: altura 11.755 m y envergadura 34.1 m de la figura del FCOM; DUs de tubo
 * de rayos catódicos y DMC con canal EFIS y canal ECAM en esta variante; sin Golden Rules (ya en SOP-01),
 * sin contenedores LD3 ni otros datos sin fuente. La clasificación de avisos, los botones del ECP y la
 * página STATUS están en SOP-11 y no se repiten.
 * Arquitectura: docs/mcc/08_ARQUITECTURA_PDP.md.
 */
import { MCC_MODULES, joinSlides, type MccLesson, type MccSlideSpec } from "./slide-builder.ts";

const MCC_COURSE_ID = "a3200000-0000-0000-0000-000000000320";
const IMG_BASE = "https://www.blueteam.es/elearning/media/mcc/pdp";
const EYEBROW = "APS MCC · A320 · SIS-01";

/** Versión común de caché de las figuras FCOM de esta lección. */
const IMG_VERSION = 1795630000;
const fig = (name: string) => `${IMG_BASE}/fcom_a320_sis_${name}.webp?v=${IMG_VERSION}`;
const src = (sections: string) => `Source: FCOM A320 ${sections}`;

const SIS_01_SLIDES: MccSlideSpec[] = [
  // ── A. Generalidades (ATA 20) ────────────────────────────────────────────
  {
    comment: "SLIDE SIS-01.1: Aircraft general and principal dimensions",
    eyebrow: EYEBROW,
    title: "1.1 Generalidades y dimensiones principales",
    subtitle: "ATA 20 · Aircraft General",
    leftPct: 45,
    leftTitle: "OVERVIEW (DSC-20-10)",
    rightTitle: "PRINCIPAL DIMENSIONS",
    image: fig("dimensions"),
    imageAlt: "Principal dimensions of the aircraft in top, side and front views",
    sourceRef: src("DSC-20-10 Overview / DSC-20-20 Principal Dimensions"),
    cards: [
      {
        heading: "Overview",
        bullets: [
          "The A320 is a subsonic, medium-range, civil transport aircraft.",
          "The aircraft has two high bypass turbofan engines mounted under the wings.",
          "The cockpit is designed for a two-member crew. It also has a place for 2 observers.",
          "The passenger seating layout may vary, depending on operating requirements.",
          "Two cargo compartments are under the cabin floor.",
        ],
      },
    ],
    table: {
      headers: ["Dimension (figure)", "Value"],
      rows: [
        ["Length", "37.57 m (123 ft 3 in)"],
        ["Wing span", "34.1 m (111 ft 10 in)"],
        ["Height", "11.755 m (38 ft 7 in)"],
        ["Wheel base", "12.64 m (41 ft 6 in)"],
        ["Wheel track", "7.59 m (24 ft 11 in)"],
      ],
    },
  },
  {
    comment: "SLIDE SIS-01.2: Ground service connections and panels",
    eyebrow: EYEBROW,
    title: "1.2 Conexiones de servicio en tierra",
    subtitle: "ATA 20 · Ground Service Connections",
    leftPct: 40,
    leftTitle: "GROUND SERVICE CONNECTIONS AND PANELS (DSC-20-20)",
    rightTitle: "GROUND SERVICE CONNECTIONS",
    image: fig("ground_service"),
    imageAlt: "Location of the ground service connections and panels",
    sourceRef: src("DSC-20-20 Ground Service Connections and Panels"),
    cards: [],
    table: {
      headers: ["#", "Connection / panel"],
      rows: [
        ["1", "Toilet servicing"],
        ["2", "Water filling and/or draining"],
        ["3", "Electrical ground power receptacle"],
        ["4", "LP ground air supply connector"],
        ["5", "HP ground air supply connector"],
        ["6", "Hydraulic"],
        ["7", "IDG oil filling"],
        ["8", "Engine oil filling"],
        ["9", "Refueling/defueling"],
        ["10", "Gravity filling panels"],
        ["11", "Refueling/defueling panel"],
        ["12", "APU oil filling"],
      ],
    },
  },
  {
    comment: "SLIDE SIS-01.3: Unpressurized compartments",
    eyebrow: EYEBROW,
    title: "1.3 Compartimentos no presurizados",
    subtitle: "ATA 20 · Unpressurized Compartments",
    leftPct: 40,
    leftTitle: "GENERAL ARRANGEMENT (DSC-20-20)",
    rightTitle: "UNPRESSURIZED AREAS",
    image: fig("unpressurized"),
    imageAlt: "Unpressurized areas: nose gear bay, air conditioning compartment, main gear bay and tail cone",
    sourceRef: src("DSC-20-20 General Arrangement / Unpressurized Compartments"),
    cards: [
      {
        heading: "General arrangement",
        paragraph:
          "This subchapter gives the principal aircraft dimensions, location of unpressurized areas, antennas, ground service connections, and ground maneuvering characteristics.",
      },
      {
        heading: "Unpressurized areas (figure)",
        bullets: ["Nose gear bay", "Air conditioning compartment", "Main gear bay", "Tail cone"],
      },
    ],
  },
  {
    comment: "SLIDE SIS-01.4: Taxiing and minimum turning radius",
    eyebrow: EYEBROW,
    title: "1.4 Rodaje: radio de giro mínimo",
    subtitle: "ATA 20 · Ground Handling",
    leftPct: 40,
    leftTitle: "TAXIING · 180° TURN (DSC-20-30)",
    rightTitle: "MINIMUM TURNING RADIUS",
    image: fig("taxiing"),
    imageAlt: "Minimum turning radius with steering angle 75 degrees and effective turn 70.2 degrees",
    sourceRef: src("DSC-20-30 Taxiing / 180 Degrees Turn on Runway"),
    cards: [
      {
        heading: "Theoretical center of turn for minimum turning radius",
        bullets: ["Slow continuous turning", "Symmetrical thrust", "No differential braking", "Dry surface."],
      },
      {
        heading: "180° turn on runway",
        paragraph:
          "With the recommended 180 ° turn technique, on dry runway, the approximate turn width is 24 m (79 ft) without margin. The flight crew should consider additional margin when the runway is wet or contaminated.",
      },
    ],
    table: {
      headers: ["", "Y", "A", "R3", "R4", "R5", "R6"],
      rows: [
        ["M", "4.5", "22.8", "13.6", "22.0", "18.3", "21.8"],
        ["FT", "15", "75", "44", "72", "60", "72"],
      ],
    },
  },
  // ── B. EIS (ATA 31-05) ───────────────────────────────────────────────────
  {
    comment: "SLIDE SIS-01.5: EIS introduction and cockpit arrangement",
    eyebrow: EYEBROW,
    title: "1.5 EIS: introducción y disposición en cabina",
    subtitle: "ATA 31 · EIS General",
    leftPct: 45,
    leftTitle: "INTRODUCTION (DSC-31-05-10)",
    rightTitle: "COCKPIT ARRANGEMENT",
    image: fig("cockpit_arrangement"),
    imageAlt: "Cockpit arrangement of PFDs, NDs, E/WD, SD, ECAM control panel and switching panel",
    sourceRef: src("DSC-31-05-10 Introduction / DSC-31-05-20 Cockpit Arrangement"),
    cards: [
      {
        heading: "The Electronic Instrument System (EIS) presents data on six identical Display Units (DUs):",
        bullets: [
          "The Electronic Flight Instrument System (EFIS) displays mostly flight parameters and navigation data on the Primary Flight Displays (PFDs) and Navigation Displays (NDs).",
          "The Electronic Centralized Aircraft Monitor (ECAM) presents data on the Engine/Warning Display (E/WD) and System Display (SD): primary engine indications, fuel quantity, flap and slat position; warning and caution alerts, or memos; synoptic diagrams of aircraft systems, and status messages; permanent flight data.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SIS-01.6: EIS architecture",
    eyebrow: EYEBROW,
    title: "1.6 Arquitectura del EIS",
    subtitle: "ATA 31 · EIS Architecture",
    leftPct: 50,
    leftTitle: "ARCHITECTURE (DSC-31-05-30)",
    rightTitle: "EIS BLOCK DIAGRAM",
    image: fig("eis_block_diagram"),
    imageAlt: "EIS block diagram with three DMCs, two FWCs, two SDACs and the six display units",
    sourceRef: src("DSC-31-05-30 Architecture"),
    cards: [
      {
        heading: "Display Unit (DU)",
        paragraph: "The instrument panels have six identical units. These DUs are full-color cathode ray tubes.",
      },
      {
        heading: "Display Management Computer (DMC)",
        paragraph:
          "Three identical Display Management Computers acquire and process all the signals received from sensors and other computers to generate the images to be displayed. Each DMC has two independent channels: an EFIS channel and an ECAM channel. Each DMC is able to simultaneously drive one PFD, one ND, and either one of the ECAMs.",
      },
      {
        heading: "System Data Acquisition Concentrator (SDAC)",
        paragraph:
          "The two identical SDACs acquire data, then generate signals. Some of these signals go to the three DMCs, which use them to generate displays of system pages and engines parameters. Others go to the flight warning computers, which use them to generate ECAM messages and aural alerts.",
      },
    ],
  },
  {
    comment: "SLIDE SIS-01.7: Switching panel",
    eyebrow: EYEBROW,
    title: "1.7 Panel SWITCHING",
    subtitle: "ATA 31 · Controls and Switching",
    leftPct: 45,
    leftTitle: "SWITCHING PANEL (DSC-31-30 · DSC-31-05-40)",
    rightTitle: "SWITCHING PANEL",
    image: fig("switching_panel"),
    imageAlt: "Switching panel with ATT HDG, AIR DATA, EIS DMC and ECAM/ND XFR selectors",
    sourceRef: src("DSC-31-30 Switching Panel / DSC-31-05-40 Controls and Switching"),
    cards: [
      {
        heading: "EIS DMC rotsel",
        bullets: [
          "NORM: DMC 1 drives the CAPT's PFD, the CAPT's ND, and the upper ECAM DU. DMC 2 drives the F/O's PFD and the F/O's ND, and the lower ECAM DU.",
          "CAPT 3: DMC 3 replaces DMC 1. F/O 3: DMC 3 replaces DMC 2.",
          "If a DMC fails, each of its associated DUs displays a diagonal line.",
        ],
      },
      {
        heading: "ECAM/ND XFR rotsel",
        paragraph:
          "Transfers the system/status display to either the Captain's or the First Officer's ND. If both ECAM DUs (E/WD and SD) fail, the flight crew can use this switch to transfer the E/WD display to either navigation display.",
      },
      {
        heading: "EFIS switching",
        paragraph: "A PFD/ND XFR pushbutton on each side console enables the pilot to swap displays to the respective onside DUs.",
      },
    ],
  },
  {
    comment: "SLIDE SIS-01.8: DU reconfiguration",
    eyebrow: EYEBROW,
    title: "1.8 Reconfiguración de pantallas",
    subtitle: "ATA 31 · Reconfiguring DUs",
    leftPct: 50,
    leftTitle: "RECONFIGURING DUs (DSC-31-05-60)",
    rightTitle: "DU RECONFIGURATION",
    image: fig("du_reconfig"),
    imageAlt: "Automatic and manual transfer of PFD, ND, E/WD and SD images after a display unit failure",
    sourceRef: src("DSC-31-05-60 Reconfiguring DUs"),
    cards: [
      {
        heading: "Failure of upper ECAM DU",
        paragraph:
          "The engine/warning page automatically replaces the system/status page on the lower ECAM DU. The flight crew can display the system/status page by using the \"ECAM/ND XFR\" switch to move it to a Navigation Display Unit (NDU), or pushing and holding (for a maximum of 3 min) the related system page pushbutton on the ECAM control panel.",
      },
      {
        heading: "Failure of lower ECAM DU",
        paragraph:
          "The flight crew can display the system/status page by using the \"ECAM/ND XFR\" switch to display it on the NDU, or pushing and holding (for a maximum of 3 min) the related system page pushbutton to temporarily display it on the upper ECAM DU.",
      },
      {
        heading: "PFDU/NDU reconfiguration",
        paragraph:
          "If a PFDU fails, the system automatically transfers the PFD image to the NDU. The pilot can also make this transfer manually by turning the PFD ON-OFF/brightness control OFF, or pressing the PFD/ND XFR pushbutton. If an NDU fails, the pilot can use the PFD/ND XFR pushbutton to transfer the ND image to the PFDU.",
      },
    ],
  },
  // ── C. PFD, ND y panel EFIS ──────────────────────────────────────────────
  {
    comment: "SLIDE SIS-01.9: PFD general and attitude data",
    eyebrow: EYEBROW,
    title: "1.9 PFD: actitud",
    subtitle: "ATA 31 · Indications on PFD",
    leftPct: 50,
    leftTitle: "PFD GENERAL · ATTITUDE DATA (DSC-31-40)",
    rightTitle: "ATTITUDE DATA",
    image: fig("pfd_attitude"),
    imageAlt: "Attitude data: aircraft symbol, roll scale and index, pitch scale, protection symbols and sideslip index",
    sourceRef: src("DSC-31-40 General / Attitude Data"),
    cards: [
      {
        heading: "The PFD provides:",
        paragraph:
          "Attitude and guidance · airspeed · altitude (BARO and radio) and vertical speed · heading and track · FMGS modes (Flight Mode Annunciator) · vertical and lateral deviations · radio navigation information (ILS, DME).",
      },
      {
        heading: "Attitude data",
        bullets: [
          "Roll index: when the bank angle exceeds 45 °, all the PFD symbols, except those for attitude, speed, heading, altitude, and vertical speed, disappear. The display returns to normal when the bank angle decreases below 40 °.",
          "Pitch scale: beyond 30 °, large red arrowheads indicate that the attitude has become excessive and show the direction to move the nose in order to reduce it.",
          "Flight control protection symbols (=) in green; an amber x replaces these symbols if the corresponding protection is lost.",
          "Sideslip index (yellow): in case of engine failure at takeoff or go around, it changes from yellow to blue (β target).",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SIS-01.10: PFD airspeed scale",
    eyebrow: EYEBROW,
    title: "1.10 PFD: escala de velocidad",
    subtitle: "ATA 31 · Airspeed",
    leftPct: 50,
    leftTitle: "AIRSPEED (DSC-31-40)",
    rightTitle: "AIRSPEED",
    image: fig("pfd_airspeed"),
    imageAlt: "Airspeed scale with speed trend, target airspeed, ECON speed range, speed protection and Mach number",
    sourceRef: src("DSC-31-40 Airspeed"),
    cards: [
      {
        heading: "Speed indications",
        bullets: [
          "Speed trend: the tip indicates the speed that the aircraft will reach in 10 s if its acceleration remains constant.",
          "Target airspeed: managed (magenta triangle) or selected on the FCU (blue triangle).",
          "VLS: the top of the amber strip; the lowest selectable speed providing an appropriate margin to the stall speed. Inhibited from touchdown until 10 s after liftoff.",
          "Alpha protection speed (black and amber strip) and alpha max speed (red strip): displayed when in pitch normal law.",
          "VMAX: the lower end of a red and black strip; the lowest of VMO (or the speed corresponding to MMO), VLE and VFE.",
          "F and S: minimum flap and slat retraction speeds. VFE next: amber = for the next flap lever position.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SIS-01.11: ND general and ROSE modes",
    eyebrow: EYEBROW,
    title: "1.11 ND: modos ROSE",
    subtitle: "ATA 31 · Indications on ND",
    leftPct: 45,
    leftTitle: "ND GENERAL · ROSE MODES (DSC-31-45)",
    rightTitle: "ROSE MODES",
    image: fig("nd_rose"),
    imageAlt: "ROSE mode symbols: heading, selected heading, track, GS and TAS, wind, navaids and range marks",
    sourceRef: src("DSC-31-45 General / ROSE Modes"),
    cards: [
      {
        heading: "General",
        paragraph:
          "There are five different displays: ROSE LS, ROSE VOR, ROSE NAV, ARC and PLAN. The ND can provide a weather radar image in all modes, except PLAN.",
      },
      {
        heading: "ROSE modes",
        bullets: [
          "Aircraft heading: the fixed yellow lubber line points to the aircraft magnetic heading on the moving white compass rose. \"TRU\" appears when it is displaying true heading.",
          "Selected heading or track (blue); actual aircraft track (small green diamond).",
          "Ground speed and true air speed (green), from ADIRS.",
          "Wind direction and speed: the digital direction reflects the true north reference, the green arrow the magnetic north reference; the arrow only appears if the wind speed is above two knots.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SIS-01.12: ND ROSE NAV and ARC modes",
    eyebrow: EYEBROW,
    title: "1.12 ND: ROSE NAV y ARC",
    subtitle: "ATA 31 · ROSE NAV Mode / ARC Mode",
    leftPct: 40,
    leftTitle: "ROSE NAV MODE / ARC MODE (DSC-31-45)",
    rightTitle: "ARC MODE",
    image: fig("nd_arc"),
    imageAlt: "ND in ARC mode with flight plan, waypoints and range arcs",
    sourceRef: src("DSC-31-45 ROSE NAV Mode/ARC Mode"),
    cards: [
      {
        heading: "ROSE NAV and ARC",
        paragraph: "ROSE NAV and ARC modes provide the same information to the flight crew, but ARC mode limits it to the forward 90 ° sector.",
      },
      {
        heading: "Range marks and values",
        bullets: [
          "ROSE NAV mode: 1/4 of the selected range for the inner circle; 1/2 of the selected range for the heading scale circle.",
          "ARC mode: 1/4, 1/2 and 3/4 of the selected range for the first, second and third inner arcs.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SIS-01.13: EFIS control panel",
    eyebrow: EYEBROW,
    title: "1.13 Panel de control EFIS",
    subtitle: "ATA 31 · EFIS Controls",
    leftPct: 50,
    leftTitle: "EFIS CONTROL PANEL (DSC-31-50)",
    rightTitle: "EFIS CONTROL PANEL",
    image: fig("efis_cp"),
    imageAlt: "EFIS control panel: barometer reference, FD and LS pushbuttons, mode and range selectors, ADF/VOR switches, option pushbuttons",
    sourceRef: src("DSC-31-50 EFIS Control Panel"),
    cards: [
      {
        heading: "Barometer reference",
        bullets: [
          "The minimum QNH value that can be selected is 745 hPa (22.00 inHg) and the maximum is 1 100 hPa (32.48 inHg).",
          "When the flight crew pulls the barometric reference knob, the barometric reference value is set to STD; when it pushes it, the barometric reference is set to QNH.",
        ],
      },
      {
        heading: "Other controls",
        bullets: [
          "FD pb: the PFD displays the FD bars (or the FPD symbol if the TRK FPA reference is selected).",
          "LS pb: the PFD displays the landing system data: deviation scales, deviation signals, course pointer, information.",
          "Range selector: if the mode or the range data fails, the default selection is the ROSE NAV mode and 80 NM range.",
          "Optional data display pushbuttons (CSTR, WPT, VOR.D, NDB, ARPT): only one option can be activated at a time. In PLAN mode the ND does not display terrain, weather, or traffic information.",
        ],
      },
    ],
  },
  // ── D. ECAM (ATA 31-10/20) ───────────────────────────────────────────────
  {
    comment: "SLIDE SIS-01.14: ECAM DU arrangement, colour code and FWC",
    eyebrow: EYEBROW,
    title: "1.14 ECAM: disposición y código de colores",
    subtitle: "ATA 31 · ECAM Description",
    leftPct: 50,
    leftTitle: "COLOR CODE · FWC (DSC-31-10 · DSC-31-05-30)",
    rightTitle: "ECAM DU ARRANGEMENT",
    image: fig("ecam_du_arrangement"),
    imageAlt: "Engine/warning display and system display contents: engine indications, fuel, flaps, memos, warnings, synoptics, status and permanent data",
    sourceRef: src("DSC-31-10 ECAM DU Arrangement / Color Code / DSC-31-05-30 Flight Warning Computer"),
    cards: [],
    table: {
      headers: ["Color", "Meaning"],
      rows: [
        ["RED", "The configuration or failure requires immediate action."],
        ["AMBER", "The flight crew should be aware of the configuration or failure, but need not take immediate action."],
        ["GREEN", "The item is operating normally."],
        ["WHITE", "These titles and remarks guide the flight crew, as they execute various procedures."],
        ["BLUE", "These are actions to be carried out, or limitations."],
        ["MAGENTA", "Particular messages that apply to particular pieces of equipment or situations (inhibition messages, for example)."],
      ],
    },
    alert: {
      level: "NOTE",
      text: "The two identical FWCs generate alert messages, memos, aural alerts, and synthetic voice messages: directly from aircraft sensors, or systems, to generate red warnings; through the SDACs to generate amber cautions. They also generate radio height callouts, decision height callouts, and landing distance and landing speed increments.",
    },
  },
  {
    comment: "SLIDE SIS-01.15: SD system pages and permanent data",
    eyebrow: EYEBROW,
    title: "1.15 SD: páginas de sistema y datos permanentes",
    subtitle: "ATA 31 · Indications on SD",
    leftPct: 50,
    leftTitle: "INDICATIONS ON SD (DSC-31-20)",
    rightTitle: "SYSTEM PAGE AND PERMANENT DATA",
    image: fig("sd_page"),
    imageAlt: "ELEC system page with a pulsing parameter and the permanent data line",
    sourceRef: src("DSC-31-20 System Pages / Permanent Data / Amber Crosses and Dashes"),
    cards: [
      {
        heading: "System pages",
        bullets: [
          "12 system pages: ENGINE, BLEED, CAB PRESS, ELEC, HYD, FUEL, APU, COND, DOOR/OXY, WHEEL, F/CTL, CRUISE.",
          "Manually: any system page, except the CRUISE page; a failure-related or advisory display automatically replaces a page the flight crew has manually called up.",
          "Automatically, related to an advisory: the value (shown in green) pulses, as long as it is outside its limits.",
        ],
      },
      {
        heading: "Permanent data",
        bullets: [
          "TAT and SAT in green.",
          "G LOAD in amber, when the value is above 1.4 g or below 0.7 g for more than 2 s.",
          "UTC, and GW in green as soon as the first engine is started (last two digits dashed, if accuracy is degraded).",
        ],
      },
      {
        heading: "Amber crosses and dashes",
        paragraph:
          "If a parameter value is not available for display, amber crosses \"XX\" appear instead of the value. If its accuracy is degraded, amber dashes are displayed over the last digits.",
      },
    ],
  },
];

export const MCC_SIS_01: MccLesson = {
  id: "a3200000-0000-0000-0000-000000000201",
  course_id: MCC_COURSE_ID,
  title: "SIS-01. Generalidades, cabina, EIS y ECAM",
  slug: "sis-01-generalidades-cabina-eis-ecam",
  sequence_order: 15,
  lesson_order: 15,
  min_seconds: 2700,
  module_title: MCC_MODULES.SYSTEMS,
  content_html: joinSlides(SIS_01_SLIDES),
};

export const SIS_01_SLIDE_COUNT = SIS_01_SLIDES.length;
