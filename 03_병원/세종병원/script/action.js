$(document).ready(function(){
    $('.press h2').click(function(){
        $('.press_list').show();
        $('.news_list').hide();
        $('.press h2').addClass('on');
        $('.news h2').removeClass('on');
        $('.press').css({zIndex:'3'});
        $('.btn2').fadeIn();
        $('.btn1').fadeOut();
        return false;
    })

    
    $('.news h2').click(function(){
        $('.press_list').hide();
        $('.news_list').show();
        $('.press h2').removeClass('on');
        $('.news h2').addClass('on');
        $('.press').css({zIndex:'1'});
        $('.btn2').fadeOut();
        $('.btn1').fadeIn();
        return false;
    });


    $('.family_box h4').click(function(){
        $('.family_list').slideDown();
    });



    $('.family_list').mouseleave(function(){
        $('.family_list').slideUp();
    });


    // if(window.location.pathname == '/sub01_01.html'){
    //     $('.snb li:nth-child(3)').addClass('on')
    // }



    // $(window).scroll(function(){
    //     var roll = $(window).scrollTop()

    //     console.log(roll);
    // })


    var s = skrollr.init({
        edgeStrategy: 'set',
        easing: {
            WTF: Math.random,
            inverted: function(p) {
                return 1-p;
            }
        }
    });

    


})