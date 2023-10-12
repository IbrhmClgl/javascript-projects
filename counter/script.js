"use strict";

const btnReset = document.querySelector("button");
const bar = document.querySelector(".bar");
const container = document.querySelector(".container");
const number = document.querySelector(".number");

console.log(number.textContent);

let countBg = 0;
let counterNum = 0;

function counter() {
  if (countBg <= 100) {
    number.textContent = counterNum;
    bar.style.width = countBg + "%";
    countBg++;
    counterNum++;
  } else {
    countBg = 0;
    bar.style.width = 0 + "%";
    number.textContent = counterNum;
    countBg++;
    counterNum++;
  }
}

container.addEventListener("click", () => {
  counter();
});

document.addEventListener("keypress", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    counter();
    console.log("ibrahim");
  }
});

btnReset.addEventListener("click", () => {
  counter = 0;
  number.textContent = 0;
  bar.style.width = 0;
});
