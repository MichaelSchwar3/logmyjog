import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

//test imports
import { signup, login, logout } from './actions/session_actions';
import { fetchRuns } from './actions/run_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preLoadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { currentUserId: window.currentUser.id }
    };
    store = configureStore(preLoadedState);
  }else {
    store = configureStore();
  }

//Beginning of Testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  window.signup = signup;
  window.logout = logout;
  window.store = store;
  window.fetchRuns = fetchRuns

//End of Testing
  ReactDOM.render(<Root store={store}/>, root);
});
