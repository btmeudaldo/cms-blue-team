/**
 * SIS-03 — Neumático, aire acondicionado, presurización, APU, fuego, hielo y lluvia (0,75 h aprox.).
 *
 * Alcance: Curso APS MCC — Airbus A320ceo CFM56-5B (simulador Entrol A32).
 * Sustituye a CTA-3. Fuentes: FCOM 23MAR26 DSC-36 (Pneumatic), DSC-21 (Air Cond/Press), DSC-49 (APU),
 * DSC-26 (Fire Protection) y DSC-30 (Ice and Rain Protection), solo bloques aplicables a la variante de
 * referencia (grupo EC-ILQ) o ALL. La variante de cada figura se ha comprobado con `scratch/fcom_fig_applic.py`.
 * Sin equipos opcionales en el texto (calefacción de bodegas, FTIS, ACSC, RPCU, rain repellent, barrido
 * intermitente, aislamiento de ventilación de bodega).
 * Sin repetir: el arranque del APU en las SOP y los procedimientos de fuego/humo de SOP-12/13.
 */
import { MCC_MODULES, joinSlides, mccMinSeconds, mccVideoSeconds, type MccLesson, type MccSlideSpec } from "./slide-builder.ts";

const MCC_COURSE_ID = "a3200000-0000-0000-0000-000000000320";
const IMG_BASE = "https://www.blueteam.es/elearning/media/mcc/pdp";
const EYEBROW = "APS MCC · A320 · SIS-03";

/** Versión común de caché de las figuras FCOM de esta lección. */
const IMG_VERSION = 1795635000;
const fig = (name: string) => `${IMG_BASE}/fcom_a320_sis3_${name}.webp?v=${IMG_VERSION}`;
const src = (sections: string) => `Source: FCOM A320 ${sections}`;

