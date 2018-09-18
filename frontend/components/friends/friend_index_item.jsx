import React from 'react';
import { Link } from 'react-router-dom';

const FriendIndexItem = props => {
  if(!props.friend) return null;
  return (
    <div className="friend-item">
      {props.friend.fname} {props.friend.lname}
    </div>
)};

export default FriendIndexItem;
