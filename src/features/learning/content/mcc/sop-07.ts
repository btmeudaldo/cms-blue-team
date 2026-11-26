/**
 * SOP-07 — Aproximación 2D y 3D (1.5 h).
 *
 * Alcance: Curso APS MCC — Airbus A320ceo CFM56-5B (simulador Entrol A32).
 * Fuentes: Airbus Tutorial PDP Jan 2024 — 2D Approach (págs. 228–244) y 3D Approach (245–263);
 * FCOM A320 PRO-NOR-SOP-18-A (Approach General), SOP-18-B (Aircraft Configuration Management),
 * SOP-18-C (Approach using LOC G/S, FINAL APP and FPA guidance) y LIM-AFS-10 (Autopilot Function).
 *
 * Criterio de redacción: la columna izquierda NO repite el texto de la lámina de la derecha; aporta la
 * información complementaria del FCOM (textos L1/L2, WARNING/CAUTION/NOTE) en inglés y literal. Solo se
 * repite algo de la lámina cuando es crítico. Variante FCOM: A320ceo CFM56-5B.
 * Fuera de esta lección: circling, visual y RNAV visual (SOP-09); FLS no aplica a la variante de referencia.
 * Láminas no usadas: 233, 237 y 258 (ya en SOP-01); 239 (sustituida por diagrama FCOM Pattern Decelerated);
 * 242, 245 y 253 (incluyen valores/líneas A330); 248–251 y 263 (repetidas de 232–235 y 244); 252 (energy
 * circle ya en SOP-06); 244 y 261 usadas en versiones limpias A320 (EC-ILQ).
 * Arquitectura: docs/mcc/08_ARQUITECTURA_PDP.md.
 */
import { MCC_MODULES, joinSlides, mccMinSeconds, mccVideoSeconds, type MccLesson, type MccSlideSpec } from "./slide-builder.ts";

const MCC_COURSE_ID = "a3200000-0000-0000-0000-000000000320";
const PDP_IMG = "https://www.blueteam.es/elearning/media/mcc/pdp";
const EYEBROW = "APS MCC · A320 · SOP-07";

/** Todas las láminas llevan el pie recortado y se re-subieron: versión común para la caché. */
const IMG_VERSION = 1795622000;
const chapter = (page: number) => (page <= 244 ? "2d_approach" : "3d_approach");
const img = (page: number) => `${PDP_IMG}/p${String(page).padStart(3, "0")}_${chapter(page)}.webp?v=${IMG_VERSION}`;
const fcomImg = (name: string) => `${PDP_IMG}/${name}.webp`;
const IMG_EXCEEDANCE_A320 = `${PDP_IMG}/p261_3d_approach_a320.webp?v=${IMG_VERSION}`;
const IMG_AP_OFF_A320 = `${PDP_IMG}/p244_2d_approach_a320.webp?v=${IMG_VERSION}`;
const src = (sections: string, page: number) =>
  `Source: FCOM A320 ${sections} & Airbus Tutorial PDP Jan 2024 — ${page <= 244 ? "2D" : "3D"} Approach (p.${page})`;
const fcom = (sections: string) => `Source: FCOM A320 ${sections}`;

