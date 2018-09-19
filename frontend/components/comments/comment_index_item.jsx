import React from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from '../../util/date_util';

const CommentIndexItem = props => {
  if(!props.comment) return null;
  return (
    <div id="comment-item">
      <div id="comment-icon">
        &#128100;
      </div>
      <div id="comment-name-body">
        <div id="comment-name">
          <Link to={`/workouts/${props.comment.authorId}`}>
          {props.comment.fname} {props.comment.lname}
          </Link>
        </div>
        <div id="comment-body">
          {props.comment.body}
        </div>
      </div>
      <div id="comment-delete-time">
        <div id="comment-delete">
        </div>
        <div id="comment-time">
          {formatDate(props.comment.createdAt)}
        </div>
      </div>
    </div>
)};

export default CommentIndexItem;
