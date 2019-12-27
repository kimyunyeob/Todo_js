const body = document.querySelector("body");
const imgsNumber = 6;

function paintImg(imgNumber) {
  const img = new Image();
  img.src = `images/${imgNumber + 1}.jpg`;
  img.classList.add("bgImg");
  body.prepend(img);
}

function randomNumber() {
  const number = Math.floor(Math.random() * imgsNumber);
  return number;
}

function init() {
  const imgNumber = randomNumber();
  paintImg(imgNumber);
}
init();
