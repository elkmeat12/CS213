var rate;
var term;
var amount;
var monthPay;

window.onload = function()
{
    document.getElementById("rate").focus();
    // document.getElementById("calculate").onclick = checkValidate();
};


function validate()
{            
    var isValid = true;
    resetErrors();

    rate = document.getElementById("rate").value * 1;
    term = document.getElementById("term").value * 1;
    amount = document.getElementById("amount").value * 1;

    if (amount <= 0 || isNaN(amount))
    {
        document.getElementById("amountError").style.display = "block";
        document.getElementById("amount").focus();
        isValid = false;
    }

    if (term > 40 || term < 0 || isNaN(term))
    {
        document.getElementById("termError").style.display = "block";
        document.getElementById("term").focus();
        isValid = false;
    }


    if (rate > 25 || rate < 0 || isNaN(rate))
    {
        document.getElementById("rateError").style.display = "block";
        document.getElementById("rate").focus();
        isValid = false;
    }
    return isValid;
}

function resetErrors()
{
    document.getElementById("rateError").style.display = "none";
    document.getElementById("termError").style.display = "none";
    document.getElementById("amountError").style.display = "none";
}


function restart(){
    resetErrors();
    alert("Your calculations have been reset");
}

function change () {
    if (document.getElementById("rate").value != ""
    && document.getElementById("term").value != ""
    && document.getElementById("amount").value != "")
        validate();
}