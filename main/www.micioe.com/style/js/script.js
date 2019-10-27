
	/*----------------------------------------------  Img Spread Fix ------------------------------------------------*/	

jQuery(window).load(function(){
 jQuery('.portfolio-entries .imgoverlay').find('img').each(function(){
  var imgClass = (this.width/this.height > 1) ? 'wide' : 'tall';
  jQuery(this).addClass(imgClass);
 })
 
})

/*----------------------------------------------  Sticky Bar ------------------------------------------------*/
	
	jQuery(".sticky-bar").sticky({topSpacing:0});


/*----------------------------------------------  Navigation ------------------------------------------------*/	

jQuery(function($) {
	// The same for all waypoints
	$('body').delegate('section', 'waypoint.reached', function(event, direction) {
		var $active = $(this);

		if (direction === "up") {
			$active = $active.prev();
		}
		
		
		if (!$active.length) $active = $active.end();
		
		$('.section-active').removeClass('section-active');
		$active.addClass('section-active');
		
		$('.active').removeClass('active');
		$('a[href=#'+$active.attr('id')+']').addClass('active');
	});
	
	// Register each section as a waypoint.
	$('section').waypoint({ offset: '50%' });
	
	// Wicked credit to
	// http://www.zachstronaut.com/posts/2009/01/18/jquery-smooth-scroll-bugs.html
	var scrollElement = 'html, body';
	$('html, body').each(function () {
		var initScrollTop = $(this).attr('scrollTop');
		$(this).attr('scrollTop', initScrollTop + 1);
		if ($(this).attr('scrollTop') == initScrollTop + 1) {
			scrollElement = this.nodeName.toLowerCase();
			$(this).attr('scrollTop', initScrollTop);
			return false;
		}    
	});
	
	// Smooth scrolling for internal links
	$("a[href^='#']").click(function(event) {
		event.preventDefault();
		
		var $this = $(this),
		target = this.hash,
		$target = $(target);
		
		$(scrollElement).stop().animate({
			'scrollTop': $target.offset().top
		}, 500, 'swing', function() {
			window.location.hash = target;
		});
		
	});
	
});

/*----------------------------------------------  Gallery ------------------------------------------------*/	

jQuery(window).load(function($) {	
	jQuery('#gallery').find('a').photobox({ thumbs:true });	
});


/*----------------------------------------------  Subnav ------------------------------------------------*/	
jQuery(window).load(function($) {	

	jQuery('#navigation ul').supersubs({
        minWidth: 12,
        maxWidth: 27,
        extraWidth: 0 // set to 1 if lines turn over
    }).superfish({
		delay: 200,
		animation: {opacity:'show', height:'show'},
		speed: 'fast',
		autoArrows: false,
		dropShadows: false
	});
	
	jQuery('#navigation ul li:last-child').addClass('last');
	
	// Effects
	$easingType= 'easeInOutQuart';
	
	//Initialising
	initialise('body'); // call function
	

/*----------------------------------------------  Isotope ------------------------------------------------*/	
	if( jQuery().isotope ) {
		
	
	
		$container = jQuery('#masonry');
		
		$container.imagesLoaded( function(){
			$container.isotope({
				itemSelector : '.masonry_item',
				isFitWidth: true
			});	
		});
		
		
		
		$pcontainer = jQuery('#masonry_portfolio');
		
		$pcontainer.imagesLoaded( function(){
			$pcontainer.isotope({
				itemSelector : '.masonry_item',
				isFitWidth: true
			});	
		});
		
		
		$gcontainer = jQuery('#masonry_gallery');
		
		$gcontainer.imagesLoaded( function(){
			$gcontainer.isotope({
				itemSelector : '.masonry_item',
				isFitWidth: true
			});	
		});
		
		
	/*----------------------------------------------  Filter ------------------------------------------------*/	
		// onclick reinitialise the isotope script
		jQuery('.filter li a').click(function(){
			
			jQuery('.filter li a').removeClass('filter-active');
			jQuery(this).addClass('filter-active');
			
			var selector = jQuery(this).attr('data-option-value');
			$pcontainer.isotope({ filter: selector });
			
			return(false);
		});
		
	
	}
	
	
	/*----------------------------------------------  Embed Video ------------------------------------------------*/	
	
	 jQuery(".embeddedvideo").fitVids();
	
	
	/*----------------------------------------------  Social Icons Animation ------------------------------------------------*/	
	jQuery('.socialmedia a').hover(function() {
		jQuery(this).find('span').animate({ 'marginLeft': '-30px' }, 500, $easingType);
	}, function() {
		jQuery(this).find('span').animate({ 'marginLeft': '-0px' }, 500, $easingType);
	});
	
	
	
	/*----------------------------------------------  Back to Top ------------------------------------------------*/	
	jQuery('.totop').click(function(){
		//alert('test');	
		jQuery('html, body').animate({scrollTop: 0}, 600, $easingType);
		return false;						   
	});
	
	jQuery(window).scroll(function() {
		var position = jQuery(window).scrollTop();
		if ( position > 300 )  {
			jQuery( '.totop' ).fadeIn( 350 );
		} else { 
			jQuery( '.totop' ).fadeOut( 350 );
		}
		
		if(navigator.platform == 'iPad' || navigator.platform == 'iPhone' || navigator.platform == 'iPod') { jQuery('.totop').css("position", "static"); };
		
		
	});
	
	/*----------------------------------------------  Responsive nav ------------------------------------------------*/	

    jQuery("nav#navigation").menutron({
      maxScreenWidth: 1024
    });

	
	
	
	/*----------------------------------------------  Check Forms ------------------------------------------------*/	
	// create the checkfalse div's
	jQuery('.checkform .req').each(function(){
		jQuery(this).parent().append('<span class="checkfalse">false</span>');
	});
	jQuery('.checkfalse').hide();
	
	jQuery(".checkform").on("click", 'input[type="submit"]', function() {
				
		form = jQuery(this).parent('div');
		$form = jQuery(form).parent('.checkform');
		form_action = $form.attr('target');
		id = $form.attr('id');
		
		var control = true;
		
		$form.find('label.req').each(function(index){
			var name = jQuery(this).attr('for');
			defaultvalue = jQuery(this).html();
			value = $form.find('.'+name).val();
			formtype = $form.find('.'+name).attr('type');
									
			if (formtype == 'radio' || formtype == 'checkbox') {
				if (jQuery('.'+name+':checked').length == 0) { jQuery(this).siblings('.checkfalse').fadeIn(200); control = false;  } else { jQuery(this).siblings('.checkfalse').fadeOut(200); }
			} else if(name == 'email') {
				var re = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
				if (!value.match(re)) { jQuery(this).siblings('.checkfalse').fadeIn(200); $form.find('.'+name).addClass('false'); control = false;  } else { jQuery(this).siblings('.checkfalse').fadeOut(200); 
					$form.find('.'+name).removeClass('false'); }
			} else {
				if (  value == '' || 
					  value == defaultvalue
					  ) { 
					jQuery(this).siblings('.checkfalse').fadeIn(200); $form.find('.'+name).addClass('false'); control = false;  } else { jQuery(this).siblings('.checkfalse').fadeOut(200); 
						$form.find('.'+name).removeClass('false'); 
				}
			}
			
		});
		
		
		if (!control) { 
		
			jQuery("#form-note").fadeIn(200);
			return false; 
		
		} else {
			
			jQuery("#form-note").fadeOut(200);
			
			if (form_action && form_action !== '') {
				var str = $form.serialize();
					
				   jQuery.ajax({
				   type: "POST",
				   url: form_action,
				   data: str,
				   success: function(msg){
					jQuery("#form-note").ajaxComplete(function(event, request, settings){
						jQuery(this).html(msg);
						jQuery(this).delay(200).fadeIn(200);
					});
				   }
			});
			return false;
			} else {
			return true;
			}
			
		} // END else {
		
	});
	
	
	
});

