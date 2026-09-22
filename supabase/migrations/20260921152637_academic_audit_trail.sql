begin;
set local lock_timeout = '5s';
create schema academic_private;
revoke all on schema academic_private from public, anon, authenticated, service_role;
grant usage on schema academic_private to authenticated;

create table public.academic_audit_events (
  id bigint generated always as identity primary key,
  occurred_at timestamptz not null default clock_timestamp(),
  transaction_id bigint not null default txid_current(),
  actor_id uuid,
  actor_role text,
  origin text not null check (origin in ('authenticated','service','database')),
  entity_type text not null,
  operation text not null check (operation in ('INSERT','UPDATE','DELETE','REPORT')),
  entity_id text not null,
  course_id uuid,
  subject_id uuid,
  before_data jsonb,
  after_data jsonb,
  request_id uuid
);
create index academic_audit_events_course_id_idx on public.academic_audit_events(course_id,id desc);
create index academic_audit_events_subject_id_idx on public.academic_audit_events(subject_id,id desc);
create unique index academic_audit_events_request_idx on public.academic_audit_events(actor_id,request_id) where request_id is not null;
alter table public.academic_audit_events enable row level security;
revoke all on public.academic_audit_events from public, anon, authenticated, service_role;
revoke all on sequence public.academic_audit_events_id_seq from public, anon, authenticated, service_role;
grant select on public.academic_audit_events to authenticated;
create policy academic_audit_admin_read on public.academic_audit_events for select to authenticated using (public.is_admin());

create function academic_private.prevent_audit_mutation()
returns trigger language plpgsql security invoker set search_path = '' as $$
begin
  raise exception 'Academic history is append-only' using errcode = '42501';
end;
$$;
create trigger academic_audit_immutable before update or delete or truncate on public.academic_audit_events
for each statement execute function academic_private.prevent_audit_mutation();

create function academic_private.text_fingerprint(value text)
returns text language sql immutable strict security invoker set search_path = '' as $$
  select encode(sha256(convert_to(value,'UTF8')),'hex');
$$;

-- Explicit projections prevent future columns from silently entering the audit trail.
create function academic_private.safe_payload(entity text, value jsonb)
returns jsonb language plpgsql immutable security invoker set search_path = '' as $$
begin
  if value is null then return null; end if;
  case entity
  when 'courses' then return jsonb_build_object(
    'id',value->'id','created_by',value->'created_by',
    'title_sha256',academic_private.text_fingerprint(value->>'title'),
    'slug_sha256',academic_private.text_fingerprint(value->>'slug'),
    'description_sha256',academic_private.text_fingerprint(value->>'description'),
    'image_sha256',academic_private.text_fingerprint(value->>'image_url'));
  when 'lessons' then return jsonb_build_object(
    'id',value->'id','course_id',value->'course_id','min_seconds',value->'min_seconds',
    'word_count',value->'word_count','lesson_order',value->'lesson_order','sequence_order',value->'sequence_order',
    'title_sha256',academic_private.text_fingerprint(value->>'title'),
    'slug_sha256',academic_private.text_fingerprint(value->>'slug'),
    'content_sha256',academic_private.text_fingerprint(value->>'content_html'));
  when 'course_enrollments' then return jsonb_build_object('user_id',value->'user_id','course_id',value->'course_id','enrolled_at',value->'enrolled_at');
  when 'course_editors' then return jsonb_build_object('user_id',value->'user_id','course_id',value->'course_id','assigned_by',value->'assigned_by','assigned_at',value->'assigned_at');
  when 'profiles' then return jsonb_build_object('id',value->'id','role',value->'role');
  when 'quizzes' then return jsonb_build_object(
    'id',value->'id','course_id',value->'course_id','lesson_id',value->'lesson_id',
    'min_pass_score_percentage',value->'min_pass_score_percentage','passing_score',value->'passing_score',
    'title_sha256',academic_private.text_fingerprint(value->>'title'),
    'description_sha256',academic_private.text_fingerprint(value->>'description'),
    'question_count',case when jsonb_typeof(value->'questions')='array' then jsonb_array_length(value->'questions') else null end);
  when 'attempt_snapshots' then return jsonb_build_object('id',value->'id','user_id',value->'user_id','quiz_id',value->'quiz_id','course_id',value->'course_id','started_at',value->'started_at');
  when 'quiz_attempts' then return jsonb_build_object(
    'id',value->'id','user_id',value->'user_id','quiz_id',value->'quiz_id','score_percentage',value->'score_percentage',
    'correct_count',value->'correct_count','total_questions',value->'total_questions','passed',value->'passed',
    'elapsed_seconds',value->'elapsed_seconds','completed_at',value->'completed_at','started_at',value->'started_at',
    'grading_version',value->'grading_version','min_pass_score_percentage',value->'min_pass_score_percentage');
  when 'user_lesson_progress' then return jsonb_build_object(
    'user_id',value->'user_id','lesson_id',value->'lesson_id','started_at',value->'started_at',
    'completed_at',value->'completed_at','elapsed_seconds',value->'elapsed_seconds',
    'is_completed',value->'is_completed','active_seconds',value->'active_seconds',
    'last_resumed_at',value->'last_resumed_at','is_active',value->'is_active','last_heartbeat_at',value->'last_heartbeat_at');
  else raise exception 'Unsupported audit entity' using errcode='22023';
  end case;
