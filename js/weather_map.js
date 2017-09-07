(function (){

    "use strict";

    $.get("http://api.openweathermap.org/data/2.5/weather", {
        APPID: "d7644df1bd81b58179c9fd1652348105",
        lat: 29.427053,
        lon: -98.489545,
        units: "imperial"
    }).done(function(data) {
        console.log(data);

    data.





    });


    // Daily forecast info
    // $.get("http://api.openweathermap.org/data/2.5/forecast/daily", {
    //     APPID: "d7644df1bd81b58179c9fd1652348105",
    //     lat:    29.423017,
    //     lon:   -98.48527,
    //     units: "imperial"
    // }).done(function(data) {
    //     console.log(data);
    // });

})();