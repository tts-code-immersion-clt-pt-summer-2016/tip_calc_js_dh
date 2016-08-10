var bill = parseInt(prompt("What is your bill amount?"));
var tip = .20;
function total(bill, tip) {return bill * tip};
function billTotal(bill, total) {return bill + total};
console.log ("Your tip should be $" + total " .");
console.log ("Your bill including the tip should be $" + billTotal " .");
