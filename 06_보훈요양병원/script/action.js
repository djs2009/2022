$(document).ready(function(){
   $('.gnb li').mouseover(function(){
       $(this).find('.lnb').stop().slideDown(200);
   });
   $('.gnb li').mouseout(function(){
       $('.lnb').stop().slideUp(200);
   });


   $('.lang').click(function(){
       $('.select_lang').toggle();
   });

   $('.select_lang li').click(function(){
       var selLang = $(this).text();
       $('.lang b').text(selLang)
   })

   $('#popup button').click(function(){
       $('#popup').slideUp();
   })






   var rotateNoti = setTimeout(noticeUp, 2000)

   function noticeUp(){
    $('.notice_box .article ul').animate({marginTop:'-32px'},500, function(){
        $('.article ul li').eq(0).appendTo('.article ul');
        $('.notice_box .article ul').css({marginTop:0});
        rotateNoti = setTimeout(noticeUp, 2000)
        });
    }
    

    $('.notice_box .article').mouseover(function(){
        clearTimeout(rotateNoti);
        console.log('올렸다')
    });

    
    $('.notice_box .article').mouseleave(function(){
        clearTimeout(rotateNoti);
        rotateNoti = setTimeout(noticeUp, 2000);
        console.log('내렸다')
    })






    $('.section4 .article4 > li').each(function(){
        var article4LiIndex = $(this).index();
        $(this).find('span').text('0'+(article4LiIndex+1))
    })


    

    $(window).scroll(function(){
        var scrT = $(window).scrollTop();

        if(scrT > 90){
            $('#header').addClass('action');
        } else {
            $('#header').removeClass('action');
        }

    })
    
})