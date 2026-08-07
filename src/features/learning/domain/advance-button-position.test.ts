import { describe, expect, it } from "vitest";

import { getNextAdvanceButtonPosition } from "./advance-button-position";

describe("getNextAdvanceButtonPosition", () => {
  it("keeps the button in the approved lower-dock range and changes its coordinate", () => {
    const nextPosition = getNextAdvanceButtonPosition(50, 42);

    expect(nextPosition).toBeGreaterThanOrEqual(8);
    expect(nextPosition).toBeLessThanOrEqual(92);
    expect(nextPosition).not.toBe(50);
  });
});
