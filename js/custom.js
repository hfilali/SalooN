/*
* Theme Name: Tangram
* File name: custom.js
* Theme URL: tangram.mordorthemes.com
* Description: Tangram - One page html/css website template
* Author: Mordorthemes
* Author URL: http://www.mordorthemes.com
* Support: support@mordorthemes.com
* Version: 1.0
*/






/* ==============================================
	Page Preloader
=============================================== */
$(window).load(function() { 
	$("#loader").delay(500).fadeOut(); 
	$(".mask").delay(1000).fadeOut("slow");
});




/* Start Ready Function */
jQuery(document).ready(function ($) { 

'use strict';



/* ==============================================
	OnePage Navigation
=============================================== */
	$('ul.flexnav, a.pippo').onePageNav({
	   currentClass: 'current',
				changeHash: false,
				easing: 'swing',
				filter: ':not(.external)',
				scrollSpeed: 750,
				scrollOffset: 60,
				scrollThreshold: 0.5,
				begin: false,
				end: false,
				scrollChange: false
	})
	
	
	
/* ==============================================
	UI toTop Plugin
=============================================== */
	$('#toTop').UItoTop({ easingType: 'easeOutQuart' });
	


	
/* ==============================================
	Sticky Header
=============================================== */
	$("header").sticky({ topSpacing: 0 });
	



/* ==============================================
	OWL Carousels
=============================================== */

	/* Testimonial Carousel */
	$("#testimonial").owlCarousel({
      navigation : false,
      slideSpeed : 300,
	  pagination: true,
      paginationSpeed : 400,
	  autoPlay: 3000,
      singleItem : true
	});
	
	
	/* project gallery in portfolio detail */
	$("#project-gallery").owlCarousel({
      navigation : true,
      slideSpeed : 300,
	  pagination: false,
      paginationSpeed : 400,
	  autoPlay: 3000,
	  navigationText: ["<i class='fa fa-angle-left fa-2x'></i>", "<i class='fa fa-angle-right fa-2x'></i>"],
      singleItem : true
	});
	
	
	/* Clients Carousel */
	$("#clients").owlCarousel({
      navigation : false,
      slideSpeed : 300,
	  pagination: true,
      paginationSpeed : 400,
	  autoPlay: false,
      items : 4, //10 items above 1000px browser width
	  itemsDesktop : [1000,5], //5 items between 1000px and 901px
	  itemsDesktopSmall : [900,3], // betweem 900px and 601px
	  itemsTablet: [600,2], //2 items between 600 and 0
	  itemsMobile : 2 // itemsMobile disabled - inherit from itemsTablet option
	});	
	
	/*Portfolio Carousel */
	$("#portfolio-carousel").owlCarousel({
      navigation : false,
      slideSpeed : 300,
	  pagination: true,
      paginationSpeed : 400,
	  autoPlay: false,
      items : 5, //10 items above 1000px browser width
	  itemsDesktop : [1000,5], //5 items between 1000px and 901px
	  itemsDesktopSmall : [900,3], // betweem 900px and 601px
	  itemsTablet: [600,2], //2 items between 600 and 0
	  itemsMobile : 2 // itemsMobile disabled - inherit from itemsTablet option
	});	




/* ==============================================
	Magnific popup (lightbox on portfolio section)
=============================================== */
	$('.popup-link').magnificPopup({ 
	type:'image',
 		 image: {
    // options for image content type
    titleSrc: 'title'
  },
  		 gallery:{
    	 	enabled: true, // set to true to enable gallery
  			preload: [0,2], // read about this option in next Lazy-loading section
 			navigateByImgClick: true,
			
  			arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
			tPrev: 'Prev', // title for left button
			tNext: 'Next', // title for right button
		 tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
  		}
	});


	


/* ==============================================
	Isotope Plugin
=============================================== */

        // Isotope Define
        var $container = $('.portfolio-container');

        // init
        $container.isotope({
            // options
			itemSelector: '.portfolio-item'
			
        });

        // filter items on button click
        $('#filters').on('click', 'a', function (event) {
            var filterValue = $(this).attr('data-filter-value');
            $container.isotope({
                filter: filterValue
            });
            // active class
            $('#filters li').removeClass();
            $(this).parent().addClass('active');

        });

	
	
	
	
	
/* ==============================================
	Flexnav
=============================================== */
	$(".flexnav").flexNav({ 'animationSpeed' : '250' });
	
	





	



/* ==============================================
	Contact Form
=============================================== */
$(function () {
    $("#contact .submit-button").click(function () {
        var name = $("#name").val();
        var email = $("#email").val();
        var text = $("#text").val();
        var dataString = 'name=' + name + '&email=' + email + '&text=' + text;
        if (name == '') {
            $('#name').css({
                'background-color': '#FAFFBD'
            });
        } else {
            if (email == '') {
                $('#email').css({
                    'background-color': '#FAFFBD'
                });
            } else {
                if (text == '') {
                    $('#text').css({
                        'background-color':'#FAFFBD'
						
                    });
					
                } else {
                    $.ajax({
                        type: "POST",
                        url: "mail.php",
                        data: dataString,
                        success: function () {
                            $('#form-sent').fadeIn(1000);
                        }
                    });
                }
            }
        }
        return false;
    });
});
	
		





/* ==============================================
	Video Player
=============================================== */	
$(function(){
    $(".player").mb_YTPlayer();
  });


	
});
/* end ready function */





