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
$val = $_GET["one_a"];
$sum = 0;
for($i=1;$i<=$val;$i++){
    $sub_sum = 0;
    for($j=1;$j<=$i;$j++)
        $sub_sum+=$j;
    $sum+=$sub_sum;
}
echo "<br>Sum = 1+(1+2)+(1+2+3)+...".$val." terms = ".$sum."<br>";
?>

</div>

</body>
</html>