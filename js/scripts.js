// =============================================================================
// DECLARE GLOBAL APP OBJECT & variables
// =============================================================================
var app = {};
// =============================================================================
// INIT FUNCTION
// =============================================================================
app.init = function(){

	// =============================================================================
	// Mobile Menu
	// =============================================================================
	$('.sliding-panel-button,.sliding-panel-fade-screen,.sliding-panel-close').on('click touchstart',function (e) {
	    $('.sliding-panel-content,.sliding-panel-fade-screen').toggleClass('is-visible');
	    e.preventDefault();
	  });
	// =============================================================================
	// Smooth Scroll
	// =============================================================================
	$('a').smoothScroll();

	// =============================================================================
	// Mobile Check / turn off effect
	// =============================================================================
	if (window.innerWidth < 650){
		$('.hideme').css('opacity', 1);
		$('.nav-top').css('background', 'white');

	} else{
		// =============================================================================
		// Fade In Effect
		// =============================================================================
		/* Every time the window is scrolled ... */
	   $(window).scroll( function(){
	       /* Check the location of each desired element */
	       $('.hideme').each( function(i){
	           
	           var bottom_of_object = $(this).offset().top + $(this).outerHeight();
	           var bottom_of_window = $(window).scrollTop() + $(window).height();
	           
	           /* If the object is completely visible in the window, fade it in */
	           if( bottom_of_window > (bottom_of_object - 100) ){
	               $(this).animate({'opacity':'1'},500);
	           }
	       }); 
	   });
	}
	
   // =============================================================================
   // Parallax Scroll
   // =============================================================================
   //cache the window object...makes loading a little faster
   var $window = $(window);
   //Parallax Effect
   $('section[data-type="background"]').each(function(){

   		var $bgobj = $(this); //assigning the object

   		$($window).scroll(function(){
   			//scroll the bg at var speed...the yPos is a negative val casue we're scrolling up
   			var yPos = -($window.scrollTop() / $bgobj.data('speed'));
   			//put together our final bg position
   			var coords = '50% '+ yPos + 'px';
   			//move the background
   			$bgobj.css({backgroundPosition: coords});


   		});//end window scroll
   });

}; // end init function

// =============================================================================
// DOC READY RUN app.init()
// =============================================================================
$(function(){
	console.log('document ready!');
	app.init();
}); // end document ready



