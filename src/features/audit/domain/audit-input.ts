export const auditEntityTypes = ["courses", "lessons", "course_enrollments", "course_editors", "profiles", "quizzes", "attempt_snapshots", "quiz_attempts", "user_lesson_progress", "incidents"] as const;
export type AuditEntityType = typeof auditEntityTypes[number];
export type AuditFilters = { before?: number; entityType?: AuditEntityType; courseId?: string };
export const incidentCategories = ["technical", "assessment", "integrity", "other"] as const;
export type IncidentInput = { courseId: string; requestId: string; category: string; description: string };
const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export function parseAuditFilters(raw: Record<string, string | string[] | undefined>): AuditFilters {
  if ([raw.before, raw.entity_type, raw.course_id].some(Array.isArray)) throw new Error("Los filtros deben tener un único valor.");
  const before = raw.before ? Number(raw.before) : undefined;
  if (before !== undefined && (!/^\d+$/.test(String(raw.before)) || !Number.isSafeInteger(before) || before <= 0)) throw new Error("El cursor de página no es válido.");
  const entityType = raw.entity_type || undefined;
  if (entityType && !auditEntityTypes.includes(entityType as AuditEntityType)) throw new Error("El tipo de registro no es válido.");
  const courseId = raw.course_id || undefined;
  if (courseId && !uuidPattern.test(String(courseId))) throw new Error("Introduce un UUID de curso válido.");
  return { before, entityType: entityType as AuditEntityType | undefined, courseId: courseId as string | undefined };
}

export function parseIncident(input: IncidentInput): IncidentInput {
  if (!uuidPattern.test(input.courseId) || !uuidPattern.test(input.requestId)) throw new Error("El curso o identificador de solicitud no es válido.");
  if (!incidentCategories.includes(input.category as typeof incidentCategories[number])) throw new Error("La categoría no es válida.");
  if (typeof input.description !== "string") throw new Error("Introduce una descripción.");
  const description = input.description.trim();
  if (!description || description.length > 2000) throw new Error("La descripción debe tener entre 1 y 2000 caracteres.");
  return { courseId: input.courseId, requestId: input.requestId, category: input.category, description };
}
