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
                background: linear-gradient(45deg,#f2ff3d,#530000);
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
$val = $_GET["one_c"];
$sum = 0;
for($i=1;$i<=$val;$i++){
    $sum = $sum + pow(-1,$i+1)*$i;
}
echo "<br>Product = 1-2+3-4+...".$val." terms = ".$sum."<br>";
?>
</div>

</body>
</html>