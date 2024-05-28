// $(document).ready(function(){
//     $(window).on("scroll", function(){
//         var nowScrollTop = $(window).scrollTop();
//         if(nowScrollTop > 0){
//             $('.fix_main').addClass('set');
//         } else {
//             $('.fix_main').removeClass('set');
//         }
//     });
// });
$(document).ready(function(){
    $('main').scroll(function(){
        var nowScrollTop = $(this).scrollTop();
        if(nowScrollTop > 50){
            $('.fix_main').addClass('set');
            // $('.fix_main').stop().animate({backgroundColor: 'rgba(17, 17, 17, 1)'}); // 투명도를 1로 변경
        }else{
        }
    })
})