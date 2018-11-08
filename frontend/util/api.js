import axios from "axios";
import _ from "lodash";
import qs from "qs";

let response_error;

// For some reason, things go bad if it already stringified the request data
axios.create({
  transformRequest: [data => (_.isString(data) ? data : qs.stringify(data))]
});

// Intercepts failed requests, tries to refresh the token, then retries the request.
axios.interceptors.response.use(null, error => {
  if (
    error.config &&
    error.response &&
    error.response.status === 401 &&
    error.config.headers &&
    error.config.headers.Authorization &&
    error.config.headers.Authorization.split(" ")[1]
  ) {
    const token = error.config.headers.Authorization.split(" ")[1];
    response_error = error;
    return REFRESH_TOKEN(token)
      .then(() =>
        axios.request(response_error.config).then(response => {
          response_error = null;
          return Promise.resolve(response);
        })
      )
      .catch(() => Promise.reject(error));
  }

  return Promise.reject(error);
});

const REFRESH_TOKEN = token =>
  api
    .POST("/session/refresh", { auth: { token } })
    .then(() => Promise.resolve())
    .catch(error => {
      console.log("token no longer valid, will need to log in again");
      localStorage.removeItem("session");
      return Promise.reject(error);
    });

export const SET_TOKEN = token => {
  console.log("updated token");
  if (response_error) {
    response_error.config.headers.Authorization = `Bearer ${token}`;
  }
  axios.defaults.headers.Authorization = `Bearer ${token}`;
  localStorage.setItem("session", token);
  return Promise.resolve();
};

const PROCESS_DATA = (apiResponse) => {
  if (apiResponse && apiResponse.data && apiResponse.data.attributes && apiResponse.data.attributes.jwt) {
    SET_TOKEN(apiResponse.data.attributes.jwt).then(() =>
      Promise.resolve(apiResponse)
    );
  } else {
    return Promise.resolve(apiResponse);
  }
};

const HANDLE_RESPONSE = response => {
  return PROCESS_DATA(response.data);
};

const api = {
  GET: url =>
    axios
      .get(`api${url}`)
      .then(HANDLE_RESPONSE)
      .catch(error => Promise.reject(error)),
  POST: (url, request) =>
    axios
      .post(`api${url}`, request)
      .then(HANDLE_RESPONSE)
      .catch(error => Promise.reject(error)),
  PATCH: (url, request) =>
    axios
      .patch(`api${url}`, request)
      .then(HANDLE_RESPONSE)
      .catch(error => Promise.reject(error)),
  DELETE: url =>
    axios
      .delete(`api${url}`)
      .then(HANDLE_RESPONSE)
      .catch(error => Promise.reject(error))
};

export default api;
