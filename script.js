var main = function() {
	$('.more-btn').click(function() {
    $(this).next().toggle();
    console.log("hit");
  });
  $('.share').click(function() {
    $(this).next().toggle();
  });
  $('.notification').on("click", function(){
    $(this).toggleClass('active');
  });
};

$(document).ready(main);
