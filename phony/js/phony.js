function triggerLayers(){
  var myHeight = $('.layer').width()*1.777;
  $('.layer').css('height', Math.ceil(myHeight));
  $('.phoneLayers').addClass('popOut');
  setTimeout(function(){
    $('.phoneLayers').addClass('noDelay');
  },1000);
}
$('.homeBtn').click(function(){
  if($('.phoneLayers').hasClass('popOut')){
    if($('.layer.active').length){
      $('.layer').removeClass('active');
      setTimeout(function(){
        $('.phoneLayers').removeClass('noDelay');
        $('.phoneLayers').removeClass('popOut');
      },300);
    }
    else{
      $('.phoneLayers').removeClass('noDelay');
      $('.phoneLayers').removeClass('popOut');
    }
  }
  else{
    triggerLayers();
  }
});
$(document).ready(function(){
  triggerLayers();
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
