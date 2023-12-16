// alert("Hello World");
var myAge = 24;
var daysInYear = 365;
var total = myAge * daysInYear;
// alert(total);

var iAm = "I am";
var msgString = "days old....more or less.";
alert(iAm + " " + total + " " + msgString);

var totalBill = 600.56830495;
totalBill += 20; //20 dollar tax added in the same variable 
var discountAmt = (600*5)/100;
var totalPayableBill = totalBill - discountAmt;
var totalPayableIndividualBill = totalPayableBill/2;
var valueWithFixedDecimal = parseFloat(totalPayableIndividualBill).toFixed(2);
var msgForBill = "You each owe";
alert(msgForBill + " " + valueWithFixedDecimal);