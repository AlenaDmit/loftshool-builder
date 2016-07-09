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


function initMap() {
	var mapOptions = {
    zoom: 12,
    center: {lat: 59.9042161, lng: 30.1716925},
    disableDefaultUI: true,
    scrollwheel: false,
    styles: [{"featureType":"administrative","elementType":"labels.text","stylers":[{"saturation":"-17"},{"lightness":"21"},{"gamma":"1.16"},{"weight":"2.35"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"administrative.country","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"administrative.province","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"administrative.neighborhood","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"landscape","elementType":"all","stylers":[{"gamma":"1"},{"lightness":"100"},{"color":"#ffffff"}]},{"featureType":"landscape.natural","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#004d90"},{"visibility":"on"}]}]
	}
 	
 	var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}



mainBlockApp();
flipInit();