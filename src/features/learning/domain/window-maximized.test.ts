import { describe, expect, it } from "vitest";
import { isWindowUnmaximized } from "./window-maximized";

describe("isWindowUnmaximized", () => {
  it("returns false on mobile/tablet viewports", () => {
    expect(
      isWindowUnmaximized({
        availWidth: 390,
        availHeight: 844,
        outerWidth: 390,
        outerHeight: 844,
      }),
    ).toBe(false);
  });

  it("returns false when already fullscreen", () => {
    expect(
      isWindowUnmaximized({
        availWidth: 1920,
        availHeight: 1040,
        outerWidth: 1200,
        outerHeight: 700,
        isFullscreen: true,
      }),
    ).toBe(false);
  });

  it("returns false when maximized within OS border tolerances", () => {
    expect(
      isWindowUnmaximized({
        availWidth: 1920,
        availHeight: 1040,
        outerWidth: 1904,
        outerHeight: 1010,
      }),
    ).toBe(false);
  });

  it("returns true when window width or height is significantly smaller than screen", () => {
    expect(
      isWindowUnmaximized({
        availWidth: 1920,
        availHeight: 1040,
        outerWidth: 1280,
        outerHeight: 1040,
      }),
    ).toBe(true);

    expect(
      isWindowUnmaximized({
        availWidth: 1920,
        availHeight: 1040,
        outerWidth: 1920,
        outerHeight: 720,
      }),
    ).toBe(true);
  });
});
