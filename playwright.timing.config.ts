import { defineConfig } from "@playwright/test";
import baseConfig from "./playwright.config";
const baseURL = process.env.E2E_BASE_URL;
if (!baseURL || !["localhost", "127.0.0.1"].includes(new URL(baseURL).hostname))
  throw new Error("Timing E2E requires local application");
export default defineConfig({
  ...baseConfig,
  testMatch: "**/lesson-timing.e2e.ts",
  outputDir: "./test-results/lesson-timing",
  use: { ...baseConfig.use, baseURL },
  webServer: undefined,
});
