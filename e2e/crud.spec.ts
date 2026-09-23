import { expect, test } from "@playwright/test";
import { signInTestUser } from "./auth-helpers";

test("administrador puede crear, leer, actualizar y eliminar un curso", async ({
  page,
}) => {
  const suffix = Date.now();
  const originalTitle = `[E2E-TEST] Curso ${suffix}`;
  const updatedTitle = `[E2E-TEST] Curso Actualizado ${suffix}`;
  const slug = `e2e-curso-${suffix}`;

  await signInTestUser(page, "admin");
  await page.goto("/admin/courses");

  // Abrir el formulario si está colapsado
  const openCreateForm = page.getByRole("button", { name: /crear nuevo curso/i });
  if (await openCreateForm.isVisible()) {
    await openCreateForm.click();
  }

  await page.locator('input[name="title"]').fill(originalTitle);
  await page.locator('input[name="slug"]').fill(slug);
  await page
    .locator('textarea[name="description"]')
    .fill("Curso creado automáticamente por Playwright.");
  await page.getByRole("button", { name: /guardar y publicar curso/i }).click();

  await expect(page).toHaveURL(/\/admin\/courses\/.+/);

  // Abrir ajustes del curso en la vista de detalle
  const settingsBtn = page.getByRole("button", { name: /ajustes del curso/i });
  if (await settingsBtn.isVisible()) {
    await settingsBtn.click();
  }

  const titleInput = page.locator('input[name="title"]');
  await expect(titleInput).toHaveValue(originalTitle);
  await titleInput.fill(updatedTitle);
  await page
    .getByRole("button", { name: /guardar cambios del curso/i })
    .click();

  // Comprobar que en la lista de cursos el título actualizado aparece
  await page.goto("/admin/courses");
  const courseCard = page.locator("div.rounded-2xl", {
    has: page.getByRole("heading", { name: updatedTitle, exact: true }),
  });
  await expect(courseCard).toBeVisible();

  // Eliminar el curso de prueba específicamente de su tarjeta
  await courseCard.getByTitle("Eliminar curso").click();
  await expect(page.getByRole("heading", { name: updatedTitle, exact: true })).toHaveCount(0);
});

