import { defineConfig } from "@playwright/test";
import baseConfig from "./playwright.config";
const baseURL = process.env.E2E_BASE_URL;
if (!baseURL || !["localhost", "127.0.0.1"].includes(new URL(baseURL).hostname))
  throw new Error("Enrollment E2E requires local application");
export default defineConfig({
  ...baseConfig,
  testMatch: "**/enrollment-scope.e2e.ts",
  outputDir: "./test-results/enrollment-scope",
  use: { ...baseConfig.use, baseURL },
  webServer: undefined,
});
