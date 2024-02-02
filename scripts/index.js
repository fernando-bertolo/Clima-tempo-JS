// apiKey: 262b45aa65f2392b60251f5ddf399064
// https://flagsapi.com/:country_code/:style/:size.png

const apiKey = "262b45aa65f2392b60251f5ddf399064";
const apiCountryURL = "https://flagsapi.com/:country_code/:style/:size.png";

//Selectors

const buttonSearch = document.getElementById("search");
const inputCity = document.getElementById("input-city");
const city = document.getElementById("city");
const temperature = document.getElementById("temperature");
const clima = document.getElementById("weather__clima__description");
const umidity = document.getElementById("umidity");
const wind = document.getElementById("wind");


//funções

const getWeatherData = async (city) => {
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=pt_br`;

    const res = fetch(apiURL);
    const data = await res.json();

    console.log(data);
}

function showWeatherData(city){
    getWeatherData(city)
}

//event

buttonSearch.addEventListener("click", (e) => {
    e.preventDefault();
    
    const city = inputCity.value;
    showWeatherData(city)
})
