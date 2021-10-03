$(window).scroll(function(){
    // sticky navbar on scroll script
    if(this.scrollY > 20){
        $('.wrapper').addClass("navbar-scroll");
    }
    else{
        $('.wrapper').removeClass("navbar-scroll");
    }
});

// owl carousel script
$('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
        0:{
            items: 1,
            nav: false
        },
        600:{
            items: 2,
            nav: false
        },
        1000:{
            items: 3,
            nav: false
        }
    }
});

// preloading
$(document).ready(function() {

  // Fakes the loading setting a timeout
    setTimeout(function() {
        $('body').addClass('loaded');
    }, 3500);

});

//parallax effect
const parallax = document.getElementById("parallax");

window.addEventListener("scroll" , function () {
  var offset = window.pageYOffset;
  const number = -0.2;
  var inset = offset * number;
  parallax.style.backgroundPositionY = inset + "px";

});



//contact team input and textarea animation
$(".input-effect input").focus(function() {
  $(this).parent(".input-effect").toggleClass("active");
});

$(".input-effect input").focusout(function() {
  $(this).parent(".input-effect").toggleClass("active");
});

$(".input-effect textarea").focus(function() {
  $(this).parent(".input-effect").toggleClass("active");
  $(this).parent(".input-effect").toggleClass("active-textarea");
});

$(".input-effect textarea").focusout(function() {
  $(this).parent(".input-effect").toggleClass("active");
  $(this).parent(".input-effect").toggleClass("active-textarea");
});


//galleries effect
$(window).on("load", function() {
  var $container = $(".pics");
  $container.isotope({
    filter: '.work' ,
    animationOptions: {
      queue: true
    }
  });
  $('.gallery-nav li').click(function() {
    $('.gallery-nav .current').removeClass('current');
    $(this).addClass('current');
    var selector = $(this).attr('data-filter');
    $container.isotope({
      filter: selector ,
      animationOptions: {
        queue: true
      }
    });
    return false
  });

  // $('#gallery-item').mixItUp();
});
