//Assignmrnt -2 
//Variables used in code
var movie1 = "The Dark Knight";
var movie2 = "Inception";
var movie3 = "The GodFather";
var movie4 = "Titanic";
var movie5 = "Avaatar";
var movie6 = "The Nun";
var movie7 = "The Matrix";
var myMovies = [movie1, movie2, movie3, movie4, movie5, movie6, movie7];
var usersInput;
var isUserInputValid = false;
console.log(myMovies);

//user input from the prompt


//user input validation
while(isUserInputValid == false){
    usersInput = prompt("Which top 7 movie would you like?", "Pick a number: 1-7");
    if(usersInput != null || usersInput != undefined || usersInput != "Pick a number: 1-7" || isNaN(usersInput)){
        if(parseInt(usersInput) <= 7 && parseInt(usersInput) >= 1){
            alert("Number "+  usersInput + " on the movie list is " + (usersInput - 1));
            isUserInputValid = true;
        }
        else{
            alert("Please enter a number between 1 and 7!");
        }
    }
}
//output on the console of movies
for(var i = 0; i < myMovies.length; i++){
    console.log("Movie " + (i + 1) + ": "+ myMovies[i]);
}