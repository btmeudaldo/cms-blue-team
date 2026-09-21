import { expect, test } from "@playwright/test";

test("el login requiere credenciales y no ofrece acceso demo", async ({
  page,
}) => {
  await page.goto("/login");
  await expect(page.locator('input[name="password"]')).toHaveValue("");
  await expect(
    page.getByRole("button", { name: /sin contraseña|entrar como/i }),
  ).toHaveCount(0);
  await expect(
    page.getByRole("button", { name: /ingresar a la plataforma/i }),
  ).toBeVisible();
  await page.screenshot({
    path: "test-results/preview_screenshot-login.png",
    fullPage: true,
  });
});

for (const path of [
  "/admin",
  "/admin/users",
  "/admin/progress",
  "/admin/courses",
  "/courses",
]) {
  test(`cookies demo falsificadas no autorizan ${path}`, async ({
    page,
    context,
    baseURL,
  }) => {
    await context.addCookies([
      { name: "demo_role", value: "admin", url: baseURL! },
      { name: "demo_email", value: "admin@blueteam.com", url: baseURL! },
    ]);
    await page.goto(path);
    await expect(page).toHaveURL(/\/login$/);
    await expect(
      page.getByRole("button", { name: /ingresar a la plataforma/i }),
    ).toBeVisible();
  });
}
