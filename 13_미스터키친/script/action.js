$(document).ready(function(){
   $('.gnb li').mouseover(function(){
       $(this).find('.lnb').stop().slideDown(300);
   });
   $('.gnb li').mouseout(function(){
       $('.lnb').stop().slideUp(300);
   });


    $('.sns_box h2').click(function(){
        $('.sns_box ul').stop().slideToggle();
    });

    $('.title_box h2').mouseover(function(){
        $('.title_box i a').show(300);
    }); 

    $('.title_box h2').mouseleave(function(){
        $('.title_box i a').hide(300);
    });
    //a에 닿아도 a가 안사라지도록,,,



})