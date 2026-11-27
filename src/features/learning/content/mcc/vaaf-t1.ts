/**
 * VAAF-T1 — Limitaciones del A320 (FCOM LIM) (0,75 h aprox.).
 *
 * Alcance: Curso APS MCC — Airbus A320ceo CFM56-5B (simulador Entrol A32).
 * Fuente: FCOM 23MAR26 Limitations (LIM-AG, AIR, AFS, APU, ENG, F_CTL, FUEL, ICE_RAIN, LG, NAV, OXY, SURV), solo
 * bloques del grupo EC-ILQ o ALL. La variante de cada figura nueva se ha comprobado con `scratch/fcom_fig_applic.py`
 * (la envolvente ambiental es la del grupo EC-ILQ). El resto de figuras se reutilizan de SIS-01…06.
 * Sin equipos opcionales: sin GLS/MLS, HUD, despegue con derate, ventiladores de frenos, repelente de lluvia ni QFE.
 * Performance (Performance Manual) y planificación (cartas IFR y CFP) van en la lección siguiente.
 */
import { MCC_MODULES, joinSlides, mccMinSeconds, mccVideoSeconds, type MccLesson, type MccSlideSpec } from "./slide-builder.ts";

const MCC_COURSE_ID = "a3200000-0000-0000-0000-000000000320";
const IMG_BASE = "https://www.blueteam.es/elearning/media/mcc/pdp";
const EYEBROW = "APS MCC · A320 · VAAF-T1";

/** Versión común de caché de las figuras FCOM nuevas de esta lección. */
const IMG_VERSION = 1795639000;
const fig = (name: string) => `${IMG_BASE}/fcom_a320_vaaf1_${name}.webp?v=${IMG_VERSION}`;
/** Figuras ya publicadas en SIS-01…06 (misma URL y versión que en su lección). */
const sisFig = (name: string, version: number) => `${IMG_BASE}/fcom_a320_${name}.webp?v=${version}`;
const SIS1 = 1795630000;
const SIS2 = 1795631000;
const SIS3 = 1795635000;
const SIS4 = 1795636000;
const SIS5 = 1795637000;
const SIS6 = 1795638000;
const src = (sections: string) => `Source: FCOM A320 ${sections}`;

