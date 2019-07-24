const DATA = [
  {
    date: 1562011200000,
    temperature: { night: 21, day: 29 },
    cloudiness: "Ясно",
    snow: false,
    rain: false
  },
  {
    date: 1562097600000,
    temperature: { night: 21, day: 28 },
    cloudiness: "Облачно",
    snow: false,
    rain: false
  },
  {
    date: 1562184000000,
    temperature: { night: 19, day: 27 },
    cloudiness: "Облачно",
    snow: false,
    rain: false
  },
  {
    date: 1562270400000,
    temperature: { night: 21, day: 28 },
    cloudiness: "Ясно",
    snow: false,
    rain: false
  },
  {
    date: 1562356800000,
    temperature: { night: 21, day: 28 },
    cloudiness: "Облачно",
    snow: false,
    rain: false
  },
  {
    date: 1562443200000,
    temperature: { night: 22, day: 30 },
    cloudiness: "Ясно",
    snow: false,
    rain: false
  },
  {
    date: 1562529600000,
    temperature: { night: 17, day: 28 },
    cloudiness: "Облачно",
    snow: false,
    rain: false
  },
  {
    date: 1562616000000,
    temperature: { night: 23, day: 30 },
    cloudiness: "Ясно",
    snow: false,
    rain: false
  },
  {
    date: 1562702400000,
    temperature: { night: 12, day: 21 },
    cloudiness: "Облачно",
    snow: false,
    rain: true
  },
  {
    date: 1562788800000,
    temperature: { night: 23, day: 28 },
    cloudiness: "Ясно",
    snow: false,
    rain: false
  },
  {
    date: 1562875200000,
    temperature: { night: 20, day: 29 },
    cloudiness: "Облачно",
    snow: false,
    rain: false
  },
  {
    date: 1562961600000,
    temperature: { night: 21, day: 27 },
    cloudiness: "Ясно",
    snow: false,
    rain: false
  },
  {
    date: 1563048000000,
    temperature: { night: 19, day: 27 },
    cloudiness: "Облачно",
    snow: false,
    rain: false
  },
  {
    date: 1563134400000,
    temperature: { night: 20, day: 30 },
    cloudiness: "Ясно",
    snow: false,
    rain: false
  },
  {
    date: 1563220800000,
    temperature: { night: 17, day: 25 },
    cloudiness: "Облачно",
    snow: false,
    rain: false
  },
  {
    date: 1563307200000,
    temperature: { night: 18, day: 26 },
    cloudiness: "Ясно",
    snow: false,
    rain: false
  },
  {
    date: 1563393600000,
    temperature: { night: 19, day: 24 },
    cloudiness: "Облачно",
    snow: false,
    rain: false
  },
  {
    date: 1563480000000,
    temperature: { night: 20, day: 24 },
    cloudiness: "Облачно",
    snow: false,
    rain: false
  },
  {
    date: 1563566400000,
    temperature: { night: 16, day: 29 },
    cloudiness: "Облачно",
    snow: false,
    rain: false
  },
  {
    date: 1563652800000,
    temperature: { night: 19, day: 30 },
    cloudiness: "Ясно",
    snow: false,
    rain: false
  },
  {
    date: 1563739200000,
    temperature: { night: 22, day: 27 },
    cloudiness: "Ясно",
    snow: false,
    rain: false
  },
  {
    date: 1563825600000,
    temperature: { night: 18, day: 26 },
    cloudiness: "Ясно",
    snow: false,
    rain: false
  },
  {
    date: 1563912000000,
    temperature: { night: 16, day: 29 },
    cloudiness: "Облачно",
    snow: false,
    rain: false
  },
  {
    date: 1563998400000,
    temperature: { night: 18, day: 27 },
    cloudiness: "Ясно",
    snow: false,
    rain: false
  },
  {
    date: 1564084800000,
    temperature: { night: 21, day: 26 },
    cloudiness: "Облачно",
    snow: false,
    rain: false
  },
  {
    date: 1564171200000,
    temperature: { night: 12, day: 20 },
    cloudiness: "Облачно",
    snow: false,
    rain: true
  },
  {
    date: 1564257600000,
    temperature: { night: 6, day: 14 },
    cloudiness: "Облачно",
    snow: true,
    rain: false
  },
  {
    date: 1564344000000,
    temperature: { night: 20, day: 28 },
    cloudiness: "Ясно",
    snow: false,
    rain: false
  },
  {
    date: 1564430400000,
    temperature: { night: 21, day: 24 },
    cloudiness: "Облачно",
    snow: false,
    rain: false
  },
  {
    date: 1564516800000,
    temperature: { night: 20, day: 29 },
    cloudiness: "Ясно",
    snow: false,
    rain: false
  },
  {
    date: 1564603200000,
    temperature: { night: 20, day: 25 },
    cloudiness: "Облачно",
    snow: false,
    rain: false
  },
  {
    date: 1564689600000,
    temperature: { night: 14, day: 16 },
    cloudiness: "Облачно",
    snow: false,
    rain: true
  },
  {
    date: 1564776000000,
    temperature: { night: 18, day: 29 },
    cloudiness: "Ясно",
    snow: false,
    rain: false
  },
  {
    date: 1564862400000,
    temperature: { night: 20, day: 25 },
    cloudiness: "Облачно",
    snow: false,
    rain: false
  },
  {
    date: 1564948800000,
    temperature: { night: 18, day: 30 },
    cloudiness: "Ясно",
    snow: false,
    rain: false
  },
  {
    date: 1565035200000,
    temperature: { night: 17, day: 24 },
    cloudiness: "Облачно",
    snow: false,
    rain: false
  },
  {
    date: 1565121600000,
    temperature: { night: 17, day: 25 },
    cloudiness: "Облачно",
    snow: false,
    rain: false
  },
  {
    date: 1565208000000,
    temperature: { night: 21, day: 28 },
    cloudiness: "Облачно",
    snow: false,
    rain: false
  },
  {
    date: 1565294400000,
    temperature: { night: 22, day: 28 },
    cloudiness: "Ясно",
    snow: false,
    rain: false
  },
  {
    date: 1565380800000,
    temperature: { night: 19, day: 26 },
    cloudiness: "Ясно",
    snow: false,
    rain: false
  },
  {
    date: 1565467200000,
    temperature: { night: 19, day: 28 },
    cloudiness: "Ясно",
    snow: false,
    rain: false
  },
  {
    date: 1565553600000,
    temperature: { night: 12, day: 17 },
    cloudiness: "Облачно",
    snow: false,
    rain: true
  },
  {
    date: 1565640000000,
    temperature: { night: 13, day: 21 },
    cloudiness: "Облачно",
    snow: false,
    rain: true
  },
  {
    date: 1565726400000,
    temperature: { night: 14, day: 20 },
    cloudiness: "Облачно",
    snow: false,
    rain: true
  },
  {
    date: 1565812800000,
    temperature: { night: 12, day: 22 },
    cloudiness: "Облачно",
    snow: false,
    rain: true
  },
  {
    date: 1565899200000,
    temperature: { night: 13, day: 21 },
    cloudiness: "Облачно",
    snow: false,
    rain: true
  },
  {
    date: 1565985600000,
    temperature: { night: 17, day: 30 },
    cloudiness: "Облачно",
    snow: false,
    rain: false
  },
  {
    date: 1566072000000,
    temperature: { night: 22, day: 26 },
    cloudiness: "Ясно",
    snow: false,
    rain: false
  },
  {
    date: 1566158400000,
    temperature: { night: 16, day: 29 },
    cloudiness: "Облачно",
    snow: false,
    rain: false
  },
  {
    date: 1566244800000,
    temperature: { night: 21, day: 26 },
    cloudiness: "Ясно",
    snow: false,
    rain: false
  },
  {
    date: 1566331200000,
    temperature: { night: 14, day: 21 },
    cloudiness: "Облачно",
    snow: false,
    rain: true
  },
  {
    date: 1566417600000,
    temperature: { night: 22, day: 29 },
    cloudiness: "Ясно",
    snow: false,
    rain: false
  },
  {
    date: 1566504000000,
    temperature: { night: 16, day: 27 },
    cloudiness: "Облачно",
    snow: false,
    rain: false
  },
  {
    date: 1566590400000,
    temperature: { night: 23, day: 29 },
    cloudiness: "Ясно",
    snow: false,
    rain: false
  },
  {
    date: 1566676800000,
    temperature: { night: 12, day: 16 },
    cloudiness: "Облачно",
    snow: false,
    rain: true
  },
  {
    date: 1566763200000,
    temperature: { night: 18, day: 27 },
    cloudiness: "Ясно",
    snow: false,
    rain: false
  },
  {
    date: 1566849600000,
    temperature: { night: 17, day: 29 },
    cloudiness: "Облачно",
    snow: false,
    rain: false
  },
  {
    date: 1566936000000,
    temperature: { night: 21, day: 26 },
    cloudiness: "Ясно",
    snow: false,
    rain: false
  },
  {
    date: 1567022400000,
    temperature: { night: 12, day: 18 },
    cloudiness: "Облачно",
    snow: false,
    rain: true
  },
  {
    date: 1567108800000,
    temperature: { night: 20, day: 29 },
    cloudiness: "Ясно",
    snow: false,
    rain: false
  },
  {}
];
const MSEC_IN_DAY = 86400000;
const numberOfCards = 4;
const LOWERVALUE = 0; //lower range value; today = 0
const UPPERVALUE = 5; //upper range value; today = 0
let minWeatherCard = 0; // day of the first card relative to today = 0
let maxWeatherCard = minWeatherCard + numberOfCards;

