import { cookies } from "next/headers";
import { createSupabaseServerClient } from "./server";
import { redirect } from "next/navigation";
import { mockStore } from "@/shared/lib/mock-store";
import { getProgressForMode } from "@/features/learning/domain/progress-source";
import { cache } from "react";

function withTimeout<T>(
  promise: PromiseLike<T> | Promise<T>,
  ms = 1500,
): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error(`Timeout of ${ms}ms exceeded`));
    }, ms);

    Promise.resolve(promise)
      .then((res) => {
        clearTimeout(timer);
        resolve(res);
      })
      .catch((err) => {
        clearTimeout(timer);
        reject(err);
      });
  });
}

export const getResilientUser = cache(async function getResilientUser() {
  const cookieStore = await cookies();
  const demoRoleCookie = cookieStore.get("demo_role")?.value;
  const demoEmailCookie = cookieStore.get("demo_email")?.value;

  try {
    const supabase = await createSupabaseServerClient();
    const result: any = await withTimeout(
      supabase.auth.getUser(),
      1500,
    ).catch(() => null);

    if (result?.data?.user) {
      const user = result.data.user;
      const profileResult: any = await withTimeout(
        supabase
          .from("profiles")
          .select("role, full_name, email")
          .eq("id", user.id)
          .maybeSingle(),
        1500,
      ).catch(() => ({ data: null }));

      const profile = profileResult?.data;

      const userRole =
        profile?.role ||
        demoRoleCookie ||
        user.user_metadata?.role ||
        (user.email?.includes("admin")
          ? "admin"
          : user.email?.includes("instructor")
            ? "instructor"
            : "student");

      return {
        isDemo: false,
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
  } catch (err) {}

  // Fallback to active mock user based on demo_email or demo_role cookie
  const mockProfiles = mockStore.getProfiles();
  if (demoEmailCookie) {
    const found = mockProfiles.find(
      (p) =>
        p.email.toLowerCase() === demoEmailCookie.toLowerCase() ||
        p.id === demoEmailCookie,
    );
    if (found) {
      return {
        isDemo: true,
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
      isDemo: true,
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
      isDemo: true,
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
      isDemo: true,
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
});

export async function getResilientCourses(
  userId: string,
  isAdmin: boolean,
  allowMockFallback = true,
) {
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

    const result: any = await withTimeout<any>(queryPromise, 1500);
    if (result && !result.error && result.data) {
      const rawCourses = isAdmin
        ? result.data || []
        : result.data.map((e: any) => e.courses).filter(Boolean);

      if (!allowMockFallback) return rawCourses;

      const mockCourses = mockStore.getCourses();
      const mockMap = new Map(mockCourses.map((mc) => [mc.id, mc]));

      const finalCourses = rawCourses.map((c: any) => {
        const mc = mockMap.get(c.id) || mockMap.get(c.slug);
        const dbLessons = c.lessons || [];
        const mockLessons = mc?.lessons || [];
        const mergedLessons =
          dbLessons.length >= mockLessons.length ? dbLessons : mockLessons;
        return {
          ...c,
          lessons: mergedLessons,
        };
      });

      if (isAdmin) {
        const existingIds = new Set(finalCourses.map((c: any) => c.id));
        for (const mc of mockCourses) {
          if (!existingIds.has(mc.id)) {
            finalCourses.push(mc);
          }
        }
        return finalCourses;
      }

      // If student and DB query returned enrolled courses list
      if (!isAdmin) {
        // If DB returned courses, return them
        if (finalCourses.length > 0) return finalCourses;

        // Fallback to mockStore student enrolled courses ONLY
        const enrolledMockCourses = mockStore.getStudentCourses(userId);
        return enrolledMockCourses;
      }
    }
  } catch (err) {}

  if (allowMockFallback && isAdmin) {
    return mockStore.getCourses();
  }

  return allowMockFallback ? mockStore.getStudentCourses(userId) : [];
}

export async function getResilientCourseDetail(
  courseId: string,
  allowMockFallback = true,
) {
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

    const result: any = await withTimeout(query.maybeSingle(), 1500);

    if (result && !result.error && result.data) {
      if (!result.data.lessons || result.data.lessons.length === 0) {
        const directLessonsResult: any = await withTimeout(
          supabase
            .from("lessons")
            .select(
              "id, title, slug, sequence_order, word_count, min_seconds, content_html",
            )
            .eq("course_id", result.data.id)
            .order("sequence_order", { ascending: true }),
          1500,
        ).catch(() => ({ data: null }));

        const directLessons = directLessonsResult?.data;

        if (directLessons && directLessons.length > 0) {
          result.data.lessons = directLessons;
        }
      }

      // Fallback merge: if mockStore has more lessons for this course ID/slug, use mockStore lessons
      const mockC =
        mockStore.getCourseById(result.data.id) ||
        mockStore.getCourseById(result.data.slug);
      if (
        mockC &&
        mockC.lessons &&
        mockC.lessons.length > (result.data.lessons?.length || 0)
      ) {
        result.data.lessons = mockC.lessons;
      }

      return result.data;
    }
  } catch (err) {}

  return allowMockFallback ? mockStore.getCourseById(courseId) : null;
}

export async function getResilientProfiles() {
  try {
    const supabase = await createSupabaseServerClient();
    const result: any = await withTimeout(
      supabase
        .from("profiles")
        .select("id, email, full_name, role, created_at")
        .order("created_at", { ascending: false }),
      1500,
    );

    if (result && !result.error && result.data && result.data.length > 0) {
      return result.data;
    }
  } catch (err) {}

  return mockStore.getProfiles();
}

export async function getResilientUserProgress(
  userId: string,
  allowMockFallback = true,
) {
  const mockProgress = mockStore.getUserProgress(userId);

  try {
    const supabase = await createSupabaseServerClient();
    const result: any = await withTimeout(
      supabase
        .from("user_lesson_progress")
        .select(
          "lesson_id, is_completed, started_at, completed_at, elapsed_seconds",
        )
        .eq("user_id", userId),
      1500,
    );

    if (result && !result.error && result.data) {
      return getProgressForMode(result.data, mockProgress, allowMockFallback);
    }
  } catch (err) {}

  return allowMockFallback ? mockProgress : [];
}

export async function getResilientAllProgress() {
  try {
    const supabase = await createSupabaseServerClient();
    const result: any = await withTimeout(
      supabase
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
        .order("started_at", { ascending: false }),
      1500,
    );

    if (result && !result.error && result.data && result.data.length > 0) {
      return result.data;
    }
  } catch (err) {}

  return mockStore.getAllProgress();
}

export async function getResilientEnrollments() {
  const mockEnrollments = mockStore.getEnrollments();
  const map = new Map<string, { user_id: string; course_id: string }>();

  for (const me of mockEnrollments) {
    map.set(`${me.user_id}_${me.course_id}`, me);
  }

  try {
    const supabase = await createSupabaseServerClient();
    const result: any = await withTimeout(
      supabase.from("course_enrollments").select("user_id, course_id"),
      1500,
    );

    if (result && !result.error && result.data) {
      for (const de of result.data) {
        map.set(`${de.user_id}_${de.course_id}`, de);
      }
    }
  } catch (err) {}

  return Array.from(map.values());
}
