// $('#sidebar li').click(function() {
// 	$('.top').addClass('top-drop');
// 	$('#sidebar').addClass('top-nav').slideDown();
// });

$('#menu-toggle').click(function() {
	console.log("Clicked");
	$('.swipe').slideToggle(300);
});


//When window reaches bottom of page, slide open the initials element.
$(window).scroll(function(){ 
   $('#bottom-scroll').fadeOut();
   if ($(window).scrollTop() == ($(document).height() - $(window).height())) {
     $('.footer-initials').addClass('initials-hover');
   }
   else {
   	 $('.footer-initials').removeClass('initials-hover');
   }
})

//Return the hover functionality to the initials element.
$('.footer-initials').hover(function() {
	$(this).removeClass('initials-hover');
	});


//Clicking on arrow scrolls the page to the bottom.
$('#bottom-scroll').click(function() {
  $("html, body").animate({ scrollTop: $(document).height() }, 1200);
  // $(this).toggleClass('fa-rotate-180');
  $(this).fadeOut();
})

var $front_height = $('.front').css('height');
$('.back').css('height', $front_height);

$('.skill-icon-code').hover(function() {
  $(this).toggleClass('stretching');
});

$('.skill-icon-software').hover(function() {
  $(this).toggleClass('bouncing');
});

$('.skill-icon-tools').hover(function() {
  $(this).toggleClass('expanding');
});

$('.skill-icon-database').hover(function() {
  $(this).toggleClass('spinning');
});








