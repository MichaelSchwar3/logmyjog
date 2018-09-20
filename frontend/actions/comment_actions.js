import * as CommentAPIUtil from '../util/comment_api_util';


export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const RECEIVE_COMMENT_DASHBOARD = "RECEIVE_COMMENT_DASHBOARD";
export const REMOVE_COMMENT_DASHBOARD = "REMOVE_COMMENT_DASHBOARD";


export const receiveAllComments = (comments) => {
  return {
    type: RECEIVE_COMMENTS,
    comments
  };
};

export const receiveComment = (comment) => {
  return {
    type: RECEIVE_COMMENT,
    comment
  };
};

export const removeComment = (commentId)=> {
  return {
    type: REMOVE_COMMENT,
    commentId
  };
};



export const receiveErrors = (errors)=> {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

// export const receiveCommentFromDashboard = (workoutId, comment) => {
//   return {
//     type: RECEIVE_COMMENT_DASHBOARD,
//     comment,
//     workoutId
//   };
// };
//
// export const removeCommentFromDashboard = (workoutId, commentId)=> {
//   return {
//     type: REMOVE_COMMENT_DASHBOARD,
//     commentId,
//     workoutId
//   };
// };


export const fetchComments = (runId) => dispatch => {
  return (
    CommentAPIUtil.fetchComments(runId).then( comments => {
    return dispatch(receiveAllComments(comments))
  }, err => {
    return dispatch(receiveErrors(err.responseJSON))
  }))
};

export const createComment = (comment) => dispatch => {
  return CommentAPIUtil.createComment(comment).then( comment => (
    dispatch(receiveComment(comment))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
};

export const deleteComment = (commentId) => dispatch => (
  CommentAPIUtil.removeComment(commentId).then( () => (
    dispatch(removeComment(commentId))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

// export const createCommentDashboard = (workoutId, comment) => dispatch => {
//   return CommentAPIUtil.createComment(comment).then( comment => (
//     dispatch(receiveCommentFromDashboard(comment))
//   ), err => (
//     dispatch(receiveErrors(err.responseJSON))
//   ))
// };
//
// export const deleteCommentDashboard = (workoutId, commentId) => dispatch => (
//   CommentAPIUtil.removeComment(commentId).then( () => (
//     dispatch(removeCommentFromDashboard(commentId))
//   ), err => (
//     dispatch(receiveErrors(err.responseJSON))
//   ))
// );
