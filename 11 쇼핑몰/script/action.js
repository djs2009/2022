$(document).ready(function(){
    //시작수, 범위수, 증가수
    $('.tire2').each(function(){
        for(i=1; i<9; i++){
            $(this).append('<span></span>');
            $(this).find('span').eq(i-1).css({Transform:'rotate('+(45*i)+'deg) translateX(37px)'})
        }
    })


$('.gnb li').mouseover(function(){
    var dtTotalH = 0
    $(this).find('dl').each(function(){
        /* dt 각각의 높이를 다 더한것 */
        dtTotalH = dtTotalH + $(this).outerHeight(true); 
        /* 72 0 72
        120 72 48
        144 120 24 */
        $(this).parent().siblings('.lnb_bg').height(dtTotalH+30);
        $(this).parent().siblings('.tire_box').css({top:dtTotalH})
    })

    })

    $('.quick').click(function(){
        $(this).toggleClass('on')
    });

    var todayTop = parseInt($('#today').css('top'));//안에 두면 계속 변하는 값이 됨
    $(window).scroll(function(){
        var scrT = $(this).scrollTop();
        var winH = $(this).height();
        var winW = $(this).width();
        var docW = $(document).height();
        
        $('#today').stop().animate({top:scrT+todayTop})

        $('#today .go_top').click(function(){
            $('html').stop().animate({scrollTop:0})
        })

        $('.title_box h2 span').each(function(){
            var h2SpanTop = $(this).offset().top;
            

            if(scrT >= h2SpanTop - winH*0.75){
                $(this).addClass('on');
            } else {
                $(this).removeClass('on');
            }
        })

        $('.scroll_bar').css({width:(scrT*winW) / docW});
    })

    //이미지 롤링

    var imgIndex = 0;
    var delayTime = 2000;
    function rollingImg(){
        imgIndex++;
        if(imgIndex > 2){
            imgIndex = 0;
        }
        roll()
    }

    var autoRolling = setInterval(rollingImg, delayTime)


    $('.small_img li').mouseenter(function(){
        clearInterval(autoRolling);

        imgIndex = $(this).index();
        roll()
        
    })

    $('.small_img li').mouseover(function(){
        autoRolling = setInterval(rollingImg, delayTime)
    })

    function roll(){
        var imgSrc = $('.small_img li').eq(imgIndex).find('img').attr('src');

        $('.big_img img').attr('src', imgSrc);
        $('.small_img li').eq(imgIndex).addClass('on').siblings().removeClass('on');
    }

})


