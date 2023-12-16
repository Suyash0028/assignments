//#### LAB 4 - FUNCTIONS ####
//PART 2:  AN AVERAGE FUNCTION

// CREATING VARIABLES
var course1 = 80;
var course2 = 90;
var course3 = 60;
var course4 = 33;
var course5 = 97;

//################## CREATE YOUR AVERAGE FUNCTION
function avg(num1, num2, num3, num4, num5){
    var avg = (num1 + num2 + num3 + num4 + num5) / 5;
    console.log("Avg: " +  Math.abs(avg,1));
    return avg;
}
//This function takes five numbers and returns their average to one decimal place.

avg(5, 10, 15, 20, 25); 

//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS
if(avg(course1, course2, course3, course4, course5) >= 70){
    alert("Great you have an average about 70!!!!");
}
else{
    alert("Review Required!");
}