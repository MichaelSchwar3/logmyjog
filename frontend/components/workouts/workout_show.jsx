import React from 'react';
import { Link, Redirect} from 'react-router-dom';
import { formatTime, formatPace, formatDate } from '../../util/date_util';
import CommentsIndexContainer from '../comments/comments_index_container';

class WorkoutShow extends React.Component {
  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    if(!this.props.workout){
      this.props.fetchWorkout(this.props.match.params.workoutId)
    }
  }

  componentDidUpdate(nextProps) {
  if (this.props.match.params.workoutId !== nextProps.match.params.workoutId) {
    this.props.fetchWorkout(nextProps.match.params.workoutId)
  }
}
  handleDelete(){
    this.props.deleteWorkout(this.props.workout.id)
    this.props.history.push('/workouts');
  }

  render () {
    const workout = this.props.workout || {name: "", distance: "" ,distance: "", duration: ""}
    const run = this.props.run
    return (
      <div className="workout-show">
        <section id="workout-show-info">
          <div id="wsi-head">
            <div id="wsi-head-title">
              {workout.name}
            </div>
            <div id="wsi-head-body">
              <div className="wsi-head-body-obj" id="wsi-head-body-distance">
                <p id="distance">DISTANCE</p>
                <span id="distance-miles">{workout.distance}</span>
              </div>
              <div className="wsi-head-body-obj" id="wsi-head-body-duration">
                <span id="duration">DURATION</span>
                <span id="duration-time">{formatTime(workout.duration)}</span>
              </div>
              <div className="wsi-head-body-obj" id="wsi-head-body-pace">
                <span id="pace">PACE</span>
                <span id="pace-time">{formatPace(workout.duration, workout.distance)}</span>
              </div>
            </div>
            <div id="wsi-head-bottom">
              <div id="wsi-head-bottom-icon">
                &#128100;
              </div>
              <div id="wsi-head-bottom-info">
                {formatDate(workout.createdAt)}<br/>
                by <Link to={`/users/${workout.workoutCreatorId}`}>
                {workout.workoutCreatorFName} {workout.workoutCreatorLName}</Link>
              </div>
            </div>
            <div id="wsi-head-buttons">
              <Link to={`/workouts/edit/${workout.id}`}><button id="wsi-edit">EDIT</button></Link>
              <button id="wsi-delete" onClick={this.handleDelete}>DELETE</button>
            </div>
          </div>
        </section>
        <section id="workout-show-map">
        <div id="wsi-middle">
          <div id="wsi-middle-map">
            <div id="wsi-middle-map-left">
              <img src={`https://maps.googleapis.com/maps/api/staticmap?size=620x360&path=weight:3%7Ccolor:red%7Cenc:${run.runMap}&key=${window.apiKey}`}/>
              <div id="wsi-below-map">
                <div id="view-route">VIEW ROUTE <Link to={`/routes/views/${workout.runId}`}>
                {run.name}</Link></div>
                <div id="mapped">MAPPED {formatDate(run.createdAt)} BY &nbsp;
                 <Link to={`/users/${workout.routeCreatorId}`}>
                  {run.routeCreatorFName} {run.routeCreatorLName} </Link>
                 </div>
              </div>
            </div>
          </div>
        </div>
        </section>
        <section id="workout-show-comments">
            <CommentsIndexContainer comments={this.props.comments} />
        </section>
      </div>
    );
  }
}

export default WorkoutShow;
