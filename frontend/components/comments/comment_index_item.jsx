import React from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from '../../util/date_util';

class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    this.props.deleteComment(this.props.comment.id)
  }

  render(){
    if(!this.props.comment) return null;
    let button;
    if(this.props.comment.authorId === this.props.user){
      button = <button onClick={this.handleClick}>Delete</button>
    }else{
      button = ""
    }
    if(!this.props.comment) return null;
    return (
      <div id="comment-item">
        <div id="comment-icon">
          &#128100;
        </div>
        <div id="comment-name-body">
          <div id="comment-name">
            <Link to={`/workouts/${this.props.comment.authorId}`}>
            {this.props.comment.fname} {this.props.comment.lname}
            </Link>
          </div>
          <div id="comment-body">
            {this.props.comment.body}
          </div>
        </div>
        <div id="comment-delete-time">
          <div id="comment-delete">
            {button}
          </div>
          <div id="comment-time">
            &nbsp;|&nbsp;{formatDate(this.props.comment.createdAt)}
          </div>
        </div>
      </div>
  );}

}


export default CommentIndexItem;
