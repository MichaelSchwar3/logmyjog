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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.markerLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.markerPos = 0;
    this.markersArray = [];
    this.placeMarker = this.placeMarker.bind(this);
    this.geolocation = this.geolocation.bind(this);

  }
  componentDidMount() {
    this.initMap();
  }

  initMap() {
    this.map = new google.maps.Map(this.mapNode,{
      center: {lat: 40.7831, lng: 73.9712},
      zoom: 15
    })
    this.infoWindow = new google.maps.InfoWindow;
    console.log(this.infoWindow)
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.geolocation, function() {
        handleLocationError(true, this.infoWindow, this.map.getCenter())
      })} else {
        handleLocationError(false, this.infoWindow, this.map.getCenter())
    }
    this.poly = new google.maps.Polyline({
      strokeColor: '#000000',
      strokeOpacity: 1.0,
      strokeWeight: 3
    });
    this.poly.setMap(this.map);
    this.map.addListener("click", this.placeMarker);
  }

  geolocation(position) {
    let pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };
    this.infoWindow.setPosition(pos);
    this.infoWindow.setContent('Location found.');
    this.infoWindow.open(this.map);
    this.map.setCenter(pos);
  }
  placeMarker(e) {
    let marker = new google.maps.Marker({
      position: e.latLng,
      label: this.markerLetters[this.markerPos],
      map: this.map,
      draggable: true
    })
    this.markersArray.push(marker);
    if(!this.path){
      this.path = this.poly.getPath();
    }
    this.path.push(e.latLng);
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
