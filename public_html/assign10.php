<!DOCTYPE html>

<html lang = "en">
    <head>
        <title>Purchase | Sports Now</title>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="style4.css">  
        <script type="text/javascript" src="assign10.js"></script>
        

        <style>
            form {
                margin-top: 15px;
                width: 90%;
                margin-left: auto;
                margin-right: auto;
            }

            table {
                margin-left: auto;
                margin-right: auto;
            }

        </style>
        
    </head>

    <body>
        <div id="wrapper">
            <header>
                <h1>Sports Now</h1>
            </header>
            <div class="topNav">
                <nav>
                    <a href="assign10.html" style="margin-left: 13%">Home</a>
                </nav>
            </div>        
        <main>
            <div id="content" style="text-align: center">
            <br />

            
            <?php   
                $first = $_GET["firstName"];
                $last = $_GET["lastName"];
                $address = $_GET["address"];
                $phone = $_GET["phone"];
                $card = $_GET["cardType"];
                $prod1 = $_GET["prod1"];
                $prod2 = $_GET["prod2"]; 
                $prod3 = $_GET["prod3"];
                $prod4 = $_GET["prod4"]; 
                $total;
                
                $year = $_GET["year"];             
                

                $month = $_GET["month"];
                $monthName = date("F", mktime(0, 0, 0, $month, 10));

                
                function calPay($prod1,$prod2,$prod3,$prod4) {
                    $total = $prod1 + $prod2 + $prod3 + $prod4;
                    return $total;
                }
                calPay();

                $total = calPay($prod1,$prod2,$prod3,$prod4);

                echo 
                    "<h2>Confirm Purchase</h2>
                    <p>
                        Name: $first $last <br />
                        Address: $address <br />
                        Phone Number: $phone 

                        <br /><br />

                        Card Type: $card <br />
                        Expiration Date: $monthName $year <br />
                    </p>";

                if ($prod1 == "")
                    $prod1 == 0;
                else 
                    echo "Basketball $$prod1 <br />";

                if ($prod2 == "")
                    $prod2 == 0;
                else 
                    echo "Football $$prod2 <br />";

                if ($prod3 == "")
                    $prod3 == 0;
                else 
                    echo "Soccer Ball $$prod3 <br />";

                if ($prod4 == "")
                    $prod4 == 0;
                else 
                    echo "Frisbee $$prod4 <br />";

                echo "<br />Total: $$total";
            ?> 
            </div>
            <form action="assign10_a.php" method="GET">
                <div class="cntr">
                    <input type="submit" value="Confirm" name="confirm">
                    <input type="submit" value="Cancel" name="cancel">
                </div>
            </form>
                
        </main>

        <br />
        <div class="footer">
                <footer>
                    <span style="color: #000000"> &copy; 2018 Tyler Elkington</span>
                </footer>
            </div>   

        </div>
    </body>
</html>

