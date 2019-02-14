(function($) {
    "use strict";
    // Fixed Header
    $(window).scroll(function() {
        if ($(this).scrollTop() > 90) {
            $(".header-nav").addClass("fixed-nav");
        } else {
            $(".header-nav").removeClass("fixed-nav");
        }
    });
    // Preloader
    if ($('.pre-lds').length > 0) {
        $(window).on('load', function() {
            $('.pre-lds').fadeOut();
            $('.pre-lds').delay(350).fadeOut("slow", 0.0);
            $('body').css({
                'overflow-y': 'scroll'
            });
        });
    }
    
    // Expand Menu
    if ($('.collapse-btn').length > 0) {
        $(".collapse-btn").on('click', function() {
            $("#header-menu").toggleClass('active').siblings().removeClass('active');
        });
    }
    $('.collapse-btn').click(function(){
		$(this).toggleClass('open');
    });
  
    // Skew Box
    
    $('.box-skew-left').skew({
        y: 800,
        breakpoints: [
          {
            break: 1080,
            y: 600
          },
          {
            break: 991,
            y: 0
          }
        ]
      });
    $('.box-skew-right').skew({
        y: -800,
        breakpoints: [
            {
                break: 1080,
                y: -600
            },
          {
            break: 991,
            y: 0
          }
        ]
      });

    // Responsive Menu
    $('#header-menu').slicknav();
    // Slider Carousel
    if ($('.slider-carousel').length > 0) {
        $('.slider-carousel').owlCarousel({
            loop: true,
            items:1,
            nav: false,
            dots: false,
            autoplay:true,
        })
    }
    if ($('.author-carousel').length > 0) {
        $(".author-carousel").owlCarousel({
            autoplay:true,
            items: 1,
            center: true,
            dots: true,
            dotsData: true
            });
    }
    if ($('.pre').length > 0) {
    $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
      });
    }
    if ($('.video-container').length > 0) {
        $(".video-container").fitVids();
    }
    // Wow Animation
     var wow = new WOW(
        {
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       10,          // default
        mobile:       true,       // default
        live:         true        // default
      }
      )
      wow.init();

    // Home Top
    var offset = 300,
        offset_opacity = 1200,
        scroll_top_duration = 1000,
        $back_to_top = $('.home-top');
        $back_to_top.on('click', function(event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0,
        }, scroll_top_duration);
    });

        var sjs = SimpleJekyllSearch({
          searchInput: document.getElementById('search-input'),
          resultsContainer: document.getElementById('results-container'),
          json: '/search.json'
        });

})(jQuery);