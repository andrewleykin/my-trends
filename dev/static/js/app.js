// Начальная функция

// появление описания
(function(){
	var descr = $('.services__el'),
		descrActive = 'services__el--active'
	$('.services__image').each(function(index, el) {
		$(el).mouseover(function() {
			descr.eq(index).addClass(descrActive);
		});
		$(el).mouseleave(function() {
			descr.eq(index).removeClass(descrActive);
		});
	});
})();

// фиксация попапа
(function(){
	function scrollForm(){
		var preparation = $('.preparation')
		var form = preparation.find('.preparation__form-wrap');
		var windowScroll = $(window).scrollTop();

		if ((windowScroll >= 3576) && (windowScroll <  4208)) {
			var top = windowScroll - 3688;
			$(form).css('top', top);
		}
	}
	$(window).on('scroll', function() {
		scrollForm();
	});
})();


// функция скролла
(function(){
	$('.menu__link, .header__logo, .js-scroll').click(function(e) {
		e.preventDefault();
		var direction = $(this).attr('href'),
			reqArticle = $('section, footer').filter(direction),
			reqArticlePos = reqArticle.offset().top - 100,
			menu = $('[data-remodal-id=mobile]').remodal();

		menu.close();

		$('body, html').animate({scrollTop: reqArticlePos}, 500);
	});

})();

// функция валидации формы
(function(){

	if ($('[data-validation]').length) {
		initializeValidate();
	}
	if($('.form')) {
		clearForm();
	}

	function clearForm(){
		var inputs = $('.form').find('input, textarea'),
			newVal = '';

		for(i=0;i<inputs.length;i++) {
			inputs.eq(i).val(newVal);
		}
	}

	/* Validate Form */
	function initializeValidate() {
		$('[data-validation]').each(function () {
		    var validator = $(this),
		        inputs = validator.find('input:not(:checkbox), textarea'),
		        submit = validator.find('button[type=submit]'),
		        stopSubmit = false;

		    inputs.each(function() {
		    	$(this).focus(function() {
		    		$(this).siblings().addClass('hide')
		    		$(this).parent().removeClass('invalid')
		    	});
		    	$(this).blur(function(){
					if(!($(this).val())){
						$(this).siblings().removeClass('hide')
					};
		    	});
		    });
		    validator.on('change keyup', 'input[data-name]', function () {
		        var elm = $(this);
		        checkValidity(elm);
		    });

		    submit.on('click', function (e) {
		        var mass = [];

		        stopSubmit = true;

		        for (var i = 0; i < inputs.length; i++) {

		            var input = inputs[i];
		            mass.push(input);

		            if (input.checkValidity() == true) {
		                var elm = input;
		                checkValidity(elm);
		            }

		            if ($(input).parent().hasClass('valid')) {
		                stopSubmit = false;
		            } else {
		                stopSubmit = true;
		                break;
		            }
		        }

		        if (stopSubmit) {
		            e.preventDefault();
		        }
		    });
		});
	}

	function checkValidity(elm) {
	    var elm = $(elm),
	        val = elm.val(),
	        block = elm.parent(),
	        name_reg = /^[A-Za-zА-Яа-яЁё\-\s]+$/,
			text_reg = /^[A-Za-zА-Яа-яёЁ\s\d]/,
	        mail_reg = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i,
	        phone_reg = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
	        num_reg = /^\d+$/;


	    if (elm.prop('disabled')) {
	        return;
	    } else if (elm.is('[data-name="name"]')) {
	        if (name_reg.test(val)) {
	            block.removeClass('invalid').addClass('valid');
	        } else {
	            block.removeClass('valid').addClass('invalid');
	        }
	    } else if (elm.is('[data-name="email"]')) {
	        if (mail_reg.test(val)) {
	            block.removeClass('invalid').addClass('valid');
	        } else {
	            block.removeClass('valid').addClass('invalid');
	        }
	    } else if (elm.is('[data-name="phone"]')) {
	        if (phone_reg.test(val)) {
	            block.removeClass('invalid').addClass('valid');
	        } else {
	            block.removeClass('valid').addClass('invalid');
	        }
	    } else if (elm.is('[data-name="num"]')) {
	        if (num_reg.test(val)) {
	            block.removeClass('invalid').addClass('valid');
	        } else {
	            block.removeClass('valid').addClass('invalid');
	        }
	    } else if (elm.is('[data-name="text"]')) {
	        if (text_reg.test(val)) {
	            block.removeClass('invalid').addClass('valid');
	        } else {
	            block.removeClass('valid').addClass('invalid');
	        }
	    } 
	}
})();

// функция мобильного меню
(function(){
	var flag = true;
	if($(window).width() < 768) {
		var menu =  $('[data-remodal-id=mobile]').remodal();
		menu.open()
	}
	$('.mobile__link').click(function() {
		if(flag) {
			$('body, html').animate({scrollTop: 0}, 100);
			flag = false;
		}
	});
})();

// функция добавления в форму услуги
(function(){
	var btn = $('.top-banner__btn>.btn, .package__btn, .services__order'),
		input = $('.order').find('input#order').val(),
		topService = [
			'ПОДГОТОВКА СВЕДЕНИЙ ПО ФОРМЕ-2',
			'ПОДГОТОВКА ЗАЯВКИ НА ОТКРЫТЫЙ КОНКУРС ПО 44 ФЗ',
			'ПОДГОТОВКА ЗАЯВКИ НА ЛЮБОЙ ВИД ТОРГОВ ПО 223-ФЗ'
		],
		packages = [
			'Пакет - СТАРТ',
			'Пакет - СТАНДАРТ',
			'Пакет - ПРЕМИУМ'
		],
		services = [
			'ОФОРМЛЕНИЕ ЭЦП ДЛЯ УЧАСТИЯ В ТОРГАХ',
			'АККРЕДИТАЦИЯ НА 5 ФЕДЕРАЛЬНЫХ ПЛОЩАДКАХ',
			'МОНИТОРИНГ ТЕНДЕРОВ, В ТЕЧЕНИЕ 1 МЕСЯЦА',
			'ПОДГОТОВКА ЗАЯВКИ И УЧАСТИЕ В АУКЦИОНЕ',
			'ПОДГОТОВКА СВЕДЕНИЙ О МАТЕРИАЛАХ (ФОРМА 2)',
			'ПОДГОТОВКА И ПОДАЧА ЖАЛОБ В ФАС'
		];

	btn.click(function() {
		var thisBtn = $(this),
			index;
		if(thisBtn.closest('.top-banner__item')) {
			index = thisBtn.closest('.top-banner__item').index();
			input = topService[index];
		}
		if (thisBtn.closest('.package__item')) {
			index = thisBtn.closest('.package__item').index();
			input = packages[index];
		} 
		if (thisBtn.closest('.services__item')) {
			index = thisBtn.closest('.services__item').index();
			input = services[index];
		}
	});
})();