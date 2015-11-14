$(window).scroll(function () {
	var wScroll = $(window).scrollTop();
	$('.bg').css({
		'transform': 'translate(0,-' + wScroll * 0.8 + 'px)'
	});
});
