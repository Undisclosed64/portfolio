//select navbar's toggle button and links
const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.nav-links');
//add click event listener to toggleButton and toggle the active class in navLinks
toggleButton.addEventListener("click",() => {
navbarLinks.classList.toggle('active');
})

