//#### LAB 4 - FUNCTIONS ####
//PART 3:  WALKING THE DOG 


//################## CREATE YOUR checkTemp FUNCTION
// Create Variables
var userInput;

//This function will take currentTemp as an input parameter whoes value is passed when the function is called
//It expects to receive one parameter as an inout
//It will return true if the temp is less than 30 and false if its is greater than 30.
function checkTemp(currentTemp){
    var isValid = false;
    if(currentTemp > 30){
        return isValid;
    }
    else if(currentTemp <= -10){
        return isValid;
    }
    else{
        isValid = true;
        return isValid;
    }
}


//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS
userInput =  prompt("Enter current temprature...");

if(checkTemp(userInput) === true){
    alert("You’re good, have a nice walk!");
}
else{
    alert("Yikes! Too hot / Too Cold  for dog walking!");
}