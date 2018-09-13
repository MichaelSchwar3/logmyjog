import * as RunAPIUtil from '../util/run_api_util';

export const RECEIVE_RUN = 'RECEIVE_RUN';
export const RECEIVE_RUNS = 'RECEIVE_RUNS';
export const REMOVE_RUN = 'REMOVE_RUN';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveRun = (run) => {
  return {
    type: RECEIVE_RUN,
    run
  };
};

export const receiveAllRuns = (runs) => {
  return {
    type: RECEIVE_RUNS,
    runs
  };
};

export const removeRun = (runId)=> {
  return {
    type: REMOVE_RUN,
    runId
  };
};

export const receiveErrors = (errors)=> {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const fetchRuns = () => dispatch => {
  return (
    RunAPIUtil.fetchRuns().then( runs => {
    return dispatch(receiveAllRuns(runs))
  }, err => {
    return dispatch(receiveErrors(err.responseJSON))
  }))
};

export const fetchRun = (id) => dispatch => (
  RunAPIUtil.fetchRun(id).then( run => (
    dispatch(receiveRun(run))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const createRun = (run) => dispatch => (
  RunAPIUtil.createRun(run).then( run => (
    dispatch(receiveRun(run))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const updateRun = (run) => dispatch => (
  RunAPIUtil.updateRun(run).then( run => (
    dispatch(receiveRun(run))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const deleteRun = (runId) => dispatch => (
  RunAPIUtil.removeRun(runId).then( () => (
    dispatch(removeRun(runId))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);
