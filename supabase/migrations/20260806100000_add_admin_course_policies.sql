create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1 from public.profiles profile
    where profile.id = auth.uid() and profile.role = 'admin'
  );
$$;

create policy "admins can read all profiles" on public.profiles for select to authenticated using (public.is_admin());
create policy "admins can create courses" on public.courses for insert to authenticated with check (public.is_admin());
create policy "admins can update courses" on public.courses for update to authenticated using (public.is_admin()) with check (public.is_admin());
create policy "admins can read all courses" on public.courses for select to authenticated using (public.is_admin());
