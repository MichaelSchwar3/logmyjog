import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const FriendsNav = () => {
  return(
    <div id="dash-nav-bar-parent">
      <div id="dash-nav-bar">
        <NavLink exact={true} to="/people/friends" activeClassName="active">
          <div className="dash-nav-box" id="dash-nav-dashboard">My Friends</div>
        </NavLink>
        <NavLink to="/people/friends/find" activeClassName="active">
          <div className="dash-nav-box" id="dash-nav-create">Find Friends</div>
        </NavLink>
        <NavLink to="/my_home/activity_feed" activeClassName="active">
          <div className="dash-nav-box" id="dash-nav-log">Dashboard</div>
        </NavLink>
      </div>
    </div>
  );
};
export default FriendsNav;
