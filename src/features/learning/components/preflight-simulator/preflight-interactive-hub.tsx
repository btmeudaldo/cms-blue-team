"use client";

import React from "react";
import { PreflightLoadsheetWidget } from "./preflight-loadsheet-widget";
import { PreflightCruiseWidget } from "./preflight-cruise-widget";
import { PreflightFuelWidget } from "./preflight-fuel-widget";
import { PreflightPerformanceWidget } from "./preflight-performance-widget";

export type ExerciseType = "loadsheet" | "cruise" | "fuel" | "performance";

type Props = {
  exerciseType: ExerciseType;
  onExerciseCompleted?: () => void;
  isAlreadyCompleted?: boolean;
};

export function PreflightInteractiveHub({
  exerciseType,
  onExerciseCompleted,
  isAlreadyCompleted = false,
}: Props) {
  switch (exerciseType) {
    case "loadsheet":
      return (
        <PreflightLoadsheetWidget
          onExerciseCompleted={onExerciseCompleted}
          isAlreadyCompleted={isAlreadyCompleted}
        />
      );
    case "cruise":
      return (
        <PreflightCruiseWidget
          onExerciseCompleted={onExerciseCompleted}
          isAlreadyCompleted={isAlreadyCompleted}
        />
      );
    case "fuel":
      return (
        <PreflightFuelWidget
          onExerciseCompleted={onExerciseCompleted}
          isAlreadyCompleted={isAlreadyCompleted}
        />
      );
    case "performance":
      return (
        <PreflightPerformanceWidget
          onExerciseCompleted={onExerciseCompleted}
          isAlreadyCompleted={isAlreadyCompleted}
        />
      );
    default:
      return null;
  }
}
