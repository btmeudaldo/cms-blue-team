import assert from "node:assert/strict";
import { randomUUID } from "node:crypto";
import { before, test } from "node:test";
import { createClient } from "@supabase/supabase-js";
import {
  createAuditFixture,
  login,
  config,
  options,
  success,
  service,
} from "./academic-audit-fixture.mjs";
let fixture, admin, instructor, student;
const events = async () =>
  success(
    await admin
      .from("academic_audit_events")
      .select("*")
      .eq("course_id", fixture.courseId)
      .order("id"),
    "events",
  );
const incident = (
  client,
  requestId,
  description = "Incidencia técnica sintética",
  courseId = fixture.courseId,
) =>
  client.rpc("report_academic_incident", {
    p_course_id: courseId,
    p_category: "technical",
    p_description: description,
    p_request_id: requestId,
  });
before(async () => {
  fixture = await createAuditFixture("Auth REST");
  admin = await login(fixture.admin);
  instructor = await login(fixture.instructor);
  student = await login(fixture.student);
});
test("real authenticated lesson changes record actor and before/after requirement", async () => {
  success(
    await admin
      .from("lessons")
      .update({ min_seconds: 45 })
      .eq("id", fixture.lessonId),
    "lesson update",
  );
  const event = (await events()).find(
    (row) =>
      row.operation === "UPDATE" &&
      row.entity_id === fixture.lessonId &&
      row.after_data?.min_seconds === 45,
  );
  assert.ok(event);
  assert.equal(event.actor_id, fixture.admin.id);
  assert.equal(event.actor_role, "admin");
  assert.equal(event.origin, "authenticated");
  assert.equal(event.before_data.min_seconds, 30);
  assert.ok(event.occurred_at);
});
test("enrollment changes record the affected learner and real actor", async () => {
  success(
    await admin.rpc("set_student_enrollments", {
      p_user_id: fixture.student.id,
      p_enrolled_course_ids: [fixture.courseId],
      p_scope_course_ids: [fixture.courseId],
    }),
    "enroll",
  );
  const event = (await events()).find(
    (row) =>
      row.operation === "INSERT" && row.subject_id === fixture.student.id,
  );
  assert.ok(event);
  assert.equal(event.actor_id, fixture.admin.id);
});
test("quiz threshold changes are audited without answers or explanations", async () => {
  success(
    await admin
      .from("quizzes")
      .update({ min_pass_score_percentage: 80 })
      .eq("id", fixture.quizId),
    "quiz update",
  );
  const event = (await events()).find(
    (row) => row.operation === "UPDATE" && row.entity_id === fixture.quizId,
  );
  assert.ok(event);
  assert.equal(event.before_data.min_pass_score_percentage, 70);
  assert.equal(event.after_data.min_pass_score_percentage, 80);
  assert.equal(event.actor_id, fixture.admin.id);
  const payload = JSON.stringify(await events());
  assert.ok(!payload.includes("AUDIT_SECRET_ANSWER"));
  assert.ok(!payload.includes("correctAnswerIndex"));
  assert.ok(!payload.includes("Pregunta sintética"));
  assert.ok(!payload.includes(fixture.admin.email));
});
test("students, instructors and anonymous clients cannot read audit history", async () => {
  for (const client of [
    student,
    instructor,
    createClient(config.API_URL, config.ANON_KEY, options),
  ]) {
    const result = await client
      .from("academic_audit_events")
      .select("id")
      .eq("course_id", fixture.courseId);
    assert.ok(result.error || result.data.length === 0);
  }
});
test("application administrator cannot insert, edit or delete audit events", async () => {
  const before = await events();
  const first = before[0];
  assert.ok(first);
  for (const result of [
    await admin.from("academic_audit_events").insert({
      entity_type: "incident",
      operation: "REPORT",
      after_data: { description: "forged" },
    }),
    await admin
      .from("academic_audit_events")
      .update({ actor_role: "forged" })
      .eq("id", first.id)
      .select(),
    await admin
      .from("academic_audit_events")
      .delete()
      .eq("id", first.id)
      .select(),
  ])
    assert.ok(result.error || result.data?.length === 0);
  assert.deepEqual(await events(), before);
});
test("authorized incident retry returns the same event and rejects conflicting reuse", async () => {
  const requestId = randomUUID();
  const id = success(await incident(instructor, requestId), "incident");
  assert.equal(success(await incident(instructor, requestId), "retry"), id);
  assert.ok((await incident(instructor, requestId, "Otra descripción")).error);
  const matches = (await events()).filter(
    (row) => row.request_id === requestId,
  );
  assert.equal(matches.length, 1);
  assert.equal(matches[0].actor_id, fixture.instructor.id);
  assert.equal(matches[0].operation, "REPORT");
});
test("students cannot submit incidents and instructors cannot use unrelated courses", async () => {
  assert.ok((await incident(student, randomUUID())).error);
  const courseId = randomUUID();
  success(
    await service.from("courses").insert({
      id: courseId,
      title: "Curso ajeno auditoría",
      slug: `audit-other-${courseId}`,
      created_by: fixture.admin.id,
    }),
    "outside course",
  );
  assert.ok(
    (await incident(instructor, randomUUID(), "Fuera de ámbito", courseId))
      .error,
  );
});
test("concurrent incident retries persist one event and return the same identifier", async () => {
  const requestId = randomUUID();
  const results = await Promise.all([
    incident(admin, requestId),
    incident(admin, requestId),
  ]);
  const identifiers = results.map((result) =>
    success(result, "concurrent incident"),
  );
  assert.equal(identifiers[0], identifiers[1]);
  const matches = (await events()).filter(
    (row) => row.request_id === requestId,
  );
  assert.equal(matches.length, 1);
  assert.ok(
    (await incident(admin, requestId, "Conflicting concurrent request")).error,
  );
});
