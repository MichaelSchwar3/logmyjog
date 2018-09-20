import React from 'react';
import { Link } from 'react-router-dom';

class RunShow extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount() {
    if(!this.props.run){
      this.props.fetchRun(this.props.match.params.runId)
    }
  }
  handleClick(){
    this.props.deleteRun(this.props.run.id)
    this.props.history.push('/routes/my_routes')
  }
  render () {
    const run = this.props.run || {fname: "", lname:"" ,location: "" ,distance:0}
    return (
      <div className="runs-show">
        <section id="runs-show-left">
          <div id="runs-show-header">
            {run.name}
          </div>
          <div id="runs-show-details">
            <div id="runs-show-distance">
              <span id="distance">DISTANCE</span>
              <div>{run.distance.toFixed(2)}</div>
              <span id="miles">miles</span>
            </div>
            <div id="runs-show-description">
              <span>BEGINS IN:</span><br/>
              <span>CREATED BY:</span><br/>
            </div>
            <div id="runs-show-description">
              {run.location}<br/>
              {run.fname}&nbsp;{run.lname}
            </div>
          </div>
          <div id="runs-show-map">
            <img src={`https://maps.googleapis.com/maps/api/staticmap?size=660x660&path=weight:3%7Ccolor:red%7Cenc:${run.runMap}&key=${window.apiKey}`}/>
          </div>
        </section>
        <section id="runs-show-right">
          <Link to='/routes/create'>
            <div className="runs-show-button" id="runs-show-create">
              Create A Route
            </div>
          </Link>
          <div className="runs-show-button" id="runs=show-edit">
            Edit Route
          </div>
          <button className="runs-show-button" id="runs-show-delete" onClick={this.handleClick}>
            Delete Route
          </button>
          <Link to='/workouts/create/'>
            <div className="runs-show-button" id="runs-show-log">
              Log A Workout
            </div>
          </Link>
          <Link to='/routes/my_routes'>
            <div id="runs-show-index">
              Back to My Routes
            </div>
          </Link>
        </section>
      </div>
    );
  }
}

export default RunShow;
