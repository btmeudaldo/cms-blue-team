export type ImageWidthPreset = "25%" | "50%" | "75%" | "100%" | "reset";

export type ImageAspectRatioPreset = "auto" | "16:9" | "1:1" | "4:3";

export interface ImageSizePresetConfig {
  preset: ImageWidthPreset;
  label: string;
  widthPercentage: number | null;
  cssWidth: string;
}

export const IMAGE_WIDTH_PRESETS: Record<ImageWidthPreset, ImageSizePresetConfig> = {
  "25%": {
    preset: "25%",
    label: "25%",
    widthPercentage: 25,
    cssWidth: "25%",
  },
  "50%": {
    preset: "50%",
    label: "50%",
    widthPercentage: 50,
    cssWidth: "50%",
  },
  "75%": {
    preset: "75%",
    label: "75%",
    widthPercentage: 75,
    cssWidth: "75%",
  },
  "100%": {
    preset: "100%",
    label: "100%",
    widthPercentage: 100,
    cssWidth: "100%",
  },
  reset: {
    preset: "reset",
    label: "Auto",
    widthPercentage: null,
    cssWidth: "auto",
  },
};

export function getImageWidthFromPreset(
  preset: ImageWidthPreset,
  containerWidthPx: number = 720,
): { widthPx: number; cssWidth: string } {
  const config = IMAGE_WIDTH_PRESETS[preset];
  if (!config || config.widthPercentage === null) {
    return { widthPx: Math.min(containerWidthPx, 560), cssWidth: "auto" };
  }

  const calculatedPx = Math.round((containerWidthPx * config.widthPercentage) / 100);
  const clampedPx = Math.max(160, Math.min(containerWidthPx, calculatedPx));

  return {
    widthPx: clampedPx,
    cssWidth: config.cssWidth,
  };
}

export function getImageAspectRatioStyle(preset: ImageAspectRatioPreset): {
  aspectRatio: string;
  objectFit: "contain" | "cover";
} {
  switch (preset) {
    case "16:9":
      return { aspectRatio: "16 / 9", objectFit: "cover" };
    case "1:1":
      return { aspectRatio: "1 / 1", objectFit: "cover" };
    case "4:3":
      return { aspectRatio: "4 / 3", objectFit: "cover" };
    case "auto":
    default:
      return { aspectRatio: "auto", objectFit: "contain" };
  }
}