const SIS_03_SLIDES: MccSlideSpec[] = [
  // ── A. Neumático (ATA 36) ────────────────────────────────────────────────
  {
    comment: "SLIDE SIS-03.1: Pneumatic system general",
    eyebrow: EYEBROW,
    title: "3.1 Sistema neumático: fuentes y usuarios",
    subtitle: "ATA 36 · Pneumatic",
    leftPct: 50,
    leftTitle: "GENERAL (DSC-36-10-10)",
    rightTitle: "ENGINE BLEED SYSTEM ARCHITECTURE",
    image: fig("bleed_general"),
    imageAlt: "Engine bleed system: IP and HP ports, bleed valve, precooler, crossbleed valve, APU bleed valve and users",
    sourceRef: src("DSC-36-10-10 General / DSC-36-10-20 Engine Bleed System"),
    cards: [
      {
        heading: "The pneumatic system supplies high-pressure air for",
        paragraph: "Air conditioning · Engine starting · Wing anti-icing · Water pressurization · Hydraulic reservoir pressurization.",
      },
      {
        heading: "High-pressure air has three sources",
        bullets: [
          "Engine bleed systems · APU load compressor · HP ground connection",
          "A crossbleed duct interconnects the engine bleed systems and receives air from the APU and ground sources when appropriate.",
          "Two Bleed Monitoring Computers (BMC1 and BMC2), the overhead control panel, and the ECAM control and monitor the operation of the pneumatic system.",
          "If one BMC fails, the other one takes over most of the monitoring functions.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SIS-03.2: Engine bleed — air selection, pressure and temperature",
    eyebrow: EYEBROW,
    title: "3.2 Sangrado de motor: IP/HP, presión y temperatura",
    subtitle: "ATA 36 · Engine Bleed System",
    leftPct: 52,
    leftTitle: "ENGINE BLEED SYSTEM (DSC-36-10-20)",
    rightTitle: "ECAM BLEED PAGE",
    image: fig("ecam_bleed"),
    imageAlt: "ECAM BLEED page: engine bleed indications, HP and bleed valves, crossbleed, APU bleed and GND HP",
    sourceRef: src("DSC-36-10-20 Air Bleed Selection / Pressure and Temperature Regulation / DSC-36-20 ECAM Bleed Page"),
    cards: [
      {
        heading: "Air bleed selection",
        paragraph:
          "Air is normally bled from the intermediate pressure stage (IP) of engine's high-pressure (HP) compressor to minimize fuel penalty. At low engine speed, when the pressure and temperature of the IP air are too low, the system bleeds air from the HP stage and maintains it at 36 ± 4 PSI.",
      },
      {
        heading: "Pressure and temperature regulation",
        bullets: [
          "The bleed valve acts as a shut-off and pressure regulating valve. It maintains delivery pressure at 45 ± 5 PSI. If pressure regulation fails, the overpressure valve closes when the pressure goes over 75 PSI.",
          "A precooler (air-to-air heat exchanger using fan air) regulates the temperature to approximately 200 °C.",
          "The bleed valve closes electrically: BLEED pb sw OFF, ENG FIRE pb pushed, or by the BMC (overtemperature, overpressure, leak, open starter valve, APU bleed ON).",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "If APU Bleed is ON and the crossbleed valve is SHUT, the Engine bleed valve 2, remains open.",
    },
  },
  {
    comment: "SLIDE SIS-03.3: APU bleed, crossbleed and leak detection",
    eyebrow: EYEBROW,
    title: "3.3 Sangrado del APU, crossbleed y detección de fugas",
    subtitle: "ATA 36 · APU Bleed / Crossbleed / Leak Detection",
    leftPct: 55,
    leftTitle: "APU BLEED · CROSSBLEED · LEAK (DSC-36-10)",
    rightTitle: "AIR COND PANEL — BLEED CONTROLS",
    image: fig("bleed_overhead"),
    imageAlt: "AIR COND overhead panel: ENG 1 and ENG 2 BLEED, APU BLEED and X BLEED selector",
    sourceRef: src("DSC-36-10-30 APU Bleed Air Supply / DSC-36-10-40 Crossbleed / DSC-36-10-50 Leak Detection / DSC-36-20 Overhead Panel"),
    cards: [
      {
        heading: "APU bleed",
        paragraph:
          "When the flight crew selects ON the APU BLEED pb-sw, APU bleed air supplies the pneumatic system, if the APU speed is above 95 %. This opens the crossbleed valve and closes the engine bleed automatically.",
      },
      {
        heading: "Crossbleed",
        paragraph:
          "The X-BLEED rotary selector controls the crossbleed valve. In AUTO, the valve opens when the system uses APU bleed air and closes if the system detects an air leak (except during engine start). OPEN / SHUT select the valve manually.",
      },
      {
        heading: "Leak detection",
        bullets: [
          "Leak detection loops detect any overheating near the hot air ducts in the fuselage, pylons, and wings (single loop for pylon and APU, double loop for the wing).",
          "A wing or pylon leak closes the bleed valve on the related side and the x-bleed valve (except during an engine start), and the associated FAULT light comes on.",
        ],
      },
    ],
  },
  // ── B. Aire acondicionado y presurización (ATA 21) ───────────────────────
  {
    comment: "SLIDE SIS-03.4: Air conditioning general",
    eyebrow: EYEBROW,
    title: "3.4 Aire acondicionado: tres zonas, dos packs",
    subtitle: "ATA 21 · Air Conditioning",
    leftPct: 50,
    leftTitle: "AIR CONDITIONING - GENERAL (DSC-21-10-10)",
    rightTitle: "AIR CONDITIONING ARCHITECTURE",
    image: fig("aircond_general"),
    imageAlt: "Air conditioning architecture: pack flow control valves, packs, mixer unit, trim air valves and zones",
    sourceRef: src("DSC-21-10-10 General"),
    cards: [
      {
        heading: "General",
        paragraph:
          "The air conditioning system is fully automatic. It provides continuous air renewal and maintains a constant, selected temperature in three zones: COCKPIT, FWD CABIN, AFT CABIN. These three zones are independently controlled.",
      },
      {
        heading: "Air is supplied by the pneumatic system, via",
        bullets: [
          "Two pack flow control valves",
          "Two packs",
          "The mixing unit, which mixes the air that comes from the cabin and the packs.",
          "In an emergency, a ram air inlet can provide ambient air to the mixing unit.",
        ],
      },
      {
        heading: "Temperature",
        paragraph:
          "Temperature regulation is ensured by a zone controller and two pack controllers, and optimized via the hot air pressure regulating valve and the trim air valves that add hot air, tapped upstream of the packs, to the air coming from the mixing unit.",
      },
    ],
  },
  {
    comment: "SLIDE SIS-03.5: Pack and main components",
    eyebrow: EYEBROW,
    title: "3.5 El pack y los componentes principales",
    subtitle: "ATA 21 · Main Components",
    leftPct: 55,
    leftTitle: "MAIN COMPONENTS (DSC-21-10-20 · 30)",
    rightTitle: "PACK SCHEMATIC (SIMPLIFIED)",
    image: fig("aircond_components"),
    imageAlt: "Simplified pack schematic: pack flow control valve, heat exchangers, air cycle machine and controllers",
    sourceRef: src("DSC-21-10-20 Main Components / DSC-21-10-30 Pack Controller"),
    cards: [
      {
        heading: "Air conditioning pack",
        paragraph:
          "The two packs operate automatically and independently of each other. Bleed air goes through the primary heat exchanger, the compressor of the air-cycle machine, the main heat exchanger and the turbine, where it expands; this results in very low air temperature at turbine discharge.",
      },
      {
        heading: "Valves and emergency ram air",
        bullets: [
          "Pack flow control valve: closes automatically in case of pack overheat (on ground only), engine start, or operation of the fire or ditching pushbutton.",
          "Emergency ram air: ventilates the cockpit and cabin to remove smoke, or if both packs fail (RAM AIR pushbutton). If ΔP is greater than 1 PSI, no airflow will be supplied.",
          "Hot-air pressure-regulating valve: closes automatically if the duct overheats, the cockpit trim air valve fails, or the zone controller fails.",
        ],
      },
      {
        heading: "Pack controller",
        paragraph:
          "Each pack controller regulates the temperature of its pack by modulating the bypass valve and the ram air inlet flaps (closed during takeoff and landing to avoid ingestion of foreign matter), and regulates flow via the pack flow control valve.",
      },
    ],
  },
  {
    comment: "SLIDE SIS-03.6: Zone controller and ECAM COND page",
    eyebrow: EYEBROW,
    title: "3.6 Controlador de zona y página ECAM COND",
    subtitle: "ATA 21 · Temperature and Flow Regulation",
    leftPct: 52,
    leftTitle: "ZONE CONTROLLER (DSC-21-10-30)",
    rightTitle: "ECAM COND PAGE",
    image: fig("ecam_cond_b"),
    imageAlt: "ECAM COND page: zone temperatures, duct temperatures, trim air valves and hot air valve",
    sourceRef: src("DSC-21-10-30 Zone Controller / DSC-21-10-50 ECAM COND Page"),
    cards: [
      {
        heading: "Pack flow control",
        paragraph:
          "The crew can use the PACK FLOW selector to adjust the pack flow for the number of passengers and for external conditions. Whatever the crew selects, the system delivers higher flow in single-pack operation and when the APU is supplying bleed air.",
      },
      {
        heading: "Engine pressure demand · APU flow demand",
        bullets: [
          "When the cooling demand in one zone cannot be satisfied and the bleed pressure is too low, the zone controller sends a pressure demand signal to both EIUs to increase the minimum idle.",
          "When the APU bleed valve is open, the zone controller signals the APU's Electronic Control Box (ECB) to increase the APU flow output when any zone temperature demand cannot be satisfied.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SIS-03.7: Pressurization general and main components",
    eyebrow: EYEBROW,
    title: "3.7 Presurización: funciones y componentes",
    subtitle: "ATA 21 · Pressurization",
    leftPct: 55,
    leftTitle: "PRESSURIZATION (DSC-21-20-10 · 20)",
    rightTitle: "PRESSURIZATION SCHEMATIC",
    image: fig("press_general"),
    imageAlt: "Pressurization schematic: CPC 1 and CPC 2, outflow valve motors and safety valves",
    sourceRef: src("DSC-21-20-10 General / DSC-21-20-20 Main Components"),
    cards: [
      {
        heading: "Four general functions",
        bullets: [
          "Ground function: fully opens the outflow valve on ground",
          "Prepressurization: during takeoff, increases cabin pressure to avoid a surge in cabin pressure during rotation",
          "Pressurization in flight: adjusts cabin altitude, and rate of change to provide passengers with a comfortable flight",
          "Depressurization: after touchdown, gradually releases residual cabin overpressure.",
        ],
      },
      {
        heading: "Components",
        bullets: [
          "Two Cabin Pressure Controllers (CPC): when the system is in automatic mode, one controller is active, the other is on standby.",
          "One outflow valve with three motors (two for automatic operation, one for manual operation).",
          "Two safety valves prevent cabin pressure from going too high (8.6 PSI above ambient) or too low (1 PSI below ambient).",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SIS-03.8: Automatic pressure control mode",
    eyebrow: EYEBROW,
    title: "3.8 Presurización automática",
    subtitle: "ATA 21 · System Operation",
    leftPct: 55,
    leftTitle: "AUTOMATIC PRESSURE CONTROL MODE (DSC-21-20-30)",
    rightTitle: "ECAM CRUISE PAGE — AIR",
    image: fig("press_overhead"),
    imageAlt: "ECAM cruise page air section: landing elevation, ΔP, cabin vertical speed and cabin altitude",
    sourceRef: src("DSC-21-20-10 Automatic Operation / DSC-21-20-30 Automatic Pressure Control Mode"),
    cards: [
      {
        heading: "Automatic operation",
        paragraph:
          "The flight crew monitors the operation of the system, but does nothing to control it. Air pressure in the cabin follows external schedules that the system receives from the FMGS. When FMGS data is not available, the crew only needs to select the landing field elevation.",
      },
      {
        heading: "Automatic pressure control mode",
        bullets: [
          "Only one controller operates at a time. An automatic transfer occurs 70 s after each landing, or if the operating system fails.",
          "The controller limits the cabin pressure to approximately 8 000 ft maximum during CRUISE mode.",
          "GROUND: before takeoff, and 55 s after landing, the outflow valve fully opens. TAKEOFF: the controller pre-pressurizes the aircraft at a rate of 400 ft/min, until the ΔP reaches 0.1 PSI.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "In manual mode, the flight crew controls the cabin altitude via the manual motor of the outflow valve, by operating controls on the pressurization control panel.",
    },
  },
  // ── C. APU (ATA 49) ──────────────────────────────────────────────────────
  {
    comment: "SLIDE SIS-03.9: APU general",
    eyebrow: EYEBROW,
    title: "3.9 APU: qué aporta y cómo está construido",
    subtitle: "ATA 49 · APU",
    leftPct: 50,
    leftTitle: "APU — GENERAL (DSC-49-10)",
    rightTitle: "APU",
    image: fig("apu_general"),
    imageAlt: "APU: load compressor, turbine, gearbox, starter, generator and APU bleed valve",
    sourceRef: src("DSC-49-10-10 General / DSC-49-10-20 Main Components"),
    cards: [
      {
        heading: "General",
        bullets: [
          "On the ground: bleed air for starting the engines and for the air conditioning system; electrical power to the electrical system.",
          "During takeoff: bleed air for air conditioning (for example, when optimum aircraft performance is required).",
          "In flight: backs up the electrical system and the air conditioning; can be used to start the engines.",
        ],
      },
      {
        heading: "Main components",
        bullets: [
          "A single-shaft gas turbine that drives the accessory gearbox (electrical generator, starter, etc.) and produces bleed air.",
          "The Electronic Control Box (ECB) sequences and monitors the start, monitors speed, temperature and bleed air, and controls the shutdown.",
          "The left fuel feed line supplies the APU. If pressure is not available (batteries only or pumps off) the APU FUEL PUMP starts automatically.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SIS-03.10: APU controls and ECAM APU page",
    eyebrow: EYEBROW,
    title: "3.10 APU: MASTER SW, START y página ECAM",
    subtitle: "ATA 49 · Controls and Indicators",
    leftPct: 55,
    leftTitle: "APU PANEL (DSC-49-20)",
    rightTitle: "ECAM APU PAGE",
    image: fig("ecam_apu"),
    imageAlt: "ECAM APU page: AVAIL, APU GEN, APU bleed, N, EGT, fuel low pressure, flap open and low oil level",
    sourceRef: src("DSC-49-20 Overhead Panel / ECAM APU Page"),
    cards: [
      {
        heading: "MASTER SW pb-sw",
        paragraph:
          "Controls the power supply for the operation of the APU and its protective features, and the starting and shutdown sequences. When pressed: the APU air intake flap opens, the fuel isolation valve opens and the APU page appears on the ECAM. In shutdown, if the aircraft was using APU bleed air, the APU keeps running for a cooling period of 60 s up to 120 s.",
      },
      {
        heading: "START pb-sw",
        bullets: [
          "When the flap is completely open, the APU starter is energized; 1.5 s later the ignition turns ON.",
          "At N = 60 %, the starter is de-energized and the ignition turns OFF.",
          "The AVAIL light comes on when N is above 95 %: the APU can supply bleed air and electrical power.",
        ],
      },
    ],
  },
  // ── D. Protección contra el fuego (ATA 26) ───────────────────────────────
  {
    comment: "SLIDE SIS-03.11: Engine and APU fire detection",
    eyebrow: EYEBROW,
    title: "3.11 Detección de fuego en motores y APU",
    subtitle: "ATA 26 · Fire Protection",
    leftPct: 52,
    leftTitle: "FIRE DETECTION (DSC-26-10 · 26-20-10)",
    rightTitle: "ENGINE FIRE DETECTION",
    image: fig("fire_engine"),
    imageAlt: "Engine fire detection: loops A and B, FDU with AND logic, CRC, ECAM and MASTER WARNING",
    sourceRef: src("DSC-26-10 General / DSC-26-20-10 Fire Detection and Detection Fault Logic"),
    cards: [
      {
        heading: "General",
        paragraph:
          "Fire and overheat detection for the engines and APU · smoke detection for the cargo compartments, the lavatories, and the avionics bay · fire extinguishing for the cargo compartments, the engines, the APU, and the lavatories.",
      },
      {
        heading: "Detection",
        bullets: [
          "Each engine and the APU have two identical detection loops (A and B) mounted in parallel and a Fire Detection Unit (FDU).",
          "A fire warning appears if both loops A and B send a fire signal, or one loop sends a fire signal and the other one is failed, or breaks occur in both loops within 5 s of each other (flame effect), or a test is performed on the FIRE panel.",
          "A fault in one loop does not affect the warning system: the unaffected loop still protects the aircraft. A loop-fault caution appears.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SIS-03.12: FIRE panel and extinguishing",
    eyebrow: EYEBROW,
    title: "3.12 Panel FIRE y extinción",
    subtitle: "ATA 26 · Controls and Indicators",
    leftPct: 55,
    leftTitle: "EXTINGUISHING · FIRE PANEL (DSC-26-20)",
    rightTitle: "FIRE PANEL",
    image: fig("fire_panel"),
    imageAlt: "FIRE panel: ENG 1 and ENG 2 FIRE pb-sw, AGENT pushbuttons, APU FIRE pb-sw and TEST pushbuttons",
    sourceRef: src("DSC-26-20-10 Extinguishing / DSC-26-20-20 FIRE Panel"),
    cards: [
      {
        heading: "Extinguishing",
        paragraph:
          "Each engine has two fire extinguisher bottles; the APU has one. When an APU fire is detected on the ground, the APU automatically shuts down, and the extinguisher bottle discharges automatically.",
      },
      {
        heading: "ENG 1(2) FIRE pb-sw — when pushed (released)",
        paragraph:
          "Silences the aural fire warning · arms the fire extinguisher squibs · closes the low-pressure fuel valve, the hydraulic fire shut off valve, the engine bleed valve and the pack flow control valve · cuts off the FADEC power supply · deactivates the IDG.",
      },
      {
        heading: "AGENT pb · TEST pb",
        bullets: [
          "The AGENT pbs become active when the flight crew releases the FIRE pb-sw. A brief push discharges the agent. “SQUIB” comes on white; “DISCH” comes on amber when the bottle has lost pressure.",
          "The FIRE TEST pb tests the detection and extinguishing system: CRC, MASTER WARNING, ECAM warning and panel lights.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SIS-03.13: Cargo smoke detection and extinguishing",
    eyebrow: EYEBROW,
    title: "3.13 Humo en bodegas: detección y extinción",
    subtitle: "ATA 26 · Cargo Compartments",
    leftPct: 52,
    leftTitle: "CARGO COMPARTMENTS (DSC-26-50)",
    rightTitle: "CARGO SMOKE DETECTION",
    image: fig("cargo_smoke"),
    imageAlt: "Cargo smoke detection: forward and aft detectors, AND/OR logic, CARGO SMOKE panel and ECAM",
    sourceRef: src("DSC-26-50-10 Smoke Detection / Fire Extinguishing / DSC-26-50-20 CARGO SMOKE Panel"),
    cards: [
      {
        heading: "Smoke detection",
        bullets: [
          "Two smoke detectors in the forward and four in the aft cargo compartment ceiling panel cavities, each linked to one of two detection loops (dual loop principle).",
          "Smoke in one cavity activates the cargo smoke warning if both smoke detectors detect smoke, or one smoke detector detects smoke and the other is inoperative.",
        ],
      },
      {
        heading: "Fire extinguishing",
        paragraph:
          "One fire bottle with two discharge heads supplies one nozzle in the forward and two nozzles in the aft cargo compartment. The FWD(AFT) DISCH pb discharges the agent in approximately 60 s, ensuring a sufficient agent concentration for 60 min. When the bottle is empty, the DISCH light comes on amber.",
      },
    ],
    alert: {
      level: "NOTE",
      text: "The TEST pb, pressed for at least 3 s, tests the smoke detectors in sequence, turns on the red SMOKE lights twice and displays the ECAM warning.",
    },
  },
  // ── E. Hielo y lluvia (ATA 30) ───────────────────────────────────────────
  {
    comment: "SLIDE SIS-03.14: Wing and engine anti-ice",
    eyebrow: EYEBROW,
    title: "3.14 Antihielo de ala y de motor",
    subtitle: "ATA 30 · Ice and Rain Protection",
    leftPct: 55,
    leftTitle: "WING / ENGINE ANTI-ICE (DSC-30-20 · 30-30)",
    rightTitle: "WING ANTI-ICE",
    image: fig("wing_aice"),
    imageAlt: "Wing anti-ice: WING pushbutton, wing valves and heated outboard slats 3, 4 and 5",
    sourceRef: src("DSC-30-10 General / DSC-30-20 Wing Anti-Ice / DSC-30-30 Engine Anti-Ice"),
    cards: [
      {
        heading: "Wing anti-ice",
        bullets: [
          "In flight, hot air from the pneumatic system heats the three outboard slats (3-4-5) of each wing, through one valve in each wing controlled by the WING pushbutton.",
          "On ground, the flight crew can initiate a 30 s test sequence by turning the system ON. If a leak is detected, the affected side's valve automatically closes.",
          "When wing anti-ice is selected, the N1 limit is automatically reduced, and the idle N1 is automatically increased. If the electrical power supply fails, the valves close.",
        ],
      },
      {
        heading: "Engine anti-ice",
        bullets: [
          "An independent air bleed from the high pressure compressor protects each engine nacelle from ice, through a two-position valve controlled by one pushbutton per engine.",
          "The valve automatically closes, if air is unavailable (engine not running). In the case of an ELEC EMER CONFIG alert, the valves automatically open.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SIS-03.15: Window heat, probes heat and wipers",
    eyebrow: EYEBROW,
    title: "3.15 Calefacción de ventanas y sondas, y limpiaparabrisas",
    subtitle: "ATA 30 · Window Heat / Probes Heat / Rain Removal",
    leftPct: 58,
    leftTitle: "WINDOW · PROBES HEAT · WIPERS (DSC-30-40 · 50 · 60)",
    rightTitle: "PROBE/WINDOW HEAT pb",
    image: fig("probes"),
    imageAlt: "PROBE/WINDOW HEAT pushbutton in AUTO",
    sourceRef: src("DSC-30-40 Window Heat / DSC-30-50 Probes Heat / DSC-30-60 Rain Removal"),
    cards: [
      {
        heading: "Window heat",
        paragraph:
          "Electrical heating anti-ices each windshield and defogs the cockpit side windows. Two independent WHC regulate the system. The windshield heating operates at low power on ground and at normal power in flight.",
      },
      {
        heading: "Probes heat",
        bullets: [
          "Electrical heating protects pitot probes, static ports, AOA probes and TAT probes. Three independent PHCs control and monitor the Captain, F/O and STBY probes.",
          "Probes and windows are heated automatically in flight, or on the ground (except TAT probes) provided one engine is running. ON: heated permanently.",
        ],
      },
      {
        heading: "Wipers",
        paragraph: "Each front windshield has an electrical wiper with two speeds, controlled by a rotary selector. When turned off, the wiper stops out of view.",
      },
    ],
    alert: {
      level: "CAUTION",
      text: "Ensure that the probe covers are removed before setting the PROBE/WINDOW HEAT pb-sw to ON.",
    },
  },
];

export const MCC_SIS_03: MccLesson = {
  id: "a3200000-0000-0000-0000-000000000203",
  course_id: MCC_COURSE_ID,
  title: "SIS-03. Neumático, aire acondicionado y presurización, APU, fuego, hielo y lluvia",
  slug: "sis-03-neumatico-aire-apu-fuego-hielo",
  sequence_order: 20,
  lesson_order: 20,
  min_seconds: mccMinSeconds(SIS_03_SLIDES.length, mccVideoSeconds(SIS_03_SLIDES)),
  module_title: MCC_MODULES.SYSTEMS,
  content_html: joinSlides(SIS_03_SLIDES),
};

export const SIS_03_SLIDE_COUNT = SIS_03_SLIDES.length;
