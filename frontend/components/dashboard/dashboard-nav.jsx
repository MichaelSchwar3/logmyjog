import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const DashNav = () => {
  return(
    <div id="dash-nav-bar-parent">
      <div id="dash-nav-bar">
        <NavLink to="/my_home/activity_feed" activeClassName="active">
          <div className="dash-nav-box" id="dash-nav-dashboard">Activity Feed</div>
        </NavLink>
        <NavLink to="/workouts" activeClassName="active">
          <div className="dash-nav-box" id="dash-nav-create">My Workouts</div>
        </NavLink>
        <NavLink to="/routes/my_routes" activeClassName="active">
          <div className="dash-nav-box" id="dash-nav-log">My Routes</div>
        </NavLink>
      </div>
    </div>
  );
};
export default DashNav;
