import { RECEIVE_FRIENDS, REMOVE_FRIEND} from '../actions/friend_actions';
import { merge } from 'lodash';

const friendsReducer = (state = {}, action) => {
 Object.freeze(state);
 switch (action.type) {
   case RECEIVE_FRIENDS:
     return action.friends;
   case REMOVE_FRIEND:
     const newState = merge({}, state);
     delete newState[action.friendId];
     return newState;
   default:
     return state;
 }
};

export default friendsReducer;
