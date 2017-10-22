$(document).ready(function() {
// Set the date we're counting down to
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
  document.getElementById("clock").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("clock").innerHTML = "EXPIRED";
  }
}, 1000);



var images = ["../images/beachboys.jpg", "../images/columbiagorge.jpg", "images/dammm.jpg", "images/eastcanyon.jpg", "images/gala.jpg", "images/lanterns.jpg", "images/tricksy.jpg", "images/vegas.jpg", "images/zoobrew.jpg", "images/saltlake.jpg"];

// Slideshow Activity
// Students: follow the instructions below:

// TODO: Put links to our images in this image array.

// Variable showImage will hold the setInterval when we start the slideshow
var showImage = setInterval(function(){}, 3000);

// Count will keep track of the index of the currently displaying picture.
var count = 0;

// TODO: Use jQuery to run "startSlideshow" when we click the "start" button.
$("#start").click(startSlideshow);

$("#stop").click(stopSlideshow);
// This function will replace display whatever image it's given
// in the 'src' attribute of the img tag.
function displayImage() {
  $("#image-holder").html("<img src=" + images[count] + " width='800px'>");
}

function nextImage() {

  // TODO: Increment the count by 1.
  count++;

  // TODO: Show the loading gif in the "image-holder" div.
//  $("#image-holder").html("<img src='images/loading.gif' width='400px'>");

  // TODO: Use a setTimeout to run displayImage after 1 second.
  setTimeout(displayImage, 1000);

  // TODO: If the count is the same as the length of the image array, reset the count to 0.
  if (count == images.length) {
  	count = 0;
  }
}
function startSlideshow() {

  // TODO: Use showImage to hold the setInterval to run nextImage.
  	showImage = setInterval(nextImage, 3000);
}
function stopSlideshow() {

  // TODO: Put our clearInterval here:
  clearInterval(showImage);

}

// This will run the display image function as soon as the page loads.
displayImage();
});