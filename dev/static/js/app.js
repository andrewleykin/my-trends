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