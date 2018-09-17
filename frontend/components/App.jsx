import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import RunIndexContainer from './run/run_index_container';
import RunShowContainer from './run/run_show_container';
import MapContainer from './map/map_container';
import SplashContainer from './splash/splash_container';
import Footer from './footer/footer';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Link, Switch } from 'react-router-dom';


const App = () => (
  <div>
    <header>
      <Link to="/"><img src={window.logoUrl}/></Link>
      <Route path='/' component={GreetingContainer} />
    </header>
    <AuthRoute exact path='/' component={SplashContainer} />
    <ProtectedRoute exact path='/routes/create' component={MapContainer} />
    <ProtectedRoute exact path='/routes/:runId' component={RunShowContainer} />
    <ProtectedRoute exact path='/workouts' component={RunIndexContainer} />
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route path='/' component={Footer} />
    </Switch>
  </div>
);

export default App;
