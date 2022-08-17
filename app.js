const API_KEY = `5457eebcbb799bea283610d7e836d3ac`;

const searchTemperature =async () => {
    const cityName = document.getElementById("city-name").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;
    const res =await fetch(url);
    const data =await res.json();
    displayTemp(data);
};

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
};


const displayTemp = temperature => {
    setInnerText("city", temperature.name);
    setInnerText("temp", temperature.main.temp);
    setInnerText("weather-view", temperature.weather[0].main);
    // set weather icon
    const url = `https://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById("weather-icon");
    imgIcon.setAttribute("src", url);
    // console.log(temperature);

}