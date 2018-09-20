import { connect } from 'react-redux';
import ActivityFeedCommentsIndex from './activity_feed_comments_index';
import { deleteComment , fetchComments } from '../../actions/comment_actions';

const mapStateToProps = state => ({
  comments: Object.values(state.entities.comments),
  user: state.session.currentUserId
});

const mapDispatchToProps = dispatch => ({
  fetchComments: (runId)=> dispatch(fetchComments(runId)),
  deleteComment: (id)=> dispatch(deleteComment(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ActivityFeedCommentsIndex);
