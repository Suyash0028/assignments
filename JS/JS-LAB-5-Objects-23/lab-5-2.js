//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 2:  MAKE THE BANK
//1. Create the object structure first.
var bankCustomer = {};
//2. Add the required properties to your object.
var bankCustomer = {
    lastName: "Doyle",
    branchNumber: 5,
    accountBalance: 500.25,
    interestRate: 0.03,
    makeDeposite: function(userInput) {
        bankCustomer.accountBalance = bankCustomer.accountBalance + userInput;
         return ("Thank you, your current balance is now $" + bankCustomer.accountBalance.toFixed(2));
    },
    makeWithdrawal: function(userInput) {
        bankCustomer.accountBalance = bankCustomer.accountBalance - userInput;
        return ("Thank you, your current balance is now $" + bankCustomer.accountBalance.toFixed(2));
    },
    multipleAccounts: true,
    addInterest: function() {
        if(bankCustomer.multipleAccounts == true){
            var newInterest = bankCustomer.interestRate + 0.005;
            bankCustomer.accountBalance += (bankCustomer.accountBalance * newInterest);
        }
        else{
            bankCustomer.accountBalance += (bankCustomer.accountBalance * bankCustomer.interestRate);
        }
    
        return ("Thank you, your current balance is now $" + bankCustomer.accountBalance.toFixed(2));
    }
};
//3. Add your first method and test it. Remember, the methods will change the properties of the object.
console.log(bankCustomer.accountBalance);
console.log(bankCustomer.makeDeposite(200));
console.log(bankCustomer.accountBalance);
//4. Add your second method and test it.
console.log(bankCustomer.makeWithdrawal(75));
console.log(bankCustomer.accountBalance);
//5. Create the required output to complete steps 6-10 of the lab.
//6. Once everything is working, tackle the Extra Challenge!
console.log(bankCustomer.addInterest());