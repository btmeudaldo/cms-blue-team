import Link from "next/link";
import { createCourseAction } from "@/app/actions/course.actions";
import { createSupabaseServerClient } from "@/shared/lib/supabase/server";

export default async function AdminCoursesPage() {
  const supabase = await createSupabaseServerClient();
  const { data: courses } = await supabase.from("courses").select("id,title,slug,description").order("created_at", { ascending: false });
  return <main className="mx-auto max-w-4xl px-6 py-12"><h1>Gestionar cursos</h1><form action={createCourseAction} className="my-6 flex max-w-lg flex-col gap-3"><input name="title" placeholder="Título" required className="border p-2" /><input name="slug" placeholder="slug-del-curso" required className="border p-2" /><textarea name="description" placeholder="Descripción" className="border p-2" /><button className="rounded bg-slate-900 px-4 py-2 text-white">Crear curso</button></form><h2>Curso existentes</h2><ul className="my-4 flex flex-col gap-2">{courses?.map((course) => <li key={course.id}><Link className="underline" href={`/admin/courses/${course.id}`}><strong>{course.title}</strong> — {course.slug}</Link></li>)}</ul><Link href="/admin">Volver a administración</Link></main>;
}
