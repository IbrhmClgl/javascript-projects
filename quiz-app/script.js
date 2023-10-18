const questions = [
  {
    questions: "How do i center a div horizantally witch CSS?",
    answers: [
      {
        description: "margin: 0 auto",
        correct: true,
      },
      {
        description: "margin: auto 0",
        correct: false,
      },
    ],
  },
  {
    questions: "How do i change the color the background color ins CSS ?",
    answers: [
      {
        description: "backgroundColor: ...",
        correct: false,
      },
      {
        description: "background-color: ...",
        correct: true,
      },
    ],
  },
];

let score = 0;
let currentQuestionIndex = 0;

const questionEl = document.querySelector("#question");
const answersEl = document.querySelector("#answers");
const scoreEl = document.querySelector("#score");

function render() {
  answersEl.innerHTML = "";

  const currentQuestion = questions[currentQuestionIndex];
  questionEl.textContent = currentQuestion.questions;

  currentQuestion.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.textContent = answer.description;

    button.addEventListener("click", () => {
      if (answer.correct) {
        score++;
        //
        currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
        currentQuestionIndex = Math.floor(Math.random() * questions.length); // random question

        render();
      } else {
        score--;
        render();
      }
    });

    answersEl.append(button);
  });

  scoreEl.textContent = score;
}

render();
