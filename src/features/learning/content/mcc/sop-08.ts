/**
 * SOP-08 — Motor y al aire, aterrizaje, después del aterrizaje, parking y securing (1 h).
 *
 * Alcance: Curso APS MCC — Airbus A320ceo CFM56-5B (simulador Entrol A32).
 * Fuentes: Airbus Tutorial PDP Jan 2024 — Go Around (págs. 264–279), Landing (280–285) y After Landing –
 * Parking – Securing the A/C (286–298); FCOM A320 PRO-NOR-SOP-19 (Landing), SOP-20 (Go-Around),
 * SOP-21 (After Landing), SOP-22 (Parking), SOP-23 (Securing the Aircraft), DSC-22_20 (Enable ALTN) y
 * LIM-AFS-10 (Autopilot Function).
 *
 * Criterio de redacción: la columna izquierda NO repite el texto de la lámina de la derecha; aporta la
 * información complementaria del FCOM (textos L1/L2, WARNING/CAUTION/NOTE) en inglés y literal. Solo se
 * repite algo de la lámina cuando es crítico. Variante FCOM: A320ceo CFM56-5B.
 * Láminas no usadas: 268, 278 y 286 (ya en SOP-01); 273–275, 287 y 294 (flujos ya en SOP-02); 295 (línea
 * A330 BAT); 271 (sustituida por diagrama FCOM Acceleration Flow Pattern); 265, 270, 272, 276, 279, 281,
 * 285, 292 y 296 (texto redundante); 267 usada en versión limpia A320 (sin rotulación A330).
 * Arquitectura: docs/mcc/08_ARQUITECTURA_PDP.md.
 */
import { MCC_MODULES, joinSlides, mccMinSeconds, type MccLesson, type MccSlideSpec } from "./slide-builder.ts";

const MCC_COURSE_ID = "a3200000-0000-0000-0000-000000000320";
const PDP_IMG = "https://www.blueteam.es/elearning/media/mcc/pdp";
const EYEBROW = "APS MCC · A320 · SOP-08";

/** Todas las láminas llevan el pie recortado y se re-subieron: versión común para la caché. */
const IMG_VERSION = 1795623000;
const chapter = (page: number) =>
  page <= 279 ? "go_around" : page <= 285 ? "landing" : "after_landing_parking_securing_the_a_c";
const CHAPTER_NAME: Record<string, string> = {
  go_around: "Go Around",
  landing: "Landing",
  after_landing_parking_securing_the_a_c: "After Landing – Parking – Securing the A/C",
};
const img = (page: number) => `${PDP_IMG}/p${String(page).padStart(3, "0")}_${chapter(page)}.webp?v=${IMG_VERSION}`;
const fcomImg = (name: string) => `${PDP_IMG}/${name}.webp`;
const IMG_SPATIAL_DISORIENTATION_A320 = `${PDP_IMG}/p267_go_around_a320.webp?v=${IMG_VERSION}`;
const src = (sections: string, page: number) =>
  `Source: FCOM A320 ${sections} & Airbus Tutorial PDP Jan 2024 — ${CHAPTER_NAME[chapter(page)]} (p.${page})`;
const fcom = (sections: string) => `Source: FCOM A320 ${sections}`;

