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
                background: linear-gradient(45deg,#ef3dff,#412107);
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
$x = $_GET["five_a"];
$n = $_GET["five_b"];

function eOfX($n,$x)
{
    //use taylor series
    $sum = 1.0;
    for ($i=$n-1;$i>0;--$i){
        $sum=1+$x*$sum/$i;
    }
    return $sum;
}
$result=eOfX($n,$x);
echo "e^x <br>= 1 + x/1! + x^2/2! + x^3/3! + ......n terms <br>= 1 + (x/1) (1 + (x/2) (1 + (x/3) (....n terms) ) ) ...taylor series <br>";
  echo "<br>So, e^x (x = ".$x.", n = ".$n.") is = $result";
?>
</div>

</body>
</html>