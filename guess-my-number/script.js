'use strict';

const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');
const secretNumber = document.querySelector('.number');
const guess = document.querySelector('.guess');
const message = document.querySelector('.message');
const gameScore = document.querySelector('.score');
const highScoreField = document.querySelector('.highscore');

let randomNumber = Math.trunc(Math.random() * 20 + 1);
console.log(randomNumber);

let score = 20;
let highscore = 0;

const displayMsg = function (msg) {
  message.textContent = msg;
};

checkBtn.addEventListener('click', () => {
  const guessNumber = Number(guess.value);

  if (!guessNumber) {
    message.textContent = '🚫 Invalid input !!!';
  } else if (guessNumber === randomNumber) {
    secretNumber.textContent = randomNumber;
    displayMsg('🎉🎉🎉 Correct Number ! 🎉🎉🎉');
    document.body.style.backgroundColor = '#60b347';

    secretNumber.style.width = '30rem';

    checkBtn.setAttribute('disable', true);

    if (score > highscore) {
      highscore = score;
      highScoreField.textContent = highscore;
    }
  } else if (guessNumber !== randomNumber) {
    if (score > 1) {
      displayMsg(guessNumber > randomNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      gameScore.textContent = score;
    } else {
      gameScore.textContent = 0;
      displayMsg('💣 You lost the game !');
    }
  }
});

againBtn.addEventListener('click', () => {
  randomNumber = Math.trunc(Math.random() * 20 + 1);
  secretNumber.textContent = '?';
  gameScore.textContent = 20;
  score = 20;
  displayMsg('Start guessing...');
  document.body.style.backgroundColor = '#222';
  guess.value = '';
  secretNumber.style.width = '15rem';
});
