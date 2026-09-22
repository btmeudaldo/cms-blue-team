import { redirect } from "next/navigation";
import { AuthenticationRequiredError, requireVerifiedSession } from "./session";
import { requireCourseEditor } from "@/features/learning/application/course-authorization";
import type { StudentQuiz } from "@/features/learning/domain/quiz-types";
import { toStudentQuiz } from "@/features/learning/domain/student-quiz";

async function readData<T>(
  query: PromiseLike<{ data: T; error: unknown }>,
): Promise<T> {
  const { data, error } = await query;
  if (error)
    throw new Error(
      "No se pudieron cargar los datos académicos. Inténtalo de nuevo.",
    );
  return data;
}

function normalizeQuiz(quiz: any) {
  return {
    ...quiz,
    minPassScorePercentage:
      quiz.minPassScorePercentage ?? quiz.min_pass_score_percentage ?? 75,
  };
}

export async function getResilientUser() {
  try {
    const { user, profile } = await requireVerifiedSession();
    return { isDemo: false, user: { id: user.id, email: user.email }, profile };
  } catch (error) {
    if (error instanceof AuthenticationRequiredError) redirect("/login");
    throw error;
  }
}

async function requireStaffSession() {
  const session = await requireVerifiedSession();
  if (session.profile.role === "student")
    throw new Error("No tienes permisos para consultar estos registros.");
  return session;
}

// Legacy mode arguments are ignored: academic reads never substitute simulated records.
export async function getResilientCourses(
  userId: string,
  _isAdmin: boolean,
  _allowMockFallback = false,
) {
  const { client, user, profile } = await requireVerifiedSession();
  if (profile.role !== "student") {
    return (
      (await readData(
        client
          .from("courses")
          .select(
            "id, title, slug, description, image_url, created_at, lessons(id, title, slug, sequence_order)",
          )
          .order("created_at", { ascending: false }),
      )) ?? []
    );
  }
  if (userId !== user.id)
    throw new Error("No tienes permisos para consultar estos cursos.");
  const enrollments = await readData(
    client
      .from("course_enrollments")
      .select(
        "courses(id, title, slug, description, image_url, created_at, lessons(id, title, slug, sequence_order))",
      )
      .eq("user_id", user.id),
  );
  return (enrollments ?? []).map((entry: any) => entry.courses).filter(Boolean);
}

export async function getResilientCourseDetail(
  courseId: string,
  _allowMockFallback = false,
) {
  const { client } = await requireVerifiedSession();
  const isUuid =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(
      courseId,
    );
  return readData(
    client
      .from("courses")
      .select(
        "id, title, slug, description, image_url, lessons(id, title, slug, sequence_order, word_count, min_seconds, content_html)",
      )
      .eq(isUuid ? "id" : "slug", courseId)
      .maybeSingle(),
  );
}

export async function getResilientProfiles() {
  const { client } = await requireStaffSession();
  return (
    (await readData(
      client
        .from("profiles")
        .select("id, email, full_name, role, created_at, dni_nie")
        .order("created_at", { ascending: false }),
    )) ?? []
  );
}

export async function getResilientUserProgress(
  userId: string,
  _allowMockFallback = false,
) {
  const { client, user, profile } = await requireVerifiedSession();
  if (profile.role === "student" && user.id !== userId)
    throw new Error("No tienes permisos para consultar este progreso.");
  return (
    (await readData(
      client
        .from("user_lesson_progress")
        .select(
          "lesson_id, is_completed, started_at, completed_at, elapsed_seconds",
        )
        .eq("user_id", userId),
    )) ?? []
  );
}

export async function getResilientAllProgress() {
  const { client } = await requireStaffSession();
  return (
    (await readData(
      client
        .from("user_lesson_progress")
        .select(
          "user_id, lesson_id, started_at, completed_at, elapsed_seconds, is_completed",
        )
        .order("started_at", { ascending: false }),
    )) ?? []
  );
}

export async function getResilientEnrollments() {
  const { client, user, profile } = await requireVerifiedSession();
  let query = client.from("course_enrollments").select("user_id, course_id");
  if (profile.role === "student") query = query.eq("user_id", user.id);
  return (await readData(query)) ?? [];
}

export async function getResilientQuizzes() {
  return readAvailableQuizzes({});
}

export async function getResilientQuiz(quizId: string) {
  const quizzes = await readAvailableQuizzes({ p_quiz_id: quizId });
  return quizzes[0] ?? null;
}

export async function getResilientQuizForLesson(lessonId: string) {
  const quizzes = await readAvailableQuizzes({ p_lesson_id: lessonId });
  return quizzes[0] ?? null;
}

async function readAvailableQuizzes(filters: {
  p_quiz_id?: string;
  p_lesson_id?: string;
}): Promise<StudentQuiz[]> {
  const { client } = await requireVerifiedSession();
  const quizzes = await readData(client.rpc("list_available_quizzes", filters));
  if (!Array.isArray(quizzes))
    throw new Error("No se pudieron cargar los cuestionarios.");
  return quizzes.map(toStudentQuiz);
}

export async function getEditableQuizForLesson(
  courseId: string,
  lessonId: string,
) {
  const { client } = await requireCourseEditor(courseId);
  const quiz = await readData(
    client
      .from("quizzes")
      .select("*")
      .eq("course_id", courseId)
      .eq("lesson_id", lessonId)
      .maybeSingle(),
  );
  return quiz ? normalizeQuiz(quiz) : null;
}

export async function getResilientQuizAttempts(userId?: string) {
  const { client, user, profile } = await requireVerifiedSession();
  if (profile.role === "student" && userId !== user.id)
    throw new Error("No tienes permisos para consultar estos intentos.");
  let query = client.from("quiz_attempts").select("*");
  if (userId && userId !== "all") query = query.eq("user_id", userId);
  return (
    (await readData(query.order("completed_at", { ascending: true }))) ?? []
  );
}
