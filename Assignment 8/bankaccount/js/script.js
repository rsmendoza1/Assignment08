/*eslint-env browser*/

// PART ONE
function getName() {
    "use strict";
    var retVal = window.prompt("Enter your name : ");
    window.document.write("You have entered : " + retVal);
}

function myFunction() {
    "use strict";
    document.getElementById("displayDeposit").innerHTML = "New Balance: ";
}

function getDeposit() {
    "use strict";
    var retVal = window.prompt("How much would you like to deposit?", "$");
    window.document.write("You have deposited : " + retVal);
}

function getWithdrawal() {
    "use strict";
    var retVal = window.prompt("How much would you like to withdraw?", "$");
    window.document.write("You have withdrawn : " + retVal);
}

//PART TWO
function bankAccount(ownerName) {
    "use strict";
    var balance = (getWithdrawal);
    var owner = (getWithdrawal);
    return window.document.write();
}


