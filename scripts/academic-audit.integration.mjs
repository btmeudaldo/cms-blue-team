import { before, after, beforeEach, afterEach, test } from "node:test";
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

const eventQuery =
  "select * from public.academic_audit_events where entity_type=$1 and entity_id=$2 order by id desc";
async function latest(entity, id) {
  return (await db.query(eventQuery, [entity, id])).rows[0];
}
async function count() {
  return Number(
    (await db.query("select count(*) as n from public.academic_audit_events"))
      .rows[0].n,
  );
}
const report =
  "select public.report_academic_incident($1::uuid,$2::text,$3::text,$4::uuid) as id";
test("catalog enables RLS and excludes dangerous grants", async () => {
  const row = (
    await db.query(
      "select relrowsecurity from pg_class where oid='public.academic_audit_events'::regclass",
    )
  ).rows[0];
  assert.equal(row.relrowsecurity, true);
  for (const role of ["anon", "authenticated", "service_role"])
    for (const privilege of [
      "INSERT",
      "UPDATE",
      "DELETE",
      "TRUNCATE",
      "TRIGGER",
      "REFERENCES",
    ])
      assert.equal(
        (
          await db.query("select has_table_privilege($1,$2,$3) as allowed", [
            role,
            "public.academic_audit_events",
            privilege,
          ])
        ).rows[0].allowed,
        false,
      );
});
test("admin reads events while instructor and student read none", async () => {
  assert.ok(
    (
      await rows(
        ids.admin,
        "select id from public.academic_audit_events limit 1",
      )
    ).length,
  );
  for (const who of ["owner", "student"])
    assert.equal(
      (await rows(ids[who], "select id from public.academic_audit_events"))
        .length,
      0,
    );
});
test("anonymous cannot read events", () =>
  actor(
    null,
    async () => {
      await assert.rejects(
        db.query("select * from public.academic_audit_events"),
        { code: "42501" },
      );
    },
    "anon",
  ));
test("course change records authenticated actor and excludes free text", async () => {
  await actor(ids.admin, async () => {
    await db.query(
      "update public.courses set title='PRIVATE_TITLE' where id=$1",
      [ids.a],
    );
    const row = await latest("courses", ids.a);
    assert.equal(row.actor_id, ids.admin);
    assert.equal(row.actor_role, "admin");
    assert.equal(row.origin, "authenticated");
    assert.equal(row.operation, "UPDATE");
    assert.equal(row.course_id, ids.a);
    assert.ok(row.before_data);
    assert.ok(row.after_data);
    assert.ok(!JSON.stringify(row).includes("PRIVATE_TITLE"));
  });
});
test("profile role update excludes email and full name", async () => {
  await actor(ids.admin, async () => {
    await db.query(
      "update public.profiles set role='instructor',email='SECRET_EMAIL',full_name='SECRET_NAME' where id=$1",
      [ids.student],
    );
    const row = await latest("profiles", ids.student);
    assert.equal(row.before_data.role, "student");
    assert.equal(row.after_data.role, "instructor");
    assert.ok(!JSON.stringify(row).includes("SECRET_"));
  });
});
test("self-demotion records former persisted role", async () => {
  await db.query("savepoint selfrole");
  try {
    await db.query(
      "select set_config('request.jwt.claim.sub',$1,true),set_config('request.jwt.claims',$2,true)",
      [ids.admin, JSON.stringify({ sub: ids.admin, role: "authenticated" })],
    );
    await db.query("update public.profiles set role='student' where id=$1", [
      ids.admin,
    ]);
    assert.equal((await latest("profiles", ids.admin)).actor_role, "admin");
  } finally {
    await db.query("rollback to savepoint selfrole");
  }
});
test("database mutation is not attributed to subject", async () => {
  const row = await latest("course_enrollments", `${ids.student}:${ids.a}`);
  assert.equal(row.origin, "database");
  assert.equal(row.actor_id, null);
  assert.equal(row.subject_id, ids.student);
});
test("service mutation has explicit origin and no fabricated actor", async () => {
  await db.query("savepoint service_case");
  try {
    await db.query(
      "select set_config('request.jwt.claim.sub','',true),set_config('request.jwt.claims','{\"role\":\"service_role\"}',true)",
    );
    await db.query(
      "update public.courses set description='service-change' where id=$1",
      [ids.a],
    );
    const row = await latest("courses", ids.a);
    assert.equal(row.origin, "service");
    assert.equal(row.actor_id, null);
  } finally {
    await db.query("rollback to savepoint service_case");
  }
});
test("no-op updates and private profile changes produce no academic event", async () => {
  await db.query("savepoint noop");
  try {
    const before = await count();
    await db.query("update public.courses set title=title where id=$1", [
      ids.a,
    ]);
    await db.query(
      "update public.profiles set full_name='changed-private' where id=$1",
      [ids.student],
    );
    assert.equal(await count(), before);
  } finally {
    await db.query("rollback to savepoint noop");
  }
});
test("rollback removes audit records with their mutation", async () => {
  const before = await count();
  await db.query("savepoint rolled_back_change");
  await db.query(
    "update public.lessons set min_seconds=min_seconds+1 where id=$1",
    [ids.la],
  );
  assert.equal(await count(), before + 1);
  await db.query("rollback to savepoint rolled_back_change");
  assert.equal(await count(), before);
});
test("lesson requirements and content change are auditable without HTML", async () => {
  await actor(ids.admin, async () => {
    await db.query(
      "update public.lessons set min_seconds=99,content_html='<p>SECRET_HTML</p>' where id=$1",
      [ids.la],
    );
    const row = await latest("lessons", ids.la);
    assert.equal(row.after_data.min_seconds, 99);
    assert.notEqual(
      row.before_data.content_sha256,
      row.after_data.content_sha256,
    );
    assert.ok(!JSON.stringify(row).includes("SECRET_HTML"));
  });
});
test("progress transitions capture accredited time without changing evidence", async () => {
  await actor(ids.student, async () => {
    await db.query("select public.resume_lesson($1)", [ids.la]);
    await db.query("select public.pause_lesson($1)", [ids.la]);
  });
  await db.query("savepoint progress");
  try {
    await db.query(
      "update public.user_lesson_progress set active_seconds=17 where user_id=$1 and lesson_id=$2",
      [ids.student, ids.la],
    );
    const row = await latest(
      "user_lesson_progress",
      `${ids.student}:${ids.la}`,
    );
    assert.equal(row.after_data.active_seconds, 17);
    assert.equal(row.subject_id, ids.student);
  } finally {
    await db.query("rollback to savepoint progress");
  }
});
for (const operation of ["update", "delete", "truncate"])
  test(`even database owner cannot ${operation} audit via normal statements`, async () => {
    await db.query("savepoint immutable");
    try {
      await assert.rejects(
        db.query(
          operation === "update"
            ? "update public.academic_audit_events set operation='DELETE'"
            : operation === "delete"
              ? "delete from public.academic_audit_events"
              : "truncate public.academic_audit_events",
        ),
        { code: "42501" },
      );
    } finally {
      await db.query("rollback to savepoint immutable");
    }
  });
