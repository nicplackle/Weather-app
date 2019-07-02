const apiKey = "341c152ad8148fb049b9303a7f3c2b4a";
const imgLink = "http://openweathermap.org/img/wn/";

const userInput = document.getElementById("user-input");
const button = document.getElementById("button");
const locationOutput = document.getElementById("location");
const icons = document.getElementsByClassName("icon");
const temperature = document.getElementsByClassName("temperature");
const ENTERKEY = 13;

userInput.addEventListener("keyup", e => {
  if (e.keyCode === ENTERKEY) {
    e.preventDefault();
    button.click();
  }
});

button.addEventListener("click", () => {
  let city = userInput.value;
  $.getJSON(
    `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=341c152ad8148fb049b9303a7f3c2b4a`,
    data => {
      locationOutput.innerHTML = `${data.city.name},${data.city.country}`;

      // add an icon to each card
      for (i = 0, d = 0; i < icons.length; i++, d += 8) {
        icons[i].setAttribute(
          "src",
          `${imgLink}${data.list[d].weather[0].icon}.png`
        );
      }

      // add temperature to each card
      for (t = 0, d = 0; t < icons.length; t++, d += 8) {
        temperature[t].innerHTML = `${Math.floor(data.list[d].main.temp)}°C`;
      }
    }
  );
});
