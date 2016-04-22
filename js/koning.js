
$(function () {
    $(window).on("load resize", function () {
        $(".fill-screen").css("height", window.innerHeight);
    });

    // add Bootstrap's scrollspy
    $('body').scrollspy({
        target: '.navbar',
        offset: 160
    });

$(document).ready(function() {
 
    // For the Second level Dropdown menu, highlight the parent 
    $( ".dropdown-menu" )
    .mouseenter(function() {
        $(this).parent('li').addClass('active');
    })
    .mouseleave(function() {
        $(this).parent('li').removeClass('active');
    });
 
});


    // smooth scrolling
    $('nav a, .down-button a').bind('click', function () {
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    //initialize WOW for element animation
    new WOW().init();

});