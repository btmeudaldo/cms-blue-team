alter table public.user_lesson_progress
  add column active_seconds integer not null default 0,
  add column last_resumed_at timestamptz,
  add column is_active boolean not null default false;

create or replace function public.pause_lesson(p_lesson_id uuid)
returns public.user_lesson_progress language plpgsql security definer set search_path = '' as $$
declare v_user_id uuid := auth.uid(); v_progress public.user_lesson_progress; v_now timestamptz := clock_timestamp(); begin
  select * into v_progress from public.user_lesson_progress where user_id=v_user_id and lesson_id=p_lesson_id for update;
  if v_progress is null then raise exception 'Lesson was not started'; end if;
  if v_progress.is_active then
    update public.user_lesson_progress set active_seconds=active_seconds + least(15, floor(extract(epoch from v_now-last_resumed_at))::integer), last_resumed_at=null, is_active=false where user_id=v_user_id and lesson_id=p_lesson_id returning * into v_progress;
  end if;
  return v_progress;
end; $$;

create or replace function public.resume_lesson(p_lesson_id uuid)
returns public.user_lesson_progress language plpgsql security definer set search_path = '' as $$
declare v_user_id uuid := auth.uid(); v_progress public.user_lesson_progress; begin
  select * into v_progress from public.user_lesson_progress where user_id=v_user_id and lesson_id=p_lesson_id for update;
  if v_progress is null then raise exception 'Lesson was not started'; end if;
  update public.user_lesson_progress set last_resumed_at=clock_timestamp(), is_active=true where user_id=v_user_id and lesson_id=p_lesson_id returning * into v_progress;
  return v_progress;
end; $$;

grant execute on function public.pause_lesson(uuid), public.resume_lesson(uuid) to authenticated;

create or replace function public.start_lesson(p_lesson_id uuid)
returns public.user_lesson_progress language plpgsql security definer set search_path = '' as $$
declare v_user_id uuid := auth.uid(); v_progress public.user_lesson_progress; begin
  if v_user_id is null then raise exception 'Unauthenticated'; end if;
  if not exists (select 1 from public.lessons l join public.course_enrollments e on e.course_id=l.course_id where l.id=p_lesson_id and e.user_id=v_user_id) then raise exception 'Lesson not available'; end if;
  insert into public.user_lesson_progress (user_id,lesson_id,started_at,last_resumed_at,is_active) values (v_user_id,p_lesson_id,clock_timestamp(),clock_timestamp(),true) on conflict (user_id,lesson_id) do nothing returning * into v_progress;
  if v_progress is null then select * into v_progress from public.user_lesson_progress where user_id=v_user_id and lesson_id=p_lesson_id; end if;
  return v_progress;
end; $$;

create or replace function public.complete_lesson(p_lesson_id uuid)
returns public.user_lesson_progress language plpgsql security definer set search_path = '' as $$
declare v_user_id uuid := auth.uid(); v_min integer; v_progress public.user_lesson_progress; begin
  select l.min_seconds into v_min from public.lessons l join public.course_enrollments e on e.course_id=l.course_id where l.id=p_lesson_id and e.user_id=v_user_id;
  if v_min is null then raise exception 'Lesson not available'; end if;
  perform public.pause_lesson(p_lesson_id);
  select * into v_progress from public.user_lesson_progress where user_id=v_user_id and lesson_id=p_lesson_id for update;
  if v_progress.active_seconds < v_min then raise exception 'Minimum active reading time has not elapsed'; end if;
  update public.user_lesson_progress set completed_at=clock_timestamp(), elapsed_seconds=active_seconds, is_completed=true where user_id=v_user_id and lesson_id=p_lesson_id returning * into v_progress;
  return v_progress;
end; $$;
