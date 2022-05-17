$(document).ready(function(){
    //시작수, 범위수, 증가수
for(i=1; i<9; i++){
        $('.tire2').append('<span></span>');
        $('.tire2 span').eq(i-1).css({Transform:'rotate('+(45*i)+'deg) translateX(37px)'})
}

})