import React from 'react';
import { Link } from 'react-router-dom';
import { formatTime, formatPace, formatDate } from '../../util/date_util';

class WorkoutShow extends React.Component {

  componentDidMount() {
    if(!this.props.workout){
      this.props.fetchWorkout(this.props.match.params.workoutId)
    }
  }

  componentWillReceiveProps(nextProps) {
  if (this.props.match.params.workoutId !== nextProps.match.params.workoutId) {
    this.props.fetchWorkout(nextProps.match.params.workoutId)
  }
}

  render () {
    const workout = this.props.workout || {name: "", location: "" ,distance:0}
    return (
      <div className="workout-show">
        <section id="workout-show-info">
          <div id="wsi-head">
            <div id="wsi-head-title">
              {workout.name}
            </div>
            <div id="wsi-head-body">
              <div className="wsi-head-body-obj" id="wsi-head-body-distance">
                <span id="distance">Distance</span>
                <span id="distance-miles">{workout.distance}</span>
              </div>
              <div className="wsi-head-body-obj" id="wsi-head-body-duration">
                <span id="duration">Duration</span>
                <span id="duration-time">{formatTime(workout.duration)}</span>
              </div>
              <div className="wsi-head-body-obj" id="wsi-head-body-pace">
                <span id="pace">Pace</span>
                <span id="pace-time">{formatPace(workout.duration, workout.distance)}</span>
              </div>
            </div>
          </div>
          <div id="wsi-middle">
            <div id="wsi-mid-top">
              <div id="wsi-mid-top-date">
                <span>TIME</span>
                <span>{formatDate(workout.createdAt)}</span>
              </div>
              <div id="wsi-mid-top-pace">
                <span>PACE</span>
                <span>{formatPace(workout.duration, workout.distance)}</span>
              </div>
            </div>
            <div id="wsi-middle-map">
              <div id="wsi-middle-map-left">
                <img src={`https://maps.googleapis.com/maps/api/staticmap?size=620x360&path=weight:3%7Ccolor:red%7Cenc:${workout.runMap}&key=${window.apiKey}`}/>
                <div id="wsi-below-map">
                  <span>VIEW ROUTE <Link to={`routes/view/${workout.runId}`}>
                  {workout.runName}</Link></span>
                  <span>MAPPED {formatDate(workout.runCreation)} by
                   <Link to={`/users/${workout.routeCreatorId}`}>
                   {workout.routeCreatorFName} {workout.routeCreatorLName} </Link>
                   </span>
                </div>
              </div>
              <div id="wsi-middle-map-right">
                Here is where more graphs would go
              </div>
            </div>
          </div>
          <div id="wsi-bottom">
          </div>
        </section>
        <section id="workout-show-map">
        </section>
        <section id="workout-show-comments">
        </section>
      </div>
    );
  }
}

export default WorkoutShow;
