import { chromium, expect, test, type Page } from "@playwright/test";
import { readFileSync } from "node:fs";
import { createClient } from "@supabase/supabase-js";
const config = JSON.parse(readFileSync(".vercel/local-supabase.json", "utf8"));
const fixtures = JSON.parse(
  readFileSync(".vercel/single-active-fixture.json", "utf8"),
);
const backend = new URL(config.API_URL);
if (
  config._project_id !== "quiz-validation" ||
  backend.port !== "55321" ||
  !["localhost", "127.0.0.1"].includes(backend.hostname)
)
  throw new Error("Local backend required");
const service = createClient(config.API_URL, config.SERVICE_ROLE_KEY, {
  auth: { persistSession: false, autoRefreshToken: false },
});
test("two devices preserve a single active lesson and distinguish a passed exam from reading", async ({
  page,
}, testInfo) => {
  test.setTimeout(90000);
  const fixture = fixtures[testInfo.project.name];
  const browserB = await chromium.launch();
  const contextB = await browserB.newContext({
    baseURL: String(testInfo.project.use.baseURL),
    viewport: testInfo.project.use.viewport,
  });
  const pageB = await contextB.newPage();
  const login = async (target: Page) => {
    await target.goto("/login");
    await target.locator('input[name="email"]').fill(fixture.email);
    await target.locator('input[name="password"]').fill(fixture.password);
    await target
      .getByRole("button", { name: /ingresar a la plataforma/i })
      .click();
    await expect(target).toHaveURL(/\/courses$/);
  };
  const activeRows = async () => {
    const result = await service
      .from("user_lesson_progress")
      .select("lesson_id,is_active,is_completed,active_seconds")
      .eq("user_id", fixture.id);
    expect(result.error).toBeNull();
    return result.data!;
  };
  try {
    await login(page);
    await login(pageB);
    await page.goto(`/courses/${fixture.courseId}`);
    await expect(page.getByText(/Lectura pendiente/).first()).toBeVisible();
    await page.screenshot({
      path: testInfo.outputPath(
        "preview_screenshot-exam-reading-independent.png",
      ),
      fullPage: true,
    });
    await page.goto(`/courses/${fixture.courseId}/lessons/${fixture.lessonA}`);
    await expect(
      page.getByText("Examen aprobado. La lectura verificada sigue pendiente."),
    ).toBeVisible();
    await expect
      .poll(async () =>
        (await activeRows())
          .filter((row) => row.is_active)
          .map((row) => row.lesson_id),
      )
      .toEqual([fixture.lessonA]);
    await pageB.goto(`/courses/${fixture.courseId}/lessons/${fixture.lessonB}`);
    await expect(pageB.locator("article")).toBeVisible();
    expect(await page.evaluate(() => document.hasFocus())).toBe(true);
    expect(await pageB.evaluate(() => document.hasFocus())).toBe(true);
    await expect
      .poll(async () =>
        (await activeRows())
          .filter((row) => row.is_active)
          .map((row) => row.lesson_id),
      )
      .toEqual([fixture.lessonB]);
    const paused = page
      .getByRole("alert")
      .filter({ hasText: "Registro pausado" });
    await expect(paused).toBeVisible({ timeout: 20000 });
    expect(
      (await activeRows())
        .filter((row) => row.is_active)
        .map((row) => row.lesson_id),
    ).toEqual([fixture.lessonB]);
    await page.screenshot({
      path: testInfo.outputPath("preview_screenshot-single-active-paused.png"),
      fullPage: true,
    });
    await page
      .getByRole("button", { name: "Reanudar lectura", exact: true })
      .click();
    await expect(paused).toHaveCount(0);
    await expect
      .poll(async () =>
        (await activeRows())
          .filter((row) => row.is_active)
          .map((row) => row.lesson_id),
      )
      .toEqual([fixture.lessonA]);
    await expect(
      pageB.getByRole("alert").filter({ hasText: "Registro pausado" }),
    ).toBeVisible({ timeout: 20000 });
    const records = await activeRows();
    expect(records.every((row) => !row.is_completed)).toBe(true);
    await page.screenshot({
      path: testInfo.outputPath("preview_screenshot-single-active-resumed.png"),
      fullPage: true,
    });
  } finally {
    await browserB.close();
  }
});
