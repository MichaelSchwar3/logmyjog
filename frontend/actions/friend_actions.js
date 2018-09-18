import * as FriendAPIUtil from '../util/friend_api_util';

export const RECEIVE_FRIENDS = 'RECEIVE_FRIENDS';
export const REMOVE_FRIEND = 'REMOVE_FRIEND';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';


export const receiveAllFriends= (friends) => {
  return {
    type: RECEIVE_FRIENDS,
    friends
  };
};

export const removeFriend = (friendId)=> {
  return {
    type: REMOVE_FRIEND,
    friendId
  };
};

export const receiveErrors = (errors)=> {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const fetchFriends = (userId) => dispatch => {
  return (
    FriendAPIUtil.fetchFriends(userId).then( friends => {
    return dispatch(receiveAllFriends(friends))
  }, err => {
    return dispatch(receiveErrors(err.responseJSON))
  }))
};

export const createFriend = (userId, friend) => dispatch => {
  return FriendAPIUtil.createFriend(friend).then( () => (
    dispatch(receiveAllFriends(userId))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
};

export const updateFriend = (userId, friend) => dispatch => {
  return FriendAPIUtil.updateFriend(userId, friend).then( () => {
    return dispatch(receiveAllFriends(userId))
  }, err => {
    return dispatch(receiveErrors(err.responseJSON))
  })
};

export const deleteFriend = (userId, friendId) => dispatch => (
  FriendAPIUtil.removeFriend(userId, friendId).then( () => (
    dispatch(removeFriend(friendId))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);
