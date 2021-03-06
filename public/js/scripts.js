
function getFormattedDate(timestamp)
{
	var formatted_date;
	var date = new Date(timestamp);
	monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	formatted_date =  monthNames[date.getMonth()] + " " + date.getDate()  + ", " + date.getFullYear();
	return formatted_date;
}

function AppearIteam() {    
    
    setTimeout(function(){
      $('.has-animation').each(function() { 
        $(this).appear(function() {       
          $(this).delay($(this).attr('data-delay')).queue(function(next){
            $(this).addClass('animate-in');
            next();
          });           
        });   
      });
    } , 250 );    
  
}//End AppearIteam

function nicescroll() {
    $(".nav-content,.chat-content,.content-scroll").niceScroll({
    cursorcolor: "#eee", // change cursor color in hex
    cursoropacitymin: 0, // change opacity when cursor is inactive (scrollabar "hidden" state), range from 1 to 0
    cursoropacitymax: 1, // change opacity when cursor is active (scrollabar "visible" state), range from 1 to 0
    cursorwidth: "3px", // cursor width in pixel (you can also write "5px")
    cursorborder: "0px solid #fff", // css definition for cursor border
    cursorborderradius: "5px", // border radius in pixel for cursor
    zindex: "auto", // change z-index for scrollbar div
    scrollspeed: 60, // scrolling speed
    mousescrollstep: 40, // scrolling speed with mouse wheel (pixel)
    touchbehavior: false, // enable cursor-drag scrolling like touch devices in desktop computer
    hwacceleration: true, // use hardware accelerated scroll when supported
    boxzoom: false, // enable zoom for box content
    dblclickzoom: true, // (only when boxzoom=true) zoom activated when double click on box
    gesturezoom: true, // (only when boxzoom=true and with touch devices) zoom activated when pinch out/in on box
    grabcursorenabled: true, // (only when touchbehavior=true) display "grab" icon
    autohidemode: true, // how hide the scrollbar works, possible values: 
    background: "", // change css for rail background
    iframeautoresize: true, // autoresize iframe on load event
    cursorminheight: 32, // set the minimum cursor height (pixel)
    preservenativescrolling: true, // you can scroll native scrollable areas with mouse, bubbling mouse wheel event
    railoffset: false, // you can add offset top/left for rail position
    bouncescroll: false, // (only hw accell) enable scroll bouncing at the end of content as mobile-like 
    spacebarenabled: true, // enable page down scrolling when space bar has pressed
    disableoutline: true, // for chrome browser, disable outline (orange highlight) when selecting a div with nicescroll
    horizrailenabled: true, // nicescroll can manage horizontal scroll
    railalign: "right", // alignment of vertical rail
    railvalign: "bottom", // alignment of horizontal rail
    enabletranslate3d: true, // nicescroll can use css translate to scroll content
    enablemousewheel: true, // nicescroll can manage mouse wheel events
    enablekeyboard: true, // nicescroll can manage keyboard events
    smoothscroll: true, // scroll with ease movement
    sensitiverail: true, // click on rail make a scroll
    enablemouselockapi: true, // can use mouse caption lock API (same issue on object dragging)
    cursorfixedheight: false, // set fixed height for cursor in pixel
    hidecursordelay: 400, // set the delay in microseconds to fading out scrollbars
    irectionlockdeadzone: 6, // dead zone in pixels for direction lock activation
    nativeparentscrolling: true, // detect bottom of content and let parent to scroll, as native scroll does
    enablescrollonselection: true, // enable auto-scrolling of content when selection text
    cursordragspeed: 0.3, // speed of selection when dragged with cursor
    rtlmode: "auto", // horizontal div scrolling starts at left side
    cursordragontouch: false, // drag cursor in touch / touchbehavior mode also
    oneaxismousemode: "auto", 
    scriptpath: "", // define custom path for boxmode icons ("" => same script path)
    preventmultitouchscrolling: true,// prevent scrolling on multitouch events
    disablemutationobserver: false,
  });
}
 
 
function handlePreloader() {
	if ($('.preloader').length > 0) {
		$('.preloader').delay(200).fadeOut(500);
	}
}

// function handleSupport(){
// 	var support = '<a href="https://1.envato.market/59xR9" target="_blank" class="bt-buy-now theme-btn"><i class="ti-shopping-cart"></i><span>Buy Now</span></a><a href="https://w3itexperts.ticksy.com" target="_blank" class="bt-support-now theme-btn"><i class="ti-headphone-alt"></i><span>Support</span></a><!-- Go to www.addthis.com/dashboard to customize your tools --><script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5b221c5e31b4e54b"></script>';
// 	jQuery('body').append(support);
// }

	
$(document).ready(function() {
	"use strict";

    handlePreloader();
    //AppearIteam();
    nicescroll();
	
	handleSupport();

    $('.nav-content-bttn').on('click', function() {
        $('.nav-content ul li a').removeClass('active');
        $(this).addClass('active');
        var data_tab = $(this).attr('data-tab');
        $('.chat-content').removeClass('active');
        $('#'+data_tab).addClass('active');
        return false;
    });

    
	
	//  Header fixed
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-header').addClass("fixed"), 3000;
        } else {
            $('.scroll-header').removeClass("fixed"), 3000;
        }
    });

    
    $('.country-stat3').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay:true,  
        dots:false,
		autoplaySpeed: 3000,
		navSpeed: 3000,
		paginationSpeed: 3000,
		slideSpeed: 3000,
		smartSpeed: 3000,
        autoplay: 3000,
        items:3,
        responsive:{
            0:{
                items:1,
            },
            767:{
                items:2,
            },
            900:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
         
    })

    $('.country-stat2').owlCarousel({
        animateOut: 'slideOutUp',
        animateIn: 'slideInUp',
        loop:true,
        margin:0,
        nav:false,
        autoplay:true,  
        dots:false,
		autoplaySpeed: 3000,
		navSpeed: 3000,
		paginationSpeed: 3000,
		slideSpeed: 3000,
		smartSpeed: 3000,
        autoplay: 3000,
        items:1,         
    })

    $('.country-stat').owlCarousel({
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        loop:true,
        margin:0,
        nav:false,
        autoplay:true,  
        dots:false,
		autoplaySpeed: 3000,
		navSpeed: 3000,
		paginationSpeed: 3000,
		slideSpeed: 3000,
		smartSpeed: 3000,
        autoplay: 3000,
		items:1, 
    })

	$('.symptom').owlCarousel({
		loop:false,
		margin:25,
		nav:false,
		autoplay:false,  
		dots:false,
		autoplaySpeed: 3000,
		navSpeed: 3000,
		paginationSpeed: 3000,
		slideSpeed: 3000,
		smartSpeed: 3000,
        autoplay: 3000,
		items:3,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            900:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
	})
	
	$('.blog-carousel').owlCarousel({
		loop:false,
		margin:30,
		nav:false,
		autoplay:false,  
		dots:false,
		autoplaySpeed: 3000,
		navSpeed: 3000,
		paginationSpeed: 3000,
		slideSpeed: 3000,
		smartSpeed: 3000,
        autoplay: 3000,
		items:3,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            900:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
	})

});

$(window).on('load', function () {
	handlePreloader();
	if(jQuery('#CountryDataOwl').length > 0){ getCountryData(); }
	if(jQuery('#CoronaData').length > 0){ getCompleteInfo(); }
});


