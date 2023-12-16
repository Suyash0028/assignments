// ASSIGNMENT 3 OBJECTS
// CREATE OBJECT 
var store = {};

// CREATE VARIABLES
var userInput;

// ADDING PROPERTIES TO THE OBJECT
var store = {
    name: "Shoe House",
    employees: 15,
    branches: ["Toronto", "Missisauga"],
    address: "50 New kings Street",
    newEmployee: function (userInput) { 
        store.employees += parseInt(userInput);
        alert("New employee added now total employees work at store are " + store.employees);
    }
};

//CALLING THE OBJECT FUNCTION TO UPDATE OF ONE THE PROPERTY OF THE OBJECT
console.log(store);
store.newEmployee(1);

// OBJECT OUTPUT IN CONSOLE
console.log(store);

// USER INPUT TO CHANGE ONE OF THE PROPERTIES
userInput = prompt("Enter your new address here...", store.address);

// UPDATING THE OBJECT VALUE WITH THE RECIEVED FROM THE USER
store.address = userInput;

// OUTPUT AFTER CHANGING THE VALUE
alert("Store address updated to " + store.address);
console.log(store);

// USER INPUT TO CHANGE SOME ANOTHER PROPERTY
userInput = prompt("Enter your new store name here...", store.name );

// UPDATING THE OBJECT VALUE WITH THE RECIEVED FROM THE USER
console.log(store);
store.name = userInput;

// OUTPUT AFTER CHANGING THE VALUE
alert("Store address updated to " + store.name);
console.log(store);

// CALLING FUNCTION TO UPDATE THE PROPERTY OF THE OBJECT
console.log(store); // Before updating the object
store.newEmployee(2); // THIS WILL UPDATE THE TOTAL NUMBER OF EMPLOYEES AT THE STORE

// OUTPUT AFTER CHANGING THE OBJECT
console.log(store);// After updating the object