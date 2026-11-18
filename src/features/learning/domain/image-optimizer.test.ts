import { describe, expect, it } from "vitest";
import { computeScaledDimensions, shouldSkipOptimization } from "./image-optimizer";

describe("image-optimizer", () => {
  it("keeps dimensions below maxDim untouched", () => {
    expect(computeScaledDimensions(800, 600, 1600)).toEqual({ width: 800, height: 600 });
  });

  it("scales landscape and portrait images proportionally", () => {
    expect(computeScaledDimensions(3200, 1600, 1600)).toEqual({ width: 1600, height: 800 });
    expect(computeScaledDimensions(1200, 2400, 1600)).toEqual({ width: 800, height: 1600 });
  });

  it("skips optimization for SVG and GIF", () => {
    expect(shouldSkipOptimization("image/svg+xml")).toBe(true);
    expect(shouldSkipOptimization("image/gif")).toBe(true);
    expect(shouldSkipOptimization("image/png")).toBe(false);
    expect(shouldSkipOptimization("image/jpeg")).toBe(false);
  });
});
