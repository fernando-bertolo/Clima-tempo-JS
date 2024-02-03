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
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const weather__icon = document.getElementById("weather__icon");
const flagCountry = document.getElementById("flagCountry");
const weather__temperature = document.getElementById("weather__temperature");
const body = document.getElementById("body");

//funções

const getWeatherData = async (cityName) => {
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric&lang=pt_br`;

    const res = await fetch(apiURL);
    const data = await res.json();
    return data;
}

const showWeatherData = async (cityName) => {
    const data = await getWeatherData(cityName)
    city.innerText = data.name;
    temperature.innerText = parseInt(data.main.temp);
    clima.innerText = data.weather[0].description;
    humidity.innerText = data.main.humidity + "%";
    wind.innerText = data.wind.speed + " Km/h";
    weather__icon.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`)
    flagCountry.setAttribute("src", `https://flagsapi.com/${data.sys.country}/flat/64.png`)

}

function verifyCity(cityName) {
    if (cityName.length > 8){
        weather__temperature.style.marginTop = "0.8rem";
    }
}

function backgroundImage(){
    const url = "https://source.unsplash.com/random/?mountain";
    fetch(url)
        .then(response => response.url)
        .then(url => {
            body.style.backgroundImage = `url(${url})`;
            body.style.backgroundSize = "cover";    
            console.log("Requisição da imagem feita com sucesso")
        })
        .catch(error =>  {
            console.log("Erro na requisição da imagem");
        })

}

//event
buttonSearch.addEventListener("click", (e) => {
    e.preventDefault();


    const cityName = inputCity.value;
    verifyCity(cityName)
    backgroundImage();
    showWeatherData(cityName)
})
