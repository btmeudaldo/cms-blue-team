begin;
set local lock_timeout = '5s';

-- Deliberately separate from exposed API schemas; no student can read snapshots.
create schema if not exists quiz_private;
revoke all on schema quiz_private from public, anon, authenticated;
grant usage on schema quiz_private to authenticated;

create function quiz_private.can_edit_course(target_course_id uuid)
returns boolean language sql stable security definer set search_path = '' as $$
  select auth.uid() is not null and exists (
    select 1 from public.profiles p where p.id = auth.uid() and (
      p.role = 'admin' or (p.role = 'instructor' and (
        exists (select 1 from public.courses c where c.id = target_course_id and c.created_by = p.id)
        or exists (select 1 from public.course_editors e where e.course_id = target_course_id and e.user_id = p.id)
      ))
    )
  );
$$;

create function quiz_private.can_take_course(target_course_id uuid)
returns boolean language sql stable security definer set search_path = '' as $$
  select auth.uid() is not null and (
    quiz_private.can_edit_course(target_course_id) or exists (
      select 1 from public.profiles p join public.course_enrollments e on e.user_id = p.id
      where p.id = auth.uid() and p.role = 'student' and e.course_id = target_course_id
    )
  );
$$;

-- Explicit allowlist also excludes explanations and any future answer metadata.
create function quiz_private.student_quiz(bank jsonb)
returns jsonb language sql immutable set search_path = '' as $$
  select jsonb_build_object(
    'id', bank->'id', 'course_id', bank->'course_id', 'lesson_id', bank->'lesson_id',
    'title', bank->'title', 'description', bank->'description',
    'minPassScorePercentage', bank->'min_pass_score_percentage',
    'questions', coalesce((select jsonb_agg(jsonb_build_object(
      'id', q.value->'id', 'question', q.value->'question', 'options', q.value->'options'
    ) order by q.ordinality) from jsonb_array_elements(bank->'questions') with ordinality q), '[]'::jsonb)
  );
$$;

create table quiz_private.attempt_snapshots (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  quiz_id text not null references public.quizzes(id) on delete restrict,
  course_id uuid not null,
  started_at timestamptz not null default clock_timestamp(),
  bank jsonb not null
);
create index attempt_snapshots_user_id_idx on quiz_private.attempt_snapshots(user_id);
create index attempt_snapshots_quiz_id_idx on quiz_private.attempt_snapshots(quiz_id);
alter table quiz_private.attempt_snapshots enable row level security;
revoke all on quiz_private.attempt_snapshots from public, anon, authenticated;

-- NULL explicitly means legacy, not revalidated server grading.
alter table public.quiz_attempts
  add column grading_version text,
  add column started_at timestamptz,
  add column min_pass_score_percentage integer;

-- Revoke indirect deletion as well: legacy results have no snapshot FK protection.
alter table public.quiz_attempts drop constraint quiz_attempts_quiz_id_fkey;
alter table public.quiz_attempts add constraint quiz_attempts_quiz_id_fkey
  foreign key (quiz_id) references public.quizzes(id) on delete restrict;

create function quiz_private.keep_quiz_scope()
returns trigger language plpgsql security invoker set search_path = '' as $$
begin
  if new.course_id is distinct from old.course_id or new.lesson_id is distinct from old.lesson_id then
    raise exception 'Quiz course and lesson cannot change' using errcode = '22023';
  end if;
  return new;
end;
$$;
create trigger keep_quiz_scope before update on public.quizzes
  for each row execute function quiz_private.keep_quiz_scope();

alter table public.quizzes enable row level security;
alter table public.quiz_attempts enable row level security;
do $$
declare policy_row record;
begin
  for policy_row in select tablename, policyname from pg_policies
    where schemaname = 'public' and tablename in ('quizzes', 'quiz_attempts')
  loop
    execute format('drop policy %I on public.%I', policy_row.policyname, policy_row.tablename);
  end loop;
end;
$$;
revoke all on public.quizzes, public.quiz_attempts from public, anon, authenticated;
grant select, insert, update, delete on public.quizzes to authenticated;
grant select on public.quiz_attempts to authenticated;

create policy quiz_bank_editors_read on public.quizzes for select to authenticated
  using (quiz_private.can_edit_course(course_id));
