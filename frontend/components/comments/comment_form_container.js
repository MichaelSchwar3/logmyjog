import { connect } from 'react-redux';
import CommentForm from './comment_form';
import { createComment } from '../../actions/comment_actions';

const mapStateToProps = state => ({
  user: state.session.currentUserId
});

const mapDispatchToProps = dispatch => ({
  createComment: (comment)=> dispatch(createComment(comment)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
