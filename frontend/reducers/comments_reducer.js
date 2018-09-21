import { RECEIVE_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';
import { RECEIVE_WORKOUT } from '../actions/workout_actions';
import { merge } from 'lodash';

const commentsReducer = (state = {}, action) => {
 Object.freeze(state);
 switch (action.type) {
   case RECEIVE_COMMENTS:
     return merge({}, state, action.comments);
   case RECEIVE_COMMENT:
     return merge({}, state, { [action.comment.id]: action.comment} );
   case REMOVE_COMMENT:
     const newState = merge({}, state);
     delete newState[action.commentId];
     return newState;
   // case RECEIVE_WORKOUT:
   //   return action.payload.comments
   default:
     return state;
 }
};

export default commentsReducer;
