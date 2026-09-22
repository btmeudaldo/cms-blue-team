begin;
set local lock_timeout = '5s';

-- 1. Add dni_nie column to public.profiles
alter table public.profiles
  add column if not exists dni_nie text;

-- 2. Secure RPC to allow staff (admins & instructors) to update student DNI/NIE
create or replace function public.set_student_dni(p_user_id uuid, p_dni_nie text)
returns void language plpgsql security definer set search_path = '' as $$
begin
  if not public.is_staff() then
    raise exception 'Permission denied' using errcode = '42501';
  end if;

  update public.profiles
  set dni_nie = nullif(trim(p_dni_nie), '')
  where id = p_user_id;
end;
$$;

revoke all on function public.set_student_dni(uuid, text) from public, anon, authenticated;
grant execute on function public.set_student_dni(uuid, text) to authenticated;

commit;
