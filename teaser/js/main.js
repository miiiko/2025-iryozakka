let wid;
let headH;
let mainvisual;


function smooth(){
    $('.smooth').on('click', function(){
        let speed = 400;
        let href = $(this).attr("href");
        let target = $(href === "#" || href === "" ? 'html' : href);
        let position = (target.offset().top);
        $("html, body").animate({scrollTop:position}, speed, "swing");
        let open = $(this).closest('.nav').hasClass('on');
        if ( open == true) {
            $(this).closest('.nav').removeClass('on');
            $(this).closest('.nav').prev().removeClass('on');
            $(this).closest('.nav').slideUp();
        }
        return false;
    });

}


function page_smooth(){
    $('.p_smooth').on('click', function(){
        let speed = 400;
        let href = $(this).attr("href");
        let target = $(href === "#" || href === "" ? 'html' : href);
        console.log(headH);
        let position = (target.offset().top - (headH * 2));
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });

}

function hamburger(){
    $('.header .toggle').on('click', function(){
        $(this).toggleClass('on');
        let open = $(this).next().hasClass('on');
        if ( open == false) {
            $(this).next().addClass('on');
            $(this).next().slideDown();
        } else {
            $(this).removeClass('on');
            $(this).next().removeClass('on');
            $(this).next().slideUp();
        }
    });
}



$(window).scroll(function () {
    headH = $('.header').height();
    mainvisual = $('.main').height();
    let nav = mainvisual + headH;

    if($(window).scrollTop() > nav){
        $('.header').addClass('fix');
        $('.contents .icon').addClass('fix');
    } else {
        $('.header').removeClass('fix');
        $('.contents .icon').removeClass('fix');
    }
});

$(document).ready( function () { 
    smooth();
    page_smooth()
    hamburger();
    let lastWidth = window.innerWidth;
	window.addEventListener('resize',function(){
		if(lastWidth != window.innerWidth){
			wid = $(window).width();
            headH = $('.header').height();
		}
	});
});