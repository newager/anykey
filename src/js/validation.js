import 'jquery-validation';

validateForm();

export default function validateForm() {

	$('#contact-form').validate({
		submitHandler: function(form) {
            
            $.post(form.action, $(form).serialize(), function (result, xhr) {
            	$('.js-form-success').fadeIn(300);
            	setTimeout(function() {
            		$('.js-form-success').fadeOut(300);
					$(form).find('input').val('');
            		$(form).find('textarea').val('');
            		$(form).closest('.popup').fadeOut(300);
            	}, 1500);
            	
            });
    	},
		rules: {
			name: {
				required: true,
				minlength: 2
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true,
				number: true,
				minlength: 5,
				maxlength: 15
			},
			message: {
				required: true,
				minlength: 2
			}
		},
		messages: {
			name: {
				required: "Поле обязательно к заполнению",
				minlength: "Поле должно содержать не менее 2-х символов"
			},
			email: {
				required: "Поле обязательно к заполнению",
				email: "Необходим формат адреса email"	
			},
			phone: {
				required: "Поле обязательно к заполнению",
				number: "Поле может содержать только цифры",
				minlength: "Поле должно содержать не менее 5-ти символов",
				maxlength: "Поле должно содержать не более 15-ти символов",
			},
			message: {
				required: "Поле обязательно к заполнению",
				minlength: "Поле должно содержать не менее 2-х символов"
			}
		}
	});

}