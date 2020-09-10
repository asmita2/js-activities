if ($(window).width() < 1024) {
	$(document).ready(function() {
		$("h2").click(function() {
			var _this = $(this);
			$(_this).toggleClass('open');
			$(_this).next().toggleClass('show-menu');
			if($(_this).parents().siblings().find('.show-menu')) {
				$(_this).parents().siblings().find('>.show-menu').removeClass("show-menu");
				$(_this).parents().siblings().find('>.open').removeClass("open");
			}
		});
	});
}

