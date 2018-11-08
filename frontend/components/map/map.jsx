import React from 'react';
import { Link } from 'react-router-dom';

class RunMap extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      polyline: "",
      location: "New York",
      duration: 0,
      name: "",
      snapToRoads: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.undoMarker = this.undoMarker.bind(this);
    this.clearMap = this.clearMap.bind(this);
  }
  createMap() {
    let map, infoWindow;
    map = new google.maps.Map(this.mapNode,{
      center: {lat: 40.7831, lng: 73.9712},
      zoom: 15
    })
    infoWindow = new google.maps.InfoWindow;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        let pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        infoWindow.setPosition(pos);
        infoWindow.setContent('Location found.');
        infoWindow.open(map);
        map.setCenter(pos);
      }, function() {
        handleLocationError(true, infoWindow, map.getCenter())
      })} else {
        handleLocationError(false, infoWindow, map.getCenter())
    }
    this.mapHelper = new MapHelper(map, this.props.updateRoute)
  }

  componentDidMount() {
    this.createMap();
  }
  update(field){
    return e => {
      this.setState({
      [field]: e.target.value
      })
    }
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createRun({
      location: this.state.location,
      distance: this.state.distance.toFixed(2),
      runner_id: this.props.currentUserId,
      run_map: this.state.polyline,
      name: this.state.name,
    })
    this.props.history.push('/routes/my_routes');
  }
  render() {
    let distance;
    if(this.state.distance){
      distance = this.state.distance
    }else{
      distance = 0
    }
    return(
      <div id="map-main">
        <section id="map-sidebar">
          <div id="route-details">
            <div id="route-details-top">
              Route Details
            </div>
            <div id="route-details-bot">
              <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">
                  <input type="text" value={this.state.name} onChange={this.update('name')} placeholder="Name this map"/>*
                </label>
                <label htmlFor="Location">
                  <input id="bar" type="text" value={this.state.location} onChange={this.update('location')} placeholder="Location"/>*
                </label>
                <input id="route-submit" type="submit" value="Save Route"/>
              </form>
              <aside id="map-show-distance">
                <span id="map-show-distance-distance">DISTANCE</span>
                <span>{distance.toFixed(2)}&nbsp;mi</span>
              </aside>
            </div>
          </div>
        </section>
        <div id="map-container" ref={ map => this.mapNode = map }>

        </div>
      </div>
    )
  }
}


export default RunMap;
