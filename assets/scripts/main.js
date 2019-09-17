;(function($, win) {
  $.fn.inViewport = function(cb) {
     return this.each(function(i,el){
       function visPx(){
         var H = $(this).height(),
             r = el.getBoundingClientRect(), t=r.top, b=r.bottom;
         return cb.call(el, Math.max(0, t>0? H-t : (b<H?b:H)));  
       } visPx();
       $(win).on("resize scroll", visPx);
     });
  };
}(jQuery, window));

$(window).on("load", function (e) {
  $('a[href^="#"]:not([role="tab"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      if($target.length>0) {

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 120
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
      }
  });

}); 


// Video Popup
if ($('#introvid').length) {
    var scrollTrigger = 600, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#introvid').addClass('show');
            } else {
                $('#introvid').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
}

$(".ani").inViewport(function(px){
    if(px) $(this).addClass("animated") ;
});


$('.shrinkable').readmore({ 
    speed: 75, 
    collapsedHeight: 195,
    lessLink: '<a href="#" class="c-feature__link">read less</a>',
    moreLink: '<a href="#" class="c-feature__link">read more</a>'
});
 
 /*--------------------------------
  Swap video with autoplay video
---------------------------------*/

function autoPlayVideo(vcode, width, height){
  "use strict";
  $("#videoContainer").html('<iframe width="'+width+'" height="'+height+'" src="https://www.youtube.com/embed/'+vcode+'?autoplay=1&loop=1&rel=0&wmode=transparent" frameborder="0" allowfullscreen wmode="Opaque"></iframe>');
}
jQuery('a.introVid').click(function(){
  autoPlayVideo('LzN3WPeIhtY','850','500');
});
jQuery('a.introVid-fixed').click(function(){
  autoPlayVideo('LzN3WPeIhtY','850','500');
});