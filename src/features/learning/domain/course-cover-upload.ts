const MAX_COURSE_COVER_SIZE_BYTES = 5 * 1024 * 1024;

const SUPPORTED_COURSE_COVER_TYPES = new Set([
  "image/gif",
  "image/jpeg",
  "image/png",
  "image/webp",
]);

type CourseCoverFile = Pick<File, "size" | "type">;

export function getCourseCoverUploadError(
  file: CourseCoverFile,
): string | null {
  if (!SUPPORTED_COURSE_COVER_TYPES.has(file.type)) {
    return "Selecciona una imagen PNG, JPG, WEBP o GIF.";
  }

  if (file.size > MAX_COURSE_COVER_SIZE_BYTES) {
    return "La imagen no puede superar 5 MB.";
  }

  return null;
}
