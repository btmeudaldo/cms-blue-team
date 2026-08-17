import { expect, test } from "@playwright/test";

const adminEmail = process.env.E2E_ADMIN_EMAIL;
const adminPassword = process.env.E2E_ADMIN_PASSWORD;
const studentEmail = process.env.E2E_STUDENT_EMAIL;
const studentPassword = process.env.E2E_STUDENT_PASSWORD;
const progressLessonPath = process.env.E2E_PROGRESS_LESSON_PATH;

test.describe("Supabase real: CRUD de lecciones", () => {
  test.skip(
    !adminEmail || !adminPassword,
    "Define E2E_ADMIN_EMAIL y E2E_ADMIN_PASSWORD para ejecutar contra Supabase real.",
  );

  test("crea, lee, actualiza y elimina una lección persistida", async ({
    page,
  }) => {
    const suffix = Date.now();
    const courseTitle = `Launch Course ${suffix}`;
    const courseSlug = `launch-course-${suffix}`;
    const lessonTitle = `Launch Lesson ${suffix}`;
    const lessonSlug = `launch-lesson-${suffix}`;

    await page.goto("/login");
    await page.locator('input[name="email"]').fill(adminEmail!);
    await page.locator('input[name="password"]').fill(adminPassword!);
    await page
      .getByRole("button", { name: /ingresar a la plataforma/i })
      .click();
    await expect(page).toHaveURL(/\/admin|\/courses/);

    await page.goto("/admin/courses");
    await page.locator('input[name="title"]').fill(courseTitle);
    await page.locator('input[name="slug"]').fill(courseSlug);
    await page
      .getByRole("button", { name: /guardar y publicar curso/i })
      .click();
    await expect(page).toHaveURL(/\/admin\/courses\/.+/);

    await page
      .getByRole("link", { name: /nueva lecci/i })
      .first()
      .click();
    await page.locator('input[name="title"]').fill(lessonTitle);
    await page.locator('input[name="slug"]').fill(lessonSlug);
    await page.locator('[contenteditable="true"]').click();
    await page.keyboard.type(
      "Contenido persistido para la prueba de lanzamiento.",
    );
    await page.getByRole("button", { name: /guardar lecci/i }).click();
    await expect(page).toHaveURL(/\/admin\/courses\/.+/);
    await expect(page.getByText(lessonTitle, { exact: true })).toBeVisible();

    await page.getByRole("link", { name: /editar contenido/i }).click();
    await page.locator('input[name="title"]').fill(`${lessonTitle} Updated`);
    await page.getByRole("button", { name: /guardar cambios/i }).click();
    await expect(page).toHaveURL(/\/admin\/courses\/.+/);
    await expect(
      page.getByText(`${lessonTitle} Updated`, { exact: true }),
    ).toBeVisible();

    await page.getByTitle(/eliminar lecci/i).click();
    await expect(
      page.getByText(`${lessonTitle} Updated`, { exact: true }),
    ).toHaveCount(0);
    await page.goto("/admin/courses");
    await page.getByTitle("Eliminar curso").last().click();
  });
});

test.describe("Supabase real: progreso y temporizador", () => {
  test.skip(
    !studentEmail || !studentPassword || !progressLessonPath,
    "Define E2E_STUDENT_EMAIL, E2E_STUDENT_PASSWORD y E2E_PROGRESS_LESSON_PATH para ejecutar progreso real.",
  );

  test("inicia la lección, mantiene el temporizador y bloquea el completado prematuro", async ({
    page,
  }) => {
    await page.goto("/login");
    await page.locator('input[name="email"]').fill(studentEmail!);
    await page.locator('input[name="password"]').fill(studentPassword!);
    await page
      .getByRole("button", { name: /ingresar a la plataforma/i })
      .click();
    await expect(page).toHaveURL(/\/courses/);

    await page.goto(progressLessonPath!);
    await expect(
      page.getByText(/tiempo mínimo|temporizador/i).first(),
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: /completar|siguiente|avanzar/i }),
    ).toBeDisabled();

    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await expect(
      page.getByRole("button", { name: /completar|siguiente|avanzar/i }),
    ).toBeDisabled();
  });
});
