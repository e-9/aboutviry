var ABOUTV = ABOUTV || {};


(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

    var distance = $('#aboutv-sec1').offset().top,
    $window = $(window);

    $window.scroll(function() {
        if ( $window.scrollTop() >= distance ) {
            console.log('en la cima')
        }
        else if( $window.scrollTop() <= distance ) {
            console.log('ya no en la cima')
        }
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space
