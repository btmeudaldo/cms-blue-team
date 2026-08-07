revoke all on function public.start_lesson(uuid) from public;
revoke all on function public.complete_lesson(uuid) from public;
revoke all on function public.pause_lesson(uuid) from public;
revoke all on function public.resume_lesson(uuid) from public;
revoke all on function public.heartbeat_lesson(uuid) from public;
revoke all on function public.start_lesson(uuid) from anon;
revoke all on function public.complete_lesson(uuid) from anon;
revoke all on function public.pause_lesson(uuid) from anon;
revoke all on function public.resume_lesson(uuid) from anon;
revoke all on function public.heartbeat_lesson(uuid) from anon;

grant execute on function public.start_lesson(uuid) to authenticated;
grant execute on function public.complete_lesson(uuid) to authenticated;
grant execute on function public.pause_lesson(uuid) to authenticated;
grant execute on function public.resume_lesson(uuid) to authenticated;
grant execute on function public.heartbeat_lesson(uuid) to authenticated;
