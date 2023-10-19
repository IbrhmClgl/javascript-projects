"use strict";

const score0 = document.querySelector("#score--0");
const score1 = document.querySelector("#score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

score0.textContent = 0;
score1.textContent = 0;
diceEl.classList.add("hidden");

let currentScore = 0;

btnRoll.addEventListener("click", () => {
  const dice = Math.trunc(Math.random() * 6) + 1;

  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;
  console.log(dice);

  if (dice !== 1) {
    currentScore += dice;
    current0El.textContent = currentScore;
  }
});
