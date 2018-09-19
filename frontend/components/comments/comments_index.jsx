import React from 'react';
import CommentIndexItem from './comment_index_item';
// import CommentForm from './comment_form_container';
import { Link } from 'react-router-dom';

class CommentIndex extends React.Component {

  componentDidMount() {
    this.props.fetchComments()
  }

  componentWillMount() {
    this.props.fetchComments()
  }

  render () {
    return (
      <div className="comments-index">
        <div id="comments-create">
          Comments
        </div>
        <div id="comment-items">
            {this.props.comments.map( comment =>{
              return <CommentIndexItem comment={comment} deleteComment={this.props.deleteComment} key={`comment-${comment.id}`}/>;
            })}
        </div>
      </div>
    );
  }
}

export default CommentIndex;
