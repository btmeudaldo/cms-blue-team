import Link from "next/link";
import { redirect } from "next/navigation";
import { Header } from "@/shared/components/header";
import { AuthenticationRequiredError, requireVerifiedSession } from "@/shared/lib/supabase/session";
import { auditEntityTypes, parseAuditFilters } from "@/features/audit/domain/audit-input";
import { readAuditEvents, readIncidentCourses } from "@/features/audit/infrastructure/audit-events";
import { AuditEventList } from "@/features/audit/components/audit-event-list";
import { IncidentForm } from "@/features/audit/components/incident-form";

export default async function AuditPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  let session;
  try { session = await requireVerifiedSession(); } catch (error) { if (error instanceof AuthenticationRequiredError) redirect("/login"); throw error; }
  if (session.profile.role !== "admin") redirect("/courses");
  const raw = await searchParams;
  let history;
  let historyError: string | null = null;
  let courses: { id: string; title: string }[] = [];
  let courseError: string | null = null;
  const pagination = new URLSearchParams();
  try {
    const filters = parseAuditFilters(raw);
    history = await readAuditEvents(filters);
    if (filters.entityType) pagination.set("entity_type", filters.entityType);
    if (filters.courseId) pagination.set("course_id", filters.courseId);
    if (history.nextBefore) pagination.set("before", String(history.nextBefore));
  } catch (error) { historyError = error instanceof Error ? error.message : "No se pudo cargar el historial académico."; }
  try { courses = await readIncidentCourses(); } catch { courseError = "No se pudieron cargar los cursos para registrar incidencias."; }
  const field = "rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 p-2 text-sm w-full";
  return <div className="min-h-screen bg-slate-50 dark:bg-[#0b1120] text-slate-900 dark:text-slate-100">
    <Header userEmail={session.user.email} userName={session.profile.full_name} role={session.profile.role} />
    <main className="mx-auto max-w-6xl p-4 sm:p-8 space-y-6">
      <Link href="/admin" className="text-sm text-blue-600">← Administración</Link>
      <div><h1 className="text-2xl font-bold">Historial académico</h1><p className="mt-2 text-sm text-slate-500">Registra cambios e incidencias desde la activación de la auditoría. No reconstruye acontecimientos anteriores. Fechas en UTC.</p></div>
      <form method="get" className="grid gap-3 sm:grid-cols-[1fr_2fr_auto] items-end">
        <div><label htmlFor="audit-type" className="block text-sm font-medium mb-1">Tipo de registro</label><select id="audit-type" name="entity_type" defaultValue={typeof raw.entity_type === "string" ? raw.entity_type : ""} className={field}><option value="">Todos</option>{auditEntityTypes.map((type) => <option key={type} value={type}>{type}</option>)}</select></div>
        <div><label htmlFor="audit-course" className="block text-sm font-medium mb-1">Curso (UUID)</label><input id="audit-course" name="course_id" defaultValue={typeof raw.course_id === "string" ? raw.course_id : ""} placeholder="Identificador del curso" className={field} /></div>
        <button className="rounded-lg bg-blue-600 px-4 py-2 text-white text-sm">Filtrar</button>
      </form>
      {historyError ? <p role="alert" className="text-red-700 dark:text-red-300">{historyError}</p> : history && <><AuditEventList events={history.events} />{history.nextBefore && <Link href={`/admin/audit?${pagination}`} className="inline-block text-blue-600 font-medium">Registros anteriores →</Link>}</>}
      {courseError ? <p role="alert">{courseError}</p> : <IncidentForm courses={courses} initialRequestId={crypto.randomUUID()} />}
    </main>
  </div>;
}
