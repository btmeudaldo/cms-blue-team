import Link from "next/link";
import { redirect } from "next/navigation";

import { createSupabaseServerClient } from "@/shared/lib/supabase/server";

export default async function CoursesPage() {
  const supabase = await createSupabaseServerClient();
  const { data } = await supabase.auth.getUser();
  if (!data.user) redirect("/login");

  const { data: profile } = await supabase.from("profiles").select("role").eq("id", data.user.id).single();
  const role = profile?.role ?? "student";
  return <main className="min-h-screen bg-slate-50"><header className="border-b bg-slate-900 text-white"><div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"><Link href="/" className="font-semibold">CMS Formación</Link><nav className="flex gap-4 text-sm"><Link href="/courses">Mis cursos</Link>{role === "admin" && <Link href="/admin">Administración</Link>}</nav></div></header><section className="mx-auto max-w-6xl px-6 py-10"><p className="text-sm text-slate-500">{data.user.email} · <strong>{role}</strong></p><h1 className="mt-2 text-3xl font-bold">Mi aprendizaje</h1>{role === "admin" && <div className="mt-6 rounded-lg border border-blue-200 bg-blue-50 p-5"><h2 className="font-semibold">Panel de administrador</h2><p className="mt-1">Crea cursos, gestiona contenidos y asigna alumnos.</p><Link className="mt-3 inline-block rounded bg-slate-900 px-4 py-2 text-white" href="/admin">Abrir administración</Link></div>}<div className="mt-8 rounded-lg border bg-white p-6"><h2 className="text-xl font-semibold">Cursos asignados</h2><p className="mt-2 text-slate-600">Aún no tienes cursos asignados. Desde Administración podrás crear cursos y después matricular alumnos.</p></div></section></main>;
}
