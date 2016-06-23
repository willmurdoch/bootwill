$('.handle').mousedown(function(){
  $('.baSlider').mousemove(function(e){
    $('.before').css('width',e.pageX);
  })
})
var unbind = function(){
  $('.baSlider').off('mousemove');
}
$('.baSlider').mouseup(unbind).mouseout(unbind);
