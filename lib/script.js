$(document).ready(function(){

  /*Making div dynamic */
  $('div').on('mouseover', function(){
    $(this).addClass("hover");
  });
  $('div').on('mouseleave', function(){
    $(this).removeClass("hover");
  });


});