create policy quiz_bank_editors_insert on public.quizzes for insert to authenticated
  with check (quiz_private.can_edit_course(course_id) and exists (
    select 1 from public.lessons l where l.id = quizzes.lesson_id and l.course_id = quizzes.course_id
  ));
create policy quiz_bank_editors_update on public.quizzes for update to authenticated
  using (quiz_private.can_edit_course(course_id))
  with check (quiz_private.can_edit_course(course_id) and exists (
    select 1 from public.lessons l where l.id = quizzes.lesson_id and l.course_id = quizzes.course_id
  ));
create policy quiz_bank_editors_delete on public.quizzes for delete to authenticated
  using (quiz_private.can_edit_course(course_id));
create policy quiz_results_scoped_read on public.quiz_attempts for select to authenticated
  using (user_id = (select auth.uid()) or exists (
    select 1 from public.quizzes q where q.id = quiz_attempts.quiz_id and quiz_private.can_edit_course(q.course_id)
  ));

create function quiz_private.list_available_quizzes(p_quiz_id text, p_lesson_id uuid)
returns jsonb language plpgsql stable security definer set search_path = '' as $$
begin
  if auth.uid() is null then raise exception 'Authentication required' using errcode = '42501'; end if;
  return coalesce((select jsonb_agg(quiz_private.student_quiz(to_jsonb(q)) order by q.id)
    from public.quizzes q
    where (p_quiz_id is null or q.id = p_quiz_id)
      and (p_lesson_id is null or q.lesson_id = p_lesson_id)
      and quiz_private.can_take_course(q.course_id)), '[]'::jsonb);
end;
$$;

create function quiz_private.start_quiz_attempt(p_quiz_id text)
returns jsonb language plpgsql security definer set search_path = '' as $$
declare
  bank_row public.quizzes%rowtype;
  snapshot_row quiz_private.attempt_snapshots%rowtype;
  question jsonb;
  identifiers text[] := array[]::text[];
  answer_index numeric;
begin
  if auth.uid() is null then raise exception 'Authentication required' using errcode = '42501'; end if;
  select * into bank_row from public.quizzes where id = p_quiz_id;
  if not found or not quiz_private.can_take_course(bank_row.course_id) then
    raise exception 'Quiz access denied' using errcode = '42501';
  end if;
  if jsonb_typeof(bank_row.questions) <> 'array' or bank_row.min_pass_score_percentage not between 0 and 100 then
    raise exception 'Invalid question bank' using errcode = '22023';
  end if;
  if jsonb_array_length(bank_row.questions) = 0 then
    raise exception 'Empty question bank' using errcode = '22023';
  end if;
  for question in select value from jsonb_array_elements(bank_row.questions) loop
    if jsonb_typeof(question->'id') is distinct from 'string'
      or coalesce(question->>'id', '') = '' or (question->>'id') = any(identifiers)
      or jsonb_typeof(question->'question') is distinct from 'string'
      or jsonb_typeof(question->'options') is distinct from 'array'
      or jsonb_typeof(question->'correctAnswerIndex') is distinct from 'number' then
      raise exception 'Invalid question bank' using errcode = '22023';
    end if;
    answer_index := (question->>'correctAnswerIndex')::numeric;
    if jsonb_array_length(question->'options') < 2 or answer_index <> trunc(answer_index)
      or answer_index < 0 or answer_index >= jsonb_array_length(question->'options')
      or exists(select 1 from jsonb_array_elements(question->'options') option where jsonb_typeof(option) <> 'string') then
      raise exception 'Invalid answer bank' using errcode = '22023';
    end if;
    identifiers := array_append(identifiers, question->>'id');
  end loop;
  insert into quiz_private.attempt_snapshots(user_id, quiz_id, course_id, bank)
    values(auth.uid(), bank_row.id, bank_row.course_id, to_jsonb(bank_row)) returning * into snapshot_row;
  return jsonb_build_object('attempt_id', snapshot_row.id, 'started_at', snapshot_row.started_at,
    'quiz', quiz_private.student_quiz(snapshot_row.bank));
end;
$$;

