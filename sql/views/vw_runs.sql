create or replace view public.vw_runs as 

select 
  runs.id as runs_id,
  runners.id as runners_id,
  runners.name,
  runs.ncc_competition,
  runs.ncc_year,
  runs.ncc_round,
  runs.run_timestamp,
  runs.run_duration_seconds,
  runs.target_duration_seconds,
  runs.run_duration_seconds - runs.target_duration_seconds as duration_vs_target_seconds,
  runs.new_target_duration_seconds,
  runs.base_points,
  runs.bonus_points,
  runs.finish_position
from 
  runs left join runners on runs.runner_id = runners.id;