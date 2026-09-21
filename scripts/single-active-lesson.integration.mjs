import { before, after, beforeEach, test } from "node:test";
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
)
  throw new Error("Refusing database outside local quiz-validation");
const ids = Object.fromEntries(
  ["student", "other", "course", "a", "b", "c"].map((key) => [
    key,
    randomUUID(),
  ]),
);
const control = new pg.Client({ connectionString: config.DB_URL });
const workers = [0, 1, 2].map(
  () => new pg.Client({ connectionString: config.DB_URL }),
);
const pids = [];
async function identify(client, user) {
  await client.query(
    "select set_config('request.jwt.claim.sub',$1,false),set_config('request.jwt.claims',$2,false)",
    [user ?? "", JSON.stringify({ sub: user, role: "authenticated" })],
  );
}
async function rpc(client, operation, lesson) {
  assert.ok(
    ["start", "resume", "heartbeat", "pause", "complete"].includes(operation),
  );
  return (
    await client.query(
      `select to_jsonb(p) as progress from public.${operation}_lesson($1) p`,
      [ids[lesson]],
    )
  ).rows[0].progress;
}
async function progress(lesson, user = ids.student) {
  return (
    await control.query(
      "select to_jsonb(p) as progress from public.user_lesson_progress p where user_id=$1 and lesson_id=$2",
      [user, ids[lesson]],
    )
  ).rows[0]?.progress;
}
async function activeCount(user = ids.student) {
  return (
    await control.query(
      "select count(*)::integer as count from public.user_lesson_progress where user_id=$1 and is_active and not is_completed",
      [user],
    )
  ).rows[0].count;
}
async function seed(
  lesson,
  { user = ids.student, active = true, completed = false, seconds = 10 } = {},
) {
  await control.query(
    "insert into public.user_lesson_progress(user_id,lesson_id,started_at,last_resumed_at,is_active,active_seconds,is_completed,completed_at,elapsed_seconds) values($1,$2,clock_timestamp()-interval '1 hour',case when $3 then clock_timestamp()-interval '65 seconds' else null end,$3,$4,$5,case when $5 then clock_timestamp()-interval '1 minute' else null end,case when $5 then $4::integer else null end)",
    [user, ids[lesson], active, seconds, completed],
  );
}
async function waitForLock(clientIndex) {
  const end = Date.now() + 5000;
  while (Date.now() < end) {
    await control.query("select pg_stat_clear_snapshot()");
    if (
      (
        await control.query(
          "select wait_event_type from pg_stat_activity where pid=$1",
          [pids[clientIndex]],
        )
      ).rows[0]?.wait_event_type === "Lock"
    )
      return;
    await new Promise((resolve) => setTimeout(resolve, 20));
  }
  throw new Error("Worker did not wait for lock");
}
before(async () => {
  await control.connect();
  await control.query("begin");
  for (const user of [ids.student, ids.other]) {
    await control.query(
      "insert into auth.users(id,instance_id,aud,role,email,encrypted_password,email_confirmed_at,raw_app_meta_data,raw_user_meta_data,created_at,updated_at) values($1,'00000000-0000-0000-0000-000000000000','authenticated','authenticated',$2,'',now(),'{}','{}',now(),now())",
      [user, `${user}@single-active.invalid`],
    );
    await control.query(
      "insert into public.profiles(id,role) values($1,'student') on conflict(id) do nothing",
      [user],
    );
  }
  await control.query(
    "insert into public.courses(id,title,slug,created_by) values($1::uuid,'Single active fixture',$1::text,$2)",
    [ids.course, ids.student],
  );
  for (const [index, lesson] of ["a", "b", "c"].entries())
    await control.query(
      "insert into public.lessons(id,course_id,title,slug,content_html,lesson_order,sequence_order,min_seconds) values($1::uuid,$2,'Single active fixture',$1::text,'<p>Fixture</p>',$3,$3,30)",
      [ids[lesson], ids.course, index + 1],
    );
  await control.query(
    "insert into public.course_enrollments(user_id,course_id) values($1,$3),($2,$3)",
    [ids.student, ids.other, ids.course],
  );
  await control.query("commit");
  for (const [index, worker] of workers.entries()) {
    await worker.connect();
    pids.push(
      (await worker.query("select pg_backend_pid() as pid")).rows[0].pid,
    );
    await worker.query("set statement_timeout='10s'");
    await worker.query("set role authenticated");
    await identify(worker, index === 2 ? ids.other : ids.student);
  }
});
beforeEach(async () => {
  await control.query("rollback");
  await control.query(
    "delete from public.user_lesson_progress where user_id=any($1::uuid[]) and lesson_id=any($2::uuid[])",
    [
      [ids.student, ids.other],
      [ids.a, ids.b, ids.c],
    ],
  );
  await identify(workers[0], ids.student);
  await identify(workers[1], ids.student);
});
after(async () => {
  await control.query("rollback");
  await Promise.all(workers.map((worker) => worker.end()));
  try {
    await control.query("begin");
    await control.query(
      "delete from public.user_lesson_progress where user_id=any($1::uuid[])",
      [[ids.student, ids.other]],
    );
    await control.query(
      "delete from public.course_enrollments where course_id=$1",
      [ids.course],
    );
    await control.query("delete from public.lessons where course_id=$1", [
      ids.course,
    ]);
    await control.query("delete from public.courses where id=$1", [ids.course]);
    await control.query("delete from auth.users where id=any($1::uuid[])", [
      [ids.student, ids.other],
    ]);
    await control.query("commit");
  } finally {
    await control.end();
  }
});
test("start new lesson pauses previous without crediting pending interval", async () => {
  await seed("a");
  const before = await progress("a");
  await rpc(workers[0], "start", "b");
  const after = await progress("a");
  assert.deepEqual(after, {
    ...before,
    is_active: false,
    last_resumed_at: null,
  });
  assert.equal(await activeCount(), 1);
  assert.equal((await progress("b")).active_seconds, 0);
});
test("resume inactive lesson transfers activity without changing credited seconds", async () => {
  await seed("a");
  await seed("b", { active: false, seconds: 7 });
  await rpc(workers[0], "resume", "b");
  assert.equal((await progress("a")).is_active, false);
  assert.equal((await progress("a")).active_seconds, 10);
  assert.equal((await progress("b")).active_seconds, 7);
  assert.equal(await activeCount(), 1);
});
test("repeated start of paused lesson remains idempotent", async () => {
  await seed("a", { active: false });
  await seed("b");
  const before = await progress("a");
  const other = await progress("b");
  assert.deepEqual(await rpc(workers[0], "start", "a"), before);
  assert.deepEqual(await progress("b"), other);
});
for (const operation of ["heartbeat", "pause"])
  test(`late ${operation} cannot reactivate previous lesson or credit its pending interval`, async () => {
    await seed("a");
    await rpc(workers[0], "start", "b");
    const before = await progress("a");
    assert.deepEqual(await rpc(workers[1], operation, "a"), before);
    assert.equal(await activeCount(), 1);
    assert.equal((await progress("b")).is_active, true);
  });
