"use strict";

const red = document.querySelector(".red");
const green = document.querySelector(".green");
const blue = document.querySelector(".blue");
const rgb = document.querySelector(".rgb");

function colorUpdate() {
  document.body.style.backgroundColor = `rgb(${red.value},${green.value},${blue.value})`;
  rgb.textContent = `rgb(${red.value},${green.value},${blue.value})`;
}

document.addEventListener("input", colorUpdate);
