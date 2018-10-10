import React from 'react';
import { Link } from 'react-router-dom';
import { formatDuration } from '../../util/date_util';

class WorkoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.workout
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleSubmit() {
      this.props.createWorkout({
        name: this.state.name,
        description: this.state.description,
        run_id: parseInt(this.state.run_id),
        distance: this.props.runs[this.state.run_id].distance,
        duration: formatDuration(parseInt(this.state.hours), parseInt(this.state.minutes), parseInt(this.state.seconds)),
        user_id: parseInt(this.state.user_id),
      })
      this.props.history.push('/workouts');
  }

  update(field) {
    return e =>{
      this.setState({
       [field]: e.target.value
     });
   };
 }
 componentDidMount(){
   this.props.fetchRuns()
 }

 componentWillMount() {
   this.props.fetchRuns()
 }

  render() {
    if (!Object.values(this.props.runs).length) return null;

    const runs = Object.values(this.props.runs)
    return(
      <div id="workout-form-flex-container">
        <div id="workout-form-container">
          <div id="workout-form-head">
            LOG A WORKOUT
          </div>
          <div id="workout-form-form">
            <form onSubmit={this.handleSubmit}>
              <label id="workout-form-name">
                <span>Workout name</span>
                <input type="text" value={this.state.name}
                onChange={this.update('name')} />
              </label>
              <label id="workout-form-description">
                <span>How did it go?</span>
                <input type="text" value={this.state.description}
                onChange={this.update('description')} />
              </label>
            <div id="workout-form-route">
              <label id="workout-form-select">
                <select onChange={this.update('run_id')}>
                  <option selected="selected" disabled>--Please Choose a Route--</option>
                  {runs.map( run =>{
                    if(!run.distance) return null;
                    return <option onClick={this.update('run_id')}
                    key={`run-${run.id}`}
                    id="workout-form-option" value={run.id}>
                      {run.name}-{(run.distance).toFixed(2)} miles
                    </option>
                  })}
                </select>
              </label>
              <div id="workout-form-time">
                <input id="form-hours" type="text" value={this.state.hours}
                onChange={this.update('hours')} placeholder="00"/>
                : <input id="form-minutes" type="text" value={this.state.minutes}
                onChange={this.update('minutes')} placeholder="00"/>
                : <input id="form-seconds" type="text" value={this.state.seconds}
                onChange={this.update('seconds')} placeholder="00"/>
              </div>
            </div>
            <input id="workout-save-button" type="submit" value="SAVE"/>
          </form>
        </div>
      </div>
    </div>
  )}
}
export default WorkoutForm;
