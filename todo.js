const toDoForm = document.querySelector(".js-TodoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-TodoList");

let ToDos = [];

function saveToDos() {
  localStorage.setItem("ToDo", JSON.stringify(ToDos));
}

function handelDel(e) {
  const btn = e.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const fiterToDos = ToDos.filter(todo => {
    return todo.id !== parseInt(li.id);
  });
  ToDos = fiterToDos;
  saveToDos();
}

function paintToDos(text) {
  const newId = ToDos.length + 1;
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  delBtn.innerText = "X";
  delBtn.addEventListener("click", handelDel);
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    id: newId,
    text: text
  };
  ToDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(e) {
  e.preventDefault();
  const InputValue = toDoInput.value;
  paintToDos(InputValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem("ToDo");
  const parseToDos = JSON.parse(loadedToDos);
  if (loadedToDos !== null) {
    parseToDos.map(todo => {
      paintToDos(todo.text);
    });
  } else {
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}
init();
