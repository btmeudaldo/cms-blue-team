import { describe, expect, it } from "vitest";
import {
  applyCropDrag,
  buildCroppedFilename,
  clampCropRect,
  fitCropToAspectRatio,
  FULL_CROP_RECT,
  nudgeCropRect,
  toPixelCropRect,
} from "./image-crop";

describe("image-crop domain", () => {
  it("clamps crop rect inside unit bounds with minimum dimensions", () => {
    const res = clampCropRect({ x: -0.2, y: 0.98, width: 0.01, height: 0.2 }, 0.05);
    expect(res.x).toBe(0);
    expect(res.width).toBe(0.05);
    expect(res.height).toBe(0.2);
    expect(res.y).toBeCloseTo(0.8);
  });

  it("fits centered aspect ratio accounting for natural image aspect ratio", () => {
    // 1:1 square on a 4:3 image must satisfy (w*4) === (h*3)
    const fitted = fitCropToAspectRatio(FULL_CROP_RECT, 1, 4 / 3);
    expect(fitted.height).toBeCloseTo(1, 5);
    expect(fitted.width).toBeCloseTo(0.75, 5);
    expect(fitted.x).toBeCloseTo(0.125, 5);
  });

  it("moves crop rect without changing its dimensions", () => {
    const start = { x: 0.1, y: 0.1, width: 0.4, height: 0.4 };
    const moved = applyCropDrag(start, "move", 0.7, 0.2);
    expect(moved.width).toBeCloseTo(0.4);
    expect(moved.height).toBeCloseTo(0.4);
    expect(moved.x).toBeCloseTo(0.6);
    expect(moved.y).toBeCloseTo(0.3);
  });

  it("resizes from nw corner keeping se corner anchored", () => {
    const start = { x: 0.2, y: 0.2, width: 0.5, height: 0.5 };
    const resized = applyCropDrag(start, "nw", 0.1, -0.1);
    expect(resized.x).toBeCloseTo(0.3);
    expect(resized.y).toBeCloseTo(0.1);
    expect(resized.width).toBeCloseTo(0.4);
    expect(resized.height).toBeCloseTo(0.6);
  });

  it("preserves locked aspect ratio when dragging a corner handle", () => {
    const start = { x: 0.1, y: 0.1, width: 0.6, height: 0.6 * (4 / 3) / (16 / 9) };
    const resized = applyCropDrag(start, "se", -0.15, 0.1, {
      aspectRatio: 16 / 9,
      imageAspect: 4 / 3,
    });
    const pixelRatio = (resized.width * 2160) / (resized.height * 1620);
    expect(pixelRatio).toBeCloseTo(16 / 9, 2);
  });

  it("supports keyboard nudges for moving crop box", () => {
    const start = { x: 0.2, y: 0.2, width: 0.5, height: 0.5 };
    const nudged = nudgeCropRect(start, 0.02, -0.05, "move");
    expect(nudged.x).toBeCloseTo(0.22);
    expect(nudged.y).toBeCloseTo(0.15);
  });

  it("computes integer pixel coordinates and caps oversized output dimensions", () => {
    const pixels = toPixelCropRect(
      { x: 0.1, y: 0.2, width: 0.8, height: 0.5 },
      2160,
      1620,
      1920,
    );
    expect(pixels.x).toBe(216);
    expect(pixels.y).toBe(324);
    expect(pixels.width).toBe(1728);
    expect(pixels.height).toBe(810);
    expect(pixels.outputWidth).toBe(1728);
    expect(pixels.outputHeight).toBe(810);

    const capped = toPixelCropRect(FULL_CROP_RECT, 2160, 1620, 1920);
    expect(capped.outputWidth).toBe(1920);
    expect(capped.outputHeight).toBe(1440);
  });

  it("builds clean derived WebP filenames", () => {
    expect(buildCroppedFilename("p171_after_start_flow_pattern.webp")).toBe(
      "p171_after_start_flow_pattern_crop.webp",
    );
    expect(buildCroppedFilename("p171_after_start_crop.webp")).toBe(
      "p171_after_start_crop.webp",
    );
  });
});
