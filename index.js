function loadPage() {
  let weatherForecast = document.getElementsByClassName("weather-forecast");
  for (let i = 0; i < weatherForecast.length; i++) {
    let headline = document.createElement("div");
    headline.className = "headline";
    headline.textContent = "Прогноз погоды";
    weatherForecast[0].appendChild(headline);

    let weatherForTheDays = document.createElement("div");
    weatherForTheDays.className = "weather-for-the-days";
    weatherForecast[0].appendChild(weatherForTheDays);

    for (let i = 0; i < 5; i++) {
      let weatherForTheDay = document.createElement("div");
      weatherForTheDay.className = "weather-for-the-day";
      weatherForTheDays.appendChild(weatherForTheDay);

      let dayOfTheWeek = document.createElement("div");
      dayOfTheWeek.className = "day-of-the-week";
      dayOfTheWeek.textContent = "Сегодня";
      weatherForTheDay.appendChild(dayOfTheWeek);

      let dayOfTheMonths = document.createElement("div");
      dayOfTheMonths.className = "day-of-the-months";
      dayOfTheMonths.textContent = "2 июня";
      weatherForTheDay.appendChild(dayOfTheMonths);

      let weatherConditionsForImage = document.createElement("div");
      weatherConditionsForImage.className = "weather-conditions-for-image";
      weatherForTheDay.appendChild(weatherConditionsForImage);

      let weatherConditionsImage = document.createElement("img");
      weatherConditionsImage.className = "weather-conditions-image";
      weatherConditionsImage.src = "img/Status-weather-clear-icon.png";
      weatherConditionsImage.alt = "Status weather";
      weatherConditionsForImage.appendChild(weatherConditionsImage);

      let temperatureAfternoon = document.createElement("div");
      temperatureAfternoon.className = "temperature-afternoon";
      temperatureAfternoon.textContent = "Днем";
      weatherForTheDay.appendChild(temperatureAfternoon);

      let temperatureAtNight = document.createElement("div");
      temperatureAtNight.className = "temperature-at-night";
      temperatureAtNight.textContent = "Ночью";
      weatherForTheDay.appendChild(temperatureAtNight);

      let weatherConditions = document.createElement("div");
      weatherConditions.className = "weather-conditions";
      weatherConditions.textContent = "Ясно";
      weatherForTheDay.appendChild(weatherConditions);
    }
  }
}
