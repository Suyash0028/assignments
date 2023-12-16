//Variable declaration
var grpNumber = "";
var fisrtName = "";
var groupNum;

//Popup box to ask the user from which group they are

grpNumber = prompt("Which team number do you belong to?", "Pick one from 1-6 only.");

//if user does not provide correct input alert access is denied

if(grpNumber !== "" && grpNumber !== null && grpNumber !== "Pick one from 1-6 only." && grpNumber !== undefined){
    console.log(grpNumber);
    groupNum = parseInt(grpNumber);
    if(groupNum > 6 && !isNaN(groupNum)){
        alert("Access denied!");
    }

// correct group number leads to another popup which asks for first name

    else{
        fisrtName = prompt("Enter your first name","First Name");
        if(fisrtName !== "" && fisrtName !== null && fisrtName !== "First Name"){
            switch(fisrtName.toLocaleLowerCase()){
                case "suyash":
                    alert("Welcome back Suyash Kulkarni !!!");
                break;
                case "abhishek":
                    alert("Welcome back Abhishek Gaur !!!");
                break;
                case "samir":
                    alert("Welcome back Samir Shah !!!");
                break;
                case "anurag":
                    alert("Welcome back Anurag Basu !!!");
                break;
// if the first name does not match up with any of the team member than access denied popup 
                default:
                    alert("Access denied!");
                break;
            }
        }
//if the user cancels the prompt then it will show access denied popup
        else{
            alert("Access denied!");
        }
    }
}
//if the input is not correct then it will show access denied popup
else{
    alert("Access denied!");
} 