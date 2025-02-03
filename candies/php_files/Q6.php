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
                background: linear-gradient(45deg,#67aeff,#53003e);
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
$x = $_GET["six_a"];
$n = $_GET["six_b"];

function fact($n)
{
    if($n==0)
        return 1;
    $f=1;
    for($i=1;$i<=$n;$i++)
        $f*=$i;
    return $f;
}

function tanX($n,$x){
    $sum=0;
    for($i=1;$i<=$n;$i++){
        $a=0;
        $b=2*$i;
        for ($k=0;$k<=$b;$k++) {
            $p=0;
            for ($r=0;$r<=$k;$r++)
                $p+=pow(-1,$r)*fact($k)*pow($r,$b)/(fact($r)*fact($k-$r));
            $a= $a+$p/($k+1);
        }
        $sum+=pow(-4,$i)*(1-pow(4,$i))*$a*pow($x,2*$i-1)/fact(2*$i);
    }
 return $sum;
}
$result=tanX($n,$x);
echo "tan^x (x = ".$x.", n = ".$n.") is = $result";
?>
</div>

</body>
</html>