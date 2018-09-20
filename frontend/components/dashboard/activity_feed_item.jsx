import React from 'react';
import { Link } from 'react-router-dom';
import { formatDate, formatPace } from '../../util/date_util';
import ActivityFeedCommentContainer from './activity_feed_comment_container';
import CommentForm from '../comments/comment_form_container';

class ActivityFeedItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    if(!this.props.payload) return null;
    const workout = this.props.payload.workout
    const run = this.props.payload.run
    return(
      <div id="af-item">
        <div id="af-item-icon">
          &#128100;
        </div>
        <div id="af-item-info">
          <section id="af-info-top">
            <div id="af-item-info-name-dist">
              <span id="name">
                <Link to={`/workouts/`}>{workout.workoutCreatorFName}
                 &nbsp;{workout.workoutCreatorLName}</Link>
                &nbsp;ran {workout.distance.toFixed(2)}&nbsp;miles
              </span>
              <span id="description">
                {workout.description}
              </span>
            </div>
          </section>
          <section id="af-info-middle">
            <div id="af-distance">
              <div><i className="fas fa-road"></i><br/>Distance</div>
              <div>{workout.distance}&nbsp;<span>mi</span></div>
            </div>
            <div id="af-pace">
              <div><i className="far fa-clock"></i><br/>Pace</div>
              {formatPace(workout.duration, workout.distance)}&nbsp;<span>min/mi</span>
            </div>
            <div id="af-map">
              <img src={`https://maps.googleapis.com/maps/api/staticmap?size=185x155&path=weight:3%7Ccolor:red%7Cenc:${run.runMap}&key=${window.apiKey}`}/>
            </div>
          </section>
          <section id="af-info-comments">
            <ActivityFeedCommentContainer workout={workout}/>;
          </section>
        </div>
      </div>
    )
  }
}





export default ActivityFeedItem;
