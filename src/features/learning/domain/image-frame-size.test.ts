import { describe, expect, it } from "vitest";

import { getNextImageFrameWidth } from "./image-frame-size";

describe("getNextImageFrameWidth", () => {
  it("enlarges the complete image frame in fixed increments", () => {
    expect(getNextImageFrameWidth(480, "enlarge")).toBe(540);
  });

  it("shrinks the complete image frame in fixed increments", () => {
    expect(getNextImageFrameWidth(480, "shrink")).toBe(420);
  });

  it("keeps the frame width within its supported limits", () => {
    expect(getNextImageFrameWidth(720, "enlarge")).toBe(720);
    expect(getNextImageFrameWidth(240, "shrink")).toBe(240);
  });
});
