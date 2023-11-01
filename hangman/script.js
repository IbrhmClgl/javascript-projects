"use strict";

const hiddenWord = document.querySelector("main");
const counterFails = document.querySelector(".counter");
const active = document.querySelector(".active-game");
const newGame = document.querySelector(".new-game");

const a = document.querySelector(".a");
const b = document.querySelector(".b");
const c = document.querySelector(".c");
const d = document.querySelector(".d");
const e = document.querySelector(".e");
const f = document.querySelector(".f");
const g = document.querySelector(".g");
const h = document.querySelector(".h");
const i = document.querySelector(".i");
const j = document.querySelector(".j");
const k = document.querySelector(".k");
const l = document.querySelector(".l");
const m = document.querySelector(".m");
const n = document.querySelector(".n");
const o = document.querySelector(".o");
const p = document.querySelector(".p");
const q = document.querySelector(".q");
const r = document.querySelector(".r");
const s = document.querySelector(".s");
const t = document.querySelector(".t");
const u = document.querySelector(".u");
const v = document.querySelector(".v");
const w = document.querySelector(".w");
const x = document.querySelector(".x");
const y = document.querySelector(".y");
const z = document.querySelector(".z");

let randomWord = words[Math.floor(Math.random() * words.length)].toLowerCase();

console.log(randomWord);

let counter = 1;
let str = "-";
let arr = str.repeat(randomWord.length).split("");

hiddenWord.textContent = arr.join("");

newGame.addEventListener("click", () => {
  active.textContent = "ACTIVE";
  randomWord = words[Math.floor(Math.random() * words.length)].toLowerCase();
  arr = str.repeat(randomWord.length).split("");
  hiddenWord.textContent = str.repeat(randomWord.length).split("").join("");
  counter = 1;
  counterFails.textContent = 0;
  resetLetters();
});

function eventTrigger(letter, char) {
  letter.addEventListener("click", () => {
    var charPositions = [];
    // Find all positions of the character in the randomWord
    for (let i = 0; i < randomWord.length; i++) {
      if (randomWord[i] === char) {
        charPositions.push(i);
      }
    }

    if (charPositions.length > 0) {
      // Replace the character at all found positions
      charPositions.forEach((position) => {
        arr[position] = char;
      });

      hiddenWord.textContent = arr.join("");

      if (arr.join("") === randomWord) {
        active.textContent = "You won!";
      }
    } else {
      counterFails.textContent = counter;
      if (counter < 10) {
        counter++;
      } else if (counter === 10) {
        active.textContent = "FAIL";
      }
    }
    letter.setAttribute("disabled", "true");

    letter.style.color = "#888";
    letter.style.pointerEvents = "none";
  });
}

function resetLetters() {
  const letters = document.querySelectorAll("p");
  letters.forEach((letter) => {
    letter.setAttribute("disabled", "false");
    letter.style.color = "#000";
    letter.style.pointerEvents = "auto";
  });
}

eventTrigger(a, "a");
eventTrigger(b, "b");
eventTrigger(c, "c");
eventTrigger(d, "d");
eventTrigger(e, "e");
eventTrigger(f, "f");
eventTrigger(g, "g");
eventTrigger(h, "h");
eventTrigger(i, "i");
eventTrigger(j, "j");
eventTrigger(k, "k");
eventTrigger(l, "l");
eventTrigger(m, "m");
eventTrigger(n, "n");
eventTrigger(o, "o");
eventTrigger(p, "p");
eventTrigger(q, "q");
eventTrigger(r, "r");
eventTrigger(s, "s");
eventTrigger(t, "t");
eventTrigger(u, "u");
eventTrigger(v, "v");
eventTrigger(w, "w");
eventTrigger(x, "x");
eventTrigger(y, "y");
eventTrigger(z, "z");
