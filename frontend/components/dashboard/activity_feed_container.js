import { connect } from 'react-redux';
import ActivityFeed from './activity_feed';
import { fetchWorkouts } from '../../actions/workout_actions';
import { deleteComment , fetchComments } from '../../actions/comment_actions';

const mapStateToProps = state => ({
  workouts: Object.values(state.entities.workouts),
});

const mapDispatchToProps = dispatch => ({
  fetchWorkouts: ()=> dispatch(fetchWorkouts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ActivityFeed);
