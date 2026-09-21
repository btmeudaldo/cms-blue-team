import { expect, test } from "@playwright/test";
import { signInTestUser } from "./auth-helpers";

test("rechaza credenciales inválidas sin abandonar el login", async ({
  page,
}) => {
  await page.goto("/login");
  await page.locator('input[name="email"]').fill("invalid@example.com");
  await page.locator('input[name="password"]').fill("wrong-password");
  await page.getByRole("button", { name: /ingresar a la plataforma/i }).click();
  await expect(page).toHaveURL(/\/login$/);
  await expect(page.getByText(/credenciales/i)).toBeVisible();
});

test("un alumno no puede acceder al panel administrativo", async ({ page }) => {
  await signInTestUser(page, "student");
  await page.goto("/admin/courses");
  await expect(page).toHaveURL(/\/courses$/);
});

test("el alumno puede cerrar sesión y vuelve al login", async ({ page }) => {
  await signInTestUser(page, "student");
  await page.getByTitle("Cerrar sesión").click();
  await expect(page).toHaveURL(/\/login$/);
});

test("el formulario de curso aplica validación HTML obligatoria", async ({
  page,
}) => {
  await signInTestUser(page, "admin");
  await page.goto("/admin/courses");
  await expect(page.locator('input[name="title"]')).toHaveAttribute(
    "required",
    "",
  );
  await expect(page.locator('input[name="slug"]')).toHaveAttribute(
    "required",
    "",
  );
});

test("el endpoint de health devuelve un contrato JSON conocido", async ({
  request,
}) => {
  const response = await request.get("/api/health");
  expect([200, 503]).toContain(response.status());
  expect(response.headers()["content-type"]).toMatch(/application\/json/);
  const body = await response.json();
  expect(body.status).toMatch(/^(online|offline)$/);
  expect(body.source).toBeTruthy();
});
