json.key_format! camelize: :lower
json.extract! workout, :id, :name, :description, :run_id, :distance, :duration, :user_id, :created_at
json.extract! workout.route_creator, :fname, :lname