const VAAF_T1_SLIDES: MccSlideSpec[] = [
  // ── A. Aircraft general ─────────────────────────────────────────────────
  {
    comment: "SLIDE VAAF-T1.1: Load factors and environmental envelope",
    eyebrow: EYEBROW,
    title: "1.1 Factores de carga y envolvente ambiental",
    subtitle: "LIM-AG · Flight Maneuvering Load Acceleration Limits · Environmental Envelope",
    leftPct: 48,
    leftTitle: "LOAD ACCELERATION · ENVELOPE (LIM-AG)",
    rightTitle: "ENVIRONMENTAL ENVELOPE",
    image: fig("env"),
    imageAlt: "Environmental envelope: pressure altitude versus OAT, maximum 39 800 ft, takeoff and landing between -1 000 ft and 9 200 ft",
    sourceRef: src("LIM-AG-F_CTL / LIM-AG-OPS Environmental Envelope, Airport Operations / LIM-F_CTL"),
    cards: [
      {
        heading: "Flight maneuvering load acceleration limits",
        bullets: ["Clean configuration: -1 g to +2.5 g.", "Other configurations: 0 g to +2 g."],
      },
      {
        heading: "Airport operations and flight controls",
        bullets: [
          "Runway slope (mean): ±2 %.",
          "Maximum operating altitude with slats and/or flaps extended: 20 000 ft.",
        ],
      },
    ],
    alert: {
      level: "CAUTION",
      text: "Rapid and large alternating control inputs, especially in combination with large changes in pitch, roll or yaw (e.g. large sideslip angles) may result in structural failures at any speed.",
    },
  },
  {
    comment: "SLIDE VAAF-T1.2: Runway width and wind limitations",
    eyebrow: EYEBROW,
    title: "1.2 Anchura de pista y límites de viento",
    subtitle: "LIM-AG-OPS · Airport Operations and Wind Limitations",
    leftPct: 55,
    leftTitle: "AIRPORT OPERATIONS AND WIND LIMITATIONS",
    rightTitle: "ENVIRONMENTAL ENVELOPE",
    image: fig("env"),
    imageAlt: "Environmental envelope of the aircraft",
    sourceRef: src("LIM-AG-OPS Airport Operations and Wind Limitations"),
    cards: [
      {
        heading: "Runway width and wind",
        bullets: [
          "Nominal runway width: 45 m. Minimal runway width: 30 m.",
          "Maximum demonstrated crosswind (takeoff and landing): 38 kt (gust included).",
          "Maximum tailwind for takeoff: 10 kt. Maximum tailwind for landing: 10 kt.",
        ],
      },
      {
        heading: "Passenger and cargo doors operation",
        bullets: [
          "The maximum wind for passenger door operation is 65 kt.",
          "The maximum wind for FWD and AFT cargo door operation is 40 kt (or 50 kt, if the aircraft nose is into the wind, or if the FWD and AFT cargo doors are on the leeward side).",
          "The FWD and AFT cargo doors must be closed before the wind speed exceeds 65 kt.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "The maximum demonstrated crosswind value is not an AFM limitation: it is the maximum crosswind condition experienced during the aircraft certification campaign. Airbus recommends that operators should not intentionally operate in crosswinds that exceed this value.",
    },
  },
  {
    comment: "SLIDE VAAF-T1.3: Maximum recommended crosswind on wet and contaminated runways",
    eyebrow: EYEBROW,
    title: "1.3 Viento cruzado en pistas mojadas y contaminadas",
    subtitle: "LIM-AG-OPS · Maximum Recommended Crosswind",
    leftPct: 60,
    leftTitle: "MAXIMUM RECOMMENDED CROSSWIND (GUST INCLUDED)",
    rightTitle: "ENVIRONMENTAL ENVELOPE",
    image: fig("env"),
    imageAlt: "Environmental envelope of the aircraft",
    sourceRef: src("LIM-AG-OPS Maximum Recommended Crosswind on Wet and Contaminated Runways"),
    cards: [],
    table: {
      headers: ["Runway state / contaminant", "AIREP", "RWYCC", "Takeoff", "Landing"],
      rows: [
        ["Damp; Wet up to 3 mm of water; Slush, Dry snow or Wet snow up to 3 mm; Frost", "Good", "5", "38 kt", "38 kt"],
        ["Compacted snow, OAT at or below -15 °C", "Good to Medium", "4", "29 kt", "29 kt"],
        ["Dry snow (3–100 mm); Wet snow (3–30 mm); Compacted snow, OAT above -15 °C; Dry or wet snow over compacted snow; Slippery wet", "Medium", "3", "25 kt", "25 kt"],
        ["Standing water or Slush, more than 3 mm up to 13 mm", "Medium to Poor", "2", "20 kt", "20 kt"],
        ["Ice (cold & dry)", "Poor", "1", "15 kt", "15 kt"],
      ],
    },
    alert: {
      level: "NOTE",
      text: "The maximum crosswind values given in the above table are recommended values based on computations.",
    },
  },
  {
    comment: "SLIDE VAAF-T1.4: Maximum speeds",
    eyebrow: EYEBROW,
    title: "1.4 Velocidades máximas",
    subtitle: "LIM-AG-SPD · Speeds",
    leftPct: 58,
    leftTitle: "MAXIMUM SPEEDS (LIM-AG-SPD)",
    rightTitle: "VMO / MMO",
    image: fig("speeds"),
    imageAlt: "VMO/MMO diagram: VMO 350 kt up to the crossover altitude, then MMO 0.82",
    sourceRef: src("LIM-AG-SPD Maximum Flaps/Slats Speeds, VMO/MMO, Landing Gear Extended, Tire Speed, Cockpit Window, Wipers"),
    cards: [
      {
        heading: "VMO/MMO and landing gear",
        bullets: [
          "VMO: 350 kt. MMO: M 0.82.",
          "Maximum speed with the landing gear extended (VLE): 280 kt / M 0.67.",
          "Maximum speed at which the landing gear may be extended (VLO extension): 250 kt / M 0.60; retracted (VLO retraction): 220 kt / M 0.54.",
          "Maximum ground speed (tire): 195 kt. Cockpit window open: 200 kt. Wipers: 230 kt.",
        ],
      },
    ],
    table: {
      headers: ["Flaps lever", "Slat/Flap display", "Max speed", "Flight phase"],
      rows: [
        ["0", "", "VMO/MMO", "CRUISE"],
        ["1", "1", "230 kt", "HOLDING"],
        ["1", "1 + F", "215 kt", "TAKEOFF"],
        ["2", "2", "200 kt", "TAKEOFF/APPROACH"],
        ["3", "3", "185 kt", "TAKEOFF/APPROACH/LANDING"],
        ["FULL", "FULL", "177 kt", "LANDING"],
      ],
    },
  },
  {
    comment: "SLIDE VAAF-T1.5: Minimum control speeds and taxi",
    eyebrow: EYEBROW,
    title: "1.5 Velocidades mínimas de control y rodaje",
    subtitle: "LIM-AG-SPD · LIM-LG",
    leftPct: 55,
    leftTitle: "MINIMUM CONTROL SPEEDS · TAXI",
    rightTitle: "PFD AIRSPEED SCALE",
    image: sisFig("sis_pfd_airspeed", SIS1),
    imageAlt: "PFD airspeed scale with speed limits",
    sourceRef: src("LIM-AG-SPD Minimum Control Speeds, Narrow Runways, Taxi Speed / LIM-LG Taxi with Deflated or Damaged Tires"),
    cards: [
      {
        heading: "Minimum control speeds",
        bullets: [
          "Minimum control speed for landing (VMCL): 113 kt.",
          "For runways with a width below 40 m, the VMCG must be increased: 30 m: + 2.5 kt; 35 m: + 1.5 kt; 40 m: + 0 kt.",
        ],
      },
      {
        heading: "Taxi",
        bullets: [
          "When the takeoff weight is higher than 76 000 kg: do not exceed a taxi speed of 20 kt during a turn.",
          "With maximum one tire per gear deflated: maximum taxi speed during turn 7 kt. With two tires deflated on the same main gear: maximum taxi speed 3 kt. Maximum NWS angle: 30 °.",
          "If tire damage is suspected, the flight crew must ask for an aircraft inspection prior to vacate the runway or taxi.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE VAAF-T1.6: Weight limitations",
    eyebrow: EYEBROW,
    title: "1.6 Limitaciones de peso",
    subtitle: "LIM-AG-WGHT · Weights",
    leftPct: 52,
    leftTitle: "WEIGHT LIMITATIONS (LIM-AG-WGHT)",
    rightTitle: "INIT B · ZFW / BLOCK",
    image: sisFig("sis6_init_b", SIS6),
    imageAlt: "MCDU INIT B page where ZFW, ZFWCG and block fuel are entered",
    sourceRef: src("LIM-AG-WGHT Weight Limitations"),
    cards: [
      {
        heading: "Weight limitations",
        bullets: [
          "Maximum taxi weight: 73 900 kg.",
          "Maximum takeoff weight (brake release): 73 500 kg.",
          "Maximum landing weight: 64 500 kg.",
          "Maximum zero fuel weight: 61 000 kg.",
          "Minimum weight: 37 230 kg.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "In exceptional cases (in flight turn back or diversion), an immediate landing at weight above maximum landing weight is permitted, provided the pilot follows the overweight landing procedure.",
    },
  },

  // ── B. Sistemas ─────────────────────────────────────────────────────────
  {
    comment: "SLIDE VAAF-T1.7: Air bleed, conditioning and pressurization",
    eyebrow: EYEBROW,
    title: "1.7 Aire, acondicionamiento y presurización",
    subtitle: "LIM-AIR · Air Bleed/Cond/Press/Vent",
    leftPct: 52,
    leftTitle: "AIR BLEED/COND/PRESS/VENT (LIM-AIR)",
    rightTitle: "CABIN PRESSURE",
    image: fig("cab_press"),
    imageAlt: "Cabin pressure diagram: normal operating range, maximum positive and negative differential pressure, cabin altitude warning",
    sourceRef: src("LIM-AIR General, APU Bleed Use with HP Air Start Unit, Avionics Ventilation, Cabin Pressure, Packs Use with LP Unit"),
    cards: [
      {
        heading: "Cabin pressure",
        bullets: [
          "Maximum positive differential pressure: 9.0 PSI. Maximum negative differential pressure: -1.0 PSI.",
          "Safety relief valve setting: 8.6 PSI.",
        ],
      },
      {
        heading: "Ground operation",
        bullets: [
          "With passengers on board, it is not recommended to exceed 20 min without air conditioning supply.",
          "The flight crew must not use bleed air from the APU BLEED and from the HP Air Start Unit at the same time; nor conditioned air from the packs and from the LP Air Conditioning Unit at the same time.",
          "Aircraft electric power supply on ground (normal avionics ventilation): OAT ≤ 49 °C no limitation; up to 55 °C 2 h; up to 60 °C 1 h; up to 64 °C 0.5 h.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE VAAF-T1.8: Autopilot minimum use heights",
    eyebrow: EYEBROW,
    title: "1.8 Piloto automático: alturas mínimas de uso",
    subtitle: "LIM-AFS-10 · Autopilot Function",
    leftPct: 58,
    leftTitle: "THE AUTOPILOT CAN BE USED WITH THE FOLLOWING MINIMUM VALUES",
    rightTitle: "THRUST LEVERS AND A/THR",
    image: sisFig("sis5_athr_levers", SIS5),
    imageAlt: "Thrust levers and A/THR operating range",
    sourceRef: src("LIM-AFS-10 Autopilot Function"),
    cards: [],
    table: {
      headers: ["Phase", "Minimum"],
      rows: [
        ["At takeoff", "100 ft AGL and at least 5 s after liftoff"],
        ["In approach with F-G/S mode", "200 ft AGL"],
        ["In approach with FINAL APP, V/S or FPA mode", "250 ft AGL"],
        ["In circling approach", "500 ft AGL for aircraft category C (600 ft AGL for category D)"],
        ["ILS approach when CAT1 is displayed on the FMA", "160 ft AGL"],
        ["ILS approach when CAT2 or CAT3 SINGLE or CAT3 DUAL is displayed on the FMA", "0 ft AGL if autoland"],
        ["After a manual go-around", "100 ft AGL"],
        ["In all other phases", "900 ft AGL"],
      ],
    },
    alert: {
      level: "NOTE",
      text: "The AP or FD in OP DES or DES mode can be used in approach. However, its use is only permitted if the FCU selected altitude is set to, or above, the higher of the two: MDA/MDH or 900 ft AGL.",
    },
  },
  {
    comment: "SLIDE VAAF-T1.9: Flight management function and use of NAV mode",
    eyebrow: EYEBROW,
    title: "1.9 FMS, precisión de navegación y uso del modo NAV",
    subtitle: "LIM-AFS-10 · Flight Management Function · Use of NAV Mode",
    leftPct: 55,
    leftTitle: "FLIGHT MANAGEMENT FUNCTION · NAV MODE",
    rightTitle: "PROG · GPS PRIMARY",
    image: sisFig("sis6_prog", SIS6),
    imageAlt: "MCDU PROG page with GPS PRIMARY and required and estimated accuracy",
    sourceRef: src("LIM-AFS-10-20 Flight Management Function, Navigation Performance / LIM-AFS-10-30 Use of NAV Mode"),
    cards: [
      {
        heading: "Flight management function",
        bullets: [
          "FMGS lateral and vertical navigation is certified for: after takeoff, en route, and terminal area operations; navigation within RNAV/RNP airspace; instrument approach procedures (except ILS, LOC, LOC B/C, LDA, SDF final approaches); missed approach procedures.",
          "Obstacle clearance and adherence to airspace constraints remains a flight crew responsibility. Fuel, time predictions/performance information is provided for advisory purposes only.",
          "If GPS PRIMARY LOST is displayed, the navigation accuracy remains sufficient for RNP operations provided that the RNP value is checked or entered on the MCDU and HIGH ACCURACY is displayed.",
        ],
      },
      {
        heading: "Use of NAV mode",
        bullets: [
          "After takeoff: provided that GPS PRIMARY is available, or the flight crew checked the FMGS takeoff updating.",
          "In terminal area: GPS PRIMARY available, or the appropriate RNP checked or entered with HIGH accuracy, or FMS navigation crosschecked with navaid raw data.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE VAAF-T1.10: Navaid and RNAV approaches",
    eyebrow: EYEBROW,
    title: "1.10 Aproximaciones radioeléctricas y RNAV",
    subtitle: "LIM-AFS-10 · Use of NAV Mode · Navigation Database Validation",
    leftPct: 55,
    leftTitle: "APPROACHES IN NAV, APP NAV OR FINAL APP",
    rightTitle: "RADIO NAV",
    image: sisFig("sis6_rad_nav", SIS6),
    imageAlt: "MCDU RADIO NAV page with VOR and ILS tuning",
    sourceRef: src("LIM-AFS-10-30 Approach Based on Radio Navaids, RNAV Approach / LIM-AFS-10-40 Navigation Database Validation"),
    cards: [
      {
        heading: "Approach based on radio navaids",
        bullets: [
          "A navaids approach may be performed in NAV, APP NAV or FINAL APP, with AP or FD engaged.",
          "If GPS PRIMARY is not available, the reference navaid and the corresponding airborne radio equipment must be serviceable, tuned and monitored during the approach.",
        ],
      },
      {
        heading: "RNAV approach",
        bullets: [
          "An RNAV(GNSS) approach may be performed provided that GPS PRIMARY is available.",
          "An RNAV(RNP) approach may be performed, with GPS PRIMARY not available, only if the radio navaid coverage supports the RNP value and HIGH accuracy is displayed on the MCDU with the specified RNP, and an operational approval is obtained.",
          "The approach stored in the Navigation database must be produced by an approved supplier compliant with ED76/DO200A or DAT Type 2 requirements, or validated and approved by the Operator.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE VAAF-T1.11: CAT II and CAT III",
    eyebrow: EYEBROW,
    title: "1.11 Aproximaciones CAT II y CAT III",
    subtitle: "LIM-AFS-20 · Automatic Approach, Landing and Rollout",
    leftPct: 58,
    leftTitle: "ILS CAT II · CAT III (LIM-AFS-20)",
    rightTitle: "PERF APPR · DH",
    image: sisFig("sis6_perf_appr", SIS6),
    imageAlt: "MCDU PERF APPR page with DH field",
    sourceRef: src("LIM-AFS-20 ILS Category II, Category III Fail Passive, Category III Fail Operational, Engine-Out"),
    cards: [
      {
        heading: "Requirements",
        bullets: [
          "CAT II: at least one autopilot must be engaged in APPR mode, and CAT 2 or CAT 3 SINGLE or CAT 3 DUAL must be displayed on the FMA. For manual landing, AP should be disconnected no later than 80 ft AGL.",
          "CAT III fail passive: A/THR must be used in selected or managed speed. At least one autopilot engaged in APPR mode, and CAT 3 SINGLE or CAT 3 DUAL displayed on the FMA.",
          "CAT III fail operational: both autopilots must be engaged in APPR mode, and CAT 3 DUAL must be displayed on the FMA.",
        ],
      },
    ],
    table: {
      headers: ["Category", "Limit"],
      rows: [
        ["ILS CAT II", "Minimum decision height 100 ft"],
        ["ILS CAT III fail passive (SINGLE)", "Minimum decision height 50 ft"],
        ["ILS CAT III fail operational (DUAL)", "Alert height 100 ft · with DH: minimum DH 20 ft · without DH: minimum RVR 75 m"],
      ],
    },
    alert: {
      level: "NOTE",
      text: "Engine-out: CAT II and CAT III fail passive autoland are only approved in configuration FULL, and if engine-out procedures are completed before reaching 1 000 ft in approach.",
    },
  },
  {
    comment: "SLIDE VAAF-T1.12: Automatic landing",
    eyebrow: EYEBROW,
    title: "1.12 Aterrizaje automático: viento y condiciones",
    subtitle: "LIM-AFS-20 · Maximum Wind Conditions · Automatic Landing",
    leftPct: 55,
    leftTitle: "AUTOMATIC LANDING (LIM-AFS-20)",
    rightTitle: "PERF APPR",
    image: sisFig("sis6_perf_appr", SIS6),
    imageAlt: "MCDU PERF APPR page with landing configuration CONF 3 or FULL",
    sourceRef: src("LIM-AFS-20 Maximum Wind Conditions for CAT II or CAT III / LIM-AFS-20-10 Automatic Landing"),
    cards: [
      {
        heading: "Maximum wind conditions",
        bullets: ["Headwind: 30 kt. Tailwind: 10 kt. Crosswind: 20 kt."],
      },
      {
        heading: "Automatic landing",
        bullets: [
          "ILS CAT II and CAT III autoland are approved in CONF 3 and CONF FULL.",
          "Automatic landing is demonstrated with a glide slope angle between -2.5 ° and -3.15 °, with an airport elevation at or below 2 500 ft, and with aircraft weight below the maximum landing weight.",
          "Automatic landing is not allowed below -1 000 ft pressure altitude.",
          "Automatic rollout performance is approved on dry and wet runways, but performance on contaminated runways was not demonstrated.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "Wind limitation is based on the surface wind reported by ATC. If the tower reports a surface wind beyond limitations, only CAT I automatic approach without autoland can be performed.",
    },
  },
  {
    comment: "SLIDE VAAF-T1.13: APU limitations",
    eyebrow: EYEBROW,
    title: "1.13 APU",
    subtitle: "LIM-APU · Auxiliary Power Unit",
    leftPct: 50,
    leftTitle: "AUXILIARY POWER UNIT (LIM-APU)",
    rightTitle: "APU OPERATIONAL ENVELOPE",
    image: fig("apu_env"),
    imageAlt: "APU operational envelope: pressure altitude versus ambient temperature, electrical power only and bleed air areas",
    sourceRef: src("LIM-APU-10 / LIM-APU APU Start/Shutdown during Refueling / LIM-APU-20 Operational Envelope"),
    cards: [
      {
        heading: "APU limitations",
        bullets: [
          "After three consecutive APU start attempts, the flight crew must wait 60 min before a new start attempt.",
          "Maximum N speed: 107 %. Maximum EGT for APU start: 1 090 °C below 35 000 ft, 1 120 °C above. Maximum EGT for APU running: 675 °C.",
          "Max altitude to assist engine start: 20 000 ft. Air conditioning and pressurization: 22 500 ft single pack, 15 000 ft dual pack.",
          "Use of APU bleed air for wing anti-ice is not permitted.",
          "During refuel/defuel: if the APU failed to start or following an automatic APU shutdown, do not start the APU; if a fuel spill occurs, perform a normal APU shutdown.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE VAAF-T1.14: Engine thrust setting, EGT and shaft speeds",
    eyebrow: EYEBROW,
    title: "1.14 Motores: EGT, N1, N2 y arranque",
    subtitle: "LIM-ENG · Engines",
    leftPct: 55,
    leftTitle: "THRUST SETTING/EGT LIMITS · STARTER (LIM-ENG)",
    rightTitle: "ENGINE/WARNING DISPLAY",
    image: `${IMG_BASE}/fcom_a320_ewd_cfm.webp`,
    imageAlt: "Engine/Warning display with N1, EGT, N2 and fuel flow indications",
    sourceRef: src("LIM-ENG Thrust Setting/EGT Limits, Shaft Speeds, Starter"),
    cards: [
      {
        heading: "Starter",
        bullets: [
          "A standard automatic start that includes up to three start attempts, is considered one cycle.",
          "For ground starts (automatic or manual), a 20 s pause is required between successive cycles. A 15 min cooling period is required, subsequent to four failed cycles.",
          "The starter must not be run when N2 is above 20 %.",
        ],
      },
    ],
    table: {
      headers: ["Operating conditions", "Time limit", "EGT limit"],
      rows: [
        ["Takeoff and go-around (TOGA, FLEX), all engines operative", "5 min", "950 °C"],
        ["Takeoff and go-around, one engine inoperative", "10 min", "950 °C"],
        ["Maximum Continuous Thrust (MCT)", "Not limited", "915 °C"],
        ["Starting (on ground and in flight)", "—", "725 °C"],
        ["Shaft speeds", "Maximum N1 104 %", "Maximum N2 105 %"],
      ],
    },
  },
  {
    comment: "SLIDE VAAF-T1.15: Engine oil and reverse thrust",
    eyebrow: EYEBROW,
    title: "1.15 Motores: aceite y reversa",
    subtitle: "LIM-ENG · Oil · Reverse Thrust",
    leftPct: 50,
    leftTitle: "OIL · REVERSE THRUST (LIM-ENG)",
    rightTitle: "MIN/MAX OIL PRESSURE",
    image: fig("oil_press"),
    imageAlt: "Oil pressure versus N2: normal operating range, minimum oil pressure 13 PSI and maintenance area",
    sourceRef: src("LIM-ENG Oil, Reverse Thrust"),
    cards: [
      {
        heading: "Oil temperature",
        bullets: [
          "Maximum continuous temperature: 140 °C. Maximum transient temperature (15 min): 155 °C.",
          "Minimum starting temperature: -40 °C. Minimum temperature before takeoff: -10 °C.",
          "Minimum oil quantity: 9.5 qt + estimated consumption. Average estimated consumption = 0.5 qt/h.",
        ],
      },
      {
        heading: "Reverse thrust",
        bullets: [
          "Selection of the reverse thrust is prohibited in flight.",
          "Backing the aircraft with reverse thrust is not permitted.",
          "Maximum reverse should not be used below 70 kt. Idle reverse is permitted down to aircraft stop.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE VAAF-T1.16: Reduced thrust takeoff (FLEX)",
    eyebrow: EYEBROW,
    title: "1.16 Despegue con empuje reducido (FLEX)",
    subtitle: "LIM-ENG-10 · Reduced Thrust Takeoff",
    leftPct: 52,
    leftTitle: "REDUCED THRUST TAKEOFF (LIM-ENG-10)",
    rightTitle: "THRUST LEVERS",
    image: sisFig("sis5_thrust_levers", SIS5),
    imageAlt: "Thrust lever sector with TO/GA, FLX/MCT, CL and IDLE positions",
    sourceRef: src("LIM-ENG-10 Reduced Thrust Takeoff"),
    cards: [
      {
        heading: "FLEX takeoff",
        bullets: [
          "Takeoff at reduced thrust, so-called as FLEX takeoff, is permitted only if the airplane meets all performance requirements at the takeoff weight, with the operating engines at the thrust available for the flexible temperature (TFLEX).",
          "Takeoff at reduced thrust is permitted with any inoperative item affecting the performance only if the associated performance shortfall has been applied to meet the above requirements.",
          "TFLEX cannot be: higher than TMAXFLEX, equal to ISA + 53 °C; lower than the flat temperature (TREF); lower than the actual OAT.",
        ],
      },
    ],
    alert: { level: "CAUTION", text: "FLEX takeoff is not permitted on contaminated runways." },
  },
  {
    comment: "SLIDE VAAF-T1.17: Fuel limitations",
    eyebrow: EYEBROW,
    title: "1.17 Combustible",
    subtitle: "LIM-FUEL · Fuel",
    leftPct: 58,
    leftTitle: "FUEL (LIM-FUEL)",
    rightTitle: "FUEL TANKS",
    image: sisFig("sis_fuel_tanks", SIS2),
    imageAlt: "Fuel tanks: outer, inner and center tanks",
    sourceRef: src("LIM-FUEL Certified Fuel, Fuel Temperature, Maximum Allowed Fuel Imbalance, Minimum Fuel Quantity for Takeoff"),
    cards: [
      {
        heading: "Fuel temperature and minimum fuel",
        bullets: [
          "If the wing fuel temperature exceeds 30 °C at engine start, the altitude must be limited to 35 000 ft until the center tank is empty (40 °C: 30 000 ft; 49 °C: 25 000 ft).",
          "Minimum fuel quantity for takeoff: 1 500 kg. The ECAM alerts related to fuel low level in the wing tanks must not appear for takeoff.",
        ],
      },
    ],
    table: {
      headers: ["Maximum wing imbalance", "Heavier tank quantity: maximum asymmetry"],
      rows: [
        ["Takeoff · inner tanks (outer tanks balanced)", "Full: 500 kg · 3 000 kg: 1 050 kg · 1 450 kg: 1 450 kg"],
        ["In flight and at landing · inner tanks", "Full: 1 500 kg · 4 300 kg: 1 600 kg · 2 250 kg: 2 250 kg"],
        ["Outer tanks (inner tanks balanced)", "Takeoff: 370 kg · In flight and at landing: 690 kg"],
      ],
    },
    alert: {
      level: "NOTE",
      text: "The variation is linear between these values, and in flight there is no limitation below 2 250 kg. In exceptional conditions (i.e. fuel system failure), these values may be exceeded without significant effect to the aircraft handling qualities.",
    },
  },
  {
    comment: "SLIDE VAAF-T1.18: Ice, landing gear and brakes",
    eyebrow: EYEBROW,
    title: "1.18 Hielo, tren y frenos",
    subtitle: "LIM-ICE_RAIN · LIM-LG",
    leftPct: 55,
    leftTitle: "ICE AND RAIN · LANDING GEAR",
    rightTitle: "WING ANTI-ICE",
    image: sisFig("sis3_wing_aice", SIS3),
    imageAlt: "Wing anti-ice system",
    sourceRef: src("LIM-ICE_RAIN Definition of Icing Conditions, Severe Ice Accretion / LIM-LG Braking System, Brake Temperature"),
    cards: [
      {
        heading: "Icing conditions",
        bullets: [
          "Icing conditions exist when the OAT (on ground or after takeoff) or the TAT (in flight) is at or below 10 °C and visible moisture in any form is present (such as clouds, fog with visibility of 1 600 m or less, rain, snow, sleet or ice crystals).",
          "Icing conditions also exist when the OAT on the ground and for takeoff is at or below 10 °C and operating on ramps, taxiways or runways where surface snow, standing water or slush may be ingested by the engines, or freeze on engines, nacelles or engine sensor probes.",
          "Ice accretion is considered severe when the ice accumulation on the airframe reaches approximately 5 mm (0.2 in) thick or more.",
        ],
      },
      {
        heading: "Brakes",
        bullets: [
          "Maximum brake temperature for takeoff: 300 °C.",
          "The braking system is not designed to hold the aircraft in a stationary position when a high thrust level is applied on at least one engine.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE VAAF-T1.19: Navigation, oxygen and surveillance",
    eyebrow: EYEBROW,
    title: "1.19 Navegación, oxígeno y vigilancia",
    subtitle: "LIM-NAV · LIM-OXY · LIM-SURV",
    leftPct: 55,
    leftTitle: "IRS · OXYGEN · TERRAIN DISPLAY",
    rightTitle: "ADIRS",
    image: sisFig("sis5_adirs", SIS5),
    imageAlt: "ADIRS architecture",
    sourceRef: src("LIM-NAV Inertial Reference System / LIM-OXY Minimum Flight Crew Oxygen Pressure / LIM-SURV GPWS / Predictive GPWS"),
    cards: [
      {
        heading: "Inertial reference system",
        bullets: [
          "Ground alignment of the IRS is possible in latitudes between 82 ° North and 82 ° South.",
          "In NAV mode, the IR will not provide valid magnetic heading and magnetic track angle north of 73 ° North between 90 ° West and 120 ° West, north of 82 ° North, and south of 60 ° South. Flying at latitudes beyond these limits is prohibited.",
        ],
      },
      {
        heading: "Oxygen and terrain display",
        bullets: [
          "The minimum flight crew oxygen bottle pressure covers, among others, protection against smoke with 100 % oxygen for all flight crewmembers and observers during 15 min at 8 000 ft cabin altitude.",
          "Aircraft navigation must not be based on the use of the terrain display. It is intended to serve as a situation awareness tool only.",
        ],
      },
    ],
  },
];

export const MCC_VAAF_T1: MccLesson = {
  id: "a3200000-0000-0000-0000-000000000401",
  course_id: MCC_COURSE_ID,
  title: "VAAF-T1. Limitaciones del A320 (FCOM LIM)",
  slug: "vaaf-t1-limitaciones-a320",
  sequence_order: 24,
  lesson_order: 24,
  min_seconds: mccMinSeconds(VAAF_T1_SLIDES.length, mccVideoSeconds(VAAF_T1_SLIDES)),
  module_title: MCC_MODULES.VAAF,
  content_html: joinSlides(VAAF_T1_SLIDES),
};

export const VAAF_T1_SLIDE_COUNT = VAAF_T1_SLIDES.length;
