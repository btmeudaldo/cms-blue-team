import { describe, expect, it } from "vitest";

import { getImageFrameAlignmentClasses } from "./image-frame-alignment";

describe("getImageFrameAlignmentClasses", () => {
  it("aligns an image frame to the left", () => {
    expect(getImageFrameAlignmentClasses("left")).toEqual(["mr-auto"]);
  });

  it("centers an image frame", () => {
    expect(getImageFrameAlignmentClasses("center")).toEqual(["mx-auto"]);
  });

  it("aligns an image frame to the right", () => {
    expect(getImageFrameAlignmentClasses("right")).toEqual(["ml-auto"]);
  });
});
