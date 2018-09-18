import React from 'react';
import { Link } from 'react-router-dom';
import { formatDate, formatTime } from '../../util/date_util';
import { formatCompletion } from '../../util/completed_run_util';

const RunIndexItem = props => {
  if(!props.run) return null;
  return (
    <tr>
      <td className="run-td" id="run-map">
      <Link to={`/routes/views/${props.run.id}`}><img src={`https://maps.googleapis.com/maps/api/staticmap
?size=80x80&path=weight:3%7Ccolor:red%7Cenc:${props.run.runMap}&key=${window.apiKey}`}/></Link>
      </td>
      <td className="run-td" id="run-time"><Link to={`/routes/views/${props.run.id}`}>{formatDate(props.run.createdAt)}</Link></td>
      <td className="run-td" id="run-distance">{(props.run.distance).toFixed(3)} miles</td>
      <td className="run-td" id="run-duration">{formatTime(props.run.duration)}</td>
      <td className="run-td" id="run-name"><Link to={`/routes/views/${props.run.id}`}>{props.run.name}</Link></td>
      <td className="run-td" id="run-location">{props.run.location}</td>
      <td className="run-td" id="run-completion">{formatCompletion(props.run.completedRun)}</td>
      <td className="run-td" id="run-option">Options</td>
    </tr>
)};

export default RunIndexItem;
