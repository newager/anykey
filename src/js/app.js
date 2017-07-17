import sayHello from './lib/sayHello.js';
import './ripple.js';
import './tabs.js';

sayHello();

$(document).ready(function() {
	// menu
	$('.js-nav-toggle').on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('is-open');
		var dropdown = $(this).closest('.js-nav').find('.js-nav-dropdown');
		dropdown.toggleClass('is-active');

		//dropdown.hasClass('is-active') ? dropdown.slideDown(300) : dropdown.slideUp(300);
			
	})
});