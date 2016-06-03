function filteredGrid(filterWrap, filterBtn, filterElem){

	//Initialize Isotope
	$(filterWrap).isotope({
    itemSelector: filterElem,
    layoutMode: 'packery'
  });

	//Filter button bindings
  $(filterBtn).click(function(e){
    $(filterWrap).isotope({
      filter: $(this).attr('data-filter')
    });
  });
}

function scrollLogic(){
  var thisScroll = 0, lastScroll = 0;
  $(window).scroll(function(){
    thisScroll = $(window).scrollTop();

    //track if an element is visible within the viewport
    //if($('.myElem').offset().top - $(window).scrollTop() < $(window).height()/1.1)

    if(thisScroll > lastScroll){
      //going down
    }
    else{
      //going up
    }

    lastScroll = thisScroll;
  });
}
