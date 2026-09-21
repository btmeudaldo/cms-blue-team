import { expect, test, type Page } from "@playwright/test";

export async function signInTestUser(page: Page, role: "admin" | "student") {
  const prefix = role === "admin" ? "E2E_ADMIN" : "E2E_STUDENT";
  const email = process.env[`${prefix}_EMAIL`];
  const password = process.env[`${prefix}_PASSWORD`];
  test.skip(
    !email || !password,
    `Configura ${prefix}_EMAIL y ${prefix}_PASSWORD con una cuenta de pruebas real.`,
  );
  await page.goto("/login");
  await page.locator('input[name="email"]').fill(email!);
  await page.locator('input[name="password"]').fill(password!);
  await page.getByRole("button", { name: /ingresar a la plataforma/i }).click();
  await expect(page).toHaveURL(/\/courses$/);
}
