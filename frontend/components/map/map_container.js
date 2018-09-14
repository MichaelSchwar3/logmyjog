import { connect } from 'react-redux';
import RunMap from './map';
import { createRun } from '../../actions/run_actions';

const mapStateToProps = state =>({
  run: state.entities.runs
});

const mapDispatchToProps = dispatch =>({
  createRun: (run)=>displatch(createRun(run))
});

export default connect(mapStateToProps,mapDispatchToProps)(RunMap);
