import { defineConfig } from "@playwright/test";
import baseConfig from "./playwright.config";

const baseURL = process.env.E2E_BASE_URL;
if (!baseURL) throw new Error("Preservation tests require E2E_BASE_URL.");
const target = new URL(baseURL);
if (!["localhost", "127.0.0.1"].includes(target.hostname)) {
  throw new Error("Preservation tests require a local application.");
}

export default defineConfig({
  ...baseConfig,
  testMatch: "**/academic-preservation.e2e.ts",
  outputDir: "./test-results/academic-preservation",
  use: { ...baseConfig.use, baseURL },
  webServer: undefined,
});
