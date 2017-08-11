$(function() {
    function initMap() {
        var mapCanvas = document.getElementById('map');

        var mapOptions = {
            center: {lat: 50.527705, lng: 30.808002},
            zoom: 16,
            scrollwheel: false,
            mapTypeControl: false
        };

        

        var styles = [
            {
              stylers: [
                { hue: "#435870" },
                { saturation: -90 },
                { lightness: 10 }
              ]
            },
            {
              featureType: "road",
              elementType: "geometry",
              stylers: [
                { lightness: 100 },
                { visibility: "simplified" }
              ]
            },
            {
              featureType: "road",
              elementType: "labels",
              stylers: [
                { visibility: "off" }
              ]
            }
          ];


        var map = new google.maps.Map(mapCanvas, mapOptions);
        var styledMap = new google.maps.StyledMapType(styles);

        map.mapTypes.set('map_style', styledMap);
        map.setMapTypeId('map_style');

        var markerIcon = {
            path: "M66.9 41.8c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4 0 11.3 20.4 32.4 20.4 32.4s20.4-21.1 20.4-32.4zM37 41.4c0-5.2 4.3-9.5 9.5-9.5s9.5 4.2 9.5 9.5c0 5.2-4.2 9.5-9.5 9.5-5.2 0-9.5-4.3-9.5-9.5z",
            fillColor: '#150d3f',
            fillOpacity: 1,
            anchor: new google.maps.Point(0, 0),
            strokeWeight: 0,
            scale: .6
        };

        var markerPosition = new google.maps.LatLng(50.527705, 30.808002);

        var markerLabel = 'ул. Щелковская, 13, Бровары';

        var marker = new google.maps.Marker({
            position: markerPosition,
            icon: markerIcon,
            label: {
                text: markerLabel,
                color: "#150d3f",
                fontSize: "14px",
                fontFamily: "Ubuntu, sans-serif",
                letterSpacing: "0.5px",
                fontWeight: "bold"
            }
        });

        marker.setMap(map);

    }


    $(document).ready(function() {
        initMap();
    });
});
