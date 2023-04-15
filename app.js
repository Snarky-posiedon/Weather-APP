
var btn = document.getElementById("btn");
var city = document.getElementById("city");
var sky = document.getElementById("sky");
var temp = document.getElementById("temp");
var wind = document.getElementById("wind");
var submit_button= document.getElementById("submit");
var icon = document.getElementById("icon");


submit_button.addEventListener('click',getweather);
 function getweather(){
    let cityname=document.getElementById('cityname').value;
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=f523a42736d59b9d43d3f8badc4cb3ce`)
    .then(response =>response.json())   
    .then(response =>{
         city.innerHTML = response.name;
         sky.innerHTML = response.weather[0].main;  
         temp.innerHTML= String(Math.round(Number(response.main.temp)-273),2)+"°C";
         wind.innerHTML = response.wind.speed;

         // set weather icon
         var iconCode = response.weather[0].icon;
         var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
         icon.innerHTML = "<img src='" + iconUrl  + "'>";

    })
 }

