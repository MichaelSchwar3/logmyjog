import { RECEIVE_WORKOUT, RECEIVE_WORKOUTS, REMOVE_WORKOUT} from '../actions/workout_actions';
import { merge } from 'lodash';

const workoutsReducer = (state = {}, action) => {
 Object.freeze(state);
 switch (action.type) {
   case RECEIVE_WORKOUTS:
     return action.workouts;
   case RECEIVE_WORKOUT:
     return merge({}, state, { [action.payload.workout.id]: action.payload.workout} );
   case REMOVE_WORKOUT:
     const newState = merge({}, state);
     delete newState[action.workoutId];
     return newState;
   default:
     return state;
 }
};

export default workoutsReducer;
