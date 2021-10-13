$(window).scroll(function(){
    // sticky navbar on scroll script
    if(this.scrollY > 20){
        $('.wrapper').addClass("navbar-scroll");
    }
    else{
        $('.wrapper').removeClass("navbar-scroll");
    }
});

//scroll for starting counting of ourskills

let options = {
  startAngle: -1.55,
  size: 150,
  value: 0.85,
  fill: {color: "#45a29e"}
}

$(".circle .bar").circleProgress(options).on('circle-animation-progress' , function(event , progress, stepValue) {
  $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
});

$(".web .bar").circleProgress({
  value: 0.70,
});

$(".app .bar").circleProgress({
  value: 0.90,
});

$(".graphic .bar").circleProgress({
  value: 0.80,
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
