/**
 * SOP-02 — Flow patterns (0.75 h).
 *
 * Alcance: Curso APS MCC — Airbus A320 (simulador Entrol A32).
 * Fuente: FCOM A320 (PRO-NOR-SOP-06 a SOP-22) y Airbus Tutorial PDP Jan 2024 — Flow Patterns
 * (págs. 23–41, ref. EFTDB0FLOWPAT01 – A320 – JUN 2023).
 * Los flujos con participación simultánea de PF y PM (o CAPT y F/O) se presentan en 2 columnas
 * lado a lado en el panel izquierdo junto con acciones, verificaciones y notas literales del FCOM.
 * Arquitectura: docs/mcc/08_ARQUITECTURA_PDP.md.
 */
import { joinSlides, type MccAlert, type MccCard, type MccLesson, type MccSlideSpec } from "./slide-builder.ts";

const MCC_COURSE_ID = "a3200000-0000-0000-0000-000000000320";
const PDP_IMG = "https://www.blueteam.es/elearning/media/mcc/pdp";
const EYEBROW = "APS MCC · A320 · SOP-02";
const SRC = "Source: Airbus Tutorial PDP Jan 2024 — Flow Patterns";

const img = (page: number) => `${PDP_IMG}/p${String(page).padStart(3, "0")}_flow_patterns.webp`;

/** Tarjeta con los pasos numerados de un miembro de la tripulación, en el orden de la lámina. */
function steps(heading: string, items: string[], startAt = 1): MccCard {
  return { heading, bullets: items.map((item, i) => `<strong>${startAt + i}</strong> · ${item}`) };
}

function flowSlide(opts: {
  n: number;
  page: number;
  title: string;
  subtitle: string;
  splitCards?: [MccCard, MccCard];
  cards?: MccCard[];
  rightTitle?: string;
  sourceRef?: string;
  alert?: MccAlert;
  note?: string;
  leftPct?: number;
}): MccSlideSpec {
  return {
    comment: `SLIDE SOP-02.${opts.n}: ${opts.subtitle}`,
    eyebrow: EYEBROW,
    title: `2.${opts.n} ${opts.title}`,
    subtitle: opts.subtitle,
    leftPct: opts.leftPct,
    leftTitle: opts.subtitle.toUpperCase(),
    rightTitle: opts.rightTitle ?? `${opts.subtitle.toUpperCase()} FLOW`,
    image: img(opts.page),
    imageAlt: `${opts.subtitle} flow pattern`,
    sourceRef: opts.sourceRef ?? `${SRC} (p.${opts.page})`,
    splitCards: opts.splitCards,
    cards: opts.cards ?? [],
    alert: opts.alert ?? (opts.note ? { level: "NOTE", text: opts.note } : undefined),
  };
}

