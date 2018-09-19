import { connect } from 'react-redux';
import WorkoutShow from './workout_show';
import { fetchWorkout } from '../../actions/workout_actions';
import { fetchRun } from '../../actions/run_actions';

const mapStateToProps = (state, ownProps) => {
  return(
  {
  workout: state.entities.workouts[ownProps.match.params.workoutId],
  user: state.entities.users,
  }
)};

const mapDispatchToProps = dispatch => ({
  fetchWorkout: (id)=> dispatch(fetchWorkout(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutShow);
