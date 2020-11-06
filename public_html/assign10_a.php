<!DOCTYPE html>

<html lang = "en">
    <head>
        <title>Transaction Complete | Sports Now</title>
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
                if ($_GET["confirm"])
                    echo "<h2>Transaction Completed</h2>
                          <p>Your order will arrive between 5-7 business days.</p>";
                else if ($_GET["cancel"])
                    echo "<h2>Transaction Cancelled</h2>
                          <p>You will not be charged for your order.</p>";
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