const SOP_08_SLIDES: MccSlideSpec[] = [
  // ── A. Go around ─────────────────────────────────────────────────────────
  {
    comment: "SLIDE SOP-08.1: Go around overview",
    eyebrow: EYEBROW,
    title: "8.1 Motor y al aire: visión general",
    subtitle: "Go Around · Overview",
    leftPct: 45,
    leftTitle: "GO AROUND WITH FD (PRO-NOR-SOP-20)",
    rightTitle: "GO AROUND",
    image: img(264),
    imageAlt: "Go-around sequence from decision to acceleration, second approach or diversion",
    sourceRef: src("PRO-NOR-SOP-20 Go Around with FD", 264),
    cards: [
      {
        heading: "Simultaneously apply the following three actions (PF):",
        bullets: ["THRUST LEVERS ……… TOGA", "ROTATION ……… PERFORM", "GO AROUND ……… ANNOUNCE"],
      },
    ],
    alert: {
      level: "NOTE",
      text: "If the thrust levers are not set briefly to TOGA detent, the FMS does not engage the GO-AROUND phase, and flying over, or close to the airport will sequence the Destination waypoint in the F-PLN.",
    },
  },
  {
    comment: "SLIDE SOP-08.2: Thrust levers TOGA and FMA",
    eyebrow: EYEBROW,
    title: "8.2 Palancas a TOGA y FMA del go-around",
    subtitle: "Go Around Initiation · Thrust Levers",
    leftPct: 45,
    leftTitle: "THRUST LEVERS · FMA (PF)",
    rightTitle: "THRUST LEVERS ……… TOGA",
    image: img(269),
    imageAlt: "Effect of setting the thrust levers to TOGA during go-around",
    sourceRef: src("PRO-NOR-SOP-20 Go Around with FD", 269),
    cards: [
      {
        heading: "THRUST LEVERS ……… TOGA",
        paragraph: "The flight crew may use CL detent to have benefit of A/THR.",
      },
      {
        heading: "FMA ……… CHECK/ANNOUNCE",
        bullets: [
          "The following modes are displayed: MAN TOGA / SRS / GA TRK or NAV / A/THR.",
          "Depending on the guidance modes during approach, NAV mode is either automatically armed or automatically engaged.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SOP-08.3: Rotation, flaps and landing gear in go-around",
    eyebrow: EYEBROW,
    title: "8.3 Rotación, flaps y tren en el go-around",
    subtitle: "Go Around Initiation · Rotation",
    leftPct: 45,
    leftTitle: "ROTATION · FLAPS · L/G",
    rightTitle: "GO-AROUND NEAR THE GROUND",
    image: img(266),
    imageAlt: "Go-around near the ground: rotation rate, baulked landing and config alert",
    sourceRef: src("PRO-NOR-SOP-20 Go Around with FD", 266),
    cards: [
      {
        heading: "ROTATION ……… PERFORM (PF)",
        paragraph:
          "Initiate rotation towards 15 ° of pitch with all engines operative (approximately 12.5 ° if one engine is out) to get a positive rate of climb, then follow the SRS Flight Director orders.",
      },
      {
        heading: "Sequence",
        bullets: [
          "FLIGHT PARAMETERS ……… MONITOR (PM) · FLAPS ……… RETRACT ONE STEP (PM)",
          "POSITIVE CLIMB ……… ANNOUNCE (PM) · L/G UP ……… ORDER (PF) · L/G ……… UP (PM)",
          "NAV or HDG mode ……… AS RQRD (PF) · GO AROUND ALTITUDE ……… CHECK (PM)",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SOP-08.4: Go-around thrust reduction and acceleration altitude",
    eyebrow: EYEBROW,
    title: "8.4 Reducción de empuje y aceleración en el go-around",
    subtitle: "Go Around · Thrust Reduction / Acceleration",
    leftPct: 45,
    leftTitle: "GA THRUST REDUCTION · GA ACCELERATION ALTITUDE",
    rightTitle: "SPATIAL DISORIENTATION",
    image: IMG_SPATIAL_DISORIENTATION_A320,
    imageAlt: "Spatial disorientation risk in a light aircraft go-around and speed limit with ALT star",
    sourceRef: src("PRO-NOR-SOP-20 At Go-Around Thrust Reduction / Acceleration Altitude", 267),
    cards: [
      {
        heading: "At go-around thrust reduction altitude",
        paragraph: "THRUST LEVERS ……… CL (PF) — LVR CLB flashing on FMA.",
      },
      {
        heading: "At go-around acceleration altitude: SPEED ……… MONITOR (PF)",
        bullets: [
          "Monitor that the target speed increases to green dot.",
          "If the target speed does not increase to green dot: FCU ALT ……… CHECK · ALT knob ……… PULL",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SOP-08.5: Go-around acceleration flow and autopilot",
    eyebrow: EYEBROW,
    title: "8.5 Flujo de aceleración y uso del AP tras el go-around",
    subtitle: "Go Around · Acceleration Flow Pattern",
    leftPct: 50,
    leftTitle: "ACCELERATION FLOW PATTERN (PRO-NOR-SOP-20)",
    rightTitle: "ACCELERATION FLOW PATTERN — FCOM A320",
    image: fcomImg("fcom_a320_go_around_accel_flow"),
    imageAlt: "Official FCOM A320 go-around acceleration flow pattern on pedestal and overhead panel",
    sourceRef: fcom("PRO-NOR-SOP-20 Acceleration Flow Pattern / LIM-AFS-10 Autopilot Function"),
    cards: [
      {
        heading: "Flaps",
        bullets: ["At F speed: FLAPS 1 ……… ORDER (PF) / SELECT (PM)", "At S speed: FLAPS 0 ……… ORDER (PF) / SELECT (PM)"],
      },
      {
        heading: "PM",
        bullets: [
          "GND SPLRS ……… DISARM · L/G ……… CHECK UP · NOSE sw ……… OFF · RWY TURN OFF sw ……… OFF",
          "OTHER EXTERIOR LIGHTS ……… AS RQRD — The flight crew can maintain the LAND selector set to ON, according to airline policy or regulatory recommendations.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "The autopilot can be used with the following minimum values: After a manual go-around — 100 ft AGL.",
    },
  },
  {
    comment: "SLIDE SOP-08.6: Diversion — enable ALTN",
    eyebrow: EYEBROW,
    title: "8.6 Diversión al alternativo",
    subtitle: "Go Around · Diversion",
    leftPct: 48,
    leftTitle: "ENABLE ALTN (DSC-22_20)",
    rightTitle: "DIVERSION — THREE POSSIBILITIES",
    image: img(277),
    imageAlt: "Diversion: alternate prepared, secondary flight plan prepared or nothing prepared",
    sourceRef: src("DSC-22_20-30-10-15 Alternate Function / Enable ALTN", 277),
    cards: [
      {
        heading: "Alternate function",
        bullets: [
          "It reviews and defines alternate airports and inserts them into the flight plan.",
          "It allows a diversion to be activated through the ENABLE ALTN command.",
        ],
      },
      {
        heading: "To activate the primary ALTN",
        bullets: [
          "SELECT a LAT REV at the TO waypoint (or at another suitable waypoint) · SELECT the ENABLE ALTN · INSERT the temporary flight plan.",
          "ENTER an appropriate waypoint in DIRECT TO and adjust the flight plan.",
          "ADJUST the cost index on the PERF page and the defaulted CRZ FL on the PROG page, as required.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "This enables the flight crew to initiate a diversion by entering the alternate flight plan just after the revision waypoint (with a discontinuity). The flight crew may have to adjust the resulting flight plan (use “direct to”, or add or suppress waypoints), depending on the circumstances.",
    },
  },
  // ── B. Landing ───────────────────────────────────────────────────────────
  {
    comment: "SLIDE SOP-08.7: Manual landing flare",
    eyebrow: EYEBROW,
    title: "8.7 Aterrizaje manual: flare",
    subtitle: "Landing · Flare",
    leftPct: 45,
    leftTitle: "FLARE (PRO-NOR-SOP-19)",
    rightTitle: "LANDING",
    image: img(280),
    imageAlt: "Landing: stabilized approach, manual or autoland flare and rollout",
    sourceRef: src("PRO-NOR-SOP-19 Manual Landing - Flare", 280),
    cards: [
      {
        heading: "Around 30 ft RA: FLARE ……… PERFORM (PF) · ATTITUDE ……… MONITOR (PM)",
        bullets: [
          "THRUST LEVERS ……… IDLE — Move the thrust levers to idle, and begin a gentle progressive flare to enable the aircraft to touch down without a prolonged float.",
          "If the autothrust is engaged, it automatically disconnects when both thrust levers are set to the IDLE detent.",
          "At 20 ft, an automatic “RETARD” callout will trigger, as a reminder.",
        ],
      },
    ],
    alert: { level: "NOTE", text: "Ground spoilers extension is inhibited if one or more thrust levers remain above the IDLE detent." },
  },
  {
    comment: "SLIDE SOP-08.8: At touchdown — reversers",
    eyebrow: EYEBROW,
    title: "8.8 En la toma: reversas",
    subtitle: "Landing · At Touchdown",
    leftPct: 48,
    leftTitle: "ALL THRUST LEVERS ……… REV MAX or REV IDLE (PF)",
    rightTitle: "MANUAL LANDING — ROLLOUT",
    image: img(282),
    imageAlt: "Manual landing rollout: derotation, reversers, spoilers, autobrake and 70 kt",
    sourceRef: src("PRO-NOR-SOP-19 At Touchdown", 282),
    cards: [
      {
        heading: "Reverse thrust",
        bullets: [
          "The flight crew must select reverse thrust immediately after main landing gear touchdown.",
          "As soon as the flight crew selects reverse thrust, they must perform a full-stop landing.",
        ],
      },
      {
        heading: "The flight crew must immediately select REV MAX, if any of the following occurs at any time during the landing:",
        bullets: [
          "An emergency · The deceleration is not as expected · A failure affects the landing performance",
          "A long flare or a long touchdown · An unexpected tailwind.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "A small pitch up may occur during thrust reversers deployment before nose landing gear touchdown. However, the flight crew can easily control this pitch up.",
    },
  },
  {
    comment: "SLIDE SOP-08.9: Spoilers, reversers, directional control and braking",
    eyebrow: EYEBROW,
    title: "8.9 Spoilers, reversas, control direccional y frenada",
    subtitle: "Landing · Rollout Checks",
    leftPct: 50,
    leftTitle: "GND SPLRS · REVERSERS ……… CHECK/ANNOUNCE (PM)",
    rightTitle: "DIRECTIONAL CONTROL · BRAKING",
    sourceRef: fcom("PRO-NOR-SOP-19 At Touchdown"),
    cards: [
      {
        heading: "GND SPLRS ……… CHECK/ANNOUNCE",
        bullets: [
          "Check that the WHEEL SD page displays the ground spoilers extended after touchdown.",
          "If no ground spoilers are extended: check that all thrust levers are set to IDLE detent · set both thrust reverser levers to MAX REV, and fully press the brake pedals.",
          "Note: If ground spoilers are not armed, ground spoilers extend at reverse thrust selection.",
        ],
      },
      {
        heading: "REVERSERS ……… CHECK/ANNOUNCE",
        bullets: [
          "Check that the E/WD displays the expected reverser deployment (i.e. REV)",
          "If reverser(s) do not deploy as expected, one of the main deceleration means is lost. The flight crew should consider adapting the available deceleration means to stop the aircraft.",
        ],
      },
    ],
    rightCards: [
      {
        heading: "DIRECTIONAL CONTROL ……… MONITOR/ENSURE (PF)",
        bullets: [
          "Ensure directional control. Use the rudder pedals for directional control. During rollout, avoid sidestick inputs (either lateral or longitudinal)",
          "If the flight crew encounters directional control problems, they should reduce the thrust to REV IDLE until directional control is satisfactory.",
          "Do not use the nosewheel steering control handle before reaching taxi speed.",
        ],
      },
      {
        heading: "AUTOBRAKE ……… MONITOR (PM)",
        paragraph:
          "During all the rollout, the PM monitors the blue light on the autobrake panel, and calls out if the autobrake mode disengages. If no ground spoilers are extended, the autobrake will not activate.",
      },
      {
        heading: "Landing without autobrake: BRAKES ……… AS RQRD (PF)",
        paragraph:
          "Braking may begin before the nosewheel has touched down, if required for performance reasons. However, when comfort is the priority, the flight crew should delay braking until the nosewheel has touched down.",
      },
    ],
  },
  {
    comment: "SLIDE SOP-08.10: Autoland flare",
    eyebrow: EYEBROW,
    title: "8.10 Autoland: flare",
    subtitle: "Autoland · Flare",
    leftPct: 50,
    leftTitle: "AUTOLAND (PRO-NOR-SOP-19-B)",
    rightTitle: "AUTOLAND — FLARE",
    image: img(283),
    imageAlt: "Autoland flare callouts at 350 ft, 40 ft, 30 ft and 10 ft",
    sourceRef: src("PRO-NOR-SOP-19 Autoland", 283),
    cards: [
      {
        heading: "At 350 ft RA: ILS COURSE ON PFD ……… CHECK (PF)",
        paragraph: "If the ILS course pointer and the runway track differ by more than 5 °, perform a go-around, or a manual landing if visual references are sufficient.",
      },
      {
        heading: "At 40 ft RA: FLARE ON FMA ……… CHECK/ANNOUNCE (PM)",
        paragraph: "If the FMA does not display FLARE, perform a go-around, or a manual landing if visual references are sufficient.",
      },
      {
        heading: "At 30 ft and 10 ft RA",
        bullets: [
          "THR IDLE ON FMA ……… CHECK (PM) — Monitor thrust reduction.",
          "At 10 ft: an automatic “RETARD” callout triggers. THRUST LEVERS ……… IDLE — The autothrust disconnects.",
          "LATERAL GUIDANCE ……… MONITOR (PF) — Monitor the lateral guidance by using external references.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SOP-08.11: 70 kt, taxi speed and autobrake disengagement",
    eyebrow: EYEBROW,
    title: "8.11 70 kt, velocidad de rodaje y desconexión del autobrake",
    subtitle: "Landing · End of Rollout",
    leftPct: 52,
    leftTitle: "AT 70 KT · AT TAXI SPEED · BEFORE 20 KT",
    rightTitle: "AUTOLAND — ROLLOUT",
    image: img(284),
    imageAlt: "Autoland rollout: reversers, spoilers, 70 kt, autobrake and AP off",
    sourceRef: src("PRO-NOR-SOP-19 At 70 kt / At Taxi Speed / Before 20 kt", 284),
    cards: [
      {
        heading: "At 70 kt: BOTH THRUST LEVERS ……… REV IDLE (PF)",
        paragraph: "It is recommended to reduce thrust when passing 70 kt. However, high levels of reverse thrust may be used in order to control aircraft speed in the case of an emergency.",
      },
      {
        heading: "At taxi speed · Before 20 kt · End of roll out",
        bullets: [
          "REVERSERS ……… STOW (PF) — On snow-covered grounds, the reversers should be stowed when the aircraft speed reaches 25 kt. When deselecting the reversers, be careful not to apply forward thrust by moving the thrust levers beyond the FWD IDLE position.",
          "Before 20 kt: AUTO BRK ……… DISENGAGE — The flight crew should use brake pedals to disengage the autobrake.",
          "End of roll out (Autoland): AP ……… OFF (PF) — Disengage the APs at the end of the roll out (before leaving the runway at the latest). In the case of NWS or Anti-Skid failure, set the AP OFF at touchdown.",
        ],
      },
    ],
    alert: {
      level: "CAUTION",
      text: "Avoid the use of high levels of reverse thrust at low airspeed, unless required due to an emergency. Except in an emergency, do not use the reverse thrust to control the aircraft speed while on taxiways.",
    },
  },
  // ── C. After landing ─────────────────────────────────────────────────────
  {
    comment: "SLIDE SOP-08.12: After landing",
    eyebrow: EYEBROW,
    title: "8.12 Después del aterrizaje",
    subtitle: "After Landing",
    leftPct: 56,
    leftTitle: "AFTER LANDING (PRO-NOR-SOP-21)",
    rightTitle: "AFTER LANDING — PF / PM",
    image: img(288),
    imageAlt: "After landing items for PF and PM and after landing checklist",
    sourceRef: src("PRO-NOR-SOP-21 After Landing", 288),
    cards: [
      {
        heading: "PF · Radar & Anti-Ice",
        paragraph:
          "LAND lights sw ……… RETRACT · When leaving the runway: STROBE sw ……… AUTO · NOSE sw ……… TAXI · When crossing a runway: STROBE sw ……… ON. Switching the radar and predictive windshear system to OFF after landing avoids risk of radiating persons at the gate area.",
      },
      {
        heading: "PM — Flaps · APU · Anti-ice",
        bullets: [
          "FLAPS: if the approach was performed in icing conditions, or if the runway was contaminated with slush or snow, do not retract the flaps until after engine shutdown, and after the ground crew confirmed that flaps and slats are clear of obstruction due to ice.",
          "On ground, hot weather conditions may cause overheating to be detected around the bleed ducts in the wings, resulting in AIR L (R) WING LEAK alert. Such warnings may be avoided during transit by keeping the slats in CONF 1, when the OAT is above 30 °C · To avoid damage on the RTLU (Rudder Travel Limit Unit) mechanical stop, the SLATS/FLAPS should be retracted before all ADIRS are set to OFF simultaneously.",
          "APU ……… AS RQRD · In the case of one engine taxi: one engine taxi without APU is possible; however, the APU can be started in order to avoid electrical transients and load shedding (e.g. galley and IFE) · If engine anti-ice is used, carefully control taxi speed, particularly on wet or slippery surfaces because ground idle is increased.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SOP-08.13: Brake temperature after landing",
    eyebrow: EYEBROW,
    title: "8.13 Temperatura de frenos tras el aterrizaje",
    subtitle: "After Landing · Brake Temperature",
    leftPct: 50,
    leftTitle: "BRAKE TEMPERATURE ……… MONITOR (PM)",
    rightTitle: "BRAKE TEMPERATURE",
    image: img(289),
    imageAlt: "Brake fans use after landing: oxidation, short turnaround and 500 degrees",
    sourceRef: src("PRO-NOR-SOP-21 Brake Temperature", 289),
    cards: [
      {
        heading: "Check brake temperature for discrepancies and high temperature on the WHEEL SD page. Maintenance action is due in the following cases:",
        bullets: [
          "The temperature difference between two brakes of a gear is more than 150 °C, and the temperature of one of these brakes is above or equal to 600 °C, or",
          "The temperature difference between two brakes of a gear is more than 150 °C, and the temperature of one of these brakes is below or equal to 60 °C, or",
          "The difference between the average temperature of the left gear brakes and right brakes is above or equal to 200 °C, or",
          "The temperature of one brake exceeds 900 °C.",
        ],
      },
    ],
  },
  // ── D. Parking ───────────────────────────────────────────────────────────
  {
    comment: "SLIDE SOP-08.14: Parking — brakes, APU bleed and engine shutdown",
    eyebrow: EYEBROW,
    title: "8.14 Parking: frenos, APU BLEED y parada de motores",
    subtitle: "Parking 1/2",
    leftPct: 56,
    leftTitle: "PARKING (PRO-NOR-SOP-22)",
    rightTitle: "PARKING — PF / PM",
    image: img(290),
    imageAlt: "Parking items for PF and PM",
    sourceRef: src("PRO-NOR-SOP-22 Parking Brake / APU Bleed / Engines / Exterior Lights", 290),
    cards: [
      {
        heading: "Parking brake (PF) · APU bleed (PM)",
        bullets: [
          "In case of low accumulator pressure, chocks are required before engine 1 shutdown · Keep brake pedals pressed after parking brake application until brakes pressure indications are above the green band on the triple pressure indicator.",
          "If the temperature of one brake is above 500 °C (or above 350 °C with the brake fans ON), avoid applying the parking brake, unless operationally necessary.",
          "APU BLEED pb-sw ……… ON (PM) — Set the APU BLEED pb-sw to ON immediately before engine shutdown to prevent engine exhaust fumes from entering the air conditioning.",
        ],
      },
      {
        heading: "Engines",
        bullets: [
          "The flight crew should operate the engines at or near idle thrust for a cooling period of 3 min before engine shutdown, in order to thermally stabilize the engines. · Idle reverse: starts when retarding the thrust lever during flare; maximum reverse: starts when set to idle reverse during rollout.",
          "BEACON sw ……… OFF — Turn off the beacon lights when all engines spooled down.",
        ],
      },
    ],
    alert: {
      level: "CAUTION",
      text: "If JP4 fuel is used at ambient temperatures higher than 10 °C, dry motor the engines for 2 min after engine shutdown. This dry motor period should start approximately 90 s after the flight crew set the ENG MASTER lever to OFF.",
    },
  },
  {
    comment: "SLIDE SOP-08.15: Parking — slides, ground contact and parking brake release",
    eyebrow: EYEBROW,
    title: "8.15 Parking: toboganes, contacto con tierra y freno de parking",
    subtitle: "Parking 2/2",
    leftPct: 52,
    leftTitle: "SLIDES · GROUND CONTACT · PARK BRK",
    rightTitle: "PARKING 2/2 — PF / PM",
    image: img(291),
    imageAlt: "Parking checklist, ATC standby, IRS performance, logbook and EFB",
    sourceRef: src("PRO-NOR-SOP-22 Slides / Ground Contact / Brake Fans / Parking Brk", 291),
    cards: [
      {
        heading: "PF",
        bullets: [
          "SLIDES ……… CHECK DISARMED — Check slides disarmed on the DOOR/OXY SD page. Warn the cabin crew, if any slide is not disarmed.",
          "GROUND CONTACT ……… ESTABLISH — The flight crew should establish communication with the ground crew. Check that chocks are in place.",
          "BRK FAN pb ……… AS RQRD (PM) — Turn off the brake fans when they are no longer necessary.",
        ],
      },
      {
        heading: "PARK BRK handle ……… AS RQRD (PF)",
        bullets: [
          "The parking brake should be released after chocks are in place, if a temperature of one brake is above 300 °C (or above 150 °C with brake fans ON). However, if operational conditions require (e.g. slippery tarmac), the parking brake may remain applied.",
          "The flight crew should not press the brake pedals before releasing the parking brake. However, the flight crew must be prepared to press the brake pedals after parking brake release, if necessary.",
          "When parking with a flat tire on the nose gear, keep the parking brake on, to avoid aircraft yawing at parking brake release.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SOP-08.16: Parking — fuel, logbook and displays",
    eyebrow: EYEBROW,
    title: "8.16 Parking: combustible, logbook y pantallas",
    subtitle: "Parking · Fuel / Logbook / IRS",
    leftPct: 45,
    leftTitle: "FUEL · LOGBOOK · DUs",
    rightTitle: "IRS PERFORMANCE",
    image: img(293),
    imageAlt: "IRS performance check: drift versus block time and POSITION MONITOR page",
    sourceRef: src("PRO-NOR-SOP-22 IRS Performance / Fuel Quantity / Logbook / Report Severe Icing / Display Units", 293),
    cards: [
      {
        heading: "FUEL QUANTITY ……… CHECK (PM)",
        paragraph: "Check that the sum of the fuel on board and the fuel used is consistent with the fuel on board at departure. If the flight crew detects a discrepancy that is not usual, maintenance action is due.",
      },
      {
        heading: "Logbook (CM1)",
        bullets: [
          "STATUS page ……… CHECK — Press the STS pb (ECAM control panel).",
          "LOGBOOK ……… COMPLETE — Complete the logbook according to the STATUS page.",
          "Report severe icing conditions in the log book, requiring inspections of the fan accoustic panels of the engines during the walkaround.",
        ],
      },
      {
        heading: "DUs ……… DIM (PF-PM)",
        paragraph: "Dim EFIS, ECAM and MCDU display units.",
      },
    ],
  },
  // ── E. Securing the aircraft ─────────────────────────────────────────────
  {
    comment: "SLIDE SOP-08.17: Securing the aircraft — general",
    eyebrow: EYEBROW,
    title: "8.17 Asegurar el avión: cuándo y primeros pasos",
    subtitle: "Securing the Aircraft · General",
    leftPct: 55,
    leftTitle: "SECURING THE AIRCRAFT (PRO-NOR-SOP-23)",
    rightTitle: "ADIRS OFF → ELECTRICAL SUPPLY OFF",
    image: img(297),
    imageAlt: "Wait at least 10 s between ADIRS off and electrical supply off",
    sourceRef: src("PRO-NOR-SOP-23 General / Park Brk / Oxygen Crew Supply / ADIRS", 297),
    cards: [
      {
        heading: "General",
        bullets: [
          "The flight crew should apply the following procedure as per company policy, when the last passenger left the aircraft and the securing of the aircraft is intended.",
          "Airbus recommends performing the following procedure when the aircraft is left unattended: i.e. no qualified flight crew or ground crew are in the cockpit to supervise and monitor the aircraft systems.",
          "Prior to performing this check, the following SUP Adverse Weather procedures should be taken into account when appropriate: Securing the aircraft for cold soak · Water system draining · Ground operations in heavy rain · Operations on contaminated airports · Operations with volcanic ash, sand or dust.",
        ],
      },
      {
        heading: "First items",
        bullets: [
          "PARK BRK handle ……… CHECK ON (CM1) — Keep the parking brake on to reduce hydraulic leak rate in the brake accumulator.",
          "OXYGEN CREW SUPPLY pb ……… OFF (CM2)",
          "All IR MODE selectors ……… OFF (CM1)",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SOP-08.18: Securing the aircraft — APU, batteries and maintenance bus",
    eyebrow: EYEBROW,
    title: "8.18 Asegurar el avión: APU, baterías y MAINT BUS",
    subtitle: "Securing the Aircraft · APU / BAT",
    leftPct: 55,
    leftTitle: "CM2 · SECURING THE AIRCRAFT C/L",
    rightTitle: "APU FLAP FULLY CLOSED → BATTERIES OFF",
    image: img(298),
    imageAlt: "Wait about 2 min after APU AVAIL goes out before setting batteries off",
    sourceRef: src("PRO-NOR-SOP-23 Exterior Lights / APU / Emer Lights and Signs / BAT / EFB / Maintenance Bus", 298),
    cards: [
      {
        heading: "CM2",
        bullets: [
          "EXTERIOR LIGHTS ……… OFF · APU BLEED pb-sw ……… OFF · EXT PWR pb ……… AS RQRD",
          "APU MASTER SW pb-sw ……… OFF — Turn off the APU after all passengers disembarked.",
          "EMER EXIT LT sw ……… OFF · SIGNS sw ……… OFF",
          "BAT 1 pb-sw and BAT 2 pb-sw ……… OFF — If the batteries are off while the APU is running, APU fire extinguishing is not available.",
        ],
      },
      {
        heading: "Then",
        bullets: [
          "SECURING THE AIRCRAFT C/L ……… COMPLETE (CM1-CM2) · EFB APPLICATIONS ……… CLOSE · ALL EFB ……… SWITCH OFF",
          "MAINT BUS sw ……… AS RQRD (CM2) — Should electrical power be required for the crew or servicing personnel, consider setting the overhead MAINT BUS sw (in the forward cabin) to the ON position, prior to setting aircraft power to off.",
        ],
      },
    ],
  },
];

export const MCC_SOP_08: MccLesson = {
  id: "a3200000-0000-0000-0000-000000000108",
  course_id: MCC_COURSE_ID,
  title: "SOP-08. Motor y al aire, aterrizaje, después del aterrizaje, parking y securing",
  slug: "sop-08-motor-al-aire-aterrizaje-parking",
  sequence_order: 8,
  lesson_order: 8,
  min_seconds: mccMinSeconds(SOP_08_SLIDES.length),
  module_title: MCC_MODULES.NORMAL_SOP,
  content_html: joinSlides(SOP_08_SLIDES),
};

export const SOP_08_SLIDE_COUNT = SOP_08_SLIDES.length;
