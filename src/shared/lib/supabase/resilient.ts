import { cookies } from "next/headers";
import { createSupabaseServerClient } from "./server";
import { redirect } from "next/navigation";
import { mockStore } from "@/shared/lib/mock-store";

export async function getResilientUser() {
  const cookieStore = await cookies();
  const demoRoleCookie = cookieStore.get("demo_role")?.value;
  const demoEmailCookie = cookieStore.get("demo_email")?.value;

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

  // Fallback to active mock user based on demo_email or demo_role cookie
  const mockProfiles = mockStore.getProfiles();
  if (demoEmailCookie) {
    const found = mockProfiles.find(
      (p) => p.email.toLowerCase() === demoEmailCookie.toLowerCase() || p.id === demoEmailCookie,
    );
    if (found) {
      return {
        user: {
          id: found.id,
          email: found.email,
        },
        profile: {
          role: found.role,
          full_name: found.full_name,
          email: found.email,
        },
      };
    }
  }

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

  if (demoRoleCookie === "student") {
    return {
      user: {
        id: "student-123",
        email: "student@blueteam.com",
      },
      profile: {
        role: "student" as const,
        full_name: "Piloto Alumno BlueTeam",
        email: "student@blueteam.com",
      },
    };
  }

  redirect("/login");
}

export async function getResilientCourses(userId: string, isAdmin: boolean) {
  try {
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
    if (result && !result.error && result.data && result.data.length > 0) {
      if (isAdmin) return result.data || [];
      const courses = result.data.map((e: any) => e.courses).filter(Boolean);
      if (courses.length > 0) return courses;
    }
  } catch (err) {}

  return mockStore.getCourses();
}

export async function getResilientCourseDetail(courseId: string) {
  try {
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
  } catch (err) {}

  return mockStore.getCourseById(courseId);
}

export async function getResilientProfiles() {
  try {
    const supabase = await createSupabaseServerClient();
    const result: any = await supabase
      .from("profiles")
      .select("id, email, full_name, role, created_at")
      .order("created_at", { ascending: false });

    if (result && !result.error && result.data && result.data.length > 0) {
      return result.data;
    }
  } catch (err) {}

  return mockStore.getProfiles();
}

export async function getResilientUserProgress(userId: string) {
  try {
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
  } catch (err) {}

  return mockStore.getUserProgress(userId);
}

export async function getResilientAllProgress() {
  try {
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
  } catch (err) {}

  return mockStore.getAllProgress();
}

export async function getResilientEnrollments() {
  try {
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase
      .from("course_enrollments")
      .select("user_id, course_id");
    if (!error && data) return data;
  } catch (err) {}

  return mockStore.getEnrollments();
}
