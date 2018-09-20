import React from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from '../../util/date_util';

const WorkoutIndexItem = props => {
  if(!props.workout.workout) return null;
  const workout = props.workout.workout
  return (
    <div id="workout-item">
      <div id="workout-item-bg"><img src={window.runningManUrl}/></div>
      <Link to={`/workouts/views/${workout.id}`}>
        <div id="workout-item-front">
          <span>{workout.name} - {(workout.distance).toFixed(2)} mi</span>
          <span>{formatDate(workout.createdAt)}</span>
        </div>
      </Link>
    </div>
)};

export default WorkoutIndexItem;
