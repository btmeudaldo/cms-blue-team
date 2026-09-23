import { expect, test } from "@playwright/test";

test.describe("01: Humo, Portada y Acceso Público", () => {
  test("la portada carga correctamente con identidad Blue Team y sin errores de consola", async ({
    page,
  }) => {
    const pageErrors: string[] = [];
    page.on("pageerror", (err) => pageErrors.push(err.message));

    await page.goto("/");

    // Título y branding
    await expect(page).toHaveTitle(/Blue Team/i);

    // Comprobar que no se lanzaron errores de ejecución JS no capturados
    expect(pageErrors).toEqual([]);

    // Botón o enlace de acceso visible
    const loginLink = page.getByRole("link", {
      name: /ingresar a la plataforma|iniciar sesión/i,
    });
    await expect(loginLink.first()).toBeVisible();
  });

  test("la navegación pública desde la portada conduce a la página de login", async ({
    page,
  }) => {
    await page.goto("/");
    const loginLink = page.getByRole("link", {
      name: /ingresar a la plataforma|iniciar sesión/i,
    });
    await loginLink.first().click();

    await expect(page).toHaveURL(/\/login$/);
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('input[name="password"]')).toBeVisible();
    await expect(
      page.getByRole("button", { name: /ingresar a la plataforma/i }),
    ).toBeVisible();
  });

  test("el endpoint de API /api/health responde con estado y contrato JSON válido", async ({
    request,
  }) => {
    const response = await request.get("/api/health");
    expect([200, 503]).toContain(response.status());
    expect(response.headers()["content-type"]).toMatch(/application\/json/);

    const data = await response.json();
    expect(data.status).toMatch(/^(online|offline)$/);
    expect(data.source).toBeTruthy();
  });
});
