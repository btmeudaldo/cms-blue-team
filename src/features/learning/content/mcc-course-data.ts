import type { CourseDocumentationItem } from "@/features/learning/content/c172-course-data";
import { MCC_MODULES, joinSlides, type MccLesson, type MccSlideSpec } from "./mcc/slide-builder.ts";
import { MCC_INT_01 } from "./mcc/int-01.ts";
import { MCC_INT_02 } from "./mcc/int-02.ts";
import { MCC_INT_03 } from "./mcc/int-03.ts";
import { MCC_SOP_01 } from "./mcc/sop-01.ts";
import { MCC_SOP_02 } from "./mcc/sop-02.ts";
import { MCC_SOP_03 } from "./mcc/sop-03.ts";
import { MCC_SOP_04 } from "./mcc/sop-04.ts";
import { MCC_SOP_05 } from "./mcc/sop-05.ts";
import { MCC_SOP_06 } from "./mcc/sop-06.ts";
import { MCC_SOP_07 } from "./mcc/sop-07.ts";
import { MCC_SOP_08 } from "./mcc/sop-08.ts";
import { MCC_SOP_09 } from "./mcc/sop-09.ts";
import { MCC_SOP_10 } from "./mcc/sop-10.ts";
import { MCC_SOP_11 } from "./mcc/sop-11.ts";
import { MCC_SOP_12 } from "./mcc/sop-12.ts";
import { MCC_SOP_13 } from "./mcc/sop-13.ts";
import { MCC_SOP_14 } from "./mcc/sop-14.ts";
import { MCC_SIS_01 } from "./mcc/sis-01.ts";
import { MCC_SIS_02 } from "./mcc/sis-02.ts";
import { MCC_SIS_03 } from "./mcc/sis-03.ts";
import { MCC_SIS_04 } from "./mcc/sis-04.ts";
import { MCC_SIS_05 } from "./mcc/sis-05.ts";
import { MCC_SIS_06 } from "./mcc/sis-06.ts";
import { MCC_VAAF_T1 } from "./mcc/vaaf-t1.ts";
import { MCC_VAAF_T2 } from "./mcc/vaaf-t2.ts";

export const MCC_COURSE_ID = "a3200000-0000-0000-0000-000000000320";
export const MCC_COURSE_SLUG = "aps-mcc-a320";
export const MCC_COURSE_TITLE = "Curso APS MCC — Airbus A320";
export const MCC_COURSE_DESCRIPTION =
  "Curso teórico APS MCC (30 horas online + 5 horas presenciales) basado estrictamente en el Anexo 10 del Manual de Formación, FCOM A320, Procedures APS MCC, Standard Callouts y Performance Manual.";
export const MCC_COURSE_IMAGE_URL =
  "https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/mcc/entrol-a32-cover.webp?v=1795616500";
export const MCC_COURSE_REQUIRES_EXAM = false;

export const MCC_DOCUMENTATION: CourseDocumentationItem[] = [
  {
    category: "Manual de Formación",
    title: "Anexo 10 — Curso APS MCC (Syllabus y Pruebas de Progreso)",
    url: "#anexo-10-aps-mcc",
    badge: "Anexo 10",
  },
  {
    category: "Documentación Técnica A320",
    title: "FCOM A320 — Systems, Procedures & Limitations",
    url: "#fcom-a320",
    badge: "FCOM",
  },
  {
    category: "Operación Multi-Crew",
    title: "PROCEDURES APS MCC & Standard Callouts",
    url: "#procedures-callouts",
    badge: "SOP",
  },
];

export { clampLeftPct } from "./mcc/slide-builder.ts";

