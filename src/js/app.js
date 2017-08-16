import sayHello from './lib/sayHello.js';
import 'slick-carousel';
import 'jquery-parallax.js';
// import Parallax from 'scroll-parallax';


import './ripple.js';
import './tabs.js';
import './pie.js';
import './popup.js';
import './map.js';



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
	
	// var p = new Parallax('.parallax', {
	//   offsetYBounds: 50,
	//   intensity: 30,
	//   center: 0.5,
	//   safeHeight: 0.15
	// }).init();

	// $('.js-parallax-start').parallax({
	// 	imageSrc: '/img/anykey-start.jpg',
	// 	speed: 0.6
	// });

	// $('.js-anchor').on('click', function() {
 //    	var h = this.getAttribute('href');
	//     if(/^#/.test(h) === true) {
	//     	$('html,body').animate({
	// 			scrollTop: $(h).offset().top - $('header').height()
	// 		}, 1500);
	//     }
 //  	});


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


// function initMap() {
//         var mapCanvas = document.getElementById('map');

//         var mapOptions = {
//             center: {lat: 50.527705, lng: 30.808002},
//             zoom: 16,
//             scrollwheel: false,
//             mapTypeControl: false
//         };

        

//         var styles = [
//             {
//               stylers: [
//                 { hue: "#435870" },
//                 { saturation: -90 },
//                 { lightness: 10 }
//               ]
//             },
//             {
//               featureType: "road",
//               elementType: "geometry",
//               stylers: [
//                 { lightness: 100 },
//                 { visibility: "simplified" }
//               ]
//             },
//             {
//               featureType: "road",
//               elementType: "labels",
//               stylers: [
//                 { visibility: "off" }
//               ]
//             }
//           ];


//         var map = new google.maps.Map(mapCanvas, mapOptions);
//         var styledMap = new google.maps.StyledMapType(styles);

//         map.mapTypes.set('map_style', styledMap);
//         map.setMapTypeId('map_style');

//         var markerIcon = {
//             path: "M66.9 41.8c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4 0 11.3 20.4 32.4 20.4 32.4s20.4-21.1 20.4-32.4zM37 41.4c0-5.2 4.3-9.5 9.5-9.5s9.5 4.2 9.5 9.5c0 5.2-4.2 9.5-9.5 9.5-5.2 0-9.5-4.3-9.5-9.5z",
//             fillColor: '#150d3f',
//             fillOpacity: 1,
//             anchor: new google.maps.Point(0, 0),
//             strokeWeight: 0,
//             scale: .6
//         };

//         var markerPosition = new google.maps.LatLng(50.527705, 30.808002);

//         var markerLabel = 'ул. Щелковская, 13, Бровары';

//         var marker = new google.maps.Marker({
//             position: markerPosition,
//             icon: markerIcon,
//             label: {
//                 text: markerLabel,
//                 color: "#150d3f",
//                 fontSize: "14px",
//                 fontFamily: "Ubuntu, sans-serif",
//                 letterSpacing: "0.5px",
//                 fontWeight: "bold"
//             }
//         });

//         marker.setMap(map);

//     }

//     initMap();