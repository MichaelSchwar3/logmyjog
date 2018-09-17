import React from 'react';
import RunIndexItem from './run_index_item';
import { Link } from 'react-router-dom';
// import CreateRunFormContainer from './create_run_form_container';

class RunIndex extends React.Component {

  componentDidMount() {
    this.props.fetchRuns()
  }

  componentWillMount() {
    this.props.fetchRuns()
  }

  render () {
    return (
      <div className="runs-index">
        <div id="runs-create">
          <span>My Routes</span>
          <Link to="/routes/create/"><button id="runs-create-run">Create a Route</button></Link>
        </div>
        <table>
          <thead>
            <tr>
              <th>Run Map</th>
              <th>Created At</th>
              <th>Distance </th>
              <th>Duration</th>
              <th>Name </th>
              <th>Location</th>
              <th>Completed</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {this.props.runs.map( run =>{
              return <RunIndexItem run={run} key={`run-${run.id}`}/>;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default RunIndex;
