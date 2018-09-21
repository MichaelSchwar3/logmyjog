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
    let user = this.props.user
    return (
      <div className="workouts-index">
        <div id="workouts-create">
          <span>MY WORKOUTS</span>
          <Link to="/workouts/create/"><button id="workouts-create-workout">LOG A WORKOUT</button></Link>
        </div>
        <div id="workout-items">
            {this.props.workouts.map( workout =>{
              if(workout.userId === user){
              return <WorkoutIndexItem workout={workout} key={`workout-${workout.id}`}/>;
            }
            })}
        </div>
      </div>
    );
  }
}

export default WorkoutIndex;
