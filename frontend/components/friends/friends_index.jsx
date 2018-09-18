import React from 'react';
import { Link } from 'react-router-dom';
import FriendIndexItem from './friend_index_item';

class FriendIndex extends React.Component {

  componentDidMount() {
    this.props.fetchFriends(this.props.currentUserId)
  }

  componentWillMount() {
    this.props.fetchFriends(this.props.currentUserId)
  }

  render () {
    return (
      <div className="friends-index">
        <div id="friends-index-head">
          MY FRIENDS
        </div>
        <div id="friends-index-tabs">
          <span>My Friends</span><span>Find Friends</span>
        </div>
        <div id="friends-index-count">
          Friends 0 of 0
        </div>
        <div id="friends-index-body">
          {this.props.friends.map( friend =>{
            return <FriendIndexItem friend={friend} key={`friend-${friend.id}`}/>;
          })}
        </div>
      </div>
    );
  }
}

export default FriendIndex;
