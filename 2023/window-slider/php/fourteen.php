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
    });
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
                <div class="result" style="overflow: scroll; padding:5vw 2vw;">

                <?php
                    error_reporting(E_ERROR | E_PARSE);

                    $file1=fopen($_REQUEST["file14_1"],"r");
                    $len = filesize($_REQUEST["file14_1"]);

                    $str = file_get_contents($_REQUEST["file14_1"]);
                    $str = trim(preg_replace('!\s+!',' ',$str));
                    $str = trim($str);
                    
                    $a = array();
                    $index=0;
                    $a[0]="";
                    $counter=0;

                    for($i=0;$i<=strlen($str);$i++){
                        if($str[$i]=='"' || $str[$i]=='\''){
                            if($counter==0)
                                $counter=1;
                            else    $counter=0;
                        }
                        if($str[$i]!=',')
                            $a[$index].=$str[$i];
                        if($str[$i]==',' && $counter==1){
                            $a[$index].=$str[$i];
                            continue;
                        }
                        if($str[$i]==',' || $i==strlen($str)-1){
                            if($i==strlen($str)-1 && $str[$i+1]==' ')     $i+=1;
                            $a[$index] = trim($a[$index]);
                            if($index>=2)
                                $a[$index] = floatval($a[$index]);
                            $index++;
                            $a[$index]="";
                        }
                    }

                    /* function toNum($s){
                        echo gettype($s);
                        $num=0;
                        $d=0;
                        for($i=0;$i<=strlen($s)-1;$i++){
                            $d=ord($s[$i])-48;
                            echo $d."<br>";
                            if($d==0)   $num=$num*100;
                            else    $num=$num*10+$d;
                        }
                        return $num;
                    } */

                    $sum=0.0;
                    $avg=0.0;
                    for($i=2;$i<=count($a)-2;$i++)
                        $sum+=$a[$i];
                    $avg = $sum/(count($a)-3);

                    $grade='1';
                    if($avg<90)
                        $grade='2';
                    if($avg<70)
                        $grade='3';
                    if($avg<60)
                        $grade='3';
                    if($avg<40)
                        $grade='F';
                    


                        echo "Roll = ".$a[0];
                        echo "<br>Name = ".$a[1]."<br>";
                        for($i=2;$i<=count($a)-2;$i++)
                            echo "<br>Marks".($i-1)." = ".$a[$i];
                    echo "<br><br>Total = ".$sum;
                    echo "<br>Average = ".$avg;
                    echo "<br>Grade = ".$grade;

                    echo "<br><br>The data has been copied <br>to : <b>\"".$_REQUEST["file14_2"]."\"</b>";
                    file_put_contents($_REQUEST["file14_2"],"Roll = ".$a[0]."\nName = ".$a[1]."\n",FILE_APPEND | LOCK_EX);

                    for($i=2;$i<=count($a)-2;$i++)
                        file_put_contents($_REQUEST["file14_2"],"\nMarks".($i-1)." = ".$a[$i],FILE_APPEND | LOCK_EX);

                    file_put_contents($_REQUEST["file14_2"],"\nTotal = ".$sum."\nAverage = ".$avg."\nGrade = ".$grade."\n\n--------------------------------\n\n",FILE_APPEND | LOCK_EX);
                
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