export type ImageFrameResizeDirection = "enlarge" | "shrink";

const IMAGE_FRAME_MIN_WIDTH = 240;
const IMAGE_FRAME_MAX_WIDTH = 720;
const IMAGE_FRAME_WIDTH_STEP = 60;

export function getNextImageFrameWidth(
  currentWidth: number,
  direction: ImageFrameResizeDirection,
): number {
  const widthDelta =
    direction === "enlarge" ? IMAGE_FRAME_WIDTH_STEP : -IMAGE_FRAME_WIDTH_STEP;
  const nextWidth = currentWidth + widthDelta;

  return Math.min(
    IMAGE_FRAME_MAX_WIDTH,
    Math.max(IMAGE_FRAME_MIN_WIDTH, nextWidth),
  );
}
