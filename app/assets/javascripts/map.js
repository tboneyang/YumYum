var the_ruck = new google.maps.LatLng(42.7283895,-73.6906465);
var ruck_window = new google.maps.InfoWindow({
  content: "The Ruck"
});

var mud_daddies = new google.maps.LatLng(42.7305963, -73.6905963);
var mud_window = new google.maps.InfoWindow({
  content: "Mudaddy Flats"
});

var daily_grind = new google.maps.LatLng(42.730648, -73.690287);

function initialize() {
  var mapOptions = {
    center: { lat: 42.731, lng: -73.692},
    zoom: 14,
    disableDefaultUI: true
  };

  var mapOptions2 = {
    center: { lat: 42.731, lng: -73.692},
    zoom: 18,
    disableDefaultUI: true
  };

  var map  = new google.maps.Map(document.getElementById('main-map'),
      mapOptions);
  var map2 = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions2);

  var ruckMarker = makeMarker(the_ruck, map, "The Ruck");
  google.maps.event.addListener(ruckMarker, 'click', function() {
    ruck_window.open(map, ruckMarker);
  });
  var mudMarker = makeMarker(mud_daddies, map, "Mudaddy Flats"); 
  google.maps.event.addListener(mudMarker, 'click', function() {
    mud_window.open(map, mudMarker);
  });
  var grindMarker = makeMarker(daily_grind, map, "Daily Grind");

  var noPoi = [
  {
    featureType: "poi",
    stylers: [
      { visibility: "off" }
      ]
    }
  ];
  map.setOptions({styles: noPoi});
}

google.maps.event.addDomListener(window, 'load', initialize);

function makeMarker (loc, map, title) {
  return new google.maps.Marker({
    position: loc,
    map: map,
    title: title
  });
}
