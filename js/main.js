$(document).ready(function() {


  $(window).on('scroll', function() {
    var scroll = $(window).scrollTop();
    if (scroll < 100) {
      $("#sticky-header").removeClass("sticky-menu");
    } else {
      $("#sticky-header").addClass("sticky-menu");
    }
  });

  function smoothSctollTop() {
    $('.main-header ul li > a').on('click', function(event) {
      var target = $(this.getAttribute('href'));
      if (target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
          scrollTop: target.offset().top - 20
        }, 800);
      }
    });
  }
  smoothSctollTop();

  $(window).scroll(function() {
    if ($(this).scrollTop() > 500) {
      $('.goTop').fadeIn();
    } else {
      $('.goTop').fadeOut();
    }
  });

  $(".goTop").on('click', function() {
    $("body, html").animate({
      scrollTop: 0
    }, 500);
    return false;
  });


  $('#mobile-menu').meanmenu({
    meanScreenWidth: "767",
    meanMenuContainer: '.mobile-menu',
  });
  //mobile menu



  function mainSlider() {
    var BasicSlider = $('.slider-active');
    BasicSlider.on('init', function(e, slick) {
      var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
      doAnimations($firstAnimatingElements);
    });
    BasicSlider.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
      var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
      doAnimations($animatingElements);
    });
    BasicSlider.slick({
      autoplay: false,
      autoplaySpeed: 10000,
      dots: true,
      fade: true,
      prevArrow: '<button type="button" class="prevarrow"><span><i class="fas fa-arrow-left"></i></span></button>',
      nextArrow: '<button type="button" class="nextarrow"><span><i class="fas fa-arrow-right"></i></span></button>',
      arrows: true,
      responsive: [{
        breakpoint: 767,
        settings: {
          dots: false,
          arrows: false
        }
      }]
    });

    function doAnimations(elements) {
      var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      elements.each(function() {
        var $this = $(this);
        var $animationDelay = $this.data('delay');
        var $animationType = 'animated ' + $this.data('animation');
        $this.css({
          'animation-delay': $animationDelay,
          '-webkit-animation-delay': $animationDelay
        });
        $this.addClass($animationType).one(animationEndEvents, function() {
          $this.removeClass($animationType);
        });
      });
    }
  }
  mainSlider();

  $('select').niceSelect();

  $('.counter').counterUp({
    delay: 30,
    time: 1000,
    offset: 70,
    beginAt: 100,
    formatter: function(n) {
      return n.replace(/,/g, '.');
    }
  });

  $('.slider').slick({
    infinite: true,
    slideToShow: 1,
    slideToScroll: 1
  });


  $('.brand-active').owlCarousel({
    loop: true,
    navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
    margin: 10,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 2
      },
      450: {
        items: 3
      },
      500: {
        items: 4
      },
      1000: {
        items: 6
      }
    }
  })


});
