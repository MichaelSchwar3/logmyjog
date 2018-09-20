import React from 'react';
import ActivityFeedCommentsIndexItem from './activity_feed_comments_index_item';
import CommentForm from '../comments/comment_form_container';
import { Link } from 'react-router-dom';

class ActivityFeedCommentsIndex extends React.Component {

  componentDidMount(){
    this.props.fetchComments(this.props.workout.id)
  }
  componentWillReceiveProps(nextProps){

  }
  render () {
    return (
      <div className="comments-index">
        <div id="comment-items">
            {this.props.comments.map( comment =>{
              if(comment.runId === this.props.workout.id){
                return <ActivityFeedCommentsIndexItem comment={comment}
              deleteComment={this.props.deleteComment}
              user={this.props.user}
              key={`comment-${comment.id}`}/>}
            })}
        </div>
        <div id="comment-create">
          <CommentForm workout={this.props.workout} />
        </div>
      </div>
    );
  }
}

export default ActivityFeedCommentsIndex;
