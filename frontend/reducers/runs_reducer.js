import { RECEIVE_RUN, RECEIVE_RUNS, REMOVE_RUN} from '../actions/run_actions';
import { RECEIVE_WORKOUT } from '../actions/workout_actions';
import { merge } from 'lodash';

const runsReducer = (state = {}, action) => {
 Object.freeze(state);
 switch (action.type) {
   case RECEIVE_RUNS:
     return action.runs;
   case RECEIVE_RUN:
     return merge({}, state, { [action.run.id]: action.run} );
   case REMOVE_RUN:
     const newState = merge({}, state);
     delete newState[action.runId];
     return newState;
   case RECEIVE_WORKOUT:
     return action.payload.run
   default:
     return state;
 }
};

export default runsReducer;
