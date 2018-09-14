
let map;
let drawingManager;
let placeIdArray = [];
let polylines = [];
let snappedCoordinates = [];

function initialize() {
  let mapOptions = {
    center: {lat: 40.7831, lng: 73.9712},
    zoom: 15
  };
  map = new google.maps.Map(document.getElementById('map-container'), mapOptions);

  // Adds a Places search box. Searching for a place will center the map on that
  // location.
  map.controls[google.maps.ControlPosition.RIGHT_TOP].push(
      document.getElementById('bar'));
  let autocomplete = new google.maps.places.Autocomplete(
      document.getElementById('autoc'));
  autocomplete.bindTo('bounds', map);
  autocomplete.addListener('place_changed', function() {
    let place = autocomplete.getPlace();
    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(17);
    }
  });

  // Enables the polyline drawing control. Click on the map to start drawing a
  // polyline. Each click will add a new vertice. Double-click to stop drawing.
  drawingManager = new google.maps.drawing.DrawingManager({
    drawingMode: google.maps.drawing.OverlayType.POLYLINE,
    drawingControl: true,
    drawingControlOptions: {
      position: google.maps.ControlPosition.TOP_CENTER,
      drawingModes: [
        google.maps.drawing.OverlayType.POLYLINE
      ]
    },
    polylineOptions: {
      strokeColor: '#696969',
      strokeWeight: 2
    }
  });
  drawingManager.setMap(map);

  // Snap-to-road when the polyline is completed.
  drawingManager.addListener('polylinecomplete', function(poly) {
    let path = poly.getPath();
    polylines.push(poly);
    placeIdArray = [];
    runSnapToRoad(path);
  });

  // Clear button. Click to remove all polylines.
  $('#clear').click(function(ev) {
    for (let i = 0; i < polylines.length; ++i) {
      polylines[i].setMap(null);
    }
    polylines = [];
    ev.preventDefault();
    return false;
  });
}

// Snap a user-created polyline to roads and draw the snapped path
function runSnapToRoad(path) {
  let pathValues = [];
  for (let i = 0; i < path.getLength(); i++) {
    pathValues.push(path.getAt(i).toUrlValue());
  }

  $.get('https://roads.googleapis.com/v1/snapToRoads', {
    interpolate: true,
    key: apiKey,
    path: pathValues.join('|')
  }, function(data) {
    processSnapToRoadResponse(data);
    drawSnappedPolyline();
    getAndDrawSpeedLimits();
  });
}

// Store snapped polyline returned by the snap-to-road service.
function processSnapToRoadResponse(data) {
  snappedCoordinates = [];
  placeIdArray = [];
  for (let i = 0; i < data.snappedPoints.length; i++) {
    let latlng = new google.maps.LatLng(
        data.snappedPoints[i].location.latitude,
        data.snappedPoints[i].location.longitude);
    snappedCoordinates.push(latlng);
    placeIdArray.push(data.snappedPoints[i].placeId);
  }
}

// Draws the snapped polyline (after processing snap-to-road response).
function drawSnappedPolyline() {
  let snappedPolyline = new google.maps.Polyline({
    path: snappedCoordinates,
    strokeColor: 'black',
    strokeWeight: 3
  });

  snappedPolyline.setMap(map);
  polylines.push(snappedPolyline);
}

// Gets speed limits (for 100 segments at a time) and draws a polyline
// color-coded by speed limit. Must be called after processing snap-to-road
// response.
function getAndDrawSpeedLimits() {
  for (let i = 0; i <= placeIdArray.length / 100; i++) {
    // Ensure that no query exceeds the max 100 placeID limit.
    let start = i * 100;
    let end = Math.min((i + 1) * 100 - 1, placeIdArray.length);

    drawSpeedLimits(start, end);
  }
}

// Gets speed limits for a 100-segment path and draws a polyline color-coded by
// speed limit. Must be called after processing snap-to-road response.
function drawSpeedLimits(start, end) {
    let placeIdQuery = '';
    for (let i = start; i < end; i++) {
      placeIdQuery += '&placeId=' + placeIdArray[i];
    }

    $.get('https://roads.googleapis.com/v1/speedLimits',
        'key=' + apiKey + placeIdQuery,
        function(speedData) {
          processSpeedLimitResponse(speedData, start);
        }
    );
}

// Draw a polyline segment (up to 100 road segments) color-coded by speed limit.
function processSpeedLimitResponse(speedData, start) {
  let end = start + speedData.speedLimits.length;
  for (let i = 0; i < speedData.speedLimits.length - 1; i++) {
    let speedLimit = speedData.speedLimits[i].speedLimit;
    let color = getColorForSpeed(speedLimit);

    // Take two points for a single-segment polyline.
    let coords = snappedCoordinates.slice(start + i, start + i + 2);

    let snappedPolyline = new google.maps.Polyline({
      path: coords,
      strokeColor: color,
      strokeWeight: 6
    });
    snappedPolyline.setMap(map);
    polylines.push(snappedPolyline);
  }
}

function getColorForSpeed(speed_kph) {
  if (speed_kph <= 40) {
    return 'purple';
  }
  if (speed_kph <= 50) {
    return 'blue';
  }
  if (speed_kph <= 60) {
    return 'green';
  }
  if (speed_kph <= 80) {
    return 'yellow';
  }
  if (speed_kph <= 100) {
    return 'orange';
  }
  return 'red';
}



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
