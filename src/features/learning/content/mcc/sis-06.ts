/**
 * SIS-06 — Uso del FMS: FMGS y MCDU (1 h aprox.).
 *
 * Alcance: Curso APS MCC — Airbus A320ceo CFM56-5B (simulador Entrol A32).
 * Fuente: FCOM 23MAR26 DSC-22_20-20-10-25 (Controls and Indicators - MCDU - Page Description), solo bloques del
 * grupo EC-ILQ. La variante de cada figura se ha comprobado con `scratch/fcom_fig_applic.py`; en RADIO NAV se han
 * tapado las líneas de ADF y en PERF APPR se han recortado las casillas BARO/RADIO (equipos opcionales).
 * Sin repetir: la secuencia de preparación del FMGS (orden de entrada de datos y comprobaciones) está en SOP-03; el
 * briefing de salida, en SOP-06. Aquí se explica qué muestra cada página del MCDU y para qué sirve.
 */
import { MCC_MODULES, joinSlides, mccMinSeconds, mccVideoSeconds, type MccLesson, type MccSlideSpec } from "./slide-builder.ts";

const MCC_COURSE_ID = "a3200000-0000-0000-0000-000000000320";
const IMG_BASE = "https://www.blueteam.es/elearning/media/mcc/pdp";
const EYEBROW = "APS MCC · A320 · SIS-06";

/** Versión común de caché de las figuras FCOM de esta lección. */
const IMG_VERSION = 1795638000;
const fig = (name: string) => `${IMG_BASE}/fcom_a320_sis6_${name}.webp?v=${IMG_VERSION}`;
const src = (sections: string) => `Source: FCOM A320 DSC-22_20-20-10-25 ${sections}`;

