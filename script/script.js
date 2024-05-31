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
$(document).ready(function(){
    $('.login').click(function(){
        window.location.href = 'login.html'
    })
})

let window_scrolling;

window.addEventListener('scroll', () => {
  if (!window_scrolling) {
    console.log('start wheeling!');
    document.documentElement.classList.remove('scroll-hidden');
  }

  // 일정시간 뒤에 스크롤 동작 멈춤을 감지
  clearTimeout(window_scrolling);
  window_scrolling = setTimeout(() => {
    console.log('stop wheeling!');
    window_scrolling = undefined;
    document.documentElement.classList.add('scroll-hidden');
  }, 400);
});