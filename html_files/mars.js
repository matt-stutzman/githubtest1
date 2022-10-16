document.getElementById("marsSubmit").addEventListener("click", function(event) {
    event.preventDefault();
    // const value = document.getElementById("stockInput").value;
    console.log("Running");
    // if (value === "")
    //     return;
    // console.log(value);
    const url = "https://api.nasa.gov/planetary/apod?api_key=mjAHScfuJRhR3GuFfy6Odc1VnrPEYPNt6SQTOEs6";
    /*global fetch*/
    fetch(url)
        .then(function(response) {
            console.log(response);
            return response.json();
        }).then(function(json) {
            let results = "";
            
            results +=  "<img src=" + json.url + ">";
            
            document.getElementById("marsPhoto").innerHTML = results;
        });
});
