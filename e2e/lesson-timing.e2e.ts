import { expect, test } from "@playwright/test";
import { readFileSync } from "node:fs";
import { createClient } from "@supabase/supabase-js";
const config = JSON.parse(readFileSync(".vercel/local-supabase.json", "utf8"));
const fixtures = JSON.parse(
  readFileSync(".vercel/lesson-timing-fixture.json", "utf8"),
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
for (const scenario of ["success", "failure"]) {
  test(`lesson timing ${scenario}: server acknowledgement and persisted state`, async ({
    page,
  }, testInfo) => {
    test.setTimeout(90000);
    const fixture = fixtures[testInfo.project.name][scenario];
    const path = `/courses/${fixture.courseId}/lessons/${fixture.lessonId}`;
    await page.goto("/login");
    await page.locator('input[name="email"]').fill(fixture.email);
    await page.locator('input[name="password"]').fill(fixture.password);
    await page
      .getByRole("button", { name: /ingresar a la plataforma/i })
      .click();
    await expect(page).toHaveURL(/\/courses$/);
    await page.goto(path);
    await page.bringToFront();
    await expect(page.locator("article")).toContainText(
      "Registro de aprendizaje",
    );
    await page.mouse.wheel(0, 3000);
    const complete = page.getByRole("button", {
      name: "Finalizar",
      exact: true,
    });
    await expect(complete).toBeEnabled({ timeout: 45000 });
    const readProgress = async () => {
      const { data, error } = await service
        .from("user_lesson_progress")
        .select("*")
        .eq("lesson_id", fixture.lessonId)
        .eq("user_id", fixture.studentId)
        .single();
      expect(error).toBeNull();
      return data;
    };
    expect((await readProgress()).active_seconds).toBeGreaterThanOrEqual(2);
    if (scenario === "failure") {
      const revoked = await service
        .from("course_enrollments")
        .delete()
        .eq("course_id", fixture.courseId)
        .eq("user_id", fixture.studentId);
      expect(revoked.error).toBeNull();
      await complete.click();
      const alert = page
        .getByRole("alert")
        .filter({ hasText: "No se pudo confirmar el progreso" });
      await expect(alert).toBeVisible();
      await expect(page.getByText(/¡Felicidades! Has completado/)).toHaveCount(
        0,
      );
      expect((await readProgress()).is_completed).toBe(false);
      await alert.scrollIntoViewIfNeeded();
      await page.screenshot({
        path: testInfo.outputPath("preview_screenshot-timing-rejected.png"),
        fullPage: true,
      });
      const restored = await service
        .from("course_enrollments")
        .insert({ course_id: fixture.courseId, user_id: fixture.studentId });
      expect(restored.error).toBeNull();
      await page.reload();
      await expect(
        page.getByRole("button", { name: "Finalizar", exact: true }),
      ).toBeVisible();
      expect((await readProgress()).is_completed).toBe(false);
    } else {
      await complete.click();
      await expect(
        page.getByRole("button", { name: "✓ Finalizado", exact: true }),
      ).toBeVisible();
      const saved = await readProgress();
      expect(saved.is_completed).toBe(true);
      expect(saved.completed_at).toBeTruthy();
      await page.goto(path);
      await expect(
        page.getByRole("button", { name: "✓ Finalizado", exact: true }),
      ).toBeVisible();
      expect(await readProgress()).toEqual(saved);
      await page.screenshot({
        path: testInfo.outputPath("preview_screenshot-timing-completed.png"),
        fullPage: true,
      });
    }
  });
}
