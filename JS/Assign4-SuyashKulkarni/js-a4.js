// Assignment 4 JS

//LISTEN FOR load EVENT
window.onload = registrationForm;

//'WRAPPER' FUNCTION FOR DOM LOGIC
function registrationForm(){
    var formHandle = document.forms.ixdForm;
    
    // Got all the required values from the form
    var firstName = formHandle.f__fName;
    var lastName = formHandle.f__lName;
    var humberId = formHandle.f__id;
    var programName = formHandle.f__program;
    var optionType = formHandle.f__deliver;
    var projectName = formHandle.f__project;

    var optionTypeTag = document.getElementById("caption_deliver");
    var projectNameTag = document.getElementById("caption_project");

    var humberIdvalidationString = /(n|N)\d{8}/;

    // On submit button click
    formHandle.onsubmit = validation;

    //validation for form values
    function validation(){
        // Validation for first name
        if(firstName.value === ""){
            firstName.style.background = "Red";
			firstName.focus();
            return false;
        }
        else{
            firstName.style.background = "White";
        }

        // Validation for last name
        if(lastName.value === ""){
            lastName.style.background = "Red";
			lastName.focus();
            return false;
        }
        else{
            lastName.style.background = "White";
        }

        // Validation for humber Id
        if(!humberIdvalidationString.test(humberId.value)){
            humberId.style.background = "Red";
			humberId.focus();
            return false;
        }
        else{
            humberId.style.background = "White";
        }

        // Validation for program name
        if(programName.value === "X"){
            programName.style.background = "Red";
			programName.focus();
            return false;
        }
        else{
            programName.style.background = "White";
        }

        // Validation for option type
        if(optionType.value === ""){
            optionTypeTag.style.background = "Red";
            return false;
        }
        else{
            optionTypeTag.style.background = "White";
        }

        // Validation for program name
        if(projectName.value === ""){
            projectNameTag.style.background = "Red";
            return false;
        }
        else{
            projectNameTag.style.background = "White";
        }

        // Output message clicked on submmit
        //Hide the form
        var form = document.getElementById("form");
        form.style.display = "none";

        //First Name value replaced
        var firstNameOutputMsg = document.getElementById("result__Fname");
        firstNameOutputMsg.innerText = firstName.value;

        //Last Name value replaced
        var lastNameOutputMsg = document.getElementById("result__Lname");
        lastNameOutputMsg.innerText = lastName.value;
        
        //Humber ID value replaced
        var humberIdOutputMsg = document.getElementById("result__id");
        humberIdOutputMsg.innerText = humberId.value;

        //Program Name value replaced
        var programNameOutputMsg = document.getElementById("result__program");
        programNameOutputMsg.innerText = programName.options[programName.selectedIndex].innerText;

        // Delivery Type value replaced
        var delievryTypeOutputMsg = document.getElementById("result__delivery");
        delievryTypeOutputMsg.innerText = optionType.value;

        // Project Name value replaced
        var projectNameOutputMsg = document.getElementById("result__project");
        projectNameOutputMsg.innerText = programName.options[programName.selectedIndex].innerText;
        
        // Display Result message
        var resultMSGBlock = document.getElementById("result");
        resultMSGBlock.style.display = "block";

        return false;
    }
}