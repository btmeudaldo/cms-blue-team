import { expect, test, type Page } from "@playwright/test";
import { randomUUID } from "node:crypto";
import { readFileSync } from "node:fs";
import { createClient } from "@supabase/supabase-js";
const config = JSON.parse(readFileSync(".vercel/local-supabase.json", "utf8"));
const fixtures = JSON.parse(
  readFileSync(".vercel/academic-audit-fixture.json", "utf8"),
);
const backend = new URL(config.API_URL);
if (
  config._project_id !== "quiz-validation" ||
  backend.port !== "55321" ||
  !["localhost", "127.0.0.1"].includes(backend.hostname)
)
  throw new Error("Local backend required");
const authOptions = {
  auth: { persistSession: false, autoRefreshToken: false },
};
async function login(page: Page, account: { email: string; password: string }) {
  await page.goto("/login");
  await page.locator('input[name="email"]').fill(account.email);
  await page.locator('input[name="password"]').fill(account.password);
  await page.getByRole("button", { name: /ingresar a la plataforma/i }).click();
  await expect(page).toHaveURL(/\/courses$/);
}
test("administrator filters real changes and registers an escaped persisted incident", async ({
  page,
}, testInfo) => {
  test.setTimeout(60000);
  const fixture = fixtures[testInfo.project.name];
  const admin = createClient(config.API_URL, config.ANON_KEY, authOptions);
  const signed = await admin.auth.signInWithPassword(fixture.admin);
  expect(signed.error).toBeNull();
  const initial = await admin
    .from("lessons")
    .update({ min_seconds: 30 })
    .eq("id", fixture.lessonId);
  expect(initial.error).toBeNull();
  const changed = await admin
    .from("lessons")
    .update({ min_seconds: 45 })
    .eq("id", fixture.lessonId);
  expect(changed.error).toBeNull();
  await login(page, fixture.admin);
  await page.goto("/admin/audit");
  await expect(
    page.getByRole("heading", { name: "Historial académico", exact: true }),
  ).toBeVisible();
  await page.getByLabel("Curso (UUID)", { exact: true }).fill(fixture.courseId);
  await page
    .getByLabel("Tipo de registro", { exact: true })
    .selectOption("lessons");
  await page.getByRole("button", { name: "Filtrar", exact: true }).click();
  await expect(page).toHaveURL(new RegExp(fixture.courseId));
  await expect(
    page.getByText(fixture.lessonId, { exact: false }).first(),
  ).toBeVisible();
  await expect(
    page.getByText(fixture.admin.id, { exact: false }).first(),
  ).toBeVisible();
  await page.screenshot({
    path: testInfo.outputPath("preview_screenshot-academic-audit-filter.png"),
    fullPage: true,
  });
  const description = `Incidencia ${testInfo.project.name} ${randomUUID()} <b>texto literal</b>`;
  await page
    .getByLabel("Curso de la incidencia", { exact: true })
    .fill(fixture.courseId);
  await page.getByLabel("Categoría", { exact: true }).selectOption("technical");
  await page.getByLabel("Descripción", { exact: true }).fill(description);
  await page
    .getByRole("button", { name: "Registrar incidencia", exact: true })
    .click();
  await expect(page.getByRole("status")).toContainText(
    "Incidencia registrada.",
  );
  const stored = await admin
    .from("academic_audit_events")
    .select("*")
    .eq("course_id", fixture.courseId)
    .eq("operation", "REPORT");
  expect(stored.error).toBeNull();
  const event = stored.data?.find(
    (row) => row.after_data?.description === description,
  );
  expect(event).toBeTruthy();
  expect(event.actor_id).toBe(fixture.admin.id);
  await page
    .getByLabel("Tipo de registro", { exact: true })
    .selectOption("incidents");
  await page.getByRole("button", { name: "Filtrar", exact: true }).click();
  await expect(
    page.getByText(description, { exact: false }).first(),
  ).toBeVisible();
  await expect(page.locator("b", { hasText: "texto literal" })).toHaveCount(0);
  await page.screenshot({
    path: testInfo.outputPath("preview_screenshot-academic-audit-incident.png"),
    fullPage: true,
  });
});
for (const role of ["instructor", "student"])
  test(`${role} cannot open administrative audit history`, async ({
    page,
  }, testInfo) => {
    const fixture = fixtures[testInfo.project.name];
    await login(page, fixture[role]);
    await page.goto("/admin/audit");
    await expect(page).toHaveURL(/\/courses$/);
    await expect(
      page.getByRole("heading", { name: "Historial académico", exact: true }),
    ).toHaveCount(0);
  });
