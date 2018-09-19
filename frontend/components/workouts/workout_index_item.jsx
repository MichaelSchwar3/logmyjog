import React from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from '../../util/date_util';

const WorkoutIndexItem = props => {
  if(!props.workout) return null;
  return (
    <div id="workout-item">
      <div id="workout-item-bg"><img src={window.runningManUrl}/></div>
      <Link to={`/workouts/${props.workout.id}`}>
        <div id="workout-item-front">
          <span>{props.workout.name} - {(props.workout.distance).toFixed(2)} mi</span>
          <span>{formatDate(props.workout.createdAt)}</span>
        </div>
      </Link>
    </div>
)};

export default WorkoutIndexItem;
