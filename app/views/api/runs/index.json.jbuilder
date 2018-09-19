json.key_format! camelize: :lower
@runs.each do |run|
  json.set! run.id do
    json.extract! run, :id, :location, :distance,:run_map, :runner_id, :name, :created_at, :updated_at
  end
end
