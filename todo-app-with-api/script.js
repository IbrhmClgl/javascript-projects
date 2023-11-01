"use strict";

const todoListEl = document.querySelector(".todo-list");
const addBtn = document.querySelector(".add-btn");
const deleteBtn = document.querySelector(".delete-btn");
const newTodoInput = document.querySelector(".new-todo-input");

const url = "http://localhost:4730/todos";

let todos = [];
let checkedValue;
let newTodo;

addBtn.addEventListener("click", () => {
  addNewTodo();
});

newTodoInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addNewTodo();
  }
});

// delete all todos whith done property true
deleteBtn.addEventListener("click", () => {
  todos.forEach((todo) => {
    if (todo.done === true) {
      fetch(`${url}/${todo.id}`, {
        method: "DELETE",
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error("Fehler beim Löschen der Aufgabe");
          }
        })
        .then(() => {
          loadTodos();
        });
    }
  });
});

// fetch data from the todo api
function loadTodos() {
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((apiData) => {
      todos = apiData;
      renderTodos();
    });
}

// Render the todos
function renderTodos() {
  todoListEl.innerHTML = "";
  newTodoInput.value = "";

  todos.forEach((todo) => {
    const list = document.createElement("li");
    const text = document.createTextNode(todo.description);
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    list.appendChild(text);
    todoListEl.appendChild(list);
    list.appendChild(checkbox);

    if (todo.done) {
      checkbox.checked = true;
      list.style.textDecoration = "line-through";
    }

    // when checkbox is clicked call updateDOne function
    checkbox.addEventListener("change", (e) => {
      // select the checked box
      if (e.target.checked) {
        list.style.textDecoration = "line-through";
        checkbox.checked = true;
        checkedValue = list.textContent;

        updateDone();

        // select the unchecked box
      } else if (!e.target.checked) {
        list.style.textDecoration = "none";
        checkbox.checked = false;
        checkedValue = list.textContent;

        updateDone();
      }
    });
  });
}

// add new todos
function addNewTodo() {
  const newTodoText = newTodoInput.value;

  const newTodo = {
    description: newTodoText,
    done: false,
  };

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
  }).then((res) => {
    res.json().then((newTodoFromApi) => {
      todos.push(newTodoFromApi);
      renderTodos();
    });
  });
}

// update the done state of todos
function updateDone() {
  todos.forEach((todo) => {
    if (todo.done === false && todo.description === checkedValue) {
      fetch(`${url}/${todo.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        // define the replacment
        body: JSON.stringify({
          id: todo.id,
          description: todo.description,
          done: true,
        }),
      })
        .then((res) => {
          return res.json();
        })
        .then(() => {
          loadTodos();
        });
    }
  });
}

loadTodos();
