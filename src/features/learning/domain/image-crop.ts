export type CropAspectPresetId = "free" | "16:9" | "4:3" | "3:2" | "1:1";

export type CropHandle =
  | "move"
  | "nw"
  | "n"
  | "ne"
  | "e"
  | "se"
  | "s"
  | "sw"
  | "w";

export type NormalizedCropRect = {
  /** Normalized left edge in [0, 1] */
  x: number;
  /** Normalized top edge in [0, 1] */
  y: number;
  /** Normalized width in (0, 1] */
  width: number;
  /** Normalized height in (0, 1] */
  height: number;
};

export type PixelCropRect = {
  x: number;
  y: number;
  width: number;
  height: number;
  outputWidth: number;
  outputHeight: number;
};

export const FULL_CROP_RECT: NormalizedCropRect = {
  x: 0,
  y: 0,
  width: 1,
  height: 1,
};

export const DEFAULT_MIN_CROP_SIZE = 0.04;
export const DEFAULT_MAX_CROP_OUTPUT_DIM = 1920;

export const CROP_ASPECT_PRESETS: Array<{
  id: CropAspectPresetId;
  label: string;
  ratio: number | null;
}> = [
  { id: "free", label: "Libre", ratio: null },
  { id: "16:9", label: "16:9", ratio: 16 / 9 },
  { id: "4:3", label: "4:3", ratio: 4 / 3 },
  { id: "3:2", label: "3:2", ratio: 3 / 2 },
  { id: "1:1", label: "1:1", ratio: 1 },
];

function clamp(val: number, min: number, max: number): number {
  return Math.min(Math.max(val, min), max);
}

/**
 * Clamps a normalized crop rectangle inside [0, 1] x [0, 1] while preserving minSize.
 */
export function clampCropRect(
  rect: NormalizedCropRect,
  minSize = DEFAULT_MIN_CROP_SIZE,
): NormalizedCropRect {
  const safeMin = clamp(minSize, 0.01, 0.5);
  const width = clamp(rect.width, safeMin, 1);
  const height = clamp(rect.height, safeMin, 1);
  const x = clamp(rect.x, 0, 1 - width);
  const y = clamp(rect.y, 0, 1 - height);
  return { x, y, width, height };
}

/**
 * Fits a normalized rectangle centered on `rect` to an explicit pixel aspect ratio
 * (`targetPixelAspect = outWidth / outHeight`), accounting for `imageAspect = natWidth / natHeight`.
 */
export function fitCropToAspectRatio(
  rect: NormalizedCropRect,
  targetPixelAspect: number | null,
  imageAspect = 4 / 3,
  minSize = DEFAULT_MIN_CROP_SIZE,
): NormalizedCropRect {
  if (!targetPixelAspect || targetPixelAspect <= 0 || imageAspect <= 0) {
    return clampCropRect(rect, minSize);
  }

  // Since normWidth * W / (normHeight * H) = targetPixelAspect,
  // normWidth / normHeight = targetPixelAspect / imageAspect.
  const normAspect = targetPixelAspect / imageAspect;
  const centerX = rect.x + rect.width / 2;
  const centerY = rect.y + rect.height / 2;

  let width = rect.width;
  let height = width / normAspect;

  if (height > 1) {
    height = 1;
    width = height * normAspect;
  }
  if (width > 1) {
    width = 1;
    height = width / normAspect;
  }

  if (width < minSize) {
    width = minSize;
    height = width / normAspect;
  }
  if (height < minSize) {
    height = minSize;
    width = height * normAspect;
  }

  // Final guard so aspect stays exact even if imageAspect is extreme
  if (width > 1) {
    width = 1;
    height = width / normAspect;
  }
  if (height > 1) {
    height = 1;
    width = height * normAspect;
  }

  const x = clamp(centerX - width / 2, 0, 1 - width);
  const y = clamp(centerY - height / 2, 0, 1 - height);
  return { x, y, width, height };
}

/**
 * Applies pointer drag deltas (normalized 0..1 relative to canvas/container dimensions)
 * to an initial crop rect for either moving or resizing via any of the 8 handles.
 */
