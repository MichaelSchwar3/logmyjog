import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {
  if (currentUser) {
    return(
      <div>
        <h3>Welcome to LogMyJog!</h3>
        <button onClick={logout(currentUser.id)}>Logout</button>
      </div>
    );
  }else {
    return(
      <div>
        <Link to='/login'>Log In</Link><br/>
        <Link to='/signup'>Sign Up</Link>
      </div>
    );
  }
};

export default Greeting;
