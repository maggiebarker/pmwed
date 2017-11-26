$(document).ready(function() {

//Countdown
var countDownDate = new Date("March 30, 2018 19:00:00").getTime();
// Update the count down every 1 second
var x = setInterval(function() {
// Get todays date and time
var now = new Date().getTime();
// Find the distance between now an the count down date
var distance = countDownDate - now;
// Time calculations for days, hours, minutes and seconds
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

// Display the result in the element with id="demo"
  $("#clock").text(days + "d " + hours + "h "
  + minutes + "m " + seconds + "s");
// If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    $("#clock").text("Just Married!");
  }
}, 1000);


//Slideshow
var images = ["assets/images/columbiagorge.jpg", "assets/images/dammm.jpg", "assets/images/eastcanyon.jpg", "assets/images/gala.jpg", "assets/images/lanterns.jpg", "assets/images/morevegas.jpg", "assets/images/beachboys.jpg", "assets/images/vegas.jpg", "assets/images/zoobrew.jpg", "assets/images/saltlake.jpg"];
var showImage;
var count = 0;

$("#start").click(startSlideshow);
$("#stop").click(stopSlideshow);

function displayImage() {
  $("#image-holder").html("<img src=" + images[count] + " width='400px'>");
}

function nextImage() {
  count++;
  setTimeout(displayImage, 1000);
  if (count === images.length) {
    count = 0;
  }
}
function startSlideshow() {
  showImage = setInterval(nextImage, 2000);
}
function stopSlideshow() {
  clearInterval(showImage);
}
displayImage();
});