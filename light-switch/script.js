"use strict";

const button = document.querySelector(".btn");
const nightTitle = document.querySelector(".night");

button.addEventListener("click", () => {
  button.classList.toggle("btn--darkMode");
  document.body.classList.toggle("bg-color");
  if (nightTitle.innerHTML === "Good Morning") {
    nightTitle.innerHTML = "Good Night";
  } else {
    nightTitle.innerHTML = "Good Morning";
  }
});
