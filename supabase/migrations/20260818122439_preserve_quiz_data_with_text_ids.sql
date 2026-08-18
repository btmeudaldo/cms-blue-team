begin;

-- Keep the existing quiz data and convert IDs to the text format expected by
-- the seed data. The legacy columns remain so the current application keeps
-- working during the transition.
alter table public.quiz_attempts
  drop constraint quiz_attempts_quiz_id_fkey;

alter table public.quiz_attempts
  alter column quiz_id type text using quiz_id::text;

alter table public.quizzes
  alter column id drop default,
  alter column id type text using id::text;

alter table public.quiz_attempts
  add constraint quiz_attempts_quiz_id_fkey
  foreign key (quiz_id) references public.quizzes(id) on delete cascade;

alter table public.quizzes
  add column if not exists passing_score integer,
  add column if not exists updated_at timestamptz not null default timezone('utc'::text, now());

update public.quizzes
set passing_score = min_pass_score_percentage
where passing_score is null;

alter table public.quizzes
  alter column passing_score set not null,
  alter column passing_score set default 80;

alter table public.quiz_attempts
  add column if not exists score integer,
  add column if not exists answers jsonb not null default '{}'::jsonb;

update public.quiz_attempts
set score = score_percentage
where score is null;

create index if not exists idx_quizzes_lesson_id
  on public.quizzes(lesson_id);

commit;
