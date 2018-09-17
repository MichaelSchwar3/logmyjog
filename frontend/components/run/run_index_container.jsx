import { connect } from 'react-redux';
import RunIndex from './run_index';
import { fetchRuns } from '../../actions/run_actions';

const mapStateToProps = state => ({
  runs: Object.values(state.entities.runs)
});

const mapDispatchToProps = dispatch => ({
  fetchRuns: ()=> dispatch(fetchRuns()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RunIndex);
