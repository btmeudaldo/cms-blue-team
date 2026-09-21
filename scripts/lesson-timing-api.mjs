import assert from "node:assert/strict";
import { before, test } from "node:test";
import { setTimeout } from "node:timers/promises";
import { createClient } from "@supabase/supabase-js";
import {
  config,
  source,
  options,
  service,
  success,
  createFixture,
} from "./lesson-timing-fixture.mjs";
let fixture, student, completed;
const operations = [
  "start_lesson",
  "resume_lesson",
  "heartbeat_lesson",
  "pause_lesson",
  "complete_lesson",
];
const rpc = (client, name) =>
  client.rpc(name, { p_lesson_id: fixture.lessonId });
before(async () => {
  fixture = await createFixture("Auth REST");
  student = createClient(config.API_URL, config.ANON_KEY, options);
  success(
    await student.auth.signInWithPassword({
      email: fixture.email,
      password: fixture.password,
    }),
    "login",
  );
});
test("anonymous cannot execute progress operations", async () => {
  const anon = createClient(config.API_URL, config.ANON_KEY, options);
  for (const operation of operations)
    assert.equal((await rpc(anon, operation)).error?.code, "42501");
});
test("enrolled student starts and premature completion is rejected", async () => {
  const started = success(await rpc(student, "start_lesson"), "start");
  assert.equal(started.user_id, fixture.studentId);
  assert.equal(started.active_seconds, 0);
  assert.equal(started.is_completed, false);
  assert.ok((await rpc(student, "complete_lesson")).error);
});
test("real elapsed time is credited and completed via authenticated REST", async () => {
  await setTimeout(2200);
  const heartbeat = success(
    await rpc(student, "heartbeat_lesson"),
    "heartbeat",
  );
  assert.ok(heartbeat.active_seconds >= 2 && heartbeat.active_seconds <= 15);
  completed = success(await rpc(student, "complete_lesson"), "complete");
  assert.equal(completed.is_completed, true);
  assert.ok(completed.completed_at);
});
test("all operations preserve the original completed record", async () => {
  for (const operation of operations)
    assert.deepEqual(
      success(await rpc(student, operation), operation),
      completed,
    );
});
test("student cannot forge credited time using table writes", async () => {
  const result = await student
    .from("user_lesson_progress")
    .update({ active_seconds: 9999 })
    .eq("lesson_id", fixture.lessonId)
    .select();
  assert.ok(result.error || result.data.length === 0);
  assert.deepEqual(
    success(await rpc(student, "start_lesson"), "read unchanged"),
    completed,
  );
});
test("revoked enrollment rejects every operation without altering records", async () => {
  success(
    await service
      .from("course_enrollments")
      .delete()
      .eq("course_id", fixture.courseId)
      .eq("user_id", fixture.studentId),
    "revoke",
  );
  for (const operation of operations)
    assert.equal((await rpc(student, operation)).error?.code, "42501");
  const stored = success(
    await service
      .from("user_lesson_progress")
      .select("*")
      .eq("lesson_id", fixture.lessonId)
      .eq("user_id", fixture.studentId)
      .single(),
    "stored",
  );
  assert.deepEqual(stored, completed);
});
