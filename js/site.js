var navAnchor = ('.blog-nav');

$(window).scroll(function(){
  var scroll = $(window).scrollTop();
  if ( scroll >= 50 ){
      $(navAnchor).removeClass('mt-5');
      } else {
        $(navAnchor).addClass('mt-5');
      }
});
