import { expect, test } from "@playwright/test";

test("el menú móvil es accesible por teclado", async ({ page }) => {
  await page.goto("/login");
  await page
    .getByRole("button", { name: /entrar como alumno seleccionado/i })
    .click();
  await expect(page).toHaveURL(/\/courses$/);
  if (!(page.viewportSize()?.width && page.viewportSize()!.width < 640)) return;

  const menuButton = page.getByRole("button", { name: /abrir menú/i });
  await menuButton.focus();
  await expect(menuButton).toBeFocused();
  await page.keyboard.press("Enter");
  const closeButton = page.getByRole("button", { name: /cerrar menú/i });
  await expect(closeButton).toHaveAttribute("aria-expanded", "true");
  await expect(page.getByRole("link", { name: "Cursos" })).toBeVisible();
});
