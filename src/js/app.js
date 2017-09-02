import sayHello from './lib/sayHello.js';
import 'slick-carousel';
import 'jquery-parallax.js';
// import Parallax from 'scroll-parallax';


import './ripple.js';
import './tabs.js';
import './pie.js';
import './popup.js';
import './map.js';
import './validation.js';



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

	$('.js-nav-link').on('click', function(e) {
		if ($('.js-nav-dropdown').hasClass('is-active')) {
			$('.js-nav-dropdown').removeClass('is-active');
			$('.js-nav-toggle').removeClass('is-open');
		}

	})

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

	$('.js-clients').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		infinite: true,
		prevArrow: $('.js-clients-prev'),
		nextArrow: $('.js-clients-next'),
		responsive: [
		    {
		      breakpoint: 1092,
		      settings: {
		        slidesToShow: 4
		      }
		    },
		    {
		      breakpoint: 800,
		      settings: {
		        slidesToShow: 3
		      }
		    },
		    {
		      breakpoint: 620,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 450,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		  ]
	});

	$('.js-parallax').parallax({imageSrc: '/img/vpn-bg.png'});
	


});

// header fixed
var height = $(window).height();
var headerHeight = $('.header').height();
var sum = height + headerHeight - 10;

$(window).on('scroll', function() {

  if($(window).scrollTop() > sum && !$('.header').hasClass('is-fixed')) {
    setTimeout(function() {
    	$('.header').addClass('is-fixed');
    	setTimeout(function() {
    		$('.header').addClass('is-animated');
    	}, 50)
    },20)
    
  }
  if($(window).scrollTop() < height && $('.header').hasClass('is-fixed')) {
    $('.header').removeClass('is-fixed');
    setTimeout(function() {
    	$('.header').removeClass('is-animated');
    }, 50)
  }

});