end;
$$;

create function academic_private.capture_change()
returns trigger language plpgsql security definer set search_path = '' as $$
declare
  previous_row jsonb;
  current_row jsonb;
  identity_row jsonb;
  previous_safe jsonb;
  current_safe jsonb;
  event_actor uuid;
  event_role text;
  event_origin text;
  entity_key text;
  event_course uuid;
  event_subject uuid;
begin
  if tg_op <> 'INSERT' then previous_row := to_jsonb(old); end if;
  if tg_op <> 'DELETE' then current_row := to_jsonb(new); end if;
  identity_row := coalesce(current_row,previous_row);
  previous_safe := academic_private.safe_payload(tg_table_name,previous_row);
  current_safe := academic_private.safe_payload(tg_table_name,current_row);
  if tg_table_name='quizzes' and tg_op='UPDATE' and previous_row->'questions' is distinct from current_row->'questions' then
    current_safe := current_safe || jsonb_build_object('questions_changed',true);
  end if;
  if tg_table_name='quiz_attempts' and tg_op='UPDATE' and previous_row->'answers' is distinct from current_row->'answers' then
    current_safe := current_safe || jsonb_build_object('answers_changed',true);
  end if;
  if tg_table_name='attempt_snapshots' and tg_op='UPDATE' and previous_row->'bank' is distinct from current_row->'bank' then
    current_safe := current_safe || jsonb_build_object('bank_changed',true);
  end if;
  if tg_op='UPDATE' and previous_safe is not distinct from current_safe then return new; end if;

  event_origin := case when auth.jwt()->>'role'='service_role' then 'service'
    when auth.jwt()->>'role'='authenticated' then 'authenticated' else 'database' end;
  if event_origin='authenticated' then
    event_actor := auth.uid();
    if tg_table_name='profiles' and tg_op in ('UPDATE','DELETE') and (previous_row->>'id')::uuid=event_actor then
      event_role := previous_row->>'role';
    else
      select role::text into event_role from public.profiles where id=event_actor;
    end if;
  end if;

  entity_key := identity_row->>'id';
  event_course := (identity_row->>'course_id')::uuid;
  event_subject := (identity_row->>'user_id')::uuid;
  if tg_table_name='courses' then event_course := (identity_row->>'id')::uuid; end if;
  if tg_table_name='profiles' then event_subject := (identity_row->>'id')::uuid; end if;
  if tg_table_name='course_enrollments' then entity_key := (identity_row->>'user_id')||':'||(identity_row->>'course_id'); end if;
  if tg_table_name='course_editors' then entity_key := (identity_row->>'course_id')||':'||(identity_row->>'user_id'); end if;
  if tg_table_name='user_lesson_progress' then
    entity_key := (identity_row->>'user_id')||':'||(identity_row->>'lesson_id');
    select course_id into event_course from public.lessons where id=(identity_row->>'lesson_id')::uuid;
  end if;
  if tg_table_name='quiz_attempts' then
    select course_id into event_course from public.quizzes where id=identity_row->>'quiz_id';
  end if;
  insert into public.academic_audit_events(actor_id,actor_role,origin,entity_type,operation,entity_id,course_id,subject_id,before_data,after_data)
  values(event_actor,event_role,event_origin,tg_table_name,tg_op,entity_key,event_course,event_subject,previous_safe,current_safe);
  if tg_op='DELETE' then return old; end if;
  return new;
