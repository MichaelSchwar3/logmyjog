import { connect } from 'react-redux';
import WorkoutShow from './workout_show';
import { fetchWorkout, deleteWorkout } from '../../actions/workout_actions';

const mapStateToProps = (state, ownProps) => {
  return(
  {
  workout: state.entities.workouts[ownProps.match.params.workoutId],
  user: state.entities.users,
  run: state.entities.runs,
  comments: state.entities.comments,
  }
)};

const mapDispatchToProps = dispatch => ({
  fetchWorkout: (id)=> dispatch(fetchWorkout(id)),
  deleteWorkout: (id)=> dispatch(deleteWorkout(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutShow);
