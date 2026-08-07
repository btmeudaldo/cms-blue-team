import { describe, expect, it } from "vitest";

import { getImageFrameAlignment } from "./image-frame-alignment";

describe("getImageFrameAlignment", () => {
  it("aligns an image frame to the left", () => {
    expect(getImageFrameAlignment("left")).toEqual({
      classes: ["mr-auto"],
      label: "Izquierda",
      marginLeft: "0",
      marginRight: "auto",
      preservesCurrentWidth: true,
      maximumWidth: 560,
    });
  });

  it("centers an image frame", () => {
    expect(getImageFrameAlignment("center")).toEqual({
      classes: ["mx-auto"],
      label: "Centro",
      marginLeft: "auto",
      marginRight: "auto",
      preservesCurrentWidth: true,
      maximumWidth: 560,
    });
  });

  it("aligns an image frame to the right", () => {
    expect(getImageFrameAlignment("right")).toEqual({
      classes: ["ml-auto"],
      label: "Derecha",
      marginLeft: "auto",
      marginRight: "0",
      preservesCurrentWidth: true,
      maximumWidth: 560,
    });
  });
});
