import { connect } from 'react-redux';
import CommentIndex from './comments_index';
import { fetchComments } from '../../actions/comment_actions';

const mapStateToProps = state => ({
  comments: Object.values(state.entities.comments)
});

const mapDispatchToProps = dispatch => ({
  fetchComments: ()=> dispatch(fetchComments()),
  createComment: (comment)=> dispatch(createComment(comment)),
  deleteComment: (commentId)=> dispatch(deleteComment(commentId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);
