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
const db = new pg.Client({ connectionString: config.DB_URL });
const ids = Object.fromEntries(
  [
    "admin",
    "reader",
    "legacy",
    "started",
    "emptyUser",
    "progressCourse",
    "legacyCourse",
    "snapshotCourse",
    "emptyCourse",
    "destination",
    "progressLesson",
    "legacyLesson",
    "snapshotLesson",
    "emptyLesson",
    "legacyQuiz",
    "snapshotQuiz",
    "attempt",
    "snapshot",
  ].map((name) => [name, randomUUID()]),
);

async function isolated(operation, authenticated = false) {
  await db.query("savepoint operation");
  try {
    if (authenticated) {
      await db.query("set local role authenticated");
      await db.query(
        "select set_config('request.jwt.claim.sub',$1,true),set_config('request.jwt.claims',$2,true)",
        [ids.admin, JSON.stringify({ sub: ids.admin, role: "authenticated" })],
      );
    }
    return await operation();
  } finally {
    await db.query("rollback to savepoint operation");
    await db.query("release savepoint operation");
  }
}
async function preserved(
  sql,
  params,
  checkSql,
  checkParams,
  authenticated = false,
) {
  // Statement rollback must preserve its dependents before our fixture rollback.
  await isolated(async () => {
    await db.query("savepoint attempted_delete");
    let failure;
    try {
      await db.query(sql, params);
    } catch (error) {
      failure = error;
    }
    if (failure) await db.query("rollback to savepoint attempted_delete");
    assert.equal(
      failure?.code,
      "23503",
      "deletion must be rejected by an evidence FK",
    );
    await db.query("reset role");
    assert.equal((await db.query(checkSql, checkParams)).rows[0].present, true);
  }, authenticated);
}
before(async () => {
  await db.connect();
  await db.query("begin");
  for (const name of ["admin", "reader", "legacy", "started", "emptyUser"]) {
    await db.query(
      "insert into auth.users(id,instance_id,aud,role,email,encrypted_password,email_confirmed_at,raw_app_meta_data,raw_user_meta_data,created_at,updated_at) values($1,'00000000-0000-0000-0000-000000000000','authenticated','authenticated',$2,'',now(),'{}','{}',now(),now())",
      [ids[name], `${ids[name]}@preservation.invalid`],
    );
    await db.query(
      "insert into public.profiles(id,role) values($1,$2) on conflict(id) do update set role=excluded.role",
      [ids[name], name === "admin" ? "admin" : "student"],
    );
  }
  for (const [course, lesson] of [
    ["progressCourse", "progressLesson"],
    ["legacyCourse", "legacyLesson"],
    ["snapshotCourse", "snapshotLesson"],
    ["emptyCourse", "emptyLesson"],
    ["destination", null],
  ]) {
    await db.query(
      "insert into public.courses(id,title,slug,created_by) values($1::uuid,'Preservation fixture',$1::text,$2)",
      [ids[course], ids.admin],
    );
    if (lesson)
      await db.query(
        "insert into public.lessons(id,course_id,title,slug,content_html,lesson_order,sequence_order,min_seconds) values($1::uuid,$2,'Fixture',$1::text,'<p>Fixture</p>',1,1,0)",
        [ids[lesson], ids[course]],
      );
  }
  await db.query(
    "insert into public.user_lesson_progress(user_id,lesson_id,started_at,is_completed) values($1,$2,now(),false)",
    [ids.reader, ids.progressLesson],
  );
  for (const [quiz, course, lesson] of [
    ["legacyQuiz", "legacyCourse", "legacyLesson"],
    ["snapshotQuiz", "snapshotCourse", "snapshotLesson"],
  ])
    await db.query(
      "insert into public.quizzes(id,course_id,lesson_id,lesson_slug,title,questions) values($1,$2,$3,$4,'Fixture','[]')",
      [ids[quiz], ids[course], ids[lesson], ids[lesson]],
    );
  await db.query(
    "insert into public.quiz_attempts(id,user_id,quiz_id,score_percentage,correct_count,total_questions,passed,elapsed_seconds) values($1,$2,$3,0,0,1,false,0)",
    [ids.attempt, ids.legacy, ids.legacyQuiz],
  );
  await db.query(
    "insert into quiz_private.attempt_snapshots(id,user_id,quiz_id,course_id,bank) values($1,$2,$3,$4,'{}')",
    [ids.snapshot, ids.started, ids.snapshotQuiz, ids.snapshotCourse],
  );
});
after(async () => {
  try {
    await db.query("rollback");
  } finally {
    await db.end();
  }
});

