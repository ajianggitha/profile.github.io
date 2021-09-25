//page scroll
$('.scroll-page').on('click', function(e){
  
    //ambil isi href
      var tujuan = $(this).attr('href');
    //ambil elemen untuk scrol 
      var elemenTujuan = $(tujuan);
      
    //scrolling page 
      $('html,body').animate({
        scrollTop: elemenTujuan.offset().top - 55
      }, 1250, 'easeInOutExpo');
      
      
      e.preventDefault();
});


//paralax

//about
$(window).on('load', function() {
  $('.left').addClass('lFade');
  $('.right').addClass('rFade');
});

//jumbotron
$(window).scroll(function() {
  var wScroll = $(this).scrollTop();
  $('.jumbotron img').css({
    'transform' : 'translate(0px, '+ wScroll/4 +'%)'
  });
  
    $('.jumbotron h1').css({
    'transform' : 'translate(0px, '+ wScroll/2 +'%)'
  });
  
    $('.jumbotron p').css({
    'transform' : 'translate(0px, '+ wScroll/2 +'%)'
  });


     //portfolio fade
if( wScroll > $('.portfolio').offset().top - 200 ) {
  $('.portfolio .thumbnail').each(function(i) {
    setTimeout(function() {
      $('.portfolio .thumbnail').eq(i).addClass('fade');
    },400 * (i));
});
}
});

