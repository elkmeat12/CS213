<!DOCTYPE html>

<html lang = "en">
    <head>
        <title>Mortgage Calculator</title>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="mortgage.css">  


    </head>

    <body>


        <div id="wrapper">
            <header>
                <h1>Mortgage Calculator</h1>
            </header>
            <div class="topNav">
                <nav>
                    <a href="mortgage.html">Mortgage Calculator</a>
                    <a href="assign09.html">Directory</a>
                </nav>
            </div>        
        <main>
            <div id="content">
                <br />


                <?php   
                    $rate = $_GET["percentRate"];
                    $term = $_GET["loanTerm"];
                    $amount = $_GET["loanAmount"];
                    

                    function calPay($rate, $term, $amount) {
                        $r = $rate / 1200;
                        $t = $term * 12;
                        $payment = round($amount * ($r * pow((1 + $r), $t))/(pow((1 + $r), $t) - 1), 2);
                        return $payment;
                    }

                    calPay();

                    $payment = calPay($rate, $term, $amount);

                    echo "<p>
                            APR: $rate % <br />
                            Loan Term: $term years <br />
                            Loan Amount: $$amount <br />
                            Monthly Mortgage Payment: $$payment <br />
                          </p>";
                ?>



            </div>
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

