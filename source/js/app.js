$(document).ready(function () {

    // scroll appearance
    // для появления элемента необходимо изначально задать ему класс hide
    $(window).scroll(function (){ //срабатывает при каждом скролле
        // hide - класс скрытых изначально элементолв - у них прозрачность на нуле
        $(".hide").each(function(i){
            var  objectBottom = $(this).offset().top + $(this).outerHeight()/3;
            var windowBottom = $(window).scrollTop() + $(window).height();

            // если объект в поле зрения, то постепенно увеличиваем прозрачность
            if( windowBottom > objectBottom ){
                $(this).animate({'opacity':'1'},500);
            }
        });
    });


    // parallax
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
})


//menu appearence
$(".header__menu").click(function(){

    if ($(".icon__item").hasClass("clicked")){
        $(".icon__item").removeClass("clicked");
        $(".menu__items").css("display", "none");
        $(".menu_item").removeClass("active");
        $(".layer_left").removeClass("active");
        $(".layer_right").removeClass("active");
        setTimeout(function(){$(".menu__layer_wrap").removeClass("active")}, 100);
    }
    else{
        $(".icon__item").addClass("clicked");
        $(".layer_left").addClass("active"); //
        $(".layer_right").addClass("active");
        $(".menu__layer_wrap").addClass("active");
        setTimeout(function(){
                $(".menu__items").css("display", "flex");
                $(".menu_item").each(function(i){
                    $(this).css("transition-delay", "."+i+"s");
                });
                setTimeout(function(){
                    $(".menu_item").addClass("active");
                },10);
            }
            , 500);
    }
});


// scroll to top/down
function scroll(from,to){
	$(from).click(function (event) {
			event.preventDefault();
			var top = $(to).offset().top;
			$('body,html').animate({scrollTop: top}, 600);
		});
};


// scrolls
scroll($('.middle__button'), $('#slider'));
scroll($('.form__top'), $('#header'));
scroll($('.middle__button'), $('#slider'));


//main block vertical appearence
function mainBlockApp() {
	$(".main__block").css({
		transform: 'rotateX(0deg)',
		transformOrigin: 'top',
		opacity: '1',
		transition: 'opacity .5s, transform .5s'
	});
}


// main block flip
function flipInit(argument) { // main block flip 
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


// google map
function initMap() {
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


function slider(){     //  slider
    var counterUp = 1;
    var counterDown = 2;
    var counterTxt = 1;
    console.log($("li").is(":animated"));
    $('.slider__control_up').click(function(e) {
        e.preventDefault();
        console.clear();
        counterUp++;
        counterDown++;


        var $this = $(this),
            container = $this.closest('.slider'),
            itemsUp = container.find('.control__up-item'),
            activeItemUp = container.find('.control__up-item.control_active_up'),

            display = container.find('.slider__display').find('img'),

            itemsDown = container.find('.control__down-item'),
            activeItemDown = container.find('.control__down-item.control_active_down'),

            blockTxt = container.find('.slider__left__text-item'),
            blockTxtActive = container.find('.slider__left__text-item.active__text');

        itemsUp.css('top', '100%');
        activeItemUp.css('top', '0');
        itemsDown.css('top', '-100%');
        activeItemDown.css('top', '0');

        counterUp = counterUp%itemsUp.length;
        counterDown = counterDown%itemsUp.length;

        if ($('.control__up-item.control_active_up:animated').length !=0){
            console.log("animation in progress");
            return;
        }


        // console.log($('.control__up-item.control_active_up:animated'));
        // console.log(itemsUp.eq(counterUp));
        reqItem = itemsUp.eq(counterUp),
            path = activeItemUp.find('img').attr('src'),
            reqItemDown = itemsDown.eq(counterDown),
            reqTxt = blockTxt.eq(counterTxt);


        activeItemUp.animate({'top': '-100%'}, 500);
        // blockTxt.fadeOut('500', function() {
        // });
        reqItem.animate({'top': '0%'}, 500,
            function(){
                activeItemUp.removeClass('control_active_up').css('top', '100%');
                reqItem.addClass('control_active_up');
                display.fadeOut('500', function() {
                    display.attr('src', path).fadeIn(500);
                });
                blockTxtActive.fadeOut('500', function(){
                    reqblockTxt.fadeIn('500');
                });
                blockTxtActive.removeClass('active__text');
                reqTxt.addClass('active__text');

            });

        activeItemDown.animate({'top': '100%'}, 500);
        reqItemDown.animate({'top': '0%'}, 500,
            function(){
                activeItemDown.removeClass('control_active_down').css('top', '-100%');
                reqItemDown.addClass('control_active_down');

            });

        counterTxt++;

    });

    $('.slider__control_down').click(function(e) {
        e.preventDefault();
        console.clear();
        counterUp--;
        counterDown--;

        var $this = $(this),
            container = $this.closest('.slider'),
            itemsUp = container.find('.control__up-item'),
            activeItemUp = container.find('.control__up-item.control_active_up'),

            display = container.find('.slider__display').find('img');

        itemsDown = container.find('.control__down-item'),
            activeItemDown = container.find('.control__down-item.control_active_down');

        itemsUp.css('top', '-100%');
        activeItemUp.css('top', '0');
        itemsDown.css('top', '100%');
        activeItemDown.css('top', '0');

        if (counterDown < 0)
            counterDown = itemsUp.length - 1;
        if (counterUp < 0)
            counterUp = itemsUp.length - 1;

        if ($('.control__up-item.control_active_up:animated').length !=0){
            console.log("animation in progress");
            return;
        }


        reqItem = itemsDown.eq(counterDown),
            path = activeItemDown.find('img').attr('src'),
            reqItemUp = itemsUp.eq(counterUp);


        activeItemUp.animate({'top': '100%'}, 500);
        reqItemUp.animate({'top': '0%'}, 500,
            function(){
                activeItemUp.removeClass('control_active_up').css('top', '-100%');
                reqItemUp.addClass('control_active_up');
                display.fadeOut('500', function() {
                    display.attr('src', path).fadeIn(500);
                });
            });

        activeItemDown.animate({'top': '-100%'}, 500);
        reqItem.animate({'top': '0%'}, 500,
            function(){
                activeItemDown.removeClass('control_active_down').css('top', '100%');
                reqItem.addClass('control_active_down');

            });



    });

}
slider();

// mainBlockApp();
flipInit();