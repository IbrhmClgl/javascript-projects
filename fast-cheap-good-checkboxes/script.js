const checkbox = Array.from(document.querySelectorAll(".checkbox"));

let lastCheckbox = null;

document.addEventListener("change", (event) => {
  const checkClickOnBoxes = checkbox.filter((click) => click.checked === true);
  console.log(checkClickOnBoxes);

  if (checkClickOnBoxes.length < 3) {
    lastCheckbox = event.target;
  } else if (checkClickOnBoxes.length >= 3) {
    lastCheckbox.checked = false;
    lastCheckbox = event.target;
  }
});
