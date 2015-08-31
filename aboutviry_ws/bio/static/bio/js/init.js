var ABOUTV = ABOUTV || {};


(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

    // ------------------------------------------------------------------------
    // ------------------------------------------------------------------------
    // Validamos que la seccion 1 este en el top
    // Si es asi entonces mostramos el nav
    // Si esta por debajo del top entonces ocultamos el nav
    // ------------------------------------------------------------------------
    var distance = $('#aboutv-sec1').offset().top,
    $window = $(window);

    $window.scroll(function() {
        if ( $window.scrollTop() >= distance ) {
          ABOUTV.common.showNavBar();
        }
        else if( $window.scrollTop() <= distance ) {
          ABOUTV.common.hideNavBar();
        }
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space
