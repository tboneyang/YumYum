var info = "\
<div id='rest-box'>\
  <a href='http://getrucked.com' id='rest-name'>The Ruck</a>\
  <div id='rest-details'>\
    <p><span class='bold'>Phone: </span>(518) 273-1872</p>\
    <p><span class='bold'>Hours </span></p>\
    <div id='extra hours'>\
      <table>\
        <tr>\
          <td>Monday</td>\
          <td>4:00 pm - 4:00 am</td>\
        </tr>\
        <tr>\
          <td>Tuesday</td>\
          <td>4:00 pm - 4:00 am</td>\
        </tr>\
        <tr>\
          <td>Wednesday</td>\
          <td>11:00 am - 4:00 am</td>\
        </tr>\
        <tr>\
          <td>Thursday</td>\
          <td>11:00 am - 4:00 am</td>\
        </tr>\
        <tr>\
          <td>Friday</td>\
          <td>11:00 am - 4:00 am</td>\
        </tr>\
        <tr>\
          <td>Saturday</td>\
          <td>11:00 am - 4:00 am</td>\
        </tr>\
        <tr>\
          <td>Sunday</td>\
          <td>12:00 pm - 4:00 am</td>\
        </tr>\
      </table>\
    </div>\
      <p ><span class='bold'>Menu: </span><a href='https://locu.com/places/the-ruck-troy-us-1/#menu'>locu.com</a></p>\
  </div>\
</div>"

var the_ruck = new google.maps.LatLng(42.7283895,-73.6906465);
var ruck_window = new google.maps.InfoWindow({
  content: "The Ruck"
});

var mud_daddies = new google.maps.LatLng(42.7305963, -73.6905963);
var mud_window = new google.maps.InfoWindow({
  content: "Mudaddy Flats"
});

var daily_grind = new google.maps.LatLng(42.730648, -73.690287);
var daily_window = new google.maps.InfoWindow({
  content: "Daily Grind"
});

var spillin = new google.maps.LatLng(42.731970, -73.690293);
var spillin_window = new google.maps.InfoWindow({
  content: "Spill'n the Beans"
});

var lucas = new google.maps.LatLng(42.731185, -73.691329);
var lucas_window = new google.maps.InfoWindow({
  content: "Lucas Confectionery"
});

var shalimar = new google.maps.LatLng(42.732241, -73.688464);
var shalimar_window = new google.maps.InfoWindow({
  content: "Shalimar"
});

var broadway = new google.maps.LatLng(42.731079, -73.689462);
var broadway_window = new google.maps.InfoWindow({
  content: "Broadway Cafe"
});

var illium = new google.maps.LatLng(42.731382, -73.691833);
var illium_window = new google.maps.InfoWindow({
  content: "Illium Cafe"
});

var markers = [];

