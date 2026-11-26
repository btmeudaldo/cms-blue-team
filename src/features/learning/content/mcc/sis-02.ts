/**
 * SIS-02 — Eléctrico, hidráulico y combustible (0,75 h).
 *
 * Alcance: Curso APS MCC — Airbus A320ceo CFM56-5B (simulador Entrol A32).
 * Sustituye a CTA-2. Fuentes: FCOM A320 DSC-24 (Electrical), DSC-29 (Hydraulic) y DSC-28 (Fuel), solo
 * bloques aplicables a la variante de referencia (grupo EC-ILQ).
 *
 * Criterio de redacción: a la derecha, la figura del propio FCOM (imagen incrustada, sin cabecera ni
 * marcas); a la izquierda, el texto FCOM literal en inglés que la explica.
 * Correcciones respecto a CTA-2: depósitos interiores y exteriores con las cantidades usables del grupo
 * EC-ILQ (DSC-28-10-20, densidad 0.785 kg/l); sin ACT (opcional, tapado en las figuras de combustible).
 * La generación de emergencia (RAT, EMER GEN) está en SOP-12 y la configuración de humo en SOP-13; aquí
 * solo la arquitectura y las reconfiguraciones que esas lecciones no tratan.
 * Arquitectura: docs/mcc/08_ARQUITECTURA_PDP.md.
 */
import { MCC_MODULES, joinSlides, mccMinSeconds, mccVideoSeconds, type MccLesson, type MccSlideSpec } from "./slide-builder.ts";

const MCC_COURSE_ID = "a3200000-0000-0000-0000-000000000320";
const IMG_BASE = "https://www.blueteam.es/elearning/media/mcc/pdp";
const EYEBROW = "APS MCC · A320 · SIS-02";

/** Versión común de caché de las figuras FCOM de esta lección. */
const IMG_VERSION = 1795631000;
const fig = (name: string) => `${IMG_BASE}/fcom_a320_sis_${name}.webp?v=${IMG_VERSION}`;
const src = (sections: string) => `Source: FCOM A320 ${sections}`;

