import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import runsReducer from './runs_reducer';
import friendsReducer from './friends_reducer';
import workoutsReducer from './workouts_reducer';
import commentsReducer from './comments_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  runs: runsReducer,
  friends: friendsReducer,
  workouts: workoutsReducer,
  comments: commentsReducer,
});

export default entitiesReducer;
