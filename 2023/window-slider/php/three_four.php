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
        window.location.href="index.html";
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
            <div class="card" style="min-height: 70vh;max-width: 70vw;">
            <div class="result" style="overflow: scroll;">

<?php
    error_reporting(E_ERROR | E_PARSE);
    
    $val=$_REQUEST["four_select"];

    $num = $_REQUEST["three_4number"];

    $legend=0;

    $r = "";
    $s = "";
    if(strcmp($val[0],"first")==0){
        $r="file4_2";
        $s="file4_3";
    }
    else{
        $s="file4_2";
        $r="file4_3";
    }

    $str = file_get_contents($_REQUEST["file4_1"]);
    echo "<b>\"".$_REQUEST["file4_1"]."\"</b> contains : <br>".$str."<br><br>----------------------------------";

    if(strcmp($val[1],"line")==0 && $legend==0){

        if(strcmp(substr($str,strlen($str)-1),".")!=0)
            $str.=".";

        $val = count_chars($str,1);

        $j=0;
        for($i=0;$i<$num;$i++){           
            $a = strpos($str,'.',$j);
            if($a==FALSE){
                echo "<br>Line size entered exceeds total lines in input file.";
                $legend=1;
                break;
            }
            $j=$a+1;
        }
if($legend==0){
        file_put_contents($_REQUEST[$r],"\n".substr($str,0,$j),FILE_APPEND | LOCK_EX);
        file_put_contents($_REQUEST[$s],"\n".substr($str,$j),FILE_APPEND | LOCK_EX);

        echo "<br><br><b>\"".$_REQUEST[$r]."\"</b> contains : <br>".substr($str,0,$j);
        echo "<br><br><b>\"".$_REQUEST[$s]."\"</b> contains : <br>".substr($str,$j);
}
    }

    else{





        if(strcmp($val[1],"char")==0 && $legend==0){

            $count=0;
            $other=0;
            if($num>strlen($str)){
                echo "<br>Total characters entered exceeds total characters present in input file.";
                $legend=1;
            }
            if($legend==0){
            for($i=0;$i<strlen($str);$i++){
                
                if($count<$num){
                    if($count==0){
                        echo "<br><br><b>\"".$_REQUEST[$r]."\"</b> contains : <br>";
                        file_put_contents($_REQUEST[$r],"\n",FILE_APPEND | LOCK_EX);
                        file_put_contents($_REQUEST[$s],"\n",FILE_APPEND | LOCK_EX);
                    }
                    echo $str[$i];
                    file_put_contents($_REQUEST[$r],$str[$i],FILE_APPEND | LOCK_EX);
                    ++$count;
                }
                else{
                    if($other==0){
                        echo "<br><br><b>\"".$_REQUEST[$s]."\"</b> contains : <br>";
                        file_put_contents($_REQUEST[$s],"\n",FILE_APPEND | LOCK_EX);
                        file_put_contents($_REQUEST[$s],"\n",FILE_APPEND | LOCK_EX);
                    }
                    echo $str[$i];
                    file_put_contents($_REQUEST[$s],$str[$i],FILE_APPEND | LOCK_EX);
                    ++$other;
                }
                
            }

}
        }
        else{

            if($num>100){
                echo "<br>Percentage must be less than equal to 100.";
                $legend=1;
            }

            if($legend==0){


            $len = strlen($str);
            $partition = intval(($num/100)*$len);
            if($partition==0)
                $partition=1;
            
            $count=0;
            $other=0;

            for($i=0;$i<strlen($str);$i++){
                if($partition!=0){
                    if($count==0){
                        echo "<br><br><b>\"".$_REQUEST[$r]."\"</b> contains : <br>";
                        file_put_contents($_REQUEST[$r],"\n",FILE_APPEND | LOCK_EX);
                        $count=1;
                    }
                    echo $str[$i];
                    file_put_contents($_REQUEST[$r],$str[$i],FILE_APPEND | LOCK_EX);
                    --$partition;
                }
                else{
                    if($other==0){
                        echo "<br><br><b>\"".$_REQUEST[$s]."\"</b> contains : <br>";
                        file_put_contents($_REQUEST[$s],"\n",FILE_APPEND | LOCK_EX);
                        $other=1;
                    }
                    echo $str[$i];
                    file_put_contents($_REQUEST[$s],$str[$i],FILE_APPEND | LOCK_EX);
                }
            }


}
        }


    }
    
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