test("late complete on paused lesson cannot count abandoned interval", async () => {
  await seed("a", { seconds: 20 });
  await rpc(workers[0], "start", "b");
  await assert.rejects(rpc(workers[1], "complete", "a"), { code: "22023" });
  assert.equal((await progress("a")).active_seconds, 20);
  assert.equal((await progress("a")).is_completed, false);
});
test("paused lesson with enough credited time may complete without reactivation", async () => {
  await seed("a", { seconds: 40 });
  await rpc(workers[0], "start", "b");
  const result = await rpc(workers[1], "complete", "a");
  assert.equal(result.active_seconds, 40);
  assert.equal(result.elapsed_seconds, 40);
  assert.equal(result.is_active, false);
  assert.equal((await progress("b")).is_active, true);
});
test("completed historical rows are unchanged by handover", async () => {
  await seed("c", { completed: true, seconds: 50 });
  await seed("a");
  const before = await progress("c");
  await rpc(workers[0], "start", "b");
  assert.deepEqual(await progress("c"), before);
});
test("different learners retain independent active lessons", async () => {
  await Promise.all([
    rpc(workers[0], "start", "a"),
    rpc(workers[2], "start", "b"),
  ]);
  assert.equal(await activeCount(), 1);
  assert.equal(await activeCount(ids.other), 1);
});
test("concurrent new starts in separate sessions leave only one active lesson", async () => {
  await Promise.all([
    rpc(workers[0], "start", "a"),
    rpc(workers[1], "start", "b"),
  ]);
  assert.equal(await activeCount(), 1);
  assert.equal((await progress("a")).active_seconds, 0);
  assert.equal((await progress("b")).active_seconds, 0);
});
test("concurrent resumes in separate sessions leave only one active lesson", async () => {
  await seed("a", { active: false });
  await seed("b", { active: false });
  await Promise.all([
    rpc(workers[0], "resume", "a"),
    rpc(workers[1], "resume", "b"),
  ]);
  assert.equal(await activeCount(), 1);
});
test("concurrent starts of same lesson remain idempotent", async () => {
  const result = await Promise.all([
    rpc(workers[0], "start", "a"),
    rpc(workers[1], "start", "a"),
  ]);
  assert.deepEqual(result[0], result[1]);
  assert.equal(await activeCount(), 1);
});
test("transfer activation clock is sampled after waiting on previous progress", async () => {
  await seed("a");
  await control.query("begin");
  await control.query(
    "select 1 from public.user_lesson_progress where user_id=$1 and lesson_id=$2 for update",
    [ids.student, ids.a],
  );
  const pending = rpc(workers[0], "start", "b");
  pending.catch(() => {});
  let time;
  try {
    await waitForLock(0);
    time = (await control.query("select clock_timestamp() as now")).rows[0].now;
  } finally {
    await control.query("commit");
  }
  const result = await pending;
  assert.ok(new Date(result.last_resumed_at) >= time);
  assert.equal(await activeCount(), 1);
});
test("queued heartbeat after handover sees paused state", async () => {
  await seed("a");
  await workers[0].query("begin");
  await rpc(workers[0], "start", "b");
  const pending = rpc(workers[1], "heartbeat", "a");
  pending.catch(() => {});
  try {
    await waitForLock(1);
  } finally {
    await workers[0].query("commit");
  }
  const result = await pending;
  assert.equal(result.is_active, false);
  assert.equal(result.active_seconds, 10);
  assert.equal(await activeCount(), 1);
});
test("index rejects bypassed direct write creating a second active row", async () => {
  await seed("a");
  await assert.rejects(seed("b"), { code: "23505" });
  assert.equal(await activeCount(), 1);
});
test("unauthenticated transition cannot pause another lesson", async () => {
  await seed("a");
  const before = await progress("a");
  await identify(workers[0], null);
  await assert.rejects(rpc(workers[0], "start", "b"), { code: "42501" });
  assert.deepEqual(await progress("a"), before);
});
test("unenrolled transition cannot pause current activity", async () => {
  await seed("a");
  const before = await progress("a");
  await assert.rejects(
    workers[0].query("select public.start_lesson($1)", [randomUUID()]),
    { code: "42501" },
  );
  assert.deepEqual(await progress("a"), before);
});
test("student cannot bypass transitions by directly setting active progress", async () => {
  await seed("a", { active: false });
  await assert.rejects(
    workers[0].query(
      "update public.user_lesson_progress set is_active=true where user_id=$1",
      [ids.student],
    ),
    { code: "42501" },
  );
});