/* ==============================================
	Counter
=============================================== */	
	jQuery(function() {
			
				$(".counter").appear(function(){
				$('.counter').each(function(){
	        	dataperc = $(this).attr('data-perc'),
				$(this).find('.number').delay(6000).countTo({
	            from: 50,
	            to: dataperc,
	            speed: 3000,
	            refreshInterval: 50,
	            
        	});  
		});
					});
});
	(function($) {
    $.fn.countTo = function(options) {
        // merge the default plugin settings with the custom options
        options = $.extend({}, $.fn.countTo.defaults, options || {});

        // how many times to update the value, and how much to increment the value on each update
        var loops = Math.ceil(options.speed / options.refreshInterval),
            increment = (options.to - options.from) / loops;

        return $(this).each(function() {
            var _this = this,
                loopCount = 0,
                value = options.from,
                interval = setInterval(updateTimer, options.refreshInterval);

            function updateTimer() {
                value += increment;
                loopCount++;
                $(_this).html(value.toFixed(options.decimals));

                if (typeof(options.onUpdate) == 'function') {
                    options.onUpdate.call(_this, value);
                }

                if (loopCount >= loops) {
                    clearInterval(interval);
                    value = options.to;

                    if (typeof(options.onComplete) == 'function') {
                        options.onComplete.call(_this, value);
                    }
                }
            }
        });
    };

    $.fn.countTo.defaults = {
        from: 0,  // the number the element should start at
        to: 100,  // the number the element should end at
        speed: 1000,  // how long it should take to count between the target numbers
        refreshInterval: 100,  // how often the element should be updated
        decimals: 0,  // the number of decimal places to show
        onUpdate: null,  // callback method for every time the element is updated,
        onComplete: null,  // callback method for when the element finishes updating
    };
})(jQuery);






/* ==============================================
	Google Map
=============================================== */
var e=new google.maps.LatLng(43.7726657,11.2043491),
		o={zoom:14,center:new google.maps.LatLng(43.7726657,11.2043491),
		mapTypeId:google.maps.MapTypeId.ROADMAP,
		mapTypeControl:!1,
		scrollwheel:!1,
		draggable:!0,
		navigationControl:!1
	},
		n=new google.maps.Map(document.getElementById("google-map"),o);
		google.maps.event.addDomListener(window,"resize",function(){var e=n.getCenter();
		google.maps.event.trigger(n,"resize"),n.setCenter(e)});
		
		
		t=new google.maps.MarkerImage("img/pin.png",new google.maps.Size(40,70),
		new google.maps.Point(0,0),new google.maps.Point(20,55)),
		i=new google.maps.LatLng(43.7726657,11.2043491),
		p=new google.maps.Marker({position:i,map:n,icon:t,zIndex:3});
		google.maps.event.addListener(p,"click",function(){a.open(n,p)}),
		$(".button-map").click(function(){$("#google-map").slideToggle(500,function(){google.maps.event.trigger(n,"resize"),n.setCenter(e)}),
		$(this).toggleClass("close-map show-map")});




	
/* ==============================================
	Parallax Sections
=============================================== */
( function ( $ ) {
'use strict';
$(document).ready(function(){
$(window).bind('load', function () {
		parallaxInit();						  
	});
	function parallaxInit() {
		testMobile = isMobile.any();
		if (testMobile == null)
		{
	$('.about-parallax').parallax("50%", 0.4);
	$('.team-parallax').parallax("50%", 0.4);
	$('.box-parallax').parallax("50%", 0.4);
	$('.works-parallax').parallax("50%", 0.4);
	$('.clients-parallax').parallax("50%", 0.4);
	$('.responsive-parallax').parallax("50%", 0.4);
		}
	}	
	parallaxInit();	 
});	
//Mobile Detect
var testMobile;
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {   	
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
}( jQuery ));
