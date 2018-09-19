import { connect } from 'react-redux';
import WorkoutIndex from './workout_index';
import { fetchWorkouts } from '../../actions/workout_actions';

const mapStateToProps = state => ({
  workouts: Object.values(state.entities.workouts)
});

const mapDispatchToProps = dispatch => ({
  fetchWorkouts: ()=> dispatch(fetchWorkouts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutIndex);
