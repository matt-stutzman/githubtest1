document.getElementById("stockSubmit").addEventListener("click", function(event) {
    event.preventDefault();
    // const value = document.getElementById("stockInput").value;
    console.log("Running");
    // if (value === "")
    //     return;
    // console.log(value);
    const url = "https://api.goprogram.ai/inspiration";
    /*global fetch*/
    fetch(url)
        .then(function(response) {
            console.log(response);
            return response.json();
        }).then(function(json) {
            let results = "";
            
            results += json.quote;
            results += "<br> -";
            results += json.author;
            
            document.getElementById("stockResults").innerHTML = results;
        });
});






// document.getElementById("stockSubmit").addEventListener("click", function(event) {
//     event.preventDefault();
//     const value = document.getElementById("stockInput").value;
//     console.log("Running");
//     if (value === "")
//         return;
//     console.log(value);
//     const url = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=" + value + "&interval=5min&apikey=WHLRIE9J6GWOI0HW";
//     //Instead of symbol = IBM above, it should be '...symbol=' +  value + '&interval...'
    
    
//     //Below are two versions of how to load the API. 
//     //I think there is a CORS problem with at least the first one. 
//     // The global fetch might also be able to work. I think it isn't too far off. 
    
// //     /*global request */
// //     request.get({
// //     url: url,
// //     json: true,
// //     headers: {'User-Agent': 'request'}
// //   }, (err, res, data) => {
// //     if (err) {
// //       console.log('Error:', err);
// //     } else if (res.statusCode !== 200) {
// //       console.log('Status:', res.statusCode);
// //     } else {
// //       // data is successfully parsed as a JSON object:
// //       console.log(data);
// //     }
// // });
    
//     /*global fetch*/
//     fetch(url)
//         .then(function(response) {
//             console.log(response);
//             return response.json();
//         }).then(function(json) {
//             let results = "";
            
//             results += json.meta.high;
            
//             // results += '<h2 class="h2title">Weather in ' + json.name + "</h2>";
//             // results += "<div class = 'resultsbox'>";
//             // results += "<div class = 'resultsboxsmall'>";
//             // for (let i = 0; i < json.weather.length; i++) {
//             //     results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
//             // }
//             // results += '<h2>' + json.main.temp + " &deg;F</h2>";
//             // results += "<p class='description'>";
//             // for (let i = 0; i < json.weather.length; i++) {
//             //     results += json.weather[i].description;
//             //     if (i !== json.weather.length - 1)
//             //         results += ", ";
//             // }
            
//             document.getElementById("stockResults").innerHTML = results;
//         });
// });

//api key == WHLRIE9J6GWOI0HW for alphavantage stock api