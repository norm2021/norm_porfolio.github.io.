window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var about = document.getElementById("about-section");
var sticky = about.offsetTop - 75;


function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    navbar.classList.remove("not-fixed")
  } else {
    navbar.classList.add("not-fixed")
    navbar.classList.remove("sticky");
  }
}