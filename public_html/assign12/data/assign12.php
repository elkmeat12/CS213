<?php
    $old = file_get_contents("assign12.txt");
    $fileName = ("assign12.txt");
    
    $myFile = fopen("assign12.txt", "w") or die ("Unable to open file!");

    $fname = $_GET["firstName"];
    $lname = $_GET["lastName"];
    $sid = $_GET["studentID"];

    $fname2 = $_GET["firstName2"];
    $lname2 = $_GET["lastName2"];
    $sid2 = $_GET["studentID2"];

    $performance = $_GET["performance"];
    $skill = $_GET["skill"];
    $inst = $_GET["instrument"];
    $location = $_GET["location"];
    $room = $_GET["room"];
    $time = $_GET["time"];

    
    $display1 = "<tr><td>$fname</td><td>$lname</td><td>$sid</td><td>$performance</td><td>$skill</td><td>$inst</td><td>$location</td><td>$room</td><td>$time</td></tr>";

    
    $display2 = "<tr><td>$fname</td><td>$lname</td><td>$sid</td><td>$performance</td><td>$skill</td><td>$inst</td><td>$location</td><td>$room</td><td>$time</td></tr>
                <tr><td>$fname2</td><td>$lname2</td><td>$sid2</td><td>$performance</td><td>$skill</td><td>$inst</td><td>$location</td><td>$room</td><td>$time</td></tr>";
    
    echo "<table><tr><th>First Name</th><th>Last Name</th><th>Student ID</th><th>Type</th><th>Skill Level</th><th>Instrument</th><th>Location</th><th>Room</th><th>Time</th></tr>";
    

    $display1 = $old . $display1;
    $display2 = $old . $display2;

    if ($fname == "")
    {
        fwrite($myFile, $old);
        echo $old;
    }
    else if ($performance != "Duet")
    {
        fwrite($myFile, $display1);
        echo $display1;
    }
    else
    {
        fwrite($myFile, $display2);
        echo $display2;
    }

    fclose($myFile);

?>
