(function (){

    "use strict";

    // $.get("http://api.openweathermap.org/data/2.5/weather", {
    //     APPID: "d7644df1bd81b58179c9fd1652348105",
    //     lat: 29.427053,
    //     lon: -98.489545,
    //     units: "imperial",
    // })
        // .done(function(data) {
        // console.log(data);

    //data.forEach(function(weather){
    //     $("#temperature").append(data.main.temp_max + "&deg;F" + " / "+ data.main.temp_min + "&deg;F");
    //     $("#icon").append("<img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png'>");
    //     $("#forecast").append("<strong>" + data.weather[0].main + ": </strong>" + data.weather[0].description);
    //     $("#humidity").append("<strong>Humidity: </strong>" + data.main.humidity);
    //     $("#wind").append("<strong>Wind: </strong>" + data.wind.speed);
    //     $("#pressure").append("<strong>Pressure: </strong>" + data.main.pressure);


        // })
    // });


     //Daily forecast info
    $.get("http://api.openweathermap.org/data/2.5/forecast", {
         APPID: "d7644df1bd81b58179c9fd1652348105",
        lat:    29.423017,
        lon:   -98.48527,
        units: "imperial",
        cnt: 3
    }).done(function(data) {
        console.log(data);
         $("#temperature").append(data.main.temp_max + "&deg;F" + " / "+ data.main.temp_min + "&deg;F");
         $("#icon").append("<img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png'>");
         $("#forecast").append("<strong>" + data.weather[0].main + ": </strong>" + data.weather[0].description);
         $("#humidity").append("<strong>Humidity: </strong>" + data.main.humidity);
         $("#wind").append("<strong>Wind: </strong>" + data.wind.speed);
         $("#pressure").append("<strong>Pressure: </strong>" + data.main.pressure);
    });


})();