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
                background: linear-gradient(45deg,#ffad9e,#530000);
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
$val = $_GET["nine"];
error_reporting(E_ERROR | E_PARSE);
echo"Decimal number = $val<br>";
echo"Binary number = ";

$bin = array();
$i = 0;
while ($val > 0) {
    $bin[$i] = $val % 2;
    $val = intval($val / 2);
    $i++;
}
for ($j = $i - 1; $j >= 0; $j--)
    echo $bin[$j];

for($j=$i; $j>=0; $j--)
 echo $arr[$j];
?>
</div>

</body>
</html>