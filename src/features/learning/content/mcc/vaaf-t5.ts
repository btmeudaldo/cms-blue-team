/**
 * VAAF-T5 — Uso de la MEL (0,5 h aprox.). Anexo 10 §2.2.3 b.
 *
 * Alcance: Curso APS MCC — Airbus A320ceo CFM56-5B (simulador Entrol A32).
 * Fuente: MEL REV80 (07 OCT 26): General Information (versión inglesa, PDF p. 431–466) y MEL Items 00 Preamble
 * (MI-00-03, 00-04, 00-05, 00-08; p. 706–733). Solo bloques «Applicable to: ALL» o del grupo de EC-ILQ.
 * El nombre del operador se sustituye por «the operator» y se omiten las referencias a su manual de operaciones.
 * Figuras: recortes de la MEL por debajo de la cabecera (sin nombre del operador ni matrículas) con el ejemplo
 * AUTO FLT AP OFF → ítem 22-10-01A → procedimiento operacional, y figuras FCOM ya publicadas (SIS-01, SIS-06).
 */
import { MCC_MODULES, joinSlides, mccMinSeconds, mccVideoSeconds, type MccLesson, type MccSlideSpec } from "./slide-builder.ts";

const MCC_COURSE_ID = "a3200000-0000-0000-0000-000000000320";
const IMG_BASE = "https://www.blueteam.es/elearning/media/mcc/pdp";
const EYEBROW = "APS MCC · A320 · VAAF-T5";

/** Versión común de caché de los recortes de la MEL de esta lección. */
const IMG_VERSION = 1795641000;
const fig = (name: string) => `${IMG_BASE}/fcom_a320_vaaf5_${name}.webp?v=${IMG_VERSION}`;
/** Figuras FCOM ya publicadas (misma URL y versión que en su lección). */
const sisFig = (name: string, version: number) => `${IMG_BASE}/fcom_a320_${name}.webp?v=${version}`;
const SIS1 = 1795630000;
const SIS6 = 1795638000;
const src = (sections: string) => `Source: MEL REV80 ${sections}`;

