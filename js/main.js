let up = document.querySelector(".up");
window.onscroll = function () {
  if (window.scrollY > 600) {
    up.style.right = "10px";
  } else {
    up.style.right = "-100px";
  }
};
// ==================================>
let btn = document.querySelector(".btn i");
let ul = document.querySelector("header ul");
btn.onclick = function () {
  btn.classList.toggle("fa-xmark");
  ul.classList.toggle("lll");
};
// let ul = document.querySelectorAll("header .container ul");
ul.onclick = function () {
  btn.classList.toggle("fa-xmark");
  ul.classList.toggle("lll");
};
