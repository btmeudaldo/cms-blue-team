alter table public.profiles
  add column if not exists full_name text,
  add column if not exists email text;

update public.profiles profile
set email = auth_user.email
from auth.users auth_user
where auth_user.id = profile.id and profile.email is null;

create or replace function public.handle_new_user_profile()
returns trigger language plpgsql security definer set search_path = '' as $$
begin
  insert into public.profiles (id, email, full_name)
  values (new.id, new.email, coalesce(new.raw_user_meta_data ->> 'full_name', ''))
  on conflict (id) do update set email = excluded.email;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users for each row execute procedure public.handle_new_user_profile();
