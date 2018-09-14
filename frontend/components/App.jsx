import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import RunIndexContainer from './run/run_index_container';
import MapContainer from './map/map_container';
import SplashContainer from './splash/splash_container';
import Footer from './footer/footer';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Link } from 'react-router-dom';


const App = () => (
  <div>
    <header>
      <Link to="/"><h1><span>&#8984;</span>  L O G M Y J O G</h1></Link>
      <Route path='/' component={GreetingContainer} />
    </header>
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    <AuthRoute exact path='/' component={SplashContainer} />
    <ProtectedRoute exact path='/search' component={MapContainer} />
    <Route exact path='/' component={Footer} />
    <Route exact path='/runs' component={RunIndexContainer} />
  </div>
);

export default App;