// ============================================================================
// CTA-1: AIRCRAFT GENERAL, COCKPIT, EIS & AIRBUS GOLDEN RULES (10 SLIDES)
// ============================================================================
const CTA_1_SLIDES: MccSlideSpec[] = [
  {
    comment: "SLIDE 1.1: A320 Course Scope & Airbus Golden Rules",
    eyebrow: "APS MCC · A320 · CTA-1",
    title: "1.1 A320 Course Scope & Airbus Golden Rules",
    subtitle: "Aircraft General & Cockpit Philosophy",
    leftTitle: "AIRBUS GOLDEN RULES",
    rightTitle: "A320 TWO-CREW COCKPIT",
    image: "/images/mcc/ac_gen_cockpit_p158.png",
    imageAlt: "A320 Cockpit Overview",
    sourceRef: "Source: PROCEDURES APS MCC — Golden Rules (p.18–22)",
    cards: [
      {
        heading: "The 4 Airbus Golden Rules",
        bullets: [
          "<strong>#1 Fly, Navigate, Communicate:</strong> In that order, with appropriate PF/PM tasksharing in normal and abnormal ops.",
          "<strong>#2 Use the appropriate level of automation at all times:</strong> Determine, select, understand its operational effect, and confirm aircraft reaction.",
          "<strong>#3 Understand the FMA at all times:</strong> Monitor, announce, confirm, and understand the Flight Mode Annunciator.",
          "<strong>#4 Take actions if things do not go as expected:</strong> Change automation level (Managed → Selected → Manual); PM communicates, challenges, or takes over if necessary.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "Always keep in mind the key message of Golden Rule #1: Fly the aircraft! Achieve and maintain desired targets and flight path before secondary tasks.",
    },
  },
  {
    comment: "SLIDE 1.2: Aircraft General & Principal Dimensions",
    eyebrow: "APS MCC · A320 · CTA-1",
    title: "1.2 Aircraft General & Principal Dimensions",
    subtitle: "ATA 20 · Aircraft General",
    leftTitle: "DIMENSIONS & GROUND MANEUVER",
    rightTitle: "PRINCIPAL DIMENSIONS",
    image: "/images/mcc/ac_gen_dimensions_p151.png",
    imageAlt: "A320 Principal External Dimensions",
    sourceRef: "Source: FCOM ATA 20 Aircraft General (p.239–256) · CBT p.151",
    cards: [
      {
        heading: "Airframe & Powerplant Overview",
        bullets: [
          "Medium-range, single-aisle, twin-engine commercial transport aircraft with Fly-by-Wire flight controls.",
          "Equipped with CFM International (CFM56-5B) or International Aero Engines (IAE V2500) turbofans (course reference: CFM56-5B).",
        ],
      },
      {
        heading: "Principal Dimensions & Clearances",
        bullets: [
          "<strong>Length:</strong> 37.57 m (123 ft 3 in) · <strong>Wingspan:</strong> 34.10 m (111 ft 10 in) (35.80 m with sharklets).",
          "<strong>Height:</strong> 11.76 m / 12.14 m (tail fin) · <strong>Track:</strong> 7.59 m (24 ft 11 in) · <strong>Wheelbase:</strong> 12.64 m.",
          "<strong>Ground Maneuver:</strong> If the wingtip clears an obstacle during a turn, the tail also clears it within the wing radius.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "For a 180° turn on a 30 m / 45 m runway, CM1 physically tracks over the runway edge with ~1.6 m nosewheel and ~2 m main gear clearance.",
    },
  },
  {
    comment: "SLIDE 1.3: Pressurized vs Unpressurized Zones & Cargo",
    eyebrow: "APS MCC · A320 · CTA-1",
    title: "1.3 Pressurized vs Unpressurized Zones & Cargo",
    subtitle: "ATA 20 · Aircraft Zoning",
    leftTitle: "FUSELAGE ZONING & CARGO",
    rightTitle: "UNPRESSURIZED AREAS",
    image: "/images/mcc/ac_gen_unpressurized_p154.png",
    imageAlt: "A320 Unpressurized Areas",
    sourceRef: "Source: FCOM ATA 20 Aircraft General (p.257–274) · CBT p.154",
    cards: [
      {
        heading: "Pressurized vs Unpressurized Areas",
        bullets: [
          "<strong>Pressurized areas:</strong> Cockpit, avionics bay, passenger cabin, and cargo compartments.",
          "<strong>Unpressurized areas:</strong> Radome, nose gear bay, air conditioning packs bay, main gear bay, and tail cone (APU compartment).",
        ],
      },
      {
        heading: "Cargo Compartments",
        bullets: [
          "Three underfloor cargo compartments: <strong>Forward (FWD)</strong>, <strong>Aft (AFT)</strong>, and <strong>Bulk</strong> cargo.",
          "FWD and AFT compartments accommodate standard LD3-45 containers or bulk-loaded baggage.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE 1.4: Cockpit Layout & Panel Organization",
    eyebrow: "APS MCC · A320 · CTA-1",
    title: "1.4 Cockpit Layout & Panel Organization",
    subtitle: "ATA 20 · Cockpit Philosophy",
    leftTitle: "PANEL ARCHITECTURE",
    rightTitle: "TWO-CREW COCKPIT LAYOUT",
    image: "/images/mcc/ac_gen_cockpit_p158.png",
    imageAlt: "A320 Cockpit Panels",
    sourceRef: "Source: PROCEDURES APS MCC — Cockpit Panels (p.136) · FCOM ATA 20",
    cards: [
      {
        heading: "Main Cockpit Zones",
        bullets: [
          "<strong>Overhead Panel:</strong> System controls (ADIRS, FLT CTL, EVAC, EMER ELEC, HYD, FUEL, ELEC, AIR COND, ANTI-ICE, APU, EXT LT, INT LT, SIGNS).",
          "<strong>Glareshield:</strong> Two EFIS Control Panels, Flight Control Unit (FCU), and Master Warning / Master Caution + Chrono.",
          "<strong>Main Instrument Panel:</strong> 6 LCD Display Units (Capt PFD/ND, E/WD, SD, F/O ND/PFD), ISIS, Gear Lever, Autobrake.",
          "<strong>Center Pedestal:</strong> 2 MCDUs, Audio/Radio panels, Thrust Levers, ENG Master/Mode, Speedbrake, Flaps, Rudder Trim, Parking Brake.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "Airbus Dark Cockpit philosophy: in normal operation, overhead pushbuttons remain extinguished (lights out = normal).",
    },
  },
  {
    comment: "SLIDE 1.5: EIS Architecture & Display Switching",
    eyebrow: "APS MCC · A320 · CTA-1",
    title: "1.5 EIS Architecture & Display Switching",
    subtitle: "ATA 31 · Indicating / Recording",
    leftTitle: "EIS & DISPLAY MANAGEMENT",
    rightTitle: "EFIS / PFD & PANEL",
    image: "/images/mcc/efis_pfd_overview_p675.png",
    imageAlt: "A320 EIS PFD Overview",
    sourceRef: "Source: FCOM ATA 31 Indicating/Recording (p.2297–2340) · CBT p.675",
    cards: [
      {
        heading: "Electronic Instrument System (EIS)",
        bullets: [
          "Consists of <strong>EFIS</strong> (2 PFDs + 2 NDs) and <strong>ECAM</strong> (Upper E/WD + Lower SD).",
          "All <strong>6 Display Units (DUs)</strong> are identical and interchangeable.",
          "Driven by <strong>3 Display Management Computers (DMCs)</strong>: DMC 1 supplies Capt PFD/ND & E/WD; DMC 2 supplies F/O PFD/ND & SD; DMC 3 is hot spare.",
        ],
      },
      {
        heading: "Switching & Reconfiguration",
        bullets: [
          "If a PFD fails, its image automatically transfers to the adjacent ND (recoverable via PFD/ND XFR pb).",
          "If E/WD fails, it automatically transfers to the SD; SD pages can still be viewed by holding the desired ECP system pb.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "The ATT HDG, AIR DATA, EIS DMC, and ECAM/ND XFR selectors on the Switching Panel allow manual crew reconfiguration.",
    },
  },
  {
    comment: "SLIDE 1.6: Primary Flight Display (PFD) Indications",
    eyebrow: "APS MCC · A320 · CTA-1",
    title: "1.6 Primary Flight Display (PFD) Indications",
    subtitle: "ATA 31 · EFIS PFD",
    leftTitle: "PFD PRIMARY PARAMETERS",
    rightTitle: "PFD & EFIS CONTROL PANEL",
    image: "/images/mcc/efis_pfd_overview_p675.png",
    imageAlt: "PFD Overview and EFIS Control Panel",
    sourceRef: "Source: FCOM ATA 31 (p.2341–2410) · CBT p.675",
    cards: [
      {
        heading: "Core PFD Layout",
        bullets: [
          "<strong>Top:</strong> Flight Mode Annunciator (FMA) in 5 columns.",
          "<strong>Center:</strong> Attitude indicator, Flight Director (FD) crossbars or Flight Path Vector (FPV / Bird), Slip/Sideslip index (yellow/blue β-target).",
          "<strong>Left:</strong> Airspeed & Mach scale with speed trend arrow and target airspeed.",
          "<strong>Right:</strong> Barometric altitude tape, Vertical Speed indicator, and selected altitude/FL.",
          "<strong>Bottom:</strong> Heading/Track scale, ILS course/deviation, and Radio Altitude (below 2,500 ft RA).",
        ],
      },
    ],
    alert: {
      level: "CAUTION",
      text: "Both Flight Directors (FDs) must be switched ON or both OFF. Never fly with only one FD selected ON.",
    },
  },
  {
    comment: "SLIDE 1.7: PFD Speed Tape & Characteristic Speeds",
    eyebrow: "APS MCC · A320 · CTA-1",
    title: "1.7 PFD Speed Tape & Characteristic Speeds",
    subtitle: "ATA 31 · Speed Indications",
    leftTitle: "CHARACTERISTIC SPEEDS",
    rightTitle: "PFD SPEED TAPE & MCDU PERF",
    image: "/images/mcc/efis_pfd_speeds_p690.png",
    imageAlt: "PFD Speed Scale V1 VR V2",
    sourceRef: "Source: FCOM ATA 31 (p.2350–2390) · CBT p.690",
    cards: [
      {
        heading: "Key Speed Symbols on PFD",
        bullets: [
          "<strong>V1 (cyan 1), VR (cyan circle), V2 (magenta triangle):</strong> Inserted via MCDU PERF TAKE OFF.",
          "<strong>Green Dot (green circle):</strong> Best lift-to-drag ratio speed in clean configuration (also OEI driftdown/climb speed).",
          "<strong>S / F speeds (green S / F):</strong> Minimum retraction speeds for Slats (S) and Flaps (F).",
          "<strong>VLS (amber top line):</strong> Lowest Selectable Speed; <strong>VαPROT / VαMAX:</strong> Amber/black and red AOA protection bands.",
          "<strong>VMAX (red/black barber pole):</strong> Lowest of VMO/MMO, VLE, or VFE; <strong>VFE NEXT (amber =):</strong> Next flap extension limit.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "Managed target speed is displayed in magenta; selected target speed (FCU) is displayed in cyan (blue).",
    },
  },
  {
    comment: "SLIDE 1.8: Navigation Display (ND) Modes & Symbology",
    eyebrow: "APS MCC · A320 · CTA-1",
    title: "1.8 Navigation Display (ND) Modes & Symbology",
    subtitle: "ATA 31 · EFIS ND",
    leftTitle: "ND MODES & OVERLAYS",
    rightTitle: "ND ARC & ROSE MODES",
    image: "/images/mcc/efis_nd_modes_p644.png",
    imageAlt: "A320 Navigation Display ARC Mode",
    sourceRef: "Source: FCOM ATA 31 (p.2411–2460) · CBT p.644",
    cards: [
      {
        heading: "5 Selectable ND Modes (EFIS Control Panel)",
        bullets: [
          "<strong>ROSE ILS / ROSE VOR:</strong> 360° compass rose with raw course pointer and lateral/vertical deviation bar.",
          "<strong>ROSE NAV:</strong> 360° compass rose displaying active F-PLN, navaids, and aircraft position.",
          "<strong>ARC:</strong> 90° forward sector (most common in flight) showing active F-PLN, weather radar/terrain, and TCAS.",
          "<strong>PLAN:</strong> North-up static map centered on the active MCDU F-PLN waypoint for preflight route verification.",
        ],
      },
      {
        heading: "EFIS Option Pushbuttons",
        bullets: [
          "Overlay options (one active at a time): <strong>CSTR</strong>, <strong>WPT</strong>, <strong>VOR.D</strong>, <strong>NDB</strong>, <strong>ARPT</strong>.",
          "Green diamond = actual Track; Cyan bug = selected Heading/Track.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE 1.9: ECAM System: E/WD & System Display (SD)",
    eyebrow: "APS MCC · A320 · CTA-1",
    title: "1.9 ECAM System: E/WD & System Display (SD)",
    subtitle: "ATA 31 · ECAM Presentation",
    leftTitle: "E/WD, SD & COLOR CODING",
    rightTitle: "ECAM NORMAL GREEN CODING",
    image: "/images/mcc/ecam_ewd_sd_normal_p565.png",
    imageAlt: "ECAM E/WD and SD Normal Coding",
    sourceRef: "Source: FCOM ATA 31 (p.2461–2520) · CBT p.565",
    cards: [
      {
        heading: "E/WD (Upper) & SD (Lower)",
        bullets: [
          "<strong>E/WD:</strong> Primary engine parameters (N1, EGT, N2, FF), FOB, Slat/Flap position, plus Warning/Caution messages (left) and Memos/Limitations (right).",
          "<strong>SD:</strong> 12 system pages (automatically selected by flight phase or failure, or manually via ECP) + permanent data bar (TAT, SAT, GW, UTC).",
        ],
      },
    ],
    table: {
      headers: ["Color", "ECAM Meaning"],
      rows: [
        ["Red", "Configuration/failure requiring immediate action (Warning)"],
        ["Amber", "Failure/abnormal condition requiring crew awareness (Caution)"],
        ["Green", "Normal operation / normal indication"],
        ["Cyan / White", "Actions to be performed (Cyan) / Titles & remarks (White)"],
        ["Magenta", "Special messages / inhibits (e.g. T.O INHIBIT)"],
      ],
    },
    alert: {
      level: "NOTE",
      text: "On the SD, green color coding indicates normal operating conditions across all system synoptics.",
    },
  },
  {
    comment: "SLIDE 1.10: ECAM Control Panel (ECP) & STATUS Page",
    eyebrow: "APS MCC · A320 · CTA-1",
    title: "1.10 ECAM Control Panel (ECP) & STATUS Page",
    subtitle: "ATA 31 · ECP & STATUS",
    leftTitle: "ECP CONTROLS & STATUS PAGE",
    rightTitle: "ECAM STATUS PAGE",
    image: "/images/mcc/ecam_status_page_p575.png",
    imageAlt: "ECAM STATUS Page Structure",
    sourceRef: "Source: FCOM ATA 31 (p.2500–2548) · CBT p.575",
    cards: [
      {
        heading: "ECAM Control Panel (ECP) Pushbuttons",
        bullets: [
          "<strong>T.O CONFIG:</strong> Simulates takeoff power to verify aircraft takeoff configuration.",
          "<strong>EMER CANC:</strong> Cancels current Level 3 aural warning (and Level 2/1 caution for rest of flight unless recalled).",
          "<strong>CLR / RCL / STS / ALL:</strong> Clear failure page, Recall cleared warnings (hold >3s for cancelled cautions), display STATUS, or cycle all SD pages.",
        ],
      },
      {
        heading: "STATUS Page Sections",
        bullets: [
          "Displays operational summary: <strong>Limitations</strong>, <strong>Approach Procedures</strong>, <strong>Information</strong>, and <strong>Inoperative Systems (INOP SYS)</strong>.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "During approach, when Flaps 1 is selected, the ECAM automatically recalls the STATUS page if any status items exist.",
    },
  },
];

// ============================================================================
// CTA-2: ELECTRICAL, HYDRAULIC & FUEL SYSTEMS (12 SLIDES)
// ============================================================================
const CTA_2_SLIDES: MccSlideSpec[] = [
  {
    comment: "SLIDE 2.1: Electrical System Overview & Generation",
    eyebrow: "APS MCC · A320 · CTA-2",
    title: "2.1 Electrical System Overview & Generation",
    subtitle: "ATA 24 · Electrical",
    leftTitle: "AC & DC POWER SOURCES",
    rightTitle: "ELECTRICAL ARCHITECTURE",
    image: "/images/mcc/elec_architecture_p847.png",
    imageAlt: "A320 Electrical System Architecture",
    sourceRef: "Source: FCOM ATA 24 Electrical (p.1887–1915) · CBT p.847",
    cards: [
      {
        heading: "AC Power Sources (115V / 400 Hz, 3-phase)",
        bullets: [
          "<strong>GEN 1 & GEN 2:</strong> Driven by each engine via an Integrated Drive Generator (IDG) at constant speed (90 kVA each).",
          "<strong>APU GEN:</strong> Driven by the APU (90 kVA), available on ground and in flight.",
          "<strong>EXT PWR:</strong> Ground power cart connection; <strong>EMER GEN:</strong> Hydraulically driven (Blue/RAT) emergency generator (5 kVA).",
        ],
      },
      {
        heading: "DC Power Sources (28V DC)",
        bullets: [
          "<strong>TR 1 & TR 2:</strong> Transformer Rectifiers converting AC BUS 1/2 to DC BUS 1/2; <strong>ESS TR</strong> backs up DC ESS.",
          "<strong>BAT 1 & BAT 2:</strong> Two 24V (nominal) Ni-Cad batteries supplying DC BAT bus, APU start, and emergency backup.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "Automatic priority order: Engine GEN (on-side) > EXT PWR > APU GEN > Opposite Engine GEN.",
    },
  },
  {
    comment: "SLIDE 2.2: Normal AC/DC Distribution & Bus Tie",
    eyebrow: "APS MCC · A320 · CTA-2",
    title: "2.2 Normal AC/DC Distribution & Bus Tie",
    subtitle: "ATA 24 · Distribution & BTC",
    leftTitle: "NORMAL DISTRIBUTION & RECONFIG",
    rightTitle: "BUS TIE & ESSENTIAL BUSES",
    image: "/images/mcc/elec_architecture_p847.png",
    imageAlt: "A320 AC/DC Bus Tie Architecture",
    sourceRef: "Source: FCOM ATA 24 Electrical (p.1900–1930) · CBT p.847",
    cards: [
      {
        heading: "Normal Split Configuration",
        bullets: [
          "GEN 1 supplies <strong>AC BUS 1</strong> → TR 1 → <strong>DC BUS 1</strong> → DC BAT bus.",
          "GEN 2 supplies <strong>AC BUS 2</strong> → TR 2 → <strong>DC BUS 2</strong>.",
          "<strong>AC ESS</strong> is normally fed by AC BUS 1; <strong>DC ESS</strong> is normally fed by DC BAT bus (via DC BUS 1).",
        ],
      },
      {
        heading: "Automatic Bus Tie Contactor (BTC) Logic",
        bullets: [
          "No paralleling of AC sources is permitted.",
          "If one generator fails, BTCs automatically close so the remaining generator (or APU/EXT PWR) supplies both AC BUS 1 & 2.",
          "<strong>Static Inverter:</strong> Converts DC from BAT 1 into single-phase 115V/400Hz AC for AC ESS when only batteries are available.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "If AC BUS 1 is lost, AC ESS BUS automatically transfers to AC BUS 2 (via AC ESS FEED).",
    },
  },
  {
    comment: "SLIDE 2.3: Emergency Electrical Config & RAT",
    eyebrow: "APS MCC · A320 · CTA-2",
    title: "2.3 Emergency Electrical Config & RAT",
    subtitle: "ATA 24 · EMER ELEC PWR",
    leftTitle: "EMER GEN & BATTERIES ONLY",
    rightTitle: "ELEC & EMER ELEC PANELS",
    image: "/images/mcc/elec_overhead_panel_p854.png",
    imageAlt: "Overhead ELEC and EMER ELEC PWR Panels",
    sourceRef: "Source: FCOM ATA 24 Electrical (p.1931–1950) · CBT p.854–855",
    cards: [
      {
        heading: "Loss of AC BUS 1 + AC BUS 2",
        bullets: [
          "If airspeed > 100 kt and both AC BUS 1 & 2 are lost, the <strong>Ram Air Turbine (RAT)</strong> deploys automatically to pressurize the Blue hydraulic system.",
          "Blue hydraulic pressure drives the <strong>EMER GEN</strong>, which supplies AC ESS and (via ESS TR) DC ESS.",
          "Until EMER GEN comes online (or below ~125 kt / on ground), BAT 1 & 2 supply DC ESS and AC STAT INV.",
        ],
      },
      {
        heading: "GALY & CAB / COMMERCIAL Shedding",
        bullets: [
          "In single-generator operation (in flight), main galleys are automatically shed to prevent generator overload.",
        ],
      },
    ],
    alert: {
      level: "WARNING",
      text: "Once deployed, the RAT cannot be stowed in flight; it can only be reset on the ground by maintenance.",
    },
  },
  {
    comment: "SLIDE 2.4: ELEC Overhead Panel & ECAM ELEC Page",
    eyebrow: "APS MCC · A320 · CTA-2",
    title: "2.4 ELEC Overhead Panel & ECAM ELEC Page",
    subtitle: "ATA 24 · Controls & Indications",
    leftTitle: "OVERHEAD & ECAM MONITORING",
    rightTitle: "ECAM ELEC PAGE",
    image: "/images/mcc/elec_ecam_page_p851.png",
    imageAlt: "ECAM ELEC Page Indications",
    sourceRef: "Source: FCOM ATA 24 Electrical (p.1951–1964) · CBT p.851",
    cards: [
      {
        heading: "ECAM ELEC Page Indications",
        bullets: [
          "Displays real-time Voltage (V), Load (%) or Current (A), Frequency (Hz), and IDG oil temperature (°C).",
          "Shows contactors and active bus paths in green; faults or off-line buses in amber.",
        ],
      },
      {
        heading: "ELEC & EMER ELEC PWR Overhead Controls",
        bullets: [
          "<strong>BAT 1 / BAT 2:</strong> Voltage displayed continuously; AUTO = normal.",
          "<strong>AC ESS FEED:</strong> NORM (AC BUS 1) / ALTN (forces AC BUS 2).",
          "<strong>IDG 1 / 2 Disconnect:</strong> Guarded pb to mechanically disconnect an overheated or low-oil-pressure IDG.",
        ],
      },
    ],
    alert: {
      level: "CAUTION",
      text: "Only press an IDG disconnect pb with the engine running, for max 3 seconds, and never reconnect it in flight (maintenance reset only).",
    },
  },
  {
    comment: "SLIDE 2.5: Hydraulic System: Green, Blue & Yellow",
    eyebrow: "APS MCC · A320 · CTA-2",
    title: "2.5 Hydraulic System: Green, Blue & Yellow",
    subtitle: "ATA 29 · Hydraulic",
    leftTitle: "THREE INDEPENDENT 3,000 PSI SYSTEMS",
    rightTitle: "HYDRAULIC ARCHITECTURE",
    image: "/images/mcc/hyd_architecture_p1161.png",
    imageAlt: "A320 Hydraulic System Architecture",
    sourceRef: "Source: FCOM ATA 29 Hydraulic (p.2231–2248) · CBT p.1161",
    cards: [
      {
        heading: "System Pressurization (Nominal 3,000 PSI)",
        bullets: [
          "<strong>GREEN:</strong> Pressurized by Engine 1 Engine-Driven Pump (EDP).",
          "<strong>YELLOW:</strong> Pressurized by Engine 2 EDP, an Electric Pump (ground/backup), and a Hand Pump (cargo doors).",
          "<strong>BLUE:</strong> Pressurized by an Electric Pump (normal AC power; in flight or on ground with ≥1 engine running) or the <strong>RAT</strong> (2,500 PSI in emergency).",
        ],
      },
      {
        heading: "No Fluid Transfer",
        bullets: [
          "The three systems are completely independent — hydraulic fluid is never transferred between Green, Blue, and Yellow.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "Hydraulic reservoirs are pressurized by bleed air (ENG 1 HP or crossbleed) to prevent pump cavitation.",
    },
  },
  {
    comment: "SLIDE 2.6: Power Transfer Unit (PTU) & RAT",
    eyebrow: "APS MCC · A320 · CTA-2",
    title: "2.6 Power Transfer Unit (PTU) & RAT",
    subtitle: "ATA 29 · PTU & RAT",
    leftTitle: "PTU & RAT OPERATION",
    rightTitle: "PTU & RAT SCHEMATIC",
    image: "/images/mcc/hyd_architecture_p1161.png",
    imageAlt: "Hydraulic PTU and RAT Schematic",
    sourceRef: "Source: FCOM ATA 29 Hydraulic (p.2240–2254) · CBT p.1161",
    cards: [
      {
        heading: "Bidirectional Power Transfer Unit (PTU)",
        bullets: [
          "Transfers mechanical <strong>hydraulic power</strong> (not fluid) between Green and Yellow.",
          "Automatically activates when differential pressure between Green and Yellow exceeds <strong>500 PSI</strong>.",
          "Allows Green users to be pressurized by Yellow (or vice versa) during single-engine taxi or EDP failure.",
        ],
      },
      {
        heading: "PTU Inhibits & RAT Deployment",
        bullets: [
          "PTU is automatically inhibited during the first engine start (tested on second engine start) and when cargo doors are operated.",
          "<strong>RAT:</strong> Extends automatically upon loss of both AC buses, or manually via <code>RAT MAN ON</code> pb (Blue hyd only).",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "During single-engine start, hearing the PTU self-test ('barking dog') on the second engine start confirms normal PTU operation.",
    },
  },
  {
    comment: "SLIDE 2.7: Hydraulic Users & Fire Shutoff Valves",
    eyebrow: "APS MCC · A320 · CTA-2",
    title: "2.7 Hydraulic Users & Fire Shutoff Valves",
    subtitle: "ATA 29 · Users & Isolation",
    leftTitle: "SYSTEM USER ALLOCATION",
    rightTitle: "ECAM HYD & OVERHEAD PANEL",
    image: "/images/mcc/hyd_ecam_overhead_p1167.png",
    imageAlt: "Hydraulic Users and ECAM HYD Page",
    sourceRef: "Source: FCOM ATA 29 Hydraulic (p.2235–2255) · CBT p.1167",
    cards: [
      {
        heading: "Fire Shutoff Valves",
        bullets: [
          "Installed between the Green/Yellow reservoirs and ENG 1/ENG 2 EDPs; closed by pushing the respective <code>ENG FIRE</code> pb.",
        ],
      },
    ],
    table: {
      headers: ["System", "Primary Users"],
      rows: [
        ["GREEN", "Normal Braking, Landing Gear, Nose Wheel Steering, Reverser 1, Slats & Flaps, Flight Controls (Elev/Ail/Rudder/Spoilers)"],
        ["BLUE", "Emergency Generator (EMER GEN), Slats, Flight Controls (Elev/Ail/Rudder/Spoiler 3)"],
        ["YELLOW", "Alternate & Parking Brake, Reverser 2, Cargo Doors, Flaps, Flight Controls (Elev/Rudder/Spoilers/THS)"],
      ],
    },
  },
  {
    comment: "SLIDE 2.8: HYD Overhead Panel & ECAM HYD Page",
    eyebrow: "APS MCC · A320 · CTA-2",
    title: "2.8 HYD Overhead Panel & ECAM HYD Page",
    subtitle: "ATA 29 · Controls & ECAM",
    leftTitle: "CONTROLS & ECAM SYMBOLOGY",
    rightTitle: "HYD OVERHEAD & ECAM PAGE",
    image: "/images/mcc/hyd_ecam_overhead_p1167.png",
    imageAlt: "Overhead HYD Panel and ECAM HYD Page",
    sourceRef: "Source: FCOM ATA 29 Hydraulic (p.2250–2260) · CBT p.1167",
    cards: [
      {
        heading: "Overhead HYD Panel",
        bullets: [
          "<strong>ENG 1 / ENG 2 PUMP pb-sw:</strong> Normally ON (lights out); FAULT illuminates for low reservoir level, overheat, or low pump pressure.",
          "<strong>BLUE ELEC PUMP & YELLOW ELEC PUMP:</strong> Automatic or manual override/control.",
          "<strong>PTU pb-sw:</strong> Normally AUTO (lights out); OFF isolates PTU.",
          "<strong>RAT MAN ON:</strong> Guarded pb to manually deploy RAT.",
        ],
      },
      {
        heading: "ECAM HYD Page",
        bullets: [
          "Displays pressure (3,000 PSI), reservoir fluid level (green/amber), EDP/Elec pump status, PTU direction arrows, and Fire Shutoff Valve positions.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE 2.9: Fuel System: Tanks & Usable Quantities",
    eyebrow: "APS MCC · A320 · CTA-2",
    title: "2.9 Fuel System: Tanks & Usable Quantities",
    subtitle: "ATA 28 · Fuel",
    leftTitle: "TANK LAYOUT & CAPACITIES",
    rightTitle: "FUEL TANKS & USABLE FUEL",
    image: "/images/mcc/fuel_tanks_capacity_p1133.png",
    imageAlt: "A320 Fuel Tanks and Usable Capacities",
    sourceRef: "Source: FCOM ATA 28 Fuel (p.2165–2185) · CBT p.1133",
    cards: [
      {
        heading: "Fuel Tank Architecture",
        bullets: [
          "<strong>Center Tank:</strong> Located in the center fuselage (~6,480 kg usable at standard density).",
          "<strong>Left & Right Inner Tanks:</strong> Located in inboard wings (~5,420 kg each).",
          "<strong>Left & Right Outer Tanks:</strong> Located in outboard wings (~690 kg each).",
          "<strong>Total Usable Fuel:</strong> ~18,700 kg (standard density); wingtip surge tanks provide venting.",
        ],
      },
      {
        heading: "Fuel Tank Inerting (if installed)",
        bullets: [
          "Produces oxygen-depleted air (<12% O2) from bleed air to inert the center fuel tank automatically.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "Two transfer valves in each wing automatically transfer fuel from Outer tanks to Inner tanks.",
    },
  },
  {
    comment: "SLIDE 2.10: Fuel Feeding Sequence & Crossfeed",
    eyebrow: "APS MCC · A320 · CTA-2",
    title: "2.10 Fuel Feeding Sequence & Crossfeed",
    subtitle: "ATA 28 · Fuel Feed Logic",
    leftTitle: "FEEDING, TRANSFER & CROSSFEED",
    rightTitle: "FUEL FEED & X-FEED SCHEMATIC",
    image: "/images/mcc/fuel_feed_xfeed_p1137.png",
    imageAlt: "Fuel Feeding and Crossfeed Valve",
    sourceRef: "Source: FCOM ATA 28 Fuel (p.2186–2212) · CBT p.1137",
    cards: [
      {
        heading: "Normal Feeding Sequence",
        bullets: [
          "1. <strong>Center Tank</strong> feeds first (via sequence valves prioritizing center pumps over wing pumps).",
          "2. <strong>Inner Wing Tanks</strong> feed from full down to ~750 kg.",
          "3. At <strong>~750 kg</strong> in either inner tank, the <strong>Outer-to-Inner transfer valves</strong> open (latched until refuel) to drain outer tanks into inner tanks.",
        ],
      },
      {
        heading: "Crossfeed, APU & Gravity Feed",
        bullets: [
          "<strong>X-FEED Valve:</strong> Allows both engines to feed from one side, or one engine from both sides.",
          "<strong>APU Fuel:</strong> Fed from the left fuel line (dedicated APU pump if normal pressure is low).",
          "<strong>Gravity Feeding:</strong> Possible from inner wing tanks via suction valves (not from center tank).",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "Gravity feeding is NOT possible from the Center Tank.",
    },
  },
  {
    comment: "SLIDE 2.11: Center Tank Mode Selector (AUTO/MAN)",
    eyebrow: "APS MCC · A320 · CTA-2",
    title: "2.11 Center Tank Mode Selector (AUTO/MAN)",
    subtitle: "ATA 28 · Center Tank Logic",
    leftTitle: "MODE SEL AUTO VS MAN",
    rightTitle: "FUEL PANEL & MODE SEL",
    image: "/images/mcc/fuel_ecam_overhead_p1151.png",
    imageAlt: "Fuel Panel Mode Selector and ECAM FUEL",
    sourceRef: "Source: FCOM ATA 28 Fuel (p.2200–2220) · CBT p.1151",
    cards: [
      {
        heading: "AUTO Mode (Normal)",
        bullets: [
          "Center tank pumps run for <strong>2 minutes</strong> at engine start (for test).",
          "Stop automatically whenever <strong>slats are extended</strong> (engines fed by wing pumps during takeoff/approach).",
          "Stop automatically <strong>5 minutes after</strong> center tank low level is reached.",
        ],
      },
      {
        heading: "MAN Mode",
        bullets: [
          "Center tank pumps run continuously as long as their related <code>CTR TK PUMP 1/2</code> pb-sws are ON (crew must manually switch OFF at low level).",
        ],
      },
    ],
  },
  {
    comment: "SLIDE 2.12: FUEL Overhead Panel & ECAM FUEL Page",
    eyebrow: "APS MCC · A320 · CTA-2",
    title: "2.12 FUEL Overhead Panel & ECAM FUEL Page",
    subtitle: "ATA 28 · Controls & ECAM",
    leftTitle: "ECAM FUEL INDICATIONS",
    rightTitle: "ECAM FUEL PAGE & OVERHEAD",
    image: "/images/mcc/fuel_ecam_overhead_p1151.png",
    imageAlt: "ECAM FUEL Page and Overhead Panel",
    sourceRef: "Source: FCOM ATA 28 Fuel (p.2215–2230) · CBT p.1151",
    cards: [
      {
        heading: "ECAM FUEL Page Parameters",
        bullets: [
          "<strong>FOB (Fuel On Board):</strong> Total usable fuel in kg.",
          "<strong>F.USED 1+2 & F.FLOW:</strong> Individual and total fuel used, plus fuel flow (kg/min).",
          "<strong>Temperatures:</strong> Outer and inner wing tank fuel temperatures (°C) monitored against fuel freeze limits.",
          "<strong>Valves & Pumps:</strong> Engine LP valves, APU LP valve, X-FEED valve, Transfer valves, and Wing/Center pump status.",
        ],
      },
    ],
    alert: {
      level: "CAUTION",
      text: "Monitor outer and inner tank fuel temperatures on ECAM FUEL against FCOM fuel freezing limits during long high-altitude flights.",
    },
  },
];

// ============================================================================
// CTA-3: PNEUMATIC, AIR COND/PRESS, APU, FIRE & ICE/RAIN (12 SLIDES)
// ============================================================================
const CTA_3_SLIDES: MccSlideSpec[] = [
  {
    comment: "SLIDE 3.1: Pneumatic Bleed Air System & Sources",
    eyebrow: "APS MCC · A320 · CTA-3",
    title: "3.1 Pneumatic Bleed Air System & Sources",
    subtitle: "ATA 36 · Pneumatic",
    leftTitle: "BLEED AIR SOURCES & USERS",
    rightTitle: "PNEUMATIC ARCHITECTURE",
    image: "/images/mcc/pneu_bleed_arch_p1573.png",
    imageAlt: "A320 Pneumatic Bleed Architecture",
    sourceRef: "Source: FCOM ATA 36 Pneumatic (p.2913–2935) · CBT p.1573",
    cards: [
      {
        heading: "Pneumatic System Users",
        bullets: [
          "Air Conditioning & Pressurization Packs",
          "Wing Anti-Ice",
          "Engine Starting",
          "Hydraulic Reservoir & Potable Water Tank Pressurization",
        ],
      },
      {
        heading: "Three Bleed Air Sources",
        bullets: [
          "<strong>Engines 1 & 2:</strong> Primary in-flight source (IP & HP compressor stages).",
          "<strong>APU:</strong> Normally used on ground for packs and engine start (also available in flight).",
          "<strong>HP Ground Power Unit (GPU):</strong> External pneumatic cart for ground air/start.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "The Crossbleed (X-BLEED) valve interconnects or isolates the left and right pneumatic ducts.",
    },
  },
  {
    comment: "SLIDE 3.2: Bleed Regulation, Precooler & BMCs",
    eyebrow: "APS MCC · A320 · CTA-3",
    title: "3.2 Bleed Regulation, Precooler & BMCs",
    subtitle: "ATA 36 · Regulation & BMCs",
    leftTitle: "IP/HP SWITCHING, PRECOOLER & BMC",
    rightTitle: "BLEED REGULATION & ISOLATION",
    image: "/images/mcc/pneu_bleed_arch_p1573.png",
    imageAlt: "Pneumatic Bleed Regulation and BMCs",
    sourceRef: "Source: FCOM ATA 36 Pneumatic (p.2925–2956) · CBT p.1573",
    cards: [
      {
        heading: "Pressure & Temperature Regulation",
        bullets: [
          "<strong>IP / HP Valves:</strong> Normally draws from Intermediate Pressure (IP) port; at low engine RPM, High Pressure (HP) valve opens automatically (check valve prevents reverse flow).",
          "<strong>Bleed Valve (PRV) & OPV:</strong> Regulates downstream pressure and shuts off on overheat/overpressure.",
          "<strong>Precooler:</strong> Air-to-air heat exchanger cooled by fan air (~200°C target).",
        ],
      },
      {
        heading: "Bleed Monitoring Computers (BMC 1 & 2)",
        bullets: [
          "Two interconnected BMCs monitor pressure, temperature, and overheat/leak detection loops in fuselage, wings, and pylons.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "If one BMC fails, the remaining BMC takes over most monitoring functions automatically.",
    },
  },
  {
    comment: "SLIDE 3.3: Air Conditioning Packs & Mixing Unit",
    eyebrow: "APS MCC · A320 · CTA-3",
    title: "3.3 Air Conditioning Packs & Mixing Unit",
    subtitle: "ATA 21 · Air Conditioning",
    leftTitle: "PACKS, MIXING UNIT & ZONES",
    rightTitle: "PACKS 1 & 2 AND MIXING UNIT",
    image: "/images/mcc/air_cond_packs_mixing_p62.png",
    imageAlt: "Air Conditioning Packs and Mixing Unit",
    sourceRef: "Source: FCOM ATA 21 Air Cond (p.275–330) · CBT p.62",
    cards: [
      {
        heading: "Air Conditioning Packs 1 & 2",
        bullets: [
          "Hot bleed air enters via the <strong>Pack Flow Control Valve</strong> into dual heat exchangers and an Air Cycle Machine (ACM).",
          "A <strong>Bypass Valve</strong> mixes warm bleed air with cold pack output to achieve target temperature.",
          "Conditioned air feeds the <strong>Mixing Unit</strong>, supplying 3 zones: <strong>Cockpit</strong>, <strong>FWD Cabin</strong>, and <strong>AFT Cabin</strong> (fine-tuned by Trim Air valves).",
        ],
      },
      {
        heading: "Emergency Ram Air",
        bullets: [
          "In case of dual pack failure (or smoke removal), the <code>RAM AIR</code> pb opens the Emergency Ram Air Inlet Valve directly into the Mixing Unit.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "Pack Ram Air Inlet Flaps automatically close during takeoff and landing to prevent foreign object ingestion.",
    },
  },
  {
    comment: "SLIDE 3.4: ECAM BLEED / COND & Avionics Ventilation",
    eyebrow: "APS MCC · A320 · CTA-3",
    title: "3.4 ECAM BLEED / COND & Avionics Ventilation",
    subtitle: "ATA 21 · BLEED & Ventilation",
    leftTitle: "BLEED/COND & VENTILATION",
    rightTitle: "ECAM BLEED PAGE",
    image: "/images/mcc/air_cond_ecam_bleed_p65.png",
    imageAlt: "ECAM BLEED Page Indications",
    sourceRef: "Source: FCOM ATA 21 (p.331–365, 390–408) · CBT p.65",
    cards: [
      {
        heading: "ECAM BLEED & COND Pages",
        bullets: [
          "<strong>ECAM BLEED:</strong> Pack flow, compressor/pack outlet temperatures, bleed pressure/temp, IP/HP/Bleed/X-Bleed/APU Bleed/Ram Air valve states.",
          "<strong>Pack Flow Selector:</strong> LO (80%), NORM (100%), HI (120%); APU bleed or single-pack operation automatically commands HI flow.",
        ],
      },
      {
        heading: "Avionics & Cargo Ventilation",
        bullets: [
          "<strong>Avionics Ventilation:</strong> Fully automatic Blower & Extract fans operating in Open (ground), Intermediate, or Closed (cold/flight) circuit.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE 3.5: Cabin Pressurization System & CPC 1/2",
    eyebrow: "APS MCC · A320 · CTA-3",
    title: "3.5 Cabin Pressurization System & CPC 1/2",
    subtitle: "ATA 21 · Pressurization",
    leftTitle: "AUTOMATIC & MANUAL PRESSURIZATION",
    rightTitle: "CPC 1/2 & OUTFLOW VALVE",
    image: "/images/mcc/press_system_overview_p92.png",
    imageAlt: "Pressurization CPC 1/2 and Outflow Valve",
    sourceRef: "Source: FCOM ATA 21 Pressurization (p.366–389) · CBT p.92",
    cards: [
      {
        heading: "System Architecture",
        bullets: [
          "A single <strong>Outflow Valve</strong> modulates air escaping from the pressurized fuselage.",
          "Controlled automatically by two independent <strong>Cabin Pressure Controllers (CPC 1 & 2)</strong> — one active, one standby (swaps after each landing).",
          "A <strong>3rd manual motor</strong> is available via <code>MODE SEL MAN</code> and <code>MAN V/S CTL</code> toggle if both CPCs fail.",
          "<strong>Two Safety Valves:</strong> Prevent excessive positive (+8.6 PSI) or negative (-1.0 PSI) differential pressure.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "CPC receives landing field elevation and flight profile data automatically from the FMGC and ADIRS.",
    },
  },
  {
    comment: "SLIDE 3.6: ECAM CAB PRESS & Manual Control",
    eyebrow: "APS MCC · A320 · CTA-3",
    title: "3.6 ECAM CAB PRESS & Manual Control",
    subtitle: "ATA 21 · ECAM CAB PRESS",
    leftTitle: "CAB PRESS INDICATIONS & DITCHING",
    rightTitle: "ECAM CAB PRESS PAGE",
    image: "/images/mcc/press_ecam_cab_press_p101.png",
    imageAlt: "ECAM CAB PRESS Page",
    sourceRef: "Source: FCOM ATA 21 Pressurization (p.375–389) · CBT p.101",
    cards: [
      {
        heading: "ECAM CAB PRESS Page",
        bullets: [
          "<strong>LDG ELEV AUTO / MAN:</strong> Target landing field elevation.",
          "<strong>ΔP (PSI):</strong> Differential pressure between cabin and ambient.",
          "<strong>V/S (FT/MN) & CAB ALT (FT):</strong> Cabin climb/descent rate and cabin altitude.",
          "<strong>SYS 1 / SYS 2, SAFETY, VENT INLET/OUTLET, PACK 1/2:</strong> Real-time status.",
        ],
      },
      {
        heading: "DITCHING Pushbutton",
        bullets: [
          "Guarded pb on CABIN PRESS panel: closes Outflow Valve, Emergency Ram Air Inlet, Avionics Vent Inlet/Extract, and Pack Flow valves.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE 3.7: Auxiliary Power Unit (APU) Architecture",
    eyebrow: "APS MCC · A320 · CTA-3",
    title: "3.7 Auxiliary Power Unit (APU) Architecture",
    subtitle: "ATA 49 · APU",
    leftTitle: "APU CAPABILITIES & ECAM",
    rightTitle: "ECAM APU PAGE",
    image: "/images/mcc/apu_system_ecam_p177.png",
    imageAlt: "ECAM APU Page Indications",
    sourceRef: "Source: FCOM ATA 49 APU (p.3305–3318) · CBT p.177",
    cards: [
      {
        heading: "Self-Contained Tail Cone Unit",
        bullets: [
          "Located in the unpressurized tail cone; makes the aircraft independent of external pneumatic and electrical ground units.",
          "Started electrically using aircraft <strong>batteries</strong>, external power, or engine generators via the <strong>Electronic Control Box (ECB)</strong>.",
          "<strong>Air Intake Flap:</strong> Electrically operated; must be <code>FLAP OPEN</code> before start.",
        ],
      },
      {
        heading: "ECAM APU Page",
        bullets: [
          "Displays APU GEN (Load %, V, Hz), APU BLEED (PSI & valve), N%, EGT (°C), and FLAP OPEN status.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "During start, at approximately 95% N speed, the green AVAIL light illuminates on the START pb and APU AVAIL memo appears on E/WD.",
    },
  },
  {
    comment: "SLIDE 3.8: APU Controls, ECAM APU & Ground Shutdown",
    eyebrow: "APS MCC · A320 · CTA-3",
    title: "3.8 APU Controls, ECAM APU & Ground Shutdown",
    subtitle: "ATA 49 · APU Operations",
    leftTitle: "CONTROLS, BLEED & GROUND FIRE",
    rightTitle: "APU OVERHEAD PANELS",
    image: "/images/mcc/apu_overhead_panels_p180.png",
    imageAlt: "APU Overhead Control Panels",
    sourceRef: "Source: FCOM ATA 49 APU (p.3315–3326) · CBT p.180–183",
    cards: [
      {
        heading: "Cockpit & External Controls",
        bullets: [
          "<strong>APU MASTER SW & START pb:</strong> Located on Overhead APU panel; MASTER SW powers ECB and opens Air Intake Flap.",
          "<strong>APU BLEED pb-sw:</strong> Located on AIR COND panel; when ON, replaces APU AVAIL memo with APU BLEED memo.",
          "<strong>Priority:</strong> APU bleed has priority over engine bleed; packs automatically close during engine start when APU bleed is ON.",
          "<strong>External Power Panel (Nose Gear Bay):</strong> Features an APU FIRE warning light and guarded <code>APU SHUT OFF</code> pb.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "On the ground, if an APU fire is detected, the APU shuts down automatically and the fire bottle discharges automatically.",
    },
  },
  {
    comment: "SLIDE 3.9: Fire Detection: Dual Loops A/B & FDU",
    eyebrow: "APS MCC · A320 · CTA-3",
    title: "3.9 Fire Detection: Dual Loops A/B & FDU",
    subtitle: "ATA 26 · Fire Protection",
    leftTitle: "DETECTION ARCHITECTURE",
    rightTitle: "DUAL LOOPS A/B & FDU",
    image: "/images/mcc/fire_detection_loops_p1040.png",
    imageAlt: "Fire Detection Dual Loops A and B",
    sourceRef: "Source: FCOM ATA 26 Fire Protection (p.2003–2024) · CBT p.1040",
    cards: [
      {
        heading: "Engine & APU Fire Detection",
        bullets: [
          "Each engine and the APU have <strong>two identical detection loops (A & B)</strong> mounted in parallel, connected to a <strong>Fire Detection Unit (FDU)</strong>.",
          "<strong>Engines:</strong> 3 detectors per loop (pylon nacelle, engine core, engine fan section). <strong>APU:</strong> 1 detector per loop.",
          "<strong>FDU Fire Warning Logic:</strong> Triggers when both Loop A & B detect fire, or when one loop detects fire while the other is inoperative, or when both loops fail within 5 seconds.",
        ],
      },
      {
        heading: "Smoke Detection",
        bullets: [
          "Avionics bay (air extraction duct), Cargo compartments (FWD/AFT), and Lavatories (via CIDS → FWC).",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "If only one loop fails, the system remains operational on the remaining loop (single-loop mode).",
    },
  },
  {
    comment: "SLIDE 3.10: Fire Extinguishing & Overhead FIRE Panel",
    eyebrow: "APS MCC · A320 · CTA-3",
    title: "3.10 Fire Extinguishing & Overhead FIRE Panel",
    subtitle: "ATA 26 · Extinguishing & Tests",
    leftTitle: "FIRE PUSHBUTTONS & AGENTS",
    rightTitle: "OVERHEAD FIRE PANEL",
    image: "/images/mcc/fire_overhead_panel_p1043.png",
    imageAlt: "Overhead FIRE Panel",
    sourceRef: "Source: FCOM ATA 26 Fire Protection (p.2015–2036) · CBT p.1043",
    cards: [
      {
        heading: "Overhead FIRE Panel & Isolation",
        bullets: [
          "<strong>ENG 1 / ENG 2 / APU FIRE PUSH pbs:</strong> Guarded pushbuttons; releasing them out isolates fuel, hydraulic, bleed, generator, and pack air to that unit.",
          "<strong>Extinguishing Bottles:</strong> 2 Halon bottles per engine (AGENT 1 & 2); 1 bottle for the APU.",
          "<strong>TEST pbs:</strong> Verify fire/smoke detection & extinguishing circuits (on batteries only, ECAM warnings do not display).",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "The AGENT discharge pushbuttons only become active after the corresponding guarded FIRE PUSH pushbutton has been released out.",
    },
  },
  {
    comment: "SLIDE 3.11: Ice & Rain Protection: Engine & Wing Anti-Ice",
    eyebrow: "APS MCC · A320 · CTA-3",
    title: "3.11 Ice & Rain Protection: Engine & Wing Anti-Ice",
    subtitle: "ATA 30 · Ice & Rain",
    leftTitle: "HOT BLEED ANTI-ICE SYSTEMS",
    rightTitle: "ENGINE NACELLE ANTI-ICE",
    image: "/images/mcc/ice_rain_zones_p1193.png",
    imageAlt: "Engine Anti-Ice Hot Bleed Valve",
    sourceRef: "Source: FCOM ATA 30 Ice and Rain (p.2261–2282) · CBT p.1193",
    cards: [
      {
        heading: "Engine Anti-Ice",
        bullets: [
          "Each engine air intake is anti-iced by an independent hot air bleed from the HP compressor.",
          "<strong>Fail-safe design:</strong> In the event of electrical power supply failure, the engine anti-ice valve automatically opens.",
        ],
      },
      {
        heading: "Wing Anti-Ice",
        bullets: [
          "Hot bleed air heats the <strong>3 outboard slats</strong> of each wing.",
          "On ground, selecting WING ANTI-ICE ON runs a 30-second self-test then closes the valves; on lift-off, valves open if pb is ON.",
        ],
      },
    ],
    alert: {
      level: "CAUTION",
      text: "Icing conditions exist when OAT (ground/TO) or TAT (in flight) is ≤ 10°C and visible moisture is present (may switch off in climb/cruise if SAT < -40°C).",
    },
  },
  {
    comment: "SLIDE 3.12: Probe/Window Heating, Ice Detector & Wipers",
    eyebrow: "APS MCC · A320 · CTA-3",
    title: "3.12 Probe/Window Heating, Ice Detector & Wipers",
    subtitle: "ATA 30 · Electrical Heating & Rain",
    leftTitle: "ELECTRICAL ANTI-ICE & RAIN",
    rightTitle: "ANTI-ICE & RAIN PROTECTION",
    image: "/images/mcc/ice_rain_zones_p1193.png",
    imageAlt: "A320 Ice and Rain Protection",
    sourceRef: "Source: FCOM ATA 30 Ice and Rain (p.2280–2296) · CBT p.1194–1204",
    cards: [
      {
        heading: "Electrical Heating Systems",
        bullets: [
          "<strong>Windshields:</strong> Anti-icing and side window de-fogging (2 Window Heat Computers).",
          "<strong>Probes & Drain Masts:</strong> Pitot, Static, AOA, TAT probes and water waste drain masts are electrically heated automatically once at least one engine is running (<code>PROBE/WINDOW HEAT</code> pb overrides).",
        ],
      },
      {
        heading: "Ice Detection & Rain Removal",
        bullets: [
          "Two fuselage ice detectors (if installed) trigger <code>ICE DETECTED</code> / <code>SEVERE ICE DETECTED</code> memos + external visual ice indicator.",
          "Electric 2-speed <strong>Wipers</strong> (SLOW/FAST) + <strong>Rain Repellent</strong> pushbuttons.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "On the ground, pitot probe heating operates at low power (TAT probe is not heated) to prevent overheating and injury to ground crew.",
    },
  },
];

// ============================================================================
// CTA-4: FLIGHT CONTROLS, LANDING GEAR, DOORS & OXYGEN (12 SLIDES)
// ============================================================================
const CTA_4_SLIDES: MccSlideSpec[] = [
  {
    comment: "SLIDE 4.1: Fly-by-Wire Architecture & Computers",
    eyebrow: "APS MCC · A320 · CTA-4",
    title: "4.1 Fly-by-Wire Architecture & Computers",
    subtitle: "ATA 27 · Flight Controls",
    leftTitle: "7 COMPUTERS & SURFACES",
    rightTitle: "FLIGHT CONTROL COMPUTERS",
    image: "/images/mcc/fctl_architecture_p999.png",
    imageAlt: "A320 Flight Control Computers",
    sourceRef: "Source: FCOM ATA 27 Flight Controls (p.2037–2075) · CBT p.999",
    cards: [
      {
        heading: "Flight Control Computers",
        bullets: [
          "<strong>2 ELACs (Elevator Aileron Computers):</strong> Normal elevator, THS, and aileron control.",
          "<strong>3 SECs (Spoiler Elevator Computers):</strong> Spoiler control + standby elevator/THS.",
          "<strong>2 FACs (Flight Augmentation Computers):</strong> Rudder electrical control (yaw damper, rudder trim, rudder travel limiter) + speed/envelope computation.",
        ],
      },
      {
        heading: "Control Surfaces",
        bullets: [
          "All surfaces are electrically controlled and hydraulically actuated (except mechanical trim wheel / rudder pedals backup).",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "FAC computers belong to the Auto Flight System (AFS) and therefore do NOT appear on the ECAM F/CTL page (only ELAC 1-2 and SEC 1-3 are shown).",
    },
  },
  {
    comment: "SLIDE 4.2: Side Sticks, Algebraic Sum & Priority Logic",
    eyebrow: "APS MCC · A320 · CTA-4",
    title: "4.2 Side Sticks, Algebraic Sum & Priority Logic",
    subtitle: "ATA 27 · Side Sticks",
    leftTitle: "DUAL INPUT & PRIORITY",
    rightTitle: "SIDE STICK ALGEBRAIC SUM",
    image: "/images/mcc/fctl_sidestick_priority_p975.png",
    imageAlt: "Side Stick Algebraic Summation",
    sourceRef: "Source: FCOM ATA 27 Flight Controls (p.2060–2085) · CBT p.975",
    cards: [
      {
        heading: "Side Stick Operation",
        bullets: [
          "Spring-loaded to neutral with no mechanical interconnection or feedback.",
          "If both side sticks are moved simultaneously, deflections are <strong>algebraically added</strong> (limited to single-stick max authority) and a <code>DUAL INPUT</code> audio/visual alert triggers.",
          "<strong>Takeover / AP Disconnect pb (red):</strong> Pressing disconnects AP and gives priority to that pilot; holding > <strong>40 seconds</strong> latches priority.",
        ],
      },
    ],
    alert: {
      level: "WARNING",
      text: "Dual side-stick inputs degrade aircraft response. If needed, press and hold the red takeover pushbutton to take sole priority.",
    },
  },
  {
    comment: "SLIDE 4.3: Spoilers (Speedbrake, Roll & Ground) & Rudder",
    eyebrow: "APS MCC · A320 · CTA-4",
    title: "4.3 Spoilers (Speedbrake, Roll & Ground) & Rudder",
    subtitle: "ATA 27 · Spoilers & Rudder",
    leftTitle: "SPOILERS 1–5 & RUDDER LIMITER",
    rightTitle: "ECAM F/CTL PAGE (G/B/Y)",
    image: "/images/mcc/fctl_ecam_surfaces_p1004.png",
    imageAlt: "ECAM F/CTL Page and Hydraulic Coding",
    sourceRef: "Source: FCOM ATA 27 Flight Controls (p.2075–2105) · CBT p.1004",
    cards: [
      {
        heading: "5 Spoilers per Wing (Numbered 1–5 Inboard to Outboard)",
        bullets: [
          "<strong>Roll Control:</strong> Spoilers <strong>2 to 5</strong> assist ailerons.",
          "<strong>Speedbrake:</strong> Spoilers <strong>2, 3, 4</strong> extend symmetrically.",
          "<strong>Ground Spoilers:</strong> All <strong>5 surfaces (1–5)</strong> extend on landing/RTO when armed or reverse selected.",
        ],
      },
      {
        heading: "Rudder & ECAM F/CTL Hydraulic Coding",
        bullets: [
          "Rudder is powered by all 3 hydraulic systems (G, B, Y) with a speed-scheduled <strong>Rudder Travel Limiter</strong> (HI SPD min limit / LO SPD max limit).",
          "ECAM F/CTL displays G/B/Y letters showing which hydraulic systems power each surface.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE 4.4: Normal Law: Ground, Flight & Flare Modes",
    eyebrow: "APS MCC · A320 · CTA-4",
    title: "4.4 Normal Law: Ground, Flight & Flare Modes",
    subtitle: "ATA 27 · Normal Law",
    leftTitle: "GROUND, FLIGHT & FLARE MODES",
    rightTitle: "NORMAL LAW PROTECTIONS",
    image: "/images/mcc/fctl_normal_law_prot_p916.png",
    imageAlt: "Normal Law Protections Overview",
    sourceRef: "Source: FCOM ATA 27 Flight Controls (p.2106–2130) · CBT p.916",
    cards: [
      {
        heading: "Normal Law Three Modes",
        bullets: [
          "<strong>Ground Mode:</strong> Direct relationship between side stick and elevator/aileron (auto-trim inactive; THS resets to 0° after landing).",
          "<strong>Flight Mode:</strong> Pitch = <strong>load factor (g) demand</strong> + automatic pitch trim; Roll = <strong>roll rate demand</strong> + turn coordination. Neutral stick = 1g flight path.",
          "<strong>Flare Mode:</strong> Activates at <strong>50 ft RA</strong> (memorizes pitch attitude at 50 ft and adds a slight nose-down bias at 30 ft so pilot flares conventionally).",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "In Flight Mode, with side stick neutral and bank ≤ 33°, the aircraft maintains a 1g flight path regardless of speed/configuration changes.",
    },
  },
  {
    comment: "SLIDE 4.5: Normal Law Envelope Protections",
    eyebrow: "APS MCC · A320 · CTA-4",
    title: "4.5 Normal Law Envelope Protections",
    subtitle: "ATA 27 · Envelope Protections",
    leftTitle: "5 ENVELOPE PROTECTIONS",
    rightTitle: "FLIGHT ENVELOPE PROTECTIONS",
    image: "/images/mcc/fctl_normal_law_prot_p916.png",
    imageAlt: "Normal Law Envelope Protections",
    sourceRef: "Source: FCOM ATA 27 Flight Controls (p.2115–2140) · CBT p.916",
    cards: [
      {
        heading: "Airborne Normal Law Protections",
        bullets: [
          "<strong>Load Factor Limitation:</strong> +2.5g to -1.0g (clean); +2.0g to 0.0g (slats/flaps extended).",
          "<strong>Pitch Attitude Protection:</strong> +30° up (reduced to +25° at low speed) / -15° down (green dashes on PFD).",
          "<strong>High Speed Protection:</strong> Prevents exceeding VMO/MMO (AP disconnects, nose-down authority reduced, permanent pitch-up applied).",
          "<strong>Bank Angle Protection:</strong> Max <strong>67°</strong> (green =); positive spiral stability returns bank to <strong>33°</strong> if stick released (45° max with high AOA; 40° with high speed).",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "Autopilot disconnects automatically if bank angle exceeds 45° or if High Speed Protection activates.",
    },
  },
  {
    comment: "SLIDE 4.6: High Angle-of-Attack & α-FLOOR Protection",
    eyebrow: "APS MCC · A320 · CTA-4",
    title: "4.6 High Angle-of-Attack & α-FLOOR Protection",
    subtitle: "ATA 27 · High AOA & α-FLOOR",
    leftTitle: "VαPROT, VαMAX & α-FLOOR",
    rightTitle: "HIGH AOA & ALPHA FLOOR",
    image: "/images/mcc/fctl_high_aoa_alpha_floor_p928.png",
    imageAlt: "High AOA Protection and Alpha Floor",
    sourceRef: "Source: FCOM ATA 27 Flight Controls (p.2125–2142) · CBT p.928",
    cards: [
      {
        heading: "High Angle-of-Attack (AOA) Protection",
        bullets: [
          "Above <strong>αPROT</strong> (top of amber/black barber pole, VαPROT), elevator switches from load-factor demand to <strong>AOA demand</strong>.",
          "With side stick full aft, computers maintain <strong>VαMAX</strong> (red strip) without stalling.",
        ],
      },
      {
        heading: "α-FLOOR (Alpha Floor)",
        bullets: [
          "Independently of VαPROT/VαMAX, if AOA exceeds threshold (from lift-off to <strong>100 ft RA</strong> on approach), A/THR automatically activates and commands <strong>TOGA thrust</strong> (<code>A.FLOOR</code> on FMA → <code>TOGA LK</code> when out of α-floor).",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "To exit TOGA LK after an α-FLOOR activation, disconnect A/THR (instinctive disconnect pb) and re-engage as required.",
    },
  },
  {
    comment: "SLIDE 4.7: Reconfiguration Laws & Mechanical Backup",
    eyebrow: "APS MCC · A320 · CTA-4",
    title: "4.7 Reconfiguration Laws & Mechanical Backup",
    subtitle: "ATA 27 · Alternate, Direct & Mech",
    leftTitle: "DEGRADED FLIGHT CONTROL LAWS",
    rightTitle: "F/CTL ECAM & SURFACES",
    image: "/images/mcc/fctl_ecam_surfaces_p1004.png",
    imageAlt: "Flight Control Reconfiguration and ECAM",
    sourceRef: "Source: FCOM ATA 27 Flight Controls (p.2143–2164) · CBT p.939–968",
    cards: [
      {
        heading: "Reconfiguration Hierarchy",
        bullets: [
          "<strong>Alternate Law:</strong> Load factor demand remains, but protections are reduced or lost (no pitch/bank/AOA protections; only low/high-speed stability). Transitions to Direct Law when gear is extended.",
          "<strong>Direct Law:</strong> Direct stick-to-surface deflection (no auto-trim; <code>USE MAN PITCH TRIM</code> on PFD). Activated by gear down in Alt Law or multiple failures.",
          "<strong>Mechanical Backup:</strong> Pitch via manual trim wheel (THS) + lateral/directional via rudder pedals (<code>MAN PITCH TRIM ONLY</code>).",
        ],
      },
    ],
    alert: {
      level: "CAUTION",
      text: "No flight envelope protections are available in Direct Law or Mechanical Backup; pilot must respect structural and stall limits.",
    },
  },
  {
    comment: "SLIDE 4.8: Landing Gear Extension, Retraction & LGCIU",
    eyebrow: "APS MCC · A320 · CTA-4",
    title: "4.8 Landing Gear Extension, Retraction & LGCIU",
    subtitle: "ATA 32 · Landing Gear",
    leftTitle: "GEAR OPERATION & STEERING",
    rightTitle: "ECAM WHEEL & LDG GEAR PANEL",
    image: "/images/mcc/ldg_ecam_wheel_panel_p1235.png",
    imageAlt: "ECAM WHEEL Page and LDG GEAR Panel",
    sourceRef: "Source: FCOM ATA 32 Landing Gear (p.2549–2588) · CBT p.1235",
    cards: [
      {
        heading: "Normal, Gravity Extension & LGCIUs",
        bullets: [
          "Retractable tricycle gear actuated by <strong>Green hydraulic</strong> system (doors close after cycle).",
          "<strong>LGCIU 1 & 2:</strong> Alternate on each gear retraction; LGCIU 1 drives the LDG GEAR indicator panel, both feed ECAM WHEEL.",
          "<strong>Gravity Extension:</strong> Crank on center pedestal turns 3 turns clockwise → depressurizes gear/doors and unlocks gear by gravity.",
          "<strong>Nose Wheel Steering:</strong> Powered by Green hyd via handwheels (tillers, ±75°) and rudder pedals (±6°).",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "One green triangle on the LDG GEAR panel OR on the ECAM WHEEL page is sufficient to confirm the gear is down and locked.",
    },
  },
  {
    comment: "SLIDE 4.9: Braking Systems, Anti-Skid & Autobrake",
    eyebrow: "APS MCC · A320 · CTA-4",
    title: "4.9 Braking Systems, Anti-Skid & Autobrake",
    subtitle: "ATA 32 · Braking",
    leftTitle: "NORMAL, ALTERNATE & AUTOBRAKE",
    rightTitle: "NORMAL VS ALTERNATE BRAKING",
    image: "/images/mcc/ldg_gear_braking_p1241.png",
    imageAlt: "Normal vs Alternate Braking Architecture",
    sourceRef: "Source: FCOM ATA 32 Landing Gear (p.2589–2622) · CBT p.1241",
    cards: [
      {
        heading: "Two Independent Braking Systems",
        bullets: [
          "<strong>Normal Braking:</strong> Powered by <strong>Green</strong> hydraulic system via BSCU; includes Anti-Skid and <strong>Autobrake</strong> (LO, MED, MAX).",
          "<strong>Alternate Braking:</strong> Automatic fallback powered by <strong>Yellow</strong> hydraulic system (or Yellow Accumulator) via ABCU; Anti-Skid available if BSCU is operative (no Autobrake).",
        ],
      },
      {
        heading: "Brake Fans & Temperature",
        bullets: [
          "Optional brake fans cool brakes on ground; monitor temperatures on ECAM WHEEL before takeoff.",
        ],
      },
    ],
    alert: {
      level: "CAUTION",
      text: "If Yellow hydraulic system is lost, only the Yellow Accumulator provides Alternate/Parking Brake pressure (monitor triple indicator).",
    },
  },
  {
    comment: "SLIDE 4.10: Doors & Cockpit Door Locking System (CDLS)",
    eyebrow: "APS MCC · A320 · CTA-4",
    title: "4.10 Doors & Cockpit Door Locking System (CDLS)",
    subtitle: "ATA 52 · Doors",
    leftTitle: "AIRCRAFT & COCKPIT DOORS",
    rightTitle: "CDLS CONTROLS & PANELS",
    image: "/images/mcc/doors_cockpit_cdls_p494.png",
    imageAlt: "Cockpit Door Locking System CDLS",
    sourceRef: "Source: FCOM ATA 52 Doors (p.3327–3386) · CBT p.494",
    cards: [
      {
        heading: "Cabin, Emergency & Cargo Doors",
        bullets: [
          "4 passenger doors + 4 overwing emergency exits (or 2 exits on A321) with inflatable escape slides (armed/disarmed indication on ECAM DOOR).",
          "Cargo doors are operated hydraulically via the Yellow electric pump (or hand pump).",
        ],
      },
      {
        heading: "Cockpit Door Locking System (CDLS)",
        bullets: [
          "Bulletproof door with electric locking strikes, keypad outside, and pedestal toggle (<code>UNLOCK / NORM / LOCK</code>).",
          "On emergency access request from cabin, buzzer sounds and <code>OPEN</code> flashes: if no pilot action, door unlocks automatically after timer (unless placed in <code>LOCK</code>).",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "A mechanical escape panel allows cockpit crew evacuation if the cockpit door is jammed.",
    },
  },
  {
    comment: "SLIDE 4.11: Oxygen Systems: Cockpit, Cabin & Portable",
    eyebrow: "APS MCC · A320 · CTA-4",
    title: "4.11 Oxygen Systems: Cockpit, Cabin & Portable",
    subtitle: "ATA 35 · Oxygen",
    leftTitle: "CREW & PASSENGER OXYGEN",
    rightTitle: "OXYGEN PANEL, MASK & ECAM",
    image: "/images/mcc/oxygen_mask_ecam_p1528.png",
    imageAlt: "Cockpit Oxygen System and Mask",
    sourceRef: "Source: FCOM ATA 35 Oxygen (p.2877–2912) · CBT p.1528",
    cards: [
      {
        heading: "Three Oxygen Systems",
        bullets: [
          "<strong>Fixed Cockpit Oxygen:</strong> High-pressure cylinder feeding quick-donning full-face masks (<code>N / 100%</code> selector, <code>EMERGENCY</code> overpressure knob, yellow blinker flow meter).",
          "<strong>Fixed Cabin Chemical Oxygen:</strong> Chemical generators above seats/lavatories providing ~15 minutes of oxygen once pulled.",
          "<strong>Portable Oxygen & PBE:</strong> Smoke hoods (Protective Breathing Equipment) and portable bottles for crew.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "After using and stowing the cockpit oxygen mask, press the TEST AND RESET control to cut off the mask microphone.",
    },
  },
  {
    comment: "SLIDE 4.12: ECAM DOOR/OXY Page & Pre-Flight Checks",
    eyebrow: "APS MCC · A320 · CTA-4",
    title: "4.12 ECAM DOOR/OXY Page & Pre-Flight Checks",
    subtitle: "ATA 35 · Controls & ECAM",
    leftTitle: "OXYGEN PANEL & ECAM DOOR/OXY",
    rightTitle: "ECAM DOOR/OXY & PANEL",
    image: "/images/mcc/oxygen_mask_ecam_p1528.png",
    imageAlt: "ECAM DOOR/OXY Page and OXYGEN Panel",
    sourceRef: "Source: FCOM ATA 35 Oxygen (p.2895–2912) · CBT p.1528–1529",
    cards: [
      {
        heading: "Overhead OXYGEN Panel",
        bullets: [
          "<strong>CREW SUPPLY pb-sw:</strong> Controls the electrical supply valve from the cockpit oxygen cylinder (lights out = ON).",
          "<strong>PASSENGER SYS ON pb:</strong> Guarded pb to manually deploy cabin masks (masks also deploy automatically if cabin altitude > 14,000 ft).",
        ],
      },
      {
        heading: "ECAM DOOR/OXY Page",
        bullets: [
          "Displays cockpit oxygen cylinder pressure (PSI) in the upper right corner (green/amber/half-boxed) alongside all door and slide statuses.",
        ],
      },
    ],
  },
];

// ============================================================================
// CTA-5: POWER PLANT (CFM56-5B), AUTO FLIGHT & NAV/SURV (12 SLIDES)
// ============================================================================
const CTA_5_SLIDES: MccSlideSpec[] = [
  {
    comment: "SLIDE 5.1: CFM56-5B Engine Architecture & Spools",
    eyebrow: "APS MCC · A320 · CTA-5",
    title: "5.1 CFM56-5B Engine Architecture & Spools",
    subtitle: "ATA 70 · Power Plant (CFM)",
    leftTitle: "TWIN-SPOOL TURBOFAN",
    rightTitle: "CFM56-5B CUTAWAY",
    image: "/images/mcc/eng_cfm_cutaway_p1673.png",
    imageAlt: "CFM56-5B Twin-Spool Engine Architecture",
    sourceRef: "Source: FCOM ATA 70 Engines (p.3399–3445) · CBT p.1673",
    cards: [
      {
        heading: "CFM56-5B Twin-Spool Design",
        bullets: [
          "<strong>Low Pressure Rotor (N1):</strong> Front fan + 3-stage LP compressor driven by a 4-stage LP turbine (primary thrust indicator: <strong>N1 %</strong>).",
          "<strong>High Pressure Rotor (N2):</strong> 9-stage HP compressor driven by a 1-stage HP turbine; drives the Accessory Gearbox (fuel/oil/hyd pumps, IDG, starter).",
          "<strong>Combustion Chamber:</strong> Annular chamber equipped with two igniters (A & B).",
        ],
      },
    ],
  },
  {
    comment: "SLIDE 5.2: FADEC, Thrust Levers & Detents",
    eyebrow: "APS MCC · A320 · CTA-5",
    title: "5.2 FADEC, Thrust Levers & Detents",
    subtitle: "ATA 70 · FADEC & Thrust Levers",
    leftTitle: "FADEC & THRUST DETENTS",
    rightTitle: "PEDESTAL THRUST LEVERS",
    image: "/images/mcc/eng_pedestal_thrust_p1682.png",
    imageAlt: "Pedestal Thrust Levers and Disconnect",
    sourceRef: "Source: FCOM ATA 70 Engines (p.3446–3510) · CBT p.1682",
    cards: [
      {
        heading: "Dual-Channel FADEC",
        bullets: [
          "Each engine has a Full Authority Digital Engine Control (FADEC) with two channels (A & B: one active, one standby), self-powered above ~12% N2.",
          "Provides complete engine management, N1/N2/EGT overspeed protection, and fuel scheduling.",
        ],
      },
      {
        heading: "Thrust Lever Detents (Non-Moving in A/THR)",
        bullets: [
          "<strong>TOGA</strong> (Takeoff/Go-Around) · <strong>FLX/MCT</strong> (Flex Takeoff / Max Continuous Thrust) · <strong>CL</strong> (Climb / normal A/THR max limit) · <strong>IDLE</strong> · <strong>REV</strong> (Reverse).",
          "Two red <strong>Instinctive Disconnect pbs</strong> on the levers disengage A/THR.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "In normal operations, Thrust Levers remain in the CL detent from thrust reduction altitude until retard/flare.",
    },
  },
  {
    comment: "SLIDE 5.3: Engine Start (Auto/Manual), Ignition & Reversers",
    eyebrow: "APS MCC · A320 · CTA-5",
    title: "5.3 Engine Start (Auto/Manual), Ignition & Reversers",
    subtitle: "ATA 70 · Start & Reversers",
    leftTitle: "START SEQUENCE & REVERSERS",
    rightTitle: "ENG PANEL & THRUST LEVERS",
    image: "/images/mcc/eng_pedestal_thrust_p1682.png",
    imageAlt: "Engine Start and Reverse Thrust Levers",
    sourceRef: "Source: FCOM ATA 70 Engines (p.3511–3558) · CBT p.1679–1686",
    cards: [
      {
        heading: "Automatic vs Manual Start",
        bullets: [
          "<strong>ENG MODE Selector:</strong> <code>CRANK / NORM / IGN START</code>.",
          "<strong>Automatic Start:</strong> Select <code>IGN START</code>, set <code>ENG MASTER</code> ON → FADEC controls start valve, ignition (alternating A/B on ground), fuel, and monitors EGT/hot start.",
          "<strong>Manual Start:</strong> Uses overhead <code>ENG MAN START 1/2</code> pbs; crew monitors N2, opens fuel via ENG MASTER at ≥20% N2, and must abort manually if limits exceeded.",
        ],
      },
      {
        heading: "Thrust Reversers",
        bullets: [
          "Hydraulically actuated (Green on ENG 1, Yellow on ENG 2) translating cowls; inhibited in flight.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE 5.4: Auto Flight System (AFS) Overview",
    eyebrow: "APS MCC · A320 · CTA-5",
    title: "5.4 Auto Flight System (AFS) Overview",
    subtitle: "ATA 22-10 · Auto Flight General",
    leftTitle: "FMGS ARCHITECTURE",
    rightTitle: "AFS INPUTS & OUTPUTS",
    image: "/images/mcc/afs_architecture_p434.png",
    imageAlt: "Auto Flight System Functional Architecture",
    sourceRef: "Source: FCOM ATA 22-10 Auto Flight (p.409–460) · CBT p.434",
    cards: [
      {
        heading: "Two FMGCs (Flight Management & Guidance Computers)",
        bullets: [
          "<strong>Flight Management (FM):</strong> Navigation, F-PLN, performance optimization, predictions, display management.",
          "<strong>Flight Guidance (FG):</strong> Autopilot (AP 1/2), Flight Director (FD 1/2), and Autothrust (A/THR) commands.",
          "<strong>Flight Augmentation (FAC 1/2):</strong> Envelope/speed computation, yaw damping, rudder trim/limiting, windshear & α-floor.",
        ],
      },
      {
        heading: "Crew Interfaces",
        bullets: [
          "2 <strong>MCDUs</strong> (long-term strategic entries) + 1 <strong>FCU</strong> (short-term tactical interventions).",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "Both FMGCs normally operate in Dual Mode (synchronized); if one fails, Single Mode maintains full FMGS capability.",
    },
  },
  {
    comment: "SLIDE 5.5: Flight Control Unit (FCU) Philosophy",
    eyebrow: "APS MCC · A320 · CTA-5",
    title: "5.5 Flight Control Unit (FCU) Philosophy",
    subtitle: "ATA 22-10 · FCU Interface",
    leftTitle: "TURN / PUSH / PULL & BIRD",
    rightTitle: "FLIGHT CONTROL UNIT (FCU)",
    image: "/images/mcc/afs_fcu_overview_p276.png",
    imageAlt: "Airbus A320 Flight Control Unit",
    sourceRef: "Source: FCOM ATA 22-10 Auto Flight (p.461–500) · CBT p.276",
    cards: [
      {
        heading: "4 Selector Knobs (Short-Term Interface)",
        bullets: [
          "<strong>SPD/MACH · HDG/TRK · ALT (100/1000 ft) · V/S/FPA:</strong>",
          "<strong>TURN:</strong> Sets a target value without changing guidance mode.",
          "<strong>PUSH (Manage):</strong> Engages FMGS <em>Managed</em> mode (dashes + white dot, except ALT).",
          "<strong>PULL (Select):</strong> Engages <em>Selected</em> mode (target in FCU window).",
          "<strong>HDG-V/S / TRK-FPA pb:</strong> Toggles Flight Path Vector (Bird) & FPA reference.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "The FCU Altitude window is NEVER dashed — it always displays the next cleared altitude/FL.",
    },
  },
  {
    comment: "SLIDE 5.6: Flight Mode Annunciator (FMA) 5 Columns",
    eyebrow: "APS MCC · A320 · CTA-5",
    title: "5.6 Flight Mode Annunciator (FMA) 5 Columns",
    subtitle: "ATA 22-30 · FMA",
    leftTitle: "FMA 5 COLUMNS & 3 LINES",
    rightTitle: "FMA COLUMN BREAKDOWN",
    image: "/images/mcc/afs_fma_columns_p365.png",
    imageAlt: "FMA 5 Columns Breakdown",
    sourceRef: "Source: FCOM ATA 22-30 Flight Guidance (p.1407–1460) · CBT p.365",
    cards: [
      {
        heading: "5 Columns (Left to Right)",
        bullets: [
          "<strong>Col 1:</strong> Autothrust modes (e.g., <code>SPEED</code>, <code>THR CLB</code>, <code>MAN TOGA</code>).",
          "<strong>Col 2:</strong> Vertical AP/FD modes (e.g., <code>CLB</code>, <code>OP DES</code>, <code>ALT*</code>, <code>G/S</code>).",
          "<strong>Col 3:</strong> Lateral AP/FD modes (e.g., <code>NAV</code>, <code>HDG</code>, <code>LOC</code>).",
          "<strong>Col 4:</strong> Approach capability (<code>CAT 1/2/3</code>) & MDA/DH minima.",
          "<strong>Col 5:</strong> Engagement status (<code>AP 1+2</code>, <code>1FD2</code>, <code>A/THR</code>).",
        ],
      },
      {
        heading: "3 Lines: Line 1 = Active (Green/White) · Line 2 = Armed (Cyan/Magenta) · Line 3 = Reminders",
        paragraph: "Cols 2 & 3 merge for Common Modes (e.g., <code>LAND</code>, <code>FLARE</code>, <code>ROLL OUT</code>).",
      },
    ],
    alert: {
      level: "NOTE",
      text: "Any FMA mode change is framed by a white box for 10 seconds — PF must announce and PM must crosscheck.",
    },
  },
  {
    comment: "SLIDE 5.7: Autopilot / Flight Director Guidance Modes",
    eyebrow: "APS MCC · A320 · CTA-5",
    title: "5.7 Autopilot / Flight Director Guidance Modes",
    subtitle: "ATA 22-30 · AP/FD Modes",
    leftTitle: "MANAGED VS SELECTED & REVERSIONS",
    rightTitle: "FCU MODE SELECTION",
    image: "/images/mcc/afs_fcu_overview_p276.png",
    imageAlt: "FCU Mode Selection Overview",
    sourceRef: "Source: FCOM ATA 22-30 Flight Guidance (p.1461–1620) · CBT p.276",
    cards: [
      {
        heading: "Managed vs Selected Guidance",
        bullets: [
          "<strong>Managed (FMGS F-PLN):</strong> <code>NAV</code>, <code>CLB</code>, <code>DES</code> (respects speed/altitude constraints).",
          "<strong>Selected (FCU targets):</strong> <code>HDG/TRK</code>, <code>OP CLB / OP DES</code> (ignores alt constraints), <code>V/S / FPA</code>.",
        ],
      },
      {
        heading: "Key Mode Reversions",
        bullets: [
          "Loss of NAV (e.g. F-PLN discontinuity) → reverts to <code>HDG/TRK</code> (triple click).",
          "Changing FCU altitude away from current ALT* → reverts to <code>V/S</code>.",
          "In <code>V/S</code>, if speed reaches VMAX/VLS → reverts to <code>OP CLB / OP DES</code> or limits pitch.",
        ],
      },
    ],
    alert: {
      level: "WARNING",
      text: "Monitor triple-click aural alerts: they indicate an automatic mode reversion or capability downgrade on the FMA.",
    },
  },
  {
    comment: "SLIDE 5.8: Autothrust (A/THR) Logic & Engagement",
    eyebrow: "APS MCC · A320 · CTA-5",
    title: "5.8 Autothrust (A/THR) Logic & Engagement",
    subtitle: "ATA 22-30 · Autothrust",
    leftTitle: "ARMED VS ACTIVE & MODES",
    rightTitle: "THRUST LEVERS & A/THR",
    image: "/images/mcc/eng_pedestal_thrust_p1682.png",
    imageAlt: "Thrust Levers and A/THR Disconnect",
    sourceRef: "Source: FCOM ATA 22-30 Flight Guidance (p.1621–1710) · CBT p.1682",
    cards: [
      {
        heading: "A/THR States & Modes",
        bullets: [
          "<strong>Armed (Cyan <code>A/THR</code>):</strong> On takeoff when thrust levers placed in FLX/MCT or TOGA; thrust controlled manually by levers.",
          "<strong>Active (White <code>A/THR</code>):</strong> Engages when levers are retarded to <strong>CL</strong> detent (or below).",
          "<strong>Thrust Modes:</strong> <code>THR CLB</code>, <code>THR IDLE</code>, <code>THR DES</code> (pitch controls speed via AP/FD).",
          "<strong>Speed Modes:</strong> <code>SPEED / MACH</code> (A/THR controls target speed; used in ALT, V/S, G/S).",
        ],
      },
    ],
    alert: {
      level: "CAUTION",
      text: "Recommended A/THR disconnection: press the red instinctive disconnect pb on the thrust levers (moving levers to IDLE also disconnects A/THR).",
    },
  },
  {
    comment: "SLIDE 5.9: Flight Augmentation (FAC) Functions",
    eyebrow: "APS MCC · A320 · CTA-5",
    title: "5.9 Flight Augmentation (FAC) Functions",
    subtitle: "ATA 22-40 · Flight Augmentation",
    leftTitle: "FAC 1 & FAC 2 FUNCTIONS",
    rightTitle: "FMGS & FAC INTEGRATION",
    image: "/images/mcc/afs_architecture_p434.png",
    imageAlt: "FMGS and FAC Architecture",
    sourceRef: "Source: FCOM ATA 22-40 Flight Augmentation (p.1711–1730) · CBT p.438",
    cards: [
      {
        heading: "4 Core FAC Functions",
        bullets: [
          "<strong>Flight Envelope Computation:</strong> Computes VLS, VαPROT, VαMAX, Green Dot, S/F speeds, and VFE/VMO/MMO.",
          "<strong>Yaw Functions:</strong> Yaw damper, turn coordination, rudder trim, and rudder travel limiting.",
          "<strong>Windshear Detection:</strong> Reactive windshear detection (1,300 ft RA to 50 ft RA).",
          "<strong>α-FLOOR Protection:</strong> Triggers automatic TOGA thrust when AOA threshold is exceeded.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE 5.10: Navigation: ADIRS & Radio Navigation",
    eyebrow: "APS MCC · A320 · CTA-5",
    title: "5.10 Navigation: ADIRS & Radio Navigation",
    subtitle: "ATA 34-NAV · ADIRS & Radio Nav",
    leftTitle: "ADIRS 1/2/3 & RADIO NAV",
    rightTitle: "ADIRS OVERHEAD PANEL",
    image: "/images/mcc/nav_adirs_overview_p1324.png",
    imageAlt: "ADIRS Overhead Control Panel",
    sourceRef: "Source: FCOM ATA 34 Navigation (p.2659–2736) · CBT p.1324",
    cards: [
      {
        heading: "Air Data Inertial Reference System (ADIRS)",
        bullets: [
          "<strong>3 identical ADIRUs (1, 2, 3):</strong> Each has an independent <strong>ADR</strong> (Mach, IAS, TAT, Alt, AOA) and <strong>IR</strong> (Attitude, Heading, Track, Position, GS).",
          "ADIRU 1 → Capt EFIS; ADIRU 2 → F/O EFIS; <strong>ADIRU 3</strong> → standby via Switching Panel.",
          "<strong>Alignment:</strong> ~10 min full alignment on ground (NAV); ATT mode provides attitude/heading only if IR lost.",
        ],
      },
      {
        heading: "Radio Navigation",
        bullets: [
          "VOR/DME/ILS/ADF are auto-tuned by the FMGCs (manual override via MCDU RAD NAV or RMP backup).",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "ADR and IR sections of each ADIRU operate independently — failure of one does not fail the other.",
    },
  },
  {
    comment: "SLIDE 5.11: Surveillance: ATC / TCAS II",
    eyebrow: "APS MCC · A320 · CTA-5",
    title: "5.11 Surveillance: ATC / TCAS II",
    subtitle: "ATA 34-SURV · ATC / TCAS",
    leftTitle: "TCAS MODES, TA & RA",
    rightTitle: "TCAS ND & PFD SYMBOLOGY",
    image: "/images/mcc/nav_tcas_egpws_p1351.png",
    imageAlt: "TCAS Symbology on ND and PFD",
    sourceRef: "Source: FCOM ATA 34 Surveillance (p.2737–2810) · CBT p.1351",
    cards: [
      {
        heading: "ATC Transponders & TCAS II",
        bullets: [
          "2 ATC Mode-S transponders (one active at a time); TCAS interrogates nearby transponders independently of ATC.",
          "<strong>ND Symbology (up to 8 intruders):</strong> Other (hollow white diamond), Proximate (solid white diamond), <strong>TA</strong> (amber circle — <em>'TRAFFIC, TRAFFIC'</em>), <strong>RA</strong> (red square — vertical order).",
          "<strong>PFD V/S Band:</strong> Displays green target zone and red avoid zone during RA; <strong>AP/FD TCAS</strong> guides automatically if armed.",
        ],
      },
    ],
    alert: {
      level: "WARNING",
      text: "In a TCAS Resolution Advisory (RA), follow the RA vertical maneuver promptly and smoothly even if contrary to an ATC clearance.",
    },
  },
  {
    comment: "SLIDE 5.12: Surveillance: EGPWS & Weather Radar",
    eyebrow: "APS MCC · A320 · CTA-5",
    title: "5.12 Surveillance: EGPWS & Weather Radar",
    subtitle: "ATA 34-SURV · EGPWS & WXR",
    leftTitle: "EGPWS MODES & WEATHER RADAR",
    rightTitle: "SURVEILLANCE DISPLAYS",
    image: "/images/mcc/nav_tcas_egpws_p1351.png",
    imageAlt: "A320 Surveillance Display Overview",
    sourceRef: "Source: FCOM ATA 34 Surveillance (p.2811–2876) · CBT p.1355–1386",
    cards: [
      {
        heading: "EGPWS (Below 2,450 ft RA)",
        bullets: [
          "<strong>Basic Modes 1–5:</strong> 1. Excessive Descent Rate (<em>SINK RATE / PULL UP</em>) · 2. Excessive Terrain Closure (<em>TERRAIN / PULL UP</em>) · 3. Altitude Loss After Takeoff (<em>DON'T SINK</em>) · 4. Unsafe Terrain Clearance (<em>TOO LOW TERRAIN/GEAR/FLAPS</em>) · 5. Below Glideslope (<em>GLIDESLOPE</em>).",
          "<strong>Enhanced Functions:</strong> Worldwide terrain/obstacle database (<code>TERR ON ND</code>) + Terrain Clearance Floor.",
        ],
      },
      {
        heading: "Weather Radar (WXR) & Predictive Windshear",
        bullets: [
          "Detects precipitation and predictive windshear ahead (PWS); alert/display on ND.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "The ND can display only one background image at a time: either EGPWS Terrain (TERR ON ND) or Weather Radar (WXR), never both simultaneously.",
    },
  },
];

export const MCC_LESSON_1 = {
  id: "a3200000-0000-0000-0000-000000000001",
  course_id: MCC_COURSE_ID,
  title: "1. Aircraft General, Cockpit, EIS & Golden Rules (CTA-1)",
  slug: "cta-1-aircraft-general-eis-golden-rules",
  sequence_order: 1,
  lesson_order: 1,
  min_seconds: 1,
  content_html: joinSlides(CTA_1_SLIDES),
};

export const MCC_LESSON_2 = {
  id: "a3200000-0000-0000-0000-000000000002",
  course_id: MCC_COURSE_ID,
  title: "2. Electrical, Hydraulic & Fuel Systems (CTA-2)",
  slug: "cta-2-electrical-hydraulic-fuel",
  sequence_order: 2,
  lesson_order: 2,
  min_seconds: 1,
  content_html: joinSlides(CTA_2_SLIDES),
};

export const MCC_LESSON_3 = {
  id: "a3200000-0000-0000-0000-000000000003",
  course_id: MCC_COURSE_ID,
  title: "3. Pneumatic, Air Cond/Press, APU, Fire & Ice/Rain (CTA-3)",
  slug: "cta-3-pneumatic-air-cond-apu-fire-ice",
  sequence_order: 3,
  lesson_order: 3,
  min_seconds: 1,
  content_html: joinSlides(CTA_3_SLIDES),
};

export const MCC_LESSON_4 = {
  id: "a3200000-0000-0000-0000-000000000004",
  course_id: MCC_COURSE_ID,
  title: "4. Flight Controls (FBW), Landing Gear, Doors & Oxygen (CTA-4)",
  slug: "cta-4-flight-controls-gear-doors-oxygen",
  sequence_order: 4,
  lesson_order: 4,
  min_seconds: 1,
  content_html: joinSlides(CTA_4_SLIDES),
};

export const MCC_LESSON_5 = {
  id: "a3200000-0000-0000-0000-000000000005",
  course_id: MCC_COURSE_ID,
  title: "5. Power Plant (CFM56-5B), Auto Flight & Nav/Surv (CTA-5)",
  slug: "cta-5-power-plant-auto-flight-nav-surv",
  sequence_order: 5,
  lesson_order: 5,
  min_seconds: 1,
  content_html: joinSlides(CTA_5_SLIDES),
};

// ============================================================================
// CTA-6: FLIGHT MANAGEMENT SYSTEM (FMGS / MCDU OPERATIONS) (10 SLIDES)
// ============================================================================
const CTA_6_SLIDES: MccSlideSpec[] = [
  {
    comment: "SLIDE 6.1: FMGS Databases, Position & Accuracy",
    eyebrow: "APS MCC · A320 · CTA-6",
    title: "6.1 FMGS Databases, Position & Accuracy",
    subtitle: "ATA 22-20 · Flight Management",
    leftTitle: "DATABASES & FM POSITION",
    rightTitle: "MCDU INIT & POSITION MONITOR",
    image: "/images/mcc/fms_mcdu_perf_init_p352.png",
    imageAlt: "MCDU Initialization and Database",
    sourceRef: "Source: FCOM ATA 22-20 Flight Management (p.501–520, 535–580) · CBT p.310–324",
    cards: [
      {
        heading: "Two FMGS Databases",
        bullets: [
          "<strong>Navigation Database:</strong> Updated every 28 days (active + second cycle); contains airports, navaids, airways, waypoints, SIDs/STARs, approaches.",
          "<strong>Performance Database:</strong> Aircraft-specific performance model used for ECON speed/Mach optimization and predictions (ETA, EFOB).",
        ],
      },
      {
        heading: "FM Position & Accuracy",
        bullets: [
          "Each FMGC computes its own <strong>FM Position</strong> from <strong>MIX IRS</strong> position + Radio (DME/DME, VOR/DME, LOC) or <strong>GPS</strong> position (BIAS vector).",
          "<strong>EPE vs RNP:</strong> Estimated Position Error compared against Required Navigation Performance; <code>GPS PRIMARY</code> provides highest accuracy.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "Cross-check FM position using raw navigation data periodically (if GPS is not primary) or whenever GPS PRIMARY LOST / NAV ACC DOWNGRAD appears.",
    },
  },
  {
    comment: "SLIDE 6.2: MCDU Layout & Initialization (DIFSRIPP Flow)",
    eyebrow: "APS MCC · A320 · CTA-6",
    title: "6.2 MCDU Layout & Initialization (DIFSRIPP Flow)",
    subtitle: "ATA 22-20 · Preflight MCDU",
    leftTitle: "MCDU PREFLIGHT SEQUENCE",
    rightTitle: "MCDU INIT A / INIT B",
    image: "/images/mcc/fms_mcdu_perf_init_p352.png",
    imageAlt: "MCDU INIT A and INIT B Pages",
    sourceRef: "Source: PROCEDURES APS MCC (p.137–151) · FCOM ATA 22-20 (p.520–524)",
    cards: [
      {
        heading: "Standard Preflight MCDU Flow (DIFSRIPP)",
        bullets: [
          "<strong>D — DATA:</strong> Check A/C type, Engine type, and active Nav Database validity.",
          "<strong>I — INIT A:</strong> <code>CO RTE</code> or <code>FROM/TO</code>, <code>ALTN</code>, <code>FLT NBR</code>, <code>COST INDEX</code>, <code>CRZ FL/TEMP</code>, and <code>IRS INIT</code>.",
          "<strong>F — F-PLN:</strong> Insert Departure (RWY, SID), Airways/Waypoints, Arrival (STAR, APPR, VIA), and check discontinuities.",
          "<strong>S — SEC F-PLN:</strong> Copy Active (e.g., EO SID, circling, or runway change).",
          "<strong>R — RAD NAV:</strong> Check/enter navaids for departure/crosscheck.",
          "<strong>I — INIT B · P — PERF · P — PROG:</strong> Weights/Fuel, Takeoff speeds/flex, and Cruise/Predictive GPS check.",
        ],
      },
    ],
    alert: {
      level: "CAUTION",
      text: "INIT B is only accessible BEFORE engine start (once an engine starts, INIT B is replaced by FUEL PRED).",
    },
  },
  {
    comment: "SLIDE 6.3: INIT B: Weights, Fuel Planning & Predictions",
    eyebrow: "APS MCC · A320 · CTA-6",
    title: "6.3 INIT B: Weights, Fuel Planning & Predictions",
    subtitle: "ATA 22-20 · INIT B & FUEL PRED",
    leftTitle: "WEIGHTS & FUEL BREAKDOWN",
    rightTitle: "INIT B STRATEGIC DATA",
    image: "/images/mcc/fms_mcdu_perf_init_p352.png",
    imageAlt: "MCDU INIT B Fuel and Weight Page",
    sourceRef: "Source: FCOM ATA 22-20 (p.522, 620–680) · CBT p.352",
    cards: [
      {
        heading: "Mandatory Crew Entries on INIT B",
        bullets: [
          "<strong>ZFW / ZFWCG:</strong> Zero Fuel Weight and Center of Gravity (cross-checked against Loadsheet).",
          "<strong>BLOCK:</strong> Block fuel on board (must match ECAM FOB).",
          "<strong>TAXI / TRIP / RTE RSV / ALTN / FINAL:</strong> Computed against Computerized Flight Plan (CFP).",
        ],
      },
      {
        heading: "Computed Outputs",
        bullets: [
          "<strong>TOW / LW:</strong> Predicted Takeoff Weight and Landing Weight (checked against structural limits).",
          "<strong>EXTRA / TIME:</strong> Remaining fuel and holding time above destination minima.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE 6.4: Active F-PLN Construction & Discontinuities",
    eyebrow: "APS MCC · A320 · CTA-6",
    title: "6.4 Active F-PLN Construction & Discontinuities",
    subtitle: "ATA 22-20 · Flight Plan",
    leftTitle: "F-PLN STRUCTURE & COLORS",
    rightTitle: "ND F-PLN VERIFICATION",
    image: "/images/mcc/efis_nd_modes_p644.png",
    imageAlt: "ND Flight Plan Verification",
    sourceRef: "Source: FCOM ATA 22-20 (p.517, 681–780) · CBT p.326–345",
    cards: [
      {
        heading: "Lateral Flight Plan Elements",
        bullets: [
          "Composed of <strong>Departure</strong>, <strong>En-route</strong>, <strong>Arrival</strong>, and <strong>Alternate</strong> segments linked by waypoints and legs.",
          "<strong>Temporary F-PLN (TMPY):</strong> Displayed in <strong>yellow</strong> on ND and MCDU until <code>INSERT*</code> (or <code>ERASE*</code>).",
          "<strong>Active F-PLN:</strong> Displayed in <strong>green</strong> (or dashed green if HDG/TRK selected).",
          "<strong>F-PLN DISCONTINUITY:</strong> Break between segments; if reached in NAV, aircraft reverts to HDG/TRK.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "Verify the entire active F-PLN leg-by-leg in ND PLAN mode against official IFR departure/enroute/arrival charts before departure.",
    },
  },
  {
    comment: "SLIDE 6.5: Lateral Revisions: DIR TO, HOLD & OFFSET",
    eyebrow: "APS MCC · A320 · CTA-6",
    title: "6.5 Lateral Revisions: DIR TO, HOLD & OFFSET",
    subtitle: "ATA 22-20 · Lateral Revisions",
    leftTitle: "DIR TO & LATERAL REVISIONS",
    rightTitle: "ND LATERAL MODIFICATIONS",
    image: "/images/mcc/efis_nd_modes_p644.png",
    imageAlt: "ND Lateral Revision Display",
    sourceRef: "Source: FCOM ATA 22-20 (p.519–523, 781–880) · CBT p.331–349",
    cards: [
      {
        heading: "DIR TO Function",
        bullets: [
          "<strong>Direct to Waypoint:</strong> Turns aircraft directly from present position to selected waypoint (or enter via scratchpad if not in F-PLN).",
          "<strong>DIR TO / ABEAM:</strong> Retains abeam waypoints from original route.",
          "<strong>DIR TO / RADIAL IN / OUT:</strong> Intercepts a specified inbound or outbound course to/from the waypoint.",
        ],
      },
      {
        heading: "Lateral Revision (LSK at Waypoint)",
        bullets: [
          "Accesses Departure/Arrival, Airways, <strong>HOLD</strong> (database or manual inbound/turn/time), <strong>OFFSET</strong> (1–50 NM L/R), <strong>FIX INFO</strong>, and Alternate.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE 6.6: Vertical Revisions & Constraints",
    eyebrow: "APS MCC · A320 · CTA-6",
    title: "6.6 Vertical Revisions & Constraints",
    subtitle: "ATA 22-20 · Vertical F-PLN",
    leftTitle: "CONSTRAINTS & PSEUDO-WAYPOINTS",
    rightTitle: "PFD VERTICAL PROFILE",
    image: "/images/mcc/efis_pfd_overview_p675.png",
    imageAlt: "PFD Vertical Profile and Constraints",
    sourceRef: "Source: FCOM ATA 22-20 (p.523, 881–980) · CBT p.354–361",
    cards: [
      {
        heading: "Vertical Revisions (Right LSK at Waypoint)",
        bullets: [
          "<strong>Altitude Constraints:</strong> <code>At</code>, <code>At or Above (+)</code>, <code>At or Below (-)</code>, or Window.",
          "<strong>Speed Constraints:</strong> Mach or IAS limit at or before waypoint.",
          "<strong>Step Alts & Winds:</strong> Optimum/planned step climbs and climb/cruise/descent wind entries.",
        ],
      },
      {
        heading: "ND Pseudo-Waypoints",
        bullets: [
          "<strong>T/C</strong> (Top of Climb), <strong>T/D</strong> (Top of Descent), <strong>S/C</strong> (Step Climb), <strong>(DECEL)</strong> (Deceleration point), Speed Change, and Intercept symbols.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "On the ND, a magenta star at a waypoint indicates a satisfied altitude constraint; an amber star warns it is predicted to be missed; white means disregarded.",
    },
  },
  {
    comment: "SLIDE 6.7: PERF Pages: TAKEOFF & CLB",
    eyebrow: "APS MCC · A320 · CTA-6",
    title: "6.7 PERF Pages: TAKEOFF & CLB",
    subtitle: "ATA 22-20 · PERF T.O & CLB",
    leftTitle: "PERF TAKEOFF & CLIMB",
    rightTitle: "PFD TAKEOFF SPEEDS",
    image: "/images/mcc/efis_pfd_speeds_p690.png",
    imageAlt: "PERF TAKEOFF and PFD Speed Tape",
    sourceRef: "Source: FCOM ATA 22-20 (p.524, 981–1100) · CBT p.359",
    cards: [
      {
        heading: "PERF TAKE OFF Page",
        bullets: [
          "Crew inserts <strong>V1, VR, V2</strong>, <strong>FLX TO TEMP</strong> (if Flex takeoff), <strong>FLAPS/THS</strong> (e.g. <code>1/UP0.8</code>), and verifies <strong>TRANS ALT</strong>.",
          "<strong>THR RED / ACC:</strong> Thrust reduction and acceleration altitudes (default 1,500 ft AAL unless noise abatement requires otherwise).",
          "<strong>ENG OUT ACC:</strong> Engine-out acceleration altitude.",
        ],
      },
      {
        heading: "PERF CLB Page",
        bullets: [
          "Displays ECON climb speed/Mach (based on Cost Index); allows pre-selection of a manual speed or <code>EXPEDITE</code> predictions.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE 6.8: PERF Pages: CRZ, DES, APPR & GO AROUND",
    eyebrow: "APS MCC · A320 · CTA-6",
    title: "6.8 PERF Pages: CRZ, DES, APPR & GO AROUND",
    subtitle: "ATA 22-20 · PERF CRZ/DES/APPR",
    leftTitle: "DESCENT, APPROACH & GA",
    rightTitle: "PERF APPR & PFD",
    image: "/images/mcc/efis_pfd_speeds_p690.png",
    imageAlt: "MCDU PERF APPR Page",
    sourceRef: "Source: FCOM ATA 22-20 (p.524–525, 1101–1260) · PROCEDURES p.231",
    cards: [
      {
        heading: "PERF CRZ & DES",
        bullets: [
          "<strong>CRZ:</strong> ECON Mach/Speed, Optimum FL, Recommended Max FL.",
          "<strong>DES:</strong> ECON descent speed/Mach; crew can pre-select managed descent speed before T/D.",
        ],
      },
      {
        heading: "PERF APPR & GO AROUND",
        bullets: [
          "<strong>PERF APPR:</strong> Crew inserts <code>QNH</code>, <code>TEMP</code>, <code>MAG WIND</code>, <code>BARO</code> (MDA) or <code>RADIO</code> (DH), and <code>LDG CONF</code> (FULL or CONF 3).",
          "<strong>Approach Phase Activation:</strong> Auto-activates at <code>(DECEL)</code> in NAV/APP NAV, or manually via <code>ACTIVATE APPR PHASE</code>.",
        ],
      },
    ],
    alert: {
      level: "WARNING",
      text: "Do NOT confuse 'ARM APPROACH' (pushing APPR pb on the FCU) with 'ACTIVATE APPROACH PHASE' (on the MCDU PERF page).",
    },
  },
  {
    comment: "SLIDE 6.9: PROG, SEC F-PLN & RAD NAV Pages",
    eyebrow: "APS MCC · A320 · CTA-6",
    title: "6.9 PROG, SEC F-PLN & RAD NAV Pages",
    subtitle: "ATA 22-20 · PROG, SEC & RAD NAV",
    leftTitle: "PROG, SEC F-PLN & RAD NAV",
    rightTitle: "MCDU STRATEGIC PAGES",
    image: "/images/mcc/fms_mcdu_perf_init_p352.png",
    imageAlt: "MCDU PROG and SEC F-PLN",
    sourceRef: "Source: FCOM ATA 22-20 (p.525, 1261–1370)",
    cards: [
      {
        heading: "PROG Page",
        bullets: [
          "Displays active cruise FL, <strong>OPT</strong> and <strong>REC MAX</strong> FL, <strong>BRG/DIST</strong> to any inserted fix/airport, Predictive GPS, and VDEV.",
        ],
      },
      {
        heading: "SEC F-PLN & RAD NAV",
        bullets: [
          "<strong>SEC F-PLN:</strong> Used for EOSID, immediate return, circling, or alternate runway/approach.",
          "<strong>RAD NAV:</strong> Displays FMGC auto-tuned VOR/DME/ILS/ADF; allows manual frequency/course entry for raw data crosscheck or non-stored approaches.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE 6.10: FMGS Failure & Degraded Modes",
    eyebrow: "APS MCC · A320 · CTA-6",
    title: "6.10 FMGS Failure & Degraded Modes",
    subtitle: "ATA 22-20 · Degraded Operations",
    leftTitle: "SINGLE, INDEPENDENT & BACKUP",
    rightTitle: "FMGS ARCHITECTURE",
    image: "/images/mcc/afs_architecture_p434.png",
    imageAlt: "FMGS Single and Independent Modes",
    sourceRef: "Source: FCOM ATA 22-20 (p.1371–1406)",
    cards: [
      {
        heading: "FMGS Operating Modes",
        bullets: [
          "<strong>Dual Mode (Normal):</strong> FMGC 1 (master if AP1 or no AP) and FMGC 2 exchange and synchronize data.",
          "<strong>Single Mode:</strong> If one FMGC fails, the operative FMGC drives both NDs/MCDUs (if crew keeps both MCDUs on same side or via switching).",
          "<strong>Independent Mode:</strong> If FMGCs disagree, they operate independently (<code>INDEPENDENT OPERATION</code> on MCDU scratchpad).",
          "<strong>Dual FMGC Failure:</strong> Loss of managed guidance/F-PLN; fly selected modes on FCU + raw data tuning via RMP (<code>NAV B/UP</code> if available).",
        ],
      },
    ],
  },
];

// ============================================================================
// CTA-7: NORMAL PROCEDURES, FLOW PATTERNS & FLIGHT PHASES (12 SLIDES)
// ============================================================================
const CTA_7_SLIDES: MccSlideSpec[] = [
  {
    comment: "SLIDE 7.1: Preliminary Cockpit Prep & Safety Walkaround",
    eyebrow: "APS MCC · A320 · CTA-7",
    title: "7.1 Preliminary Cockpit Prep & Safety Walkaround",
    subtitle: "Normal Procedures · Preliminary Prep",
    leftTitle: "PRELIMINARY COCKPIT PREPARATION",
    rightTitle: "COCKPIT SAFETY CHECKS",
    image: "/images/mcc/ac_gen_cockpit_p158.png",
    imageAlt: "A320 Cockpit Preparation",
    sourceRef: "Source: PROCEDURES APS MCC (p.297–330) · FCOM Normal Procedures (p.5775–5850)",
    cards: [
      {
        heading: "Preliminary Preparation (Before Full Flow)",
        bullets: [
          "<strong>Aircraft Acceptance:</strong> Review Technical Log, OEBs, and MEL items.",
          "<strong>Safety Checks:</strong> ENG MASTER 1/2 OFF, ENG MODE NORM, L/G Lever DOWN, Wipers OFF, Parking Brake ON.",
          "<strong>Electrical Power-Up:</strong> Check BAT 1 & 2 voltage (>25.5V), connect EXT PWR or start APU (after Fire Test).",
          "<strong>Exterior Walkaround:</strong> Gear pins/covers removed, probes/static ports clear, tires/brakes, doors, fluid leaks.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE 7.2: Cockpit Preparation Flow Patterns",
    eyebrow: "APS MCC · A320 · CTA-7",
    title: "7.2 Cockpit Preparation Flow Patterns",
    subtitle: "Normal Procedures · Flow Patterns",
    leftTitle: "OVERHEAD, MIP & PEDESTAL FLOWS",
    rightTitle: "OVERHEAD PANEL FLOW",
    image: "/images/mcc/elec_overhead_panel_p854.png",
    imageAlt: "Overhead Panel Scan Flow",
    sourceRef: "Source: PROCEDURES APS MCC — Flow Patterns (p.23–29)",
    cards: [
      {
        heading: "Standard Scan Flows",
        bullets: [
          "<strong>Overhead Panel:</strong> Top-to-bottom, left-to-right (ADIRS NAV → White lights extinguished → Fuel pumps → Elec → Air Cond/Pack Flow → Ext Lights → Signs → Emergency Exit Lt ARM).",
          "<strong>Center Instrument Panel:</strong> ISIS, Clock, Anti-Skid/NWS ON, Brake pressure.",
          "<strong>Pedestal:</strong> Switching panel NORM, Weather Radar OFF/STBY, ACP/RMP, Speedbrake retracted/disarmed, Flaps match actual, Parking Brake.",
          "<strong>Glareshield / Final Prep:</strong> Baro ref, FD ON, FCU initial clearance.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "Follow the Dark Cockpit rule during the Overhead flow: extinguish all white lights except those intentionally required.",
    },
  },
  {
    comment: "SLIDE 7.3: Before Start, Pushback & Engine Start",
    eyebrow: "APS MCC · A320 · CTA-7",
    title: "7.3 Before Start, Pushback & Engine Start",
    subtitle: "Normal Procedures · Engine Start",
    leftTitle: "BEFORE START & AUTO START",
    rightTitle: "PEDESTAL ENGINE CONTROLS",
    image: "/images/mcc/eng_pedestal_thrust_p1682.png",
    imageAlt: "Engine Start Controls on Pedestal",
    sourceRef: "Source: PROCEDURES APS MCC — Flight Phases (p.155–170)",
    cards: [
      {
        heading: "Before Pushback / Start",
        bullets: [
          "Receive Final Loadsheet → recompute Final Takeoff Performance & update MCDU.",
          "<strong>Before Start C/L</strong> (Down to the line → Doors/Slides/Windows/Beacon ON → Below the line).",
        ],
      },
      {
        heading: "Automatic Engine Start Sequence",
        bullets: [
          "Set <code>ENG MODE</code> to <code>IGN START</code> (packs close automatically via APU bleed).",
          "Start <strong>ENG 2</strong> then <strong>ENG 1</strong>: monitor N2 rise, fuel flow, ignition, EGT peak, N1, and Oil Pressure.",
          "At idle stabilized (~58% N2 / ~20% N1), set <code>ENG MODE</code> back to <code>NORM</code>.",
        ],
      },
    ],
    alert: {
      level: "CAUTION",
      text: "Closely monitor EGT, N1, N2, and Oil Pressure during start; be prepared for manual intervention on hot start or hung start.",
    },
  },
  {
    comment: "SLIDE 7.4: After Start Flow & Taxi Procedures",
    eyebrow: "APS MCC · A320 · CTA-7",
    title: "7.4 After Start Flow & Taxi Procedures",
    subtitle: "Normal Procedures · After Start & Taxi",
    leftTitle: "AFTER START & TAXI CHECKS",
    rightTitle: "FLIGHT CONTROL CHECK",
    image: "/images/mcc/fctl_ecam_surfaces_p1004.png",
    imageAlt: "ECAM F/CTL Check During Taxi",
    sourceRef: "Source: PROCEDURES APS MCC (p.30–37, 171–175)",
    cards: [
      {
        heading: "After Start Flow",
        bullets: [
          "<code>APU BLEED</code> OFF (and APU MASTER SW OFF if not needed), Ground Spoilers <strong>ARM</strong>, Rudder Trim ZERO, <strong>Flaps</strong> set for takeoff, Pitch Trim set, Anti-Ice as required.",
          "<strong>After Start C/L</strong> complete.",
        ],
      },
      {
        heading: "Taxi Procedures",
        bullets: [
          "Obtain taxi clearance, NOSE light <code>TAXI</code>, perform <strong>Brake Check</strong> immediately on roll.",
          "Perform <strong>Flight Control Check</strong> (Elevators, Ailerons/Spoilers, Rudder verified on ECAM F/CTL).",
          "Review ATC clearance, T.O Config pb test, <strong>Taxi C/L</strong>.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "During the Flight Control Check, the PM must follow the rudder pedal movement with their feet and call out full travel on ECAM F/CTL.",
    },
  },
  {
    comment: "SLIDE 7.5: Before Takeoff & Line-Up",
    eyebrow: "APS MCC · A320 · CTA-7",
    title: "7.5 Before Takeoff & Line-Up",
    subtitle: "Normal Procedures · Before Takeoff",
    leftTitle: "BEFORE TAKEOFF & LINE-UP",
    rightTitle: "ECAM T.O MEMO",
    image: "/images/mcc/ecam_ewd_sd_normal_p565.png",
    imageAlt: "ECAM T.O Memo Verification",
    sourceRef: "Source: PROCEDURES APS MCC — Flight Phases (p.176–181)",
    cards: [
      {
        heading: "Before Takeoff (Down to the Line / Below the Line)",
        bullets: [
          "Verify <strong>CABIN READY</strong>, Packs (ON / APU bleed / OFF as per perf), Engine Mode (NORM or IGN if heavy rain/standing water).",
          "<strong>Line-Up:</strong> Confirm <strong>Approach Path clear</strong> of traffic, confirm <strong>Takeoff Runway</strong> (heading/ILS/MCDU).",
          "Set Exterior Lights (T.O, Strobe ON), TCAS <code>TA/RA</code>, Brake Temp check, T.O Memo all green (no blue).",
        ],
      },
    ],
  },
  {
    comment: "SLIDE 7.6: Takeoff Roll, Rotation & Initial Climb",
    eyebrow: "APS MCC · A320 · CTA-7",
    title: "7.6 Takeoff Roll, Rotation & Initial Climb",
    subtitle: "Normal Procedures · Takeoff",
    leftTitle: "TAKEOFF SEQUENCE",
    rightTitle: "PFD TAKEOFF INDICATIONS",
    image: "/images/mcc/efis_pfd_speeds_p690.png",
    imageAlt: "PFD Takeoff Speeds and SRS",
    sourceRef: "Source: PROCEDURES APS MCC — Flight Phases (p.182–196)",
    cards: [
      {
        heading: "Takeoff Roll & Rotation",
        bullets: [
          "Advance thrust levers to <strong>50% N1</strong> (stabilize) → move to <strong>FLX/MCT</strong> or <strong>TOGA</strong> detent (half forward stick until 80 kt, neutral by 100 kt).",
          "Verify FMA (<code>MAN FLX / SRS / RWY / A/THR blue</code>); PM checks thrust set before 80 kt, <code>100 kt</code>, <code>V1</code>, <code>VR</code>.",
          "Rotate smoothly (~3°/s to ~15° pitch) following SRS bar; at positive climb → <code>GEAR UP</code>.",
        ],
      },
      {
        heading: "Thrust Reduction & Acceleration",
        bullets: [
          "At <strong>THR RED ALT:</strong> Retard thrust levers to <code>CL</code> detent (<code>THR CLB / A/THR</code> active).",
          "At <strong>ACC ALT:</strong> Pitch lowers to accelerate; retract Flaps/Slats on schedule (F → S → 0).",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "The Captain (CM1) keeps their hand on the thrust levers until V1, ready to execute an RTO if required.",
    },
  },
  {
    comment: "SLIDE 7.7: After Takeoff, Climb & 10,000 ft Flow",
    eyebrow: "APS MCC · A320 · CTA-7",
    title: "7.7 After Takeoff, Climb & 10,000 ft Flow",
    subtitle: "Normal Procedures · Climb",
    leftTitle: "AFTER TAKEOFF & 10,000 FT FLOW",
    rightTitle: "PFD CLIMB & STD SETTING",
    image: "/images/mcc/efis_pfd_overview_p675.png",
    imageAlt: "PFD Climb and Altimeter Setting",
    sourceRef: "Source: PROCEDURES APS MCC (p.191–202)",
    cards: [
      {
        heading: "After Takeoff & Transition Altitude",
        bullets: [
          "Disarm Ground Spoilers, Nose/RWY Turnoff lights OFF, APU OFF if used for T.O → <strong>After Takeoff C/L</strong>.",
          "Passing Transition Altitude: pull BARO knob for <strong>STD</strong> on both PFDs and ISIS; crosscheck altitudes.",
        ],
      },
      {
        heading: "10,000 ft AAL Climb Flow Pattern",
        bullets: [
          "Landing Lights OFF, Seatbelts OFF (if smooth), EFIS CSTR/ARPT as required, check ECAM memos/pressurization, review MCDU SEC F-PLN/OPT FL.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE 7.8: Cruise Monitoring & Step Climbs",
    eyebrow: "APS MCC · A320 · CTA-7",
    title: "7.8 Cruise Monitoring & Step Climbs",
    subtitle: "Normal Procedures · Cruise",
    leftTitle: "CRUISE MONITORING TASKS",
    rightTitle: "ECAM CRUISE PAGE",
    image: "/images/mcc/ecam_ewd_sd_normal_p565.png",
    imageAlt: "ECAM Cruise Page Monitoring",
    sourceRef: "Source: PROCEDURES APS MCC (p.203–206) · FCOM Normal Procedures",
    cards: [
      {
        heading: "Routine Cruise Checks",
        bullets: [
          "<strong>FMA Check:</strong> <code>MACH / ALT CRZ / NAV / A/THR</code>.",
          "<strong>ECAM SD Cruise Page:</strong> Monitor engine parameters, fuel used, cabin ΔP, and cabin altitude.",
          "<strong>Fuel & Nav Log:</strong> Compare actual FOB + Fuel Used vs CFP every ~30 min / waypoint; check OPT FL vs REC MAX FL.",
          "<strong>RVSM Altimetry:</strong> Periodic cross-check between Capt, F/O, and Standby altimeters (within RVSM tolerances).",
        ],
      },
    ],
  },
  {
    comment: "SLIDE 7.9: Descent Preparation & Descent Monitoring",
    eyebrow: "APS MCC · A320 · CTA-7",
    title: "7.9 Descent Preparation & Descent Monitoring",
    subtitle: "Normal Procedures · Descent",
    leftTitle: "DESCENT PREP & 10,000 FT FLOW",
    rightTitle: "MCDU DES / APPR PREP",
    image: "/images/mcc/fms_mcdu_perf_init_p352.png",
    imageAlt: "MCDU Descent and Approach Preparation",
    sourceRef: "Source: PROCEDURES APS MCC (p.210–225)",
    cards: [
      {
        heading: "Descent Preparation (~80–100 NM before T/D)",
        bullets: [
          "Obtain Destination ATIS/Weather, compute Landing Performance, complete MCDU (<code>F-PLN Arrival</code>, <code>RAD NAV</code>, <code>PERF DES/APPR/GA</code>, <code>SEC F-PLN</code>), perform Approach Briefing.",
        ],
      },
      {
        heading: "Descent Initiation & Monitoring",
        bullets: [
          "Clearance altitude set on FCU → Push for <code>DES</code> (or Pull for <code>OP DES</code> / <code>V/S</code>); monitor VDEV (green yoyo) and energy.",
          "Passing Transition Level: set <strong>QNH</strong> and crosscheck; at <strong>10,000 ft AAL</strong>: Landing Lights ON, Seatbelts ON, LS pb (if ILS), CSTR, Nav Accuracy check, <strong>Approach C/L</strong>.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE 7.10: Approach: 3D (ILS) vs 2D (NPA) Strategies",
    eyebrow: "APS MCC · A320 · CTA-7",
    title: "7.10 Approach: 3D (ILS) vs 2D (NPA) Strategies",
    subtitle: "Normal Procedures · Approach",
    leftTitle: "DECELERATED VS EARLY STABILIZED",
    rightTitle: "ND APPROACH MONITORING",
    image: "/images/mcc/efis_nd_modes_p644.png",
    imageAlt: "ND Approach Tracking",
    sourceRef: "Source: PROCEDURES APS MCC (p.226–261)",
    cards: [
      {
        heading: "Two Approach Configuration Strategies",
        bullets: [
          "<strong>Decelerated Approach (Standard ILS / Managed 3D):</strong> Gear down & Flaps 2 before glideslope intercept or at 2,000 ft AGL; stabilized by 1,000 ft AAL IMC (500 ft VMC).",
          "<strong>Early Stabilized Approach (2D / NPA):</strong> Configure to Landing Configuration and VAPP before the Final Descent Point (FDP).",
        ],
      },
      {
        heading: "ILS vs NPA Guidance",
        bullets: [
          "<strong>ILS:</strong> Arm <code>APPR</code> on FCU → monitor <code>LOC* / LOC</code> and <code>G/S* / G/S</code>; set Go-Around Altitude once G/S captured.",
          "<strong>NPA (FPA / FINAL APP):</strong> Use Bird (TRK-FPA) or Managed <code>FINAL APP</code>; verify vertical path at altitude check gates.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "Stabilized approach gates: by 1,000 ft AAL (IMC) or 500 ft AAL (VMC), aircraft must be on track/glide, in landing config, at VAPP (+10/-5 kt), with checklists complete.",
    },
  },
  {
    comment: "SLIDE 7.11: Landing, Flare, Rollout & Go-Around",
    eyebrow: "APS MCC · A320 · CTA-7",
    title: "7.11 Landing, Flare, Rollout & Go-Around",
    subtitle: "Normal Procedures · Landing & GA",
    leftTitle: "LANDING, ROLLOUT & GO-AROUND",
    rightTitle: "LANDING & BRAKING",
    image: "/images/mcc/ldg_gear_braking_p1241.png",
    imageAlt: "Landing Braking and Rollout",
    sourceRef: "Source: PROCEDURES APS MCC (p.262–283)",
    cards: [
      {
        heading: "Manual Landing & Rollout",
        bullets: [
          "At ~30–20 ft RA: flare smoothly and retard thrust levers to <strong>IDLE</strong> at <em>'RETARD'</em> callout.",
          "On touchdown: verify Ground Spoilers extended, select Reverse Thrust (<code>REV MAX</code> or <code>IDLE</code>), monitor Autobrake / <code>DECEL</code>, stow reversers by 70 kt, vacate runway.",
        ],
      },
      {
        heading: "Go-Around Execution",
        bullets: [
          "Set thrust levers to <strong>TOGA</strong>, rotate to SRS (~15°), call <strong>'GO AROUND — FLAPS'</strong> (retract 1 step), verify positive climb → <strong>'GEAR UP'</strong>, follow FMA (<code>MAN TOGA / SRS / GA TRK</code>).",
        ],
      },
    ],
  },
  {
    comment: "SLIDE 7.12: After Landing, Parking & Securing Aircraft",
    eyebrow: "APS MCC · A320 · CTA-7",
    title: "7.12 After Landing, Parking & Securing Aircraft",
    subtitle: "Normal Procedures · Shutdown",
    leftTitle: "AFTER LANDING, PARKING & SECURING",
    rightTitle: "OVERHEAD SHUTDOWN FLOW",
    image: "/images/mcc/apu_overhead_panels_p180.png",
    imageAlt: "APU and Overhead Shutdown Flow",
    sourceRef: "Source: PROCEDURES APS MCC (p.38–39, 284–296)",
    cards: [
      {
        heading: "Three Final Flows & Checklists",
        bullets: [
          "<strong>After Landing Flow:</strong> Disarm Ground Spoilers, Flaps 0, Radar/PWS OFF, Transponder STBY, APU Start, Brake Temp check → <strong>After Landing C/L</strong>.",
          "<strong>Parking Flow:</strong> Parking Brake ON (chocks in), APU Bleed ON (if needed), ENG MASTER 1 & 2 OFF (after 3 min cooldown), Beacon/Seatbelts OFF, Fuel Pumps OFF → <strong>Parking C/L</strong>.",
          "<strong>Securing the Aircraft Flow:</strong> ADIRS OFF, Exterior/Emergency Exit Lights OFF, APU Bleed/Master OFF, BAT 1 & 2 OFF → <strong>Securing C/L</strong>.",
        ],
      },
    ],
  },
];

// ============================================================================
// CTA-8: PF/PM TASK SHARING, CALLOUTS, CHECKLISTS & BRIEFINGS (10 SLIDES)
// ============================================================================
const CTA_8_SLIDES: MccSlideSpec[] = [
  {
    comment: "SLIDE 8.1: PF / PM Task Sharing Philosophy",
    eyebrow: "APS MCC · A320 · CTA-8",
    title: "8.1 PF / PM Task Sharing Philosophy",
    subtitle: "Standard Callouts & CRM Interface",
    leftTitle: "PF VS PM DUTIES & HANDOVER",
    rightTitle: "TWO-CREW COORDINATION",
    image: "/images/mcc/ac_gen_cockpit_p158.png",
    imageAlt: "PF and PM Task Sharing",
    sourceRef: "Source: Standard Callouts (p.6) · PROCEDURES APS MCC",
    cards: [
      {
        heading: "Role Division (Normal & Abnormal)",
        bullets: [
          "<strong>Pilot Flying (PF):</strong> Controls flight path, airspeed, thrust, navigation, FCU short-term entries (when manual/hand-flying, commands PM to set FCU), and FMA announcements.",
          "<strong>Pilot Monitoring (PM):</strong> Monitors flight path & parameters, handles ATC communications, executes checklists/ECAM/QRH actions, and cross-checks all PF/FCU/MCDU actions.",
        ],
      },
      {
        heading: "Transfer of Control Callouts",
        bullets: [
          "To give control: <strong>'YOU HAVE CONTROL'</strong> → Reply: <strong>'I HAVE CONTROL'</strong>.",
          "To take control: <strong>'I HAVE CONTROL'</strong> → Reply: <strong>'YOU HAVE CONTROL'</strong>.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "Both pilots must continuously monitor the flight path and FMA regardless of who is PF or PM.",
    },
  },
  {
    comment: "SLIDE 8.2: Standard Communication & Checklist Discipline",
    eyebrow: "APS MCC · A320 · CTA-8",
    title: "8.2 Standard Communication & Checklist Discipline",
    subtitle: "Standard Callouts · Checklists",
    leftTitle: "CHECKLIST PHRASEOLOGY",
    rightTitle: "ECAM & CHECKLIST FLOW",
    image: "/images/mcc/ecam_ewd_sd_normal_p565.png",
    imageAlt: "Checklist and ECAM Verification",
    sourceRef: "Source: Standard Callouts (p.1) · PROCEDURES APS MCC (p.297–418)",
    cards: [
      {
        heading: "Standard Checklist Terms",
        bullets: [
          "<strong>'CHECK':</strong> Command for the other pilot to verify an item.",
          "<strong>'CHECKED':</strong> Response confirming an item has been verified.",
          "<strong>'CROSSCHECKED':</strong> Callout verifying information from both pilot stations.",
          "<strong>Interruption:</strong> <code>'HOLD CHECKLIST AT ___'</code> and <code>'RESUME CHECKLIST AT ___'</code>.",
          "<strong>Completion:</strong> <code>'___ CHECKLIST COMPLETE'</code>.",
        ],
      },
      {
        heading: "Normal Checklists (Read-and-Do / Challenge-Response)",
        bullets: [
          "Before Start, After Start, Taxi, Before Takeoff, After Takeoff, Approach, Landing, After Landing, Parking, Securing.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE 8.3: Guía Gráfica Callouts FCU (Set / Pull / Manage)",
    eyebrow: "APS MCC · A320 · CTA-8",
    title: "8.3 Guía Gráfica Callouts FCU (Set / Pull / Manage)",
    subtitle: "Guía del Briefing · FCU Callouts",
    leftTitle: "SET / PULL / MANAGE (FCU)",
    rightTitle: "LÁMINA CALLOUTS FCU",
    image: "/images/mcc/callouts_fcu.png",
    imageAlt: "Guía Gráfica Callouts FCU Set Pull Manage",
    sourceRef: "Fuente: Callouts FCU.pdf (p.1) · Standard Callouts (p.1–2)",
    cards: [
      {
        heading: "Tres Reglas Básicas en el FCU",
        bullets: [
          "<strong>01 | SET:</strong> Girar un selector para cambiar un valor sin cambiar el modo.",
          "<strong>02 | PULL:</strong> Tirar de un selector para cambiar de modo <em>managed</em> a <em>selected</em>.",
          "<strong>03 | MANAGE:</strong> Empujar un selector para pasar de <em>selected</em> a <em>managed</em>.",
        ],
      },
    ],
    table: {
      headers: ["Acción PF", "PF Callout", "PM Callout"],
      rows: [
        ["SET SPEED / HDG / ALT", "SPEED / HDG / ALT XX BLUE", "CHECKED"],
        ["SET GA ALT XXX FT (Excepción)", "—", "GA ALT XXX FT SET"],
        ["PULL SPD / HDG / ALT", "SPEED/HDG XX BLUE · OPEN CLB/DES", "CHECKED"],
        ["MANAGE SPD / NAV / ALT", "SPEED MAGENTA · NAV · CLB/DES BLUE", "CHECKED"],
        ["PUSH TO LEVEL OFF", "V/S ZERO (No existe V/S MNG)", "CHECKED"],
      ],
    },
    alert: {
      level: "NOTE",
      text: "Excepción en SET: al ajustar la Go-Around Altitude ('SET GA ALT XXX FT'), el PM responde 'GA ALT XXX FT SET'.",
    },
  },
  {
    comment: "SLIDE 8.4: FMA, Altitude & Config Callouts",
    eyebrow: "APS MCC · A320 · CTA-8",
    title: "8.4 FMA, Altitude & Config Callouts",
    subtitle: "Standard Callouts · FMA & Config",
    leftTitle: "FMA, 1000 TO GO & FLAPS/GEAR",
    rightTitle: "FMA CALLOUT VERIFICATION",
    image: "/images/mcc/afs_fma_columns_p365.png",
    imageAlt: "FMA 5 Columns Callouts",
    sourceRef: "Source: Standard Callouts (p.3–4)",
    cards: [
      {
        heading: "FMA & Altitude Callouts",
        bullets: [
          "<strong>FMA Changes:</strong> PF calls armed modes with color (e.g., <em>'G/S BLUE, LOC BLUE'</em>) and active modes without color (e.g., <em>'NAV, ALT'</em>); PM checks and replies <strong>'CHECKED'</strong>.",
          "<strong>Altitude:</strong> PM calls <strong>'ONE THOUSAND TO GO'</strong> passing 1,000 ft before cleared alt/FL; PF replies <strong>'CHECKED'</strong>.",
        ],
      },
      {
        heading: "Flaps & Gear Callouts",
        bullets: [
          "<strong>Flaps:</strong> PF calls <em>'FLAPS ONE/TWO/THREE/FULL/ZERO'</em> → PM checks speed (>S/F or <VFE next), replies <strong>'SPEED CHECKED'</strong>, selects lever, checks ECAM blue number, replies <strong>'FLAPS ___'</strong>.",
          "<strong>Gear:</strong> PF calls <em>'GEAR UP (DOWN)'</em> → PM selects lever, checks red/green lights, replies <strong>'GEAR UP (DOWN)'</strong>.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE 8.5: Ground, Pushback, Taxi & Takeoff Callouts",
    eyebrow: "APS MCC · A320 · CTA-8",
    title: "8.5 Ground, Pushback, Taxi & Takeoff Callouts",
    subtitle: "Standard Callouts · Ground & Takeoff",
    leftTitle: "GROUND, TAXI & TAKEOFF CALLOUTS",
    rightTitle: "FCU & TAKEOFF MONITORING",
    image: "/images/mcc/afs_fcu_overview_p276.png",
    imageAlt: "FCU and Takeoff Callouts",
    sourceRef: "Source: Standard Callouts (p.6–8)",
    cards: [
      {
        heading: "Ground & Taxi",
        bullets: [
          "<strong>Pushback/Start:</strong> <em>'GROUND FROM COCKPIT, CLEARED FOR PUSH'</em> → <em>'BRAKES RELEASED READY TO PUSH'</em> → <em>'CLEAR TO START?'</em> → <em>'STARTING ENG(S) ___'</em>.",
          "<strong>Taxi:</strong> <em>'CLEAR LEFT (RIGHT) SIDE'</em> / <em>'CLEAR RIGHT (LEFT) SIDE'</em> · <em>'BRAKE CHECK'</em> · <em>'FLIGHT CONTROL CHECK'</em>.",
        ],
      },
      {
        heading: "Takeoff Callouts",
        bullets: [
          "Thrust set: PF <strong>'TAKEOFF'</strong> → PM (before 80 kt) <strong>'THRUST SET'</strong>.",
          "100 kt: PM <strong>'ONE HUNDRED KNOTS'</strong> → PF <strong>'CHECKED'</strong>.",
          "PM <strong>'V1'</strong> · PM <strong>'ROTATE'</strong> · PM <strong>'POSITIVE CLIMB'</strong> → PF <strong>'GEAR UP'</strong>.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE 8.6: Climb, Altimeter, Descent & Approach Callouts",
    eyebrow: "APS MCC · A320 · CTA-8",
    title: "8.6 Climb, Altimeter, Descent & Approach Callouts",
    subtitle: "Standard Callouts · Deviations",
    leftTitle: "ALTIMETER & DEVIATION CALLOUTS",
    rightTitle: "PFD PARAMETER MONITORING",
    image: "/images/mcc/efis_pfd_overview_p675.png",
    imageAlt: "PFD Flight Parameter Monitoring",
    sourceRef: "Source: Standard Callouts (p.4–5, 8–10)",
    cards: [
      {
        heading: "Altimeter Setting Changes",
        bullets: [
          "PF: <strong>'SET STANDARD (QNH/QFE)'</strong> → PM: <strong>'STANDARD (QNH) CROSS-CHECKED'</strong> · <strong>'PASSING FL___ NOW'</strong> → <strong>'CHECKED'</strong>.",
        ],
      },
      {
        heading: "PM Approach Deviation Callouts",
        bullets: [
          "<strong>'SPEED':</strong> < target -5 kt or > target +10 kt.",
          "<strong>'SINK RATE':</strong> Descent rate > 1,000 ft/min.",
          "<strong>'BANK':</strong> > 7° · <strong>'PITCH':</strong> < -2.5° or > +10°.",
          "<strong>'LOC' / 'GLIDE':</strong> > ½ dot · <strong>'CROSS TRACK':</strong> > 0.1 NM · <strong>'V/DEV':</strong> > ½ dot.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE 8.7: Landing, Go-Around & Autoland Callouts",
    eyebrow: "APS MCC · A320 · CTA-8",
    title: "8.7 Landing, Go-Around & Autoland Callouts",
    subtitle: "Standard Callouts · Landing & GA",
    leftTitle: "MINIMA, LANDING & GO-AROUND",
    rightTitle: "PFD APPROACH & FLARE",
    image: "/images/mcc/efis_pfd_overview_p675.png",
    imageAlt: "PFD Minima and Landing Callouts",
    sourceRef: "Source: Standard Callouts (p.6, 10–11) · PROCEDURES (p.395)",
    cards: [
      {
        heading: "Approach Minima & Landing",
        bullets: [
          "100 ft above minima: PM <strong>'HUNDRED ABOVE'</strong>.",
          "At minima: PM <strong>'MINIMUM'</strong> → PF <strong>'CONTINUE'</strong> (visual) or <strong>'GO AROUND — FLAPS'</strong>.",
          "Landing deviations: PM calls <strong>'PITCH PITCH'</strong> (near tail-strike / 10°) and <strong>'BANK BANK'</strong> (7°).",
        ],
      },
      {
        heading: "Go-Around Callouts",
        bullets: [
          "PM calls <strong>'BANK'</strong> (>7°), <strong>'PITCH'</strong> (>20° up or <10° up), or <strong>'SINK RATE'</strong> (no climb rate).",
        ],
      },
    ],
  },
  {
    comment: "SLIDE 8.8: Departure Briefing Structure",
    eyebrow: "APS MCC · A320 · CTA-8",
    title: "8.8 Departure Briefing Structure",
    subtitle: "PROCEDURES · Briefings",
    leftTitle: "DEPARTURE BRIEFING ITEMS",
    rightTitle: "MCDU & TAKEOFF BRIEFING",
    image: "/images/mcc/fms_mcdu_perf_init_p352.png",
    imageAlt: "MCDU Departure Briefing Verification",
    sourceRef: "Source: PROCEDURES APS MCC — Flight Phases (p.137–154)",
    cards: [
      {
        heading: "Structured PF Departure Briefing",
        bullets: [
          "<strong>Technical / Operational Context:</strong> Aircraft status (MEL/CDL/OEB), Weather, NOTAMs, Runway condition.",
          "<strong>Takeoff Performance (MCDU PERF T.O):</strong> Runway, Intersection, Flap config, Packs, Flex/TOGA, V1/VR/V2, Thrust Reduction & Acceleration altitudes.",
          "<strong>Taxi & Departure Routing (ND PLAN):</strong> Expected taxi route/hotspots, SID lateral & vertical constraints, Initial Climb altitude/FL, MSA.",
          "<strong>Abnormal / TEM:</strong> Engine failure before V1 (RTO), after V1 (EOSID / MSA / return or divert), Threats & Mitigation.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE 8.9: Approach Briefing Structure",
    eyebrow: "APS MCC · A320 · CTA-8",
    title: "8.9 Approach Briefing Structure",
    subtitle: "PROCEDURES · Briefings",
    leftTitle: "APPROACH BRIEFING ITEMS",
    rightTitle: "ND APPROACH BRIEFING",
    image: "/images/mcc/efis_nd_modes_p644.png",
    imageAlt: "ND Approach Briefing Verification",
    sourceRef: "Source: PROCEDURES APS MCC — Flight Phases (p.210–216)",
    cards: [
      {
        heading: "Structured PF Approach Briefing",
        bullets: [
          "<strong>Weather & Runway:</strong> ATIS, Wind, Visibility/RVR, Runway surface/braking action, Autobrake selection.",
          "<strong>Chart & MCDU F-PLN:</strong> Chart effective date, Approach type (ILS/RNP/VOR), STAR, IAF/FAF/FDP, Step-down fixes, MSA, Minima (DA/MDA), Go-Around altitude & Missed Approach.",
          "<strong>Configuration & Energy:</strong> Decelerated vs Early Stabilized, Landing Config (FULL/CONF 3), VAPP, Expected runway exit.",
          "<strong>Fuel & TEM:</strong> Extra fuel / Holding time, Alternate, Threats & Mitigation.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE 8.10: Monitoring, Crosscheck & Crew Intervention",
    eyebrow: "APS MCC · A320 · CTA-8",
    title: "8.10 Monitoring, Crosscheck & Crew Intervention",
    subtitle: "SOP · Crosscheck & Intervention",
    leftTitle: "ACTIVE MONITORING & CHALLENGE",
    rightTitle: "FMA & CROSSCHECK LOOP",
    image: "/images/mcc/afs_fma_columns_p365.png",
    imageAlt: "FMA Monitoring and Crosscheck",
    sourceRef: "Source: Standard Callouts · PROCEDURES Golden Rules (p.18–22)",
    cards: [
      {
        heading: "Closed-Loop Monitoring & Crosscheck",
        bullets: [
          "Every FCU and MCDU action must be cross-checked on the <strong>PFD / ND / FMA</strong>.",
          "PM actively monitors energy state, terrain clearance, fuel, and FMA reversions.",
        ],
      },
      {
        heading: "Intervention & Takeover",
        bullets: [
          "Under Golden Rule #4, if aircraft deviates or PF does not respond to deviation callouts: PM must <strong>communicate</strong>, <strong>challenge</strong> PF actions, and <strong>take over</strong> (<code>'I HAVE CONTROL'</code>) if safety is compromised.",
        ],
      },
    ],
  },
];

// ============================================================================
// CTA-9: ABNORMAL & EMERGENCY PROCEDURES (10 SLIDES)
// ============================================================================
const CTA_9_SLIDES: MccSlideSpec[] = [
  {
    comment: "SLIDE 9.1: ECAM Warning Levels & Alert Philosophy",
    eyebrow: "APS MCC · A320 · CTA-9",
    title: "9.1 ECAM Warning Levels & Alert Philosophy",
    subtitle: "Abnormal & Emergency · ECAM Levels",
    leftTitle: "3 WARNING LEVELS & PRIORITY",
    rightTitle: "MASTER WARN / CAUT & AURAL",
    image: "/images/mcc/ecam_alert_levels_p589.png",
    imageAlt: "ECAM Master Warning and Caution Alerts",
    sourceRef: "Source: PROCEDURES APS MCC — Abnormal & Emergency (p.419–423) · CBT p.589",
    cards: [
      {
        heading: "ECAM Alert Hierarchy",
        bullets: [
          "<strong>Level 3 (Red Warning):</strong> Immediate danger (e.g., ENG FIRE, OVERSPEED, L/G NOT DOWN). Continuous repetitive chime / synthetic voice + Red <code>MASTER WARN</code>.",
          "<strong>Level 2 (Amber Caution):</strong> Crew awareness, no immediate danger (e.g., HYD, BLEED). Single chime + Amber <code>MASTER CAUT</code>.",
          "<strong>Level 1 (Amber Caution):</strong> Monitoring required (no chime, no Master Caution light).",
          "<strong>Advisory / Memo:</strong> Pulsing parameter (advisory) or normal status (green/white memo).",
        ],
      },
    ],
    alert: {
      level: "WARNING",
      text: "Always fly the aircraft first (Golden Rule #1) and stabilize the flight path before initiating any ECAM actions.",
    },
  },
  {
    comment: "SLIDE 9.2: Memory Items, OEBs & Non-Sensed Procedures",
    eyebrow: "APS MCC · A320 · CTA-9",
    title: "9.2 Memory Items, OEBs & Non-Sensed Procedures",
    subtitle: "Abnormal & Emergency · OEB & QRH",
    leftTitle: "MEMORY ITEMS, OEB & QRH",
    rightTitle: "ECAM STATUS & OEB REMINDER",
    image: "/images/mcc/ecam_status_page_p575.png",
    imageAlt: "ECAM STATUS Page and OEB",
    sourceRef: "Source: PROCEDURES APS MCC (p.419–421, 431) · CBT p.636",
    cards: [
      {
        heading: "Order of Precedence",
        bullets: [
          "<strong>1. Memory Items:</strong> Time-critical emergencies (Unreliable Airspeed, Stall Recovery, Windshear, Smoke/Fumes, Emergency Descent, EGPWS, TCAS RA).",
          "<strong>2. OEB (Operations Engineering Bulletin):</strong> Check if an OEB applies; ECAM may show <code>REFER TO QRH/OEB PROC</code>.",
          "<strong>3. ECAM Sensed Procedures vs Non-Sensed QRH:</strong> Failures without ECAM alert (e.g., smoke smell, screen freeze) require direct QRH lookup.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "Applicable OEB procedures always override normal ECAM actions for that failure.",
    },
  },
  {
    comment: "SLIDE 9.3: ECAM Task Sharing & Execution Discipline",
    eyebrow: "APS MCC · A320 · CTA-9",
    title: "9.3 ECAM Task Sharing & Execution Discipline",
    subtitle: "Abnormal & Emergency · ECAM Actions",
    leftTitle: "ECAM ACTIONS FLOW & STOP/CONT",
    rightTitle: "E/WD BLUE ACTION & ECP",
    image: "/images/mcc/ecam_bleed_ovht_action_p595.png",
    imageAlt: "ECAM Blue Action Line and ECP",
    sourceRef: "Source: PROCEDURES APS MCC (p.424–430) · CBT p.595",
    cards: [
      {
        heading: "PF & PM ECAM Discipline",
        bullets: [
          "PF flies, navigates, communicates, and calls <strong>'ECAM ACTIONS'</strong> when flight path is safe.",
          "PM reads E/WD title & blue action lines, confirms with SD/Overhead, and executes.",
          "<strong>STOP ECAM / CONTINUE ECAM:</strong> PF may call <code>'STOP ECAM'</code> at any time (e.g., during takeoff/approach/QRH priority) and <code>'CONTINUE ECAM'</code> when ready.",
          "Clear failure pages with PF confirmation → review Secondary Failures → review <strong>STATUS</strong> → <strong>'ECAM ACTIONS COMPLETE'</strong>.",
        ],
      },
    ],
    alert: {
      level: "CAUTION",
      text: "PF confirmation is MANDATORY before PM operates any guarded switch, Thrust Lever, ENG MASTER, FIRE pb, or IDG disconnect.",
    },
  },
  {
    comment: "SLIDE 9.4: Rejected Takeoff (RTO < 72 kt vs ≥ 72 kt)",
    eyebrow: "APS MCC · A320 · CTA-9",
    title: "9.4 Rejected Takeoff (RTO < 72 kt vs ≥ 72 kt)",
    subtitle: "Abnormal & Emergency · RTO",
    leftTitle: "RTO DECISION & FLOW PATTERN",
    rightTitle: "AUTOBRAKE MAX & BRAKING",
    image: "/images/mcc/ldg_gear_braking_p1241.png",
    imageAlt: "RTO Braking and Deceleration",
    sourceRef: "Source: PROCEDURES APS MCC (p.40, 523–532)",
    cards: [
      {
        heading: "RTO Decision Criteria",
        bullets: [
          "<strong>Below 100 kt:</strong> Captain may reject for any failure or unsafe condition.",
          "<strong>100 kt to V1:</strong> Reject ONLY for Fire, Engine Failure, Sudden Loss of Thrust, or an unsafe flying condition.",
        ],
      },
      {
        heading: "RTO Flow Pattern",
        bullets: [
          "Captain calls <strong>'STOP'</strong>: Thrust Levers <strong>IDLE</strong>, <strong>REV MAX</strong>, Max Braking (verify Autobrake MAX ≥72 kt), Ground Spoilers extend.",
          "PM calls <em>'REVERSERS GREEN'</em>, <em>'DECEL'</em>, notifies ATC; once stopped → Parking Brake ON, assess Evacuation vs ECAM.",
        ],
      },
    ],
    alert: {
      level: "WARNING",
      text: "Never initiate a Rejected Takeoff at or above V1; continue the takeoff and handle the failure airborne.",
    },
  },
  {
    comment: "SLIDE 9.5: Engine Failure After V1 & In Cruise",
    eyebrow: "APS MCC · A320 · CTA-9",
    title: "9.5 Engine Failure After V1 & In Cruise",
    subtitle: "Abnormal & Emergency · Engine Failure",
    leftTitle: "OEI TAKEOFF & CRUISE DRIFTDOWN",
    rightTitle: "THRUST LEVERS & MCT",
    image: "/images/mcc/eng_pedestal_thrust_p1682.png",
    imageAlt: "Thrust Levers and MCT Detent",
    sourceRef: "Source: PROCEDURES APS MCC (p.493–510)",
    cards: [
      {
        heading: "Engine Failure After V1",
        bullets: [
          "Control yaw with rudder (center <strong>blue β-target</strong> on PFD) and trim rudder.",
          "Pitch to follow SRS (V2 to V2+10), retract gear at positive climb, follow EOSID if applicable.",
          "At <strong>ENG OUT ACC ALT</strong>: accelerate to Green Dot, retract flaps, set live lever to <strong>MCT</strong>, then execute ECAM.",
        ],
      },
      {
        heading: "Engine Failure in Cruise",
        bullets: [
          "Set <strong>MCT</strong>, A/THR OFF, select Green Dot speed, execute ECAM, then initiate Driftdown (Standard vs Obstacle strategy) to OEI ceiling.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE 9.6: Smoke / Fumes / Avionics Smoke & Fire",
    eyebrow: "APS MCC · A320 · CTA-9",
    title: "9.6 Smoke / Fumes / Avionics Smoke & Fire",
    subtitle: "Abnormal & Emergency · Smoke & Fire",
    leftTitle: "SMOKE / FUMES / FIRE ACTIONS",
    rightTitle: "OVERHEAD FIRE PANEL",
    image: "/images/mcc/fire_overhead_panel_p1043.png",
    imageAlt: "Fire Protection Overhead Panel",
    sourceRef: "Source: PROCEDURES APS MCC (p.533–539)",
    cards: [
      {
        heading: "Smoke / Fumes / Avionics Smoke",
        bullets: [
          "<strong>Immediate Actions:</strong> Don Oxygen Masks (100% / Emergency if needed) + Smoke Goggles, establish crew communication (Audio/ACP).",
          "Initiate diversion / landing as soon as possible; apply <code>SMOKE/FUMES/AVNCS SMOKE</code> QRH/ECAM procedure.",
          "If smoke persists and becomes the greatest threat: <code>REMOVAL OF SMOKE/FUMES</code> procedure & <code>ELEC EMER CONFIG</code> (per QRH).",
        ],
      },
    ],
    alert: {
      level: "WARNING",
      text: "If SMOKE/FUMES becomes the greatest threat to flight safety, immediately apply the QRH Removal of Smoke/Fumes procedure.",
    },
  },
  {
    comment: "SLIDE 9.7: Emergency Descent & Dual Hydraulic / EMER ELEC",
    eyebrow: "APS MCC · A320 · CTA-9",
    title: "9.7 Emergency Descent & Dual Hydraulic / EMER ELEC",
    subtitle: "Abnormal & Emergency · Major Failures",
    leftTitle: "EMERGENCY DESCENT & MAJOR LOSSES",
    rightTitle: "OXYGEN & DEPRESSURIZATION",
    image: "/images/mcc/oxygen_mask_ecam_p1528.png",
    imageAlt: "Crew Oxygen Masks for Emergency Descent",
    sourceRef: "Source: PROCEDURES APS MCC (p.436, 483–492)",
    cards: [
      {
        heading: "Emergency Descent (Rapid Depressurization)",
        bullets: [
          "<strong>Memory Items:</strong> Crew Oxygen Masks ON, Crew Communications establish, Signs ON, Turn/Pull ALT (10,000 ft / MORA), Pull HDG (turn off airway), Pull SPD (VMO/MMO unless structural damage), Thrust IDLE, Speedbrakes FULL.",
        ],
      },
      {
        heading: "Dual Hydraulic & EMER ELEC Config",
        bullets: [
          "<strong>Dual Hyd:</strong> Reverts to Alternate/Direct Law; gear gravity extension required; plan early stabilized long final.",
          "<strong>EMER ELEC:</strong> RAT/EMER GEN powers essential buses only; shedding of non-essential nav/comm/displays.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE 9.8: Unreliable Airspeed & Stall Recovery",
    eyebrow: "APS MCC · A320 · CTA-9",
    title: "9.8 Unreliable Airspeed & Stall Recovery",
    subtitle: "Abnormal & Emergency · Memory Items",
    leftTitle: "UNRELIABLE SPEED & STALL",
    rightTitle: "STALL & HIGH AOA PROTECTION",
    image: "/images/mcc/fctl_high_aoa_alpha_floor_p928.png",
    imageAlt: "High AOA and Stall Recovery",
    sourceRef: "Source: PROCEDURES APS MCC (p.540–543, 556–562)",
    cards: [
      {
        heading: "Unreliable Airspeed Indication (Memory Items)",
        bullets: [
          "If safe conduct of flight is impacted: <strong>AP OFF</strong>, <strong>A/THR OFF</strong>, <strong>FD OFF</strong>; fly Pitch & Thrust from memory table (e.g., below THR RED: 15°/TOGA; above THR RED <FL100: 10°/CLB; >FL100: 5°/CLB).",
          "Check GPS Ground Speed, cross-check ADRs, apply QRH <code>UNRELIABLE SPEED INDICATION</code>.",
        ],
      },
      {
        heading: "Stall Recovery",
        bullets: [
          "Call <strong>'STALL, I HAVE CONTROL'</strong>: Nose-down pitch control (reduce AOA until stall warning stops), Wings level, Thrust as needed, Speedbrakes retracted, recover smoothly.",
        ],
      },
    ],
    alert: {
      level: "WARNING",
      text: "Respect the stall warning at all times — reduce AOA immediately even if near the ground.",
    },
  },
  {
    comment: "SLIDE 9.9: Windshear (Predictive & Reactive)",
    eyebrow: "APS MCC · A320 · CTA-9",
    title: "9.9 Windshear (Predictive & Reactive)",
    subtitle: "Abnormal & Emergency · Windshear",
    leftTitle: "PREDICTIVE VS REACTIVE WINDSHEAR",
    rightTitle: "PFD WINDSHEAR & SRS",
    image: "/images/mcc/efis_pfd_overview_p675.png",
    imageAlt: "PFD Windshear Recovery",
    sourceRef: "Source: PROCEDURES APS MCC (p.683–694)",
    cards: [
      {
        heading: "Predictive Windshear (PWS)",
        bullets: [
          "Aural <em>'WINDSHEAR AHEAD, WINDSHEAR AHEAD'</em> (amber/red on ND): on takeoff, reject if before V1 or delay takeoff; on approach, execute Go-Around (<em>'GO AROUND WINDSHEAR AHEAD'</em>).",
        ],
      },
      {
        heading: "Reactive Windshear (Memory Items)",
        bullets: [
          "Red <code>WINDSHEAR</code> on PFD + 3x aural <em>'WINDSHEAR'</em>: call <strong>'WINDSHEAR TOGA'</strong>, Thrust Levers <strong>TOGA</strong>, follow SRS pitch (up to full back stick if required), keep AP ON if engaged.",
        ],
      },
    ],
    alert: {
      level: "WARNING",
      text: "Do NOT change aircraft configuration (landing gear or flaps) until clear of windshear.",
    },
  },
  {
    comment: "SLIDE 9.10: TCAS RA & EGPWS Escape Maneuvers",
    eyebrow: "APS MCC · A320 · CTA-9",
    title: "9.10 TCAS RA & EGPWS Escape Maneuvers",
    subtitle: "Abnormal & Emergency · TCAS & EGPWS",
    leftTitle: "TCAS RA & EGPWS PULL UP",
    rightTitle: "TCAS / EGPWS ESCAPE",
    image: "/images/mcc/nav_tcas_egpws_p1351.png",
    imageAlt: "TCAS RA and EGPWS Escape",
    sourceRef: "Source: PROCEDURES APS MCC (p.459–474, 544–555)",
    cards: [
      {
        heading: "TCAS Resolution Advisory (RA)",
        bullets: [
          "Call <strong>'TCAS, I HAVE CONTROL'</strong>: if AP/FD TCAS armed, monitor automatic guidance (<code>TCAS</code> on FMA); if not available, AP OFF, both FDs OFF, smoothly pitch to keep V/S in green band.",
          "Notify ATC: <em>'TCAS RA'</em>; return promptly to cleared FL when <em>'CLEAR OF CONFLICT'</em>.",
        ],
      },
      {
        heading: "EGPWS Terrain Escape ('PULL UP')",
        bullets: [
          "Call <strong>'PULL UP TOGA'</strong>: AP OFF, full aft side stick, Thrust Levers <strong>TOGA</strong>, Speedbrakes retracted, wings level, climb until warning ceases.",
        ],
      },
    ],
    alert: {
      level: "WARNING",
      text: "Stall, EGPWS, and Windshear warnings ALWAYS take priority over TCAS RA maneuvers.",
    },
  },
];

// ============================================================================
// VAAF-1: SWEPT-WING OPS — LIMITATIONS, PLANNING, PERF & HIGH-ALT AERO (10 SLIDES)
// ============================================================================
const VAAF_1_SLIDES: MccSlideSpec[] = [
  {
    comment: "SLIDE 10.1: General Aircraft & Structural Limitations",
    eyebrow: "APS MCC · A320 · VAAF-1",
    title: "10.1 General Aircraft & Structural Limitations",
    subtitle: "FCOM Limitations · General & Envelopes",
    leftTitle: "CERTIFIED ENVELOPES & CROSSWIND",
    rightTitle: "A320 ENVELOPE & DIMENSIONS",
    image: "/images/mcc/ac_gen_dimensions_p151.png",
    imageAlt: "A320 Structural and Environmental Envelope",
    sourceRef: "Source: FCOM Limitations (p.6439–6472)",
    cards: [
      {
        heading: "Flight Envelope & Environmental Limits",
        bullets: [
          "<strong>Operating Envelope:</strong> Certified up to maximum operating altitude per FCOM LIM-AG (typically 39,100–39,800 ft depending on MSN/mod).",
          "<strong>Runway Slope / Altitude:</strong> Refer to AFM/FCOM LIM-AG per MSN; max airport pressure altitude & ISA temperature envelope.",
          "<strong>Crosswind Limits (Wet/Contaminated):</strong> Dry/Wet up to 3 mm water/slush/snow (RWYCC 5 GOOD): <strong>35 kt</strong> Takeoff / <strong>38 kt</strong> Landing (gusts included); decreases progressively with lower RWYCC.",
        ],
      },
    ],
    alert: {
      level: "CAUTION",
      text: "Strict adherence to FCOM Limitations (LIM-AG through LIM-SURV) is mandatory; MSN-specific values always govern.",
    },
  },
  {
    comment: "SLIDE 10.2: Speed, Mach & Configuration Limitations",
    eyebrow: "APS MCC · A320 · VAAF-1",
    title: "10.2 Speed, Mach & Configuration Limitations",
    subtitle: "FCOM Limitations · Speeds",
    leftTitle: "VMO/MMO & GEAR SPEEDS",
    rightTitle: "PFD SPEED LIMITATIONS",
    image: "/images/mcc/efis_pfd_speeds_p690.png",
    imageAlt: "PFD Speed Limits and Barber Pole",
    sourceRef: "Source: FCOM Limitations (p.6439–6472, 6547–6576)",
    cards: [
      {
        heading: "Maximum Operating Speeds",
        bullets: [
          "<strong>VMO / MMO:</strong> <strong>350 kt</strong> / <strong>M 0.82</strong>.",
          "<strong>Landing Gear Extended (VLE):</strong> <strong>280 kt / M 0.67</strong>.",
          "<strong>Landing Gear Extension (VLO ext):</strong> <strong>250 kt / M 0.60</strong>.",
          "<strong>Landing Gear Retraction (VLO ret):</strong> <strong>220 kt / M 0.54</strong>.",
          "<strong>Wipers / Cockpit Window / Tire Speed:</strong> Respect FCOM LIM-AG max wiper speed (230 kt) and max ground tire speed.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE 10.3: Power Plant, APU, Fuel & Pressurization Limits",
    eyebrow: "APS MCC · A320 · VAAF-1",
    title: "10.3 Power Plant, APU, Fuel & Pressurization Limits",
    subtitle: "FCOM Limitations · Systems",
    leftTitle: "SYSTEMS LIMITATIONS SUMMARY",
    rightTitle: "CABIN PRESSURIZATION LIMITS",
    image: "/images/mcc/press_ecam_cab_press_p101.png",
    imageAlt: "ECAM CAB PRESS Limits",
    sourceRef: "Source: FCOM Limitations (p.6473–6564)",
    cards: [
      {
        heading: "Key System Limits (FCOM LIM)",
        bullets: [
          "<strong>Pressurization:</strong> Positive max ΔP, negative max ΔP, and max cabin altitude warning thresholds per LIM-AIR.",
          "<strong>Auto Flight (LIM-AFS):</strong> Minimum height for AP engagement after takeoff (100 ft AGL / 5s), minimum use heights for non-precision vs CAT I/II/III approaches.",
          "<strong>Engines & APU (LIM-ENG / LIM-APU):</strong> EGT limits (TOGA 5/10 min, MCT, Start), starter duty cycles, APU start/bleed altitude envelope.",
          "<strong>Fuel (LIM-FUEL):</strong> Minimum fuel for takeoff, fuel temperature limits (JET A / JET A-1), and wing tank imbalance limits.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE 10.4: Takeoff Performance & Runway Contamination",
    eyebrow: "APS MCC · A320 · VAAF-1",
    title: "10.4 Takeoff Performance & Runway Contamination",
    subtitle: "Performance Manual · Sections 2 & 6",
    leftTitle: "TAKEOFF PERF & CONTAMINATION",
    rightTitle: "TAKEOFF SPEED & FLEX",
    image: "/images/mcc/efis_pfd_speeds_p690.png",
    imageAlt: "Takeoff Performance V1 VR V2",
    sourceRef: "Source: Performance Manual Sec 2 (p.21–46) & Sec 6 (p.93–96)",
    cards: [
      {
        heading: "Takeoff Distance & Thrust Concepts",
        bullets: [
          "Declared distances: <strong>TORA</strong>, <strong>TODA</strong>, <strong>ASDA</strong>, Stopway & Clearway.",
          "<strong>FLEX Takeoff:</strong> Reduced takeoff thrust (within FCOM limits) when actual TOW is below performance-limited TOW; NOT permitted on contaminated runways.",
          "<strong>Contaminated Runway (Sec 6):</strong> Standing water, slush, wet/dry/compacted snow, or ice (>3 mm / >25% coverage) requires TOGA thrust and contaminated perf calculations.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE 10.5: Engine Failure Takeoff Ops (EOSID / EFADP)",
    eyebrow: "APS MCC · A320 · VAAF-1",
    title: "10.5 Engine Failure Takeoff Ops (EOSID / EFADP)",
    subtitle: "Performance Manual · Section 3",
    leftTitle: "EOSID, EFADP & OEI OBSTACLES",
    rightTitle: "CFM56-5B OEI PERFORMANCE",
    image: "/images/mcc/eng_cfm_cutaway_p1673.png",
    imageAlt: "Engine Failure Takeoff Performance",
    sourceRef: "Source: Performance Manual Sec 3 (p.47–56)",
    cards: [
      {
        heading: "Engine Failure After V1 Obstacle Clearance",
        bullets: [
          "<strong>Net Flight Path:</strong> Must clear all obstacles by required vertical/lateral margins across Segments 1, 2, 3, and 4.",
          "<strong>EOSID (Engine Out Standard Instrument Departure):</strong> Published company/airport lateral/vertical escape route when SID climb gradient cannot be met with OEI.",
          "<strong>EFADP (Engine Failure Acceleration & Diversion Procedure):</strong> Specific turn/acceleration altitudes briefed before takeoff and loaded in SEC F-PLN.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE 10.6: Cruise, Landing Performance & LVO",
    eyebrow: "APS MCC · A320 · VAAF-1",
    title: "10.6 Cruise, Landing Performance & LVO",
    subtitle: "Performance Manual · Sec 4, 5 & 7",
    leftTitle: "IN-FLIGHT, LANDING & LVO",
    rightTitle: "LANDING & BRAKE PERFORMANCE",
    image: "/images/mcc/ldg_ecam_wheel_panel_p1235.png",
    imageAlt: "Landing Performance and Wheel Page",
    sourceRef: "Source: Performance Manual Sec 4, 5 & 7 (p.57–102)",
    cards: [
      {
        heading: "In-Flight & Landing Performance",
        bullets: [
          "<strong>Cruise (Sec 4):</strong> Cost Index, Optimum/Max altitude, Driftdown, and Fuel planning.",
          "<strong>Landing (Sec 5):</strong> Dispatch Required Landing Distance (RLD factored) vs In-Flight Landing Distance (ALD/factored for abnormal/contaminated conditions), Approach & Missed Approach climb gradients.",
          "<strong>LVO (Sec 7):</strong> CAT II / CAT III Low Visibility Operations requirements, RVR minima, and aircraft/crew status.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE 10.7: IFR Charts & Computerized Flight Plan (CFP)",
    eyebrow: "APS MCC · A320 · VAAF-1",
    title: "10.7 IFR Charts & Computerized Flight Plan (CFP)",
    subtitle: "PROCEDURES · Charts & CFP",
    leftTitle: "IFR CHARTS & CFP ANALYSIS",
    rightTitle: "ND ROUTE CROSS-CHECK",
    image: "/images/mcc/efis_nd_modes_p644.png",
    imageAlt: "IFR Route and ND Cross-Check",
    sourceRef: "Source: PROCEDURES APS MCC — IFR Charts (p.41–115) & CFP (p.116–135)",
    cards: [
      {
        heading: "Computerized Flight Plan (CFP) Key Blocks",
        bullets: [
          "Flight ID, Aircraft/Reg, Route, Cruise FL, Wind/Temp profile, Fuel breakdown (Trip, Contingency, Alternate, Final Reserve, Extra), Weights (ZFW/TOW/LW).",
        ],
      },
      {
        heading: "IFR Charts Verification",
        bullets: [
          "Verify chart validity, MSA, SID/STAR/Approach constraints, Transition Altitude/Level, DA(H)/MDA(H), Missed Approach, and Airport Taxi hotspots.",
        ],
      },
    ],
  },
  {
    comment: "SLIDE 10.8: Special Operations: RVSM, PBN/RNP & Narrow Runways",
    eyebrow: "APS MCC · A320 · VAAF-1",
    title: "10.8 Special Operations: RVSM, PBN/RNP & Narrow Runways",
    subtitle: "FCOM Special Operations · PRO-SPO",
    leftTitle: "RVSM, PBN/RNP & NARROW RWY",
    rightTitle: "ADIRS & NAVIGATION PRECISION",
    image: "/images/mcc/nav_adirs_overview_p1324.png",
    imageAlt: "ADIRS and Special Operations Precision",
    sourceRef: "Source: FCOM Special Operations (p.6373–6426)",
    cards: [
      {
        heading: "FCOM Special Operations (PRO-SPO)",
        bullets: [
          "<strong>RVSM (PRO-SPO-50):</strong> FL290–FL410; requires 2 primary altimetry systems, 1 AP, 1 altitude alert, 1 transponder; cross-check tolerances on ground & in flight.",
          "<strong>PBN / RNP APCH (PRO-SPO-51):</strong> Required equipment before RNP/RNAV(GNSS) approach (GPS PRIMARY / EPE check, dual FMGC/F-PLN).",
          "<strong>Narrow Runways (PRO-SPO-60):</strong> Operations on runways < 45 m wide (crosswind/autoland restrictions).",
        ],
      },
    ],
  },
  {
    comment: "SLIDE 10.9: High-Altitude Envelope & 0.3g Buffet Margin",
    eyebrow: "APS MCC · A320 · VAAF-1",
    title: "10.9 High-Altitude Envelope & 0.3g Buffet Margin",
    subtitle: "UPRT Aerodynamics · High Altitude",
    leftTitle: "REC MAX ALT & HIGH-ALT MARGINS",
    rightTitle: "FLIGHT ENVELOPE MARGINS",
    image: "/images/mcc/fctl_normal_law_prot_p916.png",
    imageAlt: "Flight Envelope and Buffet Margins",
    sourceRef: "Source: PROCEDURES APS MCC — UPRT Aerodynamics (p.590–592)",
    cards: [
      {
        heading: "Recommended Maximum Altitude (MCDU PROG)",
        bullets: [
          "Continuously updated in flight based on <strong>current Gross Weight</strong> and <strong>Outside Air Temperature (OAT)</strong>.",
          "Provides a <strong>0.3 g buffet margin</strong>, minimum rate of climb at MAX CL thrust, and level flight at MAX CRZ thrust.",
        ],
      },
      {
        heading: "High-Altitude Operational Threats",
        bullets: [
          "At max altitude, margins for Thrust, Airspeed, Buffet threshold, AOA, and Bank angle are at their minimum — turbulence, icing, or OAT rise can rapidly trigger slowdown and buffet onset.",
        ],
      },
    ],
    alert: {
      level: "NOTE",
      text: "Monitor any increase in OAT during flight at maximum altitude as aircraft performance and buffet margins are directly impacted.",
    },
  },
  {
    comment: "SLIDE 10.10: Power-Drag Curve, Backside Regime & VA",
    eyebrow: "APS MCC · A320 · VAAF-1",
    title: "10.10 Power-Drag Curve, Backside Regime & VA",
    subtitle: "UPRT Aerodynamics · Speed Stability",
    leftTitle: "POWER-DRAG CURVE & VA",
    rightTitle: "HIGH AOA & SPEED STABILITY",
    image: "/images/mcc/fctl_high_aoa_alpha_floor_p928.png",
    imageAlt: "Power-Drag Curve and High AOA",
    sourceRef: "Source: PROCEDURES APS MCC — UPRT Aerodynamics (p.593–604)",
    cards: [
      {
        heading: "Front Side vs Backside of Power-Drag Curve",
        bullets: [
          "<strong>Front Side (1st Regime — above Green Dot):</strong> Airspeed stable; sudden speed decrease lowers drag, helping return to initial speed.",
          "<strong>Backside (2nd Regime — below Green Dot):</strong> Airspeed unstable; speed decrease increases drag, pushing aircraft to decelerate further unless thrust/pitch corrected.",
        ],
      },
      {
        heading: "Maximum Design Maneuvering Speed (VA)",
        bullets: [
          "Speed above which a single full deflection of any control surface must not be attempted (applies in Alternate/Direct Law).",
        ],
      },
    ],
    alert: {
      level: "CAUTION",
      text: "Rapid and large control reversals (pitch, roll, or yaw) may cause structural failure at ANY speed, even below VA.",
    },
  },
];

export const MCC_LESSON_6 = {
  id: "a3200000-0000-0000-0000-000000000006",
  course_id: MCC_COURSE_ID,
  title: "6. Flight Management System — FMGS / MCDU (CTA-6)",
  slug: "cta-6-fmgs-mcdu-operations",
  sequence_order: 6,
  lesson_order: 6,
  min_seconds: 1,
  content_html: joinSlides(CTA_6_SLIDES),
};

export const MCC_LESSON_7 = {
  id: "a3200000-0000-0000-0000-000000000007",
  course_id: MCC_COURSE_ID,
  title: "7. Normal Procedures, Flow Patterns & Flight Phases (CTA-7)",
  slug: "cta-7-normal-procedures-flight-phases",
  sequence_order: 7,
  lesson_order: 7,
  min_seconds: 1,
  content_html: joinSlides(CTA_7_SLIDES),
};

export const MCC_LESSON_8 = {
  id: "a3200000-0000-0000-0000-000000000008",
  course_id: MCC_COURSE_ID,
  title: "8. PF/PM Task Sharing, Standard & FCU Callouts, Checklists & Briefings (CTA-8)",
  slug: "cta-8-task-sharing-callouts-checklists-briefings",
  sequence_order: 8,
  lesson_order: 8,
  min_seconds: 1,
  content_html: joinSlides(CTA_8_SLIDES),
};

export const MCC_LESSON_9 = {
  id: "a3200000-0000-0000-0000-000000000009",
  course_id: MCC_COURSE_ID,
  title: "9. Abnormal & Emergency Procedures — ECAM, OEB & Memory Items (CTA-9)",
  slug: "cta-9-abnormal-emergency-procedures",
  sequence_order: 9,
  lesson_order: 9,
  min_seconds: 1,
  content_html: joinSlides(CTA_9_SLIDES),
};

export const MCC_LESSON_10 = {
  id: "a3200000-0000-0000-0000-000000000010",
  course_id: MCC_COURSE_ID,
  title: "10. Swept-Wing Ops: Limitations, Planning, Performance & High-Alt Aero (VAAF-1)",
  slug: "vaaf-1-limitations-planning-performance-aero",
  sequence_order: 10,
  lesson_order: 10,
  min_seconds: 1,
  content_html: joinSlides(VAAF_1_SLIDES),
};

/** Lecciones de la estructura anterior (CTA-1…9, VAAF-1). Se retiran al publicar la nueva estructura. */
export const MCC_LEGACY_LESSONS = [
  MCC_LESSON_1,
  MCC_LESSON_2,
  MCC_LESSON_3,
  MCC_LESSON_4,
  MCC_LESSON_5,
  MCC_LESSON_6,
  MCC_LESSON_7,
  MCC_LESSON_8,
  MCC_LESSON_9,
  MCC_LESSON_10,
];

/** Bloque de sistemas (SIS-01…06), sustituye a CTA-1…6 con figuras y texto literal del FCOM. */
export const MCC_SIS_LESSONS: MccLesson[] = [MCC_SIS_01, MCC_SIS_02, MCC_SIS_03, MCC_SIS_04, MCC_SIS_05, MCC_SIS_06];

/** Bloque VAAF teórico (limitaciones, performance, planificación y UPRT). */
export const MCC_VAAF_LESSONS: MccLesson[] = [MCC_VAAF_T1, MCC_VAAF_T2];

/** Nueva estructura basada en el PDP Jan 2024 (docs/mcc/08_ARQUITECTURA_PDP.md); al final, el bloque SIS. */
/** Módulo de introducción (FCTM, filosofía Airbus): va antes de las SOP. */
export const MCC_INT_LESSONS: MccLesson[] = [MCC_INT_01, MCC_INT_02, MCC_INT_03];

export const MCC_PDP_LESSONS: MccLesson[] = [...MCC_INT_LESSONS, MCC_SOP_01, MCC_SOP_02, MCC_SOP_03, MCC_SOP_04, MCC_SOP_05, MCC_SOP_06, MCC_SOP_07, MCC_SOP_08, MCC_SOP_09, MCC_SOP_10, MCC_SOP_11, MCC_SOP_12, MCC_SOP_13, MCC_SOP_14, ...MCC_SIS_LESSONS, ...MCC_VAAF_LESSONS];

/** Mientras conviven ambas estructuras, las lecciones antiguas se ordenan detrás (secuencia +100). */
const LEGACY_SEQUENCE_OFFSET = 100;

export const MCC_LESSONS: MccLesson[] = [
  ...MCC_PDP_LESSONS,
  ...MCC_LEGACY_LESSONS.map((lesson) => ({
    ...lesson,
    sequence_order: lesson.sequence_order + LEGACY_SEQUENCE_OFFSET,
    lesson_order: lesson.lesson_order + LEGACY_SEQUENCE_OFFSET,
    module_title: MCC_MODULES.LEGACY,
  })),
];
