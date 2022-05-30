$(document).ready(function(){
	$('.gnb li').mouseover(function(){
	   $(this).children('.lnb').stop().slideDown(300);
	});
	$('.gnb li').mouseout(function(){
	   $('.lnb').stop().slideUp(300);
	});
 
	$('.language').click(function(){
	   $('.select_lang').fadeToggle(100);
	});
 
	$('.select_lang li').click(function(){
	   var langText = $(this).text();
	   $('.language b').text(langText);
	})


	
	$('.hamberg').click(function(){
		$('.sidemenu').animate({left:0});
		$('#sidemenu_box').fadeIn();
		$('body').css({heigth:'100%', overflow:'hidden'});
	})

	$('.btn_close').click(function(){
		$('.sidemenu').animate({left:'-100%'});
		$('#sidemenu_box').fadeOut();
		$('body').css({heigth:'', overflow:''});
	})
 
	$('.m_gnb > li').click(function(){
		$(this).find('.lnb').slideToggle();
	})
 
	$(window).scroll(function(){
	   var scrT = $(window).scrollTop();
 
	   console.log(scrT)
 
	   if(scrT > 90){
		  $('#header').addClass('action');
		  $('#visual_main').addClass('action');
		  // $('.swiper-slide').css({width:'110%'})
		  // $('#header').css({height:'122px'});
		  // $('#header h1').css({top:'10px'});
		  // $('#header .gnb').css({marginTop:'30px'});
	   } else {
		  $('#header').removeClass('action');
		  $('#visual_main').removeClass('action');
		  // $('#header').css({height:''});
		  // $('#header h1').css({top:''});
		  // $('#header .gnb').css({marginTop:''});
	   }
 
	   if(scrT > 600){
		  $('#section2 > div ul li').addClass('action');
	   } else {
		  $('#section2 > div ul li').removeClass('action');
	   }
 
 
 
	})
 
 
 })