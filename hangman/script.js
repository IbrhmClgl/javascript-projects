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

// method for replace char at position index
String.prototype.replaceAt = function (index, replacement) {
  return (
    this.substring(0, index) +
    replacement +
    this.substring(index + replacement.length)
  );
};

let randomWord = words[Math.floor(Math.random() * words.length)];
console.log(randomWord);

let counter = 1;
let str = "-";
let arr = str.repeat(randomWord.length).split("");

// hiddenWord.textContent = str.repeat(randomWord.length);
hiddenWord.textContent = arr.join("");

newGame.addEventListener("click", () => {
  active.textContent = "ACTIVE";
  randomWord = words[Math.floor(Math.random() * words.length)];
  hiddenWord.textContent = str.repeat(randomWord.length).split("").join("");
  counter = 0;
  counterFails.textContent = counter;
});

function eventTrigger(letter, char) {
  letter.addEventListener("click", () => {
    {
      if (randomWord.includes(char)) {
        const charPosition = randomWord.search(char);
        arr = arr.join("").replaceAt(charPosition, char).split("");
        console.log(arr);
        console.log((hiddenWord.textContent = arr.join("")));
      } else {
        counterFails.textContent = counter;
        if (counter < 10) {
          counter++;
        } else if (counter === 10) {
          active.textContent = "FAIL";
        }
      }
    }
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
