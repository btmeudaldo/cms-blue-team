import { requireVerifiedSession } from "@/shared/lib/supabase/session";

export async function requireCourseEditor(courseId: string) {
  const session = await requireVerifiedSession();
  const { client, user, profile } = session;
  if (profile.role === "admin") return session;
  if (profile.role !== "instructor") throw new Error("Forbidden");

  const { data: course, error: courseError } = await client
    .from("courses")
    .select("created_by")
    .eq("id", courseId)
    .maybeSingle();
  if (courseError || !course)
    throw new Error("No se pudo verificar el acceso al curso.");
  if (course.created_by === user.id) return session;

  const { data: editor, error: editorError } = await client
    .from("course_editors")
    .select("user_id")
    .eq("course_id", courseId)
    .eq("user_id", user.id)
    .maybeSingle();
  if (editorError || !editor) throw new Error("Forbidden");
  return session;
}
