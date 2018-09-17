import React from 'react';
import { Link } from 'react-router-dom';

class RunShow extends React.Component {

  componentDidMount() {
    if(!this.props.run){
      this.props.fetchRun(this.props.match.params.runId)
    }
  }

  componentWillReceiveProps(nextProps) {
  if (this.props.match.params.runId !== nextProps.match.params.runId) {
    this.props.fetchRun(nextProps.match.params.runId);
  }
}

  render () {
    const run = this.props.run || {name: "", location: "", runMap:"" }
    return (
      <div className="runs-show">
        <section id="runs-show-left">
          <div id="runs-show-header">
            {run.name}
          </div>
          <div id="runs-show-details">
            <div id="runs-show-distance">
            </div>
            <div id="runs-show-description">
              <span>BEGINS IN:</span><br/>
              <span>CREATED BY:</span><br/>
            </div>
            <div id="runs-show-description">
              {run.location}<br/>
              Placeholder for name
            </div>
          </div>
          <div id="runs-show-map">
            <img src={`https://maps.googleapis.com/maps/api/staticmap
            ?size=80x80&path=weight:3%7Ccolor:orange%7Cenc:${run.runMap}&key=${window.apiKey}`}/>
          </div>
        </section>
        <section id="runs-show-right">
          <div className="runs-show-button" id="runs-show-create">
            Create A Route
          </div>
          <div className="runs-show-button" id="runs=show-edit">
            Edit Route
          </div>
          <div className="runs-show-button" id="runs-show-delete">
            Delete Route
          </div>
          <div className="runs-show-button" id="runs-show-log">
            Log This Workout
          </div>
          <div id="runs-show-index">
            Back to My Routes
          </div>
        </section>
      </div>
    );
  }
}

export default RunShow;
