//Date and Time
let now = new Date();

let date = now.getDate();
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let year = now.getFullYear();
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let month = months[now.getMonth()].toUpperCase();

let formattedTime = `${month} ${date} ${year} ${hours}:${minutes}`;

let currentTime = document.querySelector("#current-time");
currentTime.innerHTML = formattedTime;

//Search Input
function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  //console.log(searchInput.value);
  let h1 = document.querySelector("h1");

  if (searchInput.value) {
    h1.innerHTML = `${searchInput.value}`;
  } else {
    h1.innerHTML = null;
    alert(`Please type a city.`);
  }
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

//Celcius / Fahrenheit
function changeTemperatureUnits(event) {
  let currentTemperature = document.querySelector("#temperature");
  //event.preventDefault();
  if ((event.target = "#celcius-link")) {
    currentTemperature.innerHTML = "19";
  } else if ((event.target = "#fahrenheit-link")) {
    currentTemperature.innerHTML = "66";
  }
}

let temperature = document.querySelector("#temperature");

temperature.addEventListener("click", changeTemperatureUnits);

//Answer on SheCodes
/*
let city = prompt("Enter a city?");
city = city.toLowerCase();
if (weather[city] !== undefined) {
  let temperature = weather[city].temp;
  let humidity = weather[city].humidity;
  let celsiusTemperature = Math.round(temperature);
  let fahrenheitTemperature = Math.round((temperature * 9) / 5 + 32);

  alert(
    `It is currently ${celsiusTemperature}°C (${fahrenheitTemperature}°F) in ${city} with a humidity of ${humidity}%`
  );
} else {
  alert(
    `Sorry we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
  );
}
*/
