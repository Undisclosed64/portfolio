//select navbar's toggle button and links
const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.nav-links');
//add click event listener to toggleButton and toggle the active class in navLinks
toggleButton.addEventListener("click",() => {
navbarLinks.classList.toggle('active');
})

//Get the to top button
const buttonUp = document.getElementById("btnToTop");
// When the user scrolls down 60px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

 scrollFunction = () => {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    buttonUp.style.display = "block";
  } else {
    buttonUp.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
 topFunction = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//fade in animation for home section
const home = document.querySelector('#home');
const nav = document.querySelector('nav');

window.onload = () => {
  nav.style.opacity = "1";
  home.style.opacity="1";

}








