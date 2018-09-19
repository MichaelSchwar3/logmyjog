import React from 'react';
import WorkoutIndexItem from './workout_index_item';
import { Link } from 'react-router-dom';

class WorkoutIndex extends React.Component {

  componentDidMount() {
    this.props.fetchWorkouts()
  }

  componentWillMount() {
    this.props.fetchWorkouts()
  }

  render () {
    return (
      <div className="workouts-index">
        <div id="workouts-create">
          <span>My Workouts</span>
          <Link to="/workouts/create/"><button id="workouts-create-workout">Create a Route</button></Link>
        </div>
        <div id="workout-items">
            {this.props.workouts.map( workout =>{
              return <WorkoutIndexItem workout={workout} key={`workout-${workout.id}`}/>;
            })}
        </div>
      </div>
    );
  }
}

export default WorkoutIndex;