const SIS_02_SLIDES: MccSlideSpec[] = [
  // ── A. Eléctrico (ATA 24) ────────────────────────────────────────────────
  {
    comment: "SLIDE SIS-02.1: Electrical system general and generation",
    eyebrow: EYEBROW,
    title: "2.1 Sistema eléctrico: generalidades y generación",
    subtitle: "ATA 24 · Electrical",
    leftPct: 50,
    leftTitle: "GENERAL / GENERATION (DSC-24-10)",
    rightTitle: "ELECTRICAL SYSTEM SCHEMATIC",
    image: fig("elec_overview"),
    imageAlt: "Schematic of the electrical network: generators, AC and DC buses, transformer rectifiers and batteries",
    sourceRef: src("DSC-24-10-10 General / DSC-24-10-20 Generation of Electrical Power"),
    cards: [
      {
        heading: "General",
        paragraph:
          "The electrical power system consists of a three-phase 115/200 V 400 Hz constant-frequency AC system and a 28 V DC system.",
      },
      {
        heading: "AC generation",
        bullets: [
          "Two AC generators (GEN 1, GEN 2), one driven by each main engine through an integrated drive. Each generator can supply up to 90 KVA.",
          "A third generator (APU GEN) can replace either or both main engine generators at any time.",
          "The blue hydraulic circuit drives an emergency generator (5 KVA), if all main generators fail.",
        ],
      },
      {
        heading: "DC generation",
        bullets: [
          "TR 1 and TR 2 supply the aircraft's electrical system, with up to 200 A of DC current.",
          "The ESS TR can power the essential DC circuit from the emergency generator, or if TR 1 or TR 2 fails.",
          "Two main batteries, each with a normal capacity of 23 Ah, are permanently connected to the two hot buses.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SIS-02.2: Normal configuration and priorities",
    eyebrow: EYEBROW,
    title: "2.2 Configuración normal y prioridades",
    subtitle: "ATA 24 · Normal Configuration",
    leftPct: 45,
    leftTitle: "OPERATIONS (DSC-24-10-30)",
    rightTitle: "ELEC PAGE · NORMAL IN FLIGHT",
    image: fig("elec_normal_flight"),
    imageAlt: "ELEC system page in the normal in-flight configuration, both engine generators supplying",
    sourceRef: src("DSC-24-10-30-10 General / DSC-24-10-30-20 Normal Configuration"),
    cards: [
      {
        heading: "General",
        bullets: [
          "GEN 1 and 2 when operating have priority over the APU generator and over external power.",
          "External power has priority over the APU generator when the EXT PWR pb switch is ON.",
          "The APU generator or external power can supply the entire network.",
          "The generators cannot be connected in parallel.",
        ],
      },
      {
        heading: "In flight",
        bullets: [
          "Each engine-driven generator supplies its associated AC BUS (1 and 2) via its generator line contactor (GLC 1 and GLC 2).",
          "AC BUS 1 normally supplies the AC ESS BUS via a contactor.",
          "TR 1 normally supplies DC BUS 1, DC BAT BUS, and DC ESS BUS. TR 2 normally supplies DC BUS 2.",
          "The two batteries are connected to the DC BAT BUS, if they need charging.",
        ],
      },
      {
        heading: "On ground",
        paragraph: "Either the APU generator, or external power, may supply the complete system.",
      },
    ],
  },
  {
    comment: "SLIDE SIS-02.3: Failure of one engine generator and of AC BUS 1",
    eyebrow: EYEBROW,
    title: "2.3 Fallo de un generador y de AC BUS 1",
    subtitle: "ATA 24 · Abnormal Configurations",
    leftPct: 45,
    leftTitle: "ABNORMAL CONFIGURATIONS (DSC-24-10-30-30)",
    rightTitle: "ELEC PAGE · GEN 1 FAILED",
    image: fig("elec_gen_failure"),
    imageAlt: "ELEC system page with GEN 1 off and GEN 2 supplying both AC buses, galley shed",
    sourceRef: src("DSC-24-10-30-30 Failure of One Engine Generator / Failure of AC BUS 1"),
    cards: [
      {
        heading: "Failure of one engine generator",
        bullets: [
          "The system automatically replaces the failed generator, with the APU GEN, if available, or other engine generator.",
          "Part of the galley load and the DC BUS Ent are automatically shed.",
        ],
      },
      {
        heading: "Failure of AC BUS 1",
        bullets: [
          "AC BUS 2 can supply AC ESS BUS, and ESS TR can supply DC ESS BUS, both via the AC ESS FEED pb.",
          "DC BUS 2 supplies DC BUS 1 and DC BAT BUS automatically after 5 s.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "One engine generator can supply the entire network, except the DC BUS Entertainment.",
    },
  },
  {
    comment: "SLIDE SIS-02.4: TR failures and batteries only",
    eyebrow: EYEBROW,
    title: "2.4 Fallo de TR y vuelo con solo baterías",
    subtitle: "ATA 24 · Abnormal Configurations",
    leftPct: 50,
    leftTitle: "ABNORMAL CONFIGURATIONS (DSC-24-10-30-30)",
    rightTitle: "ELEC PAGE · TR 1 FAILED",
    image: fig("elec_tr_failure"),
    imageAlt: "ELEC system page with TR 1 at 0 V and the ESS TR supplying the DC ESS BUS",
    sourceRef: src("DSC-24-10-30-30 Failure of One TR / Failure of TR 1 and TR 2 / DSC-24-10-20 Static Inverter"),
    cards: [
      {
        heading: "Failure of one TR",
        bullets: [
          "The contactor of each TR opens automatically, in case of overheat or minimum current.",
          "The other TR automatically replaces the faulty one. The ESS TR supplies the DC ESS BUS.",
        ],
      },
      {
        heading: "Failure of TR 1 and TR 2",
        paragraph:
          "If TR 1 and TR 2 are lost, DC BUS 1, DC BUS 2, and DC BAT BUS are lost. The DC ESS BUS is supplied by the ESS TR.",
      },
      {
        heading: "Batteries only (static inverter)",
        bullets: [
          "When the aircraft speed is above 50 kt, the inverter is automatically activated, if only the batteries are supplying electrical power to the aircraft, regardless of the BAT 1 and BAT 2 pushbutton positions.",
          "When the aircraft speed is below 50 kt, the inverter is activated, if only the batteries are supplying electrical power to the aircraft, and both BAT 1 and BAT 2 pushbuttons are on.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SIS-02.5: ELEC overhead panel",
    eyebrow: EYEBROW,
    title: "2.5 Panel ELEC del techo",
    subtitle: "ATA 24 · Controls and Indicators",
    leftPct: 45,
    leftTitle: "OVERHEAD PANEL (DSC-24-20)",
    rightTitle: "ELEC PANEL (35VU)",
    image: fig("elec_overhead"),
    imageAlt: "ELEC overhead panel with battery indications, IDG, GEN, APU GEN, BUS TIE, EXT PWR and AC ESS FEED pushbuttons",
    sourceRef: src("DSC-24-20 Overhead Panel"),
    cards: [],
    table: {
      headers: ["Control", "Function"],
      rows: [
        ["BAT 1(2) pb-sw", "Controls the operation of the corresponding battery charge limiter."],
        ["IDG 1(2) pb-sw (guarded)", "Disconnects the IDG from its driveshaft: only maintenance personnel can reconnect it. Maintaining it during more than 3 s may damage the IDG disconnection mechanism."],
        ["GEN 1(2) pb-sw", "The generator field is energized and the line contactor closes if electrical parameters are normal."],
        ["APU GEN pb-sw", "The line contactor closes if parameters are normal and the EXT PWR line contactor is open."],
        ["BUS TIE pb", "The bus tie contactors automatically open or close to maintain power supply to both AC BUS 1 and 2."],
        ["AC ESS FEED pb", "Normal: AC ESS BUS supplied by AC BUS 1. ALTN: supplied by AC BUS 2."],
        ["GALLEY / GALY & CAB pb", "FAULT: the load on any generator is more than 100 % of rated output."],
        ["EXT PWR pb", "When pressed, the external power line contactor closes."],
      ],
    },
  },
  {
    comment: "SLIDE SIS-02.6: ECAM ELEC page",
    eyebrow: EYEBROW,
    title: "2.6 Página ECAM ELEC",
    subtitle: "ATA 24 · ECAM ELEC Page",
    leftPct: 45,
    leftTitle: "ECAM ELEC PAGE (DSC-24-20)",
    rightTitle: "ECAM ELEC PAGE",
    image: fig("ecam_elec"),
    imageAlt: "ECAM ELEC page with numbered callouts for batteries, buses, TRs, EMER GEN, generators and IDGs",
    sourceRef: src("DSC-24-20 ECAM ELEC Page"),
    cards: [],
    table: {
      headers: ["Indication", "Abnormal"],
      rows: [
        ["Battery voltage", "Below 25 V, or above 31 V."],
        ["Battery current", "Discharge current above 5 A."],
        ["DC BAT", "Voltage equal to, or less than 25 V."],
        ["Bus bar", "The corresponding bus bar is not powered. SHED appears when AC or DC SHED ESS BUS is shed."],
        ["TR voltage", "Below 25 V, or above 31 V."],
        ["TR current", "Equal to, or below 5 A."],
        ["ESS TR", "Follows the logic of the TR 1(2) legend; the ESS TR contactor is open."],
      ],
    },
  },
  // ── B. Hidráulico (ATA 29) ───────────────────────────────────────────────
  {
    comment: "SLIDE SIS-02.7: Hydraulic system general and generation",
    eyebrow: EYEBROW,
    title: "2.7 Sistema hidráulico: generalidades y generación",
    subtitle: "ATA 29 · Hydraulic",
    leftPct: 45,
    leftTitle: "GENERAL / GENERATION (DSC-29-10)",
    rightTitle: "HYDRAULIC GENERATION",
    image: fig("hyd_generation"),
    imageAlt: "Green, blue and yellow hydraulic systems with reservoirs, pumps, PTU, RAT and accumulators",
    sourceRef: src("DSC-29-10-10 General / DSC-29-10-20 Generation"),
    cards: [
      {
        heading: "General",
        paragraph:
          "The aircraft has three continuously operating hydraulic systems : blue, green, and yellow. Each system has its own hydraulic reservoir. Normal system operating pressure is 3 000 PSI (2 500 PSI when powered by the RAT). Hydraulic fluid cannot be transferred from one system to another.",
      },
      {
        heading: "Pumps",
        bullets: [
          "Green: a pump driven by engine 1 pressurizes the green system.",
          "Blue: an electric pump pressurizes the blue system. A pump driven by a ram air turbine (RAT) pressurizes this system in an emergency.",
          "Yellow: a pump driven by engine 2. An electric pump can also pressurize the yellow system on the ground when the engines are stopped. A hand pump operates the cargo doors when no electrical power is available.",
        ],
      },
      {
        heading: "Reservoir pressurization",
        paragraph:
          "Normally, HP bleed air from engine 1 pressurizes the hydraulic reservoirs automatically. If the bleed air pressure is too low, the system takes bleed air pressure from the crossbleed duct.",
      },
    ],
  },
  {
    comment: "SLIDE SIS-02.8: PTU, RAT and HYD overhead panel",
    eyebrow: EYEBROW,
    title: "2.8 PTU, RAT y panel HYD",
    subtitle: "ATA 29 · Generation / Controls",
    leftPct: 55,
    leftTitle: "PTU / RAT / OVERHEAD PANEL (DSC-29)",
    rightTitle: "HYD PANEL (40VU)",
    image: fig("hyd_overhead"),
    imageAlt: "HYD overhead panel: ENG 1 and ENG 2 PUMP, BLUE and YELLOW ELEC PUMP, PTU and RAT MAN ON",
    sourceRef: src("DSC-29-10-20 PTU / RAT / DSC-29-20 Overhead Panel"),
    cards: [
      {
        heading: "Power transfer unit (PTU)",
        paragraph:
          "A bidirectional power transfer unit enables the yellow system to pressurize the green system and vice versa. The power transfer unit comes into action automatically when the differential pressure between the green and the yellow systems is greater than 500 PSI.",
      },
      {
        heading: "Ram air turbine (RAT)",
        paragraph:
          "The RAT deploys automatically if AC BUS 1 and AC BUS 2 are both lost. It can be deployed manually from the overhead panel. It can be stowed only when the aircraft is on the ground.",
      },
      {
        heading: "Overhead panel",
        bullets: [
          "(1) ENG 1(2) PUMP pb: FAULT if reservoir level, overheat, air pressure or pump pressure is low.",
          "(2) BLUE ELEC PUMP pb (guarded): in AUTO, the pump operates in flight, or on the ground if one engine is running.",
          "(3) YELLOW ELEC PUMP pb sw: the electric pump is ON.",
          "(4) PTU pb sw: inhibited during the first engine start and automatically tested during the second engine start.",
          "(5) RAT MAN ON pb: manual RAT extension.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE SIS-02.9: Hydraulic distribution and valves",
    eyebrow: EYEBROW,
    title: "2.9 Distribución hidráulica y válvulas",
    subtitle: "ATA 29 · Distribution",
    leftPct: 45,
    leftTitle: "SYSTEM COMPONENTS (DSC-29-10-20)",
    rightTitle: "HYDRAULIC DISTRIBUTION",
    image: fig("hyd_distribution"),
    imageAlt: "Users of the green, blue and yellow hydraulic systems with priority valves and leak measurement valves",
    sourceRef: src("DSC-29-10-20 Generation / DSC-29-10-30 Distribution"),
    cards: [
      {
        heading: "System accumulators",
        paragraph:
          "An accumulator in each system helps to maintain a constant pressure by covering transient demands during normal operation.",
      },
      {
        heading: "Priority valves",
        paragraph: "Priority valves cut off hydraulic power to heavy load users if hydraulic pressure in a system gets low.",
      },
      {
        heading: "Fire shutoff valves",
        paragraph:
          "Each of the green and yellow systems has a fire shutoff valve in its line upstream of its engine-driven pump. The flight crew can close it by pushing the ENG 1(2) FIRE pushbutton.",
      },
      {
        heading: "Leak measurement valves",
        paragraph:
          "Each system has a leak measurement valve upstream of the primary flight controls, closed by operation of the LEAK MEASUREMENT VALVES pushbutton switch on the maintenance panel.",
      },
    ],
  },
  {
    comment: "SLIDE SIS-02.10: ECAM HYD page",
    eyebrow: EYEBROW,
    title: "2.10 Página ECAM HYD",
    subtitle: "ATA 29 · ECAM HYD Page",
    leftPct: 45,
    leftTitle: "ECAM HYD PAGE (DSC-29-20)",
    rightTitle: "ECAM HYD PAGE",
    image: fig("ecam_hyd"),
    imageAlt: "ECAM HYD page with the green, blue and yellow systems, PTU, RAT, pumps and reservoirs",
    sourceRef: src("DSC-29-20 ECAM HYD Page"),
    cards: [],
    table: {
      headers: ["Indication", "Meaning"],
      rows: [
        ["Reservoir quantity", "Green, unless the fluid level goes below the warning level (amber)."],
        ["LO AIR PRESS", "Amber, with ECAM caution: reservoir air pressure below normal."],
        ["Reservoir OVHT", "Amber, with ECAM caution: returning fluid temperature above normal."],
        ["FIRE VALVE", "Cross line amber: the valve is fully closed."],
        ["ELEC OVHT", "Amber if the electric pump for that system (blue or yellow) overheats."],
        ["RAT", "White: stowed. Green: not stowed. Amber: stowing pressure applied, or RAT pump not available."],
        ["PTU", "Green: AUTO, not transferring. Amber: PTU pb-sw OFF."],
        ["ENG PUMP", "Cross line amber: PUMP pb-sw OFF. \"LO\" amber: pb-sw on and pressure low."],
        ["System label", "Amber when pressure < 1 450 PSI."],
      ],
    },
  },
  // ── C. Combustible (ATA 28) ──────────────────────────────────────────────
  {
    comment: "SLIDE SIS-02.11: Fuel system general and tanks",
    eyebrow: EYEBROW,
    title: "2.11 Sistema de combustible: depósitos",
    subtitle: "ATA 28 · Fuel",
    leftPct: 50,
    leftTitle: "GENERAL / TANKS (DSC-28-10)",
    rightTitle: "FUEL TANKS",
    image: fig("fuel_tanks"),
    imageAlt: "Fuel tanks: vent, outer and inner tanks in each wing and the center tank",
    sourceRef: src("DSC-28-10-10 General / DSC-28-10-20 Tanks"),
    cards: [
      {
        heading: "General",
        bullets: [
          "Supplies fuel to the engines and the Auxiliary Power Unit (APU).",
          "Circulates fuel to cool the Integrated Drive Generator (IDG).",
          "Keeps fuel in the outer tanks for wing bending and flutter relief.",
        ],
      },
      {
        heading: "Tanks",
        paragraph:
          "The wings have inner and outer tanks. There is a vent surge tank outboard of the outer tank in each wing. When the aircraft has been refueled to maximum capacity, the fuel can expand by 2 % (20 °C temperature rise) without spilling.",
      },
    ],
    table: {
      headers: ["Usable fuel", "Liters", "KG"],
      rows: [
        ["Outer tanks", "880 x 2", "691 x 2"],
        ["Inner tanks", "6 924 x 2", "5 435 x 2"],
        ["Center tank", "8 250", "6 476"],
        ["Total", "23 859", "18 729"],
      ],
    },
    alert: {
      level: "NOTE",
      text: "Fuel density : 0.785 kg/l or 6.551 lb/US Gal.",
    },
  },
  {
    comment: "SLIDE SIS-02.12: Engine feed",
    eyebrow: EYEBROW,
    title: "2.12 Alimentación de los motores",
    subtitle: "ATA 28 · Engine Feed",
    leftPct: 45,
    leftTitle: "ENGINE FEED (DSC-28-10-30)",
    rightTitle: "ENGINE FEED",
    image: fig("fuel_engine_feed"),
    imageAlt: "Engine feed schematic with inner and outer tanks, pumps, sequence valves, crossfeed valve and LP valves",
    sourceRef: src("DSC-28-10-30 Engine Feed"),
    cards: [
      {
        heading: "Tank pumps",
        paragraph:
          "The system has six main fuel pumps. In normal operation each engine is supplied by one pump in the center tank or two pumps in its own side inner tank. All wing tank pumps remain on throughout the flight. They are fitted with pressure relief sequence valves which ensure that, when all pumps are running, the center tank pumps will deliver fuel preferentially.",
      },
      {
        heading: "Valves",
        bullets: [
          "Intertank transfer valves: two electrical transfer valves in each wing permit fuel transfer from outer to inner tank.",
          "Cross feed valve: allows both engines to be fed from one side or one engine to be fed from both sides.",
          "Engine LP valves: closed by either the engine master switch, or the ENG FIRE PUSH pushbutton.",
          "Suction valves: allow engines to be fed by gravity if the inner tank pumps fail.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "Center tank pumps are not fitted with suction valves. Therefore, gravity feeding is not possible from the center tank.",
    },
  },
  {
    comment: "SLIDE SIS-02.13: Fuel feed sequence and recirculation",
    eyebrow: EYEBROW,
    title: "2.13 Secuencia de alimentación y recirculación",
    subtitle: "ATA 28 · Feed Sequence",
    leftPct: 55,
    leftTitle: "FUEL FEED SEQUENCE / RECIRCULATION (DSC-28-10)",
    rightTitle: "FUEL RECIRCULATION",
    image: fig("fuel_recirculation"),
    imageAlt: "Fuel recirculation through the IDG cooler and the fuel return valve back to the outer tank",
    sourceRef: src("DSC-28-10-30 Fuel Feed Sequence / DSC-28-10-60 Fuel Recirculation System"),
    cards: [
      {
        heading: "Feed sequence",
        bullets: [
          "The center tank feeds the engines, when the center tank pumps are not stopped by the control logic. The inner tanks feed the engines when the center tank pumps are stopped.",
          "Each center tank pump stops, until approximately 500 kg (1 100 lb) of the fuel in its associated inner tank has been used.",
          "Each inner tank empties down to 750 kg (1 650 lb). The transfer valves then open and the outer tanks drain into the inner tanks. When open, the valves are latched open; they close at the next refueling.",
        ],
      },
      {
        heading: "Recirculation",
        paragraph:
          "Some of the fuel supplied to each engine goes from the high-pressure fuel line, through the IDG heat exchanger, to the fuel return valve and back to the outer fuel tank. The FADEC controls the fuel return valve.",
      },
    ],
    alert: {
      level: "NOTE",
      text: "With the MODE SEL in the MAN position, the center tank pumps will run. In manual mode, the CTR TK PUMP pb-sw must be selected OFF, when the center tank is empty.",
    },
  },
  {
    comment: "SLIDE SIS-02.14: FUEL overhead panel",
    eyebrow: EYEBROW,
    title: "2.14 Panel FUEL del techo",
    subtitle: "ATA 28 · Controls and Indicators",
    leftPct: 50,
    leftTitle: "OVERHEAD PANEL (DSC-28-20)",
    rightTitle: "FUEL PANEL",
    image: fig("fuel_overhead"),
    imageAlt: "FUEL overhead panel with L and R TK PUMPS, CTR TK PUMP 1 and 2, MODE SEL and X FEED pushbuttons",
    sourceRef: src("DSC-28-20 Overhead Panel"),
    cards: [],
    table: {
      headers: ["Control", "Function"],
      rows: [
        ["L(R) TK PUMPS 1(2) pb-sw", "Pump is on (but only fuel feeds) when the delivery pressure of the center tank pumps drops below the threshold. FAULT: delivery pressure drops."],
        ["CTR TK PUMP 1(2) pb-sw", "Pump is automatically controlled when AUTO mode is selected. FAULT: the pump is in operation and the delivery pressure drops."],
        ["MODE SEL pb-sw · AUTO", "Center tank pumps run at engine start for 2 min; run if the slats are retracted; stop 5 min after center tank low level is reached."],
        ["MODE SEL pb-sw · MAN", "Flight crew manually controls the center tank pumps."],
        ["MODE SEL FAULT", "Center tank has more than 250 kg (550 lb) and the left or right wing tank has less than 5 000 kg (11 000 lb)."],
        ["X FEED pb-sw", "ON: the valve opens. OPEN light (green): the valve is fully open."],
      ],
    },
  },
  {
    comment: "SLIDE SIS-02.15: ECAM FUEL page",
    eyebrow: EYEBROW,
    title: "2.15 Página ECAM FUEL",
    subtitle: "ATA 28 · ECAM FUEL Page",
    leftPct: 45,
    leftTitle: "ECAM FUEL PAGE (DSC-28-20)",
    rightTitle: "ECAM FUEL PAGE",
    image: fig("ecam_fuel"),
    imageAlt: "ECAM FUEL page with fuel used, FOB, LP valves, crossfeed, pumps, transfer valves, quantities and temperatures",
    sourceRef: src("DSC-28-20 ECAM FUEL Page"),
    cards: [],
    table: {
      headers: ["Indication", "Meaning"],
      rows: [
        ["Wing pump · \"LO\" amber", "Pump pressure is low (pump contactor on)."],
        ["Wing pump · crossline amber", "Pump contactor is off."],
        ["CTR pump · crossline green", "Pump contactor is off, and auto shut-off is required."],
        ["CTR pump · crossline amber", "Pump contactor is off, and auto shut-off is not required."],
        ["LP valve · inline amber", "The valve is open when the associated ENG MASTER lever (APU MASTER SW pb-sw) is set to OFF, or the ENG FIRE pb-sw (APU FIRE pb-sw) is released."],
        ["LP valve · crossline amber", "The ENG valve is fully closed, or the APU valve is closed with the APU MASTER SW pb-sw set to ON."],
        ["LP valve · transit amber", "The valve is in transit."],
      ],
    },
  },
];

export const MCC_SIS_02: MccLesson = {
  id: "a3200000-0000-0000-0000-000000000202",
  course_id: MCC_COURSE_ID,
  title: "SIS-02. Eléctrico, hidráulico y combustible",
  slug: "sis-02-electrico-hidraulico-combustible",
  sequence_order: 16,
  lesson_order: 16,
  min_seconds: mccMinSeconds(SIS_02_SLIDES.length, mccVideoSeconds(SIS_02_SLIDES)),
  module_title: MCC_MODULES.SYSTEMS,
  content_html: joinSlides(SIS_02_SLIDES),
};

export const SIS_02_SLIDE_COUNT = SIS_02_SLIDES.length;
