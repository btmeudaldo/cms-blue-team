import { describe, expect, it } from "vitest";

import { getDefaultImageFrame } from "./image-framing";

describe("getDefaultImageFrame", () => {
  it("resets a new image to a centered, unframed view", () => {
    expect(getDefaultImageFrame()).toEqual({
      isFramed: false,
      position: { x: 0, y: 0 },
      scale: 1,
    });
  });
});
