window.onload = function()
{
    hideStudent();
    this.document.getElementById("fname").focus();
    getRequest("assign12.php");
};

var req;

function validate () {
    resetErrors();

    // var solo = document.getElementById("solo");
    var duet = document.getElementById("duet");
    // var concerto = document.getElementById("concerto");

    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
    var studentID = document.getElementById("sid").value;
    var isValid = true;

    if (!firstName.match(/\S/))
    {
        document.getElementById("firstError").style.display = "block";
        document.getElementById("fname").focus();
        isValid = false;
    }

    else if (!lastName.match(/\S/))
    {
        document.getElementById("lastError").style.display = "block";
        document.getElementById("lname").focus();
        isValid = false;
    }

    else if (!studentID.match(/\S/))
    {
        document.getElementById("idError").style.display = "block";
        document.getElementById("sid").focus();
        isValid = false;
    }

    if (duet.checked)
    {
        var first2 = document.getElementById("fname2").value;
        var last2 = document.getElementById("lname2").value;
        var id2 = document.getElementById("sid2").value;

        if (!first2.match(/\S/))
        {
            document.getElementById("firstError2").style.display = "block";
            document.getElementById("fname2").focus;
            isValid = false;
        }
        else if (!last2.match(/\S/))
        {
            document.getElementById("lastError2").style.display = "block";
            document.getElementById("lname2").focus;
            isValid = false;
        }
        else if (!id2.match(/\S/))
        {
            document.getElementById("idError2").style.display = "block";
            document.getElementById("sid2").focus;
            isValid = false;
        }
    }

    if (isValid == true)
        makeQString();
}

function makeQString() {
    var solo = document.getElementById("solo");
    var duet = document.getElementById("duet");
    // var concerto = document.getElementById("concerto");
    var performanceType;

    if (solo.checked)
        performanceType = "Solo";
    else if (duet.checked)
        performanceType = "Duet";
    else
        performanceType = "Concerto";

    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var sid = document.getElementById("sid").value;

    var skill = document.getElementById("skill").value;
    var instrument = document.getElementById("instrument").value;
    var time = document.getElementById("time").value;
    var location = document.getElementById("location").value;
    var room = document.getElementById("room").value;

    var string = '?' + 'performance' + '=' + performanceType + '&' + 'firstName=' + fname + '&'
               + 'lastName=' + lname + '&' + 'studentID=' + sid + '&' + 'skill=' + skill + '&'
               + 'instrument=' + instrument + '&' + 'time=' + time + '&' + 'location=' + location + '&'
               + 'room=' + room;  

    if (duet.checked)
    {
        var fname2 = document.getElementById("fname2").value;
        var lname2 = document.getElementById("lname2").value;
        var sid2 = document.getElementById("sid2").value;

        string += '&firstName2=' + fname2 + '&' + 'lastName2=' + lname2 + '&'
               + 'studentID2=' + sid2;
    }

    var url = "assign12.php";
    url += string;
    getRequest(url);
}

function getRequest(url) {
    req = false;
    req = new XMLHttpRequest();

    if (!req)
    {
        alert('Error: XML - HTTP not supported by browser')
        return false;
    }
    else
    {
        req.onreadystatechange = processContent;
        req.open("GET", url, true);
        req.send();
    }
}

function processContent() {
    if (req.readyState == 4)
    {
        if (req.status == 200)
        {
            var text = req.responseText;
            text += "</table>";

            document.getElementById("registered").innerHTML = text;
        }
        else
        {
            alert('Problem with the request');
            alert(req.status);
        }
    }
}

function resetErrors () {
    document.getElementById("firstError").style.display = "none";
    document.getElementById("lastError").style.display = "none";
    document.getElementById("idError").style.display = "none";
    document.getElementById("firstError2").style.display = "none";
    document.getElementById("lastError2").style.display = "none";
    document.getElementById("idError2").style.display = "none";
}

function restart () {
    resetErrors();
}

function showStudent () {
    document.getElementById("hide").style.display = "block";
}

function hideStudent () {
    document.getElementById("hide").style.display = "none";
}