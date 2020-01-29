// JavaScript Document
$(function() {
	
$("header:first").load("includes/header.html");
$("#navbar").load("includes/nav.html");

		
$("#footer").load("includes/footer.html");





function sticky_relocate() {
	  var window_top = $(window).scrollTop();
	  var div_top = $('#sticky-anchor').offset().top;
	  if (window_top > div_top) {
		$('#sticky').addClass('stick');
	  } else {
		$('#sticky').removeClass('stick');
	  }
	}

	$(function() {
	  $(window).scroll(sticky_relocate);
	  sticky_relocate();
	});
	
	
});