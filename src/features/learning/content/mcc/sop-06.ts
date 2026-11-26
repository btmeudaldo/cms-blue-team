/**
 * SOP-06 — Subida, crucero, preparación e inicio del descenso (1 h).
 *
 * Alcance: Curso APS MCC — Airbus A320ceo CFM56-5B (simulador Entrol A32).
 * Fuentes: Airbus Tutorial PDP Jan 2024 — Climb (págs. 198–204), Cruise (205–211) y Descent (212–227);
 * FCOM A320 PRO-NOR-SOP-14 (Climb), SOP-15 (Cruise), SOP-16 (Descent Preparation), SOP-17 (Descent) y
 * DSC-22_20 (Offset).
 *
 * Criterio de redacción: la columna izquierda NO repite el texto de la lámina de la derecha; aporta la
 * información complementaria del FCOM (textos L1/L2, WARNING/CAUTION/NOTE) en inglés y literal. Solo se
 * repite algo de la lámina cuando es crítico. Variante FCOM: A320ceo CFM56-5B.
 * Láminas no usadas: 198 (botón A330), 200 y 227 (flujos de SOP-02), 202 (solo A330), 209 y 211, 217–218
 * (briefing ya en SOP-02/03), 221 y 225 (incluye líneas A330). De la 204 solo se usa la caja A320.
 * Arquitectura: docs/mcc/08_ARQUITECTURA_PDP.md.
 */
import { MCC_MODULES, joinSlides, mccMinSeconds, mccVideoSeconds, type MccLesson, type MccSlideSpec } from "./slide-builder.ts";

const MCC_COURSE_ID = "a3200000-0000-0000-0000-000000000320";
const PDP_IMG = "https://www.blueteam.es/elearning/media/mcc/pdp";
const EYEBROW = "APS MCC · A320 · SOP-06";

/** Todas las láminas llevan el pie recortado y se re-subieron: versión común para la caché. */
const IMG_VERSION = 1795622000;
const chapter = (page: number) => (page <= 204 ? "climb" : page <= 211 ? "cruise" : "descent");
const img = (page: number) => `${PDP_IMG}/p${String(page).padStart(3, "0")}_${chapter(page)}.webp?v=${IMG_VERSION}`;
const fcomImg = (name: string) => `${PDP_IMG}/${name}.webp`;
const IMG_SOFT_ALT_A320 = `${PDP_IMG}/p204_climb_soft_altitude_a320.webp?v=${IMG_VERSION}`;
const PDP_NAME: Record<string, string> = { climb: "Climb", cruise: "Cruise", descent: "Descent" };
const src = (sections: string, page: number) =>
  `Source: FCOM A320 ${sections} & Airbus Tutorial PDP Jan 2024 — ${PDP_NAME[chapter(page)]} (p.${page})`;

