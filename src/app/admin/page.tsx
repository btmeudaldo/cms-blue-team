import Link from "next/link";
import { redirect } from "next/navigation";

import { createSupabaseServerClient } from "@/shared/lib/supabase/server";

export default async function AdminPage() {
  const supabase = await createSupabaseServerClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) redirect("/login");
  const { data: profile } = await supabase.from("profiles").select("role").eq("id", auth.user.id).single();
  if (profile?.role !== "admin") redirect("/courses");

  return <main className="mx-auto max-w-4xl px-6 py-12"><h1>Administración</h1><p>Sesión administradora: {auth.user.email}</p><nav className="mt-6 flex gap-4"><Link href="/admin/courses">Gestionar cursos</Link><Link href="/admin/users">Gestionar alumnos</Link><Link href="/courses">Vista de alumno</Link></nav></main>;
}
