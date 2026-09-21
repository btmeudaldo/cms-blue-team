import { expect, test } from "@playwright/test";
import { signInTestUser } from "./auth-helpers";

test("el menú móvil es accesible por teclado", async ({ page }) => {
  await signInTestUser(page, "student");
  if (!(page.viewportSize()?.width && page.viewportSize()!.width < 640)) return;

  const menuButton = page.getByRole("button", { name: /abrir menú/i });
  await menuButton.focus();
  await expect(menuButton).toBeFocused();
  await page.keyboard.press("Enter");
  const closeButton = page.getByRole("button", { name: /cerrar menú/i });
  await expect(closeButton).toHaveAttribute("aria-expanded", "true");
  await expect(page.getByRole("link", { name: "Cursos" })).toBeVisible();
});