export function applyCropDrag(
  initial: NormalizedCropRect,
  handle: CropHandle,
  deltaXNorm: number,
  deltaYNorm: number,
  options?: {
    aspectRatio?: number | null;
    imageAspect?: number;
    minSize?: number;
  },
): NormalizedCropRect {
  const minSize = options?.minSize ?? DEFAULT_MIN_CROP_SIZE;
  const aspectRatio = options?.aspectRatio ?? null;
  const imageAspect = options?.imageAspect ?? 4 / 3;

  if (handle === "move") {
    return {
      x: clamp(initial.x + deltaXNorm, 0, 1 - initial.width),
      y: clamp(initial.y + deltaYNorm, 0, 1 - initial.height),
      width: initial.width,
      height: initial.height,
    };
  }

  let left = initial.x;
  let right = initial.x + initial.width;
  let top = initial.y;
  let bottom = initial.y + initial.height;

  const affectsWest = handle.includes("w");
  const affectsEast = handle.includes("e");
  const affectsNorth = handle.includes("n");
  const affectsSouth = handle.includes("s");

  if (affectsWest) {
    left = clamp(initial.x + deltaXNorm, 0, right - minSize);
  }
  if (affectsEast) {
    right = clamp(initial.x + initial.width + deltaXNorm, left + minSize, 1);
  }
  if (affectsNorth) {
    top = clamp(initial.y + deltaYNorm, 0, bottom - minSize);
  }
  if (affectsSouth) {
    bottom = clamp(initial.y + initial.height + deltaYNorm, top + minSize, 1);
  }

  if (!aspectRatio || aspectRatio <= 0 || imageAspect <= 0) {
    return clampCropRect(
      {
        x: left,
        y: top,
        width: right - left,
        height: bottom - top,
      },
      minSize,
    );
  }

  // Enforce locked aspect ratio anchored at the opposite edge/corner
  const normAspect = aspectRatio / imageAspect;
  let width = right - left;
  let height = bottom - top;

  const isHorizontalOnly = handle === "e" || handle === "w";
  const isVerticalOnly = handle === "n" || handle === "s";

  if (isVerticalOnly) {
    width = height * normAspect;
  } else if (isHorizontalOnly || Math.abs(deltaXNorm) >= Math.abs(deltaYNorm)) {
    height = width / normAspect;
  } else {
    width = height * normAspect;
  }

  const maxW = affectsWest ? right : 1 - left;
  const maxH = affectsNorth ? bottom : 1 - top;

  if (isVerticalOnly && !affectsWest && !affectsEast) {
    // Center horizontally when dragging n/s handle with locked aspect ratio
    const cx = (left + right) / 2;
    const availHalf = Math.min(cx, 1 - cx);
    const maxCenteredW = Math.min(1, availHalf * 2);
    if (width > maxCenteredW) {
      width = maxCenteredW;
      height = width / normAspect;
    }
    if (height > maxH) {
      height = maxH;
      width = height * normAspect;
    }
    const finalX = clamp(cx - width / 2, 0, 1 - width);
    const finalY = affectsNorth ? bottom - height : top;
    return clampCropRect({ x: finalX, y: finalY, width, height }, minSize);
  }

  if (isHorizontalOnly && !affectsNorth && !affectsSouth) {
    const cy = (top + bottom) / 2;
    const availHalf = Math.min(cy, 1 - cy);
    const maxCenteredH = Math.min(1, availHalf * 2);
    if (height > maxCenteredH) {
      height = maxCenteredH;
      width = height * normAspect;
    }
    if (width > maxW) {
      width = maxW;
      height = width / normAspect;
    }
    const finalX = affectsWest ? right - width : left;
    const finalY = clamp(cy - height / 2, 0, 1 - height);
    return clampCropRect({ x: finalX, y: finalY, width, height }, minSize);
  }

  // Corner drag: keep opposite corner fixed
  if (width > maxW) {
    width = maxW;
    height = width / normAspect;
  }
  if (height > maxH) {
    height = maxH;
    width = height * normAspect;
  }
  if (width < minSize) {
    width = minSize;
    height = width / normAspect;
  }
  if (height < minSize) {
    height = minSize;
    width = height * normAspect;
  }

  const finalX = affectsWest ? right - width : left;
  const finalY = affectsNorth ? bottom - height : top;
  return clampCropRect({ x: finalX, y: finalY, width, height }, minSize);
}

/**
 * Translates or resizes the crop box via keyboard nudges.
 */
export function nudgeCropRect(
  rect: NormalizedCropRect,
  dxNorm: number,
  dyNorm: number,
  mode: "move" | "resize" = "move",
  options?: {
    aspectRatio?: number | null;
    imageAspect?: number;
    minSize?: number;
  },
): NormalizedCropRect {
  return applyCropDrag(
    rect,
    mode === "move" ? "move" : "se",
    dxNorm,
    dyNorm,
    options,
  );
}

/**
 * Converts a normalized [0, 1] crop rectangle to integer source and output pixels.
 */
export function toPixelCropRect(
  normRect: NormalizedCropRect,
  naturalWidth: number,
  naturalHeight: number,
  maxOutputDim = DEFAULT_MAX_CROP_OUTPUT_DIM,
): PixelCropRect {
  const safeW = Math.max(1, Math.round(naturalWidth));
  const safeH = Math.max(1, Math.round(naturalHeight));
  const clamped = clampCropRect(normRect, 0.01);

  const x = clamp(Math.round(clamped.x * safeW), 0, safeW - 1);
  const y = clamp(Math.round(clamped.y * safeH), 0, safeH - 1);
  const width = clamp(Math.round(clamped.width * safeW), 1, safeW - x);
  const height = clamp(Math.round(clamped.height * safeH), 1, safeH - y);

  const scale = Math.min(1, maxOutputDim / Math.max(width, height));
  const outputWidth = Math.max(1, Math.round(width * scale));
  const outputHeight = Math.max(1, Math.round(height * scale));

  return { x, y, width, height, outputWidth, outputHeight };
}

/**
 * Builds a clean WebP filename when saving a cropped derivative image.
 */
export function buildCroppedFilename(originalFilename: string): string {
  const base = originalFilename
    .replace(/\.[^.]+$/, "")
    .replace(/_crop(?:_\d+)?$/i, "")
    .replace(/[^a-zA-Z0-9_-]+/g, "_")
    .replace(/^_+|_+$/g, "")
    .slice(0, 64);

  return `${base || "recurso"}_crop.webp`;
}
