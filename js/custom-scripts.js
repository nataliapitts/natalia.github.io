/*
	Custom scripts for ricardozea.net
	Created by: Ricardo Zea
	Date: 9/2012
*/

$(function() {
	//Hide stuff for No-JavaScript version
		//Bottom nav
		$('.nojs-nav').hide();
	
	//If JavaScript available,remove class '.nojs' and add class '.js'
	$('.nojs').removeClass('nojs').addClass('js');
	
	//Links with target="_blank" get the class 'nw' and Title attribute added
	$('a[target="_blank"]').addClass('nw').attr('title','Opens in a new window/tab');

	//Nav bar dropdowns
	$('.trigger').click(function(){
	 	//Toggle class .active from clicked item
		$(this).children('a').toggleClass('active');		
	 	//Slide up/down the actual dropdown		
	 	$(this).find('.dropdown').stop(true, true).slideToggle('fast');
	 	//Deactivate the 'focus' on the nav item when clicked
	 	$(this).children('a').blur();
		return false;
	});

	//Avoid collapsing the dropdowns when clicking on them or inside of them
	$('.dropdown, .dropdown *').click(function(e) {
		e.stopPropagation();
	});

	//Collapse dropdowns when clicking anywhere else on the page
	if(!(navigator.userAgent.match(/iPad/i))){ //Exception for iPad
		var mouse_is_inside = false;

		//Choose the parent element of the dropdown
		$('nav > ul').hover(
			function(){ 
				mouse_is_inside=true; }, 
				function(){ 
					mouse_is_inside=false; 
				});

		$('body').mouseup(function(e){ 
			e.stopPropagation();
			if(! mouse_is_inside)
				//Dropdowns and any other elements
				$('.dropdown').slideUp(function(){
					$('.active').removeClass('active');
				});
		});
	}

	//Add class .active to the corresponding item in the nav bar upon visiting the corresponding page
	$.each($("nav a"), function(){
		var self = $(this);
		if(location.href.indexOf(self.prop('href'))>-1){
			self.addClass('active');			
		}
	});

	//Add a class to images with special styling
	$("img[src*='ss-']").addClass('enhanced');

	//Sticky Nav Bar
	var $sticky = $('nav');
	var $header = $('header');

	$(window).scroll(function() {
		if ($(this).scrollTop() > $header.offset().top + $header.height()) {
			/*$sticky.css({
				top: 0,
				position: 'fixed'
			});*/
			$sticky.addClass('sticked').removeClass('unsticked');
			$('#main-container').addClass('top-space');
			$('.dropdown').slideUp('slow');
			$('.active').not('.dropdown .active').removeClass('active');
		} else {
			/*$sticky.css({
				top: 'auto',
				position: 'absolute'
			});*/
			$sticky.removeClass('sticked').addClass('unsticked');
			$('#main-container').removeClass('top-space');
		}
	});
	
});