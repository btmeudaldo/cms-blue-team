import assert from "node:assert/strict";
import { before, test } from "node:test";
import { randomUUID } from "node:crypto";
import { readFile } from "node:fs/promises";
import { createClient } from "@supabase/supabase-js";

const config = JSON.parse(
  await readFile(".vercel/local-supabase.json", "utf8"),
);
const fixture = JSON.parse(
  await readFile(".vercel/quiz-staging-fixture.json", "utf8"),
);
const url = new URL(config.API_URL);
assert.equal(config._project_id, "quiz-validation");
assert.equal(url.port, "55321");
assert.ok(["localhost", "127.0.0.1"].includes(url.hostname));
assert.ok(config.ANON_KEY && config.SERVICE_ROLE_KEY);
const options = { auth: { persistSession: false, autoRefreshToken: false } };
const service = createClient(url.href, config.SERVICE_ROLE_KEY, options);
const anon = createClient(url.href, config.ANON_KEY, options);
const [adminId, editorId, studentId, otherStudentId, outsiderId] =
  fixture.fixture_user_ids;
const courseA = fixture.fixture_course_id;
const courseB = randomUUID(),
  lessonB = randomUUID(),
  deleteLessonB = randomUUID();
let lessonA, admin, editor, student, otherStudent, outsider;
function success(result, label) {
  assert.equal(
    result.error ?? null,
    null,
    `${label}: ${result.error?.message ?? ""}`,
  );
  return result.data;
}
function blockedWrite(result, label) {
  if (result.error) {
    assert.equal(
      result.error.code,
      "42501",
      `${label}: ${result.error.message}`,
    );
    return;
  }
  assert.deepEqual(result.data, [], label);
}
async function login(id) {
  const data = success(
    await service.auth.admin.getUserById(id),
    "fixture user",
  );
  const client = createClient(url.href, config.ANON_KEY, options);
  success(
    await client.auth.signInWithPassword({
      email: data.user.email,
      password: fixture.E2E_STUDENT_PASSWORD,
    }),
    "fixture login",
  );
  return client;
}
function lessonRecord(id, course, order) {
  return {
    id,
    course_id: course,
    title: `Isolation ${id}`,
    content_html: "<p>Synthetic fixture</p>",
    lesson_order: order,
    sequence_order: order,
    min_seconds: 0,
    slug: `isolation-${id}`,
  };
}
before(async () => {
  [admin, editor, student, otherStudent, outsider] = await Promise.all(
    [adminId, editorId, studentId, otherStudentId, outsiderId].map(login),
  );
  const quizFixture = success(
    await service
      .from("quizzes")
      .select("lesson_id,course_id")
      .eq("id", fixture.E2E_QUIZ_ID)
      .single(),
    "fixture quiz",
  );
  assert.equal(quizFixture.course_id, courseA);
  lessonA = quizFixture.lesson_id;
  success(
    await service.from("courses").insert({
      id: courseB,
      title: "Isolation course B",
      slug: `isolation-${courseB}`,
      created_by: outsiderId,
    }),
    "course B",
  );
  success(
    await service
      .from("lessons")
      .insert([
        lessonRecord(lessonB, courseB, 1),
        lessonRecord(deleteLessonB, courseB, 2),
      ]),
    "lessons B",
  );
  for (const actor of [student, otherStudent]) {
    for (const operation of [
      "start_lesson",
      "heartbeat_lesson",
      "pause_lesson",
      "complete_lesson",
    ]) {
      success(
        await actor.rpc(operation, { p_lesson_id: lessonA }),
        `seed progress ${operation}`,
      );
    }
  }
});
test("student enrolled in A cannot read lesson B", async () => {
  assert.deepEqual(
    success(
      await student.from("lessons").select("id").eq("id", lessonB),
      "student B",
    ),
    [],
  );
});
test("assigned editor A cannot insert into B", async () => {
  blockedWrite(
    await editor
      .from("lessons")
      .insert(lessonRecord(randomUUID(), courseB, 3))
      .select("id"),
    "cross-course insertion must fail",
  );
});
test("assigned editor A cannot update B", async () => {
  blockedWrite(
    await editor
      .from("lessons")
      .update({ title: "Unauthorized cross-course edit" })
      .eq("id", lessonB)
      .select("id"),
    "cross-course update must fail",
  );
});
test("assigned editor A cannot delete synthetic lesson B", async () => {
  blockedWrite(
    await editor.from("lessons").delete().eq("id", deleteLessonB).select("id"),
    "cross-course deletion must fail",
  );
});
test("assigned editor can edit lesson A", async () => {
  const rows = success(
    await editor
      .from("lessons")
      .update({ min_seconds: 0 })
      .eq("id", lessonA)
      .select("id"),
    "legitimate edit",
  );
  assert.deepEqual(rows, [{ id: lessonA }]);
});
test("progress RPC start heartbeat pause complete persist own progress", async () => {
  for (const operation of [
    "start_lesson",
    "heartbeat_lesson",
    "pause_lesson",
    "complete_lesson",
  ]) {
    const progress = success(
      await student.rpc(operation, { p_lesson_id: lessonA }),
      operation,
    );
    assert.equal(progress.user_id, studentId);
    assert.equal(progress.lesson_id, lessonA);
    if (operation === "complete_lesson")
      assert.equal(progress.is_completed, true);
  }
});
test("assigned editor reads progress in A", async () => {
  const rows = success(
    await editor
      .from("user_lesson_progress")
      .select("user_id")
      .eq("lesson_id", lessonA)
      .eq("user_id", studentId),
    "editor progress",
  );
  assert.deepEqual(rows, [{ user_id: studentId }]);
});
test("unassigned instructor cannot read progress in A", async () => {
  assert.deepEqual(
    success(
      await outsider
        .from("user_lesson_progress")
        .select("user_id")
        .eq("lesson_id", lessonA),
      "outsider progress",
    ),
    [],
  );
});
test("student cannot read another student's progress", async () => {
  assert.deepEqual(
    success(
      await student
        .from("user_lesson_progress")
        .select("user_id")
        .eq("lesson_id", lessonA)
        .eq("user_id", otherStudentId),
      "other student's progress",
    ),
    [],
  );
});
for (const table of ["lessons", "user_lesson_progress"]) {
  test(`anonymous role has no table access to ${table}`, async () => {
    const result = await anon.from(table).select("*").limit(1);
    assert.ok(result.error, "Anonymous table grants must be revoked");
    assert.equal(result.error.code, "42501");
  });
}
test("staff retains global lesson catalog read", async () => {
  for (const actor of [admin, editor, outsider]) {
    const rows = success(
      await actor.from("lessons").select("id").in("id", [lessonA, lessonB]),
      "staff catalog",
    );
    assert.equal(rows.length, 2);
  }
});
