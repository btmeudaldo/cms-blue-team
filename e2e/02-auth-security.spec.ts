import { expect, test } from "@playwright/test";
import { signInAsAdmin, signInAsStudent, signOut } from "./auth-helpers";

test.describe("02: Autenticación, Roles y Seguridad", () => {
  test("rechaza credenciales incorrectas con advertencia visible sin abandonar el login", async ({
    page,
  }) => {
    await page.goto("/login");
    await page.locator('input[name="email"]').fill("no-existe@blueteam.com");
    await page.locator('input[name="password"]').fill("clave-incorrecta-123");
    await page
      .getByRole("button", { name: /ingresar a la plataforma/i })
      .click();

    await expect(page).toHaveURL(/\/login$/);
    await expect(page.getByText(/credenciales|inválidas/i)).toBeVisible();
  });

  const protectedRoutes = [
    "/courses",
    "/admin",
    "/admin/courses",
    "/admin/users",
    "/admin/progress",
    "/quizzes",
  ];

  for (const route of protectedRoutes) {
    test(`usuario no autenticado es redirigido al login al acceder a ${route}`, async ({
      page,
    }) => {
      await page.goto(route);
      await expect(page).toHaveURL(/\/login$/);
      await expect(
        page.getByRole("button", { name: /ingresar a la plataforma/i }),
      ).toBeVisible();
    });
  }

  test("cookies demo falsificadas no permiten evadir la autenticación en /admin ni /courses", async ({
    page,
    context,
    baseURL,
  }) => {
    await context.addCookies([
      { name: "demo_role", value: "admin", url: baseURL! },
      { name: "demo_email", value: "admin@blueteam.com", url: baseURL! },
    ]);
    await page.goto("/admin");
    await expect(page).toHaveURL(/\/login$/);

    await page.goto("/courses");
    await expect(page).toHaveURL(/\/login$/);
  });

  test("el alumno inicia sesión correctamente y visualiza el campus", async ({
    page,
  }) => {
    await signInAsStudent(page);
    await expect(page).toHaveURL(/\/courses$/);
    await expect(page.getByTitle("Cerrar sesión")).toBeVisible();
  });

  test("un alumno matriculado no tiene permiso para ingresar a rutas de administración", async ({
    page,
  }) => {
    await signInAsStudent(page);
    await page.goto("/admin");
    await expect(page).toHaveURL(/\/courses$/);

    await page.goto("/admin/courses");
    await expect(page).toHaveURL(/\/courses$/);

    await page.goto("/admin/users");
    await expect(page).toHaveURL(/\/courses$/);
  });

  test("el alumno puede cerrar sesión y el sistema invalida el acceso", async ({
    page,
  }) => {
    await signInAsStudent(page);
    await signOut(page);
    await expect(page).toHaveURL(/\/login$/);

    // Intentar volver a /courses tras logout debe rebotar al login
    await page.goto("/courses");
    await expect(page).toHaveURL(/\/login$/);
  });

  test("el administrador inicia sesión y tiene acceso garantizado al panel administrativo", async ({
    page,
  }) => {
    await signInAsAdmin(page);
    await page.goto("/admin");
    await expect(page).toHaveURL(/\/admin$/);
    await expect(
      page.getByRole("heading", { name: /gestión general/i }),
    ).toBeVisible();
  });
});