function statusImg(cloudiness, snow, rain) {
  if (snow) {
    return "img/Status-weather-snow-scattered-icon.png";
  } else if (rain) {
    return "img/Status-weather-showers-scattered-icon.png";
  } else if (cloudiness === "Облачно") {
    return "img/Status-weather-many-clouds-icon.png";
  } else {
    return "img/Status-weather-clear-icon.png";
  }
}

function status(cloudiness, snow, rain) {
  if (snow === true) {
    return "Снег";
  } else if (rain === true) {
    return "Дождь";
  } else if (cloudiness === "Облачно") {
    return "Без осадков";
  } else {
    return "Без осадков";
  }
}

function isToday(today) {
  let currentTime = new Date();
  if (
    currentTime.getFullYear() === today.getFullYear() &&
    currentTime.getMonth() === today.getMonth() &&
    currentTime.getDate() === today.getDate()
  ) {
    return true;
  } else {
    return false;
  }
}

function dayOfTheWeekNames(today) {
  const array = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота"
  ];
  return array[today.getDay()];
}

function monthNames(today) {
  const array = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря"
  ];
  return array[today.getMonth()];
}

function reloadPage() {
  let weatherForecast = document.getElementsByClassName("weather-forecast");
  let weatherForTheDays = document.getElementsByClassName(
    "weather-for-the-days"
  );
  let headline = document.getElementsByClassName("headline");

  weatherForecast[0].removeChild(weatherForTheDays[0]);
  weatherForecast[0].removeChild(headline[0]);
  loadPage();
}

