import type { CourseDocumentationItem } from "@/features/learning/content/c172-course-data";
import type { MccLesson } from "./mcc/slide-builder.ts";
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
import { MCC_VAAF_T3 } from "./mcc/vaaf-t3.ts";
import { MCC_VAAF_T4 } from "./mcc/vaaf-t4.ts";
import { MCC_VAAF_T5 } from "./mcc/vaaf-t5.ts";

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

/** Bloque de introducción (FCTM, filosofía Airbus): va antes de las SOP. */
export const MCC_INT_LESSONS: MccLesson[] = [MCC_INT_01, MCC_INT_02, MCC_INT_03];

/** Bloque de sistemas (SIS-01…06), basado en figuras y texto literal del FCOM. */
export const MCC_SIS_LESSONS: MccLesson[] = [
  MCC_SIS_01,
  MCC_SIS_02,
  MCC_SIS_03,
  MCC_SIS_04,
  MCC_SIS_05,
  MCC_SIS_06,
];

/** Bloque VAAF teórico (limitaciones, performance, planificación y UPRT). */
export const MCC_VAAF_LESSONS: MccLesson[] = [
  MCC_VAAF_T1,
  MCC_VAAF_T2,
  MCC_VAAF_T3,
  MCC_VAAF_T4,
  MCC_VAAF_T5,
];

/** Estructura vigente basada en el PDP Jan 2024, FCTM, FCOM y Performance Manual. */
export const MCC_PDP_LESSONS: MccLesson[] = [
  ...MCC_INT_LESSONS,
  MCC_SOP_01,
  MCC_SOP_02,
  MCC_SOP_03,
  MCC_SOP_04,
  MCC_SOP_05,
  MCC_SOP_06,
  MCC_SOP_07,
  MCC_SOP_08,
  MCC_SOP_09,
  MCC_SOP_10,
  MCC_SOP_11,
  MCC_SOP_12,
  MCC_SOP_13,
  MCC_SOP_14,
  ...MCC_SIS_LESSONS,
  ...MCC_VAAF_LESSONS,
];

export const MCC_LESSONS: MccLesson[] = [...MCC_PDP_LESSONS];
