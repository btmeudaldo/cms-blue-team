import { requireVerifiedSession } from "@/shared/lib/supabase/session";

export async function getManageableEnrollmentCourses() {
  const { client, user, profile } = await requireVerifiedSession();
  if (profile.role !== "admin" && profile.role !== "instructor") {
    throw new Error("Forbidden");
  }
  const { data: courses, error } = await client
    .from("courses")
    .select("id, title, slug, created_by, lessons(id)")
    .order("title");
  if (error) throw new Error("No se pudieron cargar los cursos gestionables.");
  if (profile.role === "admin") return courses ?? [];
  const { data: assignments, error: assignmentError } = await client
    .from("course_editors")
    .select("course_id")
    .eq("user_id", user.id);
  if (assignmentError)
    throw new Error("No se pudieron cargar los cursos gestionables.");
  const assignedIds = new Set(
    (assignments ?? []).map((assignment) => assignment.course_id),
  );
  return (courses ?? []).filter(
    (course) => course.created_by === user.id || assignedIds.has(course.id),
  );
}
