import { describe, expect, it } from "vitest";

import {
  getImageAspectRatioStyle,
  getImageWidthFromPreset,
  IMAGE_WIDTH_PRESETS,
} from "./image-size-presets";

describe("image-size-presets domain", () => {
  it("defines standard width presets: 25%, 50%, 75%, 100%, and reset", () => {
    expect(IMAGE_WIDTH_PRESETS["25%"].widthPercentage).toBe(25);
    expect(IMAGE_WIDTH_PRESETS["50%"].widthPercentage).toBe(50);
    expect(IMAGE_WIDTH_PRESETS["75%"].widthPercentage).toBe(75);
    expect(IMAGE_WIDTH_PRESETS["100%"].widthPercentage).toBe(100);
    expect(IMAGE_WIDTH_PRESETS["reset"].widthPercentage).toBeNull();
  });

  it("calculates clamped pixel widths based on container size", () => {
    const container = 800;

    const quarter = getImageWidthFromPreset("25%", container);
    expect(quarter.widthPx).toBe(200);
    expect(quarter.cssWidth).toBe("25%");

    const half = getImageWidthFromPreset("50%", container);
    expect(half.widthPx).toBe(400);
    expect(half.cssWidth).toBe("50%");

    const full = getImageWidthFromPreset("100%", container);
    expect(full.widthPx).toBe(800);
    expect(full.cssWidth).toBe("100%");

    const reset = getImageWidthFromPreset("reset", container);
    expect(reset.widthPx).toBe(560);
    expect(reset.cssWidth).toBe("auto");
  });

  it("enforces minimum width boundary of 160px for very small containers", () => {
    const narrowContainer = 400;
    const quarter = getImageWidthFromPreset("25%", narrowContainer);
    // 25% of 400 is 100, clamped to min 160
    expect(quarter.widthPx).toBe(160);
  });

  it("returns proper CSS style rules for aspect ratio presets", () => {
    const autoStyle = getImageAspectRatioStyle("auto");
    expect(autoStyle.aspectRatio).toBe("auto");
    expect(autoStyle.objectFit).toBe("contain");

    const widescreenStyle = getImageAspectRatioStyle("16:9");
    expect(widescreenStyle.aspectRatio).toBe("16 / 9");
    expect(widescreenStyle.objectFit).toBe("cover");

    const squareStyle = getImageAspectRatioStyle("1:1");
    expect(squareStyle.aspectRatio).toBe("1 / 1");
    expect(squareStyle.objectFit).toBe("cover");

    const classicStyle = getImageAspectRatioStyle("4:3");
    expect(classicStyle.aspectRatio).toBe("4 / 3");
    expect(classicStyle.objectFit).toBe("cover");
  });
});
