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
  ["student", "owner", "course", "lesson"].map((name) => [name, randomUUID()]),
);
const operations = [
  "start_lesson",
  "resume_lesson",
  "heartbeat_lesson",
  "pause_lesson",
  "complete_lesson",
];

async function isolated(operation) {
  await db.query("savepoint timing_case");
  try {
    return await operation();
  } finally {
    await db.query("rollback to savepoint timing_case");
    await db.query("release savepoint timing_case");
  }
}
async function actor(user = ids.student, role = "authenticated") {
  await db.query(
    `set local role ${role === "anon" ? "anon" : "authenticated"}`,
  );
  await db.query(
    "select set_config('request.jwt.claim.sub',$1,true), set_config('request.jwt.claims',$2,true)",
    [user ?? "", JSON.stringify({ sub: user, role })],
  );
}
async function rpc(name) {
  assert.ok(operations.includes(name));
  return (
    await db.query(`select to_jsonb(p) as progress from public.${name}($1) p`, [
      ids.lesson,
    ])
  ).rows[0].progress;
}
async function progress() {
  return (
    await db.query(
      "select to_jsonb(p) as progress from public.user_lesson_progress p where user_id=$1 and lesson_id=$2",
      [ids.student, ids.lesson],
    )
  ).rows[0]?.progress;
}
async function seed({
  completed = false,
  active = true,
  seconds = 10,
  age = 65,
} = {}) {
  await db.query(
    "insert into public.user_lesson_progress(user_id,lesson_id,started_at,last_resumed_at,is_active,active_seconds,is_completed,completed_at,elapsed_seconds) values($1,$2,clock_timestamp()-interval '1 hour',case when $3 then clock_timestamp()-($4 * interval '1 second') else null end,$3,$5,$6,case when $6 then clock_timestamp()-interval '10 minutes' else null end,case when $6 then $5::integer else null end)",
    [ids.student, ids.lesson, active, age, seconds, completed],
  );
}
before(async () => {
  await db.connect();
  await db.query("begin");
  for (const name of ["student", "owner"]) {
    await db.query(
      "insert into auth.users(id,instance_id,aud,role,email,encrypted_password,email_confirmed_at,raw_app_meta_data,raw_user_meta_data,created_at,updated_at) values($1,'00000000-0000-0000-0000-000000000000','authenticated','authenticated',$2,'',now(),'{}','{}',now(),now())",
      [ids[name], `${ids[name]}@timing.invalid`],
    );
    await db.query(
      "insert into public.profiles(id,role) values($1,$2) on conflict(id) do update set role=excluded.role",
      [ids[name], name === "owner" ? "instructor" : "student"],
    );
  }
  await db.query(
    "insert into public.courses(id,title,slug,created_by) values($1::uuid,'Timing fixture',$1::text,$2)",
    [ids.course, ids.owner],
  );
  await db.query(
    "insert into public.lessons(id,course_id,title,slug,content_html,lesson_order,sequence_order,min_seconds) values($1::uuid,$2,'Timing fixture',$1::text,'<p>Fixture</p>',1,1,30)",
    [ids.lesson, ids.course],
  );
  await db.query(
    "insert into public.course_enrollments(user_id,course_id) values($1,$2)",
    [ids.student, ids.course],
  );
});
after(async () => {
  try {
    await db.query("rollback");
  } finally {
    await db.end();
  }
});

for (const name of operations) {
  test(`${name} requires an authenticated subject`, () =>
    isolated(async () => {
      await seed();
      await actor(null);
      await assert.rejects(rpc(name), { code: "42501" });
    }));
  test(`${name} rechecks enrollment even with existing progress`, () =>
    isolated(async () => {
      await seed();
      await db.query(
        "delete from public.course_enrollments where user_id=$1 and course_id=$2",
        [ids.student, ids.course],
      );
      await actor();
      await assert.rejects(rpc(name), { code: "42501" });
    }));
  test(`${name} preserves every completed record field after requirements change`, () =>
    isolated(async () => {
      await seed({ completed: true, active: false, seconds: 30 });
      await db.query("update public.lessons set min_seconds=300 where id=$1", [
        ids.lesson,
      ]);
      const before = await progress();
      await actor();
      assert.deepEqual(await rpc(name), before);
      assert.deepEqual(await progress(), before);
    }));
  test(`${name} denies anonymous execution`, () =>
    isolated(async () => {
      await actor(null, "anon");
      await assert.rejects(rpc(name), { code: "42501" });
    }));
  test(`${name} public API uses invoker rights`, async () => {
    const result = await db.query(
      "select prosecdef from pg_proc where oid=$1::regprocedure",
      [`public.${name}(uuid)`],
    );
    assert.equal(result.rows[0].prosecdef, false);
  });
}

test("start creates one active session and repeated starts preserve it", () =>
  isolated(async () => {
    await actor();
    const first = await rpc("start_lesson");
    assert.equal(first.is_active, true);
    assert.equal(first.is_completed, false);
    assert.equal(first.active_seconds, 0);
    assert.ok(first.started_at);
    assert.ok(first.last_resumed_at);
    assert.deepEqual(await rpc("start_lesson"), first);
    assert.deepEqual(await progress(), first);
  }));
