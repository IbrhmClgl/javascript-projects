const btnPickRandomBtn = document.querySelector(".btnRandomNum");
const btnReset = document.querySelector(".btnReset");
const article = document.querySelector(".picked-number");

let arrNumbers = [];

btnPickRandomBtn.addEventListener("click", () => {
  if (arrNumbers.length < 8) {
    let randomNum = Math.floor(Math.random() * 49 + 1);
    arrNumbers.push(randomNum);

    // Sortiere das Array vor dem Anzeigen
    arrNumbers.sort((a, b) => a - b);

    article.innerHTML = ""; // Leere den Inhalt von article, um die sortierten Elemente anzuzeigen

    for (let i = 0; i < arrNumbers.length; i++) {
      const newDiv = document.createElement("div");
      newDiv.innerText = arrNumbers[i];
      article.appendChild(newDiv); // Füge das sortierte Element in article ein
    }
  }

  if (arrNumbers.length === 8) {
    btnPickRandomBtn.setAttribute("disabled", true);
    btnReset.removeAttribute("disabled", true);
  }
});

btnReset.addEventListener("click", () => {
  arrNumbers = [];
  article.innerText = "";
  btnPickRandomBtn.removeAttribute("disabled", false);
  btnReset.setAttribute("disabled", true);
});
