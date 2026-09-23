import { expect, test } from "@playwright/test";
import { signInAsAdmin } from "./auth-helpers";

test.describe("04: Operaciones de Administración (CRUD, Matrículas, Auditoría y Progreso)", () => {
  test("el administrador visualiza las métricas y enlaces del panel de control", async ({
    page,
  }) => {
    await signInAsAdmin(page);
    await page.goto("/admin");

    // Encabezado principal del panel
    await expect(
      page.getByRole("heading", { name: /gestión general/i }),
    ).toBeVisible();

    // Métricas del sistema
    await expect(page.getByText(/cursos totales/i)).toBeVisible();
    await expect(page.getByText(/lecciones/i).first()).toBeVisible();

    // Enlaces de navegación rápida
    await expect(
      page.getByRole("link", { name: /ver vista de alumno/i }),
    ).toBeVisible();
  });

  test("ciclo de vida completo: creación de curso, edición, lección y eliminación limpia", async ({
    page,
  }) => {
    const suffix = Date.now();
    const courseTitle = `[E2E-TEST] Curso ${suffix}`;
    const updatedCourseTitle = `[E2E-TEST] Curso Actualizado ${suffix}`;
    const courseSlug = `e2e-curso-${suffix}`;
    const lessonTitle = `[E2E-TEST] Lección ${suffix}`;
    const lessonSlug = `e2e-leccion-${suffix}`;

    await signInAsAdmin(page);
    await page.goto("/admin/courses");

    // 1. Abrir formulario de creación de curso
    const openCreateBtn = page.getByRole("button", {
      name: /crear nuevo curso/i,
    });
    if (await openCreateBtn.isVisible()) {
      await openCreateBtn.click();
    }

    await page.locator('input[name="title"]').fill(courseTitle);
    await page.locator('input[name="slug"]').fill(courseSlug);
    await page
      .locator('textarea[name="description"]')
      .fill("Curso de verificación automatizada Playwright.");
    await page
      .getByRole("button", { name: /guardar y publicar curso/i })
      .click();

    // 2. Llegada a la vista de edición del curso creado
    await expect(page).toHaveURL(/\/admin\/courses\/.+/);

    // 3. Modificar título en ajustes del curso
    const settingsBtn = page.getByRole("button", { name: /ajustes del curso/i });
    if (await settingsBtn.isVisible()) {
      await settingsBtn.click();
    }

    const titleInput = page.locator('input[name="title"]');
    await expect(titleInput).toHaveValue(courseTitle);
    await titleInput.fill(updatedCourseTitle);
    await page
      .getByRole("button", { name: /guardar cambios del curso/i })
      .click();

    // 4. Crear una lección dentro del curso
    await page.getByRole("link", { name: /nueva lección/i }).first().click();
    await expect(page).toHaveURL(/\/lessons\/new$/);

    await page.locator('input[name="title"]').fill(lessonTitle);
    await page.locator('input[name="slug"]').fill(lessonSlug);
    const contentEditor = page.locator('[contenteditable="true"]');
    if (await contentEditor.isVisible()) {
      await contentEditor.click();
      await page.keyboard.type("Contenido de prueba automatizado.");
    }
    await page.getByRole("button", { name: /guardar lección/i }).click();

    // 5. Verificar que volvemos a la vista del curso y la lección aparece listada
    await expect(page).toHaveURL(/\/admin\/courses\/.+/);
    await expect(page.getByText(lessonTitle, { exact: true })).toBeVisible();

    // 6. Eliminar la lección creada
    const lessonDeleteBtn = page.getByTitle(/eliminar lección/i).first();
    if (await lessonDeleteBtn.isVisible()) {
      await lessonDeleteBtn.click();
      await expect(
        page.getByText(lessonTitle, { exact: true }),
      ).toHaveCount(0);
    }

    // 7. Volver al listado general de cursos y eliminar el curso de prueba
    await page.goto("/admin/courses");
    const courseCard = page.locator("div.rounded-2xl", {
      has: page.getByRole("heading", { name: updatedCourseTitle, exact: true }),
    });
    await expect(courseCard).toBeVisible();

    await courseCard.getByTitle("Eliminar curso").click();
    await expect(
      page.getByRole("heading", { name: updatedCourseTitle, exact: true }),
    ).toHaveCount(0);
  });

  test("el administrador gestiona la vista de matrículas y usuarios en /admin/users", async ({
    page,
  }) => {
    await signInAsAdmin(page);
    await page.goto("/admin/users");
    await expect(page).toHaveURL(/\/admin\/users$/);

    await expect(
      page.getByRole("heading", {
        name: /gestión de usuarios y asignaciones/i,
      }),
    ).toBeVisible();

    // Comprobar presencia de tabla o tarjetas de usuarios
    await expect(page.getByText(/alumnos|roles|usuarios/i).first()).toBeVisible();
  });

  test("el administrador consulta los expedientes y tiempos en /admin/progress", async ({
    page,
  }) => {
    await signInAsAdmin(page);
    await page.goto("/admin/progress");
    await expect(page).toHaveURL(/\/admin\/progress$/);

    await expect(
      page.getByRole("heading", {
        name: /expedientes de alumnos y tiempos anticheating/i,
      }),
    ).toBeVisible();
  });

  test("el administrador accede al historial académico y filtros de auditoría en /admin/audit", async ({
    page,
  }) => {
    await signInAsAdmin(page);
    await page.goto("/admin/audit");
    await expect(page).toHaveURL(/\/admin\/audit$/);

    await expect(
      page.getByRole("heading", { name: /historial académico/i }),
    ).toBeVisible();

    // Formulario de filtrado
    await expect(page.getByRole("button", { name: /filtrar/i })).toBeVisible();
  });
});
