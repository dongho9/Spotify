$(document).ready(function(){
    var prevScrollTop = 0;
    $(window).on("scroll", function(){
        var nowScrollTop = $(window).scrollTop();
        // console.log(nowScrollTop);
        if(nowScrollTop > prevScrollTop){
            $('.fix_main').addClass('scrollset');
        } else {
            $('.fix_main').removeClass('');
        }
        if(nowScrollTop === 0){
            $('.fix_main').removeClass('');
        }
        prevScrollTop = nowScrollTop;
    });
});