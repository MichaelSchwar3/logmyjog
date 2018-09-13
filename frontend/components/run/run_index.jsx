import React from 'react';
import RunIndexItem from './run_index_item';
// import CreateRunFormContainer from './create_run_form_container';

class RunIndex extends React.Component {

  componentDidMount() {
    this.props.fetchRuns()
  }

  render () {
    return (
      <div className="runs-index">
        <table>
          <thead>
            <tr>
              <th>Run Map</th>
              <th>Created At</th>
              <th>Distance </th>
              <th>Elevation</th>
              <th>Name </th>
              <th>Location</th>
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
