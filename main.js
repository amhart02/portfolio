document.addEventListener("DOMContentLoaded", function() {

    // menu button
    const menuButton = document.querySelector(".menu_button");

    function toggleMenu() {
        const menu = document.querySelector(".header_nav");
        menu.classList.toggle("hide");
    }

    menuButton.addEventListener("click", toggleMenu);

    // img viewer
    const imgs = document.querySelectorAll(".projectImg");
    
    function viewerTemplate(pic, alt) {
        return `
        <div class="viewer">
        <button class="close-viewer">X</button>
        <img src="${pic}" alt="${alt}" class="viewer-picture">
        </div>
        `;
    }

    function closeViewer() {
        const viewer = document.querySelector(".viewer");
            viewer.remove();
    }

    function viewHandler(event) {
        const clickedElement = event.target;
        const imageSource = clickedElement.src;
        const newImageAlt = clickedElement.alt;
        document.body.insertAdjacentHTML("afterbegin", viewerTemplate(imageSource, newImageAlt));
        const viewerButton = document.querySelector(".close-viewer");
        viewerButton.addEventListener("click", closeViewer)
    }

    imgs.forEach(img => {
        img.addEventListener("click", viewHandler);
    });
});