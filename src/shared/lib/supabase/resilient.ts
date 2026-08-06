import { createSupabaseServerClient } from "./server";
import { redirect } from "next/navigation";

export async function getResilientUser() {
  const supabase = await createSupabaseServerClient();
  const result: any = await supabase.auth.getUser();
  if (result?.data?.user) {
    const user = result.data.user;
    const { data: profile } = await supabase
      .from("profiles")
      .select("role, full_name, email")
      .eq("id", user.id)
      .maybeSingle();

    const userRole = profile?.role || "student";

    return {
      user: {
        id: user.id,
        email: user.email,
      },
      profile: {
        role: userRole,
        full_name:
          profile?.full_name ??
          (userRole === "admin"
            ? "Administrador BlueTeam"
            : userRole === "instructor"
              ? "Instructor BlueTeam"
              : "Estudiante BlueTeam"),
        email: user.email,
      },
    };
  }
  redirect("/login");
}

export async function getResilientCourses(userId: string, isAdmin: boolean) {
  {
    const supabase = await createSupabaseServerClient();

    let queryPromise;
    if (isAdmin) {
      queryPromise = supabase
        .from("courses")
        .select(
          "id, title, slug, description, created_at, lessons(id, title, sequence_order)",
        )
        .order("created_at", { ascending: false });
    } else {
      queryPromise = supabase
        .from("course_enrollments")
        .select(
          "courses(id, title, slug, description, created_at, lessons(id, title, sequence_order))",
        )
        .eq("user_id", userId);
    }

    const result: any = await queryPromise;
    if (result && !result.error && result.data) {
      if (isAdmin) return result.data || [];
      const courses = result.data.map((e: any) => e.courses).filter(Boolean);
      return courses;
    }
  }
  throw new Error("Unable to load courses");
}

export async function getResilientCourseDetail(courseId: string) {
  const supabase = await createSupabaseServerClient();
  const result: any = await supabase
    .from("courses")
    .select(
      `
        id,
        title,
        slug,
        description,
        lessons (
          id,
          title,
          slug,
          sequence_order,
          word_count,
          min_seconds,
          content_html
        )
      `,
    )
    .eq("id", courseId)
    .single();

  if (result && !result.error && result.data) {
    return result.data;
  }
  if (result.error) throw new Error(result.error.message);
  return null;
}

export async function getResilientProfiles() {
  const supabase = await createSupabaseServerClient();
  const result: any = await supabase
    .from("profiles")
    .select("id, email, full_name, role, created_at")
    .order("created_at", { ascending: false });

  if (result && !result.error && result.data && result.data.length > 0) {
    return result.data;
  }
  if (result.error) throw new Error(result.error.message);
  return [];
}

export async function getResilientUserProgress(userId: string) {
  const supabase = await createSupabaseServerClient();
  const result: any = await supabase
    .from("user_lesson_progress")
    .select(
      "lesson_id, is_completed, started_at, completed_at, elapsed_seconds",
    )
    .eq("user_id", userId);

  if (result && !result.error && result.data) {
    return result.data;
  }
  if (result.error) throw new Error(result.error.message);
  return [];
}

export async function getResilientAllProgress() {
  const supabase = await createSupabaseServerClient();
  const result: any = await supabase
    .from("user_lesson_progress")
    .select(
      `
        user_id,
        lesson_id,
        started_at,
        completed_at,
        elapsed_seconds,
        is_completed
      `,
    )
    .order("started_at", { ascending: false });

  if (result && !result.error && result.data && result.data.length > 0) {
    return result.data;
  }
  if (result.error) throw new Error(result.error.message);
  return [];
}

export async function getResilientEnrollments() {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("course_enrollments")
    .select("user_id, course_id");
  if (error) throw new Error(error.message);
  return data ?? [];
}
