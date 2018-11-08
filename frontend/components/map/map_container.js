import { connect } from 'react-redux';
import RunMap from './maptest';
import { createRun } from '../../actions/run_actions';

const mapStateToProps = state =>({
  run: state.entities.runs,
  currentUserId: state.session.currentUserId
});

const mapDispatchToProps = dispatch =>({
  createRun: (run)=>dispatch(createRun(run))
});

export default connect(mapStateToProps,mapDispatchToProps)(RunMap);
