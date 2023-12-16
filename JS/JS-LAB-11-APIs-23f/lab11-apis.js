


window.onload = function(){


    var apiKey = "fbba51f45756ea9113f84687eed7c92d";
    var locLatitude = "43.6534817";
    var locLongitude = "-79.3832";
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${locLatitude}&lon=${locLongitude}&appid=${apiKey}&units=metric`;

    var api = "http://api.openweathermap.org/geo/1.0/direct?q=Toronto&units=metric&appid=" + apiKey;


    var httpReq = new XMLHttpRequest();

    httpReq.open("GET", apiUrl, true);
    httpReq.responseType = "json";

    httpReq.send();

    httpReq.onreadystatechange = function(){
        if(httpReq.readyState === 4){
            if(httpReq.status === 200){
                var responseData = httpReq.response;
                console.log(responseData);

                var location = document.getElementById("location");
                location.innerText = responseData.name;

                var temperature = document.getElementById("temperature");
                temperature.innerText = Math.floor(responseData.main.temp) + "\u00B0" + "C";

                var conditions = document.getElementById("conditions");
                conditions.innerText = responseData.weather[0].description;
            }
            else{
                console.log("Error in api call");
            }
        }
    }
}