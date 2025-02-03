<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <link rel="stylesheet" href="design.css">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <style>
        .submitForm1 input[type="button"]:hover{
            background-color: rgb(211, 201, 65);
        }
    </style>
<script> 
$(document).ready(function(){
  $('.submitForm1').click(function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
    setTimeout(function(){
        window.location.href="index_3b.html";
    },1000);
  });
});
</script> 
</head>
<body onload="scroll_headers()">

    <!-- header page -->
        <div class="header" id="side_L" style="z-index:11;">
            <div class="title">
                <span>ASSIGNMENT SHEET 3</span> 
            </div>
        </div>
        <div class="header" id="side_R" style="z-index:11;">
            <div class="title">
                <span>ASSIGNMENT SHEET 3</span> 
            </div>
        </div>
        <div class="header" id="side_L1" style="z-index:11;">
            <div class="title">
                <span>ASSIGNMENT SHEET 3</span> 
            </div>
        </div>
        <div class="header" id="side_R1" style="z-index:11;">
            <div class="title">
                <span>ASSIGNMENT SHEET 3</span> 
            </div>
        </div>






    <!-- main content -->
    <div class="main_body">
        <section>
            <div class="submitForm1" style="z-index: 1000;position: absolute;bottom: 3vh;left: 50%;width:30vw;height:8vh;font-size:2vh; transform:translateX(-50%);" >
                <input type="button" value="Back">
            </div>
            <div class="card" style="min-height: 70vh;">
                <div class="result" style="overflow: scroll;">

                <?php
                    
                    error_reporting(E_ERROR | E_PARSE);

                    $file1=fopen($_REQUEST["file8_1"],"r");
                    $len = filesize($_REQUEST["file8_1"]);
                    


                    $str = file_get_contents($_REQUEST["file8_1"]);
                    $str = trim(preg_replace('!\s+!',' ',$str));
                    $str = trim($str);

                    $a = array();
                    $index=0;
                    $a[0]="";

                    for($i=0;$i<=strlen($str);$i++){
                        if($str[$i]!=',')
                            $a[$index].=$str[$i];
                        if($str[$i]==',' || $i==strlen($str)-1){
                            if($i==strlen($str)-1 && $str[$i+1]==' ')     $i+=1;
                            $a[$index] = trim($a[$index]);
                            if($index>=1)
                                $a[$index] = floatval($a[$index]);
                            $index++;
                            $a[$index]="";
                        }
                    }


                    $dearness_allowance = 0.03*$a[1];
                    $house_rental = 0.15*$a[1];
                    $prov_fund = 0.12*$a[1];
                    $gross = $a[1] + $dearness_allowance + $house_rental + $prov_fund;
                    $net_sal = $gross-$prov_fund;

                    
                    echo "Payslip for <b>".$a[0]."</b>:<br>Basic Salary = ".$a[1];
                    echo "<br>Dearness Allowance = ".$dearness_allowance;
                    echo "<br>House Rental Allowance = ".$house_rental;
                    echo "<br>Provident Fund = ".$prov_fund;
                    echo "<br>Gross Salary = ".$gross;
                    echo "<br>Net Salary = ".$net_sal;

                    echo "<br><br>The data has been copied <br>to : <b>\"".$_REQUEST["file8_2"]."\"</b>";
                    file_put_contents($_REQUEST["file8_2"],$a[0].",".$a[1].",".$dearness_allowance.",".$house_rental.",".$prov_fund.",".$gross.",".$net_sal."\n",FILE_APPEND | LOCK_EX);
                    
                
                ?>



                </div>
            </div>
        </section>
    </div>





    <script>
        let LSide = document.getElementById('side_L');
        let RSide = document.getElementById('side_R');
        let LSide1 = document.getElementById('side_L1');
        let RSide1 = document.getElementById('side_R1');
        window.addEventListener('scroll',function(){
            LSide1.style.left = -window.pageYOffset*1.5+'px';
            RSide1.style.left = -window.pageYOffset*1.5+'px';
            LSide.style.left = -window.pageYOffset*1.5+'px';
            RSide.style.left = window.pageYOffset*1.5+'px';
        })
        
        
        function scroll_headers(){
            var x=setTimeout(abc,100);
            function abc(){
    window.scrollTo({
        top:window.innerHeight,
        behavior:"smooth"
    })
        }
        }
         
    </script>
</body>
</html>