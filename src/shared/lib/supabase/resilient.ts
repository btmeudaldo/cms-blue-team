import { cookies } from "next/headers";
import { createSupabaseServerClient } from "./server";
import { mockStore } from "../mock-store";

export async function getResilientUser() {
  const cookieStore = await cookies();
  const demoRoleCookie = cookieStore.get("demo_role")?.value;

  try {
    const supabase = await createSupabaseServerClient();
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Supabase timeout")), 1500)
    );
    const userPromise = supabase.auth.getUser();

    const result: any = await Promise.race([userPromise, timeoutPromise]);
    if (result?.data?.user) {
      const user = result.data.user;
      const { data: profile } = await supabase
        .from("profiles")
        .select("role, full_name, email")
        .eq("id", user.id)
        .maybeSingle();

      const userRole = demoRoleCookie || profile?.role || "student";

      return {
        user: {
          id: user.id,
          email: user.email,
        },
        profile: {
          role: userRole,
          full_name: profile?.full_name ?? (userRole === "admin" ? "Administrador BlueTeam" : userRole === "instructor" ? "Instructor BlueTeam" : "Estudiante BlueTeam"),
          email: user.email,
        },
      };
    }
  } catch (err) {
    // Offline / Supabase connection refused fallback
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
        full_name: "Instructor BlueTeam",
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
        full_name: "Administrador BlueTeam",
        email: "admin@blueteam.com",
      },
    };
  }

  return {
    user: {
      id: "student-123",
      email: "student@blueteam.com",
    },
    profile: {
      role: "student" as const,
      full_name: "Estudiante BlueTeam",
      email: "student@blueteam.com",
    },
  };
}

export async function getResilientCourses(userId: string, isAdmin: boolean) {
  try {
    const supabase = await createSupabaseServerClient();
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Supabase timeout")), 1500)
    );

    let queryPromise;
    if (isAdmin) {
      queryPromise = supabase
        .from("courses")
        .select("id, title, slug, description, created_at, lessons(id, title, sequence_order)")
        .order("created_at", { ascending: false });
    } else {
      queryPromise = supabase
        .from("course_enrollments")
        .select("courses(id, title, slug, description, created_at, lessons(id, title, sequence_order))")
        .eq("user_id", userId);
    }

    const result: any = await Promise.race([queryPromise, timeoutPromise]);
    if (result && !result.error && result.data) {
      if (isAdmin) return result.data || [];
      const courses = result.data.map((e: any) => e.courses).filter(Boolean);
      if (courses.length > 0) return courses;
    }
  } catch (err) {
    // Offline fallback
  }

  // Fallback mock courses
  return mockStore.getCourses();
}

export async function getResilientCourseDetail(courseId: string) {
  try {
    const supabase = await createSupabaseServerClient();
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Supabase timeout")), 1500)
    );

    const queryPromise = supabase
      .from("courses")
      .select(`
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
      `)
      .eq("id", courseId)
      .single();

    const result: any = await Promise.race([queryPromise, timeoutPromise]);
    if (result && !result.error && result.data) {
      return result.data;
    }
  } catch (err) {
    // Offline fallback
  }

  const mockC = mockStore.getCourseById(courseId);
  return mockC || mockStore.getCourses()[0];
}

export async function getResilientProfiles() {
  try {
    const supabase = await createSupabaseServerClient();
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Supabase timeout")), 1500)
    );

    const queryPromise = supabase
      .from("profiles")
      .select("id, email, full_name, role, created_at")
      .order("created_at", { ascending: false });

    const result: any = await Promise.race([queryPromise, timeoutPromise]);
    if (result && !result.error && result.data && result.data.length > 0) {
      return result.data;
    }
  } catch (err) {
    // Offline fallback
  }

  return mockStore.getProfiles();
}

export async function getResilientUserProgress(userId: string) {
  let dbProgress: any[] = [];
  try {
    const supabase = await createSupabaseServerClient();
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Supabase timeout")), 1500)
    );

    const queryPromise = supabase
      .from("user_lesson_progress")
      .select("lesson_id, is_completed, started_at, completed_at, elapsed_seconds")
      .eq("user_id", userId);

    const result: any = await Promise.race([queryPromise, timeoutPromise]);
    if (result && !result.error && result.data) {
      dbProgress = result.data;
    }
  } catch (err) {
    // Offline fallback
  }

  const mockProgress = mockStore.getUserProgress(userId);
  const mergedMap = new Map();
  for (const p of mockProgress) {
    mergedMap.set(p.lesson_id, p);
  }
  for (const p of dbProgress) {
    mergedMap.set(p.lesson_id, p);
  }

  return Array.from(mergedMap.values());
}

export async function getResilientAllProgress() {
  let dbProgress: any[] = [];
  try {
    const supabase = await createSupabaseServerClient();
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Supabase timeout")), 1500)
    );

    const queryPromise = supabase
      .from("user_lesson_progress")
      .select(`
        user_id,
        lesson_id,
        started_at,
        completed_at,
        elapsed_seconds,
        is_completed
      `)
      .order("started_at", { ascending: false });

    const result: any = await Promise.race([queryPromise, timeoutPromise]);
    if (result && !result.error && result.data && result.data.length > 0) {
      dbProgress = result.data;
    }
  } catch (err) {
    // Offline fallback
  }

  const mockProgress = mockStore.getAllProgress();
  const mergedMap = new Map();

  for (const p of mockProgress) {
    mergedMap.set(`${p.user_id}_${p.lesson_id}`, p);
  }
  for (const p of dbProgress) {
    mergedMap.set(`${p.user_id}_${p.lesson_id}`, p);
  }

  return Array.from(mergedMap.values());
}
