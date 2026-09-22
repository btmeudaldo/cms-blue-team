"use client";

import { useActionState, useState } from "react";
import { reportAcademicIncidentAction } from "@/app/actions/audit.actions";

export function IncidentForm({ courses, initialRequestId }: { courses: { id: string; title: string }[]; initialRequestId: string }) {
  const [requestId, setRequestId] = useState(initialRequestId);
  const [courseId, setCourseId] = useState(courses[0]?.id ?? "");
  const [category, setCategory] = useState("technical");
  const [description, setDescription] = useState("");
  const [result, action, pending] = useActionState(async () => {
    try {
      const response = await reportAcademicIncidentAction({ requestId, courseId, category, description });
      if ("success" in response) { setRequestId(crypto.randomUUID()); setDescription(""); }
      return response;
    } catch { return { error: "No se recibió confirmación. Reintenta el envío para comprobar su registro." }; }
  }, null);
  const field = "w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2 text-sm";
  return <section className="rounded-2xl border border-slate-200 dark:border-slate-800 p-5 space-y-4 bg-white dark:bg-slate-900">
    <h2 className="text-lg font-bold">Registrar incidencia</h2>
    <p className="text-sm text-slate-500">Describe el hecho sin incluir contraseñas, credenciales ni información personal innecesaria.</p>
    <form action={action} className="space-y-4">
      <fieldset disabled={pending || courses.length === 0} className="space-y-4 disabled:opacity-60">
        <div className="grid gap-4 sm:grid-cols-2">
          <div><label htmlFor="incident-course" className="block text-sm font-medium mb-1">Curso de la incidencia</label><select id="incident-course" value={courseId} onChange={(event) => setCourseId(event.target.value)} className={field} required>{courses.map((course) => <option key={course.id} value={course.id}>{course.title}</option>)}</select></div>
          <div><label htmlFor="incident-category" className="block text-sm font-medium mb-1">Categoría</label><select id="incident-category" value={category} onChange={(event) => setCategory(event.target.value)} className={field}><option value="technical">Técnica</option><option value="assessment">Evaluación</option><option value="integrity">Integridad académica</option><option value="other">Otra</option></select></div>
        </div>
        <div><label htmlFor="incident-description" className="block text-sm font-medium mb-1">Descripción</label><textarea id="incident-description" value={description} onChange={(event) => setDescription(event.target.value)} maxLength={2000} required rows={4} className={field} /></div>
        <button type="submit" className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white">{pending ? "Registrando..." : "Registrar incidencia"}</button>
      </fieldset>
      {courses.length === 0 && <p className="text-sm">No hay cursos disponibles para registrar incidencias.</p>}
      {result && "error" in result && <p role="alert" className="text-sm text-red-700 dark:text-red-300">{result.error}</p>}
      {result && "success" in result && <p role="status" className="text-sm text-emerald-700 dark:text-emerald-300">Incidencia registrada. Referencia: {result.eventId}</p>}
    </form>
  </section>;
}