function goLeft() {
  if (minWeatherCard <= LOWERVALUE) {
    return null;
  } else {
    minWeatherCard--;
    maxWeatherCard--;
    reloadPage();
  }
}

function goRight() {
  if (maxWeatherCard >= UPPERVALUE) {
    return null;
  } else {
    minWeatherCard++;
    maxWeatherCard++;
    reloadPage();
  }
}

function weatherCardsItem(
  timestampDay,
  tempAfternoon,
  tempAtNight,
  cloudiness,
  snow,
  rain
) {
  let weatherForTheDays = document.getElementsByClassName(
    "weather-for-the-days"
  );
  let weatherForTheDay = document.createElement("div");
  weatherForTheDay.className = "weather-for-the-day";
  weatherForTheDays[0].appendChild(weatherForTheDay);

  let dayOfTheWeek = document.createElement("div");
  dayOfTheWeek.className = "day-of-the-week";
  weatherForTheDay.appendChild(dayOfTheWeek);

  let dayOfTheWeekH5 = document.createElement("h5");
  dayOfTheWeekH5.textContent = isToday(timestampDay)
    ? "Сегодня"
    : dayOfTheWeekNames(timestampDay);
  dayOfTheWeek.appendChild(dayOfTheWeekH5);

  let dayOfTheMonths = document.createElement("div");
  dayOfTheMonths.className = "day-of-the-months";
  weatherForTheDay.appendChild(dayOfTheMonths);

  let dayOfTheMonthsH2 = document.createElement("h2");
  dayOfTheMonthsH2.textContent =
    timestampDay.getDate() + " " + monthNames(timestampDay);
  dayOfTheMonths.appendChild(dayOfTheMonthsH2);

  let weatherConditionsForImage = document.createElement("div");
  weatherConditionsForImage.className = "weather-conditions-for-image";
  weatherForTheDay.appendChild(weatherConditionsForImage);

  let weatherConditionsImage = document.createElement("img");
  weatherConditionsImage.className = "weather-conditions-image";
  weatherConditionsImage.src = statusImg(cloudiness, snow, rain);
  weatherConditionsImage.alt = "Status weather";
  weatherConditionsForImage.appendChild(weatherConditionsImage);

  let temperatureAfternoon = document.createElement("div");
  temperatureAfternoon.className = "temperature-afternoon";
  weatherForTheDay.appendChild(temperatureAfternoon);

  let temperatureAfternoonH3 = document.createElement("h3");
  temperatureAfternoonH3.textContent =
    tempAfternoon > 0
      ? "Днем +" + tempAfternoon + "°C"
      : "Днем " + tempAfternoon + "°C";
  temperatureAfternoon.appendChild(temperatureAfternoonH3);

  let temperatureAtNight = document.createElement("div");
  temperatureAtNight.className = "temperature-at-night";
  weatherForTheDay.appendChild(temperatureAtNight);

  let temperatureAfternoonH4 = document.createElement("h4");
  temperatureAfternoonH4.textContent =
    tempAfternoon > 0
      ? "Ночью +" + tempAtNight + "°C"
      : "Ночью " + tempAtNight + "°C";
  temperatureAfternoon.appendChild(temperatureAfternoonH4);

  let weatherConditions = document.createElement("div");
  weatherConditions.className = "weather-conditions";
  weatherForTheDay.appendChild(weatherConditions);

  let weatherConditionsH51 = document.createElement("h5");
  weatherConditionsH51.textContent = cloudiness + ",";
  weatherConditions.appendChild(weatherConditionsH51);

  let weatherConditionsH52 = document.createElement("h5");
  weatherConditionsH52.textContent = status(cloudiness, snow, rain);
  weatherConditions.appendChild(weatherConditionsH52);
}

