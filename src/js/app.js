import sayHello from './lib/sayHello.js';
import 'slick-carousel';


import './ripple.js';
import './tabs.js';
import './pie.js';



sayHello();

$(document).ready(function() {
	// menu
	$('.js-nav-toggle').on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('is-open');
		var dropdown = $(this).closest('.js-nav').find('.js-nav-dropdown');
		dropdown.toggleClass('is-active');

		//dropdown.hasClass('is-active') ? dropdown.slideDown(300) : dropdown.slideUp(300);
			
	});

	$('.js-timeline').slick({
		autoplay: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		infinite: true
	});
});