const VAAF_T5_SLIDES: MccSlideSpec[] = [
  {
    comment: "SLIDE VAAF-T5.1: Introduction to the MEL",
    eyebrow: EYEBROW,
    title: "5.1 Qué es la MEL",
    subtitle: "MEL · General Information · Introduction to the MEL",
    leftPct: 58,
    leftTitle: "INTRODUCTION TO THE MEL",
    rightTitle: "ECAM DISPLAYS",
    image: sisFig("sis_ecam_du_arrangement", SIS1),
    imageAlt: "Cockpit display units: E/WD and SD used to report system failures",
    sourceRef: src("GEN Introduction to the MEL (p. 431–432)"),
    cards: [
      {
        heading: "Purpose",
        bullets: [
          "The MEL is based on the Master Minimum Equipment List (MMEL) approved by EASA. The operator's MEL cannot be less restrictive than the MMEL.",
          "The MEL shall not deviate from any applicable Airworthiness Directive or any other Mandatory Requirement.",
          "The MEL is intended to permit operation with inoperative items of system, function, or equipment for a period of time until repairs can be accomplished. Repairs must be accomplished at the earliest opportunity.",
          "Suitable conditions and limitations in the form of placards, maintenance procedures, crew operational procedures, and other restrictions are necessary in the MEL to ensure that an acceptable level of safety is maintained.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "The MEL is part of the Operations Manual and is established in compliance with ORO.MLR.105 Minimum equipment list and CAT.IDE.A.105 Minimum equipment for flight (Regulation (EU) No 965/2012).",
    },
  },
  {
    comment: "SLIDE VAAF-T5.2: MEL and the Commander",
    eyebrow: EYEBROW,
    title: "5.2 La MEL y la decisión del Comandante",
    subtitle: "MEL · General Information · Introduction to the MEL",
    leftPct: 58,
    leftTitle: "INTRODUCTION TO THE MEL",
    rightTitle: "STATUS SD PAGE",
    image: sisFig("sis_sd_page", SIS1),
    imageAlt: "System display page",
    sourceRef: src("GEN Introduction to the MEL (p. 431–432)"),
    cards: [
      {
        heading: "Inoperative items",
        bullets: [
          "When an item is discovered to be inoperative, it is reported by making an entry in the technical logbook. The item is then either rectified or may be deferred per the MEL before further operation.",
          "MEL conditions and limitations do not release the Commander from determining if the aircraft is in a fit condition for safe operation with inoperative items allowed by the MEL.",
          "The provisions of the MEL are applicable until the aircraft commences the flight. Any decision to continue a flight following a failure which becomes apparent between the commencement of the flight and the start of the take off must be subject to pilot judgment and good airmanship.",
        ],
      },
    ],
    alert: {
      level: "CAUTION",
      text: "Equipment obviously basic to aircraft airworthiness (wings, rudders, flaps, engines, landing gear, etc.) is not listed. All items related to the airworthiness of the aircraft and/or the operational regulation that are not included on the list are automatically required to be operative.",
    },
  },
  {
    comment: "SLIDE VAAF-T5.3: MEL contents and documentary units",
    eyebrow: EYEBROW,
    title: "5.3 Estructura de la MEL",
    subtitle: "MEL · General Information · MEL Contents · Documentary Unit",
    leftPct: 55,
    leftTitle: "MEL CONTENTS · DOCUMENTARY UNIT (DU)",
    rightTitle: "MEL ENTRIES · ECAM ALERT",
    image: fig("mel_entry"),
    imageAlt: "MEL Entries example: ECAM alert AUTO FLT AP OFF with aircraft status and condition of dispatch",
    sourceRef: src("GEN MEL Contents, Documentary Unit (p. 434–437)"),
    cards: [
      {
        heading: "This MEL has four sections",
        bullets: [
          "General Information (GEN): general information and organization of the manual.",
          "MEL Entries (ME): lists all the ECAM alerts and indicates the associated MEL item (if any) to apply for dispatching the aircraft. A user-friendly entry point when an ECAM alert reports a system failure.",
          "MEL Items (MI): lists all the MEL items with the associated dispatch conditions.",
          "MEL Operational Procedures (MO): the operational procedures that are associated with the MEL items.",
        ],
      },
      {
        heading: "Documentary Units",
        paragraph: "The MEL is made of Documentary Units (DU). In the MEL, a DU can be an ECAM alert, an MEL item, or an MEL operational procedure. The \"Applicable to\" field lists the aircraft to which the DU applies.",
      },
    ],
    alert: { level: "NOTE", text: "The MEL Maintenance Procedures are published in the AMM." },
  },
  {
    comment: "SLIDE VAAF-T5.4: MEL Entries - aircraft status",
    eyebrow: EYEBROW,
    title: "5.4 MEL Entries: de la alerta ECAM al ítem",
    subtitle: "MEL · How to Use the MEL Entries Section?",
    leftPct: 50,
    leftTitle: "AIRCRAFT STATUS COLUMN",
    rightTitle: "ECAM ALERT: AUTO FLT AP OFF",
    image: fig("mel_entry"),
    imageAlt: "AUTO FLT AP OFF: actual alert refers to item 22-10-01, false alert to item 22-10-06",
    sourceRef: src("GEN How to Use the MEL Entries Section? (p. 445–446)"),
    cards: [
      {
        heading: "MEL Entries",
        paragraph: "For each ECAM alert, this section indicates the associated MEL item (if any) to be applied for the dispatch. An ECAM alert may cover one or several failure modes of the monitored system.",
      },
      {
        heading: "Aircraft status",
        bullets: [
          "NIL: when there is only one failure mode.",
          "Actual alert: the monitored system is inoperative. The failure mode is the failure of the monitored system.",
          "False alert: the monitoring system is inoperative. The monitored system remains fully operative.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE VAAF-T5.5: MEL Entries - condition of dispatch",
    eyebrow: EYEBROW,
    title: "5.5 Condición de despacho: NO DISPATCH y «Not related to MEL»",
    subtitle: "MEL · How to Use the MEL Entries Section?",
    leftPct: 52,
    leftTitle: "CONDITION OF DISPATCH COLUMN",
    rightTitle: "ECAM ALERT: AUTO FLT AP OFF",
    image: fig("mel_entry"),
    imageAlt: "Condition of dispatch column of the MEL Entries",
    sourceRef: src("GEN How to Use the MEL Entries Section? (p. 445–446)"),
    cards: [
      {
        heading: "Condition of dispatch",
        bullets: [
          "For each failure mode, the CONDITION OF DISPATCH column gives the applicable MEL item(s) for dispatch.",
          "NO DISPATCH: it is not permitted to dispatch the aircraft when the ECAM displays this alert.",
          "Not related to MEL: the ECAM alert does not report a system failure but a reversible abnormal condition (state of a system, aircraft configuration or external condition). The MEL shall not be used. This is not a NO-GO situation.",
        ],
      },
    ],
    alert: {
      level: "CAUTION",
      text: "The flight crew is responsible for checking that the condition of the aircraft systems/components complies with the MEL requirements. If not, the dispatch of the aircraft is not permitted.",
    },
  },
  {
    comment: "SLIDE VAAF-T5.6: MEL Items - item numbering",
    eyebrow: EYEBROW,
    title: "5.6 MEL Items: numeración",
    subtitle: "MEL · How to Use the MEL Items Section?",
    leftPct: 52,
    leftTitle: "ITEM NUMBERING",
    rightTitle: "MEL ITEM 22-10-01A",
    image: fig("mel_item"),
    imageAlt: "MEL item 22-10-01A Autopilot, one inoperative: repair interval C, 2 installed, 1 required, placard yes, (o)",
    sourceRef: src("GEN How to Use the MEL Items Section? (p. 447–448)"),
    cards: [
      {
        heading: "Item numbering",
        bullets: [
          "A code of three or four pairs of digits identifies each MEL item. The first digits follow the ATA Spec 2200.",
          "Second pair of digits: 00 maintenance messages on the STATUS SD page; 01 items on the overhead panels; 05 PFD; 06 ND; 07 SD pages; 08 EWD; 09 ECAM alerts; 10 to 95 follows the ATA Spec 2200.",
          "Last pair of digits is the item rank: 01 to 49 for Airbus MMEL items; 50 to 99 for the operator's MEL items.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "One single computer may include several functions. The MEL item is either the computer (when one function is inoperative, the computer is considered inoperative) or each function separately (if several functions are inoperative, all the related MEL items apply).",
    },
  },
  {
    comment: "SLIDE VAAF-T5.7: Dispatch conditions",
    eyebrow: EYEBROW,
    title: "5.7 Condiciones de despacho, provisos e instalados/requeridos",
    subtitle: "MEL · How to Use the MEL Items Section?",
    leftPct: 55,
    leftTitle: "DISPATCH CONDITIONS",
    rightTitle: "MEL ITEM 22-10-01A",
    image: fig("mel_item"),
    imageAlt: "Dispatch condition 22-10-01A with repair interval, number installed, number required and placard",
    sourceRef: src("GEN How to Use the MEL Items Section? (p. 448–449)"),
    cards: [
      {
        heading: "Dispatch conditions",
        bullets: [
          "Some MEL items may have several dispatch conditions. Each dispatch condition offers a different option to dispatch the aircraft. Example 27-10-01C: 27-10-01 is the item number; the letter \"C\" identifies the dispatch condition.",
          "Only one dispatch condition is selected and applied at a time.",
          "Proviso: each dispatch condition has one or several requirements, called provisos, numbered 1), 2), 3)… All the provisos of the selected dispatch condition must be complied with.",
          "Nbr installed: the quantity installed on the aircraft. Nbr required: the minimum quantity that must be operative for dispatch.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "The dispatch condition reference is used to identify the open MEL items in the logbook and to refer to the associated operational and maintenance procedures.",
    },
  },
  {
    comment: "SLIDE VAAF-T5.8: Repair interval",
    eyebrow: EYEBROW,
    title: "5.8 Intervalo de reparación (categorías A, B, C y D)",
    subtitle: "MEL · Preamble · MI-00-05 Repair Interval",
    leftPct: 58,
    leftTitle: "REPAIR INTERVAL",
    rightTitle: "MEL ITEM 22-10-01A",
    image: fig("mel_item"),
    imageAlt: "Repair interval column of an MEL item",
    sourceRef: src("MI-00-05 Repair Interval (p. 714)"),
    cards: [
      {
        heading: "Repair interval",
        paragraph: "Inoperative items, deferred in accordance with the MEL, must be rectified at or before the expiration of the repair interval established by the letter designators given in the \"Repair Interval\" column.",
      },
    ],
    table: {
      headers: ["Category", "Interval"],
      rows: [
        ["A", "No standard interval; rectified in accordance with the dispatch conditions stated in the MEL (calendar days start at 00:01 the day following discovery; flights or flight hours start at the first flight following discovery)."],
        ["B", "Three (3) consecutive calendar days, excluding the day of discovery."],
        ["C", "Ten (10) consecutive calendar days, excluding the day of discovery."],
        ["D", "One hundred and twenty (120) consecutive calendar days, excluding the day of discovery."],
      ],
    },
    alert: {
      level: "NOTE",
      text: "Example: if recorded at 13:00 on January 26th, the 3-day interval (B) begins at 00:01 on January 27th and ends at 23:59 on January 29th.",
    },
  },
  {
    comment: "SLIDE VAAF-T5.9: Placard and (o)(m) procedures",
    eyebrow: EYEBROW,
    title: "5.9 Placard y procedimientos (o) y (m)",
    subtitle: "MEL · How to Use the MEL Items Section?",
    leftPct: 55,
    leftTitle: "PLACARD · OPERATIONAL AND MAINTENANCE PROCEDURES",
    rightTitle: "OPERATIONAL PROCEDURE 22-10-01A(B)",
    image: fig("mel_opsproc"),
    imageAlt: "MEL operational procedure 22-10-01A(B) Autopilot: flight preparation and limitations",
    sourceRef: src("GEN How to Use the MEL Items Section? (p. 450–451)"),
    cards: [
      {
        heading: "Placard",
        paragraph: "The control(s), and/or indicator(s) related to inoperative equipment, component, system or function should be clearly placarded to inform the flight crew, cabin crew or ground crew members of the equipment condition.",
      },
      {
        heading: "Procedures",
        bullets: [
          "The (o) symbol identifies an operational procedure; the (m) symbol a maintenance procedure; (o)(m) means that both are required.",
          "The flight crew must read the content of the operational procedure before each flight. The operational procedure must be applied before each flight, unless the dispatch condition specifies a different periodicity.",
          "The maintenance procedure is normally a one-time action that must be applied before the first MEL dispatch (to deactivate or to check a system).",
        ],
      },
    ],
  },
  {
    comment: "SLIDE VAAF-T5.10: Operational procedures section",
    eyebrow: EYEBROW,
    title: "5.10 MEL Operational Procedures",
    subtitle: "MEL · How to Use the MEL Operational Procedures Section?",
    leftPct: 50,
    leftTitle: "MEL OPERATIONAL PROCEDURES",
    rightTitle: "EXAMPLE: AUTOPILOT (AP)",
    image: fig("mel_opsproc"),
    imageAlt: "When one AP is inoperative the maximum landing capability is CAT 3 SINGLE; with both inoperative RVSM is not permitted and maximum landing capability is CAT 1",
    sourceRef: src("GEN How to Use the MEL Operational Procedures Section? (p. 457–458); MO-22-10 22-10-01A(B)"),
    cards: [
      {
        heading: "Operational procedures",
        bullets: [
          "The operational procedures are split and organized into specific flight phases. The flight crew has to apply the part of the operational procedure related to the relevant flight phase.",
          "General Information: all information that the pilots must know due to MEL condition.",
          "Flight Preparation/Limitation: all the limitations due to MEL condition that the pilots must consider for the route selection and flight preparation, including performance penalties.",
        ],
      },
      {
        heading: "Example 22-10-01A(B) Autopilot (AP)",
        bullets: [
          "When one AP is inoperative: maximum landing capability is CAT 3 SINGLE.",
          "When both APs are inoperative: RVSM operations are not permitted; maximum landing capability is CAT 1.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE VAAF-T5.11: Criteria for dispatch and maintenance action",
    eyebrow: EYEBROW,
    title: "5.11 Criterios de despacho y acción de mantenimiento",
    subtitle: "MEL · Preamble · MI-00-03 · MI-00-04",
    leftPct: 58,
    leftTitle: "CRITERIA FOR DISPATCH · MAINTENANCE ACTION",
    rightTitle: "STATUS SD PAGE",
    image: sisFig("sis_sd_page", SIS1),
    imageAlt: "System display page",
    sourceRef: src("MI-00-03 Criteria for Dispatch (p. 706); MI-00-04 Maintenance Action (p. 710)"),
    cards: [
      {
        heading: "Criteria for dispatch",
        bullets: [
          "The decision of the Commander of the flight to have inoperative items corrected before the flight will take precedence over the provisions contained in the MEL. The Commander may request requirements above the minimum listed.",
          "The MEL cannot take into account all multiple unserviceabilities. Before dispatching an aircraft with multiple MEL items inoperative, it must be assured that any interface or inter-relationship between inoperative items will not result in a degradation in the level of safety and/or an undue increase in crew workload.",
        ],
      },
      {
        heading: "Maintenance action",
        bullets: [
          "The technical logbook aboard the aircraft must contain a detailed description of the inoperative item(s), special advice to the flight crew, if necessary, and information about corrective action taken.",
          "When they are accessible to the crew in flight, the control(s), and/or indicator(s) related to inoperative system(s) must be clearly placarded.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE VAAF-T5.12: ECAM and maintenance status",
    eyebrow: EYEBROW,
    title: "5.12 Alertas ECAM y mensajes MAINTENANCE en STATUS",
    subtitle: "MEL · Preamble · MI-00-08 ECAM and Maintenance Status",
    leftPct: 58,
    leftTitle: "ECAM AND MAINTENANCE STATUS",
    rightTitle: "STATUS SD PAGE",
    image: sisFig("sis_sd_page", SIS1),
    imageAlt: "System display page where the STATUS page shows MAINTENANCE messages",
    sourceRef: src("MI-00-08 ECAM and Maintenance Status, bloque de la variante de referencia (p. 731–732)"),
    cards: [
      {
        heading: "ECAM",
        bullets: [
          "ECAM warning and ECAM caution messages are listed in the \"MEL Entries\" section. ECAM advisory and ECAM memo messages are not listed.",
        ],
      },
      {
        heading: "Maintenance messages on the STATUS SD page",
        bullets: [
          "A MAINTENANCE message indicates the presence of a category of failure which can only be identified by interrogation of the CFDS.",
          "All MAINTENANCE messages have a repair interval C except DAR, DMU or ACMS and QAR, which have a repair interval D.",
          "Dispatch with MAINTENANCE messages displayed on the STATUS SD page is permitted without condition except for AIR BLEED: refer to item 36-00-01 AIR BLEED MAINTENANCE message.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE VAAF-T5.13: Specific operations included in MEL",
    eyebrow: EYEBROW,
    title: "5.13 Operaciones específicas: CAT 2/3, PBN y RVSM",
    subtitle: "MEL · Specific Operations Included in MEL",
    leftPct: 55,
    leftTitle: "SPECIFIC OPERATIONS INCLUDED IN MEL",
    rightTitle: "PERF APPR",
    image: sisFig("sis6_perf_appr", SIS6),
    imageAlt: "MCDU PERF APPR page",
    sourceRef: src("GEN Specific Operations, Landing Capabilities, PBN, RVSM, ATC Datalink (p. 458–466)"),
    cards: [
      {
        heading: "The MEL includes references to the following operations",
        paragraph: "CAT II (DH 100 ft, RVR 300 m) · CAT III (DH 20 ft, RVR 75 m) · EFB · LVTO (RVR 125 m) · RNAV 10 · RNAV 5 · RNAV 1 · RNP 1 · RNP APCH (LNAV, LNAV/VNAV) · RVSM · CPDLC · ADS-B.",
      },
      {
        heading: "Impact of an inoperative item",
        bullets: [
          "Landing capability: when the landing capability of the aircraft is impacted by an inoperative item, the associated MEL operational procedure provides the maximum landing capability.",
          "PBN: the associated MEL operational procedure provides the RNAV / RNP limitations. The minimum equipment is also listed in FCOM PRO-SPO-51.",
          "RVSM: the associated MEL operational procedure provides the RVSM limitations (minimum equipment in the AFM and FCOM PRO-SPO-50).",
        ],
      },
    ],
  },
];

export const MCC_VAAF_T5: MccLesson = {
  id: "a3200000-0000-0000-0000-000000000405",
  course_id: MCC_COURSE_ID,
  title: "VAAF-T5. Uso de la MEL",
  slug: "vaaf-t5-uso-mel",
  sequence_order: 28,
  lesson_order: 28,
  min_seconds: mccMinSeconds(VAAF_T5_SLIDES.length, mccVideoSeconds(VAAF_T5_SLIDES)),
  module_title: MCC_MODULES.VAAF,
  content_html: joinSlides(VAAF_T5_SLIDES),
};

export const VAAF_T5_SLIDE_COUNT = VAAF_T5_SLIDES.length;
