$(window).on('load', function(){
	$('#preloader').css('display', 'none');
	$('#content').css('display', 'block');
});

$(function(){
	if($(window).width() < 992) return false;
	$('#article-blue').mouseenter(function(){
		$('.radar-blue').css('display', 'block');
		$('#article-blue h3').css('color', '#07AAA5');
	});
	$('#article-blue').mouseleave(function(){
		$('.radar-blue').css('display', 'none');
		$('#article-blue h3').css('color', '#2F2F2F');
	});
	$('#article-green').mouseenter(function(){
		$('.radar-green').css('display', 'block');
		$('#article-green h3').css('color', '#82B440');
	});
	$('#article-green').mouseleave(function(){
		$('.radar-green').css('display', 'none');
		$('#article-green h3').css('color', '#2F2F2F');
	});
	$('#article-orange').mouseenter(function(){
		$('.radar-orange').css('display', 'block');
		$('#article-orange h3').css('color', '#FF5E3D');
	});
	$('#article-orange').mouseleave(function(){
		$('.radar-orange').css('display', 'none');
		$('#article-orange h3').css('color', '#2F2F2F');
	});
	$('#article-purple').mouseenter(function(){
		$('.radar-purple').css('display', 'block');
		$('#article-purple h3').css('color', '#C183D6');
	});
	$('#article-purple').mouseleave(function(){
		$('.radar-purple').css('display', 'none');
		$('#article-purple h3').css('color', '#2F2F2F');
	});
	$('#article-red').mouseenter(function(){
		$('.radar-red').css('display', 'block');
		$('#article-red h3').css('color', '#FF3232');
	});
	$('#article-red').mouseleave(function(){
		$('.radar-red').css('display', 'none');
		$('#article-red h3').css('color', '#2F2F2F');
	});
	$('#article-blue-light').mouseenter(function(){
		$('.radar-blue-light').css('display', 'block');
		$('#article-blue-light h3').css('color', '#0093ff');
	});
	$('#article-blue-light').mouseleave(function(){
		$('.radar-blue-light').css('display', 'none');
		$('#article-blue-light h3').css('color', '#2F2F2F');
	});
})

$(function(){
	$('.section-home-seven a').mouseenter(function(){
		$(this).addClass('selected');
	});
	$('.section-home-seven a').mouseleave(function(){
		$(this).removeClass('selected');
	});

	$('.carousel').carousel({
		interval: 5000,
		pause: false
	});

	var offset = 200;
	if($(window).width() < 767) var offset = 10;
	$(window).scroll(function() {
		if ($(this).scrollTop() > offset) {
			$('#navbar-top').css('display', 'none');
			$('#navbar-inverse').css('display', 'block');
		} else {
			$('#navbar-top').css('display', 'block');
			$('#navbar-inverse').css('display', 'none');
		}
	});

	//WOW Scroll Spy
	var wow = new WOW({
	    //disabled for mobile
	    mobile: false
	});
	wow.init();

    $('.dropdown-toggle').mouseover(function() {
        $('.dropdown-menu').show();
    });

    $('.dropdown-toggle').mouseout(function() {
        t = setTimeout(function() {
            $('.dropdown-menu').hide();
        }, 100);

        $('.dropdown-menu').on('mouseenter', function() {
            $('.dropdown-menu').show();
            clearTimeout(t);
        }).on('mouseleave', function() {
            $('.dropdown-menu').hide();
        })
	});
})

