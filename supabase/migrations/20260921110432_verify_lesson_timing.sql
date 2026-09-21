begin;
set local lock_timeout = '5s';

-- Progress is client-read-only; one private command owns its authorized transitions.
create function learning_private.record_lesson_activity(p_lesson_id uuid, p_operation text)
returns public.user_lesson_progress
language plpgsql security definer set search_path = '' as $$
declare
  v_user uuid := auth.uid();
  v_min integer;
  v_progress public.user_lesson_progress;
  v_now timestamptz;
  v_delta integer := 0;
begin
  if v_user is null then
    raise exception 'Unauthenticated' using errcode = '42501';
  end if;
  if p_operation is null or p_operation not in ('start', 'resume', 'heartbeat', 'pause', 'complete') then
    raise exception 'Invalid activity operation' using errcode = '22023';
  end if;

  -- Keep enrollment and the current requirement stable throughout this transition.
  select l.min_seconds into v_min
  from public.lessons l join public.course_enrollments e on e.course_id = l.course_id
  where l.id = p_lesson_id and e.user_id = v_user
  for share of l, e;
  if not found then
    raise exception 'Lesson not available' using errcode = '42501';
  end if;

  if p_operation = 'start' then
    v_now := clock_timestamp();
    insert into public.user_lesson_progress
      (user_id, lesson_id, started_at, last_resumed_at, is_active)
    values (v_user, p_lesson_id, v_now, v_now, true)
    on conflict (user_id, lesson_id) do nothing;
  end if;

  select * into v_progress from public.user_lesson_progress
  where user_id = v_user and lesson_id = p_lesson_id for update;
  if not found then
    raise exception 'Lesson was not started' using errcode = '22023';
  end if;
  if v_progress.is_completed or p_operation = 'start' then
    return v_progress;
  end if;

  -- Read the clock after waiting for the row, never from a stale queued request.
  v_now := clock_timestamp();
  if p_operation = 'resume' then
    if not v_progress.is_active then
      update public.user_lesson_progress
      set last_resumed_at = v_now, is_active = true
      where user_id = v_user and lesson_id = p_lesson_id returning * into v_progress;
    end if;
    return v_progress;
  end if;

  if v_progress.is_active then
    v_delta := least(15, greatest(0, floor(extract(epoch from v_now - v_progress.last_resumed_at))))::integer;
  end if;
  if p_operation = 'complete' and v_progress.active_seconds + v_delta < v_min then
    raise exception 'Minimum active reading time has not elapsed' using errcode = '22023';
  end if;

  if v_progress.is_active or p_operation = 'complete' then
    update public.user_lesson_progress
    set active_seconds = active_seconds + v_delta,
        last_resumed_at = case when p_operation = 'heartbeat' then greatest(v_now, v_progress.last_resumed_at) else null end,
        is_active = p_operation = 'heartbeat',
        completed_at = case when p_operation = 'complete' then v_now else completed_at end,
        elapsed_seconds = case when p_operation = 'complete' then active_seconds + v_delta else elapsed_seconds end,
        is_completed = p_operation = 'complete'
    where user_id = v_user and lesson_id = p_lesson_id returning * into v_progress;
  end if;
  return v_progress;
end;
$$;

create or replace function public.start_lesson(p_lesson_id uuid)
returns public.user_lesson_progress language sql security invoker set search_path = '' as $$
  select learning_private.record_lesson_activity(p_lesson_id, 'start');
$$;
create or replace function public.resume_lesson(p_lesson_id uuid)
returns public.user_lesson_progress language sql security invoker set search_path = '' as $$
  select learning_private.record_lesson_activity(p_lesson_id, 'resume');
$$;
create or replace function public.heartbeat_lesson(p_lesson_id uuid)
returns public.user_lesson_progress language sql security invoker set search_path = '' as $$
  select learning_private.record_lesson_activity(p_lesson_id, 'heartbeat');
$$;
create or replace function public.pause_lesson(p_lesson_id uuid)
returns public.user_lesson_progress language sql security invoker set search_path = '' as $$
  select learning_private.record_lesson_activity(p_lesson_id, 'pause');
$$;
create or replace function public.complete_lesson(p_lesson_id uuid)
returns public.user_lesson_progress language sql security invoker set search_path = '' as $$
  select learning_private.record_lesson_activity(p_lesson_id, 'complete');
$$;

revoke all on function learning_private.record_lesson_activity(uuid, text),
  public.start_lesson(uuid), public.resume_lesson(uuid), public.heartbeat_lesson(uuid),
  public.pause_lesson(uuid), public.complete_lesson(uuid) from public, anon, authenticated;
grant execute on function learning_private.record_lesson_activity(uuid, text),
  public.start_lesson(uuid), public.resume_lesson(uuid), public.heartbeat_lesson(uuid),
  public.pause_lesson(uuid), public.complete_lesson(uuid) to authenticated;
commit;
