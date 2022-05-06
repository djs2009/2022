$(document).ready(function(){
    $('.news li').eq(0).click(function(){
        $('#popup').show();
    })

    $('#popup button').click(function(){
        $('#popup').hide();
    })



    $('.gallery h2').click(function(){
        $('.news ul').hide();
        $('.news h2').removeClass('on');

        $('.gallery ul').show();
        $('.gallery h2').addClass('on');
    })

    $('.news h2').click(function(){
        $('.news ul').show();
        $('.news h2').addClass('on');
        
        $('.gallery ul').hide();
        $('.gallery h2').removeClass('on');
    })



    /* 슬라이드
    setInterval(function(){
        $('.slide_box')
        .delay(2000).animate({marginLeft:'-1200px'},1000)
        .delay(2000).animate({marginLeft:'-2400px'},1000)
        .delay(2000).animate({marginLeft:'-3600px'},1000, function(){
            $('.slide_box').css({marginLeft:'0px'},1000)
        })
    }) */


    /* setInterval(merong)

    function merong(){
        $('.fade_box li').eq(0).delay(0).fadeIn(500).delay(2000).fadeOut(500).delay(6000)
        $('.fade_box li').eq(1).delay(3000).fadeIn(500).delay(2000).fadeOut(500).delay(3000)
        $('.fade_box li').eq(2).delay(6000).fadeIn(500).delay(2000).fadeOut(500).delay(0)
    } */
    
    
})