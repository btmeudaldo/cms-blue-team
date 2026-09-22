begin;
set local lock_timeout = '5s';

-- 1. Ensure quizzes default min_pass_score_percentage is 75 (EASA/AESA aviation standard)
alter table public.quizzes
  alter column min_pass_score_percentage set default 75;

-- 2. Update existing quizzes with old 70% or null to 75%
update public.quizzes
  set min_pass_score_percentage = 75
  where min_pass_score_percentage is null or min_pass_score_percentage = 70;

-- 3. Update legacy passing_score column for consistency
update public.quizzes
  set passing_score = 75
  where passing_score = 70 or passing_score is null;

commit;
