import { connect } from 'react-redux';
import WorkoutForm from './workout_form';
import { createWorkout } from '../../actions/workout_actions';
import { fetchRuns } from '../../actions/run_actions';

const mapStateToProps = state => ({
  workout: {
    name: "",
    description: "",
    user_id: state.session.currentUserId,
    run_id: "",
    distance: 0,
    duration: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  },
  runs: state.entities.runs
});

const mapDispatchToProps = dispatch => ({
  createWorkout: (workout) => dispatch(createWorkout(workout)),
  fetchRuns: ()=> dispatch(fetchRuns())
})

export default connect(mapStateToProps,mapDispatchToProps)(WorkoutForm)
