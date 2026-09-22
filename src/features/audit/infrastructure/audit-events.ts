import { requireVerifiedSession } from "@/shared/lib/supabase/session";
import type { AuditFilters } from "../domain/audit-input";
import type { AuditEvent } from "../domain/audit-event";

export async function readAuditEvents(filters: AuditFilters) {
  const { client, profile } = await requireVerifiedSession();
  if (profile.role !== "admin") throw new Error("Forbidden");
  let query = client.from("academic_audit_events").select("id, occurred_at, transaction_id, actor_id, actor_role, origin, entity_type, operation, entity_id, course_id, subject_id, before_data, after_data, request_id").order("id", { ascending: false });
  if (filters.before) query = query.lt("id", filters.before);
  if (filters.entityType) query = query.eq("entity_type", filters.entityType);
  if (filters.courseId) query = query.eq("course_id", filters.courseId);
  const { data, error } = await query.limit(51);
  if (error || !data) throw new Error("No se pudo cargar el historial académico. Inténtalo de nuevo.");
  const events = data.slice(0, 50) as AuditEvent[];
  return { events, nextBefore: data.length > 50 ? events[49].id : null };
}

export async function readIncidentCourses(): Promise<{ id: string; title: string }[]> {
  const { client, profile } = await requireVerifiedSession();
  if (profile.role !== "admin") throw new Error("Forbidden");
  const { data, error } = await client.from("courses").select("id, title").order("title");
  if (error || !data) throw new Error("No se pudieron cargar los cursos para registrar incidencias.");
  return data;
}
