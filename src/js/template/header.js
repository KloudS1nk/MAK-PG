
let winscroll = $(window).scrollTop();
let winH = $(window).height();

//--------------MENU-------------------
// $('.container-menu .menu > li').on('click', function () {
//     $(this).toggleClass('active');
//     $(this).siblings().removeClass('active');
// });
//--------------HEADER & HAMBUR選單----------
$(window).on('scroll resize', function () {
    winscroll = $(window).scrollTop();
    if (winscroll > 0) {
        $('header').addClass('scroll');
    } else {
        $('header').removeClass('scroll');
    }
    
    if ($('.menu-ham').hasClass('hamActive')) {
        $('header').removeClass('scroll');
    }
});

//-------------------HAMBUR 開合--------------------
$('.menu-ham').on('click', function () {
    $(this).toggleClass('hamActive');
    $('body').toggleClass('openMenu');

    if ($(this).hasClass('hamActive')) {
        $('html').css('overflow-y', 'hidden');
    } else {
        $('html').css('overflow-y', 'auto');
    }
});


//當畫面大於991時，移除漢堡選單目前開闔的情況
$(window).on('resize', function () {
    let winW = $(window).width();
    if (winW > 991) {
        $('body').removeClass('openMenu');
        $('.menu-ham').removeClass('hamActive');
    }
});

