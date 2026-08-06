import Link from "next/link";
import { notFound } from "next/navigation";
import { updateCourseAction } from "@/app/actions/course.actions";
import { createSupabaseServerClient } from "@/shared/lib/supabase/server";

export default async function EditCoursePage({ params }: { params: Promise<{ courseId: string }> }) {
  const { courseId } = await params;
  const supabase = await createSupabaseServerClient();
  const { data: course } = await supabase.from("courses").select("id,title,slug,description").eq("id", courseId).single();
  if (!course) notFound();
  const update = updateCourseAction.bind(null, course.id);
  return <main className="mx-auto max-w-4xl px-6 py-12"><h1>Editar curso</h1><form action={update} className="my-6 flex max-w-lg flex-col gap-3"><input name="title" defaultValue={course.title} required className="border p-2" /><input name="slug" defaultValue={course.slug} required className="border p-2" /><textarea name="description" defaultValue={course.description} className="border p-2" /><button className="rounded bg-slate-900 px-4 py-2 text-white">Guardar cambios</button></form><Link href="/admin/courses">Volver a cursos</Link></main>;
}
