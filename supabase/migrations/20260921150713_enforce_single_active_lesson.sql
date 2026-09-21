begin;
set local lock_timeout = '5s';

-- Legacy activity has no unique active lesson. End it without estimating time.
update public.user_lesson_progress
set is_active = false, last_resumed_at = null
where is_active and not is_completed;

create unique index user_lesson_progress_one_active_idx
on public.user_lesson_progress(user_id) where is_active and not is_completed;

create or replace function learning_private.record_lesson_activity(p_lesson_id uuid, p_operation text)
returns public.user_lesson_progress
language plpgsql security definer set search_path = '' as $$
declare
  v_user uuid := auth.uid();
  v_min integer;
  v_progress public.user_lesson_progress;
  v_now timestamptz;
  v_delta integer := 0;
  v_inserted integer := 0;
begin
  if v_user is null then
    raise exception 'Unauthenticated' using errcode = '42501';
  end if;
  if p_operation is null or p_operation not in ('start', 'resume', 'heartbeat', 'pause', 'complete') then
    raise exception 'Invalid activity operation' using errcode = '22023';
  end if;

  -- Serialize every activity command for this learner, including different lessons.
  perform pg_catalog.pg_advisory_xact_lock(pg_catalog.hashtextextended(v_user::text, 901));

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
    values (v_user, p_lesson_id, v_now, null, false)
    on conflict (user_id, lesson_id) do nothing;
    get diagnostics v_inserted = row_count;
  end if;

  select * into v_progress from public.user_lesson_progress
  where user_id = v_user and lesson_id = p_lesson_id for update;
  if not found then
    raise exception 'Lesson was not started' using errcode = '22023';
  end if;
  if v_progress.is_completed or (p_operation = 'start' and v_inserted = 0) then
    return v_progress;
  end if;

  if p_operation in ('start', 'resume') then
    if not v_progress.is_active then
      -- An abandoned tab must not credit an overlapping interval during handover.
      update public.user_lesson_progress
      set is_active = false, last_resumed_at = null
      where user_id = v_user and lesson_id <> p_lesson_id
        and is_active and not is_completed;
      v_now := clock_timestamp();
      update public.user_lesson_progress
      set last_resumed_at = v_now, is_active = true
      where user_id = v_user and lesson_id = p_lesson_id returning * into v_progress;
    end if;
    return v_progress;
  end if;

  -- Read the clock after waiting for the row, never from a stale queued request.
  v_now := clock_timestamp();

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

commit;
