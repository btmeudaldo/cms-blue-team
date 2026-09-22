import type { AuditEvent } from "../domain/audit-event";

export function AuditEventList({ events }: { events: AuditEvent[] }) {
  if (!events.length) return <p>No hay registros para estos filtros.</p>;
  return <div className="space-y-4">{events.map((event) => <article key={event.id} className="min-w-0 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 space-y-3">
    <div className="flex flex-wrap justify-between gap-2"><h2 className="font-bold break-all">#{event.id} · {event.operation} · {event.entity_type}</h2><time dateTime={event.occurred_at} className="text-sm text-slate-500">{new Date(event.occurred_at).toISOString().replace("T", " ").replace("Z", " UTC")}</time></div>
    <dl className="grid gap-3 text-sm sm:grid-cols-2 break-all">
      <div><dt className="font-semibold">Actor</dt><dd>{event.actor_id ?? "Sin identidad de usuario"} · {event.actor_role ?? "Sin rol"}</dd></div>
      <div><dt className="font-semibold">Origen</dt><dd>{event.origin}</dd></div>
      <div><dt className="font-semibold">Entidad</dt><dd>{event.entity_id}</dd></div>
      <div><dt className="font-semibold">Curso</dt><dd>{event.course_id ?? "No asociado"}</dd></div>
      <div><dt className="font-semibold">Usuario afectado</dt><dd>{event.subject_id ?? "No asociado"}</dd></div>
      <div><dt className="font-semibold">Transacción</dt><dd>{event.transaction_id}</dd></div>
    </dl>
    <details><summary className="cursor-pointer font-medium text-sm">Ver datos antes y después</summary><div className="grid gap-3 mt-3 sm:grid-cols-2">{[["Antes", event.before_data], ["Después", event.after_data]].map(([label, data]) => <div key={String(label)} className="min-w-0"><h3 className="text-sm font-semibold">{String(label)}</h3><pre className="whitespace-pre-wrap break-all rounded-lg bg-slate-100 dark:bg-slate-950 p-3 text-xs">{data == null ? "Sin datos" : JSON.stringify(data, null, 2)}</pre></div>)}</div></details>
  </article>)}</div>;
}