end;
$$;

do $$
declare relation text;
begin
  foreach relation in array array['public.courses','public.lessons','public.course_enrollments','public.course_editors','public.profiles','public.quizzes','public.quiz_attempts','public.user_lesson_progress','quiz_private.attempt_snapshots'] loop
    execute format('create trigger capture_academic_change after insert or update or delete on %s for each row execute function academic_private.capture_change()',relation);
  end loop;
end;
$$;

create function academic_private.report_academic_incident(p_course_id uuid,p_category text,p_description text,p_request_id uuid)
returns bigint language plpgsql security definer set search_path = '' as $$
declare
  actor uuid := auth.uid();
  persisted_role text;
  description text := btrim(p_description);
  prior public.academic_audit_events;
  result_id bigint;
begin
  if actor is null then raise exception 'Authentication required' using errcode='42501'; end if;
  select role::text into persisted_role from public.profiles where id=actor for share;
  if persisted_role is null or persisted_role not in ('admin','instructor') then
    raise exception 'Incident reporting denied' using errcode='42501';
  end if;
  if p_request_id is null or p_category is null or p_category not in ('technical','assessment','integrity','other')
    or description is null or length(description) not between 1 and 2000 then
    raise exception 'Invalid incident report' using errcode='22023';
  end if;
  perform 1 from public.courses where id=p_course_id for share;
  if not found then raise exception 'Course access denied' using errcode='42501'; end if;
  perform 1 from public.course_editors where course_id=p_course_id and user_id=actor for share;
  if not learning_private.can_manage_course(p_course_id) then raise exception 'Course access denied' using errcode='42501'; end if;
  perform pg_advisory_xact_lock(hashtextextended(actor::text||':'||p_request_id::text,1001));
  select * into prior from public.academic_audit_events where actor_id=actor and request_id=p_request_id;
  if found then
    if prior.course_id=p_course_id and prior.after_data=jsonb_build_object('category',p_category,'description',description) then return prior.id; end if;
    raise exception 'Incident request already used with different content' using errcode='22023';
  end if;
  insert into public.academic_audit_events(actor_id,actor_role,origin,entity_type,operation,entity_id,course_id,after_data,request_id)
  values(actor,persisted_role,'authenticated','incidents','REPORT',p_request_id::text,p_course_id,jsonb_build_object('category',p_category,'description',description),p_request_id)
  returning id into result_id;
  return result_id;
end;
$$;
create function public.report_academic_incident(p_course_id uuid,p_category text,p_description text,p_request_id uuid)
returns bigint language sql security invoker set search_path = '' as $$
  select academic_private.report_academic_incident(p_course_id,p_category,p_description,p_request_id);
$$;
revoke all on all functions in schema academic_private from public,anon,authenticated,service_role;
revoke all on function public.report_academic_incident(uuid,text,text,uuid) from public,anon,authenticated,service_role;
grant execute on function academic_private.report_academic_incident(uuid,text,text,uuid),public.report_academic_incident(uuid,text,text,uuid) to authenticated;
commit;
