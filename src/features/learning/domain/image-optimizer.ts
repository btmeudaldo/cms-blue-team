/**
 * Client-side image optimization before uploading.
 * Resizes raster images to max 1600px and converts them to WebP (with JPEG fallback).
 * SVG and GIF files are returned untouched.
 */

export const MAX_IMAGE_DIMENSION = 1600;
export const WEBP_QUALITY = 0.85;

export function computeScaledDimensions(
  width: number,
  height: number,
  maxDim = MAX_IMAGE_DIMENSION,
): { width: number; height: number } {
  if (width <= 0 || height <= 0) return { width: 1, height: 1 };
  if (width <= maxDim && height <= maxDim) return { width, height };
  if (width >= height) {
    return { width: maxDim, height: Math.max(1, Math.round((height * maxDim) / width)) };
  }
  return { width: Math.max(1, Math.round((width * maxDim) / height)), height: maxDim };
}

export function shouldSkipOptimization(mimeType: string): boolean {
  return mimeType === "image/svg+xml" || mimeType === "image/gif";
}

export async function optimizeImageForUpload(file: File): Promise<File> {
  if (shouldSkipOptimization(file.type)) {
    return file;
  }

  const bitmap = await createImageBitmap(file);
  try {
    const { width, height } = computeScaledDimensions(bitmap.width, bitmap.height);
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    if (!ctx) return file;

    ctx.drawImage(bitmap, 0, 0, width, height);

    const blob = await new Promise<Blob | null>((resolve) =>
      canvas.toBlob((b) => resolve(b), "image/webp", WEBP_QUALITY),
    );
    if (!blob) return file;

    const baseName = file.name.replace(/\.[^.]+$/, "") || "image";
    const ext = blob.type === "image/webp" ? "webp" : "jpg";
    return new File([blob], `${baseName}.${ext}`, { type: blob.type });
  } finally {
    bitmap.close();
  }
}
