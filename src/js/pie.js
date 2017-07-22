chart();

export default function chart() {
	var chart = $('.js-pie');

	if (chart.length != 0) {
		chart.each(function() {
			createChart({
				chart: $(this)
			});
			createLegend({
				chart: $(this)
			});

			var fraction = $(this).find('path');
			var self = $(this);

			fraction.on('mouseenter', function(e) {
				var legendItems = $(self).parent().find('.js-legend').children();

				for (var i = 0; i < legendItems.length; i++) {
					if ($(legendItems[i]).find('span').html() == $(this).attr('title')) {
						$(legendItems[i]).addClass('is-bold');
					}
				}

				var percent = $(this).data('percent');
				$(self).parent().append('<div class="js-percent">' + percent + '</div>');
				$('.js-percent').css({
					position: 'absolute',
					top: 0,
					left: 0
				});

			});

			fraction.on('mouseleave', function(e) {
				var legendItems = $(self).parent().find('.js-legend').children();

				for (var i = 0; i < legendItems.length; i++) {
					if ($(legendItems[i]).find('span').html() == $(this).attr('title')) {
						$(legendItems[i]).removeClass('is-bold');
					}
				}
			});
		})
		
	}


	function createLegend(props) {
		var chart = props.chart;

		var data = $(chart).data('pie');
		var slices = JSON.parse(JSON.stringify(data));

		var legend = document.createElement('ul');
		legend.className = 'legend js-legend';

		slices.forEach(slice => {
			var legendItem = document.createElement('li');
			legendItem.innerHTML = '<div></div><span>' + slice.title + '</span>';
			legendItem.querySelector('div').style.backgroundColor = slice.color;
			legend.append(legendItem);
        });

        chart.parent().append(legend);
	}

	function createChart(props) {
		var chart = props.chart;
		chart.html('<svg viewBox="-1.25 -1.25 2.5 2.5" class="js-pie-svg"></svg>');

		// helpers
		var svg = $(chart).find('.js-pie-svg');
		var data = $(chart).data('pie');
		var slices = JSON.parse(JSON.stringify(data));
		var cumulativePercent = 0;

		slices.forEach(slice => {
            var [startX, startY] = getCoordinatesForPercent(cumulativePercent);

            cumulativePercent += (slice.percent / 100);

            var [endX, endY] = getCoordinatesForPercent(cumulativePercent);


            var largeArcFlag = (slice.percent / 100) > .5 ? 1 : 0;

            var pathData = [
                `M ${startX} ${startY}`,
                `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`,
                `L 0 0`
            ].join(' ');

            var pathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');

            pathElement.setAttribute('d', pathData);
            pathElement.setAttribute('fill', slice.color);
            pathElement.setAttribute('title', slice.title);
            pathElement.setAttribute('data-percent', slice.percent);
            
            svg.append(pathElement);

        });

	}


	function getCoordinatesForPercent(percent) {
        const x = Math.cos(2 * Math.PI * percent);
        const y = Math.sin(2 * Math.PI * percent);

        return [x, y];
    }
}