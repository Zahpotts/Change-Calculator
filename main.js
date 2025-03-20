// Write your JavaScript here
document.getElementById('calculate-change').addEventListener('click', function() {
    var amountDue = parseFloat(document.getElementById("amount-due").value);
    var amountReceived = parseFloat(document.getElementById("amount-received").value);
    var change = amountReceived - amountDue;
    var remainingCent = Math.round(change * 100);
    var dollars = Math.floor(remainingCent / 100);
    remainingCent %= 100;
    var quarters = Math.floor(remainingCent / 25);
    remainingCent %= 25;
    var dimes = Math.floor(remainingCent / 10);
    remainingCent %= 10;
    var nickels = Math.floor(remainingCent / 5);
    remainingCent %= 5;
    var pennies = remainingCent;
    document.getElementById("dollars-output").textContent = dollars;
    document.getElementById("quarters-output").textContent = quarters;
    document.getElementById("dimes-output").textContent = dimes;
    document.getElementById("nickels-output").textContent = nickels;
    document.getElementById("pennies-output").textContent = pennies;

    
});
