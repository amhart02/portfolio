var menuIcon = document.querySelector(".menu-icon");
var sideMenu = document.querySelector("nav");

function toggleNav() {
    menuIcon.classList.toggle("open");
    sideMenu.classList.toggle("open");
}     

menuIcon.addEventListener("click", toggleNav);