const progressCheck =
  "select exists(select 1 from public.user_lesson_progress p join public.lessons l on l.id=p.lesson_id join public.courses c on c.id=l.course_id join public.profiles profile on profile.id=p.user_id join auth.users u on u.id=profile.id where p.user_id=$1 and p.lesson_id=$2 and not p.is_completed) as present";
for (const [table, key, authenticated] of [
  ["public.lessons", "progressLesson", true],
  ["public.courses", "progressCourse", true],
  ["public.profiles", "reader", false],
  ["auth.users", "reader", false],
])
  test(`${table} deletion preserves incomplete progress and all parents`, () =>
    preserved(
      `delete from ${table} where id=$1`,
      [ids[key]],
      progressCheck,
      [ids.reader, ids.progressLesson],
      authenticated,
    ));

test("auth user with only a legacy result cannot be deleted", () =>
  preserved(
    "delete from auth.users where id=$1",
    [ids.legacy],
    "select exists(select 1 from public.quiz_attempts a join auth.users u on u.id=a.user_id where a.id=$1 and a.grading_version is null) as present",
    [ids.attempt],
  ));
test("auth user with only an unfinished snapshot cannot be deleted", () =>
  preserved(
    "delete from auth.users where id=$1",
    [ids.started],
    "select exists(select 1 from quiz_private.attempt_snapshots s join auth.users u on u.id=s.user_id where s.id=$1) as present",
    [ids.snapshot],
  ));

for (const [table, key, authenticated] of [
  ["auth.users", "emptyUser", false],
  ["public.lessons", "emptyLesson", true],
  ["public.courses", "emptyCourse", true],
])
  test(`${table} without academic evidence remains deletable`, () =>
    isolated(async () => {
      assert.equal(
        (
          await db.query(`delete from ${table} where id=$1 returning id`, [
            ids[key],
          ])
        ).rowCount,
        1,
      );
    }, authenticated));

for (const lesson of ["emptyLesson", "progressLesson"])
  test(`lesson course identity is immutable for ${lesson}`, async () => {
    await assert.rejects(
      isolated(
        () =>
          db.query(
            "update public.lessons set course_id=$2 where id=$1 returning id",
            [ids[lesson], ids.destination],
          ),
        true,
      ),
      { code: "22023" },
    );
  });

for (const [quiz, lesson, course, recordTable, record] of [
  [
    "legacyQuiz",
    "legacyLesson",
    "legacyCourse",
    "public.quiz_attempts",
    "attempt",
  ],
  [
    "snapshotQuiz",
    "snapshotLesson",
    "snapshotCourse",
    "quiz_private.attempt_snapshots",
    "snapshot",
  ],
]) {
  for (const [table, key] of [
    ["public.quizzes", quiz],
    ["public.lessons", lesson],
    ["public.courses", course],
  ])
    test(`${table} preserves ${record} evidence`, () =>
      preserved(
        `delete from ${table} where id=$1`,
        [ids[key]],
        `select exists(select 1 from ${recordTable} r join public.quizzes q on q.id=r.quiz_id join public.lessons l on l.id=q.lesson_id join public.courses c on c.id=l.course_id where r.id=$1) as present`,
        [ids[record]],
      ));
}
for (const table of ["courses", "profiles"])
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
