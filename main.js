document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.querySelector(".menu_button");

    function toggleMenu() {
        const menu = document.querySelector(".header_nav");
        menu.classList.toggle("hide");
    }

    menuButton.addEventListener("click", toggleMenu);
});