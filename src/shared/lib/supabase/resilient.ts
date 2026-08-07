import { cookies } from "next/headers";
import { createSupabaseServerClient } from "./server";
import { redirect } from "next/navigation";

export async function getResilientUser() {
  const cookieStore = await cookies();
  const demoRoleCookie = cookieStore.get("demo_role")?.value;

  const supabase = await createSupabaseServerClient();
  const result: any = await supabase.auth.getUser();
  if (result?.data?.user) {
    const user = result.data.user;
    const { data: profile } = await supabase
      .from("profiles")
      .select("role, full_name, email")
      .eq("id", user.id)
      .maybeSingle();

    const userRole =
      demoRoleCookie ||
      profile?.role ||
      user.user_metadata?.role ||
      (user.email?.includes("admin")
        ? "admin"
        : user.email?.includes("instructor")
          ? "instructor"
          : "student");

    return {
      user: {
        id: user.id,
        email: user.email,
      },
      profile: {
        role: userRole,
        full_name:
          profile?.full_name ??
          user.user_metadata?.full_name ??
          (userRole === "admin"
            ? "Director / Administrador"
            : userRole === "instructor"
              ? "Instructor de Vuelo"
              : "Piloto Alumno"),
        email: user.email,
      },
    };
  }

  // Fallback to active mock user based on demo_role cookie
  if (demoRoleCookie === "instructor") {
    return {
      user: {
        id: "instructor-123",
        email: "instructor@blueteam.com",
      },
      profile: {
        role: "instructor" as const,
        full_name: "Instructor de Vuelo BlueTeam",
        email: "instructor@blueteam.com",
      },
    };
  }

  if (demoRoleCookie === "admin") {
    return {
      user: {
        id: "admin-123",
        email: "admin@blueteam.com",
      },
      profile: {
        role: "admin" as const,
        full_name: "Director / Administrador BlueTeam",
        email: "admin@blueteam.com",
      },
    };
  }

  redirect("/login");
}

export async function getResilientCourses(userId: string, isAdmin: boolean) {
  const supabase = await createSupabaseServerClient();

  let queryPromise;
  if (isAdmin) {
    queryPromise = supabase
      .from("courses")
      .select(
        "id, title, slug, description, image_url, created_at, lessons(id, title, sequence_order)",
      )
      .order("created_at", { ascending: false });
  } else {
    queryPromise = supabase
      .from("course_enrollments")
      .select(
        "courses(id, title, slug, description, image_url, created_at, lessons(id, title, sequence_order))",
      )
      .eq("user_id", userId);
  }

  const result: any = await queryPromise;
  if (result && !result.error && result.data) {
    if (isAdmin) return result.data || [];
    const courses = result.data.map((e: any) => e.courses).filter(Boolean);
    return courses;
  }
  throw new Error("Unable to load courses");
}

export async function getResilientCourseDetail(courseId: string) {
  const supabase = await createSupabaseServerClient();
  const isUuid =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(
      courseId,
    );

  let query = supabase.from("courses").select(
    `
        id,
        title,
        slug,
        description,
        image_url,
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
  );

  if (isUuid) {
    query = query.eq("id", courseId);
  } else {
    query = query.eq("slug", courseId);
  }

  const result: any = await query.maybeSingle();

  if (result && !result.error && result.data) {
    // If course data exists, but lessons array is empty due to relational join, double check querying lessons table directly
    if (!result.data.lessons || result.data.lessons.length === 0) {
      const { data: directLessons } = await supabase
        .from("lessons")
        .select(
          "id, title, slug, sequence_order, word_count, min_seconds, content_html",
        )
        .eq("course_id", result.data.id)
        .order("sequence_order", { ascending: true });

      if (directLessons && directLessons.length > 0) {
        result.data.lessons = directLessons;
      }
    }

    return result.data;
  }
  if (result?.error) throw new Error(result.error.message);
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
  if (result?.error) throw new Error(result.error.message);
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
  if (result?.error) throw new Error(result.error.message);
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
  if (result?.error) throw new Error(result.error.message);
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
