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
)
  throw new Error(
    "Refusing a database outside local quiz-validation on port 55322",
  );
const ids = Object.fromEntries(
  ["student", "course", "lesson"].map((name) => [name, randomUUID()]),
);
const control = new pg.Client({ connectionString: config.DB_URL });
const workers = [0, 1].map(
  () => new pg.Client({ connectionString: config.DB_URL }),
);
const workerPids = [];
const heartbeat = (client) =>
  client.query(
    "select to_jsonb(p) as progress from public.heartbeat_lesson($1) p",
    [ids.lesson],
  );

async function waitForLocks(count) {
  const deadline = Date.now() + 5000;
  while (Date.now() < deadline) {
    const result = await control.query(
      "select count(*)::integer as waiting from pg_stat_activity where pid=any($1::integer[]) and wait_event_type='Lock'",
      [workerPids],
    );
    if (result.rows[0].waiting === count) return;
    await new Promise((resolve) => setTimeout(resolve, 20));
  }
  throw new Error(`Expected ${count} workers blocked on row locks`);
}
async function resetProgress() {
  await control.query(
    "update public.user_lesson_progress set active_seconds=10,last_resumed_at=clock_timestamp()-interval '65 seconds',is_active=true where user_id=$1 and lesson_id=$2",
    [ids.student, ids.lesson],
  );
}
before(async () => {
  await control.connect();
  await control.query("begin");
  await control.query(
    "insert into auth.users(id,instance_id,aud,role,email,encrypted_password,email_confirmed_at,raw_app_meta_data,raw_user_meta_data,created_at,updated_at) values($1,'00000000-0000-0000-0000-000000000000','authenticated','authenticated',$2,'',now(),'{}','{}',now(),now())",
    [ids.student, `${ids.student}@timing-concurrency.invalid`],
  );
  await control.query(
    "insert into public.profiles(id,role) values($1,'student') on conflict(id) do nothing",
    [ids.student],
  );
  await control.query(
    "insert into public.courses(id,title,slug,created_by) values($1::uuid,'Timing concurrency fixture',$1::text,$2)",
    [ids.course, ids.student],
  );
  await control.query(
    "insert into public.lessons(id,course_id,title,slug,content_html,lesson_order,sequence_order,min_seconds) values($1::uuid,$2,'Timing fixture',$1::text,'<p>Fixture</p>',1,1,30)",
    [ids.lesson, ids.course],
  );
  await control.query(
    "insert into public.course_enrollments(user_id,course_id) values($1,$2)",
    [ids.student, ids.course],
  );
  await control.query(
    "insert into public.user_lesson_progress(user_id,lesson_id,started_at,is_active,active_seconds,last_resumed_at) values($1,$2,clock_timestamp(),true,10,clock_timestamp())",
    [ids.student, ids.lesson],
  );
  // Separate database sessions need committed synthetic rows. Cleanup below uses
  // only these fresh UUIDs and removes dependent evidence before its parents.
  await control.query("commit");
  for (const client of workers) {
    await client.connect();
    workerPids.push(
      (await client.query("select pg_backend_pid() as pid")).rows[0].pid,
    );
    await client.query("set statement_timeout='10s'");
    await client.query("set role authenticated");
    await client.query(
      "select set_config('request.jwt.claim.sub',$1,false),set_config('request.jwt.claims',$2,false)",
      [
        ids.student,
        JSON.stringify({ sub: ids.student, role: "authenticated" }),
      ],
    );
  }
});
after(async () => {
  await control.query("rollback");
  await Promise.all(workers.map((client) => client.end()));
  try {
    await control.query("begin");
    await control.query(
      "delete from public.user_lesson_progress where user_id=$1 and lesson_id=$2",
      [ids.student, ids.lesson],
    );
    await control.query(
      "delete from public.course_enrollments where user_id=$1 and course_id=$2",
      [ids.student, ids.course],
    );
    await control.query("delete from public.lessons where id=$1", [ids.lesson]);
    await control.query("delete from public.courses where id=$1", [ids.course]);
    await control.query("delete from auth.users where id=$1", [ids.student]);
    await control.query("commit");
  } finally {
    await control.end();
  }
});

test("heartbeat samples its clock after acquiring the row lock", async () => {
  await resetProgress();
  await control.query("begin");
  await control.query(
    "select 1 from public.user_lesson_progress where user_id=$1 and lesson_id=$2 for update",
    [ids.student, ids.lesson],
  );
  const pending = heartbeat(workers[0]);
  let expected;
  try {
    await waitForLocks(1);
    expected = (
      await control.query(
        "update public.user_lesson_progress set active_seconds=11,last_resumed_at=clock_timestamp() where user_id=$1 and lesson_id=$2 returning to_jsonb(user_lesson_progress) as progress",
        [ids.student, ids.lesson],
      )
    ).rows[0].progress;
  } finally {
    await control.query("commit");
  }
  const result = (await pending).rows[0].progress;
  assert.equal(result.active_seconds, 11);
  assert.ok(
    result.last_resumed_at >= expected.last_resumed_at,
    "a waiter must not move the activity clock backwards",
  );
});

test("two queued heartbeats credit an interval only once", async () => {
  await resetProgress();
  await control.query("begin");
  await control.query(
    "select 1 from public.user_lesson_progress where user_id=$1 and lesson_id=$2 for update",
    [ids.student, ids.lesson],
  );
  const pending = workers.map(heartbeat);
  try {
    await waitForLocks(2);
  } finally {
    await control.query("commit");
  }
  await Promise.all(pending);
  const result = await control.query(
    "select active_seconds from public.user_lesson_progress where user_id=$1 and lesson_id=$2",
    [ids.student, ids.lesson],
  );
  assert.equal(result.rows[0].active_seconds, 25);
});