create function quiz_private.submit_quiz_attempt(p_attempt_id uuid, p_answers jsonb)
returns jsonb language plpgsql security definer set search_path = '' as $$
declare
  snapshot_row quiz_private.attempt_snapshots%rowtype;
  result_row public.quiz_attempts%rowtype;
  question jsonb;
  answer_value jsonb;
  answer_index numeric;
  correct_answers integer := 0;
  question_count integer;
  percentage integer;
  threshold integer;
  finished_at timestamptz;
begin
  if auth.uid() is null then raise exception 'Authentication required' using errcode = '42501'; end if;
  -- Serializes concurrent submissions; result and snapshot cannot diverge.
  select * into snapshot_row from quiz_private.attempt_snapshots
    where id = p_attempt_id and user_id = auth.uid() for update;
  if not found or not quiz_private.can_take_course(snapshot_row.course_id) then
    raise exception 'Attempt access denied' using errcode = '42501';
  end if;
  if jsonb_typeof(p_answers) is distinct from 'object' then
    raise exception 'Invalid answers' using errcode = '22023';
  end if;
  select * into result_row from public.quiz_attempts where id = p_attempt_id;
  if found then
    if result_row.answers is distinct from p_answers then
      raise exception 'Attempt already submitted with different answers' using errcode = '22023';
    end if;
    return to_jsonb(result_row);
  end if;
  question_count := jsonb_array_length(snapshot_row.bank->'questions');
  if (select count(*) from jsonb_object_keys(p_answers)) <> question_count then
    raise exception 'Answer every question exactly once' using errcode = '22023';
  end if;
  for question in select value from jsonb_array_elements(snapshot_row.bank->'questions') loop
    answer_value := p_answers->(question->>'id');
    if jsonb_typeof(answer_value) is distinct from 'number' then
      raise exception 'Invalid answer type' using errcode = '22023';
    end if;
    answer_index := answer_value::text::numeric;
    if answer_index <> trunc(answer_index) or answer_index < 0
      or answer_index >= jsonb_array_length(question->'options') then
      raise exception 'Invalid answer index' using errcode = '22023';
    end if;
    if answer_index = (question->>'correctAnswerIndex')::numeric then correct_answers := correct_answers + 1; end if;
  end loop;
  percentage := round(100.0 * correct_answers / question_count);
  threshold := (snapshot_row.bank->>'min_pass_score_percentage')::integer;
  finished_at := clock_timestamp();
  insert into public.quiz_attempts(id, user_id, quiz_id, score_percentage, correct_count,
    total_questions, passed, elapsed_seconds, completed_at, score, answers,
    grading_version, started_at, min_pass_score_percentage)
  values(snapshot_row.id, snapshot_row.user_id, snapshot_row.quiz_id, percentage, correct_answers,
    question_count, percentage >= threshold,
    greatest(0, floor(extract(epoch from (finished_at - snapshot_row.started_at))))::integer,
    finished_at, percentage, p_answers, 'server-v1', snapshot_row.started_at, threshold)
  returning * into result_row;
  return to_jsonb(result_row);
end;
$$;

create function public.list_available_quizzes(p_quiz_id text default null, p_lesson_id uuid default null)
returns jsonb language sql stable security invoker set search_path = '' as $$
  select quiz_private.list_available_quizzes(p_quiz_id, p_lesson_id);
$$;
create function public.start_quiz_attempt(p_quiz_id text)
returns jsonb language sql security invoker set search_path = '' as $$
  select quiz_private.start_quiz_attempt(p_quiz_id);
$$;
create function public.submit_quiz_attempt(p_attempt_id uuid, p_answers jsonb)
returns jsonb language sql security invoker set search_path = '' as $$
  select quiz_private.submit_quiz_attempt(p_attempt_id, p_answers);
$$;

revoke all on all functions in schema quiz_private from public, anon, authenticated;
grant execute on function quiz_private.can_edit_course(uuid),
  quiz_private.list_available_quizzes(text,uuid), quiz_private.start_quiz_attempt(text),
  quiz_private.submit_quiz_attempt(uuid,jsonb) to authenticated;
revoke all on function public.list_available_quizzes(text,uuid), public.start_quiz_attempt(text),
  public.submit_quiz_attempt(uuid,jsonb) from public, anon, authenticated;
grant execute on function public.list_available_quizzes(text,uuid), public.start_quiz_attempt(text),
  public.submit_quiz_attempt(uuid,jsonb) to authenticated;
commit;
