import { requireVerifiedSession } from "@/shared/lib/supabase/session";

export type MediaCourseTag = "C172" | "DA40" | "DA42" | "general";

export type LessonMediaItem = {
  id: string;
  url: string;
  filename: string;
  course_tag: MediaCourseTag;
  size_bytes: number | null;
  created_at: string;
};

export async function listLessonMediaAction(params?: {
  search?: string;
  courseTag?: MediaCourseTag | "all";
}): Promise<LessonMediaItem[]> {
  const { client } = await requireVerifiedSession();
  let query = client
    .from("lesson_media")
    .select("id, url, filename, course_tag, size_bytes, created_at")
    .order("created_at", { ascending: false })
    .limit(60);

  if (params?.courseTag && params.courseTag !== "all") {
    query = query.eq("course_tag", params.courseTag);
  }
  if (params?.search?.trim()) {
    query = query.ilike("filename", `%${params.search.trim()}%`);
  }

  const { data, error } = await query;
  if (error) {
    console.warn("listLessonMediaAction error:", error.message);
    return [];
  }
  return (data ?? []) as LessonMediaItem[];
}

export async function registerLessonMediaAction(input: {
  url: string;
  filename: string;
  courseTag?: MediaCourseTag;
  sizeBytes?: number;
}): Promise<void> {
  const session = await requireVerifiedSession();
  if (
    session.profile.role !== "superadmin" &&
    session.profile.role !== "admin" &&
    session.profile.role !== "instructor"
  ) {
    throw new Error("Forbidden");
  }

  const { error } = await session.client.from("lesson_media").insert({
    url: input.url,
    filename: input.filename,
    course_tag: input.courseTag ?? "general",
    size_bytes: input.sizeBytes ?? null,
    created_by: session.user.id,
  });

  if (error) {
    console.warn("registerLessonMediaAction error:", error.message);
  }
}
