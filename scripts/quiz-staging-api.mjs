import assert from "node:assert/strict";
import { randomUUID } from "node:crypto";
import { readFile, writeFile } from "node:fs/promises";
import { createClient } from "@supabase/supabase-js";

const config = JSON.parse(
  await readFile(".vercel/local-supabase.json", "utf8"),
);
const url = new URL(config.API_URL);
assert.equal(
  config._project_id,
  "quiz-validation",
  "Isolated project required",
);
assert.equal(url.port, "55321", "Isolated API port required");
assert.ok(
  ["localhost", "127.0.0.1"].includes(url.hostname),
  "Local Supabase required",
);
assert.ok(
  config.ANON_KEY && config.SERVICE_ROLE_KEY,
  "Local API keys required",
);
const options = { auth: { persistSession: false, autoRefreshToken: false } };
const service = createClient(url.href, config.SERVICE_ROLE_KEY, options);
const anon = createClient(url.href, config.ANON_KEY, options);
const suffix = randomUUID();
const password = `T3st!${randomUUID()}`;
let checks = 0;
function verified(label) {
  checks += 1;
  console.log(`ok ${checks} - ${label}`);
}
function success(result, label) {
  assert.equal(
    result.error ?? null,
    null,
    `${label}: ${result.error?.message ?? ""}`,
  );
  return result.data;
}
function denied(result, label) {
  assert.ok(result.error, label);
  verified(label);
}
async function user(name, role) {
  const email = `${name}-${suffix}@staging.example.test`;
  const data = success(
    await service.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
    }),
    `create ${name}`,
  );
  success(
    await service
      .from("profiles")
      .upsert({ id: data.user.id, email, full_name: `Staging ${name}`, role }),
    `profile ${name}`,
  );
  const client = createClient(url.href, config.ANON_KEY, options);
  success(
    await client.auth.signInWithPassword({ email, password }),
    `login ${name}`,
  );
  return { id: data.user.id, email, client };
}
const admin = await user("admin", "admin");
const editor = await user("editor", "instructor");
const student = await user("api-student", "student");
const uiStudent = await user("ui-student", "student");
const outsider = await user("outsider", "instructor");
verified("real Auth login for five isolated fixture accounts");
const course = randomUUID(),
  lesson = randomUUID(),
  quiz = randomUUID();
const questions = [
  {
    id: "q1",
    question: "Staging: primera pregunta",
    options: ["Primera opción", "Segunda opción"],
    correctAnswerIndex: 0,
    explanation: "STAGING_SECRET_ONE",
  },
  {
    id: "q2",
    question: "Staging: segunda pregunta",
    options: ["Primera opción", "Segunda opción"],
    correctAnswerIndex: 1,
    explanation: "STAGING_SECRET_TWO",
  },
];
success(
  await service.from("courses").insert({
    id: course,
    title: "Staging examen seguro",
    slug: `staging-${suffix}`,
    created_by: admin.id,
  }),
  "course",
);
success(
  await service.from("lessons").insert({
    id: lesson,
    course_id: course,
    title: "Lección staging",
    content_html: "<p>Contenido sintético</p>",
    lesson_order: 1,
    sequence_order: 1,
    slug: `lesson-${suffix}`,
    min_seconds: 0,
  }),
  "lesson",
);
success(
  await service.from("course_enrollments").insert(
    [student, uiStudent].map((actor) => ({
      user_id: actor.id,
      course_id: course,
    })),
  ),
  "enrollments",
);
success(
  await service
    .from("course_editors")
    .insert({ user_id: editor.id, course_id: course, assigned_by: admin.id }),
  "editor assignment",
);
success(
  await service.from("quizzes").insert({
    id: quiz,
    course_id: course,
    lesson_id: lesson,
    lesson_slug: `lesson-${suffix}`,
    title: "Examen staging verificable",
    questions,
    min_pass_score_percentage: 70,
  }),
  "quiz",
);
await writeFile(
  ".vercel/quiz-staging-fixture.json",
  JSON.stringify(
    {
      E2E_STUDENT_EMAIL: uiStudent.email,
      E2E_STUDENT_PASSWORD: password,
      E2E_QUIZ_ID: quiz,
      E2E_EXPECTED_SCORE: "50",
      E2E_STAGING_SUPABASE_URL: url.href,
      fixture_course_id: course,
      fixture_user_ids: [admin, editor, student, uiStudent, outsider].map(
        (actor) => actor.id,
      ),
    },
    null,
    2,
  ),
);
denied(
  await anon.from("quizzes").select("*").eq("id", quiz),
  "anonymous cannot read bank",
);
assert.deepEqual(
  success(
    await student.client.from("quizzes").select("*").eq("id", quiz),
    "student bank",
  ),
  [],
);
verified("student cannot read raw bank");
const catalogArgs = { p_quiz_id: quiz, p_lesson_id: null };
const catalog = success(
  await student.client.rpc("list_available_quizzes", catalogArgs),
  "catalog",
);
assert.equal(catalog.length, 1);
assert.doesNotMatch(
  JSON.stringify(catalog),
  /correctAnswerIndex|explanation|STAGING_SECRET/,
);
verified("student catalog exposes safe fields only");
assert.deepEqual(
  success(
    await outsider.client.rpc("list_available_quizzes", catalogArgs),
    "outsider catalog",
  ),
  [],
);
const start = (actor) =>
  actor.client.rpc("start_quiz_attempt", { p_quiz_id: quiz });
