const API_KEY = "bd98a6326e0fc53894a7147b00d6c601";
const weather = document.querySelector(".js-weather");

function getWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
    .then(response => {
      return response.json();
    })
    .then(json => {
      const temp = json.main.temp;
      const name = json.name;
      const city = json.sys.country;
      weather.innerText = `${city} @ ${name} @ ${temp}˚`;
    });
}

function saveCoords(coordsObj) {
  localStorage.setItem("coords", JSON.stringify(coordsObj));
}

function handleCoordSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

function handleCoordError() {
  console.log("위치 정보를 허용해주세요.");
  alert("위치 정보를 허용해주세요.");
}

function askCoords() {
  navigator.geolocation.getCurrentPosition(
    handleCoordSuccess,
    handleCoordError
  );
}

function loadCoords() {
  const loadedCoords = localStorage.getItem("coords");
  if (loadedCoords === null) {
    askCoords();
  } else {
    const parsedCoords = JSON.parse(loadedCoords);
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
}

function init() {
  loadCoords();
}
init();
