import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.props.login(this.props.demoUser)
  }
  render(){
    return(
      <div id="splash-page">
        <section id="splash-main">
          <span>
            OWN EVERY MILE
            <p>
              The best mobile run tracking experience,<br/> backed by the world's largest digital<br/> health and fitness community.
            </p>
            <div id="splash-session-buttons">
              <Link to='/signup'><button id="splash-signup-button">Sign Up</button></Link>
              <button onClick={this.handleClick}><div className="splash-login-div">Log In Demo</div></button>
            </div>
          </span>
        </section>
        <section id="splash-bottom">
          <div className="splash-link">
              <h2>&#128506;</h2>
              <h3>Map Your Route</h3>
              Map your route before you go out and take your jog!
          </div>
          <div className="splash-link">
              <h2>&#128214;</h2>
              <h3>Track Your Activity</h3>
              Keep track of all the jogs you've taken so you can see how much progress you have!
          </div>
          <div className="splash-link">
              <h2>&#128100;</h2>
              <h3>Share With Friends</h3>
              Share your runs and activities with all your friends!
          </div>
        </section>
      </div>
    );
  }
}
export default Splash;
