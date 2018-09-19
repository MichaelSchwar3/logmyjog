import * as WorkoutAPIUtil from '../util/workout_api_util';

export const RECEIVE_WORKOUT = 'RECEIVE_WORKOUT';
export const RECEIVE_WORKOUTS = 'RECEIVE_WORKOUTS';
export const REMOVE_WORKOUT = 'REMOVE_WORKOUT';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveWorkout = (workout) => {
  return {
    type: RECEIVE_WORKOUT,
    workout
  };
};

export const receiveAllWorkouts = (workouts) => {
  return {
    type: RECEIVE_WORKOUTS,
    workouts
  };
};

export const removeWorkout = (workoutId)=> {
  return {
    type: REMOVE_WORKOUT,
    workoutId
  };
};

export const receiveErrors = (errors)=> {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const fetchWorkouts = () => dispatch => {
  return (
    WorkoutAPIUtil.fetchWorkouts().then( workouts => {
    return dispatch(receiveAllWorkouts(workouts))
  }, err => {
    return dispatch(receiveErrors(err.responseJSON))
  }))
};

export const fetchWorkout = (id) => dispatch => {
  return WorkoutAPIUtil.fetchWorkout(id).then( workout => {
    return dispatch(receiveWorkout(workout))
  }, err => {
    return dispatch(receiveErrors(err.responseJSON))
  })
};

export const createWorkout = (workout) => dispatch => {
  return WorkoutAPIUtil.createWorkout(workout).then( workout => (
    dispatch(receiveWorkout(workout))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
};

export const updateWorkout = (workout) => dispatch => (
  WorkoutAPIUtil.updateWorkout(workout).then( workout => (
    dispatch(receiveWorkout(workout))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const deleteWorkout = (workoutId) => dispatch => (
  WorkoutAPIUtil.removeWorkout(workoutId).then( () => (
    dispatch(removeWorkout(workoutId))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);
