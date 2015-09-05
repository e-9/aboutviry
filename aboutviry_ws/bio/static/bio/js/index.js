var ABOUTV = ABOUTV || {};


$( document ).ready(function() {

	$('#page-body').css({
		'backgroundImage': 'url(/static/bio/images/background1.jpg)',
		'backgroundRepeat': 'no-repeat',
		'backgroundPosition': 'center center',
    'backgroundSize': 'cover',
    'backgroundAttachment': 'fixed'
	});

	$('#aboutv-head').fadeIn(2309);


	$( window ).click(function() {
		if(ABOUTV.settings.initial === true) {
		  $('#bg').fadeOut(1000, function(){

				$('#mask').css({height: $(window).height(),width: $(window).width()})
				.fadeIn(500, function(){
					$('#mask').fadeOut(500, function(){
						$('#bg').css('background', 'rgba(12, 0, 0, 1)');
						$('#aboutv-head').hide();
						$('.aboutv-navbar').show();
						$('#bg').fadeIn(1309);
					});
					$('body').css('background-image', 'url(/static/bio/images/background2.jpg)');
	      });
			});

			ABOUTV.settings.initial = false;
		}
	});

});
