
let traggle = winH * 0.9; //動畫觸發點
$('.asj:not(.animated)').each(function(){
    let offset = $(this).offset().top; //有asj且沒有animated的Y座標
    if(offset < traggle){ 
        $(this).addClass('animated'); //asj增加animated
    }
});

$(window).on('scroll', function () {
    let scroll = $(window).scrollTop(); //取得捲軸高
    $('.asj:not(.animated)').each(function(){
        let offset = $(this).offset().top; //有asj且沒有animated的Y座標
        if(offset - traggle < scroll && offset > traggle){ //asj的Y座標-動畫觸發點 < 捲軸高度
            $(this).addClass('animated'); //asj增加animated
        }
        if(offset < traggle){ 
            $(this).addClass('animated'); //asj增加animated
        }
    });
    $('.asj').each(function(){
        let winH1 = $(window).height();
        let scroll = $(window).scrollTop();
        let thisheight = $(this).offset().top + $(this).outerHeight();
        let thisheightdown = $(this).offset().top - winH1;
        if(thisheight < scroll){ 
            $(this).removeClass('animated'); 
        }
        if(thisheightdown > scroll){ 
            $(this).removeClass('animated'); 
        }
    });
});
