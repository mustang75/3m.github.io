/*
Copyright (c) 2017
[Master Stylesheet]
Template Name : Single-Product Landing Page Template
Version    : 1.0
Author     : UISuMo Team
Author URI : https://uisumo.com
Support    : uisumo@gmail.com
*/
/*---------------------------------------------
Table of Contents
-----------------------------------------------
Page Pre Loading
Navbar smooth scroll
Scroll To Top
Product slider- Owl corousel
Client slider- Owl corousel
Star Rating
Scroll reveal animations


--------------------------------*/
$(document).ready(function () {
    "use strict";
    var lastScrollTop, navbar, $nav, back;
    /* Page Pre Loading */
    $(window).load(function () { // makes sure the whole site is loaded
        $('#status').fadeOut(); // will first fade out the loading animation
        $('#preloader').delay(250).fadeOut('slow'); // will fade out the white DIV that covers the website.
    });
    /* end Page Pre Loading */
    /*nav bar background color change on scroll */
    $(document).on('scroll', function () {
        $nav = $(".fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
    /*navbar reduced height on scroll*/
    lastScrollTop = 0;
    navbar = $('.navbar');
    $(window).on('scroll', function (event) {
        var st = $(this).scrollTop();
        if (st > lastScrollTop) {
            navbar.addClass('navbar-scroll-custom');
        }
        else {
            navbar.removeClass('navbar-scroll-custom');
        }
        lastScrollTop = st;
    });
    //Smooth Scroll
    $(function () {
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
    /*Scroll To Top*/
     /*Scroll To Top*/
    if (true) {
        if ($('.back-to-top').length) {
            var scrollTrigger = 1000, // px
                backToTop = function () {
                    var scrollTop = $(window).scrollTop();
                    if (scrollTop > scrollTrigger) {
                        $('.back-to-top').addClass('show');
                    } else {
                        $('.back-to-top').removeClass('show');
                    }
                };
            backToTop();
            $(window).on('scroll', function () {
                backToTop();
            });
            $('.back-to-top').on('click', function (e) {
                e.preventDefault();
                $('html,body').animate({
                    scrollTop: 0
                }, 700);
            });
        }
    }
    //scrolls down
    //Product slider
    if ($('.product-slider').length) {
        $(".product-slider").owlCarousel({
            items: 4
            , autoplay: true
            , loop: true
            , nav: true
            , navText: [
            "<img src='images/arrow-left.png'>"
            , "<img src='images/arrow-right.png'>"
        ]
            , dots: false
            , responsive: {
                0: {
                    items: 1
                }
                , 767: {
                    items: 2
                }
                , 991: {
                    items: 3
                }
                , 1200: {
                    items: 4
                }
            }
        });
    }
    /*Product slider*/
    //client Slider
    if ($('.client-slider').length) {
        $(".client-slider").owlCarousel({
            items: 2
            , autoplay: true
            , loop: true
            , nav: false
            , dots: true
            , responsive: {
                0: {
                    items: 1
                }
                , 767: {
                    items: 1
                }
                , 800: {
                    items: 2
                }
            }
        });
    }
    /*client slider*/
    /* Star Rating Plugin - https://github.com/Jacob87/raty-fa*/
    $(".star").raty({
        score: 4
    });
    /*end of star rating*/
    /*scroll reveal animations*/
    window.sr = ScrollReveal();
    sr.reveal('.header-img', {
        origin: 'left'
        , duration: 7000
        , delay: 0
        , reset: true
        , mobile: false // set true if you want  animations in mobile devices
    });
    sr.reveal('.para', {
        origin: 'top'
        , duration: 2500
        , mobile: false // set true if you want  animations in mobile devices
    });
    sr.reveal('.header-buttons ', {
        duration: 5000
        , mobile: false // set true if you want  animations in mobile devices
    });
    sr.reveal('.shape-img', {
        origin: 'top'
        , duration: 3000
        , distance: '20px'
        , reset: true
        , mobile: false // set true if you want  animations in mobile devices
    });
    sr.reveal('.work-section ', {
        origin: 'bottom'
        , duration: 2000
        , mobile: false // set true if you want  animations in mobile devices
    });
    sr.reveal('.highlight-img', {
        origin: 'top'
        , duration: 2500
        , reset: true
        , mobile: false // set true if you want  animations in mobile devices
    });
    sr.reveal('.absorber-img', {
        rotate: {
            x: 0
            , y: 100
            , z: 0
        }
        , duration: 2000
        , mobile: false // set true if you want  animations in mobile devices
    });
    sr.reveal('.absorber-part1', {
        origin: 'left'
        , duration: 3000
        , delay: 200
        , reset: true
        , mobile: false // set true if you want  animations in mobile devices
    });
    sr.reveal('.absorber-part2', {
        origin: 'bottom'
        , duration: 3500
        , delay: 400
        , reset: true
        , mobile: false // set true if you want  animations in mobile devices
    });
    sr.reveal('.technical-img', {
        origin: 'bottom'
        , duration: 3500
        , delay: 400
        , reset: true
        , easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)'
        , mobile: false // set true if you want  animations in mobile devices
    , });
    /*scroll reveal animations*/
        /* clicking on navlink, nav menu  collapses in pesponsive */
    $(".navbar-nav li a").click(function (event) {
        $(".navbar-collapse").collapse('hide');
    });
});