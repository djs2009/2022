$(document).ready(function(){
    $('.gnb').mouseover(function(){
        $('.lnb, .lnb_bg').stop().fadeIn(400)
    })

    $('.lnb, .gnb').mouseout(function(){
        $('.lnb, .lnb_bg').stop().fadeOut(400)
    })
    




})