const SIS_06_SLIDES: MccSlideSpec[] = [
  // ── A. MCDU y páginas de inicialización ─────────────────────────────────
  {
    comment: "SLIDE SIS-06.1: MCDU page types",
    eyebrow: EYEBROW,
    title: "6.1 El MCDU: tipos de páginas",
    subtitle: "ATA 22 · MCDU Page Description",
    leftPct: 50,
    leftTitle: "MCDU - PAGE DESCRIPTION",
    rightTitle: "SCROLLING AND SUCCESSIVE PAGES",
    image: fig("mcdu"),
    imageAlt: "Two types of MCDU pages: pages scrolled with the slew keys and successive pages called with NEXT PAGE",
    sourceRef: src("General"),
    cards: [
      {
        heading: "General",
        paragraph:
          "The Flight Management and Guidance System (FMGS) displays information on various “pages”. When a page cannot display all of the assigned information, it cues the pilot to call up additional information.",
      },
      {
        heading: "Three types of pages",
        bullets: [
          "When this page cannot simultaneously display all the information on the screen, the pilot can scroll the page up or down. The screen displays a ↑↓ symbol in the bottom righthand corner (F-PLN pages, secondary F-PLN page, departure/arrival pages,...).",
          "When the information is on successive pages, the pilot presses the “NEXT PAGE” key to sequentially call up these pages. An arrow is displayed in the top righthand corner of the screen (INIT pages).",
          "When different types of information are on successive pages, the pilot calls up these pages by pressing the key adjacent to the prompts >, < or *.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SIS-06.2: MCDU MENU page",
    eyebrow: EYEBROW,
    title: "6.2 Página MCDU MENU",
    subtitle: "ATA 22 · MCDU MENU Page",
    leftPct: 50,
    leftTitle: "MCDU MENU PAGE",
    rightTitle: "MCDU MENU",
    image: fig("menu"),
    imageAlt: "MCDU MENU page listing FMGC, DATA LINK, AIDS and CFDS",
    sourceRef: src("MCDU MENU Page"),
    cards: [
      {
        heading: "Key fields",
        bullets: [
          "This page lists the various systems which the pilot can access via the MCDU.",
          "The pilot selects a system by pressing the key adjacent to the name of that system. The name of the selected system is displayed in green, all others in white.",
          "If the MCDU cannot establish communication with the selected system, it displays “OUT”.",
          "When a system calls for the pilot's attention, the MCDU displays “REQ” next to the system's name, and the “MCDU MENU” annunciator lights up.",
          "When the pilot presses the key next to the name of the system requiring attention, the “MCDU MENU” annunciator light goes out.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SIS-06.3: INIT A page (left fields)",
    eyebrow: EYEBROW,
    title: "6.3 Página INIT A: ruta, vuelo y crucero",
    subtitle: "ATA 22 · INIT A Page",
    leftPct: 55,
    leftTitle: "INIT A PAGE",
    rightTitle: "INIT A",
    image: fig("init_a"),
    imageAlt: "INIT A page before and after initialization: CO RTE, FROM/TO, FLT NBR, COST INDEX, CRZ FL/TEMP",
    sourceRef: src("INIT A Page"),
    cards: [
      {
        heading: "General",
        paragraph:
          "The flight crew uses the INIT A page to initialize the flight plan and align the inertial reference system. The flight crew accesses to this page by pressing the INIT key on the MCDU.",
      },
      {
        heading: "Key fields",
        bullets: [
          "[1L] CO RTE: if the flight crew enters a company route number, the screen displays all data associated with that route.",
          "[2L] ALTN/CO RTE: if a preferred alternate is associated with the primary destination, it is displayed in this field with the company route identification.",
          "[5L] COST INDEX: usually stored in the database along with the company route. The flight crew may modify it, or enter a new value here.",
          "[6L] CRZ FL/TEMP: if no cruise flight level is entered, the system will not furnish predictions, while the aircraft is on the ground. Without the temperature, predictions are computed for ISA conditions.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SIS-06.4: INIT A page (right fields)",
    eyebrow: EYEBROW,
    title: "6.4 Página INIT A: FROM/TO, IRS INIT, WIND y TROPO",
    subtitle: "ATA 22 · INIT A Page",
    leftPct: 55,
    leftTitle: "INIT A PAGE",
    rightTitle: "INIT A",
    image: fig("init_a"),
    imageAlt: "INIT A page: right-hand fields FROM/TO, INIT REQUEST, IRS INIT, WIND and TROPO",
    sourceRef: src("INIT A Page"),
    cards: [
      {
        heading: "Key fields",
        bullets: [
          "[1R] FROM/TO: allows the pilot to enter a city pair (ICAO codes). This entry automatically deletes any previously entered company route and calls up the route selection page.",
          "[2R] INIT REQUEST: selecting this prompt sends the ground a request for active flight plan initialization (downlink message). After engine start, the uplink flight plan is sent to the secondary flight plan and manually inserted or rejected.",
          "[3R] IRS INIT: the flight crew presses this key to access the IRS INIT page.",
          "[5R] WIND: the pilot presses this key in order to gain access to the climb wind page, unless a temporary flight plan exists.",
          "[6R] TROPO: the default tropopause altitude is 36 090 ft.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SIS-06.5: IRS INIT page",
    eyebrow: EYEBROW,
    title: "6.5 Página IRS INIT: alineación de los IRS",
    subtitle: "ATA 22 · IRS INIT Page",
    leftPct: 52,
    leftTitle: "IRS INIT PAGE",
    rightTitle: "IRS INIT",
    image: fig("irs_init"),
    imageAlt: "IRS INIT page: FM reference position, GPS position, IRS 1-2-3 aligning on GPS and ALIGN ON REF prompt",
    sourceRef: src("IRS INIT Page"),
    cards: [
      {
        heading: "General",
        paragraph:
          "The flight crew uses the IRS INIT page to align the inertial reference system. The crew accesses this page, by pressing the IRS INIT key on the INIT A page.",
      },
      {
        heading: "Key fields",
        bullets: [
          "Line 1 LAT-REFERENCE-LONG: latitude and longitude of the FM reference position, extracted from the navigation database. Only when it matches the origin airport position, the airport identifier is displayed in green.",
          "Line 2 LAT-GPS POSITION-LONG: displays the GPS position latitude and longitude.",
          "Line 3 to 5: IRS 1-2-3 alignment state, source and latitude/longitude. The alignment status can be ALIGNING ON XXX, or ALIGNED ON XXX or IN ATT. XXX can be GPS or CDU or REF.",
          "[6R] ALIGN ON REF → is replaced by CONFIRM ALIGN* in amber when pressed. Pressing again enables the transmission of the FM reference position displayed in line 1.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SIS-06.6: Wind pages",
    eyebrow: EYEBROW,
    title: "6.6 Páginas de viento",
    subtitle: "ATA 22 · WIND Pages",
    leftPct: 55,
    leftTitle: "WIND PAGES",
    rightTitle: "HISTORY WIND",
    image: fig("wind"),
    imageAlt: "HISTORY WIND page with wind vectors at five flight levels and CLIMB WIND / INSERT prompts",
    sourceRef: src("WIND Pages"),
    cards: [
      {
        heading: "General",
        paragraph:
          "Winds in climb, cruise, descent and approach are necessary to provide the pilot with reliable predictions and performance. Wind pages enable the pilot to enter and/or review the winds propagated by the FMGS or sent by ACARS for the various flight phases.",
      },
      {
        heading: "Key fields",
        bullets: [
          "CLIMB WIND: up to 5 different levels. Upon sequencing the top of climb, the climb winds are deleted.",
          "HISTORY WIND: displayed in preflight phase only. Not modifiable, but can be inserted into the CLIMB WIND page by using the 6R key.",
          "CRZ WIND: the entered winds are propagated at the same altitude to the downpath cruise waypoints, if no other winds are entered.",
          "DESCENT WIND: enables the pilot to define and display the winds used for computing the descent profile.",
        ],
      },
    ],
    alert: { level: "NOTE", text: "On WIND pages, wind direction is always true-referenced." },
  },
  {
    comment: "SLIDE SIS-06.7: INIT B page",
    eyebrow: EYEBROW,
    title: "6.7 Página INIT B: pesos y combustible",
    subtitle: "ATA 22 · INIT B Page",
    leftPct: 55,
    leftTitle: "INIT B PAGE",
    rightTitle: "INIT B · INIT FUEL PLANNING",
    image: fig("init_b"),
    imageAlt: "INIT B page and INIT FUEL PLANNING page: TAXI, TRIP, RTE RSV, ALTN, FINAL, MIN DEST FOB, ZFW/ZFWCG, BLOCK",
    sourceRef: src("INIT B Page"),
    cards: [
      {
        heading: "General",
        paragraph:
          "The pilot uses this page to initialize the gross weight and center of gravity, before starting the engines. This page automatically reverts to the FUEL PRED page after the first engine is started.",
      },
      {
        heading: "Key fields",
        bullets: [
          "[1R] ZFW/ZFWCG: the flight crew must enter the ZFW/ZFWCG values (as appropriate) to obtain a speed profile and predictions.",
          "[2R] BLOCK: the block fuel in this field is a mandatory entry.",
          "[3R] FUEL PLANNING: initiates an FMGC block fuel computation using current hypothesis and extra = 0. BLOCK CONFIRM* replaces the prompt when the block fuel is computed by the FMGC.",
          "[3L] RTE RSV/%: contingency fuel for the route and the corresponding percentage of trip fuel.",
          "[6L] MIN DEST FOB: expected minimum fuel at destination. It is equal by default to the ALTN + FINAL fuel.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SIS-06.8: FUEL PRED page",
    eyebrow: EYEBROW,
    title: "6.8 Página FUEL PRED",
    subtitle: "ATA 22 · FUEL PREDICTION Page",
    leftPct: 52,
    leftTitle: "FUEL PREDICTION PAGE",
    rightTitle: "FUEL PRED",
    image: fig("fuel_pred"),
    imageAlt: "FUEL PRED page: destination and alternate predictions, RTE RSV, ALTN, FINAL, MIN DEST FOB, ZFW/ZFWCG, FOB, GW/CG, EXTRA",
    sourceRef: src("FUEL PREDICTION Page"),
    cards: [
      {
        heading: "General",
        paragraph:
          "The pilot presses the FUEL PRED key on the MCDU console to display fuel prediction information at destination and alternate, as well as fuel management data after the engines are started.",
      },
      {
        heading: "Key fields",
        bullets: [
          "[1L]-[1R]: time and fuel predictions to the primary destination. The EFOB at destination will turn to amber, if it becomes less than the MIN DEST FOB value.",
          "[4R] FOB: calculated by the FMGS and the fuel sensors (/FF+FQ, /FF or /FQ). The flight crew can modify the FOB value in flight, or modify the sensors used.",
          "[5R] GW/CG: the FMS continuously updates the Gross Weight and Center of Gravity during the flight.",
          "[6R] EXTRA/TIME: EXTRA FUEL = FOB – (TAXI + TRIP + RSV + MIN DEST FOB).",
        ],
      },
    ],
    alert: { level: "NOTE", text: "All fields are dashed before engines are started." },
  },

  // ── B. Plan de vuelo y revisiones ───────────────────────────────────────
  {
    comment: "SLIDE SIS-06.9: F-PLN A page",
    eyebrow: EYEBROW,
    title: "6.9 Plan de vuelo: página F-PLN A",
    subtitle: "ATA 22 · FLIGHT PLAN Pages",
    leftPct: 52,
    leftTitle: "FLIGHT PLAN A PAGE",
    rightTitle: "F-PLN A AND CORRESPONDING ND",
    image: fig("fpln_a"),
    imageAlt: "F-PLN A page with FROM, TO and next waypoints and the corresponding ND display",
    sourceRef: src("FLIGHT PLAN Pages"),
    cards: [
      {
        heading: "General",
        paragraph:
          "These pages display all waypoints of the active and alternate flight plans, along with associated predictions. The flight crew presses the left key to revise the lateral flight plan, and the right key to revise the vertical flight plan.",
      },
      {
        heading: "Key fields",
        bullets: [
          "Line 1 to Line 5: consecutive waypoints along with associated predictions of time, speed or Mach and altitude for each.",
          "Line 6: DIST is the distance to destination along the displayed flight plan. EFOB is the estimated fuel on board at destination.",
          "The FROM waypoint (last waypoint to be overflown) is on the first line, and the TO waypoint (in white) on the second line. The FROM/TO flight plan leg is called the active leg.",
          "The AIRPORT key serves as a fast slew key. To return to the beginning of the flight plan page, the flight crew presses the F-PLN key.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SIS-06.10: F-PLN B page and missed approach",
    eyebrow: EYEBROW,
    title: "6.10 Página F-PLN B y lectura del plan de vuelo",
    subtitle: "ATA 22 · FLIGHT PLAN Pages",
    leftPct: 50,
    leftTitle: "FLIGHT PLAN PAGES",
    rightTitle: "F-PLN B",
    image: fig("fpln_b"),
    imageAlt: "F-PLN B page reached with NEXT PAGE from F-PLN A: EFOB and T.WIND at each waypoint",
    sourceRef: src("FLIGHT PLAN Pages"),
    cards: [
      {
        heading: "Key fields",
        bullets: [
          "The display shows the name of the leg between two waypoints, and the distance between them on a line between the lines that identify them.",
          "During an approach, this in-between line also defines the angle of the final descent path. For example, “2-3 °” indicates that the leg is two nautical miles long, and the flight path angle is -3 °.",
          "It shows track (TRK) between the waypoints shown in lines 2 and 3. This is the outbound track of the next leg.",
          "If the database contains a published missed approach procedure, the display shows it in blue after the destination runway identification. It turns green when the go-around phase becomes active.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "The predicted altitude at a waypoint is related to the QNH below the transition altitude, and is given as a flight level above the transition altitude.",
    },
  },
  {
    comment: "SLIDE SIS-06.11: Lateral revision pages",
    eyebrow: EYEBROW,
    title: "6.11 Revisión lateral (LAT REV)",
    subtitle: "ATA 22 · LATERAL REVISION Pages",
    leftPct: 55,
    leftTitle: "LATERAL REVISION PAGES",
    rightTitle: "LAT REV AT ORIGIN · AT DESTINATION",
    image: fig("lat_rev"),
    imageAlt: "LAT REV page at the origin and at the destination",
    sourceRef: src("LATERAL REVISION Pages"),
    cards: [
      {
        heading: "General",
        paragraph:
          "The flight crew calls up these pages from the flight plan pages (A or B) by pressing the left key adjacent to the selected waypoint. Different lateral flight plan revisions are available for different waypoints.",
      },
      {
        heading: "Key fields",
        bullets: [
          "[1L] DEPARTURE · [1R] ARRIVAL: access to the departure and arrival pages.",
          "[2L] OFFSET · [3L] HOLD · [5R] AIRWAYS: access to the OFFSET, hold and AIRWAYS pages.",
          "[4L] ENABLE ALTN: switch to the alternate flight plan at the selected revision waypoint, and use it as a new active flight plan.",
          "[3R] NEXT WPT · [4R] NEW DEST: enter the next waypoint or a new destination.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "When the flight crew selects a lateral revision, the system creates a “Temporary F-PLN” and displays it in yellow on the MCDU, and as a dashed yellow line on the ND. As long as it is not inserted, the previous flight plan remains active.",
    },
  },
  {
    comment: "SLIDE SIS-06.12: Departure pages",
    eyebrow: EYEBROW,
    title: "6.12 Páginas DEPARTURE: pista, SID y transición",
    subtitle: "ATA 22 · DEPARTURE Pages",
    leftPct: 58,
    leftTitle: "DEPARTURE PAGES",
    rightTitle: "RUNWAY AND SID SELECTION",
    image: fig("departure"),
    imageAlt: "From LAT REV at origin to the DEPARTURES pages: runway selection, SID selection and typical page after insertion",
    sourceRef: src("DEPARTURE Pages"),
    cards: [
      {
        heading: "General",
        paragraph:
          "These pages allow the pilot to review departure procedures (RWY, SID, TRANS) and enter them into the active flight plan. Three pages are available: RWY, and SIDS and TRANS (if any).",
      },
      {
        heading: "Key fields",
        bullets: [
          "Line 1: the RWY, SID, and TRANS in green after they have been inserted into the active flight plan, or in yellow if selected but not yet inserted.",
          "[2L] to [5L]: selectable RWYs and SIDs are displayed in blue with an arrow. The display shows the length, heading, and, if available, the ILS ident and frequency for each runway.",
          "[6R] INSERT: inserts the temporary procedure into the flight plan.",
          "[6M] EOSID: once a runway is inserted, this field displays any ENG OUT SID for that runway. If there is none, it displays NONE.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SIS-06.13: Arrival pages",
    eyebrow: EYEBROW,
    title: "6.13 Páginas ARRIVAL: aproximación, STAR y VIA",
    subtitle: "ATA 22 · ARRIVAL Pages",
    leftPct: 58,
    leftTitle: "ARRIVAL PAGES",
    rightTitle: "APPROACH AND STAR SELECTION",
    image: fig("arrival"),
    imageAlt: "From LAT REV at destination to the ARRIVAL pages: approach selection and STAR selection",
    sourceRef: src("ARRIVAL Pages"),
    cards: [
      {
        heading: "General",
        paragraph:
          "These pages enable the flight crew to review arrival procedures (approaches, VIAs, STARs, TRANS) and enter them into the active flight plan. The flight crew presses the [1R] key from the LAT REV page for the destination.",
      },
      {
        heading: "Key fields",
        bullets: [
          "Line 1: the APPR, VIA, STAR, and TRANS in green, if they are inserted in the flight plan, and in yellow, as a temporary flight plan, if they are selected but not yet inserted.",
          "[2L] APPR VIAS: transitions from the last point of the STAR to the first point of the approach.",
          "[3L] to [5L]: the FMS displays the APPRs, STARs, and VIAs that are available for selection in blue with an arrow.",
          "For each approach, the display shows runway length, heading, and the frequency and identifier of the ILS.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SIS-06.14: Hold pages",
    eyebrow: EYEBROW,
    title: "6.14 Páginas HOLD: esperas",
    subtitle: "ATA 22 · HOLD Pages",
    leftPct: 52,
    leftTitle: "HOLD PAGES",
    rightTitle: "COMPUTED HOLD · HOLD MODIFIED",
    image: fig("hold3"),
    imageAlt: "COMPUTED HOLD page and HOLD page modified by the flight crew with REVERT TO COMPUTED prompt",
    sourceRef: src("HOLD Pages"),
    cards: [
      {
        heading: "General",
        paragraph:
          "The flight crew calls up these pages by pressing the HOLD key on the LAT REV page for the waypoint. The flight crew can insert database hold, holds computed by the FMS or holds that they manually define.",
      },
      {
        heading: "Key fields",
        bullets: [
          "A computed hold has the following default parameters: inbound track of the F-PLN leg leading to the revised waypoint; turn direction right (R); outbound leg 1.5 min above 14 000 ft, 1 min below 14 000 ft.",
          "[3L] TIME/DIST: time and distance cannot be entered simultaneously.",
          "[2R] REVERT TO...: deletes manual modifications and reverts to the database (or computed) holding data.",
          "LAST EXIT UTC FUEL: the time at which the aircraft must leave the holding pattern in order to meet fuel policy criteria (extra fuel = 0).",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SIS-06.15: Direct to page",
    eyebrow: EYEBROW,
    title: "6.15 Página DIR TO",
    subtitle: "ATA 22 · DIRECT TO Page",
    leftPct: 52,
    leftTitle: "DIRECT TO PAGE",
    rightTitle: "DIR TO · ABEAM · RADIAL IN",
    image: fig("dir_to"),
    imageAlt: "DIR TO page initial selection and with intercept radial in, and the resulting F-PLN A pages",
    sourceRef: src("DIRECT TO Page"),
    cards: [
      {
        heading: "General",
        paragraph:
          "Pressing the “DIR” key under the MCDU screen brings up the DIR TO page. The pilot presses [1L] to modify the flight plan by creating a direct leg from the aircraft's present position to any selected waypoint. When in NAV mode, the pilot must use this key to modify the active leg or the TO waypoint.",
      },
      {
        heading: "Key fields",
        bullets: [
          "[2L] ABEAM PTS: projects the flight plan waypoints perpendiculary on the DIR TO leg.",
          "[1R] RADIAL IN and [2R] RADIAL OUT: activate the DIR TO/INTERCEPT TO and DIR TO/INTERCEPT FROM functions.",
        ],
      },
    ],
    alert: {
      level: "CAUTION",
      text: "It is not recommended to use the DIR TO function when the aircraft is on the ground. It may result in the loss of all departure data: the takeoff speeds and the derated level, or the flexible temperature.",
    },
  },
  {
    comment: "SLIDE SIS-06.16: Vertical revision pages",
    eyebrow: EYEBROW,
    title: "6.16 Revisión vertical (VERT REV)",
    subtitle: "ATA 22 · VERTICAL REVISION Pages",
    leftPct: 58,
    leftTitle: "VERTICAL REVISION PAGES",
    rightTitle: "VERT REV",
    image: fig("vert_rev"),
    imageAlt: "VERT REV page at origin, at a cruise waypoint and at a climb waypoint with altitude constraint and ALT ERROR",
    sourceRef: src("VERTICAL REVISION Pages"),
    cards: [
      {
        heading: "General",
        paragraph:
          "The pilot calls up these pages from the flight plan A or B pages by pressing the right hand key next to the selected revised waypoint: speed limit, speed constraint, altitude constraint, time constraint, wind page and STEP ALTS page.",
      },
      {
        heading: "Key fields",
        bullets: [
          "[2L] CLB/DES SPD: speed limit applicable to the climb or descent phase.",
          "[3L] SPD CSTR · [3R] ALT CSTR: large font when inserted manually, small font when from the database. A CLR action reverts it to brackets.",
          "ALT CSTR may be “At” (FL 180), “At or above” (+ XXXXX) or “At or below” (– XXXXX). The crew cannot manually enter a “window” constraint.",
          "[4R] ALT ERROR: when the aircraft misses a predicted altitude constraint, the difference between the altitude constraint and the predicted altitude.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SIS-06.17: Secondary flight plan",
    eyebrow: EYEBROW,
    title: "6.17 Plan de vuelo secundario (SEC F-PLN)",
    subtitle: "ATA 22 · SECONDARY Pages",
    leftPct: 55,
    leftTitle: "SECONDARY PAGES",
    rightTitle: "SEC INDEX",
    image: fig("sec_index"),
    imageAlt: "SEC INDEX page: COPY ACTIVE, SEC F-PLN, DELETE SEC, ACTIVATE SEC, INIT and PERF",
    sourceRef: src("SECONDARY Pages"),
    cards: [
      {
        heading: "General",
        paragraph:
          "The SEC F-PLN key on the MCDU console allows the flight crew to call up the secondary index page and the secondary flight plan page. The secondary flight plan is generally for a diversion, for predictable runway changes for takeoff or landing, or for training.",
      },
      {
        heading: "Key fields",
        bullets: [
          "[1L] COPY ACTIVE: copies the active flight plan into the secondary flight plan and deletes the previous secondary plan.",
          "[4L] ACTIVATE SEC: activates the secondary flight plan as the active flight plan. If the NAV mode is active, it appears only if the active and secondary flight plans have a common active leg.",
          "A lateral or vertical revision of the secondary flight plan does not create a temporary flight plan.",
          "SEC INIT pages use blue brackets, instead of amber boxes.",
        ],
      },
    ],
  },

  // ── C. Performance por fase ─────────────────────────────────────────────
  {
    comment: "SLIDE SIS-06.18: PERF pages and flight phases",
    eyebrow: EYEBROW,
    title: "6.18 Páginas PERF y fases de vuelo del FMGS",
    subtitle: "ATA 22 · PERF Page",
    leftPct: 52,
    leftTitle: "PERF PAGE",
    rightTitle: "PERF PAGES BY PHASE",
    image: fig("perf_idx"),
    imageAlt: "Sequence of PERF pages TAKE OFF, CLB, CRZ, DES, APPR and GO AROUND linked by PREV PHASE and NEXT PHASE",
    sourceRef: src("PERF Page"),
    cards: [
      {
        heading: "General",
        paragraph:
          "The flight plan is divided into the following phases: PREFLIGHT, TAKEOFF, CLIMB, CRUISE, DESCENT, APPROACH, GO-AROUND, DONE. Each phase, except for the preflight and done phases, has a performance (PERF) page.",
      },
      {
        heading: "Key fields",
        bullets: [
          "Pressing the PERF key on the MCDU console calls up the performance page for the current active phase. Performance pages, relating to phases already flown, are not available.",
          "In the preflight and done phases, pressing the PERF key brings up the takeoff performance page.",
          "[6L] ACTIVATE APPR: to activate, then confirm, the APPR phase. Available only on the page corresponding to the active phase.",
          "The FMGS flight phases are not related to the FWC flight phases.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SIS-06.19: PERF TAKEOFF page",
    eyebrow: EYEBROW,
    title: "6.19 Página PERF TAKE OFF",
    subtitle: "ATA 22 · PERF TAKEOFF Page",
    leftPct: 55,
    leftTitle: "PERF TAKEOFF PAGE",
    rightTitle: "TAKE OFF",
    image: fig("perf_to"),
    imageAlt: "PERF TAKE OFF page before and after entry of V1, VR, V2, FLAPS/THS and FLX TO TEMP",
    sourceRef: src("PERF TAKEOFF Page"),
    cards: [
      {
        heading: "Key fields",
        bullets: [
          "[1L] V1 [2L] VR [3L] V2: the boxes remain amber, as long as the pilot does not make entries in them. If the flight crew does not enter V2, the SRS mode will be unavailable at takeoff.",
          "[5L] THR RED: altitude at which the pilot should reduce the thrust from TOGA/FLX to MAX CLIMB. ACC: altitude at which the climb phase is triggered. Both default to 1 500 ft above runway elevation; minimum 400 ft.",
          "[2R] TO SHIFT: when taking off from an intersection, the flight crew should insert this value to ensure a correct update of the FM position.",
          "[3R] FLAPS/THS: flight crew entry for the positions of the flaps and the THS at takeoff.",
          "[4R] FLX TO TEMP: the system sends it to the FADEC and displays the entered data on the upper ECAM display.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "If the takeoff shift, or the flaps/THS, or the runway is changed after V1, VR or V2 insertion, the MCDU “CHECK TAKE OFF DATA” message appears.",
    },
  },
  {
    comment: "SLIDE SIS-06.20: PERF CLIMB page",
    eyebrow: EYEBROW,
    title: "6.20 Página PERF CLB",
    subtitle: "ATA 22 · PERF CLIMB Page",
    leftPct: 52,
    leftTitle: "PERF CLIMB PAGE",
    rightTitle: "CLB",
    image: fig("perf_clb"),
    imageAlt: "PERF CLB page with climb phase not active (managed) and active (speed manually selected)",
    sourceRef: src("PERF CLIMB Page"),
    cards: [
      {
        heading: "Key fields",
        bullets: [
          "[1L] ACT MODE: the preselected or active speed mode: SELECTED or MANAGED.",
          "[2L] CI: the cost index, as initialized on the INIT A or defaulted from the database, or inserted in this field by the pilot.",
          "[3L] MANAGED: the FMGS computed ECON speed/Mach.",
          "[4L] PRESEL: as long as the climb phase is not active, the pilot can enter a preselected speed only.",
          "[5L] EXPEDITE: time and distance required to reach the altitude displayed in the 2R field, in case of climb at green dot.",
          "[2R] PRED TO...: target altitude for the predictions. It defaults to FCU altitude.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SIS-06.21: PERF CRUISE page",
    eyebrow: EYEBROW,
    title: "6.21 Página PERF CRZ",
    subtitle: "ATA 22 · PERF CRUISE Page",
    leftPct: 52,
    leftTitle: "PERF CRUISE PAGE",
    rightTitle: "CRZ",
    image: fig("perf_crz"),
    imageAlt: "PERF CRZ page with cruise phase not active and active: DES CABIN RATE and STEP ALTS",
    sourceRef: src("PERF CRUISE Page"),
    cards: [
      {
        heading: "Key fields",
        bullets: [
          "[1R] TIME/UTC DES: after takeoff, the predicted arrival time at destination (UTC) and the remaining fuel on board (DEST EFOB).",
          "[2R] STEP TO FL XX, DRIFT DOWN TO FL XX, or TO T/D: with 3R, predictions for the step point and the step altitude, the drift down altitude, or the Top of Descent.",
          "[4R] DES CABIN RATE: the pilot may modify the value: the FM recomputes then the top of descent in order to match this value. A clear action reverts to the default value (-350 ft/min).",
          "[5R] STEP ALTS: calls up the STEP ALTS page.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "If the pilot activates the approach phase inadvertently, it can reselect the cruise flight level into the progress page to reactivate the cruise phase.",
    },
  },
  {
    comment: "SLIDE SIS-06.22: PERF DESCENT page",
    eyebrow: EYEBROW,
    title: "6.22 Página PERF DES",
    subtitle: "ATA 22 · PERF DESCENT Page",
    leftPct: 52,
    leftTitle: "PERF DESCENT PAGE",
    rightTitle: "DES",
    image: fig("perf_des"),
    imageAlt: "PERF DES page with descent phase not active (managed speed) and active (selected speed)",
    sourceRef: src("PERF DESCENT Page"),
    cards: [
      {
        heading: "Key fields",
        bullets: [
          "[3L] MANAGED: if the descent phase is not active, the crew may overwrite the ECON descent Mach or speed. The system uses the pilot entry to compute the descent profile.",
          "[3L] MANAGED: if the descent phase is active, the flight crew cannot make an entry in this field.",
          "[4L]: if the descent phase is active and the active speed mode is SELECTED, the field displays the speed or Mach target manually selected by the pilot.",
          "[5L] EXPEDITE: time and distance required to reach the altitude displayed in the 2R field at MMO/VMO speed.",
          "[2R] PRED TO...: defaults to the altitude selected on the FCU.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SIS-06.23: PERF APPR page",
    eyebrow: EYEBROW,
    title: "6.23 Página PERF APPR",
    subtitle: "ATA 22 · PERF APPR Page",
    leftPct: 55,
    leftTitle: "PERF APPR PAGE",
    rightTitle: "APPR",
    image: fig("perf_appr"),
    imageAlt: "PERF APPR page for an ILS and a VOR approach: QNH, TEMP, MAG WIND, TRANS ALT, VAPP, F, S, green dot, VLS, MDA, DH and LDG CONF",
    sourceRef: src("PERF APPR Page"),
    cards: [
      {
        heading: "Key fields",
        bullets: [
          "[1L] QNH: brackets when the aircraft is more than 180 NM from the destination. Inside 180 NM, mandatory amber boxes appear.",
          "[3L] MAG WIND: the magnetic wind in knots at the destination.",
          "[5L] VAPP = VLS + 5 + 1/3 of the headwind components (1/3 of the headwind component is limited to 15 kt).",
          "[2R] MDA · [3R] DH: for a CAT II or CAT III approach, the flight crew inserts the decision height. The system will accept an entry of NO, NODH or NO DH.",
          "[4R] CONF 3 · [5R] FULL: CONF FULL is the default landing configuration.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "An erroneous entry of an OAT or BARO minimum in QNH field is accepted by the system. The CPC then computes an erroneous cabin pressurization segment during descent.",
    },
  },
  {
    comment: "SLIDE SIS-06.24: PERF GO AROUND page",
    eyebrow: EYEBROW,
    title: "6.24 Página PERF GO AROUND",
    subtitle: "ATA 22 · PERF GO AROUND Page",
    leftPct: 52,
    leftTitle: "PERF GO AROUND PAGE",
    rightTitle: "GO AROUND",
    image: fig("perf_ga"),
    imageAlt: "PERF GO AROUND page with go-around phase not active and active: THR RED/ACC and ENG OUT ACC",
    sourceRef: src("PERF GO AROUND Page"),
    cards: [
      {
        heading: "Key fields",
        bullets: [
          "[5L] THR RED: altitude at which thrust must be reduced from takeoff/go-around thrust to maximum climb thrust. Defaults to 1 500 ft above destination runway elevation, or to the altitude set by the airline.",
          "[5L] ACC: altitude at which target speed jumps to green-dot speed. Always equal to (or higher than) the thrust reduction altitude.",
          "[6L] ACTIVATE APPR: displayed if the go-around phase is active. Pressing it once makes “CONFIRM APPR” appear; a second press activates the approach phase.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "When the go-around phase is active, if the pilot enables ALTN or inserts a new destination and a new cruise flight level on the progress page, the go-around phase shifts automatically into the climb phase.",
    },
  },

  // ── D. Navegación y datos ───────────────────────────────────────────────
  {
    comment: "SLIDE SIS-06.25: PROG page",
    eyebrow: EYEBROW,
    title: "6.25 Página PROG",
    subtitle: "ATA 22 · PROG Pages",
    leftPct: 52,
    leftTitle: "PROG PAGES",
    rightTitle: "PROG",
    image: fig("prog"),
    imageAlt: "PROG page in takeoff and climb phases: CRZ, OPT, REC MAX, position update, BRG/DIST and GPS PRIMARY",
    sourceRef: src("PROG Pages"),
    cards: [
      {
        heading: "General",
        paragraph:
          "The progress page is a multifunction page that enables the pilot to select a new cruise flight level, crosscheck the navigation accuracy of the FM system and validate it, update the FM position and monitor the descent.",
      },
      {
        heading: "Key fields",
        bullets: [
          "Line 1: CRZ (blue), the optimum flight level (OPT, green) and the recommended maximum altitude (REC MAX, magenta), with a 0.3 g buffet margin.",
          "[2R] VDEV: during descent and approach, the vertical deviation between the aircraft's current altitude and the FMS-computed vertical profile.",
          "Line 3 UPDATE AT: the flight crew confirms the update when the aircraft overflies the inserted position.",
          "Line 4 BRG/DIST: FMGC-computed bearing and distance to the site from the aircraft's present position.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SIS-06.26: RADIO NAV page",
    eyebrow: EYEBROW,
    title: "6.26 Página RADIO NAV",
    subtitle: "ATA 22 · RADIO NAV Page",
    leftPct: 52,
    leftTitle: "RADIO NAV PAGE",
    rightTitle: "RADIO NAV",
    image: fig("rad_nav"),
    imageAlt: "RADIO NAV page: VOR1 and VOR2 identifiers, frequencies and courses, LS ident and frequency, CRS and SLOPE",
    sourceRef: src("RADIO NAV Page"),
    cards: [
      {
        heading: "General",
        paragraph: "This page enables the flight crew to select or verify the radio NAVAIDs, tuned for display purposes only.",
      },
      {
        heading: "Key fields",
        bullets: [
          "Line 1 VOR1/FREQ - FREQ/VOR2: to manually tune a VOR, the flight crew inserts the ident or frequency. A “clear” action reverts the selection to the autotuned NAVAID.",
          "[3L] LS/FREQ: autotuned, if the ILS is associated with the departure runway, or if the flight plan contains an ILS approach. When the manually entered ILS differs, RWY/LS MISMATCH appears.",
          "[4L] CRS SLOPE: if the flight crew manually tunes an ILS by its frequency and does not enter the course, the flight crew will not be able to arm approach modes.",
          "When tuning manually, the operator should use the ident, rather than the frequency, unless the NAVAID is not in the database.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SIS-06.27: DATA INDEX pages",
    eyebrow: EYEBROW,
    title: "6.27 Páginas DATA INDEX",
    subtitle: "ATA 22 · DATA INDEX Pages",
    leftPct: 50,
    leftTitle: "DATA INDEX PAGES",
    rightTitle: "DATA INDEX 1/2 · 2/2",
    image: fig("data_index"),
    imageAlt: "DATA INDEX 1/2 and 2/2 pages accessed with the DATA key",
    sourceRef: src("DATA INDEX Pages"),
    cards: [
      {
        heading: "Key fields",
        bullets: [
          "The DATA INDEX 1/2 page gives access to various pages devoted to navigation.",
          "The DATA INDEX 2/2 page lists the navigation data, entered in the FMGS. The pilot enters those items labeled “stored” and can modify them. The pilot can call up the others, but cannot modify them.",
          "[1L] POSITION MONITOR - [2L] IRS MONITOR: the display shows all essential navigation data.",
          "[3L] GPS MONITOR · [4L] A/C STATUS · [5L] CLOSEST AIRPORTS · [6L] EQUITIME POINT.",
          "[6R] ACARS/PRINT: calls up the PRINT function pages and the ACARS function pages.",
        ],
      },
    ],
  },
];

export const MCC_SIS_06: MccLesson = {
  id: "a3200000-0000-0000-0000-000000000206",
  course_id: MCC_COURSE_ID,
  title: "SIS-06. Uso del FMS: FMGS y MCDU",
  slug: "sis-06-fms-fmgs-mcdu",
  sequence_order: 23,
  lesson_order: 23,
  min_seconds: mccMinSeconds(SIS_06_SLIDES.length, mccVideoSeconds(SIS_06_SLIDES)),
  module_title: MCC_MODULES.SYSTEMS,
  content_html: joinSlides(SIS_06_SLIDES),
};

export const SIS_06_SLIDE_COUNT = SIS_06_SLIDES.length;
