$(document).ready(function(){
    $('#header .topset').load('include/topset.html', loadTopset)
    $('#header .gnb').load('include/header.html', loadHeader)


    
    function loadHeader(){        
        $('.gnb li').mouseover(function(){
            $(this).find('.lnb').stop().slideDown(200);
        });
        $('.gnb li').mouseout(function(){
            $('.lnb').stop().slideUp(200);
        });

        var pageUrl = window.location.href;

        $('.gnb .lnb a').each(function(){ //각각에 대해서
            var gnbHref = $(this).attr('href');//this에 있는 href속성

            if(pageUrl.indexOf(gnbHref) >= 0){ // indexOf 는 자리 번호!
                var gnbName = $(this).parents('.lnb').siblings('a').text(); //1차 메뉴 이름 불러오기
                $('.visual_text p').text(gnbName);

                var lnbName = $(this).text(); //2차 메뉴 이름 불러오기
                $('.content_container h2').text(lnbName);
                
                var lnbHtml = $(this).parents('.lnb').html(); //2차메뉴 소스 불러오기;
                $('.snb').html(lnbHtml);

                var gnbIndex = $(this).parents('.lnb').parent().index(); //내가 클릭한 조상의 부모의 번호
                $('#visual_sub').css({background : 'url("../images/sub_'+(gnbIndex+1)+'.jpg")'})
            }
        })

        
        

        $('.snb li a').each(function(){
            
            var snbHref = $(this).attr('href');
            if(pageUrl.indexOf(snbHref) >= 0){
                $(this).parent().addClass('active');
            }

            if(pageUrl.indexOf('dispMemberSignUpForm') >=0 ){
                $('.content_container h2').text('회원가입');
                $('.snb li').eq(1).addClass('active').siblings().removeClass('active');
            } 
                
            
            


        })

        //화면에 snb가 있을때
        // $('.snb li a').each(function(){
        //     var snbHref = $(this).attr('href');
        //     if(pageUrl.indexOf(snbHref) >= 0){
        //         var snbName = $(this).text();
        //         $(this).parent().addClass('active')
        //         $('.content_container h2').text(snbName)
        //     } else {
        //         $(this).parent().removeClass('active')
        //     }
        // })


        
    }


    function loadTopset(){        
        $('.lang').click(function(){
            $('.select_lang').toggle();
        });

        $('.select_lang li').click(function(){
            var selLang = $(this).text();
            $('.lang b').text(selLang)
        })
    }
})