$(document).ready(function(){
    $('.gnb li').mouseover(function(){
        $('.lnb, .lnb_bg').fadeIn(400)
    })

    $('.lnb').mouseout(function(){
        $('.lnb, .lnb_bg').fadeOut(400)
    })
    $('.gnb').mouseout(function(){
        $('.lnb, .lnb_bg').fadeOut(400)
    })




    // $('#popup button').click(function(){
    //     $('#popup').slideUp()
    // })


    $('.notice_box .article ul').animate({marginTop:'-32px'}, 1000)
})