export const MIN_GRID_COLUMN_SPAN = 3; // 25%
export const MAX_GRID_COLUMN_SPAN = 9; // 75%
export const TOTAL_GRID_COLUMNS = 12;

export function clampGridColumnSpan(span: number): number {
  return Math.max(MIN_GRID_COLUMN_SPAN, Math.min(MAX_GRID_COLUMN_SPAN, Math.round(span)));
}

export function getComplementaryGridColumnSpan(span: number): number {
  const clamped = clampGridColumnSpan(span);
  return TOTAL_GRID_COLUMNS - clamped;
}

export function getGridColumnPercentages(span: number): {
  leftPct: number;
  rightPct: number;
} {
  const left = clampGridColumnSpan(span);
  const leftPct = Math.round((left / TOTAL_GRID_COLUMNS) * 100);
  return {
    leftPct,
    rightPct: 100 - leftPct,
  };
}

export function getNextGridColumnSpan(
  currentSpan: number,
  side: "izq" | "der",
  action: "shrink" | "grow" | "equal",
): number {
  if (action === "equal") return 6;

  if (side === "izq") {
    return clampGridColumnSpan(action === "grow" ? currentSpan + 1 : currentSpan - 1);
  } else {
    // Action on right column affects left column inversely
    return clampGridColumnSpan(action === "grow" ? currentSpan - 1 : currentSpan + 1);
  }
}

export function getSpanFromPercentage(pct: number): number {
  const span = Math.round((pct / 100) * TOTAL_GRID_COLUMNS);
  return clampGridColumnSpan(span);
}

