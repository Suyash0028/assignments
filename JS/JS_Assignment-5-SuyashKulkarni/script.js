//Window on load function
window.onload = function(){

    //Variables declaration
    var apiKey = "fbba51f45756ea9113f84687eed7c92d"; //Api key - fbba51f45756ea9113f84687eed7c92d
    var toronotoLatitude = "43.6534817";
    var toronotoLongitude = "-79.3832";
    var apiTorontoUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${toronotoLatitude}&lon=${toronotoLongitude}&appid=${apiKey}&units=metric`;

    var indiaLatitude = "23.0225";
    var indiaLongitude = "72.5714"; 
    var apiIndiaUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${indiaLatitude}&lon=${indiaLongitude}&appid=${apiKey}&units=metric`;

    //Buttons to show the weather
    var button1 = document.getElementById("Toronto");
    var button2 = document.getElementById("Yourtown");

    //To add data into
    var icons = document.getElementById("icon");
    var location = document.getElementById("location");
    var temperature = document.getElementById("temperature");
    var conditions = document.getElementById("conditions");
    var maxTemp = document.getElementById("max");
    var minTemp = document.getElementById("min");
    var outputTag = document.getElementById("output");

    //Onclick listeners
    button1.onclick = (event) => { weather(event) };
    button2.onclick = (event) => { weather(event) };
    //Updated the button text
    button2.innerText = "Ahmedabad, India";

    //New HTTP request variable
    var httpReq = new XMLHttpRequest();

//Different functions created for different buttons kept for the reference
    // function weatherToronto(){
    //     //Unhide the element
    //     outputTag.style.display = "block";

    //     //Opened the request
    //     httpReq.open("GET", apiTorontoUrl, true);
    //     httpReq.responseType = "json";

    //     httpReq.send();


    //     httpReq.onreadystatechange = function(){
    //         if(httpReq.readyState === 4){
    //             if(httpReq.status === 200){
    //                 var responseData = httpReq.response;
    //                 console.log(responseData);
    //                 location.innerText = responseData.name;

    //                 temperature.innerText = Math.floor(responseData.main.temp) + "\u00B0" + "C" +" Feels Like:"+ " " + Math.floor(responseData.main.feels_like) + "\u00B0" + "C";
                    
    //                 conditions.innerText = responseData.weather[0].description;

    //                 //Icon img url 
    //                 var iconurl = "http://openweathermap.org/img/w/" + responseData.weather[0].icon + ".png";
    //                 icons.innerHTML = `<img src=${iconurl} alt='weather icon' />`;


    //                 maxTemp.innerText = Math.floor(responseData.main.temp_max) + "\u00B0" + "C" ;
    //                 minTemp.innerText = Math.floor(responseData.main.temp_min)+ "\u00B0" + "C" ;
    //             }
    //             else{
    //                 console.log("Error in api call");
    //             }
    //         }
    //     }
    // }

    // function weatherIndia(){
    //     //Unhide the element
    //     outputTag.style.display = "block";

    //     //Opened the request
    //     httpReq.open("GET", apiIndiaUrl, true);
    //     httpReq.responseType = "json";

    //     httpReq.send();


    //     httpReq.onreadystatechange = function(){
    //         if(httpReq.readyState === 4){
    //             if(httpReq.status === 200){
    //                 var responseData = httpReq.response;
    //                 console.log(responseData);
    //                 location.innerText = responseData.name;

    //                 temperature.innerText = Math.floor(responseData.main.temp) + "\u00B0" + "C";

    //                 conditions.innerText = responseData.weather[0].description;

    //                 //Icon img url 
    //                 var iconurl = "http://openweathermap.org/img/w/" + responseData.weather[0].icon + ".png";
    //                 icons.innerHTML = `<img src=${iconurl} alt='weather icon' />`;

    //                 maxTemp.innerText = Math.floor(responseData.main.temp_max)+ "\u00B0" + "C";
    //                 minTemp.innerText = Math.floor(responseData.main.temp_min)+ "\u00B0" + "C";
    //             }
    //             else{
    //                 console.log("Error in api call");
    //             }
    //         }
    //     }
    // }

    function weather(button){
        //We can also use the if else statement to handle such scenario
        //Switch case that works on recieved button id from the click event
        switch(button.target.id){
            case 'Toronto':
                //Opened the request
                httpReq.open("GET", apiTorontoUrl, true);
                //Return data format
                httpReq.responseType = "json";
                //Http request sent
                httpReq.send();
                break;
            case 'Yourtown':
                //Opened the request
                httpReq.open("GET", apiIndiaUrl, true);
                //Return data format
                httpReq.responseType = "json";
                //Http request sent
                httpReq.send();
                break;
            default:
                break;
        }

        //On state change we will check the status is 200 that means it is OK and we will grab the responce and render the data
        httpReq.onreadystatechange = function(){
            if(httpReq.readyState === 4){
                if(httpReq.status === 200){
                    //Unhide the element
                    outputTag.style.display = "block";
                    //Store the response from api
                    var responseData = httpReq.response;
                    //Location name
                    location.innerText = responseData.name;
                    //Temperature
                    temperature.innerText = Math.floor(responseData.main.temp) + "\u00B0" + "C" + " Feels Like:"+ " " + Math.floor(responseData.main.feels_like) + "\u00B0" + "C";
                    //Condition
                    conditions.innerText = responseData.weather[0].description;
                    //Icon img url 
                    var iconurl = "http://openweathermap.org/img/w/" + responseData.weather[0].icon + ".png";
                    icons.innerHTML = `<img src=${iconurl} alt='weather icon' />`;
                    //Max and Min temp of the day - Additional values to display
                    maxTemp.innerText = Math.floor(responseData.main.temp_max) + "\u00B0" + "C" ;
                    minTemp.innerText = Math.floor(responseData.main.temp_min)+ "\u00B0" + "C" ;
                }
                else{
                    //Error msg when api call fails  to fetch the data 
                    // To check add wrong api key
                    outputTag.innerHTML = "<h1>Sorry \uD83D\uDE41 api call failed. Please come back later<h1>";
                }
            }
        }
    }
}