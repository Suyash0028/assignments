//LAB 3 - ARRAYS & LOOPS - PART 3

//PART 3 - SHOPPING CART SHIPPING
//==== VARIABLES ========

var userSubPrices = [];
var totalPrice = 0;
var userInputPrice;
//==== LOGIC ========
//CHECK FOR ITEMS UNTIL THRESHOLD IS MET.

while(totalPrice < 35){
	userInputPrice = prompt("Add the price of your item:");
	if(!isNaN(userInputPrice)){
		userSubPrices.push(parseInt(userInputPrice));
		console.log(userSubPrices);
		totalPrice += parseInt(userInputPrice);
		console.log(totalPrice);
	}
}
if(totalPrice >= 35){
	alert("Your shipping for this order will be free!");
}

console.log("Item prices are: " + userSubPrices.join(" | "));

console.log("Total value of items purchased are: " + totalPrice);
	//GET ITEM COST FROM USER
	
	
	//CONVERT USER INPUT TO A NUMBER
	
	
	//ADD ITEM COST TO RUNNING TOTAL VARIABLE
	
	
	//PUSH ITEM COST TO CART ARRAY
	
	
	


//SEND POPUP MESSAGE TO USER


//SEND OUTPUT TO CONSOLE

