"use strict";

setInterval(setClock, 1000);

const secondHand = document.querySelector("#data-second");
const minuteHand = document.querySelector("#data-minute");
const hourHand = document.querySelector("#data-hour");
let digitalClock = document.querySelector(".digital-clock");

function setClock() {
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds() / 60;
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

  setRotation(secondHand, secondsRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}

// digitalClock.innerText = `${currentHours}:${currentMinutes}:${currentSeconds}`;

function showTime() {
  const currentDate = new Date();
  let currentSeconds = currentDate.getSeconds();
  let currentMinutes = currentDate.getMinutes();
  let currentHours = currentDate.getHours();

  currentHours = currentHours < 10 ? "0" + currentHours : currentHours;
  currentMinutes = currentMinutes < 10 ? "0" + currentMinutes : currentMinutes;
  currentSeconds = currentSeconds < 10 ? "0" + currentSeconds : currentSeconds;

  let time = currentHours + ":" + currentMinutes + ":" + currentSeconds;

  digitalClock.textContent = time;

  setInterval(showTime, 1000);
}

showTime();
