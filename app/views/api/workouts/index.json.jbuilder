json.key_format! camelize: :lower
@workouts.each do |workout|
  json.set! workout.id do
    json.extract! workout, :id, :name, :description, :run_id, :distance, :duration, :user_id, :created_at
    json.extract! workout.route, :run_map
    json.routeName workout.route.name
    json.routeCreation workout.route.created_at
    json.routeCreatorFName workout.route_creator.fname
    json.routeCreatorLName workout.route_creator.lname
    json.routeCreatorId workout.route_creator.id
    json.workoutCreatorFName workout.user.fname
    json.workoutCreatorLName workout.user.lname
    json.workoutCreatorId workout.user.id
  end
end
