var ABOUTV = ABOUTV || {};

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// Funciones comunes entre los distintos metodos del API
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
ABOUTV.common = {
  // --------------------------------------------------------------------------
  // Devuelve un string con el formato de fecha YYYYMMDD
  // Params:
  //      - date: Fecha que sera parseada al tipo esperado
  // --------------------------------------------------------------------------
  showNavBar: function () {
    if($('#navbar').hasClass('hide')){
      $('#navbar').removeClass('hide').addClass('navbar-fixed');
      $('#aboutv-sec1').addClass('hide');
    };
  },

  hideNavBar: function () {
    if($('#navbar').hasClass('navbar-fixed')){
      $('#navbar').removeClass('navbar-fixed').addClass('hide');
      $('#aboutv-sec1').removeClass('hide');
    };
  }
};
