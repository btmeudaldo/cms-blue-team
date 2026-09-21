import { before, after, test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import pg from 'pg';

const connectionString = process.env.QUIZ_TEST_DATABASE_URL;
if (!connectionString) throw new Error('Set QUIZ_TEST_DATABASE_URL to disposable local quiz_security_test');
const target = new URL(connectionString);
if (!['127.0.0.1','localhost'].includes(target.hostname) || target.pathname !== '/quiz_security_test') {
  throw new Error('Refusing to reset a database other than local quiz_security_test');
}
const db = new pg.Client({connectionString});
const uid = n => `00000000-0000-0000-0000-${String(n).padStart(12,'0')}`;
const student=uid(1), other=uid(2), owner=uid(3), editor=uid(4), outsider=uid(5), admin=uid(6);
const course=uid(10), course2=uid(11), lesson=uid(20), lesson2=uid(21);
const questions=[{id:'q1',question:'First?',options:['A','B'],correctAnswerIndex:1,explanation:'SECRET'},{id:'q2',question:'Second?',options:['C','D'],correctAnswerIndex:0,explanation:'SECRET'}];
async function actor(user, sql, params=[], role='authenticated') {
 const client = new pg.Client({connectionString}); await client.connect();
 try {
  await client.query('begin'); await client.query(`set local role ${role}`);
  await client.query("select set_config('request.jwt.claim.sub',$1,true)",[user ?? '']);
  const result=await client.query(sql,params); await client.query('commit'); return result.rows;
 } finally {await client.end();}
}
const rpc=async(user,name,args=[],casts=[]) => (await actor(user,`select public.${name}(${args.map((_,i)=>`$${i+1}::${casts[i]}`).join(',')}) as result`,args))[0].result;
const start=user=>rpc(user,'start_quiz_attempt',['quiz-a'],['text']);
const submit=(user,id,answers)=>rpc(user,'submit_quiz_attempt',[id,JSON.stringify(answers)],['uuid','jsonb']);
before(async()=>{
 await db.connect();
 await db.query('drop schema if exists quiz_private cascade; drop schema if exists auth cascade; drop schema public cascade; create schema public;');
 await db.query("do $$begin if not exists(select from pg_roles where rolname='anon') then create role anon nologin; end if; if not exists(select from pg_roles where rolname='authenticated') then create role authenticated nologin; end if; end$$;");
 await db.query(await readFile('supabase/tests/fixtures/quiz-security-baseline.sql','utf8'));
 await db.query('insert into auth.users select unnest($1::uuid[])',[[student,other,owner,editor,outsider,admin]]);
 for(const [id,role] of [[student,'student'],[other,'student'],[owner,'instructor'],[editor,'instructor'],[outsider,'instructor'],[admin,'admin']]) await db.query('insert into profiles values($1,$2)',[id,role]);
 await db.query('insert into courses values($1,$3),($2,$4)',[course,course2,owner,outsider]);
 await db.query("insert into lessons values($1,$3,'lesson-a'),($2,$4,'lesson-b')",[lesson,lesson2,course,course2]);
 await db.query('insert into course_enrollments(user_id,course_id) values($1,$2)',[student,course]);
 await db.query('insert into course_editors(course_id,user_id,assigned_by) values($1,$2,$3)',[course,editor,admin]);
 for(const [id,c,l] of [['quiz-a',course,lesson],['quiz-b',course2,lesson2]]) await db.query('insert into quizzes(id,course_id,lesson_id,lesson_slug,title,questions) values($1,$2,$3,$4,$1,$5)',[id,c,l,id,JSON.stringify(questions)]);
 await db.query("insert into quiz_attempts(id,user_id,quiz_id,score_percentage,correct_count,total_questions,passed,elapsed_seconds) values($1,$2,'quiz-a',50,1,2,false,20)",[uid(99),student]);
 if(process.env.QUIZ_MIGRATION) await db.query(await readFile(process.env.QUIZ_MIGRATION,'utf8'));
});
after(async()=>{await db.end();});
test('anonymous users cannot read the answer bank',async()=>{
 await assert.rejects(actor(null,'select questions from quizzes',[],'anon'),{code:'42501'});
});
test('students cannot read raw answer keys',async()=>{
 assert.deepEqual(await actor(student,'select * from quizzes'),[]);
});
test('students cannot insert fabricated grades',async()=>{
 await assert.rejects(actor(student,"insert into quiz_attempts(user_id,quiz_id,score_percentage,correct_count,total_questions,passed,elapsed_seconds) values($1,'quiz-a',100,2,2,true,0)",[student]),{code:'42501'});
});
test('students cannot update a stored grade',async()=>{
 await assert.rejects(actor(student,'update quiz_attempts set score_percentage=100,passed=true where id=$1',[uid(99)]),{code:'42501'});
});
test('API roles cannot delete or truncate results, including staff',async()=>{
 for(const role of ['anon','authenticated']) for(const operation of ['delete from quiz_attempts','truncate quiz_attempts']) await assert.rejects(actor(admin,operation,[],role),{code:'42501'});
});
test('bank and records scoped to owner, assigned editor and admin',async()=>{
 for(const id of [owner,editor,admin]) assert.equal((await actor(id,"select id from quizzes where id='quiz-a'")).length,1);
 assert.deepEqual(await actor(outsider,"select id from quizzes where id='quiz-a'"),[]);
 assert.deepEqual(await actor(outsider,'select id from quiz_attempts where id=$1',[uid(99)]),[]);
 assert.deepEqual(await actor(other,'select id from quiz_attempts'),[]);
 for(const id of [owner,editor,admin]) assert.equal((await actor(id,'select id from quiz_attempts where id=$1',[uid(99)])).length,1);
});
test('safe catalogue strips solutions and enforces enrollment, including filters',async()=>{
 const rows=await rpc(student,'list_available_quizzes'); assert.equal(rows.length,1);
 assert.deepEqual(rows[0].questions,[{id:'q1',question:'First?',options:['A','B']},{id:'q2',question:'Second?',options:['C','D']}]);
 assert.equal(rows[0].minPassScorePercentage,70);
 assert.deepEqual(await rpc(other,'list_available_quizzes'),[]);
 assert.deepEqual(await rpc(student,'list_available_quizzes',['quiz-b'],['text']),[]);
 assert.deepEqual(await rpc(student,'list_available_quizzes',[null,lesson2],['text','uuid']),[]);
});
test('no anonymous or missing-identity RPC access',async()=>{
 await assert.rejects(actor(null,'select public.list_available_quizzes()',[],'anon'),{code:'42501'});
 await assert.rejects(start(null),{code:'42501'});
 await assert.rejects(start(other),{code:'42501'});
});
test('server grades persisted snapshot with its own clock, not edited bank',async()=>{
 const begun=await start(student); assert.ok(begun.attempt_id); assert.ok(begun.started_at);
 assert.equal(JSON.stringify(begun).includes('correctAnswerIndex'),false);
 await db.query("update quizzes set questions=jsonb_set(questions,'{0,correctAnswerIndex}','0'),min_pass_score_percentage=10 where id='quiz-a'");
 try {
  const result=await submit(student,begun.attempt_id,{q1:1,q2:1});
  assert.equal(result.score_percentage,50); assert.equal(result.passed,false); assert.equal(result.min_pass_score_percentage,70);
  assert.equal(result.correct_count,1); assert.equal(result.user_id,student);
  assert.ok(result.elapsed_seconds>=0); assert.ok(new Date(result.completed_at)>=new Date(begun.started_at));
  const persisted=(await actor(student,'select * from quiz_attempts where id=$1',[begun.attempt_id]))[0];
  assert.equal(persisted.score_percentage,50); assert.deepEqual(persisted.answers,{q1:1,q2:1});
 } finally {await db.query("update quizzes set questions=$1,min_pass_score_percentage=70 where id='quiz-a'",[JSON.stringify(questions)]);}
});
test('ownership, unknown attempts and revoked enrollment reject submissions',async()=>{
 const begun=await start(student);
 await assert.rejects(submit(other,begun.attempt_id,{q1:1,q2:0}),{code:'42501'});
 await assert.rejects(submit(student,uid(888),{q1:1,q2:0}),{code:'42501'});
 await db.query('delete from course_enrollments where user_id=$1',[student]);
 try{await assert.rejects(submit(student,begun.attempt_id,{q1:1,q2:0}),{code:'42501'});}finally{await db.query('insert into course_enrollments(user_id,course_id) values($1,$2)',[student,course]);}
});
test('malformed, missing, unknown and out-of-range answers are rejected',async()=>{
 const begun=await start(student);
 for(const answers of [null,[],{}, {q1:1},{q1:1,q2:0,extra:1},{q1:-1,q2:0},{q1:2,q2:0},{q1:'1',q2:0},{q1:0.5,q2:0}]) await assert.rejects(submit(student,begun.attempt_id,answers),{code:'22023'});
 assert.equal((await actor(student,'select id from quiz_attempts where id=$1',[begun.attempt_id])).length,0);
});
test('retry and simultaneous identical deliveries persist exactly one immutable grade',async()=>{
 const begun=await start(student); const answers={q1:1,q2:0};
 const results=await Promise.all([submit(student,begun.attempt_id,answers),submit(student,begun.attempt_id,answers)]);
 assert.deepEqual(results[0],results[1]); assert.equal(results[0].score_percentage,100);
 assert.deepEqual(await submit(student,begun.attempt_id,answers),results[0]);
 await assert.rejects(submit(student,begun.attempt_id,{q1:0,q2:0}),{code:'22023'});
 assert.equal((await actor(student,'select id from quiz_attempts where id=$1',[begun.attempt_id])).length,1);
});
test('private snapshots have RLS and no table access; public RPC are invokers',async()=>{
 await assert.rejects(actor(student,'select * from quiz_private.attempt_snapshots'),{code:'42501'});
 const defs=await db.query("select prosecdef from pg_proc join pg_namespace n on n.oid=pronamespace where n.nspname='public' and proname in ('list_available_quizzes','start_quiz_attempt','submit_quiz_attempt')");
 assert.equal(defs.rowCount,3); assert.ok(defs.rows.every(r=>!r.prosecdef));
 assert.equal((await db.query("select relrowsecurity from pg_class where oid='quiz_private.attempt_snapshots'::regclass")).rows[0].relrowsecurity,true);
});
test('legacy grade remains unchanged and is not labelled server graded',async()=>{
 const row=(await actor(student,'select * from quiz_attempts where id=$1',[uid(99)]))[0];
 assert.equal(row.score_percentage,50); assert.equal(row.passed,false); assert.equal(row.grading_version,null);
});
