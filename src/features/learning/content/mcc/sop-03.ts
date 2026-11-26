/**
 * SOP-03 — Inspección exterior y preparación de cabina (1 h).
 *
 * Alcance: Curso APS MCC — Airbus A320 (simulador Entrol A32).
 * Fuentes: Airbus Tutorial PDP Jan 2024 — Cockpit Preparation (págs. 138–155, ref. EFTDB1COCKPRE01)
 * y FCOM A320 PRO-NOR-SOP-03 (Safety Exterior Inspection), SOP-04 (Preliminary Cockpit Preparation),
 * SOP-05 (Exterior Walkaround) y SOP-06 (Cockpit Preparation).
 *
 * Criterio de redacción: la columna izquierda NO repite el texto de la lámina de la derecha; aporta la
 * información complementaria del FCOM (textos L1/L2, WARNING/CAUTION/NOTE) en inglés y literal. Solo se
 * repite algo de la lámina cuando es crítico. De las variantes por avión del FCOM se toma la del A320ceo.
 * Las diapositivas 3.2–3.8 (tareas del CM2 según FCOM) no tienen lámina equivalente en el PDP: llevan
 * texto en ambas columnas.
 * Arquitectura: docs/mcc/08_ARQUITECTURA_PDP.md.
 */
import { MCC_MODULES, joinSlides, type MccLesson, type MccSlideSpec } from "./slide-builder.ts";

const MCC_COURSE_ID = "a3200000-0000-0000-0000-000000000320";
const PDP_IMG = "https://www.blueteam.es/elearning/media/mcc/pdp";
const EYEBROW = "APS MCC · A320 · SOP-03";
const PDP = "Airbus Tutorial PDP Jan 2024 — Cockpit Preparation";
const IMG_VERSION = 1795612605;

const img = (page: number) =>
  `${PDP_IMG}/p${String(page).padStart(3, "0")}_cockpit_preparation.webp?v=${IMG_VERSION}`;
const fcom = (sections: string) => `Source: FCOM A320 PRO-NOR-${sections}`;
const both = (sections: string, page: number) => `Source: FCOM A320 PRO-NOR-${sections} & ${PDP} (p.${page})`;

