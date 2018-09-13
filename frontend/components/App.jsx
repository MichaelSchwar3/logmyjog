import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import Footer from './footer/footer';
import Splash from './splash/splash';
import { AuthRoute, Protected } from '../util/route_util';
import { Route, Link } from 'react-router-dom';


const App = () => (
  <div>
    <header>
      <Link to="/"><h1><span>&#8984;</span>  L O G M Y J O G</h1></Link>
      <Route exact path='/' component={GreetingContainer} />
    </header>

    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    <Route exact path='/' component={Splash} />
    <Route exact path='/' component={Footer} />
  </div>
);

export default App;
