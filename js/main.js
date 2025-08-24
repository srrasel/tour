$(document).ready(function(){
   
    $(".show-more").click(function () {
        if($(".text").hasClass("show-more-height")) {
            $(this).text("Show Less");
        } else {
            $(this).text("Show More");
        }

        $(".text").toggleClass("show-more-height");
    });
    $(".read-more").click(function () {
        if($(".textr").hasClass("show-more-height")) {
            $(this).text("Read Less");
        } else {
            $(this).text("Read More");
        }

        $(".textr").toggleClass("show-more-height");
    });
    $(".read-more-1").click(function () {
        if($(".textr").hasClass("show-more-height")) {
            $(this).text("Read Less");
        } else {
            $(this).text("Read More");
        }

        $(".textr").toggleClass("show-more-height");
    });
    $(".read-more-2").click(function () {
        if($(".textr").hasClass("show-more-height")) {
            $(this).text("Read Less");
        } else {
            $(this).text("Read More");
        }

        $(".textr").toggleClass("show-more-height");
    });
    $(".load-more").click(function () {
        if($(".textt").hasClass("load-more-height")) {
            $(this).text("Load Less");
        } else {
            $(this).text("Load More");
        }

        $(".textt").toggleClass("load-more-height");
    });

    $(".load-more-f").click(function () {
        if($(".textf").hasClass("load-more-height-f")) {
            $(this).text("Load Less");
        } else {
            $(this).text("Load More");
        }

        $(".textf").toggleClass("load-more-height-f");
    });
    $(".load-more-s").click(function () {
        if($(".texts").hasClass("load-more-height-s")) {
            $(this).text("Load Less");
        } else {
            $(this).text("Load More");
        }

        $(".texts").toggleClass("load-more-height-s");
    });

    $('.carousel-1').owlCarousel({
        loop:true,
        nav:true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    navContainer: '.first-slidearrow',
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
    $('.carosel-2').owlCarousel({
        loop:true,
        nav:true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    navContainer: '.second-slidearrow',
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
    $('#tour-content-carosel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    navContainer: '.third-arrow',
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
    $('#jammu-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    navContainer: '.jammu-carousel-arrow',
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    });
      $('#tour-content-caroseel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
    $('#weekend').owlCarousel({
        loop:true,
        margin:15,
        nav:true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    navContainer: '.weekend-arrow',
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
    $('#blog-carousel').owlCarousel({
        loop:true,
        margin:15,
        nav:true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    navContainer: '.blog-arrow',
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    });
    $('#best-place').owlCarousel({
        loop:true,
        margin:15,
        nav:true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    navContainer: '.bestplace-arrow',
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    });
    $('#top-place').owlCarousel({
        loop:true,
        margin:15,
        nav:true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    navContainer: '.top-place-arrow',
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    });
    $('#visit-place').owlCarousel({
        loop:true,
        margin:15,
        nav:true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    navContainer: '.visit-place-arrow',
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    });
    $('#blog-caros').owlCarousel({
        loop:true,
        margin:15,
        nav:true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    navContainer: '.blog-place-arrow',
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    });


    $('#tour-package').owlCarousel({
        loop:true,
        margin:15,
        nav:true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    navContainer: '.tour-arrow',
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
    $('#related-tour').owlCarousel({
        loop:true,
        margin:15,
        nav:true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    navContainer: '.related-arrow',
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
    $('#tour-theme-package').owlCarousel({
        loop:true,
        margin:15,
        nav:true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    navContainer: '.theme-package-arrow',
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
    $('.review-carousel').owlCarousel({
        loop:true,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    $("#package-card1").click(function(){
        $(".pakc-1").toggle();
      });
      $(".pakc-2").hide();
      $(".pakc-3").hide();
      $(".pakc-4").hide();
      $("#package-card2").click(function(){
        $(".pakc-2").toggle();
      });
      $("#package-card3").click(function(){
        $(".pakc-3").toggle();
      });

      $("#package-card4").click(function(){
        $(".pakc-4").toggle();
      });


  });
