import React from 'react';
import ActivityFeedItem from './activity_feed_item';
import { Link } from 'react-router-dom';

class ActivityFeed extends React.Component {

  componentDidMount() {
    this.props.fetchWorkouts()
  }
  render () {
    return (
      <div className="af-container">
        <div id="af-item-container">
          {this.props.workouts.map( payload =>{
            return <ActivityFeedItem payload={payload}
            comments={this.props.comments}
            key={`payload-${payload.workout.id}`}/>;
          })}
        </div>
      </div>
    );
  }
}

export default ActivityFeed;
