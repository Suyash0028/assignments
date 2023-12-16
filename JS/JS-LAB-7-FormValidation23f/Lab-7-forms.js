/* LAB 7 - SHIPPING FORM */
//Order Shipping object (for extra EXTRA challenge, otherwise, ignore it)
var shipInfo = {
	cid: 0,
	name: "",
	pc: "",
	speed: "",
	cost: 0
};
//LISTEN FOR load EVENT
window.onload = shippingUserData;

//'WRAPPER' FUNCTION FOR DOM LOGIC
function shippingUserData(){
	var formHandle = document.forms.form_ship;
	var form = document.getElementById("shippingForm");
	var thankyouMSG = document.getElementById("thanks_msg");
	var speedOfDelivery = formHandle.f_speed;
	formHandle.onsubmit = validateForm;


	//Function for the field validatation
	function validateForm(){

		// Validation for First Name Element
		var fName = formHandle.f_Name;
		console.log(speedOfDelivery.value);
		
		if(speedOfDelivery.value === "0"){
			speedOfDelivery.style.background = "Red";
			speedOfDelivery.focus();
			return false;
		}
		else{
			speedOfDelivery.style.background = "White";
		}

		if(fName.value === ""){
			fName.style.background = "Red";
			fName.focus();
			return false;
		}
		else{
			fName.style.background = "White";
		}

		

		// Validation for Customer ID Element
		var customerID = formHandle.f_Id;
		console.log(customerID.value);
		var emailValidation = /\d\d\d\d/;
		
		if(!emailValidation.test(customerID.value)){
			customerID.style.background = "Red";
			customerID.focus();
			return false;
		}
		else{
			customerID.style.background = "White";
		}
		

		// Validation for Postal Code Element
		var postalCode = formHandle.f_pc;
		console.log(postalCode.value);
		var postalValidation = /\w\d\w\d\w\d/;
		
		if(!postalValidation.test(postalCode.value)){
			postalCode.style.background = "Red";
			postalCode.focus();
			return false;
		}
		else{
			postalCode.style.background = "White";
		}

		form.style.display = "none";
		thankyouMSG.style.display = "block";

		var displayMSG = document.getElementById("thanksCustomer");
		displayMSG.innerText = fName.value + " (Customer"+ "#" + " " + customerID.value +")";

		var postalMSG = document.getElementById("thanksPC");
		postalMSG.innerText = postalCode.value;

		var deliveryChargeMSG = document.getElementById("thanksCost");
		deliveryChargeMSG.innerText = speedOfDelivery.value;
		return false;
	}
	
}


