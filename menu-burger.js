// menu button
const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector(".mobile-menu.dropdown-toggle");

let menuOpen = false;

menuButton.addEventListener("click", () => {
    if(!menuOpen) {
        menuButton.classList.add("open");
        mobileMenu.classList.add("open");
        menuOpen = true;
    } else {
        menuButton.classList.remove("open");
        mobileMenu.classList.remove("open");
        menuOpen = false;
    }
});

// media query to close mobile-nav at 768px and above
const mql = window.matchMedia('(min-width: 768px)');
function screenTest(e) {
    if (e.matches) {
        menuButton.classList.remove("open");
        mobileMenu.classList.remove("open");
        menuOpen = false;
    }
};
  
mql.addEventListener('change', screenTest);