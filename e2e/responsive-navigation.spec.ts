import { expect, test } from "@playwright/test";
import { signInTestUser } from "./auth-helpers";

test("el menú móvil no desborda la ventana y abre sus enlaces", async ({
  page,
}) => {
  await signInTestUser(page, "student");

  const viewport = page.viewportSize();
  expect(viewport).not.toBeNull();
  if (!viewport) return;

  expect(
    await page.locator("body").evaluate((body) => body.scrollWidth),
  ).toBeLessThanOrEqual(viewport.width);

  if (viewport.width < 640) {
    const menuButton = page.getByRole("button", { name: /abrir menú/i });
    await expect(menuButton).toBeVisible();
    await menuButton.click();
    await expect(page.getByRole("link", { name: "Cursos" })).toBeVisible();
  }
});
