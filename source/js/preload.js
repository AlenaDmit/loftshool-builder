$(document).ready(function () {
	$(function () {
		var imgs = [];

		$.each($('*'), function () {
			var $this = $(this),
				background = $this.css('background-image'),
				img = $this.is('img');

			if (background != 'none') {
				var path = background.replace('url("', '').replace('")', '');

				imgs.push(path);
			}

			if (img) {
				var path = $this.attr('src');

				if (path) {
					imgs.push(path);
				}
			}
		});

		var percents = 1;

		for (var i = 0; i < imgs.length; i++) {
			var image = $('<img>', {
				attr: {
					src : imgs[i]
				}
			});

			image.load(function () {
				setPercents(imgs.length, percents);
				percents++;
			});
		}

		function setPercents(total, current) {
			var percent = Math.ceil(current / total * 100);
			$('.loader-bar').text(percent + '%');

			$('.circle__down').attr('stroke-dashoffset', 314.15-percent*314.15/100);

			$('.circle__up').attr('stroke-dashoffset', -2*percent*314.14/100);

			if (percent >= 100) {
				setTimeout(function(){
					$('.preload__wrap').fadeOut(1500, function() {
						$('.main__block').addClass("active");
					});
				},1000);
			}

		}
	});
});