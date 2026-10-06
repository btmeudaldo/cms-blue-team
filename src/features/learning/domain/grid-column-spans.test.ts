import { describe, expect, it } from "vitest";
import {
  clampGridColumnSpan,
  getComplementaryGridColumnSpan,
  getGridColumnPercentages,
  getNextGridColumnSpan,
  getSpanFromPercentage,
  MAX_GRID_COLUMN_SPAN,
  MIN_GRID_COLUMN_SPAN,
} from "./grid-column-spans";

describe("grid-column-spans domain", () => {
  it("clamps column spans within the supported range [3, 9]", () => {
    expect(clampGridColumnSpan(1)).toBe(MIN_GRID_COLUMN_SPAN);
    expect(clampGridColumnSpan(3)).toBe(3);
    expect(clampGridColumnSpan(5)).toBe(5);
    expect(clampGridColumnSpan(9)).toBe(9);
    expect(clampGridColumnSpan(11)).toBe(MAX_GRID_COLUMN_SPAN);
  });

  it("calculates complementary column spans that sum to 12", () => {
    expect(getComplementaryGridColumnSpan(4)).toBe(8);
    expect(getComplementaryGridColumnSpan(5)).toBe(7);
    expect(getComplementaryGridColumnSpan(6)).toBe(6);
    expect(getComplementaryGridColumnSpan(7)).toBe(5);
  });

  it("calculates precise percentages for left and right columns", () => {
    expect(getGridColumnPercentages(6)).toEqual({ leftPct: 50, rightPct: 50 });
    expect(getGridColumnPercentages(4)).toEqual({ leftPct: 33, rightPct: 67 });
    expect(getGridColumnPercentages(5)).toEqual({ leftPct: 42, rightPct: 58 });
  });

  it("calculates next column spans when growing or shrinking left and right", () => {
    // Left side actions
    expect(getNextGridColumnSpan(5, "izq", "grow")).toBe(6);
    expect(getNextGridColumnSpan(5, "izq", "shrink")).toBe(4);
    expect(getNextGridColumnSpan(5, "izq", "equal")).toBe(6);

    // Right side actions (inverse effect on left span)
    expect(getNextGridColumnSpan(5, "der", "grow")).toBe(4);
    expect(getNextGridColumnSpan(5, "der", "shrink")).toBe(6);
    expect(getNextGridColumnSpan(5, "der", "equal")).toBe(6);

    // Boundary stops
    expect(getNextGridColumnSpan(MIN_GRID_COLUMN_SPAN, "izq", "shrink")).toBe(MIN_GRID_COLUMN_SPAN);
    expect(getNextGridColumnSpan(MAX_GRID_COLUMN_SPAN, "izq", "grow")).toBe(MAX_GRID_COLUMN_SPAN);
  });

  it("maps user typed percentages to the closest valid column span", () => {
    expect(getSpanFromPercentage(42)).toBe(5); // 42% -> 5 cols (41.7%)
    expect(getSpanFromPercentage(33)).toBe(4); // 33% -> 4 cols (33.3%)
    expect(getSpanFromPercentage(50)).toBe(6); // 50% -> 6 cols (50.0%)
    expect(getSpanFromPercentage(58)).toBe(7); // 58% -> 7 cols (58.3%)
    expect(getSpanFromPercentage(67)).toBe(8); // 67% -> 8 cols (66.7%)
    expect(getSpanFromPercentage(25)).toBe(3); // 25% -> 3 cols (25.0%)
    expect(getSpanFromPercentage(75)).toBe(9); // 75% -> 9 cols (75.0%)

    // Out of bound clamping
    expect(getSpanFromPercentage(10)).toBe(3);
    expect(getSpanFromPercentage(90)).toBe(9);
  });
});
