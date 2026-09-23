import { expect, test } from "@playwright/test";
import { signInAsStudent } from "./auth-helpers";

test.describe("03: Experiencia del Alumno y Control de Tiempo", () => {
  test("el alumno visualiza el catálogo de cursos y la información de progreso", async ({
    page,
  }) => {
    await signInAsStudent(page);
    await expect(page).toHaveURL(/\/courses$/);

    // Bienvenida y rol de alumno
    await expect(
      page.getByText(/portal del alumno|bienvenido/i).first(),
    ).toBeVisible();

    // Comprobar presencia de la sección de cursos
    await expect(
      page.getByRole("heading", { name: /mis cursos|cursos disponibles/i }),
    ).toBeVisible();

    // Al menos un curso listado o contenedor de catálogo
    const courseCards = page.locator("a[href^='/courses/']");
    await expect(courseCards.first()).toBeVisible();
  });

  test("el alumno puede entrar al temario de un curso asignado", async ({
    page,
  }) => {
    await signInAsStudent(page);
    await expect(page).toHaveURL(/\/courses$/);

    // Navegar al primer curso disponible
    const firstCourseLink = page.locator("a[href^='/courses/']").first();
    const courseUrl = await firstCourseLink.getAttribute("href");
    expect(courseUrl).toBeTruthy();

    await firstCourseLink.click();
    await expect(page).toHaveURL(new RegExp(courseUrl!));

    // Comprobar que carga el temario y lecciones
    await expect(
      page.getByRole("heading", { name: /contenido del curso|curso de formación/i }).first(),
    ).toBeVisible();
  });

  test("el reproductor de lecciones activa el temporizador anticheating y bloquea el avance prematuro", async ({
    page,
  }) => {
    await signInAsStudent(page);
    await page.goto("/courses");

    // Buscar una lección dentro del primer curso
    const firstCourseLink = page.locator("a[href^='/courses/']").first();
    await firstCourseLink.click();

    const lessonLink = page.locator("a[href*='/lessons/']").first();
    const hasLesson = (await lessonLink.count()) > 0;

    if (hasLesson) {
      await lessonLink.click();
      await expect(page).toHaveURL(/\/lessons\/.+/);

      // Comprobar que carga el artículo con contenido de lección
      await expect(page.locator("article")).toBeVisible();

      // Comprobar dock de avance inferior
      const advanceDock = page.getByRole("region", {
        name: "Avance de lección",
      });
      await expect(advanceDock).toBeVisible();

      // El botón de avance no permite completar inmediatamente si hay temporizador pendiente
      const advanceButton = advanceDock.getByRole("button");
      await expect(advanceButton).toBeVisible();

      // Si la lección aún no estaba completada, el botón debe estar deshabilitado
      const isDisabled = await advanceButton.isDisabled();
      const buttonText = await advanceButton.textContent();
      if (!buttonText?.includes("✓")) {
        expect(isDisabled).toBe(true);
      }
    }
  });

  test("el alumno puede acceder a la sección de evaluaciones y quizzes", async ({
    page,
  }) => {
    await signInAsStudent(page);
    await page.goto("/quizzes");
    await expect(page).toHaveURL(/\/quizzes$/);

    // Encabezado de evaluaciones
    await expect(
      page.getByRole("heading", { name: /evaluaciones|exámenes|quizzes/i }).first(),
    ).toBeVisible();
  });
});
