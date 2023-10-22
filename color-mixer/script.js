"use strict";

const red = document.querySelector(".red");
const green = document.querySelector(".green");
const blue = document.querySelector(".blue");
const rgb = document.querySelector(".rgb");
const buttonEl = document.querySelector("button");

function colorUpdate() {
  document.body.style.backgroundColor = `rgb(${red.value},${green.value},${blue.value})`;
  rgb.textContent = `rgb(${red.value},${green.value},${blue.value})`;
}

document.addEventListener("input", colorUpdate);

buttonEl.addEventListener("click", () => {
  fetch("https://dummy-apis.netlify.app/api/color")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      document.body.style.backgroundColor = data.color;
      rgb.textContent = data.color;
    });
});