test("resume of an already active session does not reset its clock", () =>
  isolated(async () => {
    await seed();
    const before = await progress();
    await actor();
    assert.deepEqual(await rpc("resume_lesson"), before);
    assert.deepEqual(await progress(), before);
  }));
test("resume of a paused session starts a fresh active interval without changing time", () =>
  isolated(async () => {
    await seed({ active: false });
    const before = await progress();
    await actor();
    const resumed = await rpc("resume_lesson");
    assert.equal(resumed.is_active, true);
    assert.ok(resumed.last_resumed_at);
    assert.equal(resumed.active_seconds, before.active_seconds);
    assert.equal(resumed.started_at, before.started_at);
    assert.equal(resumed.is_completed, false);
  }));
for (const name of ["heartbeat_lesson", "pause_lesson"]) {
  for (const [label, age, delta] of [
    ["caps a stale interval at 15 seconds", 65, 15],
    ["floors fractional seconds", 3.2, 3],
    ["never subtracts for a future clock", -60, 0],
  ]) {
    test(`${name} ${label}`, () =>
      isolated(async () => {
        await seed({ age });
        await actor();
        const result = await rpc(name);
        assert.equal(result.active_seconds, 10 + delta);
        assert.equal(result.is_active, name === "heartbeat_lesson");
        if (name === "pause_lesson") assert.equal(result.last_resumed_at, null);
      }));
  }
  test(`${name} preserves paused records`, () =>
    isolated(async () => {
      await seed({ active: false });
      const before = await progress();
      await actor();
      assert.deepEqual(await rpc(name), before);
      assert.deepEqual(await progress(), before);
    }));
}
test("completion before minimum time is rejected and rolls back its partial credit", () =>
  isolated(async () => {
    await seed({ seconds: 1 });
    const before = await progress();
    await actor();
    await db.query("savepoint premature_completion");
    await assert.rejects(rpc("complete_lesson"), { code: "22023" });
    await db.query("rollback to savepoint premature_completion");
    assert.deepEqual(await progress(), before);
  }));
test("completion credits at most 15 seconds then stores a final paused record", () =>
  isolated(async () => {
    await seed({ seconds: 20 });
    await actor();
    const result = await rpc("complete_lesson");
    assert.equal(result.active_seconds, 35);
    assert.equal(result.elapsed_seconds, 35);
    assert.equal(result.is_completed, true);
    assert.equal(result.is_active, false);
    assert.equal(result.last_resumed_at, null);
    assert.ok(result.completed_at);
    assert.deepEqual(await rpc("complete_lesson"), result);
  }));

test("private transition rejects a missing authenticated subject", () =>
  isolated(async () => {
    await actor(null);
    await assert.rejects(
      db.query("select learning_private.record_lesson_activity($1,'start')", [
        ids.lesson,
      ]),
      { code: "42501" },
    );
  }));
test("private transition still checks enrollment when called directly", () =>
  isolated(async () => {
    await db.query(
      "delete from public.course_enrollments where user_id=$1 and course_id=$2",
      [ids.student, ids.course],
    );
    await actor();
    await assert.rejects(
      db.query("select learning_private.record_lesson_activity($1,'start')", [
        ids.lesson,
      ]),
      { code: "42501" },
    );
  }));
for (const operation of [null, "", "erase", "COMPLETE"])
  test(`private transition rejects invalid operation ${JSON.stringify(operation)}`, () =>
    isolated(async () => {
      await actor();
      await assert.rejects(
        db.query("select learning_private.record_lesson_activity($1,$2)", [
          ids.lesson,
          operation,
        ]),
        { code: "22023" },
      );
    }));
test("private transition has an empty search path and no anonymous execution", async () => {
  const result = await db.query(
    "select prosecdef,proconfig,has_function_privilege('anon',oid,'EXECUTE') as anonymous_execute from pg_proc where oid='learning_private.record_lesson_activity(uuid,text)'::regprocedure",
  );
  assert.equal(result.rows[0].prosecdef, true);
  assert.ok(result.rows[0].proconfig.includes('search_path=""'));
  assert.equal(result.rows[0].anonymous_execute, false);
});
for (const name of operations.filter((name) => name !== "start_lesson"))
  test(`${name} refuses to create progress without a prior start`, () =>
    isolated(async () => {
      await actor();
      await assert.rejects(rpc(name), { code: "22023" });
    }));

for (const name of operations)
  test(`${name} never adopts another user's progress`, () =>
    isolated(async () => {
      await seed();
      const original = await progress();
      await db.query(
        "insert into public.course_enrollments(user_id,course_id) values($1,$2)",
        [ids.owner, ids.course],
      );
      await actor(ids.owner);
      if (name === "start_lesson") {
        const created = await rpc(name);
        assert.equal(created.user_id, ids.owner);
        assert.equal(created.active_seconds, 0);
      } else {
        await db.query("savepoint other_user_call");
        await assert.rejects(rpc(name), { code: "22023" });
        await db.query("rollback to savepoint other_user_call");
      }
      await db.query("reset role");
      assert.deepEqual(await progress(), original);
    }));
