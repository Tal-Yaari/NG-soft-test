( function ( $ ) {

	window.onload=function() {
		$( '.banner-carousel' ).slick( {
			infinite : true,
			arrows : false,
			autoplay : true,
			slidesToShow : 1,
			slidesToScroll : 1,
			autoplaySpeed : 1000,
			rtl : true,
		} );
	};

} )( jQuery );

