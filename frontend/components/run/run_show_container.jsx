import { connect } from 'react-redux';
import RunShow from './run_show';
import { fetchRun } from '../../actions/run_actions';

const mapStateToProps = (state, ownProps) => {
  return(
  {
  run: state.entities.runs[ownProps.match.params.runId],
  user: state.entities.users
  }
)};

const mapDispatchToProps = dispatch => ({
  fetchRun: (id)=> dispatch(fetchRun(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RunShow);
