// define all UI variable
const navToggler = document.querySelector(".nav-toggler");
const toggler = document.querySelector(".btntoggler");
const navMenu = document.querySelector(".site-navbar ul");
const navLinks = document.querySelectorAll(".site-navbar a");
const overflow = document.querySelector("body");

// load all event listners
allEventListners();

// functions of all event listners
function allEventListners() {
  // toggler icon click event
  navToggler.addEventListener("click", togglerClick);
  toggler.addEventListener("click", btntogglerClick);

  // nav links click event
  navLinks.forEach((elem) => elem.addEventListener("click", navLinkClick));
}

// togglerClick function
function togglerClick() {
  navToggler.classList.toggle("toggler-open");
  toggler.classList.toggle("toggler-open");
  navMenu.classList.toggle("open");
  overflow.classList.toggle("body-overflow");
}
function btntogglerClick() {
  navToggler.classList.toggle("toggler-open");
  navMenu.classList.toggle("open");
  overflow.classList.toggle("body-overflow");
}

// navLinkClick function
function navLinkClick() {
  if (navMenu.classList.contains("open")) {
    navToggler.click();
  }
}
