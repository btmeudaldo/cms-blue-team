import { before, after, test } from "node:test";
import assert from "node:assert/strict";
import { randomUUID } from "node:crypto";
import { readFile } from "node:fs/promises";
import pg from "pg";

const config = JSON.parse(
  await readFile(
    new URL("../.vercel/local-supabase.json", import.meta.url),
    "utf8",
  ),
);
const target = new URL(config.DB_URL);
if (
  config._project_id !== "quiz-validation" ||
  !["localhost", "127.0.0.1"].includes(target.hostname) ||
  target.port !== "55322" ||
  target.pathname !== "/postgres"
) {
  throw new Error(
    "Refusing a database outside local quiz-validation on port 55322",
  );
}
const db = new pg.Client({ connectionString: config.DB_URL });
const ids = Object.fromEntries(
  [
    "student",
    "other",
    "owner",
    "editor",
    "outsider",
    "admin",
    "demoted",
    "a",
    "b",
    "c",
    "la",
    "lb",
    "lc",
  ].map((key) => [key, randomUUID()]),
);

// Every operation is reverted, including successful mutations, so cases cannot
// contaminate one another and existing local fixtures are never modified.
async function actor(user, operation, role = "authenticated") {
  await db.query("savepoint actor_operation");
  try {
    await db.query(
      `set local role ${role === "anon" ? "anon" : "authenticated"}`,
    );
    await db.query(
      "select set_config('request.jwt.claim.sub',$1,true), set_config('request.jwt.claims',$2,true)",
      [user ?? "", JSON.stringify({ sub: user, role })],
    );
    return await operation();
  } finally {
    await db.query("rollback to savepoint actor_operation");
    await db.query("release savepoint actor_operation");
  }
}
async function rows(user, sql, params = []) {
  return actor(user, async () => (await db.query(sql, params)).rows);
}
async function denied(user, sql, params = [], expectedCodes = ["42501"]) {
  let result;
  try {
    result = await rows(user, sql, params);
  } catch (error) {
    assert.ok(
      expectedCodes.includes(error.code),
      `Unexpected SQLSTATE: ${error.code}`,
    );
    return;
  }
  assert.equal(
    result.length,
    0,
    "unauthorized mutation returned affected rows",
  );
}
const insertLesson =
  "insert into public.lessons(id,course_id,title,slug,content_html,lesson_order,sequence_order,min_seconds) values($1::uuid,$2::uuid,'Isolation fixture',$1::text,'<p>Fixture</p>',99,99,0) returning id";

before(async () => {
  await db.connect();
  await db.query("begin");
  for (const [key, role] of [
    ["student", "student"],
    ["other", "student"],
    ["owner", "instructor"],
    ["editor", "instructor"],
    ["outsider", "instructor"],
    ["admin", "admin"],
    ["demoted", "student"],
  ]) {
    await db.query(
      "insert into auth.users(id,instance_id,aud,role,email,encrypted_password,email_confirmed_at,raw_app_meta_data,raw_user_meta_data,created_at,updated_at) values($1,'00000000-0000-0000-0000-000000000000','authenticated','authenticated',$2,'',now(),'{}','{}',now(),now())",
      [ids[key], `${ids[key]}@isolation.invalid`],
    );
    await db.query(
      "insert into public.profiles(id,role) values($1,$2) on conflict(id) do update set role=excluded.role",
      [ids[key], role],
    );
  }
  for (const [course, owner, lesson] of [
    ["a", "owner", "la"],
    ["b", "outsider", "lb"],
    ["c", "demoted", "lc"],
  ]) {
    await db.query(
      "insert into public.courses(id,title,slug,created_by) values($1::uuid,'Isolation fixture',$1::text,$2)",
      [ids[course], ids[owner]],
    );
    await db.query(insertLesson, [ids[lesson], ids[course]]);
  }
  await db.query(
    "insert into public.course_enrollments(user_id,course_id) values($1,$2),($3,$4)",
    [ids.student, ids.a, ids.other, ids.b],
  );
  await db.query(
    "insert into public.course_editors(course_id,user_id,assigned_by) values($1,$2,$3),($1,$4,$3)",
    [ids.a, ids.editor, ids.admin, ids.demoted],
  );
  await db.query(
    "insert into public.user_lesson_progress(user_id,lesson_id,started_at) values($1,$2,now()),($3,$4,now())",
    [ids.student, ids.la, ids.other, ids.lb],
  );
});
after(async () => {
  try {
    await db.query("rollback");
  } finally {
    await db.end();
  }
});

for (const who of ["student", "demoted", "outsider"]) {
  test(`${who} cannot update unrelated or formerly owned courses`, () =>
    denied(
      ids[who],
      "update public.courses set title='intrusion' where id=$1 returning id",
      [ids[who === "demoted" ? "c" : "a"]],
    ));
}
for (const who of ["owner", "editor", "admin"]) {
  test(`${who} can update authorized course`, async () =>
    assert.equal(
      (
        await rows(
          ids[who],
          "update public.courses set title='allowed' where id=$1 returning id",
          [ids.a],
        )
      ).length,
      1,
    ));
}
test("demoted owner cannot delete an empty course", async () => {
  await db.query(
    "insert into public.courses(id,title,slug,created_by) values($1::uuid,'empty',$1::text,$2)",
    [(ids.empty = randomUUID()), ids.demoted],
  );
  await denied(
    ids.demoted,
    "delete from public.courses where id=$1 returning id",
    [ids.empty],
  );
});
test("assigned instructor cannot transfer ownership", () =>
  denied(
    ids.editor,
    "update public.courses set created_by=$1 where id=$2 returning id",
    [ids.editor, ids.a],
  ));
