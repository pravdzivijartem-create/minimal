const open = document.getElementById("open");
const close = document.getElementById("close");
const modal = document.getElementById("backdrop");
const menu__close = document.getElementById("menu__close");
const menu = document.getElementById("menu");
const burger = document.getElementById("burger");

burger.addEventListener("click", () => {
  menu.style.display = "flex";
  burger.style.display = "none";
})

menu__close.addEventListener("click", () => {
  menu.style.display = "none";
  burger.style.display = "flex";
})

open.addEventListener("click", () => {
  modal.style.display = "block";
})

close.addEventListener("click", () => {
  modal.style.display = "none";
})


const butn = document.getElementById("theme");

butn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
})


const butn2 = document.getElementById("theme2");

butn2.addEventListener("click", () => {
    document.body.classList.toggle("dark2");
})

const butn3 = document.getElementById("theme3");

butn3.addEventListener("click", () => {
    document.body.classList.toggle("dark3");
})