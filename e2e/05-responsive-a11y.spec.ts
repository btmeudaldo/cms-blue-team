import { expect, test } from "@playwright/test";
import { signInAsStudent } from "./auth-helpers";

test.describe("05: Adaptabilidad Móvil y Accesibilidad", () => {
  test("las vistas públicas no presentan desbordamiento horizontal en móvil", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 390, height: 844 });

    for (const url of ["/", "/login"]) {
      await page.goto(url);
      const scrollWidth = await page.evaluate(() => document.body.scrollWidth);
      expect(scrollWidth).toBeLessThanOrEqual(390);
    }
  });

  test("el campus del alumno no desborda la ventana en dispositivo móvil", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await signInAsStudent(page);
    await page.goto("/courses");

    const scrollWidth = await page.evaluate(() => document.body.scrollWidth);
    expect(scrollWidth).toBeLessThanOrEqual(390);
  });

  test("el menú móvil hamburguesa se abre y se cierra correctamente", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await signInAsStudent(page);
    await page.goto("/courses");

    const menuButton = page.getByRole("button", {
      name: /abrir menú|cerrar menú/i,
    });
    await expect(menuButton).toBeVisible();

    // Abrir menú
    await menuButton.click();
    await expect(page.getByRole("link", { name: "Cursos" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Evaluaciones" })).toBeVisible();

    // Cerrar menú
    await menuButton.click();
    await expect(menuButton).toHaveAttribute("aria-expanded", "false");
  });

  test("el menú móvil es interactivo y accesible mediante teclado", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await signInAsStudent(page);
    await page.goto("/courses");

    const menuButton = page.getByRole("button", {
      name: /abrir menú|cerrar menú/i,
    });
    await menuButton.focus();
    await expect(menuButton).toBeFocused();

    // Abrir con Enter
    await page.keyboard.press("Enter");
    await expect(page.getByRole("link", { name: "Cursos" })).toBeVisible();

    // Cerrar con Enter
    await page.keyboard.press("Enter");
    await expect(menuButton).toHaveAttribute("aria-expanded", "false");
  });
});