function weatherCards() {
  let currentTimeNow = new Date();
  let year = currentTimeNow.getFullYear();
  let month = currentTimeNow.getMonth();
  let day = currentTimeNow.getDate();
  let dateToday = new Date(year, month, day);
  let timestampToday = dateToday.setDate(dateToday.getDate());

  for (let j = minWeatherCard; j < maxWeatherCard; j++) {
    for (let i = 0; i < DATA.length; i++) {
      let timestampDay = new Date(timestampToday + j * MSEC_IN_DAY);
      if (timestampToday + j * MSEC_IN_DAY === DATA[i]["date"]) {
        let tempAfternoon = String(DATA[i]["temperature"]["day"]);
        let tempAtNight = String(DATA[i]["temperature"]["night"]);
        let cloudiness = String(DATA[i]["cloudiness"]);
        let snow = DATA[i]["snow"];
        let rain = DATA[i]["rain"];
        weatherCardsItem(
          timestampDay,
          tempAfternoon,
          tempAtNight,
          cloudiness,
          snow,
          rain
        );
      }
    }
  }
}

function loadPage() {
  let weatherForecast = document.getElementsByClassName("weather-forecast");

  let headline = document.createElement("div");
  headline.className = "headline";
  weatherForecast[0].appendChild(headline);

  let headlineH1 = document.createElement("h1");
  headlineH1.textContent = "Прогноз погоды";
  headline.appendChild(headlineH1);

  let headlineH5 = document.createElement("h5");
  headlineH5.textContent =
    "Самара, " +
    new Date().getDate() +
    " " +
    monthNames(new Date()) +
    ", " +
    dayOfTheWeekNames(new Date());
  headline.appendChild(headlineH5);

  let weatherForTheDays = document.createElement("div");
  weatherForTheDays.className = "weather-for-the-days";
  weatherForecast[0].appendChild(weatherForTheDays);

  let arrowLeft = document.createElement("div");
  arrowLeft.className =
    minWeatherCard <= LOWERVALUE
      ? "arrow-left arrow-left--no-active"
      : "arrow-left";
  arrowLeft.onclick = function() {
    goLeft();
  };
  weatherForTheDays.appendChild(arrowLeft);

  weatherCards();

  let arrowRight = document.createElement("div");
  arrowRight.className =
    maxWeatherCard >= UPPERVALUE
      ? "arrow-right arrow-right--no-active"
      : "arrow-right";
  arrowRight.onclick = function() {
    goRight();
  };
  weatherForTheDays.appendChild(arrowRight);
}
