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

    if($('section2').length >= 1){
        var sec2Top = $('section2').offset()
    }

    var sec2Top = $('.section2').offset().top();

    $(window).scroll(function(){
        var scrT = $(window).scrollTop();
        var winH = $(window).height();

        if(scrT > 90){
            $('#header').addClass('action');
            $('#visual_main').addClass('action');
        } else {
            $('#header').removeClass('action');
            $('#visual_main').removeClass('action');
        }


        if (scrT > sec2Top-winH/1.5){
            $('.section2 .article2').addClass('action')
        } else {
            $('.section2 .article2').removeClass('action')
        }

    });

    //snb 현재 페이지 표시
    var pageUrl = window.location.href;

    console.log('현재페이지주소는 : '+pageUrl)


    $('.gnb .lnb a').each(function(){
        var gnbHref = $(this).attr('href');

        if(pageUrl.indexOf(gnbHref) >= 0){
            var visualText = $(this).parents('.lnb').siblings('a').text();
            $('.visual_text p').text(visualText);

            var lnbHtml = $(this).parents('.lnb').html();
            $('.snb').html(lnbHtml);
        }
    })


    $('.snb li a').each(function(){
        var snbHref = $(this).attr('href');
        // console.log(pageUrl.indexOf('snb'))

        if(pageUrl.indexOf(snbHref) >= 0){
            $(this).parent().addClass('active');
        }
    })


    //제목 불러오기
    var activeText = $('.snb li.active').text();
    // alert(activeText)
    $('.content_container h2').text(activeText)
    
    
})