const SOP_06_SLIDES: MccSlideSpec[] = [
  // ── A. Climb ─────────────────────────────────────────────────────────────
  {
    comment: "SLIDE SOP-06.1: Climb at 10 000 ft AAL",
    eyebrow: EYEBROW,
    title: "6.1 Subida: pasando 10 000 ft AAL",
    subtitle: "Climb · 10 000 FT AAL",
    leftPct: 48,
    leftTitle: "AT 10 000 FT AAL (PRO-NOR-SOP-14)",
    rightTitle: "CLIMB / 10 000 FT AAL — PF / PM",
    image: img(199),
    imageAlt: "Climb items passing 10 000 ft AAL for PF and PM",
    sourceRef: src("PRO-NOR-SOP-14 At 10 000 ft AAL", 199),
    cards: [
      {
        heading: "Lights · EFIS",
        bullets: [
          "LAND sw ……… RETRACT (PM)",
          "EFIS OPTIONS ……… AS RQRD (PF-PM) — Select CSTR on one side, for grid MORA (if available), and ARPT on the other side.",
        ],
      },
      {
        heading: "PM",
        bullets: [
          "NAVAIDS ……… CLEAR — Clear manually tuned VORs from RAD NAV page.",
          "SEC F-PLN page ……… AS RQRD — Recopy the active flight plan in the secondary if an immediate return flight plan has been constructed previously.",
          "OPT FL/REC MAX FL ……… CHECK — On the FMS PROG page, check the optimum and recommended maximum flight levels.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SOP-06.2: Cruise capture and CRZ FL",
    eyebrow: EYEBROW,
    title: "6.2 Fin de la subida y captura del nivel de crucero",
    subtitle: "Climb · Cruise Capture",
    leftPct: 50,
    leftTitle: "CRZ FL ……… SET AS RQRD (PF)",
    rightTitle: "END OF CLIMB – CRUISE CAPTURE",
    image: img(201),
    imageAlt: "FMA sequence at cruise capture: ALT star and ALT CRZ",
    sourceRef: src("PRO-NOR-SOP-14 Climb - CRZ FL", 201),
    cards: [
      {
        heading: "CRZ FL",
        bullets: [
          "If ATC clears the aircraft to its intended CRZ FL or above, there is no need to modify the CRZ FL entered in the INIT A page during cockpit preparation. The MCDU will automatically take into account a higher CRZ FL selected with the FCU ALT knob.",
          "If ATC limits CRZ FL to a lower level than the one entered in the INIT A page (or present on the PROG page) the flight crew must insert this lower CRZ FL in the PROG page.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "Otherwise there is no transition into CRZ phase: the managed speed targets and Mach are not modified, and SOFT ALT mode is not available. In that case, the FMA will display: MACH/ALT/NAV instead of MACH/ALT CRZ/NAV.",
    },
  },
  {
    comment: "SLIDE SOP-06.3: Climb speed modifications and expedite",
    eyebrow: EYEBROW,
    title: "6.3 Cambios de velocidad en subida y EXPEDITE",
    subtitle: "Climb · Speed Modifications",
    leftPct: 50,
    leftTitle: "CLIMB SPEED · EXPEDITE",
    rightTitle: "TRANSITION TO CRZ PHASE",
    image: img(203),
    imageAlt: "Transition to cruise phase depending on the final ATC clearance",
    sourceRef: src("PRO-NOR-SOP-14 Climb Speed Modifications / Expedite Climb", 203),
    cards: [
      {
        heading: "Climb speed modifications",
        bullets: [
          "If ATC, turbulence or operational considerations lead to a speed change: select the new speed with FCU SPD knob and pull. Speed target is now “selected”.",
          "To return to managed speed mode, push FCU SPD knob. The speed target is now “managed”.",
          "The best speed (and rate of climb) for long-term situations lies between green dot speed and ECON speed. At high altitude, acceleration from green dot to ECON speed can take a long time.",
        ],
      },
      {
        heading: "Expedite climb",
        paragraph:
          "If ATC requires a rapid climb through a particular level: push the EXP pb on the FCU. The target speed is now green dot speed. Use EXP only for short-term tactical situations. For the best overall economy fly at ECON IAS.",
      },
    ],
  },
  {
    comment: "SLIDE SOP-06.4: Soft altitude mode, engine anti-ice and radar",
    eyebrow: EYEBROW,
    title: "6.4 Soft altitude, antihielo y radar",
    subtitle: "Climb · Soft Altitude Mode",
    leftPct: 45,
    leftTitle: "ENG ANTI-ICE · RADAR TILT",
    rightTitle: "A320 SOFT ALTITUDE MODE",
    image: IMG_SOFT_ALT_A320,
    imageAlt: "A320 soft altitude mode: plus or minus 50 ft after cruise capture",
    sourceRef: src("PRO-NOR-SOP-14 Eng Anti-Ice / Radar Tilt", 204),
    cards: [
      {
        heading: "ENG ANTI-ICE pb-sw ……… AS RQRD (PM)",
        paragraph:
          "Engine anti-ice must be set to ON when icing conditions exist or are anticipated, except during climb and cruise when the SAT is below - 40 °C (-40 °F).",
      },
      {
        heading: "RADAR (PRO-NOR-SOP-14)",
        bullets: ["RADAR TILT ……… ADJUST AS APPROPRIATE (PF)"],
      },
    ],
  },
  // ── B. Cruise ────────────────────────────────────────────────────────────
  {
    comment: "SLIDE SOP-06.5: Cruise flight progress and fuel",
    eyebrow: EYEBROW,
    title: "6.5 Crucero: progreso del vuelo y combustible",
    subtitle: "Cruise · Flight Progress / Fuel",
    leftPct: 50,
    leftTitle: "FLIGHT PROGRESS · FUEL (PF-PM)",
    rightTitle: "CRUISE — PERIODICALLY",
    image: img(205),
    imageAlt: "Periodic cruise checks, level change and offset",
    sourceRef: src("PRO-NOR-SOP-15 ECAM / Flight Progress", 205),
    cards: [
      {
        heading: "Tasksharing · flight progress",
        bullets: [
          "In cruise, the tasksharing is left to the flight crew's appreciation.",
          "When overflying a manually entered waypoint: check track and distance to the next waypoint · check the wind and update it if the current wind is significantly different.",
        ],
      },
      {
        heading: "When overflying the waypoint, or at least every 30 min — check FUEL",
        bullets: [
          "Check FOB (ECAM) and fuel prediction (FMGC), and compare with the computerized flight or use the performance application of the EFB",
          "Check that there is no fuel leak",
          "Check that the sum of the fuel on board and the fuel used is consistent with the fuel on board at departure: if the value is abnormally negative, suspect a fuel leak; if the value is abnormally positive, suspect a fuel quantity overread.",
        ],
      },
    ],
    alert: {
      level: "CAUTION",
      text: "This check must also be performed each time a FUEL IMBALANCE procedure is necessary. Perform the check before applying the FUEL IMBALANCE procedure. If a fuel leak is confirmed, apply the FUEL LEAK procedure.",
    },
  },
  {
    comment: "SLIDE SOP-06.6: Navigation accuracy monitoring",
    eyebrow: EYEBROW,
    title: "6.6 Vigilancia de la precisión de navegación",
    subtitle: "Cruise · NAV Accuracy",
    leftPct: 45,
    leftTitle: "IF GPS PRIMARY LOST",
    rightTitle: "NAV ACCURACY",
    image: img(206),
    imageAlt: "NAV accuracy indications on the PROG page",
    sourceRef: src("PRO-NOR-SOP-15 Navigation Accuracy", 206),
    cards: [
      {
        heading: "If GPS PRIMARY LOST: NAVIGATION ACCURACY ……… MONITOR (PF-PM)",
        paragraph:
          "Check on FMS PROGRESS page that the required navigation accuracy is appropriate according to the flown airspace. For more information, Refer to PRO SPO 51 PBN.",
      },
      {
        heading: "PDP — NAV ACCURACY",
        bullets: [
          "When GPS PRIMARY available: No NAV ACCURACY check is required.",
          "When GPS PRIMARY is lost on both sides: periodically check that NAV ACCUR HIGH is displayed on the PROG page, and check the position data.",
          "If the PROG page displays LOW (NAV ACCUR DOWNGRAD will be also displayed on the MCDU's scratchpad and on the ND), the crew should check the position.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SOP-06.7: Position error check result",
    eyebrow: EYEBROW,
    title: "6.7 Resultado de la comprobación de posición",
    subtitle: "Cruise · Estimate the Position Error",
    leftPct: 45,
    leftTitle: "METHODS FOR CHECKING ACCURACY",
    rightTitle: "ESTIMATE THE POSITION ERROR",
    image: img(207),
    imageAlt: "Method to estimate the position error with raw data and PROG page",
    sourceRef: src("PRO-NOR-SOP-15 Navigation Accuracy", 207),
    cards: [
      {
        heading: "Estimate the position error — method (GPS PRIMARY LOST)",
        bullets: [
          "Use an auto tuned radio NAVAID (VOR/DME, VOR...), or tune it manually using the RADNAV page.",
          "Display this radio NAVAID on the ND, and read its bearing and DME distance (raw data).",
          "Enter its ident on the BRG/DIST TO field of the PROG page (FM computed data).",
          "Compare raw and FM data to evaluate the position error.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "La precisión requerida ya no usa un umbral fijo de 3 NM: depende del espacio aéreo volado (PRO SPO 51 PBN).",
    },
  },
  {
    comment: "SLIDE SOP-06.8: Cruise system display review",
    eyebrow: EYEBROW,
    title: "6.8 Revisión periódica de las páginas del ECAM",
    subtitle: "Cruise · SD Pages Review",
    leftPct: 54,
    leftTitle: "SD PAGES ……… REVIEW · OXYGEN MASKS (PF-PM)",
    rightTitle: "ECAM CONTROL PANEL (ECP)",
    image: fcomImg("fcom_a320_ecam_control_panel"),
    imageAlt: "ECAM Control Panel pushbuttons for system display pages",
    sourceRef: "Source: FCOM A320 PRO-NOR-SOP-15 ECAM / Oxygen Masks / DSC-31-30 ECAM Control Panel",
    cards: [
      {
        heading: "If the oxygen mask has been used",
        paragraph: "OXYGEN MASK ……… CHECK (PF-PM) — Check that the oxygen mask has been properly stowed.",
      },
    ],
    table: {
      headers: ["Page", "Periodically review"],
      rows: [
        ["ENG", "Oil pressure and temperature"],
        ["BLEED", "BLEED parameters"],
        ["ELEC", "Parameters, GEN loads"],
        ["HYD", "A slight decrease in quantity is normal. Fluid contraction during cold soak can be expected. Green system is lower than on ground, following landing gear retraction."],
        ["FUEL", "Fuel distribution"],
        ["COND", "Duct temperature, compared with zone temperature. Avoid large differences for passenger comfort."],
        ["F/CTL", "Note any unusual control surface position"],
        ["DOOR", "Oxygen pressure."],
      ],
    },
  },
  {
    comment: "SLIDE SOP-06.9: Level change and recommended maximum level",
    eyebrow: EYEBROW,
    title: "6.9 Cambio de nivel y nivel máximo recomendado",
    subtitle: "Cruise · Level Change",
    leftPct: 50,
    leftTitle: "STEP FLIGHT LEVEL · OPT FL · REC MAX FL",
    rightTitle: "LEVEL CHANGE — PF / PM",
    image: img(208),
    imageAlt: "Level change in cruise with a new ATC clearance",
    sourceRef: src("PRO-NOR-SOP-15 Step Flight Level / PRO-NOR-SOP-14 Initial Climb", 208),
    cards: [
      {
        heading: "STEP FLIGHT LEVEL ……… AS APPROPRIATE (PF-PM)",
        bullets: [
          "The PROG page displays OPT FL and REC MAX FL. It is worth noting that this OPT FL is a function of the CI.",
          "The displayed REC MAX FL gives the aircraft at least a 0.3 g buffet margin. The flight crew may enter a cruise flight level above this level into the MCDU and the FMGS will accept it, provided that it does not exceed the level at which the margin is reduced to 0.2 g.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SOP-06.10: Offset",
    eyebrow: EYEBROW,
    title: "6.10 Offset lateral",
    subtitle: "Cruise · Offset",
    leftPct: 52,
    leftTitle: "OFFSET (DSC-22_20)",
    rightTitle: "OFFSET — PF / PM",
    image: img(210),
    imageAlt: "Offset function: offset distance, intercept angle and cancellation",
    sourceRef: src("DSC-22_20-30-10-15 Offset", 210),
    cards: [
      {
        heading: "General",
        bullets: [
          "The offset can be immediate or deferred to start on a downstream leg. The offset will end by default or at a pre-planned end waypoint. Additionally, the flight crew can specify the intercept angle used for the transitions to and from the offset path.",
          "This page is accessed from LAT REV page at the FROM waypoint or at any waypoint downpath the flight plan, except the destination airport.",
          "After inserting the offset in the flight plan, the flight plan page shows OFST in its title, left or right arrows are displayed on every label line between the start and end waypoints of the offset, and the navigation display shows the offset flight plan with a solid green line and the original flight plan with a dashed green line.",
          "The offset is cleared: Automatically (holding pattern, approach), or Manually with the clear (CLR) key, or by entering “o” in the offset value field [ 1L ] or by using the delete prompt in the OFFSET page.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "If the pilot enters an OFFSET when the aircraft is too close to the TO waypoint, the FMGS may refuse to accept it, in which case the MCDU displays the “ENTRY OUT OF RANGE” message.",
    },
  },
  // ── C. Descent preparation ───────────────────────────────────────────────
  {
    comment: "SLIDE SOP-06.11: Descent overview and landing information",
    eyebrow: EYEBROW,
    title: "6.11 Descenso: visión general e información de llegada",
    subtitle: "Descent Preparation · Landing Information",
    leftPct: 45,
    leftTitle: "BEFORE TOP OF DESCENT",
    rightTitle: "DESCENT",
    image: img(212),
    imageAlt: "Descent sequence: preparation, descent, baro reference and 10 000 ft AAL",
    sourceRef: src("PRO-NOR-SOP-16 Descent Preparation / Landing Information", 212),
    cards: [
      {
        heading: "Descent preparation",
        paragraph: "Descent preparation and arrival briefing should be completed before top of descent.",
      },
      {
        heading: "WEATHER AND LANDING INFORMATION ……… OBTAIN (PM)",
        bullets: [
          "Check the weather reports and runway conditions at destination and alternate airports. Airfield data, if any, should include the runway to be used for arrival.",
          "When the aircraft operates in low OAT conditions, consider altitude corrections for low temperature.",
        ],
      },
      {
        heading: "NAV CHARTS CLIPBOARD ……… PREPARE (BOTH)",
        paragraph: "Prepare the charts for arrival navigation and for the expected approach procedure and verify that both flight crewmembers refer to the same chart reference.",
      },
    ],
    alert: {
      level: "NOTE",
      text: "When icing conditions with OAT at +3 °C (37 °F) or below are expected at destination or alternate airports, consider to perform engine ice shedding on ground during taxi-in.",
    },
  },
  {
    comment: "SLIDE SOP-06.12: ECAM status and landing performance",
    eyebrow: EYEBROW,
    title: "6.12 Status del ECAM y performance de aterrizaje",
    subtitle: "Descent Preparation · ECAM / Landing Performance",
    leftPct: 45,
    leftTitle: "ECAM STATUS · LANDING PERF",
    rightTitle: "DESCENT PREPARATION — PF / PM",
    image: img(213),
    imageAlt: "Descent preparation items for PF and PM",
    sourceRef: src("PRO-NOR-SOP-16 ECAM / Landing Performance", 213),
    cards: [
      {
        heading: "ECAM STATUS ……… CHECK (PM)",
        bullets: [
          "Check that there is no status reminder on the upper ECAM display",
          "If there is a status reminder, check the aircraft STATUS",
          "Check the STATUS page before completing the landing distance and the arrival briefing. Take particular note of any degradation in landing capability, or any other aspect affecting the approach and landing.",
        ],
      },
      {
        heading: "LANDING PERF DATA ……… COMPUTE (PF-PM)",
        paragraph: "The PF and the PM independently compute the landing distance performance data, based on the new conditions at arrival.",
      },
    ],
  },
  {
    comment: "SLIDE SOP-06.13: Landing conditions and reversers",
    eyebrow: EYEBROW,
    title: "6.13 Condiciones de aterrizaje y uso de reversas",
    subtitle: "Descent Preparation · Landing Conditions",
    leftPct: 55,
    leftTitle: "LANDING PERFORMANCE — NOTES",
    rightTitle: "LANDING CONDITIONS ……… CONFIRM",
    image: img(214),
    imageAlt: "Landing conditions to confirm during descent preparation",
    sourceRef: src("PRO-NOR-SOP-16 Landing Performance", 214),
    cards: [
      {
        heading: "Notes",
        bullets: [
          "If the weather conditions are expected to change at the landing airport, or in the event of significant precipitation, the flight crew should consider a second calculation of the in-flight landing distance with the worst possible runway condition.",
          "The selection of REV MAX is the standard practice for landing. However, on DRY runways the flight crew may select REV IDLE.",
          "On WET runways (runway surface condition GOOD), the flight crew may select REV IDLE, if all the following conditions are satisfied: A landing distance assessment has been made with MEDIUM TO POOR landing performance level for the in-flight landing distance computation and no reverser credit · The result of this landing distance assessment is within the LDA.",
        ],
      },
      {
        heading: "LANDING PERF DATA ……… CROSSCHECK (BOTH)",
        paragraph: "Both flight crewmembers compare their EFB to ensure that the computations are the same.",
      },
    ],
  },
  {
    comment: "SLIDE SOP-06.14: FMS preparation — arrival, F-PLN and descent pages",
    eyebrow: EYEBROW,
    title: "6.14 Preparación del FMS: llegada, F-PLN y descenso",
    subtitle: "Descent Preparation · FMS",
    leftPct: 58,
    leftTitle: "ARRIVAL · F-PLN · DES WIND · PERF DES (PF)",
    rightTitle: "FMS ……… PREPARE",
    image: img(215),
    imageAlt: "FMS preparation for descent by MCDU page",
    sourceRef: src("PRO-NOR-SOP-16 FMS", 215),
    cards: [
      {
        heading: "ARRIVAL page · F-PLN A page",
        bullets: [
          "Insert APPR, STAR, APPR VIA and TRANS if applicable. (Access by lateral revision at destination.)",
          "Check the F-PLN (approach and Missed Approach tracks and distances) vs. the approach charts, using the ND in PLAN mode as necessary · Check speed constraints. Add new speed constraints if required · Check altitude constraints. Add new altitude constraints if required.",
          "The FMS may have deleted the altitude constraints that are at or above the CRZ FL, or at or above any previous lower CRZ FL in the case of step climbs. In that case: Insert again the affected procedures (STAR, APPR VIA or TRANS) · Manually enter the altitude constraints that are below current CRZ FL using the MCDU Vertical Revision pages.",
          "In all cases, do not modify the final approach (FAF to runway or MAP), including altitude constraints.",
        ],
      },
      {
        heading: "DES WIND · PERF CRUISE · PERF DES",
        bullets: [
          "DES WIND page ……… CHECK — Enter winds for descent before T/D.",
          "PERF CRUISE page ……… CHECK — Modify the cabin descent rate if different pressure rate is required.",
          "PERF DES page ……… CHECK — A speed limit of 250 kt below 10 000 ft is the defaulted speed, in the managed speed descent profile.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SOP-06.15: PERF APPR and PERF GO AROUND",
    eyebrow: EYEBROW,
    title: "6.15 PERF APPR y PERF GO AROUND",
    subtitle: "Descent Preparation · PERF APPR",
    leftPct: 55,
    leftTitle: "PERF APPR page ……… COMPLETE/CHECK (PF)",
    rightTitle: "FMS PREPARATION ……… CROSSCHECK",
    image: img(216),
    imageAlt: "FMS preparation crosscheck by the PM",
    sourceRef: src("PRO-NOR-SOP-16 FMS - PERF APPR / PERF GO AROUND", 216),
    cards: [
      {
        heading: "PERF APPR",
        bullets: [
          "Enter the QNH, temperature, and wind at destination. Insert the average wind given by the ATC or ATIS. Do not insert the gust value — For example, if the wind is 15020G35KT, insert 150/20.",
          "Insert the minimum. Changing the RWY or the type of approach automatically erases the previous minimum.",
          "Always select the landing configuration on the PERF APPR page: CONF FULL or CONF 3 is the normal landing configuration. CONF 3 should be considered, depending on the available runway length and go-around performance, or if windshear/severe turbulence is considered possible during approach.",
          "Check or modify the transition altitude/flight level.",
        ],
      },
      {
        heading: "PERF GO AROUND page ……… CHECK/MODIFY",
        paragraph: "Check THR RED ALT and ACC ALT, and modify, if necessary.",
      },
    ],
    alert: {
      level: "NOTE",
      text: "After the activation of the SEC F-PLN, check the VAPP, and modify if necessary.",
    },
  },
  {
    comment: "SLIDE SOP-06.16: RAD NAV, SEC F-PLN, GPWS and landing elevation",
    eyebrow: EYEBROW,
    title: "6.16 RAD NAV, plan secundario y LDG ELEV",
    subtitle: "Descent Preparation · RAD NAV / SEC F-PLN / LDG ELEV",
    leftPct: 55,
    leftTitle: "RAD NAV · SEC F-PLN · GPWS · LDG ELEV (PF)",
    rightTitle: "CRUISE PAGE — LDG ELEV AUTO",
    image: fcomImg("fcom_a320_ecam_cruise_page"),
    imageAlt: "ECAM CRUISE page showing LDG ELEV AUTO indication",
    sourceRef: "Source: FCOM A320 PRO-NOR-SOP-16 RAD NAV / SEC F-PLN / GPWS LDG FLAP 3 / Landing Elevation / DSC-21-20-40",
    cards: [
      {
        heading: "RAD NAV page ……… CHECK",
        bullets: [
          "If a VOR/DME exists close to the airfield, select it and enter its ident in the BRG/DIST field of the PROG page, for NAV accuracy monitoring during descent.",
          "When the flight plan calls for an NDB approach, the system automatically tunes the ADF, only when the aircraft is passing the first fix of the approach. Therefore, it is convenient to manually tune the ADF earlier.",
        ],
      },
      {
        heading: "SEC F-PLN page ……… AS RQRD",
        paragraph:
          "Before the top of descent, the SEC F-PLN should either be set to an alternate runway for destination, or to the landing runway in case of circling. If there is a last-minute runway change, then the flight crew only needs to activate the secondary F-PLN, without forgetting to check/set the new minimum and navaids.",
      },
      {
        heading: "GPWS LDG FLAP 3 · LDG ELEV",
        bullets: [
          "If the flight crew plans on landing in FLAPS 3 configuration, the GPWS LDG FLAP 3 pb-sw should be set to ON.",
          "LDG ELEV ……… CHECK — Check that the LDG ELEV AUTO is displayed on the CRUISE page, and check the associated value.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SOP-06.17: Autobrake for landing",
    eyebrow: EYEBROW,
    title: "6.17 Autobrake para el aterrizaje",
    subtitle: "Descent Preparation · Autobrake",
    leftPct: 48,
    leftTitle: "AUTO BRK ……… AS RQRD (PF)",
    rightTitle: "AUTO BRK PANEL",
    image: fcomImg("fcom_a320_autobrk_panel"),
    imageAlt: "Autobrake panel LO, MED and MAX pushbuttons",
    sourceRef: "Source: FCOM A320 PRO-NOR-SOP-16 Autobrake / DSC-32-30-20 Auto BRK Panel",
    cards: [
      {
        heading: "Note",
        paragraph:
          "If, on very long runways, the flight crew anticipates that braking will not be needed, use of the autobrake is not necessary. Firmly press the appropriate pushbutton, according to the runway length and condition, and check that the related ON light comes on.",
      },
    ],
    table: {
      headers: ["Runway", "Autobrake"],
      rows: [
        ["Landing (general)", "Use of autobrake is preferable. Use of MAX mode is not recommended at landing."],
        ["Short or contaminated runways", "On short or contaminated runways, use MED mode."],
        ["Long runways", "On long runways, LO mode is recommended."],
      ],
    },
  },
  // ── D. Descent ───────────────────────────────────────────────────────────
  {
    comment: "SLIDE SOP-06.18: Descent initiation",
    eyebrow: EYEBROW,
    title: "6.18 Inicio del descenso",
    subtitle: "Descent · Descent Initiation",
    leftPct: 50,
    leftTitle: "DESCENT ……… INITIATE (PF)",
    rightTitle: "DESCENT — PF / PM",
    image: img(219),
    imageAlt: "Descent initiation and descent monitoring for PF and PM",
    sourceRef: src("PRO-NOR-SOP-17 Descent Initiation / PRO-NOR-SOP-16 Descent Clearance", 219),
    cards: [
      {
        heading: "Standard method",
        bullets: [
          "The standard method to initiate the descent is to engage the DES mode at the T/D computed by the FMS.",
          "If ATC requires an early descent: use the DES mode. The DES mode guides the aircraft down to a lower vertical speed, in order to converge with the required descent path (the flight crew may use a V/S of 1 000 ft/min).",
          "If ATC delays the descent: beyond the T/D, the T/D REACHED or DECELERATE message appears on the PFD and MCDU. This suggests that the flight crew should reduce the speed toward Green Dot speed with ATC permission.",
        ],
      },
      {
        heading: "CLEARED ALTITUDE ON FCU ……… SET (PF)",
        paragraph:
          "When the flight crew obtains the ATC clearance, they should set the cleared altitude (FL) on the FCU taking into account the safe altitudes. If the lowest safe altitude is above the cleared altitude, check with the ATC to determine if this constraint applies. If the ATC confirms that this constraint applies, set the safe altitude on the FCU until it is safe to reach the cleared altitude.",
      },
    ],
  },
  {
    comment: "SLIDE SOP-06.19: Descent monitoring",
    eyebrow: EYEBROW,
    title: "6.19 Vigilancia del descenso",
    subtitle: "Descent · Descent Monitoring",
    leftPct: 52,
    leftTitle: "DESCENT MONITORING",
    rightTitle: "EARLY DESCENT INITIATION",
    image: img(220),
    imageAlt: "Early descent initiation profile",
    sourceRef: src("PRO-NOR-SOP-17 Descent Monitoring", 220),
    cards: [
      {
        heading: "PF MCDU ……… PROG/PERF DES · PM MCDU ……… F-PLN",
        bullets: [
          "PROG page in order to get VDEV or RQD DIST TO LAND/DIRECT DIST TO DEST information",
          "PERF DES page in order to get predictions down to any inserted altitude in DES/OP DES modes and EXP mode.",
        ],
      },
      {
        heading: "When flying in NAV mode, use the DES mode",
        bullets: [
          "Monitor the VERT DEV. The VERT DEV appears on the PFD and on the PROG page.",
          "Monitor the FMA when the aircraft reaches the level-off symbol.",
          "When the lateral mode is changed from NAV to HDG/TRK, the vertical mode reverts to V/S or FPA. The V/S or FPA will be the current value at the time of mode reversion.",
          "From time to time during stabilized descent, the flight crew may select FPA to check that the remaining distance to destination is approximately the altitude change required divided by the FPA in degrees: FPA (°) = ΔFL/DIST (NM).",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SOP-06.20: Descent adjustment, speedbrakes and anti-ice",
    eyebrow: EYEBROW,
    title: "6.20 Ajuste del descenso, speedbrakes y antihielo",
    subtitle: "Descent · Descent Adjustment",
    leftPct: 55,
    leftTitle: "RATE OF DESCENT ……… ADJUST, AS RQRD (PF)",
    rightTitle: "SPEEDBRAKES",
    image: img(222),
    imageAlt: "Speedbrakes use in managed and selected descent",
    sourceRef: src("PRO-NOR-SOP-17 Descent Adjustment / PRO-NOR-SOP-16 Anti Ice", 222),
    cards: [
      {
        heading: "Descent adjustment",
        bullets: [
          "To increase the rate of descent, increase the descent speed by using the selected speed, if comfort and the ATC permit. It is more cost-effective (Time/Fuel) than using the speed brakes.",
          "If the aircraft is high and at high speed, it is more efficient to keep the high speed until ALT* then to decelerate at level-off, instead of combining descent and deceleration.",
          "If the aircraft goes below the desired profile, use the selected speed and the V/S mode to adjust the rate of descent.",
        ],
      },
      {
        heading: "ENG 1 and 2 ANTI-ICE pb-sw ……… AS RQRD (PM)",
        bullets: [
          "Engine anti-ice must be set to ON before and during descent, even if the SAT is below -40 °C (-40 °F). When ENG ANTI ICE is ON, the FADEC selects a higher idle thrust which gives better protection against flame-out.",
          "ANTI ICE ON reduces the descent path angle (when the engines are at idle). The flight crew can compensate for this by increasing the descent speed, or by extending up to half speed brakes.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SOP-06.21: Terrain on ND",
    eyebrow: EYEBROW,
    title: "6.21 Energy circle y terreno en el ND",
    subtitle: "Descent · Terrain on ND",
    leftPct: 45,
    leftTitle: "TERR ON ND ……… AS RQRD (PF-PM)",
    rightTitle: "DESCENT MONITORING",
    image: img(223),
    imageAlt: "Descent monitoring on ND with predicted descent path interception and energy circle",
    sourceRef: src("PRO-NOR-SOP-17 Terrain on ND", 223),
    cards: [
      {
        heading: "Terrain on ND",
        bullets: [
          "In mountainous areas, consider displaying terrain on ND",
          "If use of radar is required, consider selecting the radar display on the PF side, and TERR ON ND on the PM side only",
          "If NAV ACCURACY is LOW, do not use TERR ON ND.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SOP-06.22: Barometric reference at transition level",
    eyebrow: EYEBROW,
    title: "6.22 Referencia barométrica en el nivel de transición",
    subtitle: "Descent · Baro Reference",
    leftPct: 45,
    leftTitle: "BAROMETRIC REFERENCE ……… SET/CROSSCHECK",
    rightTitle: "BARO REFERENCE – TRANSITION LEVEL",
    image: img(224),
    imageAlt: "QNH setting and crosscheck at the transition level",
    sourceRef: src("PRO-NOR-SOP-17 Barometric Reference", 224),
    cards: [
      {
        heading: "Set QNH on the EFIS control panel and on the standby altimeter (PF-PM)",
        bullets: [
          "Crosscheck the barometric reference settings and the altitude indications.",
          "The flight crew must take into account any QNH change on the EFIS control panels, standby altimeter and on the FMS PERF APPR Page.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "The flight crew should pay attention to a barometric reference that significantly differs from the one used for approach preparation. That could be the symptom of a barometric reference error. In this case the flight crew should consider the confirmation of the barometric reference from all available sources.",
    },
  },
  {
    comment: "SLIDE SOP-06.23: At 10 000 ft AAL in descent",
    eyebrow: EYEBROW,
    title: "6.23 Descenso: pasando 10 000 ft AAL",
    subtitle: "Descent · At 10 000 FT AAL",
    leftPct: 55,
    leftTitle: "AT 10 000 FT AAL (PRO-NOR-SOP-17)",
    rightTitle: "NAV ACCURACY ……… MONITOR",
    image: img(226),
    imageAlt: "NAV accuracy monitoring at 10 000 ft AAL",
    sourceRef: src("PRO-NOR-SOP-17 At 10 000 ft AAL / Approach Checklist", 226),
    cards: [
      {
        heading: "Lights · EFIS · LS",
        bullets: [
          "L&R LAND selector ……… SET (PM) — LAND lights may be switched ON, depending on the airline policy or regulatory recommendation.",
          "EFIS option pb ……… CSTR (PF-PM) — Select CSTR on both sides.",
          "ILS/LS pb ……… AS RQRD (PF-PM) — Press the ILS/LS pb, if one of the following approaches is planned: ILS · ILS G/S out, LOC only or LOC B/C. The flight crew checks that: Deviation scales are displayed on the PFD · The IDENT is properly displayed on the PFD.",
        ],
      },
      {
        heading: "NAVAIDS · ENG MODE",
        bullets: [
          "NAVAIDS ……… AS RQRD/CHECK (PF) — Ensure that the appropriate NAVAIDs are tuned and identified. For NDB approaches, manually select the reference NAVAID.",
          "ENG MODE selector ……… AS RQRD (PM) — Select IGN if the runway is covered with standing water, or if heavy rain or severe turbulence is expected during approach or go-around area.",
          "APPROACH C/L ……… COMPLETE (PF-PM)",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "If GPS PRIMARY LOST: NAVIGATION ACCURACY ……… MONITOR (PF) — Check on FMS PROGRESS page that the required navigation accuracy is appropriate according to the flown airspace.",
    },
  },
];

export const MCC_SOP_06: MccLesson = {
  id: "a3200000-0000-0000-0000-000000000106",
  course_id: MCC_COURSE_ID,
  title: "SOP-06. Subida, crucero, preparación e inicio del descenso",
  slug: "sop-06-subida-crucero-descenso",
  sequence_order: 7,
  lesson_order: 7,
  min_seconds: mccMinSeconds(SOP_06_SLIDES.length, mccVideoSeconds(SOP_06_SLIDES)),
  module_title: MCC_MODULES.NORMAL_SOP,
  content_html: joinSlides(SOP_06_SLIDES),
};

export const SOP_06_SLIDE_COUNT = SOP_06_SLIDES.length;
