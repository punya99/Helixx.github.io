(function($) {
    "use strict";
    $(document).ready(function() {
        $('#main-menu').meanmenu({
            meanScreenWidth: "767",
            meanMenuContainer: '.mobile-nav-menu',
        });
        $(".testimonial-v1-all").owlCarousel({
            autoplay: true,
            pagination: false,
            nav: false,
            dots: true,
            margin: 30,
            items: 3,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });
        $(".all-testimonial").owlCarousel({
            autoplay: true,
            pagination: false,
            nav: false,
            dots: true,
            items: 1,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                768: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
        $(".all-patner").owlCarousel({
            autoplay: true,
            pagination: false,
            nav: false,
            dots: true,
            items: 4,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
                0: {
                    items: 2
                },
                600: {
                    items: 2
                },
                768: {
                    items: 2
                },
                992: {
                    items: 4
                },
                1000: {
                    items: 4
                }
            }
        });
        $(".all-slide").owlCarousel({
            items: 1,
            nav: true,
            dots: true,
            autoplay: true,
            loop: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            mouseDrag: false,
            touchDrag: false,
        });
        $(".all-slide").on("translate.owl.carousel", function() {
            $(".slider-text h1").removeClass("animated fadeInUp").css("opacity", "0");
            $(".slider-text p").removeClass("animated fadeInDown").css("opacity", "0");
            $(".slider-text ul").removeClass("animated fadeInDown").css("opacity", "0");
        });
        $(".all-slide").on("translated.owl.carousel", function() {
            $(".slider-text h1").addClass("animated fadeInUp").css("opacity", "1");
            $(".slider-text p").addClass("animated fadeInDown").css("opacity", "1");
            $(".slider-text ul").addClass("animated fadeInDown").css("opacity", "1");
        });
        $.scrollUp({
            scrollText: '<i class="fa fa-long-arrow-up"></i>',
            easingType: 'linear',
            scrollSpeed: 900,
            animation: 'fade'
        });
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
        $('.all-project').slick({
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 3,
            autoplay: true,
            prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
            nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
            responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    autoplay: true,
                    centerPadding: '0px',
                    slidesToShow: 3
                }
            }, {
                breakpoint: 767,
                settings: {
                    centerMode: true,
                    autoplay: true,
                    centerPadding: '0px',
                    slidesToShow: 2
                }
            }, {
                breakpoint: 420,
                settings: {
                    centerMode: true,
                    autoplay: true,
                    centerPadding: '0px',
                    slidesToShow: 1
                }
            }]
        });
        (function() {
            var nav = $('.hd-sec');
            var scrolled = false;
            $(window).scroll(function() {
                if (120 < $(window).scrollTop() && !scrolled) {
                    nav.addClass('sticky_menu animated fadeInDown').animate({
                        'margin-top': '0px'
                    });
                    scrolled = true;
                }
                if (120 > $(window).scrollTop() && scrolled) {
                    nav.removeClass('sticky_menu animated fadeInDown').css('margin-top', '0px');
                    scrolled = false;
                }
            });
        }());
        $('.gallery-photo').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            },
        });
        jQuery('.gallery-container').imagesLoaded(function() {
            $(".gallery-container").isotope({
                itemSelector: '.filtr-item',
                layoutMode: 'fitRows',
            });
            $("ul.simplefilter li").on("click", function() {
                $("ul.simplefilter li").removeClass("active");
                $(this).addClass("active");
                var selector = $(this).attr('data-filter');
                $(".gallery-container").isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false,
                    }
                });
                return false;
            });
        });
        $(window).on("load", function() {
            $('#preloader').fadeOut();
            $('#preloader-status').delay(200).fadeOut('slow');
            $('body').delay(200).css({
                'overflow-x': 'hidden'
            });
        });
    });
})(jQuery);