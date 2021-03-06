( function ( $ ) {

	//After Submit
	$( '.submit-btn' ).on('click', function() {
		$( '.update-form' ).addClass('sent');
		$( '.email-sent' ).addClass('message');
	});

	//Slick Slider
	$(document).ready(function() {
		$( '.banner-carousel' ).slick( {
			infinite : true,
			arrows : false,
			autoplay : true,
			adaptiveHeight: true,
			slidesToShow : 1,
			slidesToScroll : 1,
			autoplaySpeed : 4000,
			rtl : true,
			speed: 1000,
			cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
			touchThreshold: 100

		} );
	});

	var video = $('.banner-carousel .slick-active').find('iframe').get(0).play();

	$('banner-carousel').on('afterChange', function(event, slick, currentSlide, nextSlide){
		$('.banner-carousel .slick-slide').find('video').get(0).pause();
		var video = $('.banner-carousel .slick-active').find('video').get(0).play();
	});



} )( jQuery );

