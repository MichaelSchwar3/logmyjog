import { connect } from 'react-redux';
import Splash from './splash';
import { login } from '../../actions/session_actions';

const mapStateToProps = state =>({
  demoUser: {
    email: "Demo@gmail.com",
    password: "Testing123"
  }
});

const mapDispatchToProps = dispatch =>({
  login: (user)=> dispatch(login(user))
});

export default connect(mapStateToProps,mapDispatchToProps)(Splash);
