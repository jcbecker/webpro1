(function($){
    $(".button-collapse").sideNav();
})(jQuery); // end of jQuery name space


    
$(document).ready(function(){
  $('.parallax').parallax();
});

$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });