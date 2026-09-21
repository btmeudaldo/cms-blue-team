begin;
set local lock_timeout = '5s';

create schema if not exists learning_private;
revoke all on schema learning_private from public, anon, authenticated;
grant usage on schema learning_private to authenticated;

-- Lookups bypass policy recursion, but always authorize the caller's persisted role.
create function learning_private.can_manage_course(target_course_id uuid)
returns boolean language sql stable security definer set search_path = '' as $$
  select auth.uid() is not null and exists (
    select 1 from public.profiles p where p.id = (select auth.uid()) and (
      p.role = 'admin' or (p.role = 'instructor' and (
        exists (select 1 from public.courses c
          where c.id = target_course_id and c.created_by = p.id)
        or exists (select 1 from public.course_editors e
          where e.course_id = target_course_id and e.user_id = p.id)
      ))
    )
  );
$$;

create function learning_private.can_read_lessons(target_course_id uuid)
returns boolean language sql stable security definer set search_path = '' as $$
  select auth.uid() is not null and exists (
    select 1 from public.profiles p where p.id = (select auth.uid()) and (
      p.role in ('admin', 'instructor') or (p.role = 'student' and exists (
        select 1 from public.course_enrollments e
        where e.course_id = target_course_id and e.user_id = p.id
      ))
    )
  );
$$;

-- Preserve the signature used by existing policies without exposing a definer RPC.
create or replace function public.can_manage_course(target_course_id uuid)
returns boolean language sql stable security invoker set search_path = '' as $$
  select learning_private.can_manage_course(target_course_id);
$$;
revoke all on function learning_private.can_manage_course(uuid),
  learning_private.can_read_lessons(uuid), public.can_manage_course(uuid)
  from public, anon, authenticated;
grant execute on function learning_private.can_manage_course(uuid),
  learning_private.can_read_lessons(uuid), public.can_manage_course(uuid)
  to authenticated;

alter table public.lessons enable row level security;
alter table public.user_lesson_progress enable row level security;

-- Permissive policies combine with OR, so stale policies must not survive the fix.
do $$
declare policy_row record;
begin
  for policy_row in select tablename, policyname from pg_policies
    where schemaname = 'public' and tablename in ('lessons', 'user_lesson_progress')
  loop
    execute format('drop policy %I on public.%I', policy_row.policyname, policy_row.tablename);
  end loop;
end;
$$;

-- RLS does not protect TRUNCATE; grant only operations the application needs.
revoke all on public.lessons, public.user_lesson_progress from public, anon, authenticated;
grant select, insert, update, delete on public.lessons to authenticated;
grant select on public.user_lesson_progress to authenticated;

create policy lessons_scoped_read on public.lessons for select to authenticated
  using (learning_private.can_read_lessons(lessons.course_id));
create policy lessons_editors_insert on public.lessons for insert to authenticated
  with check (learning_private.can_manage_course(lessons.course_id));
create policy lessons_editors_update on public.lessons for update to authenticated
  using (learning_private.can_manage_course(lessons.course_id))
  with check (learning_private.can_manage_course(lessons.course_id));
create policy lessons_editors_delete on public.lessons for delete to authenticated
  using (learning_private.can_manage_course(lessons.course_id));

create policy progress_scoped_read on public.user_lesson_progress for select to authenticated
  using (
    user_id = (select auth.uid()) or exists (
      select 1 from public.lessons l
      where l.id = user_lesson_progress.lesson_id
        and learning_private.can_manage_course(l.course_id)
    )
  );
commit;
