export const fetchRuns = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/runs',
  });
};

export const fetchRun = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/runs/${id}`,
  });
};

export const createRun = (run) => {
  debugger
  return $.ajax({
    method: 'POST',
    url: '/api/runs',
    data: { run }
  });
};

export const updateRun = (run) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/runs/${run.id}`,
    data: { run }
  });
};

export const removeRun = (runId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/runs/runId`,
  });
};
