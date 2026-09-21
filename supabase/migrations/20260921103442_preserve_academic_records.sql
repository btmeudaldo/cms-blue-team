begin;
set local lock_timeout = '5s';

-- Foreign keys enforce retention atomically, including deletes cascading from parents.
alter table public.user_lesson_progress
  drop constraint user_lesson_progress_lesson_id_fkey,
  add constraint user_lesson_progress_lesson_id_fkey
    foreign key (lesson_id) references public.lessons(id) on delete restrict,
  drop constraint user_lesson_progress_user_id_fkey,
  add constraint user_lesson_progress_user_id_fkey
    foreign key (user_id) references public.profiles(id) on delete restrict;

alter table public.quiz_attempts
  drop constraint quiz_attempts_user_id_fkey,
  add constraint quiz_attempts_user_id_fkey
    foreign key (user_id) references auth.users(id) on delete restrict;

-- An initiated attempt is evidence even before it has a submitted result.
alter table quiz_private.attempt_snapshots
  add constraint attempt_snapshots_user_id_fkey
    foreign key (user_id) references auth.users(id) on delete restrict;

-- Dossiers resolve the course through the lesson; moving it would rewrite attribution.
create function learning_private.keep_lesson_course()
returns trigger language plpgsql security invoker set search_path = '' as $$
begin
  if new.course_id is distinct from old.course_id then
    raise exception 'Lesson course cannot change' using errcode = '22023';
  end if;
  return new;
end;
$$;
revoke all on function learning_private.keep_lesson_course() from public, anon, authenticated;
create trigger keep_lesson_course before update of course_id on public.lessons
  for each row execute function learning_private.keep_lesson_course();

-- TRUNCATE bypasses RLS, including when requested with CASCADE.
revoke truncate, references, trigger on public.courses, public.profiles
  from public, anon, authenticated;
commit;
