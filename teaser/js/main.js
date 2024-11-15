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


function spnavClose(){
    $('.header .nav.on .smooth').on('click', function(){
       
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
    hamburger();
    spnavClose();
    wid = $(window).width();
});