const SOP_07_SLIDES: MccSlideSpec[] = [
  // ── A. General ───────────────────────────────────────────────────────────
  {
    comment: "SLIDE SOP-07.1: Approach types",
    eyebrow: EYEBROW,
    title: "7.1 Tipos de aproximación del A320",
    subtitle: "Approach General · Introduction",
    leftPct: 45,
    leftTitle: "APPROACH TYPES (PRO-NOR-SOP-18-A)",
    rightTitle: "2D APPROACH",
    image: img(228),
    imageAlt: "2D approach phases: initial, intermediate and final approach",
    sourceRef: src("PRO-NOR-SOP-18-A Introduction", 228),
    cards: [
      {
        heading: "The APPROACH section provides the standard operating procedures for:",
        bullets: [
          "ILS approaches",
          "Conventional approaches: VOR, VOR-DME, NDB, NDB-DME",
          "Approaches based on a LOC signal without any G/S signal: LOC ONLY, ILS G/S OUT, LOC B/C",
          "RNAV approaches including RNAV(GNSS) approaches with LNAV or LNAV/VNAV minima, and RNAV(RNP) approaches for which Authorization is Required (AR) - If capability installed.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "In relation to the names in the ICAO PBN Manual: “RNP APCH operations” corresponds to RNAV(GNSS) approaches; “RNP AR APCH operations” corresponds to RNAV(RNP) approaches.",
    },
  },
  {
    comment: "SLIDE SOP-07.2: Guidance modes per approach type",
    eyebrow: EYEBROW,
    title: "7.2 Modo de guiado según el tipo de aproximación",
    subtitle: "Approach General · Cross-Reference Table",
    leftPct: 50,
    leftTitle: "GUIDANCE MODES PER APPROACH TYPE",
    rightTitle: "2D APPROACH — SUMMARY TABLE",
    image: img(229),
    imageAlt: "Summary table of 2D approaches: chart type, FMS approach, deviation, arming and FMA",
    sourceRef: src("PRO-NOR-SOP-18-A Cross-Reference Table", 229),
    cards: [],
    table: {
      headers: ["Approach type", "Guidance mode"],
      rows: [
        ["ILS", "APPR using LOC G/S"],
        ["LOC ONLY · ILS G/S OUT", "LOC FPA (APPR using FPA guidance)"],
        ["LOC B/C", "TRK FPA (APPR using FPA guidance)"],
        ["RNP or RNAV(GNSS) with LNAV/VNAV minima", "APPR using FINAL APP"],
        ["RNP or RNAV(GNSS) with LNAV minima", "FINAL APP (1) or NAV FPA (TRK FPA Not Authorized)"],
        ["RNP or RNAV(GNSS) with LPV minima", "Not Authorized"],
        ["VOR · VOR-DME · NDB · NDB-DME", "FINAL APP (1) or NAV FPA / TRK FPA"],
      ],
    },
    alert: {
      level: "NOTE",
      text: "(1) The FINAL APP is the recommended guidance mode for this type of approach. RNP is equivalent to RNAV(GNSS).",
    },
  },
  {
    comment: "SLIDE SOP-07.3: Flying reference and approach speed technique",
    eyebrow: EYEBROW,
    title: "7.3 Referencia de vuelo y técnica de velocidad",
    subtitle: "Approach General · Flying Reference",
    leftPct: 50,
    leftTitle: "FLYING REFERENCE · SPEED TECHNIQUE",
    rightTitle: "3D APPROACH — SUMMARY TABLE",
    image: img(246),
    imageAlt: "Summary table of 3D approaches: ILS, RNAV, VOR, NDB and RNP AR",
    sourceRef: src("PRO-NOR-SOP-18-A Flying Reference / Approach Speed Technique", 246),
    cards: [
      {
        heading: "Flying reference",
        bullets: [
          "In vertical managed modes: HDG-V/S reference associated with the FD crossbars",
          "In vertical selected modes: TRK-FPA reference associated with FPD.",
        ],
      },
      {
        heading: "Decelerated approach",
        paragraph:
          "The decelerated approach with FD or AP/FD guidance is the standard flying technique for ILS approaches and approaches using FINAL APP guidance.",
      },
      {
        heading: "Early stabilized approach",
        paragraph:
          "Under certain circumstances, the flight crew may decide to reduce the speed down to VAPP in the landing configuration by the FDP (approach via selected guidance, high glide path angle, low altitude intermediate approach, etc.). In order to obtain a valuable deceleration pseudo waypoint and to ensure a timely deceleration, the flight crew should enter VAPP as a speed constraint at the FDP.",
      },
    ],
  },
  {
    comment: "SLIDE SOP-07.4: Approach using FPA guidance",
    eyebrow: EYEBROW,
    title: "7.4 Aproximación con guiado FPA",
    subtitle: "Approach using FPA Guidance · General",
    leftPct: 50,
    leftTitle: "APPROACH USING FPA GUIDANCE",
    rightTitle: "LATERAL GUIDANCE NOT AVAILABLE",
    image: img(230),
    imageAlt: "When lateral guidance is not available, follow radio navigation raw data using TRK mode",
    sourceRef: src("PRO-NOR-SOP-18-C Approach using FPA Guidance - General", 230),
    cards: [
      {
        heading: "Used for",
        bullets: [
          "RNAV(GNSS) approaches with LNAV minima using mixed NAV FPA guidance",
          "Conventional approaches based on VOR and NDB using selected TRK FPA or mixed NAV FPA guidance",
          "ILS G/S OUT, LOC ONLY and LOC B/C approaches.",
        ],
      },
      {
        heading: "The approach is flown in TRK FPA when:",
        bullets: ["The approach is not stored in the database, or", "NAV accuracy is LOW."],
      },
    ],
  },
  {
    comment: "SLIDE SOP-07.5: Stabilization criteria and discontinued approach",
    eyebrow: EYEBROW,
    title: "7.5 Criterios de estabilización y aproximación interrumpida",
    subtitle: "Approach General · Stabilization Criteria",
    leftPct: 55,
    leftTitle: "STABILIZATION CRITERIA",
    rightTitle: "DISCONTINUED APPROACH",
    sourceRef: fcom("PRO-NOR-SOP-18-A Stabilization Criteria / Discontinued Approach"),
    cards: [
      {
        heading: "The stabilization height is defined as one of the following:",
        bullets: [
          "1 000 ft above airfield elevation (AAL) in Instrument Meteorological Conditions (IMC), or",
          "500 ft above airfield elevation (AAL) in Visual Meteorological Conditions (VMC), or",
          "Any other height defined in Operator policies or regulations.",
        ],
      },
      {
        heading: "All of the following conditions must be satisfied before, or at the stabilization height:",
        bullets: [
          "The aircraft is on the correct lateral and vertical flight path",
          "The aircraft is in the desired landing configuration",
          "The thrust is stabilized, usually above idle, and the aircraft is at target speed for approach",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "If one of the above-mentioned conditions is not satisfied, the flight crew must initiate a go-around, unless they estimate that only small corrections are required to recover stabilized approach conditions.",
    },
    rightCards: [
      {
        heading: "At or above the FCU altitude",
        paragraph:
          "In order to discontinue an approach when the aircraft is at or above the altitude selected on the FCU, the flight crew can either apply the GO AROUND procedure, or apply the discontinued approach technique. When the aircraft is below the FCU altitude, the flight crew must apply the GO AROUND procedure.",
      },
      {
        heading: "Discontinued approach technique",
        bullets: [
          "Announce “CANCEL APPROACH”.",
          "To disarm any AP/FD approach mode, press APPR pb or LOC pb. Note: Valid only for ILS or FINAL APP guidance.",
          "Select lateral mode as required (NAV or HDG mode) · Select vertical mode as required (level off or adjust V/S) · Select SPEED and adjust.",
          "If F-PLN has no destination anymore: perform a LAT REV at the last waypoint and redefine the destination in the NEW DEST field.",
        ],
      },
    ],
  },
  // ── B. Initial approach ──────────────────────────────────────────────────
  {
    comment: "SLIDE SOP-07.6: Initial approach",
    eyebrow: EYEBROW,
    title: "7.6 Initial approach: secuenciado del F-PLN y fase de aproximación",
    subtitle: "Initial Approach · F-PLN Sequencing / Phase",
    leftPct: 50,
    leftTitle: "INITIAL APPROACH (PRO-NOR-SOP-18-B)",
    rightTitle: "F-PLN SEQUENCING",
    image: img(232),
    imageAlt: "Why and how to sequence the flight plan before the approach",
    sourceRef: src("PRO-NOR-SOP-18-B Initial Approach", 232),
    cards: [
      {
        heading: "F-PLN SEQUENCING ……… ADJUST (PF)",
        bullets: [
          "A good clue to monitor the proper F-PLN sequencing is the TO waypoint on the upper right side of the ND, which should remain meaningful",
          "In HDG or TRK mode, the F-PLN will sequence automatically only if the aircraft flies close to the F-PLN route.",
        ],
      },
      {
        heading: "APPROACH PHASE ……… CHECK/ACTIVATE (BOTH)",
        bullets: [
          "If the aircraft overflies the DECEL pseudo waypoint in NAV mode, the APPR phase activates automatically",
          "If the aircraft is in HDG or TRK mode, approximately 15 NM from touchdown, activate and confirm APPR phase on the PERF DES page.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SOP-07.7: Flight path and speed brakes",
    eyebrow: EYEBROW,
    title: "7.7 Velocidad, trayectoria y uso de speedbrakes",
    subtitle: "Initial Approach · Speed / Flight Path / Speed Brakes",
    leftPct: 55,
    leftTitle: "SPEED · FLIGHT PATH · SPEED BRAKES (PF)",
    rightTitle: "INITIAL APPROACH — PF / PM",
    image: img(231),
    imageAlt: "Initial approach items for PF and PM",
    sourceRef: src("PRO-NOR-SOP-18-B Initial Approach - Speed / Flight Path / Speed Brakes", 231),
    cards: [
      {
        heading: "MANAGED SPEED ……… CHECK (PF)",
        paragraph: "If ATC requires a particular speed, use selected speed. When the ATC speed constraint no longer applies, return to managed speed.",
      },
      {
        heading: "FLIGHT PATH ……… MONITOR",
        bullets: [
          "In NAV mode, use V/DEV information on the PFD and PROG page",
          "In HDG or TRK mode, use the energy circle on ND representing the required distance to land.",
        ],
      },
      {
        heading: "SPEED BRAKES lever ……… AS RQRD",
        paragraph: "If the flight crew uses the speed brakes to increase the rate of deceleration or to increase the rate of descent, the VLS will increase as well:",
        bullets: [
          "The flight crew should ensure that appropriate speed margin exists before the extension of the speed brakes",
          "If the speed brakes are extended, the flight crew should ensure that appropriate speed margin exists before the beginning of a turn. This will avoid the activation of the Alpha-Floor protection.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "In clean configuration, the VLS with speed brakes fully extended may be more than Green Dot speed or VFE FLAP 1.",
    },
  },
  {
    comment: "SLIDE SOP-07.8: Decelerated approach pattern",
    eyebrow: EYEBROW,
    title: "7.8 Aproximación decelerada: velocidades y flaps",
    subtitle: "Aircraft Configuration · Pattern (Decelerated)",
    leftPct: 50,
    leftTitle: "PATTERN (DECELERATED) — NOTES",
    rightTitle: "SPEED MANAGED",
    image: img(234),
    imageAlt: "Managed speed targets by configuration: green dot, S, F and VAPP",
    sourceRef: src("PRO-NOR-SOP-18-B Pattern (Decelerated)", 234),
    cards: [
      {
        heading: "This approach assumes the uses of managed speed. If not, select speed manually:",
        bullets: ["S after FLAPS 1 selection", "F after FLAPS 2 selection", "VAPP after LDG FLAPS selection."],
      },
      {
        heading: "Notes",
        bullets: [
          "If earlier stabilization at VAPP is required, start deceleration at higher altitude.",
          "The change in FLAPS setting is almost continuous and takes into account the extension time of the surfaces. However, the flight crew must consider VFE NEXT that appears on the PFD in some cases (e.g. heavy aircraft).",
          "To minimize FLAPS wear, extend FLAPS at VFE -15 kt when possible.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SOP-07.9: Navigation accuracy in approach",
    eyebrow: EYEBROW,
    title: "7.9 Precisión de navegación en la aproximación",
    subtitle: "Initial Approach · NAV Accuracy",
    leftPct: 45,
    leftTitle: "NAV ACCURACY ……… MONITOR (PM)",
    rightTitle: "NAV ACCURACY",
    image: img(235),
    imageAlt: "NAV accuracy indications on the PROG page during the approach",
    sourceRef: src("PRO-NOR-SOP-18-B Navigation Accuracy", 235),
    cards: [
      {
        heading: "If GPS PRIMARY LOST: NAVIGATION ACCURACY ……… MONITOR (PM)",
        paragraph:
          "Check on FMS PROGRESS page that the required navigation accuracy is appropriate according to the flown airspace. For more information, Refer to PRO SPO 51 PBN.",
      },
    ],
  },
  // ── C. Aircraft configuration ────────────────────────────────────────────
  {
    comment: "SLIDE SOP-07.10: Flaps 1 at green dot",
    eyebrow: EYEBROW,
    title: "7.10 Configuración: flaps 1 en green dot",
    subtitle: "Aircraft Configuration · At Green Dot Speed",
    leftPct: 50,
    leftTitle: "AT GREEN DOT SPEED",
    rightTitle: "AIRCRAFT CONFIGURATION FOR APPROACH 1/2",
    image: img(238),
    imageAlt: "Aircraft configuration for approach: flaps 1, flaps 2 and gear down",
    sourceRef: src("PRO-NOR-SOP-18-B At Green Dot Speed", 238),
    cards: [
      {
        heading: "FLAPS 1 ……… ORDER (PF) / SELECT (PM)",
        bullets: [
          "FLAPS 1 should be selected more than 3 NM before the Final Descent Point",
          "For decelerated approaches, the aircraft must reach or be established on the final descent with FLAPS 1 and S speed at or above 2 000 ft AGL",
          "If the aircraft does not decelerate on the flight path or aircraft speed is significantly higher than S speed, extend the landing gear in order to slow down. The use of speed brakes is possible. However, the flight crew should be aware that the use of speed brakes causes an increase in VLS.",
        ],
      },
      {
        heading: "TCAS Mode selector ……… TA or TA/RA (PM)",
        paragraph:
          "FAA recommends to select TA only mode: in the case of known nearby traffic which is in visual contact · at particular airports and during particular procedures identified by an Operator as having a significant potential for unwanted or inappropriate resolution advisories.",
      },
    ],
    alert: { level: "CAUTION", text: "The flight crew should avoid extended flight in icing conditions with the slats extended." },
  },
  {
    comment: "SLIDE SOP-07.11: Flaps 2 and landing gear down",
    eyebrow: EYEBROW,
    title: "7.11 Configuración: flaps 2 y tren abajo",
    subtitle: "Aircraft Configuration · Flaps 2 / L/G Down",
    leftPct: 50,
    leftTitle: "AT 2 000 FT AGL MINIMUM · WHEN FLAPS ARE AT 2",
    rightTitle: "PATTERN (DECELERATED) — FCOM A320",
    image: fcomImg("fcom_a320_decelerated_pattern"),
    imageAlt: "Official FCOM A320 decelerated approach pattern from green dot to landing configuration",
    sourceRef: fcom("PRO-NOR-SOP-18-B At 2 000 ft AGL Minimum / When Flaps are at 2 / Pattern (Decelerated)"),
    cards: [
      {
        heading: "FLAPS 2 ……… ORDER (PF) / SELECT (PM)",
        bullets: [
          "Check the aircraft deceleration toward F speed",
          "For ILS, if the aircraft intercepts the flight path below 2 000 ft AGL, select FLAPS 2 at one dot below the flight path",
          "If the aircraft speed is significantly higher than F speed on the flight path, or the aircraft does not decelerate on the flight path, extend the landing gear in order to slow down the aircraft. The use of speed brakes is not recommended",
          "When the speed brakes are deployed, extending the flaps beyond FLAPS 1 may induce a slight roll movement, and in calm conditions a small lateral control asymmetry may remain until disturbed by a control input or by an atmospheric disturbance.",
        ],
      },
      {
        heading: "When flaps are at 2",
        bullets: [
          "L/G DOWN ……… ORDER (PF) · L/G lever ……… SELECT DOWN (PM)",
          "AUTO BRK ……… CONFIRM (PM) — If the runway conditions have changed from the approach briefing, consider another braking mode.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SOP-07.12: Landing gear down, flaps 3 and flaps full",
    eyebrow: EYEBROW,
    title: "7.12 Tren abajo: flaps 3 y flaps full",
    subtitle: "Aircraft Configuration · When Landing Gear is Down",
    leftPct: 50,
    leftTitle: "WHEN LANDING GEAR IS DOWN",
    rightTitle: "INTERMEDIATE / FINAL APPROACH 2/2",
    image: img(254),
    imageAlt: "Configuration with landing gear down, landing checklist and 1 000 ft callout",
    sourceRef: src("PRO-NOR-SOP-18-B When Landing Gear is Down", 254),
    cards: [
      {
        heading: "ECAM WHEEL SD page ……… CHECK (PM)",
        paragraph:
          "Check for three green indications on the landing gear indicator panel. At least one green triangle on each landing gear strut on the WHEEL SD page is sufficient to indicate that the landing gear is downlocked. Rely also on the LDG GEAR DN LDG MEMO message to confirm that the landing gear is downlocked.",
      },
      {
        heading: "FLAPS FULL ……… ORDER (PF) / SELECT (PM)",
        bullets: [
          "Retract the speed brakes before selecting FLAPS FULL to prevent a pitch down when the speed brakes automatically retract",
          "Check that the aircraft decelerates to VAPP",
          "Check correct TO waypoint on the ND.",
        ],
      },
      {
        heading: "WING ANTI ICE pb-sw ……… OFF (PM)",
        paragraph: "Switch the WING ANTI ICE pb-sw to ON, only in severe icing conditions.",
      },
    ],
  },
  {
    comment: "SLIDE SOP-07.13: Flight parameters monitoring",
    eyebrow: EYEBROW,
    title: "7.13 Vigilancia de parámetros en la aproximación final",
    subtitle: "Approach · Flight Parameters",
    leftPct: 48,
    leftTitle: "FLIGHT PARAMETERS ……… MONITOR (PM)",
    rightTitle: "PM FLIGHT PARAMETERS EXCEEDANCE CALLOUTS",
    image: IMG_EXCEEDANCE_A320,
    imageAlt: "PM flight parameters exceedance callouts on PFD and ND for A320",
    sourceRef: src("PRO-NOR-SOP-18-B Flight Parameters / PRO-NOR-SOP-18-C Final Approach - Flight Parameters", 261),
    cards: [
      {
        heading: "The PF announces any FMA modification. The PM calls out, if:",
        bullets: [
          "The speed goes lower than the speed target -5 kt, or more than the speed target +10 kt",
          "The pitch attitude goes lower than -2.5 °, or more than +10 ° nose up",
          "The bank angle becomes more than 7 ° · The descent rate becomes more than 1 000 ft/min.",
        ],
      },
      {
        heading: "Following PM flight parameter exceedance callout, the suitable PF response will be:",
        bullets: [
          "Acknowledge the PM callout, for proper crew coordination purposes",
          "Take immediate corrective action to control the exceeded parameter back into the defined stabilized conditions",
          "Assess whether stabilized conditions will be recovered early enough prior to landing, otherwise initiate a go-around.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "Excessive deviation callouts: ILS (LOC G/S): LOC ½ dot · G/S ½ dot · LOC FPA: LOC ½ dot · NAV FPA: XTK is more than 0.1 NM.",
    },
  },
  // ── D. 2D approach — FPA guidance ────────────────────────────────────────
  {
    comment: "SLIDE SOP-07.14: Intermediate approach 2D — lateral guidance",
    eyebrow: EYEBROW,
    title: "7.14 Aproximación 2D: guiado lateral",
    subtitle: "Approach using FPA Guidance · Intermediate",
    leftPct: 50,
    leftTitle: "LATERAL GUIDANCE MODE ……… SET FOR APPROACH (PF)",
    rightTitle: "INTERMEDIATE APPROACH — PF / PM",
    image: img(236),
    imageAlt: "Intermediate 2D approach with LOC, TRACK or NAV mode and bird",
    sourceRef: src("PRO-NOR-SOP-18-C Approach using FPA Guidance - Initial/Intermediate/Final Approach", 236),
    cards: [
      {
        heading: "For LOC ONLY or ILS G/S OUT approaches: LOC pb-sw ……… PRESS",
        paragraph: "Press the LOC pb-sw when: cleared for the approach · on the intercept trajectory for the final approach course · LOC deviation is available.",
      },
      {
        heading: "For LOC B/C approaches",
        paragraph: "TRK FPA MODE ……… USE FOR APPROACH",
      },
      {
        heading: "LATERAL PATH ……… INTERCEPT",
        paragraph: "Monitor NAV or LOC engagement as appropriate.",
      },
    ],
    alert: { level: "CAUTION", text: "Do not press the APPR pb." },
  },
  {
    comment: "SLIDE SOP-07.15: Final approach 2D — FPA engagement",
    eyebrow: EYEBROW,
    title: "7.15 Aproximación 2D: enganche del FPA en el FDP",
    subtitle: "Approach using FPA Guidance · Final 1/2",
    leftPct: 45,
    leftTitle: "AT 0.3 NM FROM THE FDP · AT THE FDP",
    rightTitle: "FINAL APPROACH 1/2 — PF / PM",
    image: img(240),
    imageAlt: "Final 2D approach: FPA pull, go-around altitude, landing checklist and stabilization",
    sourceRef: src("PRO-NOR-SOP-18-C Approach using FPA Guidance - Final Approach", 240),
    cards: [
      {
        heading: "FPA MODE ……… CHECK ENGAGED (PF)",
        paragraph: "Check that NAV FPA, TRK FPA or LOC FPA is engaged.",
      },
      {
        heading: "GO-AROUND ALTITUDE ……… SET (BOTH)",
        paragraph: "Set when below the go-around altitude to avoid not expected altitude capture.",
      },
      {
        heading: "FLIGHT PARAMETERS ……… MONITOR (PM)",
        bullets: [
          "If approaching on a conventional radio NAVAID procedure, monitor the lateral and vertical guidance using raw data",
          "For approaches using NAV FPA, monitor XTK error on ND to check the lateral guidance.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SOP-07.16: FPA approach preparation",
    eyebrow: EYEBROW,
    title: "7.16 Preparación de una aproximación FPA",
    subtitle: "Approach using FPA Guidance · Descent Preparation",
    leftPct: 50,
    leftTitle: "DESCENT PREPARATION · DESCENT (PF-PM)",
    rightTitle: "POSITION / FLIGHT PATH",
    image: img(241),
    imageAlt: "Position and flight path monitoring with raw data, bird and DME/altitude table",
    sourceRef: src("PRO-NOR-SOP-18-C Approach using FPA Guidance - Descent Preparation / Descent / Final Approach", 241),
    cards: [
      {
        heading: "F-PLN A page ……… CHECK",
        bullets: [
          "If a TOO STEEP PATH message is displayed after the FDP, disregard the V/DEV or yoyo information on the PFD",
          "For approaches using NAV FPA: 1 degree of difference between the MCDU and the charted final lateral track is acceptable.",
          "3 degree of difference between the MCDU and the charted final lateral track is acceptable for conventional radio NAVAID approach.",
          "In all other cases, use TRK FPA mode for approach.",
        ],
      },
      {
        heading: "PROG page · Go-around strategy · Descent",
        bullets: [
          "PROG page ……… COMPLETE — Insert the reference RWY threshold in the BRG/DIST field for position monitoring during approach.",
          "GO-AROUND STRATEGY ……… REVIEW — The briefing should include a review of the “Management of Degraded Navigation” chapter.",
          "At 10 000 ft AAL: NAV ACCURACY ……… CHECK — If NAV accuracy is LOW, use TRK mode for approach.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SOP-07.17: Final approach 2D — at minimum and degraded navigation",
    eyebrow: EYEBROW,
    title: "7.17 Aproximación 2D: en el mínimo y navegación degradada",
    subtitle: "Approach using FPA Guidance · Final 2/2",
    leftPct: 52,
    leftTitle: "AT ENTERED MINIMUM · DEGRADED NAVIGATION",
    rightTitle: "FINAL APPROACH 2/2 — PF / PM",
    image: img(243),
    imageAlt: "At minimum: continue or go around, AP off, FDs off and runway track",
    sourceRef: src("PRO-NOR-SOP-18-C Approach using FPA Guidance - At Entered Minimum / Management of Degraded Navigation", 243),
    cards: [
      {
        heading: "At entered minimum",
        bullets: [
          "Below minimum, the visual references must be the primary references until landing.",
          "FD ……… OFF (PM) — The PF orders the PM to set both FDs OFF.",
          "RUNWAY TRACK ……… CHECK/SET (PM) — If needed, the PF orders the PM to set the runway track.",
        ],
      },
      {
        heading: "Management of degraded navigation",
        bullets: [
          "For VOR and NDB approaches in NAV-FPA, if lateral guidance is not satisfactory: be prepared to continue the approach with reference to appropriate raw data by reverting to TRK-FPA.",
          "For RNAV(GNSS) approaches, with LNAV minima: use the appropriate remaining AP/FD in the following cases: GPS PRIMARY LOST on one ND · NAV ACCUR DOWNGRAD on one ND.",
          "Discontinue the approach in the following cases, if external visual references are not sufficient to proceed visually: GPS PRIMARY LOST on both NDs · XTK > 0.3 NM · NAV FM/GPS POS DISAGREE · NAV ACCUR DOWNGRAD on both NDs.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SOP-07.18: Autopilot minimum use height",
    eyebrow: EYEBROW,
    title: "7.18 Altura mínima de uso del piloto automático",
    subtitle: "LIM-AFS-10 · Autopilot Function",
    leftPct: 52,
    leftTitle: "THE AUTOPILOT CAN BE USED WITH THE FOLLOWING MINIMUM VALUES",
    rightTitle: "AP OFF · FDs OFF · BIRD ON",
    image: IMG_AP_OFF_A320,
    imageAlt: "Autopilot off, flight directors off, bird on and runway track set",
    sourceRef: src("LIM-AFS-10 Autopilot Function", 244),
    cards: [],
    table: {
      headers: ["Phase", "Minimum height"],
      rows: [
        ["At takeoff", "100 ft AGL and at least 5 s after liftoff"],
        ["In approach with FINAL APP, V/S or FPA mode", "250 ft AGL"],
        ["ILS approach when CAT1 is displayed on the FMA", "160 ft AGL"],
        ["ILS approach when CAT2 or CAT3 SINGLE or CAT3 DUAL is displayed on the FMA", "0 ft AGL if autoland"],
        ["After a manual go-around", "100 ft AGL"],
        ["In all other phases", "500 ft AGL"],
      ],
    },
    alert: {
      level: "NOTE",
      text: "The AP or FD in OP DES or DES mode can be used in approach. However, its use is only permitted if the FCU selected altitude is set to, or above, the higher of the two: MDA/MDH or 500 ft AGL.",
    },
  },
  // ── E. 3D approach — ILS (LOC G/S) ───────────────────────────────────────
  {
    comment: "SLIDE SOP-07.19: ILS approach preparation",
    eyebrow: EYEBROW,
    title: "7.19 ILS: mínimos y briefing",
    subtitle: "Approach using LOC G/S Guidance · Descent Preparation",
    leftPct: 50,
    leftTitle: "DESCENT PREPARATION (LOC G/S)",
    rightTitle: "INITIAL APPROACH — PF / PM",
    image: img(247),
    imageAlt: "Initial approach for a 3D approach, including position monitoring",
    sourceRef: src("PRO-NOR-SOP-18-C Approach using LOC G/S Guidance - Descent Preparation", 247),
    cards: [
      {
        heading: "APPROACH MINIMUM ……… DETERMINE (PF)",
        bullets: [
          "For CAT II, CAT III approaches, always choose the lowest achievable minimum. The approach minimum is limited by: crew qualification · Airline Operating Manual requirement · aircraft technical status · airport status.",
          "For CAT III with no DH, the flight crew should enter NO in the DH field of the MCDU to avoid false “HUNDRED ABOVE” or “MINIMUM” auto callouts which would not be applicable.",
        ],
      },
      {
        heading: "ARRIVAL BRIEFING ……… PERFORM (BOTH)",
        paragraph: "For CAT II, CAT III approaches, review the following items on top of the usual briefing: task sharing and callouts · management of degraded guidance · low visibility procedures at the airport.",
      },
    ],
  },
  {
    comment: "SLIDE SOP-07.20: ILS interception",
    eyebrow: EYEBROW,
    title: "7.20 ILS: armado de APPR y captura",
    subtitle: "Approach using LOC G/S Guidance · Initial/Intermediate",
    leftPct: 52,
    leftTitle: "APPR pb ON FCU ……… PRESS (PF)",
    rightTitle: "INTERMEDIATE APPROACH — ILS",
    image: img(255),
    imageAlt: "ILS intermediate approach: APPR pressed, second AP, LOC and G/S capture",
    sourceRef: src("PRO-NOR-SOP-18-C Approach using LOC G/S Guidance - Initial/Intermediate Approach", 255),
    cards: [
      {
        heading: "APPR pb",
        bullets: [
          "This arms the LOC and G/S modes. LOC and/or G/S capture modes will engage no sooner than 3 s after being armed.",
          "Note: In NAV mode, the aircraft may leave the F-PLN to capture the LOC.",
          "ICAO defines the envelope where the quality of the G/S signal ensures a normal capture. This envelope is within 10 NM, ±8 ° of the centerline of the ILS glide path and up to 1.75 θ and down to 0.3 θ (θ = nominal glide path angle). When arming the approach well outside of the normal G/S capture envelope, a spurious G/S* engagement may occur due to a wrong G/S deviation signal.",
        ],
      },
      {
        heading: "BOTH APs ……… ENGAGE (PF)",
        bullets: [
          "Above 5 000 ft AGL, the FMA displays CAT 1",
          "Below 5 000 ft AGL, the FMA displays the correct approach capability for the intended approach.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SOP-07.21: Glide interception from above",
    eyebrow: EYEBROW,
    title: "7.21 ILS: interceptación del glide desde arriba",
    subtitle: "Approach using LOC G/S Guidance · Glide Interception from Above",
    leftPct: 52,
    leftTitle: "GLIDE INTERCEPTION FROM ABOVE",
    rightTitle: "LOC AND G/S CAPTURE",
    image: img(256),
    imageAlt: "Unwanted LOC or G/S interception and crosscheck with raw data",
    sourceRef: src("PRO-NOR-SOP-18-C Glide Interception from Above", 256),
    cards: [
      {
        heading: "General",
        paragraph:
          "The following procedure must only be applied when established on the localizer. The flight crew must react without delay to meet the stabilization criteria. In order to get the best rate of descent when cleared by ATC and below the limiting speeds, the flight crew should lower the landing gear and select flaps as required (at least CONF 2 should be selected to ensure that the aircraft speed will not increase).",
      },
      {
        heading: "If above the glideslope (PF)",
        bullets: [
          "APPR MODE ……… ARM / CHECK ARMED · LOC ……… CHECK ENGAGED",
          "FCU ALTITUDE ……… SET ABOVE A/C ALTITUDE",
          "V/S MODE ……… SELECT — Select V/S 1 500 ft/min initially. V/S in excess of 2 000 ft/min will result in the speed increasing towards VFE.",
          "When reaching VFE, the AP maintains VFE and reduces the V/S without mode reversion.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SOP-07.22: ILS final approach",
    eyebrow: EYEBROW,
    title: "7.22 ILS: aproximación final y mínimos",
    subtitle: "Approach using LOC G/S Guidance · Final Approach",
    leftPct: 50,
    leftTitle: "FINAL APPROACH (LOC G/S)",
    rightTitle: "FINAL APPROACH — ILS",
    image: img(257),
    imageAlt: "ILS final approach callouts: glide slope, LAND, minimum, one hundred and fifty",
    sourceRef: src("PRO-NOR-SOP-18-C Approach using LOC G/S Guidance - Final Approach / Management of Degraded Guidance", 257),
    cards: [
      {
        heading: "At 350 ft RA: LAND mode ……… CHECK ENGAGED/ANNOUNCE (PF)",
        paragraph: "If no LAND mode, autoland is not authorized.",
      },
      {
        heading: "For CAT I, CAT II, CAT III with DH approach",
        bullets: [
          "Below minimum, the visual references must be the primary reference until landing.",
          "If visual references are sufficient: CONTINUE ……… ANNOUNCE · AP ……… AS RQRD",
          "For CAT III without DH approach: at 100 ft (Alert Height) if no failure, CONTINUE ……… ANNOUNCE.",
        ],
      },
      {
        heading: "Early/untimely FLARE mode engagement",
        paragraph:
          "Perform a go-around (thrust levers set to TOGA), or disconnect AP, set both FDs to OFF and continue the approach using raw data or external visual references.",
      },
    ],
  },
  // ── F. FINAL APP ─────────────────────────────────────────────────────────
  {
    comment: "SLIDE SOP-07.23: FINAL APP preparation",
    eyebrow: EYEBROW,
    title: "7.23 FINAL APP: preparación",
    subtitle: "Approach using FINAL APP Guidance · Descent Preparation",
    leftPct: 52,
    leftTitle: "DESCENT PREPARATION (FINAL APP)",
    rightTitle: "INTERMEDIATE APPROACH — FINAL APP",
    image: img(259),
    imageAlt: "FINAL APP intermediate approach: APPR pressed, APP NAV and FINAL armed",
    sourceRef: src("PRO-NOR-SOP-18-C Approach using FINAL APP Guidance - Descent Preparation", 259),
    cards: [
      {
        heading: "WEATHER AND LANDING INFORMATION ……… OBTAIN (PM)",
        bullets: [
          "The FMS vertical profile does not take into account the effect of low OAT. Therefore, vertical managed guidance must not be used when the actual OAT is below the minimum temperature indicated on the approach chart or defined by the Operator, or may not be used when temperature corrections are required (FINAL APP mode may not engage).",
          "For RNAV (GNSS) approach with LNAV VNAV minima, use of QNH from a remote station is prohibited.",
        ],
      },
      {
        heading: "F-PLN A page ……… CHECK (PF-PM)",
        bullets: [
          "If a TOO STEEP PATH is displayed after the FDP, do not use FINAL APP guidance for approach. Use NAV FPA or TRK FPA for approach",
          "0.1 degree of difference between the MCDU and the charted final vertical path is acceptable",
          "1 degree of difference between the MCDU and the charted final lateral track is acceptable.",
          "3 degree of difference between the MCDU and the charted final lateral track is acceptable for conventional radio NAVAID approach.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SOP-07.24: FINAL APP engagement",
    eyebrow: EYEBROW,
    title: "7.24 FINAL APP: descenso, armado y enganche",
    subtitle: "Approach using FINAL APP Guidance · Final 1/2",
    leftPct: 50,
    leftTitle: "DESCENT · APPR pb · FINAL",
    rightTitle: "FINAL APPROACH 1/2 — FINAL APP",
    image: img(260),
    imageAlt: "FINAL APP engaged at the final descent point and go-around altitude set",
    sourceRef: src("PRO-NOR-SOP-18-C Approach using FINAL APP Guidance - Descent / Approach", 260),
    cards: [
      {
        heading: "At 10 000 ft AAL (PF)",
        bullets: [
          "NAV ACCURACY ……… CHECK — If NAV accuracy is LOW, use TRK FPA mode for approach.",
          "For RNAV(GNSS) approach: GPS PRIMARY must be available on at least one FMS.",
          "BARO REFERENCE ……… SET/CROSSCHECK (BOTH) — The vertical guidance requires a precise BARO setting. The maximum acceptable difference between altimeters is 100 ft.",
        ],
      },
      {
        heading: "Approach (PF)",
        bullets: [
          "POSITION ……… MONITOR — After a radar vectoring, consider a DIR TO RDL IN to sequence the F-PLN.",
          "APPR pb on FCU ……… PRESS — Press the APPR pb when all of the following conditions are satisfied: the aircraft is cleared for approach · TO waypoint is the FDP.",
          "FINAL ……… CHECK ARMED — Check that the V/DEV scale is displayed on the PFD. At the FDP, a blue arrow on ND indicates that FINAL APP engagement conditions are met.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SOP-07.25: FINAL APP at minimum",
    eyebrow: EYEBROW,
    title: "7.25 FINAL APP: en el mínimo",
    subtitle: "Approach using FINAL APP Guidance · Final 2/2",
    leftPct: 50,
    leftTitle: "AT ENTERED MINIMUM (FINAL APP)",
    rightTitle: "FINAL APPROACH 2/2 — FINAL APP",
    image: img(262),
    imageAlt: "FINAL APP at minimum: continue or go around, AP off, FDs off and runway track",
    sourceRef: src("PRO-NOR-SOP-18-C Approach using FINAL APP Guidance - At Entered Minimum", 262),
    cards: [
      {
        heading: "If visual references are sufficient",
        bullets: [
          "Below minimum, the visual references must be the primary references until landing.",
          "At the latest at the MAP or Minimum Use Height of the AP (whichever occurs first): AP ……… OFF (PF)",
          "FD ……… AS RQRD (PF)",
        ],
      },
    ],
    alert: {
      level: "CAUTION",
      text: "From minima down to the MAP, the FD provides an additional guidance. The FD must be switched off if the guidance is not relevant or not followed. After the MAP, disregard the FD as it reverts to HDG V/S.",
    },
  },
  {
    comment: "SLIDE SOP-07.26: FINAL APP monitoring and degraded navigation",
    eyebrow: EYEBROW,
    title: "7.26 FINAL APP: vigilancia y navegación degradada",
    subtitle: "Approach using FINAL APP Guidance · Monitoring",
    leftPct: 48,
    leftTitle: "FLIGHT PARAMETERS ……… MONITOR (PM)",
    rightTitle: "MANAGEMENT OF DEGRADED NAVIGATION",
    sourceRef: fcom("PRO-NOR-SOP-18-C Approach using FINAL APP Guidance - Flight Parameters / Management of Degraded Navigation"),
    cards: [
      {
        heading: "At the Final Descent Point",
        bullets: [
          "Monitor XTK error on ND",
          "Monitor V/DEV on PFD",
          "Check altitude crossing at FAF and waypoints of the final approach, as published on the chart",
          "If approaching on a conventional radio NAVAID procedure, monitor the lateral and vertical guidance using raw data",
          "The PM calls out if excessive deviation occurs: XTK > 0.1 NM · V/DEV > ½ dot. On the vertical scale, one dot corresponds to 100 ft. Therefore ½ dot is 50 ft.",
        ],
      },
    ],
    rightCards: [
      {
        heading: "VOR and NDB approaches",
        paragraph: "Be prepared to continue the approach with reference to appropriate raw data by reverting to NAV-FPA, if the vertical guidance is not satisfactory, or TRK-FPA, if the lateral guidance is not satisfactory.",
      },
      {
        heading: "RNAV(GNSS) approaches (LNAV and LNAV/VNAV minima)",
        bullets: [
          "Use the appropriate remaining AP/FD in the following cases: GPS PRIMARY LOST on one ND · NAV ACCUR DOWNGRAD on one ND.",
          "For LNAV minima: be prepared to continue the approach by reverting to NAV-FPA, if the vertical guidance is not satisfactory.",
          "Discontinue the approach in the following cases, if external visual references are not sufficient to proceed visually: GPS PRIMARY LOST on both NDs · XTK > 0.3 NM · NAV FM/GPS POS DISAGREE · NAV ACCUR DOWNGRAD on both NDs.",
          "For LNAV/VNAV minima: Discontinue the approach in the case of deviation of 75 ft below the vertical path (V/DEV > ¾ dot).",
        ],
      },
    ],
  },
];

export const MCC_SOP_07: MccLesson = {
  id: "a3200000-0000-0000-0000-000000000107",
  course_id: MCC_COURSE_ID,
  title: "SOP-07. Aproximación 2D y 3D: ILS, FINAL APP y guiado FPA",
  slug: "sop-07-aproximacion-2d-3d",
  sequence_order: 7,
  lesson_order: 7,
  min_seconds: mccMinSeconds(SOP_07_SLIDES.length, mccVideoSeconds(SOP_07_SLIDES)),
  module_title: MCC_MODULES.NORMAL_SOP,
  content_html: joinSlides(SOP_07_SLIDES),
};

export const SOP_07_SLIDE_COUNT = SOP_07_SLIDES.length;
