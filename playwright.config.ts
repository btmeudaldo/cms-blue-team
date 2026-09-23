import { defineConfig, devices } from "@playwright/test";
import dotenv from "dotenv";
import path from "node:path";

dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

process.env.E2E_STUDENT_EMAIL =
  process.env.E2E_STUDENT_EMAIL || "student@blueteam.com";
process.env.E2E_STUDENT_PASSWORD =
  process.env.E2E_STUDENT_PASSWORD || "blueteam";
process.env.E2E_ADMIN_EMAIL =
  process.env.E2E_ADMIN_EMAIL || "admin@blueteam.com";
process.env.E2E_ADMIN_PASSWORD =
  process.env.E2E_ADMIN_PASSWORD || "blueteam";

export default defineConfig({
  testDir: "./e2e",
  testMatch: "**/*.spec.ts",
  fullyParallel: false,
  workers: 1,
  retries: process.env.CI ? 2 : 1,
  reporter: [
    ["list"],
    ["html", { outputFolder: "playwright-report", open: "never" }],
  ],
  use: {
    baseURL: process.env.E2E_BASE_URL || "http://localhost:3000",
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
  },
  webServer: process.env.E2E_BASE_URL
    ? undefined
    : {
        command: "npm.cmd run dev -- -p 3000",
        url: "http://localhost:3000",
        reuseExistingServer: !process.env.CI,
        timeout: 120_000,
      },
  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
    {
      name: "mobile",
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 390, height: 844 },
      },
      testIgnore: "**/crud.spec.ts",
    },
  ],
});

