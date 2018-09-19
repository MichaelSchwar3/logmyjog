import * as CommentAPIUtil from '../util/comment_api_util';


export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';


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
