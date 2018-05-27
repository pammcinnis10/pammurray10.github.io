/*
 *
 * Project Name: Manten - Style 8
 * URL: http://templatesuper.com
 * Version: 1.1
 *
 * Author: Adnan
 *
 */

// HEADER SLIDER
$(window).load(function() {
    $('.flexslider').flexslider({
        animation: "slide",
        controlNav: true,
        directionNav: true
    });
});
//Scroll to top
$(window).scroll(function() {
    if ($(window).scrollTop() > 50) {
        $('.scroll-to-top').addClass('affix');
    } else {
        $('.scroll-to-top').removeClass('affix');
    };

});
// SMOOTHSCROLL
$(document).ready(function() {
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing');

        $('.navbar-collapse.collapse').removeClass("show");
    });
});

// REGISTRYSLIDER
(function() {
    // store the slider in a local variable
    var $window = $(window),
        flexslider;

    // tiny helper function to add breakpoints
    function getGridSize() {
        return (window.innerWidth < 600) ? 2 :
            (window.innerWidth < 900) ? 3 : 4;
    }

    $window.load(function() {
        $('.registryslider').flexslider({
            animation: "slide",
            animationLoop: false,
            itemWidth: 210,
            itemMargin: 5,
            directionNav: false,
            minItems: getGridSize(), // use function to pull in initial value
            maxItems: getGridSize() // use function to pull in initial value
        });
    });

    // check grid size on resize event
    $window.resize(function() {
        var gridSize = getGridSize();

        flexslider.vars.minItems = gridSize;
        flexslider.vars.maxItems = gridSize;
    });
}());

// SAVE TO CSV
$(function() {
    $(".submit").click(function() {
        var name = $("#name").val();
        var dataString = 'name=' + name;

        if (name == '') {
            $('.alert-danger').fadeIn().show();
        } else {
            $.ajax({
                type: "POST",
                url: "rsvp.php",
                data: dataString,
                success: function() {
                    $('.alert-danger').fadeIn().hide();
                    $('.alert-success').fadeIn().fadeOut(3000);
                }
            });
        }
        return false;
    });
});

// SCROLLREVEAL
window.sr = ScrollReveal();
sr.reveal('#home .box h1, #home .box h6', {
    duration: 1500,
    reset: true
}, 50);
sr.reveal('#story .col-md-12, #story .boxstory', {
    duration: 1500,
    reset: true
}, 50);
sr.reveal('#wedding .bg-top', {
    duration: 1500,
    reset: true
}, 50);
sr.reveal('#accomm .col-md-12, #accomm .box', {
    duration: 1500,
    reset: true
}, 50);
sr.reveal('#registry .col-md-12, #registry img', {
    duration: 2000,
    reset: true
}, 200);
sr.reveal('#rsvp .container', {
    duration: 1500,
    reset: true
}, 50);
