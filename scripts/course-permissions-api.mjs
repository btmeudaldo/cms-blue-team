import assert from "node:assert/strict";
import { before, test } from "node:test";
import { createClient } from "@supabase/supabase-js";
import {
  createEnrollmentFixture,
  login,
  enrolled,
  config,
  options,
  success,
} from "./course-permissions-fixture.mjs";
let fixture, instructor, admin, student;
const save = (client, selected, scope) =>
  client.rpc("set_student_enrollments", {
    p_user_id: fixture.student.id,
    p_enrolled_course_ids: selected,
    p_scope_course_ids: scope,
  });
before(async () => {
  fixture = await createEnrollmentFixture("Auth REST matrículas");
  instructor = await login(fixture.instructor);
  admin = await login(fixture.admin);
  student = await login(fixture.student);
});
test("anonymous and student cannot manage enrollments", async () => {
  for (const client of [
    createClient(config.API_URL, config.ANON_KEY, options),
    student,
  ])
    assert.equal((await save(client, [], [])).error?.code, "42501");
});
test("instructor manages owned and assigned courses while retaining outside enrollment", async () => {
  const own = [fixture.courses.owned.id, fixture.courses.assigned.id];
  success(await save(instructor, own, own), "scoped save");
  assert.deepEqual(
    await enrolled(fixture),
    [...own, fixture.courses.outside.id].sort(),
  );
});
test("foreign scope is denied atomically without partial removals", async () => {
  const before = await enrolled(fixture);
  assert.equal(
    (
      await save(
        instructor,
        [],
        [fixture.courses.owned.id, fixture.courses.outside.id],
      )
    ).error?.code,
    "42501",
  );
  assert.deepEqual(await enrolled(fixture), before);
});
test("selected courses outside requested scope are rejected atomically", async () => {
  const before = await enrolled(fixture);
  assert.equal(
    (
      await save(
        instructor,
        [fixture.courses.outside.id],
        [fixture.courses.owned.id],
      )
    ).error?.code,
    "22023",
  );
  assert.deepEqual(await enrolled(fixture), before);
});
test("scoped instructor removal preserves all other courses", async () => {
  success(
    await save(instructor, [], [fixture.courses.owned.id]),
    "scoped removal",
  );
  assert.deepEqual(
    await enrolled(fixture),
    [fixture.courses.assigned.id, fixture.courses.outside.id].sort(),
  );
});
test("administrator can update enrollment outside instructor scope", async () => {
  success(await save(admin, [], [fixture.courses.outside.id]), "admin removal");
  assert.deepEqual(await enrolled(fixture), [fixture.courses.assigned.id]);
});
