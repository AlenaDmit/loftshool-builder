$(document).ready(function () {		// parallax
  var layer = $('.parallax').find('.parallax__layer'); // Выбираем все parallax__layer в объект
  // console.log(layer);
  layer.map(function (key, value) { // Проходимся по всем элементам объекта
    var bottomPosition = ((window.innerHeight / 2) * ((key + 1) / 100)); // Вычисляем на сколько нам надо опустить вниз наш слой что бы при перемещении по Y не видно было краев
    var leftPosition = ((window.innerWidth / 2) * ((key + 1) / 100));
    $(value).css({ // Выбираем элемент и добавляем css
      'bottom': '-' + bottomPosition + 'px', // Выставляем bottom
      'left': '-' + leftPosition + 'px',
      'transform': 'translate3d(0px, 0px, 0)', // Подготавливаем browser к трансформации
    });
  });
  
  $(window).on('mousemove', function (e) { // Навешиваем событие перемещени мыши на window, первым аргументом в функцию-обработчик события отправляется ссылка на объект события
    var mouse_dx = (e.pageX); // Узнаем положение мышки по X
    var mouse_dy = (e.pageY); // Узнаем положение мышки по Y
    // Т.к. мы делим экран на четыре части что бы в центре оказалась точка координат 0, то нам надо знать когда у нас будет -Х и +Х, -Y и +Y
    var w = (window.innerWidth / 2) - mouse_dx; // Вычисляем для x перемещения
    var h = (window.innerHeight / 2) - mouse_dy; // Вычисляем для y перемещения

    layer.map(function (key, value) { // Проходимся по всем элементам объекта
      var bottomPosition = ((window.innerHeight / 2) * ((key + 1) / 100)); // Вычисляем на сколько нам надо опустить вниз наш слой что бы при перемещении по Y не видно было краев
      var widthPosition = w * ((key + 1) / 100); // Вычисляем коофицент смешения по X
      var heightPosition = h * ((key + 1) / 100); // Вычисляем коофицент смешения по Ys

      $(value).css({ // Выбираем элемент и добавляем css
        'bottom': '-' + bottomPosition + 'px',  // Выставляем bottom
        'transform': 'translate3d(' + widthPosition + 'px, ' + heightPosition + 'px, 0)', // Используем translate3d для более лучшего рендеринга на странице
      });
    });
  });


//menu appearence
	$(".header__menu").click(function(){
		

		if ($(".icon__item").hasClass("clicked")){
			$(".menu__items").css("display", "none");
			$(".icon__item").removeClass("clicked");
			$(".layer_left").removeClass("active");
			$(".layer_right").removeClass("active");
			setTimeout(function(){$(".menu__layer_wrap").removeClass("active")}, 100);
		}
		else{
			$(".icon__item").addClass("clicked");
			$(".layer_left").addClass("active"); //
			$(".layer_right").addClass("active");
			$(".menu__layer_wrap").addClass("active");
			setTimeout(function(){$(".menu__items").fadeIn("300")}, 500);
		}
	});


function scroll(from,to){     // scroll to top/down
	$(from).click(function (event) {
			event.preventDefault();
			var top = $(to).offset().top;
			$('body,html').animate({scrollTop: top}, 600);
		});
};


//scrolls
scroll($('.middle__button'), $('#slider'));
scroll($('.form__top'), $('#header'));
scroll($('.middle__button'), $('#slider'));



})

 // main block flip 
function flipInit(argument) {
	$(".main__button").click(function(event) {

		$(".main__block_wrap").css('perspective', 'none');
		
		$(this).fadeOut('300', function() {
			
		});

		$(".main__block").css({
			transition: 'transform .3s',
			transform: 'rotateY(90deg)'
		});

		setTimeout(function(){
			$(".main__block").css({
				display: 'none'
			});
			$(".form__login").css({
				display: 'block'
			});
		}, 300);

		setTimeout(function () {
			$(".form__login").css({
				transform: 'rotateY(0deg)'
			});
		}, 320);	
	});

	$(".form__login_back").click(function(event) {
		$(".main__button").fadeIn('300', function() {
			
		});

		$(".form__login").css({
			transition: 'transform .3s',
			transform: 'rotateY(90deg)'
		});

		setTimeout(function(){
			$(".form__login").css({
				display: 'none'
			});
			$(".main__block").css({
				display: 'block'
			});
		}, 300);

		setTimeout(function () {
			$(".main__block").css({
				transform: 'rotateY(0deg)'
			});
		}, 320);
	});
}


function initMap() {	// google map
	var mapOptions = {
    zoom: 12,
    center: {lat: 59.9042161, lng: 30.1716925},
    disableDefaultUI: true,
    scrollwheel: false,
    draggable: false,
    styles: [{"featureType":"administrative","elementType":"labels.text","stylers":[{"saturation":"-17"},{"lightness":"21"},{"gamma":"1.16"},{"weight":"2.35"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"administrative.country","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"administrative.province","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"administrative.neighborhood","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"landscape","elementType":"all","stylers":[{"gamma":"1"},{"lightness":"100"},{"color":"#ffffff"}]},{"featureType":"landscape.natural","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#004d90"},{"visibility":"on"}]}]
	}
 	
 	var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}



// mainBlockApp();
flipInit();