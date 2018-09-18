import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_USERS = 'RECEIVE_USERS';


export const receiveAllUsers= (users) => {
  return {
    type: RECEIVE_USERS,
    users
  };
};

export const fetchUsers = () => dispatch => {
  return (
    UsersAPIUtil.fetchAllUsers().then( users => {
    return dispatch(receiveAllUsers(users))
  }, err => {
    return dispatch(receiveErrors(err.responseJSON))
  }))
};
