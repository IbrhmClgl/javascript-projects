"use strict";

const rockEl = document.querySelector(".rock");
const paperEl = document.querySelector(".paper");
const scissorsEl = document.querySelector(".scissors");
const comSelect = document.querySelector(".computer-select");
const pSelect = document.querySelector(".player-select");
const gameResult = document.querySelector(".result");

let optionsArr = ["paper", "scissors", "rock"];
let playersSelection = "";
let randomSelect;

rockEl.addEventListener("click", () => {
  randomNumber();

  playersSelection = "rock";
  comSelect.textContent = randomSelect;
  pSelect.textContent = "rock";

  gameLogic(playersSelection, "paper", "scissors");
});

paperEl.addEventListener("click", () => {
  randomNumber();

  playersSelection = "paper";
  comSelect.textContent = randomSelect;
  pSelect.textContent = "paper";

  gameLogic(playersSelection, "scissors", "rock");
});

scissorsEl.addEventListener("click", () => {
  randomNumber();

  playersSelection = "scissors";
  comSelect.textContent = randomSelect;
  pSelect.textContent = "scissors";

  gameLogic(playersSelection, "rock", "paper");
});

// implement game logic
function gameLogic(player, loose, win) {
  if (player === randomSelect) {
    gameResult.textContent = "Draw";
  } else {
    if (player && randomSelect === loose) {
      gameResult.textContent = "You lost";
    } else if (player && randomSelect === win) {
      gameResult.textContent = "You won !";
    }
  }
}

// generate random computer select
function randomNumber() {
  let randomIndex = Math.floor(Math.random() * optionsArr.length);
  randomSelect = optionsArr[randomIndex];
  return randomSelect;
}
