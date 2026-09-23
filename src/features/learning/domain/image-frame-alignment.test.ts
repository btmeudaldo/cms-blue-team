import { describe, expect, it } from "vitest";

import { getImageFrameAlignment } from "./image-frame-alignment";

describe("getImageFrameAlignment", () => {
  it("aligns an image frame to the left", () => {
    expect(getImageFrameAlignment("left")).toEqual({
      classes: ["mr-auto", "float-left", "img-align-left"],
      label: "Izquierda",
      marginLeft: "0",
      marginRight: "1.5rem",
      preservesCurrentWidth: true,
      maximumWidth: 560,
      float: "left",
    });
  });

  it("centers an image frame", () => {
    expect(getImageFrameAlignment("center")).toEqual({
      classes: ["mx-auto", "img-align-center"],
      label: "Centro",
      marginLeft: "auto",
      marginRight: "auto",
      preservesCurrentWidth: true,
      maximumWidth: 560,
      float: "none",
    });
  });

  it("aligns an image frame to the right", () => {
    expect(getImageFrameAlignment("right")).toEqual({
      classes: ["ml-auto", "float-right", "img-align-right"],
      label: "Derecha",
      marginLeft: "1.5rem",
      marginRight: "0",
      preservesCurrentWidth: true,
      maximumWidth: 560,
      float: "right",
    });
  });
});
