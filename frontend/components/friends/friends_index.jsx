import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import FriendIndexItem from './friend_index_item';

class FriendIndex extends React.Component {

  componentDidMount() {
    this.props.fetchFriends(this.props.currentUserId)
  }

  componentWillMount() {
    this.props.fetchFriends(this.props.currentUserId)
  }

  componentWillReceiveProps(nextProps) {
  if (this.props.friends.length !== nextProps.friends.length) {
    this.props.fetchFriends(this.props.currentUserId);
  }
}



  render () {
    const acceptedFriends = this.props.friends.filter(
      friend => friend.accepted === true)
    const pendingOutgoingFriends = this.props.friends.filter(
      friend => friend.accepted !== true &&
        friend.friender_id === this.props.currentUserId)
    const pendingIncomingFriends = this.props.friends.filter(
      friend => friend.accepted !== true &&
        friend.friender_id !== this.props.currentUserId)
    return (
      <div className="friends-index">
        <div id="friends-index-body">
          <div id="friends-index-count">
            Friend Requests ({pendingIncomingFriends.length})
          </div>
          <div id="friends-index-pending-incoming">
            {pendingIncomingFriends.map( friend =>{
              return <FriendIndexItem friend={friend}
               key={`friend-${friend.id}`}
               text="Accept" action={this.props.updateFriend}
               deleteFriend={this.props.deleteFriend}
               userId={this.props.currentUserId}/>;
            })}
          </div>
        </div>
        <div id="friends-index-count">
          Friends {acceptedFriends.length} of {acceptedFriends.length}
        </div>
        <div id="friends-index-body">
          <div id="friends-index-accepted">
            {acceptedFriends.map( friend =>{
              return <FriendIndexItem friend={friend}
              key={`friend-${friend.id}`} text="Unfriend"
              action={this.props.deleteFriend}
              userId={this.props.currentUserId}/>;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default FriendIndex;
