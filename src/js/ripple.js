ripple({
	button: '.js-ripple'
});

export default function ripple(props) {

	$(props.button).on('click', function(e) {

		var div = $('<div/>'),
			btnOffset = $(this).offset(),
	      	xPos = e.pageX - btnOffset.left,
	      	yPos = e.pageY - btnOffset.top;
    
	    $(div).addClass('ripple');

	    $(div)
	    	.css({
	    		height: $(this).width() + 'px',
	    		width: $(this).width() + 'px',
	        	top: yPos - ($(this).width()/2) + 'px',
	        	left: xPos - ($(this).width()/2) + 'px',
	        	background: $(this).data("ripple-color")
	        }) 
	        .appendTo($(this));

		window.setTimeout(function(){
			$(div).remove();
		}, 600);

	});
}

