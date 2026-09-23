export type ImageFrameAlignment = "left" | "center" | "right";

type ImageFrameAlignmentConfig = {
  classes: string[];
  label: string;
  marginLeft: string;
  marginRight: string;
  preservesCurrentWidth: boolean;
  maximumWidth: number;
  float: "left" | "right" | "none";
};

export function getImageFrameAlignment(
  alignment: ImageFrameAlignment,
): ImageFrameAlignmentConfig {
  if (alignment === "left") {
    return {
      classes: ["mr-auto", "float-left", "img-align-left"],
      label: "Izquierda",
      marginLeft: "0",
      marginRight: "1.5rem",
      preservesCurrentWidth: true,
      maximumWidth: 560,
      float: "left",
    };
  }

  if (alignment === "right") {
    return {
      classes: ["ml-auto", "float-right", "img-align-right"],
      label: "Derecha",
      marginLeft: "1.5rem",
      marginRight: "0",
      preservesCurrentWidth: true,
      maximumWidth: 560,
      float: "right",
    };
  }

  return {
    classes: ["mx-auto", "img-align-center"],
    label: "Centro",
    marginLeft: "auto",
    marginRight: "auto",
    preservesCurrentWidth: true,
    maximumWidth: 560,
    float: "none",
  };
}