test("instructor can report scoped incident but cannot read history", async () => {
  await actor(ids.owner, async () => {
    const result = await db.query(report, [
      ids.a,
      "technical",
      "  Audio unavailable  ",
      randomUUID(),
    ]);
    assert.ok(result.rows[0].id);
    assert.equal(
      (await db.query("select id from public.academic_audit_events")).rowCount,
      0,
    );
  });
});
for (const who of ["student", "outsider", "demoted"])
  test(`${who} cannot report unauthorized incident`, () =>
    denied(ids[who], report, [
      ids.a,
      "integrity",
      "Observation",
      randomUUID(),
    ]));
test("incident request is idempotent and rejects changed content", async () => {
  await actor(ids.admin, async () => {
    const request = randomUUID(),
      params = [ids.a, "assessment", "Observation", request];
    const a = (await db.query(report, params)).rows[0].id;
    assert.equal((await db.query(report, params)).rows[0].id, a);
    const row = (
      await db.query("select * from public.academic_audit_events where id=$1", [
        a,
      ])
    ).rows[0];
    assert.equal(row.operation, "REPORT");
    assert.equal(row.entity_type, "incidents");
    assert.equal(row.after_data.description, "Observation");
    await db.query("savepoint changed_report");
    await assert.rejects(
      db.query(report, [ids.a, "assessment", "Changed", request]),
      { code: "22023" },
    );
    await db.query("rollback to savepoint changed_report");
    assert.equal(
      (
        await db.query(
          "select count(*)::integer n from public.academic_audit_events where actor_id=$1 and request_id=$2",
          [ids.admin, request],
        )
      ).rows[0].n,
      1,
    );
  });
});
for (const [category, description, request] of [
  ["invalid", "x", randomUUID()],
  ["technical", " ", randomUUID()],
  ["technical", "x".repeat(2001), randomUUID()],
  ["technical", "x", null],
])
  test(`invalid incident ${category}/${description.length}/${request === null} rejected`, () =>
    denied(
      ids.admin,
      report,
      [ids.a, category, description, request],
      ["22023"],
    ));
test("incident private implementation still checks authorization", () =>
  denied(ids.student, report.replace("public.", "academic_private."), [
    ids.a,
    "other",
    "Test",
    randomUUID(),
  ]));
test("deleting empty course retains its own and cascaded lesson history", async () => {
  await db.query("savepoint cascadecase");
  try {
    const course = randomUUID(),
      lesson = randomUUID();
    await db.query(
      "insert into public.courses(id,title,slug,created_by) values($1::uuid,'Transient',$1::text,$2)",
      [course, ids.admin],
    );
    await db.query(insertLesson, [lesson, course]);
    await db.query("delete from public.courses where id=$1", [course]);
    assert.equal((await latest("courses", course)).operation, "DELETE");
    assert.equal((await latest("lessons", lesson)).operation, "DELETE");
  } finally {
    await db.query("rollback to savepoint cascadecase");
  }
});

beforeEach(async()=>{await db.query('savepoint audit_test');});
afterEach(async()=>{await db.query('rollback to savepoint audit_test');await db.query('release savepoint audit_test');});

