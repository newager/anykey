import sayHello from './lib/sayHello.js';
import 'slick-carousel';
import 'jquery-parallax.js';


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

	$('.js-adv').slick({
		autoplay: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		infinite: true,
		prevArrow: $('.js-prev'),
		nextArrow: $('.js-next')
	});

	$('.js-timeline').slick({
		autoplay: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		infinite: true
	});

	$('.js-parallax').parallax({imageSrc: '/img/vpn-bg.png'});

	// $('.js-parallax-start').parallax({
	// 	imageSrc: '/img/anykey-start.jpg',
	// 	speed: 0.6
	// });

	$('a').on('click', function() {
    	var h = this.getAttribute('href');
	    if(/^#/.test(h) === true) {
	      $('html,body').animate({
	        scrollTop: $(h).offset().top - 60
	      }, 1500);
	    }
  	});


});

// header fixed
// var height = $(window).height();

// $(window).on('scroll', function() {

//   if($(window).scrollTop() > height && !$('.header').hasClass('is-fixed')) {
//     // $('.header').css({
//     //     backgroundColor: 'rgba(255,255,255,1)'
//     // });
//     $('.header').addClass('is-fixed');
//   }
//   if($(window).scrollTop() < height && $('.header').hasClass('is-fixed')) {
//     // $('.header').css({
//     //     backgroundColor: 'transparent'
//     // });

//     $('.header').removeClass('is-fixed');
//   }

// });