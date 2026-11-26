/**
 * SOP-05 — Rodaje, antes del despegue y despegue (1 h).
 *
 * Alcance: Curso APS MCC — Airbus A320ceo CFM56-5B (simulador Entrol A32).
 * Fuentes: Airbus Tutorial PDP Jan 2024 — Taxi - Before Takeoff (págs. 172–182, ref. EFTDB1TAXI00001) y
 * Takeoff (págs. 183–197, ref. EFTDB2TAKEOFF01); FCOM A320 PRO-NOR-SOP-10 (Taxi), SOP-10B (Departure Change),
 * SOP-11 (Before Takeoff), SOP-12 (Takeoff), SOP-13 (After Takeoff), SOP-14 (At the Transition Altitude),
 * LIM-AG (Taxi Speed, Wind for Takeoff, VMCG on Narrow Runways) y DSC-20-30 (180 Degrees Turn on Runway).
 *
 * Criterio de redacción: la columna izquierda NO repite el texto de la lámina de la derecha; aporta la
 * información complementaria del FCOM (textos L1/L2, WARNING/CAUTION/NOTE) en inglés y literal. Solo se
 * repite algo de la lámina cuando es crítico. Variante FCOM: A320ceo CFM56-5B.
 * Láminas no usadas: 180, 191 y 197 (mismos flujos que SOP-02 p.32–33), 188 (ya en SOP-01) y 194–195
 * (callouts ya cubiertos en SOP-01). La 184 se reutiliza de SOP-01.
 * Arquitectura: docs/mcc/08_ARQUITECTURA_PDP.md.
 */
import { MCC_MODULES, joinSlides, mccMinSeconds, mccVideoSeconds, type MccLesson, type MccSlideSpec } from "./slide-builder.ts";

const MCC_COURSE_ID = "a3200000-0000-0000-0000-000000000320";
const PDP_IMG = "https://www.blueteam.es/elearning/media/mcc/pdp";
const EYEBROW = "APS MCC · A320 · SOP-05";
const PDP_TAXI = "Airbus Tutorial PDP Jan 2024 — Taxi - Before Takeoff";
const PDP_TO = "Airbus Tutorial PDP Jan 2024 — Takeoff";

/** Láminas con el pie recortado (© y banda; en la 185 también la fila ROTATION); llevan versión para la caché. */
const NEW_PAGES = new Set([173, 174, 175, 176, 177, 178, 179, 181, 182, 183, 185, 186, 187, 189, 190, 192, 193, 196]);
const IMG_VERSION = 1795618539;
const img = (page: number) => {
  const chapter = page <= 182 ? "taxi_before_takeoff" : "takeoff";
  const v = NEW_PAGES.has(page) ? `?v=${IMG_VERSION}` : "";
  return `${PDP_IMG}/p${String(page).padStart(3, "0")}_${chapter}.webp${v}`;
};
const src = (sections: string, page: number) =>
  `Source: FCOM A320 ${sections} & ${page <= 182 ? PDP_TAXI : PDP_TO} (p.${page})`;

