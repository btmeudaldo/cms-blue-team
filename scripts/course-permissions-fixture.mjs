import { randomUUID } from "node:crypto";
import { readFile, writeFile } from "node:fs/promises";
import { createClient } from "@supabase/supabase-js";
import assert from "node:assert/strict";
export const config = JSON.parse(
  await readFile(".vercel/local-supabase.json", "utf8"),
);
const target = new URL(config.API_URL);
assert.equal(config._project_id, "quiz-validation");
assert.equal(target.port, "55321");
assert.ok(["localhost", "127.0.0.1"].includes(target.hostname));
export const options = {
  auth: { persistSession: false, autoRefreshToken: false },
};
export const service = createClient(
  config.API_URL,
  config.SERVICE_ROLE_KEY,
  options,
);
export function success(result, label) {
  assert.equal(
    result.error ?? null,
    null,
    `${label}: ${result.error?.message ?? ""}`,
  );
  return result.data;
}
export async function login(account) {
  const client = createClient(config.API_URL, config.ANON_KEY, options);
  success(
    await client.auth.signInWithPassword({
      email: account.email,
      password: account.password,
    }),
    "fixture login",
  );
  return client;
}
export async function createEnrollmentFixture(label) {
  const suffix = randomUUID();
  const accounts = {};
  for (const role of ["admin", "instructor", "student"]) {
    const email = `enrollment-${role}-${suffix}@example.test`,
      password = `Fixture-${randomUUID()}!`;
    const user = success(
      await service.auth.admin.createUser({
        email,
        password,
        email_confirm: true,
      }),
      "fixture user",
    ).user;
    success(
      await service
        .from("profiles")
        .update({ role, full_name: `${label} ${role}`, email })
        .eq("id", user.id),
      "fixture profile",
    );
    accounts[role] = { id: user.id, email, password };
  }
  const courses = {};
  for (const kind of ["owned", "assigned", "outside"]) {
    const id = randomUUID(),
      title = `${label} ${kind}`;
    success(
      await service.from("courses").insert({
        id,
        title,
        slug: `scope-${id}`,
        created_by: accounts[kind === "owned" ? "instructor" : "admin"].id,
      }),
      "fixture course",
    );
    courses[kind] = { id, title };
  }
  success(
    await service.from("course_editors").insert({
      course_id: courses.assigned.id,
      user_id: accounts.instructor.id,
      assigned_by: accounts.admin.id,
    }),
    "fixture assignment",
  );
  success(
    await service
      .from("course_enrollments")
      .insert({ course_id: courses.outside.id, user_id: accounts.student.id }),
    "fixture outside enrollment",
  );
  return { ...accounts, courses };
}
export async function enrolled(fixture) {
  return success(
    await service
      .from("course_enrollments")
      .select("course_id")
      .eq("user_id", fixture.student.id),
    "read enrollment",
  )
    .map((row) => row.course_id)
    .sort();
}
if (process.argv.includes("--create")) {
  const fixtures = {};
  for (const project of ["chromium", "mobile"])
    fixtures[project] = await createEnrollmentFixture(`Matrículas ${project}`);
  await writeFile(
    ".vercel/enrollment-scope-fixture.json",
    JSON.stringify(fixtures),
  );
  console.log(
    "Local enrollment fixtures ready; credentials retained only in ignored .vercel directory.",
  );
}
