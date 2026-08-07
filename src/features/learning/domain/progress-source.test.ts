import { describe, expect, it } from "vitest";

import { preferPersistedProgress } from "./progress-source";

describe("preferPersistedProgress", () => {
  it("uses Supabase progress as the source of truth when it is available", () => {
    const persisted = [{ lesson_id: "lesson-1", is_completed: false }];
    const simulated = [{ lesson_id: "lesson-1", is_completed: true }];

    expect(preferPersistedProgress(persisted, simulated)).toEqual(persisted);
  });

  it("uses simulated progress only when persistent progress is unavailable", () => {
    const simulated = [{ lesson_id: "lesson-1", is_completed: true }];

    expect(preferPersistedProgress(null, simulated)).toEqual(simulated);
  });
});
