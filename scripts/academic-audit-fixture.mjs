import assert from "node:assert/strict";
import { randomUUID } from "node:crypto";
import { readFile, writeFile } from "node:fs/promises";
import { createClient } from "@supabase/supabase-js";
import { pathToFileURL } from "node:url";
import { resolve } from "node:path";
export const config = JSON.parse(
  await readFile(".vercel/local-supabase.json", "utf8"),
);
const target = new URL(config.API_URL);
assert.equal(config._project_id, "quiz-validation");
assert.equal(target.port, "55321");
assert.ok(["localhost", "127.0.0.1"].includes(target.hostname));
export const options = {
  auth: { persistSession: false, autoRefreshToken: false },
};
export const service = createClient(
  config.API_URL,
  config.SERVICE_ROLE_KEY,
  options,
);
export function success(result, label) {
  assert.equal(
    result.error ?? null,
    null,
    `${label}: ${result.error?.message ?? ""}`,
  );
  return result.data;
}
export async function login(account) {
  const client = createClient(config.API_URL, config.ANON_KEY, options);
  success(
    await client.auth.signInWithPassword({
      email: account.email,
      password: account.password,
    }),
    "login",
  );
  return client;
}
export async function createAuditFixture(label) {
  const suffix = randomUUID();
  const accounts = {};
  for (const role of ["admin", "instructor", "student"]) {
    const email = `academic-audit-${role}-${suffix}@example.test`,
      password = `Fixture-${randomUUID()}!`;
    const user = success(
      await service.auth.admin.createUser({
        email,
        password,
        email_confirm: true,
      }),
      "user",
    ).user;
    success(
      await service
        .from("profiles")
        .update({ role, full_name: `${label} ${role}`, email })
        .eq("id", user.id),
      "profile",
    );
    accounts[role] = { id: user.id, email, password };
  }
  const courseId = randomUUID(),
    lessonId = randomUUID(),
    quizId = randomUUID();
  const courseTitle = `Auditoría ${label} ${suffix.slice(0, 8)}`;
  const admin = await login(accounts.admin);
  success(
    await admin
      .from("courses")
      .insert({
        id: courseId,
        title: courseTitle,
        slug: `audit-${courseId}`,
        created_by: accounts.instructor.id,
      }),
    "course",
  );
  success(
    await admin
      .from("lessons")
      .insert({
        id: lessonId,
        course_id: courseId,
        title: "Lección auditada",
        slug: `audit-${lessonId}`,
        content_html: "<p>Contenido sintético de auditoría</p>",
        lesson_order: 1,
        sequence_order: 1,
        min_seconds: 30,
      }),
    "lesson",
  );
  success(
    await admin
      .from("quizzes")
      .insert({
        id: quizId,
        course_id: courseId,
        lesson_id: lessonId,
        lesson_slug: `audit-${lessonId}`,
        title: "Evaluación auditada",
        min_pass_score_percentage: 70,
        questions: [
          {
            id: "q1",
            question: "Pregunta sintética",
            options: ["A", "B"],
            correctAnswerIndex: 0,
            explanation: "AUDIT_SECRET_ANSWER",
          },
        ],
      }),
    "quiz",
  );
  return { ...accounts, courseId, courseTitle, lessonId, quizId };
}
if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(resolve(process.argv[1])).href
) {
  const fixtures = {};
  for (const project of ["chromium", "mobile"])
    fixtures[project] = await createAuditFixture(project);
  await writeFile(
    ".vercel/academic-audit-fixture.json",
    JSON.stringify(fixtures),
  );
  console.log(
    "Local audit fixtures created; credentials remain in ignored .vercel directory.",
  );
}
