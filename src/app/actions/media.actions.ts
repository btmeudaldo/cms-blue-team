import { requireVerifiedSession } from "@/shared/lib/supabase/session";

export type MediaCourseTag = "C172" | "DA40" | "DA42" | "MCC" | "general";

export type LessonMediaItem = {
  id: string;
  url: string;
  original_url: string | null;
  filename: string;
  course_tag: MediaCourseTag;
  width: number | null;
  height: number | null;
  size_bytes: number | null;
  created_at: string;
};

const MEDIA_SELECT_FIELDS =
  "id, url, original_url, filename, course_tag, width, height, size_bytes, created_at";

function requireStaffRole(role: string | undefined) {
  if (role !== "superadmin" && role !== "admin" && role !== "instructor") {
    throw new Error("Forbidden");
  }
}

export async function listLessonMediaAction(params?: {
  search?: string;
  courseTag?: MediaCourseTag | "all";
  limit?: number;
}): Promise<LessonMediaItem[]> {
  const { client } = await requireVerifiedSession();
  const limit = Math.min(Math.max(params?.limit ?? 500, 1), 1000);
  let query = client
    .from("lesson_media")
    .select(MEDIA_SELECT_FIELDS)
    .order("created_at", { ascending: false })
    .limit(limit);

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
  originalUrl?: string;
  filename: string;
  courseTag?: MediaCourseTag;
  width?: number | null;
  height?: number | null;
  sizeBytes?: number;
}): Promise<void> {
  const session = await requireVerifiedSession();
  requireStaffRole(session.profile.role);

  const { error } = await session.client.from("lesson_media").insert({
    url: input.url,
    original_url: input.originalUrl ?? input.url,
    filename: input.filename,
    course_tag: input.courseTag ?? "general",
    width: input.width ?? null,
    height: input.height ?? null,
    size_bytes: input.sizeBytes ?? null,
    created_by: session.user.id,
  });

  if (error) {
    console.warn("registerLessonMediaAction error:", error.message);
  }
}

export async function updateLessonMediaCropAction(input: {
  id: string;
  url: string;
  originalUrl?: string;
  width: number;
  height: number;
  sizeBytes: number;
}): Promise<LessonMediaItem> {
  const session = await requireVerifiedSession();
  requireStaffRole(session.profile.role);

  const { data: current, error: fetchError } = await session.client
    .from("lesson_media")
    .select(MEDIA_SELECT_FIELDS)
    .eq("id", input.id)
    .single();

  if (fetchError || !current) {
    throw new Error(fetchError?.message ?? "Imagen no encontrada en la biblioteca.");
  }

  const preservedOriginalUrl =
    current.original_url || input.originalUrl || current.url;

  const { data: updated, error: updateError } = await session.client
    .from("lesson_media")
    .update({
      url: input.url,
      original_url: preservedOriginalUrl,
      width: Math.round(input.width),
      height: Math.round(input.height),
      size_bytes: Math.round(input.sizeBytes),
    })
    .eq("id", input.id)
    .select(MEDIA_SELECT_FIELDS)
    .single();

  if (updateError || !updated) {
    throw new Error(updateError?.message ?? "No se pudo guardar el recorte.");
  }

  return updated as LessonMediaItem;
}

export async function restoreLessonMediaOriginalAction(input: {
  id: string;
  width?: number | null;
  height?: number | null;
  sizeBytes?: number | null;
}): Promise<LessonMediaItem> {
  const session = await requireVerifiedSession();
  requireStaffRole(session.profile.role);

  const { data: current, error: fetchError } = await session.client
    .from("lesson_media")
    .select(MEDIA_SELECT_FIELDS)
    .eq("id", input.id)
    .single();

  if (fetchError || !current) {
    throw new Error(fetchError?.message ?? "Imagen no encontrada en la biblioteca.");
  }

  const targetUrl = current.original_url || current.url;

  const { data: updated, error: updateError } = await session.client
    .from("lesson_media")
    .update({
      url: targetUrl,
      original_url: targetUrl,
      ...(typeof input.width === "number" ? { width: Math.round(input.width) } : {}),
      ...(typeof input.height === "number" ? { height: Math.round(input.height) } : {}),
      ...(typeof input.sizeBytes === "number"
        ? { size_bytes: Math.round(input.sizeBytes) }
        : {}),
    })
    .eq("id", input.id)
    .select(MEDIA_SELECT_FIELDS)
    .single();

  if (updateError || !updated) {
    throw new Error(updateError?.message ?? "No se pudo restaurar la imagen original.");
  }

  return updated as LessonMediaItem;
}
