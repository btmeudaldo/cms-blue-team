export type ImageFrameAlignment = "left" | "center" | "right";

export function getImageFrameAlignmentClasses(
  alignment: ImageFrameAlignment,
): string[] {
  if (alignment === "left") {
    return ["mr-auto"];
  }

  if (alignment === "right") {
    return ["ml-auto"];
  }

  return ["mx-auto"];
}
