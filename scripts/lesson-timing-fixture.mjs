import assert from "node:assert/strict";
import { randomUUID } from "node:crypto";
import { readFile, writeFile } from "node:fs/promises";
import { createClient } from "@supabase/supabase-js";
export const config = JSON.parse(
  await readFile(".vercel/local-supabase.json", "utf8"),
);
export const source = JSON.parse(
  await readFile(".vercel/quiz-staging-fixture.json", "utf8"),
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
export async function createFixture(label) {
  const studentId = source.fixture_user_ids[2];
  const user = success(
    await service.auth.admin.getUserById(studentId),
    "student",
  ).user;
  const courseId = randomUUID(),
    lessonId = randomUUID();
  success(
    await service.from("courses").insert({
      id: courseId,
      title: `Tiempo verificado ${label}`,
      slug: `timing-${courseId}`,
      created_by: source.fixture_user_ids[0],
    }),
    "course",
  );
  success(
    await service.from("lessons").insert({
      id: lessonId,
      course_id: courseId,
      title: "Lección temporal de prueba",
      slug: `timing-${lessonId}`,
      content_html:
        "<h2>Registro de aprendizaje</h2><p>Lección sintética para comprobar que el tiempo y la finalización se guardan en el servidor.</p>",
      lesson_order: 1,
      sequence_order: 1,
      min_seconds: 2,
    }),
    "lesson",
  );
  success(
    await service
      .from("course_enrollments")
      .insert({ user_id: studentId, course_id: courseId }),
    "enrollment",
  );
  return {
    courseId,
    lessonId,
    studentId,
    email: user.email,
    password: source.E2E_STUDENT_PASSWORD,
  };
}
if (process.argv.includes("--create")) {
  const fixtures = {};
  for (const project of ["chromium", "mobile"]) {
    fixtures[project] = {
      success: await createFixture(`${project} éxito`),
      failure: await createFixture(`${project} rechazo`),
    };
  }
  await writeFile(
    ".vercel/lesson-timing-fixture.json",
    JSON.stringify(fixtures),
  );
  console.log(
    "Local timing fixtures created; credentials stored only in ignored .vercel directory.",
  );
}
