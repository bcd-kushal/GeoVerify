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
                background: linear-gradient(45deg,#9c9c9c,#030303);
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
$val = $_GET["two"];

function IsPrimeOrNot($n)
{
 for($i=2; $i<$n; $i++)
   {
      if($n % $i ==0)
          {
           return 0;
          }
    }
  return 1;
 }
 $top1=0;
 $top2=0;
 $primes=array($val/2);
 $non_primes=array($val/2);
for($i=2;$i<=$val;$i++){
    $res=IsPrimeOrNot($i);
    if($res==1){
        $primes[$top1++]=$i;
    }
    else{
        $non_primes[$top2++]=$i;
    }
}
error_reporting(E_ERROR | E_PARSE);
if($top1>0){
    echo "<br>Prime numbers in range 0 - ".$val." = ".$primes[0];
    for($i=1;$i<=$top1;$i++){
        echo " , ".$primes[$i];}
    echo "<br><br>Non-prime numbers in range 0 - ".$val." = ".$non_primes[0];
    for($i=1;$i<=$top2;$i++){
            echo " , ".$non_primes[$i];}
}
else{
    echo "<br>Prime numbers in range 0 - ".$val." = ".$primes[0]."<br><br>";
    echo "<br>Non-prime numbers in range 0 - ".$val." = ".$non_primes[0];
}
?>
</div>

</body>
</html>

