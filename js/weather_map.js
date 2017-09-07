(function (){

    "use strict";

    getWeather(29.423017, -98.48527);

    $("#button").click(function(event){
        event.preventDefault();
        var lat = $("#lat").val();
        var lon = $("#lon").val();

        getWeather(lat, lon);
    });


    function getWeather(lat, lon) {
        $.get("http://api.openweathermap.org/data/2.5/forecast", {
            APPID: "d7644df1bd81b58179c9fd1652348105",
            lat: lat,
            lon: lon,
            units: "imperial",
            cnt: 3
        }).done(function(data) {

            console.log(data);




            for (var i = 0; i < data.list.length; i++) {


                var html = "<div class='col-xs-4'>";
                html +=

                    "<p class='widget'>" + data.list[i].main.temp_max + "&deg;F" + " / " + data.list[i].main.temp_min + "&deg;F" + "</p>" +

                    "<p class='widget'>" + "<img src='http://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png'>" +

                    "<p class='widget'><strong>" + data.list[i].weather[0].main + ": </strong>" + data.list[i].weather[0].description + "</p>" +

                    "<p class='widget'>" + "<strong>Humidity: </strong>" + data.list[i].main.humidity + "</p>" +

                    "<p class='widget'><strong>Wind: </strong>" + data.list[i].wind.speed + "</p>" +

                    "<p class='widget'><strong>Pressure: </strong>" + data.list[i].main.pressure +

                    "</p></div>";

                $(".row").append(html);

            }
        });
    }

     //Daily forecast info



})();