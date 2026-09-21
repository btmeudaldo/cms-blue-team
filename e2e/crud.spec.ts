import { expect, test } from "@playwright/test";
import { signInTestUser } from "./auth-helpers";

test("administrador puede crear, leer, actualizar y eliminar un curso", async ({
  page,
}) => {
  const suffix = Date.now();
  const originalTitle = `E2E Curso ${suffix}`;
  const updatedTitle = `E2E Curso Actualizado ${suffix}`;
  const slug = `e2e-curso-${suffix}`;

  await signInTestUser(page, "admin");
  await page.goto("/admin/courses");
  await page.locator('input[name="title"]').fill(originalTitle);
  await page.locator('input[name="slug"]').fill(slug);
  await page
    .locator('textarea[name="description"]')
    .fill("Curso creado por Playwright.");
  await page.getByRole("button", { name: /guardar y publicar curso/i }).click();

  await expect(page).toHaveURL(/\/admin\/courses\/.+/);
  await expect(page.locator('input[name="title"]')).toHaveValue(originalTitle);
  await page.locator('input[name="title"]').fill(updatedTitle);
  await page
    .getByRole("button", { name: /guardar cambios del curso/i })
    .click();
  await expect(page.locator('input[name="title"]')).toHaveValue(updatedTitle);

  await page.goto("/admin/courses");
  await expect(page.getByText(updatedTitle, { exact: true })).toBeVisible();
  await page.getByTitle("Eliminar curso").last().click();
  await expect(page.getByText(updatedTitle, { exact: true })).toHaveCount(0);
});
