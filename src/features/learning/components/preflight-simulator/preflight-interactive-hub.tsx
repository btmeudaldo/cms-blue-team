"use client";

import React from "react";
import { PreflightLoadsheetWidget } from "./preflight-loadsheet-widget";
import { PreflightCruiseWidget } from "./preflight-cruise-widget";
import { PreflightFuelWidget } from "./preflight-fuel-widget";
import { PreflightPerformanceWidget } from "./preflight-performance-widget";

export type ExerciseType =
  | "loadsheet"
  | "loadsheet_takeoff"
  | "loadsheet_landing"
  | "loadsheet-exam"
  | "cruise"
  | "fuel"
  | "performance"
  | "performance_takeoff"
  | "performance_landing";

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
          mode="all"
          onExerciseCompleted={onExerciseCompleted}
          isAlreadyCompleted={isAlreadyCompleted}
        />
      );
    case "loadsheet_takeoff":
      return (
        <PreflightLoadsheetWidget
          mode="takeoff"
          onExerciseCompleted={onExerciseCompleted}
          isAlreadyCompleted={isAlreadyCompleted}
        />
      );
    case "loadsheet_landing":
    case "loadsheet-exam":
      return (
        <PreflightLoadsheetWidget
          mode="landing"
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
          mode="all"
          onExerciseCompleted={onExerciseCompleted}
          isAlreadyCompleted={isAlreadyCompleted}
        />
      );
    case "performance_takeoff":
      return (
        <PreflightPerformanceWidget
          mode="takeoff"
          onExerciseCompleted={onExerciseCompleted}
          isAlreadyCompleted={isAlreadyCompleted}
        />
      );
    case "performance_landing":
      return (
        <PreflightPerformanceWidget
          mode="landing"
          onExerciseCompleted={onExerciseCompleted}
          isAlreadyCompleted={isAlreadyCompleted}
        />
      );
    default:
      return null;
  }
}
