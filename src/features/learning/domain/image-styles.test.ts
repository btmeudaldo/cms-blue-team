import { describe, expect, it } from "vitest";
import {
  buildWrapperClasses,
  normalizeAlign,
  normalizeAspectRatio,
  normalizeObjectFit,
  normalizeObjectPosition,
  normalizeShadow,
  parseWidthPct,
} from "./image-styles";

describe("image-styles", () => {
  it("parses percentage widths and clamps to 15..100", () => {
    expect(parseWidthPct("50%")).toBe(50);
    expect(parseWidthPct("5%")).toBe(15);
    expect(parseWidthPct("150%")).toBe(100);
    expect(parseWidthPct("auto")).toBe("auto");
    expect(parseWidthPct("400px")).toBe("auto");
  });

  it("normalizes aspect ratio, fit and position", () => {
    expect(normalizeAspectRatio("16 / 9")).toBe("16/9");
    expect(normalizeAspectRatio("1/1")).toBe("1/1");
    expect(normalizeAspectRatio("weird")).toBe("auto");

    expect(normalizeObjectFit("cover")).toBe("cover");
    expect(normalizeObjectFit("fill")).toBe("contain");

    expect(normalizeObjectPosition("top")).toBe("top");
    expect(normalizeObjectPosition("50% 50%")).toBe("center");
  });

  it("detects align and shadow from classes", () => {
    expect(normalizeAlign("lesson-img-wrapper img-align-left")).toBe("left");
    expect(normalizeAlign("lesson-img-wrapper float-right")).toBe("right");
    expect(normalizeAlign("lesson-img-wrapper mx-auto")).toBe("center");

    expect(normalizeShadow("shadow-lg")).toBe("md");
    expect(normalizeShadow("shadow-sm")).toBe("sm");
    expect(normalizeShadow("shadow-none")).toBe("none");
  });

  it("builds wrapper classes cleanly without duplicating align/shadow/border", () => {
    const cls = buildWrapperClasses("left", "sm", false, "lesson-img-wrapper img-align-right shadow-lg border-2 custom-tag");
    expect(cls).toContain("img-align-left");
    expect(cls).toContain("shadow-sm");
    expect(cls).toContain("border-0");
    expect(cls).toContain("custom-tag");
    expect(cls).not.toContain("img-align-right");
    expect(cls).not.toContain("shadow-lg");
  });
});
