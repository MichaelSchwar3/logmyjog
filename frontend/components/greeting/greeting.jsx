import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {
  if (currentUser) {
    return(
      <div id="greeting">
        <nav id="nav-id">
          <div class="nav nav-hover" id="workouts">
            Routes
          </div>
          <div class="nav nav-hover" id="routes">
            Workouts
          </div>
          <div class="nav nav-hover" id="friends">
            Friends
          </div>
          <div class="nav" id="logout-greeting">
            <h3>Welcome {currentUser.fname}!</h3>
            <button onClick={logout}>Logout</button>
          </div>
        </nav>
      </div>
    );
  }else {
    return(
      <div id="greeting">
        <span><Link to='/login'>Log In</Link></span>
        <button id="signup-button"><Link to='/signup'>Sign Up</Link></button>
      </div>
    );
  }
};

export default Greeting;
