import assert from "node:assert/strict";
import { randomUUID } from "node:crypto";
import { readFile, writeFile } from "node:fs/promises";
import { createClient } from "@supabase/supabase-js";

const config = JSON.parse(
  await readFile(".vercel/local-supabase.json", "utf8"),
);
const source = JSON.parse(
  await readFile(".vercel/quiz-staging-fixture.json", "utf8"),
);
const url = new URL(config.API_URL);
assert.equal(config._project_id, "quiz-validation");
assert.equal(url.port, "55321");
assert.ok(["localhost", "127.0.0.1"].includes(url.hostname));
const client = createClient(url.href, config.SERVICE_ROLE_KEY, {
  auth: { persistSession: false, autoRefreshToken: false },
});
function success(result, label) {
  assert.equal(
    result.error ?? null,
    null,
    `${label}: ${result.error?.message ?? ""}`,
  );
  return result.data;
}
const adminId = source.fixture_user_ids[0];
const studentId = source.fixture_user_ids[2];
const admin = success(
  await client.auth.admin.getUserById(adminId),
  "admin fixture",
).user;
const courseId = randomUUID(),
  lessonId = randomUUID();
const courseTitle = `Conservación académica ${courseId.slice(0, 8)}`;
const lessonTitle = "Lección con expediente protegido";
success(
  await client.from("courses").insert({
    id: courseId,
    title: courseTitle,
    slug: `preservation-${courseId}`,
    created_by: adminId,
  }),
  "course fixture",
);
success(
  await client.from("lessons").insert({
    id: lessonId,
    course_id: courseId,
    title: lessonTitle,
    slug: `preservation-${lessonId}`,
    content_html: "<p>Evidencia sintética de conservación</p>",
    lesson_order: 1,
    sequence_order: 1,
    min_seconds: 0,
  }),
  "lesson fixture",
);
success(
  await client
    .from("course_enrollments")
    .insert({ user_id: studentId, course_id: courseId }),
  "enrollment fixture",
);
success(
  await client.from("user_lesson_progress").insert({
    user_id: studentId,
    lesson_id: lessonId,
    started_at: new Date().toISOString(),
    is_completed: false,
  }),
  "academic progress fixture",
);
await writeFile(
  ".vercel/academic-preservation-fixture.json",
  JSON.stringify(
    {
      E2E_ADMIN_EMAIL: admin.email,
      E2E_ADMIN_PASSWORD: source.E2E_STUDENT_PASSWORD,
      E2E_PRESERVATION_COURSE_ID: courseId,
      E2E_PRESERVATION_LESSON_ID: lessonId,
      E2E_PRESERVATION_COURSE_TITLE: courseTitle,
      E2E_PRESERVATION_LESSON_TITLE: lessonTitle,
      E2E_STAGING_SUPABASE_URL: url.href,
    },
    null,
    2,
  ),
);
console.log(
  "Local preservation fixture created; credentials saved only in ignored .vercel directory.",
);
