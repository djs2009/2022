$(document).ready(function(){
	$('.gnb > li').mouseenter(function(){
        $('.lnb').stop().fadeIn();
        $('.lnb_bg').stop().fadeIn();
    })
    $('.lnb_bg').mouseleave(function(){
        $('.lnb').stop().fadeOut();
        $('.lnb_bg').stop().fadeOut();
    })

var gnb2 = $('.gnb').clone();
$('.gnb2').html(gnb2).find('.gnb').attr('class','hidden_menu');

$('.hamburger').click(function(){
    $('.sidemenu').addClass('action');
    $('.hamburger').hide()

})

$('.sidemenu .btn_close').click(function(){
    $('.sidemenu').removeClass('action');
    $('.hamburger').show()
})


var sec1DivTop = $('#section1 div').offset().top;
var sec2DivTop = $('#section2 div').offset().top;
var sec3DivTop = $('#section3 div').offset().top;
    $(window).scroll(function(){
        var scrT = $(window).scrollTop();
        var winH = $(window).height();

        $('#visual_main').css({backgroundPositionY:-scrT/2})
        $('.building').css({backgroundPosition:'center bottom ' + (-300-scrT/7) +'px'})
        $('text_box').css({top:300+scrT/2, opacity:1-(scrT/1000)})


        if(scrT >= sec1DivTop - winH/1.2){
            $('#section1 > div').stop().animate({top:-100});
        } else {
            $('#section1 > div').stop().animate({top:0});
        }


        if(scrT >= sec2DivTop - winH/2){
            $('#section2 > div ul').eq(0).stop().animate({marginTop:'54px'});
            $('#section2 > div ul').eq(1).stop().animate({marginTop:'130px'});
            $('#section2 > div ul').eq(2).stop().animate({marginTop:'54px'});
            $('#section2 > div ul').eq(3).stop().animate({marginTop:'130px'});
        } else {
            $('#section2 > div ul').eq(0).stop().animate({marginTop:''});
            $('#section2 > div ul').eq(1).stop().animate({marginTop:''});
            $('#section2 > div ul').eq(2).stop().animate({marginTop:''});
            $('#section2 > div ul').eq(3).stop().animate({marginTop:''});
        }


        if(scrT > sec3DivTop - winH/1.5){
            $('#section3').addClass('action');
        } else {
            $('#section3').removeClass('action');
        }
    })
})