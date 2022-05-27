$(document).ready(function(){
   $('.gnb li').mouseover(function(){
       $(this).find('.lnb').stop().fadeIn(200);
   });
   $('.gnb li').mouseout(function(){
       $('.lnb').stop().fadeOut(200);
   });


    $('.sns_box h2').click(function(){
        $('.sns_box ul').stop().slideToggle();
    });

    $('.title_box h2').mouseover(function(){
        $('.title_box h2 a').stop().show(300);
    }); 

    $('.title_box h2').mouseleave(function(){
        $('.title_box h2 a').stop().hide(300);
    });
    



})