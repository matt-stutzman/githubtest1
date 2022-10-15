document.getElementById("stockSubmit").addEventListener("click", function(event) {
    event.preventDefault();
    const value = document.getElementById("stockInput").value;
    console.log("Running");
    if (value === "")
        return;
    console.log(value);
    const url = "https://api.kanye.rest/";
    // const url = "https://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial" + "&APPID=38693ed7ce49fcdabbdf2c21e592565f";
    /*global fetch*/
    fetch(url)
        .then(function(response) {
            console.log(response);
            return response.json();
        }).then(function(json) {
            let results = "";
            
            
            // results += '<h2 class="h2title">Weather in ' + json.name + "</h2>";
            // results += "<div class = 'resultsbox'>";
            // results += "<div class = 'resultsboxsmall'>";
            // for (let i = 0; i < json.weather.length; i++) {
            //     results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
            // }
            // results += '<h2>' + json.main.temp + " &deg;F</h2>";
            // results += "<p class='description'>";
            // for (let i = 0; i < json.weather.length; i++) {
            //     results += json.weather[i].description;
            //     if (i !== json.weather.length - 1)
            //         results += ", ";
            // }
            
            document.getElementById("weatherResults").innerHTML = results;
        });
    // const url2 = "https://api.openweathermap.org/data/2.5/forecast?q=" + value + ", US&units=imperial" + "&APPID=38693ed7ce49fcdabbdf2c21e592565f";
    // fetch(url2)
    //     .then(function(response) {
    //         return response.json();
    //     }).then(function(json) {
    //         console.log(json);
    //         let forecast = "";
    //         forecast += "<br>";
    //         for (let i = 0; i < json.list.length; i++) {
    //             /*global moment*/
    //             forecast += "<div class='forecast'>";
    //             forecast += "<h2 class = 'date'>" + moment(json.list[i].dt_txt).format('MMMM Do YYYY, h:mm:ss a') + "</h2>";
    //             forecast += "<div class = 'pimgbox'>";
    //             forecast += "<p>Temperature: " + json.list[i].main.temp + " degrees" + "</p>";
    //             forecast += '<img src="http://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/>';
    //             forecast += "</div>";
    //             forecast += "<div class ='cloudbox'>";
    //             forecast += "It will be " + json.list[i].clouds.all + "% cloudy.";
    //             forecast += "</div>";
    //             forecast += "</div>";
    //         }
            
    //         document.getElementById("forecastResults").innerHTML = forecast;
    //     });
});

//api key == WHLRIE9J6GWOI0HW for alphavantage stock api