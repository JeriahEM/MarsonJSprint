
let currentDay = document.getElementById("currentDay");
let descript = document.getElementById("descript");
let icon = document.getElementById("icon");
let tempMin = document.getElementById("tempMin");
// let tempMax = documnet.GetElementById("tempMax");


fetch(`https://api.openweathermap.org/data/2.5/weather?q=Stockton&appid=72cec1161d6381d458f5adde5ea24073&units=imperial`)
    .then((response)=>{

        return response.json();
    })
  
    .then((data => currentDay.innerHTML =  Math.floor(data.main.feels_like)+ "°F"))








    navigator.geolocation.getCurrentPosition(success, errorFunc)
    //You can think of this as an if statement if user runs success else we run errorFunc
    
    //Example of the geolocation object below
    {
        coords: {
            latitude: 32.1234;
            longitude: 13.1234;
        }
    }
    
    //If user accepts we run success function
    function success(position){
        console.log("Our Latitude: " + position.coords.latitude);
        console.log("our Longitude: " + position.coords.longitude);
    
    }
    //If user denies we run error function
    function errorFunc(error){
    console.log(error.message);
    }
    









     fetch(`https://api.openweathermap.org/data/2.5/weather?q=Stockton&appid=72cec1161d6381d458f5adde5ea24073&units=imperial`)
    .then((response)=>{

        return response.json();
    })
  
    .then((data => descript.innerHTML =  Math.floor(data.weather[2].description)))

     fetch(`https://api.openweathermap.org/data/2.5/weather?q=Stockton&appid=72cec1161d6381d458f5adde5ea24073&units=imperial`)
    .then((response)=>{

        return response.json();
    })
  
    .then((data => tempMin.innerHTML =  "↓"+ Math.floor(data.main.temp_min)+ "°F"))

     fetch(`https://api.openweathermap.org/data/2.5/weather?q=Stockton&appid=72cec1161d6381d458f5adde5ea24073&units=imperial`)
    .then((response)=>{

        return response.json();
    })
  
    .then((data => tempMax.innerHTML =  "↑" + Math.floor(data.main.temp_max)+ "°F"))

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Stockton&appid=72cec1161d6381d458f5adde5ea24073&units=imperial`)
    .then((response)=>{
        return response.json();
    })

    .then((data => icon.innerHTML = Math.floor(data.weather[3].icon)))