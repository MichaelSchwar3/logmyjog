import React from 'react';
import { Link } from 'react-router-dom';

class RunMap extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      polyline: "",
      distance: 0
    }
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
    map.addListener('click', addLatLng.bind(this));
    let path;
    function addLatLng(event) {
        path = poly.getPath();
        path.push(event.latLng);
        let marker = new google.maps.Marker({
          position: event.latLng,
          title: '#' + path.getLength(),
          map: map
        });
        let encodeString = google.maps.geometry.encoding.encodePath(path);
        let lengthInMeters = google.maps.geometry.spherical.computeLength(path);
        this.setState({
          polyline: encodeString,
          distance: (lengthInMeters * 0.000621371)
        })
      }

  };
  updateRoute(){

  }
  render() {
    return(
      <div>

        <div id="map-container" ref={ map => this.mapNode = map }>

        </div>
      </div>
    )
  }
}


export default RunMap;
