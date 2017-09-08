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

            $("#city").html(data.city.name);

            $(".row").empty();


            for (var i = 0; i < data.list.length; i++) {

                var html = "<div class='column col-xs-4 text-center'>";
                html +=

                    "<p class='widget'>" + data.list[i].main.temp_max.toFixed(0) + "&deg;F" + " / " + data.list[i].main.temp_min.toFixed(0) + "&deg;F" + "</p>" +

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

     //Map info
    var mapOptions = {
        // Set the zoom level
        zoom: 19,

        // This sets the center of the map at our location
        center: {
            lat:  29.423017,
            lng: -98.48527
        }
    };

    // Render the map
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

    var marker;

        marker = new google.maps.Marker({
            map: map,
            draggable: true,
            animation: google.maps.Animation.DROP,
            position: {lat: 29.423017, lng: -98.48527}
        });
        marker.addListener('click', toggleBounce);

    function toggleBounce() {
        if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
    }

})();