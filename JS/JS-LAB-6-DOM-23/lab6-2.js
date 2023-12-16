//#### LAB 6 - DOM MANIPULATION ####
//PART 2: MYSTERY BOX

//LISTEN FOR load EVENT
window.onload = mysteryBox;

//'WRAPPER' FUNCTION FOR DOM LOGIC
function mysteryBox(){
	
	//GET DOM ELEMENTS WE'LL NEED
	var mysteryBox = document.getElementById("mysteryBox");
	var buttonBox = document.getElementById("buttonBox");

	mysteryBox.onmouseover = showMysteryBox;
	//====CREATE THE FUNCTIONS WE'LL NEED====
	//FUNCTION TO ASK USER
	function showMysteryBox(){
		var userInput = confirm("Do you want to see something?");
		
		if(userInput == true){
			mysteryBox.style.display = "none";
			buttonBox.style.display = "block";
		}
	}

	//FUNCTION TO CHANGE buttonBox
	function surpriseBox(){
		console.log(buttonBox);
		buttonBox.innerHTML = "<h2>SURPRISE!!</h2>";
		buttonBox.style.width = "600px";
		buttonBox.style.background = "orange";
	}

	//SETUP LISTENERS
	buttonBox.onclick = surpriseBox;
}
//END onload FUNCTION