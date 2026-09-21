import { expect, test } from "@playwright/test";

function requiredEnvironment(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`La prueba de staging requiere ${name}.`);
  return value;
}

test("staging: califica y conserva un intento real sin exponer el solucionario", async ({
  page,
}, testInfo) => {
  test.setTimeout(90_000);
  const email = requiredEnvironment("E2E_STUDENT_EMAIL");
  const password = requiredEnvironment("E2E_STUDENT_PASSWORD");
  const quizId = requiredEnvironment("E2E_QUIZ_ID");
  const expectedScore = Number(requiredEnvironment("E2E_EXPECTED_SCORE"));
  const backend = new URL(requiredEnvironment("E2E_STAGING_SUPABASE_URL"));
  expect(backend.hostname).not.toContain("wkxylgsauhruoopclfwm");
  expect(expectedScore).toBe(50);

  const payloadChecks: Promise<{
    body: string;
    method: string;
    url: string;
    status: number;
    error?: string;
  }>[] = [];
  page.on("response", (response) => {
    const contentType = response.headers()["content-type"] ?? "";
    const request = response.request();
    if (
      new URL(response.url()).origin !== new URL(page.url()).origin ||
      !/text\/html|text\/x-component|application\/json/.test(contentType) ||
      !["document", "fetch", "xhr"].includes(request.resourceType())
    )
      return;
    payloadChecks.push(
      response.text().then(
        (body) => ({
          body,
          method: request.method(),
          url: response.url(),
          status: response.status(),
        }),
        (error: Error) => ({
          body: "",
          method: request.method(),
          url: response.url(),
          status: response.status(),
          error: error.message,
        }),
      ),
    );
  });

  await page.goto("/login");
  await page.locator('input[name="email"]').fill(email);
  await page.locator('input[name="password"]').fill(password);
  await page.getByRole("button", { name: /ingresar a la plataforma/i }).click();
  await expect(page).toHaveURL(/\/courses$/);
  await Promise.all(payloadChecks);
  await page.goto(`/quizzes/${encodeURIComponent(quizId)}`);
  // A rerun creates another legitimate attempt, without deleting audit records.
  await page
    .getByRole("button", { name: /^(Iniciar examen|.*Reintentar Examen)$/i })
    .click();
  await expect(
    page.getByText("Pregunta 1 de 2", { exact: true }),
  ).toBeVisible();
  await page.locator('button[aria-pressed="false"]').first().click();
  await page.getByRole("button", { name: /Siguiente/ }).click();
  await expect(
    page.getByText("Pregunta 2 de 2", { exact: true }),
  ).toBeVisible();
  await page.locator('button[aria-pressed="false"]').first().click();
  await expect(
    page.getByText("Respondidas: 2 / 2", { exact: true }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Finalizar Examen y Enviar" }).click();

  const saved = page.getByText(
    "✓ Intento guardado y registrado en tu expediente",
    {
      exact: true,
    },
  );
  await expect(saved).toBeVisible();
  await expect(
    page.getByText(`${expectedScore}%`, { exact: true }),
  ).toBeVisible();
  await expect(page.getByText("1 / 2", { exact: true })).toBeVisible();
  const elapsed = await page.getByText(/^\d+m \d+s$/).innerText();
  expect(elapsed).toMatch(/^\d+m \d+s$/);
  // React can paint a result while its streamed action response is still open.
  // Drain it before navigation discards Chromium's response body.
  await Promise.all(payloadChecks);
  await page.reload();
  await expect(saved).toBeVisible();
  await expect(
    page.getByText(`${expectedScore}%`, { exact: true }),
  ).toBeVisible();
  await expect(page.getByText("1 / 2", { exact: true })).toBeVisible();
  await expect(page.getByText(elapsed, { exact: true })).toBeVisible();
  await page.screenshot({
    path: testInfo.outputPath("preview_screenshot-quiz-staging.png"),
    fullPage: true,
  });
  const payloads = await Promise.all(payloadChecks);
  expect(payloads.length).toBeGreaterThanOrEqual(3);
  for (const payload of payloads) {
    expect(
      payload.error,
      `${payload.method} ${payload.url} status=${payload.status}`,
    ).toBeUndefined();
    expect(
      payload.body,
      `Respuesta sin solucionario: ${payload.method}`,
    ).not.toMatch(/correctAnswerIndex|explanation/);
  }
});
