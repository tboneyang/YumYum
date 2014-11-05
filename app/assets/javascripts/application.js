// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery-ui
//= require bootstrap
//= require bootstrap-datepicker
//= require turbolinks
//= require_tree .

$(document).ready(function(){
  $(".datepicker").datepicker({
    format: "yyyy-mm-dd"
  });

  $("#pizza").click(function(e) {
    $("#new-post").slideDown('slow');

    e.preventDefault();
  });
  
  $('.content').on('keyup', function(e) {
    var max = 300;
    var len = $(this).val().length;
    
    if (len >= max) {
      e.preventDefault();
      $('.counter').text(' you\'ve reached the character limit');
    } else {
      var ch = max - len;
      $('.counter').text(ch + ' character left');
    }
  });

  $(function() {
    var locations = [
      "Union",
      "DCC",
      "Troy",
      "Ricketts",
      "Sage",
      "Greene",
      "Amos Eaton",
      "Lally",
      "Walker",
      "Carnegie",
      "Pittsburgh",
      "LOW",
      "Heffner Alumni House",
      "Biotech",
      "Playhouse"
    ];
    $( ".location").autocomplete({
      source: locations
    });
  });
});
