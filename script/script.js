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
  startAngle: -1.6,
  size: 100,
  value: 1,
  fill: {color: "#45a29e"}
}
$(".circular").circleProgress(options).on('circle-animation-progress', function(event, progress, stepValue){
  $(this).find(".number").text(String(stepValue.toFixed(2).substr(2)) + "%");
});

$(".script-team .circular").circleProgress({
  value: 0.99,
});

$(".web-team .circular").circleProgress({
  value: 0.30,
});

$(".graphic-team .circular").circleProgress({
  value: 0.80,
});

$(".electronic-team .circular").circleProgress({
  value: 0.90,
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
