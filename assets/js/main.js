// ==================================================
// * Project Name   :  Uniaa – Agency & Consulting Site Template.
// * File           :  JS Base
// * Version        :  1.0.0
// * Author         :  xstheme (https://themeforest.net/user/xstheme/portfolio)
// * Developer      :  webrok (https://www.fiverr.com/webrok?up_rollout=true)
// ==================================================

(function($) {
  "use strict";

  // Back To Top - Start
  // --------------------------------------------------
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('.backtotop:hidden').stop(true, true).fadeIn();
    } else {
      $('.backtotop').stop(true, true).fadeOut();
    }
  });
  $(".scroll").on('click', function() {
    $("html, body").animate({scrollTop: 0}, 0);
    return false; 
  });
  // Back To Top - End
  // --------------------------------------------------

  // Dark mode - start
  // --------------------------------------------------

   $(document).on("click", ".mode-toggle", function (e) {
    e.preventDefault;
    if ($("body").hasClass("white-version")) {
      $("body").removeClass("white-version");
      $(".mode-toggle .moon-mode").hide();
      $(".mode-toggle .sun-mode").show();
    } else {
      $("body").addClass("white-version");
      $(".mode-toggle .moon-mode").show();
      $(".mode-toggle .sun-mode").hide();
    }
  });

  // Dark mode - End
  // --------------------------------------------------

  // preloader - start
  // --------------------------------------------------
  $(window).on('load', function(){
    $('#preloader').fadeOut('slow',function(){
      $(this).remove();
    });
  });
  // preloader - end
  // --------------------------------------------------

  // Mobile Menu Button Class Chnage - Start
  // --------------------------------------------------
  $(".mobile_menu_btn").on('click', function(){
    $(".mobile_menu_btn > i").toggleClass("far fa-bars fa-solid fa-xmark");
  });
  // Mobile Menu Button Class Chnage - End
  // --------------------------------------------------

  // Sticky Header - Start
  // --------------------------------------------------
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 0) {
      $('.site_header').addClass("sticky")
    } else {
      $('.site_header').removeClass("sticky")
    }
  });
  // Sticky Header - End
  // --------------------------------------------------

  // Header Menu Item Effect - Start
  // --------------------------------------------------
  $('.site_header .main_menu_list > li:not(.active)').mouseover(function () {
    $('.site_header .main_menu_list > li:not(.active)').css({
      'opacity': '0.5',
      'transition': 'opacity 0.3s'
    });
    $(this).css({
      'opacity': '1',
      'transition': 'opacity 0.3s'
    });
  });

  $('.site_header .main_menu_list > li:not(.active)').mouseout(function () {
    $('.site_header .main_menu_list > li:not(.active)').css({
      'opacity': '1',
      'transition': 'opacity 0.3s'
    });
  });
  // Header Menu Item Effect - End
  // --------------------------------------------------

  // Videos & Images popup - Start
  // --------------------------------------------------
  $('.video_btn').magnificPopup({
    type: 'iframe',
    preloader: false,
    removalDelay: 160,
    mainClass: 'mfp-fade',
    fixedContentPos: false
  });

  $('.zoom-gallery').magnificPopup({
    delegate: '.popup_image',
    type: 'image',
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300,
      opener: function(element) {
        return element.find('img');
      }
    }
  });
  // Videos & Images popup - End
  // --------------------------------------------------

  // Wow JS - Start
  // --------------------------------------------------
  var wow = new WOW({
    animateClass: 'animated',
    offset: 100,
    mobile: true,
    duration: 1000,
  });
  wow.init();
  // Wow JS - End
  // --------------------------------------------------

  // Mouse Tilt - Start
  // --------------------------------------------------
  $('.tilt').tilt({
    glare: false,
    maxTilt: 4,
    scale: 1.01,
  });
  // Mouse Tilt - End
  // --------------------------------------------------

  // Offcanvas - Start
  // --------------------------------------------------
  $(".offcanvas_btn, .offcanvas_wrapper").on('mouseover', function() {
    $(".offcanvas_wrapper").addClass("active");
  });

  $(".offcanvas_btn, .offcanvas_wrapper").on('mouseout', function() {
    $(".offcanvas_wrapper").removeClass("active");
  });
  // Offcanvas - End
  // --------------------------------------------------

  // History Carousel - Start
  // --------------------------------------------------
  const historyCarousel = new Swiper('.history_carousel', {
    loop: true,
    speed: 5000,
    spaceBetween: 0,
    autoplay: {
      delay: 1,
      disableOnInteraction: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      426: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });
  // History Carousel - End
  // --------------------------------------------------

  // Testimonial Carousel - Start
  // --------------------------------------------------
  const testimonialCarousel = new Swiper('.testimonial_carousel', {
    loop: true,
    speed: 1000,
    spaceBetween: 24,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".testimonial_carousel_pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      1025: {
        slidesPerView: 2,
      },
    },
  });

  const testimonialCarouselTwo = new Swiper('.testimonial_carousel_2', {
    loop: true,
    speed: 1000,
    spaceBetween: 24,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".testimonial_carousel2_pagination",
      clickable: true,
    },
  });
  // Testimonial Carousel - End
  // --------------------------------------------------

  // Clients Logo Carousel - Start
  // --------------------------------------------------
  const clientsLogoCarousel = new Swiper('.clients_logo_carousel', {
    loop: true,
    speed: 5000,
    spaceBetween: 24,
    autoplay: {
      delay: 0,
      disableOnInteraction: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      426: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });
  // Clients Logo Carousel - End
  // --------------------------------------------------

})(jQuery);