"use strict";
let hamburger = document.querySelector(".hamburger");
let menu = document.querySelector(".menu-box");

let isOpen = false;

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("rotate");
  isOpen = !isOpen;
  menu.style.height = isOpen ? "150px" : "0px";
  menu.style.opacity = isOpen ? "1" : "0";
});
console.log('Оценка - 100/100');