test("admin can transfer ownership", async () =>
  assert.equal(
    (
      await rows(
        ids.admin,
        "update public.courses set created_by=$1 where id=$2 returning id",
        [ids.editor, ids.a],
      )
    ).length,
    1,
  ));
for (const who of ["outsider", "student", "demoted"]) {
  test(`${who} cannot enroll into A`, () =>
    denied(
      ids[who],
      "insert into public.course_enrollments(user_id,course_id) values($1,$2) returning user_id",
      [ids.other, ids.a],
    ));
  test(`${who} cannot remove enrollment A`, () =>
    denied(
      ids[who],
      "delete from public.course_enrollments where course_id=$1 returning user_id",
      [ids.a],
    ));
}
for (const who of ["owner", "editor", "admin"]) {
  test(`${who} can enroll into A`, async () =>
    assert.equal(
      (
        await rows(
          ids[who],
          "insert into public.course_enrollments(user_id,course_id) values($1,$2) returning user_id",
          [ids.other, ids.a],
        )
      ).length,
      1,
    ));
  test(`${who} can remove enrollment A`, async () =>
    assert.equal(
      (
        await rows(
          ids[who],
          "delete from public.course_enrollments where course_id=$1 returning user_id",
          [ids.a],
        )
      ).length,
      1,
    ));
}
test("instructor cannot move enrollment into unrelated course", () =>
  denied(
    ids.owner,
    "update public.course_enrollments set course_id=$1 where user_id=$2 and course_id=$3 returning user_id",
    [ids.b, ids.student, ids.a],
  ));
test("student reads only own enrollments", async () =>
  assert.deepEqual(
    (
      await rows(
        ids.student,
        "select course_id from public.course_enrollments where course_id=any($1::uuid[])",
        [[ids.a, ids.b]],
      )
    ).map((r) => r.course_id),
    [ids.a],
  ));
for (const who of ["owner", "editor", "outsider", "student"])
  test(`${who} cannot assign editors`, () =>
    denied(
      ids[who],
      "insert into public.course_editors(course_id,user_id,assigned_by) values($1,$2,$3) returning user_id",
      [ids.b, ids.student, ids.admin],
    ));
for (const table of ["courses", "course_enrollments", "course_editors"])
  test(`${table} has no bulk privileges`, async () => {
    const result = await db.query(
      "select has_table_privilege('authenticated',$1,'TRUNCATE') or has_table_privilege('anon',$1,'TRUNCATE') or has_table_privilege('authenticated',$1,'TRIGGER') as allowed",
      [`public.${table}`],
    );
    assert.equal(result.rows[0].allowed, false);
  });
const setEnrollments =
  "select public.set_student_enrollments($1::uuid,$2::uuid[],$3::uuid[])";
test("bulk edit preserves unrelated enrollments and original dates", async () => {
  await actor(ids.admin, async () => {
    const before = (
      await db.query(
        "select enrolled_at from public.course_enrollments where user_id=$1 and course_id=$2",
        [ids.student, ids.a],
      )
    ).rows[0];
    await db.query(setEnrollments, [ids.student, [ids.a], [ids.a]]);
    assert.deepEqual(
      (
        await db.query(
          "select enrolled_at from public.course_enrollments where user_id=$1 and course_id=$2",
          [ids.student, ids.a],
        )
      ).rows[0],
      before,
    );
    await db.query(setEnrollments, [ids.other, [ids.a], [ids.a]]);
    assert.equal(
      (
        await db.query(
          "select course_id from public.course_enrollments where user_id=$1",
          [ids.other],
        )
      ).rows.length,
      2,
    );
  });
});
test("bulk authorized instructor can remove enrollment", async () => {
  await actor(ids.owner, async () => {
    await db.query(setEnrollments, [ids.student, [], [ids.a]]);
    assert.equal(
      (
        await db.query(
          "select * from public.course_enrollments where user_id=$1 and course_id=$2",
          [ids.student, ids.a],
        )
      ).rowCount,
      0,
    );
  });
});
for (const who of ["student", "outsider", "demoted"])
  test(`bulk denies ${who}`, () =>
    denied(ids[who], setEnrollments, [ids.student, [], [ids.a]]));
test("bulk rejects mixed unauthorized scope atomically", async () => {
  await denied(ids.owner, setEnrollments, [
    ids.student,
    [ids.b],
    [ids.a, ids.b],
  ]);
  assert.equal(
    (
      await db.query(
        "select * from public.course_enrollments where user_id=$1 and course_id=$2",
        [ids.student, ids.a],
      )
    ).rowCount,
    1,
  );
});
test("bulk rejects desired outside scope", () =>
  denied(
    ids.admin,
    setEnrollments,
    [ids.student, [ids.b], [ids.a]],
    ["22023"],
  ));
test("bulk rejects missing target", () =>
  denied(ids.admin, setEnrollments, [randomUUID(), [], [ids.a]], ["22023"]));
test("bulk rejects null array elements", () =>
  denied(ids.admin, setEnrollments, [ids.student, [null], [ids.a]], ["22023"]));
test("bulk rejects null arrays", () =>
  denied(ids.admin, setEnrollments, [ids.student, null, [ids.a]], ["22023"]));
test("anon cannot call bulk RPC", () =>
  actor(
    null,
    async () => {
      await assert.rejects(
        db.query(setEnrollments, [ids.student, [], [ids.a]]),
        { code: "42501" },
      );
    },
    "anon",
  ));