function initialise(content) {	
	
	
	if( jQuery().flexslider ) {
	/*----------------------------------------------  Flexslider ------------------------------------------------*/	
		
		jQuery(content+' .slidercontent .flexslider').flexslider({
			animation: "slide",
			slideshow: false,
			controlsContainer: "#slider",
			animationDuration: 700,
			start: function(slider){
				var defaultwidth = jQuery(slider).find("ul li:last-child").width();
				var defaultheight = jQuery(slider).find("ul li:last-child").height();
				var resizeamount = defaultwidth/jQuery(slider).width();
				var resizedwidth = jQuery(slider).width();
				var resizedheight = Math.round(defaultheight/resizeamount);
				jQuery(slider).parent('#slider').css({ 'height': resizedheight+'px' });
			},
			before: function(slider) {
				var sliderheight = jQuery(slider).find("li:eq("+(slider.animatingTo+1)+")").height();
				jQuery(slider).parent('#slider').animate({ 'height': sliderheight+'px' }, 500, $easingType);
			}
		});
	
	}

	/*----------------------------------------------  Img Hover ------------------------------------------------*/	
	/* SETTINGS */
	var hoverFade = 300;	
		
	// check if .overlay already exists or not
	jQuery('.imgoverlay a').each(function(index){
		if(jQuery(this).find('.overlay').length == 0) { 
			jQuery(this).append('<div class="overlay"></div>');
			jQuery(this).find('.overlay').css({ opacity: 0 });
			jQuery(this).find('figcaption').css({ opacity: 0 });
		} 	
	
	});
	
	jQuery('.zoom').hover(function(){
		jQuery(this).find('.overlay').animate({ opacity: 0.92 }, hoverFade);
		jQuery(this).find('figcaption').animate({ opacity: 1 }, 100);
	}, function(){
		jQuery(this).find('.overlay').animate({ opacity: 0 }, hoverFade);
		jQuery(this).find('figcaption').animate({ opacity: 0  }, 100);

		});
	
	
		
	
	/*----------------------------------------------  Fancybox ------------------------------------------------*/	
	
	jQuery(content+' .openfancybox').fancybox();
	jQuery(content+' dl.gallery-item a').fancybox();
	
	jQuery(".fancyboxyoutube").click(function() {
		jQuery.fancybox({
			'padding'		: 0,
			'autoScale'		: false,
			'transitionIn'	: 'none',
			'transitionOut'	: 'none',
			'title'			: this.title,
			'width'			: 640,
			'height'		: 385,
			'href'			: this.href.replace(new RegExp("watch\\?v=", "i"), 'v/index.html'),
			'type'			: 'swf',
			'swf'			: {
			'wmode'				: 'transparent',
			'allowfullscreen'	: 'true'
			}
		});

	return false;
});

} // END function initialise()

	
jQuery(document).ready(function(jQuery) {
    jQuery('img[title]').each(function() { jQuery(this).removeAttr('title'); });
		jQuery(".job_list li").click(function(){
			var index = jQuery(".job_list li").index(this);
			jQuery(".job_list li").eq(index).addClass("current").siblings().removeClass("current");
			jQuery(".job_list").addClass("job_list_tab");
			jQuery(".job_desc").show();
			jQuery(".job_desc li").eq(index).show().siblings().hide();
		})

    jQuery(".hide_desc_box").click(function(){
      jQuery(".job_list").removeClass("job_list_tab");
      jQuery(".job_desc").hide();
    })
    
});	