const submit = (actor, id, answers) =>
  actor.client.rpc("submit_quiz_attempt", {
    p_attempt_id: id,
    p_answers: answers,
  });
denied(await start(outsider), "unassigned outsider cannot start");
const started = success(await start(student), "start");
assert.doesNotMatch(
  JSON.stringify(started),
  /correctAnswerIndex|explanation|STAGING_SECRET/,
);
denied(
  await submit(uiStudent, started.attempt_id, { q1: 0, q2: 0 }),
  "attempt ownership enforced",
);
denied(
  await student.client.from("quiz_attempts").insert({
    id: randomUUID(),
    user_id: student.id,
    quiz_id: quiz,
    score_percentage: 100,
    correct_count: 2,
    total_questions: 2,
    passed: true,
    elapsed_seconds: 0,
  }),
  "direct grade insertion rejected",
);
success(
  await editor.client
    .from("quizzes")
    .update({
      questions: questions.map((question) => ({
        ...question,
        correctAnswerIndex: 0,
      })),
    })
    .eq("id", quiz)
    .select()
    .single(),
  "assigned editor updates bank",
);
const result = success(
  await submit(student, started.attempt_id, { q1: 0, q2: 0 }),
  "submit",
);
assert.equal(result.score_percentage, 50);
assert.equal(result.correct_count, 1);
assert.equal(result.passed, false);
assert.equal(result.grading_version, "server-v1");
assert.ok(
  result.elapsed_seconds >= 0 && result.started_at && result.completed_at,
);
verified("server grades original snapshot and records server times");
success(
  await editor.client
    .from("quizzes")
    .update({ questions })
    .eq("id", quiz)
    .select()
    .single(),
  "restore fixture bank",
);
assert.deepEqual(
  success(
    await submit(student, started.attempt_id, { q1: 0, q2: 0 }),
    "same retry",
  ),
  result,
);
verified("identical retry is idempotent");
denied(
  await submit(student, started.attempt_id, { q1: 0, q2: 1 }),
  "different answers cannot overwrite closed attempt",
);
denied(
  await student.client
    .from("quiz_attempts")
    .update({ score_percentage: 100, passed: true })
    .eq("id", result.id),
  "direct grade update rejected",
);
const concurrent = success(await start(student), "concurrent start");
const deliveries = await Promise.all([
  submit(student, concurrent.attempt_id, { q1: 0, q2: 0 }),
  submit(student, concurrent.attempt_id, { q1: 0, q2: 1 }),
]);
assert.equal(deliveries.filter((delivery) => !delivery.error).length, 1);
assert.equal(
  success(
    await student.client
      .from("quiz_attempts")
      .select("id")
      .eq("id", concurrent.attempt_id),
    "concurrent count",
  ).length,
  1,
);
verified("simultaneous different deliveries produce one immutable result");
for (const actor of [admin, editor]) {
  assert.equal(
    success(
      await actor.client.from("quizzes").select("id").eq("id", quiz),
      "staff bank",
    ).length,
    1,
  );
  assert.equal(
    success(
      await actor.client.from("quiz_attempts").select("id").eq("id", result.id),
      "staff result",
    ).length,
    1,
  );
}
assert.deepEqual(
  success(
    await outsider.client.from("quizzes").select("id").eq("id", quiz),
    "outsider raw",
  ),
  [],
);
assert.deepEqual(
  success(
    await outsider.client
      .from("quiz_attempts")
      .select("id")
      .eq("id", result.id),
    "outsider result",
  ),
  [],
);
assert.deepEqual(
  success(
    await uiStudent.client
      .from("quiz_attempts")
      .select("id")
      .eq("id", result.id),
    "other student result",
  ),
  [],
);
verified("staff scope and student result isolation enforced through REST");
console.log(
  `${checks} local Auth/PostgREST checks passed. UI fixture saved in ignored .vercel directory.`,
);
