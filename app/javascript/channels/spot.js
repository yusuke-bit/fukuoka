const channels = require.context('.', true, /_channel\.js$/)
channels.keys().forEach(channels)

jQuery(function() {
  var pagetop = $('#page_top');   
  pagetop.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 800) {  //100pxスクロールしたら表示
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });
  $('a[href^="#"]').click(function(){
    var time = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" ? 'html' : href);
    var distance = target.offset().top;
    $("html, body").animate({scrollTop:distance}, time, "swing");
    return false;
  });
});