const openMenuBtn = document.querySelector(".btn--open");
const closeMenuBtn = document.querySelector(".btn--close");
const header = document.querySelector(".header");

openMenuBtn.addEventListener("click", (e) => {
    header.classList.toggle("nav-open");
});

closeMenuBtn.addEventListener("click", (e) => {
    header.classList.toggle("nav-open");
});