function initialize() {
  var mapOptions = {
    center: { lat: 42.731, lng: -73.692},
    zoom: 16,
    disableDefaultUI: true
  };

  var mapOptions2 = {
    center: { lat: 42.729447, lng: -73.678621},
    zoom: 17,
    disableDefaultUI: true
  };

  var map  = new google.maps.Map(document.getElementById('main-map'),
      mapOptions);
  var map2 = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions2);

  var ruckMarker = makeMarker(the_ruck, map, "The Ruck");
  addWindow(ruckMarker, ruck_window);
  google.maps.event.addListener(ruckMarker, 'click', restInfo);
  var mudMarker = makeMarker(mud_daddies, map, "Mudaddy Flats"); 
  addWindow(mudMarker, mud_window);
  var grindMarker = makeMarker(daily_grind, map, "Daily Grind");
  addWindow(grindMarker, daily_window);
  var spillinMarker = makeMarker(spillin, map, "Spill'n the Beans");
  addWindow(spillinMarker, spillin_window);
  var lucasMarker = makeMarker(lucas, map, "Lucas Confectionery");
  addWindow(lucasMarker, lucas_window);
  var shalimarMarker = makeMarker(shalimar, map, "Shalimar");
  addWindow(shalimarMarker, shalimar_window);
  var broadwayMarker = makeMarker(broadway, map, "Broadway Cafe");
  addWindow(broadwayMarker, broadway_window);
  var illiumMarker = makeMarker( illium, map, "Illium Cafe");
  addWindow(illiumMarker, illium_window);

  var noPoi = [
  {
    featureType: "poi",
    stylers: [
      { visibility: "off" }
      ]
    }
  ];
  map.setOptions({styles: noPoi});
  //map2.setOptions({styles: noPoi});

  var club      = {lat: 42.730581, lng: -73.690524};
  var union     = {lat: 42.729950, lng: -73.676609};
  var DCC       = {lat: 42.729498, lng: -73.678999};
  var ricketts  = {lat: 42.730931, lng: -73.679727};
  var sage      = {lat: 42.730836, lng: -73.681649};
  var troy      = {lat: 42.730985, lng: -73.680538};
  var greene    = {lat: 42.730040, lng: -73.681144};
  var amos      = {lat: 42.730095, lng: -73.682394};
  var lally     = {lat: 42.730083, lng: -73.681895};
  var walker    = {lat: 42.730765, lng: -73.682501};
  var carnegie  = {lat: 42.730465, lng: -73.683129};
  var pitts     = {lat: 42.731116, lng: -73.683263};
  var low       = {lat: 42.729283, lng: -73.678762};
  var alumni    = {lat: 42.732878, lng: -73.678089};
  var biotech   = {lat: 42.728150, lng: -73.678337};
  var playhouse = {lat: 42.729190, lng: -73.678184};

  $('.foodpost').each(function(){
    var loc = $(this).find(".location").text();

    if (loc.indexOf("layhouse") > -1){
      var playhouse_marker = makeMarker(playhouse, map2, "Playhouse");
      markers.push(playhouse_marker);
    }
    else if (loc.indexOf("DCC") > -1){
      var DCC_marker = makeMarker(DCC, map2, "DCC");
      markers.push(DCC_marker);
    }
    else if (loc.indexOf("iotech") > -1){
      var biotech_marker = makeMarker(biotech, map2, "Biotech");
      markers.push(biotech_marker);
    }
    else if (loc.indexOf("lumni") > -1){
      var alumni_marker = makeMarker(alumni, map2, "Alumni House");
      markers.push(alumni_marker);
    }
    else if (loc.indexOf("ow") > -1){
      var LOW_marker = makeMarker(low, map2, "LOW");
      markers.push(LOW_marker);
    }
    else if (loc.indexOf("itts") > -1){
      var pitts_marker = makeMarker(pitts, map2, "Pittsburgh");
      markers.push(pitts_marker);
    }
    else if (loc.indexOf("alker") > -1){
      var walker_marker = makeMarker(walker, map2, "Walker");
      markers.push(walker_marker);
    }
    else if (loc.indexOf("arnegie") > -1){
      var carnegie_marker = makeMarker(carnegie, map2, "Carnegie");
      markers.push(carnegie_marker);
    }
    else if (loc.indexOf("nion") > -1){
      var union_marker = makeMarker(union, map2, "Union");
      markers.push(union_marker);
    }
    else if (loc.indexOf("ickets") > -1){
      var ricketts_marker = makeMarker(ricketts, map2, "Ricketts");
      markers.push(ricketts_marker);
    }
    else if (loc.indexOf("age") > -1){
      var sage_maker = makeMarker(sage, map2, "Sage");
      markers.push(sage_maker);
    }
    else if (loc.indexOf("roy") > -1){
      var troy_marker = makeMarker(troy, map2, "Troy");
      markers.push(troy_marker);
    }
    else if (loc.indexOf("reen") > -1){
      var greene_marker = makeMarker(greene, map2, "Greene");
      markers.push(greene_marker);
    }
    else if (loc.indexOf("mos") > -1){
      var amos_marker = makeMarker(amos, map2, "Amos Eaton");
      markers.push(amos_marker);
    }
    else if (loc.indexOf("ally") > -1){
      var lally_marker = makeMarker(lally, map2, "Lally");
      markers.push(lally_marker);
    }
    else if (loc.indexOf("club") > -1){
      var club_marker = makeMarker(club, map2, "Club 3rd");
      markers.push(club_marker);
    }

    $(this).on('mouseenter', function(){
      $(this).on('mouseleave', setAllMarkersNull);

      var loc = $(this).find(".location").text();

      if (loc.indexOf("Playhouse") > -1){
        toggleBounce(playhouse_marker);
        map2.panTo(playhouse);
      }
      if (loc.indexOf("DCC") > -1){
        toggleBounce(DCC_marker);
        map2.panTo(DCC);
      }
      else if (loc.indexOf("iotech") > -1){
        toggleBounce(biotech_marker);
        map2.panTo(biotech);
      }
      else if (loc.indexOf("lumni") > -1){
        toggleBounce(alumni_marker);
        map2.panTo(alumni);
      }
      else if (loc.indexOf("ow") > -1){
        toggleBounce(LOW_marker);
        map2.panTo(low);
      }
      else if (loc.indexOf("itts") > -1){
        toggleBounce(pitts_marker);
        map2.panTo(pitts);
      }
      else if (loc.indexOf("alker") > -1){
        toggleBounce(walker_marker);
        map2.panTo(walker);
      }
      else if (loc.indexOf("arnegie") > -1){
        toggleBounce(carnegie_marker);
        map2.panTo(carnegie);
      }
      else if (loc.indexOf("nion") > -1){
        toggleBounce(union_marker);
        map2.panTo(union);
      }
      else if (loc.indexOf("ickets") > -1){
        toggleBounce(ricketts_marker);
        map2.panTo(ricketts);
      }
      else if (loc.indexOf("age") > -1){
        toggleBounce(sage_maker);
        map2.panTo(sage);
      }
      else if (loc.indexOf("roy") > -1){
        toggleBounce(troy_marker);
        map2.panTo(troy);
      }
      else if (loc.indexOf("reen") > -1){
        toggleBounce(greene_marker);
        map2.panTo(greene);
      }
      else if (loc.indexOf("mos") > -1){
        toggleBounce(amos_marker);
        map2.panTo(amos);
      }
      else if (loc.indexOf("ally") > -1){
        toggleBounce(lally_marker);
        map2.panTo(lally);
      }
      else if (loc.indexOf("club") > -1){
        toggleBounce(club_marker);
        map2.panTo(club);
      }
    });
  });

  function addWindow (marker, window) {
    google.maps.event.addListener(marker, 'mouseover', function() {
      window.open(map, marker);
      google.maps.event.addListener(marker, 'mouseout', function(){
        window.close();
      });
    });
  }

  function restInfo() {
      $('.row').children('div:first-child').removeClass('span12');
      $('.row').children('div:first-child').addClass('span6');
      $('.span6').before("<div class='span6' id='info'></div>");
      $('#info').append(info);
      $('#main-map').addClass('side-map');
      map.setCenter({lat: 42.728375, lng: -73.685574});
      toggleBounce(ruckMarker);
  }
}

google.maps.event.addDomListener(window, 'load', initialize);

function makeMarker (loc, map, title) {
  return new google.maps.Marker({
    position: loc,
    map: map,
    title: title
  });
}


function toggleBounce(marker) {
  
  if (marker.getAnimation() != null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

function setAllMarkersNull() {
  for (var i=0; i<markers.length; i++)
    markers[i].setAnimation(null);
}
