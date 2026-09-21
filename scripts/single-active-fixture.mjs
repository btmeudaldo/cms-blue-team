import assert from "node:assert/strict";
import { randomUUID } from "node:crypto";
import { readFile, writeFile } from "node:fs/promises";
import { createClient } from "@supabase/supabase-js";
const config = JSON.parse(
  await readFile(".vercel/local-supabase.json", "utf8"),
);
const target = new URL(config.API_URL);
assert.equal(config._project_id, "quiz-validation");
assert.equal(target.port, "55321");
assert.ok(["localhost", "127.0.0.1"].includes(target.hostname));
const options = { auth: { persistSession: false, autoRefreshToken: false } };
const service = createClient(config.API_URL, config.SERVICE_ROLE_KEY, options);
function success(result, label) {
  assert.equal(
    result.error ?? null,
    null,
    `${label}: ${result.error?.message ?? ""}`,
  );
  return result.data;
}
const fixtures = {};
for (const project of ["chromium", "mobile"]) {
  const suffix = randomUUID(),
    password = `Fixture-${randomUUID()}!`;
  const accounts = {};
  for (const role of ["admin", "student"]) {
    const email = `single-active-${role}-${suffix}@example.test`;
    const user = success(
      await service.auth.admin.createUser({
        email,
        password,
        email_confirm: true,
      }),
      "create user",
    ).user;
    success(
      await service
        .from("profiles")
        .update({ role, email, full_name: `Lectura única ${project} ${role}` })
        .eq("id", user.id),
      "profile",
    );
    accounts[role] = { id: user.id, email, password };
  }
  const courseId = randomUUID(),
    lessonA = randomUUID(),
    lessonB = randomUUID(),
    quizId = randomUUID();
  success(
    await service.from("courses").insert({
      id: courseId,
      title: `Lectura única ${project}`,
      slug: `single-active-${suffix}`,
      created_by: accounts.admin.id,
    }),
    "course",
  );
  for (const [index, id] of [lessonA, lessonB].entries())
    success(
      await service.from("lessons").insert({
        id,
        course_id: courseId,
        title: `Lectura ${index + 1}`,
        slug: `single-active-${id}`,
        content_html:
          "<h2>Una sesión de lectura activa</h2><p>Registro sintético para verificar el cambio entre dos dispositivos y separar lectura de examen.</p>",
        lesson_order: index + 1,
        sequence_order: index + 1,
        min_seconds: 120,
      }),
      "lesson",
    );
  success(
    await service
      .from("course_enrollments")
      .insert({ user_id: accounts.student.id, course_id: courseId }),
    "enrollment",
  );
  success(
    await service.from("quizzes").insert({
      id: quizId,
      course_id: courseId,
      lesson_id: lessonA,
      lesson_slug: `single-active-${lessonA}`,
      title: "Evaluación independiente de lectura",
      min_pass_score_percentage: 70,
      questions: [
        {
          id: "q1",
          question: "Pregunta sintética",
          options: ["A", "B"],
          correctAnswerIndex: 0,
        },
      ],
    }),
    "quiz",
  );
  const student = createClient(config.API_URL, config.ANON_KEY, options);
  success(
    await student.auth.signInWithPassword({
      email: accounts.student.email,
      password,
    }),
    "login",
  );
  const attempt = success(
    await student.rpc("start_quiz_attempt", { p_quiz_id: quizId }),
    "start quiz",
  );
  const result = success(
    await student.rpc("submit_quiz_attempt", {
      p_attempt_id: attempt.attempt_id,
      p_answers: { q1: 0 },
    }),
    "submit quiz",
  );
  assert.equal(result.passed, true);
  fixtures[project] = {
    ...accounts.student,
    courseId,
    lessonA,
    lessonB,
    quizId,
  };
}
await writeFile(".vercel/single-active-fixture.json", JSON.stringify(fixtures));
console.log("Local single-active fixtures and real graded attempts created.");
