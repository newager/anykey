tabs();

export default function tabs() {
	var context = $('.js-tab');

	$(context).each(function() {

		// default
		$(this)
			.find('.js-tab-link')
			.first()
			.addClass('is-active');

		$(this)
			.find('.js-tab-content')
			.first()
			.addClass('is-active');

	});

		// click
		$('.js-tab-link').on('click', function(e) {
			e.preventDefault();

			var self = $(this);

			$(this)
				.addClass('is-active')
				.siblings()
				.removeClass('is-active');

			$(this).closest('.js-tab').find('.js-tab-content').each(function() {
				if ($(this).data('content') == $(self).data('target-content')) {
					$(this)
						.addClass('is-active')
						.siblings('.js-tab-content')
						.removeClass('is-active');
				}

			});
		});

}