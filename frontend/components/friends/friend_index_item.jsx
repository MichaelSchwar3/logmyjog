import React from 'react';
import { Link } from 'react-router-dom';

class FriendIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.friend.id,
      friender_id: this.props.friend.frienderId,
      friendee_id: this.props.friend.friendeeId,
      accepted: this.props.friend.accepted
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.denyRequest = this.denyRequest.bind(this);
  }
  handleSubmit() {
    if(this.state.accepted !== true){
      this.state.accepted = true;
      this.props.action(this.props.userId, this.state)
    }else {
      this.props.action(this.props.userId, this.props.friend.id)
    }
  }
  denyRequest() {
    this.props.deleteFriend(this.props.userId, this.props.friend.id)
  }


  render() {
    if(!this.props.friend) return null;
    if(this.props.text !== "Accept"){
      return(
      <div className="friend-item">
        <div id="friend-pic">&#128100;</div>
        <div id="friend-info">
          <div id="friend-name">
            {this.props.friend.fname} {this.props.friend.lname}
          </div>
          <div id="friend-unfriend">
            <button onClick={this.handleSubmit}>
              {this.props.text}
            </button>
          </div>
        </div>
      </div>
  )}else {
    return(
    <div className="friend-request-item">
      <div id="friend-pic">&#128100;</div>
      <div id="friend-info-request">
        <div id="friend-name">{this.props.friend.fname}
          {this.props.friend.lname}
        </div>
        <div id="friend-unfriend">
          <button id="friend-deny" onClick={this.denyRequest}>
            Deny
          </button>
          <button id="friend-accept" onClick={this.handleSubmit}>
            {this.props.text}
          </button>
        </div>
      </div>
    </div>
  )}
}
}

export default FriendIndexItem;
