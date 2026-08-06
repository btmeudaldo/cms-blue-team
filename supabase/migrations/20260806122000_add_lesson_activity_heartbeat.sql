create or replace function public.heartbeat_lesson(p_lesson_id uuid)
returns public.user_lesson_progress
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_user_id uuid := auth.uid();
  v_progress public.user_lesson_progress;
  v_now timestamptz := clock_timestamp();
begin
  select * into v_progress
  from public.user_lesson_progress
  where user_id = v_user_id and lesson_id = p_lesson_id
  for update;

  if v_progress is null then
    raise exception 'Lesson was not started';
  end if;

  if v_progress.is_active then
    update public.user_lesson_progress
    set active_seconds = active_seconds + least(15, floor(extract(epoch from v_now - last_resumed_at))::integer),
        last_resumed_at = v_now
    where user_id = v_user_id and lesson_id = p_lesson_id
    returning * into v_progress;
  end if;

  return v_progress;
end;
$$;

grant execute on function public.heartbeat_lesson(uuid) to authenticated;
