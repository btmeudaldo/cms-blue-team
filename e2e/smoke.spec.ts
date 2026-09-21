import { expect, test } from "@playwright/test";
import { signInTestUser } from "./auth-helpers";

test("la portada carga sin error visible", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));

  await page.goto("/");
  await expect(page).toHaveTitle(/Blue Team/i);
  await expect(
    page.getByRole("link", { name: /ingresar a la plataforma/i }),
  ).toBeVisible();
  expect(errors).toEqual([]);
});

test("el acceso verificado de alumno llega a cursos", async ({ page }) => {
  await signInTestUser(page, "student");
  await expect(page.getByTitle("Cerrar sesión")).toBeVisible();
});
