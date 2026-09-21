begin;
set local lock_timeout = '5s';

do $$
declare policy_row record;
begin
  for policy_row in select tablename, policyname from pg_policies
    where schemaname = 'public' and tablename in ('courses', 'course_enrollments', 'course_editors')
  loop
    execute format('drop policy %I on public.%I', policy_row.policyname, policy_row.tablename);
  end loop;
end;
$$;

alter table public.courses enable row level security;
alter table public.course_enrollments enable row level security;
alter table public.course_editors enable row level security;
revoke all on public.courses, public.course_enrollments, public.course_editors from public, anon, authenticated;
grant select, insert, update, delete on public.courses, public.course_enrollments to authenticated;
grant select, insert, delete on public.course_editors to authenticated;

create policy courses_scoped_read on public.courses for select to authenticated
  using (learning_private.can_read_lessons(courses.id));
create policy courses_staff_insert on public.courses for insert to authenticated
  with check (public.is_admin() or (public.is_staff() and created_by = (select auth.uid())));
create policy courses_editors_update on public.courses for update to authenticated
  using (learning_private.can_manage_course(courses.id))
  with check (learning_private.can_manage_course(courses.id));
create policy courses_owners_delete on public.courses for delete to authenticated
  using (public.is_admin() or (public.is_staff() and created_by = (select auth.uid())));

create policy enrollments_scoped_read on public.course_enrollments for select to authenticated
  using (user_id = (select auth.uid()) or learning_private.can_manage_course(course_enrollments.course_id));
create policy enrollments_editors_insert on public.course_enrollments for insert to authenticated
  with check (learning_private.can_manage_course(course_enrollments.course_id));
create policy enrollments_editors_update on public.course_enrollments for update to authenticated
  using (learning_private.can_manage_course(course_enrollments.course_id))
  with check (learning_private.can_manage_course(course_enrollments.course_id));
create policy enrollments_editors_delete on public.course_enrollments for delete to authenticated
  using (learning_private.can_manage_course(course_enrollments.course_id));

create policy course_editors_staff_read on public.course_editors for select to authenticated using (public.is_staff());
create policy course_editors_admin_insert on public.course_editors for insert to authenticated with check (public.is_admin());
create policy course_editors_admin_delete on public.course_editors for delete to authenticated using (public.is_admin());

create function learning_private.protect_course_owner()
returns trigger language plpgsql security invoker set search_path = '' as $$
begin
  if new.created_by is distinct from old.created_by and not public.is_admin() then
    raise exception 'Only administrators may transfer course ownership' using errcode = '42501';
  end if;
  return new;
end;
$$;
revoke all on function learning_private.protect_course_owner() from public, anon, authenticated;
create trigger protect_course_owner before update of created_by on public.courses
  for each row execute function learning_private.protect_course_owner();

-- Row locks must survive concurrent role/assignment revocation. Invoker locks
-- require profile UPDATE policies, which deliberately exclude instructors.
-- Keep this definer private and authorize the complete scope before any mutation.
create function learning_private.set_student_enrollments(p_user_id uuid, p_enrolled_course_ids uuid[], p_scope_course_ids uuid[])
returns void language plpgsql security definer set search_path = '' as $$
declare target_course uuid;
begin
  if auth.uid() is null or not public.is_staff() then
    raise exception 'Enrollment management denied' using errcode = '42501';
  end if;
  if p_user_id is null or p_enrolled_course_ids is null or p_scope_course_ids is null
    or array_position(p_enrolled_course_ids, null) is not null
    or array_position(p_scope_course_ids, null) is not null
    or not p_enrolled_course_ids <@ p_scope_course_ids then
    raise exception 'Invalid enrollment scope' using errcode = '22023';
  end if;
  -- Serialize competing bulk edits for the same learner without blocking other learners.
  perform pg_catalog.pg_advisory_xact_lock(pg_catalog.hashtextextended(p_user_id::text, 801));
  perform 1 from public.profiles where id = (select auth.uid()) for share;
  if not public.is_staff() then
    raise exception 'Enrollment management denied' using errcode = '42501';
  end if;
  perform 1 from public.profiles where id = p_user_id for share;
  if not found then
    raise exception 'Enrollment target does not exist' using errcode = '22023';
  end if;
  for target_course in select distinct unnest(p_scope_course_ids) order by 1 loop
    perform 1 from public.courses where id = target_course for share;
    if not found then
      raise exception 'Course management denied' using errcode = '42501';
    end if;
    perform 1 from public.course_editors where course_id = target_course and user_id = (select auth.uid()) for share;
    if not learning_private.can_manage_course(target_course) then
      raise exception 'Course management denied' using errcode = '42501';
    end if;
  end loop;
  delete from public.course_enrollments
    where user_id = p_user_id and course_id = any(p_scope_course_ids)
      and not course_id = any(p_enrolled_course_ids);
  insert into public.course_enrollments(user_id, course_id)
    select p_user_id, course_id from (select distinct unnest(p_enrolled_course_ids) as course_id) desired
    on conflict (user_id, course_id) do nothing;
end;
$$;
create function public.set_student_enrollments(p_user_id uuid, p_enrolled_course_ids uuid[], p_scope_course_ids uuid[])
returns void language sql security invoker set search_path = '' as $$
  select learning_private.set_student_enrollments(p_user_id, p_enrolled_course_ids, p_scope_course_ids);
$$;
revoke all on function learning_private.set_student_enrollments(uuid, uuid[], uuid[]), public.set_student_enrollments(uuid, uuid[], uuid[]) from public, anon, authenticated;
grant execute on function learning_private.set_student_enrollments(uuid, uuid[], uuid[]), public.set_student_enrollments(uuid, uuid[], uuid[]) to authenticated;
commit;

