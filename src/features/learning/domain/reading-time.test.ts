import { describe, expect, it } from "vitest";

import { calculateMinimumReadingSeconds } from "./reading-time";

describe("calculateMinimumReadingSeconds", () => {
  it("calculates 70% of reading time at 200 words per minute", () => {
    expect(calculateMinimumReadingSeconds(200)).toBe(42);
  });

  it("rounds partial seconds up", () => {
    expect(calculateMinimumReadingSeconds(201)).toBe(43);
  });

  it("enforces the product minimum for short lessons", () => {
    expect(calculateMinimumReadingSeconds(10)).toBe(30);
  });

  it("rejects invalid word counts", () => {
    expect(() => calculateMinimumReadingSeconds(-1)).toThrow(
      "wordCount must be a non-negative integer",
    );
    expect(() => calculateMinimumReadingSeconds(1.5)).toThrow(
      "wordCount must be a non-negative integer",
    );
  });
});
