import React from 'react';
import ActivityFeedItem from './activity_feed_item';
import { Link } from 'react-router-dom';

class ActivityFeed extends React.Component {

  componentDidMount() {
    this.props.fetchWorkouts()
  }
  render () {
    if(!this.props.workouts) return null;
    const payload = this.props.workouts.reverse()
    return (
      <div className="af-container">
        <div id="af-item-container">
          {this.props.workouts.map( payload =>{
            return <ActivityFeedItem payload={payload}
            comments={this.props.comments}
            key={`payload-${payload.id}`}/>;
          })}
        </div>
      </div>
    );
  }
}

export default ActivityFeed;
