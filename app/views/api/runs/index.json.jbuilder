@runs.each do |run|
  json.set! run.id do
    json.extract! run, :id, :location, :distance, :duration, :run_map, :completed_run, :runner_id
  end
end
