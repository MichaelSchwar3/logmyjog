import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import runsReducer from './runs_reducer';
import friendsReducer from './friends_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  runs: runsReducer,
  friends: friendsReducer,
});

export default entitiesReducer;
