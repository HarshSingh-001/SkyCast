const apiKey = "c43aab1fc2702ce6185a000df27dc157";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {

  const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {

    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";
    document.querySelector(".city").innerHTML = data.name;



    if (data.weather[0].main == "Cloud") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    }


    document.querySelector(".error").style.display = "none"; // Fixed
    document.querySelector(".weather").style.display = "block"; // Ensure weather section is visible
  }
}


searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});


searchBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      checkWeather(searchBox.value); 
    }
  });

checkWeather(city);
