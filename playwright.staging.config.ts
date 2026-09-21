import { defineConfig } from "@playwright/test";
import baseConfig from "./playwright.config";

const baseURL = process.env.E2E_BASE_URL;
if (!baseURL) {
  throw new Error("La configuración de staging requiere E2E_BASE_URL.");
}

export default defineConfig({
  ...baseConfig,
  testMatch: "**/quiz-staging.e2e.ts",
  outputDir: "./test-results/quiz-staging",
  use: { ...baseConfig.use, baseURL },
  webServer: undefined,
});