const SOP_05_SLIDES: MccSlideSpec[] = [
  // ── A. Taxi ──────────────────────────────────────────────────────────────
  {
    comment: "SLIDE SOP-05.1: Taxi initiation",
    eyebrow: EYEBROW,
    title: "5.1 Inicio del rodaje",
    subtitle: "Taxi Initiation",
    leftPct: 45,
    leftTitle: "BRAKES · FLIGHT CONTROLS",
    rightTitle: "TAXI INITIATION — PF / PM",
    image: img(173),
    imageAlt: "Taxi initiation items and callouts for PF and PM",
    sourceRef: src("PRO-NOR-SOP-10 Park Brk / Brakes / Flight Controls", 173),
    cards: [
      {
        heading: "BRAKES PRESSURE ……… CHECK AT ZERO (PF)",
        paragraph: "The flight crew may observe slight residual pressure on the triple indicator for a short period of time.",
      },
      {
        heading: "FLIGHT CONTROLS ……… CHECK (PF-PM)",
        paragraph: "Check the flight controls at a convenient stage, before or during taxi.",
      },
    ],
    alert: {
      level: "CAUTION",
      text: "If the aircraft was parked in wet conditions for a long time, the first brake application at low speed is less effective.",
    },
  },
  {
    comment: "SLIDE SOP-05.2: Taxi speed",
    eyebrow: EYEBROW,
    title: "5.2 Velocidad de rodaje y limitaciones en tierra",
    subtitle: "Taxi · Taxi Speed",
    leftPct: 50,
    leftTitle: "TAXI LIMITATIONS (LIM-AG-SPD · LIM-LG)",
    rightTitle: "TAXI SPEED",
    image: img(182),
    imageAlt: "Taxi speed technique on long straight taxiways",
    sourceRef: src("LIM-AG-SPD Taxi Speed / LIM-LG Braking System / Taxi with Deflated or Damaged Tires", 182),
    alert: {
      level: "CAUTION",
      text: "When the takeoff weight is higher than 76 000 kg (167 550 lb): Do not exceed a taxi speed of 20 kt during a turn.",
    },
    cards: [
      {
        heading: "Braking system",
        paragraph:
          "The braking system is not designed to hold the aircraft in a stationary position when a high thrust level is applied on at least one engine. During ground procedures that require a thrust increase with braking, the flight crew must ensure that the aircraft remains stationary, and must be ready to immediately retard the thrust levers to IDLE.",
      },
    ],
    table: {
      headers: ["Taxi with deflated (not damaged) tires", "Limit"],
      rows: [
        ["Maximum one tire per gear deflated — maximum taxi speed during turn", "7 kt"],
        ["Two tires deflated on the same main gear — maximum taxi speed", "3 kt"],
        ["Maximum NWS angle", "30 °"],
      ],
    },
  },
  {
    comment: "SLIDE SOP-05.3: Taxi — ATC clearance and flight instruments",
    eyebrow: EYEBROW,
    title: "5.3 Rodaje: autorización ATC e instrumentos",
    subtitle: "Taxi · AFS / Flight Instruments",
    leftPct: 50,
    leftTitle: "AFS / FLIGHT INSTRUMENTS (PM)",
    rightTitle: "TAXI — PF / PM",
    image: img(174),
    imageAlt: "Taxi items for PF and PM and taxi checklist",
    sourceRef: src("PRO-NOR-SOP-10 ATC Clearance / AFS-Flight Instruments", 174),
    cards: [
      {
        heading: "ATC clearance · FCU · FD",
        bullets: [
          "ATC clearance ……… CONFIRM (PM)",
          "CLEARED ALTITUDE ON FCU ……… CHECK — On the PFD, crosscheck and confirm the cleared altitude.",
          "HDG ON FCU ……… IF REQUIRED, PRESET — If a heading is required by the ATC after takeoff, in the case of a radar vector departure, preset the heading on the FCU. NAV mode will be disarmed. RWY TRK mode will keep the aircraft on the runway track.",
          "BOTH FD ……… CHECK ON (PM)",
        ],
      },
      {
        heading: "PFD/ND ……… CHECK (PF-PM)",
        paragraph:
          "Check that the PFD (e.g. airspeeds, initial target altitude, heading, FMA modes) and the ND indications (SID) are in accordance with the departure.",
      },
    ],
    alert: {
      level: "NOTE",
      text: "En el FCOM vigente se retiró la comprobación FMS F-PLN/SPD en rodaje y el FCU ALT es CHECK (HDG solo PRESET si ATC da vectores), aunque la lámina de apoyo aún muestre el esquema anterior.",
    },
  },
  {
    comment: "SLIDE SOP-05.4: Taxi flow pattern",
    eyebrow: EYEBROW,
    title: "5.4 Flujo de rodaje del PM",
    subtitle: "Taxi · Flow Pattern",
    leftPct: 50,
    leftTitle: "WHAT EACH FLOW ITEM CHECKS",
    rightTitle: "TAXI FLOW PATTERN — PM",
    image: img(175),
    imageAlt: "Taxi flow pattern for the PM",
    sourceRef: src("PRO-NOR-SOP-10 Eng Mode Selector / Weather Radar / Final Check", 175),
    cards: [
      {
        heading: "ENG MODE selector ……… AS RQRD",
        paragraph: "Select IGN, if: there is standing water on the runway, or heavy rain is falling, or heavy rain or severe turbulence is expected after takeoff.",
      },
      {
        heading: "Weather radar",
        bullets: ["RADAR ……… ON", "PREDICTIVE WINDSHEAR SYSTEM ……… AUTO"],
      },
      {
        heading: "Final check",
        bullets: [
          "T.O CONFIG pb ……… TEST — Press the T.O CONFIG pb on the ECP, and check that the EWD displays the T.O CONFIG NORMAL memo.",
          "T.O MEMO ……… CHECK NO BLUE — Check that the EWD does not display any blue line in the T.O memo section.",
          "CABIN REPORT ……… RECEIVE (PF-PM) — Check CABIN READY in the EWD, or obtain the cabin report from the purser.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SOP-05.5: Departure change",
    eyebrow: EYEBROW,
    title: "5.5 Cambio de salida durante el rodaje",
    subtitle: "PRO-NOR-SOP-10B · Departure Change",
    leftPct: 55,
    leftTitle: "WHO DOES WHAT (FCOM)",
    rightTitle: "DEPARTURE CHANGE — PF / PM",
    image: img(176),
    imageAlt: "Departure change items for PF and PM",
    sourceRef: src("PRO-NOR-SOP-10B Departure Change", 176),
    cards: [
      {
        heading: "PF-PM · BOTH",
        bullets: [
          "FINAL TAKEOFF PERF DATA ……… RECOMPUTE — The PF and the PM independently compute again the takeoff performance data.",
          "RE-BRIEFING ……… PERFORM · DEPARTURE CHANGE C/L ……… COMPLETE",
        ],
      },
      {
        heading: "PM (el PF hace el crosscheck)",
        bullets: [
          "FMS ……… REVISE — The PM revises the FMS as necessary, including the takeoff data, runway and/or SID, as applicable. Carefully confirm that the ATC clearance agrees with the FMS, if NAV mode is to be used.",
          "FLAPS lever ……… SET · FCU ALT ……… SET · T.O CONFIG pb ……… TEST",
        ],
      },
      {
        heading: "PF",
        bullets: [
          "REVISED FMS ……… CROSSCHECK — The PF crosschecks the performance data displayed on the PF's EFB with the FMS PERF TAKE OFF page.",
          "EFB/MCDU GREEN DOT ……… COMPARE — A discrepancy indicates a difference in the TOW used in both systems (EFB/FMGS).",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "El FCOM vigente incluye además FCU ALT SET y T.O CONFIG pb TEST en el cambio de salida, pasos no detallados en la lámina de apoyo.",
    },
  },
  // ── B. Before takeoff ────────────────────────────────────────────────────
  {
    comment: "SLIDE SOP-05.6: Brake temperature and TCAS",
    eyebrow: EYEBROW,
    title: "5.6 Temperatura de frenos y TCAS",
    subtitle: "Before Takeoff · Brake Fans / TCAS",
    leftPct: 50,
    leftTitle: "WHY 150 °C · TCAS MODE",
    rightTitle: "BEFORE TAKEOFF 1/2",
    image: img(177),
    imageAlt: "Brake temperature check before takeoff",
    sourceRef: src("PRO-NOR-SOP-11 Brake Fans / TCAS / LIM-LG Brake Temperature", 177),
    cards: [
      {
        heading: "TAKEOFF ……… DELAY (one brake at or more than 150 °C)",
        bullets: [
          "This prevents the display of the BRAKES HOT alert when the BRAKE FAN is set to OFF.",
          "LIM-LG: Maximum brake temperature for takeoff (brake fans off) ……… 300 °C",
        ],
      },
      {
        heading: "TCAS Mode selector ……… TA or TA/RA (PM)",
        bullets: [
          "The flight crew should use the TA/RA mode as the default mode of the TCAS.",
          "The flight crew may use the TA ONLY mode in specific airports, and for specific procedures (identified by Operators) that may provide resolution advisories that are neither wanted nor appropriate (e.g. closely-spaced parallel or converging runways).",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SOP-05.7: Line-up — takeoff runway and approach path",
    eyebrow: EYEBROW,
    title: "5.7 Alineación: pista correcta y senda libre",
    subtitle: "Before Takeoff · Line-Up",
    leftPct: 50,
    leftTitle: "TAKEOFF RUNWAY · APPROACH PATH",
    rightTitle: "BEFORE TAKEOFF 2/2 — PF / PM",
    image: img(178),
    imageAlt: "Line-up items for PF and PM and line-up checklist",
    sourceRef: src("PRO-NOR-SOP-11 Takeoff Runway / Approach Path", 178),
    cards: [
      {
        heading: "TAKEOFF RUNWAY ……… CONFIRM (PF-PM)",
        paragraph: "Confirm that the line up is performed on the intended runway and from the intended intersection. Useful aids are:",
        bullets: [
          "The runway markings",
          "The runway lights — Be careful that in low visibility, edge lights could be mixed up with the center line lights.",
          "The ILS signal — If the runway is ILS equipped, the flight crew can press the ILS pb (or LS pb): the LOC deviation should be centered after line up",
          "The runway symbol on the ND · The Runway Awareness and Advisory System.",
        ],
      },
      {
        heading: "APPROACH PATH ……… CLEAR OF TRAFFIC (PF-PM)",
        paragraph: "Check that the approach path is clear of traffic, visually and using TCAS display on the ND.",
      },
    ],
  },
  {
    comment: "SLIDE SOP-05.8: Line-up — packs, EFB, cabin crew and strobe",
    eyebrow: EYEBROW,
    title: "5.8 Alineación: packs, EFB, cabina y luces",
    subtitle: "Before Takeoff · Packs / EFB / Cabin Crew",
    leftPct: 50,
    leftTitle: "PACKS · EFB · CABIN CREW",
    rightTitle: "EXTERIOR LIGHTS",
    image: img(179),
    imageAlt: "Exterior lights at line-up and at takeoff clearance",
    sourceRef: src("PRO-NOR-SOP-11 Packs / Sliding Table-EFB / Cabin Crew", 179),
    cards: [
      {
        heading: "PACK 1 and PACK 2 pb-sw ……… AS RQRD (PM)",
        bullets: [
          "Consider selecting packs OFF, or APU bleed ON. This will improve performance when using TOGA thrust.",
          "In the case of a FLEX takeoff, selecting packs OFF or APU bleed ON will reduce takeoff EGT, and thus reduce maintenance costs.",
          "Use of APU bleed is not authorized, if wing anti-ice is to be used.",
        ],
      },
      {
        heading: "EFB · Cabin crew",
        bullets: [
          "ALL EFB (with no mounted equipment) ……… STOW — In flight, both flight crewmembers should not use EFB applications at the same time.",
          "CABIN CREW ……… ADVISE (PM) — Advise the cabin crew that takeoff is imminent.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SOP-05.9: 180 degrees turn on runway",
    eyebrow: EYEBROW,
    title: "5.9 Giro de 180° en pista",
    subtitle: "Before Takeoff · 180° Turn on Runway",
    leftPct: 48,
    leftTitle: "FCOM · LIMITATIONS",
    rightTitle: "180° TURN ON RUNWAY",
    image: img(181),
    imageAlt: "180 degrees turn on runway technique",
    sourceRef: src("DSC-20-30 180 Degrees Turn on Runway / LIM-AG-SPD VMCG on Narrow Runways / PRO-NOR-SUP-ADVWXR", 181),
    cards: [
      {
        heading: "180 degrees turn on runway (DSC-20-30)",
        bullets: [
          "With the recommended 180 ° turn technique, on dry runway, the approximate turn width is 24 m (79 ft) without margin.",
          "The flight crew should consider additional margin when the runway is wet or contaminated.",
        ],
      },
      {
        heading: "Narrow runways (LIM-AG-SPD)",
        paragraph: "For runways with a width below 40 m, the VMCG must be increased: 30 m → + 2.5 kt · 35 m → + 1.5 kt · 40 m → + 0 kt.",
      },
      {
        heading: "Volcanic ash, sand or dust (PRO-NOR-SUP-ADVWXR)",
        paragraph: "FOR 180 ° TURN ON RUNWAY: INITIATE THE TURN DOWNWIND — In order to prevent ash, sand or dust ingestion.",
      },
    ],
  },
  // ── C. Takeoff ───────────────────────────────────────────────────────────
  {
    comment: "SLIDE SOP-05.10: Takeoff sequence",
    eyebrow: EYEBROW,
    title: "5.10 Secuencia del despegue",
    subtitle: "Takeoff · Overview",
    leftPct: 42,
    leftTitle: "TAKEOFF CLEARANCE · EXTERIOR LIGHTS",
    rightTitle: "TAKEOFF",
    image: img(183),
    imageAlt: "Takeoff sequence from thrust setting to transition altitude",
    sourceRef: src("PRO-NOR-SOP-12 Takeoff Clearance / Exterior Lights / Thrust Setting", 183),
    cards: [
      {
        heading: "TAKEOFF CLEARANCE ……… OBTAIN (PM)",
        paragraph: "The below procedure is the standard takeoff procedure. However, rolling takeoff is permitted.",
      },
      {
        heading: "Exterior lights (PF)",
        bullets: ["NOSE sw ……… T.O", "RWY TURN OFF sw ……… ON", "LAND sw ……… ON"],
      },
    ],
  },
  {
    comment: "SLIDE SOP-05.11: Thrust setting",
    eyebrow: EYEBROW,
    title: "5.11 Ajuste de empuje y control direccional",
    subtitle: "Takeoff · Thrust Setting",
    leftPct: 52,
    leftTitle: "WHAT THE FCOM ADDS",
    rightTitle: "THRUST SETTING — PF / PM",
    image: img(184),
    imageAlt: "Takeoff thrust setting and FMA callout",
    sourceRef: src("PRO-NOR-SOP-12 Thrust Setting", 184),
    cards: [
      {
        heading: "SIDESTICK ……… HALF FORWARD",
        paragraph: "To counter the nose-up effect of setting engine takeoff thrust, apply half forward sidestick until the airspeed reaches 80 kt. Release the sidestick gradually to reach neutral at 100 kt.",
      },
      {
        heading: "THRUST LEVERS ……… FLX or TOGA",
        paragraph: "Note: ENG SD page replaces WHEEL SD page on the ECAM lower display.",
      },
      {
        heading: "DIRECTIONAL CONTROL ……… USE RUDDER (PF) · PFD/ND ……… MONITOR (PM)",
        bullets: [
          "At 130 kt (wheel speed), the connection between nosewheel steering and the rudder pedals is removed. Therefore, in strong crosswinds, more rudder input will be required at this point to prevent the aircraft from turning into the wind.",
          "If GPS PRIMARY LOST, check on the ND the FMS position: i.e. that the aircraft is on the runway centerline.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SOP-05.12: Crosswind and tailwind",
    eyebrow: EYEBROW,
    title: "5.12 Viento cruzado y viento en cola",
    subtitle: "Takeoff · Crosswind / Tailwind",
    leftPct: 50,
    leftTitle: "WIND FOR TAKEOFF (LIM-AG-OPS)",
    rightTitle: "CROSSWIND / TAILWIND",
    image: img(196),
    imageAlt: "Thrust setting with crosswind above 20 kt or tailwind",
    sourceRef: src("LIM-AG-OPS Wind for Takeoff and Landing / Tailwind Takeoff / PRO-NOR-SOP-12 Thrust Setting", 196),
    table: {
      headers: ["Limitation", "Value"],
      rows: [
        ["Maximum demonstrated crosswind (takeoff and landing)", "38 kt (gust included)"],
        ["Maximum tailwind for takeoff", "10 kt"],
      ],
    },
    cards: [
      {
        heading: "Note",
        bullets: [
          "The maximum demonstrated crosswind value is not an Airplane Flight Manual (AFM) limitation : It is the maximum crosswind condition experienced during the aircraft certification campaign.",
          "Airbus recommends that operators should not intentionally operate in crosswinds that exceed this value.",
        ],
      },
      {
        heading: "THRUST LEVERS ……… FLX or TOGA (tailwind, or crosswind above 20 kt)",
        paragraph: "Increase thrust rapidly to about 70 % N1 (1.15 EPR) then progressively to reach takeoff thrust by 40 kt ground speed.",
      },
    ],
  },
  {
    comment: "SLIDE SOP-05.13: Takeoff roll",
    eyebrow: EYEBROW,
    title: "5.13 Carrera de despegue: 80 kt, 100 kt y V1",
    subtitle: "Takeoff · Takeoff Roll",
    leftPct: 45,
    leftTitle: "BELOW 80 KT · AT 100 KT",
    rightTitle: "TAKEOFF ROLL — PF / PM",
    image: img(185),
    imageAlt: "Takeoff roll callouts at 80 kt, 100 kt, V1 and VR",
    sourceRef: src("PRO-NOR-SOP-12 Below 80 kt / At 100 kt", 185),
    cards: [
      {
        heading: "TAKEOFF THRUST ……… CHECK (PM)",
        paragraph: "Check that the actual N1/EPR of the individual engines has reached the N1/EPR rating limit, before the aircraft reaches 80 kt. Check EGT.",
      },
      {
        heading: "100 KT ……… CROSSCHECK (PF)",
        bullets: [
          "The PF crosschecks and confirms the speed indicated on the PFD",
          "Below 100 kt, the Captain may decide to abort the takeoff, depending on the circumstances",
          "Above 100 kt, rejecting the takeoff is a more serious matter.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SOP-05.14: Rotation",
    eyebrow: EYEBROW,
    title: "5.14 Rotación",
    subtitle: "Takeoff · Rotation",
    leftPct: 48,
    leftTitle: "ROTATION ……… PERFORM (PF)",
    rightTitle: "ROTATION",
    image: img(186),
    imageAlt: "Rotation technique towards 15 degrees pitch and SRS",
    sourceRef: src("PRO-NOR-SOP-12 At VR", 186),
    cards: [
      {
        heading: "At VR (FCOM)",
        bullets: [
          "At VR, initiate the rotation to achieve a continuous rotation with a rate of about 3 °/s, towards a pitch attitude 15 ° (12.5 °, one engine is failed)",
          "ROTATION ……… ORDER (PM) · ROTATION ……… PERFORM (PF)",
        ],
      },
    ],
    alert: {
      level: "CAUTION",
      text: "If a tailstrike occurs, avoid flying at an altitude requiring a pressurized cabin, and return to the originating airport for damage assessment.",
    },
  },
  {
    comment: "SLIDE SOP-05.15: Lift off",
    eyebrow: EYEBROW,
    title: "5.15 Despegue: tren, AP y límites de velocidad",
    subtitle: "Takeoff · Lift Off",
    leftPct: 45,
    leftTitle: "LIMITATIONS AFTER LIFT-OFF",
    rightTitle: "LIFT OFF — PF / PM",
    image: img(187),
    imageAlt: "Lift off callouts, landing gear up and autopilot engagement",
    sourceRef: src("LIM-AG-SPD Maximum Speeds with the Landing Gear Extended / Maximum Tire Speed / LIM-AFS-10-10 Autopilot", 187),
    cards: [],
    table: {
      headers: ["Limitation", "Value"],
      rows: [
        ["Maximum ground speed (tire speed)", "195 kt"],
        ["Maximum speed at which the landing gear may be retracted (VLO retraction)", "220 kt / M 0.54"],
        ["Maximum speed with the landing gear extended (VLE)", "280 kt / M 0.67"],
        ["Autopilot minimum use — at takeoff", "100 ft AGL and at least 5 s after liftoff"],
      ],
    },
  },
  {
    comment: "SLIDE SOP-05.16: Thrust reduction",
    eyebrow: EYEBROW,
    title: "5.16 Reducción de empuje y packs",
    subtitle: "Takeoff · Thrust Reduction",
    leftPct: 45,
    leftTitle: "AT THRUST REDUCTION ALTITUDE",
    rightTitle: "THRUST REDUCTION — PF / PM",
    image: img(189),
    imageAlt: "Thrust reduction: thrust levers to CL and packs on",
    sourceRef: src("PRO-NOR-SOP-12 At Thrust Reduction Altitude", 189),
    cards: [
      {
        heading: "THRUST LEVERS ……… CL (PF)",
        paragraph: "Move the thrust levers to the CL detent, when the flashing LVR CLB prompt appears on the FMA. A/THR is now active.",
      },
      {
        heading: "PACK 1 and 2 (if applicable) ……… ON (PM)",
        bullets: [
          "Select PACK 1 on after CLB thrust reduction.",
          "Selecting pack on before reducing takeoff thrust would result in an EGT increase.",
          "If packs are not switched on after the takeoff phase, an ECAM caution will be triggered.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SOP-05.17: Acceleration",
    eyebrow: EYEBROW,
    title: "5.17 Aceleración: flaps, spoilers y luces",
    subtitle: "Takeoff · Acceleration",
    leftPct: 45,
    leftTitle: "ABOVE ACCELERATION ALTITUDE",
    rightTitle: "ACCELERATION — PF / PM",
    image: img(190),
    imageAlt: "Acceleration: flaps 1, flaps 0, ground spoilers, landing gear and exterior lights",
    sourceRef: src("PRO-NOR-SOP-12 Above Acceleration Altitude", 190),
    cards: [
      {
        heading: "Purpose",
        paragraph: "The following procedure ensures that the aircraft is correctly accelerating toward climb speed.",
      },
      {
        heading: "Exterior lights at S speed (PM)",
        bullets: [
          "NOSE sw ……… OFF",
          "RWY TURN OFF sw ……… OFF",
          "OTHER EXTERIOR LIGHTS ……… AS RQRD — The flight crew can maintain the LAND sw set to ON, according to airline policy or regulatory recommendations.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SOP-05.18: After takeoff",
    eyebrow: EYEBROW,
    title: "5.18 Después del despegue: motor y antihielo",
    subtitle: "PRO-NOR-SOP-13 · After Takeoff",
    leftPct: 50,
    leftTitle: "ENG MODE · ANTI ICE",
    rightTitle: "AFTER TAKEOFF — PM",
    image: img(192),
    imageAlt: "After takeoff items for the PM",
    sourceRef: src("PRO-NOR-SOP-13 After Takeoff", 192),
    cards: [
      {
        heading: "ENG MODE selector ……… AS RQRD",
        paragraph: "Select IGN/START, if severe turbulence or heavy rain is encountered.",
      },
      {
        heading: "ENG ANTI-ICE pb-sw ……… AS RQRD",
        paragraph:
          "Engine anti-ice must be set to ON when icing conditions exist or are anticipated, except during climb and cruise when the SAT is below -40 °C (-40 °F).",
      },
      {
        heading: "WING ANTI-ICE pb-sw ……… AS RQRD",
        bullets: [
          "The flight crew may turn on the wing anti-ice to prevent ice accretion on the wing leading edge",
          "The flight crew must turn on the wing anti-ice if there is evidence of ice accretion, such as ice on the visual indicator, or on the wipers, or with the SEVERE ICE DETECTED alert.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SOP-05.19: Transition altitude",
    eyebrow: EYEBROW,
    title: "5.19 Altitud de transición",
    subtitle: "PRO-NOR-SOP-14 · At the Transition Altitude",
    leftPct: 45,
    leftTitle: "BAROMETRIC REFERENCE · MCDU",
    rightTitle: "TRANSITION ALTITUDE — PF / PM",
    image: img(193),
    imageAlt: "Transition altitude callouts and standard setting",
    sourceRef: src("PRO-NOR-SOP-14 At the Transition Altitude / Initial Climb", 193),
    cards: [
      {
        heading: "BAROMETRIC REFERENCE ……… SET STD/CROSSCHECK (PF-PM)",
        bullets: [
          "At the transition altitude, the barometric setting flashes on the PFD. The flight crew should set STD on the EFIS CP and on the standby altimeter.",
          "Crosscheck the barometric settings and the altitude indications.",
        ],
      },
      {
        heading: "Initial climb — MCDU",
        bullets: [
          "Normal vertical mode is CLB or OP CLB with managed speed active.",
          "PF MCDU ……… PERF CLB — PF MCDU should be showing the PERF CLB page (allowing PF to monitor when the aircraft will reach the FCU selected altitude).",
          "PM MCDU ……… F-PLN — PM MCDU should be showing the F-PLN page (allowing the flight crew to enter any ATC long-term revisions to the lateral or vertical flight plan).",
        ],
      },
    ],
  },
];

export const MCC_SOP_05: MccLesson = {
  id: "a3200000-0000-0000-0000-000000000105",
  course_id: MCC_COURSE_ID,
  title: "SOP-05. Rodaje, antes del despegue y despegue",
  slug: "sop-05-rodaje-despegue",
  sequence_order: 6,
  lesson_order: 6,
  min_seconds: mccMinSeconds(SOP_05_SLIDES.length, mccVideoSeconds(SOP_05_SLIDES)),
  module_title: MCC_MODULES.NORMAL_SOP,
  content_html: joinSlides(SOP_05_SLIDES),
};

export const SOP_05_SLIDE_COUNT = SOP_05_SLIDES.length;
