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
$val = $_GET["eight"];

//////////////////////////////
$c=0;
function hanoi($n,$from='A',$to='B',$temp='C')
{
    global $c;
    if ($n==1)
    {
        $c+=1;
        echo "<br>{$c} : Insert disk 1 from: tower {$from} to: tower {$to}";
        return;
    }
    hanoi($n-1, $from, $temp, $to);
    $c+=1;
    echo "<br>{$c} :  Insert disk {$n} from: tower {$from} to: tower {$to}";
    hanoi($n-1, $temp, $to, $from);
}
hanoi($val);
?>
</div>

</body>
</html>


