import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {
  if (currentUser) {
    return(
      <div id="greeting">
        <h3>Welcome to LogMyJog {currentUser.fname}!</h3>
        <button onClick={logout}>Logout</button>
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
