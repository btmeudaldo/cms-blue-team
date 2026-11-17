import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    exclude: ["**/node_modules/**", "**/e2e/**"],
  },
  resolve: {
    alias: [
      {
        find: "@/shared/lib/revalidate-impl",
        replacement: fileURLToPath(
          new URL("./src/shared/lib/revalidate-impl.vitest.ts", import.meta.url),
        ),
      },
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
    ],
  },
});
