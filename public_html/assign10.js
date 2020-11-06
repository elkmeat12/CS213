window.onload = function()
{
    document.getElementById("fname").focus();
    document.getElementById("calculate").onclick = getPay();
};
    

function getPay()
{
    var checkBask = document.getElementById("basketball").checked;
    var checkFoot = document.getElementById("football").checked;
    var checkSoccer = document.getElementById("soccer").checked;
    var checkFrisbee = document.getElementById("frisbee").checked;

    var bask = document.getElementById("basketball").value * 1;
    var foot = document.getElementById("football").value * 1;
    var soccer = document.getElementById("soccer").value * 1;
    var frisbee = document.getElementById("frisbee").value * 1;

    var payment = 0;

    if(checkBask)
        payment += bask;
    if(checkFoot)
        payment += foot;
    if(checkSoccer)
        payment += soccer;
    if(checkFrisbee)
        payment += frisbee;
    
    document.getElementById("payment").value = "$" + payment;

}

function validType()
{
    var card = document.getElementsByName("cardType");

    for (var i = 0; i < card.length; i++)
    {
        if (card[i].checked)
        {
            return true;
            break;
        }
    }
}


function validateForm()
{            
    var isValid = true;
    var firstName = document.forms["myForm"]["fname"].value;
    var lastName = document.forms["myForm"]["lname"].value;
    var address = document.forms["myForm"]["address"].value;
    // var month = document.forms["myForm"]["month"].value;
    // var year = document.forms["myForm"]["year"].value;
    
    resetErrors();


    if (firstName == "")
    {
        document.getElementById("fnameError").style.display = "block";
        document.getElementById("fname").focus();
        isValid = false;
    }

    else if (lastName == "")
    {
        document.getElementById("lnameError").style.display = "block";
        document.getElementById("lname").focus();
        isValid = false;
    }

    else if (address == "")
    {
        document.getElementById("addressError").style.display = "block";
        document.getElementById("address").focus();
        isValid = false;
    }

    else if (!testPhone())
    {
        document.getElementById("phoneError").style.display = "block";
        document.getElementById("phoneNum").focus();
        isValid = false;
    }

    else if (!validType())
    {
        document.getElementById("typeError").style.display = "block";
        isValid = false;
    }



    else if (!testCard())
    {
        document.getElementById("cardNumError").style.display = "block";
        document.forms["myForm"]["cardNum"].focus();
        isValid = false;
    }        

    else if (!validMonth())
    {
        document.getElementById("expError").style.display = "block";
        document.forms["myForm"]["month"].focus();
        isValid = false;
    }

    else if (!validYear())
    {
        document.getElementById("expError").style.display = "block";
        document.forms["myForm"]["year"].focus();
        isValid = false;
    }

    else if (!testTotal())
    {
        document.getElementById("purchaseError").style.display = "block";
        document.getElementById("basketball").focus();
        isValid = false;
    }
    
    return isValid;
}

function resetErrors()
{
    document.getElementById("fnameError").style.display = "none";
    document.getElementById("lnameError").style.display = "none";
    document.getElementById("addressError").style.display = "none";
    document.getElementById("phoneError").style.display = "none";
    document.getElementById("typeError").style.display = "none";
    document.getElementById("cardNumError").style.display = "none";
    document.getElementById("expError").style.display = "none";
    document.getElementById("purchaseError").style.display = "none";
    document.getElementById("calculate").value = "";
}


function restart(){
    resetErrors();
    alert("Your calculations have been reset");
}

function testPhone()
{
    var phone = document.getElementById("phoneNum").value;
    var valid = phone.search(/^\d{3}-\d{3}-\d{4}$/);  
    if (valid != 0)
        return false;
    else
        return true;
}

function testTotal()
{
    var pay = document.getElementById("payment").value.split('$'); 
    if (pay[1] > 0)
        return true;
    else
        return false;
}

function testCard()
{
    var card = document.forms["myForm"]["cardNum"].value;
    var valid = card.search(/^\d{16}$/);
    if (valid != 0)
        return false;
    else
        return true;
}

function validMonth()
{
    var month = document.forms["myForm"]["month"].value;
    var domExp = month.search(/^\d{2}$/);
    month *= 1;
    if (domExp != 0 || month < 1 || month > 12 || isNaN(month))
        return false;
    else    
        return true;
}

function validYear()
{
    var year = document.forms["myForm"]["year"].value;
    var domExp = year.search(/^\d{4}$/);
    year *= 1;
    if (domExp != 0 || year < 2018 || isNaN(year))
        return false;
    else    
        return true;
}

function upperCase()
{
    var first = document.getElementById("fname");
    var last = document.getElementById("lname");

    first.value = first.value.toUpperCase();
    last.value = last.value.toUpperCase();
}