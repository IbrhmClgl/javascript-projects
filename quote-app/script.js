const buttonEl = document.querySelector("button");
const quoteEl = document.querySelector(".quote");
const authorEl = document.querySelector(".author");

buttonEl.addEventListener("click", () => {
  quoteEl.innerHTML = "";
  authorEl.innerHTML = "";

  fetch("https://dummy-apis.netlify.app/api/quote")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      quoteEl.append(document.createTextNode(data.quote));
      authorEl.append(document.createTextNode(data.author));
    });
});
