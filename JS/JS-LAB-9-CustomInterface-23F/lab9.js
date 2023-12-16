//LAB 9-DATA STORAGE: INDEX PAGE
//window.onload
window.onload = dataStorage;
    //check for stored values
        //retrieve stored values
        
        //change welcome text to stored name

        //change BG colour to stored colour

        //  document.body.style.background = 


		
//#####============== DO THIS PART FIRST! ===============		
    //get the form and set submit listener
function dataStorage(){
    var dltButton = document.getElementById("btnDel");
    dltButton.addEventListener("click", dltCookies);
    setValues();
    var formHandler = document.forms.infoForm;
    console.log(formHandler);
    
    formHandler.onsubmit = saveForm;
	
	//onsubmit Function
    function saveForm(event){
        //get values from form
		var firstName = formHandler.f_name;
        var selectedColor = formHandler.f_color;
        
		//console.log the form values
        console.log(firstName.value);
        console.log(selectedColor.value);

        //store values
        localStorage.setItem("firstName",firstName.value);
        localStorage.setItem("selectedColor",selectedColor.value);
        

        var storedFirstName = localStorage.getItem("firstName");
        var storedSelectedColor = localStorage.getItem("selectedColor");

        // Use the stored values as needed
        if (storedFirstName) {
            console.log("Stored First Name:", storedFirstName);
        }

        if (storedSelectedColor) {
            console.log("Stored Selected Color:", storedSelectedColor);
        }

        

        event.preventDefault();
        
        makeCookie("firstName", firstName.value, 1);
        makeCookie("selectedColor", selectedColor.value, 1);

        setValues();
        return false;
    }

    function makeCookie(cookieName, cookieValue, lifespan) {
        const now = new Date();
        const expirationDate = new Date(now.getTime() + (lifespan * 24 * 60 * 60 * 1000));
        const expires = "expires=" + expirationDate.toUTCString();
    
        // Create the cookie string
        const cookieString = `${cookieName}=${cookieValue}; ${expires}; path=/`;
    
        // Set the cookie
        document.cookie = cookieString;
    }

    function setValues(){
        var cookieString = document.cookie;
        if(cookieString !== ""){
            var coll = cookieString.split(";");
            var firstName = coll[1];
            var selectedColor = coll[0];
            document.body.style.background = firstName.split("=")[1];
            var outputMsg = document.getElementById("newMsgBox");
            outputMsg.innerHTML = "Welcome " + selectedColor.split("=")[1] + "!";
        } 
    }

    function dltCookies() {
        makeCookie("firstName","",-1);
        makeCookie("selectedColor","",-1);
        location.reload();
      }
}     
        



    