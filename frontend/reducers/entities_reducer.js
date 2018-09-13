import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import runsReducer from './runs_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  runs: runsReducer,
});

export default entitiesReducer;
