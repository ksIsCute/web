const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

setTimeout(() => {
    document.getElementById("splash").classList.toggle("finish")
    document.getElementById("splash").classList.toggle("remove")
}, 2000)