document.getElementById("stockSubmit").addEventListener("click", function(event) {
    event.preventDefault();
    const value = document.getElementById("stockInput").value;
    console.log("Running");
    if (value === "")
        return;
    console.log(value);
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial" + "&APPID=38693ed7ce49fcdabbdf2c21e592565f";
    /*global fetch*/
    fetch(url)
        .then(function(response) {
            console.log(response);
            return response.json();
        }).then(function(json) {
            let results = "";
            results += '<h2 class="h2title">Weather in ' + json.name + "</h2>";
            results += "<div class = 'resultsbox'>";
            results += "<div class = 'resultsboxsmall'>";
            for (let i = 0; i < json.weather.length; i++) {
                results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
            }
            results += '<h2>' + json.main.temp + " &deg;F</h2>";
            results += "<p class='description'>";
            for (let i = 0; i < json.weather.length; i++) {
                results += json.weather[i].description;
                if (i !== json.weather.length - 1)
                    results += ", ";
            }
            results += "</p>";
            results += "</div>";
            results += "<p>";
            results += "It feels like " + json.main.temp + " degrees.";
            results += "<br>";
            results += "<br>";
            results += "With " + json.wind.speed + " mph winds.";
            results += "<br>";
            results += "<br>";
            var windDirection = json.wind.deg;
            //print wind direction
            if((windDirection > 0) && (windDirection < 23)){
                results += "The wind is blowing from the north, heading south.";
            }
            if((windDirection >= 23) && (windDirection < 68)){
                results += "The wind is blowing from the north-east, heading south-west.";
            }
            if((windDirection >= 69) && (windDirection < 112)){
                results += "The wind is blowing from the east, heading west.";
            }
            if((windDirection >= 112) && (windDirection < 158)){
                results += "The wind is blowing from the south-east, heading north-west.";
            }
            if((windDirection >= 158) && (windDirection < 202)){
                results += "The wind is blowing from the south, heading north.";
            }
            if((windDirection >= 202) && (windDirection < 247)){
                results += "The wind is blowing from the south-west, heading north-east.";
            }
            if((windDirection >= 247) && (windDirection < 292)){
                results += "The wind is blowing from the west, heading east.";
            }
            if((windDirection >= 292) && (windDirection < 337)){
                results += "The wind is blowing from the north-west, heading south-east.";
            }
            if((windDirection >= 337)){
                results += "The wind is blowing from the north, heading south.";
            }
            results += "</p>";
            results += "</div>";
            document.getElementById("weatherResults").innerHTML = results;
        });
    const url2 = "https://api.openweathermap.org/data/2.5/forecast?q=" + value + ", US&units=imperial" + "&APPID=38693ed7ce49fcdabbdf2c21e592565f";
    fetch(url2)
        .then(function(response) {
            return response.json();
        }).then(function(json) {
            console.log(json);
            let forecast = "";
            forecast += "<br>";
            for (let i = 0; i < json.list.length; i++) {
                /*global moment*/
                forecast += "<div class='forecast'>";
                forecast += "<h2 class = 'date'>" + moment(json.list[i].dt_txt).format('MMMM Do YYYY, h:mm:ss a') + "</h2>";
                forecast += "<div class = 'pimgbox'>";
                forecast += "<p>Temperature: " + json.list[i].main.temp + " degrees" + "</p>";
                forecast += '<img src="http://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/>';
                forecast += "</div>";
                forecast += "<div class ='cloudbox'>";
                forecast += "It will be " + json.list[i].clouds.all + "% cloudy.";
                forecast += "</div>";
                forecast += "</div>";
            }
            
            document.getElementById("forecastResults").innerHTML = forecast;
        });
});

//api key == WHLRIE9J6GWOI0HW for alphavantage stock api