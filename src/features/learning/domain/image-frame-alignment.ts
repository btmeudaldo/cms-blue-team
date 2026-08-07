export type ImageFrameAlignment = "left" | "center" | "right";

type ImageFrameAlignmentConfig = {
  classes: string[];
  label: string;
};

export function getImageFrameAlignment(
  alignment: ImageFrameAlignment,
): ImageFrameAlignmentConfig {
  if (alignment === "left") {
    return { classes: ["mr-auto"], label: "Izquierda" };
  }

  if (alignment === "right") {
    return { classes: ["ml-auto"], label: "Derecha" };
  }

  return { classes: ["mx-auto"], label: "Centro" };
}
