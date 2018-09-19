json.key_format! camelize: :lower
@workouts.each do |workout|
  json.set! workout.id do
    json.extract! workout, :id, :name, :description, :run_id, :distance, :duration, :user_id, :created_at
  end
end
