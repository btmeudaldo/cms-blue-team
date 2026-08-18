import { describe, expect, it } from "vitest";

import { getDemoAccount, getDemoRedirectPath } from "./demo-account";

describe("getDemoAccount", () => {
  it("maps every demo role to its dedicated account", () => {
    expect(getDemoAccount("student").email).toBe("student.test@blueteam.com");
    expect(getDemoAccount("instructor").email).toBe(
      "instructor.test@blueteam.com",
    );
    expect(getDemoAccount("admin").email).toBe("admin.test@blueteam.com");
  });

  it("uses the same easy-to-enter password for every demo account", () => {
    expect(getDemoAccount("student").password).toBe("blueteam");
    expect(getDemoAccount("instructor").password).toBe("blueteam");
    expect(getDemoAccount("admin").password).toBe("blueteam");
  });

  it("routes demo accounts to the correct workspace", () => {
    expect(getDemoRedirectPath("student")).toBe("/courses");
    expect(getDemoRedirectPath("instructor")).toBe("/admin");
    expect(getDemoRedirectPath("admin")).toBe("/admin");
  });
});
