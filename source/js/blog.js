var initPos = $('.section__blog_nav').offset().top;

$(window).scroll(function(){
	var currentPos = $(window).scrollTop();
	if(currentPos >= (initPos-100)){
		$('.section__blog_nav').css({
			position: 'fixed',
			width: '400px',
			top: '100px',
			left: '100px',
		});
		// $('.section__blog_article').css('padding', '0 100px 200px 510px');
	}
	else {
		$('.section__blog_nav').css({
			position: 'absolute',
			width: '400px',
			top: '100px',
			left: '100px',
		});
		// $('.section__blog_article').css('padding', '0 100px 200px 530px');
	}
})


var articles = $('.article__item');
for (var i = articles.length - 1; i >= 0; i--) {
	var wp = new Waypoint({
		element: articles[i],
		handler: function (element){
			$('.nav__item').removeClass('active');
			console.clear();
			$(".wp"+this.element.getAttribute("wp_index")).addClass("active");
		},
		offset: 100
	})
};

