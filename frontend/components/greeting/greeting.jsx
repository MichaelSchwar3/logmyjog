import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {
  if (currentUser) {
    return(
      <div id="greeting">
        <nav id="nav-id">
          <div className="nav nav-hover" id="routes">
            Routes
            <ul className="header-notifications">
              <li><Link to="/routes/create">Create Route</Link></li>
              <li><Link to="/workouts">My Routes</Link></li>
            </ul>
          </div>
          <div className="nav nav-hover" id="workouts">
            Workouts
            <ul className="header-notifications">
              <li>Log Workout</li>
              <li>My Workouts</li>
            </ul>
          </div>
          <div className="nav nav-hover" id="friends">
            Friends
            <ul className="header-notifications">
              <li><Link to="/people/friends">My Friends</Link></li>
              <li>Find Friends</li>
            </ul>
          </div>
          <div className="nav" id="logout-greeting">
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
