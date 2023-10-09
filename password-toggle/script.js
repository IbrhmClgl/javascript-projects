"use strict";

const button = document.querySelector("button");
const text = document.querySelector(".text");
const pw = document.querySelector(".pw");

button.addEventListener("click", () => {
  let inputText = pw.value;
  console.log(inputText);
  if (pw.hasAttribute("hidden") === false) {
    pw.setAttribute("hidden", true);
    text.removeAttribute("hidden");
    text.value = inputText;
    button.innerHTML = "Hide Password";
  } else {
    button.innerHTML = "Show Password";
    pw.removeAttribute("hidden");
    text.setAttribute("hidden", true);
    console.log("ibrahim");
  }
});
