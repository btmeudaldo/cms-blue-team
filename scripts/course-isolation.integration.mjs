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

test("student A reads A but cannot read B", async () => {
  assert.deepEqual(
    (
      await rows(
        ids.student,
        "select id from public.lessons where id=any($1::uuid[])",
        [[ids.la, ids.lb]],
      )
    ).map((r) => r.id),
    [ids.la],
  );
});
test("staff retain global content read", async () => {
  assert.equal(
    (
      await rows(
        ids.editor,
        "select id from public.lessons where id=any($1::uuid[])",
        [[ids.la, ids.lb]],
      )
    ).length,
    2,
  );
});
test("student sees own progress only", async () => {
  assert.deepEqual(
    (
      await rows(
        ids.student,
        "select user_id from public.user_lesson_progress where lesson_id=any($1::uuid[])",
        [[ids.la, ids.lb]],
      )
    ).map((r) => r.user_id),
    [ids.student],
  );
});
for (const [name, sql, params] of [
  ["insert B", insertLesson.replace("99,99", "100,100"), [randomUUID(), ids.b]],
  [
    "update B",
    "update public.lessons set title='Unauthorized' where id=$1 returning id",
    [ids.lb],
  ],
  ["delete B", "delete from public.lessons where id=$1 returning id", [ids.lb]],
  [
    "move A to B",
    "update public.lessons set course_id=$2,lesson_order=100,sequence_order=100 where id=$1 returning id",
    [ids.la, ids.b],
  ],
])
  test(`assigned editor cannot ${name}`, () =>
    denied(
      ids.editor,
      sql,
      params,
      name === "move A to B" ? ["42501", "22023"] : ["42501"],
    ));
for (const lesson of ["la", "lc"])
  test(`student with historical ownership/assignment cannot edit ${lesson}`, () =>
    denied(
      ids.demoted,
      "update public.lessons set title='Unauthorized' where id=$1 returning id",
      [ids[lesson]],
    ));
for (const user of ["admin", "owner", "editor"])
  test(`${user} can create, update and delete authorized lessons`, async () => {
    await actor(ids[user], async () => {
      const id = randomUUID();
      await db.query(insertLesson.replace("99,99", "100,100"), [id, ids.a]);
      assert.equal(
        (
          await db.query(
            "update public.lessons set title='Updated' where id=$1 returning id",
            [id],
          )
        ).rowCount,
        1,
      );
      assert.equal(
        (
          await db.query(
            "delete from public.lessons where id=$1 returning id",
            [id],
          )
        ).rowCount,
        1,
      );
    });
  });
for (const user of ["owner", "editor", "admin"])
  test(`${user} progress scope`, async () => {
    const result = await rows(
      ids[user],
      "select lesson_id from public.user_lesson_progress where lesson_id=any($1::uuid[]) order by lesson_id",
      [[ids.la, ids.lb]],
    );
    assert.deepEqual(
      result.map((r) => r.lesson_id).sort(),
      (user === "admin" ? [ids.la, ids.lb] : [ids.la]).sort(),
    );
  });
test("removing editor assignment revokes editing and progress access", async () => {
  await db.query("savepoint assignment_change");
  try {
    await db.query(
      "delete from public.course_editors where user_id=$1 and course_id=$2",
      [ids.editor, ids.a],
    );
    await denied(
      ids.editor,
      "update public.lessons set title='Unauthorized' where id=$1 returning id",
      [ids.la],
    );
    assert.equal(
      (
        await rows(
          ids.editor,
          "select user_id from public.user_lesson_progress where lesson_id=$1",
          [ids.la],
        )
      ).length,
      0,
    );
  } finally {
    await db.query("rollback to savepoint assignment_change");
    await db.query("release savepoint assignment_change");
  }
});
for (const table of ["lessons", "user_lesson_progress"]) {
  for (const role of ["anon", "authenticated"])
    test(`${role} has no bulk privileges on ${table}`, async () => {
      for (const privilege of ["TRUNCATE", "REFERENCES", "TRIGGER"])
        assert.equal(
          (
            await db.query("select has_table_privilege($1,$2,$3) as allowed", [
              role,
              `public.${table}`,
              privilege,
            ])
          ).rows[0].allowed,
          false,
          privilege,
        );
    });
  test(`anon cannot read ${table}`, async () => {
    await assert.rejects(
      actor(
        null,
        () => db.query(`select * from public.${table} limit 1`),
        "anon",
      ),
      { code: "42501" },
    );
  });
}
test("progress cannot be directly updated by a student", () =>
  denied(
    ids.student,
    "update public.user_lesson_progress set active_seconds=9999 where user_id=$1 returning user_id",
    [ids.student],
  ));
test("authorization wrapper is invoker, available to authenticated and denied to anon", async () => {
  const {
    rows: [result],
  } = await db.query(
    "select prosecdef, has_function_privilege('anon',oid,'EXECUTE') as anon, has_function_privilege('authenticated',oid,'EXECUTE') as authenticated from pg_proc where oid='public.can_manage_course(uuid)'::regprocedure",
  );
  assert.equal(result.prosecdef, false);
  assert.equal(result.anon, false);
  assert.equal(result.authenticated, true);
  assert.equal(
    (
      await rows(ids.editor, "select public.can_manage_course($1) as allowed", [
        ids.a,
      ])
    )[0].allowed,
    true,
  );
  assert.equal(
    (
      await rows(ids.editor, "select public.can_manage_course($1) as allowed", [
        ids.b,
      ])
    )[0].allowed,
    false,
  );
});
test("student progress RPC start heartbeat pause complete remains functional", async () => {
  await actor(ids.student, async () => {
    for (const name of [
      "start_lesson",
      "resume_lesson",
      "heartbeat_lesson",
      "pause_lesson",
      "complete_lesson",
    ])
      await db.query(`select public.${name}($1::uuid)`, [ids.la]);
    const result = await db.query(
      "select is_completed from public.user_lesson_progress where user_id=$1 and lesson_id=$2",
      [ids.student, ids.la],
    );
    assert.equal(result.rows[0].is_completed, true);
  });
});
