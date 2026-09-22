"use server";

import { revalidatePath } from "next/cache";
import { requireVerifiedSession } from "@/shared/lib/supabase/session";
import { parseIncident, type IncidentInput } from "@/features/audit/domain/audit-input";

export async function reportAcademicIncidentAction(input: IncidentInput): Promise<{ success: true; eventId: number } | { error: string }> {
  try {
    const { client, profile } = await requireVerifiedSession();
    if (profile.role !== "admin" && profile.role !== "instructor") return { error: "No tienes permisos para registrar incidencias." };
    const incident = parseIncident(input);
    const { data, error } = await client.rpc("report_academic_incident", { p_course_id: incident.courseId, p_category: incident.category, p_description: incident.description, p_request_id: incident.requestId });
    if (error || !Number.isSafeInteger(data) || data <= 0) return { error: "No se pudo confirmar la incidencia. Reintenta el envío para comprobar su registro." };
    revalidatePath("/admin/audit");
    return { success: true, eventId: data };
  } catch {
    return { error: "No se pudo registrar la incidencia. Revisa los datos, tus permisos y la conexión." };
  }
}
