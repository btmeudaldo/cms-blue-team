import { requireVerifiedSession } from "@/shared/lib/supabase/session";

export async function requireCourseEditor(courseId: string) {
  const session = await requireVerifiedSession();
  const { client, user, profile } = session;
  if (profile.role === "admin" || profile.role === "superadmin") return session;
  if (profile.role !== "instructor") throw new Error("Forbidden");

  const isCourseUuid =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(
      courseId,
    );
  let query = client.from("courses").select("id, created_by");
  query = isCourseUuid ? query.eq("id", courseId) : query.eq("slug", courseId);
  const { data: course, error: courseError } = await query.maybeSingle();
  if (courseError || !course)
    throw new Error("No se pudo verificar el acceso al curso.");
  if (course.created_by === user.id) return session;

  const { data: editor, error: editorError } = await client
    .from("course_editors")
    .select("user_id")
    .eq("course_id", course?.id ?? courseId)
    .eq("user_id", user.id)
    .maybeSingle();
  if (editorError || !editor) throw new Error("Forbidden");
  return session;
}
