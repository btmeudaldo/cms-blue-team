import { describe, expect, it } from "vitest";

import { getDemoAccount } from "./demo-account";

describe("getDemoAccount", () => {
  it("maps every demo role to its dedicated account", () => {
    expect(getDemoAccount("student").email).toBe("student.test@blueteam.local");
    expect(getDemoAccount("instructor").email).toBe(
      "instructor.test@blueteam.local",
    );
    expect(getDemoAccount("admin").email).toBe("admin.test@blueteam.local");
  });
});
