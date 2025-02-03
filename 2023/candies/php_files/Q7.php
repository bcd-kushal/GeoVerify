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

function ones_place($n){return ($n%10==5 || $n%10==0)?0:1;}

function contains_zeros($n){
    if((($n/10)%10 == 0)||(($n/100)%10 == 0))
        return 1;
    return 0;
}

function contains_duplicates($n){
    if(($n%10 == ($n/10)%10)||(($n/10)%10 == ($n/100)%10)||($n%10 == ($n/1000)%10))
        return 1;
    return 0;
}

function check_conditions($val){
    if(ones_place($val)==1 && contains_zeros($val)==0 && contains_duplicates($val)==0)
        return 1;
    return 0;
}


function triad_check($num1){
    $digits = array(0,0,0,0,0,0,0,0,0);

    $num2 = $num1*2;
    $num3 = $num1*3;

    //use hash table structure   
    if($digits[($num1/100) - 1]==0)    ++$digits[($num1/100) - 1];
    else    return;

    if($digits[($num1/10)%10 - 1]==0)    ++$digits[($num1/10)%10 - 1];
    else    return;

    if($digits[$num1%10 - 1]==0)    ++$digits[$num1%10 - 1];
    else    return;

    if($digits[($num2/100) - 1]==0)    ++$digits[($num2/100) - 1];
    else    return;

    if($digits[($num2/10)%10 - 1]==0)    ++$digits[($num2/10)%10 - 1];
    else    return;

    if($digits[$num2%10 - 1]==0)    ++$digits[$num2%10 - 1];
    else    return;

    if($digits[($num3/100) - 1]==0)    ++$digits[($num3/100) - 1];
    else    return;

    if($digits[($num3/10)%10 - 1]==0)    ++$digits[($num3/10)%10 - 1];
    else    return;

    if($digits[$num3%10 - 1]==0)    ++$digits[$num3%10 - 1];
    else    return;
    
    echo "[ ".$num1.", ".$num2.", ".$num3." ]<br>";
}

function triads(){
    $num = 123;
    while($num<=329){
        if(check_conditions($num) == 1)
            triad_check($num);
        //skip to max of 11 numbers to lower time complexity ig?
        if(check_conditions($num+1) == 1){
            $num+=1;
            continue;
        }
        if(check_conditions($num+2) == 1){
            $num+=2;
            continue;
        }
        if(check_conditions($num+3) == 1){
            $num+=3;
            continue;
        }
        if(check_conditions($num+4) == 1){
            $num+=4;
            continue;
        }
        if(check_conditions($num+5) == 1){
            $num+=5;
            continue;
        }
        if(check_conditions($num+6) == 1){
            $num+=6;
            continue;
        }
        if(check_conditions($num+7) == 1){
            $num+=7;
            continue;
        }
        if(check_conditions($num+8) == 1){
            $num+=8;
            continue;
        }
        if(check_conditions($num+9) == 1){
            $num+=9;
            continue;
        }
        if(check_conditions($num+10) == 1){
            $num+=10;
            continue;
        }
        if(check_conditions($num+11) == 1){
            $num+=11;
            continue;
        }
        if(check_conditions($num+12) == 1){
            $num+=12;
            continue;
        }
        $num+=13;
    }
}
echo "The triads between 100-999 are: <br>";
error_reporting(E_ERROR | E_PARSE);
triads();
?>
</div>

</body>
</html>