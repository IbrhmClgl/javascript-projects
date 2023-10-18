const addBtn = document.querySelector(".addBtn");
const todoText = document.querySelector("#todo-text");
const list = document.querySelector(".list");
const menu = document.querySelector(".menu");
const radio = Array.from(document.querySelectorAll(".input-menu"));
const ulElement = document.querySelector("ul");
const removeDoneTodosBtn = document.querySelector(".remove");

let lastCheckbox;
let state = "all";
let notes = [];

function storeToLocalStorage() {
  const notesData = JSON.stringify(notes);
  localStorage.setItem("notes", notesData);
}

menu.addEventListener("click", (e) => {
  if (e.target.type === "radio") {
    radio.forEach((radioBtn) => {
      radioBtn.checked = false;
    });

    e.target.checked = true;
    lastCheckbox = e.target;

    state = e.target.id;

    renderNotes(notes);
    storeToLocalStorage();
  }
});

removeDoneTodosBtn.addEventListener("click", () => {
  let filteredNotes = notes.filter((doneTodo) => {
    return doneTodo.checked !== true;
  });
  notes = filteredNotes;
  storeToLocalStorage();
  renderNotes(filteredNotes);
});

addBtn.addEventListener("click", () => {
  notes.push({ text: todoText.value, checked: false });

  storeToLocalStorage();

  renderNotes(notes);
  console.log(todoText.value);
  todoText.value = "";
});

function renderNotes(arr) {
  ulElement.innerHTML = "";

  for (let todo of generateFilter(arr)) {
    const li = document.createElement("li");
    const note = document.createTextNode(todo.text);
    let checkbox = document.createElement("input");
    const newLine = document.createElement("br");

    checkbox.type = "checkbox";
    checkbox.style.marginLeft = 5 + "px";
    checkbox.checked = todo.checked;

    li.appendChild(note);

    ulElement.appendChild(li);
    li.appendChild(checkbox);
    li.appendChild(newLine);

    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        li.style.textDecoration = "line-through";
      } else {
        li.style.textDecoration = "none";
      }
      todo.checked = checkbox.checked;
      storeToLocalStorage();
    });
  }
}

function generateFilter(arr) {
  if (state === "all") {
    return arr;
  } else if (state === "open") {
    console.log(arr.filter((item) => !item.checked));
    return arr.filter((item) => !item.checked);
  } else if (state === "done") {
    console.log(arr.filter((item) => item.checked));
    return arr.filter((item) => item.checked);
  }
}

const storedNotes = localStorage.getItem("notes");
if (storedNotes) {
  notes = JSON.parse(storedNotes);
  renderNotes(notes);
}
