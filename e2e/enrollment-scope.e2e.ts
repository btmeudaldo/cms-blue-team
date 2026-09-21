import { expect, test } from "@playwright/test";
import { readFileSync } from "node:fs";
import { createClient } from "@supabase/supabase-js";
const config = JSON.parse(readFileSync(".vercel/local-supabase.json", "utf8"));
const fixtures = JSON.parse(
  readFileSync(".vercel/enrollment-scope-fixture.json", "utf8"),
);
const backend = new URL(config.API_URL);
if (
  config._project_id !== "quiz-validation" ||
  backend.port !== "55321" ||
  !["localhost", "127.0.0.1"].includes(backend.hostname)
)
  throw new Error("Local backend required");
const service = createClient(config.API_URL, config.SERVICE_ROLE_KEY, {
  auth: { persistSession: false, autoRefreshToken: false },
});
for (const role of ["instructor", "admin"]) {
  test(`${role} saves only permitted enrollments and reopens persisted selection`, async ({
    page,
  }, testInfo) => {
    test.setTimeout(90000);
    const fixture = fixtures[testInfo.project.name];
    const account = fixture[role];
    const outside = fixture.courses.outside,
      owned = fixture.courses.owned,
      assigned = fixture.courses.assigned;
    const reset = await service
      .from("course_enrollments")
      .delete()
      .eq("user_id", fixture.student.id);
    expect(reset.error).toBeNull();
    const seed = await service
      .from("course_enrollments")
      .insert({ user_id: fixture.student.id, course_id: outside.id });
    expect(seed.error).toBeNull();
    await page.goto("/login");
    await page.locator('input[name="email"]').fill(account.email);
    await page.locator('input[name="password"]').fill(account.password);
    await page
      .getByRole("button", { name: /ingresar a la plataforma/i })
      .click();
    await expect(page).not.toHaveURL(/\/login/);
    await page.goto("/admin/users");
    const search = page.getByPlaceholder(
      "Buscar por nombre de alumno o correo electrónico...",
    );
    await search.fill(fixture.student.email);
    const open = async () => {
      await page.getByRole("button", { name: /Modificar/ }).click();
      await expect(
        page.getByRole("heading", {
          name: "Gestión de Matrículas Aeronáuticas",
        }),
      ).toBeVisible();
    };
    await open();
    await expect(
      page.getByText(
        "Solo se muestran y modifican los cursos que puedes gestionar.",
      ),
    ).toBeVisible();
    const ownCheckbox = page.getByRole("checkbox", {
      name: new RegExp(owned.id),
    });
    const assignedCheckbox = page.getByRole("checkbox", {
      name: new RegExp(assigned.id),
    });
    await expect(ownCheckbox).toBeVisible();
    await expect(assignedCheckbox).toBeVisible();
    if (role === "instructor") {
      await expect(page.getByRole("checkbox")).toHaveCount(2);
      await expect(page.getByText(outside.title, { exact: true })).toHaveCount(
        0,
      );
    } else {
      await expect(
        page.getByRole("checkbox", { name: new RegExp(outside.id) }),
      ).toBeChecked();
    }
    await ownCheckbox.check();
    await assignedCheckbox.check();
    if (role === "admin")
      await page
        .getByRole("checkbox", { name: new RegExp(outside.id) })
        .uncheck();
    await page
      .getByRole("button", { name: "Guardar Matrículas", exact: true })
      .click();
    await expect(
      page.getByRole("heading", { name: "Gestión de Matrículas Aeronáuticas" }),
    ).toHaveCount(0);
    const stored = await service
      .from("course_enrollments")
      .select("course_id")
      .eq("user_id", fixture.student.id);
    expect(stored.error).toBeNull();
    expect(stored.data?.map((row) => row.course_id).sort()).toEqual(
      [
        owned.id,
        assigned.id,
        ...(role === "instructor" ? [outside.id] : []),
      ].sort(),
    );
    await page.reload();
    await search.fill(fixture.student.email);
    await open();
    await expect(ownCheckbox).toBeChecked();
    await expect(assignedCheckbox).toBeChecked();
    if (role === "admin")
      await expect(
        page.getByRole("checkbox", { name: new RegExp(outside.id) }),
      ).not.toBeChecked();
    await page.screenshot({
      path: testInfo.outputPath(`preview_screenshot-enrollment-${role}.png`),
      fullPage: true,
    });
  });
}
