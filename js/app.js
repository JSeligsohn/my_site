// $('#sidebar li').click(function() {
// 	$('.top').addClass('top-drop');
// 	$('#sidebar').addClass('top-nav').slideDown();
// });

$('#menu-toggle').click(function() {
	console.log("Clicked");
	$('.swipe').slideToggle(300);
});

$(window).scroll(function(){ 
   if ($(window).scrollTop() == ($(document).height() - $(window).height())) {
     $('.footer-initials').addClass('initials-hover');
   }
   else {
   	 $('.footer-initials').removeClass('initials-hover');
   }
})

$('.footer-initials').hover(function() {
	$(this).removeClass('initials-hover');
	});



$('#bottom-scroll').click(function() {
  $("html, body").animate({ scrollTop: $(document).height() }, "slow");
  $(this).toggleClass('fa-rotate-180');
})