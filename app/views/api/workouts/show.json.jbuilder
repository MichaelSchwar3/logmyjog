json.partial! "api/workouts/workout", workout: @workout
json.extract! @workout.route, :run_map
json.routeName @workout.route.name
json.routeCreation @workout.route.created_at
json.routeCreatorFName @workout.route_creator.fname
json.routeCreatorLName @workout.route_creator.lname
json.routeCreatorId @workout.route_creator.id
