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