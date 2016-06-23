$(document).ready(function(){
  scrollLogic();
  filteredGrid('.bwWrap', '.filterWrap div[data-filter]', '.tile');
});

$('.mobileBtn').click(function(){
    if(!$('nav').hasClass('expanded')){
      $('nav').addClass('expanded')
    }
    else $('nav').removeClass('expanded');

});
