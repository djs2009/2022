$(document).ready(function(){
    $('#header .gnb').load('include/header.html', loadHeader )

    function loadHeader(){
      var pageUrl = window.location.href;

      $('.gnb .lnb a').each(function(){
        var lnbHref = $(this).attr('href');

        if(pageUrl.indexOf(lnbHref) >= 0){
          var lnbName = $(this).text();
          $('.sub_intro p').text(lnbName);
          $('.intro p:first-child').text(lnbName);
          
          
          var lnbHtml = $(this).parents('.lnb').html();
          $('.snb').html(lnbHtml);
          
          $(this).parents('.lnb').siblings('a').toggleClass('gnb_up');
        }
      })
   

      $('.snb li a').each(function(){
        var snbHref = $(this).attr('href');

        if(pageUrl.indexOf(snbHref) >= 0){
          $(this).parent('li').addClass('on_sub').sibling().removeClass('on_sub');
        }
      })
    }
    
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 0,
        centeredSlides: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    
   

})