const SOP_03_SLIDES: MccSlideSpec[] = [
  // ── A. Antes de la preparación de cabina ─────────────────────────────────
  {
    comment: "SLIDE SOP-03.1: Cockpit preparation overview",
    eyebrow: EYEBROW,
    title: "3.1 Secuencia de la preparación de cabina",
    subtitle: "Cockpit Preparation · Overview",
    leftPct: 45,
    leftTitle: "SAFETY CHECKS · TRANSIT STOP",
    rightTitle: "COCKPIT PREPARATION — CM1 / CM2",
    image: img(138),
    imageAlt: "Cockpit preparation sequence for CM1/PF and CM2/PM",
    sourceRef: both("SOP-03 / SOP-04 General", 138),
    cards: [
      {
        heading: "Safety exterior inspection (SOP-03)",
        paragraph:
          "Safety exterior inspections ensure that the aircraft and the external environment of the aircraft are safe for operation. When the flight crew arrives at the aircraft, they must check for, or be informed of any obstructions near the aircraft, engineering activity, or refueling activity, etc.",
      },
      {
        heading: "Preliminary cockpit preparation (SOP-04)",
        paragraph:
          "The flight crew performs the preliminary cockpit preparation to ensure that all required safety checks are completed. The safety checks prevent the inadvertent operation of aircraft systems, danger to the aircraft, and danger to the personnel.",
      },
      {
        heading: "Items marked by asterisks (*)",
        paragraph:
          "Items marked by asterisks (*) are the only steps to be completed after a transit stop without flight crew change. Otherwise, the new flight crew performs all the items.",
      },
    ],
  },
  {
    comment: "SLIDE SOP-03.2: Safety exterior inspection and aircraft setup",
    eyebrow: EYEBROW,
    title: "3.2 Inspección exterior de seguridad y configuración inicial",
    subtitle: "PRO-NOR-SOP-03 · SOP-04 Aircraft Setup",
    leftTitle: "SAFETY EXTERIOR INSPECTION (CM2)",
    rightTitle: "AIRCRAFT SETUP (CM2)",
    sourceRef: fcom("SOP-03 Safety Exterior Inspection / SOP-04 Aircraft Setup"),
    table: {
      headers: ["Item", "Action"],
      rows: [
        ["WHEEL CHOCKS", "CHECK"],
        ["LANDING GEAR DOORS", "CHECK POSITION"],
        ["APU AREA", "CHECK"],
      ],
    },
    cards: [
      {
        heading: "Wheel chocks · APU area",
        bullets: [
          "If the wheel chocks are not in position, the flight crew must check that the parking brake is set with sufficient accumulator pressure.",
          "Observe that the APU inlet and outlet are clear.",
        ],
      },
    ],
    alert: {
      level: "WARNING",
      text: "If any landing gear door is open, do not pressurize the hydraulic systems until clearance is obtained from ground personnel.",
    },
    rightTable: {
      headers: ["Item", "Action"],
      rows: [
        ["ENG 1, 2 MASTER LEVERS", "OFF"],
        ["ENG MODE selector", "NORM"],
        ["* RADAR sw", "OFF"],
        ["* WINDSHEAR / PWS sw", "OFF"],
        ["* GAIN knob", "AUTO/CAL"],
        ["* MODE selector", "AS RQRD"],
        ["L/G lever", "DOWN"],
        ["Both WIPER selectors", "OFF"],
      ],
    },
  },
  {
    comment: "SLIDE SOP-03.3: Batteries check and external power",
    eyebrow: EYEBROW,
    title: "3.3 Comprobación de baterías y alimentación exterior",
    subtitle: "PRO-NOR-SOP-04 · Batteries Check / External Power",
    leftTitle: "NOT ELECTRICALLY SUPPLIED FOR 6 H OR MORE",
    rightTitle: "BATTERY VOLTAGE OK · SUPPLIED IN THE LAST 6 H",
    sourceRef: fcom("SOP-04 Batteries Check/External Power"),
    cards: [
      {
        heading: "If the aircraft has not been electrically supplied for 6 h or more",
        bullets: [
          "BAT 1 pb-sw and BAT 2 pb-sw ……… CHECK OFF",
          "BAT 1 and 2 VOLTAGE ……… CHECK ABOVE 25.5 V",
          "Battery voltage above 25.5 V ensures a charge above 50 %.",
        ],
      },
      {
        heading: "If the battery voltage is at or below 25.5 V",
        paragraph: "A charging cycle of about 20 min is required.",
        bullets: [
          "BAT 1 pb-sw and BAT 2 pb-sw ……… AUTO",
          "EXT PWR pb-sw ……… ON",
          "Check on ELEC SD page, that the battery contactor is closed and the batteries are charging.",
          "After 20 min: BAT 1 pb-sw and BAT 2 pb-sw ……… OFF · BAT 1 and 2 VOLTAGE ……… CHECK ABOVE 25.5 V · BAT 1 pb-sw and BAT 2 pb-sw ……… AUTO",
        ],
      },
    ],
    rightCards: [
      {
        heading: "If the battery voltage is above 25.5 V",
        bullets: ["BAT 1 pb-sw and BAT 2 pb-sw ……… AUTO"],
      },
      {
        heading: "If the aircraft has been electrically supplied during the last 6 h",
        bullets: ["BAT 1 pb-sw and BAT 2 pb-sw ……… AUTO", "If the AVAIL light is on: EXT PWR pb-sw ……… ON"],
      },
    ],
    rightAlert: {
      level: "NOTE",
      text: "If the APU is started on batteries only, it should be started within 30 min after the selection of batteries to AUTO (35 min after battery selection to AUTO, the battery charge is less than 25 % of maximum capacity).",
    },
  },
  {
    comment: "SLIDE SOP-03.4: APU fire test, APU start and air conditioning",
    eyebrow: EYEBROW,
    title: "3.4 Test de fuego de la APU, arranque y aire acondicionado",
    subtitle: "PRO-NOR-SOP-04 · APU Fire Test / APU Start",
    leftTitle: "APU FIRE TEST (CM2)",
    rightTitle: "APU START · AIR COND (CM2)",
    sourceRef: fcom("SOP-04 APU Fire Test/APU Start · Air Cond"),
    alert: {
      level: "WARNING",
      text: "The automatic shutdown of the APU and the discharge of the APU fire extinguisher bottle may occur if the flight crew presses the APU FIRE test pb for more than 3 seconds.",
    },
    table: {
      headers: ["Item", "Action"],
      rows: [
        ["APU FIRE pb-sw", "CHECK IN and GUARDED"],
        ["APU AGENT light", "CHECK OFF"],
        ["APU FIRE TEST pb", "PRESS and MAINTAIN"],
      ],
    },
    cards: [
      {
        heading: "Test result",
        paragraph: "Check that the APU fire detection and extinguishing system is operative:",
        bullets: [
          "APU FIRE warning on (if AC power available): ECAM · CRC · MASTER WARN light",
          "APU FIRE pb-sw lighted red (lighted partially if AC power not available)",
          "SQUIB light and DISCH light on",
        ],
      },
    ],
    rightCards: [
      {
        heading: "APU start",
        bullets: [
          "APU MASTER SW pb-sw ……… ON",
          "APU START pb-sw ……… ON — Note: Wait at least 3 s before selecting APU START pb-sw.",
          "* EXT PWR pb-sw ……… AS RQRD — The flight crew should keep ON the external power units to reduce the APU load, particularly in hot weather conditions.",
        ],
      },
      {
        heading: "Air cond — when the APU is AVAIL",
        bullets: [
          "APU BLEED pb-sw ……… ON — Do not use APU BLEED, if the ground personnel confirms that a LP or HP ground air unit is connected to the aircraft.",
          "ALL WHITE LIGHTS ……… OFF · X BLEED selector ……… AUTO",
          "COCKPIT TEMP and CABIN TEMP rotary selectors ……… AS RQRD — Full range temperature 24 ± 6 °C (75 ± 11 °F).",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SOP-03.5: Aircraft acceptance and preliminary performance",
    eyebrow: EYEBROW,
    title: "3.5 Aceptación del avión y performance preliminar",
    subtitle: "PRO-NOR-SOP-04 · Aircraft Acceptance",
    leftTitle: "AIRCRAFT ACCEPTANCE",
    rightTitle: "PRELIMINARY PERFORMANCE DETERMINATION",
    sourceRef: fcom("SOP-04 Aircraft Acceptance / Preliminary Performance Determination"),
    cards: [
      {
        heading: "Aircraft acceptance",
        bullets: [
          "* RCL pb ……… PRESS 3 s (CM1) — This action recalls all the warnings that the flight crew cleared or cancelled during the last flight.",
          "* LOGBOOK AND MEL/CDL ITEMS ……… CHECK (BOTH) — Check the deferred items list. Crosscheck with ECAM recall.",
          "* AIRCRAFT CONFIGURATION SUMMARY ……… CHECK (BOTH) — Both flight crewmembers discuss together the optional installed aircraft systems and functions, and their influence on the ongoing flight.",
          "* OEB ……… CHECK (BOTH) — All flight crewmembers review and discuss together all OEBs and associated procedures applicable to the aircraft.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "The aircraft acceptance can be performed later, but must be completed at the end of the Cockpit Preparation.",
    },
    rightCards: [
      {
        heading: "Independent computation",
        paragraph:
          "Each flight crewmember independently computes the preliminary performance data in accordance with the technical condition of the aircraft and/or any other criteria that may affect the aircraft performance (e.g. NOTAM, runway condition, aircraft configuration).",
      },
      {
        heading: "CM1-CM2 / BOTH",
        bullets: [
          "* AIRFIELD DATA ……… OBTAIN — RUNWAY IN USE, ALTIMETER SETTING, and WEATHER DATA.",
          "* NAV CHARTS CLIPBOARD ……… PREPARE — Verify that both flight crewmembers refer to the same chart reference.",
          "* PRELIMINARY TAKEOFF PERF DATA ……… COMPUTE — RWY to be used · RWY intersection · Flaps setting · Use of anti-ice · Use of packs · Takeoff thrust setting options (FLEX, TOGA, DERATE).",
          "* PRELIMINARY TAKEOFF PERF DATA ……… CROSSCHECK — The PF and the PM compare and ensure that the computations are the same.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SOP-03.6: Before walkaround",
    eyebrow: EYEBROW,
    title: "3.6 Antes de la vuelta exterior",
    subtitle: "PRO-NOR-SOP-04 · Before Walkaround",
    leftTitle: "ECAM PAGES · F/CTL (PM)",
    rightTitle: "PARKING BRAKE · EMER EQPT · GEAR PINS (PM)",
    sourceRef: fcom("SOP-04 Before Walkaround"),
    cards: [
      {
        heading: "ECAM pages",
        bullets: [
          "DOOR SD page: * OXY ……… CHECK PRESSURE — If the OXY pressure is half boxed in amber: MIN FLT CREW OXY CHART ……… CHECK PRESSURE.",
          "HYD SD page: * RESERVOIR FLUID LEVEL ……… CHECK WITHIN NORMAL RANGE",
          "ENG SD page: * ENG OIL QUANTITY ……… CHECK — Check that the oil quantity is above the minimum.",
        ],
      },
      {
        heading: "F/CTL",
        bullets: [
          "FLAPS ……… CHECK POSITION — Check the upper ECAM display to confirm that the FLAPS position agrees with the handle position.",
          "* SPEEDBRAKE lever ……… CHECK RETRACTED and DISARMED",
        ],
      },
    ],
    alert: {
      level: "WARNING",
      text: "If flight control surface positions do not agree with the control handle positions, check with the maintenance crew before applying hydraulic power.",
    },
    rightCards: [
      {
        heading: "Parking brake",
        bullets: [
          "* ACCU PRESS indicator ……… CHECK — The ACCU PRESS indication must be in the green band.",
          "* PARK BRK handle ……… ON — When one brake temperature is above 500 °C (or 350 °C with brake fans ON), avoid applying the parking brake, unless operationally necessary.",
          "* BRAKES PRESS indicator ……… CHECK",
        ],
      },
      {
        heading: "EMER EQPT ……… CHECK",
        paragraph:
          "Life vests · Crash axe · PBE stowed and ready for use · Portable fire extinguisher lockwired, gauge in the green area · Smoke goggles · Oxygen masks · Flashlights · Escape ropes.",
      },
      {
        heading: "* GEAR PINS ……… CHECK ONBOARD and STOWED",
        paragraph: "Check that the three gear pins are on board and stowed.",
      },
    ],
    rightAlert: {
      level: "WARNING",
      text: "Yellow and green hydraulic systems are pressurized from yellow electric pump. Get ground crew clearance before using the electric pump.",
    },
  },
  {
    comment: "SLIDE SOP-03.7: Exterior walkaround general",
    eyebrow: EYEBROW,
    title: "3.7 Vuelta exterior: objetivo y recorrido",
    subtitle: "PRO-NOR-SOP-05 · Exterior Walkaround",
    leftPct: 48,
    leftTitle: "GENERAL",
    rightTitle: "WALKAROUND SEQUENCE (1) – (21)",
    sourceRef: fcom("SOP-05 Exterior Walkaround General / Schematic"),
    cards: [
      {
        heading: "Purpose",
        paragraph:
          "The exterior walkaround ensures that the general condition of the aircraft is satisfactory and that the visible aircraft components and equipment are safe for the flight:",
        bullets: [
          "There is no impact damage to the structure",
          "There is no evident fuel, oil, or hydraulic leak",
          "All ground access doors are closed",
          "All covers are removed (e.g. pitot covers, AOA covers, etc.).",
        ],
      },
      {
        heading: "Rules",
        bullets: [
          "The flight crew must perform a complete walkaround before each flight.",
          "The parking brake must be set to ON during the exterior walkaround, in order to enable the flight crew to check brake wear indicators.",
        ],
      },
    ],
    alert: {
      level: "WARNING",
      text: "If any landing gear door is open, do not apply hydraulic power until clearance is obtained from ground personnel.",
    },
    rightTable: {
      headers: ["#", "Zone", "#", "Zone"],
      rows: [
        ["1", "LH FWD Fuselage", "12", "RH AFT Fuselage"],
        ["2", "Nose Section", "13", "Tail"],
        ["3", "Nose L/G", "14", "APU"],
        ["4", "RH FWD Fuselage", "15", "LH AFT Fuselage"],
        ["5", "Lower Center Fuselage", "16", "LH Landing Gear"],
        ["6", "RH Center Wing", "17", "LH Wing Trailing Edge"],
        ["7", "ENG 2 LH Side", "18", "LH Wing Leading Edge"],
        ["8", "ENG 2 RH Side", "19", "ENG 1 LH Side"],
        ["9", "RH Wing Leading Edge", "20", "ENG 1 RH Side"],
        ["10", "RH Wing Trailing Edge", "21", "LH Center Wing"],
        ["11", "RH L/G and Fuselage", "", ""],
      ],
    },
  },
  {
    comment: "SLIDE SOP-03.8: Exterior walkaround key items",
    eyebrow: EYEBROW,
    title: "3.8 Vuelta exterior: puntos clave",
    subtitle: "PRO-NOR-SOP-05 · Exterior Walkaround Items",
    leftTitle: "FWD FUSELAGE · NOSE · NOSE L/G",
    rightTitle: "ENGINES · MAIN L/G · TAIL · APU",
    sourceRef: fcom("SOP-05 Exterior Walkaround"),
    cards: [
      {
        heading: "LH / RH FWD fuselage",
        bullets: [
          "AOA probes ……… CHECK CONDITION",
          "F/O and CAPT static ports ……… CLEAR",
          "Oxygen overboard discharge indicator(s) ……… GREEN",
          "FWD cargo door and selector panel ……… CHECK",
        ],
      },
      {
        heading: "Nose section",
        bullets: [
          "Pitot probes ……… CHECK CONDITION",
          "STBY static ports ……… CLEAR",
          "TAT probes ……… CHECK CONDITION",
          "Radome and latches ……… CHECK CONDITION/LATCHED",
        ],
      },
      {
        heading: "Nose L/G",
        bullets: [
          "Nose wheel chocks ……… IN PLACE",
          "Wheels and tires · Nose gear structure ……… CHECK CONDITION",
          "Taxi, Takeoff and Runway Turnoff lights ……… CHECK CONDITION",
          "Safety pin ……… REMOVED",
        ],
      },
    ],
    rightCards: [
      {
        heading: "ENG 1 / ENG 2",
        bullets: [
          "Thrust reversers ……… CLOSED/LATCHED",
          "Fan cowl doors ……… CLOSED/LATCHED/FLAG REMOVED",
          "Engine inlet and fan blades ……… CHECK CONDITION",
          "Drain mast ……… CHECK CONDITION/NO LEAK · Turbine exhaust ……… CLEAR",
        ],
      },
      {
        heading: "LH / RH landing gear",
        bullets: [
          "Chocks ……… REMOVED",
          "Wheels and tires · Brakes and brake wear indicators ……… CHECK CONDITION",
          "Safety pin ……… REMOVED",
        ],
      },
      {
        heading: "RH AFT fuselage · Tail · APU",
        bullets: [
          "RA Antennas ……… CHECK CONDITION — Check that the RA antennas are clean.",
          "Lower fuselage structure (tail impact on runway) ……… CHECK CONDITION",
          "APU fire extinguisher overpressure indication (red disc) ……… IN PLACE",
        ],
      },
    ],
  },
  // ── B. Preparación de cabina del PF (PDP) ────────────────────────────────
  {
    comment: "SLIDE SOP-03.9: Cockpit preparation scan sequence",
    eyebrow: EYEBROW,
    title: "3.9 Preparación de cabina: secuencia del PF",
    subtitle: "Cockpit Preparation · Scan Sequence",
    leftPct: 45,
    leftTitle: "TASKSHARING · FMGS POWER-UP · LIGHTS",
    rightTitle: "OVERHEAD → CENTER → PEDESTAL → FMS",
    image: img(139),
    imageAlt: "Cockpit preparation scan sequence: overhead panel, center instrument panel, pedestal and FMS",
    sourceRef: both("SOP-06 General / SOP-04 Cockpit Lights / SOP-06 FMGS Preparation", 139),
    cards: [
      {
        heading: "Tasksharing (SOP-06)",
        paragraph:
          "The PF prepares the overhead panel, the center instrument panel and the pedestal while the PM performs the external walkaround. When both flight crewmembers are seated and the PM checked the FMS, both flight crewmembers continue the cockpit preparation.",
      },
      {
        heading: "FMGS power-up",
        paragraph:
          "At electrical power-up, the FMGSs and FCU run through various internal tests. Allow enough time (3 min) for tests’ completion, and do not start to press pushbuttons until the tests are over. If the “PLEASE WAIT” message appears, do not press any MCDU key until the message clears.",
      },
      {
        heading: "* COCKPIT LIGHTS ……… AS RQRD (CM1-CM2)",
        paragraph: "Set INT LT, FLOOD LT, INTEG LT (included glareshield and FCU).",
      },
    ],
  },
  {
    comment: "SLIDE SOP-03.10: Overhead panel",
    eyebrow: EYEBROW,
    title: "3.10 Overhead panel",
    subtitle: "Cockpit Preparation · Overhead Panel",
    leftTitle: "WHAT THE FCOM ADDS",
    rightTitle: "OVERHEAD PANEL — PF",
    image: img(140),
    imageAlt: "Overhead panel scan sequence by the PF",
    sourceRef: both("SOP-06 Overhead Panel", 140),
    cards: [
      {
        heading: "Amber lights · CVR test",
        bullets: [
          "During the scan of the overhead panel, check also that the only amber lights are the GEN FAULT lights.",
          "RCDR: In order to perform the test, ensure that the PARK BRK is on. The CVR test is successful when an audio test signal is heard through the loudspeakers and the CVR TEST pb is pressed and maintained.",
        ],
      },
      {
        heading: "ELEC · Air cond",
        bullets: [
          "BAT 1 pb-sw and BAT 2 pb-sw ……… OFF then ON — 10 s after setting all BAT pb-sw ON, check on the ELEC SD page that the current charge of the battery is below 60 A, and is decreasing.",
          "If the APU is supplying, pack controllers select HI flow automatically, independent of the selector position.",
        ],
      },
      {
        heading: "ENG 1 / ENG 2 fire test result",
        paragraph:
          "The CRC sounds · The MASTER WARN lights flash · The ECAM displays the ENG 1 FIRE, ENG 2 FIRE alerts · All ENG FIRE pb-sw come on red · All SQUIB and DISCH lights of the AGENT pb come on · All FIRE lights on the ENG MASTER panel come on.",
      },
    ],
  },
  {
    comment: "SLIDE SOP-03.11: Center instrument panel",
    eyebrow: EYEBROW,
    title: "3.11 Center instrument panel",
    subtitle: "Cockpit Preparation · Center Instrument Panel",
    leftPct: 42,
    leftTitle: "ISIS · CLOCK",
    rightTitle: "CENTER INSTRUMENT PANEL — PF",
    image: img(141),
    imageAlt: "Center instrument panel scan by the PF",
    sourceRef: both("SOP-06 CTR Instrument Panel", 141),
    cards: [
      {
        heading: "* ISIS ……… CHECK",
        bullets: [
          "Adjust brightness, check IAS, altimeter readings, altimeter settings and attitude display.",
          "Check no flags - Reset attitude, if necessary.",
        ],
      },
      {
        heading: "* CLOCK ……… CHECK/SET",
        bullets: [
          "If the date is incorrect, set the date manually then set and keep the clock mode to internal (INT) mode for the whole flight.",
          "To comply with the time precision requirement (+/-1 s UTC) for ATC datalink communication, the flight crew must either use the clock in GPS mode, or use the clock in INT mode and synchronize the clock with the GPS at least one time per day.",
        ],
      },
    ],
    alert: { level: "NOTE", text: "Use of the ISIS bugs function is not recommended." },
  },
  {
    comment: "SLIDE SOP-03.12: Pedestal",
    eyebrow: EYEBROW,
    title: "3.12 Pedestal",
    subtitle: "Cockpit Preparation · Pedestal",
    leftPct: 45,
    leftTitle: "ACP · RMP · ATC · PARKING BRAKE",
    rightTitle: "PEDESTAL — PF",
    image: img(142),
    imageAlt: "Pedestal scan by the PF",
    sourceRef: both("SOP-06 Pedestal / RMP", 142),
    cards: [
      {
        heading: "ACP · RMP",
        bullets: [
          "INT knob ……… PRESS OUT/VOLUME CHECK — Ensure that INT volume is turned up, to enable contact with the ground crew.",
          "VHF ……… CHECK · HF (if required for flight) ……… CHECK — Check transmission and reception.",
          "Use VHF 1 for ATC (only VHF 1 is available in emergency electrical configuration), VHF 2 for ATIS and company frequencies. VHF 3 is normally devoted to ACARS.",
        ],
      },
      {
        heading: "ATC",
        bullets: [
          "ATC and TCAS are on standby. To prevent possible interference to radar surveillance systems, TCAS should not be selected before the holding point/lining up.",
        ],
      },
      {
        heading: "Parking brake — if brakes are hot and chocks are in place",
        paragraph:
          "* PARK BRK handle ……… OFF — Releasing the parking brake prevents the critical structures from being exposed to high temperature levels for an extended time. However, if operational conditions require (e.g. slippery tarmac), the parking brake may remain applied.",
      },
    ],
  },
  {
    comment: "SLIDE SOP-03.13: FMGS preparation D-I-F-R-I-P",
    eyebrow: EYEBROW,
    title: "3.13 Preparación del FMGS: D-I-F-R-I-P",
    subtitle: "Cockpit Preparation · FMGS Preparation",
    leftPct: 56,
    leftTitle: "DATA · INIT A · NAVAIDS",
    rightTitle: "FMGS PREPARATION — PF / PM",
    image: img(143),
    imageAlt: "FMGS preparation D-I-F-R-I-P sequence on the MCDU",
    sourceRef: both("SOP-06 FMGS Preparation", 143),
    cards: [
      {
        heading: "Status page (D)",
        bullets: [
          "* ENGINE &amp; AIRCRAFT TYPE ……… CHECK — Press the DATA key, and display the STATUS page (if not displayed).",
          "* FM database validity ……… CHECK — Check database validity and stored WPT/NAVAIDS/RWY/ROUTES, if any.",
          "* NAVAID DESELECTION ……… AS RQRD — If NOTAMs warn of any unreliable or unserviceable DME or VOR/DME, access the SELECTED NAVAIDS page, and deselect the related NAVAID.",
        ],
      },
      {
        heading: "* FLIGHT PLAN INITIALIZATION ……… COMPLETE (I)",
        bullets: [
          "Press the INIT key · Insert CO RTE or city pair, and check FROM/TO · Check/modify ALTN/CO RTE",
          "Enter flight number · Enter (and/or check) cost index",
          "Enter intended initial CRZ FL · Check and modify CRZ FL TEMP and tropopause level to agree with forecast",
          "PRESS IRS INIT prompt · Check alignment latitude/longitude.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "For ATC needs, the crew should enter exactly the entire flight number, as shown on the ICAO flight plan, without inserting any space, on the MCDU INIT page.",
    },
  },
  {
    comment: "SLIDE SOP-03.14: F-PLN A page",
    eyebrow: EYEBROW,
    title: "3.14 Plan de vuelo activo y secundario",
    subtitle: "Cockpit Preparation · F-PLN / SEC F-PLN",
    leftPct: 52,
    leftTitle: "ACTIVE F-PLN · WINDS · SEC F-PLN",
    rightTitle: "F-PLN A PAGE",
    image: img(144),
    imageAlt: "F-PLN A page check",
    sourceRef: both("SOP-06 Active F-PLN Check / Secondary F-PLN", 144),
    cards: [
      {
        heading: "* F-PLN A page ……… COMPLETE AND CHECK",
        bullets: [
          "Lateral revision at departure airport. Select RWY, then SID, then TRANS using scroll keys.",
          "Vertical revision. Check or enter climb speed limit, constraints according to ATC clearance. Enter step altitude as appropriate.",
          "* WINDS ……… AS APPROPRIATE — Choose between using trip wind and the forecast wind for CLB, CRZ and DES phases.",
        ],
      },
      {
        heading: "* SECONDARY FLIGHT PLAN ……… AS APPROPRIATE",
        bullets: [
          "Copy the active F-PLN, but modify it at a suitable WPT for an immediate return to the departure airfield in the event of, for example, engine failure.",
          "If weather is below landings minima at the departure airfield, the secondary flight plan should be that required for a diversion immediately after takeoff.",
          "If there is a chance of a change in runway or SID during taxi, prepare for it by copying the active flight plan and making the necessary modifications.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "On the MCDU departure page, select only a runway associated with an ILS or NO NAVAIDS.",
    },
  },
  {
    comment: "SLIDE SOP-03.15: FMGS preparation crosscheck",
    eyebrow: EYEBROW,
    title: "3.15 Radio NAV, pesos, despegue y crosscheck del PM",
    subtitle: "Cockpit Preparation · INIT B / PERF / Crosscheck",
    leftTitle: "RAD NAV · INIT B · PERF TAKEOFF · GREEN DOT",
    rightTitle: "FMGS PREPARATION — PM CROSSCHECK",
    image: img(145),
    imageAlt: "FMGS preparation crosscheck by the PM",
    sourceRef: both("SOP-06 Radio NAV / Gross Weight / Takeoff Data / Check of FMGS Preparation", 145),
    cards: [
      {
        heading: "* RADIO NAV ……… CHECK",
        paragraph:
          "Check the VOR, ILS and ADF tuned by the FMGC. Modify them if required, and check that the correct identifier is displayed on the ND and PFD.",
      },
      {
        heading: "INIT B · PERF TAKEOFF (PF)",
        bullets: [
          "* ZFW/ZFWCG ……… INSERT · * BLOCK FUEL ……… INSERT",
          "* T.O SHIFT ……… INSERT AS RQRD — If the aircraft takes off from an intersection, insert a T.O shift value to increase flight crew awareness of the runway length reduction.",
          "* V1, VR, V2 · * FLX TO TEMP ……… INSERT · * THR RED/ACC and ENG OUT ACC altitude ……… SET or CHECK · * FLAPS/THS ……… INSERT",
        ],
      },
      {
        heading: "* EFB/MCDU GREEN DOT ……… COMPARE (PM)",
        paragraph:
          "The PM compares Green Dot speed computed by the FMGS and the Green Dot speed computed using the TAKEOFF application. A discrepancy indicates a difference in the TOW used in both systems (EFB/FMGS).",
      },
    ],
    alert: {
      level: "CAUTION",
      text: "The characteristic speeds displayed on the MCDU (green dot, F, S, VLS) are computed from the ZFW and ZFWCG entered by the crew on the MCDU. Therefore, this data must be carefully checked (Captain’s responsibility).",
    },
  },
  // ── C. Preparación final de cabina ───────────────────────────────────────
  {
    comment: "SLIDE SOP-03.16: Final cockpit preparation glareshield",
    eyebrow: EYEBROW,
    title: "3.16 Preparación final: glareshield",
    subtitle: "Final Cockpit Preparation · Glareshield",
    leftPct: 45,
    leftTitle: "BARO CROSSCHECK · FCU",
    rightTitle: "GLARESHIELD — PF / PM",
    image: img(147),
    imageAlt: "Final cockpit preparation glareshield items for PF and PM",
    sourceRef: both("SOP-06 Glareshield", 147),
    cards: [
      {
        heading: "* BAROMETRIC REFERENCE ……… SET/CROSSCHECK (PF-PM)",
        bullets: [
          "Set QNH on the EFIS control panel and on the standby altimeter.",
          "Check the barometric reference and altitude indications on the PFDs and on the standby altimeter.",
          "The maximum difference is: ±20 ft between both PFDs, and ±100 ft between ISIS and PFDs, or ±300 ft between mechanical standby altimeter and PFDs.",
        ],
      },
      {
        heading: "FCU (PF)",
        bullets: [
          "* SPD/MACH window ……… DASHED",
          "* HDG-V/S / TRK-FPA pb ……… HDG-V/S",
          "* ALT window ……… INITIAL EXPECTED CLEARANCE ALTITUDE",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "Do not engage the autothrust on ground, as it may generate the AUTO FLT A/THR OFF warning at engine start.",
    },
  },
  {
    comment: "SLIDE SOP-03.17: Oxygen mask test",
    eyebrow: EYEBROW,
    title: "3.17 Test de la máscara de oxígeno",
    subtitle: "Final Cockpit Preparation · Oxygen Mask Test",
    leftTitle: "OXYGEN MASK TEST — STEP BY STEP (PF-PM)",
    rightTitle: "OXYGEN MASK ……… TEST",
    image: img(149),
    imageAlt: "Oxygen mask test",
    sourceRef: both("SOP-06 Lateral Consoles · Oxygen Mask Test", 149),
    cards: [
      {
        heading: "Set up",
        paragraph:
          "CREW SUPPLY pb ……… CHECK ON · LOUDSPEAKERS ……… ON · INT reception knob ……… PRESS OUT-ADJUST · INT/RAD sw ……… INT",
      },
      {
        heading: "On the mask stowage box",
        bullets: [
          "Press and hold the reset/test pb in the direction of the arrow. Check that the blinker turns yellow for a short time, and then goes black.",
          "Hold the reset/test pb down, and press the emergency pressure selector. Check that the blinker turns yellow and remains yellow, as long as the emergency pressure selector is pressed. Listen for oxygen flow through the loudspeakers.",
          "Check that the reset/test pb returns to the up position and the N 100 % selector is in the 100 % position.",
          "Press the emergency pressure selector again, and check that the blinker does not turn yellow. This ensures that the mask is not supplied.",
        ],
      },
      {
        heading: "ECAM DOOR/OXY SD page: REGUL LO PR message ……… CHECK OFF",
        paragraph:
          "The crew must perform this check after having checked all masks. It ensures that the LP valve is open.",
      },
    ],
  },
  {
    comment: "SLIDE SOP-03.18: Instrument panels",
    eyebrow: EYEBROW,
    title: "3.18 Paneles de instrumentos: PFD y ND",
    subtitle: "Final Cockpit Preparation · Instrument Panels",
    leftPct: 45,
    leftTitle: "PFD · ND · LOUDSPEAKER (PF-PM)",
    rightTitle: "ND BRIGHTNESS",
    image: img(150),
    imageAlt: "ND outer ring brightness for weather radar and terrain display",
    sourceRef: both("SOP-06 Instrument Panels", 150),
    cards: [
      {
        heading: "* PFD ……… CHECK",
        bullets: [
          "Check PFD/ND not transferred.",
          "Check for correct display, when ATT and HDG are available.",
          "Check IAS, FMA, initial target ALT, altimeter readings, VSI, altimeter settings, heading and attitude display.",
        ],
      },
      {
        heading: "* ND ……… CHECK",
        bullets: ["Check for correct display.", "Check heading, initial waypoint, VOR ADF indications."],
      },
      {
        heading: "LOUDSPEAKER knob ……… SET",
        paragraph: "Set the LOUDSPEAKER knob around the 1 o’clock position.",
      },
    ],
  },
  {
    comment: "SLIDE SOP-03.19: ECP and ADIRS",
    eyebrow: EYEBROW,
    title: "3.19 ECAM control panel y alineación de los IRS",
    subtitle: "Final Cockpit Preparation · ECP / ADIRS",
    leftPct: 48,
    leftTitle: "IRS ALIGNMENT RULES (SOP-04) · ND POSITION",
    rightTitle: "ECP / ADIRS — PF / PM",
    image: img(151),
    imageAlt: "ECAM control panel and ADIRS checks",
    sourceRef: both("SOP-04 ADIRS / SOP-06 ECAM Control Panel / ADIRS", 151),
    cards: [
      {
        heading: "A complete IRS alignment must be performed",
        bullets: [
          "Before the first flight of the day, or",
          "When there is a crew change, or",
          "When the departure airport is located between latitudes 2 ° north and 2 ° south, or",
          "When the GPS is not available and the NAVAID coverage is poor on the expected route, or",
          "When the GPS is not available and the expected flight time is more than 3 h.",
        ],
      },
      {
        heading: "Fast alignment · aircraft stopped",
        bullets: [
          "A fast IRS alignment must be performed if a complete IRS alignment is not necessary and the difference between the IRS position and the FMGC position is at or above 5 NM (see MCDU POSITION MONITOR page).",
          "To perform an alignment, the aircraft must be stopped on ground. Do not align IRS during engine start, or while the engines are running. In the case of aircraft movement during the IRS alignment, the flight crew must perform a new full alignment.",
          "Select ND in ROSE NAV or ARC mode, and confirm that the aircraft position is consistent with the position of the airport, the SID and the surrounding NAVAIDs.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SOP-03.20: Fuel on board",
    eyebrow: EYEBROW,
    title: "3.20 Combustible a bordo",
    subtitle: "Final Cockpit Preparation · FOB",
    leftPct: 45,
    leftTitle: "ABNORMAL FOB DIFFERENCE",
    rightTitle: "* FOB ……… CHECK",
    image: img(152),
    imageAlt: "Fuel on board check",
    sourceRef: both("SOP-06 Fuel On Board", 152),
    cards: [],
    table: {
      headers: ["FOB after refueling", "Abnormal difference above"],
      rows: [
        ["Up to 6 t (13 200 lb)", "400 kg (900 lb)"],
        ["Between 6 t (13 200 lb) and 12 t (26 500 lb)", "500 kg (1 100 lb)"],
        ["More than 12 t (26 500 lb)", "600 kg (1 300 lb)"],
      ],
    },
  },
  // ── D. Departure briefing ────────────────────────────────────────────────
  {
    comment: "SLIDE SOP-03.21: Departure briefing and cockpit preparation checklist",
    eyebrow: EYEBROW,
    title: "3.21 Departure briefing y checklist de preparación",
    subtitle: "Cockpit Preparation · Departure Briefing",
    leftPct: 42,
    leftTitle: "DEPARTURE BRIEFING · C/L",
    rightTitle: "BRIEFING RECOMMENDATIONS",
    image: img(155),
    imageAlt: "Departure briefing recommendations",
    sourceRef: `Source: FCOM A320 PRO-NOR-SOP-06 Departure Briefing / Cockpit Preparation Checklist & ${PDP} (p.153–155)`,
    cards: [
      {
        heading: "Sequence",
        bullets: [
          "* DEPARTURE BRIEFING ……… PERFORM (BOTH)",
          "* COCKPIT PREPARATION C/L ……… COMPLETE (PF-PM)",
        ],
      },
    ],
    table: {
      headers: ["PF", "PM"],
      rows: [
        ["“COCKPIT PREPARATION C/L”", ""],
        ["", "COCKPIT PREPARATION C/L ……… COMPLETE"],
        ["", "“COCKPIT PREPARATION COMPLETE”"],
      ],
    },
    alert: {
      level: "NOTE",
      text: "The PM should start to brief the main items of the PLAN. This ensures that both pilots share the same mental image of the flight trajectory.",
    },
  },
];

export const MCC_SOP_03: MccLesson = {
  id: "a3200000-0000-0000-0000-000000000103",
  course_id: MCC_COURSE_ID,
  title: "SOP-03. Inspección exterior y preparación de cabina: safety checks, walkaround, FMGS y departure briefing",
  slug: "sop-03-inspeccion-exterior-preparacion-cabina",
  sequence_order: 3,
  lesson_order: 3,
  min_seconds: 3600,
  module_title: MCC_MODULES.NORMAL_SOP,
  content_html: joinSlides(SOP_03_SLIDES),
};

export const SOP_03_SLIDE_COUNT = SOP_03_SLIDES.length;
