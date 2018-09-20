json.key_format! camelize: :lower
json.set! 'workout' do
   json.partial! "api/workouts/workout", workout: @workout
   json.workoutCreatorFName @workout.user.fname
   json.workoutCreatorLName @workout.user.lname
   json.workoutCreatorId @workout.user.id
end

json.set! 'run' do
  json.extract! @workout.route, :run_map, :name, :created_at, :id
  json.routeCreatorFName @workout.route_creator.fname
  json.routeCreatorLName @workout.route_creator.lname
end

json.set! 'comments' do
  @workout.comments.each do |comment|
    json.set! comment.id do
      json.extract! comment, :body, :run_id, :author_id, :created_at, :id
      json.fname comment.author.fname
      json.lname comment.author.lname
    end
  end
end
