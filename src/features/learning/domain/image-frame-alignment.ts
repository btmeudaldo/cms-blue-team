export type ImageFrameAlignment = "left" | "center" | "right";

type ImageFrameAlignmentConfig = {
  classes: string[];
  label: string;
  marginLeft: string;
  marginRight: string;
  preservesCurrentWidth: boolean;
  maximumWidth: number;
};

export function getImageFrameAlignment(
  alignment: ImageFrameAlignment,
): ImageFrameAlignmentConfig {
  if (alignment === "left") {
    return {
      classes: ["mr-auto"],
      label: "Izquierda",
      marginLeft: "0",
      marginRight: "auto",
      preservesCurrentWidth: true,
      maximumWidth: 560,
    };
  }

  if (alignment === "right") {
    return {
      classes: ["ml-auto"],
      label: "Derecha",
      marginLeft: "auto",
      marginRight: "0",
      preservesCurrentWidth: true,
      maximumWidth: 560,
    };
  }

  return {
    classes: ["mx-auto"],
    label: "Centro",
    marginLeft: "auto",
    marginRight: "auto",
    preservesCurrentWidth: true,
    maximumWidth: 560,
  };
}
