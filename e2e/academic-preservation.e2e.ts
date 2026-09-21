import { expect, test } from "@playwright/test";

function required(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Preservation tests require ${name}.`);
  return value;
}

test("rechaza borrar lección y curso con expediente y conserva ambos visibles", async ({
  page,
}, testInfo) => {
  test.setTimeout(90_000);
  const backend = new URL(required("E2E_STAGING_SUPABASE_URL"));
  expect(["localhost", "127.0.0.1"]).toContain(backend.hostname);
  expect(backend.port).toBe("55321");
  const courseId = required("E2E_PRESERVATION_COURSE_ID");
  const lessonId = required("E2E_PRESERVATION_LESSON_ID");
  const courseTitle = required("E2E_PRESERVATION_COURSE_TITLE");
  const lessonTitle = required("E2E_PRESERVATION_LESSON_TITLE");
  const preservationMessage =
    "No se puede eliminar porque existen registros académicos que deben conservarse.";

  await page.goto("/login");
  await page.locator('input[name="email"]').fill(required("E2E_ADMIN_EMAIL"));
  await page
    .locator('input[name="password"]')
    .fill(required("E2E_ADMIN_PASSWORD"));
  await page.getByRole("button", { name: /ingresar a la plataforma/i }).click();
  await expect(page).toHaveURL(/\/courses$/);
  await page.goto(`/admin/courses/${courseId}`);
  await expect(page.getByText(lessonTitle, { exact: true })).toBeVisible();
  await page.getByTitle("Eliminar lección", { exact: true }).click();
  await expect(
    page.getByRole("alert").filter({ hasText: preservationMessage }),
  ).toHaveText(preservationMessage);
  await expect(page.getByText(lessonTitle, { exact: true })).toBeVisible();
  await expect(
    page.locator(`a[href="/admin/courses/${courseId}/lessons/${lessonId}"]`),
  ).toBeVisible();
  await page.screenshot({
    path: testInfo.outputPath("preview_screenshot-preserved-lesson.png"),
    fullPage: true,
  });

  await page.goto("/admin/courses");
  const card = page.locator("div.card-hover").filter({
    has: page.getByRole("heading", { name: courseTitle, exact: true }),
  });
  await expect(card).toHaveCount(1);
  await card.getByTitle("Eliminar curso", { exact: true }).click();
  await expect(card.getByRole("alert")).toHaveText(preservationMessage);
  await expect(
    card.getByRole("heading", { name: courseTitle, exact: true }),
  ).toBeVisible();
  await page.screenshot({
    path: testInfo.outputPath("preview_screenshot-preserved-course.png"),
    fullPage: true,
  });
  await page.reload();
  await expect(
    card.getByRole("heading", { name: courseTitle, exact: true }),
  ).toBeVisible();
  await page.goto(`/admin/courses/${courseId}`);
  await expect(page.getByText(lessonTitle, { exact: true })).toBeVisible();
});
