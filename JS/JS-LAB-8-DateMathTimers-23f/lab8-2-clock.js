/* LAB 8.2 - STOP TIME */


//create page load listener
window.onload = timer;
//create page load function
function timer(){

	//create variables for required HTML elements
	var startTimerBtn = document.getElementById("btnStart");
	var endTimerBtn = document.getElementById("btnStop");

	var hoursOut = document.getElementById("hoursOut"); 
	var minsOut = document.getElementById("minsOut");
	var secsOut = document.getElementById("secsOut");

	var timer = null;
	//create time variable so all functions have access to it
	var hour = new Date().getHours();
	var minutes = new Date().getMinutes();
	var seconds = new Date().getSeconds();
	
	//CREATE FUNCTION THAT DISPLAYS THE TIME
	startTimerBtn.onclick = startTimer;
	endTimerBtn.onclick = endTimer;
	
	//CREATE FUNCTION TO START THE CLOCK.
	function startTimer(){

		timer = window.setInterval(()=>{
			var currentHourTime = new Date().getHours().toLocaleString('en-US',{minimumIntegerDigits: 2});
			var currentMinTime = new Date().getMinutes().toLocaleString('en-US',{minimumIntegerDigits: 2});
			var currentSecTime = new Date().getSeconds().toLocaleString('en-US',{minimumIntegerDigits: 2});

			hoursOut.innerHTML = currentHourTime + " :";
			minsOut.innerHTML = currentMinTime + " :";
			secsOut.innerHTML = currentSecTime;
		}, 1000);
		
	}
	
	//CREATE FUNCTION TO STOP THE CLOCK
	function endTimer(){
		clearTimeout(timer);
	}
	
	// SET EVENT LISTENERS
}