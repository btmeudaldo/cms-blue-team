import { expect, test } from "@playwright/test";

test("la portada carga sin error visible", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));

  await page.goto("/");
  await expect(page).toHaveTitle(/Blue Team/i);
  await expect(
    page.getByRole("link", { name: /acceso rápido/i }),
  ).toBeVisible();
  expect(errors).toEqual([]);
});

test("el acceso demo de alumno llega a cursos", async ({ page }) => {
  await page.goto("/login");
  await page
    .getByRole("button", { name: /entrar como alumno seleccionado/i })
    .click();
  await expect(page).toHaveURL(/\/courses$/);
  await expect(page.getByTitle("Cerrar sesión")).toBeVisible();
});
