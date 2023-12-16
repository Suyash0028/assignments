/* LAB 8-1 - FINAL COUNTDOWN!! */


//create page load listener
window.onload = finalCountDown;
//create page load function
function finalCountDown(){

	//create variables for required HTML elements
	var todayDateOutput = document.getElementById("todayData");
	var deadlineDateOutput = document.getElementById("finalData");
	var todayDaysOutput = document.getElementById("dueData");
	var warningMsg = document.getElementById("countMsg");
	//create variables for now date and due date
	var currentTime = new Date();
	//var deadlineDate = new Date("December 15, 2023 18:00:00");
	var deadlineDate = new Date("December 15, 2022 18:00:00");
	//CONVERT TO UTC AND SUBTRACT TO GET TIME DIFFERENCE
	var currentTimeMili = currentTime.getTime();
	var deadlineDateMili = deadlineDate.getTime();

	var difference = deadlineDateMili - currentTimeMili;
	//CONVERT TIME DIFFERENCE TO WHOLE NUMBER OF DAYS
	
	var timeDiffInDays = Math.floor(difference / 86400000);
	//OUTPUT NOW DATE & DUE DATE TO HTML PAGE
	
	todayDateOutput.innerHTML = currentTime.toDateString();
	
	deadlineDateOutput.innerHTML = deadlineDate.toDateString();

	todayDaysOutput.innerHTML = timeDiffInDays;
	//LOGIC TO CHECK IF DUE DATE HAS PASSED, AND OUPUT APPROPRIATE MESSAGE TO HTML PAGE

	if(timeDiffInDays <= 0){
		warningMsg.innerHTML = "The Deadline for the Final Assignment has passed!";
	}
}