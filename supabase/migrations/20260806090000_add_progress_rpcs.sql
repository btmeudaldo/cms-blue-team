create or replace function public.start_lesson(p_lesson_id uuid)
returns public.user_lesson_progress
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_user_id uuid := auth.uid();
  v_progress public.user_lesson_progress;
begin
  if v_user_id is null then
    raise exception 'Unauthenticated';
  end if;

  if not exists (
    select 1
    from public.lessons lesson
    join public.course_enrollments enrollment on enrollment.course_id = lesson.course_id
    where lesson.id = p_lesson_id
      and enrollment.user_id = v_user_id
  ) then
    raise exception 'Lesson not available';
  end if;

  insert into public.user_lesson_progress (user_id, lesson_id, started_at)
  values (v_user_id, p_lesson_id, clock_timestamp())
  on conflict (user_id, lesson_id) do nothing
  returning * into v_progress;

  if v_progress is null then
    select * into v_progress
    from public.user_lesson_progress
    where user_id = v_user_id and lesson_id = p_lesson_id;
  end if;

  return v_progress;
end;
$$;

create or replace function public.complete_lesson(p_lesson_id uuid)
returns public.user_lesson_progress
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_user_id uuid := auth.uid();
  v_min_seconds integer;
  v_now timestamptz := clock_timestamp();
  v_progress public.user_lesson_progress;
begin
  if v_user_id is null then
    raise exception 'Unauthenticated';
  end if;

  select lesson.min_seconds into v_min_seconds
  from public.lessons lesson
  join public.course_enrollments enrollment on enrollment.course_id = lesson.course_id
  where lesson.id = p_lesson_id and enrollment.user_id = v_user_id;

  if v_min_seconds is null then raise exception 'Lesson not available'; end if;

  select * into v_progress from public.user_lesson_progress
  where user_id = v_user_id and lesson_id = p_lesson_id for update;

  if v_progress is null then raise exception 'Lesson was not started'; end if;
  if v_progress.is_completed then return v_progress; end if;
  if v_now < v_progress.started_at + make_interval(secs => v_min_seconds) then
    raise exception 'Minimum reading time has not elapsed';
  end if;

  update public.user_lesson_progress
  set completed_at = v_now, elapsed_seconds = floor(extract(epoch from v_now - started_at))::integer, is_completed = true
  where user_id = v_user_id and lesson_id = p_lesson_id
  returning * into v_progress;
  return v_progress;
end;
$$;

revoke all on function public.start_lesson(uuid) from public, anon;
revoke all on function public.complete_lesson(uuid) from public, anon;
grant execute on function public.start_lesson(uuid) to authenticated;
grant execute on function public.complete_lesson(uuid) to authenticated;
