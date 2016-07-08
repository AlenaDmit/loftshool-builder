// function parallax(){
// 	$(window).on('mousemove', function(e) {
// 		var mouseX = e.pageX;
// 		var mouseY = e.pageY;
// 		var w = (window.innerWidth/2)-mouseX;
// 		var h = (window.innerHeight/2)-mouseY;
		
// 	});
// }

function mainBlockApp() {	//main block vertical appearence
	$(".main__block").css({
		transform: 'rotateX(0deg)',
		transformOrigin: 'top',
		opacity: '1',
		transition: 'opacity .5s, transform .5s'
	});
}

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

$(document).ready(function() {
	createMap();
});

function createMap(){
	ymaps.ready(init);
    
    function init(){
		var myMap = new ymaps.Map("map", {
        	center: [59.89106259461844, 30.450020485993274], 
        	zoom: 12,
        	controls: [],

        });

        myPlacemark = new ymaps.Placemark(
        	[59.89666897024405, 30.392342263337017], 
        	{ 
        		hintContent: 'Москва!', 
        		balloonContent: 'Столица России' 
        	},{
        		iconLayout: 'default#image',
        		iconImageHref: 'images/marker.png',
     			iconImageSize: [42, 58],
        	});

        myMap.geoObjects.add(myPlacemark);
        myMap.controls.add('zoomControl');
        myMap.behaviors.disable('scrollZoom');
	}
}


mainBlockApp();
flipInit();