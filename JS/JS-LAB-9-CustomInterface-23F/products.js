//LAB 9-DATA STORAGE: PRODUCTS PAGE

window.onload = dataStorage;

function dataStorage(){
    setValues();


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
}