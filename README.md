 ![alt text](/app/assets/images/logmyjog.png "LogMyJog")

[I'm an inline-style link with title](https://logmyjog.herokuapp.com/ "LogMyJog")

Inspired by MapMyRun, LogMyJog is a full-stack web application that is intended to allow Joggers (users) to map out their Jogs prior to going out in the world and jogging. Joggers can then log workouts against those saved Jogs and then share their Jogger activity with a community of other Joggers.

## Technologies

LogMyJog was built using a Rails backend framework, PostgreSQL for the database, and React Javascript for the front end using the Redux framework.

## Map Routing

LogMyJog allows a Jogger to be able to map out a run anywhere on the globe. Using Google Maps API V3, Joggers are able to click on a map as many times as they choose. A distance counter is kept on the left-hand side so they can track how far their run is at any point. Once the Joggers have completed their desired route, they can save the route in their profile so that it can be used to log future workouts.

![alt text]("https://giphy.com/embed/l9UUa0SERRlDB2xpTX")

The routes are stored into the database by encoding the Polyline created by the API and storing as a string inside the database. The string can then be decoded in the future when the route needs to be referenced again. They are associated with the Jogger who created the route using `runner_id` as the foreign key. Additionally, info is extracted and saved using Google's API Methods

```
let encodeString = google.maps.geometry.encoding.encodePath(path);
let lengthInMeters = google.maps.geometry.spherical.computeLength(path);
let decodePath = google.maps.geometry.encoding.decodePath(encodeString)
this.setState({
  polyline: encodeString,
  distance: (lengthInMeters * 0.000621371)
})

```

An additional feature built into LogMyJog’s route creation is the locational services. When opening LogMyJog’s route creation tool for the first time, Joggers are prompted to “allow” locational services. If allowed, the map will detect the Jogger’s location and zoom into that location as a starting point. The Jogger is able to zoom out at any point and change this location. If locational services are not allowed, the map will default to central Manhattan, NY.

```
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
```

## Activity Feed

Once Joggers have their routes in place, they can then log individual Jogs against any previously created routes. Once these Jogs have been logged, they will then appear on the Joggers’ activity feed. The activity feed displays all recently completed Jogs and various data associated with it. The Jogging community can then socialize by sending their praises or comments on the activity feed. All Joggers can comment on any Jog, however only the author of the comment is able to delete these comments. Additionally, using the React/Redux framework, the comments will show up and delete in real time.

## Future Directions

### Finding Friends
In LogMyJog’s near future, a friend finding feature will be implemented so that Joggers can search for other Joggers using First Name, Last Name or E-mail.

### Cheers

Sometimes Joggers don’t want to leave a whole comment, but rather only want to “Cheers!” their fellow Jogger. Future Jogs will have the ability to be “Cheered” and have a counter of how many “Cheers” the jog received.

### Search for Routes

Currently there is no way to search for other Joggers’ routes unless it is on the activity feed. A search by location feature will be implemented using Google’s Map API.
