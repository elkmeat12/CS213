function sendUSA() {
    getRequest("/~cs213/usa.txt");
    document.getElementById("city").innerHTML = "United States: <br />";
}

function sendCanada() {
    getRequest("/~cs213/canada.txt");
    document.getElementById("city").innerHTML = "Canada: <br />";
}

function sendMexico() {
    getRequest("/~cs213/mexico.txt");
    document.getElementById("city").innerHTML = "Mexico: <br />";
}

function sendRussia() {
    getRequest("/~cs213/russia.txt");
    document.getElementById("city").innerHTML = "Russia: <br />";
}

function getRequest(url) {
    var req = new XMLHttpRequest();
    req.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("area").innerHTML = this.responseText;
        }
    };
    req.open("GET", url, true);
    req.send();
}


function processJSON(){
    str = "/~cs213/"
	url = str + document.getElementById("file").value;
	var req = new XMLHttpRequest();

	req.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200) {
			var myObj = JSON.parse(req.responseText);
			var list = "<table><tr><th>Name</th><th>Address</th><th>Major</th><th>GPA</th>\n";

			for (var i = 0; i < myObj.students.length; i++) {
				list = list + "<tr><td>" + myObj.students[i].first + " "
				+ myObj.students[i].last + "</td><td>" + myObj.students[i].address.city
				+ ", " + myObj.students[i].address.state + " " + myObj.students[i].address.zip
				+ "</td><td>" + myObj.students[i].major + "</td><td>"
				+ myObj.students[i].gpa + "</td></tr>\n";
			}
			document.getElementById("list2").innerHTML = list;
		}
	};

	req.open("GET", url, true);

	req.send();
}