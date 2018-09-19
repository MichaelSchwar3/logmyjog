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
  }
  componentDidMount() {
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
    let poly = new google.maps.Polyline({
    strokeColor: '#000000',
    strokeOpacity: 1.0,
    strokeWeight: 3
    });
    poly.setMap(map);
    let service = new google.maps.DirectionsService();
    let path = new google.maps.MVCArray();
    google.maps.event.addListener(map, "click", snapRoads.bind(this));
    function snapRoads(evt) {
      if (path.getLength() === 0) {
        path.push(evt.latLng);
        poly.setPath(path);
        let encodeString = google.maps.geometry.encoding.encodePath(path);
        let lengthInMeters = google.maps.geometry.spherical.computeLength(path);
        this.setState({
          polyline: encodeString,
          distance: (lengthInMeters * 0.000621371)
        })
      } else {
        service.route({
          origin: path.getAt(path.getLength() - 1),
          destination: evt.latLng,
          travelMode: google.maps.DirectionsTravelMode.DRIVING
        }, function(result, status) {
          if (status == google.maps.DirectionsStatus.OK) {
            for (var i = 0, len = result.routes[0].overview_path.length;
                i < len; i++) {
              path.push(result.routes[0].overview_path[i]);
            }
          }
        });
        let encodeString = google.maps.geometry.encoding.encodePath(path);
        let lengthInMeters = google.maps.geometry.spherical.computeLength(path);
        let decodePath = google.maps.geometry.encoding.decodePath(encodeString)
        this.setState({
          polyline: encodeString,
          distance: (lengthInMeters * 0.000621371)
        })
      }

  }


  };
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
      distance: this.state.distance,
      runner_id: this.props.currentUserId,
      run_map: this.state.polyline,
      name: this.state.name,
    })
    this.props.history.push('/workouts');
  }
  render() {
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
