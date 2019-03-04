( function ( $ ) {


	$(document).ready(function() {
		$( '.slider-carousel' ).slick( {
			infinite : true,
			arrows : false,
			slidesToShow : 1,
			slidesToScroll : 1,
			dots: false,
			speed: 500,
			fade: true,
			rtl: true,
			cssEase: 'linear'
		} );
	});


} )( jQuery );

