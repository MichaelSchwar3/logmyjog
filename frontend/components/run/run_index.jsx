import React from 'react';
import RunIndexItem from './run_index_item';
import { Link } from 'react-router-dom';

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
          <span>MY ROUTES</span>
          <Link to="/routes/create/"><button id="runs-create-run">Create a Route</button></Link>
        </div>
        <table>
          <thead>
            <tr>
              <th>Run Map</th>
              <th>Created At</th>
              <th>Distance </th>
              <th>Name </th>
              <th>Location</th>
              <th>Privacy</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {this.props.runs.map( run =>{
              if(run && run.runnerId === this.props.user){
                return <RunIndexItem run={run} key={`run-${run.id}`}/>;
              }
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default RunIndex;
