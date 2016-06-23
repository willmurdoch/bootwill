$(document).ready(function(){
  var myHeight = $('.layer').width()*1.777;
  $('.layer').css('height', Math.ceil(myHeight));
  $('.phoneLayers').addClass('popOut');
  setTimeout(function(){
    $('.phoneLayers').addClass('noDelay');
  },300)
})
$('.layer').click(function(){
  if(!$(this).hasClass('active')){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
  }
  else{
    $(this).removeClass('active');
  }
});
$(window).resize(function(){
  var myHeight = $('.layer').width()*1.777;
  $('.layer').css('height', myHeight);
})
