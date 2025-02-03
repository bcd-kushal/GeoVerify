<html>
<head>
    <style>
        *{
                font-family: 'Segoe UI';
            }
            
            ::-webkit-scrollbar{
                display: none;
            }

            body{
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 100vh;
                background: linear-gradient(45deg,#3dff7b,#000f53);
            }
            .container{
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                color:white;
                font-size:300%;
                font-weight:bolder;
            }
    </style>
</head>
<body>
<div class="container">
<?php
$x = $_GET["four_a"];
$y = $_GET["four_b"];
$copy_x = $x;
$copy_y = $y;

while ($x!=$y) {
    if ($x>$y)
      $x=$x-$y;
    else
      $y=$y-$x;
  }
  
  echo "HCF of $copy_x and $copy_y is: $x <br>";
  $lcm = ($copy_x*$copy_y)/$x;
  echo "LCM of $copy_x and $copy_y is: $lcm";
?>
</div>

</body>
</html>