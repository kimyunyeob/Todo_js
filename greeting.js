const greetingForm = document.querySelector(".js-form"),
  input = greetingForm.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

function saveName(text) {
  localStorage.setItem("currentUser", text);
}

function handleSubmit(e) {
  e.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  greetingForm.classList.add("showing");
  greetingForm.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  greetingForm.classList.remove("showing");
  greeting.classList.add("showing");
  greeting.innerHTML = `Hello ${text}`;
}

function init() {
  const currentUser = localStorage.getItem("currentUser");
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}
init();
