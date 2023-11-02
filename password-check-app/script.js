"use strict";

import { checkEquality } from "./lib.js";

const inputField1El = document.querySelector(".field-1");
const inputField2El = document.querySelector(".field-2");
const btnEl = document.querySelector("button");
const phrase = document.querySelector("p");

btnEl.addEventListener("click", () => {
  checkEquality(inputField1El.value, inputField2El.value, phrase);
});
