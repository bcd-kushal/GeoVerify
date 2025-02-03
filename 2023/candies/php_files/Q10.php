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
error_reporting(E_ERROR | E_PARSE);
$val = $_GET["ten"];
$freq=array();
$val.=",";
$x=0;
$a=0;
for($i=0;$i<strlen($val);$i++){
    if($val[$i]!=','){
        $a=$a*10+intval($val[$i]);
    }
    else{
        $freq[$x]=$a;
        $x+=1;
        $a=0;
    }
}
echo "Frequency of entered numbers: <br>";
$u=array_unique($freq);

for($i=0,$k=0;$k<count($u);$i++,$k++){
    if(!is_numeric($u[$i])){
        $k-=1;
        continue;
    }

    for($j=0;$j<count($freq);$j++)
        if($freq[$j]==$u[$i])
            ++$c;
    echo "<br>\"{$u[$i]}\" : {$c}";
    $c=0;
}


?>
</div>

</body>
</html>