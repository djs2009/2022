$(document).ready(function(){
    var visualIndex = 1;
    var autoFade;
    var fadeSpeed = 2000;
    var visualLength = $('.slide_box li').length;

    //기본모습 설정
    $('.slide_box li').eq(0).show().siblings().hide();

    $('.next').click(function(){
        clearTimeout(autoFade);

        visualIndex++;
        if(visualIndex >= visualLength){
            visualIndex = 0
        }
        
        $('.slide_box li').eq(visualIndex-1).fadeIn().siblings().fadeOut();
        console.log(visualIndex)
        $('.pagenation span').eq(visualIndex-1).addClass('on').siblings().removeClass('on');

        autoFade = setTimeout(nextClick, fadeSpeed)
    })

    $('.prev').click(function(){
        clearTimeout(autoFade);

        visualIndex--;
        if(visualIndex < 0){
            visualIndex = visualLength-1
        }
        
        $('.slide_box li').eq(visualIndex-1).fadeIn().siblings().fadeOut();
        console.log(visualIndex);
        $('.pagenation span').eq(visualIndex-1).addClass('on').siblings().removeClass('on');
        
        autoFade = setTimeout(nextClick, fadeSpeed)
    })


    autoFade = setTimeout(nextClick, fadeSpeed)

    function nextClick(){
        $('.next').click();
    }



    //pagenation 만들기
    for(i = 0; i < visualLength; i++){
        $('.pagenation').append('<span>'+(i+1)+'</span>')
    }

    $('.pagenation span').eq(0).addClass('on');

    $('.pagenation span').click(function(){
        var spanIndex = $(this).index();
        $('.slide_box li').eq(spanIndex).fadeIn().siblings().fadeOut();
        $(this).addClass('on').siblings().removeClass('on')
    })


})