"use client";

import React from "react";
import { PreflightLoadsheetWidget } from "./preflight-loadsheet-widget";
import { PreflightCruiseWidget } from "./preflight-cruise-widget";
import { PreflightFuelWidget } from "./preflight-fuel-widget";
import { PreflightPerformanceWidget } from "./preflight-performance-widget";
import { DA40LoadsheetWidget } from "./da40-loadsheet-widget";
import { DA40CruiseWidget } from "./da40-cruise-widget";
import { DA40FuelWidget } from "./da40-fuel-widget";
import { DA40PerformanceWidget } from "./da40-performance-widget";
import { DA40FuelChartWidget } from "./da40-fuel-chart-widget";
import { DA40TakeoffChartsWidget } from "./da40-takeoff-charts-widget";

export type ExerciseType =
  | "loadsheet"
  | "loadsheet_takeoff"
  | "loadsheet_landing"
  | "loadsheet-exam"
  | "cruise"
  | "fuel"
  | "performance"
  | "performance_takeoff"
  | "performance_landing"
  | "fuel_chart"
  | "takeoff_charts";

type Props = {
  exerciseType: ExerciseType;
  aircraft?: "c172" | "da40";
  onExerciseCompleted?: () => void;
  isAlreadyCompleted?: boolean;
};

export function PreflightInteractiveHub({
  exerciseType,
  aircraft = "c172",
  onExerciseCompleted,
  isAlreadyCompleted = false,
}: Props) {
  if (aircraft === "da40") {
    switch (exerciseType) {
      case "loadsheet":
        return (
          <DA40LoadsheetWidget
            mode="all"
            onExerciseCompleted={onExerciseCompleted}
            isAlreadyCompleted={isAlreadyCompleted}
          />
        );
      case "loadsheet_takeoff":
        return (
          <DA40LoadsheetWidget
            mode="takeoff"
            onExerciseCompleted={onExerciseCompleted}
            isAlreadyCompleted={isAlreadyCompleted}
          />
        );
      case "loadsheet_landing":
      case "loadsheet-exam":
        return (
          <DA40LoadsheetWidget
            mode="landing"
            onExerciseCompleted={onExerciseCompleted}
            isAlreadyCompleted={isAlreadyCompleted}
          />
        );
      case "cruise":
        return (
          <DA40CruiseWidget
            onExerciseCompleted={onExerciseCompleted}
            isAlreadyCompleted={isAlreadyCompleted}
          />
        );
      case "fuel_chart":
        return <DA40FuelChartWidget />;
      case "takeoff_charts":
        return <DA40TakeoffChartsWidget />;
      case "fuel":
        return (
          <DA40FuelWidget
            onExerciseCompleted={onExerciseCompleted}
            isAlreadyCompleted={isAlreadyCompleted}
          />
        );
      case "performance":
        return (
          <DA40PerformanceWidget
            mode="all"
            onExerciseCompleted={onExerciseCompleted}
            isAlreadyCompleted={isAlreadyCompleted}
          />
        );
      case "performance_takeoff":
        return (
          <DA40PerformanceWidget
            mode="takeoff"
            onExerciseCompleted={onExerciseCompleted}
            isAlreadyCompleted={isAlreadyCompleted}
          />
        );
      case "performance_landing":
        return (
          <DA40PerformanceWidget
            mode="landing"
            onExerciseCompleted={onExerciseCompleted}
            isAlreadyCompleted={isAlreadyCompleted}
          />
        );
      default:
        return null;
    }
  }

  // C172 default
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
    case "fuel_chart":
      return <DA40FuelChartWidget />;
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
