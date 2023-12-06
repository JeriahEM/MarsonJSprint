
let day = document.getElementById("day");


//fetch("https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=72cec1161d6381d458f5adde5ea24073")
fetch(`https://api.openweathermap.org/data/2.5/weather?q=Stockton&appid=72cec1161d6381d458f5adde5ea24073&units=imperial`)
    .then((response)=>{
        //using JSON method to parse into json data
        return response.json();
    })
  
    .then((data => day.innerHTML =  Math.floor(data.main.feels_like)+ "°"))