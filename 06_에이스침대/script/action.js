$(document).ready(function(){
    $('.gnb li, .lnb_bg').mouseover(function(){
        $('.lnb, .lnb_bg').stop().fadeIn(400);
    });

    $('.lnb, .gnb, .lnb_bg').mouseout(function(){
        $('.lnb, .lnb_bg').stop().fadeOut(400);
    });
    



    $('.section3 .sec3_2 a').click(function(){
        alert('로그인 후 이용해주세요');
    });





    $('.family h4').click(function(){
        $('.family ul').slideDown();
    });



    $('.family ul').mouseleave(function(){
        $('.family ul').slideUp();
    });


    $(window).scroll(function(){
        var scrT = $(window).scrollTop();

        if(scrT>100){
            $('#header').addClass('action');
        } else {
            $('#header').removeClass('action');
        }
    })

});