const SOP_02_SLIDES: MccSlideSpec[] = [
  {
    comment: "SLIDE SOP-02.1: Flow patterns — index",
    eyebrow: EYEBROW,
    title: "2.1 Flow patterns del A320",
    subtitle: "Flow Patterns",
    leftPct: 55,
    leftTitle: "PANEL SCAN & TASKSHARING PHILOSOPHY",
    rightTitle: "FLOW PATTERNS — INDEX",
    image: img(23),
    imageAlt: "Flow patterns index",
    sourceRef: "Source: FCOM A320 PRO-NOR-SOP-06 General & Airbus Tutorial PDP Flow Patterns (p.23)",
    cards: [
      {
        heading: "Panel Scan Sequence & Tasksharing (PRO-NOR-SOP-06)",
        paragraph:
          "The PF and PM should perform the cockpit preparation, in accordance with the defined panel scan sequence and tasksharing. The PF prepares the overhead panel, the center instrument panel and the pedestal while the PM performs the external walkaround. When both flight crewmembers are seated and the PM checked the FMS, both flight crewmembers continue the cockpit preparation.",
      },
      {
        heading: "Transit Stop vs. Crew Change (*)",
        paragraph:
          "Items marked by asterisks (*) are the only steps to be completed after a transit stop without flight crew change. Otherwise, the new flight crew performs all the items.",
      },
      {
        heading: "White Lights Philosophy",
        paragraph:
          "As a general rule, during the scan sequence of the overhead panel: * ALL WHITE LIGHTS (except MAINTENANCE panel) ................................. OFF.",
      },
    ],
    alert: {
      level: "NOTE",
      text: "En las láminas de flujo, los números marcan el orden del recorrido en cabina: verde para PF (o CAPT en RTO) y amarillo para PM (o F/O en RTO).",
    },
  },
  flowSlide({
    n: 2,
    page: 24,
    title: "Preparación de cabina: overhead panel",
    subtitle: "Cockpit Preparation – Overhead Panel",
    leftPct: 52,
    sourceRef: "Source: FCOM A320 PRO-NOR-SOP-06 C Overhead Panel & PDP Flow Patterns (p.24)",
    cards: [
      {
        heading: "PF — Overhead Scan (Columns 1 · 2 · 3, bottom to top)",
        bullets: [
          "<strong>1</strong> · STROBE ……… AUTO · BEACON ……… OFF · REMAINING EXT LT … AS RQRD → CVR TEST pb … PRESS · *RCDR GND CTL … ON → CAPT &amp; PURS/CAPT … AS RQRD",
          "<strong>2</strong> · LDG ELEV ……… AUTO · PROBE/WINDOW HEAT … AUTO → * PACK FLOW … AS RQRD → ELEC PANEL … CHECK · BAT … CHECK → ENG FIRE … CHECK/TEST → AUDIO SWITCHING … NORM",
          "<strong>3</strong> · * SIGNS ……… ON/AUTO · * EMER EXIT LT … ARM → VENT … CHECK → PA … RECEPT → MAINT PANEL … CHECK",
        ],
      },
      {
        heading: "White Lights Rule (FCOM PRO-NOR-SOP-06)",
        paragraph:
          "As a general rule, during the scan sequence of the overhead panel: * ALL WHITE LIGHTS (except MAINTENANCE panel) ................................. OFF. MAINTENANCE panel: ALL LIGHTS ……… CHECK OFF. * If secured stop or flight crew change: perform all actions; otherwise (transit stop) perform only actions marked by * in QRH.",
      },
    ],
    alert: {
      level: "WARNING",
      text: "Do not pressurize the hydraulic systems until clearance is obtained from ground personnel.",
    },
  }),
  flowSlide({
    n: 3,
    page: 25,
    title: "Preparación de cabina: center instrument panel",
    subtitle: "Cockpit Preparation – Center Instrument Panel",
    sourceRef: "Source: FCOM A320 PRO-NOR-SOP-06 D CTR Instrument Panel & PDP Flow Patterns (p.25)",
    cards: [
      steps("PF — Center Instrument Panel Scan (1 · 2 · 3)", [
        "*ISIS ……… CHECK — Adjust brightness, check IAS, altimeter readings, altimeter settings and attitude display. Check no flags - Reset attitude, if necessary.",
        "*CLOCK ……… CHECK/SET — To comply with the time precision requirement (+/-1 s UTC) for ATC datalink communication, use the clock in GPS mode, or use INT mode and synchronize with GPS at least once per day.",
        "*A/SKID &amp; N/W STRG sw ……… ON",
      ]),
    ],
    note: "Use of the ISIS bugs function is not recommended (FCOM PRO-NOR-SOP-06).",
  }),
  flowSlide({
    n: 4,
    page: 26,
    title: "Preparación de cabina: pedestal",
    subtitle: "Cockpit Preparation – Pedestal",
    sourceRef: "Source: FCOM A320 PRO-NOR-SOP-06 E Pedestal & PDP Flow Patterns (p.26)",
    cards: [
      {
        heading: "PF — Pedestal Scan (Columns 1 · 2 · 3, top to bottom)",
        bullets: [
          "<strong>1</strong> · ACP ……… CHECK ON/SET (INT knob PRESS OUT/VOLUME CHECK to enable contact with ground crew; VHF/HF CHECK) → COCKPIT DOOR sw ……… NORM",
          "<strong>2</strong> · SWITCHING PANEL ……… NORM → *THRUST levers ……… IDLE → *ENG MASTER levers ……… OFF → *ENG MODE selector ……… NORM → *PARK BRK handle ……… AS RQRD → GRAVITY GEAR EXTN ……… CHECK STOWED",
          "<strong>3</strong> · *ATC ……… STBY · Center Instrument Panel: *ACCU PRESS indicator ……… CHECK",
        ],
      },
    ],
    alert: {
      level: "CAUTION",
      text: "Do not transmit on HF during refueling operations (i.e. refueling, defueling, fuel transfer). Only perform HF radio checks when appropriate (i.e. no personnel in the immediate vicinity).",
    },
  }),
  flowSlide({
    n: 5,
    page: 27,
    title: "Preparación final de cabina",
    subtitle: "Cockpit Preparation – Final Cockpit Preparation",
    sourceRef: "Source: FCOM A320 PRO-NOR-SOP-06 I/J/K/L/M/N & PDP Flow Patterns (p.27)",
    splitCards: [
      steps("PF (CM1)", [
        "GLARESHIELD (EFIS CP &amp; FCU): *BARO REF SET/CROSSCHECK · *FD CHECK ON · *SPD/MACH DASHED · *HDG-V/S · *ALT INITIAL EXPECTED CLEARANCE ALTITUDE",
        "LATERAL CONSOLES &amp; INSTRUMENT PANELS: Oxygen mask test (CREW SUPPLY ON, REGUL LO PR CHECK OFF) · *PFD &amp; *ND CHECK · ECAM PRESS pb (LDG ELEV AUTO) &amp; STS pb (INOP SYS vs. MEL)",
      ]),
      steps("PM (CM2)", [
        "GLARESHIELD (EFIS CP): *BARO REF SET/CROSSCHECK · *FD CHECK ON · *ILS/LS, ND MODE/RANGE, ADF/VOR AS RQRD",
        "LATERAL CONSOLES &amp; INSTRUMENT PANELS: Oxygen mask test · *PFD &amp; *ND CHECK · *IRS ALIGN CHECK (NAV mode, &lt; 5 NM from FMS position) · *FUEL ON BOARD CHECK (PF-PM)",
      ]),
    ],
    cards: [
      {
        heading: "Barometric & FCU Checks (FCOM PRO-NOR-SOP-06)",
        bullets: [
          "Maximum difference: ±20 ft between both PFDs, and ±100 ft between ISIS and PFDs (±300 ft between mechanical standby altimeter and PFDs).",
          "Do not engage the autothrust on ground, as it may generate the AUTO FLT A/THR OFF warning at engine start.",
        ],
      },
    ],
    alert: {
      level: "WARNING",
      text: "To prevent hearing damage to the ground crew connected to the intercom system, inform them that a loud noise may be heard in the headset when performing the oxygen mask test.",
    },
  }),
  flowSlide({
    n: 6,
    page: 28,
    title: "Estructura del departure briefing",
    subtitle: "Structure of the Departure Briefing",
    rightTitle: "STRUCTURE OF THE DEPARTURE BRIEFING",
    sourceRef: "Source: FCOM A320 PRO-NOR-SOP-06 O Departure Briefing & PRO-NOR-SOP-10 Taxi (p.28)",
    splitCards: [
      {
        heading: "PF — Briefing Role",
        paragraph:
          "Sets a distraction-free environment and briefs operational plan &amp; contingencies: hotspots of planned taxi route, stop-margin for RTO, EOSID, return/diversion considerations, special and non-standard operations, plus PF identified threats.",
      },
      {
        heading: "PM — Briefing Role",
        paragraph:
          "Confirms clearance and trajectory data: T/O RWY (intersection), SID designator, first cleared altitude, MSA/MORA for climb trajectory, extra fuel and time, plus PM identified threats.",
      },
    ],
    cards: [
      {
        heading: "FCOM Departure Briefing Verification (PRO-NOR-SOP-06 / SOP-10)",
        bullets: [
          "* DEPARTURE BRIEFING ……… PERFORM (BOTH) before completing the Cockpit Preparation Checklist.",
          "During Taxi (PRO-NOR-SOP-10): DEPARTURE BRIEFING ……… CONFIRM (BOTH) after ATC clearance confirmation, F-PLN (SID, TRANS) check, cleared altitude set on FCU, and PFD/ND checks.",
          "Close the briefing jointly with MITIGATIONS and MISCELLANEOUS so both flight crewmembers share the same mental model before pushback.",
        ],
      },
    ],
  }),
  flowSlide({
    n: 7,
    page: 29,
    title: "Flujo en la autorización de pushback y arranque",
    subtitle: "At Pushback/Start Clearance",
    sourceRef: "Source: FCOM A320 PRO-NOR-SOP-07 B At Pushback/Start Clearance & PDP Flow Patterns (p.29)",
    splitCards: [
      steps("PF", [
        "BEACON sw ……… ON (when cleared for start or pushback)",
        "WINDOWS ……… CHECK CLOSED (handle fully forward, red indicator visible)",
        "DOORS/SLIDES ……… CHECK CLOSED / ARMED (ECAM lower display)",
        "THRUST LEVERS ……… IDLE",
        "PARK BRK handle ……… AS RQRD (ACCU PRESS indication in the green band)",
      ]),
      steps("PM", [
        "ATC ……… SET FOR OPERATION (after obtaining ATC pushback/start &amp; ground crew clearance)",
        "WINDOWS ……… CHECK CLOSED",
        "DOORS/SLIDES ……… CHECK CLOSED / ARMED (ECAM lower display)",
      ]),
    ],
    alert: {
      level: "CAUTION",
      text: "The engines start regardless of the thrust lever position. If the thrust levers are not set to IDLE, then thrust rapidly increases to the corresponding thrust lever position, causing a hazardous situation.",
    },
  }),
  flowSlide({
    n: 8,
    page: 30,
    title: "Flujo después del arranque",
    subtitle: "After Start",
    sourceRef: "Source: FCOM A320 PRO-NOR-SOP-09 After Start & PDP Flow Patterns (p.30)",
    splitCards: [
      steps("PF", [
        "ENG MODE SEL ……… NORM (permits normal pack operation and begins the After Start flow)",
        "APU BLEED pb-sw ……… OFF (avoids ingestion of engine exhaust gases)",
        "ENG / WING ANTI-ICE ……… AS RQRD (turn on ENG ANTI-ICE during all ground operations when icing conditions exist or are anticipated)",
        "APU MASTER SW ……… OFF (if APU is not required)",
        "ECAM STATUS ……… CROSSCHECK",
        "NW STRG DISC MEMO ……… CHECK NOT DISPLAYED",
      ]),
      steps("PM", [
        "GND SPOILERS ……… ARM",
        "RUDDER TRIM ……… RESET pb PRESS / CHECK NEUTRAL (up to 0.3° L or R)",
        "FLAPS lever ……… SET FOR TAKEOFF &amp; CHECK POSITION (ECAM upper display)",
        "PITCH TRIM handwheel ……… SET (takeoff CG)",
        "ECAM STATUS ……… CHECK",
      ]),
    ],
    cards: [
      {
        heading: "Engine Warm-Up & Icing Notes (FCOM PRO-NOR-SOP-09)",
        bullets: [
          "After start, to avoid thermal shock, operate the engine at idle or near idle for at least 2 min (or 3–5 min depending on engine variant/shutdown period) before advancing the thrust lever to high power.",
          "If taxiing in icing conditions with rain, slush or snow: maintain the flaps retracted until the aircraft reaches the holding point of the takeoff runway.",
        ],
      },
    ],
  }),
  flowSlide({
    n: 9,
    page: 31,
    title: "Flujo de rodaje",
    subtitle: "Taxi",
    sourceRef: "Source: FCOM A320 PRO-NOR-SOP-10 Taxi & PDP Flow Patterns (p.31)",
    cards: [
      steps("PM — Taxi Flow Pattern (1 – 7)", [
        "AUTO BRK MAX pb-sw ……… ON",
        "TERR ON ND ……… AS RQRD — Consider selecting the radar display on the PF side, and TERR ON ND on the PM side only.",
        "ATC code/mode ……… CONFIRM/SET FOR TAKEOFF",
        "ENG MODE selector ……… AS RQRD — Select IGN if the runway has standing water, heavy rain is falling, or heavy rain/severe turbulence is expected after takeoff.",
        "WEATHER RADAR ……… ON (PREDICTIVE WINDSHEAR SYSTEM ……… AUTO)",
        "T.O CONFIG pb ……… PRESS",
        "T.O MEMO ……… CHECK NO BLUE",
      ]),
    ],
    alert: {
      level: "CAUTION",
      text: "If the aircraft was parked in wet conditions for a long time, the first brake application at low speed is less effective (FCOM PRO-NOR-SOP-10).",
    },
  }),
  flowSlide({
    n: 10,
    page: 32,
    title: "Flujo de alineación en pista",
    subtitle: "Line-up",
    sourceRef: "Source: FCOM A320 PRO-NOR-SOP-11 Before Takeoff & PDP Flow Patterns (p.32)",
    splitCards: [
      steps("PF", [
        "TAKEOFF RUNWAY ……… CONFIRM (intended runway &amp; intersection: runway markings, lights, ILS/LOC centered, ND runway symbol)",
        "APPROACH PATH ……… CLEAR OF TRAFFIC (visually and using TCAS display on ND)",
        "EXTERIOR LIGHTS ……… STROBE sw ON (to cross or enter a runway; PF may request PM to set exterior lights)",
      ]),
      steps("PM", [
        "TCAS mode selector ……… TA or TA/RA (default TA/RA; TA ONLY only at specific airports/procedures)",
        "TAKEOFF RUNWAY ……… CONFIRM (PF-PM)",
        "APPROACH PATH ……… CLEAR OF TRAFFIC (PF-PM)",
        "PACK 1 and 2 ……… AS RQRD",
        "CABIN CREW ……… ADVISE",
      ]),
    ],
    note: "If BRAKE FAN is ON and the temperature of one brake is at or more than 150 °C: TAKEOFF ……… DELAY. If all brakes are below 150 °C: BRAKE FAN pb ……… OFF (FCOM PRO-NOR-SOP-11).",
  }),
  flowSlide({
    n: 11,
    page: 33,
    title: "Flujo de aceleración",
    subtitle: "Acceleration",
    sourceRef: "Source: FCOM A320 PRO-NOR-SOP-12 Takeoff (Above Acceleration Altitude) & PRO-NOR-SOP-13 & PDP Flow Patterns (p.33)",
    cards: [
      steps("PM — Acceleration Flow Pattern (At S Speed, after PF orders “FLAPS 0”)", [
        "FLAPS 0 ……… SELECT (at F speed PF orders “FLAPS 1” and PM selects FLAPS 1; at S speed PF orders “FLAPS 0” and PM selects FLAPS 0)",
        "GND SPLRS ……… DISARM",
        "L/G ……… CHECK UP",
        "EXTERIOR LIGHTS ……… NOSE sw OFF · RWY TURN OFF sw OFF · OTHER EXTERIOR LIGHTS AS RQRD",
      ]),
      {
        heading: "After Takeoff Checks (FCOM PRO-NOR-SOP-13)",
        bullets: [
          "If the APU was used to supply air conditioning during takeoff: APU BLEED pb-sw ……… OFF · APU MASTER SW pb-sw ……… OFF.",
          "If the takeoff was performed with TA only: TCAS mode selector ……… TA/RA.",
          "ENG ANTI-ICE pb-sw ……… AS RQRD (ON when icing conditions exist or are anticipated, except during climb and cruise when SAT is below -40 °C).",
        ],
      },
    ],
  }),
  flowSlide({
    n: 12,
    page: 34,
    title: "Flujo en ascenso a 10 000 ft AAL",
    subtitle: "Climb 10 000 FT AAL",
    sourceRef: "Source: FCOM A320 PRO-NOR-SOP-14 Climb (At 10 000 ft AAL) & PDP Flow Patterns (p.34)",
    splitCards: [
      steps("PF", [
        "EFIS OPT ……… CSTR — The PF will select CSTR for grid MORA (if available).",
      ], 3),
      steps("PM", [
        "L &amp; R LAND sel ……… RETRACT",
        "SEAT BELTS sw ……… AS RQRD",
        "EFIS OPT ……… ARPT — The PM will select ARPT.",
        "ECAM MEMO ……… REVIEW",
        "NAVAIDS ……… CLEAR (manually tuned VORs from RAD NAV) · SEC F-PLN ……… AS RQRD (recopy active F-PLN) · OPT FL / REC MAX FL ……… CHECK",
      ]),
    ],
    note: "At Transition Altitude (FCOM PRO-NOR-SOP-14): BAROMETRIC REFERENCE ……… SET STD/CROSSCHECK (PF-PM) on EFIS CP and standby altimeter.",
  }),
  flowSlide({
    n: 13,
    page: 35,
    title: "Preparación del FMS para el descenso",
    subtitle: "Descent – FMS Preparation",
    rightTitle: "DESCENT – FMS PREPARATION",
    sourceRef: "Source: FCOM A320 PRO-NOR-SOP-16 Descent Preparation & PDP Flow Patterns (p.35)",
    cards: [
      {
        heading: "Timing & Pre-FMS Checks (FCOM PRO-NOR-SOP-16)",
        bullets: [
          "Descent preparation and arrival briefing should be completed before top of descent.",
          "WEATHER AND LANDING INFORMATION ……… OBTAIN (PM): check weather reports and runway conditions at destination and alternate airports; consider altitude corrections for low OAT.",
          "ECAM STATUS ……… CHECK (PM): check the STATUS page before completing the landing distance and the arrival briefing, noting any degradation in landing capability.",
        ],
      },
      {
        heading: "Landing Performance & FMS Arrival Setup",
        bullets: [
          "LANDING CONDITIONS ……… CONFIRM (PF-PM): if landing conditions changed compared with dispatch, PF and PM independently compute landing distance performance data and crosscheck both EFBs.",
          "ARRIVAL page ……… COMPLETE/CHECK (PF): insert APPR, STAR, APPR VIA and TRANS (lateral revision at destination), then verify RAD NAV, PROG, PERF, FUEL PRED and SEC F-PLN.",
        ],
      },
    ],
    alert: {
      level: "CAUTION",
      text: "PAX — PERF APPR page: An erroneous entry of OAT or QNH may lead to undue emergency descent (wrong Cabin Pressure Control (CPC) segment computation).",
    },
  }),
  flowSlide({
    n: 14,
    page: 36,
    title: "Estructura del arrival briefing",
    subtitle: "Structure of the Arrival Briefing",
    rightTitle: "STRUCTURE OF THE ARRIVAL BRIEFING",
    sourceRef: "Source: FCOM A320 PRO-NOR-SOP-16 Descent Preparation (Arrival Briefing) & PDP Flow Patterns (p.36)",
    splitCards: [
      {
        heading: "PF — Briefing Role",
        paragraph:
          "Sets a distraction-free environment and briefs approach execution: guidance for APP, landing FLAP setting, stop-margin, use of reverse, use of autobrake, planned RWY exit, hotspots for taxi-in, special operation, non-standard operation, and PF identified threats.",
      },
      {
        heading: "PM — Briefing Role",
        paragraph:
          "Confirms arrival &amp; go-around constraints: MORA/MOCA/MSA for planned trajectory, STAR, type of APP, MINIMUM, G/A TRAJECTORY, extra fuel and time, plus PM identified threats.",
      },
    ],
    cards: [
      {
        heading: "FCOM Descent Preparation & Anti-Ice (PRO-NOR-SOP-16)",
        bullets: [
          "NAV CHARTS CLIPBOARD ……… PREPARE (BOTH): verify that both flight crewmembers refer to the same chart reference.",
          "ARRIVAL BRIEFING ……… PERFORM (BOTH) before top of descent, closing jointly with MITIGATIONS and MISCELLANEOUS.",
          "ENG 1 and 2 ANTI-ICE must be set to ON before and during descent when icing conditions exist or are anticipated, even if the SAT is below -40 °C (-40 °F).",
        ],
      },
    ],
  }),
  flowSlide({
    n: 15,
    page: 37,
    title: "Flujo en descenso a 10 000 ft AAL",
    subtitle: "Descent 10 000 FT AAL",
    sourceRef: "Source: FCOM A320 PRO-NOR-SOP-17 Descent (At 10 000 ft AAL) & PDP Flow Patterns (p.37)",
    splitCards: [
      steps("PF", [
        "EFIS option pb ……… CSTR",
        "ILS/LS pb ……… AS RQRD (check deviation scales and IDENT displayed on PFD)",
        "WHEN GPS PRIMARY LOST: NAV ACCY ……… MONITOR",
      ]),
      steps("PM", [
        "L &amp; R LAND sel ……… SET (ON, per operator policy)",
        "SEAT BELTS sw ……… ON",
        "EFIS option pb ……… CSTR",
        "ILS/LS pb ……… AS RQRD (deviation scales &amp; IDENT on PFD)",
        "RADIO NAV ……… AS RQRD/CHECK (tuned &amp; identified)",
        "ENG MODE sel ……… AS RQRD (select IGN if standing water, heavy rain or severe turbulence expected)",
      ]),
    ],
    note: "When approaching Transition Level and cleared for an altitude (PRO-NOR-SOP-17): BAROMETRIC REFERENCE ……… SET/CROSSCHECK (PF-PM) on EFIS CP, standby altimeter and FMS PERF APPR page. If NAV ACCURACY is LOW, do not use TERR ON ND.",
  }),
  flowSlide({
    n: 16,
    page: 38,
    title: "Flujo después del aterrizaje",
    subtitle: "After Landing",
    sourceRef: "Source: FCOM A320 PRO-NOR-SOP-21 After Landing & PDP Flow Patterns (p.38)",
    splitCards: [
      steps("PF", [
        "GROUND SPOILERS ……… DISARM (when the runway is vacated)",
        "EXTERIOR LIGHTS ……… LAND RETRACT · STROBE AUTO · NOSE TAXI (STROBE ON when crossing a runway; PF may request PM to set exterior lights)",
      ]),
      steps("PM", [
        "RADAR ……… OFF",
        "PREDICTIVE WINDSHEAR SYSTEM ……… OFF",
        "ENG MODE sel ……… NORM",
        "FLAPS ……… RETRACT (set FLAPS lever to 0)",
        "TCAS / ATC ……… STBY",
        "APU ……… START (as required)",
        "ANTI-ICE ……… AS RQRD",
      ]),
    ],
    cards: [
      {
        heading: "FCOM Safety Notes (PRO-NOR-SOP-21)",
        bullets: [
          "Switching the radar and predictive windshear system to OFF after landing avoids risk of radiating persons at the gate area.",
          "If the approach was performed in icing conditions, or on slush or snow, do not retract flaps until after engine shutdown and ground crew confirmation. On ground with OAT above 30 °C, keeping slats in CONF 1 avoids spurious AIR L(R) WING LEAK alerts.",
        ],
      },
    ],
  }),
  flowSlide({
    n: 17,
    page: 39,
    title: "Flujo de aparcamiento",
    subtitle: "Parking",
    sourceRef: "Source: FCOM A320 PRO-NOR-SOP-22 Parking & PDP Flow Patterns (p.39)",
    splitCards: [
      steps("PF", [
        "ACCU PRESS indicator ……… CHECK (green band; chocks required before engine 1 shutdown if low)",
        "PARK BRK handle ……… ON (keep brake pedals pressed until brakes pressure above green band)",
        "ALL ENG MASTER LEVERS ……… OFF (no less than 3 min after high thrust operations; check engine parameters decrease)",
        "EXTERIOR LIGHTS ……… BEACON OFF / AS RQRD",
        "SLIDES ……… CHECK DISARMED (DOOR/OXY SD page)",
        "SEAT BELTS sw ……… OFF",
      ]),
      steps("PM", [
        "ANTI-ICE ……… OFF",
        "APU BLEED pb-sw ……… ON (immediately before engine shutdown to prevent engine exhaust fumes entering air conditioning)",
        "FUEL PUMPS ……… OFF",
      ]),
    ],
    note: "If the temperature of one brake is above 500 °C (or above 350 °C with the brake fans ON), avoid applying the parking brake unless operationally necessary. Operate engines at or near idle for a cooling period of 3 min before shutdown (FCOM PRO-NOR-SOP-22).",
  }),
  flowSlide({
    n: 18,
    page: 40,
    title: "Flujo de descenso de emergencia",
    subtitle: "Emergency Descent",
    sourceRef: "Source: Airbus Tutorial Emergency Descent & PDP Flow Patterns (p.40)",
    splitCards: [
      steps("PF", [
        "CREW OXY MASKS ……… USE (INT/RAD sw INT · INT reception ON · establish comm: “EMERGENCY DESCENT”)",
        "EMER DESCENT ……… INITIATE — ALT ……… TURN PULL · HDG ……… TURN PULL · SPD ……… PULL",
        "FMA ……… ANNOUNCE (“THRUST IDLE, OPEN DESCENT, HEADING, ALT BLUE”)",
        "If A/THR is not active: THR LEVERS ……… IDLE",
        "SPD BRK ……… FULL",
      ]),
      steps("PM", [
        "CREW OXY MASKS ……… USE (Communication Established)",
        "SIGNS (ALL) ……… ON",
        "FMA ……… CHECK (“CHECKED”)",
      ]),
    ],
    cards: [
      {
        heading: "Critical Operational Highlights (Airbus Tutorial)",
        bullets: [
          "Action on the altitude knob-selector is TURN, then PULL. If you PULL first, then TURN, the aircraft will not descend.",
          "Perform the Read &amp; Do procedures (ECAM or QRH) once established in descent and Memory Items are completed. Announce “EMERGENCY DESCENT” on PA, notify ATC, and select CSTR (ND range 40 NM or more) to display MORA.",
          "Below FL 100, limit the rate of descent to approximately 1 000 ft/min, except during the approach phase.",
        ],
      },
    ],
  }),
  flowSlide({
    n: 19,
    page: 41,
    title: "Flujo de despegue abortado",
    subtitle: "Rejected Takeoff",
    sourceRef: "Source: Airbus Tutorial Rejected Takeoff & PDP Flow Patterns (p.41)",
    splitCards: [
      steps("CAPT — “STOP !” (CAPT is now PF)", [
        "ALL THRUST LEVERS IDLE · REVERSERS MAX AVAIL",
        "WHEN AIRCRAFT IS STOPPED: REVERSERS STOWED · PARKING BRAKE ON",
        "PA: « ATTENTION! CREW AT STATION »",
        "« ECAM ACTIONS »",
      ]),
      steps("F/O", [
        "« REVERSE GREEN » (REVERSERS/DECELERATION ……… CHECK)",
        "« DECEL » (ANY AUDIO ……… CANCEL)",
        "WHEN AIRCRAFT STOPPED: NOTIFY ATC « AIRBUS____, STOPPING »",
        "EMERGENCY EVACUATION PROC (QRH): LOCATE",
      ]),
    ],
    cards: [
      {
        heading: "Decision Management & RTO Below 72 kt (Airbus Tutorial)",
        bullets: [
          "Many ECAM alerts are inhibited during takeoff phase. Any ECAM Warning or Caution triggered below V1 must be considered significant; takeoff should be rejected. For non-ECAM events: below 100 kt reject takeoff; above 100 kt consider continuing takeoff (GO-MINDED).",
          "In case of an RTO below 72 kt: no ground spoilers deployment and no autobrake activation — use manual braking, nosewheel steering and differential braking if needed.",
        ],
      },
    ],
  }),
];

export const MCC_SOP_02: MccLesson = {
  id: "a3200000-0000-0000-0000-000000000102",
  course_id: MCC_COURSE_ID,
  title: "SOP-02. Flow patterns: preparación de cabina, rodaje, despegue, llegada, aparcamiento y flujos anormales",
  slug: "sop-02-flow-patterns",
  sequence_order: 8,
  lesson_order: 8,
  min_seconds: 2700,
  content_html: joinSlides(SOP_02_SLIDES),
};

export const SOP_02_SLIDE_COUNT = SOP_02_SLIDES.length;
