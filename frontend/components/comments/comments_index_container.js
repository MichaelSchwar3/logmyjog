import { connect } from 'react-redux';
import CommentIndex from './comments_index';
import { fetchComments, deleteComment } from '../../actions/comment_actions';

const mapStateToProps = state => ({
  comments: Object.values(state.entities.comments)
});

const mapDispatchToProps = dispatch => ({
  deleteComment: (id)=> dispatch(deleteComment(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);
