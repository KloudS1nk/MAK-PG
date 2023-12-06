
$(window).on('scroll resize', function () {
    let winH = $(window).height();
    let winW = $(window).width();
    let winscroll = $(window).scrollTop();
    let topBtnStop = $(document).height() - winH - $('footer').outerHeight();
    let topbtnH = $('.top-btn').outerHeight();
    let topH = $(document).height() - $('footer').outerHeight() - topbtnH - 30;
    let topH2 = $(document).height() - $('footer').outerHeight() - $('.top-btn').outerHeight() - 20;
    
    //show info icon
    if(winscroll > 0){
        $('.top-btn').addClass('show');
    }else{
        $('.top-btn').removeClass('show');
    }

    if(winscroll >= topBtnStop){
        $('.top-btn').addClass('change');
        if(winW < 768){
            $('.change').css('top', topH2);
        }else{
            $('.change').css('top', topH);
        }
    }else{
        $('.top-btn').removeClass('change');
        $('.top-btn').css('top', '');
    } 

    //向上scroll
    $('.top-btn').on('click',function(){
        $('html,body').stop(true).animate({
            scrollTop: 0
        }, 1000);
    })
});