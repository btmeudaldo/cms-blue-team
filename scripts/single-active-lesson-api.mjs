import assert from "node:assert/strict";
import { randomUUID } from "node:crypto";
import { setTimeout } from "node:timers/promises";
import { createClient } from "@supabase/supabase-js";
import { config, options, service, success, createFixture } from "./lesson-timing-fixture.mjs";

const fixture = await createFixture("actividad única API");
const secondLesson = randomUUID();
success(await service.from("lessons").insert({
  id: secondLesson, course_id: fixture.courseId, title: "Segunda lección API",
  slug: secondLesson, content_html: "<p>Segunda lectura</p>", lesson_order: 2,
  sequence_order: 2, min_seconds: 100,
}), "second lesson");
const clients = [0, 1].map(() => createClient(config.API_URL, config.ANON_KEY, options));
for (const client of clients) success(await client.auth.signInWithPassword({
  email: fixture.email, password: fixture.password,
}), "device login");
let checks = 0;
function verified(label) { console.log(`ok ${++checks} - ${label}`); }
const rpc = async (device, operation, lessonId) => success(await clients[device].rpc(operation, {
  p_lesson_id: lessonId,
}), operation);
const records = async () => success(await service.from("user_lesson_progress").select("*")
  .eq("user_id", fixture.studentId).in("lesson_id", [fixture.lessonId, secondLesson])
  .order("lesson_id"), "progress records");

await rpc(0, "start_lesson", fixture.lessonId);
await setTimeout(2100);
const first = await rpc(0, "heartbeat_lesson", fixture.lessonId);
assert.ok(first.active_seconds >= 2);
await rpc(1, "start_lesson", secondLesson);
let rows = await records();
assert.equal(rows.filter(row => row.is_active).length, 1);
assert.equal(rows.find(row => row.lesson_id === secondLesson).is_active, true);
verified("a second authenticated device pauses the first lesson");

await setTimeout(1100);
const stale = await rpc(0, "heartbeat_lesson", fixture.lessonId);
assert.equal(stale.active_seconds, first.active_seconds);
assert.equal(stale.is_active, false);
await rpc(0, "pause_lesson", fixture.lessonId);
rows = await records();
assert.equal(rows.find(row => row.lesson_id === secondLesson).is_active, true);
verified("late heartbeat and pause do not credit or stop the other lesson");

await rpc(0, "resume_lesson", fixture.lessonId);
rows = await records();
assert.equal(rows.filter(row => row.is_active).length, 1);
assert.equal(rows.find(row => row.lesson_id === fixture.lessonId).is_active, true);
assert.equal(rows.find(row => row.lesson_id === secondLesson).active_seconds, 0);
verified("resuming transfers activity without crediting a pending interval");

const beforeConcurrent = (await records()).find(row => row.lesson_id === fixture.lessonId);
await setTimeout(1100);
await Promise.all(clients.map((_, device) => rpc(device, "heartbeat_lesson", fixture.lessonId)));
const afterConcurrent = (await records()).find(row => row.lesson_id === fixture.lessonId);
assert.ok(afterConcurrent.active_seconds - beforeConcurrent.active_seconds >= 1);
assert.ok(afterConcurrent.active_seconds - beforeConcurrent.active_seconds <= 2);
verified("two devices on the same lesson share one credited clock");

const quizId = randomUUID();
success(await service.from("quizzes").insert({
  id: quizId, course_id: fixture.courseId, lesson_id: secondLesson,
  title: "Examen sin evidencia de lectura", min_pass_score_percentage: 70,
  questions: [{ id: "q1", question: "Pregunta sintética", options: ["A", "B"], correctAnswerIndex: 0 }],
}), "quiz");
const beforeGrading = await records();
const attempt = success(await clients[1].rpc("start_quiz_attempt", { p_quiz_id: quizId }), "quiz start");
const grade = success(await clients[1].rpc("submit_quiz_attempt", {
  p_attempt_id: attempt.attempt_id, p_answers: { q1: 0 },
}), "quiz submit");
assert.equal(grade.passed, true);
assert.deepEqual(await records(), beforeGrading);
assert.equal(beforeGrading.find(row => row.lesson_id === secondLesson).is_completed, false);
verified("passing an exam preserves all reading fields and does not complete reading");

await rpc(0, "pause_lesson", fixture.lessonId);
console.log(`${checks} Auth/REST checks passed against isolated local Supabase.`);
