import { describe, expect, it } from "vitest";

import { getImageFrameAlignment } from "./image-frame-alignment";

describe("getImageFrameAlignment", () => {
  it("aligns an image frame to the left", () => {
    expect(getImageFrameAlignment("left")).toEqual({
      classes: ["mr-auto"],
      label: "Izquierda",
    });
  });

  it("centers an image frame", () => {
    expect(getImageFrameAlignment("center")).toEqual({
      classes: ["mx-auto"],
      label: "Centro",
    });
  });

  it("aligns an image frame to the right", () => {
    expect(getImageFrameAlignment("right")).toEqual({
      classes: ["ml-auto"],
      label: "Derecha",
    });
  });
});
