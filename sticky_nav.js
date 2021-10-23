// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("nav");
var li = document.getElementById("li");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() 
{
  if (window.pageYOffset >= sticky) 
  {
    navbar.classList.add("sticky");
    navbar.classList.remove("red");
    navbar.classList.add("blue");
    li.classList.remove("red");
    li.classList.add("blue");
  } 
  else 
  {
    navbar.classList.remove("sticky");
    navbar.classList.remove("blue");
    navbar.classList.add("red");
    li.classList.remove("blue");
    li.classList.add("red");
  }
}